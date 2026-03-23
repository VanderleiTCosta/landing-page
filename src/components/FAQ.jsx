import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Como pode ser feito o desentupimento sem quebrar pisos?",
    a: "Utilizamos equipamentos de ponta (máquinas roto-rooter) com cabos de aço flexíveis que navegam pela tubulação, triturando a sujeira e raspando as paredes do cano por dentro, eliminando a necessidade de quebrar paredes ou pisos na vasta maioria dos casos."
  },
  {
    q: "A máquina de desentupimento pode furar a tubulação?",
    a: "Não. Nossas ponteiras são arredondadas e o equipamento é manuseado exclusivamente por técnicos capacitados. A máquina remove apenas a crosta de sujeira, preservando a integridade do PVC ou ferro."
  },
  {
    q: "Quanto tempo demora o serviço?",
    a: "Um desentupimento padrão de pia ou ralo costuma levar entre 30 a 60 minutos. Casos mais severos na rede de esgoto principal podem levar um pouco mais de tempo, mas nossa equipe trabalha com agilidade focada na solução."
  },
  {
    q: "Existe garantia ao consumidor após a execução do serviço?",
    a: "Sim! Emitimos certificado de garantia por escrito com validade de até 90 dias (conforme o Código de Defesa do Consumidor), além do laudo técnico e nota fiscal para empresas e condomínios."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">Veja o que a maioria de nossos clientes pergunta antes de contratar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-red-300 transition-colors">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={open === i}
              >
                <span className="font-bold text-gray-900 pr-8 text-lg">{faq.q}</span>
                {open === i ? <ChevronUp className="text-red-600 shrink-0" size={24}/> : <ChevronDown className="text-gray-400 shrink-0" size={24}/>}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}