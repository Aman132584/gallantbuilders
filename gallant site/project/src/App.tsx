import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OwnerPortfolio from '@/components/OwnerPortfolio';
import Properties from '@/components/Properties';
import Services from '@/components/Services';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-accent-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <OwnerPortfolio />
        <Properties />
        <Services />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
