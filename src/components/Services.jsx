import { Wrench, Truck, Droplet, Camera, Search, Droplets } from 'lucide-react';

const servicos = [
  { title: 'Desentupimento', icon: Wrench, img: 'desentupimento.webp', desc: 'Desobstrução rápida de pias, ralos, vasos sanitários e redes de esgoto pluvial ou cloacal.' },
  { title: 'Limpa Fossa', icon: Truck, img: 'limpa-fossa.webp', desc: 'Caminhões auto vácuo potentes para esgotamento de fossas sépticas, negras e sumidouros.' },
  { title: 'Hidrojateamento', icon: Droplet, img: 'hidrojateamento.webp', desc: 'Limpeza de tubulações com jatos d\'água de alta pressão, removendo placas de gordura e sujeira.' },
  { title: 'Vídeo Inspeção', icon: Camera, img: 'video-inspecao.webp', desc: 'Mapeamento interno de canos com microcâmeras para localizar rachaduras sem quebrar o piso.' },
  { title: 'Caça Vazamento', icon: Search, img: 'caca-vazamento.webp', desc: 'Geofonamento eletrônico para localizar vazamentos ocultos de água limpa.' },
  { title: 'Limpeza de Caixas', icon: Droplets, img: 'limpeza.webp', desc: 'Higienização e desinfecção de reservatórios e caixas d\'água.' }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-3">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Nossas Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Serviços de Desentupimento e Hidráulica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => {
            const Icon = servico.icon;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  {/* loading="lazy" é fundamental aqui para o PageSpeed! */}
                  <img 
                    src={`/assets/servicos/${servico.img}`} 
                    alt={servico.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{servico.title}</h3>
                  <p className="text-gray-600 mb-4">{servico.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  );
}