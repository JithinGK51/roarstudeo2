import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-peacock-gold mb-6"
          >
            <Mail size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8"
          >
            START A <span className="text-peacock-gold">CONVERSATION</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Whether you're looking for collaboration, career opportunities, or just want to discuss the future of animation, we're here to listen.
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase tracking-widest">Global Hubs</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-peacock-gold flex-shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Tokyo Headquarters</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">1-23-4 Shinjuku, Shinjuku City,<br/> Tokyo 160-0022, Japan</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-peacock-gold flex-shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">General Inquiries</h4>
                    <p className="text-slate-400 text-sm">hello@roarstar.studio</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-peacock-gold flex-shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Studio Line</h4>
                    <p className="text-slate-400 text-sm">+81 3 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest">Connect</h3>
              <div className="flex gap-4">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-peacock-gold hover:border-peacock-gold transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-10 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-peacock-gold/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-peacock-gold transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-peacock-gold transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-2">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-peacock-gold appearance-none transition-all">
                  <option className="bg-peacock-dark">Project Collaboration</option>
                  <option className="bg-peacock-dark">Careers / Recruitment</option>
                  <option className="bg-peacock-dark">Media Inquiry</option>
                  <option className="bg-peacock-dark">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 ml-2">Your Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-peacock-gold transition-all resize-none h-40" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em]">
                Send Transmission <Send size={18} />
              </button>

              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-medium">
                Protected by the roarstar security matrix
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
