import type { MetadataRoute } from "next";
import { destinations } from "@/data/content";
import { lavelleSeoPages } from "@/data/lavelleSeoPages";
import {
  genericSurroundingGuides,
  getAllKeywordArticleParams,
} from "@/data/lavelleTravelContent";
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
  "/editorial-policy",
  "/destinations/lavelle-road/near",
  "/travel",
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

  const travelHubEntries: MetadataRoute.Sitemap = lavelleSeoPages.map((page) => ({
    url: withSiteUrl(`/travel/near/${page.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.72,
  }));

  const keywordArticleEntries: MetadataRoute.Sitemap = getAllKeywordArticleParams().map(
    (params) => ({
      url: withSiteUrl(`/travel/near/${params.slug}/${params.article}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const genericGuideEntries: MetadataRoute.Sitemap = genericSurroundingGuides.map((guide) => ({
    url: withSiteUrl(`/travel/guides/${guide.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.74,
  }));

  return [
    ...staticEntries,
    ...destinationEntries,
    ...lavelleSeoEntries,
    ...travelHubEntries,
    ...keywordArticleEntries,
    ...genericGuideEntries,
  ];
}
