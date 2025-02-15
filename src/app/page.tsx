import Home from '@/components/Home';
import Navbar from '../components/Navbar';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import MarqueeAnimation from '@/components/MarqueeAnimation';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function page() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <MarqueeAnimation />
      <div id="services">
        <Contact />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
