import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mountain, Coffee, Train, Clock, Navigation } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nearby Attractions | The Pentouz @ Ooty",
  description: "Explore attractions near The Pentouz at Ooty - from tea gardens to heritage sites and scenic viewpoints.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/near",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

const nearbyAttractions = [
  {
    id: 1,
    name: "Ooty Lake",
    distance: "3 km",
    time: "15 minutes",
    description: "Serene artificial lake surrounded by eucalyptus trees. Perfect for boating and evening walks.",
    image: "/ooty/view-24.jpeg",
    icon: MapPin,
  },
  {
    id: 2,
    name: "Botanical Gardens",
    distance: "4 km",
    time: "20 minutes",
    description: "55-acre garden with rare plant species and a fossilized tree trunk, established in 1848.",
    image: "/ooty/all/24._view.jpeg",
    icon: Mountain,
  },
  {
    id: 3,
    name: "Doddabetta Peak",
    distance: "9 km",
    time: "30 minutes",
    description: "Highest peak in the Nilgiris at 2,637 meters. Panoramic views of the Western Ghats.",
    image: "/ooty/all/22._lawn.jpeg",
    icon: Coffee,
  },
  {
    id: 4,
    name: "Tea Gardens",
    distance: "5 km",
    time: "15 minutes",
    description: "Rolling tea plantations dotting the hillsides. Many offer tours and fresh tea tasting.",
    image: "/ooty/all/22._lawn.jpeg",
    icon: Train,
  },
  {
    id: 5,
    name: "Nilgiri Mountain Railway",
    distance: "2 km",
    time: "10 minutes",
    description: "UNESCO World Heritage toy train journey through picturesque hills and tunnels.",
    image: "/ooty/all/8._corridor.jpeg",
    icon: Navigation,
  },
];

export default function OotyNearPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ooty/view-24.jpeg"
            alt="Ooty Hills"
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
                Discover Ooty
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                Explore the
                <br />
                <em className="italic font-extralight">Nilgiris</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-4">
                From mist-covered peaks to colonial heritage, discover the attractions that make Ooty a beloved hill station destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Within Reach
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Nearby
              <br />
              <em className="italic font-extralight">Attractions</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              All attractions are accessible from The Pentouz @ Ooty. Ask our front desk for assistance with transportation.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {nearbyAttractions.map((attraction, i) => (
              <div key={attraction.id} className="group">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                  {/* Image Side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                    <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700" />
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
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
                          Attraction 0{String(i + 1)}
                        </p>
                        <h3 className="font-display text-3xl lg:text-4xl font-light text-brand-ink mb-4">
                          <em className="italic font-extralight">{attraction.name}</em>
                        </h3>
                      </div>
                      <attraction.icon className="w-10 h-10 text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500" />
                    </div>

                    <p className="text-body-lg text-brand-body mb-8 leading-relaxed max-w-md">
                      {attraction.description}
                    </p>

                    <div className="flex items-center gap-8 pb-8 border-b border-brand-border">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {attraction.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {attraction.time}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="https://maps.google.com/?q=Windsor%20Heights%2C%20Ooty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
                    >
                      <span>Get Directions</span>
                      <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
                      <Navigation className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Ready to Explore
            <br />
            <em className="italic font-extralight">Ooty</em>?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
            className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Your Stay</span>
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
              { href: "/destinations/ooty/rooms", title: "Rooms", desc: "Comfortable hillside rooms", image: "/ooty/bedroom-10.jpeg" },
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Curated activities", image: "/ooty/all/8._corridor.jpeg" },
              { href: "/destinations/ooty/gallery", title: "Gallery", desc: "Visual journey", image: "/ooty/all/24._view.jpeg" },
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
