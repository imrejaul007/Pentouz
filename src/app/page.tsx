import Link from "next/link";
import Image from "next/image";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Hero Section - Full Screen, Minimal Text, Large Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lavelle-road/terrace-1.jpg"
            alt="The Pentouz Luxury Hotels"
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold">
              The Pentouz
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight">
              Exceptional Living
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 font-light"
              >
                Explore
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      </section>

      {/* Properties Section - Full Width Cards, Minimal Text */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-white">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative h-[85vh] sm:h-[90vh] overflow-hidden"
            >
              <Image
                src={dest.heroImage || dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 transition-opacity duration-500 group-hover:from-black/50" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-3">
                  {dest.shortTitle}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-2 leading-tight">
                  {dest.title}
                </h2>
                <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                  {dest.subtitle}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/30 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome Section - Minimal, Text Focused */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-linen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
            The Pentouz
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-8 leading-tight">
            Three Distinctive Properties,
            <br />
            <span className="italic font-extralight">One Standard of Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-body leading-relaxed">
            Each of our properties is thoughtfully designed to reflect its unique location while maintaining The Pentouz signature standards of elegance, comfort, and personalized service.
          </p>
        </div>
      </section>

      {/* Property Preview - Alternating Layout */}
      {destinations.map((dest, index) => (
        <section key={dest.slug} className="bg-white border-t border-brand-border/30">
          <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[60vh] overflow-hidden">
              <Image
                src={dest.heroImage || dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="50vw"
              />
            </div>
            <div className="flex items-center justify-center p-12 lg:p-20">
              <div className="max-w-lg">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4">
                  {dest.shortTitle}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
                  {dest.title}
                </h2>
                <p className="text-base text-brand-body leading-relaxed mb-8">
                  {dest.subtitle}
                </p>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="inline-flex items-center gap-3 text-brand-ink text-[10px] uppercase tracking-[0.25em] hover:text-brand-accent transition-colors duration-300"
                >
                  Discover
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Experience Section - Minimal Cards */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-display text-brand-gold/20 mb-4">
                3
              </div>
              <h3 className="font-display text-xl font-light text-brand-ink mb-3">
                Properties
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Across Bengaluru and Ooty
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-display text-brand-gold/20 mb-4">
                24/7
              </div>
              <h3 className="font-display text-xl font-light text-brand-ink mb-3">
                Support
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Dedicated assistance
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-display text-brand-gold/20 mb-4">
                100%
              </div>
              <h3 className="font-display text-xl font-light text-brand-ink mb-3">
                Personalized
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Tailored experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Dark, Minimal */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8">
            Begin Your Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Your Exceptional
            <br />
            <span className="italic font-extralight">Stay Awaits</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 font-light"
            >
              Browse Properties
            </Link>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
