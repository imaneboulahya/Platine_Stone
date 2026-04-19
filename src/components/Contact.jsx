import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Colonne 1 : Infos de contact */}
          <div className="space-y-12">
            <div>
              <span className="text-gold-accent uppercase tracking-[0.5em] text-[10px] font-bold">Contact</span>
              <h2 className="text-5xl font-serif mt-4 text-stone-black italic">Parlons de votre projet.</h2>
              <p className="text-stone-gray mt-6 font-light max-w-md leading-relaxed">
                Que vous soyez architecte ou particulier, notre équipe vous accompagne dans le choix et la pose de pierres d'exception à Taza et dans toute la région.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center text-gold-accent border border-vein-gray/10 shrink-0">
                  <span className="text-xs uppercase font-bold text-gold-accent">Adr</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-stone-black">Siège Social</h4>
                  <p className="text-stone-gray text-sm font-light italic">Quartier Industriel, Taza, Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center text-gold-accent border border-vein-gray/10 shrink-0">
                  <span className="text-xs uppercase font-bold text-gold-accent">Tel</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-stone-black">Téléphone</h4>
                  <p className="text-stone-gray text-sm font-light">+212 6XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center text-gold-accent border border-vein-gray/10 shrink-0">
                  <span className="text-xs uppercase font-bold text-gold-accent">@</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-stone-black">Email Direct</h4>
                  <p className="text-stone-gray text-sm font-light">contact@platinestone.ma</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Formulaire de contact */}
          <div className="bg-[#FAFAFA] p-10 lg:p-16 border border-vein-gray/10 shadow-sm relative">
            {/* Badge Email Société */}
            <div className="absolute -top-4 right-10 bg-stone-black text-white px-6 py-2 text-[9px] uppercase tracking-widest font-bold shadow-lg">
              contact@platinestone.ma
            </div>

            <form className="space-y-8 mt-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black">
                    Nom Complet
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent transition-colors font-light text-sm text-stone-black placeholder:text-stone-gray/50" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black">
                    Email Personnel
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent transition-colors font-light text-sm text-stone-black placeholder:text-stone-gray/50" 
                    placeholder="email@exemple.com" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black">
                  Type de projet
                </label>
                <select className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent transition-colors font-light text-sm text-stone-black cursor-pointer">
                  <option>Revêtement de sol</option>
                  <option>Escaliers</option>
                  <option>Cuisine / Plan de travail</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] uppercase tracking-[0.2em] font-extrabold text-stone-black">
                  Votre Message
                </label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white border border-vein-gray/30 p-4 focus:outline-none focus:border-gold-accent transition-colors font-light text-sm text-stone-black placeholder:text-stone-gray/50" 
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