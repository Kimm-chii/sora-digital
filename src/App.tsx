import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { scrollToSection } from './utils/scroll';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState<'home' | 'contact'>('home');

  // Listen to hash changes to handle navigation between pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setPage('contact');
        window.scrollTo(0, 0);
      } else {
        const wasOnContactPage = page === 'contact';
        setPage('home');
        
        // If we were on the contact page and clicked a home section link, wait for render then scroll
        if (wasOnContactPage) {
          setTimeout(() => {
            scrollToSection(hash || '#home');
          }, 150);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [page]);

  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white selection:bg-zinc-800 selection:text-white relative">
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      <Navbar />
      <main>
        {page === 'home' ? (
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
          </>
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

