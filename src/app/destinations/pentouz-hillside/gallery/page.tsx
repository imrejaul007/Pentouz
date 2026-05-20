import type { Metadata } from "next";
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
      <main className="bg-[#fbf7f0] text-brand-ink">
        <section className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4">Gallery</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              The Pentouz Hillside Chikmagalur
            </h1>
            <p className="mt-4 text-base text-brand-body max-w-2xl">
              A warm luxury homestay in Chikmagalur&apos;s coffee country. Gardens, plantation views, and the unhurried pace of the Western Ghats.
            </p>
          </div>
          <PropertyGallery items={galleryItems} propertyName="The Pentouz Hillside Chikmagalur" />
        </section>
      </main>
      <Footer />
    </>
  );
}
