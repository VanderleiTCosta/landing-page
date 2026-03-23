import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PhoneCall } from 'lucide-react';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Coverage from '../components/Coverage';
import Payment from '../components/Payment';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function TemplateBairro({ bairro, zona }) {
  // Garantia: Se a prop vier vazia, ele usa um padrão provisório
  const safeBairro = bairro || "Morumbi";
  const safeZona = zona || "São Paulo";

  const keyword = `Desentupidora em ${safeBairro}`;
  const slug = safeBairro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  const urlLocal = `https://www.desentupidoranomorumbi.com.br/servicos/desentupidora-em-${slug}`;
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <>
      <Helmet>
        <title>{keyword} SP | Atendimento 24h | Visita Grátis</title>
        <meta name="description" content={`Precisando de ${keyword}? O Grupo Protec atende a região da ${safeZona} com rapidez, técnicos qualificados e sem quebrar pisos. Ligue já!`} />
        <meta name="keywords" content={`desentupidora em ${safeBairro}, desentupimento ${safeBairro}, limpa fossa ${safeBairro}, encanador ${safeBairro}, ${safeZona}`} />
        <link rel="canonical" href={urlLocal} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${keyword}",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Grupo Protec Desentupidora"
              },
              "areaServed": {
                "@type": "Place",
                "name": "${safeBairro}, São Paulo - SP"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow pt-[72px] md:pt-[88px]">
          
          {/* HERO CUSTOMIZADO - IDÊNTICO AO SEU PRINT */}
          <section className="bg-[#5c1818] py-12 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
              <img 
                src="/assets/servicos/background.webp" 
                alt={keyword} 
                className="w-full h-full object-cover" 
                fetchpriority="high"
              />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                
                {/* Textos Dinâmicos */}
                <div className="space-y-6">
                  <span className="inline-block bg-[#16a34a] text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                    Visita Técnica Gratuita
                  </span>
                  
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight font-sans tracking-tight">
                    Desentupidora em <br className="hidden md:block"/>
                    {safeBairro} <br/>
                    <span className="text-[#f97316]">24h na {safeZona}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                    Serviço rápido, limpo e com garantia. Desentupimento de pias, ralos, esgotos e limpa fossa em <strong>{safeBairro}</strong> com equipamentos de alta tecnologia.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a href={whatsappLink} className="flex items-center gap-4 bg-[#320b0b] border border-[#4a1515] px-6 py-4 rounded-xl hover:border-[#f97316] transition-colors group">
                      <PhoneCall className="text-[#f97316]" size={28} />
                      <div className="text-left">
                        <div className="text-[#f97316] text-xs font-bold uppercase tracking-wider mb-1">WhatsApp 24h</div>
                        <div className="text-xl font-extrabold text-white group-hover:text-[#f97316] transition-colors">(11) 94010-3334</div>
                      </div>
                    </a>
                    
                    <a href="tel:08005919537" className="flex items-center gap-4 bg-[#320b0b] border border-[#4a1515] px-6 py-4 rounded-xl hover:border-[#f97316] transition-colors group">
                      <PhoneCall className="text-[#f97316]" size={28} />
                      <div className="text-left">
                        <div className="text-[#f97316] text-xs font-bold uppercase tracking-wider mb-1">Ligue Grátis</div>
                        <div className="text-xl font-extrabold text-white group-hover:text-[#f97316] transition-colors">0800 591 9537</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Formulário Branco */}
                <div className="w-full max-w-md mx-auto lg:mr-0 lg:ml-auto bg-white p-8 rounded-xl shadow-2xl">
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">Solicitar Orçamento</h2>
                  <p className="text-[#64748b] mb-8 text-sm">Preencha e receba contato imediato.</p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input type="text" placeholder="Seu Nome*" required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all placeholder:text-gray-400" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Telefone / WhatsApp*" required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all placeholder:text-gray-400" />
                    </div>
                    <div>
                      <select required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all text-gray-600 appearance-none cursor-pointer">
                        <option value="">Selecione o problema...</option>
                        <option value="pia">Desentupimento de Pia</option>
                        <option value="vaso">Desentupimento de Vaso Sanitário</option>
                        <option value="esgoto">Desentupimento de Esgoto</option>
                        <option value="fossa">Limpeza de Fossa</option>
                        <option value="vazamento">Caça Vazamento</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-[#16a34a] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#15803d] transition-colors shadow-sm mt-2">
                      AGENDAR VISITA
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>

          {/* DEMAIS SEÇÕES */}
          <About />
          <Services />
          <Clients />
          <Testimonials />
          <Coverage />
          <Payment />
          <FAQ />
          <CTA />
          
        </main>

        <Footer />
      </div>
    </>
  );
}