import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b-2 border-yellow-400 shadow-lg' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Sparkles className="text-yellow-400" size={28} />
            <div className="text-white">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold">
                Energia Vital
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg relative group"
            >
              Tratamentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('locations')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg relative group"
            >
              Localizações
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <a
              href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão de acupuntura na Energia Vital."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 xl:px-8 py-3 xl:py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-yellow-400/25 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Agende pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-yellow-400/30 rounded-b-2xl">
            <nav className="py-6 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-6 py-3 text-white hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 font-medium text-lg rounded-lg mx-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-6 py-3 text-white hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 font-medium text-lg rounded-lg mx-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-6 py-3 text-white hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 font-medium text-lg rounded-lg mx-2"
              >
                Tratamentos
              </button>
              <button 
                onClick={() => scrollToSection('locations')}
                className="block w-full text-left px-6 py-3 text-white hover:text-yellow-400 hover:bg-white/5 transition-all duration-300 font-medium text-lg rounded-lg mx-2"
              >
                Localizações
              </button>
              <div className="px-4 pt-4">
                <a
                  href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma sessão de acupuntura na Energia Vital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg"
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