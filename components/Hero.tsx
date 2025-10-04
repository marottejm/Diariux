'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function Hero() {
  const t = getTranslations('es');

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-slate-700">
                Inteligencia Artificial
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{t.hero.title}</span>
              <br />
              <span className="text-slate-800">{t.hero.subtitle}</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contacto" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="btn-secondary inline-flex items-center justify-center">
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+85%</div>
                <div className="text-sm text-slate-600 mt-1">{t.stats.efficiency}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">-60%</div>
                <div className="text-sm text-slate-600 mt-1">{t.stats.costReduction}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+95%</div>
                <div className="text-sm text-slate-600 mt-1">{t.stats.satisfaction}</div>
              </div>
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Floating cards */}
                <div className="absolute top-10 right-10 p-6 card-gradient rounded-2xl shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">IA Automatizada</div>
                      <div className="text-sm text-slate-600">24/7 Activa</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-10 p-6 card-gradient rounded-2xl shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold gradient-text">10x</div>
                    <div className="text-sm text-slate-600">Más Rápido</div>
                    <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 card-gradient rounded-3xl shadow-2xl">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


