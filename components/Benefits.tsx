'use client';

import { Check } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function Benefits() {
  const t = getTranslations('es');

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 card-gradient rounded-2xl shadow-lg">
            <div className="text-4xl">💼</div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                ¿Listo para ver estos beneficios en tu empresa?
              </h3>
              <p className="text-slate-600">
                Agenda una consultoría gratuita y descubre tu potencial
              </p>
            </div>
            <a
              href="#contacto"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


