import { IFeatureDetail } from '@/types';

export const jobsDetail: IFeatureDetail = {
    slug: 'jobs',
    title: 'Job Management That Actually Makes Sense',
    subtitle: 'Opscel Jobs Module',
    heroDescription: 'Create jobs, assign engineers, track progress, mark complete. Everything in one place, nothing falls through the cracks. No spreadsheets, no whiteboards, no "where\'s that job sheet?" panic.',
    iconId: 'icon-job-workflow',
    screenshotImage: '/images/ui/02-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-five-trades',
            title: 'Built for Your Industry',
            description: 'Electrical gets 18 custom fields (EICR type, earthing, board location). Fire Safety gets 25 fields (system category, panel type, zones). Forms that understand your work.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Multi-Engineer Assignment',
            description: 'Two-person jobs? No problem. Assign multiple engineers, designate primary contact. Everyone sees who else is working the job. No coordination confusion.'
        },
        {
            iconId: 'icon-job-workflow',
            title: '4-Step Creation Wizard',
            description: 'Customer → Details → Schedule → Review. Clear progress, no missing fields, pre-filled data from customer record. Create jobs in under 2 minutes.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Job Types with Auto-Templates',
            description: 'Six default job types (Installation, Inspection, Maintenance, Repair, Testing, Emergency). Each auto-selects correct PDF template. Add your own types.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Multi-Site Contact Selection',
            description: 'Customer has 3 sites, each with different contacts. Job wizard shows site-specific contacts. Invoice goes to finance director, completion notice to site manager.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Parts Used Tracking',
            description: 'Add parts from product catalog or custom items. Track quantities, costs, and materials used per job. Auto-populate invoice line items. Know true job profitability.'
        },
        {
            iconId: 'icon-gps-checkin',
            title: 'Auto Duration Calculation',
            description: 'Check-in at 9:15am, check-out at 2:47pm. System calculates 5h 32min, rounds to 5h 45min (15-min increments). Accurate billing, no guesswork.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'Work Summary from Field',
            description: 'Engineers dictate or type work summary while on-site. Visible on job detail before completion. Office knows progress without chasing updates.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Quick Edit Modals',
            description: 'Change job schedule? Quick edit modal—no full form reload. Reassign engineers? Quick edit. Update notes? Quick edit. Fast changes, no page refresh.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Multi-Visit System',
            description: 'Job needs 3 visits? System tracks each separately—GPS, photos, notes, duration. Customer sees complete timeline. You see true cost per visit.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Certificate Auto-Generation',
            description: 'Job marked complete? Certificate auto-generates from job data. Customer details, site address, engineer name—all pre-filled. Just add test results and sign.'
        },
        {
            iconId: 'icon-calendar-sync',
            title: 'Google Calendar & Outlook Sync',
            description: 'Engineers see their schedule where they already look. Two-way sync keeps jobs in Google Calendar and Outlook up to date automatically. No switching apps, no double-booking.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Create Job',
            description: '4-step wizard: Select customer, choose service address, add job details (type, description, scheduled date), assign engineers, review.'
        },
        {
            stepNumber: 2,
            title: 'Engineers Complete in Field',
            description: 'Check in with GPS, take photos, log parts used, capture customer signature. Work summary visible to office in real-time.'
        },
        {
            stepNumber: 3,
            title: 'Mark Complete',
            description: 'Engineer marks job complete. Triggers certificate generation (if applicable), updates job status, calculates duration, files documents.'
        },
        {
            stepNumber: 4,
            title: 'Invoice & Close',
            description: 'Office creates invoice from job (labour hours + parts). Customer gets certificate and invoice same day. Job closed, revenue tracked.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Managers',
            benefits: [
                '4-step wizard creates jobs in under 2 minutes',
                'Quick edit modals for schedule changes—no full reload',
                'Multi-site contact selection prevents wrong recipient errors',
                'Work summary visible before completion—no status calls',
                'Parts tracking shows material costs per job',
                'Job types auto-select correct certificate templates'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'See all job details on mobile—customer, address, notes',
                'Multi-visit tracking shows what was done on previous visits',
                'Parts catalog on phone—add materials used on-site',
                'Work summary dictation—speak notes instead of typing',
                'Auto duration calculation from GPS check-in/out'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Industry-specific fields capture compliance data (EICR type, fire system category)',
                'Multi-engineer assignment tracks team collaboration',
                'Actual duration vs. estimated helps quote future jobs accurately',
                'Parts tracking shows true job profitability',
                'Certificate auto-generation speeds invoicing'
            ]
        }
    ],

    stats: [
        {
            value: '<2 min',
            label: 'Average job creation time with 4-step wizard'
        },
        {
            value: '18/25',
            label: 'Custom fields for Electrical (18) and Fire Safety (25)'
        },
        {
            value: 'Real-time',
            label: 'Work summary visible to office before job completion'
        }
    ],

    comparison: [
        {
            feature: 'Industry-specific fields (Electrical, Fire Safety)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-engineer assignment with primary designation',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Multi-visit tracking per job',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Parts used tracking from product catalog',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Auto duration calculation (rounded to 15 min)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Work summary visible during job progress',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Certificate auto-generation on completion',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Job types with PDF template mapping',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'Can I customize job types for my business?',
            answer: 'Opscel includes 6 default job types (Installation, Inspection, Maintenance, Repair, Testing, Emergency). You can add custom job types and map them to specific certificate templates. This ensures the right PDF generates when the job completes.'
        },
        {
            question: 'How do multi-engineer assignments work?',
            answer: 'Assign multiple engineers to a job and designate one as primary. All assigned engineers see the job on their mobile app. Primary engineer typically handles customer signature and completion. Useful for two-person installations or training new staff.'
        },
        {
            question: 'What are the industry-specific fields?',
            answer: 'Electrical jobs get 18 custom fields including EICR type, earthing arrangement, board location, and main switch rating. Fire Safety jobs get 25 fields including system category, panel type, detector count, and zones. These fields auto-populate certificates and ensure compliance data is captured.'
        },
        {
            question: 'How does parts tracking work?',
            answer: 'Engineers add parts used from the product catalog (or create custom items) while on-site. Each part has quantity and cost. These auto-populate invoice line items. You see exact material costs per job and true profitability.'
        },
        {
            question: 'Can jobs have multiple visits?',
            answer: 'Yes. Some jobs need multiple visits (install Tuesday, test Thursday, final inspection next week). Each visit tracks GPS check-in/out, photos, notes, and duration separately. Customer sees complete timeline. You see true cost per visit.'
        },
        {
            question: 'What happens when a job is marked complete?',
            answer: 'System triggers certificate auto-generation (if job type requires it), calculates final duration from GPS logs, updates job status, and files all documents (photos, signatures, certificates) to the job folder. Office can immediately create invoice.'
        },
        {
            question: 'Can I turn a recurring job into a service contract?',
            answer: 'Yes. Open any completed job, go to the ⋮ menu, and choose "Convert to contract". Set the cadence (3 to 60 months), lead time, and per-visit price — the customer, site, and engineer carry over automatically. Future visits generate themselves before each due date. See /features/service-contracts for the full recurring contracts feature.'
        }
    ],

    sections: [
        {
            eyebrow: 'Jobs & Scheduling',
            title: 'A Job Created in Under Two Minutes.',
            description: 'Customer, details, schedule, review. Pre-filled from the customer record, so there is nothing to retype.',
            stat: { value: '<2 min', label: 'Avg. creation time' },
            imageSrc: '/images/features/jobs/creation-wizard.webp',
            imageAlt: 'Four-step job creation wizard: Customer, Details, Schedule, Review — with customer, job type, and scheduled time filled in',
            imageWidth: 2160,
            imageHeight: 416
        },
        {
            eyebrow: 'Multi-Engineer Assignment',
            title: 'Two-Person Jobs, No Coordination Confusion.',
            description: 'Assign as many engineers as the job needs, designate the primary contact, and everyone can see who else is on it.',
            imageSrc: '/images/features/jobs/multi-engineer-card.webp',
            imageAlt: 'Job card for fire alarm commissioning showing a primary engineer and a second engineer assigned',
            imageWidth: 2160,
            imageHeight: 318
        },
        {
            eyebrow: 'Built for Your Industry',
            title: 'Forms That Know Your Trade.',
            description: 'Electrical gets 18 fields. Fire Safety gets 25. No generic forms, no workarounds.',
            imageSrc: '/images/features/jobs/industry-fields.webp',
            imageAlt: 'Electrical job form with 18 fields next to Fire Safety job form with 25 fields',
            imageWidth: 2160,
            imageHeight: 492
        },
        {
            eyebrow: 'Duration & Documentation',
            title: 'Check Out, and the Paperwork Writes Itself.',
            description: 'Duration rounds to the nearest 15 minutes. Completion triggers the certificate — pre-filled from the job.',
            imageSrc: '/images/features/jobs/duration-cert.webp',
            imageAlt: 'Auto duration card showing check-in and check-out times next to an auto-generated EICR certificate with pre-filled fields',
            imageWidth: 2160,
            imageHeight: 382
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
