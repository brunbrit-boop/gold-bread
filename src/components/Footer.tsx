"use client";

import React from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3E2723] text-[#FAF6F0] border-t-4 border-[#F2A900] relative">
      {/* FAIXA SUPERIOR DE CONTRASTE SUAVE EM TRIGO TOSTADO */}
      <div className="bg-[#D4A373]/20 border-b border-[#D4A373]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🫓</span>
            <p className="text-sm font-medium text-[#E3D5C8]">
              Fornecimento diário e contínuo para restaurantes, empórios e supermercados.
            </p>
          </div>
          <a
            href="#contato"
            className="text-xs font-bold text-[#3E2723] bg-[#F2A900] hover:bg-[#D99600] px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* MARCA */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2A900] flex items-center justify-center text-[#3E2723] font-bold text-xl shadow-md">
                G
              </div>
              <span className="text-2xl font-black text-white font-serif tracking-tight">
                GOLD <span className="text-[#F2A900]">BREAD</span>
              </span>
            </div>
            <p className="text-sm text-[#E3D5C8] max-w-sm leading-relaxed">
              O legítimo Pão Libanês elaborado com ingredientes selecionados, fermentação 
              natural e assamento artesanal em forno de alta temperatura. Tradição que atravessa gerações.
            </p>
            <div className="pt-2 text-xs text-[#D4A373]">
              CNPJ: 00.000.000/0001-00 • Todos os direitos reservados.
            </div>
          </div>

          {/* OS 4 MENUS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2A900]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#quem-somos" className="text-[#E3D5C8] hover:text-[#F2A900] transition-colors">
                  Quem somos nós
                </a>
              </li>
              <li>
                <a href="#fabricacao" className="text-[#E3D5C8] hover:text-[#F2A900] transition-colors">
                  Fabricação
                </a>
              </li>
              <li>
                <a href="#produto" className="text-[#E3D5C8] hover:text-[#F2A900] transition-colors">
                  Produto
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#E3D5C8] hover:text-[#F2A900] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* INFORMAÇÕES DE CONTATO RÁPIDO */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2A900]">
              Atendimento Gold Bread
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E3D5C8]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F2A900]" />
                <span>(11) 99999-9999 / (11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F2A900]" />
                <span>contato@goldbread.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F2A900]" />
                <span>São Paulo — SP | Brasil</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#3E2723] bg-[#E3D5C8] hover:bg-[#FAF6F0] px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-[#5D4037] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D4A373] gap-4">
          <p>© 2026 Gold Bread. A autêntica arte do Pão Libanês.</p>
          <p className="flex items-center gap-1">
            Qualidade, Tradição e Sabor Incomparável.
          </p>
        </div>
      </div>
    </footer>
  );
}
