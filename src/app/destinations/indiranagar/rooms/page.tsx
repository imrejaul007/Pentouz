import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms at The Pentouz @ Indiranagar | Luxury 3-Bedroom Penthouse",
  description: "Luxurious three-bedroom penthouse in Bangalore's upscale 100 Feet Road neighborhood. Perfect for families and extended stays with private balconies and premium amenities.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar/rooms",
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

export default function IndiranagarRoomsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src="/indiranagar/terrace-7.jpg"
              alt="The Pentouz @ Indiranagar"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg text-white">
                  Luxury 3-Bedroom Penthouse
                </h1>
                <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl">
                  Three-bedroom private penthouse nestled in one of Bangalore's most upscale neighborhoods. Each bedroom features a private balcony, plush bedding, ample storage, and tasteful decor for a serene and elevated stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-20 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-6 text-brand-accent">
              Room Collection
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Master Bedroom */}
              <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                <h3 className="font-display text-xl font-light mb-2 text-brand-gold">Master Bedroom</h3>
                <p className="text-sm text-brand-body">
                  Spacious with private balcony and ensuite bathroom.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Sleeps: 2</span>
                </div>
              </div>

              {/* Bedroom 1 */}
              <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                <h3 className="font-display text-xl font-light mb-2 text-brand-gold">Bedroom 1</h3>
                <p className="text-sm text-brand-body">
                  King-size bed with premium linens and garden access.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Sleeps: 2</span>
                </div>
              </div>

              {/* Bedroom 2 */}
              <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                <h3 className="font-display text-xl font-light mb-2 text-brand-gold">Bedroom 2</h3>
                <p className="text-sm text-brand-body">
                  Queen-size bed with street-facing windows.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Sleeps: 2</span>
                </div>
              </div>

              {/* Bedroom 3 */}
              <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                <h3 className="font-display text-xl font-light mb-2 text-brand-gold">Bedroom 3</h3>
                <p className="text-sm text-brand-body">
                  Twin beds sharing common balcony.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Sleeps: 2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Which room arrangement suits your travel needs?
            </p>
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 mt-6 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Book Your Penthouse
            </Link>
          </div>
        </section>

        {/* Property Links */}
        <section className="py-12 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Link
                href="/destinations/indiranagar/experiences"
                className="group flex items-start gap-4"
              >
                <ArrowLeft className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Experiences</h3>
                  <p className="text-brand-body text-sm">Discover curated activities</p>
                </div>
              </Link>
              <Link
                href="/destinations/indiranagar/gallery"
                className="group flex items-start gap-4"
              >
                <ArrowLeft className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Gallery</h3>
                  <p className="text-brand-body text-sm">Visual journey through the property</p>
                </div>
              </Link>
              <Link
                href="/destinations/indiranagar"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Back to Property</h3>
                  <p className="text-brand-body text-sm">Property overview page</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
