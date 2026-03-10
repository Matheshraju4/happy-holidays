"use client";

import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [activebutton, setActiveButton] = useState("Home");
  return (
    <div className="py-6 flex justify-between px-2 md:px-4 items-center">
      <div className=" flex flex-row">
        <Image
          src={"/happy-holiday-logo.jpg"}
          width={75}
          height={75}
          alt="happy-holiday-logo "
        />
        <div>
          {" "}
          <h2 className="font-semibold text-lg md:text-2xl">Happy Holidays</h2>
          <p className=" text-xs md:text-sm italic">Mesmerizing memories</p>
        </div>
      </div>

      <div className="bg-muted-foreground/10 rounded-full my-2  px-2 md:flex flex-row justify-center items-center gap-1.5 py-1 hidden">
        <Button
          variant={activebutton === "Home" ? "outline" : "ghost"}
          className={"rounded-full hover:bg-background"}
          onClick={() => setActiveButton("Home")}
        >
          Home
        </Button>
        <Button
          className={"rounded-full hover:bg-background"}
          variant={activebutton === "Packages" ? "outline" : "ghost"}
          onClick={() => setActiveButton("Packages")}
        >
          Packages
        </Button>
        <Button
                   className={"rounded-full hover:bg-background"}
          variant={activebutton === "About Us" ? "outline" : "ghost"}
          onClick={() => setActiveButton("About Us")}
        >
          About Us
        </Button>
      </div>

      <Button className={"rounded-full p-4 "}>
        Book Now
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Navbar;
