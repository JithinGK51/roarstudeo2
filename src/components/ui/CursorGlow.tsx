import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    x.set(mousePos.x);
    y.set(mousePos.y);
  }, [mousePos, x, y]);

  return (
    <motion.div
      className="cursor-glow"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}
