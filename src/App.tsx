import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Music from './pages/Music';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import About from './pages/About';
import News from './pages/News';
import Careers from './pages/Careers';
import Blog from './pages/Blog';

// Placeholder Pages
const PagePlaceholder = ({ title }: { title: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-20 container mx-auto px-6 min-h-screen text-white flex flex-col items-center justify-center text-center"
  >
    <h1 className="text-7xl font-display font-bold uppercase mb-8">{title}</h1>
    <p className="text-slate-400 max-w-lg mb-12">This section is currently being rendered in our cinematic engine. Stay tuned for a legendary experience.</p>
    <div className="w-20 h-1 bg-peacock-gold animate-pulse" />
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/music" element={<Music />} />
        <Route path="/news" element={<News />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
