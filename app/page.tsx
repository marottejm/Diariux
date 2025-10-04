import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Methodology from '@/components/Methodology';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Methodology />
      <CTA />
      <Footer />
    </main>
  );
}


