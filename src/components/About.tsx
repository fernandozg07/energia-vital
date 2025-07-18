import React from 'react';
import { Heart, Leaf, Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Sobre a Energia Vital
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Há mais de 15 anos transformando vidas através da medicina tradicional chinesa 
            e terapias naturais, com foco no seu bem-estar integral.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          <div className="order-2 lg:order-1 animate-slide-up">
            <img
              src="/grupo.jpg"
              alt="Ambiente terapêutico acolhedor da Energia Vital"
              className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Nossa Missão
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              A Energia Vital nasceu da paixão por proporcionar alívio natural e duradouro 
              para dores físicas e emocionais. Acreditamos que cada pessoa possui uma 
              capacidade inata de cura, e nosso papel é despertar essa energia vital.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
              Especializados em acupuntura, apiterapia e terapias integrativas, oferecemos 
              um cuidado personalizado que trata as causas dos desequilíbrios, não apenas os sintomas.
            </p>
            
            {/* Estatísticas de Credibilidade */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Vidas Transformadas</div>
              </div>
            </div>
            
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de conhecer mais sobre os tratamentos da Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 inline-block shadow-lg"
            >
              Converse Conosco
            </a>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white hover:bg-yellow-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Cuidado Personalizado</h4>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Cada tratamento é desenvolvido especificamente para suas necessidades, 
              respeitando sua individualidade e histórico de saúde.
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white hover:bg-yellow-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="text-white" size={32} />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">100% Natural</h4>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Utilizamos apenas métodos naturais e técnicas milenares, 
              respeitando os processos naturais do seu organismo.
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white hover:bg-yellow-50 transition-all duration-300 group sm:col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Segurança Garantida</h4>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Todos os procedimentos seguem rigorosos protocolos de segurança 
              e são realizados por profissionais qualificados e experientes.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Pronto para Transformar sua Vida?
          </h3>
          <p className="text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg lg:text-xl">
            Agende uma consulta gratuita e descubra como nossas terapias naturais 
            podem ajudar você a recuperar sua energia vital e bem-estar.
          </p>
          <a
            href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma consulta gratuita na Energia Vital."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-yellow-600/25 inline-block"
          >
            Consulta Gratuita via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;