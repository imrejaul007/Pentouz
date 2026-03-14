import type { Metadata } from "next";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Rooms | The Pentouz",
  description: propertyEditorialContent["indiranagar"]["rooms"].intro,
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar/rooms",
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["indiranagar"]["rooms"]} />;
}
