import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-fold components for faster initial load
const PropertyCarousel = dynamic(() => import("@/components/PropertyCarousel"), {
  loading: () => <SectionSkeleton dark />,
});

const Living = dynamic(() => import("@/components/Living"), {
  loading: () => <SectionSkeleton />,
});

const Experiences = dynamic(() => import("@/components/Experiences"), {
  loading: () => <SectionSkeleton />,
});

const Offers = dynamic(() => import("@/components/Offers"), {
  loading: () => <SectionSkeleton dark />,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SectionSkeleton />,
});

const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false,
});

// Loading skeleton for sections
function SectionSkeleton({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`py-20 ${dark ? "bg-[#1a1a1a]" : "bg-[#f8f7f5]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="animate-pulse">
          <div className={`h-4 w-32 ${dark ? "bg-white/10" : "bg-brand-border"} rounded mb-4`} />
          <div className={`h-10 w-64 ${dark ? "bg-white/10" : "bg-brand-border"} rounded mb-8`} />
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
        <Hero />
        <PropertyCarousel />
        <Living />
        <Experiences />
        <Offers />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
