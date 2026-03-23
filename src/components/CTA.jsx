import { PhoneCall } from 'lucide-react';

export default function CTA() {
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <section className="py-24 bg-red-600 text-white relative overflow-hidden">
      {/* Background Pattern leve */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Seu esgoto entupiu? Não quebre nada antes de nos ligar!
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto font-medium">
            Temos viaturas de plantão no Morumbi e região prontas para te socorrer agora mesmo. Orçamento presencial sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href={whatsappLink} className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1">
              <PhoneCall size={24} />
              CHAMAR VIA WHATSAPP
            </a>
            <a href="tel:08005919537" className="bg-white text-red-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-bold text-lg shadow-xl hover:-translate-y-1">
              LIGAR NO 0800
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}