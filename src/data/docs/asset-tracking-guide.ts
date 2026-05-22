import { IDocGuide } from '@/types';

export const assetTrackingGuide: IDocGuide = {
    slug: 'asset-tracking',
    title: 'Asset Tracking — Support Guide',
    description: 'A quick guide to capturing site equipment in OpsCel, registering it from your engineers\' worksheets, and printing the per-site asset register your customers and assessors want to see.',
    lastUpdated: '2026-05-01',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: 'When your engineer fills out a worksheet on site — a Fire Extinguisher Service, a Fire Alarm Commissioning, an EV Charger Install — they\'re already listing the equipment they touched. OpsCel turns that list into tracked assets at the site, automatically. Reach the site again next year? The full service history is right there.',
            subsections: [
                {
                    title: 'Availability',
                    content: 'Asset tracking is included on the Business plan (£79/month). Starter and Team plans don\'t include the asset module, the per-site register PDFs, or the worksheet-to-assets bridge.',
                    bullets: []
                }
            ]
        },
        {
            id: 'auto-register',
            title: '1. Switch On Auto-Register',
            content: 'Recommended for established teams. When this is on, completing a worksheet immediately creates assets. When off (the default), an admin reviews first.',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Go to Settings → Asset Tracking', description: '' },
                        { step: 'Toggle "Auto-register on worksheet completion"', description: '' },
                        { step: 'Hit Save Changes', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'That\'s it. The next worksheet your engineer marks Complete will register its items as assets.',
                    bullets: []
                }
            ]
        },
        {
            id: 'manual-register',
            title: '2. Register Assets from a Worksheet (Manual / Curated)',
            content: 'Use this when you want to review the items before they become permanent records.',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Open the job', description: '' },
                        { step: 'Click the Assets tab', description: '' },
                        { step: 'You\'ll see a banner at the top: "5 fire extinguisher items extracted from worksheet"', description: '' },
                        { step: 'Click Register 5 items', description: '' },
                        { step: 'Confirm. The assets appear in the Assets list immediately.', description: '' }
                    ]
                },
                {
                    title: 'Multiple types',
                    content: 'If the worksheet has multiple types in one go (e.g. a fire alarm commissioning sheet with panels and detectors), the banner shows the breakdown: "3 fire alarm panels + 12 smoke detectors extracted from worksheet".',
                    bullets: []
                }
            ]
        },
        {
            id: 'print-register',
            title: '3. Print the Site Asset Register PDF',
            content: 'The per-site register your insurer/client expects to see — laid out like the paper version they\'ve used for years.',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Go to Customers → [Customer] → [Site]', description: '' },
                        { step: 'Click the Assets sub-page', description: '' },
                        { step: 'Click Print Register in the header', description: '' },
                        { step: 'The PDF opens in a new tab — print or save as needed.', description: '' }
                    ]
                },
                {
                    title: 'What the register shows',
                    content: 'Site address, contact, "Month Due", every asset\'s number/type/size/position, and a multi-year service history grid with the engineer\'s initials on every visit.',
                    bullets: []
                }
            ]
        },
        {
            id: 'add-manually',
            title: '4. Add an Asset Manually',
            content: '',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Go to Customers → [Customer] → [Site] → Assets', description: '' },
                        { step: 'Click Add Asset', description: '' },
                        { step: 'Pick the asset type, fill in the location, save.', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'The new asset takes the next number in the per-site sequence.',
                    bullets: []
                }
            ]
        },
        {
            id: 'service-history',
            title: '5. View an Asset\'s Service History',
            content: '',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Open the asset (from the Assets list, the site page, or the job\'s Assets tab)', description: '' },
                        { step: 'The Service History section lists every job that touched it, with the work performed and the engineer who did it.', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'Each visit shows the action (serviced, inspected, repaired, replaced, decommissioned), any deficiencies found, and the date/initials.',
                    bullets: []
                }
            ]
        },
        {
            id: 'fac-device-list',
            title: '6. Fill the Fire Alarm Commissioning Device List',
            content: 'The FAC worksheet\'s device list creates panels AND their detectors in one go. Order matters: enter the panel first, then the devices that connect to it.',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Open the FAC worksheet', description: '' },
                        { step: 'Scroll to Device list (commissioned at this visit)', description: '' },
                        { step: 'Row 1 — pick Fire Alarm Panel, fill the location. Leave "Parent panel #" blank.', description: '' },
                        { step: 'Row 2 onwards — pick the detector / sounder / call point, and set Parent panel # to 1 (the row number of the panel it connects to).', description: '' },
                        { step: 'If the site has more than one panel, repeat — the second panel might be Row 8, then its detectors set Parent panel # = 8.', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'When you Mark Complete (or an admin clicks Register), the detectors automatically link to their panel.',
                    bullets: []
                }
            ]
        },
        {
            id: 'decommission',
            title: '7. Decommission an Asset',
            content: '',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Open the asset', description: '' },
                        { step: 'Change Status to Decommissioned', description: '' },
                        { step: 'Save.', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'The asset stays on the register (with its history) but no longer shows in active counts. If it was a fire alarm panel, its detectors keep their records — they\'re not deleted with the panel.',
                    bullets: []
                }
            ]
        },
        {
            id: 're-run',
            title: '8. Re-Run a Worksheet\'s Promotion',
            content: 'Already registered some items but added more rows to the worksheet? No problem.',
            subsections: [
                {
                    title: 'Steps',
                    content: '',
                    steps: [
                        { step: 'Open the job → Assets tab', description: '' },
                        { step: 'The banner shows the new pending count (already-registered items don\'t get duplicated)', description: '' },
                        { step: 'Click Register N pending items', description: '' }
                    ]
                },
                {
                    title: '',
                    content: 'Re-running is always safe. Already-registered rows are skipped automatically.',
                    bullets: []
                }
            ]
        },
        {
            id: 'faqs',
            title: 'FAQs',
            content: '',
            subsections: [
                {
                    title: 'What is an "asset" in OpsCel?',
                    content: 'A physical piece of equipment installed at a customer site that needs servicing on a recurring basis — fire extinguishers, smoke detectors, fire alarm panels, emergency lights, distribution boards, EV chargers, solar inverters, and so on.',
                    bullets: []
                },
                {
                    title: 'What tier do I need?',
                    content: 'Asset Management is on the Business plan (£79/month). Starter and Team plans don\'t include the asset module, the per-site register PDFs, or the worksheet-to-assets bridge.',
                    bullets: []
                },
                {
                    title: 'Do my engineers need to do anything different?',
                    content: 'No. They fill the same worksheet they were already filling — the Fire Extinguisher Service Worksheet, the Fire Alarm Commissioning Worksheet, etc. The bit that becomes assets is the items list they were already entering.',
                    bullets: []
                },
                {
                    title: 'What worksheets can produce assets?',
                    content: 'Today: Fire Extinguisher Service and Fire Alarm Commissioning. More are landing as we add them — get in touch if your trade isn\'t covered.',
                    bullets: []
                },
                {
                    title: 'How do existing assets get into OpsCel?',
                    content: 'Three ways: (1) bulk CSV import from Settings → Data Management, (2) added by hand on the site\'s Assets page, or (3) auto-created when an engineer fills the relevant worksheet.',
                    bullets: []
                },
                {
                    title: 'What happens if my engineer enters the same item twice?',
                    content: 'The worksheet → assets bridge is idempotent — running the same worksheet twice doesn\'t create duplicates. Already-registered rows are skipped automatically.',
                    bullets: []
                },
                {
                    title: 'My fire alarm panel got deleted — what happened to the detectors?',
                    content: 'The detectors stay (with their full service history). They\'re "orphaned" — no longer attached to a panel. You can re-parent them by editing the detector and picking a different panel, or accept them as standalone records.',
                    bullets: []
                },
                {
                    title: 'Can engineers register assets, or only admins?',
                    content: 'Admins register assets by default. Engineers fill the worksheets — that\'s the data — but the act of committing items as permanent asset records is admin-only. If you trust your engineers\' input, switch on auto-register (Settings → Asset Tracking) and the step happens automatically when they Mark Complete.',
                    bullets: []
                },
                {
                    title: 'What format is the Asset Register PDF?',
                    content: 'Modelled on the paper formats your customers and assessors are used to seeing — Synergy/Balthorne for extinguishers (TYPE · SIZE · POSITION · D/E · ES Due plus the multi-year service grid), publisher-style logbook layout for fire alarm devices. We follow what BS 5306-3, BS 5839-1 and BS 5266-1 mandate be recorded; the visual layout matches the conventions your trade already prints.',
                    bullets: []
                },
                {
                    title: 'My engineer\'s worksheet had 8 devices but only 5 became assets. Why?',
                    content: 'The most likely cause is row order on the Fire Alarm Commissioning device list — child devices must list their parent panel first in the row order. The Assets tab will tell you exactly which rows were skipped and why ("Parent row 4 not yet promoted — parent rows must come before children"). Re-order the worksheet rows and re-run.',
                    bullets: []
                },
                {
                    title: 'Can I reorder the assets in my register?',
                    content: 'Not yet via the UI — assets number in the order they were added to a site. If you need a one-off re-number, contact support.',
                    bullets: []
                },
                {
                    title: 'Will my data ever leak between customers / businesses?',
                    content: 'No. Every query in the asset module filters by your business ID. Even if an engineer types another tenant\'s asset number into a worksheet by mistake, the system silently ignores it (recorded as "unresolved reference") rather than touching the other tenant\'s data.',
                    bullets: []
                },
                {
                    title: 'What about the engineer\'s initials on the register?',
                    content: 'Drawn live from the engineer\'s name on their OpsCel account. If an engineer leaves and is removed from your team, their historical visits show "—" instead of initials — but the date and the work performed stay on record.',
                    bullets: []
                },
                {
                    title: 'Can I customise the register columns or the PDF layout?',
                    content: 'Not in the current release. Each asset type has a fixed column set tuned to the standard for that trade (BS 5306-3 columns for extinguishers, etc.). If your customer asks for a different layout, let us know — we add new register variants on demand.',
                    bullets: []
                },
                {
                    title: 'How do I report a problem?',
                    content: 'Email support with the job number and the worksheet name. We can see the worksheet\'s underlying data and any skipped rows immediately.',
                    bullets: []
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Capturing assets from the field',
            href: '/docs/field-service'
        },
        {
            title: 'Service Contracts',
            description: 'Asset pre-loading for recurring service visits',
            href: '/docs/service-contracts'
        },
        {
            title: 'Certificates',
            description: 'Certificates linked to asset records',
            href: '/docs/certificates'
        },
        {
            title: 'Jobs',
            description: 'Assets are recorded per job visit',
            href: '/docs/jobs'
        }
    ]
};
