import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, MapPin, Coffee } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms at The Pentouz @ Ooty | Windsor Heights",
  description: "Choose your perfect room at our Ooty property. Comfortable accommodations with panoramic views of the Nilgiri hills.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/rooms",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

export default function OotyRoomsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src="/ooty/facade-3.jpeg"
              alt="The Pentouz @ Ooty"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg text-white">
                  Comfortable Hillside Rooms
                </h1>
                <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl">
                  Each room at Windsor Heights offers comfort with a view. From standard rooms to premium suites, choose your perfect escape to the Nilgiri hills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-20 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-6 text-brand-accent">
                Choose Your Room
              </h2>
              <p className="text-base text-brand-body mb-8">
                All rooms at Windsor Heights are designed for comfort with views of the surrounding hills and tea gardens.
              </p>

              {/* Room Types Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Standard Room */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Standard Room</h3>
                  <p className="text-sm text-brand-body">
                    Cozy comfort with garden or hill views.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Guests: 2</span>
                  </div>
                </div>

                {/* Deluxe Room */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Deluxe Room</h3>
                  <p className="text-sm text-brand-body">
                    Enhanced space with premium furnishings.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Guests: 2-3</span>
                  </div>
                </div>

                {/* Suite */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Premium Suite</h3>
                  <p className="text-sm text-brand-body">
                    Spacious suite with panoramic hill views.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Guests: 3-4</span>
                  </div>
                </div>

                {/* Family Room */}
                <div className="bg-white border border-brand-border p-6 hover:shadow-lg">
                  <h3 className="font-display text-xl font-light mb-2 text-brand-accent">Family Room</h3>
                  <p className="text-sm text-brand-body">
                    Perfect for families with additional bedding.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold">Guests: 4</span>
                  </div>
                </div>

                {/* Room Amenities Legend */}
                <div className="lg:col-span-2 mt-8 bg-brand-linen/10 p-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-brand-muted">
                    <span className="text-[10px] uppercase tracking-[0.18em]">All rooms include:</span>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4 text-brand-gold" /> Attached Bath</span>
                      <span className="flex items-center gap-1"><Coffee className="w-4 h-4 text-brand-gold" /> Room Service</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-brand-gold" /> Hill Views</span>
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
              Which room suits your Ooty escape?
            </p>
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 mt-6 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Book Your Room
            </Link>
          </div>
        </section>

        {/* Property Links */}
        <section className="py-12 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Link
                href="/destinations/ooty/experiences"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Experiences</h3>
                  <p className="text-brand-body text-sm">Discover curated activities</p>
                </div>
              </Link>
              <Link
                href="/destinations/ooty/gallery"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Gallery</h3>
                  <p className="text-brand-body text-sm">Visual journey through property</p>
                </div>
              </Link>
              <Link
                href="/destinations/ooty"
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
