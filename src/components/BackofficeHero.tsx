import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            {/* Light base with layered radial gradient orbs (Stripe technique) */}
            <div className="absolute inset-0 bg-[#f8fafd]">
                {/* Blue orb - top left */}
                <div
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] opacity-30"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.6) 0%, transparent 100%)',
                        filter: 'blur(80px)',
                    }}
                />
                {/* Yellow orb - center right */}
                <div
                    className="absolute top-[10%] right-[-5%] w-[50%] h-[60%] opacity-25"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.7) 0%, transparent 100%)',
                        filter: 'blur(80px)',
                    }}
                />
                {/* Secondary blue orb - bottom right */}
                <div
                    className="absolute bottom-[-15%] right-[10%] w-[45%] h-[50%] opacity-20"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(48,79,255,0.5) 0%, transparent 100%)',
                        filter: 'blur(60px)',
                    }}
                />
                {/* Subtle warm accent - bottom left */}
                <div
                    className="absolute bottom-[0%] left-[5%] w-[35%] h-[40%] opacity-15"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(254,216,53,0.5) 0%, transparent 100%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            {/* Content - text top-left, image floating right */}
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                <div className="relative min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
                    {/* Heading - top left */}
                    <h2 className="relative lg:absolute lg:top-0 lg:left-0 lg:max-w-md text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 lg:mb-0">
                        A back-office that actually has your back.
                    </h2>

                    {/* Dashboard image - floating right */}
                    <div className="relative lg:absolute lg:right-0 lg:top-8 lg:w-[72%]">
                        <Image
                            src="/images/opscel-backoffice.png"
                            alt="Opscel dashboard with reports, analytics, invoices, and conversion funnel"
                            width={1400}
                            height={900}
                            quality={100}
                            className="w-full h-auto drop-shadow-2xl"
                            sizes="(max-width: 768px) 95vw, (max-width: 1280px) 72vw, 900px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
