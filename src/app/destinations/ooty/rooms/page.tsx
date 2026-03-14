import type { Metadata } from "next";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Rooms | The Pentouz",
  description: propertyEditorialContent["ooty"]["rooms"].intro,
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/rooms",
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["ooty"]["rooms"]} />;
}
