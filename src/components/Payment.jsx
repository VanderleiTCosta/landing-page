import { CreditCard } from 'lucide-react';

export default function Payment() {
  const whatsappLink = "https://wa.me/5511940103334";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <CreditCard className="text-orange-400" size={28} />
              </div>
              <h2 className="text-3xl font-bold leading-tight">Pagamento facilitado para resolver o seu problema hoje.</h2>
            </div>
            <p className="text-gray-300 text-lg">
              Aceitamos diversas formas de pagamento para não pesar no seu orçamento. Parcelamos o seu serviço no cartão de crédito.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['PIX', 'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito', 'Boleto Bancário'].map((method, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition cursor-default">
                  {method}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <a href={whatsappLink} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                SOLICITAR ORÇAMENTO AGORA
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img 
              src="/assets/desentupidora-1.webp" 
              alt="Serviço de desentupimento" 
              loading="lazy" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover opacity-80"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 p-6 rounded-2xl shadow-xl border-4 border-gray-900">
              <p className="text-3xl font-black text-white">S/ Juros</p>
              <p className="text-red-100 font-medium uppercase tracking-widest text-sm">Consulte condições</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}