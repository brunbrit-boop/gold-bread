"use client";

import React from "react";

interface BrandItem {
  id: string;
  name: string;
  category: string;
  symbol: React.ReactNode;
}

const ROW_ONE_BRANDS: BrandItem[] = [
  {
    id: "lumiere",
    name: "LUMIÈRE",
    category: "PARIS • CLINICAL",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: "derma-ai",
    name: "EPIDERMA AI",
    category: "NEURAL DIAGNOSTICS",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "swiss-cellular",
    name: "SWISS CELLULAR",
    category: "ZÜRICH LABS",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "vogue-partner",
    name: "VOGUE LABS",
    category: "EDITORIAL ARCHIVE",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M4 4l8 16 8-16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "bioderm",
    name: "BIODERM 360",
    category: "MOLECULAR DERMA",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M11 11l2 2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "aesthetica",
    name: "AESTHETICA",
    category: "GENEVE INSTITUTE",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: "dermaquest",
    name: "DERMAQUEST",
    category: "CELLULAR MATRIX",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "novapeptide",
    name: "NOVA PEPTIDE",
    category: "BIO-ACTIVE BIOCHEM",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const ROW_TWO_BRANDS: BrandItem[] = [
  {
    id: "elle-tech",
    name: "ELLE BEAUTÉ",
    category: "INNOVATION AWARDS",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: "clinique-bio",
    name: "CLINIQUE BIO",
    category: "FORMULATIONS",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "heliomed",
    name: "HELIOMED",
    category: "PHOTOPROTECTION",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" strokeLinecap="round" />
        <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round" />
        <line x1="1" y1="12" x2="3" y2="12" strokeLinecap="round" />
        <line x1="21" y1="12" x2="23" y2="12" strokeLinecap="round" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "regenesis",
    name: "REGENESIS",
    category: "STEM CELL SCIENCE",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" strokeLinecap="round" />
        <polyline points="18 4 20 8 16 8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="6 20 4 16 8 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "allure-labs",
    name: "ALLURE SCIENCE",
    category: "RESEARCH GUILD",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "dermacare",
    name: "DERMACARE 360",
    category: "PRECISION CLINIC",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "hydraformula",
    name: "HYDRA LABS",
    category: "BARRIER DEFENSE",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    id: "veritas",
    name: "VERITAS SKIN",
    category: "CLINICAL TRIALS",
    symbol: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="1.5">
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        <rect x="2" y="2" width="20" height="20" rx="5" />
      </svg>
    ),
  },
];

function BrandCard({ brand }: { brand: BrandItem }) {
  return (
    <div
      key={brand.id}
      className="group flex items-center gap-3.5 px-6 py-3.5 mx-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default select-none shadow-[0_4px_24px_rgba(0,0,0,0.4)] shrink-0"
    >
      <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-400 group-hover:text-violet-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/10 transition-colors shrink-0">
        {brand.symbol}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-sm font-semibold tracking-wider text-zinc-200 group-hover:text-white transition-colors uppercase whitespace-nowrap font-mono">
          {brand.name}
        </span>
        <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors tracking-widest font-mono uppercase whitespace-nowrap">
          {brand.category}
        </span>
      </div>
    </div>
  );
}

export default function LogoCarousel() {
  // We duplicate array 3 times to ensure a completely seamless continuous infinite loop without any blank jump
  const rowOneItems = [...ROW_ONE_BRANDS, ...ROW_ONE_BRANDS, ...ROW_ONE_BRANDS];
  const rowTwoItems = [...ROW_TWO_BRANDS, ...ROW_TWO_BRANDS, ...ROW_TWO_BRANDS];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#050505] text-white overflow-hidden border-t border-b border-white/5 z-30">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/[0.04] rounded-full blur-[160px]" />

      {/* Section Header / Eyebrow */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Validated by Clinical Leaders
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-zinc-200">
          Trusted by Top Dermatology Clinics &amp; Global Beauty Innovators
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-light mt-2 max-w-xl mx-auto">
          Powering diagnostics, precision routines, and molecular skin intelligence worldwide.
        </p>
      </div>

      {/* Carousel Container with edge masks */}
      <div className="relative w-full overflow-hidden pause-on-hover py-2">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-20" />

        {/* ======================================================== */}
        {/* ROW 1: Direita → Esquerda (Continuous Right to Left)     */}
        {/* ======================================================== */}
        <div className="flex mb-5 sm:mb-7 overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {rowOneItems.map((brand, idx) => (
              <BrandCard key={`r1-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ROW 2: Esquerda → Direita (Continuous Left to Right)     */}
        {/* ======================================================== */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center">
            {rowTwoItems.map((brand, idx) => (
              <BrandCard key={`r2-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
