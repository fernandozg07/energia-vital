import { useState } from 'react';
import { Star, Quote, CheckCircle, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Define um tipo para as informações do vídeo
type VideoInfo = {
  type: 'youtube' | 'direct';
  source: string; // YouTube ID ou URL direta do vídeo
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Márcia',
      age: '58 anos',
      condition: 'Dores crônicas na cervical e ombro',
      text: 'Eu tinha um problema sério de muito tempo na minha cervical e no meu ombro. Cheguei aqui na Energia Vital, comecei o tratamento com o Alexandre de apiterapia e hoje me sinto muito bem! Minha vida está muito melhor, não tenho mais aquelas dores. É um tratamento maravilhoso e o Alexandre é um excelente profissional. Eu recomendo!',
      image: '1i.jpg', // Foto para depoimento de texto
      rating: 5,
      result: 'Redução de 90% das crisesAlívio de dores crônicas',
      videoUrl: 'video1.mp4', // Vídeo MP4 direto (assumindo que está na pasta public)
    },
    {
      name: 'Geraldo',
      age: '68 anos',
      condition: 'Dificuldade de movimento e respiração',
      text: 'Eu tinha dificuldade até para respirar, para me mexer e me mover. Depois do tratamento, não sinto mais nada. Posso abaixar e levantar que não sinto nada, nada, nada. Parece que tiraram com as mãos!',
      image: '2i.jpg', // Foto para depoimento de texto
      rating: 5,
      result: 'Total alívio das dores e recuperação dos movimentos',
      videoUrl: 'video2.mp4', // Exemplo de URL de vídeo MP4
    },
    {
      name: 'Fátima',
      age: '69 anos',
      condition: 'Dores crônicas (bursite, artrose e problemas na coluna)',
      text: 'Eu cheguei aqui ruim, pedia a morte de tanta dor. Tinha bursite, artrose, cirurgia na coluna e meu joelho me impedia de andar. A partir do momento que comecei a fazer acupuntura, minha vida foi melhorando. Hoje não sinto mais aquelas dores horríveis. Recomendo para todo mundo! Faço também o ozônio e o tratamento com abelhas e só tenho que agradecer.',
      image: '3i.jpg', // Foto para depoimento de texto
      rating: 5,
      result: 'Alívio de dores crônicas e recuperação da mobilidade',
      videoUrl: 'video3.mp4', // **SUBSTITUA PELO ID REAL DO VÍDEO DA ANA NO YOUTUBE**
      // Para vídeos do YouTube, a thumbnail pode ser gerada automaticamente se thumbnailImage for undefined
      // ou você pode fornecer uma URL específica aqui.
    },
    {
      name: 'Nelso Simonini de Agoni',
      age: '78 anos',
      condition: 'Problema no Joelho',
      text: 'Eu tinha um problema no joelho e não podia nem andar. Depois do tratamento com ozonioterapia, estou 100% melhor! Já estou caminhando normal e quase correndo. Estou ótimo, vale muito a pena!',
      image: '4i.jpg', // Foto para depoimento de texto
      rating: 5,
      result: 'Mobilidade restaurada e 100% de melhora',
      videoUrl: 'video4.mp4', // **SUBSTITUA PELO ID REAL DO VÍDEO DO CARLOS NO YOUTUBE**
      // Para vídeos do YouTube, a thumbnail pode ser gerada automaticamente se thumbnailImage for undefined
    },
    {
      name: 'Selma Regina Zanini',
      age: '55 anos',
      condition: 'Bem-estar Geral e Equilíbrio',
      text: 'Faço acupuntura e apiterapia com o Alexandre e a equipe da Energia Vital desde 2018. Com o tratamento, sinto um equilíbrio energético e emocional. Dificilmente tenho dores ou fico doente. Sou muito grata a toda a equipe e recomendo a todos!',
      image: '5i.jpg',
      rating: 5,
      result: 'Mobilidade restaurada',
      videoUrl: 'video6.mp4',
      // Este depoimento não tem videoUrl, então não aparecerá no carrossel de vídeos
    },
    {
      name: 'Maria Thereza Clerice',
      age: '77 anos',
      condition: 'Problema no Dedo e Dor na Mão',
      text: 'Eu tinha um problema no dedo médio da mão direita que ficou torto e doía muito. O tratamento com apiterapia me devolveu o movimento. Agora meu dedo endireitou e consigo fazer crochê e tricô sem dor. Minha mão está ótima!',
      image: 'i6.jpg',
      rating: 5,
      result: 'Dedo endireitado e alívio total da dor',
      videoUrl: 'video5.mp4', // **SUBSTITUA PELO ID REAL DO VÍDEO DO ROBERTO NO YOUTUBE**
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
  const getThumbnailUrl = (videoInfo: VideoInfo | null) => {
    if (videoInfo && videoInfo.type === 'youtube') {
      return `https://img.youtube.com/vi/${videoInfo.source}/maxresdefault.jpg`;
    }
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
                  <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-xl"> {/* 16:9 Aspect Ratio */}
                    {/* Imagem de thumbnail do vídeo */}
                    {getThumbnailUrl(displayedVideoInfo) ? (
                      <img
                        src={getThumbnailUrl(displayedVideoInfo)}
                        alt={`Thumbnail do depoimento de ${displayedVideoTestimonial.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                        <span className="text-xl">Vídeo Indisponível</span>
                      </div>
                    )}
                    {/* Ícone de Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="text-white" size={60} />
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