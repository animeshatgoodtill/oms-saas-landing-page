import React from 'react';
import Image from 'next/image';

interface Feature {
    title: string;
    description: string;
    imageSrc: string;
    gradient: string;
}

const features: Feature[] = [
    {
        title: "Accept and optimise payments globally – online and in person",
        description: "Track deficiencies in real-time with photo evidence and automatic certificate generation",
        imageSrc: "/images/mockup-1.webp",
        gradient: "from-purple-500 via-pink-400 to-orange-300"
    },
    {
        title: "Enable any billing model",
        description: "Complete jobs faster with intelligent scheduling and route optimization for your field engineers",
        imageSrc: "/images/mockup-2.webp",
        gradient: "from-purple-600 via-purple-400 to-pink-300"
    },
    {
        title: "Monetise through agentic commerce",
        description: "Generate compliant certificates instantly upon job completion with all regulatory requirements",
        imageSrc: "/images/hero-mockup.webp",
        gradient: "from-rose-400 via-pink-200 to-orange-100"
    },
    {
        title: "Create a card issuing programme",
        description: "Track job costs, materials, and time automatically to improve profitability and reduce admin overhead",
        imageSrc: "/images/hero-chart.webp",
        gradient: "from-pink-500 via-pink-300 to-yellow-200"
    },
    {
        title: "Access borderless money movement with stablecoins and crypto",
        description: "Get instant visibility into team performance, compliance status, and revenue metrics across all jobs",
        imageSrc: "/images/hero-transactions.webp",
        gradient: "from-blue-400 via-purple-200 to-pink-100"
    },
    {
        title: "Automate compliance and reporting",
        description: "Ensure all work meets industry standards with automated compliance checks and audit trails",
        imageSrc: "/images/mockup-1.webp",
        gradient: "from-indigo-400 via-blue-300 to-cyan-200"
    }
];

const FeatureShowcase: React.FC = () => {
    return (
        <section className="py-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Flexible solutions for every business model
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                        Grow your business with a comprehensive set of operations and compliance tools – designed to work individually or together.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}></div>

                            {/* Content Container */}
                            <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[500px]">
                                {/* Title and Expand Icon */}
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-xl md:text-2xl font-semibold text-foreground pr-4 flex-1">
                                        {feature.title}
                                    </h3>
                                    <button
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                        aria-label="Expand feature"
                                    >
                                        <svg
                                            className="w-4 h-4 text-foreground"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Image Container */}
                                <div className="flex-1 flex items-center justify-center mt-auto">
                                    <div className="relative w-full max-w-[400px] mx-auto">
                                        <Image
                                            src={feature.imageSrc}
                                            width={400}
                                            height={400}
                                            alt={feature.title}
                                            className="w-full h-auto object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
