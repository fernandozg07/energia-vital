import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <a
          href="https://wa.me/5511999997316?text=Olá! Gostaria de agendar uma consulta na Energia Vital."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-600 hover:bg-yellow-500 text-black p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-yellow-600/25 transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1 animate-pulse-slow"
          aria-label="Agendar consulta via WhatsApp"
        >
          <MessageCircle size={32} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      {/* Tooltip Aprimorado */}
      {showTooltip && (
        <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-xs border-2 border-yellow-600 animate-slide-up">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="text-yellow-600" size={20} />
                <p className="text-sm sm:text-base font-bold text-gray-900">
                  Agende sua consulta!
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Clique aqui para falar conosco no WhatsApp e agendar sua sessão de acupuntura.
              </p>
              <div className="bg-yellow-50 rounded-lg p-2 border-l-4 border-yellow-600">
                <p className="text-xs text-gray-600">
                  <strong>Consulta gratuita</strong> • Resposta rápida
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 ml-3 flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Fechar tooltip"
            >
              <X size={20} />
            </button>
          </div>
          <div className="absolute -bottom-2 right-8 sm:right-10 w-4 h-4 bg-white border-r-2 border-b-2 border-yellow-600 transform rotate-45"></div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;