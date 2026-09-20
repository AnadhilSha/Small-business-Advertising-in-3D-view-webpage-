'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { RotateCcw, Maximize, Expand } from 'lucide-react';
import { modelMap } from './ProductModels';
import Lighting from './Lighting';

interface ProductViewerProps {
  modelId: string;
  color?: string;
  autoRotate?: boolean;
  className?: string;
  showControls?: boolean;
}

export const ProductViewer: React.FC<ProductViewerProps> = ({
  modelId,
  color,
  autoRotate = false,
  className = '',
  showControls = true,
}) => {
  const [isRotating, setIsRotating] = useState(autoRotate);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const ModelComponent = modelMap[modelId];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-black/20 rounded-xl overflow-hidden ${className}`}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1, 4], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={
          <Html center>
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </Html>
        }>
          <Lighting />
          {ModelComponent ? (
            <ModelComponent color={color} />
          ) : (
            <mesh>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color={color || '#ffffff'} />
            </mesh>
          )}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            autoRotate={isRotating}
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI / 1.8}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>

      {showControls && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/10">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-2 rounded-full transition-colors ${isRotating ? 'bg-indigo-500 text-white' : 'hover:bg-white/20 text-gray-300'}`}
            title="Auto Rotate"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/20 text-gray-300 transition-colors"
            title="Fullscreen"
          >
            <Expand size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductViewer;
