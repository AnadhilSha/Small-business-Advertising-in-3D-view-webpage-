'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { DeskLampModel } from './ProductModels';
import Lighting from './Lighting';

const AnimatedHeroModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.003;
      
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;

      // Mouse parallax
      const targetRotationX = (pointerRef.current.y * Math.PI) / 8;
      const targetRotationY = (pointerRef.current.x * Math.PI) / 8;
      
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -pointerRef.current.x * 0.1, 0.05);
    }
  });

  React.useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <group ref={groupRef}>
      <DeskLampModel color="#ffffff" scale={1.5} />
    </group>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={
          <Html center>
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </Html>
        }>
          <Lighting />
          <AnimatedHeroModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
