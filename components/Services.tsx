'use client';

import Link from 'next/link';
import { Bot, BarChart3, MessageSquare, Cog, Megaphone, Settings } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function Services() {
  const t = getTranslations('es');

  const iconMap: Record<string, any> = {
    robot: Bot,
    chart: BarChart3,
    message: MessageSquare,
    integration: Cog,
    marketing: Megaphone,
    operations: Settings,
  };

  const serviceLinks: Record<number, string> = {
    0: '/servicios/automatizacion-inteligente',
    1: '/servicios/analisis-de-datos',
    2: '/servicios/asistentes-virtuales',
    3: '/servicios/integracion-sistemas',
    4: '/servicios/automatizacion-marketing',
    5: '/servicios/optimizacion-operaciones',
  };

  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Bot;
            const serviceLink = serviceLinks[index];
            
            return (
              <Link
                key={index}
                href={serviceLink}
                className="group card-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                  <span className="text-sm">Conocer más</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


