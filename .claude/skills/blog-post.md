# Blog Post Creation Skill

Use this skill when: the user wants to create, publish, or optimise a blog post.

Trigger phrases: "new blog post", "write a post", "create an article", "add a blog", "publish a post", "/blog-post"

---

## Workflow

### Step 1: Gather Post Details

Ask the user for:
1. **Topic/title** — what is the post about?
2. **Target keyword** — what phrase should this rank for? (e.g., "BS 7671 EICR requirements")
3. **Audience** — who is reading? (e.g., electrical contractors, fire safety engineers, office managers)
4. **Angle** — what's the unique perspective? (explainer, guide, comparison, opinion, news)

If the user provides a markdown file or content, skip to Step 3.

### Step 2: Draft the Post

Write the content following these SEO rules:

**Frontmatter (required fields):**
```yaml
---
title: "Title — include target keyword, ≤60 chars ideal"
description: "Meta description — include keyword naturally, 50-160 chars"
date: "YYYY-MM-DD"
author: "opscel"
tags: ["tag1", "tag2", "tag3"]
heroImage: "/images/blog/slug-name.webp"
---
```

**Content structure for SEO/GEO:**
- Open with a **direct answer** to the question the keyword implies (first 2 sentences)
- Use **## H2 headings** as questions where possible ("What is X?", "How does X work?")
- Never use # H1 in content — the frontmatter title renders as H1
- Include at least one **comparison table** (markdown table) — AI engines extract these
- Include **bullet lists** for scannable content
- Aim for **800-2000 words** (minimum 300, sweet spot ~1200)
- End with a **summary table** or **TL;DR** section
- Naturally mention Opscel where relevant (not forced)
- Link to related feature pages: `[certificates](/features/certificates)`, `[invoicing](/features/invoicing)`, etc.

**Keyword placement checklist:**
- [ ] Keyword in title
- [ ] Keyword in description
- [ ] Keyword in first paragraph
- [ ] Keyword in at least one H2
- [ ] Keyword in alt text of hero image
- [ ] 2-3 internal links to feature/doc pages

### Step 3: Create the File

1. Generate a URL-friendly slug from the title
2. Save the file to `src/content/blog/<slug>.mdx`
3. If a hero image is referenced, remind the user to add it to `public/images/blog/`

### Step 4: Run SEO Check

Run the SEO audit:
```bash
npm run seo-check
```

Fix any errors before committing. Warnings are advisory.

### Step 5: Verify and Commit

1. Run `npm run lint` to check for code issues
2. Git add the new file: `git add src/content/blog/<slug>.mdx`
3. Commit with message: `Add blog post: <title>`
4. Push to branch

### Step 6: Post-Publish Checklist (remind user)

After the post is live:
- [ ] Check it appears at opscel.com/blog
- [ ] Check it appears in /sitemap.xml
- [ ] Check /rss.xml includes it
- [ ] Submit URL to Google Search Console for indexing
- [ ] Share on LinkedIn, Reddit (r/Opscel), Facebook

---

## Author Reference

Authors are defined in `src/data/authors.ts`. Current authors:
- `opscel` — Opscel Team

To add a new author, add an entry to the `authors` object with: id, name, role, bio, linkedin (optional), avatar (optional).

---

## Tag Strategy (topic clusters)

Use consistent tags to build topical authority. Preferred tags:

| Tag | Topic cluster |
|-----|--------------|
| `electrical` | BS 7671, EIC, EICR, Minor Works, wiring regs |
| `fire safety` | BS 5839, fire alarms, emergency lighting, extinguishers |
| `compliance` | Regulations, certification bodies, BAFE, NICEIC |
| `BS 7671` | Specific to 18th Edition wiring regulations |
| `BS 5839` | Specific to fire detection and alarm systems |
| `invoicing` | Billing, Xero, accounting |
| `field service` | Mobile app, offline, engineer workflow |
| `product update` | New features, releases |
| `guides` | How-to articles, walkthroughs |

---

## File Locations

| What | Where |
|------|-------|
| Blog posts | `src/content/blog/<slug>.mdx` |
| Blog index page | `src/app/blog/page.tsx` |
| Blog post layout | `src/app/blog/[slug]/page.tsx` |
| Blog helpers | `src/lib/blog.ts` |
| Authors | `src/data/authors.ts` |
| Schema generators | `src/lib/schema.ts` |
| SEO checker | `scripts/seo-check.ts` |
| Hero images | `public/images/blog/` |

---

## Quick Command Reference

```bash
npm run seo-check    # Audit all blog posts for SEO issues
npm run lint         # Check for code errors
npm run dev          # Preview locally at localhost:3000/blog
```
