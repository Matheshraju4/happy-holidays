
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Packages from "@/components/packages";
import PromoBanner from "@/components/promo-banner";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4">
        <Packages />
        <About />
        <Contact />
      </div>
    </main>
  );
}

