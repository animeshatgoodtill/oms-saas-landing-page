import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { siteDetails } from '@/data/siteDetails';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import BlogCard from '@/components/BlogCard';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
    title: `Blog | ${siteDetails.siteName}`,
    description: 'Guides, compliance updates, and practical advice for fire safety and electrical contractors. BS 7671, BS 5839, digital certificates, and operations management.',
    alternates: {
        types: {
            'application/rss+xml': '/rss.xml',
        },
    },
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: siteDetails.siteUrl },
        { name: 'Blog', url: `${siteDetails.siteUrl}/blog` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHeader
                title="Blog"
                description="Compliance guides, product updates, and practical advice for fire safety and electrical contractors."
            />
            <section className="py-16 md:py-24">
                <Container>
                    {posts.length === 0 ? (
                        <p className="text-center text-muted-foreground text-lg">
                            Posts coming soon. Check back shortly.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
}
