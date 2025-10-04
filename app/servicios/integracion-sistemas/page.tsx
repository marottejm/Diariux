import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integración de Sistemas con IA | Diariux',
  description: 'Conectamos tus herramientas y plataformas existentes con soluciones de IA para crear un ecosistema tecnológico cohesivo y eficiente.',
};

export default function IntegracionSistemasPage() {
  const serviceData = {
    title: 'Integración de Sistemas',
    subtitle: 'Conecta y sincroniza todas tus herramientas',
    description: 'Unificamos tus sistemas dispersos en una plataforma cohesiva, permitiendo que los datos fluyan automáticamente entre aplicaciones y eliminando silos de información.',
    icon: '⚙️',
    features: [
      {
        title: 'Integración sin código',
        description: 'Conexión visual de aplicaciones usando plataformas como Make, Zapier y n8n sin necesidad de programación.',
        icon: '🔌',
      },
      {
        title: 'APIs Personalizadas',
        description: 'Desarrollo de APIs REST y GraphQL para conectar sistemas propietarios y legacy.',
        icon: '🔗',
      },
      {
        title: 'Sincronización en Tiempo Real',
        description: 'Actualización instantánea de datos entre sistemas para mantener consistencia.',
        icon: '⚡',
      },
      {
        title: 'ETL Inteligente',
        description: 'Extracción, transformación y carga de datos con validaciones y limpieza automática.',
        icon: '🔄',
      },
    ],
    benefits: [
      {
        title: 'Eliminación de trabajo manual',
        description: 'No más copiar y pegar datos entre sistemas diferentes.',
      },
      {
        title: 'Datos siempre actualizados',
        description: 'Información sincronizada en tiempo real en todas tus plataformas.',
      },
      {
        title: 'Reducción de errores',
        description: 'Elimina errores humanos en la transferencia de datos.',
      },
      {
        title: 'Visibilidad completa',
        description: 'Vista unificada de todos tus datos desde un solo lugar.',
      },
      {
        title: 'Escalabilidad simple',
        description: 'Agrega nuevas integraciones fácilmente sin reestructurar.',
      },
      {
        title: 'ROI inmediato',
        description: 'Ahorro de tiempo desde el primer día de implementación.',
      },
    ],
    useCases: [
      'Sincronización CRM con herramientas de marketing',
      'Integración de e-commerce con sistemas ERP',
      'Conexión de plataformas de pago con contabilidad',
      'Automatización de reportes entre sistemas',
      'Unificación de datos de múltiples fuentes',
      'Migración de datos entre plataformas',
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
