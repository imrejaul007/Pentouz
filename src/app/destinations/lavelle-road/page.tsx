import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Phone, Star, Wifi, Coffee, ShieldCheck, Car } from "lucide-react";
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

      {/* Full-Screen Hero */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={lavelleRoad?.heroImage || "/lavelle-road/facade-1.jpg"}
            alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
            fill
            priority
            className="object-cover scale-105 animate-fade-in"
            sizes="100vw"
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 animate-fade-up stagger-1">
                The Pentouz Collection
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                <em className="italic font-extralight">Lavelle Road</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl lg:text-2xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                46, 6th Cross, Lavelle Road, Bangalore
              </p>
              <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-2xl animate-fade-up stagger-5">
                Six spacious studio rooms, each offering panoramic city views. Thoughtfully curated for discerning travelers seeking refined Bangalore hospitality.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 lg:gap-16 mb-12 animate-fade-up stagger-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <span className="font-display text-2xl text-brand-gold">6</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Rooms</p>
                    <p className="text-white text-sm">Studios</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Views</p>
                    <p className="text-white text-sm">Panoramic</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <Star className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Rating</p>
                    <p className="text-white text-sm">Premium</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up stagger-5">
                <Link
                  href="https://bookmystay.io/rooms/37853"
                  className="group relative bg-white text-brand-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    Book Your Stay
                  </span>
                </Link>
                <Link
                  href="#location"
                  className="group border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    View Location
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                About The Property
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                A <em className="italic">Refined</em>
                <br />
                Bangalore Experience
              </h2>
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                {lavelleRoad?.copy || "Six spacious studio rooms, each offering panoramic city views. Thoughtfully curated for discerning travelers seeking refined Bangalore hospitality."}
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Located on the prestigious Lavelle Road, our property offers the perfect blend of urban convenience and tranquil retreat. Each studio is designed with meticulous attention to detail, featuring modern amenities and elegant furnishings.
              </p>
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

      {/* Amenities Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Amenities
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Thoughtfully <em className="italic">Curated</em>
            </h2>
            <p className="text-body-lg text-brand-body max-w-2xl mx-auto">
              Every detail has been considered for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Coffee, label: "Room Service" },
              { icon: ShieldCheck, label: "24/7 Security" },
              { icon: Car, label: "Valet Parking" },
              { icon: Star, label: "Daily Housekeeping" },
              { icon: MapPin, label: "Prime Location" },
            ].map((amenity, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-all duration-500 group-hover:-translate-y-2">
                  <amenity.icon className="w-6 h-6 text-brand-accent group-hover:text-brand-gold transition-colors duration-500" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted group-hover:text-brand-ink transition-colors duration-500">
                  {amenity.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Property Highlights
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Designed for <em className="italic">You</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(lavelleRoad?.features || []).slice(0, 6).map((feature, i) => (
              <div key={i} className="group p-8 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700">
                <span className="font-display text-6xl text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-body-lg text-brand-ink mt-4 group-hover:translate-x-2 transition-transform duration-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-section-xl bg-brand-primary">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Discover More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Explore <em className="italic">Lavelle Road</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/lavelle-road/rooms", title: "Rooms", desc: "Six spacious studios" },
              { href: "/destinations/lavelle-road/experiences", title: "Experiences", desc: "Curated activities" },
              { href: "/destinations/lavelle-road/gallery", title: "Gallery", desc: "Visual journey" },
              { href: "/destinations/lavelle-road/location", title: "Location", desc: "Lavelle Road" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700"
              >
                <div className="p-8">
                  <ArrowRight className="w-6 h-6 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                  <h3 className="font-display text-2xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-body-sm text-white/60">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-linen relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-8 leading-tight">
            Ready for Your
            <br />
            <em className="italic">Lavelle Road</em> Experience?
          </h2>
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12">
            Let us curate your perfect Bangalore escape. Book now for an unforgettable stay.
          </p>
          <Link
            href="https://bookmystay.io/rooms/37853"
            className="group relative inline-flex items-center justify-center bg-brand-primary text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
