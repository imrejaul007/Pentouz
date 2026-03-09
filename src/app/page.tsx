import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-fold components for faster initial load
const BrandStory = dynamic(() => import("@/components/BrandStory"), {
  loading: () => <SectionSkeleton />,
});

const Collections = dynamic(() => import("@/components/Collections"), {
  loading: () => <SectionSkeleton />,
});

const EditorialFeature = dynamic(() => import("@/components/EditorialFeature"), {
  loading: () => <SectionSkeleton dark />,
});

const Experiences = dynamic(() => import("@/components/Experiences"), {
  loading: () => <SectionSkeleton />,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <SectionSkeleton />,
});

const GuestStories = dynamic(() => import("@/components/GuestStories"), {
  loading: () => <SectionSkeleton />,
});

const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  loading: () => <SectionSkeleton dark />,
});

const Booking = dynamic(() => import("@/components/Booking"), {
  loading: () => <SectionSkeleton dark />,
});

const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false,
});

// Loading skeleton for sections
function SectionSkeleton({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`py-20 ${dark ? "bg-[#0a0a0a]" : "bg-[#f8f7f5]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="animate-pulse">
          <div className={`h-4 w-32 ${dark ? "bg-white/10" : "bg-brand-border"} rounded mb-4 mx-auto`} />
          <div className={`h-10 w-64 ${dark ? "bg-white/10" : "bg-brand-border"} rounded mb-8 mx-auto`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`aspect-[4/3] ${dark ? "bg-white/10" : "bg-brand-border"} rounded`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Magazine Cover */}
        <Hero />

        {/* SEO Navigation Bridge */}
        <section className="py-12 sm:py-14 bg-[#f8f7f5] border-y border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-gold mb-2">
                  Discover Bengaluru Guides
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-light">
                  Lavelle Road Travel & Nearby Stay Pages
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
                <Link href="/travel" className="border border-brand-ink px-4 py-2 text-brand-ink hover:bg-brand-ink hover:text-white transition-colors">
                  Explore Travel Hub
                </Link>
                <Link href="/destinations/lavelle-road/near" className="border border-brand-ink px-4 py-2 text-brand-ink hover:bg-brand-ink hover:text-white transition-colors">
                  50+ Nearby Pages
                </Link>
                <Link href="/destinations/lavelle-road" className="bg-brand-ink px-4 py-2 text-white hover:bg-brand-gold transition-colors">
                  Lavelle Property
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Brand Story - The Pentouz Story */}
        <BrandStory />

        {/* 3. Collections - Our Properties */}
        <Collections />

        {/* 4. Editorial Feature - Living Well */}
        <EditorialFeature />

        {/* 5. Experiences - Curated Moments */}
        <Experiences />

        {/* 6. Gallery - Visual Journal */}
        <Gallery />

        {/* 7. Guest Stories - Voices */}
        <GuestStories />

        {/* 8. Booking - Reserve Your Stay */}
        <Booking />

        {/* 9. Newsletter - Stay Inspired */}
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
