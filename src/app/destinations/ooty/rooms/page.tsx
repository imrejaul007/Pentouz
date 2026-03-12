import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, MapPin, Coffee, Bed, Bath, Maximize } from "lucide-react";
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

const roomTypes = [
  {
    name: "Standard Room",
    desc: "Cozy comfort with garden or hill views",
    guests: 2,
    features: ["Attached Bath", "Room Service", "Hill Views"],
    icon: Bed,
  },
  {
    name: "Deluxe Room",
    desc: "Enhanced space with premium furnishings",
    guests: "2-3",
    features: ["Attached Bath", "Room Service", "Premium Amenities"],
    icon: Maximize,
  },
  {
    name: "Premium Suite",
    desc: "Spacious suite with panoramic hill views",
    guests: "3-4",
    features: ["Attached Bath", "Room Service", "Mountain Views", "Balcony"],
    icon: Bath,
  },
  {
    name: "Family Room",
    desc: "Perfect for families with additional bedding",
    guests: 4,
    features: ["Attached Bath", "Room Service", "Extra Beds", "Family-Friendly"],
    icon: Users,
  },
];

export default function OotyRoomsPage() {
  return (
    <>
      <Header />

      {/* Full-Screen Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ooty/facade-3.jpeg"
            alt="The Pentouz @ Ooty Rooms"
            fill
            priority
            className="object-cover scale-105 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 animate-fade-up">
                Accommodations
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight animate-fade-up stagger-2">
                Comfortable
                <br />
                <em className="italic font-extralight">Hillside Rooms</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-4">
                Each room at Windsor Heights offers comfort with a view. Choose your perfect escape to the Nilgiri hills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Room Types
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Choose Your
              <br />
              <em className="italic">Perfect Room</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room, i) => (
              <div key={i} className="group bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                <div className="p-10 lg:p-12">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-4">
                        Room Type 0{String(i + 1)}
                      </p>
                      <h3 className="font-display text-3xl lg:text-4xl font-light text-brand-ink mb-4">
                        <em className="italic font-extralight">{room.name}</em>
                      </h3>
                      <p className="text-body-lg text-brand-body max-w-md">
                        {room.desc}
                      </p>
                    </div>
                    <room.icon className="w-10 h-10 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-500" />
                  </div>

                  <div className="flex items-center gap-8 mb-8 pt-8 border-t border-brand-border">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-brand-gold" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                        {room.guests} Guests
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {room.features.map((feature, fi) => (
                      <span
                        key={fi}
                        className="px-4 py-2 bg-white border border-brand-border text-[10px] uppercase tracking-[0.15em] text-brand-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Rooms Include */}
          <div className="mt-20 p-10 lg:p-12 bg-white border border-brand-border">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-body-lg text-brand-muted">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">
                All rooms include:
              </span>
              {[
                { icon: Users, label: "Attached Bath" },
                { icon: Coffee, label: "Room Service" },
                { icon: MapPin, label: "Hill Views" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-brand-ink">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-primary">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Reserve Your Room
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Which Room Suits Your
            <br />
            <em className="italic">Ooty Escape</em>?
          </h2>
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
            className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Your Room</span>
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      {/* Property Links */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Discover curated activities" },
              { href: "/destinations/ooty/gallery", title: "Gallery", desc: "Visual journey through property" },
              { href: "/destinations/ooty", title: "Property", desc: "Back to overview page" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group p-8 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700"
              >
                <ArrowRight className="w-6 h-6 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                <h3 className="font-display text-2xl font-light text-brand-ink mb-3">{item.title}</h3>
                <p className="text-body-sm text-brand-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
