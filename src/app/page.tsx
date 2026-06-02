import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import Benefits from '@/components/Benefits';
import UseCases from '@/components/UseCases';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Dashboard />
        <Benefits />
        <UseCases />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
