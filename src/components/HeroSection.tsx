"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-transparent text-white px-6 sm:px-8 lg:px-12 py-12 lg:py-8">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px]" />

      {/* MAIN HERO GRID CONTAINER */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: BADGE, HEADLINE, SUBTITLE, CTA BUTTON      */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 flex flex-col items-start justify-center space-y-6 lg:space-y-8 text-left z-20">
          
          {/* TRUST BADGE (Top-left) */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-inner hover:border-white/25 transition-all">
            {/* 3 Overlapping Avatar circles */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-black bg-gradient-to-tr from-amber-600 to-yellow-400 text-[10px] font-bold text-white">
                P
              </div>
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-black bg-gradient-to-tr from-orange-500 to-amber-400 text-[10px] font-bold text-white">
                L
              </div>
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-black bg-gradient-to-tr from-amber-400 to-orange-600 text-[10px] font-bold text-white">
                A
              </div>
            </div>
            
            {/* Badge Text */}
            <p className="text-xs text-zinc-300 font-normal">
              Apreciado por <span className="font-semibold text-white">1.200+</span> empórios e chefs
            </p>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[84px] font-normal tracking-[-0.03em] leading-[0.96] text-white">
            A autêntica <br />
            arte do pão <br />
            libanês
          </h1>

          {/* SUBTITLE */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-sm font-light leading-relaxed">
            Massa ultrafina, bolsão perfeito e maciez incomparável. Fermentação natural assada no verdadeiro forno de pedra.
          </p>

          {/* CTA BUTTON */}
          <div className="pt-2">
            <a
              href="#produtos"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#d8d5e8] hover:bg-[#ebe7fa] text-[#1b172a] font-medium text-sm tracking-tight transition-all duration-200 shadow-[0_0_30px_rgba(216,213,232,0.22)] active:scale-95 cursor-pointer"
            >
              <span>Conhecer Nossos Pães</span>
              <ChevronRight className="w-4 h-4 text-[#1b172a] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CENTER COLUMN: CLEAR VIEWPORT FOR CINEMATIC CANVAS       */}
        {/* ======================================================== */}
        <div className="hidden lg:block lg:col-span-5 min-h-[300px] sm:min-h-[440px] lg:min-h-[580px] pointer-events-none" />

        {/* ======================================================== */}
        {/* RIGHT COLUMN: 3 STATS/METRICS MATCHING GASTRONOMY LUXURY */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-center gap-8 sm:gap-6 lg:gap-10 sm:items-center lg:items-start text-left z-20">
          
          {/* STAT 1: 100% ingredientes puros */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:border-amber-400/40 transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-zinc-400 group-hover:text-amber-300 transition-colors"
              >
                <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="6" r="2" fill="currentColor" />
                <circle cx="25" cy="11" r="2" fill="currentColor" />
                <circle cx="25" cy="21" r="2" fill="currentColor" />
                <circle cx="16" cy="26" r="2" fill="currentColor" />
                <circle cx="7" cy="21" r="2" fill="currentColor" />
                <circle cx="7" cy="11" r="2" fill="currentColor" />
                <line x1="16" y1="8" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" />
                <line x1="23" y1="12" x2="19.5" y2="14" stroke="currentColor" strokeWidth="1.2" />
                <line x1="23" y1="20" x2="19.5" y2="18" stroke="currentColor" strokeWidth="1.2" />
                <line x1="16" y1="24" x2="16" y2="20" stroke="currentColor" strokeWidth="1.2" />
                <line x1="9" y1="20" x2="12.5" y2="18" stroke="currentColor" strokeWidth="1.2" />
                <line x1="9" y1="12" x2="12.5" y2="14" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                100%
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal leading-snug mt-1">
                ingredientes <br /> puros &amp; naturais
              </span>
            </div>
          </div>

          {/* STAT 2: 24h fermentação lenta */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:border-amber-400/40 transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-zinc-400 group-hover:text-amber-300 transition-colors"
              >
                <circle cx="16" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="16" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 16 Q16 13 21 16 Q16 19 11 16 Z" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                24h
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal leading-snug mt-1">
                fermentação lenta <br /> e digestão leve
              </span>
            </div>
          </div>

          {/* STAT 3: 350°C forno tradicional */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:border-amber-400/40 transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-zinc-400 group-hover:text-amber-300 transition-colors"
              >
                <ellipse cx="16" cy="9" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 16 C7 18 16 20 25 16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="7" y1="9" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="25" y1="9" x2="25" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 23 C7 25 16 27 25 23" stroke="currentColor" strokeWidth="1.5" />
                <line x1="7" y1="16" x2="7" y2="23" stroke="currentColor" strokeWidth="1.5" />
                <line x1="25" y1="16" x2="25" y2="23" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                350°C
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal leading-snug mt-1">
                forno de pedra <br /> tradicional libanês
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
