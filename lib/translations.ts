export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      benefits: 'Beneficios',
      methodology: 'Metodología',
      contact: 'Contacto',
    },
    hero: {
      title: 'Automatización Inteligente',
      subtitle: 'para tu Empresa',
      description:
        'Transformamos tu negocio con soluciones de Inteligencia Artificial diseñadas para optimizar procesos, reducir costos y potenciar tu crecimiento en Argentina y Latinoamérica.',
      cta: 'Comenzar Ahora',
      ctaSecondary: 'Ver Casos de Éxito',
    },
    stats: {
      efficiency: 'Eficiencia Operativa',
      costReduction: 'Reducción de Costos',
      satisfaction: 'Satisfacción del Cliente',
    },
    about: {
      title: 'Agencia de IA',
      subtitle: 'Soluciones Estratégicas',
      description:
        'En Diariux, somos especialistas en la transformación digital mediante Inteligencia Artificial. Desarrollamos e implementamos soluciones de automatización que se adaptan perfectamente a las necesidades de tu empresa.',
      approach:
        'Nuestro enfoque combina tecnología de vanguardia con un profundo entendimiento de los procesos empresariales, garantizando resultados medibles y sostenibles.',
    },
    services: {
      title: 'Soluciones de IA',
      subtitle: 'Diseñadas para tus Desafíos Empresariales',
      items: [
        {
          title: 'Automatización Inteligente',
          description:
            'Implementamos sistemas de IA para automatizar procesos repetitivos, optimizar flujos de trabajo y liberar a tu equipo para tareas de mayor valor estratégico.',
          icon: 'robot',
        },
        {
          title: 'Análisis de Datos Avanzado',
          description:
            'Transformamos grandes volúmenes de datos en insights accionables mediante algoritmos de machine learning y visualización inteligente.',
          icon: 'chart',
        },
        {
          title: 'Asistentes Virtuales',
          description:
            'Desarrollamos chatbots y asistentes virtuales inteligentes que mejoran la experiencia del cliente y optimizan la atención 24/7.',
          icon: 'message',
        },
        {
          title: 'Integración de Sistemas',
          description:
            'Conectamos tus herramientas y plataformas existentes con soluciones de IA para crear un ecosistema tecnológico cohesivo y eficiente.',
          icon: 'integration',
        },
        {
          title: 'Automatización de Marketing',
          description:
            'Optimizamos campañas, personalizamos comunicaciones y automatizamos la generación de leads con IA para maximizar tu ROI.',
          icon: 'marketing',
        },
        {
          title: 'Optimización de Operaciones',
          description:
            'Mejoramos la eficiencia operativa mediante la automatización de procesos administrativos, gestión de inventarios y predicción de demanda.',
          icon: 'operations',
        },
      ],
    },
    benefits: {
      title: 'Ventajas Estratégicas',
      subtitle: 'que aporta la IA a tu Empresa',
      items: [
        {
          title: 'Mayor Eficiencia',
          description: 'Automatiza tareas repetitivas y reduce errores humanos.',
        },
        {
          title: 'Decisiones Inteligentes',
          description: 'Accede a insights basados en datos en tiempo real.',
        },
        {
          title: 'Reducción de Costos',
          description: 'Optimiza recursos y disminuye gastos operativos.',
        },
        {
          title: 'Experiencia Superior',
          description: 'Ofrece atención personalizada 24/7 a tus clientes.',
        },
        {
          title: 'Escalabilidad',
          description: 'Crece sin límites con sistemas que se adaptan a tu ritmo.',
        },
        {
          title: 'Ventaja Competitiva',
          description: 'Posiciónate por delante en tu sector con tecnología de punta.',
        },
      ],
    },
    methodology: {
      title: 'Nuestra Metodología',
      subtitle: 'Implementación Estratégica en 4 Fases',
      phases: [
        {
          number: '01',
          title: 'Diagnóstico y Análisis',
          description:
            'Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros con métricas de éxito.',
        },
        {
          number: '02',
          title: 'Diseño de Solución',
          description:
            'Creamos una arquitectura personalizada, seleccionamos las tecnologías adecuadas y diseñamos el flujo de implementación.',
        },
        {
          number: '03',
          title: 'Desarrollo e Integración',
          description:
            'Desarrollamos e integramos las soluciones de IA con tus sistemas existentes, garantizando seguridad y calidad en cada paso.',
        },
        {
          number: '04',
          title: 'Optimización y Soporte',
          description:
            'Monitoreamos el rendimiento, optimizamos continuamente y ofrecemos soporte técnico para asegurar resultados sostenibles.',
        },
      ],
    },
    cta: {
      title: '¿Listo para Transformar tu Empresa?',
      description:
        'Agenda una consultoría gratuita y descubre cómo la IA puede revolucionar tu negocio.',
      button: 'Agendar Consultoría',
    },
    footer: {
      description:
        'Somos una agencia de Inteligencia Artificial especializada en automatización de procesos empresariales en Argentina y Latinoamérica.',
      services: 'Servicios',
      company: 'Empresa',
      contact: 'Contacto',
      about: 'Sobre Nosotros',
      blog: 'Blog',
      careers: 'Trabaja con Nosotros',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      address: 'Buenos Aires, Argentina',
      email: 'info@diariux.com',
      phone: '+54 9 11 2764-0730',
      rights: 'Todos los derechos reservados.',
    },
  },
};

export type TranslationKey = keyof typeof translations.es;
export type Locale = keyof typeof translations;

export const getTranslations = (locale: Locale = 'es') => {
  return translations[locale];
};


