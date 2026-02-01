"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { destinations, heroImage } from "@/data/content";

export default function Hero() {
  return (
    <>
      {/* Hero Section - Full viewport */}
      <section className="relative h-screen min-h-[900px]">
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
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </div>

        {/* Content - Centered */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-8">
          <p className="text-overline uppercase tracking-[0.4em] text-white/50 mb-8 font-light">
            Luxury Residences
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display-hero font-light max-w-6xl mb-10 leading-[1.05]">
            Where <em className="italic font-normal">Luxury</em><br className="hidden md:block" /> Meets Serenity
          </h1>
          <div className="w-20 h-px bg-white/30 mb-10" />
          <p className="text-lg md:text-xl lg:text-body-xl text-white/60 max-w-2xl mb-16 font-light tracking-wide">
            Boutique residences in the heart of Bangalore and the hills of Ooty
          </p>
          <a
            href="#properties"
            className="group flex flex-col items-center gap-5 text-white/60 hover:text-white transition-colors duration-500"
          >
            <span className="text-overline uppercase tracking-[0.3em] font-light">Discover</span>
            <div className="w-px h-12 bg-white/30 overflow-hidden">
              <div className="w-full h-full bg-white animate-scroll-down" />
            </div>
          </a>
        </div>

        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
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
    <section id="booking" className="bg-white py-24 lg:py-32 -mt-20 relative z-10">
      <div className="max-w-container-lg mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
            Plan Your Stay
          </p>
          <h2 className="font-display text-display-sm lg:text-display-md font-light">
            Check <em className="italic">Availability</em>
          </h2>
        </div>

        {/* Booking Form */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-end">
            {/* Property */}
            <div className="space-y-4">
              <label className="text-overline uppercase tracking-[0.2em] text-brand-muted block font-light">
                Property
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-body-md cursor-pointer appearance-none"
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
            <div className="space-y-4">
              <label className="text-overline uppercase tracking-[0.2em] text-brand-muted block font-light">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-body-md"
              />
            </div>

            {/* Check Out */}
            <div className="space-y-4">
              <label className="text-overline uppercase tracking-[0.2em] text-brand-muted block font-light">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-body-md"
              />
            </div>

            {/* Guests */}
            <div className="space-y-4">
              <label className="text-overline uppercase tracking-[0.2em] text-brand-muted block font-light">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-body-md cursor-pointer appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center justify-center bg-brand-ink text-white py-5 px-16 text-label uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 font-light">
              Check Rates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
