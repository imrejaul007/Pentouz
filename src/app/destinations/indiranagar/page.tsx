import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Pentouz @ Indiranagar | Luxury 3-Bedroom Penthouse",
  description: "Luxurious three-bedroom penthouse on Bangalore's upscale 100 Feet Road. Perfect for families and extended stays.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar",
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

export default function IndiranagarPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[700px] bg-gradient-to-br from-brand-gold/20 to-brand-accent/10">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/terrace-7.jpg"
              alt="The Pentouz @ Indiranagar"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <p className="text-sm uppercase tracking-[0.2em] mb-4 text-brand-gold">The Pentouz Collection</p>
              <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight">
                Indiranagar
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                100 Feet Road, Bangalore
              </p>
              <p className="text-lg mb-12 text-white/80 leading-relaxed">
                A luxurious three-bedroom private penthouse nestled in one of Bangalore's most upscale neighborhoods. Each bedroom features a private balcony, plush bedding, ample storage, and tasteful decor for a serene and elevated stay.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://bookmystay.io/rooms/37853"
                  className="bg-white text-brand-ink px-8 py-4 hover:bg-brand-accent transition-all duration-500 font-light flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">Book Your Penthouse</span>
                </Link>
                <Link
                  href="#about"
                  className="border border-white/50 px-8 py-4 hover:bg-white hover:text-brand-ink transition-all duration-500 font-light flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white hover:text-brand-ink">Explore</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-light mb-8 text-brand-accent">
                  Upscale Sanctuary
                </h2>
                <p className="text-lg text-brand-body mb-6 leading-relaxed">
                  Located on 100 Feet Road, Indiranagar's most prestigious address, The Pentouz offers a private penthouse experience. Three bedrooms, each with its own balcony, provide privacy and comfort for families or groups of friends.
                </p>
                <p className="text-lg text-brand-body mb-8 leading-relaxed">
                  The neighborhood is alive with boutique cafes, upscale dining, and vibrant nightlife, yet our penthouse offers a peaceful retreat above it all.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">3</p>
                    <p className="text-sm text-brand-muted">Bedrooms</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">Private</p>
                    <p className="text-sm text-brand-muted">Penthouse</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">Balconies</p>
                    <p className="text-sm text-brand-muted">For Each Room</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={indiranagar?.image || "/indiranagar/terrace-7.jpg"}
                  alt="The Pentouz @ Indiranagar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-12 text-center text-brand-accent">
              Property Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-display text-xl font-light mb-2">Prime Location</h3>
                <p className="text-brand-body text-sm">100 Feet Road, Indiranagar - Bangalore's most coveted address.</p>
              </div>
              <div className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-display text-xl font-light mb-2">3 Private Bedrooms</h3>
                <p className="text-brand-body text-sm">Each with private balcony, ensuite bathroom, and premium amenities.</p>
              </div>
              <div className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                <Calendar className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-display text-xl font-light mb-2">Flexible Stays</h3>
                <p className="text-brand-body text-sm">Perfect for families, extended stays, or group getaways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl font-light mb-8 text-brand-accent">
              Explore The Pentouz @ Indiranagar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/destinations/indiranagar/rooms"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Rooms</h3>
                <p className="text-sm text-brand-body">3 private bedrooms</p>
              </Link>
              <Link
                href="/destinations/indiranagar/experiences"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Experiences</h3>
                <p className="text-sm text-brand-body">Curated activities</p>
              </Link>
              <Link
                href="/destinations/indiranagar/gallery"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Gallery</h3>
                <p className="text-sm text-brand-body">Visual journey</p>
              </Link>
              <Link
                href="/destinations/indiranagar/location"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Location</h3>
                <p className="text-sm text-brand-body">100 Feet Road</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
              Book Your Indiranagar Stay
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Experience the pinnacle of Bangalore living at The Pentouz @ Indiranagar.
            </p>
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-10 py-4 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Reserve Your Penthouse
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
