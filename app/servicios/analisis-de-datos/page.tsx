import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Análisis de Datos Avanzado con IA | Diariux',
  description: 'Transformamos grandes volúmenes de datos en insights accionables mediante algoritmos de machine learning y visualización inteligente.',
};

export default function AnalisisDatosPage() {
  const serviceData = {
    title: 'Análisis de Datos Avanzado',
    subtitle: 'Convierte tus datos en decisiones estratégicas',
    description: 'Utilizamos algoritmos avanzados de machine learning y visualización de datos para extraer insights valiosos que impulsan decisiones inteligentes y mejoran tu estrategia empresarial.',
    icon: '📊',
    features: [
      {
        title: 'Análisis Predictivo',
        description: 'Modelos de machine learning que predicen tendencias, comportamientos y resultados futuros basándose en datos históricos.',
        icon: '🔮',
      },
      {
        title: 'Dashboards Inteligentes',
        description: 'Visualizaciones interactivas en tiempo real que facilitan la comprensión de métricas complejas.',
        icon: '📈',
      },
      {
        title: 'Segmentación Avanzada',
        description: 'Identificación automática de patrones y segmentos en tus clientes, productos o procesos.',
        icon: '🎯',
      },
      {
        title: 'Detección de Anomalías',
        description: 'Sistemas que identifican automáticamente comportamientos inusuales y alertan sobre posibles problemas.',
        icon: '🚨',
      },
    ],
    benefits: [
      {
        title: 'Decisiones basadas en datos',
        description: 'Elimina la intuición y toma decisiones respaldadas por análisis profundos.',
      },
      {
        title: 'Identificación de oportunidades',
        description: 'Descubre patrones ocultos que revelan nuevas oportunidades de negocio.',
      },
      {
        title: 'Reducción de riesgos',
        description: 'Anticipa problemas antes de que ocurran con análisis predictivo.',
      },
      {
        title: 'Optimización de recursos',
        description: 'Identifica dónde asignar recursos para maximizar el retorno.',
      },
      {
        title: 'Ventaja competitiva',
        description: 'Adelántate a la competencia con insights que ellos no tienen.',
      },
      {
        title: 'Procesamiento en tiempo real',
        description: 'Análisis instantáneo para decisiones rápidas y efectivas.',
      },
    ],
    useCases: [
      'Predicción de demanda y ventas',
      'Análisis de comportamiento de clientes',
      'Optimización de precios dinámicos',
      'Detección de fraude y anomalías',
      'Análisis de sentimiento en redes sociales',
      'Forecasting financiero',
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
