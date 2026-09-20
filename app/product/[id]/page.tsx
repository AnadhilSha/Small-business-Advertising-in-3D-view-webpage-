'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, StarHalf, Minus, Plus, Loader2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { getProductById } from '@/data/products';
import { businesses } from '@/data/businesses';

// Dynamically import ProductViewer to prevent SSR issues with Three.js
const ProductViewer = dynamic(() => import('@/components/three/ProductViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#12121a] rounded-2xl border border-white/5">
      <div className="flex flex-col items-center gap-4 text-indigo-400">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="text-sm font-medium">Loading 3D Experience...</span>
      </div>
    </div>
  ),
});

export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const product = getProductById(id);
  
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors?.[0] || '#ffffff');
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="glass p-12 rounded-2xl border border-white/10 text-center max-w-md">
            <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-gray-400 mb-8">The product you are looking for does not exist or has been removed.</p>
            <Link href="/products" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const business = businesses.find(b => b.id === product.businessId);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-white truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: 3D Viewer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-3/5"
          >
            <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden glass border border-white/10 relative">
              <ProductViewer
                modelId={product.modelId}
                color={selectedColor}
                showControls={true}
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white/80">
                Interactive 3D View - Drag to rotate
              </div>
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-2/5 flex flex-col"
          >
            <div className="glass rounded-2xl border border-white/10 p-6 sm:p-8 flex-1">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <Link 
                    href={`/products?business=${product.businessId}`}
                    className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    by {business?.name || 'Unknown Business'}
                  </Link>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-500">
                      {[...Array(4)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      <StarHalf className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-gray-400 ml-1">(128 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  ${product.price.toFixed(2)}
                </span>
                {product.stock > 0 ? (
                  <span className="ml-4 inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    In Stock
                  </span>
                ) : (
                  <span className="ml-4 inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400 border border-red-500/20">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-8 prose prose-invert prose-sm">
                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Select Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === color 
                            ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-white/5">
                        <span className="text-gray-400">{key}</span>
                        <span className="text-white font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-4 mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[#12121a] rounded-lg border border-white/10 p-1">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">{product.stock} available</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold transition-all ${
                      addedToCart 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {addedToCart ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </>
                    )}
                  </button>
                  
                  <button className="flex-1 py-3.5 px-4 bg-[#12121a] hover:bg-white/5 border border-white/10 text-white rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={product.stock === 0}>
                    Buy Now
                  </button>
                  
                  <button 
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3.5 rounded-xl border transition-colors flex items-center justify-center ${
                      isSaved 
                        ? 'border-pink-500/50 bg-pink-500/10 text-pink-500' 
                        : 'border-white/10 bg-[#12121a] text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    aria-label="Save product"
                  >
                    <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
