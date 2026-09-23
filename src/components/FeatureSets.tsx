import React from 'react';
import Link from 'next/link';
import { FiRefreshCw, FiGrid, FiRadio, FiFileText, FiGlobe, FiDownload, FiArrowRight } from 'react-icons/fi';

import Container from './Container';
import { featureSets, ChipTone, FeatureSetIcon } from '@/data/featureSets';

const ICONS: Record<FeatureSetIcon, React.ReactNode> = {
    contracts: <FiRefreshCw size={26} />,
    assets: <FiGrid size={26} />,
    monitoring: <FiRadio size={26} />,
    certificates: <FiFileText size={26} />,
    portal: <FiGlobe size={26} />,
    import: <FiDownload size={26} />,
};

// One colour per meaning, matching the product UI: green = done, the app's blue =
// an action, everything else neutral.
const TONE: Record<ChipTone, string> = {
    plain: 'text-foreground',
    muted: 'text-muted-foreground',
    mono: 'font-mono text-muted-foreground',
    ok: 'font-semibold bg-[#dcf5e4] text-[#0e6b31] px-2.5 py-0.5 rounded-full',
    action: 'font-semibold bg-[#0280c4] text-white px-3 py-1 rounded-md',
    tag: 'font-semibold bg-[#f0f2fa] text-[#3b3f4a] px-2.5 py-1 rounded-full',
};

const FeatureSets: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background" id="features">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-14">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
                    {featureSets.map(f => (
                        <Link
                            key={f.href}
                            href={f.href}
                            className="group flex flex-col gap-3 border-t border-border pt-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 rounded-sm"
                        >
                            <span className="flex items-center justify-between">
                                <span className="text-secondary" aria-hidden="true">{ICONS[f.icon]}</span>
                                <span className="text-xs font-semibold text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">{f.plan}</span>
                            </span>
                            <h3 className="font-heading text-xl md:text-[1.4rem] font-bold tracking-tight text-foreground group-hover:text-secondary transition-colors">
                                {f.title}
                            </h3>
                            <p className="text-base md:text-[1.05rem] leading-relaxed text-muted-foreground">{f.body}</p>
                            <span className={`mt-1 self-start flex flex-wrap items-center gap-2 text-sm ${f.chip.every(c => c.tone === 'tag') ? '' : 'border border-border rounded-lg px-3 py-2'}`} aria-hidden="true">
                                {f.chip.map(c => (
                                    <span key={c.text} className={TONE[c.tone]}>{c.text}</span>
                                ))}
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeatureSets;
