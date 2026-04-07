import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative pb-16 pt-24 md:pt-32 px-5 bg-white overflow-hidden"
        >
            {/* Lightspeed-style two-column layout */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="text-left space-y-6">
                        {/* Category Label */}
                        <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-foreground/70">
                            Operations Management Platform
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            {heroDetails.heading}
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl">
                            {heroDetails.subheading}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                            <a
                                href="mailto:hello@opscel.com?subject=Demo Request"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block text-center min-w-[180px]"
                            >
                                Watch a demo
                            </a>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground px-8 py-4 rounded-md font-semibold transition-colors inline-block text-center min-w-[180px]"
                            >
                                Start free trial
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[550px]">
                            <Image
                                src={heroDetails.heroImageSrc}
                                width={950}
                                height={1000}
                                quality={100}
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 550px"
                                priority={true}
                                alt="Opscel mobile app - field engineer using deficiencies tracking"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
