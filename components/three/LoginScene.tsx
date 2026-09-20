'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  type: 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron' | 'dodecahedron';
  speed: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, type, speed }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const rotationAxis = useMemo(() => {
    return new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotateOnAxis(rotationAxis, speed);
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.5;
    }
  });

  let geometry;
  switch (type) {
    case 'sphere':
      geometry = <sphereGeometry args={[1, 32, 32]} />;
      break;
    case 'box':
      geometry = <boxGeometry args={[1.5, 1.5, 1.5]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[1, 0.3, 16, 32]} />;
      break;
    case 'octahedron':
      geometry = <octahedronGeometry args={[1]} />;
      break;
    case 'icosahedron':
      geometry = <icosahedronGeometry args={[1]} />;
      break;
    case 'dodecahedron':
      geometry = <dodecahedronGeometry args={[1]} />;
      break;
  }

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial 
        color="#6366f1" 
        transparent 
        opacity={Math.random() * 0.3 + 0.3} 
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

export const LoginScene: React.FC = () => {
  const shapes = useMemo(() => [
    { type: 'dodecahedron' as const, position: [-4, 2, -5] as [number, number, number], speed: 0.002 },
    { type: 'torus' as const, position: [5, -1, -3] as [number, number, number], speed: 0.003 },
    { type: 'octahedron' as const, position: [-3, -3, -4] as [number, number, number], speed: 0.0015 },
    { type: 'icosahedron' as const, position: [3, 3, -6] as [number, number, number], speed: 0.0025 },
    { type: 'box' as const, position: [0, -4, -5] as [number, number, number], speed: 0.002 },
  ], []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.2]} camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} color="#818cf8" />
        {shapes.map((shape, i) => (
          <FloatingShape key={i} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default LoginScene;
