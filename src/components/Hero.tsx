import React from 'react';
import Image from 'next/image';
import { FiMapPin, FiShield, FiWifiOff } from 'react-icons/fi';

import { heroDetails } from '@/data/hero';
import { companyDetails } from '@/data/companyDetails';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative pb-12 md:pb-16 pt-24 md:pt-32 overflow-hidden bg-hero-background"
        >

            {/* Stripe-style two-column layout */}
            <div className="max-w-7xl mx-auto px-5 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-12 items-center h-full">
                    {/* Left Column - Content */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-success" />
                            <span className="text-sm font-bold text-foreground">Built for BAFE, NICEIC, ECA &amp; FIA-registered contractors</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05] text-balance">
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
                                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                            >
                                Start free trial
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            {heroDetails.ctaMicrocopy}
                        </p>
                        {/* verifiable facts only — no invented logos, avatars or counts */}
                        <ul className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
                            <li className="flex items-center gap-2"><FiMapPin aria-hidden="true" className="text-secondary" />Data hosted in the UK</li>
                            <li className="flex items-center gap-2"><FiShield aria-hidden="true" className="text-secondary" />ICO registered · {companyDetails.compliance.icoRegistrationNumber}</li>
                            <li className="flex items-center gap-2"><FiWifiOff aria-hidden="true" className="text-secondary" />Works with no signal on site</li>
                        </ul>
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
                            alt="A fire safety engineer next to the Opscel field app, showing a fire alarm service completed on site at 14:41"
                            className="relative z-10 w-full h-auto max-w-[500px] lg:max-w-[625px] mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
