import type { Metadata } from "next";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Gallery | The Pentouz",
  description: propertyEditorialContent["indiranagar"]["gallery"].intro,
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar/gallery",
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["indiranagar"]["gallery"]} />;
}
