import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { lavelleImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz @ Lavelle Road",
  description: "Explore The Pentouz Lavelle Road gallery - boutique luxury studios near UB City, Bangalore.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road/gallery"),
  },
};

const heroImages = [
  "/lavelle-road/all/reception_2.jpg",
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/9041_queen_suite_1.jpg",
];

// Categorize images based on path
function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/i.test(p)) return "Bathroom";
  if (/bedroom|suite|queen|king|superior/i.test(p)) return "Bedroom";
  if (/terrace|patio/i.test(p)) return "Terrace & Outdoor";
  if (/reception/i.test(p)) return "Common Areas";
  if (/restaurant/i.test(p)) return "Restaurant";
  if (/entrance|facade/i.test(p)) return "Common Areas";
  if (/lift|staircase/i.test(p)) return "Common Areas";
  if (/parking/i.test(p)) return "Common Areas";
  return "Bedroom";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = lavelleImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

// Room-specific images (extracted from lavelleImageSet)
const queenStudioImages = lavelleImageSet.filter((path) => /9041_|9043_/i.test(path));
const kingStudioImages = lavelleImageSet.filter((path) => /9042_|9046_|9047_/i.test(path));
const superiorStudioImages = lavelleImageSet.filter((path) => /9045_/i.test(path));
const threeBedroomImages = [...new Set([...queenStudioImages, ...kingStudioImages, ...superiorStudioImages])];

const rooms = [
  {
    name: "Queen Studio",
    slug: "queen-studio",
    images: queenStudioImages.map((src) => ({
      src,
      title: makeTitle(src),
      category: categorize(src),
    })),
  },
  {
    name: "King Studio",
    slug: "king-studio",
    images: kingStudioImages.map((src) => ({
      src,
      title: makeTitle(src),
      category: categorize(src),
    })),
  },
  {
    name: "Superior Studio",
    slug: "superior-studio",
    images: superiorStudioImages.map((src) => ({
      src,
      title: makeTitle(src),
      category: categorize(src),
    })),
  },
  {
    name: "Three Bedroom Unit",
    slug: "three-bedroom-unit",
    images: threeBedroomImages.map((src) => ({
      src,
      title: makeTitle(src),
      category: categorize(src),
    })),
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[#15120f] text-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={heroImages[0]}
              alt="The Pentouz Lavelle Road"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15120f] via-[#15120f]/60 to-[#15120f]/30" />
          </div>

          {/* Back Link */}
          <div className="absolute top-24 left-5 lg:left-14 z-10">
            <Link
              href="/destinations/lavelle-road"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-[0.18em]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Property</span>
            </Link>
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[60vh] lg:min-h-[70vh] items-end">
            <div className="mx-auto w-full max-w-[1480px] px-5 pb-16 lg:pb-24 lg:px-14">
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4">Gallery</p>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-light leading-[1] max-w-4xl">
                The Pentouz<br />
                <span className="text-brand-gold italic">@ Lavelle Road</span>
              </h1>
              <p className="mt-6 text-base text-white/70 max-w-xl">
                {galleryItems.length} photographs showcasing boutique luxury studios near UB City, Bangalore.
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:flex gap-3 px-5 lg:px-14 pb-6 max-w-[1480px] mx-auto">
            {heroImages.slice(0, 3).map((img, i) => (
              <div key={i} className="relative w-32 h-20 overflow-hidden border border-white/20">
                <Image src={img} alt="" fill className="object-cover" sizes="128px" />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mx-auto max-w-[1480px] px-5 py-14 lg:px-14 lg:py-20">
          <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Lavelle Road" rooms={rooms} />
        </section>
      </main>
      <Footer />
    </>
  );
}
