import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Italianno } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});
const italianno = Italianno({weight:['400'],subsets:['latin'],variable:'--font-script'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Happiee Holidays — Mesmerizing Memories",
  description:
    "Exclusive travel memberships for domestic & international destinations. Accommodation, breakfast & sightseeing covered. EMI starting at just ₹2,000.",
  keywords: [
    "travel membership",
    "Happiee Holidays",
    "domestic travel packages",
    "international travel packages",
    "affordable travel",
    "holiday packages India",
    "family vacation packages",
    "honeymoon packages",
    "group tour packages",
  ],
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Happiee Holidays — Mesmerizing Memories",
    description:
      "Exclusive travel memberships for domestic & international trips. Accommodation, breakfast & sightseeing included. Plans from ₹16,000 with easy EMI options.",
    url: "https://happiee-holidays.com",
    siteName: "Happiee Holidays",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/banner-2.jpg", width: 1200, height: 630, alt: "Happiee Holidays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happiee Holidays — Mesmerizing Memories",
    description:
      "Travel memberships for domestic & international destinations. Accommodation, breakfast & sightseeing covered. EMI from ₹2,000.",
    images: ["/banner-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", outfit.variable, italianno.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>

  );
}
