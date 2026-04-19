import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact'; 
import Realisations from './pages/Realisations';
import Marbres from './pages/Marbres';
import Conseils from './pages/Conseils';

// --- FOOTER HARMONISÉ AVEC LA NAVBAR ---
const Footer = () => (
  <footer className="py-20 bg-stone-black text-white px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Identité visuelle du footer */}
        <div className="text-center md:text-left">
          <div className="font-serif text-2xl tracking-tighter flex items-center justify-center md:justify-start gap-2">
            <span className="uppercase font-bold">Platine</span>
            <span className="italic text-gold-accent" style={{ fontFamily: "'Playfair Display', serif" }}>stone</span>
          </div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mt-4">
            L'Art de la Pierre Naturelle • Oujda, Maroc
          </p>
        </div>

        {/* Navigation du footer (Copie conforme de la Navbar) */}
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">
          <a href="/" className="hover:text-gold-accent transition-colors">Accueil</a>
          <a href="/#about" className="hover:text-gold-accent transition-colors">A Propos</a>
          <a href="/#catalog" className="hover:text-gold-accent transition-colors">Exploration</a>
          <a href="/#contact" className="hover:text-gold-accent transition-colors">Contact</a>
        </div>

        {/* Copyright dynamique */}
        <div className="text-center md:text-right">
          <p className="text-[9px] text-white/20 uppercase tracking-widest font-light">
            © {new Date().getFullYear()} Platine Stone. Tous droits réservés.
          </p>
        </div>

      </div>
    </div>
  </footer>
);

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="top">
        {currentPath === '/realisations' ? (
          <Realisations />
        ) : currentPath === '/types-marbre' ? (
          <Marbres />
        ) : currentPath === '/conseils' ? (
          <Conseils />
        ) : (
          <>
            <Hero />
            <About />
            <Catalog />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;