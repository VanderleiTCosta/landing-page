import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-red-900 shadow-md py-2' : 'bg-gradient-to-r from-red-900 to-red-800 py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        
        {/* Logo Otimizada */}
        <a href="/" aria-label="Página inicial Grupo Protec" className="flex-shrink-0">
          <img 
            src="/assets/logo_branco_cor.webp" 
            alt="Grupo Desentupidora Protec" 
            width="162" 
            height="80"
            className="h-12 md:h-16 w-auto object-contain"
            loading="eager" 
            fetchpriority="high"
          />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-8">
          {/* Link alterado para /#sobre para fazer scroll suave na home */}
          <a href="/#sobre" className="text-white hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide">Empresa</a>
          
          <div className="relative group">
            <button className="flex items-center text-white hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide pb-1">
              Serviços <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {/* Links apontando para as páginas SEO Pilar */}
              <a href="/servicos/desentupidora-em-morumbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Desentupimento Geral</a>
              <a href="/servicos/limpa-fossa-em-morumbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Limpeza de Fossa</a>
              <a href="/servicos/caca-vazamento-em-morumbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Caça Vazamento</a>
              <a href="/servicos/encanador-em-morumbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Serviços de Encanador</a>
              <a href="/servicos/hidrojateamento-em-morumbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Hidrojateamento</a>
            </div>
          </div>
          
          <a href="/#faq" className="text-white hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide">Dúvidas</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-bold shadow-lg"
          >
            ORÇAMENTO RÁPIDO
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-red-800 rounded-lg transition"
            aria-expanded={isOpen}
            aria-label="Menu mobile"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="/#sobre" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium text-lg border-b pb-2">Empresa</a>
          
          <div className="flex flex-col border-b pb-2 space-y-3">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Nossos Serviços</span>
            <a href="/servicos/desentupidora-em-morumbi" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Desentupimento Geral</a>
            <a href="/servicos/limpa-fossa-em-morumbi" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Limpeza de Fossa</a>
            <a href="/servicos/encanador-em-morumbi" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Serviços de Encanador</a>
          </div>

          <a href="/#faq" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium text-lg border-b pb-2">Dúvidas Frequentes</a>
          
          <a href={whatsappLink} className="bg-green-600 text-white text-center font-bold py-3 rounded-lg mt-4">
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </div>
    </header>
  );
}