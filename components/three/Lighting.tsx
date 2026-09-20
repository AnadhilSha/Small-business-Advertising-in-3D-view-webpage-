'use client';

import React from 'react';
import { ContactShadows, Environment } from '@react-three/drei';

export const Lighting: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} color="#fff1e8" />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow 
      />
      <pointLight 
        position={[-5, 3, -5]} 
        intensity={0.5} 
      />
      <ContactShadows 
        opacity={0.4} 
        blur={2.5} 
        position-y={-1.5} 
      />
      <Environment 
        preset="city" 
        environmentIntensity={0.3} 
      />
    </>
  );
};

export default Lighting;
