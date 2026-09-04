import { IDocGuide } from '@/types';

export const assetLifecycleGuide: IDocGuide = {
    title: 'Asset Register Deep Dive',
    description: 'Track equipment from first installation to decommissioning — QR tag scanning, automatic register updates from worksheets, full service history, and pre-loading into recurring contract visits.',
    slug: 'asset-lifecycle',
    lastUpdated: '2026-09-04',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>The 30-second version:</strong> Opscel\'s Asset Register tracks your customers\' equipment — fire extinguishers, alarm panels and devices, emergency lighting, fire doors, electrical boards, EV chargers and more — across its whole life. Engineers keep the register up to date from the field simply by filling in their service worksheet or scanning a QR tag: routine updates apply automatically, and anything consequential (new equipment, condemned or missing items) waits for office review. Registered assets pre-load into worksheets on recurring contract visits, so engineers never start from a blank table.',
                },
                {
                    title: 'Why Track Assets in Opscel',
                    bullets: [
                        'Register updates come from the work itself — no separate data entry after the job',
                        'Office review of every consequential change, so the register stays trustworthy',
                        'QR tags identify equipment instantly on site, even offline',
                        'Service continuity: assets pre-load into worksheets on every return visit',
                        'Full lifecycle visibility from installation through maintenance to decommissioning',
                        'Compliance via certificate and job links, plus a per-site Asset Register PDF',
                    ],
                },
            ],
        },
        {
            id: 'asset-lifecycle',
            title: 'Asset Lifecycle',
            content: '<p class="mb-4">Every asset carries a status:</p>',
            subsections: [
                {
                    table: {
                        headers: ['Status', 'Meaning'],
                        rows: [
                            ['Draft', 'Registered from the field (usually via tag scan) and awaiting office review. Becomes Active when the office commits it.'],
                            ['Active', 'In service. Appears on the register, the register PDF, and pre-loads into worksheets.'],
                            ['Maintenance', 'Temporarily out of service.'],
                            ['Missing', 'The engineer couldn\'t locate it on site. Missing assets stay visible on the register (highlighted) so they\'re never quietly forgotten.'],
                            ['Decommissioned', 'End of life. Kept for history and compliance, but excluded from field lists and worksheet pre-loading.'],
                        ],
                    },
                },
                {
                    content: '<p class="mt-4">Assets are protected from accidental loss: deleting or merging a service address will not silently destroy its register.</p>',
                },
            ],
        },
        {
            id: 'auto-promotion',
            title: 'How the Register Stays Up to Date (Auto-Promotion)',
            content: '<p class="mb-4">When an engineer completes a service worksheet, its equipment rows update the register:</p>',
            subsections: [
                {
                    bullets: [
                        '<strong>Routine rows apply automatically</strong> — servicing a known, active asset updates its history and condition with no office action needed.',
                        '<strong>Consequential rows wait for office review</strong> — anything that would create a new asset, mark one Condemned or Missing, or touch an asset still in Draft is held in the review banner on the customer\'s Assets tab. Nothing significant happens to your register without a human look.',
                    ],
                },
                {
                    content: '<p class="mb-4">The office can review, edit, and commit staged rows at any time; committing a row that services a Draft asset also activates it.</p><p class="mb-4">Five of the thirteen worksheets drive the register:</p>',
                    bullets: [
                        '<strong>Extinguisher Service Worksheet</strong> — extinguishers, fire blankets, hose reels',
                        '<strong>Fire Alarm Service Worksheet</strong> — panels, detectors, call points, sounders, beacons',
                        '<strong>Fire Alarm Commissioning Worksheet</strong> — panels and their devices, on first install',
                        '<strong>Intruder Alarm Zone List</strong> — intruder panels, detectors, contacts, PA buttons and keypads',
                        '<strong>Asset Service Worksheet</strong> — everything else (see below)',
                    ],
                },
                {
                    content: '<p>Each equipment row records an action: <strong>Service</strong>, <strong>Service existing</strong>, <strong>Replace</strong>, <strong>Condemn</strong>, or <strong>Missing</strong>.</p>',
                },
            ],
        },
        {
            id: 'asset-service-worksheet',
            title: 'The Asset Service Worksheet (New)',
            content: '<p class="mb-4">One worksheet for <strong>any equipment type on the register</strong> — emergency lights, exit signs, fire doors, smoke vents, dampers, sprinkler equipment, distribution boards, EV chargers and more.</p>',
            subsections: [
                {
                    bullets: [
                        'The equipment type picker is grouped by trade and automatically narrows to the job\'s trade',
                        'Test options adapt per row to the equipment type selected',
                        'Works fully offline, including scan-to-fill',
                        'Attach it to a job manually via <strong>"Add to job sheets"</strong>, or map one of your service types to it in <strong>Settings → Job Sheet Templates</strong> so it attaches automatically to matching jobs',
                        'The dedicated Extinguisher and Fire Alarm worksheets always take precedence for their own equipment types — the Asset Service Worksheet covers everything they don\'t',
                    ],
                },
            ],
        },
        {
            id: 'qr-tags',
            title: 'QR Asset Tags & Scanning',
            content: '<p class="mb-4">Stick a QR or barcode tag on any piece of equipment and bind it to its register entry from the field app.</p>',
            subsections: [
                {
                    title: 'Scanning on a Job',
                    content: '<p>Open the scanner from the job page (QR icon) so the job and site context travel with the scan. Scanning a bound tag shows the asset\'s details and its last three service events; one tap adds it to the right worksheet with its details pre-filled.</p>',
                },
                {
                    title: 'Registering New Equipment',
                    content: '<p>Scan an unbound tag, capture the type, manufacturer/model and serial — you can scan the rating-plate barcode straight into the serial field. New assets land as <strong>Draft</strong> for office review. If an untagged asset of the same type already exists at the site, you can <strong>link the tag to it</strong> instead of creating a duplicate.</p>',
                },
                {
                    title: 'Safety Rails',
                    content: '<p>The app warns you if a scanned asset is registered at a different site than the job, and tells you which asset a tag belongs to if it\'s already bound.</p>',
                },
                {
                    title: 'Offline',
                    content: '<p>Scanning resolves against the cached site register, and new tag binds queue and sync automatically when you\'re back in signal.</p>',
                },
            ],
        },
        {
            id: 'hierarchy',
            title: 'Parent-Child Hierarchy',
            subsections: [
                {
                    content: '<p class="mb-4">Fire alarm systems are hierarchical: panel → detectors, call points, sounders. The <strong>Fire Alarm Service Worksheet</strong> records devices against their parent panel, and the register shows the relationship.</p><p>The <strong>Asset Service Worksheet</strong> creates standalone (top-level) assets — for panel-and-device hierarchies, use the Fire Alarm worksheet.</p>',
                },
                {
                    title: 'Fire Alarm Addressing',
                    content: '<p>Panels record their panel type, system category (L1–L5, M, P1, P2) and zone/loop counts. Detectors, call points, sounders and beacons record their zone, loop and device address, so the register reads the way the panel does. These come through automatically when devices are registered from a Fire Alarm Commissioning worksheet, and can be entered or corrected by hand on the asset.</p>',
                },
            ],
        },
        {
            id: 'service-cadence',
            title: 'Service Cadence & Due Dates',
            subsections: [
                {
                    content: '<p>Recurring servicing is driven by <strong>Service Contracts</strong>: each contract generates visits and jobs on its schedule. Where a site has an active contract, the next due date flows through to worksheets; otherwise the latest issued certificate\'s next inspection date is used. Service history on each asset shows when it was last attended.</p>',
                },
            ],
        },
        {
            id: 'asset-preloading',
            title: 'Asset Pre-Loading',
            subsections: [
                {
                    content: '<p class="mb-4">When a job is created at a site that has an asset register — a contract visit, a job raised by hand, or a job converted from a quote — the attached worksheets pre-load with the site\'s registered assets — extinguishers into the Extinguisher worksheet, alarm devices into the Fire Alarm worksheet, and everything else into the Asset Service Worksheet when it\'s attached. Each asset appears exactly once, on the most specific worksheet available.</p><p>Only details actually on record pre-fill — blank fields stay honestly blank rather than guessing.</p>',
                },
            ],
        },
        {
            id: 'asset-history',
            title: 'Asset History',
            subsections: [
                {
                    content: '<p>Every serviced row writes a history event on the asset: the action taken, condition, date, and a link to the job. The field scan panel shows the last three events on site; the full history lives on the asset\'s page in the office. A per-site <strong>Asset Register PDF</strong> with type-appropriate columns is available from the customer\'s Assets tab.</p>',
                },
            ],
        },
        {
            id: 'bulk-import',
            title: 'Bulk Import',
            content: '<p class="mb-4">Import your existing register via CSV. The flow is site-scoped: you tell Opscel which site the file belongs to before you upload anything, rather than the file carrying that information itself.</p><div class="my-8"><img src="/images/docs/asset-lifecycle/bulk-import-flow.svg" alt="The bulk asset import wizard as six steps: pick the customer, pick the service address, upload the file, complete column mapping, complete device-type mapping (a blocking step), then review a re-import warning if the site already has matching assets before confirming." class="w-full rounded-lg border border-border shadow-lg" /></div>',
            subsections: [
                {
                    title: 'The Import Flow',
                    steps: [
                        'Pick the <strong>customer</strong>, then the <strong>service address</strong> — before uploading. Every row in the file imports to that one site. Your CSV doesn\'t need postcode, street, or customer-name columns; if it has them, they\'re ignored.',
                        'If your file has no <strong>Name</strong> column, Opscel derives one from the device type and its address — for example <strong>&quot;Sounder N1 L1 A45&quot;</strong> from a Node/Loop/Address combination. If two rows would derive the same name, the second gets a <strong>&quot;#2&quot;</strong> suffix.',
                        'The <strong>Device types</strong> step maps every distinct device-type value in your file to a canonical Opscel asset type. This is <strong>blocking</strong> — any unmapped type stops the import at preview, it doesn\'t import as junk. Save your mapping as a <strong>reusable profile</strong> tied to the customer, and Opscel offers it again on their next import.',
                        'If the site already holds assets of the types you\'re importing, a <strong>re-import warning</strong> lists them and requires an explicit acknowledgement checkbox before you can confirm — it won\'t silently double anything up.',
                        'Review the preview and confirm. Imported assets get real <strong>AST-</strong> numbers and register positions, in the same numbering sequence as assets added by hand or from a worksheet — there\'s no separate import numbering to reconcile.',
                    ],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Bulk asset import needs the plan that includes Asset Management</strong> (the Business plan). On lower tiers you\'ll see an upgrade prompt instead of the import screen.</p></div>',
                },
                {
                    title: 'Type and Status Normalisation',
                    bullets: [
                        '<strong>Type spellings are recognised generously</strong> — "Fire Extinguisher", "fire extinguisher" and legacy names all normalise to the standard type, and the import summary notes what was normalised. Genuinely custom types are kept as-is.',
                        '<strong>Status aliases</strong> — "not found", "lost" and "stolen" all import as Missing.',
                    ],
                },
                {
                    title: 'Duplicate Detection',
                    content: '<p>How duplicates are matched depends on where the asset\'s name came from. For <strong>auto-derived names</strong> (no Name column in your file), matching is <strong>exact-only</strong> — this is deliberate, so two adjacent devices at similar addresses never get merged into one. For files that <strong>do</strong> carry their own Name column, fuzzy matching still applies, so re-importing the same file won\'t double your register.</p>',
                },
            ],
        },
        {
            id: 'fire-alarm-panel-export',
            title: 'Importing a Fire Alarm Panel Export',
            content: '<p class="mb-4">Panel exports are a special case worth walking through on their own: they typically have <strong>no Name column and no address columns</strong> — just device types and their panel positions. This flow exists specifically for them.</p>',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Pick the <strong>customer</strong>, then the <strong>service address</strong>',
                        'Upload the export file',
                        'Complete <strong>column mapping</strong> — matching the export\'s columns to Opscel fields',
                        'Complete the <strong>Device types</strong> mapping — blocking, and offered as a reusable profile for next time',
                        'Review the <strong>re-import warning</strong> if the site already has assets of these types',
                        'Confirm the import',
                    ],
                },
                {
                    title: 'What Gets Captured',
                    bullets: [
                        '<strong>Node, Zone Number, Loop Number, Loop Address</strong> — Loop Address is stored as <strong>text on purpose</strong>: real panels use dotted addresses like <code>1.045</code>, and treating it as a number would corrupt them',
                        '<strong>Panel Type</strong> and <strong>Alarm Category</strong>',
                        'Auto-generated names built from these fields when the file has no Name column (see <strong>The Import Flow</strong> above), including the <strong>&quot;#2&quot;</strong> collision suffix',
                    ],
                },
                {
                    title: 'Combined Devices (e.g. 48.1 / 48.2)',
                    content: '<p>A sounder/beacon combined device at one physical address is usually <strong>listed twice</strong> in a panel export — once per function, e.g. <code>48.1</code> and <code>48.2</code> — because each is programmed separately on the panel even though they\'re one physical unit. The register keeps <strong>one row per listing</strong>, matching how the panel itself lists them, rather than trying to merge them back into a single device.</p>',
                },
                {
                    title: 'Second Imports',
                    content: '<p>Re-importing an updated export from the same panel goes through the same <strong>re-import acknowledgement</strong> as any other bulk import — you\'ll see which existing assets of the incoming types are already on the site before you confirm.</p>',
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'An Asset the Engineer Recorded Isn\'t on the Register',
                    content: '<p>Check the review banner on the customer\'s Assets tab — rows that create new assets or change lifecycle status wait there for office commit.</p>',
                },
                {
                    title: 'A Scanned Tag Says It\'s Already Bound',
                    content: '<p>The tag belongs to another asset; the app shows which one. Use a fresh tag, or unbind from the office if the original was tagged in error.</p>',
                },
                {
                    title: 'The Field Type Picker Doesn\'t Show a Type I Need',
                    content: '<p>The picker narrows to the job\'s trade. Equipment belonging to another trade appears once the job\'s trade covers it, and the full grouped list is shown when the job has no trade set.</p>',
                },
                {
                    title: 'The Asset Service Worksheet Isn\'t Attaching Automatically',
                    content: '<p>Automatic attachment is opt-in: map the relevant service type to it in <strong>Settings → Job Sheet Templates</strong>. Until then, add it to individual jobs via "Add to job sheets".</p>',
                },
                {
                    title: 'Imported Types Look Different From My File',
                    content: '<p>That\'s the normalisation above — the register stores one standard spelling per type so duplicate matching and reporting work reliably.</p>',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Does scanning work offline?',
                    content: '<p>Yes. Tag resolution runs against the cached site register, and new binds queue until you\'re back in signal.</p>',
                },
                {
                    title: 'Does the Asset Service Worksheet replace the Extinguisher or Fire Alarm worksheets?',
                    content: '<p>No. Dedicated worksheets always take precedence for their own equipment; the Asset Service Worksheet covers every other type and acts as a fallback.</p>',
                },
                {
                    title: 'Can engineers decommission equipment from the field?',
                    content: '<p>They can mark a row Condemn or Missing on the worksheet — the register change is then held for office review before it applies.</p>',
                },
                {
                    title: 'Who can manage the register?',
                    content: '<p>Asset management follows your team\'s normal permissions and is available on plans that include Asset Management.</p>',
                },
                {
                    title: 'What happens to an asset\'s history if the asset is decommissioned?',
                    content: '<p>It\'s retained — decommissioned assets stay on record for compliance; they\'re just excluded from active field lists and pre-loading.</p>',
                },
                {
                    title: 'Do I have to remap device types every time I import for the same customer?',
                    content: '<p>No. Save your Device types mapping as a profile the first time, and Opscel offers it again on that customer\'s next import — you only remap types you haven\'t seen before.</p>',
                },
                {
                    title: 'What happens if I re-import a file for a site that already has assets?',
                    content: '<p>Opscel shows a warning listing the asset types already present at that site and requires you to tick an acknowledgement checkbox before the import proceeds. Nothing is silently duplicated.</p>',
                },
                {
                    title: 'Which plan includes bulk asset import?',
                    content: '<p>The plan that includes Asset Management — the Business plan. It\'s the same gate as the rest of the asset module; Starter and Team can still import customers, contacts, addresses, and jobs via CSV, just not assets.</p>',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>',
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
