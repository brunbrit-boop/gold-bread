"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function AnimatedProcessCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Informações apenas das Etapas 1, 2, 3 e 4
  const getStageInfo = useCallback((prog: number) => {
    if (prog <= 25) {
      return {
        stageBadge: "Etapa 1",
        title: "Alimentação & Dosagem Automatizada",
      };
    } else if (prog <= 50) {
      return {
        stageBadge: "Etapa 2",
        title: "Laminação & Moldagem de Alta Precisão",
      };
    } else if (prog <= 75) {
      return {
        stageBadge: "Etapa 3",
        title: "Forno Túnel a 350°C & Choque Térmico",
      };
    } else {
      return {
        stageBadge: "Etapa 4",
        title: "Resfriamento & Embalamento Hermético",
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onLoadedData = () => {
      setIsLoaded(true);
      video.play().catch(() => setIsPlaying(false));
    };
    
    // Fallback if video is already loaded from cache
    if (video.readyState >= 3) {
      onLoadedData();
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("ended", () => {
      setIsPlaying(false);
      video.currentTime = 0;
      setProgress(0);
    });

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (val / 100) * videoRef.current.duration;
      setProgress(val);
    }
  };

  const stepPrev = () => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 1);
    }
  };

  const stepNext = () => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 1);
    }
  };

  const resetToStart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (!isPlaying) {
        videoRef.current.play();
      }
    }
  };

  const stage = getStageInfo(progress);

  return (
    <div className="w-full flex flex-col space-y-3">
      {/* QUADRO DO VÍDEO / FRAMES */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] bg-[#2E1812] group select-none">
        
        <video
          ref={videoRef}
          src="/process/processo.mp4"
          playsInline
          muted
          loop={false}
          className="w-full h-full object-cover block cursor-pointer"
          onClick={togglePlay}
          title={isPlaying ? "Pausar" : "Reproduzir"}
        />

        {/* LOADING INICIAL SUAVE */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#2E1812]/90 backdrop-blur-sm flex flex-col items-center justify-center text-white z-30 p-6 text-center pointer-events-none">
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
        {!isPlaying && isLoaded && (
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
            max={100}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="w-full h-2 bg-[#E3D5C8] rounded-lg appearance-none cursor-pointer accent-[#F2A900]"
          />
        </div>

      </div>
    </div>
  );
}
