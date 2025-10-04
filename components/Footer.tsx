'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function Footer() {
  const t = getTranslations('es');

  const serviceLinks = [
    'Automatización Inteligente',
    'Análisis de Datos',
    'Asistentes Virtuales',
    'Integración de Sistemas',
    'Automatización de Marketing',
    'Optimización de Operaciones',
  ];


  // 🔧 CONFIGURACIÓN: Actualiza con tus URLs reales de redes sociales
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/diariux', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/diariux', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/diariux', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/diariux', label: 'Github' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold">Diariux</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400">{t.footer.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <a
                  href={`tel:${t.footer.phone}`}
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  {t.footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Diariux. {t.footer.rights}
            </p>
            
            <div className="text-sm text-slate-400">
              <span>Listos para desarrollar la solución que se adapte a tu negocio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

