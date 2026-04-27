import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';

import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { authors } from '@/data/authors';
import { siteDetails } from '@/data/siteDetails';
import Container from '@/components/Container';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

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

                    {/* Header */}
                    <header className="max-w-3xl mb-10">
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
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
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

                    {/* Hero image */}
                    {meta.heroImage && (
                        <div className="max-w-4xl mb-12 rounded-2xl overflow-hidden">
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

                    {/* Content */}
                    <div className="max-w-3xl prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-secondary prose-strong:text-foreground prose-table:text-sm">
                        <MDXRemote source={content} />
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mt-16 p-8 rounded-2xl bg-hero-background border border-border/50">
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
