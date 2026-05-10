import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, image: "../../public/escalier_1.jpg" },
  { id: 2, image: "../../public/escalier_2.jpg" },
  { id: 3, image: "../../public/kichen_1.jpg" },
  { id: 4, image: "../../public/motif_1.jpg" },
  { id: 5, image: "../../public/escalier_3.jpg" },
  { id: 6, image: "../../public/escalier_4.jpg" },
  { id: 7, image: "../../public/kichen_2.jpg" },
  { id: 8, image: "../../public/escalier_5.jpg" },
  { id: 9, image: "../../public/kichen_3.jpg" },
  { id: 10, image: "../../public/motif_2.jpg" },
];

const Realisations = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 pb-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Titre minimaliste */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-serif text-[#1a1a1a] tracking-tight"
          >
            Galerie de <span className="italic">Projets</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-[#c5a059] mt-6"></div>
        </div>

        {/* Grille de 10 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden bg-stone-100 group cursor-crosshair"
            >
              <img 
                src={project.image} 
                alt={`Réalisation ${index + 1}`}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.2s] ease-out group-hover:scale-110"
              />
              
              {/* Bordure discrète au survol au lieu d'un overlay plein */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[15px] border-white/10 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Navigation retour */}
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => window.history.back()}
            className="text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-[#c5a059] transition-colors duration-300"
          >
            ← Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Realisations;