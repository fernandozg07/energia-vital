import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home, User, Heart, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Início', icon: <Home size={18} className="lg:hidden" /> },
    { id: 'about', label: 'Sobre', icon: <User size={18} className="lg:hidden" /> },
    { id: 'services', label: 'Tratamentos', icon: <Heart size={18} className="lg:hidden" /> },
    { id: 'locations', label: 'Localizações', icon: <MapPin size={18} className="lg:hidden" /> }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-lg border-b border-yellow-400/30 shadow-2xl py-1' // Ligeiramente menos opaco quando rolado
        : 'bg-gray-950/80 backdrop-blur-md' // Um tom de cinza mais escuro que preto puro, ou ajuste de opacidade
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
                  src="logoi.png" // Continua usando a logo atual com as partes pretas
                  alt="Energia Vital - Terapias Integrativas"
                  // Ajustes no drop-shadow para maior visibilidade da logo atual
                  className={`h-12 sm:h-14 lg:h-16 w-auto object-contain 
                    transition-all duration-500 
                    ${isScrolled 
                      ? 'filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' // Brilho branco mais visível quando rolado
                      : 'filter drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]' // Brilho branco forte no topo e no hover
                    }
                  `}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium text-lg relative group"
              >
                <span className="flex items-center">
                  {item.label}
                </span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-[calc(100%-1rem)] group-hover:left-2"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão na Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg hover:shadow-yellow-400/40'
                  : 'bg-yellow-400/90 hover:bg-yellow-500 text-gray-900 shadow-xl shadow-yellow-400/30 hover:shadow-2xl'
              } transform hover:-translate-y-0.5`}
            >
              <Phone size={20} className="flex-shrink-0" />
              <span>Agende pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-200 hover:text-yellow-400 rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? (
              <X size={28} className="text-yellow-400" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-yellow-400/20 rounded-b-xl overflow-hidden shadow-2xl">
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center px-6 py-4 text-left text-gray-200 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 text-lg font-medium"
                >
                  <span className="mr-3 text-yellow-400">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-2 pb-4">
                <a
                  href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão na Energia Vital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-shadow-yellow-400/40 transform hover:-translate-y-0.5"
                >
                  <Phone size={20} />
                  <span>Agende pelo WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;