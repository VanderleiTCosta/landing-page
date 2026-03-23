import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { regioes } from '../data/locais.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PAGES_DIR = path.join(__dirname, '../pages/locais');

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const formatarNomeComponente = (bairro) => {
  return bairro
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-zA-Z0-9 ]/g, "") 
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

let contador = 0;
let importacoesRotas = `import { Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\n`;
let definicoesRotas = `      <Route path="/" element={<Home />} />\n`;

regioes.forEach(regiao => {
  regiao.bairros.forEach(bairro => {
    const nomeComponente = `DesentupidoraEm${formatarNomeComponente(bairro)}`;
    const fileName = `${nomeComponente}.jsx`;
    const filePath = path.join(PAGES_DIR, fileName);

    const slug = bairro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    const urlPath = `/servicos/desentupidora-em-${slug}`;

    const conteudo = `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PhoneCall, Clock, Shield, CheckCircle, MapPin, Wrench } from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ${nomeComponente}() {
  const bairro = "${bairro}";
  const zona = "${regiao.zona}";
  
  // Variáveis de SEO Agressivas
  const tituloPagina = \`Desentupidora em \${bairro} - Serviços de Desentupimento em \${bairro}\`;
  const keywordEm = \`Desentupidora em \${bairro}\`;
  const urlLocal = \`https://www.desentupidoranomorumbi.com.br/servicos/desentupidora-em-\${bairro.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/\\s+/g, '-')}\`;
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <>
      <Helmet>
        {/* Título e Metadescrições Básicas */}
        <title>{tituloPagina}</title>
        <meta name="description" content={\`Desentupidora em \${bairro}: desentupimento rápido e eficiente em \${bairro} e \${zona}. Atendimento 24h com garantia e qualidade.\`} />
        <meta name="keywords" content={\`Desentupidora, desentupimento rápido, \${bairro}, \${zona}, Atendimento 24h, garantia, qualidade\`} />
        <link rel="canonical" href={urlLocal} />

        {/* Meta Tags Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content={tituloPagina} />
        <meta property="og:description" content={\`Oferecemos serviços rápidos e eficientes na região de \${bairro} e \${zona}. Atendimento 24h com garantia.\`} />
        <meta property="og:image" content="https://www.desentupidoranomorumbi.com.br/assets/icone.svg" />
        <meta property="og:url" content={urlLocal} />
        <meta property="og:type" content="website" />

        {/* Meta Tags Twitter */}
        <meta name="twitter:title" content={tituloPagina} />
        <meta name="twitter:description" content={\`Oferecemos serviços rápidos e eficientes em \${bairro} e \${zona}. Atendimento 24h com garantia e qualidade.\`} />
        <meta name="twitter:image" content="https://www.desentupidoranomorumbi.com.br/assets/icone.svg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Dados Estruturados para SEO Local (Schema.org) */}
        <script type="application/ld+json">
          {\`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Desentupidora em \${bairro}",
              "description": "Oferecemos serviços de desentupimento rápidos e eficientes em \${bairro} e \${zona}. Atendimento 24h com qualidade garantida.",
              "image": "https://www.desentupidoranomorumbi.com.br/assets/icone.svg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida Paulista, 123",
                "addressLocality": "\${bairro}",
                "addressRegion": "SP",
                "postalCode": "05600-000",
                "addressCountry": "BR"
              },
              "telephone": "+55 11 94010-3334",
              "openingHours": "Mo-Su 24h",
              "priceRange": "$$",
              "url": "\${urlLocal}"
            }
          \`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow pt-[72px] md:pt-[88px]">
          
          <section className="bg-[#5c1818] py-12 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
              <img src="/assets/servicos/background.webp" alt={tituloPagina} className="w-full h-full object-cover" fetchpriority="high" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                    <MapPin size={16} /> Viatura próxima a {bairro}
                  </span>
                  
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    Desentupidora {bairro} <br/>
                    <span className="text-[#f97316]">Plantão {zona}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                    Entupiu? Não quebre nada! Nossa equipe de <strong className="text-white font-extrabold bg-red-600 px-2 py-0.5 rounded">{keywordEm}</strong> está pronta para te socorrer. Orçamento presencial sem compromisso e preço justo.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href={whatsappLink} className="flex items-center gap-4 bg-[#320b0b] border border-[#4a1515] px-6 py-4 rounded-xl hover:border-[#f97316] transition-colors group">
                      <PhoneCall className="text-[#f97316]" size={28} />
                      <div className="text-left">
                        <div className="text-[#f97316] text-xs font-bold uppercase tracking-wider mb-1">Técnico no WhatsApp</div>
                        <div className="text-xl font-extrabold text-white group-hover:text-[#f97316] transition-colors">(11) 94010-3334</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full max-w-md mx-auto lg:mr-0 lg:ml-auto bg-white p-8 rounded-xl shadow-2xl">
                  <h2 className="text-2xl font-bold text-[#0f172a] mb-1">Solicite uma Visita</h2>
                  <p className="text-[#64748b] mb-8 text-sm">Preencha para deslocarmos a equipe até {bairro}.</p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Seu Nome*" required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all placeholder:text-gray-400" />
                    <input type="tel" placeholder="WhatsApp / Telefone*" required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all placeholder:text-gray-400" />
                    <select required className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none transition-all text-gray-600 appearance-none cursor-pointer">
                      <option value="">Qual é a emergência?</option>
                      <option value="pia">Pia Entupida</option>
                      <option value="vaso">Vaso Sanitário Entupido</option>
                      <option value="esgoto">Rede de Esgoto / Ralo</option>
                      <option value="fossa">Limpeza de Fossa</option>
                    </select>
                    <button type="submit" className="w-full bg-[#16a34a] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#15803d] transition-colors shadow-sm mt-2">
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
                      Moradores e empresários sabem como um problema de encanamento pode parar a rotina. É por isso que o Grupo Protec atua como a principal <strong className="font-bold text-red-600">{keywordEm}</strong>, mantendo bases de apoio espalhadas por toda a <strong>{zona}</strong>.
                    </p>
                    <p>
                      Nosso compromisso é chegar ao seu endereço o mais rápido possível. Ao buscar por uma <strong className="font-bold text-red-600">{keywordEm}</strong>, você garante a visita de profissionais treinados, munidos de equipamentos de ponta que resolvem o problema de dentro para fora, garantindo que <strong>seu imóvel em {bairro} fique intacto</strong>, sem quebras desnecessárias.
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
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <Shield className="text-red-600 mb-4" size={32} />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Garantia Total</h3>
                    <p className="text-gray-600 text-sm">Serviços executados com garantia em contrato.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <Wrench className="text-red-600 mb-4" size={32} />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Sem Quebra-Quebra</h3>
                    <p className="text-gray-600 text-sm">Máquinas rotativas que limpam o cano por dentro.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">
                  Serviços de <strong className="font-extrabold text-red-500">{keywordEm}</strong>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Equipamentos adequados para residências, condomínios e comércios da {zona}.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Desentupimento de Pias e Ralos',
                  'Desobstrução de Esgoto Principal',
                  'Limpeza de Fossa Séptica',
                  'Hidrojateamento de Alta Pressão',
                  'Vídeo Inspeção de Tubulação',
                  'Caça Vazamento de Água'
                ].map((servico, i) => (
                  <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors flex items-center gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg text-red-500 shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <span className="font-medium text-lg">{servico}</span>
                  </div>
                ))}
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
`;

    fs.writeFileSync(filePath, conteudo.trim());
    importacoesRotas += `import ${nomeComponente} from './pages/locais/${nomeComponente}';\n`;
    definicoesRotas += `      <Route path="${urlPath}" element={<${nomeComponente} />} />\n`;

    contador++;
  });
});

const appRoutesContent = `
${importacoesRotas}

export default function AppRoutes() {
  return (
    <Routes>
${definicoesRotas}
    </Routes>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../AppRoutes.jsx'), appRoutesContent.trim());

console.log(`\n🚀 Sucesso! ${contador} páginas geradas com o Head SEO Avançado completo.`);