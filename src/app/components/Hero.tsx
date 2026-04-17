import { motion } from 'motion/react';
import { Zap, Shield, Clock } from 'lucide-react';
import heroImage from 'figma:asset/076f168b236cd9035e688d1d3b5ed734392ee032.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="text-yellow-400" size={20} />
            <span className="text-yellow-400">Energia e Qualidade</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl mb-6">
            <span className="block">Soluções</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Elétricas
            </span>
            <span className="block">Completas</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Instalações, manutenções e reparos elétricos com segurança e profissionalismo. 
            Atendemos Fortim e região com excelência há mais de 10 anos.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="tel:+5585999999999" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
            >
              (85) 99999-9999
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-500/20 border border-blue-400/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Zap className="text-blue-400" size={28} />
              </div>
              <p className="text-sm text-gray-300">Rápido</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-green-500/20 border border-green-400/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Shield className="text-green-400" size={28} />
              </div>
              <p className="text-sm text-gray-300">Seguro</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-yellow-500/20 border border-yellow-400/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="text-yellow-400" size={28} />
              </div>
              <p className="text-sm text-gray-300">24/7</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="MD Elétrica - Oficina" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="text-gray-800 mb-1">Nossa Oficina</p>
                <p className="text-sm text-gray-600">R. Izídio Moura, 113 - Fortim</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
