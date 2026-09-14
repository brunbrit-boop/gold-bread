"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "restaurante",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulação visual de envio
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "restaurante",
        message: "",
      });
      alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    }, 1200);
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden border-t border-[#EAD9CA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C8] text-[#3E2723] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#F2A900]" />
            <span>Fale Conosco</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2723] tracking-tight font-serif">
            Contato
          </h2>
          <div className="w-20 h-1 bg-[#F2A900] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-lg text-[#5D4037] leading-relaxed">
            Estamos prontos para atender pedidos comerciais, restaurantes, redes de varejo 
            ou esclarecer qualquer dúvida sobre o nosso pão libanês.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LADO ESQUERDO: CANAIS DE ATENDIMENTO & LOCALIZAÇÃO */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-[#EAD9CA] shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#3E2723] font-serif">
                Canais Diretos
              </h3>
              <p className="text-sm text-[#5D4037]">
                Fale diretamente com nossa equipe de vendas e atendimento:
              </p>

              {/* WHATSAPP / TELEFONE */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#FFF4D9] border border-[#EAD9CA] hover:border-[#F2A900] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#5D4037] font-semibold uppercase tracking-wider">
                    WhatsApp &amp; Telefone Comercial
                  </span>
                  <p className="text-base font-bold text-[#3E2723] group-hover:text-[#B57D00] transition-colors">
                    (11) 99999-9999 / (11) 3456-7890
                  </p>
                  <span className="text-xs text-[#25D366] font-bold mt-0.5 inline-block">
                    ● Atendimento imediato
                  </span>
                </div>
              </a>

              {/* E-MAIL */}
              <a
                href="mailto:contato@goldbread.com.br"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#FFF4D9] border border-[#EAD9CA] hover:border-[#F2A900] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF4D9] text-[#F2A900] flex items-center justify-center shrink-0 border border-[#F2A900]/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#5D4037] font-semibold uppercase tracking-wider">
                    E-mail Oficial
                  </span>
                  <p className="text-base font-bold text-[#3E2723] group-hover:text-[#B57D00] transition-colors">
                    contato@goldbread.com.br
                  </p>
                  <p className="text-xs text-[#5D4037]">
                    pedidos@goldbread.com.br
                  </p>
                </div>
              </a>

              {/* LOCALIZAÇÃO */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EAD9CA]">
                <div className="w-12 h-12 rounded-xl bg-[#E3D5C8] text-[#3E2723] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#F2A900]" />
                </div>
                <div>
                  <span className="text-xs text-[#5D4037] font-semibold uppercase tracking-wider">
                    Fábrica &amp; Centro de Distribuição
                  </span>
                  <p className="text-base font-bold text-[#3E2723]">
                    Av. das Indústrias da Panificação, 1200
                  </p>
                  <p className="text-xs text-[#5D4037]">
                    Distrito Industrial — São Paulo / SP — CEP 01234-567
                  </p>
                </div>
              </div>

              {/* HORÁRIOS */}
              <div className="flex items-center gap-3 pt-2 text-xs text-[#5D4037] border-t border-[#EAD9CA]">
                <Clock className="w-4 h-4 text-[#F2A900]" />
                <span>Segunda a Sexta: 06h às 18h | Sábado: 06h às 12h</span>
              </div>

            </div>

          </div>

          {/* LADO DIREITO: FORMULÁRIO DE MENSAGENS */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAD9CA] shadow-sm">
              <h3 className="text-2xl font-bold text-[#3E2723] font-serif mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-sm text-[#5D4037] mb-6">
                Preencha o formulário abaixo para cotações comerciais, dúvidas ou parcerias de fornecimento.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NOME */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#3E2723] uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou nome do responsável"
                    className="w-full px-4 py-3 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0]/60 text-[#3E2723] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#F2A900] focus:bg-white transition-all text-sm"
                  />
                </div>

                {/* EMAIL & TELEFONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#3E2723] uppercase tracking-wider mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0]/60 text-[#3E2723] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#F2A900] focus:bg-white transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#3E2723] uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0]/60 text-[#3E2723] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#F2A900] focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* TIPO DE INTERESSE */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#3E2723] uppercase tracking-wider mb-1.5">
                    Perfil / Assunto *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0]/60 text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#F2A900] focus:bg-white transition-all text-sm"
                  >
                    <option value="restaurante">Restaurante / Lanchonete / Hamburgueria</option>
                    <option value="emporio">Empório / Mercearia Árabe</option>
                    <option value="supermercado">Supermercado / Rede Varejista</option>
                    <option value="distribuidor">Distribuidor / Atacadista</option>
                    <option value="consumidor">Consumidor Final / Dúvidas</option>
                  </select>
                </div>

                {/* MENSAGEM */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#3E2723] uppercase tracking-wider mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos como podemos atendê-lo (ex: volume semanal estimado, localização, dúvidas sobre produtos)..."
                    className="w-full px-4 py-3 rounded-xl border border-[#EAD9CA] bg-[#FAF6F0]/60 text-[#3E2723] placeholder-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#F2A900] focus:bg-white transition-all text-sm resize-none"
                  />
                </div>

                {/* BOTÃO SUBMIT */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full btn-gold py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 animate-spin" />
                        <span>Enviando sua mensagem...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem Agora</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
