import type { Metadata } from "next";
import Image from "next/image";
import { withSiteUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz",
  description:
    "Browse the full image collection across all Pentouz properties: Lavelle Road, Indiranagar, and Ooty. Filter by location or room category.",
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
          <Image
            src="/lavelle-road/all/restaurant_4.jpg"
            alt="The Pentouz Gallery"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.88)_0%,rgba(10,8,6,0.46)_45%,rgba(10,8,6,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.16),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70">A closer look at The Pentouz</p>
              <h1 className="luxury-hero-title mt-6 text-white">
                Every space, every property — the full collection.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                Browse all images across Lavelle Road, Indiranagar, and Ooty. Filter by location or category.
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
