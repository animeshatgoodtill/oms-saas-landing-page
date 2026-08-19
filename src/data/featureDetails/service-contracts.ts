import { IFeatureDetail } from '@/types';

export const serviceContractsDetail: IFeatureDetail = {
    slug: 'service-contracts',
    title: 'Recurring Service That Schedules Itself',
    subtitle: 'Opscel Service Contracts',
    heroDescription: 'Turn one-off jobs into recurring contracts that generate their own work. Set the service, the cadence, and the price once — Opscel creates the next draft job before every due date. No missed PPM, no diary reminders, no "did we ever book the annual?"',
    iconId: 'icon-calendar-sync',

    stats: [
        { value: '3 ways', label: 'Start a recurring contract: from scratch, a job, or an accepted quote' },
        { value: '7 cadences', label: 'Quarterly to 5-yearly (3, 6, 12, 24, 36, 48, 60 months)' },
        { value: '1 view', label: 'Whole multi-site portfolio and its total annual value' }
    ],

    featureHighlights: [
        {
            iconId: 'icon-job-workflow',
            title: 'Three Ways to Start',
            description: 'Create from scratch, convert an existing job, or upgrade an accepted quote. The quote path confirms the true recurring price with you — it never blindly reuses a quote total that includes one-off install work.'
        },
        {
            iconId: 'icon-calendar-sync',
            title: 'Automatic Job Generation',
            description: 'A draft job is created a set number of days before each due date — the "lead time", default 14. The planned visit is on the board before anyone has to remember it.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Fixed-Anchor Scheduling',
            description: 'Customer running late? Pull the September visit forward today and the December visit stays on the 16th. Generating early never shifts the rest of the schedule — and the screen tells you so before you act.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Generate Now',
            description: 'Bring the next visit forward on demand for the "they\'re ready early" case. One click, with a plain-English confirmation of exactly what will and won\'t move.'
        },
        {
            iconId: 'icon-calendar-sync',
            title: 'Upcoming-Visits Timeline',
            description: 'See the next visits at a glance, clearly marked Generated vs Projected. A projection is an estimate from the cadence, never shown as a confirmed booking.'
        },
        {
            iconId: 'icon-gear',
            title: 'Safe Start-Date Editing',
            description: 'Nudge the cadence anchor and get a live preview of how future dates move before you commit. Already-generated visits are locked. Statutory intervals (e.g. BS 5839 6/12-monthly) trigger an extra compliance warning.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Full Lifecycle Control',
            description: 'Replace the service type, pause and resume, end and reopen, or cancel — from the list row or the contract page. A per-contract activity log records every change, and you can export the contract list to CSV.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Multi-Site Agreements',
            description: 'Group all of a customer\'s recurring contracts under one agreement that holds the relationship: title, renewal date, billing contact, terms, and notes. The portfolio in one place.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Bulk-Create From a Template',
            description: 'Set cadence, service type, and per-visit price once, then roll it across every site in one screen — with per-site overrides so a bigger site can get a higher price or a tighter cadence.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Add New Sites Inline',
            description: 'Onboarding a customer with sites you haven\'t entered yet? Add brand-new addresses right inside the bulk-create flow. No need to pre-build the address book first.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Portfolio Rollup',
            description: 'Every site\'s cadence, next due date, per-visit price, annual value, and status in one table — plus the agreement\'s total annual value. The whole account, at a glance.'
        },
        {
            iconId: 'icon-gps-checkin',
            title: 'Engineers Arrive Ready',
            description: 'Site access notes you set on the address — parking, key-safe codes, access hours — flow straight to the engineer\'s job in the field app, even offline. Plus a per-site running log engineers leave for whoever attends next.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Define the Contract',
            description: 'Pick the customer, the site, the service type, the cadence, the lead time, and the per-visit price. Or convert a job, or upgrade an accepted quote — the customer and site carry over.'
        },
        {
            stepNumber: 2,
            title: 'Visits Generate Automatically',
            description: 'Opscel creates the next draft job ahead of every due date. Fixed-anchor scheduling keeps statutory intervals on track, visit after visit, with no manual re-booking.'
        },
        {
            stepNumber: 3,
            title: 'Run the Schedule',
            description: 'Watch the upcoming-visits timeline, pull a visit forward with Generate Now, edit a start date with a safe preview, or pause and resume as the account changes.'
        },
        {
            stepNumber: 4,
            title: 'Scale to Multi-Site',
            description: 'Group a customer\'s sites into one agreement, roll a service template across all of them with per-site tweaks, and track the whole portfolio\'s annual value in a single view.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Managers',
            benefits: [
                'Stand up a recurring contract in under a minute — from scratch, a job, or a quote',
                'Draft jobs appear before every due date, so nothing slips the diary',
                'Generate Now spells out what moves and what doesn\'t — no second-guessing',
                'Edit a start date with a live preview and a confirm step — no accidental schedule shifts',
                'Site access notes flow straight to the engineer\'s app, even offline'
            ]
        },
        {
            persona: 'Contract Managers',
            benefits: [
                'Group a customer\'s many sites into one agreement with renewal date and billing contact',
                'Bulk-create across every site from a single template, with per-site overrides',
                'Add brand-new sites inline during onboarding — no pre-built address book required',
                'Portfolio rollup shows every site\'s cadence, next due date, and annual value in one table'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Turn jobs and accepted quotes into recurring revenue in seconds',
                'Fixed-anchor scheduling keeps compliance intervals (e.g. BS 5839) defensible',
                'Annual book value rolls up per contract and per agreement for clear forecasting',
                'Progressive disclosure keeps things simple — agreements only appear for customers that need them'
            ]
        }
    ],

    comparison: [
        { feature: 'Start a contract from a job or an accepted quote', opscel: true, others: 'Some' },
        { feature: 'Fixed-anchor scheduling (generate early without shifting)', opscel: true, others: 'No' },
        { feature: 'Statutory-cadence (BS 5839) editing warnings', opscel: true, others: 'No' },
        { feature: 'Upcoming-visits timeline (generated vs projected)', opscel: true, others: 'No' },
        { feature: 'Multi-site agreements with bulk template rollout', opscel: true, others: 'Some' },
        { feature: 'Per-site overrides within one agreement', opscel: true, others: 'No' },
        { feature: 'Portfolio annual-value rollup', opscel: true, others: 'No' },
        { feature: 'Site access notes + engineer log to field app (offline)', opscel: true, others: 'No' }
    ],

    faq: [
        {
            question: 'Does generating a visit early move the rest of my schedule?',
            answer: 'No. Scheduling is fixed-anchor — only the visit you pull forward moves. Every later visit stays on its original due date, and the screen confirms this before you act.'
        },
        {
            question: 'How do I start a recurring contract?',
            answer: 'Three ways: from scratch (pick customer, site, service, cadence, price), from an existing job (it becomes the first visit), or from an accepted quote (you confirm the true recurring price). See the Service Contracts guide at /docs/service-contracts for step-by-step instructions.'
        },
        {
            question: 'Can I group a customer\'s sites together?',
            answer: 'Yes. Once a customer has three or more sites, you can create an agreement that groups their contracts, bulk-create across every site from one template, and see the whole portfolio\'s annual value in a single rollup.'
        },
        {
            question: 'What happens if I edit an agreement after creating its contracts?',
            answer: 'Nothing changes on the existing contracts — each one is independent once created. You edit individual contracts directly when you need to.'
        },
        {
            question: 'Can two contracts cover the same site and service?',
            answer: 'No. Opscel flags the conflict so you don\'t accidentally double-schedule a site, and offers to end the existing contract first.'
        },
        {
            question: 'Who can manage service contracts?',
            answer: 'Admin-type roles only. Field engineers don\'t see contract screens — though the access notes and site log you set do travel to their job in the field app.'
        }
    ],

    sections: [
        {
            eyebrow: 'Service Contracts',
            title: 'Pull One Visit Forward. The Rest Doesn\'t Move.',
            description: 'Fixed-anchor scheduling: generate the September visit early and December stays on the 16th — guaranteed, not just usually.',
            imageSrc: '/images/features/service-contracts/fixed-anchor-scheduling.webp',
            imageAlt: 'Bi-annual fire alarm service timeline showing three generated visits and two projected visits anchored to the 16th of the month',
            imageWidth: 2160,
            imageHeight: 474
        },
        {
            eyebrow: 'Three Ways to Start',
            title: 'From Scratch. From a Job. From a Quote.',
            description: 'The quote path confirms the true recurring price — it never blindly reuses a total that includes one-off install work.',
            imageSrc: '/images/features/service-contracts/three-ways-to-start.webp',
            imageAlt: 'Three cards showing contract creation paths: from scratch, from a job, and from a quote',
            imageWidth: 2160,
            imageHeight: 306
        },
        {
            eyebrow: 'Multi-Site Agreements',
            title: 'The Whole Portfolio. One Table.',
            description: 'Every site\'s cadence, next due date, and value — plus the agreement\'s total annual value, rolled up.',
            stat: { value: '£20,640', label: 'Annual value, rolled up' },
            imageSrc: '/images/features/service-contracts/portfolio-rollup.webp',
            imageAlt: 'Hartley Estates master agreement table listing four sites with cadence, next due date, and per-visit value, plus £20,640 annual value',
            imageWidth: 2160,
            imageHeight: 598
        },
        {
            eyebrow: 'Bulk-Create from a Template',
            title: 'Set It Once. Roll It Across Every Site.',
            description: 'Cadence, service type, and per-visit price — applied to every site in one screen, with per-site overrides where a bigger site needs a higher price.',
            imageSrc: '/images/features/service-contracts/bulk-create-template.webp',
            imageAlt: 'Bulk-create template applying fire alarm service every 6 months at £420 per visit to 12 sites, with a price override for one site',
            imageWidth: 2160,
            imageHeight: 496
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
