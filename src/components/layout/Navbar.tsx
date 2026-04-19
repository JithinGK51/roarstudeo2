import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Music, Film, Newspaper, HelpCircle, Briefcase, Mail, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Movies', path: '/movies', icon: Film },
  { name: 'Music', path: '/music', icon: Music },
  { name: 'Experience', path: '/experience', icon: Play },
  { name: 'News', path: '/news', icon: Newspaper },
  { name: 'About', path: '/about', icon: HelpCircle },
  { name: 'Careers', path: '/careers', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'py-4 glass-dark shadow-2xl' : 'py-8 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-peacock-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(214,175,55,0.4)]">
            <span className="text-peacock-dark font-black text-xl">R</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            ROARSTAR<span className="text-peacock-gold">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-peacock-gold relative group',
                location.pathname === link.path ? 'text-peacock-gold' : 'text-slate-300'
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-[1px] bg-peacock-gold transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">Join Us</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-peacock-dark flex flex-col p-10 pt-32"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-3xl font-display font-bold flex items-center gap-4',
                      location.pathname === link.path ? 'text-peacock-gold' : 'text-white'
                    )}
                  >
                    <link.icon className="text-peacock-gold" size={24} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col gap-6">
              <button className="btn-primary w-full py-4 text-lg">Contact Studio</button>
              <div className="flex justify-center gap-6 text-slate-400">
                {/* Social placeholders */}
                <span>TW</span>
                <span>IG</span>
                <span>FB</span>
                <span>YT</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
