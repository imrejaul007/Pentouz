import type { MetadataRoute } from "next";
import { destinations } from "@/data/content";
import { lavelleSeoPages } from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/about",
  "/collection",
  "/contact",
  "/destinations",
  "/experiences",
  "/gallery",
  "/offers",
  "/privacy-policy",
  "/prive-club",
  "/stories",
  "/terms",
  "/destinations/lavelle-road/near",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: withSiteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.flatMap((destination) => [
    {
      url: withSiteUrl(`/destinations/${destination.slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: withSiteUrl(`/destinations/${destination.slug}/living`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ]);

  const lavelleSeoEntries: MetadataRoute.Sitemap = lavelleSeoPages.map((page) => ({
    url: withSiteUrl(`/destinations/lavelle-road/near/${page.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticEntries, ...destinationEntries, ...lavelleSeoEntries];
}
