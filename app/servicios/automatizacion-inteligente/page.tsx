import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatización Inteligente con IA | Diariux',
  description: 'Implementamos sistemas de IA para automatizar procesos repetitivos, optimizar flujos de trabajo y liberar a tu equipo para tareas estratégicas.',
};

export default function AutomatizacionInteligentePage() {
  const serviceData = {
    title: 'Automatización Inteligente',
    subtitle: 'Optimiza tus procesos con Inteligencia Artificial',
    description: 'Transformamos procesos manuales en sistemas automatizados inteligentes que aprenden y mejoran continuamente, liberando a tu equipo para enfocarse en tareas de alto valor.',
    icon: '🤖',
    features: [
      {
        title: 'Automatización de Flujos de Trabajo',
        description: 'Diseñamos e implementamos flujos de trabajo automatizados que conectan tus sistemas y eliminan tareas repetitivas.',
        icon: '🔄',
      },
      {
        title: 'Procesamiento Inteligente de Documentos',
        description: 'Extracción automática de datos de facturas, contratos y documentos usando OCR y machine learning.',
        icon: '📄',
      },
      {
        title: 'Automatización de Respuestas',
        description: 'Sistemas que responden automáticamente emails, mensajes y consultas frecuentes con contexto inteligente.',
        icon: '💬',
      },
      {
        title: 'Scheduling Inteligente',
        description: 'Programación automática de reuniones, tareas y recursos considerando múltiples variables.',
        icon: '📅',
      },
    ],
    benefits: [
      {
        title: 'Ahorro de hasta 80% en tiempo',
        description: 'Reduce drásticamente el tiempo dedicado a tareas repetitivas y manuales.',
      },
      {
        title: 'Reducción de errores humanos',
        description: 'Minimiza errores en procesos críticos con validaciones automáticas.',
      },
      {
        title: 'Escalabilidad ilimitada',
        description: 'Procesa volúmenes crecientes sin aumentar tu equipo proporcionalmente.',
      },
      {
        title: 'Disponibilidad 24/7',
        description: 'Tus procesos automatizados funcionan sin interrupciones, todo el día.',
      },
      {
        title: 'ROI medible en 3-6 meses',
        description: 'Recupera tu inversión rápidamente con ahorros operativos tangibles.',
      },
      {
        title: 'Mejora continua',
        description: 'Los sistemas aprenden y optimizan su rendimiento con el tiempo.',
      },
    ],
    useCases: [
      'Procesamiento automático de órdenes de compra',
      'Generación de reportes y dashboards',
      'Clasificación y enrutamiento de tickets',
      'Actualización automática de inventarios',
      'Validación de datos y compliance',
      'Onboarding automatizado de clientes',
    ],
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceDetailHero data={serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceBenefits benefits={serviceData.benefits} useCases={serviceData.useCases} />
      <ServiceNavigation currentService={serviceData.title} />
      <ServiceCTA serviceName={serviceData.title} />
      <Footer />
    </main>
  );
}
