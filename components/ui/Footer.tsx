'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#12121a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Box className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                3DMarket
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              See it. Explore it. Experience it.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Products</Link></li>
              <li><Link href="/businesses" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Businesses</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">About</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">For Businesses</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Dashboard</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">List Products</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Email</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 3DMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
