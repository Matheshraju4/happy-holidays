"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

import Image from "next/image";
import { Button } from "./ui/button";
import DestinationMarquee from "./destination-marquee";

const destinations = [
  "Goa",
  "Dubai",
  "Ooty & Coonoor",
  "Manali",
  "Bali",
  "Kodaikanal",
  "Kashmir",
  "Thailand",
  "Munnar",
  "Shimla",
  "Maldives",
  "Wayanad",
  "Jaipur",
  "Singapore",
  "Alleppey",
  "Leh Ladakh",
  "Sri Lanka",
  "Coorg",
  "Rishikesh",
  "Vietnam",
  "Varkala",
  "Udaipur",
  "Switzerland",
  "Darjeeling",
  "Andaman",
];

const slides = [
  {
    image: "/kerala.jpg",
    subTitle: "extraordinary",
    title: "travel, worldclass",
    description: "The real journey of discovery consists not in seeking new landscapes, but in having new eyes. Discover it with Happiee Holidays",
  },
  {
    image: "/hampi.jpg",
    subTitle: "mesmerizing",
    title: "Dream Vacations",
    description: "Explore domestic & international destinations with our exclusive travel memberships. Accommodation, breakfast, sightseeing — all covered.",
  },
  {
    image: "/mysore.png", // Changed from banner-2 to kerala for variety
    subTitle: "explore",
    title: "Hidden Gems",
    description: "Discover the untouched beauty of the world with our curated local experiences. Your journey to extraordinary memories begins here.",
  },
  {
    image: "/kanyakumari.png", // Changed from banner-2 to kerala for variety
    subTitle: "explore",
    title: "Hidden Gems",
    description: "Discover the untouched beauty of the world with our curated local experiences. Your journey to extraordinary memories begins here.",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full h-[80vh] min-h-[450px] overflow-hidden scroll-mt-28"
    >




      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 transition-all duration-700">
        <span className="text-yellow-400 font-['Italianno',cursive] text-3xl md:text-5xl lg:text-6xl mb-[-0.5rem] md:mb-[-1.5rem] drop-shadow-md italic">
          {slides[currentSlide].subTitle}
        </span>
        <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight drop-shadow-lg mb-4 md:mb-6 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-white/90 text-xs md:text-lg max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed text-center px-4 mb-6 md:mb-4">
          {slides[currentSlide].description}
        </p>

        <div className="w-full max-w-xs md:max-w-xl mx-auto px-4 opacity-80 hover:opacity-100 transition-opacity">
          <DestinationMarquee destinations={destinations} speed="normal" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-black/20 hover:bg-black/40 text-white rounded-lg transition-all z-20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 md:size-10 stroke-[1.5px] transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-black/20 hover:bg-black/40 text-white rounded-lg transition-all z-20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 md:size-10 stroke-[1.5px] transition-transform group-hover:translate-x-1" />
      </button>


      {/* WhatsApp Button */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
        <a
          href="https://wa.me/919884161705"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        >
          <MessageCircle className="size-5 md:size-6" />
        </a>
      </div>

      {/* Enquire Now Button */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
        <Button
          className="rounded-full px-6 py-5 md:px-10 md:py-7 text-sm md:text-lg font-bold bg-[#FFD700] hover:bg-[#FFC000] text-black shadow-xl transition-all hover:scale-105 active:scale-95"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Enquire Now
        </Button>
      </div>


    </div>
  );
};

export default HeroSection;

