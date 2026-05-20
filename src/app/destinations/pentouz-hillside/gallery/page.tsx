import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { fernhillImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz Hillside Chikmagalur",
  description: "Explore The Pentouz Hillside Chikmagalur gallery - a warm luxury homestay in coffee country.",
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/gallery"),
  },
};

const heroImages = [
  "/fernhill/all/63_overview.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/fernhill/villa/09_villa_living_room.jpg",
];

// Categorize images based on path
function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom/i.test(p)) return "Bathroom";
  if (/bedroom|villa|cottage|four_bed|eight_bed|squad/i.test(p)) return "Bedroom";
  if (/pool|swimming/i.test(p)) return "Common Areas";
  if (/games_room/i.test(p)) return "Common Areas";
  if (/restaurant|dining/i.test(p)) return "Restaurant";
  if (/tea_coffee/i.test(p)) return "Common Areas";
  if (/exterior|facade|villa_exterior/i.test(p)) return "Terrace & Outdoor";
  if (/view|top_view|night_view|front_view|side_view|gazebo|fireplace/i.test(p)) return "Views";
  if (/play_area|kids/i.test(p)) return "Common Areas";
  if (/villa_living/i.test(p)) return "Living Room";
  return "Terrace & Outdoor";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = fernhillImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

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
              alt="The Pentouz Hillside Chikmagalur"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15120f] via-[#15120f]/60 to-[#15120f]/30" />
          </div>

          {/* Back Link */}
          <div className="absolute top-24 left-5 lg:left-14 z-10">
            <Link
              href="/destinations/pentouz-hillside"
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
                <span className="text-brand-gold italic">Hillside Chikmagalur</span>
              </h1>
              <p className="mt-6 text-base text-white/70 max-w-xl">
                {galleryItems.length} photographs of a warm luxury homestay in coffee country.
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
          <PropertyGallery items={galleryItems} propertyName="The Pentouz Hillside Chikmagalur" />
        </section>
      </main>
      <Footer />
    </>
  );
}
