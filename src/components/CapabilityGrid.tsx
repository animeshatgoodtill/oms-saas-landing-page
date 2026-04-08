import React from 'react';
import Image from 'next/image';
import Container from './Container';

const CapabilityGrid: React.FC = () => {
    const capabilities = [
        {
            title: 'Know every customer, every site, every detail — without digging',
            gradient: 'from-blue-50 to-indigo-50',
        },
        {
            title: 'Plan, schedule, and dispatch — all from one calendar',
            gradient: 'from-purple-50 to-pink-50',
        },
        {
            title: 'From first enquiry to signed-off job — one workflow',
            gradient: 'from-amber-50 to-orange-50',
        },
        {
            title: 'Certificates that write themselves to the right British Standard — BS 5839, BS 7671, and more',
            gradient: 'from-green-50 to-emerald-50',
        },
        {
            title: 'Job done, invoice sent — same day, every time',
            gradient: 'from-rose-50 to-red-50',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <Container>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 md:mb-16">
                    Everything you need to run jobs from start to payment.
                </h2>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Card 1 - Top Left */}
                    <div className={`bg-gradient-to-br ${capabilities[0].gradient} rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-lg group`}>
                        <div className="aspect-[4/3] mb-6 bg-white/50 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/customer_card.webp"
                                alt="Customer profile showing sites, contacts, and tracked assets"
                                width={600}
                                height={450}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                            {capabilities[0].title}
                        </h3>
                    </div>

                    {/* Card 2 - Top Right */}
                    <div className={`bg-gradient-to-br ${capabilities[1].gradient} rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-lg group`}>
                        <div className="aspect-[4/3] mb-6 bg-white/50 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/schedule_card.webp"
                                alt="Engineer scheduling calendar with visit timeline and availability"
                                width={600}
                                height={450}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                            {capabilities[1].title}
                        </h3>
                    </div>

                    {/* Card 3 - Tall card spanning 2 rows */}
                    <div className={`bg-gradient-to-br ${capabilities[2].gradient} rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-lg group md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col`}>
                        <div className="flex-1 mb-6 bg-white/50 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/workflow_card.webp"
                                alt="Job workflow from enquiry to sign-off"
                                width={600}
                                height={800}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mt-auto">
                            {capabilities[2].title}
                        </h3>
                    </div>

                    {/* Card 4 - Bottom Left */}
                    <div className={`bg-gradient-to-br ${capabilities[3].gradient} rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-lg group`}>
                        <div className="aspect-[4/3] mb-6 bg-white/50 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/cert_card.webp"
                                alt="Automated compliance certificates for BS 5839 and BS 7671"
                                width={600}
                                height={450}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                            {capabilities[3].title}
                        </h3>
                    </div>

                    {/* Card 5 - Bottom Right */}
                    <div className={`bg-gradient-to-br ${capabilities[4].gradient} rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-lg group`}>
                        <div className="aspect-[4/3] mb-6 bg-white/50 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/invoice_card.webp"
                                alt="Same-day invoicing on job completion"
                                width={600}
                                height={450}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                            {capabilities[4].title}
                        </h3>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CapabilityGrid;
