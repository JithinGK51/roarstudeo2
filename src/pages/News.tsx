import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowRight, Share2, Bookmark } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Roarstar Studios expansion into Virtual Production',
    date: 'April 19, 2026',
    category: 'Industry',
    image: 'https://picsum.photos/seed/news1/800/450',
    excerpt: 'Utilizing Unreal Engine 6 and custom-built LED volumes, our new stage in Shinjuku is ready to redefine physics.'
  },
  {
    id: 2,
    title: 'Neon Odyssey nears completion of principal animation',
    date: 'April 15, 2026',
    category: 'Production',
    image: 'https://picsum.photos/seed/news2/800/450',
    excerpt: 'After two years of development, our flagship cyberpunk title is entering the final rendering phase.'
  },
  {
    id: 3,
    title: 'Composer Yuki Saori joins the Roarstar Collective',
    date: 'April 10, 2026',
    category: 'Collaboration',
    image: 'https://picsum.photos/seed/news3/800/450',
    excerpt: 'The legendary film composer will be leadsing the sonic direction for our upcoming project "Emerald Skies".'
  },
];

export default function News() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-peacock-gold mb-4">
            <Newspaper size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Studio Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            THE <span className="text-peacock-gold">CHRONICLES</span>
          </h1>
        </header>

        {/* Featured News */}
        <div className="mb-24">
          <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 aspect-[21/9]">
            <img src={newsItems[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured News" />
            <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark via-peacock-dark/40 to-transparent p-12 flex flex-col justify-end">
              <div className="max-w-3xl space-y-6">
                <span className="bg-peacock-gold text-peacock-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Featured Report</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase group-hover:text-peacock-gold transition-colors">{newsItems[0].title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed">{newsItems[0].excerpt}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} /> {newsItems[0].date}
                  </div>
                  <button className="flex items-center gap-2 text-peacock-gold font-bold text-sm uppercase tracking-widest group/btn">
                    Read Intelligence <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-white/5 pb-10">
          {['Latest Intelligence', 'Production Reports', 'Strategic Alliances', 'Tech Briefings', 'Global Events'].map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-peacock-gold text-peacock-dark' : 'text-slate-400 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="flex flex-col h-full bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 transition-all hover:border-peacock-gold/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-peacock-green">{item.category}</span>
                  <div className="flex gap-4 text-slate-500">
                    <Share2 size={14} className="hover:text-peacock-gold cursor-pointer" />
                    <Bookmark size={14} className="hover:text-peacock-gold cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 line-clamp-2 hover:text-peacock-gold cursor-pointer transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{item.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.date}</span>
                  <button className="text-peacock-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                    Full Bio <ArrowRight size={12} />
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
