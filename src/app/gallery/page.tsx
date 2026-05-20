import type { Metadata } from "next";
import Image from "next/image";
import { withSiteUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import GalleryClient from "./GalleryClient";

const heroImages = [
  "/fernhill/all/59_property_top_view.jpg",
  "/indiranagar/all/04._living_room_05._living_room.jpg",
  "/lavelle-road/all/facade_1.jpg",
  "/ooty/all/24._view.jpeg",
];

export const metadata: Metadata = {
  title: "Gallery | The Pentouz Collection",
  description:
    "Browse the full image collection across all Pentouz properties: The Pentouz Lavelle Road, Indiranagar, Chikmagalur, and Ooty. Filter by location or room category.",
  alternates: {
    canonical: withSiteUrl("/gallery"),
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0f0e0c] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0f0e0c] text-white">
          <HeroSlider images={heroImages} alt="The Pentouz Gallery" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
              <div className="max-w-3xl">
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">A closer look at The Pentouz</p>
                <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                  Every space, every property — the full collection.
                </h1>
                <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                  Browse all images across Lavelle Road, Indiranagar, Ooty, and Pentouz Hillside. Filter by location or category.
                </p>
              </div>
            </div>
          </div>
        </section>

        <GalleryClient />
      </main>
      <Footer />
    </>
  );
}
