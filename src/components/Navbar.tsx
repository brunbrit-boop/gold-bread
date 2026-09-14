"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exatamente e apenas os 4 menus especificados pelo cliente
  const navLinks = [
    { label: "Quem somos nós", href: "#quem-somos" },
    { label: "Fabricação", href: "#fabricacao" },
    { label: "Produto", href: "#produto" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(62,39,35,0.07)] border-b border-[#EAD9CA]"
          : "bg-[#FAF6F0]/90 backdrop-blur-sm border-b border-[#EAD9CA]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO GOLD BREAD */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#F2A900] to-[#E5A822] flex items-center justify-center shadow-md shadow-[#F2A900]/30 group-hover:scale-105 transition-transform">
            {/* Ícone de Trigo / Espiga Artesanal */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3E2723"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M2 22 16 8" />
              <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
              <path d="M11.47 17.47 13 19l1.53-1.53a3.5 3.5 0 0 0 0-4.94L13 11l-1.53 1.53a3.5 3.5 0 0 0 0 4.94Z" />
              <path d="M15.47 13.47 17 15l1.53-1.53a3.5 3.5 0 0 0 0-4.94L17 7l-1.53 1.53a3.5 3.5 0 0 0 0 4.94Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-[#3E2723] font-serif leading-none">
              GOLD <span className="text-[#F2A900]">BREAD</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6D4C41] font-medium mt-0.5">
              Pão Libanês Artesanal
            </span>
          </div>
        </a>

        {/* NAVEGAÇÃO DESKTOP: EXATAMENTE E APENAS OS 4 MENUS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-[#3E2723] hover:text-[#F2A900] transition-colors relative py-1 group tracking-tight"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2A900] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* BOTÃO DE CONTATO RÁPIDO / PEDIDOS (CTA EM AMARELO DOURADO) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contato"
            className="btn-gold px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Fazer Pedido</span>
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#FAF6F0] text-[#3E2723] hover:bg-[#E3D5C8] transition-colors border border-[#EAD9CA]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE: EXATAMENTE E APENAS OS 4 MENUS */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-t border-[#EAD9CA] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#3E2723] hover:text-[#F2A900] py-2 border-b border-[#EAD9CA]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-gold py-3 rounded-xl text-center text-base font-bold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Fazer Pedido / Contato</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
