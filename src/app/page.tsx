
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Packages from "@/components/packages";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <Packages />
      <About />
      <Contact />
    </div>
  );
}
