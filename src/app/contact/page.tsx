"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, destinations } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll("[data-hero-reveal]");
      gsap.fromTo(
        elements,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
        }
      );
    }

    // Form section animation
    if (formRef.current) {
      const elements = formRef.current.querySelectorAll("[data-reveal]");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Locations stagger
    if (locationsRef.current) {
      const cards = locationsRef.current.querySelectorAll(".location-card");
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you for your message. Our concierge team will respond within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://pentouz.com/wp-content/uploads/2025/01/4.-Reception-e1738559433177.jpeg"
              alt="Contact The Pentouz"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          </div>

          <div
            ref={heroRef}
            className="relative h-full flex flex-col justify-end items-center text-center text-white px-8 pb-24"
          >
            <p data-hero-reveal className="text-overline uppercase tracking-[0.4em] text-white/50 mb-6 font-light">
              Get in Touch
            </p>
            <h1 data-hero-reveal className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-8">
              We&apos;re Here to <em className="italic">Assist</em>
            </h1>
            <div data-hero-reveal className="w-20 h-px bg-white/30 mb-8" />
            <p data-hero-reveal className="text-lg text-white/60 max-w-2xl font-light">
              Our concierge team is available around the clock to ensure your experience is exceptional
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section ref={formRef} className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <p data-reveal className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                  Contact Details
                </p>
                <h2 data-reveal className="font-display text-display-sm lg:text-display-md font-light mb-8">
                  Reach <em className="italic">Us</em>
                </h2>
                <div data-reveal className="w-16 h-px bg-brand-accent mb-12" />

                <div data-reveal className="space-y-10">
                  {/* Address */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-brand-muted mb-2">
                        Headquarters
                      </p>
                      <p className="text-body-md text-brand-body leading-relaxed">
                        {contactInfo.address}
                        <br />
                        {contactInfo.city}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                        <Phone className="w-5 h-5 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-brand-muted mb-2">
                        Reservations
                      </p>
                      {contactInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block text-body-md text-brand-body hover:text-brand-accent transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                        <Mail className="w-5 h-5 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-brand-muted mb-2">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-body-md text-brand-body hover:text-brand-accent transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
                        <Clock className="w-5 h-5 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-brand-muted mb-2">
                        Concierge Hours
                      </p>
                      <p className="text-body-md text-brand-body">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-reveal className="lg:col-span-3 bg-brand-cream p-10 lg:p-16">
                <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                  Send a Message
                </p>
                <h3 className="font-display text-heading-xl font-light mb-8">
                  How Can We Help?
                </h3>
                <div className="w-12 h-px bg-brand-accent mb-10" />

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                        Property Interest
                      </label>
                      <select
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md appearance-none cursor-pointer"
                      >
                        <option value="">Select property</option>
                        {destinations.map((dest) => (
                          <option key={dest.slug} value={dest.slug}>
                            {dest.subtitle}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="text-caption uppercase tracking-[0.15em] text-brand-muted block mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white border-b border-brand-border py-4 px-4 outline-none focus:border-brand-accent transition-colors text-body-md resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-brand-ink text-white py-5 px-16 text-label uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 font-light disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section ref={locationsRef} className="py-32 lg:py-48 bg-brand-linen">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            {/* Header */}
            <div className="text-center mb-20">
              <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                Our Properties
              </p>
              <h2 className="font-display text-display-md lg:text-display-lg font-light">
                Visit <em className="italic">Us</em>
              </h2>
              <div className="w-16 h-px bg-brand-accent mx-auto mt-10" />
            </div>

            {/* Location Cards */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {destinations.map((dest) => (
                <div
                  key={dest.slug}
                  className="location-card group bg-white p-8 lg:p-10 hover:shadow-card transition-shadow duration-500"
                >
                  <div className="aspect-video relative overflow-hidden mb-8">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-overline uppercase tracking-[0.2em] text-brand-accent mb-3 font-light">
                    {dest.subtitle}
                  </p>
                  <h3 className="font-display text-heading-lg font-light mb-4">
                    {dest.shortTitle}
                  </h3>
                  <p className="text-body-sm text-brand-body mb-6 line-clamp-2">
                    {dest.copy}
                  </p>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="inline-flex items-center gap-3 text-caption uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors group/link"
                  >
                    <span>View Property</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
