export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  color: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Cpu',
    productCount: 3,
    color: '#6366f1',
    description: 'Modern gadgets and tech essentials for everyday life.'
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'Armchair',
    productCount: 2,
    color: '#8b5e3c',
    description: 'Handcrafted pieces to elevate your living spaces.'
  },
  {
    id: 'handmade',
    name: 'Handmade Products',
    icon: 'HandMetal',
    productCount: 2,
    color: '#d4a574',
    description: 'Unique, artisan-crafted goods with natural materials.'
  },
  {
    id: 'home-appliances',
    name: 'Home Appliances',
    icon: 'Home',
    productCount: 1,
    color: '#f59e0b',
    description: 'Smart and functional devices for the modern home.'
  },
  {
    id: 'fashion',
    name: 'Fashion Accessories',
    icon: 'Shirt',
    productCount: 2,
    color: '#10b981',
    description: 'Apparel and accessories for urban lifestyles.'
  },
  {
    id: 'local-crafts',
    name: 'Local Crafts',
    icon: 'Palette',
    productCount: 1,
    color: '#dc2626',
    description: 'Artistic creations from local community makers.'
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
