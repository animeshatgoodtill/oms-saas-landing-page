import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { authors } from '@/data/authors';
import { siteDetails } from '@/data/siteDetails';
import Container from '@/components/Container';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings: { id: string; text: string; level: number }[] = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const text = match[2].trim();
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        headings.push({ id, text, level: match[1].length });
    }
    return headings;
}

export function generateStaticParams() {
    return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const result = getPostBySlug(params.slug);
    if (!result) return { title: 'Post Not Found' };

    const { meta } = result;
    return {
        title: `${meta.title} | ${siteDetails.siteName}`,
        description: meta.description,
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: 'article',
            publishedTime: meta.date,
            modifiedTime: meta.lastUpdated ?? meta.date,
            authors: [authors[meta.author]?.name ?? meta.author],
            tags: meta.tags,
            ...(meta.heroImage && { images: [{ url: meta.heroImage }] }),
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const result = getPostBySlug(params.slug);
    if (!result) notFound();

    const { meta, content } = result;
    const author = authors[meta.author];
    const headings = extractHeadings(content);

    const formattedDate = new Date(meta.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const articleSchema = generateArticleSchema(meta, author);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: siteDetails.siteUrl },
        { name: 'Blog', url: `${siteDetails.siteUrl}/blog` },
        { name: meta.title, url: `${siteDetails.siteUrl}/blog/${meta.slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <article className="pt-32 md:pt-40 pb-16 md:pb-24">
                <Container>
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <FiArrowLeft size={16} />
                        <span>All posts</span>
                    </Link>

                    {/* Header - full width */}
                    <header className="mb-10">
                        {meta.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {meta.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium bg-secondary/10 text-secondary px-2.5 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-4xl">
                            {meta.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{author?.name ?? meta.author}</span>
                            <span className="flex items-center gap-1.5">
                                <FiCalendar size={14} />
                                <time dateTime={meta.date}>{formattedDate}</time>
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FiClock size={14} />
                                {meta.readingTime} min read
                            </span>
                        </div>
                    </header>

                    {/* Hero image - full width */}
                    {meta.heroImage && (
                        <div className="mb-12 rounded-2xl overflow-hidden">
                            <Image
                                src={meta.heroImage}
                                alt={meta.title}
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    )}

                    {/* Two-column layout: content + sidebar */}
                    <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
                        {/* Main content */}
                        <div className="min-w-0 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3 prose-h3:text-xl prose-h3:mt-8 prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-table:text-sm prose-th:bg-hero-background prose-th:px-4 prose-th:py-2.5 prose-td:px-4 prose-td:py-2.5 prose-td:border-border/50 prose-img:rounded-xl prose-li:text-foreground/80 prose-blockquote:border-secondary prose-blockquote:text-foreground/70 prose-hr:border-border/30">
                            <MDXRemote source={content} />
                        </div>

                        {/* Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-32 space-y-8">
                                {/* Table of Contents */}
                                {headings.length > 0 && (
                                    <nav>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                            On this page
                                        </h4>
                                        <ul className="space-y-2 text-sm border-l border-border pl-4">
                                            {headings.map(heading => (
                                                <li key={heading.id}>
                                                    <a
                                                        href={`#${heading.id}`}
                                                        className={`block text-muted-foreground hover:text-foreground transition-colors ${heading.level === 3 ? 'pl-3 text-xs' : ''}`}
                                                    >
                                                        {heading.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                )}

                                {/* Author card */}
                                {author && (
                                    <div className="rounded-xl border border-border/50 bg-hero-background p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <FiUser className="text-secondary" size={18} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground text-sm">{author.name}</p>
                                                <p className="text-xs text-muted-foreground">{author.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {author.bio}
                                        </p>
                                    </div>
                                )}

                                {/* Sidebar CTA */}
                                <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                                    <p className="font-semibold text-foreground text-sm mb-2">
                                        See it in action
                                    </p>
                                    <p className="text-xs text-muted-foreground mb-4">
                                        15-minute walkthrough of how Opscel handles this.
                                    </p>
                                    <a
                                        href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-center bg-secondary text-white hover:bg-secondary/90 px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
                                    >
                                        Book a demo
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Bottom CTA - visible on all screens */}
                    <div className="mt-16 p-8 rounded-2xl bg-hero-background border border-border/50">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Want to see how Opscel handles this?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Book a 15-minute demo and we&apos;ll walk through it live.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-colors"
                            >
                                Book a demo
                            </a>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-primary text-black hover:bg-primary-accent px-6 py-3 rounded-full font-medium transition-colors"
                            >
                                Start free trial
                            </a>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    );
}
