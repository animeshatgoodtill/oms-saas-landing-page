# CLAUDE.md - AI Assistant Guide for Opscel Landing Page

## Project Overview

This is the marketing/landing page for **Opscel** - an AI-native operations management platform for fire safety and electrical contractors. The site is deployed at `www.opscel.com` via Vercel, while the main application lives at `app.opscel.com`.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Animations**: Framer Motion
- **UI Components**: Headless UI for accessible components
- **Icons**: react-icons (Fi*, Fa* icon sets)
- **Analytics**: Google Analytics via @next/third-parties

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage (single-page site)
│   ├── globals.css         # Global styles & CSS variables
│   └── favicon.ico
├── components/             # React components
│   ├── Benefits/           # Feature showcase components
│   │   ├── Benefits.tsx
│   │   ├── BenefitSection.tsx
│   │   └── BenefitBullet.tsx
│   ├── Pricing/            # Pricing tier components
│   │   ├── Pricing.tsx
│   │   └── PricingColumn.tsx
│   ├── Header.tsx          # Navigation header (mobile responsive)
│   ├── Footer.tsx          # Site footer with links/socials
│   ├── Hero.tsx            # Hero section
│   ├── Container.tsx       # Layout wrapper
│   ├── Section.tsx         # Generic section wrapper
│   ├── SectionTitle.tsx    # Section headings
│   ├── CTA.tsx             # Call-to-action section
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Logos.tsx           # Partner/client logos
│   ├── Stats.tsx           # Statistics display
│   └── Testimonials.tsx    # Customer testimonials
├── data/                   # Content/data files (edit these for content changes)
│   ├── siteDetails.ts      # Site metadata, name, URL, GA ID
│   ├── hero.ts             # Hero section content
│   ├── benefits.tsx        # Features/benefits content (JSX for icons)
│   ├── pricing.ts          # Pricing tiers
│   ├── faq.ts              # FAQ questions/answers
│   ├── testimonials.ts     # Customer testimonials
│   ├── stats.tsx           # Statistics (JSX for icons)
│   ├── cta.ts              # CTA section content
│   ├── menuItems.ts        # Navigation menu items
│   └── footer.ts           # Footer content & social links
├── types.ts                # TypeScript interfaces
└── utils.tsx               # Utility functions (social icons)

public/
└── images/                 # Static images (webp format)
```

## Key Conventions

### Component Structure
- Components use `React.FC` typing
- Functional components with hooks
- Client components marked with `'use client'` directive when needed
- Props destructured in function signature

### Styling
- Use Tailwind CSS utility classes
- CSS custom properties defined in `globals.css`:
  - `--primary`: #FED835 (yellow - brand color)
  - `--secondary`: #304fff (blue)
  - `--foreground`: #171717 (dark text)
  - `--background`: #ffffff (white)
  - `--hero-background`: #F3F3F5 (light gray)
- Typography: Manrope for headings, Source Sans 3 for body
- Responsive breakpoints: `md:` (768px), `sm:` (640px)

### Content Management
- All content is in `src/data/` files - modify these for copy changes
- Types for content structures are in `src/types.ts`
- Images should be `.webp` format in `public/images/`

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Important External Links

- **App Sign-in**: `https://app.opscel.com/handler/sign-in`
- **App Sign-up**: `https://app.opscel.com/handler/sign-up`
- **Contact Email**: `hello@opscel.com` (for demo requests)

## Common Tasks

### Adding a New Feature/Benefit
1. Add entry to `src/data/benefits.tsx` following `IBenefit` interface
2. Add corresponding mockup image to `public/images/`

### Modifying Navigation
- Edit `src/data/menuItems.ts` for nav items
- Edit `src/components/Header.tsx` for CTA buttons

### Updating Pricing
- Edit `src/data/pricing.ts` (follows `IPricing` interface)

### Adding Testimonials
- Edit `src/data/testimonials.ts` (follows `ITestimonial` interface)
- Add avatar images to `public/images/`

### Changing Site Metadata
- Edit `src/data/siteDetails.ts` for title, description, URLs

### Adding Google Analytics
- Set `googleAnalyticsId` in `src/data/siteDetails.ts`

## Code Quality

### ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Run `npm run lint` before committing

### TypeScript
- Strict mode enabled
- All content data should have proper type definitions
- Interfaces prefixed with `I` (e.g., `IMenuItem`, `IBenefit`)

## Notes for AI Assistants

1. **Content changes**: Most copy/text changes should be made in `src/data/` files
2. **This is a single-page site**: All sections are on the homepage
3. **No backend**: This is a static marketing site - forms link to external app
4. **Images**: Use `.webp` format, place in `public/images/`
5. **Responsive design**: Always test with mobile breakpoints in mind
6. **Brand colors**: Yellow (#FED835) is the primary CTA color
7. **Related repo**: Main application at `github.com/animeshatgoodtill/opscel-starter-kit`
