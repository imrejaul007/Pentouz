import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { withSiteUrl } from "@/lib/site";

const bodyFont = Montserrat({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

// Premium elegant serif font
const displayFont = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pentouz | Luxury Residences & Suites",
  description:
    "Luxury residences and suites by The Pentouz across Bangalore and Ooty. Reserve bespoke stays with concierge hospitality and lifestyle experiences.",
  openGraph: {
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore and Ooty. Reserve bespoke stays with concierge hospitality and lifestyle experiences.",
    url: withSiteUrl("/"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz | Luxury Residences & Suites",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore and Ooty. Reserve bespoke stays with concierge hospitality and lifestyle experiences.",
    images: [withSiteUrl("/og-image.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "The Pentouz",
        url: withSiteUrl("/"),
        logo: withSiteUrl("/logo-white.png"),
      },
      {
        "@type": "WebSite",
        name: "The Pentouz",
        url: withSiteUrl("/"),
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased bg-white text-brand-ink`}
      >
        {/* Skip to main content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:rounded-full focus:bg-brand-gold focus:px-6 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-brand-ink focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <div className="noise-overlay" aria-hidden="true" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Preloader />
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
