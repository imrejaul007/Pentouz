import {
  getLavelleSeoPage,
  getRelatedLavelleSeoPages,
  lavelleSeoPages,
} from "@/data/lavelleSeoPages";
import { getManualArticleOverride } from "@/data/lavelleManualArticleOverrides";

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

export interface NearbyAnchor {
  name: string;
  type: "office" | "government" | "court" | "landmark" | "transport" | "service";
  whyItMatters: string;
}

export type IntentType = "legal" | "business" | "medical" | "leisure";

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
    slug: "where-to-stay-near-ub-city-bangalore",
    title: "Where to Stay Near UB City Bangalore",
    subtitle: "Premium-location planning for executives, shoppers, and leisure travelers.",
    focusArea: "UB City",
    keywords: ["hotel near UB City Bangalore", "where to stay near UB City"],
    intro:
      "UB City travelers usually prioritize central movement, premium stay comfort, and easy access to both meetings and evening plans.",
    highlights: [
      "Use Lavelle Road as a short-transfer base for UB City appointments.",
      "Plan separate windows for meetings, dining, and retail.",
      "Keep evenings close to central corridors to avoid return delays.",
    ],
    tips: [
      "Pre-confirm your meeting and dining slots before arrival.",
      "Use a compact itinerary instead of city-wide overplanning.",
      "Anchor your stay around predictable city-core movement.",
    ],
  },
  {
    slug: "hotel-guide-near-vidhana-soudha-and-vikasa-soudha",
    title: "Hotel Guide Near Vidhana Soudha and Vikasa Soudha",
    subtitle: "Practical stay planning for official visits and government workflows.",
    focusArea: "Vidhana Soudha Zone",
    keywords: ["hotel near Vidhana Soudha", "stay near Vikasa Soudha Bangalore"],
    intro:
      "Government-related travel requires punctuality and schedule buffers. A central Lavelle Road base helps keep official movement structured.",
    highlights: [
      "Keep reporting-time buffers for security and administrative flow.",
      "Use central routing for post-appointment office meetings.",
      "Pair official visits with short commute recovery windows.",
    ],
    tips: [
      "Carry both digital and physical copies of required documents.",
      "Confirm department timing one day prior.",
      "Avoid long-distance accommodation for same-day official work.",
    ],
  },
  {
    slug: "lawyer-stay-playbook-near-attara-kacheri",
    title: "Lawyer Stay Playbook Near Attara Kacheri",
    subtitle: "A legal-travel framework for outstation advocates handling court schedules.",
    focusArea: "Attara Kacheri",
    keywords: ["hotel near Attara Kacheri", "advocate accommodation Bangalore"],
    intro:
      "Court-focused travel is often high pressure. A stable stay plan around Lavelle Road helps advocates preserve focus across hearings and prep windows.",
    highlights: [
      "Begin with early-morning case and document alignment.",
      "Use the midday window for legal team coordination and filings.",
      "Return to a quiet premium base for next-day preparation.",
    ],
    tips: [
      "Add fallback commute options before hearing day.",
      "Keep essentials in one legal-ready carry kit.",
      "Use direct booking channels for short-notice date shifts.",
    ],
  },
  {
    slug: "hotel-near-mg-road-metro-commute-first-guide",
    title: "Hotel Near MG Road Metro: Commute-First Guide",
    subtitle: "How to optimize central Bengaluru movement with metro-linked flexibility.",
    focusArea: "MG Road Metro Corridor",
    keywords: ["hotel near MG Road Metro", "stay near metro Bangalore central"],
    intro:
      "When city traffic is unpredictable, metro-proximate movement becomes a practical backup. Lavelle Road stays provide multi-route access for this pattern.",
    highlights: [
      "Pair metro and cab options by time-of-day demand.",
      "Use nearest stations for schedule-protected transfers.",
      "Return to Lavelle Road for low-noise evening recovery.",
    ],
    tips: [
      "Keep one fallback route in every itinerary block.",
      "Account for peak interchange time in evening slots.",
      "Plan flexible departure windows on high-load days.",
    ],
  },
  {
    slug: "business-trip-hotel-near-brigade-road-and-residency-road",
    title: "Business Trip Hotel Near Brigade Road and Residency Road",
    subtitle: "A central stay strategy for meeting-heavy Bengaluru workdays.",
    focusArea: "Brigade and Residency Corridor",
    keywords: ["business hotel near Brigade Road", "stay near Residency Road Bangalore"],
    intro:
      "Executives in this corridor need predictable routing between offices, partner meetings, and evening business dinners.",
    highlights: [
      "Block commute windows around core business meetings.",
      "Use Lavelle Road proximity for efficient back-to-back sessions.",
      "Reduce late-night cross-city transfers for better next-day readiness.",
    ],
    tips: [
      "Keep meetings clustered by micro-zone where possible.",
      "Choose a central property with strong rest quality.",
      "Confirm transport logistics before peak business hours.",
    ],
  },
  {
    slug: "premium-stay-near-cubbon-park-for-walk-and-work-routines",
    title: "Premium Stay Near Cubbon Park for Walk-and-Work Routines",
    subtitle: "Blend wellness mornings with productive central-city schedules.",
    focusArea: "Cubbon Park",
    keywords: ["hotel near Cubbon Park", "premium stay central Bangalore"],
    intro:
      "Many guests want a city stay that supports both physical reset and high-focus daytime plans. Cubbon Park proximity helps create that balance.",
    highlights: [
      "Start the day with a short green-space walk.",
      "Transition into central meetings without long transfers.",
      "Close with an evening dining loop near Lavelle Road.",
    ],
    tips: [
      "Keep morning routines simple and repeatable.",
      "Avoid overloading the day with unnecessary stops.",
      "Use central return plans to reduce decision fatigue.",
    ],
  },
  {
    slug: "hotel-near-bangalore-cantonment-for-outstation-arrivals",
    title: "Hotel Near Bangalore Cantonment for Outstation Arrivals",
    subtitle: "Rail-arrival planning for legal, business, and family travel.",
    focusArea: "Bengaluru Cantonment Station",
    keywords: ["hotel near Bangalore Cantonment", "stay near Bengaluru Cantonment station"],
    intro:
      "Rail-based arrivals need smooth transition into central stays. Lavelle Road is practical for travelers combining station access with city commitments.",
    highlights: [
      "Use direct transfer plans from station to stay.",
      "Build a short reset window before first appointment.",
      "Keep central routes open for follow-up meetings or errands.",
    ],
    tips: [
      "Share arrival ETA with property before departure.",
      "Carry priority documents in hand luggage.",
      "Use location-first booking for same-day city movement.",
    ],
  },
  {
    slug: "stay-near-commercial-street-shopping-with-lavelle-base",
    title: "Stay Near Commercial Street Shopping with a Lavelle Base",
    subtitle: "How to enjoy high-street shopping without long commute fatigue.",
    focusArea: "Commercial Street",
    keywords: ["hotel near Commercial Street Bangalore", "shopping stay Bangalore"],
    intro:
      "Commercial Street visitors often combine shopping with meetings and evening plans. A Lavelle Road base keeps the day efficient.",
    highlights: [
      "Divide high-street and premium shopping into separate slots.",
      "Use short-transfer returns between shopping legs.",
      "Plan post-shopping rest before evening commitments.",
    ],
    tips: [
      "Travel light and keep drop-off points pre-planned.",
      "Avoid peak-hour movement across multiple shopping zones.",
      "Use central booking for flexible city repositioning.",
    ],
  },
  {
    slug: "corporate-stay-near-manyata-tech-meetings-central-bangalore",
    title: "Corporate Stay for Manyata-Tech Meetings from Central Bangalore",
    subtitle: "A realistic central-stay approach for tech and partner meetings.",
    focusArea: "Manyata and Tech Meeting Routes",
    keywords: ["corporate hotel Bangalore central", "business stay near Manyata travel route"],
    intro:
      "Even when meetings happen in outer tech corridors, many travelers prefer central premium stays for evening quality and wider city access.",
    highlights: [
      "Start earlier for tech-corridor commute reliability.",
      "Use Lavelle Road as your evening recovery and networking base.",
      "Keep flexible buffers for cross-city return movement.",
    ],
    tips: [
      "Cluster tech-side meetings into single route windows.",
      "Avoid unnecessary midday location switches.",
      "Use direct support channels for schedule changes.",
    ],
  },
  {
    slug: "weekend-luxury-itinerary-ub-city-cubbon-and-lavelle",
    title: "Weekend Luxury Itinerary: UB City, Cubbon, and Lavelle",
    subtitle: "A premium two-day plan for city guests who prefer quality over rush.",
    focusArea: "Lavelle Central Loop",
    keywords: ["luxury weekend Bangalore", "Lavelle Road itinerary"],
    intro:
      "This route is designed for guests who want a relaxed premium weekend with strong location value and low transfer stress.",
    highlights: [
      "Day 1: central dining, retail, and evening social route.",
      "Day 2: morning green-space rhythm with cultural stops.",
      "Keep both days anchored to a central Lavelle Road return.",
    ],
    tips: [
      "Reserve key venues before weekend peak demand.",
      "Prefer fewer premium experiences over rushed checklists.",
      "Use late checkout options when travel timing allows.",
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

function buildCategoryAnchors(category: string, place: string): NearbyAnchor[] {
  if (category === "Legal & Courts") {
    return [
      {
        name: "Karnataka High Court Legal Belt",
        type: "court",
        whyItMatters: "Useful for hearing-day movement and legal office coordination.",
      },
      {
        name: "Vidhana Soudha Administrative Zone",
        type: "government",
        whyItMatters: "Supports official documentation and related city errands.",
      },
      {
        name: "MG Road Metro Corridor",
        type: "transport",
        whyItMatters: "Gives backup commute options when traffic patterns shift.",
      },
    ];
  }

  if (category === "Government Offices") {
    return [
      {
        name: "Vidhana Soudha - Vikasa Soudha Cluster",
        type: "government",
        whyItMatters: "Central for ministry and administration-led appointments.",
      },
      {
        name: "UB City - Lavelle Office Stretch",
        type: "office",
        whyItMatters: "Useful for consultant meetings after official visits.",
      },
      {
        name: "Cubbon Park Metro Access",
        type: "transport",
        whyItMatters: "Adds flexible route planning on fixed-time appointment days.",
      },
    ];
  }

  if (category === "Business Districts") {
    return [
      {
        name: "UB City Commercial Core",
        type: "office",
        whyItMatters: "High concentration of executive meetings and premium dining.",
      },
      {
        name: "MG Road - Residency Road Connector",
        type: "office",
        whyItMatters: "Strong corridor for back-to-back city business movement.",
      },
      {
        name: "Bengaluru Cantonment Rail Link",
        type: "transport",
        whyItMatters: "Useful for outstation client and consultant arrivals.",
      },
    ];
  }

  if (category === "Healthcare & Services") {
    return [
      {
        name: "Central Hospital Consultation Belt",
        type: "service",
        whyItMatters: "Reduces transfer strain for appointment-focused days.",
      },
      {
        name: "Documentation and Service Office Zone",
        type: "service",
        whyItMatters: "Helps combine essential city tasks into one structured day.",
      },
      {
        name: "MG Road Mobility Corridor",
        type: "transport",
        whyItMatters: "Provides route flexibility between appointments and stay.",
      },
    ];
  }

  if (category === "Landmarks & Culture") {
    return [
      {
        name: "Cubbon Park Culture Circuit",
        type: "landmark",
        whyItMatters: "Supports relaxed day pacing and short-distance cultural routing.",
      },
      {
        name: "UB City Lifestyle District",
        type: "landmark",
        whyItMatters: "Ideal for dining, social evenings, and premium retail windows.",
      },
      {
        name: "Church Street - Brigade Connector",
        type: "landmark",
        whyItMatters: "Useful for post-visit leisure and city atmosphere.",
      },
    ];
  }

  return [
    {
      name: "MG Road Metro and Transit Band",
      type: "transport",
      whyItMatters: "Offers predictable city access during peak-hour windows.",
    },
    {
      name: "KSR and Cantonment Rail Connectors",
      type: "transport",
      whyItMatters: "Supports intercity arrivals with central onward movement.",
    },
    {
      name: `${place} City Access Corridor`,
      type: "transport",
      whyItMatters: "Keeps transfer planning flexible around schedule changes.",
    },
  ];
}

function getKeywordSpecificAnchors(keywordSlug: string, place: string): NearbyAnchor[] | null {
  const map: Record<string, NearbyAnchor[]> = {
    "karnataka-high-court": [
      {
        name: "Karnataka High Court",
        type: "court",
        whyItMatters: "Primary hearing destination for legal travelers.",
      },
      {
        name: "Attara Kacheri",
        type: "court",
        whyItMatters: "Historic legal landmark and court-visit reference point.",
      },
      {
        name: "Vidhana Soudha",
        type: "government",
        whyItMatters: "Important nearby administrative anchor for official tasks.",
      },
    ],
    "ub-city": [
      {
        name: "UB City",
        type: "landmark",
        whyItMatters: "Premium business and lifestyle center near Lavelle Road.",
      },
      {
        name: "Lavelle Road Commercial Stretch",
        type: "office",
        whyItMatters: "Useful for executive meetings and concierge-led city plans.",
      },
      {
        name: "MG Road",
        type: "landmark",
        whyItMatters: "Adds shopping and transit flexibility to UB City itineraries.",
      },
    ],
    "mg-road": [
      {
        name: "MG Road",
        type: "landmark",
        whyItMatters: "Core corridor for business and city access.",
      },
      {
        name: "Church Street",
        type: "landmark",
        whyItMatters: "Dining and culture extension for evening planning.",
      },
      {
        name: "MG Road Metro Station",
        type: "transport",
        whyItMatters: "Predictable fallback for central-route commute planning.",
      },
    ],
  };

  return map[keywordSlug] || null;
}

export function getNearbyAnchorsForKeyword(keywordSlug: string) {
  const keyword = getLavelleSeoPage(keywordSlug);
  if (!keyword) return [];

  const specific = getKeywordSpecificAnchors(keywordSlug, keyword.place);
  return specific || buildCategoryAnchors(keyword.category, keyword.place);
}

export function getIntentTypeForKeyword(keywordSlug: string): IntentType {
  const keyword = getLavelleSeoPage(keywordSlug);
  if (!keyword) return "business";

  if (keyword.category === "Legal & Courts") return "legal";
  if (keyword.category === "Landmarks & Culture") return "leisure";

  if (keyword.category === "Healthcare & Services") {
    const medicalSlugSignals = ["hospital", "hcg", "medical", "cancer"];
    if (medicalSlugSignals.some((signal) => keyword.slug.includes(signal))) {
      return "medical";
    }
    return "business";
  }

  return "business";
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
  const anchors = getNearbyAnchorsForKeyword(keywordSlug).slice(0, 3);
  const manualOverride = getManualArticleOverride(keywordSlug, articleSlug);

  const lead = pickVariant(
    [
      `If you are planning around ${keyword.place}, this guide helps you structure a practical premium-city stay without guesswork.`,
      `${keyword.place} visitors usually prioritize time control, smooth transfers, and a stay base that supports both focus and recovery.`,
      `This article is designed for travelers searching ${keyword.keyword}, with decision-ready insights instead of generic travel copy.`,
    ],
    seed,
    1
  );

  const operationalLens = pickVariant(
    [
      "The strongest results come from reducing avoidable movement and protecting high-focus hours.",
      "Better trip outcomes usually come from route clarity, not schedule overloading.",
      "Decision quality improves when stay, commute, and appointment flow are planned together.",
    ],
    seed,
    4
  );

  const serviceLens = pickVariant(
    [
      "Travelers value fast response, clean communication, and a room setup that supports recovery after city pressure.",
      "Service consistency often matters more than discount-led decisions for this intent type.",
      "A premium base becomes practical when plans include long days and variable timelines.",
    ],
    seed,
    5
  );

  const anchorNarrative = anchors
    .map((anchor) => `${anchor.name} (${anchor.whyItMatters})`)
    .join("; ");

  const activeLead = manualOverride?.lead || lead;
  const baseParagraphs = manualOverride
    ? manualOverride.paragraphs
    : [
        `${lead} The Pentouz @ Lavelle Road fits this intent by combining central positioning, refined room quality, and direct booking support for ${keyword.audience}.`,
        `For ${template.intent}, travelers should evaluate location relevance first. ${template.angle} often impacts real trip outcomes more than short-term price differences. A central base allows better control across check-in, appointments, and evening planning.`,
        `${operationalLens} Around ${keyword.place}, this is especially useful for ${keyword.audience} who need both productivity and low-friction city movement within the same day.`,
      ];

  const paragraphs = [
    ...baseParagraphs,
    `Key surrounding anchors that improve practical planning include ${anchorNarrative}. Mapping your day around these touchpoints helps reduce transfer uncertainty and maintain schedule integrity.`,
    `${serviceLens} Guests can combine this keyword-specific plan with nearby neighborhood experiences to improve overall trip value. We recommend pairing this route with our ${nearbyGuide.focusArea} guide for better day sequencing and lower commute fatigue.`,
  ];

  const bulletPoints = manualOverride
    ? [
        ...manualOverride.bulletPoints,
        `Nearby anchors: ${anchors.map((anchor) => anchor.name).join(" | ")}`,
        `Supporting guide: ${nearbyGuide.title}`,
      ]
    : [
        `Primary keyword intent: ${keyword.keyword}`,
        `Best suited for: ${keyword.audience}`,
        `Stay strategy: use Lavelle Road as the central planning anchor`,
        `Nearby anchors: ${anchors.map((anchor) => anchor.name).join(" | ")}`,
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
    lead: activeLead,
    nearbyGuide,
    anchors,
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
