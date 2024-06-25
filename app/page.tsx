// pages/index.js
import HeroSection from '../app/components/HeroSection';
import Timeline from '../app/components/TimeLine';
import About from '../app/components/About';
import ContactForm from '../app/components/ContactForm';
import Navbar from '../app/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Timeline />
      <ContactForm />
    </div>
  );
}
