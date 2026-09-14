"use client";

import React, { useState } from "react";
import { 
  ScanFace, 
  Activity, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  BarChart3,
  Flame,
  Droplets,
  Sun
} from "lucide-react";

interface FeatureCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [activeZone, setActiveZone] = useState<string>("forehead");

  const zones: Record<string, { label: string; score: string; status: string; detail: string }> = {
    forehead: {
      label: "Zona Frontal (Testa)",
      score: "94/100",
      status: "Equilibrada",
      detail: "Linhas de expressão atenuadas, índice lipídico sob controle."
    },
    tzone: {
      label: "Zona T & Nariz",
      score: "82/100",
      status: "Atenção Leve",
      detail: "Poros dilatados de 0.12mm e leve produção sebácea matinal."
    },
    cheeks: {
      label: "Região Malar (Bochechas)",
      score: "98/100",
      status: "Excelente",
      detail: "Barreira cutânea espessa com microcirculação em nível ótimo."
    },
    jawline: {
      label: "Contorno Mandibular",
      score: "91/100",
      status: "Firmeza Alta",
      detail: "Elasticidade dérmica preservada com tônus muscular estável."
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#050505] text-white overflow-hidden z-30">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/[0.05] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
              Arquitetura de Inteligência Dérmica
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Precisão médica em cada <br className="hidden sm:block" />
            <span className="font-normal bg-gradient-to-r from-white via-zinc-200 to-violet-300 bg-clip-text text-transparent">
              micromilímetro da sua pele
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 max-w-xl leading-relaxed">
            Nossos algoritmos processam centenas de vetores biométricos para decodificar necessidades biológicas reais e prescrever intervenções com precisão molecular.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ======================================================== */}
          {/* CARD 1: Scan Facial Multi-Espectral (7 cols)            */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-medium">
                  01 • Diagnóstico Tridimensional
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white mt-1">
                  Scan Facial Multi-Espectral
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono">
                68 Vetores HD
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 max-w-xl">
              Nossa malha biométrica mapeia profundidade celular, simetria facial, micro-pigmentação oculta sob luz UV e textura dérmica em 60 quadros por segundo.
            </p>

            {/* Interactive Scanner Zone Selector */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 relative">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/5">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Mapeamento em Tempo Real
                </span>
                <span className="text-xs font-mono text-violet-300">
                  Resolução Submicrométrica
                </span>
              </div>

              {/* Zone Toggle Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {(Object.keys(zones) as Array<keyof typeof zones>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveZone(key)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-left border ${
                      activeZone === key
                        ? "bg-violet-600/20 border-violet-400/50 text-white shadow-[0_0_15px_rgba(167,139,250,0.2)]"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:border-white/15 hover:text-zinc-200"
                    }`}
                  >
                    <span className="block text-[10px] text-zinc-500">{zones[key].label.split(" ")[0]}</span>
                    <span className="font-semibold">{zones[key].score}</span>
                  </button>
                ))}
              </div>

              {/* Zone Data Display */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white">
                    {zones[activeZone].label}
                  </span>
                  <span className="text-xs text-zinc-400 font-light mt-0.5">
                    {zones[activeZone].detail}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {zones[activeZone].status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 2: Mapeamento de Poros & Oleosidade (5 cols)         */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-medium">
                    02 • Subcutâneo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white mt-1">
                    Poros &amp; Sebo Cutâneo
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-400">
                  <Droplets className="w-5 h-5 text-violet-300" />
                </div>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                Identificação quantitativa de obstrução porácea, microcomedões e atividade das glândulas sebáceas.
              </p>
            </div>

            {/* Diagnostic Metrics Bars */}
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">Pureza dos Folículos</span>
                  <span className="text-emerald-400 font-semibold">91% Limpo</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full w-[91%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">Equilíbrio Hidrolipídico</span>
                  <span className="text-violet-300 font-semibold">78% Otimizado</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full w-[78%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">Homogeneidade de Textura</span>
                  <span className="text-zinc-200 font-semibold">89% Uniforme</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-400 to-amber-300 rounded-full w-[89%]" />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 3: Rotina Adaptativa de 7 Dias (5 cols)             */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-medium">
                    03 • Prescrição Dinâmica
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white mt-1">
                    Rotina Adaptativa 7 Dias
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-400">
                  <Clock className="w-5 h-5 text-violet-300" />
                </div>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                Fórmulas e horários calibrados diariamente pelo índice UV local, umidade do ar e resposta biológica.
              </p>
            </div>

            {/* Routine Steps Preview */}
            <div className="space-y-2.5 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono flex items-center justify-center shrink-0">
                  AM
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">Sérum C-Tetra + Niacinamida 5%</p>
                  <p className="text-[10px] text-zinc-400 truncate">Defesa antioxidante e barreira fotoestável</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono flex items-center justify-center shrink-0">
                  PM
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">Peptídeos Biomiméticos + Retinol 0.3%</p>
                  <p className="text-[10px] text-zinc-400 truncate">Renovação celular e indução de colágeno tipo I</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 4: Métricas Clínicas em Tempo Real (7 cols)         */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-medium">
                    04 • Telemetria Dérmica
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white mt-1">
                    Métricas em Tempo Real
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
                  Acurácia 99.2%
                </span>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 max-w-xl">
                Acompanhamento contínuo da integridade do estrato córneo, redução mensurável de linhas finas e taxa de hidratação trans-epidérmica.
              </p>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
              <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Barreira Dérmica</span>
                <span className="text-2xl font-bold text-white mt-1">+98.4%</span>
                <span className="text-[10px] text-emerald-400 font-mono mt-0.5">↑ Recuperada em 7 dias</span>
              </div>

              <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Linhas Finas</span>
                <span className="text-2xl font-bold text-white mt-1">-34.8%</span>
                <span className="text-[10px] text-violet-300 font-mono mt-0.5">↓ Suavização periorbital</span>
              </div>

              <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Luminosidade</span>
                <span className="text-2xl font-bold text-white mt-1">4.9/5.0</span>
                <span className="text-[10px] text-amber-300 font-mono mt-0.5">★ Avaliação clínica</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
