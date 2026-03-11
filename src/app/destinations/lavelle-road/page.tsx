import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Phone, Users } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel",
  description: "Experience refined Bangalore hospitality at our elegant Lavelle Road property. Six spacious studio rooms with panoramic city views.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road",
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

export default function LavelleRoadPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[700px] bg-gradient-to-br from-brand-gold/20 to-brand-accent/10">
          <div className="absolute inset-0">
            <Image
              src={lavelleRoad?.heroImage || "/lavelle-road/facade-1.jpg"}
              alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
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
                Lavelle Road
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                46, 6th Cross, Lavelle Road, Bangalore
              </p>
              <p className="text-lg mb-12 text-white/80 leading-relaxed">
                Six spacious studio rooms, each offering panoramic city views. Thoughtfully curated for discerning travelers seeking refined Bangalore hospitality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://bookmystay.io/rooms/37853"
                  className="bg-white text-brand-ink px-8 py-4 hover:bg-brand-accent transition-all duration-500 font-light flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">Book Your Stay</span>
                </Link>
                <Link
                  href="#location"
                  className="border border-white/50 px-8 py-4 hover:bg-white hover:text-brand-ink transition-all duration-500 font-light flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white hover:text-brand-ink">Location</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-light mb-8 text-brand-accent">
                  About The Pentouz
                </h2>
                <p className="text-lg text-brand-body mb-8 leading-relaxed">
                  {lavelleRoad?.copy || "Six spacious studio rooms, each offering panoramic city views. Thoughtfully curated for discerning travelers seeking refined Bangalore hospitality."}
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">6</p>
                    <p className="text-sm text-brand-muted">Studio Rooms</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">City</p>
                    <p className="text-sm text-brand-muted">Views</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">Ensuite</p>
                    <p className="text-sm text-brand-muted">Baths</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={lavelleRoad?.image || "/lavelle-road/facade-1.jpg"}
                  alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
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
              {(lavelleRoad?.features || []).slice(0, 6).map((feature, i) => (
                <div key={i} className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                  <p className="text-brand-body">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl font-light mb-8 text-brand-accent">
              Explore The Pentouz @ Lavelle Road
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/destinations/lavelle-road/rooms"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Rooms</h3>
                <p className="text-sm text-brand-body">Six spacious studios</p>
              </Link>
              <Link
                href="/destinations/lavelle-road/experiences"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Experiences</h3>
                <p className="text-sm text-brand-body">Curated activities</p>
              </Link>
              <Link
                href="/destinations/lavelle-road/gallery"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Gallery</h3>
                <p className="text-sm text-brand-body">Visual journey</p>
              </Link>
              <Link
                href="/destinations/lavelle-road/location"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Location</h3>
                <p className="text-sm text-brand-body">Lavelle Road</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
              Book Your Lavelle Road Stay
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Experience refined Bangalore hospitality at The Pentouz.
            </p>
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-10 py-4 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Reserve Your Studio
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
