export interface IDocumentationGuideMeta {
    title: string;
    description: string;
    url: string;
    category: string;
    icon: string;
}

export const documentationGuides: IDocumentationGuideMeta[] = [
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
        description: 'Quick orientation to every settings page in Opscel. Learn what each setting controls and where to find advanced configuration options.',
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
        description: 'Complete guide to using the Opscel field service PWA for engineers. Learn how to manage jobs, capture work, and sync data offline.',
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
    {
        title: 'Fire Safety Jobsheets & Fault Tracking',
        description: 'Combined BS 5839 & BAFE SP203 inspection jobsheets and carried-forward fault tracking for fire alarm servicing visits.',
        url: '/docs/fire-safety-features',
        category: 'Field Service',
        icon: 'icon-job-sheet'
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
        title: 'Asset Tracking — Support Guide',
        description: 'A quick guide to capturing site equipment in Opscel, registering it from your engineers\' worksheets, and printing the per-site asset register your customers and assessors want to see.',
        url: '/docs/asset-tracking',
        category: 'Assets',
        icon: 'icon-asset'
    },
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
    // Integrations & Automation
    {
        title: 'Telegram Bot Integration',
        description: 'Connect the Opscel Telegram bot to receive real-time notifications for jobs, quotes, customer actions, and system alerts directly on your phone or desktop.',
        url: '/docs/telegram-bot',
        category: 'Integrations & Automation',
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

export const documentationCategories = Array.from(
    new Set(documentationGuides.map((guide) => guide.category))
);
