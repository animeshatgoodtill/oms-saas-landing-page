import { IFeatureDetail } from '@/types';

export const assetsDetail: IFeatureDetail = {
    slug: 'assets',
    title: 'Your Engineers Fill the Worksheet. We Build the Asset Register.',
    subtitle: 'Equipment Register, Automatically',
    heroDescription: 'Fire alarms, extinguishers, emergency lights, EV chargers — every device that lands on a job becomes a tracked asset, automatically. Stop re-keying. Start tracking. Worksheets you already fill on site become the asset register your customer wants to see — same data, no double entry.',
    iconId: 'icon-service-history',

    featureHighlights: [
        {
            iconId: 'icon-five-trades',
            title: 'Capture Once',
            description: 'Engineers list devices on the worksheet they\'re already filling — extinguishers, smoke detectors, EV chargers, anything that needs servicing. No separate data entry step.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'One Click → Assets',
            description: 'Admins review the extracted items on the job\'s Assets tab and register them at the site. Or flip the auto-register switch and skip the click entirely.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Print the Right Register',
            description: 'Per-site asset PDFs in the format your customer\'s compliance team expects — Synergy-style for extinguishers, BS 5839 device list for alarms, all from one workflow.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Multi-Year Service History',
            description: 'Every visit stamps the register. Five years of date-and-initials columns, ready for inspection. No spreadsheets, no manual tracking.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Proper Asset Relationships',
            description: 'Detectors hang under their fire alarm panel. Circuits sit under their distribution board. Not a flat list — a real asset tree that mirrors how the installation actually works.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect-to-Asset Linking',
            description: 'EICR finds faulty RCD? Log as C2 defect, attach to the consumer unit asset, create remedial quote. Defect stays linked to asset until resolved. Complete audit trail for compliance.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Auto Maintenance Reminders',
            description: 'Fire alarm needs annual service? EV charger due for 3-year inspection? System flags upcoming maintenance based on last service date and equipment type. Never miss a compliance deadline.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'BS 5306-3, BS 5839-1, BS 5266-1, BS 7671',
            description: 'Built for the way British contractors actually work. Real trade formats. Real asset trees. Capture once on site, print the trade-correct register on demand.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Engineer Fills the Worksheet',
            description: 'Fire Extinguisher Service, Fire Alarm Commissioning, EV Charger Install — engineers fill the worksheet they already have to fill. The items they list become asset candidates automatically.'
        },
        {
            stepNumber: 2,
            title: 'Admin Reviews or Auto-Registers',
            description: 'Admins curate before commit on the job\'s Assets tab — or flip auto-register if you trust the engineer\'s input. Proper relationships: detectors under panels, circuits under boards.'
        },
        {
            stepNumber: 3,
            title: 'Asset Register Builds Itself',
            description: 'Per-site asset register grows with every job. Five years of service history with the engineer\'s initials on every visit. No spreadsheet maintenance.'
        },
        {
            stepNumber: 4,
            title: 'Print Trade-Correct PDFs',
            description: 'Asset Register PDF prints in the format your customer\'s compliance team expects. Synergy-style for extinguishers, BS 5839-1 device list for alarms. Ready for inspection.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Fire Safety Contractors',
            benefits: [
                'Walk the site, tick the boxes, print the BS 5306-3 record sheet your insurance assessor wants to see — without opening a spreadsheet',
                'Commission the panel, list the devices — we turn it into a BS 5839-1-aligned device register, panels and detectors linked the way the standard expects',
                'Emergency lighting registers per BS 5266-1 with duration test results and battery condition'
            ]
        },
        {
            persona: 'Electrical Contractors',
            benefits: [
                'EICR done? The circuits and consumer units you tested are tracked assets now — ready for the next inspection cycle, ready for the report',
                'Distribution boards, RCDs, MCBs tracked with ratings, install dates, and test history',
                'Defect-to-remediation trail: C2 defect on asset → remedial quote → job → Minor Works cert, all linked'
            ]
        },
        {
            persona: 'EV & Renewables Contractors',
            benefits: [
                'Every charger and every solar string becomes a serviceable asset on the site, with grant-evidence trail and DNO refs in one place',
                'MCS certificate linkage, inverter warranty tracking, panel degradation monitoring',
                'Battery storage systems tracked with capacity, chemistry, and cycle count'
            ]
        }
    ],

    stats: [
        {
            value: 'Zero',
            label: 'Extra data entry — worksheets your engineers already fill become the register'
        },
        {
            value: '5 years',
            label: 'Service history per asset with date-and-initials columns, ready for inspection'
        },
        {
            value: '£79/mo',
            label: 'Business plan — unlimited assets, no per-asset fees'
        }
    ],

    comparison: [
        {
            feature: 'Worksheet-to-asset automatic extraction',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Trade-correct register PDFs (BS 5306-3, BS 5839-1)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Asset tree relationships (detectors → panels)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-year service history with engineer initials',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Auto-register from engineer worksheets',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Defect tracking linked to assets',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Auto maintenance reminders by equipment type',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Asset CSV import with fuzzy matching',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'How is this different from asset tracking in Joblogic, Klipboard, or Commusoft?',
            answer: 'Joblogic, Klipboard, Commusoft all let you track assets — once you\'ve typed them in. Opscel lets your engineer\'s worksheet be the data entry. Same site visit; one less back-office job. The items engineers list on their Fire Extinguisher Service sheet or Fire Alarm Commissioning form become tracked assets automatically.'
        },
        {
            question: 'Do engineers need to do anything differently?',
            answer: 'No. They fill the same worksheet they already fill — Fire Extinguisher Service, Fire Alarm Commissioning, EV Charger Install. The items they list become asset candidates. Admins review and register (or enable auto-register). Engineers don\'t even know it\'s happening.'
        },
        {
            question: 'What does the Asset Register PDF look like?',
            answer: 'It prints in the format your customer\'s compliance team expects. Synergy-style layout for extinguishers, BS 5839-1 device list for fire alarms, circuit schedule for electrical. Five years of service history with date-and-initials columns. Looks like you\'ve been maintaining it for years.'
        },
        {
            question: 'What are asset tree relationships?',
            answer: 'Assets aren\'t a flat list. Smoke detectors hang under their fire alarm panel. Circuits sit under their distribution board. Solar panels link to their inverter. This mirrors how the installation actually works and how compliance teams expect to see it reported.'
        },
        {
            question: 'Is asset tracking available on all plans?',
            answer: 'Asset tracking is available on the Business plan (£79/month, 8 users included). Includes unlimited assets per customer, auto-register from worksheets, trade-correct PDF registers, multi-year service history, maintenance reminders, and CSV import. Bulk CSV asset import specifically carries this same Business-plan gate — Starter and Team can still import customers, contacts, addresses, and jobs, just not assets.'
        },
        {
            question: 'Can I import existing asset data from spreadsheets?',
            answer: 'Yes. CSV import supports fuzzy column matching (e.g., "Serial No" maps to Serial Number). You choose the customer and site before uploading, so no address or customer-name columns are needed in the file itself. Handles thousands of assets in one upload.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
