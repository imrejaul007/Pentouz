import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz @ Lavelle Road",
  description: "Visual journey through The Pentouz at Lavelle Road - spaces, details, and moments.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road/gallery",
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

// Gallery items
const galleryItems = [
  {
    id: 1,
    src: "/lavelle-road/terrace-1.jpg",
    alt: "Terrace with Bangalore skyline at sunset",
    title: "Terrace View",
    category: "Exterior"
  },
  {
    id: 2,
    src: "/lavelle-road/terrace-2.jpg",
    alt: "Studio bedroom with panoramic windows",
    title: "Studio Interior",
    category: "Room"
  },
  {
    id: 3,
    src: "/lavelle-road/terrace-3.jpg",
    alt: "Corner suite with dual exposure",
    title: "Corner Suite",
    category: "Room"
  },
  {
    id: 4,
    src: "/lavelle-road/terrace-4.jpg",
    alt: "Bathroom detail",
    title: "Ensuite Bath",
    category: "Amenities"
  },
  {
    id: 5,
    src: "/lavelle-road/terrace-5.jpg",
    alt: "City view from executive studio",
    title: "City View",
    category: "View"
  },
  {
    id: 6,
    src: "/lavelle-road/facade-1.jpg",
    alt: "Entrance lobby with golden hour",
    title: "Entrance & Lobby",
    category: "Common Area"
  },
];

export default function LavelleRoadGalleryPage() {
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
                From our sun-kissed terrace to the golden glow of evening Bangalore, every corner of The Pentouz tells a story.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 800px) 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white font-display text-lg font-light">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Links */}
        <section className="py-12 bg-brand-linen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <Link
                href="/destinations/lavelle-road/experiences"
                className="group flex items-start gap-4"
              >
                <ArrowLeft className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Experiences</h3>
                  <p className="text-brand-body text-sm">Discover curated activities</p>
                </div>
              </Link>
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
