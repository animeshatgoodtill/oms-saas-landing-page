import React from 'react';
import Image from 'next/image';

const BackofficeHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-[#0a0e27]">
                {/* Pink/magenta blob - top right */}
                <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.4)_0%,transparent_70%)] blur-3xl" />
                {/* Blue/purple blob - bottom left */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.4)_0%,transparent_70%)] blur-3xl" />
                {/* Secondary pink accent - center */}
                <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.2)_0%,transparent_60%)] blur-2xl" />
                {/* Subtle teal accent */}
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

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                {/* Dashboard image - full width, dominant */}
                <div className="relative mb-12 md:mb-16">
                    <Image
                        src="/images/backoffice_dashboard.webp"
                        alt="Opscel dashboard showing reports, job analytics, invoices, and conversion funnel"
                        width={1400}
                        height={900}
                        quality={100}
                        className="w-full h-auto rounded-xl shadow-2xl shadow-black/40"
                        sizes="(max-width: 768px) 95vw, (max-width: 1280px) 90vw, 1200px"
                        priority
                    />
                </div>

                {/* Text - bottom left, like Stripe */}
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                        A back-office that actually has your back.
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                        While your engineers are on site, Opscel handles the quotes, certificates, invoices, and follow-ups — so nothing falls through the cracks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:hello@opscel.com?subject=Demo Request"
                            className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors inline-block text-center"
                        >
                            Book a demo
                        </a>
                        <a
                            href="https://app.opscel.com/handler/sign-up"
                            className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-3 rounded-full font-medium transition-colors inline-block text-center"
                        >
                            Start free trial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
