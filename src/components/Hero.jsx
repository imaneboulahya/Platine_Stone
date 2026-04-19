import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax: Image moves slower than the scroll
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-black">
      {/* The Image Layer */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img 
          src="../../public/pexels-infonautica-2674812.jpg" 
          className="w-full h-full object-cover opacity-70" 
          alt="Premium raw marble blocks"
          onLoad={() => console.log("Hero image loaded successfully")}
        />
        {/* Gradients to ensure text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-black/60 via-transparent to-stone-black"></div>
      </motion.div>
      
      {/* Content Layer */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="text-gold-accent uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-8 block">
            L'Excellence du Marbre
          </span>
          <h1 className="text-white text-7xl md:text-[11rem] font-serif leading-none tracking-tighter">
            PLATINE
          </h1>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="h-[1px] w-12 md:w-32 bg-gold-accent/50"></div>
            <span className="text-gold-accent font-serif italic text-4xl md:text-8xl tracking-tight">stone</span>
            <div className="h-[1px] w-12 md:w-32 bg-gold-accent/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;