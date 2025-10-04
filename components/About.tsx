'use client';

import { Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function About() {
  const t = getTranslations('es');

  const features = [
    { icon: Target, text: 'Enfoque en Resultados Medibles' },
    { icon: Zap, text: 'Implementación Rápida y Eficiente' },
    { icon: Shield, text: 'Seguridad y Confidencialidad' },
    { icon: TrendingUp, text: 'Crecimiento Sostenible' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              {t.about.title}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
              {t.about.subtitle}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description}
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.approach}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-sm font-medium text-slate-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Análisis Avanzado
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Insights poderosos basados en datos
                  </p>
                </div>
                
                <div className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Automatización Total
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Procesos optimizados end-to-end
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Soluciones a Medida
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Diseñadas para tus necesidades
                  </p>
                </div>
                
                <div className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Innovación Continua
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Tecnología de vanguardia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


