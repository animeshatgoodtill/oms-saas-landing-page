import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-12 md:pt-16 pb-0">
            {/* Light base with layered radial gradient orbs */}
            <div className="absolute inset-0 bg-[#f8fafd]">
                {/* Blue orb - top left */}
                <div
                    className="absolute -top-[10%] -left-[5%] w-[65%] h-[75%]"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.25) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Yellow orb - center right */}
                <div
                    className="absolute top-[5%] right-[-5%] w-[55%] h-[65%]"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.35) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Secondary blue orb - bottom right */}
                <div
                    className="absolute bottom-[-10%] right-[5%] w-[50%] h-[55%]"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.2) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Warm accent - bottom left */}
                <div
                    className="absolute bottom-[-5%] left-[0%] w-[40%] h-[45%]"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.3) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            {/* Content - text top-left, image floating right */}
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                {/* Heading - top left */}
                <h2 className="lg:max-w-md text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 md:mb-12">
                    A back-office that actually has your back.
                </h2>

                {/* Dashboard image - right-aligned, flush to bottom */}
                <div className="lg:ml-auto lg:w-[75%]">
                    <Image
                        src="/images/opscel-backoffice.png"
                        alt="Opscel dashboard with reports, analytics, invoices, and conversion funnel"
                        width={1400}
                        height={900}
                        quality={100}
                        className="w-full h-auto drop-shadow-2xl"
                        sizes="(max-width: 768px) 95vw, (max-width: 1280px) 75vw, 900px"
                    />
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
