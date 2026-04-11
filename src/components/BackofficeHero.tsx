import React from 'react';

const BackofficeHero: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            A back-office that actually has your back.
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
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

                    {/* Right Column - UI Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px]">
                            {/* Placeholder - replace with actual UI mockup */}
                            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-white/30 text-sm">UI mockup goes here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackofficeHero;
