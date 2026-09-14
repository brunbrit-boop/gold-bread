"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

const START_FRAME = 10;
const END_FRAME = 300;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1; // 291 frames
const FPS = 22;

function padFrame(num: number): string {
  return num.toString().padStart(3, "0");
}

export default function AnimatedProcessCarousel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  
  const [currentFrameIdx, setCurrentFrameIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [initialBuffered, setInitialBuffered] = useState<boolean>(false);

  const reqIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const frameIdxRef = useRef<number>(0);
  frameIdxRef.current = currentFrameIdx;

  // Informações apenas das Etapas 1, 2, 3 e 4
  const getStageInfo = useCallback((idx: number) => {
    const frameNum = START_FRAME + idx;
    if (frameNum <= 75) {
      return {
        stageBadge: "Etapa 1",
        title: "Alimentação & Dosagem Automatizada",
        desc: "Ingredientes nobres dosados com precisão computadorizada em masseiras industriais.",
      };
    } else if (frameNum <= 150) {
      return {
        stageBadge: "Etapa 2",
        title: "Laminação & Moldagem de Alta Precisão",
        desc: "Cilindros automáticos calibrando a espessura milimétrica sem perder a maleabilidade artesanal.",
      };
    } else if (frameNum <= 225) {
      return {
        stageBadge: "Etapa 3",
        title: "Forno Túnel a 350°C & Choque Térmico",
        desc: "Assamento ultrarrápido que gera o vapor interno e cria o bolsão tradicional do pão libanês.",
      };
    } else {
      return {
        stageBadge: "Etapa 4",
        title: "Resfriamento & Embalamento Hermético",
        desc: "Linha contínua automatizada que sela o frescor e a maciez para entrega diária.",
      };
    }
  }, []);

  // Pré-carregamento progressivo em background
  useEffect(() => {
    let active = true;

    const loadSingleFrame = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        const frameNum = START_FRAME + i;
        const img = new Image();
        img.src = `/process/ezgif-frame-${padFrame(frameNum)}.png`;
        img.onload = () => {
          if (!active) return;
          imagesRef.current[i] = img;
          if (i >= 20) {
            setInitialBuffered(true);
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const loadImages = async () => {
      // Carrega os primeiros 25 frames para início imediato
      const initial = [];
      for (let i = 0; i < Math.min(25, TOTAL_FRAMES); i++) {
        initial.push(loadSingleFrame(i));
      }
      await Promise.all(initial);

      // Carrega os demais frames em segundo plano
      const CHUNK = 10;
      for (let i = 25; i < TOTAL_FRAMES; i += CHUNK) {
        if (!active) break;
        const chunk = [];
        for (let j = i; j < Math.min(i + CHUNK, TOTAL_FRAMES); j++) {
          chunk.push(loadSingleFrame(j));
        }
        await Promise.all(chunk);
      }
    };

    loadImages();

    return () => {
      active = false;
    };
  }, []);

  // Animação contínua no Canvas
  useEffect(() => {
    const render = (time: number) => {
      const interval = 1000 / FPS;

      if (isPlaying && initialBuffered) {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const delta = time - lastTimeRef.current;

        if (delta >= interval) {
          lastTimeRef.current = time - (delta % interval);
          const nextIdx = (frameIdxRef.current + 1) % TOTAL_FRAMES;
          setCurrentFrameIdx(nextIdx);
        }
      }

      const canvas = canvasRef.current;
      if (canvas) {
        let img = imagesRef.current[frameIdxRef.current];
        if (!img || !img.complete) {
          for (let k = frameIdxRef.current; k >= 0; k--) {
            if (imagesRef.current[k] && imagesRef.current[k]!.complete) {
              img = imagesRef.current[k];
              break;
            }
          }
        }

        const ctx = canvas.getContext("2d");
        if (ctx && img && img.complete) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const rect = canvas.getBoundingClientRect();
          const targetW = Math.round(rect.width * dpr);
          const targetH = Math.round(rect.height * dpr);

          if (canvas.width !== targetW || canvas.height !== targetH) {
            canvas.width = targetW;
            canvas.height = targetH;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";

          const imgRatio = img.width / img.height;
          const canvasRatio = canvas.width / canvas.height;
          let drawW: number, drawH: number, offsetX: number, offsetY: number;

          if (canvasRatio > imgRatio) {
            drawW = canvas.width;
            drawH = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawH) / 2;
          } else {
            drawH = canvas.height;
            drawW = canvas.height * imgRatio;
            offsetX = (canvas.width - drawW) / 2;
            offsetY = 0;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        }
      }

      reqIdRef.current = requestAnimationFrame(render);
    };

    reqIdRef.current = requestAnimationFrame(render);
    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [isPlaying, initialBuffered]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFrameIdx(parseInt(e.target.value, 10));
  };
  const stepPrev = () => {
    setCurrentFrameIdx((prev) => (prev > 0 ? prev - 1 : TOTAL_FRAMES - 1));
  };
  const stepNext = () => {
    setCurrentFrameIdx((prev) => (prev < TOTAL_FRAMES - 1 ? prev + 1 : 0));
  };
  const resetToStart = () => {
    setCurrentFrameIdx(0);
  };

  const stage = getStageInfo(currentFrameIdx);

  return (
    <div className="w-full flex flex-col space-y-3">
      {/* QUADRO DO VÍDEO / FRAMES */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] bg-[#2E1812] group select-none">
        
        {/* Canvas de exibição dos frames */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block cursor-pointer"
          onClick={togglePlay}
          title={isPlaying ? "Pausar" : "Reproduzir"}
        />

        {/* LOADING INICIAL SUAVE */}
        {!initialBuffered && (
          <div className="absolute inset-0 bg-[#2E1812]/90 backdrop-blur-sm flex flex-col items-center justify-center text-white z-30 p-6 text-center">
            <div className="w-10 h-10 border-3 border-[#F2A900] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm font-semibold font-serif text-[#FAF6F0]">
              Carregando processo de fabricação...
            </p>
          </div>
        )}

        {/* APENAS O BALÃOZINHO DAS ETAPAS (ETAPA 1, 2, 3 E 4) */}
        <div className="absolute top-4 left-4 pointer-events-none z-20">
          <div className="bg-[#FAF6F0]/95 text-[#3E2723] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold backdrop-blur-md border border-[#EAD9CA] shadow-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2A900] animate-pulse" />
            <span className="text-[#B57D00] font-black">{stage.stageBadge}:</span>
            <span className="text-[#3E2723]">{stage.title}</span>
          </div>
        </div>


        {/* ÍCONE PLAY CENTRAL QUANDO PAUSADO */}
        {!isPlaying && initialBuffered && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[#F2A900] text-[#3E2723] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
              <Play className="w-6 h-6 fill-[#3E2723] ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* CONTROLE LIMPO E MINIMALISTA */}
      <div className="bg-white px-4 py-3 rounded-2xl border border-[#EAD9CA] shadow-sm flex items-center gap-3">
        
        {/* BOTÃO PLAY / PAUSE */}
        <button
          type="button"
          onClick={togglePlay}
          className="btn-gold p-2 rounded-xl text-[#3E2723] hover:scale-105 transition-transform flex items-center justify-center shrink-0"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* VOLTAR / AVANÇAR */}
        <button
          type="button"
          onClick={stepPrev}
          className="p-2 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0] hover:bg-[#FFF4D9] text-[#3E2723] transition-colors shrink-0"
          aria-label="Passo anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={stepNext}
          className="p-2 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0] hover:bg-[#FFF4D9] text-[#3E2723] transition-colors shrink-0"
          aria-label="Próximo passo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={resetToStart}
          className="p-2 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0] hover:bg-[#FFF4D9] text-[#3E2723] transition-colors shrink-0"
          aria-label="Reiniciar"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* LINHA DO TEMPO (SCRUBBER) LIMPA SEM TEXTOS TÉCNICOS */}
        <div className="flex-1 flex items-center">
          <input
            type="range"
            min={0}
            max={TOTAL_FRAMES - 1}
            value={currentFrameIdx}
            onChange={handleSeek}
            className="w-full h-2 bg-[#E3D5C8] rounded-lg appearance-none cursor-pointer accent-[#F2A900]"
          />
        </div>

      </div>
    </div>
  );
}
