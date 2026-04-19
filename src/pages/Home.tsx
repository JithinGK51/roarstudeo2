import { motion } from 'motion/react';
import { Play, ArrowRight, Volume2, Calendar, Star } from 'lucide-react';
import ThreeLogo from '../components/ui/ThreeLogo';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const featuredMovies = [
  {
    id: 1,
    title: 'Neon Odyssey',
    year: '2026',
    category: 'Cyberpunk / Action',
    image: 'https://picsum.photos/seed/anime1/1280/720',
    rating: '9.8',
  },
  {
    id: 2,
    title: 'Emerald Skies',
    year: '2025',
    category: 'Fantasy / Drama',
    image: 'https://picsum.photos/seed/anime2/1280/720',
    rating: '9.5',
  },
  {
    id: 3,
    title: 'Golden Roar',
    year: '2024',
    category: 'Samurai / Horror',
    image: 'https://picsum.photos/seed/anime3/1280/720',
    rating: '9.2',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const moviesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for hero
      gsap.to('.hero-title', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        opacity: 0,
      });

      // Reveal animations for cards
      gsap.from('.movie-card', {
        scrollTrigger: {
          trigger: moviesRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <ThreeLogo />
        
        <div className="relative z-10 max-w-5xl mx-auto hero-title">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-12 bg-peacock-gold" />
            <span className="text-peacock-gold uppercase tracking-[0.5em] text-xs font-bold">Cinematic Excellence</span>
            <span className="h-[1px] w-12 bg-peacock-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-display font-bold leading-tight uppercase tracking-tighter"
          >
            THE ART OF <br/>
            <span className="text-peacock-gold">STORYTELLING</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Roarstar Studios is a global collective of visionary creators pushing the boundaries of animation and immersive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="btn-primary group">
              Watch Reel <Play size={18} fill="currentColor" />
            </button>
            <button className="btn-outline">
              Browse Movies <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-peacock-gold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-peacock-gold to-transparent" />
        </motion.div>
      </section>

      {/* Featured movies Slider Placeholder */}
      <section ref={moviesRef} className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Featured <br/> <span className="text-peacock-gold">Productions</span></h2>
            <p className="text-slate-400 max-w-sm">Award-winning films that defined a new era of cinematic expression.</p>
          </div>
          <button className="text-peacock-gold hover:text-white transition-colors flex items-center gap-2 uppercase font-bold text-sm tracking-widest group">
            All Movies <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="movie-card group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/5 transition-all group-hover:border-peacock-gold/50 shadow-2xl">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-peacock-gold text-[10px] font-bold uppercase tracking-widest">{movie.category}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{movie.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-peacock-gold transition-colors">{movie.title}</h3>
                </div>
                {/* Rating Badge */}
                <div className="absolute top-6 right-6 glass p-2 rounded-lg flex items-center gap-1">
                  <Star fill="#D4AF37" stroke="none" size={14} />
                  <span className="text-xs font-bold text-white">{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Music Highlight CTA */}
      <section className="py-40 bg-[#01040D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-peacock-gold/5 blur-[150px] -translate-y-1/2 translate-x-1/4 rounded-full" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square group">
              <img 
                src="https://picsum.photos/seed/experience/1000/1000" 
                alt="3D Experience" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-peacock-gold hover:scale-110 transition-transform cursor-pointer">
                  <Volume2 />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none">Sonic <br/> <span className="text-peacock-green">Landscapes</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every note matters. Our soundtracks are curated by global composers to create audio-reactive visuals that breathe life into every frame.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full border border-peacock-gold/30 flex items-center justify-center"><Play size={16} fill="#D4AF37"/></div>
                <div>
                  <p className="font-bold text-sm">Now Playing: "Golden Horizon"</p>
                  <p className="text-slate-500 text-xs">Composed by Roarstar Strings</p>
                </div>
              </div>
              <button className="btn-outline w-fit">Visit Sound Studio</button>
            </div>
          </div>
        </div>
      </section>

      {/* News Carousel Placeholder */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Calendar className="text-peacock-gold" />
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Latest <span className="text-peacock-gold">Updates</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:bg-white/10 transition-all border-l-4 border-peacock-gold group cursor-pointer">
              <span className="text-xs font-bold text-peacock-green uppercase">Studio News</span>
              <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-peacock-gold transition-colors">Roarstar Studios opens new branch in London</h3>
              <p className="text-slate-400 text-sm mb-6">Following the success of "Neon Odyssey", we are expanding our global footprint to the UK.</p>
              <span className="text-xs text-slate-500 italic">April 19, 2026</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
