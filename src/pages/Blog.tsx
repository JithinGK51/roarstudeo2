import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Visualizing Chaos: Our 3D Rendering Pipeline',
    author: 'Sora Tanaka',
    date: 'April 19, 2026',
    time: '8 min read',
    tags: ['Technical', '3D'],
    image: 'https://picsum.photos/seed/blog1/800/600',
    slug: 'visualizing-chaos'
  },
  {
    id: 2,
    title: 'The Evolution of Narrative in Modern Anime',
    author: 'Kenji Roarster',
    date: 'April 12, 2026',
    time: '12 min read',
    tags: ['Theory', 'Storytelling'],
    image: 'https://picsum.photos/seed/blog2/800/600',
    slug: 'evolution-of-narrative'
  },
  {
    id: 3,
    title: 'Neural Networks and Hand-Drawn Art',
    author: 'Elena Vance',
    date: 'April 05, 2026',
    time: '5 min read',
    tags: ['AI', 'Art'],
    image: 'https://picsum.photos/seed/blog3/800/600',
    slug: 'neural-networks-hand-drawn'
  },
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-peacock-gold mb-4">
            <BookOpen size={20} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold">Research & Insights</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            THE <span className="text-peacock-gold">MANUAL</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-16">
            {articles.map((article) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 relative">
                    <img src={article.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={article.title} />
                    <div className="absolute top-6 left-6 flex gap-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] font-bold text-peacock-gold uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      <span className="flex items-center gap-2"><Calendar size={12}/> {article.date}</span>
                      <span className="flex items-center gap-2"><Clock size={12}/> {article.time}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-peacock-gold transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed line-clamp-3">
                      Deep dive into the proprietary workflows and creative philosophies that drive the quality of Roarstar productions. Our team shares the "how" behind the magic.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-peacock-gold/20 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-peacock-gold">{article.author[0]}</span>
                        </div>
                        <span className="text-xs font-bold text-white italic">{article.author}</span>
                      </div>
                      <button className="text-peacock-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/link">
                        Read Story <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                <TrendingUp size={18} className="text-peacock-gold" /> Trending
              </h3>
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <span className="text-[10px] font-bold text-peacock-green uppercase">0{i}</span>
                    <h4 className="text-sm font-bold text-slate-300 group-hover:text-peacock-gold transition-colors mt-1">Mastering the cinematic light in hybrid animation</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-2">Browse Tags</h4>
              <div className="flex flex-wrap gap-2">
                {['Directing', 'VFX', 'AI', 'Story', 'Culture', 'Audio', 'Technical', 'Pipeline'].map(tag => (
                  <button key={tag} className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:border-white/20 transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-peacock-gold p-8 rounded-[2rem] text-peacock-dark relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-display font-bold mb-4 uppercase leading-none">Subscribe to Intelligence</h3>
              <p className="text-xs font-medium mb-6 opacity-80">Get the latest research and studio insights delivered to your terminal.</p>
              <input type="email" placeholder="Email Address" className="w-full bg-white/20 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold placeholder:text-peacock-dark/50 outline-none mb-3" />
              <button className="w-full bg-peacock-dark text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl group-hover:bg-black transition-colors">
                Initialize Sync
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
