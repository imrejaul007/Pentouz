"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FAQ from "@/components/FAQ";
import { contactInfo, destinations, testimonials } from "@/data/content";
import { homepageFAQs } from "@/lib/schema";

const heroImages = [
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/patio_1.jpg",
  "/lavelle-road/all/entrance_1.jpg",
  "/indiranagar/all/06._terrace_01._terrace.jpg",
  "/indiranagar/all/04._living_room_03._living_room.jpg",
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/ooty/all/24._view.jpeg",
  "/ooty/all/22._lawn.jpeg",
];

const cityMoments = [
  {
    eyebrow: "Arts & Culture",
    title: "Exhibitions & Museum",
    description:
      "Spend your day between galleries, museum collections, and cultural spaces that keep Bengaluru creative, layered, and alive.",
    image: "/lavelle-road/all/reception_3.jpg",
    href: "/stories",
  },
  {
    eyebrow: "Nature",
    title: "Nearby Parks",
    description:
      "From Cubbon Park to slower green pockets across the city, nature is never far from the Pentouz experience.",
    image: "/ooty/all/22._lawn.jpeg",
    href: "/travel/guides/luxury-evening-walks-near-lavelle-road",
  },
  {
    eyebrow: "Dining Experiences",
    title: "Local Food Tour",
    description:
      "Explore Bengaluru through its dining rooms, coffee culture, and late-evening addresses around UB City, MG Road, and Indiranagar.",
    image: "/lavelle-road/all/restaurant_4.jpg",
    href: "/experiences",
  },
];

export default function HomePage() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const setSectionRef = (id: string) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };
  const lavelle = destinations.find((destination) => destination.slug === "lavelle-road") || destinations[0];

  return (
    <>
      <Header />
      <main className="bg-brand-cream text-brand-ink">
        {/* Hero Section */}
        <HeroSlider images={heroImages} alt="The Pentouz luxury residences">
          <div className="mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-48 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div className="max-w-5xl">
                <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-6 animate-fade-in-up">The Pentouz</p>
                <h1 className="font-display font-light leading-[1.05] text-white animate-fade-in-up [animation-delay:120ms]" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}>
                  Distinct stays for guests who want privacy, space, and a quieter kind of luxury.
                </h1>
                <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl animate-fade-in-up [animation-delay:220ms]">
                  Boutique city rooms on Lavelle Road, a private penthouse in Indiranagar, The Pentouz Hillside Chikmagalur, and a slower retreat in Ooty.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 font-ui text-[11px] uppercase tracking-[0.2em] font-medium text-brand-ink transition-all duration-500 ease-luxury hover:bg-brand-gold hover:text-white"
                  >
                    Explore Destinations
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-3 font-ui text-[11px] uppercase tracking-[0.2em] border border-white/20 px-8 py-4 text-white/80 transition-all duration-500 ease-luxury hover:border-brand-gold hover:text-brand-gold"
                  >
                    Speak to Concierge
                  </a>
                </div>
              </div>

              {/* Featured Property Card */}
              <div className="animate-fade-in-up [animation-delay:420ms] xl:justify-self-end xl:max-w-[380px]">
                <div className="border-t border-white/15 pt-6 text-white">
                  <p className="text-[10px] font-ui uppercase tracking-[0.2em] text-brand-gold font-medium">Featured Property</p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-light leading-tight text-white">
                    {lavelle.title}
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/65">{lavelle.copy}</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-[9px] font-ui uppercase tracking-[0.15em] text-brand-gold/80">Location</p>
                      <p className="mt-1 font-body text-xs text-white/75">Lavelle Road</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-ui uppercase tracking-[0.15em] text-brand-gold/80">Setting</p>
                      <p className="mt-1 font-body text-xs text-white/75">Boutique hotel</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-ui uppercase tracking-[0.15em] text-brand-gold/80">Nearby</p>
                      <p className="mt-1 font-body text-xs text-white/75">UB City</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/destinations/lavelle-road" className="link-arrow">
                      View Property
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Intro Section */}
        <section
          ref={setSectionRef("intro")}
          data-section-id="intro"
          className="relative border-t border-brand-border/50 bg-brand-cream"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[14rem] font-display font-light text-brand-gold/[0.03] select-none pointer-events-none leading-none">01</span>
          <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-14 lg:py-36">
            <div className="relative lg:pr-16">
              <div className="editorial-divider-left mb-6" />
              <p className="editorial-overline">A Pentouz Stay</p>
              <h2 className="luxury-section-title mt-6 max-w-xl">
                A more private, more personal way to stay in Bangalore, Chikmagalur, and Ooty.
              </h2>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 w-px bg-brand-gold/15" />
            </div>
            <div className="lg:pl-16 space-y-6 font-body text-base sm:text-lg leading-[1.8] text-brand-body">
              <p>
                The Pentouz, where luxury meets exclusivity. Situated in prime locations across Bangalore and beyond, our boutique accommodations offer the perfect blend of elegance, privacy, and convenience.
              </p>
              <p>
                Each room and suite is thoughtfully designed with timeless decor and modern comforts, creating a tranquil retreat in the heart of vibrant urban settings. Whether for business or leisure, our spaces promise sophistication and serenity.
              </p>
              <p>
                What sets us apart is our commitment to personalized service. At The Pentouz, every detail is tailored to ensure your stay is nothing short of exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section
          ref={setSectionRef("collection")}
          data-section-id="collection"
          className="relative bg-brand-linen"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[14rem] font-display font-light text-brand-gold/[0.03] select-none pointer-events-none leading-none">02</span>
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="relative max-w-3xl">
              <div className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(195,160,97,0.05),transparent_50%)]" />
              <p className="editorial-overline text-brand-accent">Extraordinary Accommodations</p>
              <h2 className="luxury-section-title mt-6">Our properties</h2>
            </div>

            {/* Property Cards Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className="group relative overflow-hidden bg-white border border-brand-borderLight shadow-card transition-all duration-700 ease-luxury hover:shadow-card-hover hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 overlay-gradient-subtle" />
                    {/* Hover reveal */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100">
                      <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-white border border-white/30 px-5 py-2.5">View Property</span>
                    </div>
                    {/* Bottom info */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-[9px] font-ui uppercase tracking-[0.2em] text-brand-gold">{destination.subtitle}</p>
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-light leading-tight text-white">{destination.shortTitle}</h3>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Collection Promo Card */}
              <div className="group relative overflow-hidden border border-brand-border bg-brand-sand p-8 transition-all duration-700 ease-luxury hover:-translate-y-1 hover:shadow-card-hover">
                <p className="text-[10px] font-ui uppercase tracking-[0.2em] text-brand-accent font-medium">The Collection</p>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-brand-ink">Choose the stay that matches your trip.</h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-brand-body">
                  Some guests need central access, some need a private residence, and some need a quieter retreat. Pentouz is built around that difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section
          ref={setSectionRef("experiences")}
          data-section-id="experiences"
          className="relative bg-brand-dark text-white"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-gold/[0.04] blur-3xl animate-pulse pointer-events-none" />
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[14rem] font-display font-light text-brand-gold/[0.03] select-none pointer-events-none leading-none">03</span>
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-14 lg:py-36">
            <div className="relative py-10">
              <p className="editorial-overline text-brand-gold">Enjoy the best moments of life</p>
              <h2 className="mt-6 font-display font-light leading-[1.1] text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                Experience the luxury
              </h2>
            </div>
            <div>
              <p className="font-body text-base sm:text-lg leading-[1.8] text-white/65">
                The Pentouz offers a mix of urban excitement and serene escapades, making it a perfect blend of experiences. In the vibrant hubs of UB City and Indiranagar in Bangalore, indulge in world-class dining, high-end shopping, and buzzing nightlife. Explore art galleries, attend cultural events, or unwind at chic rooftop lounges with stunning city views.
              </p>
              <p className="mt-6 font-body text-base sm:text-lg leading-[1.8] text-white/65">
                For a serene retreat, head to Ooty, where lush tea gardens, misty hills, and tranquil lakes await. Enjoy scenic drives, nature trails, and cozy stays in charming surroundings. Whether you crave the energy of the city or the calm of the hills, The Pentouz promises unforgettable moments.
              </p>
              <div className="mt-10">
                <Link href="/experiences" className="btn-ghost-light gold-shimmer inline-flex items-center gap-3 px-8 py-4">
                  Start Exploring
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gatherings/Testimonials Section */}
        <section
          ref={setSectionRef("gatherings")}
          data-section-id="gatherings"
          className="relative bg-brand-sand"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[14rem] font-display font-light text-brand-gold/[0.03] select-none pointer-events-none leading-none">04</span>
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="editorial-overline text-brand-accent">High standards of hospitality</p>
                <h2 className="luxury-section-title mt-6">
                  Make your memorable get-togethers a reality.
                </h2>
                <p className="mt-6 font-body text-base sm:text-lg leading-[1.8] text-brand-body max-w-lg">
                  Turn your celebrations into an unforgettable experience at our stunning destinations. Whether you&apos;re looking for a private space with beautiful views or a vast terrace for intimate parties, we have the perfect setting.
                </p>
              </div>

              {/* Testimonial Cards */}
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className="group relative bg-white border border-brand-border/50 p-6 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-card"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    {/* Quote mark */}
                    <div className="absolute top-4 left-4 text-5xl font-display text-brand-gold/15 leading-none select-none">&ldquo;</div>

                    <p className="mt-8 font-body text-base leading-relaxed italic text-brand-body relative z-10">{testimonial.quote}</p>

                    <div className="mt-6 pt-5 border-t border-brand-border/50">
                      <p className="font-display text-xl font-light text-brand-ink">{testimonial.name}</p>
                      {testimonial.location && (
                        <p className="mt-1 text-[10px] font-ui uppercase tracking-[0.12em] text-brand-muted">{testimonial.location}</p>
                      )}
                      {testimonial.sourceUrl ? (
                        <a
                          href={testimonial.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block font-ui text-[10px] uppercase tracking-[0.15em] text-brand-accent hover:text-brand-gold transition-colors duration-300"
                        >
                          {testimonial.source} →
                        </a>
                      ) : (
                        <p className="mt-2 font-ui text-[10px] uppercase tracking-[0.15em] text-brand-muted">{testimonial.source}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* City Discovery Section */}
        <section
          ref={setSectionRef("city")}
          data-section-id="city"
          className="relative bg-white"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[14rem] font-display font-light text-brand-gold/[0.03] select-none pointer-events-none leading-none">05</span>
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="max-w-3xl">
              <p className="editorial-overline text-brand-accent">Local Tours & Activities</p>
              <h2 className="luxury-section-title mt-6">Discover the city</h2>
              <p className="mt-6 font-body text-base sm:text-lg leading-[1.8] text-brand-body max-w-2xl">
                You are in a city where people are never bored. Immerse yourself in local art exhibitions, neighborhood events, seasonal activities, parks, dining rooms, and cultural spaces.
              </p>
            </div>

            {/* City Cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {cityMoments.map((moment, index) => (
                <Link
                  key={moment.title}
                  href={moment.href}
                  className="group overflow-hidden bg-brand-cream border border-brand-border/30 shadow-subtle transition-all duration-700 ease-luxury hover:-translate-y-2 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-ui uppercase tracking-[0.2em] text-brand-accent font-medium">{moment.eyebrow}</p>
                    <h3 className="city-card-title mt-3 font-display text-2xl sm:text-3xl font-light text-brand-ink">{moment.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-brand-body">{moment.description}</p>
                    <div className="city-discover-link mt-5 inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 group-hover:gap-3 group-hover:text-brand-gold">
                      Discover More
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Office Section */}
        <section className="bg-brand-dark text-white">
          <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-14 lg:py-36">
            <div>
              <p className="editorial-overline text-brand-gold">Getting Here</p>
              <h2 className="mt-6 font-display font-light leading-[1.1] text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                Our corporate office
              </h2>
              <div className="mt-8 flex items-start gap-4 font-body text-sm text-white/65">
                <MapPin className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p className="mt-1">{contactInfo.city}</p>
                  <p className="mt-3">Email: {contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="border border-white/10 bg-white/[0.03] p-8 lg:p-10">
              <p className="editorial-overline text-brand-gold">Spend Your Time With Us</p>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-light leading-tight text-white">
                Book a room
              </h3>
              <p className="mt-5 font-body text-base sm:text-lg leading-relaxed text-white/60">
                Everything at Pentouz is designed to make your stay unforgettable.
              </p>
              <div className="mt-6 space-y-3 font-body text-sm text-white/70">
                <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors duration-300 hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[1]}
                </a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors duration-300 hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[0]}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="block transition-colors duration-300 hover:text-brand-gold">
                  {contactInfo.email}
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/destinations" className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 font-ui text-[11px] uppercase tracking-[0.2em] font-medium text-brand-ink transition-all duration-500 ease-luxury hover:bg-brand-gold hover:text-white">
                  Reserve Your Stay
                </Link>
                <Link href="/contact" className="btn-ghost-light inline-flex items-center justify-center gap-3 px-8 py-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          items={homepageFAQs}
          title="Questions About Your Stay"
          subtitle="Everything you need to know"
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
}
