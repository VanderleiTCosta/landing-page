import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation ADICIONADO
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. O REACT LÊ A URL ATUAL
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511940103334";

  // ==========================================
  // 2. LÓGICA DE DETEÇÃO DO BAIRRO ATUAL
  // ==========================================
  let bairroAtual = "morumbi"; // Bairro padrão caso esteja na página inicial
  
  // Se a URL tiver "-em-", o sistema corta e guarda apenas o nome do bairro
  const match = location.pathname.match(/-em-([a-z0-9-]+)$/);
  if (match) {
    bairroAtual = match[1];
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-red-900 shadow-md py-2' : 'bg-gradient-to-r from-red-900 to-red-800 py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        
        {/* Logo Otimizada */}
        <Link to="/" aria-label="Página inicial Grupo Protec" className="flex-shrink-0">
          <img 
            src="src/assets/imagens/logo_branco_cor.webp" 
            alt="Grupo Desentupidora Protec" 
            width="162" 
            height="80"
            className="h-12 md:h-16 w-auto object-contain"
            loading="eager" 
            fetchPriority="high"
          />
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-8">
          <a href="/#sobre" className="text-white hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide">Empresa</a>
          
          <div className="relative group">
            <button className="flex items-center text-white hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide pb-1">
              Serviços <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              
              {/* 3. LINKS INJETADOS COM A VARIÁVEL DO BAIRRO ATUAL */}
              <Link to={`/servicos/desentupidora-em-${bairroAtual}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Desentupimento Geral</Link>
              <Link to={`/servicos/limpa-fossa-em-${bairroAtual}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Limpeza de Fossa</Link>
              <Link to={`/servicos/caca-vazamento-em-${bairroAtual}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Caça Vazamento</Link>
              <Link to={`/servicos/encanador-em-${bairroAtual}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Serviços de Encanador</Link>
              <Link to={`/servicos/hidrojateamento-em-${bairroAtual}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Hidrojateamento</Link>
            
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

      {/* MENU MOBILE */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="/#sobre" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium text-lg border-b pb-2">Empresa</a>
          
          <div className="flex flex-col border-b pb-2 space-y-3">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Nossos Serviços</span>
            
            {/* 4. LINKS DO MOBILE TAMBÉM DINÂMICOS */}
            <Link to={`/servicos/desentupidora-em-${bairroAtual}`} onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Desentupimento Geral</Link>
            <Link to={`/servicos/limpa-fossa-em-${bairroAtual}`} onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Limpeza de Fossa</Link>
            <Link to={`/servicos/caca-vazamento-em-${bairroAtual}`} onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Caça Vazamento</Link>
            <Link to={`/servicos/encanador-em-${bairroAtual}`} onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Serviços de Encanador</Link>
            <Link to={`/servicos/hidrojateamento-em-${bairroAtual}`} onClick={() => setIsOpen(false)} className="text-gray-600 font-medium pl-2">Hidrojateamento</Link>
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