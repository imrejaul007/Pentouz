"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { destinations, heroImage } from "@/data/content";

export default function Hero() {
  return (
    <>
      {/* Hero Section - Full viewport like Four Seasons */}
      <section className="relative h-screen min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="The Pentouz Luxury Residence"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content - Centered */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <p className="text-overline uppercase tracking-[0.3em] text-white/60 mb-6">
            Luxury Residences
          </p>
          <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-hero font-light max-w-5xl mb-8">
            Where <em className="italic">Luxury</em> Meets Serenity
          </h1>
          <p className="text-body-lg md:text-body-xl text-white/70 max-w-2xl mb-12 font-light">
            Boutique residences in the heart of Bangalore and the hills of Ooty
          </p>
          <a
            href="#properties"
            className="group flex flex-col items-center gap-4 text-white/80 hover:text-white transition-colors"
          >
            <span className="text-label uppercase tracking-[0.2em]">Discover</span>
            <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={1} />
          </a>
        </div>

        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Booking Widget Section */}
      <BookingWidget />
    </>
  );
}

function BookingWidget() {
  const [property, setProperty] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section id="booking" className="bg-white py-20 lg:py-28 -mt-16 relative z-10">
      <div className="max-w-container-lg mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-overline uppercase tracking-[0.25em] text-brand-muted mb-4">
            Plan Your Stay
          </p>
          <h2 className="font-display text-display-sm lg:text-display-md font-light">
            Check Availability
          </h2>
        </div>

        {/* Booking Form - Refined */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-end">
            {/* Property */}
            <div className="space-y-3">
              <label className="text-micro uppercase tracking-[0.15em] text-brand-muted block">
                Property
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md cursor-pointer appearance-none"
              >
                <option value="">Select property</option>
                {destinations.map((dest) => (
                  <option key={dest.slug} value={dest.slug}>
                    {dest.subtitle}
                  </option>
                ))}
              </select>
            </div>

            {/* Check In */}
            <div className="space-y-3">
              <label className="text-micro uppercase tracking-[0.15em] text-brand-muted block">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md"
              />
            </div>

            {/* Check Out */}
            <div className="space-y-3">
              <label className="text-micro uppercase tracking-[0.15em] text-brand-muted block">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md"
              />
            </div>

            {/* Guests */}
            <div className="space-y-3">
              <label className="text-micro uppercase tracking-[0.15em] text-brand-muted block">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md cursor-pointer appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button - Centered below */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center bg-brand-ink text-white py-4 px-12 text-label uppercase tracking-[0.15em] hover:bg-black transition-colors duration-300">
              Check Rates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
