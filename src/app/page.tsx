"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, destinations, testimonials } from "@/data/content";

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

const sectionIds = ["intro", "collection", "experiences", "gatherings", "city"] as const;
type SectionId = (typeof sectionIds)[number];

function useRevealSections() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({ hero: true });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) {
              setVisibleSections((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { visibleSections, sectionRefs };
}

export default function HomePage() {
  const { visibleSections, sectionRefs } = useRevealSections();
  const lavelle = destinations.find((destination) => destination.slug === "lavelle-road") || destinations[0];

  const setSectionRef = (id: SectionId) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  return (
    <>
      <Header />
      <main className="bg-[#f6efe5] text-brand-ink overflow-hidden">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/04._living_room_05._living_room.jpg"
              alt="The Pentouz luxury residences"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.04] animate-[fade-in-up_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.64)_38%,rgba(10,8,6,0.24)_72%,rgba(10,8,6,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.14),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.18)_0%,rgba(10,8,6,0)_28%,rgba(10,8,6,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
              <div className="max-w-5xl">
                <p className="luxury-kicker text-white/72 animate-fade-in-up">Welcome to The Pentouz, where luxury meets exclusivity</p>
                <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                  The ultimate experience of <em className="italic text-brand-gold">luxury</em> and space.
                </h1>
                <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                  Private penthouses, boutique city stays, and hillside escapes shaped around privacy, elegance, and the feeling of arriving somewhere rare.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white"
                  >
                    Explore Our Properties
                    <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                  </Link>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white/88 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
                  >
                    Speak to Concierge
                  </a>
                </div>
              </div>

              <div className="animate-fade-in-up [animation-delay:420ms] xl:justify-self-end xl:max-w-[440px]">
                <div className="luxury-panel border-white/15 bg-white/[0.08] text-white backdrop-blur-md">
                  <p className="luxury-kicker text-white/58">Featured Residence</p>
                  <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl">
                    {lavelle.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">{lavelle.copy}</p>
                  <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Location</p>
                      <p className="mt-2 text-sm text-white/84">Lavelle Road</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Setting</p>
                      <p className="mt-2 text-sm text-white/84">Boutique hotel</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Nearby</p>
                      <p className="mt-2 text-sm text-white/84">UB City, MG Road</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("intro")}
          data-section-id="intro"
          className="border-t border-[#e4d8c8] bg-[#f6efe5]"
        >
          <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-28">
            <div className={`transition-all duration-1000 ${visibleSections.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-accent">Stay Where The Action Is</p>
              <h2 className="luxury-section-title mt-5 max-w-xl">
                Prime locations, timeless comfort, and a more personal expression of luxury.
              </h2>
            </div>
            <div className={`space-y-6 text-base leading-8 text-brand-body sm:text-lg transition-all duration-1000 delay-150 ${visibleSections.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

        <section
          ref={setSectionRef("collection")}
          data-section-id="collection"
          className="bg-[#fbf7f0]"
        >
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-accent">Extraordinary Accommodations</p>
              <h2 className="luxury-section-title mt-5">Our properties</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className={`group overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.06)] transition-all duration-700 hover:-translate-y-2 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 25vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{destination.subtitle}</p>
                      <h3 className="mt-3 font-display text-3xl font-light leading-tight text-white">{destination.shortTitle}</h3>
                    </div>
                  </div>
                </Link>
              ))}
              <div className={`group overflow-hidden border border-dashed border-brand-border bg-[#efe7da] p-8 transition-all duration-700 hover:-translate-y-2 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${destinations.length * 90}ms` }}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Coming Soon</p>
                <h3 className="mt-4 font-display text-4xl font-light leading-tight text-brand-ink">New destinations</h3>
                <p className="mt-4 text-sm leading-7 text-brand-body">
                  The collection continues to grow with carefully chosen addresses that match the Pentouz standard of privacy, comfort, and memorable design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("experiences")}
          data-section-id="experiences"
          className="bg-[#161310] text-white"
        >
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div className={`transition-all duration-1000 ${visibleSections.experiences ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-gold">Enjoy the best moment of life</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Experience the luxury
              </h2>
            </div>
            <div className={`transition-all duration-1000 delay-150 ${visibleSections.experiences ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                The Pentouz offers a mix of urban excitement and serene escapades, making it a perfect blend of experiences. In the vibrant hubs of UB City and Indiranagar in Bangalore, indulge in world-class dining, high-end shopping, and buzzing nightlife. Explore art galleries, attend cultural events, or unwind at chic rooftop lounges with stunning city views.
              </p>
              <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
                For a serene retreat, head to Ooty, where lush tea gardens, misty hills, and tranquil lakes await. Enjoy scenic drives, nature trails, and cozy stays in charming surroundings. Whether you crave the energy of the city or the calm of the hills, The Pentouz promises unforgettable moments.
              </p>
              <div className="mt-8">
                <Link href="/experiences" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Start Exploring
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("gatherings")}
          data-section-id="gatherings"
          className="bg-[#f7f0e5]"
        >
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className={`transition-all duration-1000 ${visibleSections.gatherings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <p className="luxury-kicker text-brand-accent">High standards of hospitality</p>
                <h2 className="luxury-section-title mt-5">
                  Make your memorable get-togethers a reality.
                </h2>
                <p className="luxury-copy mt-6 text-brand-body">
                  Turn your celebrations into an unforgettable experience at our stunning destinations. Whether you’re looking for a private space with beautiful views or a vast terrace for intimate parties, we have the perfect setting.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className={`luxury-panel bg-white transition-all duration-1000 hover:-translate-y-1 ${visibleSections.gatherings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="text-brand-gold text-sm tracking-[0.2em]">★★★★★</p>
                    <p className="mt-5 text-sm leading-7 text-brand-body">“{testimonial.quote}”</p>
                    <div className="mt-6 border-t border-brand-border pt-4">
                      <p className="font-display text-2xl font-light text-brand-ink">{testimonial.name}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-muted">{testimonial.source}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("city")}
          data-section-id="city"
          className="bg-white"
        >
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.city ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-accent">Local Tours & Activities</p>
              <h2 className="luxury-section-title mt-5">Discover the city</h2>
              <p className="luxury-copy mt-6 text-brand-body">
                You are in a city where people are never bored. Immerse yourself in local art exhibitions, neighborhood events, seasonal activities, parks, dining rooms, and cultural spaces.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {cityMoments.map((moment, index) => (
                <Link
                  key={moment.title}
                  href={moment.href}
                  className={`group overflow-hidden bg-[#f8f2e8] shadow-[0_24px_80px_rgba(18,15,12,0.05)] transition-all duration-700 hover:-translate-y-2 ${visibleSections.city ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">{moment.eyebrow}</p>
                    <h3 className="mt-4 font-display text-3xl font-light text-brand-ink">{moment.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{moment.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-colors group-hover:text-brand-gold">
                      Discover More
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Getting Here</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Our corporate office
              </h2>
              <div className="mt-8 flex items-start gap-4 text-white/74">
                <MapPin className="mt-1 h-5 w-5 text-brand-gold" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                  <p className="mt-3">Email: {contactInfo.email}</p>
                </div>
              </div>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="luxury-kicker text-brand-gold">Spend Your Time With Us</p>
              <h3 className="mt-5 font-display text-4xl font-light leading-tight text-white">
                Book a room
              </h3>
              <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
                Everything at Pentouz is designed to make your stay unforgettable.
              </p>
              <div className="mt-8 space-y-2 text-sm text-white/82">
                <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[1]}
                </a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[0]}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="block transition-colors hover:text-brand-gold">
                  {contactInfo.email}
                </a>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
                  Reserve Your Stay
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
