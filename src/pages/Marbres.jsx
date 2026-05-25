import React from 'react';
import { motion } from 'framer-motion';

const marbres = [
  { id: 1, name: "Carrara White", img: "https://plus.unsplash.com/premium_photo-1764687797170-8139372a9005?w=600" },
  { id: 2, name: "Nero Marquina", img: "https://images.unsplash.com/photo-1550053808-52a75a05955d?w=600" },
  { id: 3, name: "Calacatta Gold", img: "https://plus.unsplash.com/premium_photo-1671410372744-989627ea0033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYnJlfGVufDB8fDB8fHww" },
  { id: 4, name: "Vert Guatemala", img: "https://images.unsplash.com/photo-1532644440111-bc94f97955c1?w=600" },

];

const Marbres = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Titre minimaliste */}
                <div className="mb-16">
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-6xl font-serif text-[#1a1a1a] tracking-tight"
                  >
                    Catalogue des <span className="italic">Marbres</span>
                  </motion.h1>
                  <div className="w-20 h-[1px] bg-[#c5a059] mt-6"></div>
                </div>

        {/* Grille de photos plus petites (4 colonnes sur desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {marbres.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer text-center"
            >
              {/* Photo plus petite avec format portrait élégant */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
                <motion.img 
                  src={m.img} 
                  alt={m.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Nom du marbre sous la photo */}
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] font-medium group-hover:text-[#c5a059] transition-colors duration-300">
                {m.name}
              </h3>
              <div className="w-4 h-[1px] bg-gray-200 mx-auto mt-2 group-hover:w-8 group-hover:bg-[#c5a059] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bouton retour épuré */}
        <footer className="mt-24 text-center">
          <button 
            onClick={() => window.history.back()}
            className="text-[9px] uppercase tracking-[0.4em] text-gray-400 hover:text-[#c5a059] transition-colors duration-300 border-b border-transparent hover:border-[#c5a059] pb-1"
          >
            Retour
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Marbres;