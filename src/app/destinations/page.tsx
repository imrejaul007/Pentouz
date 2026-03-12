import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/content";

export const metadata = {
  title: "Destinations | The Pentouz",
  description: "Explore our luxury residences in Bangalore and Ooty. Each Pentouz property offers a unique experience of refined comfort.",
};

export default function DestinationsPage() {
  return (
    <>
      <Header />

      {/* Full-Screen Hero with Parallax Feel */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/indiranagar/living-room-10.jpg"
            alt="Pentouz Destinations"
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          {/* Elegant dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="max-w-4xl space-y-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold animate-fade-up stagger-1">
              Our Collection
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight animate-fade-up stagger-2">
              Discover Your
              <br />
              <em className="italic font-extralight">Escape</em>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto animate-fade-up stagger-3" />
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-4">
              Three exceptional properties, each crafted for the discerning traveler
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-scroll-down">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="space-y-section-lg">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section-xl bg-brand-primary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 animate-fade-up">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight animate-fade-up stagger-2">
            Experience The
            <br />
            <em className="italic">Pentouz</em> Difference
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-up stagger-3">
            Our concierge team is ready to curate your perfect stay at any of our handpicked properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-4">
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="group relative bg-brand-gold text-brand-primary px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-700 font-light"
            >
              <span className="relative z-10">Book Your Stay</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Book Your Stay
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative border border-white/20 text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-700 font-light"
            >
              <span>Contact Us</span>
              <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-2 duration-500" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

interface DestinationCardProps {
  destination: (typeof destinations)[0];
  index: number;
}

function DestinationCard({ destination, index }: DestinationCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-center group ${isEven ? '' : ''}`}>
      {/* Image with elegant frame */}
      <div className={`${isEven ? '' : 'lg:order-2'} relative`}>
        <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
          {/* Decorative border */}
          <div className={`absolute inset-0 border border-brand-border transition-all duration-700 ${isEven ? '-translate-x-4 -translate-y-4' : 'lg:translate-x-4 -translate-y-4'}`} />

          {/* Image */}
          <Image
            src={destination.heroImage || destination.image}
            alt={destination.title}
            fill
            className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />

          {/* Location badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-ink">{destination.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? '' : 'lg:order-1'} flex flex-col justify-center py-8 lg:py-0`}>
        <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
          Location {String(index + 1).padStart(2, '0')}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-ink mb-6 leading-tight">
          <em className="italic font-extralight">{destination.title}</em>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-gold to-transparent mb-8" />
        <p className="text-body-lg text-brand-body mb-12 leading-relaxed max-w-lg">
          {destination.description}
        </p>

        {/* Features as elegant tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {destination.features.slice(0, 4).map((feature, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-brand-linen text-brand-muted text-[10px] uppercase tracking-[0.15em] border border-brand-border"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/destinations/${destination.slug}`}
          className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-500 font-light"
        >
          <span>Explore Property</span>
          <span className="w-8 h-px bg-brand-accent transition-all duration-500 group-hover:w-12" />
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
        </Link>
      </div>
    </div>
  );
}
