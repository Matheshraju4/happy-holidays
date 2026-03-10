
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Packages from "@/components/packages";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <Packages />
    </div>
  );
}
