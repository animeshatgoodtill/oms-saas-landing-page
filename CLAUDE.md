# CLAUDE.md - AI Assistant Guide for Opscel Landing Page

## Project Overview

This is the marketing and documentation site for **Opscel** - an AI-native operations management platform for fire safety and electrical contractors. The site is deployed at `www.opscel.com` via Vercel (auto-deploy from GitHub), while the main application lives at `app.opscel.com`.

## Tech Stack

- **Framework**: Next.js 14.2.13 with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.4.1 with CSS custom properties for theming
- **Animations**: Framer Motion 11.x (scroll-triggered) + CSS keyframes (simple transitions)
- **UI Components**: Headless UI 2.x for accessible components (Disclosure, Transition)
- **Icons**: react-icons 5.x (Fi*, Fa*, Bi*, Bs* icon sets) + SVG sprite (`/icons/features-sprite.svg`)
- **Analytics**: Google Analytics via @next/third-parties
- **Utilities**: clsx for conditional className management

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header/Footer, fonts, metadata, GA)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles, CSS variables, animations
│   ├── sitemap.ts                # SEO sitemap generator
│   ├── favicon.ico
│   ├── about/page.tsx            # About company
│   ├── contact/page.tsx          # Contact page
│   ├── support/page.tsx          # Support/help
│   ├── features/
│   │   ├── page.tsx              # Features index (category grid)
│   │   └── [slug]/page.tsx       # Dynamic feature detail pages
│   ├── docs/
│   │   ├── page.tsx              # Documentation index
│   │   ├── certificates/page.tsx
│   │   ├── customer-portal/page.tsx
│   │   ├── defects-to-quotation/page.tsx
│   │   ├── invoicing/page.tsx
│   │   └── accounting-integration/page.tsx
│   ├── privacy/page.tsx          # Privacy policy
│   ├── terms/page.tsx            # Terms of service
│   └── cookies/page.tsx          # Cookie policy
├── components/                   # React components
│   ├── Header.tsx                # Navigation with mobile drawer (Headless UI)
│   ├── Footer.tsx                # Footer with links, socials, ICO badge
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Container.tsx             # Max-width layout wrapper (7xl/80rem)
│   ├── Section.tsx               # Generic section wrapper with title
│   ├── SectionTitle.tsx          # Responsive section headings
│   ├── PageHeader.tsx            # Blue-background page header for subpages
│   ├── CTA.tsx                   # Call-to-action section
│   ├── FAQ.tsx                   # FAQ with Headless UI Disclosure
│   ├── FAQAccordion.tsx          # Reusable FAQ accordion component
│   ├── Logos.tsx                 # Partner/client logos (inline SVGs)
│   ├── Stats.tsx                 # Statistics display grid
│   ├── Testimonials.tsx          # Customer testimonials
│   ├── FeatureShowcase.tsx       # Feature cards with gradient backgrounds
│   ├── ProblemStrip.tsx          # Problem statement section
│   ├── AnimatedGradientBackground.tsx  # CSS gradient animation
│   ├── ParticlesBackground.tsx   # Canvas particle system (respects reduced motion)
│   ├── LegalPage.tsx             # Wrapper for legal pages (privacy, terms, cookies)
│   ├── DocSidebar.tsx            # Sticky sidebar for docs with mobile toggle
│   ├── Benefits/
│   │   ├── Benefits.tsx          # Benefits section container
│   │   ├── BenefitSection.tsx    # Individual benefit (Framer Motion animated)
│   │   └── BenefitBullet.tsx     # Bullet items with motion
│   └── Pricing/
│       ├── Pricing.tsx           # Pricing section container
│       └── PricingColumn.tsx     # Individual pricing tier card
├── data/                         # Content data (the "CMS" - edit here for copy changes)
│   ├── siteDetails.ts            # Site metadata, name, URLs, GA ID
│   ├── companyDetails.ts         # Company info (legal, compliance, about, values)
│   ├── hero.ts                   # Hero section content
│   ├── benefits.tsx              # Feature benefits with icons (JSX)
│   ├── pricing.ts                # Pricing tiers
│   ├── faq.ts                    # FAQ questions/answers
│   ├── testimonials.ts           # Customer testimonials
│   ├── stats.tsx                 # Statistics with icons (JSX)
│   ├── cta.ts                    # CTA section content
│   ├── menuItems.ts              # Navigation menu with submenu support
│   ├── footer.ts                 # Footer content & social links
│   ├── featuresPage.tsx          # Features index page categories
│   ├── featureDetails/           # Individual feature detail data
│   │   ├── index.ts              # Re-exports all feature details
│   │   ├── certificates.ts
│   │   ├── dashboard.ts
│   │   ├── field-service.ts
│   │   ├── invoicing.ts
│   │   ├── job-sheets.ts
│   │   ├── jobs.ts
│   │   ├── quotations.ts
│   │   ├── customers.ts
│   │   ├── customer-portal.ts
│   │   ├── assets.ts
│   │   ├── team.ts
│   │   ├── templates.ts
│   │   ├── data-import.ts
│   │   └── accounting-integration.ts
│   └── docs/
│       └── certificates-guide.ts  # Structured doc guide content
├── types.ts                      # TypeScript interfaces (I-prefixed)
└── utils.tsx                     # Utility functions (social icon mapper)

public/
├── images/                       # Static images (.webp format)
│   ├── hero-*.webp               # Hero section images
│   ├── mockup-*.webp             # Feature mockups
│   ├── testimonial-*.webp        # Testimonial avatars
│   ├── opscel-logo.{png,svg,webp}
│   ├── opscel-favicon.{png,webp}
│   ├── ico-logo.svg              # ICO compliance logo
│   └── ico-badge.svg
├── icons/
│   └── features-sprite.svg       # SVG sprite for feature icons
└── robots.txt                    # SEO robots file
```

## Design System

### Color System (CSS custom properties in `globals.css`)

Always use semantic tokens - **never hardcode hex values**.

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | #FED835 | Brand yellow, CTAs |
| `--primary-foreground` | #000000 | Text on primary |
| `--secondary` | #304fff | Blue accent |
| `--foreground` | #171717 | Main text |
| `--background` | #ffffff | Page background |
| `--card` | #ffffff | Card surfaces |
| `--muted` | #f5f5f5 | Subtle backgrounds |
| `--muted-foreground` | #737373 | Secondary text |
| `--border` | #e5e5e5 | Borders |
| `--success` | #16a34a | Success state |
| `--warning` | #f59e0b | Warning state |
| `--error` / `--destructive` | #dc2626 | Error state |

Legacy tokens (still in use, migrate when possible):
- `--primary-accent`: #e5c230
- `--foreground-accent`: #454545
- `--hero-background`: #F3F3F5

### Typography

- **Headings**: Manrope (`font-heading`) - loaded via `next/font/google`
- **Body**: Source Sans 3 (`font-body`) - default
- **Data/numbers**: System monospace (`font-mono`)

### Fluid Sizing

CSS `clamp()` is used for responsive typography and spacing without breakpoints:
- `--text-display-xl`: clamp(3rem, 5vw + 1rem, 5rem)
- `--space-section`: clamp(4rem, 8vw, 8rem)

### Animation Strategy

Two animation systems are used intentionally:
- **CSS keyframes** (`globals.css`): Simple fade-in, stagger delays (`.stagger-1` to `.stagger-8`), gradient-text
- **Framer Motion**: Scroll-triggered animations only (`whileInView`, spring physics) in `BenefitSection` and `BenefitBullet`

This split keeps the bundle small - Framer Motion is only loaded in components that need scroll-triggered orchestration.

### Transition Standard
```tsx
className="transition-all duration-mechanical ease-mechanical"
// 150ms, cubic-bezier(0.25, 0.1, 0.25, 1)
```

## Key Conventions

### Component Patterns
- Functional components with `React.FC` typing
- Client components marked with `'use client'` when interactive
- Props destructured in function signature
- `clsx` for conditional className composition

### Content Management
- All content lives in `src/data/` files - this is the project's CMS
- Types for content structures are in `src/types.ts` (I-prefixed interfaces)
- `companyDetails.ts` is the single source of truth for legal/company info
- Images must be `.webp` format in `public/images/`
- Icons referenced via SVG sprite IDs or react-icons imports

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Responsive Design
- Mobile-first approach (base styles = mobile, `md:` / `lg:` for desktop)
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Fluid typography with CSS `clamp()` reduces breakpoint-dependent sizing

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (run before pushing)
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Important External Links

- **App Sign-in**: `https://app.opscel.com/handler/sign-in`
- **App Sign-up**: `https://app.opscel.com/handler/sign-up`
- **Help Centre**: `https://help.opscel.com`
- **Status Page**: `https://status.opscel.com`
- **Contact Email**: `hello@opscel.com` (demo requests)
- **Support Email**: `support@opscel.com`
- **Privacy Email**: `privacy@opscel.com`
- **LinkedIn**: `https://www.linkedin.com/company/opscel`

## Common Tasks

### Adding a New Feature Detail Page
1. Create data file in `src/data/featureDetails/` following `IFeatureDetail` interface
2. Export it from `src/data/featureDetails/index.ts`
3. The dynamic route `src/app/features/[slug]/page.tsx` picks it up automatically via `generateStaticParams`
4. Add mockup images to `public/images/`

### Adding a New Documentation Page
1. Create data file in `src/data/docs/` following `IDocGuide` interface
2. Create route at `src/app/docs/<slug>/page.tsx`
3. Uses `DocSidebar` for navigation and `LegalPage`-style layout

### Adding a New Legal Page
1. Create route at `src/app/<slug>/page.tsx`
2. Use `LegalPage` wrapper component for consistent layout with `PageHeader`

### Adding a New Feature/Benefit (homepage)
1. Add entry to `src/data/benefits.tsx` following `IBenefit` interface
2. Add corresponding mockup image to `public/images/`

### Modifying Navigation
- Edit `src/data/menuItems.ts` for nav items (supports submenus via `subMenu` array)
- Edit `src/components/Header.tsx` for CTA buttons

### Updating Pricing
- Edit `src/data/pricing.ts` (follows `IPricing` interface)

### Adding Testimonials
- Edit `src/data/testimonials.ts` (follows `ITestimonial` interface)
- Add avatar images to `public/images/`

### Changing Site Metadata
- Edit `src/data/siteDetails.ts` for title, description, URLs, GA ID
- OpenGraph/Twitter card metadata configured in `src/app/layout.tsx`

### Updating Company/Legal Info
- Edit `src/data/companyDetails.ts` - single source of truth for registered name, Companies House number, compliance info, about text, etc.
- See `SITE_CONTENT_TO_UPDATE.md` for pending placeholder values

## Code Quality

### ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Run `npm run lint` before committing

### TypeScript
- Strict mode enabled
- All content data must have proper type definitions
- Interfaces prefixed with `I` (e.g., `IMenuItem`, `IBenefit`, `IFeatureDetail`)

### Accessibility
- Semantic HTML (nav, main, article, footer, heading hierarchy)
- ARIA attributes on interactive elements
- Screen reader text via `sr-only` class
- `prefers-reduced-motion` respected in canvas animations
- 44px minimum touch targets on mobile
- Status colors standardized (green/amber/red)

## Notes for AI Assistants

1. **Content changes**: Most copy/text changes should be made in `src/data/` files
2. **Multi-page site**: Homepage plus features, docs, legal, about, contact, support pages
3. **No backend**: Static marketing site - forms link to external app at `app.opscel.com`
4. **Images**: Use `.webp` format, place in `public/images/`
5. **Responsive design**: Always test with mobile breakpoints in mind
6. **Brand colors**: Use semantic tokens, never hardcode hex values
7. **Company source of truth**: `src/data/companyDetails.ts` for all legal/compliance info
8. **Feature pages**: Dynamic `[slug]` routing - just add a data file to create a new page
9. **Icons**: Use SVG sprite (`/icons/features-sprite.svg`) for feature icons, react-icons for UI
10. **Related repo**: Main application at `github.com/animeshatgoodtill/opscel-starter-kit`
11. **Deployment**: Vercel auto-deploys from GitHub - no config file needed
12. **See also**: `.claude/skills/` for design system and workflow guidance
