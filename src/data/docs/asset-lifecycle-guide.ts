import { IDocGuide } from '@/types';

export const assetLifecycleGuide: IDocGuide = {
    title: 'Asset Register Deep Dive',
    description: 'Track equipment lifecycle from installation to decommissioning. Configure auto-promotion rules, manage parent-child hierarchies, set service cadences, and integrate with service contracts.',
    slug: 'asset-lifecycle',
    lastUpdated: 'May 21, 2026',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>30-Second Version:</strong> Opscel\'s Asset Register tracks electrical panels, fire alarms, solar arrays, and devices over their lifecycle. Assets auto-promote from job data (engineer installs panel → asset created automatically), link to certificates and service contracts, and carry forward to recurring jobs. Parent-child hierarchies (panel → circuits → devices) maintain relationships. Service cadence tracking ensures timely retests and maintenance. Available on all tiers, configured by Admins.',
                },
                {
                    title: 'Asset Tracking Benefits',
                    bullets: [
                        '<strong>Automatic asset creation:</strong> Engineers capture asset details once, Opscel creates asset records automatically',
                        '<strong>Service continuity:</strong> Assets pre-load into recurring service contract jobs — no re-entry needed',
                        '<strong>Lifecycle visibility:</strong> Track when equipment was installed, last serviced, next retest due',
                        '<strong>Compliance ready:</strong> Asset history links to certificates for audit trails',
                        '<strong>Hierarchy management:</strong> Panel → circuit → device relationships preserved across jobs',
                    ],
                },
                {
                    title: 'Integration with Jobs & Contracts',
                    content: 'Assets integrate tightly with jobs and service contracts: (1) Job creates assets via auto-promotion rules, (2) Assets link to certificates as evidence of testing, (3) Service contracts pre-load assets from previous jobs, (4) Recurring jobs update asset service dates automatically.',
                },
            ],
        },
        {
            id: 'asset-lifecycle',
            title: 'Asset Lifecycle',
            subsections: [
                {
                    title: 'Asset States Explained',
                    content: 'Assets move through four lifecycle states: Active, Inactive, Decommissioned, Retired. State determines whether assets appear in service contract pre-loading.',
                },
                {
                    table: {
                        headers: ['State', 'Meaning', 'Appears in Service Jobs?', 'Use Case'],
                        rows: [
                            [
                                'Active',
                                'In service, requires regular testing',
                                'Yes',
                                'Newly installed equipment, operational assets'
                            ],
                            [
                                'Inactive',
                                'Temporarily out of service',
                                'No',
                                'Equipment under repair, seasonal shutdown'
                            ],
                            [
                                'Decommissioned',
                                'Removed from site but record preserved',
                                'No',
                                'Equipment replaced during upgrade, old panel removed'
                            ],
                            [
                                'Retired',
                                'Archived for historical reference only',
                                'No',
                                'Long-term historical records, compliance archives'
                            ],
                        ],
                    },
                },
                {
                    title: 'State Transitions',
                    bullets: [
                        '<strong>Active → Inactive:</strong> Manual change when equipment temporarily offline (e.g., during refurbishment)',
                        '<strong>Inactive → Active:</strong> Manual change when equipment back online',
                        '<strong>Active → Decommissioned:</strong> Engineer marks asset as removed during job (e.g., panel replacement)',
                        '<strong>Decommissioned → Retired:</strong> Admin archives old assets after retention period',
                    ],
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Only Active assets pre-load into service contract jobs. If an engineer reports "missing assets" on a recurring job, check asset status — Inactive or Decommissioned assets won\'t appear.',
                },
            ],
        },
        {
            id: 'auto-promotion',
            title: 'Auto-Promotion Rules',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin (configure rules)',
                },
                {
                    title: 'How Auto-Promotion Works',
                    content: 'Auto-promotion creates asset records automatically when engineers capture data in jobs or certificates. Example: Engineer completes EICR with 10 circuits → Opscel creates 1 panel asset + 10 circuit assets linked to that panel.',
                },
                {
                    title: 'Promotion Triggers',
                    bullets: [
                        '<strong>Certificate completion:</strong> EICR, EIC, Fire Alarm Certificate create assets from test data',
                        '<strong>Job completion:</strong> Jobs with asset-related worksheets (panel install, device replacement) create assets',
                        '<strong>Worksheet submission:</strong> Custom worksheets with asset fields trigger promotion if rule configured',
                    ],
                },
                {
                    title: 'Steps to Configure Auto-Promotion Rules',
                    steps: [
                        'Navigate to <strong>Settings → Data Management → Asset Tracking</strong>',
                        'Click <strong>+ Add Promotion Rule</strong>',
                        'Select <strong>Trigger</strong>: Certificate type (EICR, EIC, etc.) or Worksheet type',
                        'Map fields: Which certificate/worksheet fields populate asset fields?',
                        'Example: EICR "Distribution Board Location" → Asset "Location"',
                        'Set <strong>Asset Type</strong>: Panel, Circuit, Device, Fire Alarm, Solar Array, etc.',
                        'Toggle <strong>Create Parent Asset</strong> (for hierarchies, e.g., panel before circuits)',
                        'Click <strong>Save Rule</strong>',
                        'Future certificates/worksheets of that type will auto-promote assets',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'After job completion, assets appear in <strong>Assets → All Assets</strong>. Each asset shows: creation date, source job/certificate, customer/site, parent asset (if part of hierarchy), status (Active by default).',
                },
                {
                    title: 'Default Promotion Rules (Pre-Configured)',
                    table: {
                        headers: ['Certificate Type', 'Assets Created', 'Hierarchy'],
                        rows: [
                            ['EICR', '1 panel + N circuits', 'Panel → Circuits'],
                            ['EIC', '1 panel + N circuits', 'Panel → Circuits'],
                            ['Minor Works', '1 device', 'No parent (standalone)'],
                            ['Fire Alarm Certificate', '1 system + N devices', 'System → Devices (smoke detectors, call points)'],
                            ['Solar PV Certificate', '1 array + N strings', 'Array → Strings'],
                        ],
                    },
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Promotion rules are tenant-wide. If you change a rule, only future certificates are affected. Existing assets don\'t retroactively update. To backfill assets from old certificates, use CSV bulk import.',
                },
            ],
        },
        {
            id: 'hierarchy',
            title: 'Parent-Child Hierarchy',
            subsections: [
                {
                    title: 'Why Hierarchies Matter',
                    content: 'Electrical and fire systems have nested relationships: a panel contains circuits, a fire alarm system contains devices. Opscel preserves these relationships so you can navigate from panel → circuits → devices, view history, and understand dependencies.',
                },
                {
                    title: 'Hierarchy Examples',
                    table: {
                        headers: ['Parent Asset', 'Child Assets', 'Use Case'],
                        rows: [
                            [
                                'Distribution Panel',
                                'Circuits (lighting, sockets, cooker)',
                                'Electrical testing — test panel, then test each circuit'
                            ],
                            [
                                'Fire Alarm System',
                                'Devices (smoke detectors, call points, sounders)',
                                'Fire alarm servicing — test system, then test each device'
                            ],
                            [
                                'Solar Array',
                                'Strings (series of panels)',
                                'PV testing — test array performance, then test each string'
                            ],
                            [
                                'Building',
                                'Panels (one per floor)',
                                'Multi-panel sites — group panels by building'
                            ],
                        ],
                    },
                },
                {
                    title: 'Viewing Hierarchy',
                    content: 'On asset detail page: <strong>Parent Asset</strong> section shows which asset this belongs to (if any). <strong>Child Assets</strong> section lists all assets linked as children. Click parent/child names to navigate hierarchy.',
                },
                {
                    title: 'Steps to Set Parent-Child Relationship (Manual)',
                    steps: [
                        'Navigate to <strong>Assets → All Assets</strong>',
                        'Open a <strong>child asset</strong> (e.g., a circuit)',
                        'Click <strong>Edit Asset</strong>',
                        'Scroll to <strong>Parent Asset</strong> field',
                        'Search and select parent (e.g., "Main Panel - Kitchen")',
                        'Click <strong>Save Asset</strong>',
                        'Hierarchy link is established',
                    ],
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> When completing EICRs, ensure "Distribution Board Location" and "Circuit Reference" fields are filled correctly. Opscel uses these to auto-link circuits to panels. Missing data breaks hierarchy.',
                },
            ],
        },
        {
            id: 'service-cadence',
            title: 'Service Cadence & Due Dates',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Manager',
                },
                {
                    title: 'Setting Service Cadence',
                    content: 'Service cadence defines how often an asset needs testing or maintenance. Opscel calculates next due date automatically and alerts when assets are overdue.',
                },
                {
                    title: 'Steps to Set Service Cadence',
                    steps: [
                        'Open an asset in <strong>Assets → All Assets</strong>',
                        'Click <strong>Edit Asset</strong>',
                        'Set <strong>Service Cadence</strong>: Annual, Quarterly, Monthly, Custom (X days)',
                        'Opscel calculates <strong>Next Due Date</strong> based on last service date + cadence',
                        'Example: Last serviced 1 Jan 2026, Annual cadence → Next due 1 Jan 2027',
                        'Click <strong>Save Asset</strong>',
                    ],
                },
                {
                    title: 'Default Cadences by Asset Type',
                    table: {
                        headers: ['Asset Type', 'Typical Cadence', 'Based On'],
                        rows: [
                            ['Electrical Installation (EICR)', '5 years (commercial) / 10 years (domestic)', 'BS 7671 recommendations'],
                            ['Fire Alarm System', 'Annual', 'BS 5839 requirements'],
                            ['Emergency Lighting', 'Annual', 'BS 5266 requirements'],
                            ['Portable Appliances (PAT)', 'Annual', 'IET Code of Practice'],
                            ['Solar PV System', '5 years', 'BS EN 62446-1 recommendations'],
                        ],
                    },
                },
                {
                    title: 'Overdue Alerts',
                    content: 'Opscel sends alerts when assets are overdue: (1) Dashboard shows overdue count for Admins/Managers, (2) Email notifications 14 days before due date (configurable), (3) Customer portal shows overdue assets (if enabled).',
                },
                {
                    title: 'For Managers',
                    content: '<em>Tip:</em> Run weekly overdue asset report (Reports → Assets → Overdue) to proactively contact customers. Offer service contract signup for automated scheduling — reduces manual follow-up.',
                },
            ],
        },
        {
            id: 'asset-preloading',
            title: 'Asset Pre-Loading (Service Contracts)',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> Business+ (service contracts)<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'How Pre-Loading Works',
                    content: 'When Opscel generates a recurring job from a service contract, it automatically pre-loads assets from the previous job for that customer/site. This ensures continuity — engineers see the same panels, circuits, and devices they serviced last time.',
                },
                {
                    title: 'Pre-Loading Conditions',
                    bullets: [
                        '<strong>Asset must be Active:</strong> Inactive, Decommissioned, or Retired assets don\'t pre-load',
                        '<strong>Asset linked to previous job:</strong> Asset must have been tested/serviced in the last job for this contract',
                        '<strong>Same site address:</strong> Assets tied to specific site — only load for jobs at that site',
                        '<strong>Contract-job link:</strong> Job must be generated by service contract (not manually created)',
                    ],
                },
                {
                    title: 'What Pre-Loads',
                    content: 'Pre-loaded data includes: asset ID, asset type, location, parent-child relationships, last service date, test results from previous job (for comparison). Engineers see assets in "Assets" tab of job detail page (field app).',
                },
                {
                    title: 'Service Contract → Asset Workflow',
                    steps: [
                        'Job 1: Engineer completes annual fire alarm test, creates 20 device assets (smoke detectors)',
                        'Service contract created from Job 1, set to Annual cadence',
                        '12 months later: Opscel generates Job 2 via contract',
                        'Job 2 auto-loads 20 devices from Job 1 (if still Active)',
                        'Engineer opens Job 2 in field app, sees 20 devices pre-filled',
                        'Engineer tests each device, updates test results',
                        'Job 2 completes, asset service dates update to new date',
                        'Cycle repeats next year',
                    ],
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> When servicing recurring jobs, check the "Assets" tab first. If pre-loaded assets are correct, you can jump straight to testing. If assets are missing or wrong, notify office — they may need to mark old assets Decommissioned or manually add new assets.',
                },
            ],
        },
        {
            id: 'asset-history',
            title: 'Asset History',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> All users (read-only)',
                },
                {
                    title: 'Viewing Asset History',
                    content: 'Asset detail page shows full service history: jobs where asset was tested, certificates issued, test results over time, maintenance notes, status changes.',
                },
                {
                    title: 'Steps to View Asset History',
                    steps: [
                        'Navigate to <strong>Assets → All Assets</strong>',
                        'Search for asset by ID, location, or customer',
                        'Click asset to open detail page',
                        'Scroll to <strong>Service History</strong> section',
                        'View timeline: Job date, Engineer, Certificate number, Test results, Job status',
                        'Click job link to view full job details',
                        'Click certificate link to download PDF',
                    ],
                },
                {
                    title: 'What Service History Shows',
                    bullets: [
                        '<strong>Job associations:</strong> All jobs where this asset was tested or serviced',
                        '<strong>Certificate links:</strong> EICRs, EICs, Fire Alarm Certificates referencing this asset',
                        '<strong>Test results timeline:</strong> How test results changed over time (e.g., insulation resistance trending)',
                        '<strong>Maintenance log:</strong> Notes from engineers (repairs, replacements, observations)',
                        '<strong>Status changes:</strong> When asset transitioned from Active → Inactive → Decommissioned',
                    ],
                },
                {
                    title: 'Compliance Value',
                    content: 'Asset history provides audit trail for compliance. If inspector asks "When was this panel last tested?", you have dated certificates linked to the asset. History proves ongoing maintenance and due diligence.',
                },
                {
                    title: 'For Office Staff',
                    content: '<em>Tip:</em> When customers call asking about previous service dates, use asset history instead of searching jobs. Faster lookup: Assets → Search by customer → View history. Bonus: you can see if asset is due for retest.',
                },
            ],
        },
        {
            id: 'bulk-import',
            title: 'Bulk Import',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'When to Use Bulk Import',
                    content: 'Bulk import assets from CSV when: migrating from legacy systems, importing spreadsheet asset registers, backfilling historical assets not captured in Opscel, onboarding new customers with existing equipment.',
                },
                {
                    title: 'Steps to Bulk Import Assets',
                    steps: [
                        'Prepare CSV file with required columns (see table below)',
                        'Navigate to <strong>Settings → Data Management → Asset Import</strong>',
                        'Click <strong>Upload CSV</strong>',
                        'Map CSV columns to Opscel fields (auto-detected if headers match)',
                        'Click <strong>Validate Import</strong>',
                        'Review validation errors (missing customers, invalid dates, etc.)',
                        'Fix errors in CSV and re-upload, or skip invalid rows',
                        'Click <strong>Import Assets</strong>',
                        'Import runs in background (email notification when complete)',
                        'Check <strong>Assets → All Assets</strong> to verify imported data',
                    ],
                },
                {
                    title: 'Required CSV Columns',
                    table: {
                        headers: ['Column Name', 'Required?', 'Format', 'Example'],
                        rows: [
                            ['customer_name', 'Yes', 'Text', 'ABC Electrical Ltd'],
                            ['site_address', 'Yes', 'Text', '123 High Street, London, SW1A 1AA'],
                            ['asset_type', 'Yes', 'Enum', 'Panel, Circuit, Device, Fire_Alarm, Solar_Array'],
                            ['location', 'Yes', 'Text', 'Kitchen - Main Panel'],
                            ['status', 'No (defaults Active)', 'Enum', 'Active, Inactive, Decommissioned, Retired'],
                            ['service_cadence', 'No', 'Enum', 'Annual, Quarterly, Monthly, Custom'],
                            ['last_service_date', 'No', 'Date (YYYY-MM-DD)', '2025-06-15'],
                            ['parent_asset_id', 'No', 'Integer', '12345 (ID of parent asset in Opscel)'],
                        ],
                    },
                },
                {
                    title: 'Import Limits',
                    bullets: [
                        '<strong>Starter tier:</strong> 500 assets per import',
                        '<strong>Business tier:</strong> 2,000 assets per import',
                        '<strong>Business+ tier:</strong> 10,000 assets per import',
                    ],
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Test bulk import with a small CSV (10-20 rows) first. Verify data formatting and field mapping. Once confirmed, import full dataset. Opscel doesn\'t auto-rollback failed imports — you\'ll need to manually delete invalid assets if import goes wrong.',
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Asset Didn\'t Auto-Promote from Certificate',
                    content: '<strong>Cause:</strong> No promotion rule configured for that certificate type, or required fields missing in certificate.<br><strong>Fix:</strong> Check Settings → Asset Tracking → Promotion Rules. Verify rule exists for certificate type (e.g., EICR). If rule exists, check certificate data — required fields like "Distribution Board Location" must be filled. Re-save certificate after fixing data to trigger promotion.',
                },
                {
                    title: 'Assets Not Pre-Loading in Service Contract Job',
                    content: '<strong>Cause:</strong> Assets from previous job are Inactive or Decommissioned.<br><strong>Fix:</strong> Open parent job (the one that created the service contract). Check asset statuses in that job. If assets were marked Inactive or Decommissioned, reactivate them (Assets → Edit Asset → Status: Active). Regenerate service contract job to pick up active assets.',
                },
                {
                    title: 'Parent-Child Hierarchy Broken - Circuit Shows No Parent',
                    content: '<strong>Cause:</strong> Manual edit removed parent link, or auto-promotion failed to link circuit to panel.<br><strong>Fix:</strong> Manually re-link: Assets → Open circuit asset → Edit Asset → Parent Asset field → Select panel → Save. For future auto-promotion, verify certificate "Circuit Reference" field matches panel ID.',
                },
                {
                    title: 'Bulk Import Fails with "Customer Not Found" Error',
                    content: '<strong>Cause:</strong> CSV customer_name doesn\'t match existing customer in Opscel (case-sensitive, exact match).<br><strong>Fix:</strong> Export customer list (Customers → Export CSV). Copy exact customer names into import CSV. Alternatively, create missing customers before importing assets.',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'When do assets auto-promote — during job or on completion?',
                    content: 'Assets auto-promote <strong>on job completion</strong> (when engineer marks job complete). Draft or in-progress jobs don\'t create assets yet. This prevents duplicate assets if job is cancelled or data changes during work.',
                },
                {
                    title: 'Can I manually create assets without a job?',
                    content: 'Yes. Navigate to Assets → + New Asset. Fill required fields (customer, site, asset type, location). This is useful for legacy equipment already installed, or when onboarding customers with existing assets.',
                },
                {
                    title: 'How do I decommission assets when equipment is replaced?',
                    content: 'Open asset → Edit Asset → Status: Decommissioned. Add notes explaining why (e.g., "Replaced with new panel on Job #12345"). Decommissioned assets stay in history but don\'t pre-load into future jobs.',
                },
                {
                    title: 'Can I search assets by serial number or make/model?',
                    content: 'Yes, if you\'ve captured that data. Use Assets → Search → Advanced Filters. Filter by custom fields (serial number, manufacturer, model). For this to work, ensure engineers fill these fields during jobs or bulk import includes the data.',
                },
                {
                    title: 'Do assets link across multiple customers?',
                    content: 'No. Assets are customer-specific and site-specific. If you service the same equipment model for multiple customers, each gets its own asset record. This ensures service history, certificates, and due dates stay separate per customer.',
                },
                {
                    title: 'Can I export all assets to CSV?',
                    content: 'Yes. Navigate to Assets → All Assets → Export to CSV. CSV includes: asset ID, customer, site, type, location, status, last service date, next due date, parent asset ID. Use this for backup, reporting, or integration with other systems.',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    content: 'If you need assistance configuring asset tracking, setting up promotion rules, or troubleshooting pre-loading issues, our support team can help. Email <a href="mailto:support@opscel.com" class="text-secondary hover:underline">support@opscel.com</a> with details.',
                },
                {
                    title: 'Related Guides',
                    bullets: [
                        '<a href="/docs/service-contracts" class="text-secondary hover:underline">Service Contracts</a> — How assets pre-load into recurring jobs',
                        '<a href="/docs/certificates" class="text-secondary hover:underline">Certificates Overview</a> — How certificates link to assets',
                        '<a href="/docs/field-service" class="text-secondary hover:underline">Field Service App</a> — How engineers interact with assets on-site',
                        '<a href="/docs/settings-tour" class="text-secondary hover:underline">Settings Tour</a> — Configure asset tracking settings',
                    ],
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Asset Tracking',
            description: 'Introduction to capturing and managing assets',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Service Contracts',
            description: 'Asset pre-loading in recurring service contracts',
            href: '/docs/service-contracts'
        },
        {
            title: 'Field Service App',
            description: 'Capturing and updating assets on site',
            href: '/docs/field-service'
        },
        {
            title: 'Certificates',
            description: 'Certificates linked to asset lifecycle records',
            href: '/docs/certificates'
        }
    ]
};
