export default function Clients() {
  const clients = ['Avon', 'Votorantim', 'Bradesco', 'Banco do Brasil', 'Itaú', 'Petrobras'];

  return (
    <section className="py-16 bg-red-900 border-y border-red-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Empresas que confiam na Protec</h2>
          <p className="text-red-200">Atendemos grandes instituições corporativas com contratos de manutenção preventiva e corretiva.</p>
        </div>
        
        {/* Usando texto como placeholder para os logos, substitua pelos <img> reais se os tiver */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {clients.map((client, index) => (
            <div key={index} className="text-xl md:text-2xl font-black text-white uppercase tracking-widest grayscale hover:grayscale-0 transition duration-300">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}