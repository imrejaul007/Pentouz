import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCarousel from "@/components/PropertyCarousel";
import Living from "@/components/Living";
import Experiences from "@/components/Experiences";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

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
