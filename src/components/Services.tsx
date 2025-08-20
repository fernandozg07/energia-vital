import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Acupuntura',
      description: 'Alívio natural para dores crônicas, enxaquecas, ansiedade e estresse. Técnica milenar que equilibra sua energia vital.',
      image: '/acupuntura.jpg',
      category: 'Medicina Tradicional Chinesa',
      benefits: ['Alívio da dor', 'Redução do estresse', 'Melhora do sono']
    },
    {
      title: 'Eletroacupuntura',
      description: 'Potencialize os resultados da acupuntura tradicional com estímulos elétricos suaves para tratamentos mais eficazes.',
      image: '/eletro.jpg',
      category: 'Medicina Tradicional Chinesa',
      benefits: ['Resultados potencializados', 'Recuperação acelerada', 'Alívio duradouro']
    },
    {
      title: 'Moxabustão',
      description: 'Fortalecimento do organismo através do calor terapêutico da artemísia, estimulando pontos específicos.',
      image: '/moxa.jpg',
      category: 'Medicina Tradicional Chinesa',
      benefits: ['Fortalece imunidade', 'Melhora circulação', 'Energia vital']
    },
    {
      title: 'Quiropraxia',
      description: 'Correção de desalinhamentos da coluna vertebral para alívio de dores nas costas e melhora da postura.',
      image: '/quiro.jpg',
      category: 'Terapia Manual',
      benefits: ['Alívio da dor lombar', 'Melhora da postura', 'Mobilidade restaurada']
    },
    {
      title: 'Auriculoterapia',
      description: 'Tratamento através de pontos reflexos na orelha para diversos problemas de saúde e dependências.',
      image: '/auriculo.jpg',
      category: 'Medicina Tradicional Chinesa',
      benefits: ['Controle da ansiedade', 'Auxílio no emagrecimento', 'Redução de vícios']
    },
    {
      title: 'Apiterapia',
      description: 'Fortalecimento do sistema imunológico com produtos naturais das abelhas: mel, própolis e geleia real.',
      image: '/apiterapia.jpg',
      category: 'Terapia Natural',
      benefits: ['Sistema imune forte', 'Anti-inflamatório natural', 'Energia renovada']
    },
    {
      title: 'Massagem Terapêutica',
      description: 'Relaxamento muscular profundo, alívio de tensões e melhora da circulação sanguínea.',
      image: '/massagem.jpg',
      category: 'Terapia Manual',
      benefits: ['Relaxamento profundo', 'Alívio de tensões', 'Circulação melhorada']
    },
    {
      title: 'Ozônioterapia',
      description: 'Oxigenação dos tecidos e estímulo do sistema imunológico através do ozônio medicinal.',
      image: '/ozonio.jpg',
      category: 'Terapia Moderna',
      benefits: ['Oxigenação celular', 'Combate infecções', 'Regeneração tecidual']
    },
    {
      title: 'Ventosaterapia',
      description: 'Melhora da circulação e eliminação de toxinas através da técnica milenar das ventosas.',
      image: '/ventosa.jpg',
      category: 'Medicina Tradicional Chinesa',
      benefits: ['Circulação melhorada', 'Desintoxicação', 'Alívio muscular']
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
            Nossos Tratamentos
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Terapias naturais personalizadas para tratar as causas dos seus desequilíbrios 
            e restaurar sua energia vital de forma duradoura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Tratamento de ${service.title} na Energia Vital`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Benefícios */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={`https://wa.me/5511999997316?text=Olá! Gostaria de saber mais sobre ${service.title} na Energia Vital.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-center transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
                >
                  <span>Agendar Sessão</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-8 sm:p-12 text-black">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Não Sabe Qual Tratamento Escolher?
            </h3>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              Nossa equipe especializada irá avaliar seu caso e recomendar 
              o tratamento mais adequado para suas necessidades específicas.
            </p>
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de uma avaliação gratuita para saber qual tratamento é ideal para mim."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl inline-block"
            >
              Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;