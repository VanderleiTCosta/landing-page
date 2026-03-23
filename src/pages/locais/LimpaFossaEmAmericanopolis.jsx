import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PhoneCall, Clock, Shield, CheckCircle, MapPin, Wrench } from 'lucide-react';

import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

// IMPORTAÇÃO CORRETA E PROFISSIONAL DA IMAGEM NO VITE
import bgImage from '../../assets/imagens/logo_branco_cor.webp';

export default function LimpaFossaEmAmericanopolis() {
  const bairro = "Americanópolis";
  const zona = "Zona Leste";
  const servico = "Limpa Fossa";
  
  const tituloPagina = "Limpa Fossa Americanópolis";
  const keywordEm = "Limpa Fossa em Americanópolis";
  const urlLocal = "https://www.desentupidoranomorumbi.com.br/servicos/limpa-fossa-em-americanopolis";
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <>
      <Helmet>
        <title>{tituloPagina} SP | Atendimento 24h</title>
        <meta name="description" content={`Emergência? O Grupo Protec é líder em ${keywordEm}. Viaturas na ${zona} com atendimento 24h, sem taxa de visita. Resolvemos na hora!`} />
        <meta name="keywords" content={`${tituloPagina}, ${keywordEm}, ${servico.toLowerCase()} ${bairro}, manutenção ${bairro}, reparo ${bairro}, ${zona}`} />
        <link rel="canonical" href={urlLocal} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "${tituloPagina} - Grupo Protec",
              "description": "A melhor ${keywordEm}. Serviços residenciais e comerciais de alta qualidade.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Grupo Protec Desentupidora"
              },
              "areaServed": {
                "@type": "Place",
                "name": "${bairro}, São Paulo - SP"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow pt-[72px] md:pt-[88px]">
          
          <section className="relative min-h-[85vh] flex flex-col justify-center bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
              {/* USO DA VARIÁVEL DA IMAGEM E OPACIDADE REDUZIDA PARA O LOGO NÃO OFUSCAR O TEXTO */}
              <img src={bgImage} alt={tituloPagina} className="w-full h-full object-contain opacity-30 mix-blend-overlay" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/90 to-orange-900/80"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl py-12 md:py-20">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                <div className="space-y-6 text-center lg:text-left">
                  <span className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">
                    <MapPin size={16} /> Viatura próxima a {bairro}
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {servico} em <br className="hidden md:block"/>
                    {bairro} <br/>
                    <span className="text-orange-400">Plantão {zona}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
                    Problemas urgentes? Nossa equipe de <strong className="text-white font-extrabold bg-red-600 px-2 py-0.5 rounded">{keywordEm}</strong> está pronta para te socorrer. Orçamento presencial sem compromisso e preço justo.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <a href={whatsappLink} className="flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:border-orange-400 transition group">
                      <PhoneCall className="text-orange-400" size={24} />
                      <div className="text-left">
                        <div className="text-orange-400 text-xs font-bold uppercase">WhatsApp 24h</div>
                        <div className="text-xl font-bold text-white group-hover:text-orange-400 transition">(11) 94010-3334</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full max-w-md mx-auto lg:ml-auto bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-red-600">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicite uma Visita</h2>
                  <p className="text-gray-500 mb-6 text-sm">Preencha para deslocarmos a equipe até {bairro}.</p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Seu Nome*" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition" />
                    <input type="tel" placeholder="WhatsApp / Telefone*" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition" />
                    <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition text-gray-700">
                      <option value="">Qual é o problema?</option>
                      <option value="pia">Desentupimento em Geral</option>
                      <option value="fossa">Limpeza de Fossa</option>
                      <option value="vazamento">Caça Vazamento</option>
                      <option value="encanador">Serviços de Encanador</option>
                    </select>
                    <button type="submit" className="w-full bg-green-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-green-700 transition shadow-md">
                      AGENDAR AGORA
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-6">
                    Sua melhor opção de <strong className="font-extrabold text-red-600">{keywordEm}</strong>
                  </h2>
                  <div className="prose text-gray-600 space-y-4 text-lg">
                    <p>
                      Moradores e empresários sabem como um problema hidrossanitário pode parar a rotina. É por isso que o Grupo Protec atua como líder em <strong className="font-bold text-red-600">{keywordEm}</strong>, mantendo bases de apoio espalhadas por toda a <strong>{zona}</strong>.
                    </p>
                    <p>
                      Nosso compromisso é chegar ao seu endereço o mais rápido possível. Ao buscar por serviços de <strong className="font-bold text-red-600">{keywordEm}</strong>, você garante a visita de profissionais treinados, munidos de equipamentos de ponta que resolvem o problema de dentro para fora, garantindo que <strong>seu imóvel em {bairro} fique intacto</strong>.
                    </p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <Clock className="text-red-600 mb-4" size={32} />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Rápido em {bairro}</h3>
                    <p className="text-gray-600 text-sm">Tempo de resposta reduzido por estarmos na {zona}.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <CheckCircle className="text-red-600 mb-4" size={32} />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Visita Grátis</h3>
                    <p className="text-gray-600 text-sm">Não cobramos taxa de deslocamento até {bairro}.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-red-600 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Precisando de <strong className="font-extrabold text-gray-900">{keywordEm}</strong> urgente?
            </h2>
            <p className="text-red-100 text-xl mb-8 max-w-2xl mx-auto">
              Nossos técnicos estão rodando a {zona} agora mesmo. Ligue e seja o próximo a ser atendido!
            </p>
            <a href={whatsappLink} className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl">
              <PhoneCall size={24} />
              CHAMAR TÉCNICO AGORA
            </a>
          </section>
          
        </main>

        <Footer />
      </div>
    </>
  );
}