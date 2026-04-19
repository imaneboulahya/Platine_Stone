const Projects = () => {
  return (
    <section className="py-32 bg-white">
      <div className="px-8 mb-16 max-w-7xl mx-auto flex justify-between items-end">
        <h2 className="text-5xl font-serif italic">Realizations</h2>
        <p className="text-[10px] tracking-widest uppercase text-stone-gray">2023 — 2026</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[600px] gap-2">
        <div className="relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000" alt="Project 1" />
          <div className="absolute inset-0 bg-stone-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end text-white">
            <p className="text-xs uppercase tracking-widest">Milan, IT</p>
            <h4 className="text-xl font-serif">The Brera Penthouse</h4>
          </div>
        </div>
        
        <div className="md:col-span-2 relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1600607687940-4e524cb357bd?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000" alt="Project 2" />
          <div className="absolute inset-0 bg-stone-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end text-white">
            <p className="text-xs uppercase tracking-widest">Dubai, UAE</p>
            <h4 className="text-xl font-serif">Royal Atlantis Suite</h4>
          </div>
        </div>

        <div className="relative overflow-hidden group bg-gold-accent flex items-center justify-center p-12 text-center">
          <div className="border border-white/30 w-full h-full flex flex-center items-center justify-center flex-col">
            <p className="text-white text-xs uppercase tracking-[0.4em] mb-4">View All</p>
            <h4 className="text-white text-2xl font-serif leading-none">40+ Projects</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;