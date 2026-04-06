"use client";
import { Check, Crown, MapPin, Shield, Star, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image"
import { Button } from "./ui/button"

const packages = [
  {
    name: "Privilege",
    tag: "South India Essentials",
    icon: Shield,
    image: "/banner.jpg",
    actualPrice: 20000,
    discountedPrice: 16000,
    emi: null,
    popular: false,
    highlights: ["3 Days / Year", "5-Year Validity"],
    destinations: "Ooty, Kodaikanal, Munnar & more",
    benefits: [
      "Accommodation 3 Days for 3 Years",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discounts on Future Trips",
      "No Service Charges on Hotel Booking",
      "Dedicated Support Team",
    ],
    gallery: [
      "/privilegeimages/kodaikanal.png",
      "/privilegeimages/ootytrain.png",
      "/privilegeimages/waterfallkodai.png",
    ],
  },
  {
    name: "Prestige",
    tag: "South India Explorer",
    icon: Star,
    image: "/ooty.png",
    actualPrice: 30000,
    discountedPrice: 24000,
    emi: null,
    popular: true,
    highlights: ["5 Days / Year × 3 Years", "5-Year Validity"],
    destinations: "All Privilege + Coorg, Wayanad, Alleppey & more",
    benefits: [
      "Accommodation 5 Days × 3 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistance Support",
      "Priority Booking",
      "Special Member Discounts on Future Trips",
      "No Service Charges on Hotel Bookings",
      "Dedicated Support Team",
    ],
    gallery: [
      "/ooty.png",
      "/hampi.jpg",
      "/mysore.png",
    ],
  },
  {
    name: "Imperial",
    tag: "All India Premium",
    icon: Crown,
    image: "/kerala.jpg",
    actualPrice: 70000,
    discountedPrice: 56000,
    emi: 2000,
    popular: false,
    highlights: ["6 Days / Year × 3 Years", "5-Year Validity"],
    destinations: "All Prestige + Goa, Jaipur, Manali, Kashmir & more",
    benefits: [
      "Accommodation 6 Days for 3 Years",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discounts on Future Trips",
      "No Service Charges on Hotel Booking",
    ],
    gallery: [
      "/kerala.jpg",
      "/kanyakumari.png",
      "/yellagir.png",
    ],
  },
  {
    name: "Classic",
    tag: "All India Premium",
    icon: Crown,
    image: "/kerala.jpg",
    actualPrice: 70000,
    discountedPrice: 56000,
    emi: 2000,
    popular: false,
    highlights: ["6 Days / Year × 3 Years", "5-Year Validity"],
    destinations: "All Prestige + Goa, Jaipur, Manali, Kashmir & more",
    benefits: [
      "Accommodation 6 Days for 3 Years",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discounts on Future Trips",
      "No Service Charges on Hotel Booking",
    ],
    gallery: [
      "/kerala.jpg",
      "/kanyakumari.png",
      "/yellagir.png",
    ],
  },
  {
    name: "Happy International",
    tag: "All India Premium",
    icon: Crown,
    image: "/kerala.jpg",
    actualPrice: 70000,
    discountedPrice: 56000,
    emi: 2000,
    popular: false,
    highlights: ["6 Days / Year × 3 Years", "5-Year Validity"],
    destinations: "All Prestige + Goa, Jaipur, Manali, Kashmir & more",
    benefits: [
      "Accommodation 6 Days for 3 Years",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discounts on Future Trips",
      "No Service Charges on Hotel Booking",
    ],
    gallery: [
      "/kerala.jpg",
      "/ooty.png",
      "/hampi.jpg",
    ],
  },
];

function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

const Packages = () => {
  const [selectedGallery, setSelectedGallery] = useState<{name: string, images: string[]} | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }

  return (
    <section
      id="packages"
      className="scroll-mt-20 px-4 md:px-10 py-12 md:py-20 bg-muted/30"
    >
      <div className="text-center mb-8 md:mb-14">
        <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary/70">
          Our Memberships
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2">
          Choose Your Perfect Package
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-lg mx-auto">
          Pick a plan that fits your travel dreams. All packages include
          exclusive discounts.
        </p>
      </div>

      <div className="relative group max-w-7xl mx-auto">
        {/* Scroll Buttons - Hidden on Mobile, Visible on Hover on Desktop */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 size-10 items-center justify-center rounded-full bg-background shadow-lg border border-border text-foreground hover:bg-primary hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="size-5" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 size-10 items-center justify-center rounded-full bg-background shadow-lg border border-border text-foreground hover:bg-primary hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100"
          aria-label="Scroll Right"
        >
          <ChevronRight className="size-5" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-5 md:gap-7 pb-8 px-2 scrollbar-hide scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`group/card relative flex flex-col shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Card Image */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} package`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3">
                    {pkg.popular && (
                      <span className="bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-400 text-yellow-950 text-[11px] md:text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg shadow-yellow-400/30 ring-2 ring-yellow-300/50">
                      20% OFF
                    </span>
                  </div>

                  {/* View Gallery Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-black/40 cursor-pointer"
                    onClick={() => setSelectedGallery({ name: pkg.name, images: pkg.gallery })}
                  >
                    <div className="bg-white text-primary font-semibold px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                      <Eye className="size-4" />
                      <span className="text-sm">View Tourist Places</span>
                    </div>
                  </div>

                  {/* Package name overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                    <div className="rounded-lg bg-white/20 backdrop-blur-sm p-1.5">
                      <Icon className="size-5 md:size-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Scope tag strip */}
                <div
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-bold tracking-wide ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/20 text-foreground"
                  }`}
                >
                  <MapPin className="size-3.5 shrink-0" />
                  {pkg.tag}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-4 md:p-5">
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      {formatPrice(pkg.actualPrice)}
                    </span>
                  </div>
                  {pkg.emi && (
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">
                      EMI from{" "}
                      <span className="font-semibold text-primary/80">
                        {formatPrice(pkg.emi)}/mo
                      </span>
                    </p>
                  )}

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {pkg.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-primary/10 text-primary text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Destinations */}
                  <div className="flex items-start gap-2 rounded-lg bg-muted px-3 py-2 mb-3">
                    <MapPin className="size-3.5 md:size-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-xs md:text-sm font-medium text-foreground/80 line-clamp-1">
                      {pkg.destinations}
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="border-t border-border pt-3 mt-auto flex flex-col gap-1.5">
                    {pkg.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <Check className="size-3.5 md:size-4 mt-0.5 shrink-0 text-green-600 dark:text-green-400" />
                        <span className="text-xs md:text-sm text-muted-foreground line-clamp-1">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className="rounded-full mt-6 w-full font-bold h-11"
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Get {pkg.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-background w-full max-w-5xl h-fit max-h-[95vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedGallery.name} Package Highlights</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Breathtaking locations you'll experience</p>
              </div>
              <button 
                onClick={() => setSelectedGallery(null)}
                className="size-8 sm:size-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                aria-label="Close Gallery"
              >
                <X className="size-5 sm:size-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {selectedGallery.images.map((src, idx) => (
                  <div key={idx} className="group relative aspect-video sm:aspect-[4/5] overflow-hidden rounded-xl shadow-sm border bg-muted">
                    <Image
                      src={src}
                      alt={`Tourist place ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-xs sm:text-sm font-medium">Spotlight: {src.split('/').pop()?.split('.')[0].replace(/-/g, ' ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t bg-muted/20 flex justify-end">
              <Button onClick={() => setSelectedGallery(null)} className="rounded-full px-6 sm:px-8">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Packages
