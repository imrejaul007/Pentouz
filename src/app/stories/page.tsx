"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredStory = {
  title: "The Art of Slow Living",
  subtitle: "A Philosophy",
  excerpt:
    "In a world that moves at relentless pace, The Pentouz offers a sanctuary where time takes on a different meaning. Discover how we've crafted spaces that invite you to pause, breathe, and truly live.",
  image: "https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg",
  readTime: "8 min read",
  category: "Philosophy",
  slug: "art-of-slow-living",
};

const stories = [
  {
    title: "Behind the Design: Indiranagar",
    subtitle: "Architecture",
    excerpt:
      "A conversation with our design team about creating an urban sanctuary that bridges tradition and contemporary luxury.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/11.-The-Terrace-Haven_Terrace-1024x683.jpg",
    readTime: "6 min read",
    category: "Design",
    slug: "behind-design-indiranagar",
  },
  {
    title: "Culinary Journey: Local Flavors",
    subtitle: "Gastronomy",
    excerpt:
      "Exploring the vibrant food scene of Bangalore through the eyes of our resident chef and his passion for local ingredients.",
    image: "https://pentouz.com/wp-content/uploads/elementor/thumbs/21.-Restaurant-r0jnyygf1k0ah24wt4u2efy4f5tmx0hugjfogzpfeo.jpeg",
    readTime: "5 min read",
    category: "Culinary",
    slug: "culinary-journey-local-flavors",
  },
  {
    title: "The Mountains Call: Ooty Retreat",
    subtitle: "Destinations",
    excerpt:
      "Escape to the misty hills where tea plantations meet luxury, and every morning begins with panoramic views of the Nilgiris.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    readTime: "7 min read",
    category: "Travel",
    slug: "mountains-call-ooty",
  },
  {
    title: "Wellness Rituals for Modern Life",
    subtitle: "Well-being",
    excerpt:
      "Our spa director shares ancient Ayurvedic practices reimagined for today's wellness-conscious traveler.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/TPH-MB-Bath-2-1.jpg",
    readTime: "6 min read",
    category: "Wellness",
    slug: "wellness-rituals-modern-life",
  },
  {
    title: "Artisan Spotlight: Handcrafted Details",
    subtitle: "Craftsmanship",
    excerpt:
      "Meet the local artisans whose handcrafted pieces bring warmth and authenticity to every corner of The Pentouz.",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
    readTime: "5 min read",
    category: "Artisans",
    slug: "artisan-spotlight-handcrafted",
  },
  {
    title: "A Day in Lavelle Road",
    subtitle: "City Guide",
    excerpt:
      "From morning yoga to evening cocktails, discover the perfect itinerary for experiencing Bangalore's most prestigious address.",
    image: "https://pentouz.com/wp-content/uploads/elementor/thumbs/04.-The-Skyline-Suite_Bedroom-r0jo1p5gz5rec45jsthw691ismb6d8dnu3xnv1n39c.jpg",
    readTime: "4 min read",
    category: "Guide",
    slug: "day-in-lavelle-road",
  },
];

const categories = ["All", "Philosophy", "Design", "Culinary", "Travel", "Wellness", "Artisans", "Guide"];

export default function StoriesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll("[data-reveal]"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[60vh] min-h-[400px] flex items-center justify-center bg-[#0a0a0a]"
      >
        <Image
          src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-10-2.jpg"
          alt="The Pentouz Stories"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            data-reveal
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-4 sm:mb-6"
          >
            The Pentouz Journal
          </p>
          <h1
            data-reveal
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
          >
            Stories & <em className="italic">Inspirations</em>
          </h1>
          <p
            data-reveal
            className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto"
          >
            Explore the world of The Pentouz through curated stories of design,
            culture, wellness, and the art of exceptional living.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-start sm:justify-center gap-4 sm:gap-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-[10px] sm:text-[11px] uppercase tracking-[0.15em] pb-2 whitespace-nowrap transition-colors ${
                  cat === "All"
                    ? "text-brand-ink border-b-2 border-brand-gold"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div ref={featuredRef} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="bg-brand-gold text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em]">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:py-8">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
                {featuredStory.category}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                {featuredStory.title}
              </h2>
              <p className="text-sm sm:text-base text-brand-muted italic mb-6">
                {featuredStory.subtitle}
              </p>
              <div className="w-16 h-[2px] bg-brand-gold mb-6" />
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-8">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-brand-muted">
                  <Clock className="w-4 h-4" />
                  <span>{featuredStory.readTime}</span>
                </div>
                <Link
                  href={`/stories/${featuredStory.slug}`}
                  className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors group"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              Latest Stories
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              From Our <em className="italic">Journal</em>
            </h2>
          </div>

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story) => (
              <article key={story.slug} className="group bg-white">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-brand-ink">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-gold mb-2">
                    {story.subtitle}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-3 group-hover:text-brand-gold transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-4 line-clamp-2">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                    <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-brand-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{story.readTime}</span>
                    </div>
                    <Link
                      href={`/stories/${story.slug}`}
                      className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors group/link"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 sm:mt-16">
            <button className="inline-flex items-center gap-3 border border-brand-ink px-8 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-4">
            Stay Inspired
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">
            Subscribe to Our Journal
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8">
            Receive our latest stories, travel inspirations, and exclusive offers directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3.5 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-brand-ink transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
