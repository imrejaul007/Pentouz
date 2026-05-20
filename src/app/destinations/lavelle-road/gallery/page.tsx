import type { Metadata } from "next";
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

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf7f0] text-brand-ink">
        <section className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4">Gallery</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              The Pentouz @ Lavelle Road
            </h1>
            <p className="mt-4 text-base text-brand-body max-w-2xl">
              Boutique luxury studios on Lavelle Road, Bangalore - premium accommodation near UB City and the High Court.
            </p>
          </div>
          <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Lavelle Road" />
        </section>
      </main>
      <Footer />
    </>
  );
}
