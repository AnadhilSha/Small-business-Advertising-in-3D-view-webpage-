'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { RotateCcw, Move3d, Award } from 'lucide-react';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="self-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium">
              ✨ The Future of Small Business
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            Experience Products in <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">3D</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-lg">
            Discover products from small businesses through an interactive 3D experience. Rotate, zoom, and explore before you buy.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/products"
              className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3 rounded-lg glass border border-white/10 hover:bg-white/5 font-medium transition-colors"
            >
              For Businesses
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8 border-t border-white/10 mt-4">
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Businesses</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-400">Users</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
          <HeroScene />
          
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-10 right-10 glass p-3 rounded-lg flex items-center gap-2 border border-white/10"
          >
            <RotateCcw className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">360° View</span>
          </motion.div>
          
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="absolute bottom-20 left-4 glass p-3 rounded-lg flex items-center gap-2 border border-white/10"
          >
            <Move3d className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">Interactive 3D</span>
          </motion.div>

          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="absolute bottom-32 right-8 glass p-3 rounded-lg flex items-center gap-2 border border-white/10"
          >
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">Premium Products</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
