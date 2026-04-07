'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative pb-16 pt-24 md:pt-32 px-5 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #F3F3F5 0%, #E8E8EC 50%, #F3F3F5 100%)'
            }}
        >
            {/* Animated Background Dots */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#304fff" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            {/* Animated Lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M 0,300 Q 400,100 800,200 T 1600,300"
                        stroke="#FED835"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 0,500 Q 500,350 1000,400 T 2000,500"
                        stroke="#304fff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
                    />
                </svg>
            </div>
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
