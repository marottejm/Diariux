import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatización de Marketing con IA | Diariux',
  description: 'Optimizamos campañas, personalizamos comunicaciones y automatizamos la generación de leads con IA para maximizar tu ROI.',
};

export default function AutomatizacionMarketingPage() {
  const serviceData = {
    title: 'Automatización de Marketing',
    subtitle: 'Campañas inteligentes que convierten',
    description: 'Implementamos sistemas de marketing automation potenciados por IA que personalizan cada interacción, optimizan campañas en tiempo real y maximizan la conversión de leads a clientes.',
    icon: '📢',
    features: [
      {
        title: 'Lead Scoring Inteligente',
        description: 'Calificación automática de leads usando machine learning para priorizar los más prometedores.',
        icon: '🎯',
      },
      {
        title: 'Personalización a Escala',
        description: 'Emails, contenidos y ofertas personalizados para cada usuario basados en comportamiento.',
        icon: '✉️',
      },
      {
        title: 'Optimización de Campañas',
        description: 'Ajuste automático de creativos, mensajes y timing para maximizar resultados.',
        icon: '📊',
      },
      {
        title: 'Segmentación Dinámica',
        description: 'Creación automática de audiencias basada en comportamientos y características.',
        icon: '👥',
      },
    ],
    benefits: [
      {
        title: 'Aumento de conversión hasta 300%',
        description: 'Mensajes personalizados en el momento perfecto aumentan dramáticamente las conversiones.',
      },
      {
        title: 'Reducción de costo por lead',
        description: 'Optimización continua reduce el costo de adquisición significativamente.',
      },
      {
        title: 'Mayor engagement',
        description: 'Contenido relevante genera más interacciones y compromiso.',
      },
      {
        title: 'Ahorro de tiempo del equipo',
        description: 'Automatiza tareas repetitivas liberando tiempo para estrategia.',
      },
      {
        title: 'Nurturing automatizado',
        description: 'Cultiva leads automáticamente hasta que estén listos para comprar.',
      },
      {
        title: 'ROI medible',
        description: 'Tracking completo del recorrido del cliente para optimizar inversión.',
      },
    ],
    useCases: [
      'Campañas de email marketing automatizadas',
      'Retargeting inteligente multicanal',
      'Generación y calificación de leads',
      'Secuencias de nurturing personalizadas',
      'Optimización de inversión publicitaria',
      'Análisis predictivo de comportamiento',
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
