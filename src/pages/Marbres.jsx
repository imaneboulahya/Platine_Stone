import React from 'react';
import { motion } from 'framer-motion';

const marbres = [
  {
    name: "Carrara White",
    origin: "Italie",
    finish: "Poli / Adouci",
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Le grand classique intemporel avec ses veines grises délicates."
  },
  {
    name: "Nero Marquina",
    origin: "Espagne",
    finish: "Poli",
    image: "https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Un noir profond intense contrasté par des veines blanches éclatantes."
  },
  {
    name: "Calacatta Gold",
    origin: "Italie",
    finish: "Satiné",
    image: "https://images.pexels.com/photos/1352134/pexels-photo-1352134.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Le summum du luxe avec des veines dorées et ambrées."
  },
  {
    name: "Vert Guatemala",
    origin: "Inde",
    finish: "Poli",
    image: "https://images.pexels.com/photos/1012111/pexels-photo-1012111.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Une profondeur émeraude unique pour des pièces de caractère."
  }
];

const Marbres = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-accent uppercase tracking-[0.6em] text-[10px] font-bold"
          >
            Collection Exclusive
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mt-6 text-stone-black"
          >
            Types de <span className="italic text-gold-accent">Marbre</span>
          </motion.h1>
        </div>

        {/* Grille des échantillons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marbres.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden mb-6">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-serif text-stone-black mb-1">{m.name}</h3>
              <p className="text-gold-accent text-[10px] uppercase tracking-widest mb-4">{m.origin} — {m.finish}</p>
              <p className="text-stone-gray text-sm font-light leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button 
             onClick={() => window.location.href = '/'}
             className="text-stone-black font-bold uppercase tracking-widest text-[10px] border-b-2 border-gold-accent pb-2"
           >
             Retour à l'accueil
           </button>
        </div>
      </div>
    </div>
  );
};

export default Marbres;