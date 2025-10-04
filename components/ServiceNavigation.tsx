'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceNavigation({ currentService }: { currentService: string }) {
  const services = [
    { title: 'Automatización Inteligente', url: '/servicios/automatizacion-inteligente', icon: '🤖' },
    { title: 'Análisis de Datos', url: '/servicios/analisis-de-datos', icon: '📊' },
    { title: 'Asistentes Virtuales', url: '/servicios/asistentes-virtuales', icon: '💬' },
    { title: 'Integración de Sistemas', url: '/servicios/integracion-sistemas', icon: '⚙️' },
    { title: 'Automatización de Marketing', url: '/servicios/automatizacion-marketing', icon: '📢' },
    { title: 'Optimización de Operaciones', url: '/servicios/optimizacion-operaciones', icon: '⚡' },
  ];

  const otherServices = services.filter(s => s.title !== currentService);

  return (
    <section className="section-padding bg-white border-t border-slate-200">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Otros Servicios que te Pueden Interesar
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.slice(0, 3).map((service, index) => (
            <Link
              key={index}
              href={service.url}
              className="group p-6 rounded-xl bg-slate-50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50 border-2 border-slate-200 hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-700">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/#servicios"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>Ver todos los servicios</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
