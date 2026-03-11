import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain, MapPin, Home } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz @ Ooty",
  description: "Visual journey through The Pentouz at Ooty - from hilltop views to cozy interiors.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/gallery",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

// Gallery items
const galleryItems = [
  { id: 1, src: "/ooty/all/1._facade.jpeg", alt: "Main facade of Windsor Heights", title: "Main Entrance", category: "exterior" },
  { id: 2, src: "/ooty/all/2_facade.jpeg", alt: "Colonial architecture", title: "Colonial Charm", category: "exterior" },
  { id: 3, src: "/ooty/all/3._facade.jpeg", alt: "Building exterior with hill views", title: "Hillside View", category: "exterior" },
  { id: 4, src: "/ooty/all/4._reception.jpeg", alt: "Reception area", title: "Reception", category: "common" },
  { id: 5, src: "/ooty/all/5._reception.jpeg", alt: "Lobby seating area", title: "Lobby", category: "common" },
  { id: 6, src: "/ooty/all/6._lift_area.jpeg", alt: "Lift area", title: "Lift Area", category: "common" },
  { id: 7, src: "/ooty/all/8._corridor.jpeg", alt: "Corridor", title: "Corridor", category: "common" },
  { id: 8, src: "/ooty/all/22._lawn.jpeg", alt: "Garden lawn", title: "Garden Lawn", category: "exterior" },
  { id: 9, src: "/ooty/all/23._lawn.jpeg", alt: "Outdoor seating", title: "Outdoor Seating", category: "exterior" },
  { id: 10, src: "/ooty/bedroom-10.jpeg", alt: "Bedroom interior", title: "Bedroom", category: "room" },
  { id: 11, src: "/ooty/all/11._bedroom.jpeg", alt: "Cozy bedroom", title: "Cozy Room", category: "room" },
  { id: 12, src: "/ooty/all/14_bedroom.jpeg", alt: "Bedroom with hill view", title: "Hill View Room", category: "room" },
  { id: 13, src: "/ooty/all/18._bathroom.jpeg", alt: "Bathroom", title: "Bathroom", category: "amenities" },
  { id: 14, src: "/ooty/all/19._bathroom.jpeg", alt: "Modern bathroom", title: "Modern Bath", category: "amenities" },
  { id: 15, src: "/ooty/all/20._restaurant.jpeg", alt: "Restaurant interior", title: "Restaurant", category: "common" },
  { id: 16, src: "/ooty/all/21._restaurant.jpeg", alt: "Dining area", title: "Dining", category: "common" },
  { id: 17, src: "/ooty/all/24._view.jpeg", alt: "Hill view from room", title: "Hill View", category: "view" },
  { id: 18, src: "/ooty/view-24.jpeg", alt: "Panoramic view", title: "Panorama", category: "view" },
];

const categoryColors: Record<string, string> = {
  exterior: "bg-green-100 text-green-800",
  room: "bg-blue-100 text-blue-800",
  common: "bg-amber-100 text-amber-800",
  amenities: "bg-purple-100 text-purple-800",
  view: "bg-teal-100 text-teal-800",
};

const categoryIcons: Record<string, any> = {
  exterior: Mountain,
  room: Home,
  common: MapPin,
  amenities: Home,
  view: Mountain,
};

export default function OotyGalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Gallery Section */}
        <section className="py-20 lg:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-12">
              <h1 className="font-display text-4xl lg:text-5xl font-light mb-6 text-brand-accent">
                Visual Journey
              </h1>
              <p className="text-lg text-brand-body mb-6 max-w-3xl">
                From the colonial facade to mist-covered hill views, every corner of The Pentouz Windsor Heights tells the story of Ooty's timeless charm.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => {
                const CategoryIcon = categoryIcons[item.category] || Mountain;
                return (
                  <div key={item.id} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        priority={item.id <= 6}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 800px) 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] || "bg-gray-100 text-gray-800"}`}>
                          <CategoryIcon className="w-3 h-3" />
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-white font-display text-lg font-light">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
