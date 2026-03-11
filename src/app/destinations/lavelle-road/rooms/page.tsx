import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms at The Pentouz @ Lavelle Road | Studio Collection",
  description: "Choose your perfect studio room at our Lavelle Road property. Six thoughtfully designed spaces with panoramic city views.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road/rooms",
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

export default function LavelleRoadRoomsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src="/lavelle-road/facade-1.jpg"
              alt="The Pentouz @ Lavelle Road"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg text-white">
                  Six Spacious Studios
                </h1>
                <p className="text-lg text-white mb-8 leading-relaxed max-w-3xl">
                  Each of our six studio rooms features a private bathroom, premium bedding, and floor-to-ceiling windows overlooking the city skyline. Thoughtfully designed for those who value both comfort and the Bangalore view.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#room-types"
                    className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 hover:bg-white hover:text-brand-ink transition-colors duration-500 group"
                  >
                    <Calendar className="w-5 h-5 text-white group-hover:text-brand-ink" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white group-hover:text-brand-ink">View All Rooms</span>
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 hover:bg-white hover:text-brand-ink transition-colors duration-500 group"
                  >
                    <Users className="w-5 h-5 text-white group-hover:text-brand-ink" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white group-hover:text-brand-ink">Room Features</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section id="room-types" className="py-20 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-6 text-brand-accent">
                Choose Your Studio
              </h2>
              <p className="text-base text-brand-body mb-8">
                All six studios are uniquely designed but share the same premium amenities. Here's how to choose based on your preference.
              </p>

              {/* Room Types Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Studio 1 - City View */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">City View Studio</h3>
                  <p className="text-sm text-brand-body">
                    Ground floor with city views through floor-to-ceiling windows.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">View: Cityscape</span>
                  </div>
                </div>

                {/* Studio 2 - Garden Facing */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Garden Facing Studio</h3>
                  <p className="text-sm text-brand-body">
                    Same luxury with a peaceful garden outlook.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">View: Garden</span>
                  </div>
                </div>

                {/* Studio 3 - Corner Suite */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Corner Suite</h3>
                  <p className="text-sm text-brand-body">
                    Corner location with dual exposure and more space.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">View: Street</span>
                  </div>
                </div>

                {/* Studio 4 - Executive Suite */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Executive Suite</h3>
                  <p className="text-sm text-brand-body">
                    Premium positioning with work desk setup.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: Ground</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">View: Executive</span>
                  </div>
                </div>

                {/* Studio 5 - Panoramic Studio */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Panoramic Studio</h3>
                  <p className="text-sm text-brand-body">
                    270-degree panoramic views in a spacious corner suite.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Floor: 2nd</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">View: Full Panorama</span>
                  </div>
                </div>

                {/* Room Features Legend */}
                <div id="features" className="mt-8 bg-brand-linen/10 p-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-brand-muted">
                    <span className="text-[10px] uppercase tracking-[0.18em]">All rooms include:</span>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4 text-brand-gold" /> 4 Guests</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4 text-brand-gold" /> Ensuite Bath</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4 text-brand-gold" /> AC</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4 text-brand-gold" /> City Views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Which studio speaks to you?
            </p>
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 mt-6 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Book Your Studio
            </Link>
          </div>
        </section>

        {/* Property Links */}
        <section className="py-12 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Link
                href="/destinations/lavelle-road/experiences"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Experiences</h3>
                  <p className="text-brand-body text-sm">Discover curated activities</p>
                </div>
              </Link>
              <Link
                href="/destinations/lavelle-road/gallery"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Gallery</h3>
                  <p className="text-brand-body text-sm">Visual journey through property</p>
                </div>
              </Link>
              <Link
                href="/destinations/lavelle-road"
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
