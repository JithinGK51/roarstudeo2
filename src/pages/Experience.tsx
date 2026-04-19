import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text, OrbitControls, MeshDistortMaterial, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticle({ color, ...props }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(t + props.index) * 0.005;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function ExperienceScene() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      color: Math.random() > 0.5 ? '#D4AF37' : '#0F9D58',
      index: i,
    }));
  }, []);

  return (
    <>
      <color attach="background" args={['#020617']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
      >
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <group position={[0, 0, 0]}>
            {/* Central Portal */}
            <mesh>
              <torusGeometry args={[2, 0.05, 16, 100]} />
              <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
            </mesh>
            
            <mesh scale={0.8}>
              <icosahedronGeometry args={[1, 15]} />
              <MeshDistortMaterial
                color="#0F9D58"
                speed={2}
                distort={0.5}
                radius={1}
              />
            </mesh>

            <Text
              position={[0, 0, -5]}
              fontSize={1}
              color="#D4AF37"
              font="https://fonts.gstatic.com/s/outfit/v11/Q8id8l69SshfJD96F5XJ9R6.woff"
            >
              ROARSTAR
            </Text>
          </group>
        </Float>
      </PresentationControls>

      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#0F9D58" />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function Experience() {
  return (
    <div className="h-screen w-full relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ExperienceScene />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-10">
        <div className="mt-auto mb-20 text-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
            IMMERSE <span className="text-peacock-gold italic">YOURSELF</span>
          </h1>
          <p className="text-slate-400">
            Interact with the Roarstar Singularity. Drag to explore the cosmic nexus where story and sound converge.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="px-4 py-2 glass rounded-full text-[10px] text-peacock-gold uppercase font-bold tracking-widest">3D Story Section A-1</div>
            <div className="px-4 py-2 glass rounded-full text-[10px] text-white uppercase font-bold tracking-widest">Beta Engine v0.9</div>
          </div>
        </div>
      </div>
    </div>
  );
}
