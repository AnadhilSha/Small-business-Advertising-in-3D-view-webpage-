'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: '0 0 20px rgba(99,102,241,0.2)',
              borderColor: 'rgba(99,102,241,0.5)',
            }
          : undefined
      }
      className={`glass rounded-xl border border-white/10 p-6 transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
