
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Packages from "@/components/packages";
import PromoBanner from "@/components/promo-banner";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <Packages />
      <About />
      <Contact />
    </div>
  );
}
