'use client';

import React from 'react';

interface Category {
  id: string;
  name: string;
}

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  return (
    <div className="glass rounded-xl border border-white/10 p-6 flex flex-col gap-8 h-fit">
      <div>
        <h3 className="text-sm uppercase text-gray-500 font-semibold mb-4 tracking-wider">
          Categories
        </h3>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={() => onCategoryChange('')}
              className="sr-only"
            />
            <span
              className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === ''
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              All Categories
            </span>
          </label>
          {categories.map((category) => (
            <label key={category.id} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={() => onCategoryChange(category.id)}
                className="sr-only"
              />
              <span
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm uppercase text-gray-500 font-semibold mb-4 tracking-wider">
          Price Range
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label htmlFor="min-price" className="sr-only">Min Price</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
              <input
                type="number"
                id="min-price"
                min={0}
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg py-2 pl-7 pr-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-600"
                placeholder="Min"
              />
            </div>
          </div>
          <span className="text-gray-500">-</span>
          <div className="flex-1">
            <label htmlFor="max-price" className="sr-only">Max Price</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
              <input
                type="number"
                id="max-price"
                min={0}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg py-2 pl-7 pr-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-600"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
