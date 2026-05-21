import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    // Generate wavy parallel lines - tight/twisted at bottom-left, spread out at top-right
    const lines = Array.from({ length: 30 }, (_, i) => {
        // Lines start tightly bunched and fan out as they go right
        const startOffset = i * 2;   // tight at start
        const endOffset = i * 8;      // spread at end
        // Fade opacity at the edges of the line stack
        const distFromCenter = Math.abs(i - 14.5) / 14.5;
        const opacity = 0.56 * (1 - distFromCenter * 0.6);
        return { startOffset, endOffset, opacity };
    });

    return (
        <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-5">
                {/* Contained card */}
                <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-white pt-8 md:pt-10 pb-0 px-8 md:px-12">

                    {/* SVG wave lines - twist at bottom-left, open up at top-right */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 1200 700"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#304fff" />
                                <stop offset="100%" stopColor="#FED835" />
                            </linearGradient>
                        </defs>
                        {lines.map((line, i) => (
                            <path
                                key={i}
                                d={`M -50 ${520 + line.startOffset} C 300 ${640 + line.startOffset * 1.5}, 600 ${120 + line.endOffset * 0.6}, 1250 ${160 + line.endOffset}`}
                                stroke="url(#waveGradient)"
                                strokeOpacity={line.opacity}
                                strokeWidth="1.5"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                        ))}
                    </svg>

                    {/* Content */}
                    <div className="relative z-10 grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-8 items-start">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight lg:pt-4">
                            A back-office that actually has your back.
                        </h2>

                        <div className="lg:translate-y-8">
                            <Image
                                src="/images/opscel-backoffice.png"
                                alt="Opscel dashboard with reports, analytics, invoices, and conversion funnel"
                                width={1400}
                                height={900}
                                quality={100}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 80vw, 1000px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
