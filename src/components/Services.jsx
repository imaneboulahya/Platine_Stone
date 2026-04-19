const services = [
  { title: "Precision 5-Axis Cutting", desc: "Digital mapping of veins to ensure seamless pattern matching across large surfaces." },
  { title: "Artisanal Texturing", desc: "Bespoke finishes including honed, flamed, leathered, and high-gloss mirror polish." },
  { title: "Global Logistical Care", desc: "Specialized reinforced crating and climate-controlled transport for fragile specimens." }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-8 border-y border-vein-gray/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-serif uppercase tracking-tighter">The <br /> Artisanship</h2>
          <div className="w-12 h-1 bg-gold-accent mt-6"></div>
        </div>
        
        <div className="md:w-2/3 grid gap-px bg-vein-gray/30 border border-vein-gray/30">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-12 group hover:bg-stone-black transition-colors duration-700">
              <span className="text-gold-accent font-serif italic mb-4 block">0{i+1}</span>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-stone-gray text-sm leading-relaxed group-hover:text-vein-gray transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;