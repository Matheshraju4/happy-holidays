"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import DestinationMarquee from "./destination-marquee";
import { Button } from "./ui/button";

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

const HeroSection = () => {
  return (
    <div
      id="home"
      className="scroll-mt-20 flex flex-col md:flex-row px-4 md:px-20 gap-6 items-center justify-center"
    >
      <div className="relative w-full md:w-5/12 aspect-2/3 rounded-2xl overflow-hidden max-h-[500px] hidden md:flex">
        <Image
          src={"/banner-2.jpg"}
          alt="banner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-5 w-full md:w-7/12 py-4">
        <span className="text-sm font-medium tracking-widest uppercase text-primary/70">
          Mesmerizing Memories
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
          Start Your <br />
          <span className="text-primary">Dream Vacation</span> <br />
          With Us
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
          Explore{" "}
          <span className="font-semibold text-foreground">domestic</span> &{" "}
          <span className="font-semibold text-foreground">international</span>{" "}
          destinations with our exclusive travel memberships.{" "}
          <span className="text-foreground/80 font-medium">Accommodation</span>,{" "}
          <span className="text-foreground/80 font-medium">breakfast</span>,{" "}
          <span className="text-foreground/80 font-medium">sightseeing</span> — all covered.
          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            EMI starting at just ₹2,000
          </span>
        </p>

        <DestinationMarquee destinations={destinations} className="max-w-xl" />

        <div className="flex flex-row gap-3 pt-2">
          <Button
            size="lg"
            className="rounded-full px-6"
            onClick={() =>
              document
                .getElementById("packages")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Packages
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6"
            onClick={() =>
              window.open(
                "https://wa.me/919884161705?text=Hi! I am interested in booking a holiday package.",
                "_blank",
              )
            }
          >
            Book Now
          </Button>
        </div>
      </div>
      <div className="relative w-full  aspect-video rounded-2xl overflow-hidden max-h-[500px] flex md:hidden">
        <Image
          src={"/banner-2.jpg"}
          alt="banner"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeroSection;
