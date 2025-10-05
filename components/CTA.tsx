'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Send } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function CTA() {
  const t = getTranslations('es');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Convertir FormData a objeto JSON
    const formObject: Record<string, string> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
    };
    
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        
        // Resetear estado después de 5 segundos
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('Web3Forms error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Consultoría personalizada sin costo',
    'Análisis de oportunidades de automatización',
    'Plan de implementación a medida',
    'Estimación de ROI y beneficios',
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {t.cta.title}
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {t.cta.description}
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-slate-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>{t.cta.button}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="tel:+5491127640730"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Right content - Form preview */}
          <div className="card-gradient p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Agenda tu Consultoría
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 transition-all duration-500 rounded-xl">
              {/* Campo oculto para redirigir a info@diariux.com */}
              <input type="hidden" name="redirect" value="https://diariux.com/gracias" />
              <input type="hidden" name="subject" value="Nueva consultoría desde Diariux" />
              <input type="hidden" name="from_name" value="Formulario Diariux" />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800 disabled:opacity-50"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email corporativo"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800 disabled:opacity-50"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800 disabled:opacity-50"
                />
              </div>
              
              <div>
                <select 
                  name="interest"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800 disabled:opacity-50"
                >
                  <option value="">¿Qué te interesa?</option>
                  <option value="automatizacion">Automatización de Procesos</option>
                  <option value="datos">Análisis de Datos</option>
                  <option value="asistentes">Asistentes Virtuales</option>
                  <option value="integracion">Integración de Sistemas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-center space-x-2 animate-slide-up">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">¡Mensaje enviado! Te contactaremos pronto.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg animate-slide-up">
                  <span className="font-medium">Error al enviar. Por favor intenta nuevamente.</span>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar Consultoría Gratis</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              🔒 Tus datos están protegidos y nunca serán compartidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

