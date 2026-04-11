import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-5">
                {/* Contained card with rounded corners */}
                <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-[#f0f4ff] pt-8 md:pt-10 pb-0 px-8 md:px-12">

                    {/* Gradient orbs */}
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%]"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.15) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                    />
                    <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%]"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.2) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                    />
                    <div className="absolute bottom-[0%] right-[10%] w-[40%] h-[50%]"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.12) 0%, transparent 70%)',
                            filter: 'blur(30px)',
                        }}
                    />

                    {/* Diagonal lines */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                repeating-linear-gradient(
                                    -45deg,
                                    transparent,
                                    transparent 40px,
                                    rgba(48,79,255,0.06) 40px,
                                    rgba(48,79,255,0.06) 41px
                                )
                            `,
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Heading - top left */}
                        <h2 className="max-w-sm text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 md:mb-8">
                            A back-office that actually has your back.
                        </h2>

                        {/* Dashboard image - right-aligned, flush to bottom */}
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
