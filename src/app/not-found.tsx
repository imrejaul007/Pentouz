import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | The Pentouz",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#15120f] text-white"
      >
        {/* Background atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,16,13,0.3)_0%,rgba(12,10,8,1)_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(196,160,97,0.06),transparent_50%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-gold/8" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/4" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-5 sm:px-8 max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="luxury-kicker text-brand-gold/80 animate-fade-in-up">404</p>

          {/* Decorative line */}
          <div className="mt-6 mx-auto w-12 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent animate-fade-in-up [animation-delay:80ms]" />

          {/* Heading */}
          <h1
            className="mt-8 font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem] font-light leading-none text-white animate-fade-in-up [animation-delay:160ms]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Page Not Found
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-md mx-auto animate-fade-in-up [animation-delay:280ms]">
            The page you are looking for may have moved, been removed, or perhaps never existed. Let us guide you back.
          </p>

          {/* Decorative divider */}
          <div className="mt-10 mx-auto w-8 h-[1px] bg-white/20 animate-fade-in-up [animation-delay:360ms]" />

          {/* Actions */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:440ms]">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white"
            >
              Return Home
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white/88 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Bottom attribution */}
        <div className="absolute bottom-10 left-0 right-0 text-center animate-fade-in-up [animation-delay:560ms]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
            The Pentouz Residences
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
