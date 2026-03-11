import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mountain, Coffee, Train } from "lucide-react";
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

// Nearby attractions
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
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[500px] bg-gradient-to-b from-black/80 via-brand-gold/50 to-black/40">
          <div className="relative h-[40vh] overflow-hidden">
            <Image
              src="/ooty/view-24.jpeg"
              alt="Ooty Hills"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg">
                  Explore Ooty
                </h1>
                <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl">
                  From mist-covered peaks to colonial heritage, discover the attractions that make Ooty a beloved hill station destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-20 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-light mb-6 text-brand-accent">
                Nearby Attractions
              </h2>
              <p className="text-base text-brand-body">
                All attractions are accessible from The Pentouz @ Ooty. Ask our front desk for assistance with transportation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {nearbyAttractions.map((attraction) => (
                <div key={attraction.id} className="bg-white border border-brand-border overflow-hidden hover:shadow-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-light text-brand-accent">{attraction.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-brand-muted">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {attraction.distance}</span>
                        <span className="flex items-center gap-1"><Train className="w-4 h-4" /> {attraction.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-brand-body leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Ready to explore Ooty from The Pentouz?
            </p>
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 mt-6 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Book Your Stay
            </Link>
          </div>
        </section>

        {/* Property Links */}
        <section className="py-12 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Link
                href="/destinations/ooty/rooms"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Rooms</h3>
                  <p className="text-brand-body text-sm">Choose your perfect room</p>
                </div>
              </Link>
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
