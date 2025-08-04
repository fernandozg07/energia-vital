import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Tratamentos' },
    { id: 'locations', label: 'Localizações' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-lg border-b border-yellow-400/30 shadow-2xl py-1'
        : 'bg-gray-950/80 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo com efeitos dinâmicos */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <div className={`p-1.5 rounded-xl transition-all duration-500 ${
                isScrolled 
                  ? 'bg-transparent' 
                  : 'bg-gray-800/50 backdrop-blur-md group-hover:bg-yellow-400/10'
              }`}>
                <img 
                  src="logoi.png"
                  alt="Energia Vital - Terapias Integrativas"
                  className={`h-12 sm:h-14 lg:h-16 w-auto object-contain 
                    transition-all duration-500 
                    ${isScrolled 
                      ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                      : 'filter drop-shadow-[0_0_20px_rgba(255,255,255,1)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)]'
                    }
                  `}
                />
              </div>
            </a>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-1 py-2 text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium text-sm md:text-base relative group"
              >
                <span className="flex items-center">
                  {item.label}
                </span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-[calc(100%-0.5rem)] group-hover:left-1"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center ml-4">
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão na Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                isScrolled
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg hover:shadow-yellow-400/40'
                  : 'bg-yellow-400/90 hover:bg-yellow-500 text-gray-900 shadow-xl shadow-yellow-400/30 hover:shadow-2xl'
              } transform hover:-translate-y-0.5`}
            >
              <Phone size={18} className="flex-shrink-0" />
              <span className="hidden sm:inline">Agende pelo WhatsApp</span>
              <span className="sm:hidden">Agendar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;