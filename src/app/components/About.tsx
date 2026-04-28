import { motion } from 'motion/react';
import { Award, Users, Wrench, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '10+', label: 'Experiência' },
    { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
    { icon: Wrench, value: '1000+', label: 'Serviços Realizados' },
    { icon: TrendingUp, value: '100%', label: 'Compromisso' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Quem Somos</span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4">
            Excelência em <span className="text-blue-600">Serviços Elétricos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A MD Elétrica é referência em soluções elétricas em Fortim e região
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
              <h3 className="text-3xl mb-6">Nossa História</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                A MD Elétrica nasceu do sonho de oferecer 
                serviços elétricos de qualidade com segurança e compromisso.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Conquistamos a confiança de centenas de clientes, 
                sempre priorizando a excelência em cada projeto, seja residencial, 
                comercial ou industrial.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-600">
              <h4 className="text-xl mb-3 text-gray-800">🎯 Missão</h4>
              <p className="text-gray-600">
                Fornecer soluções elétricas seguras, eficientes e de alta qualidade, 
                garantindo a satisfação total de nossos clientes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400">
              <h4 className="text-xl mb-3 text-gray-800">👁️ Visão</h4>
              <p className="text-gray-600">
                Ser a empresa de referência em serviços elétricos no Ceará, 
                reconhecida pela qualidade, segurança e inovação.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl mb-3 text-gray-800">💎 Valores</h4>
              <p className="text-gray-600">
                Compromisso, segurança, qualidade, pontualidade e respeito ao cliente 
                são os pilares que sustentam nosso trabalho diário.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
