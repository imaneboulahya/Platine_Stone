import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

// Animation inspirée de "React Bits" pour révéler le texte lettre par lettre
const SplitText = ({ text, className }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallaxe plus doux : l'image descend légèrement pendant le scroll
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [0.7, 0.4]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Layer (Image + Overlay) */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <motion.img 
          src="../../public/pexels-infonautica-2674812.jpg" 
          style={{ opacity }}
          className="w-full h-full object-cover" 
          alt="Premium raw marble blocks"
        />
        {/* Dégradé cinématique pour le contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
      </motion.div>
      
      {/* Content Layer */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        
        {/* Label au-dessus du titre */}
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[#c5a059] uppercase text-[10px] md:text-xs font-bold mb-6 block"
        >
          L'Excellence du Marbre
        </motion.span>

        {/* Titre Principal avec effet Split Text */}
        <div className="flex justify-center">
          <SplitText 
            text="PLATINE" 
            className="text-white text-7xl md:text-[11rem] font-serif leading-none tracking-tighter"
          />
        </div>

        {/* Sous-titre avec lignes animées */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center justify-center gap-6 mt-2"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="h-[1px] bg-[#c5a059]/40 hidden md:block" 
          />
          
          <span className="text-[#c5a059] font-serif italic text-4xl md:text-8xl tracking-tight">
            stone
          </span>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="h-[1px] bg-[#c5a059]/40 hidden md:block" 
          />
        </motion.div>
      </div>

      {/* Indicateur de scroll (React Bits style) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[8px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c5a059] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;