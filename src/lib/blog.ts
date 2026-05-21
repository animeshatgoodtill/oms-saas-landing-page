import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IBlogPostMeta } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function calculateReadingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): IBlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

    const posts = files
        .map(filename => {
            const slug = filename.replace(/\.mdx$/, '');
            const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
            const { data, content } = matter(raw);

            return {
                slug,
                title: data.title ?? '',
                description: data.description ?? '',
                date: data.date ?? '',
                lastUpdated: data.lastUpdated,
                author: data.author ?? 'opscel',
                tags: data.tags ?? [],
                heroImage: data.heroImage,
                draft: data.draft ?? false,
                readingTime: calculateReadingTime(content),
            } satisfies IBlogPostMeta;
        })
        .filter(post => !post.draft)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): { meta: IBlogPostMeta; content: string } | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const meta: IBlogPostMeta = {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        lastUpdated: data.lastUpdated,
        author: data.author ?? 'opscel',
        tags: data.tags ?? [],
        heroImage: data.heroImage,
        draft: data.draft ?? false,
        readingTime: calculateReadingTime(content),
    };

    return { meta, content };
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): IBlogPostMeta[] {
    return getAllPosts().filter(post =>
        post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
}
