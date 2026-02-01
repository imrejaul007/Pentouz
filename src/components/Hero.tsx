"use client";

import { useState } from "react";
import Image from "next/image";
import { destinations, heroImage } from "@/data/content";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] max-h-[900px]">
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
          {/* Gradient overlay - bottom to top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>

        {/* Content - Centered at bottom */}
        <div className="relative h-full flex flex-col justify-end items-center text-center text-white pb-24 lg:pb-32 px-6">
          <p className="text-overline uppercase tracking-[0.25em] text-white/70 mb-4">
            Bangalore & Ooty
          </p>
          <h1 className="font-display text-display-md lg:text-display-lg font-light max-w-4xl mb-6 text-balance">
            Where Luxury Meets Serenity
          </h1>
          <p className="text-body-lg text-white/80 max-w-2xl mb-10">
            Boutique residences in the heart of Bangalore and the hills of Ooty,
            crafted for discerning travelers.
          </p>
          <a
            href="#properties"
            className="px-8 py-4 border border-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-brand-ink transition-all duration-300"
          >
            Explore Properties
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-white animate-scroll-down" />
          </div>
        </div>
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
    <section id="booking" className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-overline uppercase tracking-[0.2em] text-brand-muted mb-2">
            Plan Your Stay
          </p>
          <h2 className="font-display text-display-sm">Check Availability</h2>
        </div>

        {/* Booking Form */}
        <div className="bg-white border border-brand-border p-6 lg:p-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-end">
            {/* Property */}
            <div className="lg:col-span-1 space-y-2">
              <label className="text-caption uppercase tracking-[0.1em] text-brand-muted block">
                Property
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md cursor-pointer"
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
            <div className="space-y-2">
              <label className="text-caption uppercase tracking-[0.1em] text-brand-muted block">
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
            <div className="space-y-2">
              <label className="text-caption uppercase tracking-[0.1em] text-brand-muted block">
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
            <div className="space-y-2">
              <label className="text-caption uppercase tracking-[0.1em] text-brand-muted block">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-brand-border pb-3 bg-transparent focus:border-brand-ink outline-none transition-colors text-body-md cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button className="bg-brand-primary text-white py-4 px-6 text-sm tracking-[0.1em] uppercase hover:bg-brand-primaryHover transition-colors">
              Check Rates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
