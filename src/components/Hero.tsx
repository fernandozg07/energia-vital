import React from 'react';
import { ArrowRight, Sparkles, Heart, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Elementos Geométricos de Fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400/8 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Conteúdo Principal (Agora sempre o primeiro elemento no mobile) */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 sm:mb-8">
              <Sparkles className="text-yellow-400" size={32} />
              <span className="text-yellow-400 font-bold text-xl">Energia Vital</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
              Equilibramos
              <span className="text-yellow-400 block">Corpo e Mente</span>
              <span className="text-white block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">com Acupuntura</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Alívio natural para dores, ansiedade e estresse. Recupere sua energia vital 
              com tratamentos personalizados e técnicas milenares comprovadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12 sm:mb-16">
              <a
                href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão de acupuntura na Energia Vital."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Agende sua Sessão</span>
                <ArrowRight size={20} />
              </a>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Conhecer Tratamentos
              </button>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">10</div>
                <div className="text-white font-medium text-xs sm:text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-white font-medium text-xs sm:text-sm">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">9+</div>
                <div className="text-white font-medium text-xs sm:text-sm">Terapias</div>
              </div>
            </div>
          </div>
          
          {/* Card de Destaque (Agora é o segundo elemento no código, mas 'order-last' o move para a direita no desktop) */}
          <div className="relative lg:order-last animate-slide-up">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-yellow-400/20">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Award className="text-black" size={20} />
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Tratamentos Personalizados
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Cada sessão é desenvolvida especificamente para suas necessidades, 
                    combinando técnicas milenares com conhecimento moderno.
                  </p>
                </div>
                
                {/* Benefícios */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="text-yellow-400" size={18} />
                    <span className="text-gray-300 text-sm sm:text-base">Alívio natural da dor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-yellow-400" size={18} />
                    <span className="text-gray-300 text-sm sm:text-base">Redução do estresse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="text-yellow-400" size={18} />
                    <span className="text-gray-300 text-sm sm:text-base">Melhora do bem-estar</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a
                    href="https://wa.me/5511999997316?text=Olá! Gostaria de marcar minha consulta na Energia Vital."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base text-center transition-all duration-300 transform hover:-translate-y-1 inline-block"
                  >
                    Marque Sua Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;