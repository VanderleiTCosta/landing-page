import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Helena Cecília',
    location: 'Morumbi/SP',
    text: 'Estava buscando uma empresa desentupidora e encontrei o Grupo Protec, fico muito feliz em ter encontrado a empresa, chegaram muito rápido e resolveram meu problema de verdade, recomendo!',
  },
  {
    name: 'João Antonio',
    location: 'Osasco/SP',
    text: 'O esgoto da minha casa estava entupido há dias, sem saber como resolver chamei a Protec, cobraram muito mais barato para resolver do que imaginava.',
  },
  {
    name: 'Francisco Junior',
    location: 'Alphaville/SP',
    text: 'Estava buscando no Google por uma empresa profissional para realizar um serviço de desobstrução na empresa, fiquei muito satisfeito com o atendimento deles.',
  },
  {
    name: 'Laura Alice',
    location: 'Santo André/SP',
    text: 'Obrigada Grupo Protec, atendimento ótimo e meus problemas foram solucionados. Empresa profissional e preço justo, sensacional!',
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm">O que dizem nossos clientes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nossa Reputação é nosso maior patrimônio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, index) => (
            <article key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow">"{test.text}"</p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="font-bold text-gray-900">{test.name}</p>
                <p className="text-sm text-gray-500">{test.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}