import Image from "next/image"
import { Check, Rocket, Sparkles } from "lucide-react"

const About = () => {
    return (
        <section id="about" className="scroll-mt-20 px-4 md:px-10 py-10 md:py-16 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left: Branding & Image (Compact) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-0.5 rounded-lg bg-background shadow-sm">
                                <Image
                                    src="/happy-holiday-logo.jpg"
                                    alt="Happy Holidays Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-md"
                                />
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-1 block">
                                    About Us
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Happie Holidays</h2>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border group">
                            <Image
                                src="/yellagir.png"
                                alt="Yellagir Destination"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Vision (Integrated) */}
                        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100/50 shadow-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <Sparkles className="size-5 text-amber-600" />
                                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-700">Our Vision</h3>
                            </div>
                            <p className="text-muted-foreground text-sm italic leading-relaxed">
                                "To become a trusted holiday membership brand that helps people experience the joy of travel by making vacations accessible and memorable for every family."
                            </p>
                        </div>
                    </div>

                    {/* Right: Info & Mission (Compact) */}
                    <div className="lg:col-span-7 space-y-8 lg:pt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Who We Are
                            </h3>
                            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                                <p>
                                    Happie Holidays is a travel and holiday membership company dedicated to creating unforgettable travel experiences for families and travelers. Our goal is to make vacations easy, affordable, and memorable through our exclusive holiday membership plans.
                                </p>
                                <p>
                                    With carefully selected destinations across South India and other popular tourist locations, we provide comfortable accommodation, travel assistance, and curated holiday experiences.
                                </p>
                            </div>
                        </div>

                        {/* Mission (Integrated) */}
                        <div className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-xs space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
                                    <Rocket className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest">Our Mission</h3>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "High-quality programs at affordable prices",
                                    "Selected destinations & accommodations",
                                    "Hassle-free planning & support",
                                    "Memorable family experiences",
                                    "Long-term member relationships"
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3 items-start text-muted-foreground">
                                        <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                                            <Check className="size-3 text-primary stroke-[3px]" />
                                        </div>
                                        <span className="text-sm font-medium leading-normal">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-primary font-semibold text-sm italic px-2">
                            "Vacations are moments that create lifelong memories. Explore with convenience and comfort."
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
