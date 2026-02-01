import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";

// Generate static params for all destinations
export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

// Generate metadata for each destination
export function generateMetadata({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  if (!destination) return { title: "Not Found" };

  return {
    title: `${destination.title} | The Pentouz`,
    description: destination.description,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  // Get next and previous destinations for navigation
  const currentIndex = destinations.findIndex((d) => d.slug === params.slug);
  const prevDestination = destinations[currentIndex - 1];
  const nextDestination = destinations[currentIndex + 1];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[800px]">
          <div className="absolute inset-0">
            <Image
              src={destination.heroImage || destination.image}
              alt={destination.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          </div>

          <div className="relative h-full flex flex-col justify-end text-white px-8 lg:px-24 pb-32">
            <div className="max-w-container-2xl mx-auto w-full">
              <p className="text-overline uppercase tracking-[0.4em] text-white/50 mb-6 font-light">
                {destination.subtitle}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-8">
                {destination.title}
              </h1>
              <div className="w-20 h-px bg-white/30 mb-8" />
              <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                {destination.copy}
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
            <span className="text-overline uppercase tracking-[0.3em] font-light text-xs">Scroll</span>
            <div className="w-px h-12 bg-white/30 overflow-hidden">
              <div className="w-full h-full bg-white animate-scroll-down" />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-xl mx-auto px-8 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div>
                <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                  Welcome
                </p>
                <h2 className="font-display text-display-sm lg:text-display-md font-light mb-8">
                  A Place of <em className="italic">Distinction</em>
                </h2>
                <div className="w-16 h-px bg-brand-accent mb-10" />
                <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                  {destination.description}
                </p>
                {destination.address && (
                  <p className="text-body-md text-brand-muted">
                    {destination.address}
                  </p>
                )}
              </div>
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={destination.gallery?.[1] || destination.image}
                    alt={`${destination.title} interior`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Amenities */}
        <section className="py-32 lg:py-48 bg-brand-cream">
          <div className="max-w-container-xl mx-auto px-8 lg:px-20">
            <div className="text-center mb-20">
              <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                Features
              </p>
              <h2 className="font-display text-display-sm lg:text-display-md font-light">
                Refined <em className="italic">Amenities</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {destination.features?.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-5 p-6 bg-white hover:shadow-subtle transition-shadow duration-500"
                >
                  <div className="w-10 h-10 border border-brand-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-body-md text-brand-ink">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-16">
              {destination.amenities?.map((amenity) => (
                <span
                  key={amenity}
                  className="px-6 py-3 border border-brand-border text-label uppercase tracking-[0.1em] text-brand-muted"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms / Suites */}
        <section className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-xl mx-auto px-8 lg:px-20">
            <div className="text-center mb-20">
              <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                Accommodations
              </p>
              <h2 className="font-display text-display-sm lg:text-display-md font-light">
                Our <em className="italic">Suites</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {destination.rooms?.map((room, index) => (
                <div key={room.name} className="group">
                  <div className="aspect-[4/3] relative overflow-hidden mb-8">
                    <Image
                      src={destination.gallery?.[index] || destination.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-display text-heading-lg font-light mb-3">
                    {room.name}
                  </h3>
                  <p className="text-body-md text-brand-muted">
                    {room.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Strip */}
        <section className="py-16 bg-brand-linen overflow-hidden">
          <div className="flex gap-6 animate-fade-in">
            {destination.gallery?.map((image, index) => (
              <div key={index} className="aspect-[16/9] w-[500px] relative flex-shrink-0">
                <Image
                  src={image}
                  alt={`${destination.title} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-32 lg:py-48 bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-overline uppercase tracking-[0.3em] text-white/40 mb-6 font-light">
              Reserve Your Stay
            </p>
            <h2 className="font-display text-display-sm lg:text-display-md font-light mb-8">
              Experience <em className="italic">{destination.shortTitle}</em>
            </h2>
            <p className="text-body-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Contact our concierge team to plan your perfect stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={destination.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-brand-ink py-5 px-12 text-label uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-500 font-light"
              >
                Book Now
              </a>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center border border-white/30 text-white py-5 px-12 text-label uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 font-light"
              >
                {contactInfo.phones[0]}
              </a>
            </div>
          </div>
        </section>

        {/* Navigation to other properties */}
        <section className="py-16 bg-white border-t border-brand-border">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            <div className="flex justify-between items-center">
              {prevDestination ? (
                <Link
                  href={`/destinations/${prevDestination.slug}`}
                  className="group flex items-center gap-4 text-brand-muted hover:text-brand-ink transition-colors duration-500"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-500" />
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] mb-1">Previous</p>
                    <p className="text-body-md">{prevDestination.shortTitle}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/destinations"
                className="text-label uppercase tracking-[0.15em] text-brand-muted hover:text-brand-ink transition-colors"
              >
                All Destinations
              </Link>

              {nextDestination ? (
                <Link
                  href={`/destinations/${nextDestination.slug}`}
                  className="group flex items-center gap-4 text-brand-muted hover:text-brand-ink transition-colors duration-500 text-right"
                >
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] mb-1">Next</p>
                    <p className="text-body-md">{nextDestination.shortTitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
