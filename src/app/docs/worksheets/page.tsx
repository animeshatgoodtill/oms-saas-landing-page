'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import DocSidebar from '@/components/DocSidebar';
import { worksheetsGuide } from '@/data/docs/worksheets-guide';
import { IDocSubsection } from '@/types';

export default function BrandingPage() {
    const [activeSection, setActiveSection] = useState<string>('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = worksheetsGuide.sections;
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderSubsection = (subsection: IDocSubsection, idx: number) => {
        return (
            <div key={idx} className="mb-8">
                {subsection.title && (
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {subsection.title}
                    </h3>
                )}
                {subsection.content && (
                    <div
                        className="prose prose-blue max-w-none mb-4 text-foreground-accent"
                        dangerouslySetInnerHTML={{ __html: subsection.content }}
                    />
                )}
                {subsection.bullets && subsection.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4 ml-6 list-disc">
                        {subsection.bullets.map((bullet, bulletIdx) => (
                            <li
                                key={bulletIdx}
                                className="text-foreground-accent"
                                dangerouslySetInnerHTML={{ __html: bullet }}
                            />
                        ))}
                    </ul>
                )}
                {subsection.steps && subsection.steps.length > 0 && (
                    <ol className="space-y-3 mb-4 ml-6 list-decimal">
                        {subsection.steps.map((step, stepIdx) => (
                            <li
                                key={stepIdx}
                                className="text-foreground-accent pl-2"
                                dangerouslySetInnerHTML={{ __html: step }}
                            />
                        ))}
                    </ol>
                )}
                {subsection.table && (
                    <div className="overflow-x-auto mb-6">
                        <table className="min-w-full border border-border rounded-lg overflow-hidden">
                            <thead className="bg-muted">
                                <tr>
                                    {subsection.table.headers.map((header, headerIdx) => (
                                        <th
                                            key={headerIdx}
                                            className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-border">
                                {subsection.table.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="hover:bg-muted/50 transition-colors">
                                        {row.map((cell, cellIdx) => (
                                            <td
                                                key={cellIdx}
                                                className="px-4 py-3 text-sm text-foreground-accent"
                                                dangerouslySetInnerHTML={{ __html: cell }}
                                            />
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    };

    return (
        <main>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
                <Container>
                    <nav className="text-sm mb-4 opacity-90">
                        <a href="/docs" className="hover:underline">Documentation</a>
                        <span className="mx-2">/</span>
                        <span>Settings & Admin</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        {worksheetsGuide.title}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        {worksheetsGuide.description}
                    </p>
                    <p className="text-sm text-blue-200 mt-4">
                        Last updated: {worksheetsGuide.lastUpdated}
                    </p>
                </Container>
            </section>

            {/* Main Content */}
            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <DocSidebar sections={worksheetsGuide.sections} activeSection={activeSection} />

                    {/* Content */}
                    <div className="flex-1 max-w-4xl">
                        {worksheetsGuide.sections.map((section) => (
                            <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                                    {section.title}
                                </h2>
                                {section.subsections?.map((subsection, idx) => renderSubsection(subsection, idx))}
                            </section>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}
