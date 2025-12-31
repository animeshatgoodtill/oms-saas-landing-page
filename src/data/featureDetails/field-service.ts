import { IFeatureDetail } from '@/types';

export const fieldServiceDetail: IFeatureDetail = {
    slug: 'field-service',
    title: 'Engineers Work in Vans, Not at Desks',
    subtitle: 'OpsCel Field Service',
    heroDescription: 'Your engineers are on the road, at customer sites, fixing problems. They don\'t have time for paperwork. OpsCel brings the office to them—via Telegram or web app, with GPS tracking, voice notes, and photo capture. Complete jobs from the van, get paid faster.',
    iconId: 'icon-gps-checkin',

    featureHighlights: [
        {
            iconId: 'icon-telegram-bot',
            title: 'Telegram Bot Integration',
            description: 'No app installs. Your engineers already use Telegram. One-time account linking via 15-minute code, then they get job notifications, check in with GPS, upload photos, and log defects—all from their phone.'
        },
        {
            iconId: 'icon-gps-checkin',
            title: 'GPS Check-In & Out',
            description: 'Engineers tap "Check In" when they arrive. GPS logs location and time. Tap "Check Out" when done. System calculates exact job duration, validates they were on-site, builds audit trail for disputes.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'Photo & Voice Capture',
            description: 'Snap pictures of equipment, serial numbers, test results, or defects. Dictate job notes instead of typing. Photos and voice notes auto-attach to the job record.'
        },
        {
            iconId: 'icon-signature',
            title: 'Digital Signatures On-Site',
            description: 'Customer signs on the engineer\'s phone or tablet. Signature captures name, timestamp, and GPS location. Required before job completion—no missing signatures, no return visits.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Deficiency Logging from the Field',
            description: 'Spot a broken fire alarm during service? Log it as a deficiency right there. Take photo, note severity (C1/C2/C3), recommend fix. Office gets notification, creates remedial quote.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Proactive Job Notifications',
            description: 'Engineers get notified when job starts, reminded to check out if duration exceeded. No forgotten check-ins, no guessing where Dave is, no manual reminders.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'PWA for Non-Telegram Users',
            description: 'Some engineers don\'t use Telegram. They use the web app (PWA) instead. Same features—GPS check-in, photos, signatures, defects—just browser-based. No app store approval delays.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Multi-Visit Tracking',
            description: 'Some jobs need multiple visits—install on Tuesday, test on Thursday, final on Friday. System tracks each visit separately with GPS, photos, and notes. Customer sees complete timeline.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Offline Product Cache',
            description: 'Engineers work in basements with no signal. Product catalog caches locally in IndexedDB. They can still add parts used and log work details. Syncs when signal returns.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Service History Banner',
            description: 'Before starting a job, engineers see the last visit—what was done, when, by who. No repeating work, no "didn\'t we replace that last year?" confusion.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Link Account',
            description: 'Engineer gets one-time linking code from dashboard. Opens Telegram, sends code to OpsCel bot. Account linked in 15 minutes (code expires for security).'
        },
        {
            stepNumber: 2,
            title: 'Get Job Notification',
            description: 'Office assigns job. Engineer gets Telegram message with customer name, address, job type, scheduled time. Tap to view details.'
        },
        {
            stepNumber: 3,
            title: 'Check In with GPS',
            description: 'Engineer arrives, taps "Check In" in Telegram or PWA. GPS logs exact location and time. System validates they\'re at correct address.'
        },
        {
            stepNumber: 4,
            title: 'Complete Job On-Site',
            description: 'Take photos of equipment, serial numbers, test results. Dictate work summary. Log defects found. Add parts used from product catalog.'
        },
        {
            stepNumber: 5,
            title: 'Capture Signature & Check Out',
            description: 'Customer signs on phone. Engineer taps "Check Out". GPS logs departure time. Job duration calculated. Certificate generates. Office invoices immediately.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Field Engineers',
            benefits: [
                'No app installs—use Telegram you already have or web app',
                'GPS check-in takes 2 seconds, not 5 minutes of paperwork',
                'Dictate job notes instead of typing in the van',
                'See previous visit history before starting work',
                'Customer signature captured on your phone—no paper forms',
                'Get job notifications with customer address and details',
                'Log defects while still on-site, not from memory later'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Know exactly where engineers are and when they arrived',
                'No chasing "Did you finish that job?" questions',
                'Defect notifications come in immediately—create quotes same day',
                'Actual job duration tracked automatically—accurate quoting',
                'No missing signatures holding up invoicing',
                'Service history banner reduces repeat visits'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'GPS audit trail for disputes or insurance claims',
                'Job completion triggers invoice immediately—get paid faster',
                'Engineers stay productive—less van paperwork, more jobs per day',
                'Customer signatures prevent "we never approved this" arguments',
                'Multi-visit tracking shows true cost of complex jobs'
            ]
        }
    ],

    stats: [
        {
            value: '2 seconds',
            label: 'GPS check-in time vs. 5 minutes of manual logging'
        },
        {
            value: '15 minutes',
            label: 'One-time Telegram account linking code expiry (secure)'
        },
        {
            value: 'Offline',
            label: 'Product catalog cached locally—works in basements with no signal'
        }
    ],

    comparison: [
        {
            feature: 'Telegram bot integration',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'GPS check-in/out with location validation',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Voice note dictation for job summaries',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Proactive job notifications (start/checkout reminders)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Offline product catalog (IndexedDB cache)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-visit tracking per job',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Service history banner before job start',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Digital signatures required before completion',
            opscel: true,
            others: 'Yes'
        }
    ],

    faq: [
        {
            question: 'Do engineers need to install an app?',
            answer: 'No app install required. Engineers can use Telegram (which they likely already have) or access the web app (PWA) from any mobile browser. The PWA works like an app but installs instantly without app store approval.'
        },
        {
            question: 'How does Telegram account linking work?',
            answer: 'Engineer gets a one-time linking code from the OpsCel dashboard. They send this code to the OpsCel Telegram bot. Account links immediately. Code expires after 15 minutes for security. Once linked, they get job notifications and can check in/out via Telegram.'
        },
        {
            question: 'What if an engineer doesn\'t use Telegram?',
            answer: 'They use the web app (PWA) instead. Same features—GPS check-in, photo uploads, signatures, defect logging—just browser-based. No Telegram account required. Works on any smartphone or tablet.'
        },
        {
            question: 'Does GPS tracking work indoors or in basements?',
            answer: 'GPS works best outdoors or near windows. In basements or signal-dead zones, the offline product catalog (IndexedDB) ensures engineers can still log parts used and work details. Data syncs when signal returns. GPS logs location when check-in/check-out tapped (usually outside building).'
        },
        {
            question: 'Can engineers see previous visits before starting a job?',
            answer: 'Yes. Service history banner shows the last visit—date, engineer name, work summary. Helps avoid repeating work and gives context before arriving on-site.'
        },
        {
            question: 'What happens if a customer refuses to sign?',
            answer: 'OpsCel requires signature before job completion. If customer refuses, engineer cannot mark job complete. This prevents disputes later. Engineer can contact office to discuss—sometimes a manager call resolves signature refusal.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
