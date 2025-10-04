'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatbotButtonSimple() {
  const [isOpen, setIsOpen] = useState(false);

  // Cargar estado del chatbot desde localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('chatbot-open');
    if (savedState === 'true') {
      setIsOpen(true);
    }
  }, []);

  // Guardar estado cuando cambia
  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('chatbot-open', String(newState));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Botón */}
      <button
        onClick={toggleChat}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        style={{ position: 'relative' }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
        
        {/* Badge con sparkle */}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-sm">✨</span>
          </span>
        )}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Chat con IA</h3>
            <button onClick={toggleChat}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center text-gray-600">
            Chatbot en configuración...
          </div>
        </div>
      )}
    </div>
  );
}
