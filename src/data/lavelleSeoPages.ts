export type LavelleSeoCategory =
  | "Legal & Courts"
  | "Government Offices"
  | "Business Districts"
  | "Healthcare & Services"
  | "Landmarks & Culture"
  | "Transport Hubs";

export interface LavelleSeoPage {
  slug: string;
  place: string;
  keyword: string;
  category: LavelleSeoCategory;
  audience: string;
}

export interface LavelleSeoCluster {
  slug: string;
  category: LavelleSeoCategory;
  title: string;
  description: string;
  travelPurpose: string;
}

export const lavelleSeoPages: readonly LavelleSeoPage[] = [
  { slug: "karnataka-high-court", place: "Karnataka High Court", keyword: "hotel near Karnataka High Court Bengaluru", category: "Legal & Courts", audience: "outstation advocates, litigants, and legal support teams" },
  { slug: "attara-kacheri", place: "Attara Kacheri", keyword: "hotel near Attara Kacheri Bangalore", category: "Legal & Courts", audience: "legal-history visitors and court attendees" },
  { slug: "city-civil-court", place: "City Civil Court Bengaluru", keyword: "hotel near City Civil Court Bengaluru", category: "Legal & Courts", audience: "civil court visitors and legal teams" },
  { slug: "mayo-hall-court", place: "Mayo Hall Court", keyword: "hotel near Mayo Hall Court Bangalore", category: "Legal & Courts", audience: "advocates and clients attending city hearings" },
  { slug: "family-court-bengaluru", place: "Family Court Bengaluru", keyword: "hotel near Family Court Bengaluru", category: "Legal & Courts", audience: "families, counsel, and visiting legal professionals" },
  { slug: "consumer-court-bangalore", place: "Consumer Court Bangalore", keyword: "hotel near Consumer Court Bangalore", category: "Legal & Courts", audience: "petitioners and consumer-law advocates" },
  { slug: "vidhana-soudha", place: "Vidhana Soudha", keyword: "hotel near Vidhana Soudha Bangalore", category: "Government Offices", audience: "official delegates and administrative visitors" },
  { slug: "vikasa-soudha", place: "Vikasa Soudha", keyword: "hotel near Vikasa Soudha Bangalore", category: "Government Offices", audience: "government meeting travelers and consultants" },
  { slug: "kpsc-office", place: "Karnataka Public Service Commission Office", keyword: "hotel near KPSC office Bangalore", category: "Government Offices", audience: "exam candidates, interview attendees, and guardians" },
  { slug: "bbmp-head-office", place: "BBMP Head Office", keyword: "hotel near BBMP head office Bangalore", category: "Government Offices", audience: "civic visitors and contractors" },
  { slug: "income-tax-office", place: "Income Tax Office Bengaluru", keyword: "hotel near Income Tax Office Bangalore", category: "Government Offices", audience: "tax consultants and business owners" },
  { slug: "passport-seva-kendra", place: "Passport Seva Kendra Bengaluru", keyword: "hotel near Passport Seva Kendra Bangalore", category: "Government Offices", audience: "applicants and documentation travelers" },
  { slug: "karnataka-secretariat", place: "Karnataka Secretariat", keyword: "hotel near Karnataka Secretariat Bangalore", category: "Government Offices", audience: "official visitors and policy teams" },
  { slug: "raj-bhavan-area", place: "Raj Bhavan Area", keyword: "hotel near Raj Bhavan Bangalore", category: "Government Offices", audience: "delegates and protocol travelers" },
  { slug: "ub-city", place: "UB City", keyword: "hotel near UB City Bangalore", category: "Business Districts", audience: "luxury shoppers and business travelers" },
  { slug: "mg-road", place: "MG Road", keyword: "hotel near MG Road Bangalore", category: "Business Districts", audience: "corporate travelers and short-stay guests" },
  { slug: "brigade-road", place: "Brigade Road", keyword: "hotel near Brigade Road Bangalore", category: "Business Districts", audience: "city visitors and retail travelers" },
  { slug: "church-street", place: "Church Street", keyword: "hotel near Church Street Bangalore", category: "Business Districts", audience: "young professionals and event travelers" },
  { slug: "residency-road", place: "Residency Road", keyword: "hotel near Residency Road Bangalore", category: "Business Districts", audience: "consultants and meeting travelers" },
  { slug: "richmond-road", place: "Richmond Road", keyword: "hotel near Richmond Road Bangalore", category: "Business Districts", audience: "corporate guests and project teams" },
  { slug: "st-marks-road", place: "St. Mark's Road", keyword: "hotel near St Marks Road Bangalore", category: "Business Districts", audience: "office visitors and premium city travelers" },
  { slug: "cunningham-road", place: "Cunningham Road", keyword: "hotel near Cunningham Road Bangalore", category: "Business Districts", audience: "executives and business delegates" },
  { slug: "lavelle-road-offices", place: "Lavelle Road Office Belt", keyword: "business hotel on Lavelle Road Bangalore", category: "Business Districts", audience: "corporate teams and long-weekday guests" },
  { slug: "embassy-golf-links", place: "Embassy Golf Links", keyword: "hotel for Embassy Golf Links business travel", category: "Business Districts", audience: "tech and consulting professionals" },
  { slug: "manyata-tech-park", place: "Manyata Tech Park", keyword: "hotel for Manyata Tech Park visitors Bangalore", category: "Business Districts", audience: "project teams and interview travelers" },
  { slug: "whitefield-business-travel", place: "Whitefield Business District", keyword: "central hotel for Whitefield business travel", category: "Business Districts", audience: "corporate travelers needing central access" },
  { slug: "electronic-city-business-travel", place: "Electronic City", keyword: "city-center hotel for Electronic City business trips", category: "Business Districts", audience: "enterprise visitors splitting meetings across zones" },
  { slug: "mallya-hospital", place: "Mallya Hospital", keyword: "hotel near Mallya Hospital Bangalore", category: "Healthcare & Services", audience: "patient attendants and visiting specialists" },
  { slug: "bowring-hospital", place: "Bowring Hospital", keyword: "hotel near Bowring Hospital Bangalore", category: "Healthcare & Services", audience: "families and medical travelers" },
  { slug: "st-philomenas-hospital", place: "St. Philomena's Hospital", keyword: "hotel near St Philomenas Hospital Bangalore", category: "Healthcare & Services", audience: "attendants and outstation patients" },
  { slug: "manipal-hospital-old-airport-road", place: "Manipal Hospital Old Airport Road", keyword: "hotel for Manipal Hospital Old Airport Road visitors", category: "Healthcare & Services", audience: "medical appointment travelers" },
  { slug: "vikram-hospital", place: "Vikram Hospital", keyword: "hotel near Vikram Hospital Bangalore", category: "Healthcare & Services", audience: "medical consultants and family attendants" },
  { slug: "apollo-hospital-sheshadripuram", place: "Apollo Hospital Sheshadripuram", keyword: "hotel near Apollo Hospital Sheshadripuram", category: "Healthcare & Services", audience: "medical visitors and attendants" },
  { slug: "hcg-cancer-centre", place: "HCG Cancer Centre", keyword: "hotel near HCG Cancer Centre Bangalore", category: "Healthcare & Services", audience: "long-stay patient families and consultants" },
  { slug: "visa-assistance-centers", place: "Visa and Documentation Centers", keyword: "hotel near visa application center Bangalore", category: "Healthcare & Services", audience: "document and appointment-based travelers" },
  { slug: "cubbon-park", place: "Cubbon Park", keyword: "hotel near Cubbon Park Bangalore", category: "Landmarks & Culture", audience: "leisure guests and morning-walk travelers" },
  { slug: "visvesvaraya-museum", place: "Visvesvaraya Industrial and Technological Museum", keyword: "hotel near Visvesvaraya Museum Bangalore", category: "Landmarks & Culture", audience: "families and education travelers" },
  { slug: "chinnaswamy-stadium", place: "M. Chinnaswamy Stadium", keyword: "hotel near Chinnaswamy Stadium Bangalore", category: "Landmarks & Culture", audience: "sports fans and event travelers" },
  { slug: "bangalore-palace", place: "Bangalore Palace", keyword: "hotel near Bangalore Palace", category: "Landmarks & Culture", audience: "heritage and event visitors" },
  { slug: "lalbagh-botanical-garden", place: "Lalbagh Botanical Garden", keyword: "hotel near Lalbagh Bangalore", category: "Landmarks & Culture", audience: "leisure travelers and photographers" },
  { slug: "tipu-summer-palace", place: "Tipu Sultan's Summer Palace", keyword: "hotel near Tipu Sultan Summer Palace Bangalore", category: "Landmarks & Culture", audience: "history-focused travelers" },
  { slug: "government-museum", place: "Government Museum Bengaluru", keyword: "hotel near Government Museum Bangalore", category: "Landmarks & Culture", audience: "culture-focused travelers" },
  { slug: "national-gallery-modern-art", place: "National Gallery of Modern Art Bengaluru", keyword: "hotel near National Gallery of Modern Art Bangalore", category: "Landmarks & Culture", audience: "art travelers and curatorial visitors" },
  { slug: "commercial-street", place: "Commercial Street", keyword: "hotel near Commercial Street Bangalore", category: "Landmarks & Culture", audience: "shopping travelers and weekend guests" },
  { slug: "karnataka-chitrakala-parishath", place: "Karnataka Chitrakala Parishath", keyword: "hotel near Karnataka Chitrakala Parishath", category: "Landmarks & Culture", audience: "art exhibitors and festival attendees" },
  { slug: "st-marks-cathedral", place: "St. Mark's Cathedral", keyword: "hotel near St Marks Cathedral Bangalore", category: "Landmarks & Culture", audience: "city walkers and heritage visitors" },
  { slug: "garuda-mall", place: "Garuda Mall", keyword: "hotel near Garuda Mall Bangalore", category: "Landmarks & Culture", audience: "shopping and lifestyle travelers" },
  { slug: "1mg-mall", place: "1 MG-Lido Mall", keyword: "hotel near 1 MG-Lido Mall Bangalore", category: "Landmarks & Culture", audience: "city guests and event travelers" },
  { slug: "mg-road-metro", place: "MG Road Metro Station", keyword: "hotel near MG Road Metro Station", category: "Transport Hubs", audience: "metro-connected city travelers" },
  { slug: "cubbon-park-metro", place: "Cubbon Park Metro Station", keyword: "hotel near Cubbon Park Metro Station", category: "Transport Hubs", audience: "daily commuters and meeting travelers" },
  { slug: "dr-br-ambedkar-station", place: "Dr. B.R. Ambedkar Station, Vidhana Soudha", keyword: "hotel near Vidhana Soudha metro station", category: "Transport Hubs", audience: "government and legal visitors" },
  { slug: "ksr-railway-station", place: "KSR Bengaluru City Railway Station", keyword: "hotel near KSR Bengaluru City Railway Station", category: "Transport Hubs", audience: "train travelers and business guests" },
  { slug: "cantonment-railway-station", place: "Bengaluru Cantonment Railway Station", keyword: "hotel near Bengaluru Cantonment railway station", category: "Transport Hubs", audience: "rail commuters and outstation professionals" },
  { slug: "kempegowda-airport", place: "Kempegowda International Airport", keyword: "hotel for Bangalore airport to city stay", category: "Transport Hubs", audience: "fly-in professionals and international guests" },
  { slug: "majestic-bus-stand", place: "Majestic Bus Stand", keyword: "hotel near Majestic Bus Stand Bangalore", category: "Transport Hubs", audience: "intercity bus travelers" },
  { slug: "shivajinagar-bus-stand", place: "Shivajinagar Bus Stand", keyword: "hotel near Shivajinagar Bus Stand Bangalore", category: "Transport Hubs", audience: "city transit and short-stay travelers" },
  { slug: "airport-shuttle-stays", place: "Airport Shuttle Pick-up Corridor", keyword: "hotel with airport pickup in central Bangalore", category: "Transport Hubs", audience: "guests needing predictable transfers" },
];

export const lavelleSeoPagesBySlug = new Map(
  lavelleSeoPages.map((page) => [page.slug, page])
);

export const lavelleSeoCategories: LavelleSeoCategory[] = [
  "Legal & Courts",
  "Government Offices",
  "Business Districts",
  "Healthcare & Services",
  "Landmarks & Culture",
  "Transport Hubs",
];

const clusterSlugByCategory: Record<LavelleSeoCategory, string> = {
  "Legal & Courts": "legal-courts",
  "Government Offices": "government-offices",
  "Business Districts": "business-districts",
  "Healthcare & Services": "healthcare-services",
  "Landmarks & Culture": "landmarks-culture",
  "Transport Hubs": "transport-hubs",
};

const clusterMetaByCategory: Record<
  LavelleSeoCategory,
  Omit<LavelleSeoCluster, "slug" | "category">
> = {
  "Legal & Courts": {
    title: "Legal and Court Stay Guides in Bengaluru",
    description:
      "Stay guides for outstation advocates, legal teams, and litigants visiting court zones near central Bengaluru.",
    travelPurpose: "legal-visits",
  },
  "Government Offices": {
    title: "Government Office Stay Guides in Bengaluru",
    description:
      "Pages for official visits near Vidhana Soudha, administrative clusters, and documentation centers.",
    travelPurpose: "official-visits",
  },
  "Business Districts": {
    title: "Business District Stay Guides in Bengaluru",
    description:
      "City-center hotel pages for executives, consultants, and project teams attending meetings across key office corridors.",
    travelPurpose: "business-trips",
  },
  "Healthcare & Services": {
    title: "Healthcare and Service Travel Stay Guides",
    description:
      "Stay-planning pages for medical appointments, family attendants, and documentation-driven city visits.",
    travelPurpose: "medical-visits",
  },
  "Landmarks & Culture": {
    title: "Landmark and Culture Stay Guides in Bengaluru",
    description:
      "Location pages for leisure and event travelers planning visits around museums, shopping zones, and heritage routes.",
    travelPurpose: "leisure-trips",
  },
  "Transport Hubs": {
    title: "Transport Hub Stay Guides in Bengaluru",
    description:
      "Pages for airport, metro, rail, and intercity transit travelers who need predictable central access.",
    travelPurpose: "transit-trips",
  },
};

export const lavelleSeoClusters: readonly LavelleSeoCluster[] = lavelleSeoCategories.map(
  (category) => ({
    slug: clusterSlugByCategory[category],
    category,
    ...clusterMetaByCategory[category],
  })
);

export const lavelleSeoClusterBySlug = new Map(
  lavelleSeoClusters.map((cluster) => [cluster.slug, cluster])
);

export function getLavelleSeoPage(slug: string) {
  return lavelleSeoPagesBySlug.get(slug);
}

export function getLavelleSeoPagesByCategory(category: LavelleSeoCategory) {
  return lavelleSeoPages.filter((page) => page.category === category);
}

export function getRelatedLavelleSeoPages(slug: string, limit = 6) {
  const current = getLavelleSeoPage(slug);
  if (!current) return [];

  const sameCategory = lavelleSeoPages.filter(
    (page) => page.slug !== slug && page.category === current.category
  );
  const crossCategory = lavelleSeoPages.filter(
    (page) => page.slug !== slug && page.category !== current.category
  );

  return [...sameCategory.slice(0, 4), ...crossCategory.slice(0, 4)].slice(0, limit);
}

export function getClusterSlugForCategory(category: LavelleSeoCategory) {
  return clusterSlugByCategory[category];
}

export function getLavelleSeoCluster(slug: string) {
  return lavelleSeoClusterBySlug.get(slug);
}
