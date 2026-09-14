import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#3E2723]"
      suppressHydrationWarning
    >
      {/* CABEÇALHO FIXO COM EXATAMENTE E APENAS OS 4 MENUS */}
      <Navbar />

      <main className="flex-grow">
        {/* BANNER DE APRESENTAÇÃO ACOLHEDOR */}
        <Hero />

        {/* 1. QUEM SOMOS NÓS */}
        <AboutSection />

        {/* 2. FABRICAÇÃO */}
        <ManufacturingSection />

        {/* 3. PRODUTO */}
        <ProductSection />

        {/* 4. CONTATO */}
        <ContactSection />
      </main>

      {/* RODAPÉ EM TONS DE TRIGO E MARROM CAFÉ */}
      <Footer />
    </div>
  );
}
