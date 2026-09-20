export interface Business {
  id: string;
  name: string;
  initial: string;
  location: string;
  description: string;
  productCount: number;
  rating: number;
  established: string;
  category: string;
  color: string;
}

export const businesses: Business[] = [
  {
    id: 'luminex',
    name: 'Luminex Designs',
    initial: 'L',
    location: 'San Francisco CA',
    description: 'Premium lighting and tech accessories combining elegant design with modern utility.',
    productCount: 5,
    rating: 4.8,
    established: '2019',
    category: 'Electronics',
    color: '#6366f1'
  },
  {
    id: 'sonicwave',
    name: 'SonicWave Audio',
    initial: 'S',
    location: 'Austin TX',
    description: 'Handcrafted audio equipment focusing on acoustic excellence and durable materials.',
    productCount: 3,
    rating: 4.6,
    established: '2020',
    category: 'Electronics',
    color: '#dc2626'
  },
  {
    id: 'craftwood',
    name: 'CraftWood Studio',
    initial: 'C',
    location: 'Portland OR',
    description: 'Sustainable, bespoke furniture made from locally sourced reclaimed wood.',
    productCount: 4,
    rating: 4.9,
    established: '2018',
    category: 'Furniture',
    color: '#8b5e3c'
  },
  {
    id: 'earthtone',
    name: 'EarthTone Pottery',
    initial: 'E',
    location: 'Asheville NC',
    description: 'Artisan pottery bringing organic shapes and natural textures to your home.',
    productCount: 6,
    rating: 4.7,
    established: '2017',
    category: 'Handmade',
    color: '#d4a574'
  },
  {
    id: 'stepup',
    name: 'StepUp Footwear',
    initial: 'S',
    location: 'Brooklyn NY',
    description: 'Urban fashion footwear and accessories designed for the modern explorer.',
    productCount: 4,
    rating: 4.5,
    established: '2021',
    category: 'Fashion',
    color: '#10b981'
  },
  {
    id: 'hometech',
    name: 'HomeTech Solutions',
    initial: 'H',
    location: 'Seattle WA',
    description: 'Innovative smart home products that seamlessly integrate into everyday life.',
    productCount: 3,
    rating: 4.4,
    established: '2020',
    category: 'Home Appliances',
    color: '#f59e0b'
  }
];

export function getBusinessById(id: string): Business | undefined {
  return businesses.find(b => b.id === id);
}
