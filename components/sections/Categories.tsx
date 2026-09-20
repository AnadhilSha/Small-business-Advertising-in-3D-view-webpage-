'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { Cpu, Armchair, Gem, Home, Shirt, Palette, Layers } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'electronics': return Cpu;
    case 'furniture': return Armchair;
    case 'handmade': return Gem;
    case 'home appliances': return Home;
    case 'fashion': return Shirt;
    case 'local crafts': return Palette;
    default: return Layers;
  }
};

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Browse Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400"
          >
            Find exactly what you're looking for across our diverse selection
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((category) => {
            const Icon = getIcon(category.name);
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="snap-start flex-none w-48 group"
              >
                <div className="glass p-6 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center gap-4 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                    <Icon className="w-8 h-8 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{category.productCount || 0} Products</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
