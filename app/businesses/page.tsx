'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Package, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BusinessCard from '@/components/ui/BusinessCard';
import { businesses } from '@/data/businesses';

export default function BusinessesPage() {
  const stats = [
    { label: 'Active Businesses', value: '500+', icon: Store, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Unique Products', value: '2,500+', icon: Package, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Happy Customers', value: '10k+', icon: Users, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0f] to-[#0a0a0f] z-0" />
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Discover Small <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Businesses</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-16"
            >
              Support local makers, independent creators, and visionary entrepreneurs shaping the future of commerce in 3D.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Business Grid Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Makers</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8 hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BusinessCard business={business} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10 glass rounded-3xl p-12 border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Own a business?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Join our platform and showcase your products in stunning 3D. Reach a global audience of forward-thinking customers.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              List Your Products
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
