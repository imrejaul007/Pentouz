import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz Hillside",
  description: propertyEditorialContent["pentouz-hillside"]["gallery"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/gallery"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["pentouz-hillside"]["gallery"]} />;
}
