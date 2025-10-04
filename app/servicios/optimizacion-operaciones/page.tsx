import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Optimización de Operaciones con IA | Diariux',
  description: 'Mejoramos la eficiencia operativa mediante la automatización de procesos administrativos, gestión de inventarios y predicción de demanda.',
};

export default function OptimizacionOperacionesPage() {
  const serviceData = {
    title: 'Optimización de Operaciones',
    subtitle: 'Eficiencia operativa impulsada por IA',
    description: 'Transformamos tus operaciones mediante IA y automatización inteligente, reduciendo costos, mejorando tiempos de respuesta y optimizando el uso de recursos en toda tu organización.',
    icon: '⚡',
    features: [
      {
        title: 'Gestión Predictiva de Inventario',
        description: 'Predicción de demanda y optimización automática de stock para evitar quiebres y sobrestocks.',
        icon: '📦',
      },
      {
        title: 'Automatización de Procesos',
        description: 'RPA (Robotic Process Automation) para tareas administrativas repetitivas.',
        icon: '🤖',
      },
      {
        title: 'Optimización de Rutas',
        description: 'Algoritmos que optimizan logística y rutas de entrega en tiempo real.',
        icon: '🚚',
      },
      {
        title: 'Mantenimiento Predictivo',
        description: 'Prevención de fallas mediante análisis de datos de equipos y maquinaria.',
        icon: '🔧',
      },
    ],
    benefits: [
      {
        title: 'Reducción de costos operativos',
        description: 'Ahorro promedio del 40% en costos operativos mediante optimización.',
      },
      {
        title: 'Mayor productividad',
        description: 'Equipos enfocados en tareas de valor mientras la IA maneja lo repetitivo.',
      },
      {
        title: 'Mejora en tiempos de entrega',
        description: 'Optimización de procesos reduce significativamente los tiempos.',
      },
      {
        title: 'Reducción de errores',
        description: 'Automatización elimina errores humanos en procesos críticos.',
      },
      {
        title: 'Mejor utilización de recursos',
        description: 'Asignación inteligente de recursos maximiza su aprovechamiento.',
      },
      {
        title: 'Visibilidad operativa completa',
        description: 'Dashboards en tiempo real de todas las operaciones.',
      },
    ],
    useCases: [
      'Gestión inteligente de inventarios',
      'Automatización de facturación y cobranzas',
      'Optimización de cadena de suministro',
      'Planificación de producción asistida por IA',
      'Gestión de recursos humanos',
      'Control de calidad automatizado',
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
