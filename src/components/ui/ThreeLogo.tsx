import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#D4AF37"
          speed={2}
          distort={0.4}
          radius={1}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeLogo() {
  return (
    <div className="w-full h-[600px] absolute inset-0 -z-10 opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0F9D58" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0A1F44" />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
}
