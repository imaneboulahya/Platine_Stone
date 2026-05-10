import React from 'react';
import { motion } from 'framer-motion';

const guideSteps = [
  {
    number: "01",
    title: "L'Usage",
    text: "Pour une cuisine, privilégiez le granit ou le quartzite pour leur résistance aux acides. Le marbre est idéal pour les salles de bain et les décorations murales.",
    detail: "Résistance & Durabilité"
  },
  {
    number: "02",
    title: "La Finition",
    text: "Le 'Poli' apporte de la brillance et de la profondeur. L''Adouci' (mat) offre un toucher soyeux et cache mieux les petites rayures du quotidien.",
    detail: "Esthétique & Texture"
  },
  {
    number: "03",
    title: "L'Entretien",
    text: "Une pierre naturelle respire. Un traitement hydrofuge une fois par an suffit pour protéger votre investissement pour les décennies à venir.",
    detail: "Soin & Longévité"
  }
];

const Conseils = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Titre minimaliste */}
                <div className="mb-16">
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-6xl font-serif text-[#1a1a1a] tracking-tight"
                  >
                    Guide du <span className="italic">Choix</span>
                  </motion.h1>
                  <div className="w-20 h-[1px] bg-[#c5a059] mt-6"></div>
                </div>

        {/* Liste des étapes avec animations alternées */}
        <div className="space-y-40">
          {guideSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Le Numéro en arrière-plan */}
              <div className="relative">
                <span className="text-[12rem] md:text-[15rem] font-serif text-gray-100 leading-none select-none">
                  {step.number}
                </span>
                <motion.div 
                   initial={{ height: 0 }}
                   whileInView={{ height: "100px" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px] bg-[#c5a059]/30 hidden md:block"
                />
              </div>

              {/* Contenu Texte */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <span className="text-[#c5a059] text-[9px] uppercase tracking-[0.3em] font-bold">
                  {step.detail}
                </span>
                <h3 className="text-4xl font-serif text-[#1a1a1a] leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-light text-lg leading-relaxed max-w-lg mx-auto md:mx-0 italic">
                  "{step.text}"
                </p>
                <motion.div 
                  className="h-[1px] bg-gray-200 w-12 mx-auto md:mx-0"
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Appel à l'action raffinée */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-48 p-16 bg-[#faf9f6] border border-gray-100 relative overflow-hidden text-center"
        >
          {/* Décoration marbrée subtile */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 blur-3xl -mr-32 -mt-32 rounded-full" />
          
          <div className="relative z-10">
            <h3 className="font-serif text-3xl mb-6 text-[#1a1a1a]">Besoin d'un conseil personnalisé ?</h3>
            <p className="text-gray-500 mb-10 font-light max-w-md mx-auto leading-relaxed">
              Nos experts vous accompagnent dans la sélection de vos tranches directement en atelier.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="group relative inline-block pb-2"
            >
              <span className="text-[#1a1a1a] font-bold uppercase tracking-[0.4em] text-[10px] transition-colors group-hover:text-[#c5a059]">
                Contacter un expert
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c5a059] transform origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
            </button>
          </div>
        </motion.div>

        {/* Footer simple */}
        <div className="mt-20 text-center">
           <button 
             onClick={() => window.history.back()}
             className="text-gray-400 hover:text-[#c5a059] text-[9px] uppercase tracking-[0.5em] transition-colors"
           >
             ← Retour
           </button>
        </div>
      </div>
    </div>
  );
};

export default Conseils;