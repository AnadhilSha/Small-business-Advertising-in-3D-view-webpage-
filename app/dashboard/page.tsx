'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Package, PlusCircle, ShoppingBag, 
  Users, BarChart3, Settings, LogOut, ArrowLeft,
  DollarSign, MoreVertical, Edit, Trash2, Upload, Box
} from 'lucide-react';
import { products } from '@/data/products';

type Tab = 'overview' | 'products' | 'add' | 'orders' | 'customers' | 'analytics' | 'settings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'add', label: 'Add Product', icon: PlusCircle },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col glass border-r border-white/5 h-screen sticky top-0">
        <div className="p-6">
          <Link href="/" className="inline-block">
            <h1 className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-2xl font-extrabold text-transparent tracking-tight">
              3DMarket
            </h1>
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Business Portal</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Nav - Top Bar */}
      <div className="md:hidden glass border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center justify-between p-4">
          <h1 className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
            Business Portal
          </h1>
          <Link href="/" className="text-sm text-gray-400">Back</Link>
        </div>
        <div className="flex overflow-x-auto px-4 pb-2 hide-scrollbar gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === item.id 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-[#12121a] text-gray-400 border border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'products' && <ProductsTab onAddClick={() => setActiveTab('add')} />}
            {activeTab === 'add' && <AddProductTab />}
            {['orders', 'customers', 'analytics', 'settings'].includes(activeTab) && (
              <PlaceholderTab name={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- TABS COMPONENTS ---

function OverviewTab() {
  const stats = [
    { label: 'Total Revenue', value: '$12,450.00', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Total Orders', value: '156', icon: ShoppingBag, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Active Products', value: '8', icon: Package, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Total Customers', value: '89', icon: Users, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Alex Johnson', product: 'Minimalist Chair', amount: '$120.00', status: 'Completed', date: 'Today, 10:30 AM' },
    { id: '#ORD-002', customer: 'Sarah Smith', product: 'Mechanical Keyboard', amount: '$150.00', status: 'Processing', date: 'Today, 09:15 AM' },
    { id: '#ORD-003', customer: 'Mike Brown', product: 'Desk Lamp', amount: '$45.00', status: 'Completed', date: 'Yesterday' },
    { id: '#ORD-004', customer: 'Emily Davis', product: 'Coffee Maker', amount: '$89.00', status: 'Shipped', date: 'Yesterday' },
    { id: '#ORD-005', customer: 'Chris Wilson', product: 'Minimalist Chair', amount: '$120.00', status: 'Completed', date: 'Oct 12, 2023' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Welcome back, Business Owner</h2>
        <p className="text-gray-400 mt-1">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass p-6 rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Orders</h3>
          <button className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-[#12121a]/50">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentOrders.map((order, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4 text-gray-400">{order.date}</td>
                  <td className="px-6 py-4 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                      order.status === 'Processing' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductsTab({ onAddClick }: { onAddClick: () => void }) {
  // Use first 5 mock products for demo
  const myProducts = products.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Your Products</h2>
          <p className="text-gray-400 mt-1">Manage your inventory and 3D models.</p>
        </div>
        <button 
          onClick={onAddClick}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <PlusCircle className="h-4 w-4" />
          Add New Product
        </button>
      </div>

      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-[#12121a]/50">
              <tr>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {myProducts.map((product) => (
                <tr key={product.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-[#12121a] flex items-center justify-center border border-white/10 text-xs text-gray-500">
                        IMG
                      </div>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 capitalize">{product.category}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AddProductTab() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold">Add New Product</h2>
        <p className="text-gray-400 mt-1">Fill out the details to list a new product in your store.</p>
      </div>

      <div className="glass rounded-xl border border-white/5 p-6 sm:p-8">
        <form className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
              <input 
                type="text" 
                placeholder="e.g., Minimalist Wood Chair" 
                className="w-full rounded-lg border border-white/10 bg-[#12121a] p-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea 
                rows={4} 
                placeholder="Describe your product..." 
                className="w-full rounded-lg border border-white/10 bg-[#12121a] p-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price ($)</label>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full rounded-lg border border-white/10 bg-[#12121a] p-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select className="w-full rounded-lg border border-white/10 bg-[#12121a] p-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none appearance-none">
                  <option value="">Select category...</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="art">Art & Decor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Stock Quantity</label>
                <input 
                  type="number" 
                  placeholder="10" 
                  className="w-full rounded-lg border border-white/10 bg-[#12121a] p-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-white/5 my-6" />

          {/* Media Upload */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Thumbnail Images</label>
              <div className="border-2 border-dashed border-white/10 hover:border-indigo-500/50 rounded-xl p-8 text-center bg-[#12121a] transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300">Drag and drop or click to upload</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">3D Model (GLB/GLTF) <span className="text-indigo-400">*</span></label>
              <div className="border-2 border-dashed border-indigo-500/30 bg-indigo-500/5 hover:border-indigo-500/60 rounded-xl p-8 text-center transition-colors cursor-pointer">
                <Box className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-sm text-indigo-200">Upload your 3D model</p>
                <p className="text-xs text-indigo-300/50 mt-1">.glb or .gltf files up to 50MB</p>
              </div>
              <div className="mt-4 bg-[#12121a] rounded-lg p-4 flex items-center justify-center border border-white/5 h-32 text-gray-500 text-sm">
                Upload a model to see 3D preview
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
              Publish Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PlaceholderTab({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] glass rounded-2xl border border-white/5">
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
        <Settings className="h-8 w-8 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-sm font-medium rounded-full border border-indigo-500/20">
        Coming Soon
      </div>
      <p className="text-gray-500 mt-4 max-w-sm text-center">
        This section is currently under development. Check back later for updates.
      </p>
    </div>
  );
}
