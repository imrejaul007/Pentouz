import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Coffee, Star, Utensils } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experiences | The Pentouz @ Lavelle Road",
  description: "Curated activities and memorable moments at our Lavelle Road property.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road/experiences",
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

// Experience categories
const experiences = [
  {
    category: "dining",
    icon: Coffee,
    title: "Culinary Experiences",
    items: [
      {
        id: 1,
        title: "Breakfast at Koshy's",
        description: "Solid, no frills. Start your day at this Bangalore institution before 9am rush.",
        image: "/experiences/koshy-1.jpg",
      },
      {
        id: 2,
        title: "Toit at UB City",
        description: "Quick, simple, reliable. Good for working breakfast meetings.",
        image: "/experiences/toit-1.jpg",
      },
      {
        id: 3,
        title: "Flight Cafe",
        description: "Reliable, decent portions. WiFi usually works.",
        image: "/experiences/flight-1.jpg",
      },
    ],
  },
  {
    category: "wellness",
    icon: Utensils,
    title: "Wellness & Spa",
    items: [
      {
        id: 1,
        title: "In-Room Spa Treatment",
        description: "Traditional Ayurveda treatments available by appointment.",
        image: "/experiences/spa-1.jpg",
      },
      {
        id: 2,
        title: "Yoga Sessions",
        description: "Morning rooftop yoga with city views, guided by experienced instructors.",
        image: "/experiences/yoga-1.jpg",
      },
    ],
  },
  {
    category: "culture",
    icon: Star,
    title: "Cultural Experiences",
    items: [
      {
        id: 1,
        title: "UB City Walk",
        description: "Evening walks through UB City. Start after 7pm for a calmer atmosphere.",
        image: "/experiences/ub-city-1.jpg",
      },
      {
        id: 2,
        title: "Bangalore Palace Tour",
        description: "Guided heritage tour of this architectural marvel. Book in advance as spots fill quickly.",
        image: "/experiences/palace-1.jpg",
      },
    ],
  },
];

export default function LavelleRoadExperiencesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[600px]">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src="/lavelle-road/facade-1.jpg"
              alt="Experiences at The Pentouz"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg text-white">
                  Curated Experiences
                </h1>
                <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl">
                  Discover the art of hospitality through thoughtfully curated experiences - from quiet breakfast at Koshy's to guided palace tours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Categories */}
        <section className="py-16 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {experiences.map((category) => (
              <div key={category.category} className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-brand-gold" />
                  <div>
                    <h2 className="font-display text-2xl font-light">{category.title}</h2>
                    <p className="text-brand-body text-sm">{category.items.map((item) => item.title).join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Ready to experience The Pentouz @ Lavelle Road?
            </p>
            <Link
              href="https://bookmystay.io/rooms/37853"
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
                href="/destinations/lavelle-road/rooms"
                className="group flex items-start gap-4"
              >
                <ArrowLeft className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Rooms</h3>
                  <p className="text-brand-body text-sm">Choose your perfect studio</p>
                </div>
              </Link>
              <Link
                href="/destinations/lavelle-road/gallery"
                className="group flex items-start gap-4"
              >
                <ArrowLeft className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Gallery</h3>
                  <p className="text-brand-body text-sm">Visual journey through the property</p>
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
