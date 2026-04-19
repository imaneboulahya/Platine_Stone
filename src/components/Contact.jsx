import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Revêtement de sol',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // On cible l'adresse IP locale pour éviter les bugs de résolution DNS
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
      console.error("Erreur de connexion:", error);
      alert("Erreur de connexion : Vérifiez que votre serveur Flask est lancé.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Infos de contact */}
          <div className="space-y-12">
            <div>
              <span className="text-gold-accent uppercase tracking-[0.5em] text-[10px] font-bold">Contact</span>
              <h2 className="text-5xl font-serif mt-4 text-stone-black italic">Parlons de votre projet.</h2>
              <p className="text-stone-gray mt-6 font-light max-w-md leading-relaxed">
                Notre équipe vous accompagne dans le choix et la pose de pierres d'exception à Taza.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center border border-vein-gray/10 shrink-0">
                  <span className="text-xs uppercase font-bold text-gold-accent">Adr</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-stone-black">Siège Social</h4>
                  <p className="text-stone-gray text-sm font-light italic">Quartier Industriel, Taza, Maroc</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center border border-vein-gray/10 shrink-0">
                  <span className="text-xs uppercase font-bold text-gold-accent">Tel</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-stone-black">Téléphone</h4>
                  <p className="text-stone-gray text-sm font-light">+212 6XX XX XX XX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-[#FAFAFA] p-10 lg:p-16 border border-vein-gray/10 shadow-sm relative">
            <div className="absolute -top-4 right-10 bg-stone-black text-white px-6 py-2 text-[9px] uppercase tracking-widest font-bold shadow-lg">
              imaneboulahya705@gmail.com
            </div>

            <form className="space-y-8 mt-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black italic">Nom Complet</label>
                  <input 
                    required type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent text-sm text-stone-black" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black italic">Email Personnel</label>
                  <input 
                    required type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent text-sm text-stone-black" 
                    placeholder="email@exemple.com" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black italic">Type de projet</label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent text-sm text-stone-black cursor-pointer"
                >
                  <option>Revêtement de sol</option>
                  <option>Escaliers</option>
                  <option>Cuisine / Plan de travail</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black italic">Votre Message</label>
                <textarea 
                  required rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent text-sm text-stone-black" 
                  placeholder="Décrivez vos besoins..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-stone-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold-accent transition-all duration-500 shadow-lg">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;