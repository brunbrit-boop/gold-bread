"use client";

import React from "react";
import { ArrowRight, Sparkles, Award, ShieldCheck, Flame } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[92vh] md:min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#2E1812] pt-24 sm:pt-28 pb-6 sm:pb-8"
      suppressHydrationWarning
    >
      
      {/* IMAGEM DE FUNDO FULL WIDTH COM ACELERAÇÃO POR HARDWARE (GPU) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        <div 
          className="absolute inset-0 hero-ken-burns"
          suppressHydrationWarning
        >
          <Image
            src="/imagens/pao-libanes-artesanal.jpg"
            alt="Pão Libanês Gold Bread"
            fill
            priority
            loading="eager"
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* OVERLAY ESCURO PARA CONTRASTE - FORA DA ANIMAÇÃO */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E1812]/95 via-[#2E1812]/70 to-transparent" suppressHydrationWarning />
        <div className="absolute inset-0 bg-black/20" suppressHydrationWarning />
      </div>

      {/* CONTEÚDO PRINCIPAL (TÍTULO, TEXTO E BOTÕES) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-3xl">
          
          {/* BADGE DE AUTENTICIDADE */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FAF6F0]/10 backdrop-blur-md border border-[#F2A900]/40 text-[#FAF6F0] text-xs font-semibold tracking-wide shadow-sm mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F2A900] fill-[#F2A900]" />
            <span>Receita Tradicional &amp; Fermentação Natural</span>
          </div>

          {/* TÍTULO PRINCIPAL COM ALTO CONTRASTE */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-serif mb-4 sm:mb-6 drop-shadow-lg">
            A autêntica tradição do <br className="hidden sm:block" />
            <span className="text-[#F2A900]">
              Pão Libanês
            </span>{" "}
            na sua mesa.
          </h1>

          {/* TEXTO DE APOIO */}
          <p className="text-base sm:text-xl text-[#EAD9CA] font-light max-w-xl leading-relaxed mb-6 sm:mb-8 drop-shadow-md">
            Massa ultrafina, assada em alta temperatura no calor de pedra, revelando a leveza, 
            o bolsão perfeito e o aroma acolhedor da verdadeira panificação do Oriente Médio.
          </p>

          {/* BOTÕES DE AÇÃO COM FLUXO RESPONSIVO LIMPO */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#produto"
              className="btn-gold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,169,0,0.4)] hover:shadow-[0_0_30px_rgba(242,169,0,0.6)] w-full sm:w-auto text-[#3E2723] transition-all"
            >
              <span>Conhecer Nosso Pão</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#fabricacao"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              <span>Processo de Fabricação</span>
            </a>
          </div>

        </div>
      </div>

      {/* INFORMAÇÕES EXTRAS NA BASE DO HERO (SEM ABSOLUTE PARA NUNCA SOBREPOR) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 items-center border-t border-white/15 pt-5 sm:pt-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2A900]" />
            </div>
            <div>
              <p className="text-[#F2A900] font-black font-serif text-base sm:text-lg leading-tight">350°C</p>
              <p className="text-[#EAD9CA] text-[11px] sm:text-xs">Forno de Pedra</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2A900]" />
            </div>
            <div>
              <p className="text-[#F2A900] font-black font-serif text-base sm:text-lg leading-tight">100%</p>
              <p className="text-[#EAD9CA] text-[11px] sm:text-xs">Ingredientes Puros</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2A900]" />
            </div>
            <div>
              <p className="text-[#F2A900] font-black font-serif text-base sm:text-lg leading-tight">Diário</p>
              <p className="text-[#EAD9CA] text-[11px] sm:text-xs">Frescor Garantido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
