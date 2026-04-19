import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Villa Contemporaine - Casablanca",
    category: "Revêtement de Sol",
    image: "https://images.pexels.com/photos/7005282/pexels-photo-7005282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Hôtel de Luxe - Marrakech",
    category: "Hall d'entrée en Marbre",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Résidence Privée - Rabat",
    category: "Cuisine en Quartzite",
    image: "https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Appartement Moderne - Tanger",
    category: "Salle de Bain Calacatta",
    image: "https://images.unsplash.com/photo-1738748444551-2f0819de6faa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Realisations = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-accent uppercase tracking-[0.6em] text-[10px] font-bold"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mt-6 text-stone-black"
          >
            Nos <span className="italic text-gold-accent">Réalisations</span>
          </motion.h1>
          <p className="text-stone-gray max-w-2xl mx-auto mt-8 font-light text-lg">
            Une immersion dans nos projets les plus prestigieux, où chaque pierre est posée avec une précision millimétrée.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[600px] overflow-hidden shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-stone-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="text-center p-6 border border-white/20 backdrop-blur-sm bg-white/10 w-4/5 h-4/5 flex flex-col justify-center">
                    <p className="text-gold-accent text-xs uppercase tracking-widest mb-4">{project.category}</p>
                    <h3 className="text-white text-3xl font-serif">{project.title}</h3>
                    <div className="w-12 h-px bg-white mx-auto mt-6"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton retour simple (en attendant le router) */}
        <div className="mt-20 text-center">
           <button 
             onClick={() => window.history.back()}
             className="text-stone-black font-bold uppercase tracking-widest text-[10px] border-b-2 border-gold-accent pb-2 hover:text-gold-accent transition-colors"
           >
             Retour à l'accueil
           </button>
        </div>
      </div>
    </div>
  );
};

export default Realisations;