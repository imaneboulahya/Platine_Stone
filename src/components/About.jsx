import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Composant de compteur animé simple
const Counter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {value}
    </motion.span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-40 bg-[#FAFAFA] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Section Image avec effet de parallaxe et révélation */}
          <div className="relative w-full lg:w-1/2">
            <motion.div 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              {/* IMAGE DE FOND (TEXTURE MARBRE) */}
              <motion.div 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute -top-10 -left-10 w-full h-full -z-10 hidden md:block overflow-hidden shadow-xl border border-stone-200"
              >
                <img 
                  src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Texture marbre"
                  className="w-full h-full object-cover opacity-30"
                />
              </motion.div>

              {/* IMAGE PRINCIPALE */}
              <div className="overflow-hidden shadow-2xl border-[12px] border-white">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://plus.unsplash.com/premium_photo-1744995489414-54227f34f060?w=800&auto=format&fit=crop&q=80" 
                  alt="Expertise en marbrerie" 
                  className="w-full h-[650px] object-cover" 
                />
              </div>
              
              {/* Badge flottant avec animation magnétique */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-[#1a1a1a] text-white py-8 px-10 hidden md:block shadow-2xl"
              >
                <p className="text-[#c5a059] font-serif italic text-2xl">Excellence</p>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 mt-1">Savoir-faire Artisanal</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Section Texte */}
          <div className="w-full lg:w-1/2 lg:pt-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-px bg-[#c5a059]"
                />
                <span className="text-[#c5a059] uppercase tracking-[0.6em] text-[9px] font-bold">
                  Savoir-Faire & Précision
                </span>
              </div>

              <h2 className="text-6xl md:text-[5.5rem] font-serif leading-[0.9] text-[#1a1a1a] mb-12">
                L’art de sculpter <br />
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="italic text-[#c5a059] font-light"
                >
                  l’éternité.
                </motion.span>
              </h2>
              
              <div className="relative pl-12 border-l border-gray-200 space-y-10">
                <p className="text-gray-600 font-sans leading-relaxed text-lg tracking-tight max-w-xl">
                  Platine Stone s'impose comme une référence dans l'extraction et le façonnage des pierres les plus nobles. Chaque projet est une collaboration entre la rigueur de l'architecture et la beauté organique de la matière.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed text-lg tracking-tight max-w-xl">
                  De la sélection rigoureuse des blocs en carrière jusqu'à la pose finale, nos processus intègrent des standards de qualité internationaux.
                </p>
              </div>

              {/* Indicateurs avec animation de montée */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
                {[
                  { val: "250+", label: "Réalisations", sub: "Projets de prestige" },
                  { val: "40+", label: "Variétés", sub: "Pierres & Marbres" },
                  { val: "100%", label: "Sur-mesure", sub: "Façonnage artisanal" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                  >
                    <p className="font-serif text-4xl text-[#1a1a1a]">
                      <Counter value={stat.val} />
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-[#c5a059] mt-3">{stat.label}</p>
                    <p className="text-[10px] text-gray-400 mt-1 font-light italic">{stat.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;