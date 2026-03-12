import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, MapPin, Coffee, Bed, Bath, Maximize, Wifi, Snowflake } from "lucide-react";
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
    name: "The Heritage Suite",
    desc: "Colonial charm with modern luxury and stunning hill views",
    guests: 2,
    features: ["Four-poster Bed", "Fireplace", "Sitting Area", "Hill Views"],
    size: "900 sq ft",
    image: "/ooty/bedroom-10.jpeg",
    icon: Bed,
  },
  {
    name: "The Garden View Room",
    desc: "Wake up to lush green vistas with French windows",
    guests: 2,
    features: ["Garden Views", "Queen Bed", "French Windows", "En-suite Bathroom"],
    size: "500 sq ft",
    image: "/ooty/bedroom-12.jpeg",
    icon: Coffee,
  },
  {
    name: "The Mountain Retreat",
    desc: "Cozy comfort with spectacular hill views and balcony",
    guests: 2,
    features: ["Hill Views", "Heating", "Private Balcony", "Tea Garden Views"],
    size: "450 sq ft",
    image: "/ooty/bedroom-15.jpeg",
    icon: MapPin,
  },
];

export default function OotyRoomsPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ooty/facade-3.jpeg"
            alt="The Pentouz @ Ooty Rooms"
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6 animate-fade-up">
                Accommodations
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
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
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Room Types
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Choose Your
              <br />
              <em className="italic font-extralight">Perfect Room</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {roomTypes.map((room, i) => (
              <div key={i} className="group">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                  {/* Image Side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                    <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700" />
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-10 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-4">
                          Room Type 0{String(i + 1)}
                        </p>
                        <h3 className="font-display text-3xl lg:text-4xl font-light text-brand-ink mb-4">
                          <em className="italic font-extralight">{room.name}</em>
                        </h3>
                      </div>
                      <room.icon className="w-10 h-10 text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500" />
                    </div>

                    <p className="text-body-lg text-brand-body mb-8 leading-relaxed max-w-md">
                      {room.desc}
                    </p>

                    <div className="flex items-center gap-8 mb-8 pb-8 border-b border-brand-border">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {room.guests} Guests
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Maximize className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {room.size}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {room.features.map((feature, fi) => (
                        <span
                          key={fi}
                          className="px-4 py-2 bg-brand-linen border border-brand-border text-[10px] uppercase tracking-[0.15em] text-brand-muted"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
                      className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
                    >
                      <span>Book This Room</span>
                      <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Rooms Include */}
          <div className="mt-20 p-12 bg-brand-linen border border-brand-border">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-body-lg text-brand-muted">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">
                All rooms include:
              </span>
              {[
                { icon: Wifi, label: "Free WiFi" },
                { icon: Coffee, label: "Room Service" },
                { icon: Snowflake, label: "Heating" },
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
      <section id="booking" className="py-section-xl bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Reserve Your Room
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Which Room Suits Your
            <br />
            <em className="italic font-extralight">Ooty Escape</em>?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
            className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      {/* Property Links */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Explore More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Discover
              <br />
              <em className="italic font-extralight">Ooty</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Curated activities", image: "/ooty/all/8._corridor.jpeg" },
              { href: "/destinations/ooty/gallery", title: "Gallery", desc: "Visual journey", image: "/ooty/all/24._view.jpeg" },
              { href: "/destinations/ooty/near", title: "Nearby", desc: "Explore attractions", image: "/ooty/facade-3.jpeg" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
                  <div>
                    <ArrowRight className="w-8 h-8 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                    <h3 className="font-display text-2xl font-light text-brand-ink mb-3">{item.title}</h3>
                    <p className="text-body-sm text-brand-muted group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
