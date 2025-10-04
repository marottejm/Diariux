import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asistentes Virtuales y Chatbots con IA | Diariux',
  description: 'Desarrollamos chatbots y asistentes virtuales inteligentes que mejoran la experiencia del cliente y optimizan la atención 24/7.',
};

export default function AsistentesVirtualesPage() {
  const serviceData = {
    title: 'Asistentes Virtuales',
    subtitle: 'Atención al cliente inteligente 24/7',
    description: 'Creamos asistentes virtuales conversacionales que entienden el contexto, aprenden de cada interacción y brindan experiencias personalizadas a tus clientes en cualquier momento.',
    icon: '💬',
    features: [
      {
        title: 'Procesamiento de Lenguaje Natural',
        description: 'Comprensión avanzada del lenguaje humano para conversaciones naturales y fluidas.',
        icon: '🗣️',
      },
      {
        title: 'Multicanal',
        description: 'Integración con WhatsApp, web, Facebook Messenger, Instagram y más plataformas.',
        icon: '📱',
      },
      {
        title: 'Aprendizaje Continuo',
        description: 'El asistente mejora con cada conversación, adaptándose a las necesidades de tus clientes.',
        icon: '🧠',
      },
      {
        title: 'Transferencia Inteligente',
        description: 'Deriva automáticamente a agentes humanos cuando es necesario, con contexto completo.',
        icon: '🔄',
      },
    ],
    benefits: [
      {
        title: 'Atención 24/7 sin pausas',
        description: 'Responde consultas en cualquier momento, incluso fuera del horario laboral.',
      },
      {
        title: 'Reducción de costos operativos',
        description: 'Atiende múltiples consultas simultáneamente sin aumentar personal.',
      },
      {
        title: 'Respuestas instantáneas',
        description: 'Tiempo de respuesta de segundos, mejorando la satisfacción del cliente.',
      },
      {
        title: 'Escalabilidad ilimitada',
        description: 'Maneja desde 10 hasta 10,000 conversaciones simultáneas sin problemas.',
      },
      {
        title: 'Personalización a escala',
        description: 'Cada cliente recibe atención personalizada basada en su historial.',
      },
      {
        title: 'Analytics detallado',
        description: 'Insights sobre las consultas más frecuentes y puntos de dolor.',
      },
    ],
    useCases: [
      'Soporte al cliente automatizado',
      'Calificación y captura de leads',
      'Reservas y agendamiento',
      'FAQ inteligente y búsqueda de información',
      'Seguimiento de órdenes y pedidos',
      'Onboarding de nuevos usuarios',
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
