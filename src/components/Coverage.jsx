import { MapPin } from 'lucide-react';
import { regioes } from '../data/locais';

// Função auxiliar para gerar URLs amigáveis (slugs)
const gerarSlug = (bairro) => {
  return bairro.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, '-'); // Troca espaços por hífen
};

export default function Coverage() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="text-center mb-16 space-y-4">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Áreas de Atendimento</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Grupo Protec - Serviços de Desentupidora em São Paulo
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Entre em contato. Mesmo que a sua região não esteja na lista abaixo, fale conosco e veremos como podemos lhe atender com rapidez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {regioes.map((regiao, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{regiao.zona}</h3>
              </div>
              <ul className="space-y-3">
                {regiao.bairros.map((bairro, i) => (
                  <li key={i} className="text-gray-600 hover:text-red-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <a 
                      href={`/servicos/desentupidora-em-${gerarSlug(bairro)}`} 
                      className="font-medium text-sm leading-tight"
                    >
                      Desentupidora em {bairro}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}