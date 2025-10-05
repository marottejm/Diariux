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

      {/* Ventana del chat con n8n */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-bold text-lg">Asistente IA Diariux</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat iframe */}
          <div className="flex-1 relative">
            <iframe
              src="https://n8n.srv1044380.hstgr.cloud/workflow/oBFCYfmRR4tMvASS"
              className="w-full h-full border-0"
              title="Chatbot Diariux"
              allow="clipboard-write"
            />
          </div>
        </div>
      )}
    </div>
  );
}
