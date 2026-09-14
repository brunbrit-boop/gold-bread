"use client";

import React from "react";
import Image from "next/image";
import { UtensilsCrossed, Star, CheckCircle, Flame, Heart, Sparkles, Plus } from "lucide-react";

export default function ProductSection() {
  const differentials = [
    {
      title: "Massa Ultrafina & Resistente",
      desc: "Elasticidade perfeita: não esfarela nem quebra ao enrolar beirutes e shawarmas suculentos.",
    },
    {
      title: "Bolsão de Ar Impecável",
      desc: "Separação homogênea das duas camadas, permitindo rechear com máxima facilidade e elegância.",
    },
    {
      title: "100% Puro & Natural",
      desc: "Sem gordura hidrogenada, sem aditivos químicos nocivos e com ingredientes rigorosamente selecionados.",
    },
    {
      title: "Fermentação Prolongada",
      desc: "Garante leveza incomparável, aroma aconchegante e uma digestão suave para todas as horas.",
    },
  ];

  const consumptionSuggestions = [
    {
      title: "Beirute Tradicional & Gourmet",
      desc: "Fatias finas de rosbife ou filé mignon, queijo prato derretido, rodelas de tomate fresco e zátar no pão aquecido.",
      tag: "O Clássico",
    },
    {
      title: "Shawarma & Wraps Árabes",
      desc: "Carne ou frango marinado com especiarias orientais, pasta de alho (toum), alface crocante e molho de gergelim tahine.",
      tag: "Mais Pedido",
    },
    {
      title: "Mezze: Homus, Babaganoush & Coalhada",
      desc: "Rasgue pedaços quentinhos do pão e mergulhe em azeite de oliva extravirgem com pastas árabes tradicionais.",
      tag: "Petisco Nobre",
    },
    {
      title: "Torradas Douradas com Zátar",
      desc: "Corte o pão em triângulos, regue com azeite extravirgem e ervas aromáticas libanesas e asse até dourar.",
      tag: "Crocância Única",
    },
  ];

  return (
    <section
      id="produto"
      className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C8] text-[#3E2723] text-xs font-bold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#F2A900]" />
            <span>Nosso Destaque</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2723] tracking-tight font-serif">
            Produto: O Legítimo Pão Libanês
          </h2>
          <div className="w-20 h-1 bg-[#F2A900] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-lg text-[#5D4037] leading-relaxed">
            Criado com devoção à tradição, nosso pão libanês é o protagonista das melhores 
            mesas, unindo frescor diário, leveza e versatilidade gastronômica.
          </p>
        </div>

        {/* VITRINE PRINCIPAL: O PÃO E SEUS DIFERENCIAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* FOTO DE DESTAQUE COM ESPAÇO RESERVADO DE ALTA QUALIDADE */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#E3D5C8]">
              <Image
                src="/imagens/pao-libanes-artesanal.jpg"
                alt="Pão Libanês Gold Bread fresquinho e macio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Tag Dourada */}
              <div className="absolute top-4 left-4 bg-[#F2A900] text-[#3E2723] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#3E2723]" />
                <span>Padrão Ouro Gold Bread</span>
              </div>
            </div>

            {/* Micro Badge flutuante de apetite */}
            <div className="hidden sm:flex absolute -bottom-5 right-6 bg-white py-3 px-5 rounded-2xl shadow-xl border border-[#EAD9CA] items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F2A900] animate-pulse" />
              <span className="text-xs font-bold text-[#3E2723]">Massa macia que derrete na boca</span>
            </div>
          </div>

          {/* DIFERENCIAIS */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B57D00]">
                Excelência em Cada Detalhe
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2723] font-serif mt-1">
                Por que o Pão Libanês da <span className="text-[#F2A900]">Gold Bread</span> é incomparável?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentials.map((diff, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-[#EAD9CA] shadow-sm hover:border-[#F2A900] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFF4D9] text-[#F2A900] flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-[#F2A900]" />
                  </div>
                  <h4 className="text-base font-bold text-[#3E2723] mb-1.5">{diff.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Solicitar Amostras para seu Estabelecimento</span>
              </a>
            </div>
          </div>

        </div>

        {/* SUGESTÕES DE CONSUMO QUE DESPERTAM O APETITE */}
        <div className="pt-10 border-t border-[#EAD9CA]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2723] font-serif">
              Sugestões de Consumo Irresistíveis
            </h3>
            <p className="text-sm sm:text-base text-[#5D4037] mt-2">
              Do café da manhã ao jantar, veja como transformar o pão libanês em experiências culinárias memoráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* CARDS DE SUGESTÕES */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {consumptionSuggestions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#EAD9CA] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D4A373]/30 text-[11px] font-bold text-[#3E2723] mb-3 group-hover:bg-[#FFF4D9] group-hover:text-[#B57D00] transition-colors">
                    {item.tag}
                  </div>
                  <h4 className="text-base font-bold text-[#3E2723] mb-2 font-serif">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ESPAÇO RESERVADO PARA IMAGEM GASTRONÔMICA DE ALTA QUALIDADE */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#E3D5C8]">
                <Image
                  src="/imagens/sugestoes-consumo.jpg"
                  alt="Mesa farta árabe com beirute artesanal, pastas, falafel e pão libanês"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                
                {/* Overlay com descrição de dar água na boca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#F2A900] font-bold">
                      Harmonização Perfeita
                    </span>
                    <h5 className="text-lg font-bold font-serif leading-tight mt-0.5">
                      O Beirute dos Sonhos &amp; Mezze Autêntico
                    </h5>
                    <p className="text-xs text-[#E3D5C8] font-light mt-1">
                      Textura leve que valoriza os recheios mais nobres.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* GALERIA GASTRONÔMICA GOLD BREAD */}
        <div className="mt-16 bg-[#E3D5C8]/30 p-6 sm:p-10 rounded-3xl border border-[#D4A373]/30 shadow-inner">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#3E2723] font-serif">
                Galeria Gastronômica Gold Bread
              </h4>
              <p className="text-xs sm:text-sm text-[#5D4037] mt-1">
                Fotografias profissionais dedicadas a despertar o apetite e valorizar a autenticidade libanesa.
              </p>
            </div>
            <span className="text-xs font-bold text-[#B57D00] bg-[#FFF4D9] px-4 py-1.5 rounded-full border border-[#F2A900]/40 shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Alta Resolução
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Foto 1 - Embalagem */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] bg-[#2E1A11] border border-[#D4A373]/40">
              <Image 
                src="/imagens/embalagem-gold-bread.jpg" 
                alt="Embalagem Gold Bread" 
                fill 
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-md bg-[#F2A900]/90 text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <h5 className="text-sm font-bold text-white tracking-wide">Embalagem Gold Bread</h5>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2">Pack oficial com atmosfera protetora e selo máximo de frescor e maciez.</p>
              </div>
            </div>

            {/* Foto 2 - Fornada Quentinha */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] bg-[#2E1A11] border border-[#D4A373]/40">
              <Image 
                src="/imagens/fornada-quentinha.jpg" 
                alt="Fornada Quentinha saindo do forno" 
                fill 
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-md bg-[#F2A900]/90 text-white">
                    <Flame className="w-3.5 h-3.5" />
                  </span>
                  <h5 className="text-sm font-bold text-white tracking-wide">Fornada Quentinha</h5>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2">Pão pita recém-saído do forno de pedra, estufado e com vapor aromático irresistível.</p>
              </div>
            </div>

            {/* Foto 3 - Receitas de Chefs */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] bg-[#2E1A11] border border-[#D4A373]/40">
              <Image 
                src="/imagens/receitas-chefs.jpg" 
                alt="Receitas de Chefs com pão libanês" 
                fill 
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-md bg-[#F2A900]/90 text-white">
                    <Heart className="w-3.5 h-3.5" />
                  </span>
                  <h5 className="text-sm font-bold text-white tracking-wide">Receitas de Chefs</h5>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2">Harmonização gastronômica com homus, coalhada seca, azeite de oliva e ervas finas.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
