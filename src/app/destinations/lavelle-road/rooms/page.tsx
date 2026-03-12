import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, MapPin, Coffee, Wifi, Bed, Maximize, Utensils } from "lucide-react";
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

const roomTypes = [
  {
    name: "King Studio",
    desc: "475 sq. ft. studio with king bed, kitchenette, work desk, and panoramic city views",
    guests: 2,
    features: ["King Bed", "Kitchenette", "Work Desk", "High-Speed WiFi"],
    size: "475 sq ft",
    image: "/lavelle-road/king-suite-1.jpg",
    icon: Bed,
  },
  {
    name: "Queen Studio",
    desc: "450 sq. ft. studio with queen bed, kitchenette, smart TV, and elegant bathroom",
    guests: 2,
    features: ["Queen Bed", "Kitchenette", "Work Desk", "Smart TV"],
    size: "450 sq ft",
    image: "/lavelle-road/queen-suite-1.jpg",
    icon: Coffee,
  },
  {
    name: "Superior Studio",
    desc: "450 sq. ft. studio with twin beds, kitchenette, and refined interiors",
    guests: 2,
    features: ["Twin Beds", "Kitchenette", "Work Desk", "High-Speed WiFi"],
    size: "450 sq ft",
    image: "/lavelle-road/superior-suite-1.jpg",
    icon: MapPin,
  },
  {
    name: "Three Bedroom Unit",
    desc: "Combined Superior + two King Studios, ~1,400 sq. ft., ideal for up to six guests",
    guests: 6,
    features: ["Up to 6 Guests", "3 Bedroom Combination", "City Views", "Extended-Stay Ready"],
    size: "1,400 sq ft",
    image: "/lavelle-road/terrace-1.jpg",
    icon: Maximize,
  },
];

export default function LavelleRoadRoomsPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/lavelle-road/facade-1.jpg"
            alt="The Pentouz @ Lavelle Road Rooms"
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
                Six Spacious
                <br />
                <em className="italic font-extralight">Studio Rooms</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-4">
                Each studio at Lavelle Road offers comfort with a view. Thoughtfully curated for discerning travelers in Bangalore's premier neighborhood.
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
              <em className="italic font-extralight">Perfect Studio</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              All six studios are uniquely designed but share the same premium amenities. Here's how to choose based on your preference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roomTypes.map((room, i) => (
              <div key={i} className="group bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/30" />

                  {/* Room Number Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm border border-white/20 text-brand-ink text-[10px] uppercase tracking-[0.2em]">
                      Room 0{String(i + 1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-4">
                        {room.size}
                      </p>
                      <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink mb-4">
                        <em className="italic font-extralight">{room.name}</em>
                      </h3>
                    </div>
                    <room.icon className="w-8 h-8 text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500" />
                  </div>

                  <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                    {room.desc}
                  </p>

                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-border">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-gold" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                        {room.guests} Guests
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
                    href="https://bookmystay.io/rooms/37853"
                    className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
                  >
                    <span>Book This Room</span>
                    <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
                  </Link>
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
                { icon: Wifi, label: "High-Speed WiFi" },
                { icon: Utensils, label: "Room Service" },
                { icon: MapPin, label: "City Views" },
                { icon: Coffee, label: "Kitchenette" },
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
            Reserve Your Studio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Which Studio Suits Your
            <br />
            <em className="italic font-extralight">Bangalore</em> Stay?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <Link
            href="https://bookmystay.io/rooms/37853"
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
              <em className="italic font-extralight">Lavelle Road</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/lavelle-road/experiences", title: "Experiences", desc: "Curated activities", image: "/ooty/all/22._lawn.jpeg" },
              { href: "/destinations/lavelle-road/gallery", title: "Gallery", desc: "Visual journey", image: "/lavelle-road/terrace-1.jpg" },
              { href: "/destinations/lavelle-road/location", title: "Location", desc: "Prime Lavelle address", image: "/lavelle-road/facade-1.jpg" },
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
