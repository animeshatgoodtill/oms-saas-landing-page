import React from 'react';
import Image from 'next/image';
import { FiFileText, FiCalendar, FiCheckCircle, FiGlobe, FiWifi, FiDollarSign } from 'react-icons/fi';
import Container from './Container';

type Layout = 'float' | 'tall' | 'side' | 'bottom' | 'inline';

const features: {
    icon: React.ReactNode;
    title: string;
    image: string;
    alt: string;
    gradient: string;
    colSpan: string;
    rowSpan: string;
    layout: Layout;
}[] = [
    {
        icon: <FiFileText size={18} />,
        title: 'Digital certificates. 17 types. Zero re-typing.',
        image: '/images/ui/01-screen.png',
        alt: 'Opscel certificates admin — BS 5839-1, EICR, Emergency Lighting',
        gradient: 'from-[#0f2d52] to-[#0280C4]',
        colSpan: 'col-span-6 md:col-span-4',
        rowSpan: 'row-span-2',
        layout: 'float',
    },
    {
        icon: <FiCalendar size={18} />,
        title: 'One job. As many visits as it takes.',
        image: '/images/ui/02-screen.png',
        alt: 'Opscel schedule — engineer week view with job blocks',
        gradient: 'from-[#1e3a4a] to-[#0891b2]',
        colSpan: 'col-span-6 md:col-span-2',
        rowSpan: 'row-span-2',
        layout: 'tall',
    },
    {
        icon: <FiCheckCircle size={18} />,
        title: 'Defect to invoice. Nothing re-keyed.',
        image: '/images/ui/03-screen.png',
        alt: 'Opscel quotations — defect to invoice flow',
        gradient: 'from-[#78350f] to-[#d97706]',
        colSpan: 'col-span-6 md:col-span-3',
        rowSpan: 'row-span-1',
        layout: 'side',
    },
    {
        icon: <FiGlobe size={18} />,
        title: "A customer portal they'll actually use.",
        image: '/images/ui/04-screen.png',
        alt: 'Opscel customer detail — multi-site management',
        gradient: 'from-[#1e1b4b] to-[#4f46e5]',
        colSpan: 'col-span-6 md:col-span-3',
        rowSpan: 'row-span-1',
        layout: 'bottom',
    },
    {
        icon: <FiWifi size={18} />,
        title: 'Built for the field. Works offline.',
        image: '/images/ui/05-screen.png',
        alt: "Opscel field app — Today's route, dark theme",
        gradient: 'from-[#0f172a] to-[#1e3a5f]',
        colSpan: 'col-span-6 md:col-span-4',
        rowSpan: 'row-span-1',
        layout: 'side',
    },
    {
        icon: <FiDollarSign size={18} />,
        title: 'Xero-ready. No double entry.',
        image: '/images/ui/06-screen.png',
        alt: 'Opscel reports — revenue, jobs, recent invoices',
        gradient: 'from-[#064e3b] to-[#059669]',
        colSpan: 'col-span-6 md:col-span-2',
        rowSpan: 'row-span-1',
        layout: 'inline',
    },
];

const FeatureShowcase: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-muted" id="features">
            <Container>
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                        Platform
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Everything you need to run the job.
                    </h2>
                    <p className="text-base md:text-lg text-foreground-accent max-w-2xl mx-auto leading-relaxed">
                        Built for how fire safety and electrical contractors actually work — from the site visit to the signed certificate, without re-keying anything.
                    </p>
                </div>

                <div className="grid grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${feature.colSpan} ${feature.rowSpan}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />

                            {/* headline-top-screenshot-bottom */}
                            {feature.layout === 'bottom' && (
                                <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug flex-1">
                                        {feature.title}
                                    </h3>
                                    <div className="mt-5 rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-white/15">
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            width={924}
                                            height={540}
                                            className="w-full h-40 object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* screenshot floats as a rotated, overlapping panel */}
                            {feature.layout === 'float' && (
                                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-snug max-w-[60%]">
                                        {feature.title}
                                    </h3>
                                    <div className="relative flex-1 mt-4">
                                        <div className="absolute right-0 bottom-0 w-[72%] max-w-[360px] rotate-[-3deg] rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/15 transition-transform duration-300 group-hover:rotate-[-1deg]">
                                            <Image
                                                src={feature.image}
                                                alt={feature.alt}
                                                width={924}
                                                height={540}
                                                className="w-full h-auto object-cover object-top"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* tall card — screenshot framed mid-card, not flush at the bottom */}
                            {feature.layout === 'tall' && (
                                <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug">
                                        {feature.title}
                                    </h3>
                                    <div className="flex-1 flex items-center justify-center mt-6">
                                        <div className="w-[85%] rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-white/15 rotate-[2deg]">
                                            <Image
                                                src={feature.image}
                                                alt={feature.alt}
                                                width={640}
                                                height={800}
                                                className="w-full h-auto object-cover object-top"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* screenshot sits beside the text, not below it */}
                            {feature.layout === 'side' && (
                                <div className="relative z-10 p-6 md:p-7 h-full flex flex-col sm:flex-row sm:items-center gap-5">
                                    <div className="flex-1">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <div className="w-full sm:w-[42%] flex-shrink-0 rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-white/15">
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            width={640}
                                            height={480}
                                            className="w-full h-28 sm:h-32 object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* small card — screenshot inline as a thumbnail next to the headline */}
                            {feature.layout === 'inline' && (
                                <div className="relative z-10 p-6 md:p-7 h-full flex flex-col justify-between">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg shadow-black/30 border border-white/15 rotate-[4deg] flex-shrink-0">
                                            <Image
                                                src={feature.image}
                                                alt={feature.alt}
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover object-top"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug mt-4">
                                        {feature.title}
                                    </h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeatureShowcase;
