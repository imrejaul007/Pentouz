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
  keywords: [
    "The Pentouz gallery",
    "luxury accommodation photos",
    "penthouse images",
    "boutique hotel gallery",
    "Chikmagalur homestay photos",
    "Ooty retreat images",
  ],
  openGraph: {
    title: "Gallery | The Pentouz Collection",
    description:
      "Browse the full image collection across all Pentouz properties. Filter by location or room category.",
    url: withSiteUrl("/gallery"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz - Property Gallery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | The Pentouz Collection",
    description:
      "Browse the full image collection across all Pentouz properties.",
  },
  alternates: {
    canonical: withSiteUrl("/gallery"),
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <HeroSlider images={heroImages} alt="The Pentouz Gallery" />
          <div className="relative mx-auto max-w-[1480px] px-5 pb-24 pt-48 sm:px-8 lg:px-14">
            <div className="max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4">A closer look at The Pentouz</p>
              <h1 className="font-display text-[2rem] font-light leading-[1] text-white sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
                Every space, every property — the full collection.
              </h1>
              <p className="mt-6 text-base leading-7 text-white/78 max-w-2xl">
                Browse all images across Lavelle Road, Indiranagar, Ooty, and Pentouz Hillside. Filter by location or category.
              </p>
            </div>
          </div>
        </section>

        <GalleryClient />
      </main>
      <Footer />
    </>
  );
}
