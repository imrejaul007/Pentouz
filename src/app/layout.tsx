import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { SmoothScroll, PageTransition } from "@/components/ClientComponents";
import { withSiteUrl } from "@/lib/site";
import { generatePageSchemas } from "@/lib/schema";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  ],
  authors: [{ name: "The Pentouz" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: withSiteUrl("/"),
    siteName: "The Pentouz",
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty.",
    images: [{ url: withSiteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "The Pentouz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pentouz | Luxury Residences & Suites",
    description: "Luxury residences and suites across Bangalore, Chikmagalur, and Ooty.",
    images: [withSiteUrl("/og-image.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: withSiteUrl("/"),
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
  const homepageSchema = generatePageSchemas({ type: "homepage" });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap" as="style" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#c3a061] focus:px-6 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-white focus:shadow-lg focus:outline-none">
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
