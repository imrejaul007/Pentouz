import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Coffee, Mountain, Utensils, Star } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experiences | The Pentouz @ Ooty",
  description: "Curated activities and memorable moments at our Ooty property - from tea garden tours to heritage railway journeys.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/experiences",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

// Experience categories
const experiences = [
  {
    category: "dining",
    icon: Coffee,
    title: "Culinary Experiences",
    items: [
      {
        id: 1,
        title: "Tea Garden Breakfast",
        description: "Start your day with breakfast overlooking the rolling tea gardens of the Nilgiris.",
        image: "/ooty/restaurant-20.jpeg",
      },
      {
        id: 2,
        title: "Local Cuisine",
        description: "Authentic Tamil Nadu and Coorg specialties prepared with local ingredients.",
        image: "/ooty/restaurant-20.jpeg",
      },
    ],
  },
  {
    category: "nature",
    icon: Mountain,
    title: "Nature & Outdoors",
    items: [
      {
        id: 1,
        title: "Tea Garden Tours",
        description: "Guided walks through nearby tea plantations. Learn about tea processing and enjoy fresh brews.",
        image: "/ooty/all/22._lawn.jpeg",
      },
      {
        id: 2,
        title: "Nilgiri Mountain Railway",
        description: "The heritage toy train journey from Ooty to Coonoor. A UNESCO World Heritage experience.",
        image: "/ooty/all/8._corridor.jpeg",
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
        title: "Botanical Gardens Visit",
        description: "Explore the 55-acre garden with rare species and the fossilized tree trunk.",
        image: "/ooty/all/24._view.jpeg",
      },
      {
        id: 2,
        title: "Tribal Village Visit",
        description: "Experience the culture of the Toda tribe, indigenous to the Nilgiris.",
        image: "/ooty/all/24._view.jpeg",
      },
    ],
  },
];

export default function OotyExperiencesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[600px] bg-gradient-to-b from-black/80 via-brand-gold/50 to-black/40">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src="/ooty/view-24.jpeg"
              alt="Experiences at The Pentouz @ Ooty"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg">
                  Curated Experiences
                </h1>
                <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl">
                  From tea garden walks to heritage train rides, discover experiences that capture the magic of the Nilgiri hills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Categories */}
        <section className="py-16 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {experiences.map((category) => (
              <div key={category.category} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-brand-gold" />
                  <h2 className="font-display text-2xl font-light">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div key={item.id} className="bg-white border border-brand-border p-6">
                      <h3 className="font-display text-lg font-light mb-2 text-brand-accent">{item.title}</h3>
                      <p className="text-sm text-brand-body leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Ready to experience The Pentouz @ Ooty?
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
                href="/destinations/ooty/gallery"
                className="group flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-brand-gold mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light mb-2">Gallery</h3>
                  <p className="text-brand-body text-sm">Visual journey through property</p>
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
