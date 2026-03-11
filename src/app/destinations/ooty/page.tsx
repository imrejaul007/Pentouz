import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights",
  description: "Escape to the misty hills of the Nilgiris at The Pentouz Windsor Heights. Surrounded by lush tea gardens and colonial charm.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

export default function OotyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[700px] bg-gradient-to-br from-brand-gold/20 to-brand-accent/10">
          <div className="absolute inset-0">
            <Image
              src={ooty?.heroImage || "/ooty/property-1.jpg"}
              alt="The Pentouz @ Ooty"
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
                Ooty
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Windsor Heights • Elk Hill
              </p>
              <p className="text-lg mb-12 text-white/80 leading-relaxed">
                Escape to the misty hills of the Nilgiris. Surrounded by lush tea gardens and colonial charm, our Ooty property offers a tranquil retreat from the ordinary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-ink px-8 py-4 hover:bg-brand-accent transition-all duration-500 font-light flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">Book Your Stay</span>
                </Link>
                <Link
                  href="#about"
                  className="border border-white/50 px-8 py-4 hover:bg-white hover:text-brand-ink transition-all duration-500 font-light flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white hover:text-brand-ink">Explore Ooty</span>
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
                  Hill Station Sanctuary
                </h2>
                <p className="text-lg text-brand-body mb-6 leading-relaxed">
                  Perched on Elk Hill in the heart of Ooty, The Pentouz Windsor Heights captures the essence of colonial hill station living while offering modern comforts. Each room opens to sweeping views of tea gardens and mist-covered valleys.
                </p>
                <p className="text-lg text-brand-body mb-8 leading-relaxed">
                  Whether you are seeking contemplation, celebration, or creative inspiration, the serene mountain setting provides the perfect backdrop for an unforgettable stay.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">Multiple</p>
                    <p className="text-sm text-brand-muted">Room Types</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">3 km</p>
                    <p className="text-sm text-brand-muted">From Ooty Lake</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-brand-gold mb-1">Colonial</p>
                    <p className="text-sm text-brand-muted">Architecture</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={ooty?.image || "/ooty/property-1.jpg"}
                  alt="The Pentouz @ Ooty"
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
                <p className="text-brand-body text-sm">Elk Hill offers panoramic views while being minutes from Ooty town center.</p>
              </div>
              <div className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-display text-xl font-light mb-2">Comfortable Rooms</h3>
                <p className="text-brand-body text-sm">Thoughtfully designed rooms with modern amenities and scenic views.</p>
              </div>
              <div className="p-6 border border-brand-border hover:shadow-lg transition-shadow">
                <Calendar className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="font-display text-xl font-light mb-2">Dining Options</h3>
                <p className="text-brand-body text-sm">On-site restaurant serving local and continental cuisine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl font-light mb-8 text-brand-accent">
              Explore The Pentouz @ Ooty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/destinations/ooty/rooms"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Rooms</h3>
                <p className="text-sm text-brand-body">Choose your perfect room</p>
              </Link>
              <Link
                href="/destinations/ooty/near"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Nearby</h3>
                <p className="text-sm text-brand-body">Explore Ooty attractions</p>
              </Link>
              <Link
                href="/destinations/ooty/experiences"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Experiences</h3>
                <p className="text-sm text-brand-body">Curated activities</p>
              </Link>
              <Link
                href="/destinations/ooty/gallery"
                className="group p-6 bg-white border border-brand-border hover:shadow-lg transition-all"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mb-3 group-hover:translate-x-2 transition-transform" />
                <h3 className="font-display text-lg font-light mb-2">Gallery</h3>
                <p className="text-sm text-brand-body">Visual journey</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
              Book Your Ooty Escape
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Experience the misty hills and colonial charm of Ooty at The Pentouz Windsor Heights.
            </p>
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-10 py-4 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Reserve Your Room
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
