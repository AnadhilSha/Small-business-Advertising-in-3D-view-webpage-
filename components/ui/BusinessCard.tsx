'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Star, Package } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace with actual import from @/data/businesses
interface Business {
  id: string;
  name: string;
  initial: string;
  location: string;
  description: string;
  productCount: number;
  rating: number;
  color: string;
}

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      }}
      initial={{ perspective: 1000 }}
      className="glass rounded-xl border border-white/10 p-6 flex flex-col h-full transform-gpu transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
          style={{ backgroundColor: business.color }}
        >
          {business.initial}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{business.name}</h3>
          <div className="flex items-center text-sm text-gray-400 gap-1 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{business.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-6 line-clamp-3 flex-grow">
        {business.description}
      </p>

      <div className="flex items-center justify-between py-4 border-t border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-gray-300">{business.productCount} Products</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium text-white">{business.rating.toFixed(1)}</span>
        </div>
      </div>

      <Link
        href={`/products?business=${business.id}`}
        className="w-full inline-flex items-center justify-center px-4 py-2 font-medium bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-colors"
      >
        View Store
      </Link>
    </motion.div>
  );
}
