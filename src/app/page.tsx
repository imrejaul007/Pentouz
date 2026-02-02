import dynamic from "next/dynamic";
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
