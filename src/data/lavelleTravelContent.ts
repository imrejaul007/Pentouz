import {
  getLavelleSeoPage,
  getRelatedLavelleSeoPages,
  lavelleSeoPages,
} from "@/data/lavelleSeoPages";

export interface ArticleTemplate {
  slug: string;
  titlePrefix: string;
  intent: string;
  angle: string;
}

export interface GenericGuide {
  slug: string;
  title: string;
  subtitle: string;
  focusArea: string;
  keywords: string[];
  intro: string;
  highlights: string[];
  tips: string[];
}

export const keywordArticleTemplates: readonly ArticleTemplate[] = [
  {
    slug: "where-to-stay",
    titlePrefix: "Where to Stay Near",
    intent: "accommodation planning",
    angle: "location clarity and premium stay value",
  },
  {
    slug: "commute-guide",
    titlePrefix: "Commute Guide to",
    intent: "travel planning",
    angle: "time-saving movement from Lavelle Road",
  },
  {
    slug: "business-travel-playbook",
    titlePrefix: "Business Travel Playbook Near",
    intent: "corporate productivity",
    angle: "meeting-day structure with minimal friction",
  },
  {
    slug: "short-stay-guide",
    titlePrefix: "Short Stay Guide Near",
    intent: "1-2 day stay optimization",
    angle: "quick-check-in, fast access, and focused routines",
  },
  {
    slug: "extended-stay-guide",
    titlePrefix: "Extended Stay Guide Near",
    intent: "multi-day planning",
    angle: "comfort and consistency over longer schedules",
  },
  {
    slug: "local-area-guide",
    titlePrefix: "Local Area Guide Around",
    intent: "neighborhood exploration",
    angle: "food, meetings, and after-hours planning",
  },
] as const;

export const genericSurroundingGuides: readonly GenericGuide[] = [
  {
    slug: "best-things-to-do-in-mg-road-bangalore",
    title: "Best Things to Do in MG Road Bangalore",
    subtitle: "A practical luxury-city itinerary for travelers staying near Lavelle Road.",
    focusArea: "MG Road",
    keywords: ["things to do in MG Road Bangalore", "MG Road travel guide"],
    intro:
      "MG Road remains one of Bengaluru's most active central corridors for business, lifestyle, and evening movement. If you are based at Lavelle Road, it is an easy zone to structure around meetings and leisure windows.",
    highlights: [
      "Plan a morning walk around Cubbon Park before city traffic builds.",
      "Use mid-day windows for meetings around Residency Road and adjoining business pockets.",
      "Reserve evenings for Church Street dining and curated retail stops.",
    ],
    tips: [
      "Keep metro and cab options open to avoid single-route dependency.",
      "Choose fewer high-quality stops instead of rushed multi-point itineraries.",
      "End the day with a short return route to Lavelle Road for lower commute fatigue.",
    ],
  },
  {
    slug: "luxury-evening-walks-near-lavelle-road",
    title: "Luxury Evening Walks Near Lavelle Road",
    subtitle: "Slow-paced city experiences for guests who prefer calm premium evenings.",
    focusArea: "Lavelle Road",
    keywords: ["Lavelle Road evening guide", "walks near UB City"],
    intro:
      "Lavelle Road works exceptionally well for travelers who prefer refined, low-noise evenings after busy city schedules.",
    highlights: [
      "Start with a short heritage-oriented walk through central avenues.",
      "Use UB City as a dining and social anchor.",
      "Keep return transit short to preserve rest quality.",
    ],
    tips: [
      "Avoid over-packing plans on court or meeting days.",
      "Pre-book table slots during peak evening hours.",
      "Use walking plus short rides for best rhythm.",
    ],
  },
  {
    slug: "executive-breakfast-spots-around-ub-city",
    title: "Executive Breakfast Spots Around UB City",
    subtitle: "Morning meeting-friendly options near your Lavelle Road stay.",
    focusArea: "UB City",
    keywords: ["breakfast near UB City", "business breakfast Bangalore"],
    intro:
      "For corporate guests, a predictable breakfast circuit near UB City improves schedule discipline and reduces morning uncertainty.",
    highlights: [
      "Pick venues with reliable opening times and calm seating.",
      "Favor locations with fast billing and easy ride access.",
      "Use breakfast windows for low-pressure pre-meeting alignment.",
    ],
    tips: [
      "Target 45-minute breakfast slots on business days.",
      "Keep backup options within a 10-minute radius.",
      "Prioritize simple menus on presentation days.",
    ],
  },
  {
    slug: "court-day-itinerary-near-karnataka-high-court",
    title: "Court-Day Itinerary Near Karnataka High Court",
    subtitle: "A structured day plan for outstation advocates and legal teams.",
    focusArea: "Karnataka High Court",
    keywords: ["Karnataka High Court itinerary", "advocate travel Bangalore"],
    intro:
      "Legal travel days demand clarity, punctuality, and low-distraction logistics. A Lavelle Road base helps maintain this rhythm.",
    highlights: [
      "Start early with document checks and commute buffers.",
      "Keep midday windows for coordination calls and note preparation.",
      "Return to a central base for debrief, planning, and rest.",
    ],
    tips: [
      "Carry both digital and printed hearing essentials.",
      "Allocate fallback commute options.",
      "Block post-hearing planning time before evening meetings.",
    ],
  },
  {
    slug: "weekend-culture-trail-cubbon-park-to-museum-circuit",
    title: "Weekend Culture Trail: Cubbon Park to Museum Circuit",
    subtitle: "A premium, low-rush culture day from central Bengaluru.",
    focusArea: "Cubbon Park and Museum Belt",
    keywords: ["Cubbon Park itinerary", "museum trail Bangalore"],
    intro:
      "For leisure guests, central Bengaluru offers a culture-rich route that combines greenery, history, and art with manageable travel time.",
    highlights: [
      "Begin with a relaxed walk around Cubbon Park.",
      "Transition to museum stops in late morning hours.",
      "Close with a curated dinner near central commercial avenues.",
    ],
    tips: [
      "Keep footwear and weather layers practical.",
      "Check museum timings in advance.",
      "Keep one flexible slot for unplanned discoveries.",
    ],
  },
  {
    slug: "shopping-guide-ub-city-commercial-street-brigade-road",
    title: "Shopping Guide: UB City, Commercial Street, Brigade Road",
    subtitle: "How to plan premium and high-street shopping without city fatigue.",
    focusArea: "Central Shopping Circuit",
    keywords: ["shopping near UB City", "Commercial Street guide"],
    intro:
      "Bengaluru shopping works best when segmented by zone and energy level. Lavelle Road sits near a practical center point for this.",
    highlights: [
      "Start with premium curation around UB City.",
      "Move to Brigade Road for mixed retail energy.",
      "Use Commercial Street for dedicated high-street exploration.",
    ],
    tips: [
      "Split premium and bargain zones into separate windows.",
      "Travel light and use drop-offs strategically.",
      "Avoid peak-hour transfers between shopping clusters.",
    ],
  },
  {
    slug: "family-friendly-central-bangalore-day-plan",
    title: "Family-Friendly Central Bangalore Day Plan",
    subtitle: "Comfort-first routing for families staying near Lavelle Road.",
    focusArea: "Central Bengaluru",
    keywords: ["family day plan Bangalore", "central Bangalore with kids"],
    intro:
      "Families benefit from short-transfer plans, predictable meal stops, and rest-friendly pacing. Central stay positioning makes this easier.",
    highlights: [
      "Use green spaces for morning activity.",
      "Choose short-distance experiences around mid-day.",
      "Plan an early return for recovery and evening flexibility.",
    ],
    tips: [
      "Carry essentials in one compact kit.",
      "Prefer pre-booked entries where possible.",
      "Keep total daily movement realistic for all age groups.",
    ],
  },
  {
    slug: "nightlife-and-dining-circuit-around-lavelle-road",
    title: "Nightlife and Dining Circuit Around Lavelle Road",
    subtitle: "A balanced social itinerary for premium city guests.",
    focusArea: "Lavelle Road and adjoining districts",
    keywords: ["nightlife near Lavelle Road", "dining around UB City"],
    intro:
      "Lavelle Road enables guests to experience city nightlife without sacrificing next-day productivity.",
    highlights: [
      "Begin with early dinner at curated central venues.",
      "Use short transfer loops between social zones.",
      "Preserve late-night return simplicity.",
    ],
    tips: [
      "Reserve venues in advance on weekends.",
      "Plan transport before peak closing windows.",
      "Keep one low-noise option for post-dinner reset.",
    ],
  },
  {
    slug: "medical-visit-stay-guide-central-bengaluru",
    title: "Medical Visit Stay Guide in Central Bengaluru",
    subtitle: "Low-stress planning for families, attendants, and specialist consultations.",
    focusArea: "Central healthcare corridor",
    keywords: ["medical stay Bangalore", "hotel for hospital visitors"],
    intro:
      "Medical travel needs calm support, adaptable schedules, and clear movement planning between appointments and stay base.",
    highlights: [
      "Choose a central base for easier specialist access.",
      "Schedule buffers between consultations and diagnostics.",
      "Prioritize rest-ready room comfort for attendants.",
    ],
    tips: [
      "Keep reports and prescriptions in one organized folder.",
      "Confirm hospital departments and timing one day prior.",
      "Avoid long-distance stays that increase transfer strain.",
    ],
  },
  {
    slug: "airport-to-lavelle-road-arrival-guide",
    title: "Airport to Lavelle Road Arrival Guide",
    subtitle: "Smart arrival planning for domestic and international guests.",
    focusArea: "Kempegowda Airport to city core",
    keywords: ["airport to Lavelle Road", "Bangalore arrival guide"],
    intro:
      "First-day planning affects the full trip experience. A clear airport-to-city route plan reduces stress and protects your schedule.",
    highlights: [
      "Choose transfer mode by arrival time and luggage profile.",
      "Use a short reset window after check-in before meetings.",
      "Align first appointment timing with realistic city entry.",
    ],
    tips: [
      "Share ETA with the property before departure.",
      "Carry essentials in cabin-access luggage.",
      "Account for weather-driven traffic variability.",
    ],
  },
] as const;

function hashSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickVariant<T>(items: readonly T[], seed: number, offset = 0) {
  return items[(seed + offset) % items.length];
}

export function getArticleTitle(place: string, template: ArticleTemplate) {
  return `${template.titlePrefix} ${place}`;
}

export function getKeywordArticleNarrative(keywordSlug: string, articleSlug: string) {
  const keyword = getLavelleSeoPage(keywordSlug);
  const template = keywordArticleTemplates.find((item) => item.slug === articleSlug);

  if (!keyword || !template) return null;

  const seed = hashSeed(`${keywordSlug}-${articleSlug}`);
  const nearbyGuide = pickVariant(genericSurroundingGuides, seed);

  const lead = pickVariant(
    [
      `If you are planning around ${keyword.place}, this guide helps you structure a practical premium-city stay without guesswork.`,
      `${keyword.place} visitors usually prioritize time control, smooth transfers, and a stay base that supports both focus and recovery.`,
      `This article is designed for travelers searching ${keyword.keyword}, with decision-ready insights instead of generic travel copy.`,
    ],
    seed,
    1
  );

  const paragraphs = [
    `${lead} The Pentouz @ Lavelle Road fits this intent by combining central positioning, refined room quality, and direct booking support for ${keyword.audience}.`,
    `For ${template.intent}, travelers should evaluate location relevance first. ${template.angle} often impacts real trip outcomes more than short-term price differences. A central base allows better control across check-in, appointments, and evening planning.`,
    `Guests can combine this keyword-specific plan with nearby neighborhood experiences to improve overall trip value. We recommend pairing this route with our ${nearbyGuide.focusArea} guide for better day sequencing and lower commute fatigue.`,
  ];

  const bulletPoints = [
    `Primary keyword intent: ${keyword.keyword}`,
    `Best suited for: ${keyword.audience}`,
    `Stay strategy: use Lavelle Road as the central planning anchor`,
    `Supporting guide: ${nearbyGuide.title}`,
  ];

  const faqs = [
    {
      question: `How does this ${template.intent} guide help near ${keyword.place}?`,
      answer:
        `It gives a practical way to organize stay, commute, and day structure when your itinerary is centered around ${keyword.place}.`,
    },
    {
      question: `Is Lavelle Road suitable for ${keyword.audience}?`,
      answer:
        "Yes. Lavelle Road is a central premium zone that supports predictable movement across legal, corporate, and city-service routes.",
    },
    {
      question: `Can I combine this plan with nearby leisure or dining activities?`,
      answer:
        `Yes. For balanced city days, pair this route with nearby guides such as ${nearbyGuide.title.toLowerCase()}.`,
    },
  ];

  return {
    keyword,
    template,
    nearbyGuide,
    paragraphs,
    bulletPoints,
    faqs,
  };
}

export function getAllKeywordArticleParams() {
  return lavelleSeoPages.flatMap((keyword) =>
    keywordArticleTemplates.map((article) => ({
      slug: keyword.slug,
      article: article.slug,
    }))
  );
}

export function getKeywordHubArticles(keywordSlug: string) {
  const keyword = getLavelleSeoPage(keywordSlug);
  if (!keyword) return [];

  return keywordArticleTemplates.map((article) => ({
    ...article,
    title: getArticleTitle(keyword.place, article),
    href: `/travel/near/${keywordSlug}/${article.slug}`,
  }));
}

export function getRelatedKeywordArticleLinks(keywordSlug: string, articleSlug: string) {
  const inCluster = keywordArticleTemplates
    .filter((item) => item.slug !== articleSlug)
    .slice(0, 4)
    .map((item) => ({
      slug: keywordSlug,
      article: item.slug,
      titlePrefix: item.titlePrefix,
    }));

  const crossKeyword = getRelatedLavelleSeoPages(keywordSlug, 2).map((item) => ({
    slug: item.slug,
    article: articleSlug,
    titlePrefix:
      keywordArticleTemplates.find((template) => template.slug === articleSlug)
        ?.titlePrefix || "Guide Near",
  }));

  return [...inCluster, ...crossKeyword];
}

export function getGenericGuide(slug: string) {
  return genericSurroundingGuides.find((guide) => guide.slug === slug);
}

export function getGenericGuideParams() {
  return genericSurroundingGuides.map((guide) => ({ slug: guide.slug }));
}
