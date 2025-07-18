import React from 'react';
import { MapPin, Clock, Phone, Navigation, Calendar } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'Mariporã Centro',
      address: 'Alameda Tibiriçá, 60',
      district: 'Centro, Mariporã - SP',
      schedule: [
        { day: 'Quarta-feira', hours: '07:00–11:00 / 14:30–17:00' },
        { day: 'Quinta-feira', hours: '07:00–11:00' }
      ],
      color: 'yellow',
      image: '/frente.jpg',
      features: ['Estacionamento gratuito', 'Ambiente climatizado', 'Fácil acesso']
    },
    {
      name: 'Vila Palmeiras',
      address: 'Rua Ribeirão das Almas, 337',
      district: 'Paróquia São José, Vila Palmeiras - SP',
      schedule: [
        { day: 'Sexta-feira', hours: '07:00–11:00 / 14:00–17:00' }
      ],
      color: 'yellow',
      image: '/image.png',
      features: ['Ambiente acolhedor', 'Localização central', 'Atendimento personalizado']
    }
  ];

  return (
    <section id="locations" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Nossas Unidades
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Duas unidades estrategicamente localizadas para oferecer o melhor atendimento 
            em acupuntura e terapias naturais perto de você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-64 sm:h-72 lg:h-80 relative">
                <img
                  src={location.image}
                  alt={`Unidade ${location.name} da Energia Vital`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold">
                    {location.name}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{location.name}</h3>
                  <p className="text-gray-200">Ambiente acolhedor e profissional</p>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                  {/* Endereço */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900 text-base sm:text-lg">{location.address}</p>
                      <p className="text-gray-700 text-sm sm:text-base">{location.district}</p>
                    </div>
                  </div>
                  
                  {/* Horários */}
                  <div className="flex items-start space-x-4">
                    <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Horários de Atendimento:</p>
                      {location.schedule.map((schedule, scheduleIndex) => (
                        <div key={scheduleIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 bg-gray-50 rounded-lg p-3">
                          <span className="text-gray-700 text-sm sm:text-base font-medium">{schedule.day}:</span>
                          <span className="font-bold text-gray-900 text-sm sm:text-base">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Características */}
                  <div className="flex items-start space-x-4">
                    <Calendar className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Diferenciais:</p>
                      <div className="space-y-2">
                        {location.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma consulta na unidade ${location.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    <Phone size={20} />
                    <span>Agendar Consulta</span>
                  </a>
                  
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(location.address + ', ' + location.district)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Navigation size={20} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Ajuda */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
              Precisa de Ajuda para Escolher a Unidade?
            </h3>
            <p className="text-gray-300 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudá-lo a escolher a unidade mais conveniente 
              e agendar sua consulta no melhor horário para você. Atendimento personalizado 
              e acolhedor em ambas as unidades.
            </p>
            
            {/* Informações de Contato */}
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Phone className="text-yellow-400" size={28} />
                <span className="text-white font-bold text-xl sm:text-2xl">(11) 99999-7316</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Atendimento via WhatsApp • Resposta rápida • Agendamento fácil
              </p>
            </div>
            
            <a
              href="https://wa.me/5511999997316?text=Olá! Preciso de ajuda para escolher a unidade mais conveniente para mim."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-yellow-600/25 inline-block"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;