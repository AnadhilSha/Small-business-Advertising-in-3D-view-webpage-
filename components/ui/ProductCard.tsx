'use client';

import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace with actual import from @/data/products
interface Product {
  id: string;
  name: string;
  businessName: string;
  price: number;
  rating: number;
  reviewCount: number;
  modelId: string;
  colors?: string[];
}

interface ProductCardProps {
  product: Product;
}

const modelIcons: Record<string, string> = {
  'desk-lamp': '💡',
  'headphones': '🎧',
  'chair': '🪑',
  'watch': '⌚',
  'vase': '🏺',
  'sneaker': '👟',
  'backpack': '🎒',
  'mug': '☕',
};

export default function ProductCard({ product }: ProductCardProps) {
  const icon = modelIcons[product.modelId] || '📦';

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(99,102,241,0.2)',
        borderColor: 'rgba(99,102,241,0.5)',
      }}
      className="glass rounded-xl overflow-hidden border border-white/10 flex flex-col transition-all duration-300"
    >
      <div className="h-48 w-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center border-b border-white/5 relative">
        <span className="text-6xl drop-shadow-2xl">{icon}</span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-400">{product.businessName}</p>
          </div>
          <span className="text-xl font-bold text-indigo-400">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium text-white">{product.rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={`/product/${product.id}`}
            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
          >
            View in 3D
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
