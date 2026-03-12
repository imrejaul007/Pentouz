import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Utensils, Sparkles, ChevronDown } from "lucide-react";
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

      {/* Cinematic Full-Screen Hero */}
      <section className="relative h-screen min-h-[900px] overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0">
          <Image
            src="/indiranagar/living-room-10.jpg"
            alt="Pentouz Destinations"
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="max-w-5xl space-y-8">
            {/* Decorative line */}
            <div className="flex items-center gap-4 animate-fade-up stagger-1">
              <div className="w-12 h-px bg-brand-gold/60" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold">
                The Collection
              </p>
              <div className="w-12 h-px bg-brand-gold/60" />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight animate-fade-up stagger-2">
              Discover Your
              <br className="hidden sm:block" />
              <em className="italic font-extralight block sm:inline">Perfect Escape</em>
            </h1>

            {/* Subtle description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up stagger-3">
              Three exceptional properties, each crafted for the discerning traveler
            </p>

            {/* Gold divider */}
            <div className="flex justify-center animate-fade-up stagger-4">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-scroll-down">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-brand-gold/60" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-6 font-medium">
              Our Properties
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Destinations
              <br />
              <em className="italic font-extralight">Curated for You</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

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

      {/* Explore The Pentouz - Premium Cards with Images */}
      <section className="py-section-xl bg-brand-primary relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-6 font-medium">
              Experience More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Explore
              <br />
              <em className="italic font-extralight">The Pentouz</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/experiences",
                title: "Experiences",
                desc: "Curated activities and local discoveries",
                image: "/ooty/all/22._lawn.jpeg",
                icon: Sparkles,
              },
              {
                href: "/offers",
                title: "Offers",
                desc: "Exclusive packages and seasonal deals",
                image: "/lavelle-road/reception-1.jpg",
                icon: Utensils,
              },
              {
                href: "/gallery",
                title: "Gallery",
                desc: "Visual journey through our properties",
                image: "/indiranagar/living-room-5.jpg",
                icon: Star,
              },
              {
                href: "/contact",
                title: "Contact",
                desc: "Plan your stay with our concierge",
                image: "/lavelle-road/terrace-1.jpg",
                icon: MapPin,
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-700"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <item.icon className="w-8 h-8 text-brand-gold mb-6 transition-transform duration-700 group-hover:scale-110" />
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-white/70 group-hover:text-white/90 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-brand-gold">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light">Discover</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-3" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Teaser */}
      <section className="py-section-xl bg-white relative overflow-hidden">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src="/indiranagar/terrace-7.jpg"
                alt="The Pentouz Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Privé Club
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Membership
                <br />
                <em className="italic font-extralight">Has Its Privileges</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-12 leading-relaxed max-w-lg">
                Join our exclusive membership program and unlock priority reservations, complimentary upgrades, and invitation-only events at all Pentouz properties.
              </p>

              <Link
                href="/prive-club"
                className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
              >
                <span>Discover Membership</span>
                <div className="w-12 h-px bg-brand-accent transition-all duration-700 group-hover:w-16" />
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-xl bg-brand-linen relative overflow-hidden">
        {/* Decorative blurred elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-8 leading-tight">
            Ready to Experience
            <br />
            <em className="italic font-extralight">The Pentouz</em>?
          </h2>
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Our concierge team is ready to curate your perfect stay at any of our handpicked properties. Let us make your visit unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="group relative bg-brand-primary text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
            >
              <span className="relative z-10">Book Your Stay</span>
              <div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Book Your Stay
              </span>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-brand-primary text-brand-primary px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all duration-700 font-light"
            >
              <span>Contact Us</span>
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
    <div className={`group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center overflow-hidden ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      {/* Image with premium frame */}
      <div className={`${isEven ? '' : 'lg:order-2'} relative overflow-hidden`}>
        <div className="relative aspect-[4/3] lg:aspect-[3/4]">
          {/* Decorative border */}
          <div className={`absolute inset-0 border border-brand-border transition-all duration-700 group-hover:border-brand-gold/30 ${isEven ? '-translate-x-3 -translate-y-3' : 'lg:translate-x-3 -translate-y-3'}`} />

          {/* Main Image */}
          <Image
            src={destination.heroImage || destination.image}
            alt={destination.title}
            fill
            className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />

          {/* Location Badge */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border border-brand-border shadow-soft">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-ink">
                {destination.subtitle}
              </span>
            </div>
          </div>

          {/* View All Badge */}
          <div className="absolute bottom-6 right-6">
            <Link
              href={`/destinations/${destination.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border border-brand-border opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <span className="text-[10px] uppercase tracking-[0.15em] text-brand-ink">
                View Property
              </span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? '' : 'lg:order-1'} flex flex-col justify-center py-8 lg:py-12`}>
        {/* Number Badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-display text-5xl text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-px flex-1 bg-brand-border" />
        </div>

        <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-4 font-medium">
          {destination.propertyType || "Luxury Property"}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-ink mb-6 leading-tight">
          <em className="italic font-extralight">{destination.title}</em>
        </h2>

        <div className="flex gap-8 mb-8">
          {destination.rating && (
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-gold fill-current" />
              <span className="text-body-lg text-brand-ink">
                {destination.rating}.0
              </span>
            </div>
          )}
          {destination.capacity && (
            <div className="text-body-sm text-brand-muted uppercase tracking-[0.15em]">
              {destination.capacity}
            </div>
          )}
        </div>

        <p className="text-body-lg text-brand-body mb-10 leading-relaxed max-w-lg">
          {destination.description}
        </p>

        {/* Features as elegant tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(destination.features || []).slice(0, 4).map((feature, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-brand-linen text-brand-muted text-[10px] uppercase tracking-[0.15em] border border-brand-border hover:border-brand-gold/30 transition-colors duration-500"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/destinations/${destination.slug}`}
          className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
        >
          <span>Explore Property</span>
          <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
        </Link>
      </div>
    </div>
  );
}
