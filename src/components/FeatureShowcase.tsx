import React from 'react';
import Image from 'next/image';
import { FiFileText, FiCalendar, FiCheckCircle, FiGlobe, FiWifi, FiDollarSign } from 'react-icons/fi';
import Container from './Container';

const features = [
    {
        icon: <FiFileText size={18} />,
        title: 'Digital certificates. Nine types. Zero re-typing.',
        image: '/images/ui/01-screen.png',
        alt: 'Opscel certificates admin — BS 5839-1, EICR, Emergency Lighting',
        gradient: 'from-[#0f2d52] to-[#0280C4]',
    },
    {
        icon: <FiCalendar size={18} />,
        title: 'One job. As many visits as it takes.',
        image: '/images/ui/02-screen.png',
        alt: 'Opscel schedule — engineer week view with job blocks',
        gradient: 'from-[#1e3a4a] to-[#0891b2]',
    },
    {
        icon: <FiCheckCircle size={18} />,
        title: 'Defect to invoice. Nothing re-keyed.',
        image: '/images/ui/03-screen.png',
        alt: 'Opscel quotations — defect to invoice flow',
        gradient: 'from-[#78350f] to-[#d97706]',
    },
    {
        icon: <FiGlobe size={18} />,
        title: "A customer portal they'll actually use.",
        image: '/images/ui/04-screen.png',
        alt: 'Opscel customer detail — multi-site management',
        gradient: 'from-[#1e1b4b] to-[#4f46e5]',
    },
    {
        icon: <FiWifi size={18} />,
        title: 'Built for the field. Works offline.',
        image: '/images/ui/05-screen.png',
        alt: "Opscel field app — Today's route, dark theme",
        gradient: 'from-[#0f172a] to-[#1e3a5f]',
    },
    {
        icon: <FiDollarSign size={18} />,
        title: 'Xero-ready. No double entry.',
        image: '/images/ui/06-screen.png',
        alt: 'Opscel reports — revenue, jobs, recent invoices',
        gradient: 'from-[#064e3b] to-[#059669]',
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl overflow-hidden min-h-[20rem] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                            <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.18] flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <div className="font-heading text-lg md:text-xl font-bold text-white leading-snug flex-1">
                                    {feature.title}
                                </div>
                                <div className="mt-5 rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-white/15">
                                    <Image
                                        src={feature.image}
                                        alt={feature.alt}
                                        width={924}
                                        height={540}
                                        className="w-full h-44 object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeatureShowcase;
