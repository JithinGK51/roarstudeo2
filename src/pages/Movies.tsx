import { motion } from 'motion/react';
import { Film, Search, Filter, Play, Info, Star } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Action', 'Fantasy', 'Scifi', 'Horror', 'Slice of Life'];

const allMovies = [
  { id: 1, title: 'Neon Odyssey', category: 'Action', rating: '9.8', image: 'https://picsum.photos/seed/anime1/800/450', description: 'A cyberpunk thriller set in 2099.' },
  { id: 2, title: 'Emerald Skies', category: 'Fantasy', rating: '9.5', image: 'https://picsum.photos/seed/anime2/800/450', description: 'Journey through the floating islands.' },
  { id: 3, title: 'Golden Roar', category: 'Action', rating: '9.2', image: 'https://picsum.photos/seed/anime3/800/450', description: 'The samurai legend reborn.' },
  { id: 4, title: 'Shadow Gate', category: 'Horror', rating: '8.9', image: 'https://picsum.photos/seed/anime4/800/450', description: 'Don\'t look back.' },
  { id: 5, title: 'Summer Rain', category: 'Slice of Life', rating: '9.1', image: 'https://picsum.photos/seed/anime5/800/450', description: 'A story of first love.' },
  { id: 6, title: 'Stellar Drifters', category: 'Scifi', rating: '9.4', image: 'https://picsum.photos/seed/anime6/800/450', description: 'Lost among the stars.' },
];

export default function Movies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = allMovies.filter(movie => 
    (activeCategory === 'All' || movie.category === activeCategory) &&
    (movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-3 text-peacock-gold mb-4">
            <Film size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Official Library</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            CINEMATIC <br/> <span className="text-peacock-gold">ARCHIVES</span>
          </h1>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-peacock-gold text-peacock-dark' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search library..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:border-peacock-gold outline-none transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMovies.map((movie) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={movie.id}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl border border-white/5"
            >
              <img 
                src={movie.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={movie.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark via-peacock-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
              
              <div className="absolute top-6 right-6 glass p-2 rounded-lg flex items-center gap-1">
                <Star fill="#D4AF37" stroke="none" size={14} />
                <span className="text-xs font-bold text-white">{movie.rating}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-peacock-gold text-[10px] font-bold uppercase tracking-widest">{movie.category}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{movie.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {movie.description}
                </p>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 bg-peacock-gold text-peacock-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors">
                    <Play size={14} fill="currentColor" /> Trailer
                  </button>
                  <button className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors">
                    <Info size={14} /> Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
