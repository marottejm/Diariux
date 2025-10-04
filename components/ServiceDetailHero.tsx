'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  };
}

export default function ServiceDetailHero({ data }: ServiceDetailHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Back button */}
          <Link
            href="/#servicios"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a servicios</span>
          </Link>

          {/* Icon */}
          <div className="text-8xl mb-6">{data.icon}</div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">{data.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-slate-700 font-semibold">
            {data.subtitle}
          </p>

          {/* Description */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contacto" className="btn-primary">
              Solicitar Demo
            </a>
            <a href="#caracteristicas" className="btn-secondary">
              Ver Características
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
