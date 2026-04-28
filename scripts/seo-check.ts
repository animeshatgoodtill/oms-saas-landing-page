/**
 * Build-time SEO audit for blog posts.
 *
 * Run: npx tsx scripts/seo-check.ts
 *
 * Checks every MDX post in src/content/blog/ for:
 * - Missing or short title (< 10 chars)
 * - Missing or wrong-length description (< 50 or > 160 chars)
 * - Missing date
 * - Missing tags
 * - Missing heroImage
 * - Title too long for Google (> 60 chars)
 * - Duplicate titles across posts
 * - Draft posts that would be excluded
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

interface Issue {
    file: string;
    level: 'error' | 'warning';
    message: string;
}

function audit(): Issue[] {
    const issues: Issue[] = [];

    if (!fs.existsSync(BLOG_DIR)) {
        console.log('ℹ  No blog directory found at src/content/blog/ — skipping audit.');
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

    if (files.length === 0) {
        console.log('ℹ  No .mdx files found — skipping audit.');
        return [];
    }

    const titles: Map<string, string> = new Map();

    for (const filename of files) {
        const filePath = path.join(BLOG_DIR, filename);
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(raw);

        // Draft check (info only)
        if (data.draft) {
            issues.push({ file: filename, level: 'warning', message: 'Post is marked as draft — will not appear on site' });
        }

        // Title checks
        if (!data.title) {
            issues.push({ file: filename, level: 'error', message: 'Missing title in frontmatter' });
        } else {
            if (data.title.length < 10) {
                issues.push({ file: filename, level: 'error', message: `Title too short (${data.title.length} chars, minimum 10)` });
            }
            if (data.title.length > 60) {
                issues.push({ file: filename, level: 'warning', message: `Title may be truncated in Google (${data.title.length} chars, recommended ≤60)` });
            }
            // Duplicate check
            if (titles.has(data.title)) {
                issues.push({ file: filename, level: 'error', message: `Duplicate title — also used by ${titles.get(data.title)}` });
            }
            titles.set(data.title, filename);
        }

        // Description checks
        if (!data.description) {
            issues.push({ file: filename, level: 'error', message: 'Missing description in frontmatter' });
        } else {
            if (data.description.length < 50) {
                issues.push({ file: filename, level: 'warning', message: `Description too short (${data.description.length} chars, recommended ≥50)` });
            }
            if (data.description.length > 160) {
                issues.push({ file: filename, level: 'warning', message: `Description may be truncated in search results (${data.description.length} chars, recommended ≤160)` });
            }
        }

        // Date check
        if (!data.date) {
            issues.push({ file: filename, level: 'error', message: 'Missing date in frontmatter' });
        }

        // Tags check
        if (!data.tags || !Array.isArray(data.tags) || data.tags.length === 0) {
            issues.push({ file: filename, level: 'warning', message: 'No tags — add tags for topic clustering and filtering' });
        }

        // Hero image check
        if (!data.heroImage) {
            issues.push({ file: filename, level: 'warning', message: 'No heroImage — posts with images get better social sharing and CTR' });
        }

        // Content checks
        const words = content.trim().split(/\s+/).length;
        if (words < 300) {
            issues.push({ file: filename, level: 'warning', message: `Thin content (${words} words) — aim for ≥800 words for SEO` });
        }

        // Check for H1 in content (should use frontmatter title, not in-content H1)
        if (/^#\s+/m.test(content)) {
            issues.push({ file: filename, level: 'warning', message: 'Content contains a # H1 heading — the title frontmatter is used as H1, use ## H2 instead' });
        }
    }

    return issues;
}

// Run
const issues = audit();

if (issues.length === 0) {
    console.log('✅ SEO audit passed — no issues found.');
    process.exit(0);
}

const errors = issues.filter(i => i.level === 'error');
const warnings = issues.filter(i => i.level === 'warning');

console.log(`\nSEO Audit: ${issues.length} issue(s) found\n`);

if (errors.length > 0) {
    console.log('ERRORS:');
    errors.forEach(i => console.log(`  ❌ ${i.file}: ${i.message}`));
}

if (warnings.length > 0) {
    console.log('\nWARNINGS:');
    warnings.forEach(i => console.log(`  ⚠️  ${i.file}: ${i.message}`));
}

console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)\n`);

if (errors.length > 0) {
    process.exit(1);
}
