'use client';

import { CheckCircle, Zap } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  useCases: string[];
}

export default function ServiceBenefits({ benefits, useCases }: ServiceBenefitsProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Benefits */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              Beneficios Clave
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white border-2 border-slate-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">
              Casos de Uso
            </h2>
            <div className="card-gradient p-8 rounded-2xl shadow-lg">
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700">{useCase}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                <p className="text-center text-slate-700 font-medium">
                  💡 <strong>¿Tienes un caso específico?</strong> Agenda una consultoría y diseñamos una solución personalizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
