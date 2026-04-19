import React from 'react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const handleNavigation = (link) => {
    window.location.href = link;
  };

  const items = [
    {
      title: "Nos Réalisations",
      description: "Découvrez nos projets terminés et laissez-vous inspirer par nos poses d'exception.",
      image: "https://images.pexels.com/photos/7005282/pexels-photo-7005282.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/realisations",
      label: "Voir les photos",
      isAvailable: true
    },
    {
      title: "Catalogue des Marbres",
      description: "Explorez notre collection complète de marbres, granits et pierres naturelles disponibles.",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/types-marbre",
      label: "Découvrir la collection",
      isAvailable: true
    },
    {
      title: "Conseils & Choix",
      description: "Comment bien choisir son marbre ? Nos experts vous guident selon vos besoins.",
      image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/conseils",
      label: "Lire les conseils",
      isAvailable: true
    }
  ];

  return (
    <section id="catalog" className="py-32 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold-accent uppercase tracking-[0.5em] text-[10px] font-bold">Exploration</span>
          <h2 className="text-5xl font-serif mt-4 text-stone-black italic">Votre Projet en Pierre</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => handleNavigation(item.link)}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] overflow-hidden mb-6 shadow-xl border border-vein-gray/10">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                  <span className="bg-white/90 text-stone-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorer
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-3 text-stone-black group-hover:text-gold-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-gray font-light text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-gold-accent pb-1 text-stone-black">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;