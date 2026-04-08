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
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-foreground leading-tight whitespace-nowrap">
                            {heroDetails.heading}
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
                            {heroDetails.subheading}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="mailto:hello@opscel.com?subject=Demo Request"
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
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
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
