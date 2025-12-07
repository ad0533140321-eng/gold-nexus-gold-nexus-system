import { Navbar } from '@/components/navbar';
import { GoldTicker } from '@/components/GoldTicker';
import HeroSection from '@/components/HeroSection';
import { HighlightedProducts } from '@/components/HighlightedProducts';
import { TrustIndicators } from '@/components/TrustIndicators';
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />
      <HeroSection />
      <HighlightedProducts />
      <TrustIndicators />
      <Footer />
    </div>
  );
}
