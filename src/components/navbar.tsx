"use client";

import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [activebutton, setActiveButton] = useState("Home");
  return (
    <div className="py-2 flex justify-between px-2 md:px-4 items-center sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className=" flex flex-row">
        <Image
          src={"/happy-holiday-logo.jpg"}
          width={75}
          height={75}
          alt="happy-holiday-logo "
          priority
        />
        <div>
          {" "}
          <h2 className="font-semibold text-lg md:text-2xl">
            Happiee Holidays
          </h2>
          <p className=" text-xs md:text-sm italic">Mesmerizing memories</p>
        </div>
      </div>

      <div className="bg-muted-foreground/10 rounded-full my-1  px-2 md:flex flex-row justify-center items-center gap-1.5 py-1 hidden">
        <a
          href="#home"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activebutton === "Home" ? "bg-background shadow-sm outline outline-1 outline-border" : "hover:bg-background/50"}`}
          onClick={() => setActiveButton("Home")}
        >
          Home
        </a>
        <a
          href="#packages"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activebutton === "Packages" ? "bg-background shadow-sm outline outline-1 outline-border" : "hover:bg-background/50"}`}
          onClick={() => setActiveButton("Packages")}
        >
          Packages
        </a>
        <a
          href="#about"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activebutton === "About Us" ? "bg-background shadow-sm outline outline-1 outline-border" : "hover:bg-background/50"}`}
          onClick={() => setActiveButton("About Us")}
        >
          About Us
        </a>
        <a
          href="#contact"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activebutton === "Contact Us" ? "bg-background shadow-sm outline outline-1 outline-border" : "hover:bg-background/50"}`}
          onClick={() => setActiveButton("Contact Us")}
        >
          Contact Us
        </a>
      </div>

      <a
        href="https://wa.me/919884161705?text=Hi! I am interested in booking a holiday package."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 flex items-center gap-2 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:bg-primary/90"
      >
        Book Now
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
};

export default Navbar;
