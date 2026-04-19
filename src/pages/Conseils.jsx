import React from 'react';
import { motion } from 'framer-motion';

const guideSteps = [
  {
    number: "01",
    title: "L'Usage",
    text: "Pour une cuisine, privilégiez le granit ou le quartzite pour leur résistance aux acides. Le marbre est idéal pour les salles de bain et les décorations murales."
  },
  {
    number: "02",
    title: "La Finition",
    text: "Le 'Poli' apporte de la brillance et de la profondeur. L''Adouci' (mat) offre un toucher soyeux et cache mieux les petites rayures du quotidien."
  },
  {
    number: "03",
    title: "L'Entretien",
    text: "Une pierre naturelle respire. Un traitement hydrofuge une fois par an suffit pour protéger votre investissement pour les décennies à venir."
  }
];

const Conseils = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-gold-accent uppercase tracking-[0.6em] text-[10px] font-bold">Expertise</span>
          <h1 className="text-6xl md:text-7xl font-serif mt-6 text-stone-black italic">Guide du Choix</h1>
          <div className="w-20 h-px bg-gold-accent mx-auto mt-10"></div>
        </motion.div>

        <div className="space-y-24">
          {guideSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="text-8xl font-serif text-vein-gray/20">{step.number}</div>
              <div>
                <h3 className="text-3xl font-serif text-stone-black mb-4">{step.title}</h3>
                <p className="text-stone-gray font-light text-lg leading-relaxed italic">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-[#FAFAFA] border border-vein-gray/10 text-center">
          <h3 className="font-serif text-2xl mb-4">Besoin d'un conseil personnalisé ?</h3>
          <p className="text-stone-gray mb-8 font-light">Nos experts vous accompagnent dans votre projet de A à Z.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-stone-black font-bold uppercase tracking-widest text-[10px] border-b-2 border-gold-accent pb-2 hover:text-gold-accent transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conseils;