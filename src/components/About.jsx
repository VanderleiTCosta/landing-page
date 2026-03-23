import { Clock, Shield, Wrench, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto Sobre Nós */}
          <article className="space-y-6">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Sobre o Grupo Protec</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Mais de 15 anos de excelência em <span className="text-red-600">Desentupimento</span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                A <strong>Desentupidora Protec</strong> é uma referência tradicional no mercado, com compromisso total com a sua tranquilidade. Desde a nossa fundação, temos nos dedicado a oferecer serviços de máxima qualidade para residências, condomínios e indústrias em toda São Paulo.
              </p>
              <p>
                Nosso foco não é apenas resolver o problema emergencial, mas garantir que suas instalações hidrossanitárias funcionem perfeitamente a longo prazo. Trabalhamos seguindo rigorosas normas técnicas e ambientais.
              </p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {['Atendimento 24 horas por dia, 7 dias por semana', 'Visita técnica e orçamento gratuitos sem compromisso', 'Frota própria com caminhões auto vácuo e hidrojateamento'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Diferenciais (Cards) */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pontualidade</h3>
              <p className="text-gray-600">Marcou, chegou! Respeitamos o horário agendado em todos os atendimentos para resolver sua urgência o mais rápido possível.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition mt-0 sm:mt-8">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profissionais</h3>
              <p className="text-gray-600">Equipe altamente treinada e uniformizada. Segurança total para sua família ou empresa durante a execução do serviço.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition sm:col-span-2">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equipamentos Modernos</h3>
              <p className="text-gray-600">Utilizamos máquinas Kavo, sondas flexíveis e caminhões de hidrojateamento que desobstruem sem a necessidade de quebrar pisos ou paredes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}