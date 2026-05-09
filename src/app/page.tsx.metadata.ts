import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz | Luxury Residences & Suites",
  description:
    "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty. Boutique city stays at Lavelle Road, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
  keywords: [
    "The Pentouz",
    "luxury accommodation Bangalore",
    "boutique hotel Lavelle Road",
    "penthouse stay Indiranagar",
    "Chikmagalur luxury homestay",
    "Ooty boutique retreat",
    "luxury suites India",
    "The Pentouz Lavelle Road",
    "The Pentouz 100 Feet Road Indiranagar",
    "The Pentouz Hillside Chikmagalur",
    "The Pentouz Windsor Heights Ooty",
  ],
  openGraph: {
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites by The Pentouz across Bangalore, Chikmagalur, and Ooty. Boutique city stays, private penthouse, hillside retreat, and scenic getaway.",
    url: withSiteUrl("/"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz - Luxury Residences & Suites",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pentouz | Luxury Residences & Suites",
    description:
      "Luxury residences and suites across Bangalore, Chikmagalur, and Ooty.",
  },
  alternates: {
    canonical: withSiteUrl("/"),
  },
};
