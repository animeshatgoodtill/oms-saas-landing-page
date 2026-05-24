import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';

export const metadata = {
    title: 'Documentation - OpsCel',
    description: 'Complete guides and documentation for using OpsCel. Learn how to set up features, configure integrations, and get the most out of your operations management platform.',
};

const documentationGuides = [
    // Getting Started
    {
        title: 'Onboarding for New Businesses',
        description: 'First-time setup checklist for new accounts. Complete these steps in order to go from sign-up to first job scheduled in under 60 minutes.',
        url: '/docs/onboarding',
        category: 'Getting Started',
        icon: 'icon-rocket'
    },
    {
        title: 'Settings Tour',
        description: 'Quick orientation to every settings page in OpsCel. Learn what each setting controls and where to find advanced configuration options.',
        url: '/docs/settings-tour',
        category: 'Getting Started',
        icon: 'icon-gear'
    },
    {
        title: 'Team, Roles & Permissions',
        description: 'Complete guide to inviting team members, assigning roles, and managing permissions. Learn about the 7 fixed roles and multi-tenant access.',
        url: '/docs/team-management',
        category: 'Getting Started',
        icon: 'icon-team'
    },
    {
        title: 'Branding & PDF Customization',
        description: 'Configure your company logo, color scheme, and PDF templates. Learn how to customize certificates, quotes, and invoices with your branding.',
        url: '/docs/branding',
        category: 'Getting Started',
        icon: 'icon-smart-customer'
    },
    {
        title: 'Document Numbering',
        description: 'Customize invoice, quote, certificate, and job number formats with prefixes, date patterns, and sequential counters for professional document management.',
        url: '/docs/document-numbering',
        category: 'Getting Started',
        icon: 'icon-gear'
    },
    // Field Service
    {
        title: 'Field Service App — Engineer\'s Day',
        description: 'Complete guide to using the OpsCel field service PWA for engineers. Learn how to manage jobs, capture work, and sync data offline.',
        url: '/docs/field-service',
        category: 'Field Service',
        icon: 'icon-mobile-device'
    },
    {
        title: 'Jobs & Multi-Visit Workflow',
        description: 'Complete guide to creating, scheduling, and managing jobs. Learn about job statuses, multi-visit jobs, engineer assignment, and completion workflows.',
        url: '/docs/jobs',
        category: 'Field Service',
        icon: 'icon-job-workflow'
    },
    {
        title: 'Offline Mode & Sync Deep Dive',
        description: 'Technical guide to offline-first architecture, sync queue, conflict resolution, and network detection. Learn how data syncs between field and cloud.',
        url: '/docs/offline-sync',
        category: 'Field Service',
        icon: 'icon-mobile-device'
    },
    // Worksheets & Checklists
    {
        title: 'Worksheet Authoring & Filling',
        description: 'Complete guide to creating custom worksheets and filling them on-site. Learn about template editor, field types, auto-save, and asset promotion.',
        url: '/docs/worksheets',
        category: 'Worksheets & Checklists',
        icon: 'icon-job-sheet'
    },
    // Certificates
    {
        title: 'Certificates Guide',
        description: 'Complete guide to creating, managing, and issuing digital certificates. Learn about compliance tracking, BS 7671 templates, and customer delivery.',
        url: '/docs/certificates',
        category: 'Certificates',
        icon: 'icon-certificate'
    },
    // Sales & Quoting
    {
        title: 'Quotations Overview',
        description: 'Complete guide to creating quotes, templates, line items, and customer acceptance. Learn about quote-to-job conversion and deposit handling.',
        url: '/docs/quotations',
        category: 'Sales & Quoting',
        icon: 'icon-quotation'
    },
    {
        title: 'Defects to Quotation Guide',
        description: 'Master the bundled remedial quotes feature. Create one professional quote for multiple defects instead of separate quotes per issue.',
        url: '/docs/defects-to-quotation',
        category: 'Sales & Quoting',
        icon: 'icon-deficiency-log'
    },
    {
        title: 'Remedial Scope of Works Guide',
        description: 'Turn site defects into customer quotes in one tap. Engineer logs defects, worksheet auto-attaches, office generates bundled quotes.',
        url: '/docs/remedial-scope-of-works',
        category: 'Sales & Quoting',
        icon: 'icon-deficiency-log'
    },
    // Customer Experience
    {
        title: 'Customer Portal Guide',
        description: 'Learn how to invite customers to their secure portal where they can approve quotes, download certificates, and track invoices.',
        url: '/docs/customer-portal',
        category: 'Customer Experience',
        icon: 'icon-smart-customer'
    },
    // Scheduling & Operations
    {
        title: 'Service Contracts',
        description: 'Set up recurring service automation with contracts. Learn about cadence rules, asset pre-loading, cron timing, and job generation.',
        url: '/docs/service-contracts',
        category: 'Scheduling & Operations',
        icon: 'icon-job-workflow'
    },
    {
        title: 'Calendar Integration',
        description: 'Connect Google Calendar, Microsoft 365, or ICS feeds. Learn about two-way sync, availability blocking, OAuth setup, and token refresh.',
        url: '/docs/calendar-integration',
        category: 'Scheduling & Operations',
        icon: 'icon-gear'
    },
    // Assets
    {
        title: 'Asset Register & Lifecycle',
        description: 'Deep dive into asset tracking, auto-promotion rules, parent-child hierarchies, service cadence, and asset pre-loading for service contracts.',
        url: '/docs/asset-lifecycle',
        category: 'Assets',
        icon: 'icon-asset'
    },
    // Financial Management
    {
        title: 'Invoicing Guide',
        description: 'Complete guide to creating, managing, and sending invoices. Covers job-to-invoice workflow, deposits, tax configuration, and status tracking.',
        url: '/docs/invoicing',
        category: 'Financial Management',
        icon: 'icon-price-tag'
    },
    {
        title: 'Quote to Invoice Workflow Guide',
        description: 'Complete end-to-end workflow: understand how quotes, jobs, and invoices connect. Learn the two invoice paths (Fixed-Price vs. T&M), deposit handling, and Good-Better-Best tier selection.',
        url: '/docs/quote-to-invoice-workflow',
        category: 'Financial Management',
        icon: 'icon-job-workflow'
    },
    {
        title: 'Accounting Integration Guide',
        description: 'Step-by-step setup guide for connecting Xero or QuickBooks. Learn about account mappings, invoice posting, and payment sync.',
        url: '/docs/accounting-integration',
        category: 'Financial Management',
        icon: 'icon-xero'
    },
    // Reports & Analytics
    {
        title: 'Reports & Analytics',
        description: 'Complete guide to jobs reports and quotations reports (Business+ tier). Learn about filtering, date ranges, exporting, and key metrics.',
        url: '/docs/reports',
        category: 'Reports & Analytics',
        icon: 'icon-gear'
    },
    // Migration & Data
    {
        title: 'Migration Agent',
        description: 'AI-powered document import from cloud storage. Learn about credit system, entity matching, staging review, and import process.',
        url: '/docs/migration-agent',
        category: 'Migration & Data',
        icon: 'icon-data-import'
    }
];

const categories = Array.from(new Set(documentationGuides.map(guide => guide.category)));

export default function DocumentationPage() {
    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Documentation
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Complete guides to help you set up features, configure integrations, and get the most out of OpsCel.
                        </p>
                    </div>

                    {/* Documentation Guides by Category */}
                    {categories.map((category) => (
                        <section key={category} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">{category}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {documentationGuides
                                    .filter(guide => guide.category === category)
                                    .map((guide) => (
                                        <Link
                                            key={guide.url}
                                            href={guide.url}
                                            className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                    <svg className="w-7 h-7">
                                                        <use href={`/icons/features-sprite.svg#${guide.icon}`} />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {guide.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {guide.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </section>
                    ))}

                    {/* Feature Pages Section */}
                    <section className="mt-16 pt-16 border-t border-gray-200">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-3 text-gray-900">
                                Looking for Feature Details?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Explore detailed marketing pages for all OpsCel features
                            </p>
                            <Link
                                href="/features"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-accent px-6 py-3 rounded-full font-medium transition-all"
                            >
                                View All Features
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </section>

                    {/* Help Section */}
                    <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                            Can&apos;t find what you&apos;re looking for? Our support team is here to help with setup, training, and any questions you have.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:hello@opscel.com"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Email Support
                            </a>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}
