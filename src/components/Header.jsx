import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Produção', href: '#producao' },
  { name: 'As lentes', href: '#as-lentes' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Fale conosco', href: '#fale-conosco' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o background no scroll (melhora a legibilidade e UI)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-3' : 'bg-blue-400 py-5'
      }`}
    >
      <nav 
        className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center justify-between"
        aria-label="Navegação Principal"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Ir para a página inicial">
          <img 
            src="./src/assets/imagens/coopervision-logo-orange.png" 
            alt="Lensfit Logo" 
            width="140" 
            height="40"
            className="h-10 w-auto object-contain"
            loading="eager" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons & CTA Button */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Nosso Instagram" className="text-white hover:text-gray-300 transition">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Nosso LinkedIn" className="text-white hover:text-gray-300 transition">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>

          <a 
            href="https://wa.me/seunumerodeexemplo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#7BB045] text-white px-6 py-2.5 rounded-full hover:bg-[#689A38] transition-colors duration-300 font-semibold text-sm shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Fale com um consultor
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-6 flex flex-col items-center text-center">
          <ul className="w-full space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-white hover:text-[#7BB045] transition text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-6 py-2">
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-[#7BB045] transition">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-[#7BB045] transition">
              <Linkedin size={24} />
            </a>
          </div>

          <a 
            href="https://wa.me/seunumerodeexemplo" 
            className="flex items-center justify-center gap-2 w-full max-w-sm bg-[#7BB045] text-white px-6 py-3 rounded-full hover:bg-[#689A38] transition font-semibold"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Fale com um consultor
          </a>
        </div>
      </div>
    </header>
  );
}