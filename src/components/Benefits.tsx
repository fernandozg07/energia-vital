import React from 'react';
import { Scale, Brain, Zap, Activity, Bone, Droplets, Moon, Stethoscope, Heart, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { 
      icon: <Scale className="text-black" size={28} />, 
      title: 'Emagrecimento Natural', 
      description: 'Acelere o metabolismo e controle a ansiedade alimentar de forma natural e saudável'
    },
    { 
      icon: <Brain className="text-black" size={28} />, 
      title: 'Ansiedade e Depressão', 
      description: 'Equilibre mente e emoções, reduzindo sintomas de ansiedade e melhorando o humor'
    },
    { 
      icon: <Zap className="text-black" size={28} />, 
      title: 'Enxaqueca e Dores de Cabeça', 
      description: 'Alívio duradouro das dores de cabeça crônicas e enxaquecas tensionais'
    },
    { 
      icon: <Activity className="text-black" size={28} />, 
      title: 'Energia e Vitalidade', 
      description: 'Recupere sua energia física e mental, combatendo a fadiga e o cansaço'
    },
    { 
      icon: <Bone className="text-black" size={28} />, 
      title: 'Dores na Coluna', 
      description: 'Tratamento eficaz para dores lombares, cervicais e problemas posturais'
    },
    { 
      icon: <Droplets className="text-black" size={28} />, 
      title: 'Problemas Respiratórios', 
      description: 'Melhore sua capacidade respiratória e fortaleça o sistema imunológico'
    },
    { 
      icon: <Moon className="text-black" size={28} />, 
      title: 'Insônia e Distúrbios do Sono', 
      description: 'Recupere um sono reparador e de qualidade, melhorando seu descanso'
    },
    { 
      icon: <Stethoscope className="text-black" size={28} />, 
      title: 'Diabetes e Metabolismo', 
      description: 'Auxílio no controle natural dos níveis de açúcar no sangue'
    },
    { 
      icon: <Heart className="text-black" size={28} />, 
      title: 'Problemas Digestivos', 
      description: 'Melhore sua digestão, reduza azia e fortaleça a saúde intestinal'
    },
    { 
      icon: <Users className="text-black" size={28} />, 
      title: 'Saúde Feminina', 
      description: 'Equilibre o ciclo hormonal e trate distúrbios menstruais naturalmente'
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Problemas que Tratamos
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nossas terapias naturais oferecem alívio eficaz para uma ampla gama de condições, 
            proporcionando melhora significativa na qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-3xl hover:bg-yellow-50 transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-yellow-600 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-yellow-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {React.cloneElement(benefit.icon, { size: 32, className: "text-white" })}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Credibilidade */}
        <div className="mt-16 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Resultados Comprovados
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
              Mais de 500 pacientes já experimentaram os benefícios das nossas terapias naturais
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Alívio da Dor</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-2">88%</div>
              <div className="text-gray-700 font-medium">Redução do Estresse</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-2">92%</div>
              <div className="text-gray-700 font-medium">Melhora do Sono</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Satisfação</div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 sm:mt-20 bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Descubra Como Podemos Ajudar Você
          </h3>
          <p className="text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg lg:text-xl">
            Cada pessoa é única, e nossos tratamentos são personalizados para suas necessidades específicas. 
            Agende uma consulta e inicie sua jornada de bem-estar hoje mesmo.
          </p>
          <a
            href="https://wa.me/5511999997316?text=Olá! Gostaria de uma consulta gratuita para avaliar meu caso na Energia Vital."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-yellow-600/25 inline-block"
          >
            Tire suas dúvidas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;