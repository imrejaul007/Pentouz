import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz",
  description: propertyEditorialContent["ooty"]["gallery"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/ooty/gallery"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["ooty"]["gallery"]} />;
}
