"use client";

import React, { useRef, useState, useEffect } from "react";
import AnimatedProcessCarousel from "./AnimatedProcessCarousel";
import { Factory, Sparkles, ShieldCheck, Truck, Flame, Gauge, Check, Cpu, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function ManufacturingSection() {
  const allProcessSteps = [
    {
      step: "01",
      title: "Dosagem & Mistura Industrial",
      badge: "Precisão & Pureza",
      desc: "Pesagem computadorizada e masseiras industriais em aço inoxidável com controle térmico rigoroso da água e da farinha nobre.",
      sub: "Entrada de Matéria-Prima",
    },
    {
      step: "02",
      title: "Fermentação Biológica Natural",
      badge: "A Alma Artesanal",
      desc: "Câmaras climatizadas que respeitam o tempo natural da massa, desenvolvendo o sabor característico, aroma suave e fácil digestão.",
      sub: "Repouso & Aromas",
    },
    {
      step: "03",
      title: "Laminação Contínua Milimétrica",
      badge: "Padrão & Elasticidade",
      desc: "Esteiras com cilindros automáticos de altíssima precisão que garantem a espessura homogênea de cada disco sem quebrar a rede de glúten.",
      sub: "Moldagem de Precisão",
    },
    {
      step: "04",
      title: "Forno Túnel a 350°C & Choque Térmico",
      badge: "O Bolsão Perfeito",
      desc: "Assamento relâmpago que gera o vapor interno instantâneo, inflando o pão e criando as duas camadas sem ressecar a massa.",
      sub: "Alta Temperatura",
    },
    {
      step: "05",
      title: "Resfriamento em Esteira Gradual",
      badge: "Retenção de Maciez",
      desc: "Transição suave de temperatura em esteira higienizada com ar filtrado para conservar a elasticidade e umidade interna ideal.",
      sub: "Controle Térmico",
    },
    {
      step: "06",
      title: "Inspeção Óptica & Controle Digital",
      badge: "Garantia de Qualidade",
      desc: "Sensores verificam diâmetro milimétrico, coloração dourada homogênea e integridade de cada disco antes da embalagem.",
      sub: "Padrão Rigoroso",
    },
    {
      step: "07",
      title: "Empacotamento Hermético Automatizado",
      badge: "Zero Contato Manual",
      desc: "Selamento em atmosfera protegida que mantém a textura fresca e o aroma de recém-assado por muito mais tempo na gôndola.",
      sub: "Segurança BPF",
    },
    {
      step: "08",
      title: "Expedição Climatizada & Entrega Diária",
      badge: "Logística Ágil",
      desc: "Distribuição dedicada para abastecer supermercados, empórios e redes gastronômicas com pontualidade e frescor constante.",
      sub: "Distribuição Diária",
    },
  ];

  const qualityPillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#F2A900]" />,
      title: "Engenharia Industrial de Alta Escala",
      desc: "Linha contínua totalmente automatizada, capaz de produzir milhares de unidades por hora com uniformidade absoluta de peso, diâmetro e formato.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F2A900]" />,
      title: "Higiene Nível Farmacêutico (BPF)",
      desc: "Zero contato manual pós-forno, salas com filtragem de ar e esterilização contínua. Máxima segurança alimentar para o seu estabelecimento.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#F2A900]" />,
      title: "Capacidade Logística & Entrega Pontual",
      desc: "Frota dedicada e distribuição ágil para abastecer empórios, restaurantes, redes de supermercados e atacadistas diariamente com pão fresco.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Centraliza o Card 01 no centro da tela ao carregar
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const centerCard = el.querySelector('#process-card-center-01') as HTMLElement;
      if (centerCard) {
        el.scrollLeft = centerCard.offsetLeft - (el.clientWidth / 2) + (centerCard.clientWidth / 2);
      }
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  // Movimento contínuo e suave da direita para a esquerda
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && el) {
        // Desliza continuamente da direita para a esquerda (~28px por segundo)
        el.scrollLeft += (28 * delta) / 1000;

        // Loop contínuo infinito sem salto
        const firstBlock = el.querySelector('.process-block-0') as HTMLElement;
        if (firstBlock) {
          const blockSize = firstBlock.offsetWidth;
          if (el.scrollLeft >= blockSize * 2) {
            el.scrollLeft -= blockSize;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += blockSize;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Controle pelas setas (avançar e voltar)
  const getCardStep = () => {
    if (!scrollRef.current) return 394;
    const firstCard = scrollRef.current.querySelector('.process-card-item') as HTMLElement;
    if (firstCard) {
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight) || 24;
      return firstCard.offsetWidth + marginRight;
    }
    return 394;
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    const step = getCardStep();
    scrollRef.current.scrollBy({ left: step, behavior: 'smooth' });
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    const step = getCardStep();
    scrollRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section
      id="fabricacao"
      className="py-20 md:py-28 bg-[#E3D5C8]/40 relative overflow-hidden border-t border-b border-[#D4A373]/30"
    >
      {/* Luz ambiente em tom trigo */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 bg-[#D4A373]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] text-[#3E2723] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4A373]/50">
            <Factory className="w-3.5 h-3.5 text-[#F2A900]" />
            <span>Processos Industriais de Alta Tecnologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2723] tracking-tight font-serif">
            Fabricação
          </h2>
          <div className="w-20 h-1 bg-[#F2A900] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-lg text-[#5D4037] leading-relaxed">
            A união perfeita entre <strong>engenharia de ponta em escala industrial</strong> e 
            o <strong>cuidado artesanal</strong> que preserva o sabor, a maciez e o aroma da verdadeira receita libanesa.
          </p>
        </div>

        {/* CARROSSEL ANIMADO COM FRAMES DA PRODUÇÃO + EXPLICAÇÃO INDUSTRIAL/ARTESANAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* LADO ESQUERDO: CARROSSEL ANIMADO INTERATIVO DOS FRAMES REAIS */}
          <div className="lg:col-span-7">
            <AnimatedProcessCarousel />
            <p className="text-xs text-[#5D4037] mt-3 italic text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-[#F2A900]" />
              <span>Registro real da nossa linha de produção contínua em operação.</span>
            </p>
          </div>

          {/* LADO DIREITO: DESCRIÇÃO APROFUNDADA - INDUSTRIAL COM ALMA ARTESANAL */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FFF4D9] text-[#B57D00] text-xs font-bold border border-[#F2A900]/30">
              <Heart className="w-3.5 h-3.5 fill-[#F2A900]" />
              <span>O Segredo: Alta Tecnologia com Toque Artesanal</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2723] font-serif leading-snug">
              Processo 100% industrial, <br />
              <span className="text-[#F2A900]">com o sabor autêntico do feito à mão</span>
            </h3>

            <p className="text-base text-[#5D4037] leading-relaxed">
              Na fábrica da <strong>Gold Bread</strong>, cada etapa do processo foi projetada para 
              unir o melhor dos dois mundos: a <strong>robustez de uma linha de produção industrial contínua</strong> e 
              o respeito incondicional à <strong>tradição da panificação do Oriente Médio</strong>.
            </p>

            <p className="text-base text-[#5D4037] leading-relaxed">
              Não utilizamos atalhos químicos ou aceleradores agressivos que alteram a textura do pão. 
              Nossas esteiras automatizadas, cilindros de laminação milimétrica e fornos contínuos de altíssima caloria (350°C) 
              reproduzem exatamente o choque térmico das pedras vulcânicas de Beirute, entregando milhares 
              de pães por dia com aquela casca macia, elástica e com o inesquecível aroma acolhedor da fornada.
            </p>

            {/* DIFERENCIAIS DA LINHA INDUSTRIAL */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3 text-sm text-[#3E2723] font-medium bg-white/70 p-3 rounded-xl border border-[#EAD9CA]">
                <div className="w-5 h-5 rounded-full bg-[#F2A900] text-[#3E2723] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Escala industrial segura:</strong> produção diária constante sem oscilação de tamanho ou peso.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#3E2723] font-medium bg-white/70 p-3 rounded-xl border border-[#EAD9CA]">
                <div className="w-5 h-5 rounded-full bg-[#F2A900] text-[#3E2723] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Textura &amp; maleabilidade artesanal:</strong> pão que dobra e enrola com recheios quentes sem rasgar.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#3E2723] font-medium bg-white/70 p-3 rounded-xl border border-[#EAD9CA]">
                <div className="w-5 h-5 rounded-full bg-[#F2A900] text-[#3E2723] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Embalamento hermético inteligente:</strong> retém a maciez por muito mais tempo sem conservantes pesados.</span>
              </div>
            </div>

          </div>

        </div>

        {/* A JORNADA DA MASSA: DOIS CARROSSÉIS CONTÍNUOS E INFINITOS */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0] text-[#B57D00] text-xs font-bold border border-[#EAD9CA] mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-[#F2A900]" />
              <span>Linha Contínua &amp; Monitoramento em Tempo Real</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-[#3E2723] font-serif">
              A Jornada da Massa: Da Dosagem ao Empacotamento
            </h4>
            <p className="text-sm text-[#5D4037] mt-2 leading-relaxed">
              Como cada ingrediente é transformado no legítimo pão libanês através de controle eletrônico.
            </p>
          </div>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            {/* SETA DE CONTROLE ESQUERDA */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Voltar etapa do processo"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#3E2723] shadow-xl border border-[#EAD9CA] hover:bg-[#F2A900] hover:border-[#F2A900] hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 text-[#3E2723] group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* SETA DE CONTROLE DIREITA */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Avançar etapa do processo"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#3E2723] shadow-xl border border-[#EAD9CA] hover:bg-[#F2A900] hover:border-[#F2A900] hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 text-[#3E2723] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* CONTAINER COM MÁSCARA E SCROLL INTERATIVO */}
            <div className="relative w-full overflow-hidden mask-edge-fade py-2">
              <div
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => {
                  if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                  resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
                }}
                className="flex overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden select-none py-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[0, 1, 2, 3].map((blockIdx) => (
                  <div key={`block-${blockIdx}`} className={`flex shrink-0 process-block-${blockIdx}`}>
                    {allProcessSteps.map((step, idx) => (
                      <div
                        key={`step-b${blockIdx}-${idx}`}
                        id={blockIdx === 1 && idx === 0 ? "process-card-center-01" : undefined}
                        className="process-card-item bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-[#EAD9CA] shadow-sm hover:border-[#F2A900] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group select-none text-left"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-2xl sm:text-3xl font-black text-[#F2A900] font-serif group-hover:scale-105 transition-transform">
                              {step.step}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FAF6F0] text-[#8D6E63] px-2.5 py-1 rounded-full border border-[#EAD9CA] group-hover:border-[#F2A900]/40 transition-colors">
                              {step.badge}
                            </span>
                          </div>
                          <h5 className="text-base font-bold text-[#3E2723] mb-2 font-serif group-hover:text-[#B57D00] transition-colors leading-snug">
                            {step.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                        <div className="pt-3 mt-4 border-t border-[#FAF6F0] flex items-center justify-between text-[11px] font-medium text-[#8D6E63]">
                          <span className="flex items-center gap-1 text-[#B57D00]">
                            <Sparkles className="w-3 h-3" />
                            {step.sub}
                          </span>
                          <span className="text-[10px] text-[#A1887F] opacity-75">Controle Automático</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 PILARES: ENGENHARIA, HIGIENE E CAPACIDADE DE ENTREGA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#EAD9CA] shadow-sm flex flex-col justify-between hover:shadow-lg transition-all border-t-4 hover:border-t-[#F2A900]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4D9] flex items-center justify-center mb-5 border border-[#F2A900]/40">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-[#3E2723] mb-2 font-serif">
                  {pillar.title}
                </h4>
                <p className="text-sm text-[#5D4037] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
