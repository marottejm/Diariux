'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 🔧 CONFIGURACIÓN: Cambia esta URL cuando tengas tu chatbot de n8n listo
  const CHATBOT_URL = 'https://tu-webhook-n8n.com/chat'; // ← Reemplaza con tu URL de n8n
  
  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800'
            : 'bg-gradient-to-br from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 hover:scale-110'
        }`}
        aria-label="Abrir chat con IA"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            
            {/* Badge IA */}
            <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
              IA
            </div>
          </div>
        )}
        
        {/* Badge de notificación */}
        {!isOpen && (
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
        )}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Asistente Diariux</h3>
                <p className="text-white/80 text-xs">Siempre disponible</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat iframe - Aquí se cargará tu chatbot de n8n */}
          <div className="flex-1 bg-slate-50 p-4 overflow-hidden">
            {/* Mientras no tengas el chatbot configurado, muestro un mensaje */}
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-6xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-slate-800">
                Chatbot en Configuración
              </h4>
              <p className="text-slate-600 max-w-xs">
                Estamos preparando nuestro asistente virtual con IA para ayudarte con tus consultas.
              </p>
              <div className="text-sm text-slate-500 bg-slate-100 p-3 rounded-lg">
                <strong>Para desarrolladores:</strong><br />
                Edita <code className="bg-white px-2 py-1 rounded text-xs">CHATBOT_URL</code> en<br />
                <code className="bg-white px-2 py-1 rounded text-xs">components/ChatbotButton.tsx</code>
              </div>
            </div>

            {/* 🔧 Cuando tengas n8n listo, descomenta esto y comenta lo de arriba:
            <iframe
              src={CHATBOT_URL}
              className="w-full h-full border-0 rounded-lg"
              title="Chatbot Diariux"
              allow="microphone; camera"
            />
            */}
          </div>

          {/* Footer con info adicional (opcional) */}
          <div className="p-3 bg-white border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500">
              Potenciado por IA • Respuestas instantáneas
            </p>
          </div>
        </div>
      )}

      {/* Versión móvil - Pantalla completa */}
      {isOpen && (
        <style jsx global>{`
          @media (max-width: 640px) {
            .fixed.bottom-24 {
              bottom: 0;
              right: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 0;
            }
          }
        `}</style>
      )}
    </>
  );
}
