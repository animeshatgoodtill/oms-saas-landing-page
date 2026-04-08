# Upgrade Plan - Opscel Landing Page

Last reviewed: 2026-04-08

This document tracks planned dependency upgrades and technical improvements. Items are prioritized by impact and urgency.

---

## Dependency Upgrades

### Priority 1: Next.js 14 → 15

**Current**: 14.2.13 | **Target**: 15.x
**Impact**: High - performance, features, security patches
**Effort**: Medium (half-day)

**What changes in Next.js 15:**
- Async Request APIs: `cookies()`, `headers()`, `params` become async
- Fetch caching default changed from `force-cache` to `no-store` (affects any future API calls)
- Partial Prerendering (PPR) for hybrid static/dynamic pages
- `next/after` API for post-response work
- React 19 support (can upgrade React at same time)
- `next.config.ts` (TypeScript config) fully supported
- Improved error overlay and dev experience

**Migration steps:**
1. Run `npx @next/codemod@latest upgrade` for automated migration
2. Update `@next/third-parties` to match Next.js version
3. Update `eslint-config-next` to 15.x
4. Test all routes: homepage, features, feature/[slug], docs, legal pages
5. Verify `generateStaticParams` still works for dynamic routes
6. Run `npm run build` and check for warnings

**Breaking changes to watch:**
- If any page uses `cookies()` or `headers()`, wrap in `await`
- `next.config.mjs` → `next.config.ts` (optional but recommended)
- Minimum Node.js version increases to 18.18.0

---

### Priority 2: ESLint 8 → 9

**Current**: 8.x | **Target**: 9.x
**Impact**: Low - developer tooling only
**Effort**: Low

**What changes:**
- New "flat config" format replaces `.eslintrc.json`
- `eslint.config.js` replaces `.eslintrc.json`

**Migration steps:**
1. Wait for `eslint-config-next` to fully support ESLint 9 flat config
2. Create `eslint.config.js` with equivalent rules
3. Remove `.eslintrc.json`
4. Run `npm run lint` and fix any new warnings

**Note:** Block on Next.js 15 upgrade first - `eslint-config-next@15` has better ESLint 9 support.

---

### Priority 3: Tailwind CSS 3.4 → 4.x

**Current**: 3.4.1 | **Target**: 4.x
**Impact**: Medium - major rewrite of config system
**Effort**: High (full day)

**What changes in Tailwind v4:**
- CSS-native configuration (no more `tailwind.config.ts`)
- Theme values defined directly in CSS with `@theme`
- Automatic content detection (no `content` array needed)
- New `@import "tailwindcss"` syntax replaces `@tailwind` directives
- Native cascade layers
- Zero-config PostCSS (built-in as a standalone tool or Vite plugin)

**Why this project is well-positioned:**
- Already uses CSS custom properties for theming (v4's preferred approach)
- Color tokens are CSS variable-based (maps directly to v4 `@theme`)
- Minimal Tailwind config (fonts, colors, transitions only)

**Migration steps:**
1. Install `tailwindcss@4` and its PostCSS plugin
2. Move `tailwind.config.ts` theme values into `globals.css` using `@theme`:
   ```css
   @import "tailwindcss";
   @theme {
     --font-heading: "Manrope", sans-serif;
     --font-body: "Source Sans 3", sans-serif;
     --color-primary: var(--primary);
     /* etc. */
   }
   ```
3. Remove `tailwind.config.ts` and update `postcss.config.mjs`
4. Replace `@tailwind base/components/utilities` with `@import "tailwindcss"`
5. Audit all components for any deprecated utility classes
6. Run `npm run build` and visually verify all pages

**Hold until:** Next.js 15 upgrade is complete. Tailwind v4 + Next.js 15 are tested together.

---

### Priority 4: React 18 → 19

**Current**: 18.x | **Target**: 19.x
**Impact**: Medium - new features, some breaking changes
**Effort**: Medium

**What changes:**
- `ref` passed as a prop (no more `forwardRef` wrapper)
- `use()` hook for promises and context
- Server Components improvements
- `<form>` actions and `useFormStatus`
- Compiler (React Forget) for automatic memoization

**Migration steps:**
1. Upgrade alongside Next.js 15 (they're designed to work together)
2. Remove any `forwardRef` usage (none currently in codebase)
3. Update `@types/react` and `@types/react-dom` to v19
4. Test Framer Motion compatibility with React 19
5. Test Headless UI compatibility with React 19

---

## Technical Improvements

### CSS Token Cleanup
**Priority**: Low | **Effort**: Low

Remove legacy CSS variables that duplicate the semantic system:
- `--primary-accent` → use `--primary` with Tailwind opacity modifier
- `--foreground-accent` → use `--muted-foreground`
- `--hero-background` → use `--muted`

Search codebase for usage, update references, then remove from `globals.css`.

---

### Dark Mode Support
**Priority**: Low | **Effort**: Medium

The CSS variable architecture makes this straightforward:
1. Add `[data-theme="dark"]` selector in `globals.css` with dark values
2. Add theme toggle component
3. Store preference in localStorage with system preference fallback
4. All existing components already use semantic tokens

---

### Tailwind Typography Plugin
**Priority**: Low | **Effort**: Low

Install `@tailwindcss/typography` for better prose styling on:
- Legal pages (privacy, terms, cookies)
- Documentation pages
- Feature detail pages

This would replace manual typography styling with the `prose` class.

---

### Image Optimization in next.config
**Priority**: Low | **Effort**: Low

Currently `next.config.mjs` is empty. If external images are ever added (CMS, user avatars), configure:
```js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'app.opscel.com' },
    ],
  },
};
```

---

### Performance Monitoring
**Priority**: Low | **Effort**: Low

- Add `reportWebVitals` in layout for Core Web Vitals tracking
- Consider adding Vercel Analytics or Speed Insights
- Monitor ParticlesBackground canvas performance on low-power devices

---

### Inline SVG Extraction
**Priority**: Low | **Effort**: Medium

`Logos.tsx` has hardcoded inline SVG markup. Consider:
- Moving SVGs to `public/icons/` as separate files
- Or adding to the existing `features-sprite.svg` sprite
- Makes logo updates simpler (replace file vs. edit component)

---

## Upgrade Order

Recommended sequence for upgrades:

```
1. Next.js 14 → 15  (enables everything else)
     ↓
2. React 18 → 19    (upgrade with Next.js 15)
     ↓
3. ESLint 8 → 9     (eslint-config-next@15 supports it)
     ↓
4. Tailwind 3 → 4   (last, most breaking changes)
```

Each upgrade should be a separate PR with:
- `npm run build` passing
- `npm run lint` passing
- Visual verification of all page routes
- Mobile responsiveness check

---

## Pending Content/Config Items

From `SITE_CONTENT_TO_UPDATE.md`:
- [ ] ICO Registration number (currently placeholder `ZA123456`)
- [ ] Phone number (currently empty)
- [ ] Industry association memberships
- [ ] Cyber Essentials certification status
- [ ] ISO 27001 certification status
