"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";
import { heroImage } from "@/data/content";

const heroVideo = "/hero-video.mp4";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsReady(true);
    });

    const videoTimer = setTimeout(() => {
      setVideoStarted(true);
    }, 1500);

    return () => clearTimeout(videoTimer);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Video/Image */}
      <div
        className={`absolute inset-0 transition-transform duration-[1.8s] ease-out ${
          isReady ? "scale-100" : "scale-105"
        }`}
      >
        {/* Animated placeholder */}
        <div
          className={`absolute inset-0 video-placeholder transition-opacity duration-1000 ${
            videoStarted && videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />

        {/* Fallback Image */}
        <Image
          src={heroImage}
          alt="The Pentouz Luxury Residence"
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            videoStarted ? (videoLoaded ? "opacity-0" : "opacity-100") : "opacity-100"
          }`}
          sizes="100vw"
          quality={90}
        />

        {/* Video Background */}
        {videoStarted && (
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            poster={heroImage}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20 w-10 h-10 sm:w-12 sm:h-12 border border-white/40 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-all duration-300 backdrop-blur-sm bg-black/20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        )}
      </button>

      {/* Editorial Content - Magazine Cover Style */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
        {/* Masthead */}
        <p
          className={`editorial-masthead mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          The Pentouz Living
        </p>

        {/* Gold Divider */}
        <div
          className={`editorial-divider mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            isReady ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        />

        {/* Main Headline */}
        <h1
          className={`editorial-headline text-white max-w-4xl transition-all duration-1000 ease-out ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Where Luxury
          <br />
          Meets <em className="italic text-brand-gold gold-glow">Soul</em>
        </h1>

        {/* Subtitle */}
        <p
          className={`editorial-subtitle mt-6 sm:mt-8 max-w-lg mx-auto transition-all duration-1000 ease-out ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          A journey through India&apos;s most extraordinary residences, where
          every stay becomes a chapter in your story.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-14 transition-all duration-1000 ease-out ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 bg-white text-brand-ink px-8 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brand-gold hover:text-white transition-all duration-500 btn-shimmer"
          >
            Discover Our Story
          </Link>
          <Link
            href="#booking"
            className="inline-flex items-center justify-center gap-3 border border-white/60 text-white px-8 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-all duration-500"
          >
            Book Your Stay
          </Link>
        </div>

        {/* Photo Credit */}
        <p
          className={`photo-credit absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          Photography by The Pentouz Studio &bull; Bangalore, India
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-white/40 overflow-hidden">
          <div className="w-full h-6 sm:h-8 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
