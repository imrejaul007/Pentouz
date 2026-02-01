import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const bodyFont = Montserrat({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

// Premium elegant serif font
const displayFont = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased bg-white text-brand-ink grain-overlay`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
