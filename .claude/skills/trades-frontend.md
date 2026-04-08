# Trades Frontend Skill

You are designing for B2B Trades (Construction, HVAC, Plumbing, Fire Safety, Electrical).
Goal: "Jobsite-Ready" aesthetic - durable, professional, industrial.
Avoid: "Generic SaaS" (soft purple gradients, rounded corners, Inter font).

---

## Typography Rules

Use the font utility classes defined in `tailwind.config.ts`:

| Context | Class | Example |
|---------|-------|---------|
| Headlines | `font-heading uppercase tracking-wide` | Page titles, section headers |
| Body | `font-body` (default) | Paragraphs, form labels |
| Data | `font-mono` | Prices (£29.99), SKUs, measurements, job numbers |

**Constraint:** Never use Inter, Roboto, or generic system fonts for display text.

---

## Color System

**CRITICAL:** Use semantic CSS variables - NEVER hardcode hex values.

### Primary Actions
```tsx
className="bg-primary text-primary-foreground"
```

### Status Indicators
| State | Text Class | Background Class |
|-------|------------|------------------|
| Success | `text-success` | `bg-success/10` |
| Warning | `text-warning` | `bg-warning/10` |
| Error | `text-error` or `text-destructive` | `bg-error/10` |

### Surfaces
```tsx
// Standard surfaces
className="bg-background"      // Main page background
className="bg-card"            // Card containers
className="bg-muted"           // Subtle backgrounds
className="text-foreground"    // Primary text
className="text-muted-foreground" // Secondary text
className="border-border"      // Standard borders
```

### Legacy Tokens (migrate when touching related code)
These older tokens are still in `globals.css` but should be replaced with semantic equivalents:
- `--primary-accent` (#e5c230) → use `--primary` with opacity
- `--foreground-accent` (#454545) → use `--muted-foreground`
- `--hero-background` (#F3F3F5) → use `--muted`

---

## Visual Language

### Borders
- Always use 1px solid borders with `border-border`
- High contrast dividers between sections

### Corners
- Default corners via `--radius: 0.75rem` (12px) inherited from shadcn
- For more industrial look, manually apply `rounded-sm` (4px) or `rounded-none`
- Consider reducing `--radius` in globals.css for full trades aesthetic

### Surfaces
- Solid, opaque backgrounds - NO glassmorphism
- Use `bg-card` for elevated surfaces

---

## Animation Strategy

This project uses two animation systems intentionally:

### CSS Keyframes (globals.css) - Simple Transitions
- `fade-in-up` / `fade-in` keyframes for page load animations
- Stagger delay classes: `.stagger-1` through `.stagger-8` (0.1s increments)
- `.gradient-text` utility for primary/secondary gradient text
- Button press micro-interaction (1px translateY on `:active`)

Use CSS animations for: page load effects, hover states, simple reveals.

### Framer Motion - Scroll-Triggered Orchestration
- Used only in `BenefitSection.tsx` and `BenefitBullet.tsx`
- Spring physics: `bounce: 0.2`, `duration: 0.9`
- Container/child stagger pattern: `delayChildren: 0.2`, `staggerChildren: 0.1`
- `whileInView="onscreen"` with `viewport={{ once: true }}`

Use Framer Motion for: scroll-triggered animations, complex orchestrated sequences.

**Why the split:** CSS handles simple transitions with zero JS overhead. Framer Motion is only loaded where scroll-triggered orchestration is needed, keeping the bundle small.

### Transitions
Use the trades-specific transition utilities:
```tsx
className="transition-all duration-mechanical ease-mechanical"
// duration-mechanical = 150ms
// ease-mechanical = snappy cubic-bezier(0.25, 0.1, 0.25, 1)
```

### Button Press Feedback
All buttons automatically have a "pressed" state via `globals.css`:
```css
button:active:not(:disabled) {
  transform: translateY(1px);
}
```

---

## Layout Guidelines

### Desktop (Office Admin)
- High density for data tables
- `text-sm`, `py-2 px-3` cell padding
- Visible row dividers

### Mobile (Field View)
- Large touch targets (44px minimum height)
- Generous padding: `py-4 px-4`
- Single-column layouts
- Clear section separation

### Section Dividers
Always use clear dividers between distinct areas:
```tsx
<div className="border-t border-border" />
```

### Fluid Sizing
Use CSS `clamp()` values from `globals.css` for responsive sizing without breakpoints:
```css
/* Typography */
font-size: var(--text-display-xl);  /* clamp(3rem, 5vw + 1rem, 5rem) */
font-size: var(--text-body-lg);     /* clamp(1.125rem, 1.5vw, 1.25rem) */

/* Spacing */
padding: var(--space-section);      /* clamp(4rem, 8vw, 8rem) */
gap: var(--space-element);          /* clamp(2rem, 3vw, 3rem) */
```

---

## Accessibility Requirements

- Status colors are standardized (green=success, amber=warning, red=error)
- Uppercase text limited to short labels only (accessibility concern)
- All interactive elements must have visible focus states
- Respect `prefers-reduced-motion` for all animations (CSS and canvas)
- Canvas-based animations (ParticlesBackground) must check `prefers-reduced-motion` and hide if enabled
- Semantic HTML: use `nav`, `main`, `article`, `footer`, proper heading hierarchy

---

## Common Patterns

### Status Badge
```tsx
<Badge className="bg-success/10 text-success border-success/20">
  Active
</Badge>
```

### Warning Box
```tsx
<div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
  <p className="text-sm text-warning-foreground">Warning message</p>
</div>
```

### Data Display
```tsx
<span className="font-mono text-sm">£1,234.56</span>
<span className="font-mono text-xs">JOB-2024-001234</span>
```

### Section Header
```tsx
<h2 className="font-heading uppercase tracking-wide text-lg">
  Section Title
</h2>
```

---

## What NOT to Do

```tsx
// WRONG - Hardcoded colors
className="bg-[#222] text-[#FFD700]"
className="text-green-500 bg-amber-100"

// CORRECT - Semantic tokens
className="bg-background text-primary"
className="text-success bg-warning/10"
```

```tsx
// WRONG - Generic font
className="font-sans"

// CORRECT - Trades fonts
className="font-heading" // Headlines
className="font-body"    // Body text
className="font-mono"    // Data/numbers
```

```tsx
// WRONG - Framer Motion for simple hover
<motion.div whileHover={{ scale: 1.05 }}>

// CORRECT - CSS transition for simple hover
className="transition-all duration-mechanical ease-mechanical hover:scale-105"
```

---

## Files Reference

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Font families, colors, transitions |
| `app/globals.css` | CSS variables, keyframes, stagger utilities |
| `app/layout.tsx` | Font loading with next/font |
| `CLAUDE.md` | Project-wide rules |
| `public/icons/features-sprite.svg` | SVG sprite for feature icons |
