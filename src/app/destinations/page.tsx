import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-10-2.jpg"
              alt="Pentouz Destinations"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
          </div>

          <div className="relative h-full flex flex-col justify-end items-center text-center text-white px-8 pb-24">
            <p className="text-overline uppercase tracking-[0.4em] text-white/50 mb-6 font-light">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-8">
              Discover Our <em className="italic">Destinations</em>
            </h1>
            <div className="w-20 h-px bg-white/30 mb-8" />
            <p className="text-lg text-white/60 max-w-2xl font-light">
              Three exceptional properties, each offering a unique experience of luxury and comfort
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            <div className="space-y-32 lg:space-y-48">
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={destination.slug}
                  destination={destination}
                  index={index}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 lg:py-40 bg-brand-linen">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
              Ready to Experience
            </p>
            <h2 className="font-display text-display-sm lg:text-display-md font-light mb-8">
              Begin Your <em className="italic">Journey</em>
            </h2>
            <p className="text-body-lg text-brand-body mb-12 max-w-2xl mx-auto">
              Contact our concierge team to plan your perfect stay at any of our properties.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center bg-brand-ink text-white py-5 px-16 text-label uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 font-light"
            >
              Check Availability
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface DestinationCardProps {
  destination: (typeof destinations)[0];
  index: number;
  reversed: boolean;
}

function DestinationCard({ destination, index, reversed }: DestinationCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
      {/* Image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={destination.heroImage || destination.image}
            alt={destination.title}
            fill
            className="object-cover hover-scale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Number badge */}
        <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-24 h-24 lg:w-32 lg:h-32 bg-white flex items-center justify-center">
          <span className="font-display text-4xl lg:text-5xl text-brand-border">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${reversed ? "lg:order-1" : ""} lg:py-8`}>
        <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
          {destination.subtitle}
        </p>
        <h2 className="font-display text-display-sm lg:text-display-md font-light mb-6">
          {destination.title}
        </h2>
        <div className="w-16 h-px bg-brand-accent mb-8" />
        <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
          {destination.description}
        </p>

        {/* Features preview */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {destination.features?.slice(0, 4).map((feature) => (
            <p key={feature} className="text-body-sm text-brand-muted flex items-center gap-2">
              <span className="w-1 h-1 bg-brand-accent rounded-full" />
              {feature}
            </p>
          ))}
        </div>

        <Link
          href={`/destinations/${destination.slug}`}
          className="inline-flex items-center gap-4 text-label uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
        >
          <span>Explore Property</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-500" />
        </Link>
      </div>
    </div>
  );
}
