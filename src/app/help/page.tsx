import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import HelpSearch from '@/components/HelpSearch';
import { siteDetails } from '@/data/siteDetails';
import { documentationGuides, documentationCategories } from '@/data/documentationGuides';
import { docGuides } from '@/data/docs';
import { buildSearchIndex } from '@/lib/searchIndex';

export const metadata: Metadata = {
    title: `Help Centre | ${siteDetails.siteName}`,
    description: 'Search the Opscel help centre for guides on certificates, quotes, invoicing, field service, and more — or browse every guide by topic.',
};

export default function HelpPage() {
    const searchRecords = buildSearchIndex(docGuides);

    return (
        <>
            <PageHero
                eyebrow="Help Centre"
                title="How can we help?"
                description="Search our documentation, or browse every guide by topic below."
            />

            {/* ── SEARCH ── */}
            <section className="bg-white" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 0' }}>
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <HelpSearch records={searchRecords} />
                    </div>
                </Container>
            </section>

            {/* ── BROWSE BY CATEGORY ── */}
            <section className="bg-white" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0' }}>
                <Container>
                    <div className="max-w-6xl mx-auto">
                    {documentationCategories.map((category) => (
                        <section key={category} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">{category}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {documentationGuides
                                    .filter((guide) => guide.category === category)
                                    .map((guide) => (
                                        <Link
                                            key={guide.url}
                                            href={guide.url}
                                            className="group bg-white border border-border rounded-lg p-6 hover:border-secondary hover:shadow-lg transition-all"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                    <svg className="w-7 h-7">
                                                        <use href={`/icons/features-sprite.svg#${guide.icon}`} />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                                                        {guide.title}
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {guide.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </section>
                    ))}
                    </div>
                </Container>
            </section>

            {/* ── NEED HELP ── */}
            <section style={{ padding: '0 0 clamp(3rem, 5vw, 5rem)' }}>
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-hero-background rounded-lg p-8 text-center border border-border">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Still stuck?</h2>
                            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                                Can&apos;t find what you&apos;re looking for? Our support team is here to help with setup, training, and any questions you have.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:support@opscel.com"
                                    className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                                >
                                    Email Support
                                </a>
                                <a
                                    href="https://app.opscel.com/handler/sign-up"
                                    className="bg-white text-secondary border-2 border-secondary px-6 py-3 rounded-full font-semibold hover:bg-muted transition-colors"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
