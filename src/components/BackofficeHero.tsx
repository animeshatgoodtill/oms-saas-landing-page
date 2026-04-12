import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    // Generate wavy parallel lines - bezier curves from bottom-left to top-right
    const lines = Array.from({ length: 32 }, (_, i) => {
        const offset = i * 6;
        // Fade opacity at the edges of the line stack
        const distFromCenter = Math.abs(i - 15.5) / 15.5;
        const opacity = 0.35 * (1 - distFromCenter * 0.7);
        return { offset, opacity };
    });

    return (
        <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-5">
                {/* Contained card */}
                <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-white pt-8 md:pt-10 pb-0 px-8 md:px-12">

                    {/* SVG wave lines - bottom-left to top-right */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 1200 700"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {lines.map((line, i) => (
                            <path
                                key={i}
                                d={`M -50 ${550 + line.offset} C 300 ${650 + line.offset}, 600 ${100 + line.offset}, 1250 ${200 + line.offset}`}
                                stroke={`rgba(48,79,255,${line.opacity})`}
                                strokeWidth="1"
                                fill="none"
                            />
                        ))}
                    </svg>

                    {/* Subtle gradient wash on top of lines */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(48,79,255,0.08) 0%, transparent 70%)',
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(254,216,53,0.1) 0%, transparent 70%)',
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="max-w-sm text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 md:mb-8">
                            A back-office that actually has your back.
                        </h2>

                        <div className="lg:ml-[20%]">
                            <Image
                                src="/images/opscel-backoffice.png"
                                alt="Opscel dashboard with reports, analytics, invoices, and conversion funnel"
                                width={1400}
                                height={900}
                                quality={100}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 80vw, 950px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
