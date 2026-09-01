import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative pb-8 pt-24 md:pt-32 overflow-hidden min-h-[calc(100vh-80px)] bg-hero-background"
        >

            {/* Stripe-style two-column layout */}
            <div className="max-w-7xl mx-auto px-5 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-12 items-center h-full">
                    {/* Left Column - Content */}
                    <div className="text-left">
                        <p className="text-base md:text-lg font-medium text-foreground/70 mb-4">
                            {heroDetails.categoryLine}
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-foreground leading-tight lg:whitespace-nowrap">
                            {heroDetails.heading}
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
                            {heroDetails.subheading}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="https://calendar.app.google/Tp8Hwzbf6tVMGDkW6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors inline-block"
                            >
                                Book a demo
                            </a>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 rounded-full font-medium transition-colors inline-block"
                            >
                                Start free trial
                            </a>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            {heroDetails.ctaMicrocopy}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-hero-background bg-blue-100 text-blue-800 flex items-center justify-center text-[0.6rem] font-bold">FS</div>
                                <div className="w-8 h-8 rounded-full border-2 border-hero-background bg-amber-100 text-amber-800 flex items-center justify-center text-[0.6rem] font-bold">EC</div>
                                <div className="w-8 h-8 rounded-full border-2 border-hero-background bg-green-100 text-green-800 flex items-center justify-center text-[0.6rem] font-bold">GS</div>
                                <div className="w-8 h-8 rounded-full border-2 border-hero-background bg-pink-100 text-pink-800 flex items-center justify-center text-[0.6rem] font-bold">+</div>
                            </div>
                            <span className="text-sm text-muted-foreground">Trusted by UK fire safety &amp; electrical contractors</span>
                        </div>
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        {/* Decorative gradient blob — fixed-size wrapper so it can never affect layout or become LCP */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 w-full h-full max-w-[625px] max-h-[700px] mx-auto lg:mx-0 pointer-events-none overflow-hidden"
                        >
                            <div
                                className="absolute -top-10 -right-10 w-[420px] h-[420px] rounded-full opacity-[0.2]"
                                style={{
                                    background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
                                }}
                            />
                            <div
                                className="absolute -bottom-16 -left-10 w-[360px] h-[360px] rounded-full opacity-[0.18]"
                                style={{
                                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                                }}
                            />
                        </div>
                        <Image
                            src={heroDetails.heroImageSrc}
                            width={950}
                            height={1000}
                            quality={100}
                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 625px"
                            priority={true}
                            alt="Opscel mobile app - field engineer using deficiencies tracking"
                            className="relative z-10 w-full h-auto max-w-[500px] lg:max-w-[625px] mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
