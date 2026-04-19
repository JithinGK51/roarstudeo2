import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Lead 3D Environment Artist', location: 'Tokyo / Hybrid', type: 'Full-time', department: 'Art & Design' },
  { id: 2, title: 'Senior Character Technical Director', location: 'London / Remote', type: 'Full-time', department: 'Engineering' },
  { id: 3, title: 'Cinematic Storyboard Artist', location: 'Tokyo', type: 'Contract', department: 'Story' },
  { id: 4, title: 'Soundscape Architect', location: 'Los Angeles / Hybrid', type: 'Full-time', department: 'Audio' },
];

export default function Careers() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-peacock-gold mb-6">
            <Briefcase size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Join the Collective</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
            SHAPE THE <span className="text-peacock-gold italic">FUTURE</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are looking for visionaries, misfits, and boundary-pushers. At Roarstar, you're not just an employee; you're a co-architect of new worlds.
          </p>
        </header>

        {/* Perks Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Global Freedom", desc: "Work from our hubs in Tokyo, London, or LA, or from your favorite corner of the world." },
            { title: "Cutting Edge", desc: "Access to the latest hardware, neural processing units, and custom studio engines." },
            { title: "Artist First", desc: "Intellectual property sharing and creative freedom on internal incubator projects." },
          ].map((perk, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border-t-2 border-peacock-green">
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">{perk.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </section>

        {/* Job Listings */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white">Open <span className="text-peacock-gold">Positions</span></h2>
            <div className="flex gap-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{jobs.length} Opportunities Available</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 10 }}
                className="glass p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:border-peacock-gold/30 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-peacock-gold/10 text-peacock-gold text-[10px] font-bold uppercase tracking-widest rounded-full">{job.department}</span>
                    <span className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">{job.type}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-peacock-gold transition-colors">{job.title}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={16} className="text-peacock-gold" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock size={16} className="text-peacock-gold" /> Just Posted
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-peacock-gold group-hover:text-peacock-dark group-hover:border-peacock-gold transition-all">
                    <ArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-[3rem] relative overflow-hidden border-2 border-white/5">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-peacock-green/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Express <span className="text-peacock-gold">Interest</span></h2>
              <p className="text-slate-400">Don't see a role that fits? Send us your portfolio for future consideration.</p>
            </div>

            <form className="grid md:grid-cols-2 gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4 md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-2">Your Name</label>
                    <input type="text" className="w-full bg-peacock-dark/50 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-peacock-gold transition-all" placeholder="Akira Roarstar" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-2">Email Address</label>
                    <input type="email" className="w-full bg-peacock-dark/50 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-peacock-gold transition-all" placeholder="akira@roarstar.studio" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-2">Portfolio Reveal (URL)</label>
                <input type="url" className="w-full bg-peacock-dark/50 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-peacock-gold transition-all" placeholder="https://be.net/yourname" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-2">The Vision (Intro)</label>
                <textarea className="w-full bg-peacock-dark/50 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-peacock-gold transition-all h-32 resize-none" placeholder="What kind of magic are you bringing to the collective?"></textarea>
              </div>

              <div className="md:col-span-2">
                <button className="btn-primary w-full py-5 text-sm uppercase tracking-[0.3em]">
                  Submit Credentials <Send size={18} />
                </button>
              </div>

              <div className="md:col-span-2 flex items-center justify-center gap-2 text-peacock-green opacity-60">
                <CheckCircle2 size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest">End-to-End Encrypted Submission</span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
