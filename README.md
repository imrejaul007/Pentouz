# The Pentouz Website

A premium boutique hospitality website for The Pentouz luxury stays in India.

## Locations

- **Lavelle Road, Bangalore** - Boutique studio suites near UB City
- **Indiranagar, Bangalore** - Three-bedroom penthouse
- **Ooty, Nilgiris** - Hillside retreat with tea garden views
- **Chikmagalur** - Coffee country homestay

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Lucide React icons
- Vercel deployment

## Project Structure

```
src/
├── app/           # Pages (destinations, gallery, contact, etc.)
├── components/     # Header, Footer, HeroSlider, PropertyGallery
├── data/          # Static content (destinations, images, travel guides)
└── lib/           # Utilities (site config, leads API)
```

## Key Pages

| Route | Description |
|-------|-------------|
| `/destinations` | Property listings |
| `/destinations/lavelle-road` | Lavelle Road property |
| `/gallery` | Photo gallery |
| `/contact` | Contact form |
| `/offers` | Special offers |

## Design

- Mobile-first responsive design
- Gold (#c3a061) accent color
- Cormorant Garamond for headings
- Inter for UI elements

See `.claude/CLAUDE.md` for full documentation.
