"use client";

import React from "react";
import { ArrowRight, Sparkles, Award, ShieldCheck, Flame } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF6F0]">
      {/* Detalhes de iluminação suave em tons de trigo e dourado */}
      <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 bg-[#F2A900]/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A373]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA: TÍTULO, IDENTIDADE E AÇÃO */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* BADGE DE AUTENTICIDADE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3D5C8]/70 border border-[#D4A373]/40 text-[#3E2723] text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F2A900] fill-[#F2A900]" />
              <span>Receita Tradicional &amp; Fermentação Natural</span>
            </div>

            {/* TÍTULO PRINCIPAL COM ALTO CONTRASTE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3E2723] tracking-tight leading-[1.15] font-serif">
              A autêntica tradição do <br />
              <span className="text-[#F2A900] underline decoration-[#D4A373]/40 decoration-wavy decoration-2">
                Pão Libanês
              </span>{" "}
              na sua mesa.
            </h1>

            {/* TEXTO DE APOIO */}
            <p className="text-lg sm:text-xl text-[#5D4037] font-normal max-w-xl leading-relaxed">
              Massa ultrafina, assada em alta temperatura no calor de pedra, revelando a leveza, 
              o bolsão perfeito e o aroma acolhedor da verdadeira panificação do Oriente Médio.
            </p>

            {/* BOTÕES DE AÇÃO */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#produto"
                className="btn-gold px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
              >
                <span>Conhecer Nosso Pão</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#fabricacao"
                className="btn-outline-gold px-7 py-3.5 rounded-full text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Processo de Fabricação</span>
              </a>
            </div>

            {/* PILARES DE CONFIANÇA RÁPIDOS */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAD9CA] w-full max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#F2A900]">
                  <Flame className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black text-[#3E2723] font-serif">350°C</span>
                </div>
                <span className="text-xs text-[#5D4037] mt-0.5 font-medium">Forno de Pedra</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#F2A900]">
                  <Award className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black text-[#3E2723] font-serif">100%</span>
                </div>
                <span className="text-xs text-[#5D4037] mt-0.5 font-medium">Ingredientes Puros</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#F2A900]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black text-[#3E2723] font-serif">Diário</span>
                </div>
                <span className="text-xs text-[#5D4037] mt-0.5 font-medium">Frescor Garantido</span>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: IMAGEM HERO EM ESPAÇO NOBRE */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura artesanal de destaque */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF6F0] ring-1 ring-[#D4A373]/30 aspect-[4/3] bg-[#E3D5C8]">
                <Image
                  src="/imagens/pao-libanes-artesanal.jpg"
                  alt="Pilha de Pão Libanês Gold Bread recém assado com zátar e azeite"
                  fill
                  priority
                  loading="eager"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                
                {/* Selo sobreposto artesanal */}
                <div className="absolute top-4 right-4 bg-[#3E2723]/90 backdrop-blur-md text-[#FAF6F0] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#F2A900]/50 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#F2A900] animate-ping" />
                  <span>Fresco Todos os Dias</span>
                </div>

                {/* Legenda de base */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/50 to-transparent p-5 text-[#FAF6F0]">
                  <p className="text-sm font-semibold">Gold Bread — Pão Libanês</p>
                  <p className="text-xs text-[#E3D5C8] font-light">Leveza inigualável e textura macia para suas melhores receitas.</p>
                </div>
              </div>

              {/* Card flutuante de qualidade */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#EAD9CA] items-center gap-3.5 z-20">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4D9] border border-[#F2A900]/40 flex items-center justify-center shrink-0">
                  <span className="text-2xl">🫓</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3E2723]">Bolsão de Ar Perfeito</h4>
                  <p className="text-xs text-[#5D4037]">Ideal para rechear Beirutes e Wraps</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
