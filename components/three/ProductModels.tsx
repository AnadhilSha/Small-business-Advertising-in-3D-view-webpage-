'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';

interface ModelProps {
  color?: string;
  scale?: number;
}

export const DeskLampModel: React.FC<ModelProps> = ({ color = '#ffffff', scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Base */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Arm 1 */}
      <mesh position={[0, -0.4, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Joint */}
      <mesh position={[-0.1, 0.1, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={'#333333'} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Arm 2 */}
      <mesh position={[0.1, 0.6, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Shade */}
      <mesh position={[0.4, 1.1, 0]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.5, 0.6, 32]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Bulb */}
      <mesh position={[0.4, 1.0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={'#ffeeaa'} emissive={'#ffeeaa'} emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
};

export const HeadphonesModel: React.FC<ModelProps> = ({ color = '#333333', scale = 1 }) => {
  return (
    <group scale={scale} position={[0, 0.2, 0]}>
      {/* Headband */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.1, 16, 64, Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Left Earcup */}
      <mesh position={[-0.8, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Left Pad */}
      <mesh position={[-0.7, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.2, 0.1, 16, 32]} />
        <meshStandardMaterial color={'#111111'} roughness={0.9} />
      </mesh>
      {/* Right Earcup */}
      <mesh position={[0.8, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Right Pad */}
      <mesh position={[0.7, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.2, 0.1, 16, 32]} />
        <meshStandardMaterial color={'#111111'} roughness={0.9} />
      </mesh>
    </group>
  );
};

export const ChairModel: React.FC<ModelProps> = ({ color = '#c8a97e', scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Seat */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.4, -0.6, -0.4]}>
        <cylinderGeometry args={[0.05, 0.03, 0.8, 16]} />
        <meshStandardMaterial color={'#222'} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.4, -0.6, -0.4]}>
        <cylinderGeometry args={[0.05, 0.03, 0.8, 16]} />
        <meshStandardMaterial color={'#222'} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.4, -0.6, 0.4]}>
        <cylinderGeometry args={[0.05, 0.03, 0.8, 16]} />
        <meshStandardMaterial color={'#222'} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.4, -0.6, 0.4]}>
        <cylinderGeometry args={[0.05, 0.03, 0.8, 16]} />
        <meshStandardMaterial color={'#222'} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Backrest */}
      <mesh position={[0, 0.3, -0.4]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
};

export const WatchModel: React.FC<ModelProps> = ({ color = '#e0e0e0', scale = 1 }) => {
  return (
    <group scale={scale} rotation={[Math.PI / 4, 0, 0]}>
      {/* Face */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color={'#1a1a1a'} roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Bezel */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 16, 64]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Band Top */}
      <mesh position={[0, 0, -0.6]}>
        <boxGeometry args={[0.3, 0.05, 0.8]} />
        <meshStandardMaterial color={'#333'} roughness={0.7} />
      </mesh>
      {/* Band Bottom */}
      <mesh position={[0, 0, 0.6]}>
        <boxGeometry args={[0.3, 0.05, 0.8]} />
        <meshStandardMaterial color={'#333'} roughness={0.7} />
      </mesh>
      {/* Markers */}
      <mesh position={[0, 0.06, -0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.06, 0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export const VaseModel: React.FC<ModelProps> = ({ color = '#d4af37', scale = 1 }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const x = Math.sin((i / 10) * Math.PI) * 0.3 + 0.2;
      const y = (i - 5) * 0.15;
      pts.push(new THREE.Vector2(x, y));
    }
    return pts;
  }, []);

  return (
    <group scale={scale}>
      <mesh>
        <latheGeometry args={[points, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export const SneakerModel: React.FC<ModelProps> = ({ color = '#ff4444', scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Sole */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.5, 0.1, 1.2]} />
        <meshStandardMaterial color={'#ffffff'} roughness={0.9} />
      </mesh>
      {/* Upper */}
      <mesh position={[0, 0.05, 0.05]}>
        <boxGeometry args={[0.45, 0.4, 1.1]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Toe */}
      <mesh position={[0, 0.0, 0.6]}>
        <sphereGeometry args={[0.225, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
      {/* Heel */}
      <mesh position={[0, 0.0, -0.5]}>
        <cylinderGeometry args={[0.225, 0.225, 0.4, 16]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
    </group>
  );
};

export const BackpackModel: React.FC<ModelProps> = ({ color = '#2c3e50', scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Main Body */}
      <RoundedBox args={[0.7, 1, 0.4]} radius={0.1} smoothness={4} position={[0, 0.1, 0]}>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>
      {/* Front Pocket */}
      <RoundedBox args={[0.5, 0.4, 0.1]} radius={0.05} smoothness={4} position={[0, -0.1, 0.25]}>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>
      {/* Top Handle */}
      <mesh position={[0, 0.65, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
        <meshStandardMaterial color={'#111'} roughness={0.9} />
      </mesh>
      {/* Straps */}
      <mesh position={[-0.2, 0.1, -0.25]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.02]} />
        <meshStandardMaterial color={'#111'} roughness={0.9} />
      </mesh>
      <mesh position={[0.2, 0.1, -0.25]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.02]} />
        <meshStandardMaterial color={'#111'} roughness={0.9} />
      </mesh>
    </group>
  );
};

export const MugModel: React.FC<ModelProps> = ({ color = '#ffffff', scale = 1 }) => {
  return (
    <group scale={scale}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} />
      </mesh>
      {/* Inside hole */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.8, 32]} />
        <meshStandardMaterial color={'#222'} />
      </mesh>
    </group>
  );
};

export const modelMap: Record<string, React.ComponentType<ModelProps>> = {
  'desk-lamp': DeskLampModel,
  'headphones': HeadphonesModel,
  'chair': ChairModel,
  'watch': WatchModel,
  'vase': VaseModel,
  'sneaker': SneakerModel,
  'backpack': BackpackModel,
  'mug': MugModel,
};
