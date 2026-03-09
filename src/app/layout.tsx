import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
