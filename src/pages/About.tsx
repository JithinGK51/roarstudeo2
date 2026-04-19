import { motion } from 'motion/react';
import { Target, Users, Zap, Shield, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-peacock-gold">
                <Target size={20} />
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold">The Origin</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none">
                BORN FROM <br/> <span className="text-peacock-gold">CHOSEN</span> CHAOS
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Founded in 2024, Roarstar Studios was born out of a desire to break the mold of traditional animation. We believe that stories shouldn't just be told; they should be felt, lived, and experienced through every pixel.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                By blending artisanal Japanese animation techniques with next-generation 3D rendering and generative AI, we craft worlds that are as complex as they are beautiful.
              </p>
              <div className="pt-6 flex gap-10">
                <div>
                  <h4 className="text-3xl font-display font-bold text-peacock-gold">50+</h4>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Global Creators</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-peacock-gold">12</h4>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Major Awards</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-peacock-gold">04</h4>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Hubs Worldwide</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-peacock-gold/10 blur-[100px] rounded-full" />
              <img 
                src="https://picsum.photos/seed/studio/800/800" 
                alt="Studio Life" 
                className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl max-w-xs shadow-2xl">
                <p className="text-white font-display font-bold italic">"We don't follow trends. We hunt for the sparks that start them."</p>
                <p className="mt-4 text-peacock-gold text-[10px] font-bold uppercase tracking-widest">— Aris Roarster, Founder</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 border-y border-white/5 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "Innovation First", desc: "Constant experimentation with cutting-edge tech to elevate visual fidelity." },
            { icon: Shield, title: "Creative Integrity", desc: "Honoring the craft while pushing the boundaries of what's possible." },
            { icon: Globe, title: "Cultural Synergy", desc: "A global collective bringing diverse perspectives into every frame." },
            { icon: Award, title: "Premium Quality", desc: "Every production is a masterpiece, crafted with obsessive attention to detail." },
            { icon: Users, title: "Collaborative Mindset", desc: "We build together, leveraging the strengths of every visionary in our studio." },
            { icon: Target, title: "Endless Vision", desc: "Our horizon is set on the future of interactive storytelling." },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl hover:bg-white/5 transition-all">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-peacock-gold mb-6 group-hover:bg-peacock-gold group-hover:text-peacock-dark transition-all">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Team Section Placeholder */}
        <section className="py-32">
          <header className="mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-center">THE <span className="text-peacock-gold">CHOSEN</span> ELEVEN</h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <img 
                    src={`https://picsum.photos/seed/person${i}/500/625`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest">Director {i + 1}</h4>
                <p className="text-peacock-gold text-[10px] font-bold uppercase tracking-widest mt-1">Lead Visionary</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
