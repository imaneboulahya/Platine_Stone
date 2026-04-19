import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-40 bg-[#FAFAFA] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Section Image : Composition Architecturale avec Texture Marbre */}
          <div className="relative w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* IMAGE DE FOND (TEXTURE MARBRE) */}
              <div className="absolute -top-10 -left-10 w-full h-full -z-10 hidden md:block overflow-hidden shadow-xl border border-vein-gray/10">
                <img 
                  src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Texture marbre blanc de luxe"
                  className="w-full h-full object-cover opacity-50"
                />
                {/* Voile léger pour adoucir la texture */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
              </div>

              {/* IMAGE PRINCIPALE (ARTISAN / ATELIER) */}
              <img 
                src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Expertise en marbrerie de prestige" 
                className="w-full h-[650px] object-cover shadow-2xl border-4 border-white" 
              />
              
              {/* Badge flottant minimaliste */}
              <div className="absolute -bottom-6 -right-6 bg-stone-black text-white py-8 px-10 hidden md:block shadow-2xl">
                <p className="text-gold-accent font-serif italic text-2xl">Excellence</p>
                <p className="text-[9px] uppercase tracking-[0.4em] text-vein-gray mt-1">Savoir-faire Artisanal</p>
              </div>
            </motion.div>
          </div>

          {/* Section Texte : Vision et Indicateurs */}
          <div className="w-full lg:w-1/2 lg:pt-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Sur-titre avec ligne dorée */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-gold-accent"></div>
                <span className="text-gold-accent uppercase tracking-[0.6em] text-[9px] font-bold">
                  Savoir-Faire & Précision
                </span>
              </div>

              {/* Titre Monumental */}
              <h2 className="text-6xl md:text-[5.5rem] font-serif leading-[0.9] text-stone-black mb-12">
                L’art de sculpter <br />
                <span className="italic text-gold-accent font-light">l’éternité.</span>
              </h2>
              
              {/* Paragraphes avec bordure de structure */}
              <div className="relative pl-12 border-l border-vein-gray/30 space-y-10">
                <p className="text-stone-black/70 font-sans leading-relaxed text-lg tracking-tight max-w-xl">
                  Platine Stone s'impose comme une référence dans l'extraction et le façonnage des pierres les plus nobles. Chaque projet est une collaboration entre la rigueur de l'architecture et la beauté organique de la matière.
                </p>
                <p className="text-stone-black/70 font-sans leading-relaxed text-lg tracking-tight max-w-xl">
                  De la sélection rigoureuse des blocs en carrière jusqu'à la pose finale, nos processus intègrent des standards de qualité internationaux pour répondre aux exigences des espaces résidentiels et commerciaux les plus prestigieux.
                </p>
              </div>

              {/* Indicateurs de Performance (Neutres) */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-vein-gray/20 pt-16">
                <div>
                  <p className="font-serif text-4xl text-stone-black">250+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold-accent mt-3">Réalisations</p>
                  <p className="text-[10px] text-stone-gray mt-1 font-light italic">Projets de prestige</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-stone-black">40+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold-accent mt-3">Variétés</p>
                  <p className="text-[10px] text-stone-gray mt-1 font-light italic">Pierres & Marbres</p>
                </div>
                <div className="hidden md:block">
                  <p className="font-serif text-4xl text-stone-black">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold-accent mt-3">Sur-mesure</p>
                  <p className="text-[10px] text-stone-gray mt-1 font-light italic">Façonnage artisanal</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;