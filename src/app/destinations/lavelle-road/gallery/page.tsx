import type { Metadata } from "next";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz",
  description: propertyEditorialContent["lavelle-road"]["gallery"].intro,
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road/gallery",
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["lavelle-road"]["gallery"]} />;
}
