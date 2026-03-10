import { MapPin, Phone, Globe, Instagram, Facebook, MessageCircle, Send, ArrowRight } from "lucide-react"
import Image from "next/image"

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-20 px-4 md:px-10 py-10 md:py-16 bg-background">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">

                {/* Header Section - Compact */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Contact Us
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                        Ready for your dream vacation? Our team is standing by to help you choose the perfect plan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Left: Quick Info Cards (Improved) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">

                        {/* Combined Contact Card */}
                        <div className="flex-1 p-6 rounded-2xl bg-amber-50 border border-amber-200/50 shadow-sm transition-transform hover:scale-[1.01] duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 rounded-xl bg-white shadow-sm">
                                    <Phone className="size-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight text-black">Connect With Us</h3>
                            </div>

                            <div className="space-y-6">
                                {/* Direct Calls Section */}
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-bold text-black/50 uppercase tracking-widest pl-1">Direct Calls</p>
                                    <div className="flex flex-col gap-1.5 bg-white/40 p-3 rounded-xl border border-amber-200/20">
                                        <a href="tel:+919884161705" className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                                            +91 98841 61705
                                        </a>
                                        <a href="tel:+919176086536" className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                                            +91 91760 86536
                                        </a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-amber-200/30 mx-2"></div>

                                {/* Location Section */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 pl-1">
                                        <MapPin className="size-5 text-black" />
                                        <p className="text-xs font-bold text-black/50 uppercase tracking-widest">Our Location</p>
                                    </div>
                                    <div className="bg-white/40 p-3 rounded-xl border border-amber-200/20">
                                        <p className="text-lg font-bold text-foreground italic">Tambaram, Chennai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: WhatsApp & Social Inquiry (Main Feature) */}
                    <div className="lg:col-span-8 relative group overflow-hidden rounded-[2rem]  p-8 flex flex-col justify-between shadow-xl min-h-[350px]">
                        {/* Background Decorative Element */}
                        <div className="absolute -top-12 -right-12 w-64  rounded-full blur-[80px] pointer-events-none"></div>
                        {/* Background Image for Right Side */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/kanyakumari.png"
                                alt="Kanyakumari"
                                fill
                                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-50 via-50/80 to-50/40" />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                            <div className="flex flex-col justify-between py-2">
                                <div className="space-y-3">
                                    <h3 className="text-2xl md:text-4xl font-bold text-black tracking-tight">
                                        Quick Inquiry <br />
                                        <span className="text-primary italic">Via WhatsApp</span>
                                    </h3>
                                    <p className="text-black-400 text-sm max-w-[240px] leading-relaxed">
                                        Get instant answers from our travel assistants with just a message!
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/919884161705?text=Hi! I am interested in your holiday packages."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-black px-6 py-4 rounded-xl font-bold text-base transition-all group/wa"
                                >
                                    <MessageCircle className="size-5" />
                                    <span>Chat Now</span>
                                    <ArrowRight className="size-4 opacity-50 group-hover/wa:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="relative flex flex-col justify-center space-y-6 md:border-l md:border-white/10 md:pl-10 overflow-hidden rounded-2xl md:rounded-none -m-8 md:m-0 p-8 md:p-0">


                                <div className="relative z-10 space-y-3">
                                    <h4 className="text-sm font-bold text-black uppercase tracking-widest ">Social Media</h4>
                                    <div className="flex flex-col gap-3">
                                        <a href="https://instagram.com/happieholidays2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-[#E1306C] border border-white/10 px-5 py-3 rounded-xl transition-all group/link backdrop-blur-sm">
                                            <Instagram className="size-5 text-black" />
                                            <span className="text-black text-sm font-bold">Instagram</span>
                                            <Send className="size-3 text-black/40 ml-auto group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                        <a href="https://facebook.com/happie.holidays" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-[#1877F2] border border-white/10 px-5 py-3 rounded-xl transition-all group/link backdrop-blur-sm">
                                            <Facebook className="size-5 text-black" />
                                            <span className="text-black text-sm font-bold">Facebook</span>
                                            <Send className="size-3 text-black/40 ml-auto group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                                <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                                    <p className="text-black-300 text-sm italic leading-relaxed">
                                        Join 5,000+ travelers for exclusive member-only deals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
