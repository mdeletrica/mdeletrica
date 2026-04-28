import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MD</span>
              </div>
              <span className="text-xl font-bold">MD Elétrica</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluções elétricas completas com segurança e qualidade para Fortim e região.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Instalações Residenciais</li>
              <li>Instalações Comerciais</li>
              <li>Manutenção Preventiva</li>
              <li>Reparos Elétricos</li>
              <li>Iluminação LED</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>R. Izídio Moura, 113<br />Fortim - CE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+5585981429679" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (85) 98142-9679
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:contato@mdeletrica.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contato@mdeletrica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} MD Elétrica. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 text-center">
          <p className="text-gray-900 font-bold text-lg mb-2">⚡ Emergências 24 horas</p>
          <p className="text-gray-800">Problemas elétricos urgentes? Ligue agora!</p>
          <a 
            href="tel:+5585981429679" 
            className="inline-block mt-4 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            (85) 98142-9679
          </a>
        </div>
      </div>
    </footer>
  );
}
