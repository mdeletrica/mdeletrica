import { motion } from 'motion/react';
import { 
  Zap, 
  Home, 
  Building2, 
  Settings, 
  Lightbulb, 
  ShieldCheck,
  Plug,
  Activity,
  Wind
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Instalações Residenciais',
      description: 'Instalações elétricas completas para sua casa com segurança e eficiência.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Building2,
      title: 'Instalações Comerciais',
      description: 'Soluções elétricas para empresas, lojas e estabelecimentos comerciais.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Settings,
      title: 'Manutenção Preventiva',
      description: 'Inspeções regulares para garantir o funcionamento seguro de suas instalações.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Reparos Elétricos',
      description: 'Diagnóstico e correção de problemas elétricos com rapidez e precisão.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Iluminação',
      description: 'Projetos de iluminação residencial e comercial, incluindo LED e automação.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: ShieldCheck,
      title: 'Quadros Elétricos',
      description: 'Montagem e adequação de quadros de distribuição e proteção.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Plug,
      title: 'Tomadas e Interruptores',
      description: 'Instalação e substituição de tomadas, interruptores e dispositivos elétricos.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Activity,
      title: 'Diagnóstico Elétrico',
      description: 'Análise completa de instalações elétricas com relatório técnico detalhado.',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Wind,
      title: 'Instalação de Ar Condicionado',
      description: 'Instalação elétrica para aparelhos de ar condicionado e ventilação.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4">
            Soluções <span className="text-blue-600">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços elétricos para atender todas as suas necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.iconColor} size={32} />
              </div>
              
              <h3 className="text-xl mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <button className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-2 group-hover:gap-3 transition-all`}>
                Saiba Mais
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">Não encontrou o que procura?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Temos soluções personalizadas para atender suas necessidades específicas.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
