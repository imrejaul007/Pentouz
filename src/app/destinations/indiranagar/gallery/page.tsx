import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { indiranagarImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz @ Indiranagar",
  description: "Explore The Pentouz Indiranagar gallery - a private three-bedroom penthouse on 100 Feet Road, Indiranagar.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar/gallery"),
  },
};

// Categorize images based on path
function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/i.test(p)) return "Bathroom";
  if (/bedroom|suite/i.test(p)) return "Bedroom";
  if (/terrace|balcony/i.test(p)) return "Terrace & Outdoor";
  if (/living_room|living/i.test(p)) return "Living Room";
  if (/kitchen|dining/i.test(p)) return "Kitchen & Dining";
  if (/view/i.test(p)) return "Views";
  if (/reception|facade|entrance|exterior|staircase|lift/i.test(p)) return "Common Areas";
  return "Living Room";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = indiranagarImageSet.map((src) => ({
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
              The Pentouz @ Indiranagar
            </h1>
            <p className="mt-4 text-base text-brand-body max-w-2xl">
              A private three-bedroom penthouse on 100 Feet Road, designed for families, groups, and longer city stays.
            </p>
          </div>
          <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Indiranagar" />
        </section>
      </main>
      <Footer />
    </>
  );
}
