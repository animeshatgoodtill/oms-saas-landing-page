import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-[#0a0e27]">
                <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.4)_0%,transparent_70%)] blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.4)_0%,transparent_70%)] blur-3xl" />
                <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.2)_0%,transparent_60%)] blur-2xl" />
                <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.15)_0%,transparent_60%)] blur-2xl" />
            </div>

            {/* Mesh lines overlay */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            -30deg,
                            transparent,
                            transparent 80px,
                            rgba(255,255,255,0.5) 80px,
                            rgba(255,255,255,0.5) 81px
                        ),
                        repeating-linear-gradient(
                            60deg,
                            transparent,
                            transparent 80px,
                            rgba(255,255,255,0.5) 80px,
                            rgba(255,255,255,0.5) 81px
                        )
                    `,
                }}
            />

            {/* Content - text bottom-left, image floating right */}
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
                    {/* Dashboard image - floating right/center */}
                    <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-[75%] mb-8 lg:mb-0">
                        <Image
                            src="/images/opscel-backoffice.png"
                            alt="Opscel dashboard with reports, analytics, invoices, and conversion funnel"
                            width={1400}
                            height={900}
                            quality={100}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 95vw, (max-width: 1280px) 75vw, 900px"
                        />
                    </div>

                    {/* Heading - bottom left */}
                    <h2 className="relative lg:absolute lg:bottom-0 lg:left-0 lg:max-w-md text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        A back-office that actually has your back.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
