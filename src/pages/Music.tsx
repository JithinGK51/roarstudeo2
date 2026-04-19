import { motion } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music as MusicIcon, ListMusic, Mic2, Disc } from 'lucide-react';
import { useState } from 'react';

const albums = [
  { id: 1, title: 'Echoes of Shinjuku', artist: 'Roarstar Beats', year: '2026', image: 'https://picsum.photos/seed/music1/500/500' },
  { id: 2, title: 'Emerald Dreams', artist: 'Sola Strings', year: '2025', image: 'https://picsum.photos/seed/music2/500/500' },
  { id: 3, title: 'Neon Pulse', artist: 'Cypher X', year: '2026', image: 'https://picsum.photos/seed/music3/500/500' },
  { id: 4, title: 'Quiet Storm', artist: 'The Minimalists', year: '2024', image: 'https://picsum.photos/seed/music4/500/500' },
];

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-peacock-dark">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-3 text-peacock-gold mb-4">
            <MusicIcon size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Sonic Library</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            THE <span className="text-peacock-gold">SOUND</span> OF STUDIO
          </h1>
        </header>

        {/* Featured Player */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-peacock-gold/10 blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="relative w-64 h-64 flex-shrink-0">
                <motion.div 
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  className="w-full h-full rounded-full border-4 border-peacock-gold/20 overflow-hidden shadow-2xl p-2 bg-peacock-dark"
                >
                  <img src={albums[0].image} className="w-full h-full rounded-full object-cover" alt="Current Album" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-peacock-dark border-4 border-peacock-gold/30" />
                  </div>
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-peacock-gold rounded-full flex items-center justify-center text-peacock-dark shadow-xl">
                  <Disc className="animate-spin-slow" />
                </div>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{albums[0].title}</h2>
                  <p className="text-peacock-gold font-bold tracking-widest uppercase text-sm">Now Playing &bull; {albums[0].artist}</p>
                </div>

                {/* Waveform Visualization Mock */}
                <div className="h-16 flex items-end justify-center md:justify-start gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: isPlaying ? [10, Math.random() * 50 + 10, 10] : 4 }}
                      transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
                      className="w-1 bg-peacock-green/50 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-8">
                  <button className="text-slate-400 hover:text-white transition-colors"><SkipBack /></button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-peacock-gold flex items-center justify-center text-peacock-dark hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-peacock-gold/20"
                  >
                    {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
                  </button>
                  <button className="text-slate-400 hover:text-white transition-colors"><SkipForward /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold uppercase tracking-widest flex items-center gap-2">
                <ListMusic size={18} className="text-peacock-gold" /> Next Up
              </h3>
              <span className="text-[10px] text-slate-500 uppercase font-bold">24 Tracks</span>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {albums.slice(1).map((album) => (
                <div key={album.id} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold truncate group-hover:text-peacock-gold transition-colors">{album.title}</h4>
                    <p className="text-slate-500 text-xs">{album.artist}</p>
                  </div>
                  <div className="text-slate-600 group-hover:text-peacock-gold self-center">
                    <Play size={14} />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border border-white/10 rounded-xl text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-white hover:border-white/20 transition-all">
              View Discography
            </button>
          </div>
        </div>

        {/* Albums Grid */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white">Full <span className="text-peacock-gold">Collections</span></h2>
            <div className="flex gap-2">
              <div className="p-3 glass rounded-lg text-slate-400 hover:text-peacock-gold cursor-pointer"><Mic2 size={18}/></div>
              <div className="p-3 glass rounded-lg text-slate-400 hover:text-peacock-gold cursor-pointer"><Volume2 size={18}/></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[...albums, ...albums].map((album, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
                  <img 
                    src={album.image} 
                    alt={album.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-peacock-dark/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-peacock-gold">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold group-hover:text-peacock-gold transition-colors">{album.title}</h3>
                <p className="text-slate-500 text-sm">{album.artist} &bull; {album.year}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
