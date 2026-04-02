import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';
import ParticlesBackground from './ParticlesBackground';
import AnimatedGradientBackground from './AnimatedGradientBackground';

const HeroVariation2: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative pb-16 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Animated Gradient Background */}
            <AnimatedGradientBackground />

            {/* Base Background */}
            <div className="absolute left-0 top-0 bottom-0 -z-20 w-full bg-hero-background">
            </div>

            {/* Stripe-style two-column layout */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            {heroDetails.heading}
                        </h1>
                        <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-xl">
                            {heroDetails.subheading}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors inline-block"
                            >
                                Join Pilot Program
                            </a>
                            <a
                                href="mailto:hello@opscel.com?subject=Demo Request"
                                className="border border-foreground/30 hover:border-foreground/60 text-foreground px-8 py-3 rounded-full font-medium transition-colors inline-block"
                            >
                                Book Demo
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <Image
                            src={heroDetails.heroImageSrc}
                            width={672}
                            height={800}
                            quality={95}
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 672px"
                            priority={true}
                            alt="Opscel mobile app - field engineer using deficiencies tracking"
                            className="relative z-10 w-full h-auto max-w-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroVariation2;
