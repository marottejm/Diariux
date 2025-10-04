'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = getTranslations('es');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      // Scroll al inicio de la sección con offset para el navbar
      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      
      // Efecto de destaque en el formulario
      setTimeout(() => {
        const form = contactSection.querySelector('form');
        if (form) {
          form.classList.add('animate-pulse');
          setTimeout(() => {
            form.classList.remove('animate-pulse');
            form.classList.add('ring-4', 'ring-primary-500', 'ring-opacity-50');
            setTimeout(() => {
              form.classList.remove('ring-4', 'ring-primary-500', 'ring-opacity-50');
            }, 2000);
          }, 500);
        }
      }, 300);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: t.nav.home, href: '/#inicio' },
    { name: t.nav.services, href: '/#servicios' },
    { name: t.nav.benefits, href: '/#beneficios' },
    { name: t.nav.methodology, href: '/#metodologia' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Diariux</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#contacto"
              onClick={scrollToContact}
              className="group px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <span>{t.nav.contact}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/#contacto"
                onClick={scrollToContact}
                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg text-center flex items-center justify-center space-x-2"
              >
                <span>{t.nav.contact}</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

