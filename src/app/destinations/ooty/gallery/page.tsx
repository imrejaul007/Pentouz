import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { ootyImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz @ Windsor Heights Ooty",
  description: "Explore The Pentouz Windsor Heights Ooty gallery - a premium hill station retreat with stunning views.",
  alternates: {
    canonical: withSiteUrl("/destinations/ooty/gallery"),
  },
};

// Categorize images based on path
function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom/i.test(p)) return "Bathroom";
  if (/bedroom/i.test(p)) return "Bedroom";
  if (/lawn|view/i.test(p)) return "Views";
  if (/reception/i.test(p)) return "Common Areas";
  if (/restaurant/i.test(p)) return "Restaurant";
  if (/facade/i.test(p)) return "Common Areas";
  if (/lift|corridor|parking/i.test(p)) return "Common Areas";
  return "Views";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = ootyImageSet.map((src) => ({
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
              The Pentouz @ Windsor Heights Ooty
            </h1>
            <p className="mt-4 text-base text-brand-body max-w-2xl">
              A softer, slower retreat built around view, weather, lawns, and the emotional comfort of a premium hill-stay experience.
            </p>
          </div>
          <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Windsor Heights Ooty" />
        </section>
      </main>
      <Footer />
    </>
  );
}
