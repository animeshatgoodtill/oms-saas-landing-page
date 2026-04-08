# Content Management Skill

This project uses TypeScript data files as its CMS. All content lives in `src/data/` - there is no database or headless CMS.

---

## Architecture

```
src/data/
├── siteDetails.ts          # Site metadata, GA ID, URLs
├── companyDetails.ts        # Company legal/compliance info (single source of truth)
├── hero.ts                  # Hero section content
├── benefits.tsx             # Homepage feature benefits (JSX for icons)
├── pricing.ts               # Pricing tiers
├── faq.ts                   # FAQ Q&A pairs
├── testimonials.ts          # Customer testimonials
├── stats.tsx                # Statistics with icons (JSX)
├── cta.ts                   # Call-to-action copy
├── menuItems.ts             # Navigation structure (supports submenus)
├── footer.ts                # Footer links & social media
├── featuresPage.tsx          # Features index page categories
├── featureDetails/           # Individual feature pages
│   ├── index.ts              # Re-exports all features
│   └── *.ts                  # One file per feature
└── docs/
    └── *.ts                  # Documentation guides
```

---

## How to Make Content Changes

### Simple Text/Copy Changes
1. Find the relevant data file in `src/data/`
2. Edit the string values
3. Types in `src/types.ts` enforce the structure - follow them

### Adding a New Feature Detail Page
1. Create `src/data/featureDetails/<slug>.ts` implementing `IFeatureDetail`:
   ```ts
   import { IFeatureDetail } from '@/types';
   export const myFeature: IFeatureDetail = {
     slug: 'my-feature',
     title: 'My Feature',
     subtitle: 'Category label',
     heroDescription: 'Description text',
     featureHighlights: [...],  // IFeatureHighlight[]
     howItWorks: { steps: [...] },  // IHowItWorksStep[]
     personaBenefits: [...],  // IPersonaBenefit[]
     stats: [...],  // IStatBlock[]
     comparison: { rows: [...] },  // IComparisonRow[]
     faq: [...],  // IFAQ[]
     ctaText: 'Get Started',
     ctaUrl: 'https://app.opscel.com/handler/sign-up'
   };
   ```
2. Add to `src/data/featureDetails/index.ts`:
   ```ts
   export { myFeature } from './my-feature';
   ```
3. The `[slug]` dynamic route auto-discovers it via `generateStaticParams`

### Adding a New Doc Page
1. Create data file in `src/data/docs/` following `IDocGuide` interface
2. Create route at `src/app/docs/<slug>/page.tsx`
3. Import `DocSidebar` for navigation sidebar

### Adding a Legal Page
1. Create `src/app/<slug>/page.tsx`
2. Use `LegalPage` component wrapper:
   ```tsx
   import LegalPage from '@/components/LegalPage';
   export default function MyPage() {
     return <LegalPage title="Page Title" lastUpdated="2024-01-15">
       {/* content */}
     </LegalPage>;
   }
   ```

### Updating Company Information
- **Single source of truth**: `src/data/companyDetails.ts`
- Contains: registered name, Companies House number, addresses, emails, compliance flags, about text, mission/values
- Referenced by legal pages, footer, contact page
- See `SITE_CONTENT_TO_UPDATE.md` for pending placeholder values (ICO registration, phone number)

---

## Content Type Reference

| Interface | Used By | File |
|-----------|---------|------|
| `IMenuItem` | Navigation | `menuItems.ts` |
| `IBenefit` / `IBenefitBullet` | Homepage benefits | `benefits.tsx` |
| `IPricing` | Pricing section | `pricing.ts` |
| `IFAQ` | FAQ sections | `faq.ts`, feature details |
| `ITestimonial` | Testimonials | `testimonials.ts` |
| `IStats` | Stats section | `stats.tsx` |
| `IFeatureDetail` | Feature pages | `featureDetails/*.ts` |
| `IDocGuide` / `IDocSection` | Doc pages | `docs/*.ts` |

---

## Image Conventions

- Format: `.webp` (required for all new images)
- Location: `public/images/`
- Hero images: 950x1000px for crisp above-the-fold display
- Testimonial avatars: square, displayed at 50x50
- Feature mockups: ~384x762 for benefit sections
- Logos: SVG preferred, PNG fallback
- Feature icons: Add to SVG sprite at `public/icons/features-sprite.svg`

---

## Navigation Structure

`menuItems.ts` supports nested menus:
```ts
{
  label: 'Features',
  href: '/features',
  subMenu: [
    { label: 'Certificates', href: '/features/certificates' },
    { label: 'Dashboard', href: '/features/dashboard' },
  ]
}
```

The Header component renders submenus as dropdown on desktop, expandable list on mobile.

---

## Rules

1. **Never put content strings in components** - always in `src/data/`
2. **Always type your data** - add/update interfaces in `src/types.ts`
3. **Prefix interfaces with I** - e.g., `INewFeature`
4. **JSX in data files** is acceptable (`.tsx` extension) for icons/rich content
5. **Test with `npm run build`** after content changes to catch type errors
