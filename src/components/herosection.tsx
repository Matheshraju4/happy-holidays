import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

const destinations = [
  "Ooty", "Munnar", "Kodaikanal", "Wayanad", "Yercaud", "Alleppey",
]

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-20 gap-6 items-center justify-center">
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
          Explore the best of South India with our exclusive travel memberships.
          Accommodation, breakfast, sightseeing — all covered. 
          <span className="block text-primary font-sans font-semibold">EMI starting at just ₹2,000.</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {destinations.map((place) => (
            <span
              key={place}
              className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <MapPin className="size-3" />
              {place}
            </span>
          ))}
        </div>

        <div className="flex flex-row gap-3 pt-2">
          <Button size="lg" className="rounded-full px-6">
            Explore Packages
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6">
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
  )
}

export default HeroSection