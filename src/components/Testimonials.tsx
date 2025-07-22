import React, { useState } from 'react';
import { Star, Quote, CheckCircle, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Define um tipo para as informações do vídeo
type VideoInfo = {
  type: 'youtube' | 'direct';
  source: string; // YouTube ID ou URL direta do vídeo
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      age: '45 anos',
      condition: 'Enxaqueca Crônica',
      text: 'Sofria com enxaquecas diárias há mais de 10 anos. Depois de apenas 6 sessões de acupuntura na Energia Vital, as crises diminuíram drasticamente. Hoje tenho uma qualidade de vida que não imaginava ser possível.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300', // Foto para depoimento de texto
      rating: 5,
      result: 'Redução de 90% das crises',
      videoUrl: 'video1.mp4', // Vídeo MP4 direto (assumindo que está na pasta public)
      thumbnailImage: 'https://example.com/thumbnails/maria_video_capa.jpg' // **SUBSTITUA PELA CAPA REAL DO VÍDEO DA MARIA**
    },
    {
      name: 'João Santos',
      age: '52 anos',
      condition: 'Dores na Coluna',
      text: 'Trabalho em escritório há 20 anos e desenvolvi dores lombares crônicas. A combinação de quiropraxia e acupuntura me devolveu a mobilidade. Não sinto mais dores e posso brincar com meus netos novamente.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300', // Foto para depoimento de texto
      rating: 5,
      result: 'Alívio completo das dores',
      videoUrl: 'video2.mp4', // Exemplo de URL de vídeo MP4
      thumbnailImage: 'https://example.com/thumbnails/joao_video_capa.jpg' // **SUBSTITUA PELA CAPA REAL DO VÍDEO DO JOÃO**
    },
    {
      name: 'Ana Costa',
      age: '38 anos',
      condition: 'Ansiedade e Insônia',
      text: 'A ansiedade estava controlando minha vida e eu não conseguia dormir. A auriculoterapia e acupuntura transformaram meu sono e diminuíram significativamente minha ansiedade. Finalmente tenho paz interior.',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300', // Foto para depoimento de texto
      rating: 5,
      result: 'Sono restaurado e ansiedade controlada',
      videoUrl: 'video3.mp4', // **SUBSTITUA PELO ID REAL DO VÍDEO DA ANA NO YOUTUBE**
      // Para vídeos do YouTube, a thumbnail pode ser gerada automaticamente se thumbnailImage for undefined
      // ou você pode fornecer uma URL específica aqui.
    },
    {
      name: 'Carlos Oliveira',
      age: '60 anos',
      condition: 'Problemas Respiratórios',
      text: 'Bronquite crônica me acompanhava há anos. Os tratamentos naturais da Energia Vital fortaleceram meu sistema respiratório e imunológico. Respiro melhor e tenho muito mais energia.',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=300', // Foto para depoimento de texto
      rating: 5,
      result: 'Respiração melhorada em 80%',
      videoUrl: 'video4.mp4', // **SUBSTITUA PELO ID REAL DO VÍDEO DO CARLOS NO YOUTUBE**
      // Para vídeos do YouTube, a thumbnail pode ser gerada automaticamente se thumbnailImage for undefined
    },
    {
      name: 'Lucia Ferreira',
      age: '55 anos',
      condition: 'Artrite',
      text: 'A apiterapia foi revolucionária no tratamento da minha artrite. As dores nas articulações diminuíram drasticamente e recuperei mobilidade que havia perdido. Recomendo para todos que sofrem com dores.',
      image: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      result: 'Mobilidade restaurada'
      // Este depoimento não tem videoUrl, então não aparecerá no carrossel de vídeos
    },
    {
      name: 'Roberto Lima',
      age: '42 anos',
      condition: 'Estresse e Fadiga',
      text: 'Chegava em casa esgotado todos os dias. As sessões de massagem terapêutica e acupuntura me ajudaram a recuperar minha energia e disposição. Sinto-me renovado e com muito mais qualidade de vida.',
      image: 'https://images.pexels.com/photos/3778896/pexels-photo-3778896.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      result: 'Energia renovada',
      videoUrl: 'YOUR_YOUTUBE_VIDEO_ID_ROBERTO', // **SUBSTITUA PELO ID REAL DO VÍDEO DO ROBERTO NO YOUTUBE**
      // Para vídeos do YouTube, a thumbnail pode ser gerada automaticamente se thumbnailImage for undefined
    }
  ];

  // Função para determinar o tipo de vídeo (YouTube ou direto) e extrair a fonte
  const getVideoInfo = (url: string): VideoInfo | null => {
    // Regex para YouTube
    const youtubeRegExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
    const youtubeMatch = url.match(youtubeRegExp);

    if (youtubeMatch && youtubeMatch[1] && youtubeMatch[1].length === 11) {
      return { type: 'youtube', source: youtubeMatch[1] };
    }

    // Verifica se é um arquivo de vídeo direto (ex: .mp4, .webm, .ogg)
    const directVideoRegExp = /\.(mp4|webm|ogg|mov|avi)$/i;
    if (directVideoRegExp.test(url)) {
      return { type: 'direct', source: url };
    }

    return null; // URL não reconhecida
  };

  // Filtra apenas os depoimentos que têm um videoUrl para a seção de vídeos
  const videoTestimonials = testimonials.filter(t => t.videoUrl);

  // Estado para o modal de vídeo
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoInfo, setCurrentVideoInfo] = useState<VideoInfo | null>(null);

  // Estado para o carrossel de vídeos
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Abre o modal de vídeo
  const openVideoModal = (videoInfo: VideoInfo) => {
    setCurrentVideoInfo(videoInfo);
    setIsVideoModalOpen(true);
  };

  // Fecha o modal de vídeo
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoInfo(null); // Limpa a URL ao fechar para parar o vídeo
  };

  // Funções de navegação do carrossel
  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex + 1) % videoTestimonials.length
    );
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex - 1 + videoTestimonials.length) % videoTestimonials.length
    );
  };

  // Obtém o depoimento de vídeo atual para exibição no carrossel
  const displayedVideoTestimonial = videoTestimonials[currentVideoIndex];
  const displayedVideoInfo = displayedVideoTestimonial?.videoUrl
    ? getVideoInfo(displayedVideoTestimonial.videoUrl)
    : null;

  // Lógica para obter a thumbnail do YouTube ou usar a customizada/fallback
  const getThumbnailUrl = (testimonial: typeof testimonials[0], videoInfo: VideoInfo | null) => {
    if (testimonial.thumbnailImage) {
      return testimonial.thumbnailImage; // Prioriza a thumbnailImage definida no objeto
    }
    if (videoInfo && videoInfo.type === 'youtube') {
      // Tenta obter uma thumbnail de alta qualidade do YouTube se não houver thumbnailImage definida
      return `https://img.youtube.com/vi/${videoInfo.source}/maxresdefault.jpg`;
    }
    // Fallback genérico se não houver thumbnailImage e não for YouTube
    return 'https://via.placeholder.com/480x270?text=Video+Indisponível';
  };

  // URL do vídeo para o iframe/video tag
  const getEmbedUrl = (videoInfo: VideoInfo) => {
    if (videoInfo.type === 'youtube') {
      // URL de embed do YouTube CORRIGIDA
      return `https://www.youtube.com/embed/${videoInfo.source}?autoplay=1&rel=0&showinfo=0`;
    }
    return videoInfo.source; // Para vídeos diretos
  };


  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
            Histórias de Transformação
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conheça as histórias reais de pessoas que transformaram suas vidas
            através das nossas terapias naturais.
          </p>
        </div>

        {/* Depoimentos de Texto (Todos os 6 agora em quadradinhos) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <Quote className="text-yellow-600" size={28} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-600 fill-current" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base lg:text-lg">
                "{testimonial.text}"
              </p>

              {/* Resultado Destacado */}
              <div className="bg-yellow-50 rounded-2xl p-4 mb-6 border-l-4 border-yellow-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-yellow-600" size={20} />
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    {testimonial.result}
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image} // Aqui a foto da pessoa aparece, para os depoimentos de TEXTO
                  alt={`Foto de ${testimonial.name}`}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.age} • {testimonial.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Depoimentos em Vídeo (Carrossel) */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Depoimentos em Vídeo: Veja as Histórias Reais!
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Assista e inspire-se com as experiências de transformação dos nossos clientes.
          </p>

          {videoTestimonials.length > 0 ? (
            <div className="relative max-w-3xl mx-auto"> {/* Container para o carrossel */}
              {/* Botão de navegação esquerda */}
              <button
                onClick={goToPrevVideo}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-2 rounded-full shadow-lg z-10 hover:bg-yellow-600 transition-colors duration-300"
                aria-label="Vídeo anterior"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Conteúdo do vídeo atual do carrossel */}
              {displayedVideoTestimonial && displayedVideoInfo ? (
                <div
                  className="cursor-pointer"
                  onClick={() => displayedVideoInfo && openVideoModal(displayedVideoInfo)}
                >
                  <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-xl group"> {/* 16:9 Aspect Ratio */}
                    {/* Imagem de thumbnail do vídeo */}
                    {getThumbnailUrl(displayedVideoTestimonial, displayedVideoInfo) ? (
                      <img
                        src={getThumbnailUrl(displayedVideoTestimonial, displayedVideoInfo)}
                        alt={`Thumbnail do depoimento de ${displayedVideoTestimonial.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                        <span className="text-xl">Vídeo Indisponível</span>
                      </div>
                    )}
                    {/* Ícone de Play */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300">
                      <PlayCircle className="text-white group-hover:text-yellow-400 transition-colors duration-300" size={60} />
                    </div>
                  </div>
                  {/* Informações do depoimento abaixo da thumbnail (apenas nome e condição) */}
                  <div className="mt-4 text-white text-center"> {/* Centralizado para o carrossel */}
                    <h4 className="font-bold text-lg">{displayedVideoTestimonial.name}</h4>
                    <p className="text-sm text-gray-400">{displayedVideoTestimonial.age} • {displayedVideoTestimonial.condition}</p>
                  </div>
                </div>
              ) : (
                <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
                  <p className="text-gray-400">Nenhum vídeo disponível.</p>
                </div>
              )}

              {/* Botão de navegação direita */}
              <button
                onClick={goToNextVideo}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-2 rounded-full shadow-lg z-10 hover:bg-yellow-600 transition-colors duration-300"
                aria-label="Próximo vídeo"
              >
                <ChevronRight size={32} />
              </button>

              {/* Indicadores de slide */}
              <div className="flex justify-center mt-4 space-x-2">
                {videoTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      currentVideoIndex === idx ? 'bg-yellow-600' : 'bg-gray-600 hover:bg-gray-500'
                    } transition-colors duration-300`}
                    aria-label={`Ir para o vídeo ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-400 mt-8">Nenhum depoimento em vídeo disponível no momento.</p>
          )}
        </div>

        {/* Estatísticas de Satisfação */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6">
              Índices de Satisfação
            </h3>
            <p className="text-black/80 text-lg sm:text-xl max-w-3xl mx-auto">
              Nossos resultados falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2">500+</div>
              <div className="text-black/80 font-medium">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2">15+</div>
              <div className="text-black/80 font-medium">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2">98%</div>
              <div className="text-black/80 font-medium">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2">9+</div>
              <div className="text-black/80 font-medium">Terapias Oferecidas</div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Sua História de Transformação Começa Aqui
          </h3>
          <p className="text-gray-300 mb-8 sm:mb-10 text-lg sm:text-xl max-w-3xl mx-auto">
            Junte-se a centenas de pessoas que já transformaram suas vidas.
            Agende sua consulta gratuita e descubra como podemos ajudar você.
          </p>
          <a
            href="https://wa.me/5511999997316?text=Olá! Vi os depoimentos no site e gostaria de agendar uma consulta na Energia Vital."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-yellow-600/25 inline-block"
          >
            Inicie Sua Transformação
          </a>
        </div>

        {/* Modal de Vídeo */}
        {isVideoModalOpen && currentVideoInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl">
              <button
                onClick={closeVideoModal}
                className="absolute top-3 right-3 text-white text-3xl font-bold z-10"
                aria-label="Fechar vídeo"
              >
                ×
              </button>
              <div className="relative pt-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
                {currentVideoInfo.type === 'youtube' ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={getEmbedUrl(currentVideoInfo)} // Usa a função corrigida
                    title="Depoimento em vídeo do YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    src={getEmbedUrl(currentVideoInfo)} // Usa a função corrigida
                    controls
                    autoPlay
                    title="Depoimento em vídeo"
                  >
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;