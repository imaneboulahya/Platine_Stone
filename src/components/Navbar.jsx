import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- MISE À JOUR DES LIENS AVEC ACCUEIL ---
  const navLinks = [
    { name: 'Accueil', href: '/' },          // Retour en haut de page
    { name: 'A Propos', href: '/#about' },    // Section À Propos
    { name: 'Exploration', href: '/#catalog' }, // Section Catalogue
    { name: 'Contact', href: '/#contact' },   // Section Contact
  ];

  return (
    <nav className="fixed w-full z-[100] px-6 py-5 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-vein-gray/20">
      
      {/* Brand Logo */}
      <div className="font-serif text-xl md:text-2xl tracking-tighter flex items-center gap-2">
        <div className="w-5 h-5 border border-gold-accent rotate-45 flex items-center justify-center shrink-0">
          <div className="w-2.5 h-2.5 bg-stone-black"></div>
        </div>
        <div className="flex items-baseline">
          <span className="text-stone-black uppercase font-bold tracking-tight">Platine</span>
          <span 
            className="ml-2 text-3xl md:text-4xl select-none"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#C9A24D", 
              fontWeight: "400",
              letterSpacing: "-0.03em" 
            }}
          >
            stone
          </span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-semibold text-stone-gray">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-gold-accent transition-colors duration-300">
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[10px] uppercase tracking-[0.4em] font-bold text-stone-black px-2 py-1"
      >
        {isOpen ? 'Fermer' : 'Menu'}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="absolute top-full left-0 w-full bg-white border-b border-vein-gray/30 shadow-2xl py-12 px-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif italic text-stone-black hover:text-gold-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-4 pt-6 border-t border-vein-gray/10 text-[9px] uppercase tracking-widest text-vein-gray">
              <p>Atelier de Marbrerie • Oujda • Sur rendez-vous</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;