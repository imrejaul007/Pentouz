"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17120e] text-white min-h-screen flex flex-col items-center justify-center px-5">
        <div className="text-center max-w-lg">
          {/* Decorative divider */}
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px w-16 bg-brand-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
            <div className="h-px w-16 bg-brand-gold/40" />
          </div>

          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-6">
            Something went wrong
          </p>

          <h1 className="font-display text-5xl font-light text-white leading-tight mb-6">
            We encountered an error.
          </h1>

          <p className="text-sm leading-7 text-white/60 mb-4">
            Our team has been notified. Please try again or return to the home page.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <p className="text-xs text-white/40 font-mono mt-4 p-3 border border-white/10 rounded bg-white/[0.04] text-left">
              {error.message}
            </p>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-[#17120e] transition-all duration-500 hover:bg-brand-gold hover:text-white"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/80 transition-all duration-500 hover:border-brand-gold hover:text-brand-gold"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
