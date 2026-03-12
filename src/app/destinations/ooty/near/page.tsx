import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mountain, Coffee, Train, Clock } from "lucide-react";
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
  },
  {
    id: 2,
    name: "Botanical Gardens",
    distance: "4 km",
    time: "20 minutes",
    description: "55-acre garden with rare plant species and a fossilized tree trunk, established in 1848.",
    image: "/ooty/all/24._view.jpeg",
  },
  {
    id: 3,
    name: "Doddabetta Peak",
    distance: "9 km",
    time: "30 minutes",
    description: "Highest peak in the Nilgiris at 2,637 meters. Panoramic views of the Western Ghats.",
    image: "/ooty/all/22._lawn.jpeg",
  },
  {
    id: 4,
    name: "Tea Gardens",
    distance: "5 km",
    time: "15 minutes",
    description: "Rolling tea plantations dotting the hillsides. Many offer tours and fresh tea tasting.",
    image: "/ooty/all/22._lawn.jpeg",
  },
  {
    id: 5,
    name: "Nilgiri Mountain Railway",
    distance: "2 km",
    time: "10 minutes",
    description: "UNESCO World Heritage toy train journey through picturesque hills and tunnels.",
    image: "/ooty/all/8._corridor.jpeg",
  },
];

export default function OotyNearPage() {
  return (
    <>
      <Header />

      {/* Full-Screen Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ooty/view-24.jpeg"
            alt="Ooty Hills"
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
                Discover Ooty
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight animate-fade-up stagger-2">
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
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Within Reach
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Nearby
              <br />
              <em className="italic">Attractions</em>
            </h2>
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              All attractions are accessible from The Pentouz @ Ooty. Ask our front desk for assistance with transportation.
            </p>
          </div>

          <div className="space-y-8">
            {nearbyAttractions.map((attraction, i) => (
              <div key={attraction.id} className="group bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-display text-3xl lg:text-4xl font-light text-brand-accent">
                        <em className="italic font-extralight">{attraction.name}</em>
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                        0{String(i + 1)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-8 mb-8">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                        <span className="text-body-sm text-brand-muted">{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-gold" />
                        <span className="text-body-sm text-brand-muted">{attraction.time}</span>
                      </div>
                    </div>
                    <p className="text-body-lg text-brand-body leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-section-xl bg-brand-primary">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Ready to Explore
            <br />
            <em className="italic">Ooty</em>?
          </h2>
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
            className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Your Stay</span>
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      {/* Property Links */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/ooty/rooms", title: "Rooms", desc: "Choose your perfect room" },
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Discover curated activities" },
              { href: "/destinations/ooty", title: "Property", desc: "Back to overview" },
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
