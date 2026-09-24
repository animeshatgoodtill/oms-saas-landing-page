import { IFeatureDetail } from '@/types';

export const fieldServiceDetail: IFeatureDetail = {
    slug: 'field-service',
    title: 'Engineers Work in Vans, Not at Desks',
    subtitle: 'Opscel Field Service',
    heroDescription: 'Your engineers are on the road, at customer sites, fixing problems. They don\'t have time for paperwork. Opscel brings the office to them through the field web app, with GPS check-in, photo capture and optional Telegram job notifications. Complete jobs from the van, get paid faster.',
    iconId: 'icon-gps-checkin',
    screenshotImage: '/images/ui/05-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-telegram-bot',
            title: 'Telegram Bot Integration',
            description: 'Your engineers already use Telegram. One-time account linking via 15-minute code, then they get job notifications and check-in reminders on their phone. Check-in, photos and defects are done in the field app.'
        },
        {
            iconId: 'icon-gps-checkin',
            title: 'GPS Check-In & Out',
            description: 'Engineers tap "Check In" when they arrive. GPS captures location and time. Tap "Check Out" when done. System calculates exact job duration and builds an audit trail for disputes.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'Photo Capture',
            description: 'Snap pictures of equipment, serial numbers, test results, or defects. Photos auto-attach to the job record.'
        },
        {
            iconId: 'icon-signature',
            title: 'Digital Signatures On-Site',
            description: 'Customer signs on the engineer\'s phone or tablet. Signature captures name, timestamp, and GPS location. Required before job completion—no missing signatures, no return visits.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect Logging from the Field',
            description: 'Spot a broken fire alarm during service? Log it as a defect right there in the field app. Take a photo, set the severity (Observation, Minor, Major, Critical) and note the remedial action. Once it syncs, it shows on the office job page, and Major, Critical or quote-required defects appear on the dashboard ready to quote.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Proactive Job Notifications',
            description: 'Engineers get notified when job starts, reminded to check out if duration exceeded. No forgotten check-ins, no guessing where Dave is, no manual reminders.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'PWA for Non-Telegram Users',
            description: 'Some engineers don\'t use Telegram. The field app (PWA) is where the work happens: GPS check-in, photos, signatures and defects. Telegram is optional and only sends notifications. No app store approval delays.'
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
            description: 'Engineer gets one-time linking code from dashboard. Opens Telegram, sends code to Opscel bot. Account linked in 15 minutes (code expires for security).'
        },
        {
            stepNumber: 2,
            title: 'Get Job Notification',
            description: 'Office assigns job. Engineer gets Telegram message with customer name, address, job type, scheduled time. Tap to view details.'
        },
        {
            stepNumber: 3,
            title: 'Check In with GPS',
            description: 'Engineer arrives and taps "Check In" in the field app. GPS captures exact location and time.'
        },
        {
            stepNumber: 4,
            title: 'Complete Job On-Site',
            description: 'Take photos of equipment, serial numbers, test results. Write up the work summary. Log defects found. Add parts used from product catalog.'
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
                'No app store install - the field app runs in the phone browser',
                'GPS check-in takes 2 seconds, not 5 minutes of paperwork',
                'Log job notes right from the van',
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
                'Defects show on the job page as soon as they sync, so you can quote the same day',
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
            feature: 'GPS check-in/out with location capture',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Defect logging from the field, linked to remedial quotes',
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
            answer: 'No app store install required. Engineers use the web app (PWA) from any mobile browser, and can link Telegram (which they likely already have) for job notifications. The PWA works like an app but installs instantly without app store approval.'
        },
        {
            question: 'How does Telegram account linking work?',
            answer: 'Engineer gets a one-time linking code from the Opscel dashboard. They send this code to the Opscel Telegram bot. Account links immediately. Code expires after 15 minutes for security. Once linked, they get job notifications and check-in reminders via Telegram. Check-in and check-out happen in the field app.'
        },
        {
            question: 'What if an engineer doesn\'t use Telegram?',
            answer: 'Nothing changes. GPS check-in, photo uploads, signatures and defect logging all happen in the field app (PWA) anyway; Telegram only adds job notifications. No Telegram account required. Works on any smartphone or tablet.'
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
            answer: 'Opscel requires signature before job completion. If customer refuses, engineer cannot mark job complete. This prevents disputes later. Engineer can contact office to discuss—sometimes a manager call resolves signature refusal.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
