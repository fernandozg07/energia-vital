import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img 
              src="/logo.png" 
              alt="Energia Vital - Acupuntura e Terapias Naturais" 
              className="h-12 sm:h-16 w-auto mb-6"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.style.display = 'block';
              }}
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 hidden">Energia Vital</h3>
            <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Há mais de 15 anos transformando vidas através da acupuntura e terapias naturais. 
              Equilibramos corpo e mente para restaurar sua energia vital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                aria-label="Instagram da Energia Vital"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                aria-label="Facebook da Energia Vital"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>

          {/* Tratamentos */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Nossos Tratamentos</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Acupuntura</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Eletroacupuntura</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Apiterapia</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Quiropraxia</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span>Massagem Terapêutica</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition-colors duration-300 font-bold"
                >
                  Ver Todos os Tratamentos →
                </a>
              </li>
            </ul>
          </div>

          {/* Unidade Mariporã */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Mariporã Centro</h4>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Alameda Tibiriçá, 60</p>
                  <p className="text-xs sm:text-sm text-gray-400">Centro, Mariporã - SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium mb-2">Horários:</p>
                  <p className="text-xs sm:text-sm">Quarta: 07:00-11:00 / 14:30-17:00</p>
                  <p className="text-xs sm:text-sm">Quinta: 07:00-11:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unidade Vila Palmeiras */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Vila Palmeiras</h4>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Rua Ribeirão das Almas, 337</p>
                  <p className="text-xs sm:text-sm text-gray-400">Paróquia São José, Vila Palmeiras - SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium mb-2">Horários:</p>
                  <p className="text-xs sm:text-sm">Sexta: 07:00-11:00 / 14:00-17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contato Principal */}
        <div className="border-t border-gray-700 mt-12 sm:mt-16 pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma consulta na Energia Vital."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
              >
                <Phone size={28} className="group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <span className="font-bold text-lg sm:text-xl block">(11) 99999-7316</span>
                  <span className="text-sm text-gray-400">WhatsApp • Resposta rápida</span>
                </div>
              </a>
            </div>
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma consulta na Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-600/25"
            >
              Agendar Consulta
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p className="mb-2">&copy; 2024 Energia Vital. Todos os direitos reservados.</p>
          <p className="text-xs sm:text-sm flex items-center justify-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart className="text-yellow-600 fill-current" size={16} />
            <span>para promover saúde e bem-estar natural.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;