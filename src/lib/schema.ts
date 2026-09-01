import { IBlogPostMeta, IAuthor } from '@/types';
import { siteDetails } from '@/data/siteDetails';
import { tiers } from '@/data/pricing';

export function generateArticleSchema(post: IBlogPostMeta, author: IAuthor) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.lastUpdated ?? post.date,
        author: {
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            ...(author.linkedin && { url: author.linkedin }),
        },
        publisher: {
            '@type': 'Organization',
            name: siteDetails.siteName,
            url: siteDetails.siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteDetails.siteUrl}/images/opscel-logo.webp`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteDetails.siteUrl}/blog/${post.slug}`,
        },
        ...(post.heroImage && {
            image: `${siteDetails.siteUrl}${post.heroImage}`,
        }),
        wordCount: post.readingTime * 200,
        keywords: post.tags.join(', '),
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteDetails.siteName,
        url: siteDetails.siteUrl,
        logo: `${siteDetails.siteUrl}/images/opscel-logo.webp`,
        sameAs: [
            'https://www.linkedin.com/company/opscel',
            'https://www.facebook.com/profile.php?id=61575396313261',
            'https://www.youtube.com/channel/UCG6rw49ob1qY--Vwr3TUMmg',
            'https://www.reddit.com/r/Opscel/',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@opscel.com',
            contactType: 'sales',
        },
    };
}

export function generateSoftwareApplicationSchema() {
    const siteUrl = siteDetails.siteUrl.replace(/\/$/, '');

    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: siteDetails.siteName,
        url: siteUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: tiers.map(tier => ({
            '@type': 'Offer',
            name: tier.name,
            price: String(tier.priceGBP),
            priceCurrency: 'GBP',
            url: `${siteUrl}/#pricing`,
        })),
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
