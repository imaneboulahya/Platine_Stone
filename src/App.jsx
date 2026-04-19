import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact'; // Importation de ton fichier séparé
import Realisations from './pages/Realisations';
import Marbres from './pages/Marbres';
import Conseils from './pages/Conseils';

const Footer = () => (
  <footer className="py-16 bg-stone-black text-white px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="font-serif text-3xl tracking-tighter">PLATINE STONE</p>
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/40 mt-2">L'Art de la Pierre Naturelle</p>
      </div>
      <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/60">
        <a href="/" className="hover:text-gold-accent transition-colors">Accueil</a>
        <a href="#about" className="hover:text-gold-accent transition-colors">Héritage</a>
        <a href="#contact" className="hover:text-gold-accent transition-colors">Contact</a>
      </div>
      <p className="text-[9px] text-white/30 uppercase tracking-widest">
        © {new Date().getFullYear()} Platine Stone
      </p>
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
      <main>
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
            <Contact /> {/* Utilisation du composant importé */}
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;