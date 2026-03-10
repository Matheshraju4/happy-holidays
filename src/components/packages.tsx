import { Check, Crown, Shield, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

const packages = [
  {
    name: "Privilege",
    icon: Shield,
    image: "/banner.jpg",
    actualPrice: 20000,
    discountedPrice: 16000,
    emi: null,
    popular: false,
    highlights: ["3 Days / Year", "5-Year Validity"],
    benefits: [
      "Accommodation 3 Days for 3 Year",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discounts on future trip",
      "No Service Charges on Hotel Booking",
      "Dedicated Support Team",
    ],
  },
  {
    name: "Prestige",
    icon: Star,
    image: "/ooty.png",
    actualPrice: 30000,
    discountedPrice: 24000,
    emi: null,
    popular: true,
    highlights: ["5 Days / Year × 3 Years", "15 Days Total"],
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
  },
  {
    name: "Imperial",
    icon: Crown,
    image: "/kerala.jpg",
    actualPrice: 70000,
    discountedPrice: 56000,
    emi: 2000,
    popular: false,
    highlights: ["6 Days / Year × 3 Years", "5-Year Validity"],
    benefits: [
      "Accommodation 6 Days for 3 Years",
      "Membership Valid for 5 Years",
      "Daily Breakfast",
      "Sightseeing",
      "Travel Assistant Support",
      "Special Member Discount on Future Trips",
      "No Service Charges on Hotel Booking",
    ],
  },
]

function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

const Packages = () => {
  return (
    <section id="packages" className="scroll-mt-20 px-4 md:px-10 py-12 md:py-20">
      <div className="text-center mb-8 md:mb-14">
        <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary/70">
          Our Memberships
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2">
          Choose Your Perfect Package
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-lg mx-auto">
          All packages include 20% off. Pick a plan that fits your travel dreams.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
        {packages.map((pkg) => {
          const Icon = pkg.icon
          return (
            <div
              key={pkg.name}
              className={`group relative flex flex-col rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.popular
                ? "border-primary shadow-lg shadow-primary/10 md:scale-[1.03]"
                : "border-border hover:border-primary/30"
                }`}
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {pkg.popular && (
                    <span className="bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <span className="bg-green-500 text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full">
                    20% OFF
                  </span>
                </div>

                {/* Package name overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                  <div className="rounded-lg bg-white/20 backdrop-blur-sm p-1.5">
                    <Icon className="size-5 md:size-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{pkg.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl md:text-3xl font-bold">
                    {formatPrice(pkg.discountedPrice)}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm line-through">
                    {formatPrice(pkg.actualPrice)}
                  </span>
                </div>
                {pkg.emi && (
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">
                    EMI from <span className="font-semibold text-primary">{formatPrice(pkg.emi)}/mo</span>
                  </p>
                )}

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {pkg.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-primary/10 text-primary text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Benefits */}
                <div className="border-t border-border pt-3 mt-auto flex flex-col gap-1.5">
                  {pkg.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <Check className="size-3.5 md:size-4 mt-0.5 shrink-0 text-green-600 dark:text-green-400" />
                      <span className="text-xs md:text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className="rounded-full mt-5 w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get {pkg.name}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Packages
