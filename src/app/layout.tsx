import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { SmoothScroll, PageTransition } from "@/components/ClientComponents";
import { withSiteUrl } from "@/lib/site";
import { generatePageSchemas } from "@/lib/schema";

// Premium body font - elegant serif for warmth
const bodyFont = Lora({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// Premium display font - refined serif for headlines
const displayFont = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// UI/Label font - clean sans-serif for interface elements
const uiFont = Inter({
  variable: "--font-ui-family",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thepentouz.com"),
  title: {
    default: "The Pentouz | Luxury Residences & Suites",
    template: "%s | The Pentouz",
  },
  description:
    "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty. Reserve bespoke stays with concierge hospitality and lifestyle experiences.",
  keywords: [
    "luxury accommodation Bangalore",
    "boutique hotel Lavelle Road",
    "penthouse stay Indiranagar",
    "Chikmagalur homestay",
    "Ooty retreat",
    "The Pentouz",
    "luxury suites India",
  ],
  authors: [{ name: "The Pentouz" }],
  creator: "The Pentouz",
  publisher: "The Pentouz",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: withSiteUrl("/"),
    siteName: "The Pentouz",
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty. Reserve bespoke stays with concierge hospitality and lifestyle experiences.",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz - Luxury Residences & Suites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty.",
    images: [withSiteUrl("/og-image.jpg")],
    creator: "@thepentouzofficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: withSiteUrl("/"),
    languages: {
      "en-IN": "en-IN",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate comprehensive schema for homepage
  const homepageSchema = generatePageSchemas({ type: "homepage" });

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical font subsets - reduce initial font payload */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap"
          as="style"
        />

        {/* Comprehensive Schema.org structured data for AI search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${uiFont.variable} antialiased bg-brand-cream text-brand-ink`}
      >
        {/* Skip to main content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:rounded-full focus:bg-brand-gold focus:px-6 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-brand-ink focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <div className="noise-overlay" aria-hidden="true" />

        <Preloader />
        <ScrollProgress />
        <SmoothScroll>
          <PageTransition>
            <main id="main-content">
              {children}
            </main>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
