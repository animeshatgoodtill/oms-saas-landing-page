import { IFeatureDetail } from '@/types';

export const assetsDetail: IFeatureDetail = {
    slug: 'assets',
    title: 'Track Every Fire Panel, EV Charger, and Solar Array',
    subtitle: 'OpsCel Assets & Equipment Tracking',
    heroDescription: 'You service fire alarms, install solar panels, maintain EV chargers. Each one has a serial number, install date, and service history. OpsCel tracks every asset with industry-specific fields, auto-links to jobs, and flags upcoming maintenance.',
    iconId: 'icon-service-history',

    featureHighlights: [
        {
            iconId: 'icon-five-trades',
            title: '20 Fire Safety Equipment Types',
            description: 'Fire alarm panels, detectors, call points, sounders, emergency lighting, extinguishers, hose reels, blankets, suppression systems, break glass units—each with custom fields like zone count, panel type, battery spec.'
        },
        {
            iconId: 'icon-solar-panel',
            title: '22 Electrical Equipment Types',
            description: 'Consumer units, RCDs, MCBs, sockets, switches, lights, distribution boards, isolators, SPDs, contactors—track manufacturer, rating, install date, test results, replacement history.'
        },
        {
            iconId: 'icon-ev-charger',
            title: 'Low Carbon Asset Types',
            description: 'Solar PV arrays (panel count, inverter, MCS cert), EV chargers (kW rating, connector type, OZEV grant), battery storage (capacity, chemistry, warranty). Built for renewable energy contractors.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Asset-to-Job Linking',
            description: 'Create job, select customer site, system shows all assets at that location. Select fire panel, job pre-fills panel model, serial number, last service date. No hunting through paperwork.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Service History Per Asset',
            description: 'See every job, test result, certificate, and defect logged for an asset. Answer "when did we replace that detector?" or "what was the last IR reading?" in two clicks.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect Tracking on Assets',
            description: 'EICR finds faulty RCD? Log as C2 defect, attach to consumer unit asset, create remedial quote. Defect stays linked to asset until resolved. Complete audit trail for compliance.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Auto Maintenance Reminders',
            description: 'Fire alarm needs annual service? EV charger due for 3-year inspection? System flags upcoming maintenance based on last service date and equipment type. Never miss a compliance deadline.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'Asset Photos & Documents',
            description: 'Upload panel photos, equipment datasheets, wiring diagrams, MCS certificates. Files attach to asset record. Engineer sees panel layout before arriving on-site.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Install Date & Warranty Tracking',
            description: 'Track install date, manufacturer warranty expiry, extended warranty terms. Know if failed inverter is under warranty before ordering replacement. Saves money on unnecessary purchases.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Compliance Certificate Linkage',
            description: 'EIC, EICR, MCS, Fire Alarm Commissioning certs link to assets installed or tested. Proves compliance history for insurance claims or regulatory inspections.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Asset Import from CSV',
            description: 'Migrating from spreadsheets? Import assets via CSV with fuzzy column matching. Automatically links to existing customers by name or email. Handles thousands of assets in minutes.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Business Tier Only',
            description: 'Asset tracking available on Business tier (£79/month). Includes all 42 equipment types, unlimited assets per customer, service history, maintenance reminders, CSV import.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Add Asset to Customer Site',
            description: 'Select customer, choose service address, pick equipment type (e.g., Fire Alarm Panel). Enter manufacturer, model, serial number, install date, zone count.'
        },
        {
            stepNumber: 2,
            title: 'Link Asset to Jobs',
            description: 'Create service job for customer site. System shows all assets at location. Select fire panel—job pre-fills panel details. Engineer sees panel model, serial, last service date.'
        },
        {
            stepNumber: 3,
            title: 'Log Service & Test Results',
            description: 'Engineer completes job, logs test results (battery voltage, IR readings, defects found). Results attach to asset record. Certificate links to asset for compliance history.'
        },
        {
            stepNumber: 4,
            title: 'Track Maintenance & Warranty',
            description: 'Dashboard flags upcoming maintenance (annual fire alarm service due). Asset record shows warranty expiry. Plan service visits, check warranty before ordering parts.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Field Engineers',
            benefits: [
                'See equipment history before arriving—model, serial, last service, defects',
                'Asset details pre-fill job forms—no hunting for serial numbers',
                'Upload photos of panel layouts or wiring diagrams for team reference',
                'Test results attach to asset—build compliance history automatically',
                'Know warranty status before ordering replacement parts'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Auto maintenance reminders prevent missed compliance deadlines',
                'Asset-to-job linking pre-fills forms—faster job creation',
                'Service history shows when customer last had panel serviced',
                'CSV import loads thousands of assets from spreadsheets in minutes',
                'Defect tracking ensures remedial work gets quoted and completed'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                '42 equipment types cover fire safety, electrical, and low carbon sectors',
                'Compliance certificate linkage proves audit trail for inspections',
                'Warranty tracking saves money on unnecessary part purchases',
                'Unlimited assets per customer—no per-asset fees',
                'Service history shows customer equipment age and replacement opportunities'
            ]
        }
    ],

    stats: [
        {
            value: '42 types',
            label: '20 Fire Safety + 22 Electrical equipment types, plus Solar/EV/Battery'
        },
        {
            value: 'Unlimited',
            label: 'Assets per customer—no per-asset fees on Business tier'
        },
        {
            value: 'Auto',
            label: 'Maintenance reminders based on last service date and equipment type'
        }
    ],

    comparison: [
        {
            feature: '42 industry-specific equipment types',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Low carbon asset types (Solar PV, EV, Battery)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Asset-to-job linking with pre-filled details',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Service history per asset (jobs, tests, certs, defects)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Auto maintenance reminders by equipment type',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Defect tracking linked to assets',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Warranty expiry tracking',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Compliance certificate linkage to assets',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Asset CSV import with fuzzy matching',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'What equipment types are supported?',
            answer: '42 types total: 20 Fire Safety (panels, detectors, call points, sounders, emergency lighting, extinguishers, hose reels, blankets, suppression systems, break glass, etc.), 22 Electrical (consumer units, RCDs, MCBs, sockets, switches, lights, distribution boards, isolators, SPDs, etc.), plus Solar PV, EV Chargers, and Battery Storage. Each type has custom fields (e.g., fire panel has zone count, solar array has panel count and inverter model).'
        },
        {
            question: 'How does asset-to-job linking work?',
            answer: 'When creating a job for a customer site, OpsCel shows all assets at that location. Select an asset (e.g., fire alarm panel)—job form pre-fills manufacturer, model, serial number, last service date. Engineer sees equipment history before arriving. Completed job adds to asset service history automatically.'
        },
        {
            question: 'Can I track warranty expiry?',
            answer: 'Yes. Enter install date and warranty period (e.g., 5 years for solar inverter). System calculates expiry date and flags it in asset record. Know if failed equipment is under warranty before ordering replacement—saves money on unnecessary purchases.'
        },
        {
            question: 'How do maintenance reminders work?',
            answer: 'Set reminder interval per equipment type (e.g., fire alarms = 12 months, EICRs = 60 months). Dashboard shows upcoming maintenance based on last service date. Create job directly from reminder. Never miss compliance deadlines or recurring revenue opportunities.'
        },
        {
            question: 'Can I import existing asset data?',
            answer: 'Yes. CSV import supports assets with fuzzy column matching (e.g., "Serial No" maps to Serial Number). Parent reference resolution links assets to customers by business name or email. Handles thousands of assets in one upload. See Data Import module for details.'
        },
        {
            question: 'Is asset tracking available on all tiers?',
            answer: 'No. Asset tracking is a Business tier feature (£79/month, 8 users included). Includes all 42 equipment types, unlimited assets, service history, maintenance reminders, warranty tracking, CSV import. Starter and Team tiers do not include asset tracking.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
