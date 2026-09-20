export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  businessId: string;
  businessName: string;
  rating: number;
  reviewCount: number;
  stock: number;
  modelId: string;
  colors: string[];
  featured: boolean;
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 'modern-desk-lamp',
    name: 'Modern Desk Lamp',
    description: 'A sleek, adjustable LED desk lamp perfect for any modern workspace. Features adjustable color temperature and brightness.',
    price: 89.99,
    category: 'Electronics',
    businessId: 'luminex',
    businessName: 'Luminex Designs',
    rating: 4.8,
    reviewCount: 124,
    stock: 45,
    modelId: 'desk-lamp',
    colors: ['#c0c0c0', '#ffd700', '#1a1a2e'],
    featured: true,
    specifications: {
      'Material': 'Aluminum',
      'Power': '12W LED',
      'Color Temp': '2700K - 6500K',
      'Lifespan': '50,000 hours'
    }
  },
  {
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones delivering crystal clear audio and exceptional comfort for long listening sessions.',
    price: 149.99,
    category: 'Electronics',
    businessId: 'sonicwave',
    businessName: 'SonicWave Audio',
    rating: 4.9,
    reviewCount: 89,
    stock: 30,
    modelId: 'headphones',
    colors: ['#1a1a2e', '#dc2626', '#ffffff'],
    featured: true,
    specifications: {
      'Type': 'Over-ear',
      'Battery Life': '30 hours',
      'Bluetooth': '5.2',
      'Weight': '250g'
    }
  },
  {
    id: 'ergonomic-chair',
    name: 'Ergonomic Office Chair',
    description: 'Fully adjustable ergonomic chair designed for maximum support during long work days. Features breathable mesh back.',
    price: 299.99,
    category: 'Furniture',
    businessId: 'craftwood',
    businessName: 'CraftWood Studio',
    rating: 4.7,
    reviewCount: 210,
    stock: 15,
    modelId: 'chair',
    colors: ['#8b5e3c', '#1a1a2e', '#2d5a27'],
    featured: false,
    specifications: {
      'Material': 'Mesh & Aluminum',
      'Weight Capacity': '300 lbs',
      'Adjustability': 'Height, Tilt, Armrests',
      'Warranty': '5 years'
    }
  },
  {
    id: 'smart-watch',
    name: 'Titanium Smart Watch',
    description: 'Advanced fitness and health tracking in a premium titanium casing. Water resistant and long battery life.',
    price: 199.99,
    category: 'Electronics',
    businessId: 'luminex',
    businessName: 'Luminex Designs',
    rating: 4.6,
    reviewCount: 156,
    stock: 60,
    modelId: 'watch',
    colors: ['#c0c0c0', '#ffd700', '#1a1a2e'],
    featured: true,
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '14 days',
      'Water Resistance': '5 ATM',
      'Sensors': 'Heart rate, SpO2, GPS'
    }
  },
  {
    id: 'ceramic-vase',
    name: 'Handcrafted Ceramic Vase',
    description: 'Minimalist ceramic vase, wheel-thrown and glazed by hand. Perfect for dry flowers or as a standalone piece.',
    price: 45.99,
    category: 'Handmade',
    businessId: 'earthtone',
    businessName: 'EarthTone Pottery',
    rating: 4.9,
    reviewCount: 42,
    stock: 12,
    modelId: 'vase',
    colors: ['#d4a574', '#ffffff', '#6366f1'],
    featured: false,
    specifications: {
      'Material': 'Stoneware',
      'Dimensions': '10" x 5"',
      'Finish': 'Matte Glaze',
      'Care': 'Hand wash only'
    }
  },
  {
    id: 'sport-sneakers',
    name: 'Urban Sport Sneakers',
    description: 'Lightweight and breathable sneakers designed for urban exploration and daily comfort.',
    price: 129.99,
    category: 'Fashion Accessories',
    businessId: 'stepup',
    businessName: 'StepUp Footwear',
    rating: 4.5,
    reviewCount: 78,
    stock: 120,
    modelId: 'sneaker',
    colors: ['#ffffff', '#dc2626', '#1a1a2e'],
    featured: true,
    specifications: {
      'Material': 'Knit Mesh',
      'Sole': 'EVA Foam',
      'Weight': '200g',
      'Style': 'Low-top'
    }
  },
  {
    id: 'travel-backpack',
    name: 'Explorer Travel Backpack',
    description: 'Durable, weather-resistant backpack with smart compartments for laptops and travel essentials.',
    price: 79.99,
    category: 'Fashion Accessories',
    businessId: 'stepup',
    businessName: 'StepUp Footwear',
    rating: 4.8,
    reviewCount: 315,
    stock: 85,
    modelId: 'backpack',
    colors: ['#1a1a2e', '#2d5a27', '#d4a574'],
    featured: false,
    specifications: {
      'Capacity': '25L',
      'Material': 'Recycled Nylon',
      'Laptop Sleeve': 'Fits up to 16"',
      'Water Resistant': 'Yes'
    }
  },
  {
    id: 'artisan-coffee-mug',
    name: 'Artisan Coffee Mug',
    description: 'Comfortable handle and heat-retaining clay make this the perfect daily coffee companion.',
    price: 24.99,
    category: 'Handmade',
    businessId: 'earthtone',
    businessName: 'EarthTone Pottery',
    rating: 4.7,
    reviewCount: 63,
    stock: 25,
    modelId: 'mug',
    colors: ['#d4a574', '#ffffff', '#6366f1'],
    featured: false,
    specifications: {
      'Material': 'Ceramic',
      'Capacity': '12 oz',
      'Microwave Safe': 'Yes',
      'Dishwasher Safe': 'Yes'
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
