import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Revêtement de sol',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Succès : Votre message a été transmis à Platine Stone !");
        setFormData({ fullName: '', email: '', projectType: 'Revêtement de sol', message: '' });
      } else {
        alert(`Erreur du serveur : ${result.message}`);
      }
    } catch (error) {
      alert("Erreur de connexion : Vérifiez que votre serveur Flask est lancé.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { label: 'Adr', title: 'Siège Social', content: 'Quartier Industriel, Oujda, Maroc' },
    { label: 'Eml', title: 'Email Professionnel', content: 'platinestone@gmail.com' },
    { label: 'Tel', title: 'Téléphone', content: '+212 760 82 97 20' }
  ];

  return (
    <section id="contact" className="py-32 bg-white px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Texte de Gauche avec Stagger Children */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold"
              >
                Contact
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-serif mt-4 text-[#1a1a1a] italic leading-tight">
                Parlons de <br /> votre projet.
              </h2>
              <p className="text-gray-500 mt-6 font-light max-w-md leading-relaxed text-lg">
                Notre équipe vous accompagne dans le choix et la pose de pierres d'exception à Oujda.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * idx }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-[#FAFAFA] flex items-center justify-center border border-gray-100 shrink-0 group-hover:border-[#c5a059] group-hover:bg-white transition-all duration-500">
                    <span className="text-[10px] uppercase font-bold text-[#c5a059]">{item.label}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#1a1a1a]">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light italic mt-1">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire avec Reveal Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#faf9f6] p-10 lg:p-16 border border-gray-100 shadow-2xl relative overflow-hidden"
          >
            {/* Décoration en arrière-plan */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full -mr-10 -mt-10"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a]">Nom Complet</label>
                  <input 
                    required type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-white border-b border-gray-200 py-4 focus:outline-none focus:border-[#c5a059] transition-colors text-sm text-[#1a1a1a] placeholder-gray-300 px-2" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a]">Email </label>
                  <input 
                    required type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border-b border-gray-200 py-4 focus:outline-none focus:border-[#c5a059] transition-colors text-sm text-[#1a1a1a] placeholder-gray-300 px-2" 
                    placeholder="email@exemple.com" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a]">Type de projet</label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-white border-b border-gray-200 py-4 focus:outline-none focus:border-[#c5a059] text-sm text-[#1a1a1a] cursor-pointer px-2"
                >
                  <option>Revêtement de sol</option>
                  <option>Escaliers</option>
                  <option>Cuisine / Plan de travail</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a]">Votre Message</label>
                <textarea 
                  required rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-gray-100 p-4 focus:outline-none focus:border-[#c5a059] transition-colors text-sm text-[#1a1a1a] placeholder-gray-300" 
                  placeholder="Décrivez vos besoins..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 shadow-xl flex justify-center items-center gap-4 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1a1a1a] text-white hover:bg-[#c5a059]'
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                <span className="w-8 h-[1px] bg-white/30"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;