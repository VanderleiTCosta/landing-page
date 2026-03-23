import { PhoneCall } from 'lucide-react';

export default function Hero() {
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center bg-gray-900">
      {/* Background Otimizado (LCP) */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="/assets/servicos/background.webp" 
          alt="Desentupidora Profissional em Ação" 
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/90 to-orange-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* SEO Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-green-700 text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">
              Visita Técnica Gratuita
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Desentupidora no Morumbi <br />
              <span className="text-orange-400">24h em São Paulo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
              Serviço rápido, limpo e com garantia. Desentupimento de pias, ralos, esgotos e limpa fossa com equipamentos de alta tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href={whatsappLink} className="flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:border-orange-400 transition group">
                <PhoneCall className="text-orange-400" size={24} />
                <div className="text-left">
                  <div className="text-orange-400 text-xs font-bold uppercase">WhatsApp 24h</div>
                  <div className="text-xl font-bold text-white group-hover:text-orange-400 transition">(11) 94010-3334</div>
                </div>
              </a>
              <a href="tel:08005919537" className="flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:border-orange-400 transition group">
                <PhoneCall className="text-orange-400" size={24} />
                <div className="text-left">
                  <div className="text-orange-400 text-xs font-bold uppercase">Ligue Grátis</div>
                  <div className="text-xl font-bold text-white group-hover:text-orange-400 transition">0800 591 9537</div>
                </div>
              </a>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Orçamento</h2>
            <p className="text-gray-500 mb-6 text-sm">Preencha e receba contato imediato.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Seu Nome*" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition" />
              </div>
              <div>
                <input type="tel" placeholder="Telefone / WhatsApp*" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition" />
              </div>
              <div>
                <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition text-gray-700">
                  <option value="">Selecione o problema...</option>
                  <option value="pia">Desentupimento de Pia</option>
                  <option value="vaso">Desentupimento de Vaso</option>
                  <option value="esgoto">Desentupimento de Esgoto</option>
                  <option value="outros">Outros Serviços</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-green-700 transition shadow-md">
                AGENDAR VISITA
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}