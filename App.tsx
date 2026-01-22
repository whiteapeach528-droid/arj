import React, { useState, useEffect } from 'react';
import { SectionType } from './types';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import GeographySection from './components/GeographySection';
import WorldSection from './components/WorldSection';
import MansionSection from './components/MansionSection';
import CharacterSection from './components/CharacterSection';
import FamilySection from './components/FamilySection';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.INTRO);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500);

      // Simple spy logic
      const sections = Object.values(SectionType);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-rofan-dark text-rofan-cream font-serif overflow-x-hidden selection:bg-rofan-gold selection:text-rofan-dark">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id={SectionType.INTRO}>
          <Hero />
        </section>

        <section id={SectionType.GEOGRAPHY}>
          <GeographySection />
        </section>

        <section id={SectionType.WORLD}>
          <WorldSection />
        </section>

        <section id={SectionType.CHARACTER}>
          <CharacterSection />
        </section>

        <section id={SectionType.MANSION}>
          <MansionSection />
        </section>

        <section id={SectionType.FAMILY}>
          <FamilySection />
        </section>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-rofan-gold text-rofan-dark shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;