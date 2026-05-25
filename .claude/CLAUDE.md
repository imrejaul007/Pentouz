# The Pentouz Website

A premium boutique hospitality website showcasing luxury stays in Bangalore (Lavelle Road, Indiranagar), Ooty, and Chikmagalur.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond (display), Lora (body), Inter (UI)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Gold | `#c3a061` | Accents, CTAs, highlights |
| Dark | `#0f0e0c` | Headers, dark sections |
| Cream | `#faf7f2` | Light backgrounds |
| Sand | `#f5f0e8` | Alternate sections |
| Ink | `#1a1814` | Body text |
| Muted | `#8b7355` | Secondary text |
| Subtle | `#4a4a44` | Tertiary text |

### Typography Scale
- **Display**: Cormorant Garamond (font-light) - headings, hero text
- **Body**: Lora - paragraphs, descriptions
- **UI**: Inter - labels, navigation, buttons

### Spacing (Mobile-First)
- Section padding: `py-12 sm:py-16 lg:py-24`
- Content max-width: `max-w-[1400px]`
- Page margins: `px-5 sm:px-8 lg:px-16`
- Card gaps: `gap-3 sm:gap-4`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── destinations/       # Property pages (lavelle-road, indiranagar, ooty, pentouz-hillside)
│   ├── gallery/            # Gallery page
│   ├── experiences/        # Experiences page
│   ├── offers/             # Special offers page
│   ├── about/             # About page
│   ├── contact/            # Contact page with form
│   ├── prive-club/        # Prive membership page
│   ├── collection/         # Property collection page
│   ├── stories/            # Stories/blog page
│   └── travel/             # Travel guides hub
├── components/             # Reusable components
│   ├── Header.tsx          # Site header with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── HeroSlider.tsx      # Image carousel
│   ├── PropertyGallery.tsx # Filterable gallery with rooms
│   └── EditorialTrustBar.tsx
├── data/                   # Static content
│   ├── content.ts          # Destinations, amenities, contact info
│   ├── propertyImageSets.ts # Image configurations
│   ├── lavelleSeoPages.ts # SEO location pages
│   └── lavelleTravelContent.ts
└── lib/
    ├── site.ts             # Site URL utilities
    ├── utils.ts            # cn() helper
    └── leads.ts            # Lead submission API
```

## Key Pages

### Property Pages
Each property (`/destinations/[slug]`) has:
- Hero slider with property images
- Property description
- Room type gallery with tabbed navigation
- Location/distance section with icons
- Amenities in inline flex layout
- Contact CTA

### Components

#### Header
- Fixed position with scroll-aware styling
- Mobile hamburger menu with full-screen overlay
- Desktop navigation on xl screens
- Booking and contact CTAs

#### PropertyGallery
- Room-based tab filtering
- Masonry-style image grid
- Lightbox viewer with keyboard navigation
- Shows first word of room name in tabs (e.g., "Queen", "King")

## Adding New Content

### New Destination
1. Add to `src/data/content.ts` destinations array
2. Create page at `src/app/destinations/[new-slug]/page.tsx`
3. Add images to `public/[new-slug]/`
4. Update propertyImageSets if needed

### New Travel Guide
1. Add to `src/data/lavelleTravelContent.ts`
2. Or add to `src/data/lavelleSeoClusters.ts`

## Common Issues

### Double Logo in Mobile Menu
- Header has two logos (desktop + mobile)
- Both are hidden when menu opens via `isMenuOpen` state
- See Header.tsx mobile logo section

### Gallery Tabs Layout
- Uses horizontal scroll for room tabs
- First word of room name shown (e.g., "Queen" not "Queen Suite")
- "All" tab shows all images

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start   # Start production server
```

## Environment

- Site URL configured in `src/lib/site.ts`
- Booking links point to BookMyStay.io
- WhatsApp: configured in `src/data/content.ts`
