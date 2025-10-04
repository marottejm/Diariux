'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            ¿Listo para implementar {serviceName}?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Agenda una consultoría gratuita con nuestro equipo y descubre cómo podemos ayudarte a transformar tu negocio con esta solución.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-slate-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Agendar Consultoría</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="tel:+5491127640730"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Llamar Ahora</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+50</div>
              <div className="text-white/80">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3-6</div>
              <div className="text-white/80">Meses ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
