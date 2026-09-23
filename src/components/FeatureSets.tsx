import React from 'react';
import Link from 'next/link';
import { FiRefreshCw, FiGrid, FiRadio, FiFileText, FiGlobe, FiDownload, FiArrowRight } from 'react-icons/fi';

import Container from './Container';
import { featureSets, FeatureSetIcon } from '@/data/featureSets';

const ICONS: Record<FeatureSetIcon, React.ReactNode> = {
    contracts: <FiRefreshCw size={22} />,
    assets: <FiGrid size={22} />,
    monitoring: <FiRadio size={22} />,
    certificates: <FiFileText size={22} />,
    portal: <FiGlobe size={22} />,
    import: <FiDownload size={22} />,
};

/**
 * "Everything else the business needs" — plain, scannable cards. The product UI
 * is shown in the WorkflowProof animation above; UI fragments here (chips
 * without their screen) read as noise, so each card is: icon, plan, headline,
 * one line, and where it leads.
 */
const FeatureSets: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background" id="features">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
                            Everything else the business needs.
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            The work between jobs: contracts, registers, alarm cases and moving your data across.
                        </p>
                    </div>
                    <Link href="/features" className="inline-flex items-center gap-2 font-semibold text-secondary hover:underline shrink-0">
                        See every feature <FiArrowRight aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featureSets.map(f => (
                        <Link
                            key={f.href}
                            href={f.href}
                            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-7 transition-all duration-200 hover:border-secondary/40 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                        >
                            <span className="flex items-center justify-between">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef1ff] text-secondary" aria-hidden="true">
                                    {ICONS[f.icon]}
                                </span>
                                <span className="text-xs font-semibold text-muted-foreground">{f.plan}</span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <h3 className="font-heading text-xl md:text-[1.35rem] font-bold tracking-tight text-foreground">
                                    {f.title}
                                </h3>
                                <p className="text-base leading-relaxed text-muted-foreground">{f.body}</p>
                            </span>
                            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                                Learn more <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeatureSets;
