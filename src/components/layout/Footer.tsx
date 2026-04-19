import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#01040D] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-peacock-blue opacity-10 blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-peacock-green opacity-5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-peacock-gold rounded-lg flex items-center justify-center">
                <span className="text-peacock-dark font-black text-xl">R</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white uppercase italic">
                ROARSTAR
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Defining the future of cinematic anime. We craft stories that resonate across dimensions, combining avant-garde 3D technology with traditional artistry.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-peacock-gold hover:border-peacock-gold transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest">Studio</h4>
            <ul className="space-y-3">
              {['Home', 'Movies', 'Music', 'Experience', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-peacock-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest">Enterprise</h4>
            <ul className="space-y-3">
              {['Production', 'Licensing', 'Careers', 'News', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-peacock-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-peacock-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-sm">1-23-4 Shinjuku, Tokyo, Japan <br/> Anime District, Studio-X</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-peacock-gold flex-shrink-0" size={18} />
                <span className="text-sm">hello@roarstar.studio</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-peacock-gold flex-shrink-0" size={18} />
                <span className="text-sm">+81 3 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2026 ROARSTAR STUDIOS. All Rights Reserved. Crafted with passion by the Roarstar Collective.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Global Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
