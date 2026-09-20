import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Categories from '@/components/sections/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import FeaturedBusinesses from '@/components/sections/FeaturedBusinesses';
import CallToAction from '@/components/sections/CallToAction';

export const metadata = {
  title: '3DMarket - The Future of Small Business',
  description: 'Discover products from small businesses through an interactive 3D experience.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <FeaturedBusinesses />
      <CallToAction />
      <Footer />
    </main>
  );
}
