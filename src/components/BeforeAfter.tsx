import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import Container from './Container';

const without = [
    "Certificates typed up back at the office, days after the visit.",
    "The same job re-typed into a spreadsheet, an invoicing tool, and Xero.",
    "A defect noticed on-site turns into a phone call and a forgotten follow-up.",
    "Invoices go out whenever someone gets round to raising them.",
];

const withOpscel = [
    "Certificate generated and delivered to the customer's portal the same day.",
    "One job record — the invoice and Xero entry are the same data, not a re-type.",
    "Defect logged on-site becomes a draft Good-Better-Best quote automatically.",
    "Invoice raised the moment the job is marked complete.",
];

const BeforeAfter: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background" id="before-after">
            <Container>
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                        The problem
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Same job, two very different evenings.
                    </h2>
                    <p className="text-base md:text-lg text-foreground-accent max-w-2xl mx-auto leading-relaxed">
                        Paperwork burden isn&apos;t a training problem — it&apos;s what happens when one job lives in four different systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="rounded-2xl border border-border bg-muted p-6 md:p-8">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-6">Without Opscel</h3>
                        <ul className="space-y-4">
                            {without.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-error/10 text-error flex items-center justify-center">
                                        <FiX size={12} strokeWidth={3} />
                                    </span>
                                    <span className="text-foreground-accent leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6 md:p-8">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-6">With Opscel</h3>
                        <ul className="space-y-4">
                            {withOpscel.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center">
                                        <FiCheck size={12} strokeWidth={3} />
                                    </span>
                                    <span className="text-foreground leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BeforeAfter;
