import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-[6px] border-red-700">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Marca e Descrição */}
          <div className="space-y-6">
            <img src="src/assets/imagens/logo_branco_cor.webp" alt="Grupo Protec Desentupidora" loading="lazy" className="h-16" />
            <p className="text-sm leading-relaxed text-gray-400">
              Há mais de 15 anos oferecendo excelência em serviços hidrossanitários. Atendimento 24 horas rápido, limpo e com equipamentos modernos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Principais Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-400 transition flex items-center"><ChevronRight size={16} className="text-red-600 mr-1"/> Desentupidora no Morumbi</a></li>
              <li><a href="#" className="hover:text-red-400 transition flex items-center"><ChevronRight size={16} className="text-red-600 mr-1"/> Desentupimento de Esgoto</a></li>
              <li><a href="#" className="hover:text-red-400 transition flex items-center"><ChevronRight size={16} className="text-red-600 mr-1"/> Caminhão Limpa Fossa</a></li>
              <li><a href="#" className="hover:text-red-400 transition flex items-center"><ChevronRight size={16} className="text-red-600 mr-1"/> Hidrojateamento</a></li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Links Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/empresa" className="hover:text-red-400 transition">Sobre a Empresa</a></li>
              <li><a href="/blog" className="hover:text-red-400 transition">Blog e Dicas</a></li>
              <li><a href="/politica-privacidade" className="hover:text-red-400 transition">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contato & SEO Local */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={20} />
                <span>Atendimento em Morumbi, Zona Sul, Grande São Paulo e ABC Paulista.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span className="text-lg font-bold text-white">(11) 94010-3334</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={20} />
                <a href="mailto:contato@desentupidoraprotec.com.br" className="hover:text-white transition">contato@desentupidoraprotec.com.br</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Grupo Protec Desentupidora. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com foco em <span className="text-red-600 font-semibold">Performance e SEO</span></p>
        </div>
      </div>
    </footer>
  );
}