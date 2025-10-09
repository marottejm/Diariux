import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import ChatbotButton from '@/components/ChatbotButtonSimple';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diariux - Agencia de Inteligencia Artificial y Automatización',
  description:
    'Transformamos empresas con soluciones de IA y automatización inteligente. Optimiza procesos, reduce costos y potencia tu crecimiento con tecnología de vanguardia.',
  keywords:
    'inteligencia artificial, automatización, IA, machine learning, chatbots, análisis de datos, agentes IA, automatización de procesos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        {/* <ChatbotButton /> */}
      </body>
    </html>
  );
}