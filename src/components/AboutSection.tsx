"use client";

import React from "react";
import { HeartHandshake, History, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden border-t border-[#EAD9CA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C8] text-[#3E2723] text-xs font-bold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5 text-[#F2A900]" />
            <span>Nossa Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2723] tracking-tight font-serif">
            Quem somos nós
          </h2>
          <div className="w-20 h-1 bg-[#F2A900] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-lg text-[#5D4037] leading-relaxed">
            Uma história de amor pela panificação libanesa, unindo a sabedoria das gerações 
            ao compromisso inegociável de entregar o pão mais fresco e saboroso do mercado.
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL: HISTÓRIA + COMPROMISSO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: A HISTÓRIA E TRADIÇÃO */}
          <div className="lg:col-span-7 space-y-6 text-[#3E2723]">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAD9CA] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF6F0] rounded-bl-full -z-0 opacity-80" />
              
              <div className="relative z-10 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2723] font-serif">
                  A História da <span className="text-[#F2A900]">Gold Bread</span>
                </h3>
                
                <p className="text-base sm:text-lg text-[#5D4037] leading-relaxed">
                  A <strong>Gold Bread</strong> nasceu do desejo autêntico de preservar a memória afetiva e 
                  o sabor inconfundível do tradicional pão do Oriente Médio. O que começou em uma pequena 
                  cozinha artesanal, respeitando receitas consagradas por antepassados, transformou-se 
                  em uma indústria de excelência gastronômica.
                </p>

                <p className="text-base sm:text-lg text-[#5D4037] leading-relaxed">
                  Nossa essência permanece a mesma de quando tiramos a primeira fornada: tratar a farinha, 
                  a água e o calor com respeito absoluto. O <strong>Pão Libanês Gold Bread</strong> não é 
                  apenas um alimento, é a base que abraça conversas, banquetes familiares e os melhores 
                  pratos da gastronomia árabe e contemporânea.
                </p>

                {/* DESTAQUE DE COMPROMISSO */}
                <div className="p-5 rounded-2xl bg-[#FAF6F0] border-l-4 border-[#F2A900] mt-4">
                  <p className="text-sm sm:text-base font-semibold text-[#3E2723] italic">
                    &ldquo;Nosso compromisso não é apenas produzir pães, mas garantir que cada cliente sinta a leveza, 
                    a elasticidade perfeita e o aroma do forno aceso em cada refeição.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: CARDS DE VALORES E TRADIÇÃO */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* CARD 1: TRADIÇÃO VIVA */}
            <div className="card-artisanal p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4D9] text-[#F2A900] flex items-center justify-center shrink-0 border border-[#F2A900]/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#3E2723]">Tradição e Maestria</h4>
                <p className="text-sm text-[#5D4037] mt-1 leading-relaxed">
                  Receita autêntica libanesa com tempo preciso de fermentação para garantir a formação do bolsão de ar ideal.
                </p>
              </div>
            </div>

            {/* CARD 2: COMPROMISSO COM A QUALIDADE */}
            <div className="card-artisanal p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E3D5C8] text-[#3E2723] flex items-center justify-center shrink-0 border border-[#D4A373]/40">
                <CheckCircle2 className="w-6 h-6 text-[#F2A900]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#3E2723]">Compromisso com a Qualidade</h4>
                <p className="text-sm text-[#5D4037] mt-1 leading-relaxed">
                  Farinhas nobres e selecionadas, sem excesso de conservantes ou aditivos desnecessários. Pureza que se traduz em sabor.
                </p>
              </div>
            </div>

            {/* CARD 3: PARCERIA E CONFIANÇA */}
            <div className="card-artisanal p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4D9] text-[#F2A900] flex items-center justify-center shrink-0 border border-[#F2A900]/30">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#3E2723]">Respeito ao Cliente e Parceiro</h4>
                <p className="text-sm text-[#5D4037] mt-1 leading-relaxed">
                  Fornecimento contínuo e confiável para empórios, restaurantes, lanchonetes e lares em toda a região.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
