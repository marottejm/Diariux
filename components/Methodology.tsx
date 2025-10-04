'use client';

import { getTranslations } from '@/lib/translations';

export default function Methodology() {
  const t = getTranslations('es');

  return (
    <section id="metodologia" className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.methodology.title}
          </h2>
          <p className="text-xl text-slate-300">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.methodology.phases.map((phase, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < t.methodology.phases.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></div>
              )}

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-bold text-primary-400/30 mb-4">
                  {phase.number}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {phase.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {phase.description}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-slate-200">
              Soporte continuo y optimización en cada etapa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


