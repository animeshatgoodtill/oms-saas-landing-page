import { IDocGuide } from '@/types';

export const assetTrackingGuide: IDocGuide = {
    slug: 'asset-tracking',
    title: 'Asset Tracking — Support Guide',
    description: 'A quick guide to capturing site equipment in Opscel, registering it from your engineers\' worksheets, and printing the per-site asset register your customers and assessors want to see.',
    lastUpdated: '2026-09-05',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: '<p class="mb-4">When your engineer fills in a worksheet on site — a Fire Extinguisher Service, a Fire Alarm Commissioning, a Fire Alarm Service — they\'re already listing the equipment they touched. Opscel turns that list into tracked assets at the site. Return next year and the full service history is already there.</p><p>Only some worksheets do this — see <strong>Which Worksheets Create Assets</strong> below.</p>',
            subsections: [
                {
                    title: 'Availability',
                    content: 'Asset tracking is included on the Business plan (£149/month). Starter and Team plans don\'t include the asset module, the per-site register PDFs, or the worksheet-to-assets bridge.',
                    bullets: []
                }
            ]
        },
        {
            id: 'which-worksheets',
            title: 'Which Worksheets Create Assets',
            content: '<p class="mb-4"><strong>Five of the thirteen.</strong> This is the single most common source of confusion. In the office the app will not warn you: on a worksheet that doesn\'t support it, nothing happens and <strong>no message is shown</strong>. On the engineer\'s phone it is now visible — the <strong>Add from site register</strong> button simply isn\'t there on a worksheet that can\'t hold equipment, and scanning a tag onto one says so outright.</p>',
            subsections: [
                {
                    table: {
                        headers: ['Worksheet', 'Registers assets?'],
                        rows: [
                            ['Fire Alarm Service', '✅'],
                            ['Fire Alarm Commissioning', '✅'],
                            ['Fire Extinguisher Service', '✅'],
                            ['Intruder Alarm Zone List', '✅'],
                            ['Asset Service', '✅ (any equipment type — see the note below)'],
                            ['<strong>Remedials Scope of Works</strong>', '❌'],
                            ['Site Attendance / Inspection &amp; Servicing', '❌'],
                            ['<strong>Combined BS 5839 &amp; BAFE SP203</strong>', '❌'],
                            ['Basic Job Sheet', '❌'],
                            ['CCTV / Intruder / Access Control Commissioning', '❌'],
                            ['Security Risk Assessment', '❌'],
                        ],
                    },
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The Remedials Scope of Works sheet does not register assets.</strong> It is a scope document — it records what needs doing so it can be quoted, not what equipment is on site. An earlier version of this page listed it as registering assets; that was incorrect. If you relied on it to build your register, those items were never added: record equipment on the <strong>Asset Service</strong> worksheet, or bring it in under <strong>Data Management → Import</strong>.</p></div>',
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The Combined BS 5839/SP203 sheet does not register assets.</strong> Fire alarm servicing jobs now attach the <strong>Fire Alarm Service</strong> worksheet by default, which does register devices — so most businesses are already covered. But if you have deliberately pointed your fire alarm servicing at the Combined BS 5839 &amp; BAFE SP203 Jobsheet, the devices will not reach your register no matter how completely the engineer fills it in. Keep the Fire Alarm Service worksheet on those jobs as a second sheet, or add the devices another way.</p></div>',
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>Asset Service records any equipment type — but not its technical detail.</strong> It captures what the item is, where it is, its serial, make and model, what was done to it and its condition, and it builds a proper service history. What it does not capture is the type-specific detail the dedicated worksheets ask for: a fire alarm device\'s zone, loop and address, or an extinguisher\'s size and manufacture date. So an emergency light registered through Asset Service will have its <em>Type</em> and <em>Duration</em> columns blank on the register until someone fills them in on the asset itself (section 4). For fire alarm devices and extinguishers, use the dedicated worksheets — they capture the lot in one pass.</p></div>',
                },
                {
                    content: '<p class="mb-4">You can always check the current list in the app: <strong>Settings → Asset Tracking</strong>, under <em>&quot;Currently Supported Worksheets&quot;</em> — that list is generated from the app itself, so it is the one to trust if this page ever disagrees with it.</p><div class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="/images/docs/asset-tracking/auto-register-toggle.webp" alt="Settings → Asset Tracking screen, showing the Auto-register on worksheet completion toggle switched off, and the Currently Supported Worksheets box listing the five worksheets that register assets: Fire Alarm Commissioning, Fire Alarm Service, Fire Extinguisher Service, Asset Service, and Intruder Alarm Zone List &amp; Operational Checks" class="w-full rounded-lg border border-border shadow-lg" /></div>',
                },
            ]
        },
        {
            id: 'auto-register',
            title: '1. Auto-Register, and What It Does Not Do',
            content: '<p class="mb-4"><strong>Settings → Asset Tracking → &quot;Auto-register on worksheet completion&quot;</strong> → <strong>Save Changes</strong>. It\'s <strong>off by default</strong> for every business.</p>',
            subsections: [
                {
                    title: 'What Auto-Register Commits on Its Own',
                    content: '<p>Routine work — an engineer servicing equipment that\'s <em>already</em> on your register updates it the moment the worksheet is marked Complete.</p>',
                },
                {
                    title: 'What Still Waits for You, Even with It On',
                    bullets: [
                        '<strong>New equipment</strong> the engineer has added',
                        'Anything set to <strong>Decommissioned</strong> or <strong>Missing</strong>',
                        'Anything referencing an asset still awaiting review',
                    ],
                },
                {
                    content: '<p class="mb-4">That\'s deliberate, and worth understanding rather than working around. Engineers can <strong>add</strong> equipment they find on site but <strong>cannot edit or delete it afterwards</strong> — so a mistyped asset needs an admin to correct it. The review step catches it before it becomes a permanent record.</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>On a first visit to a new site, everything is new equipment — so everything waits for your review, even with auto-register on.</strong> That\'s expected, not a fault. It\'s the most common &quot;auto-register isn\'t working&quot; report.</p></div>',
                },
            ]
        },
        {
            id: 'manual-register',
            title: '2. Register Assets from a Worksheet',
            content: '<p class="mb-4">Use this when you want to review the items before they become permanent records.</p>',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Open the job',
                        'Click the <strong>Assets</strong> tab',
                        'A banner shows what the engineer recorded — <em>&quot;5 fire extinguisher items extracted from worksheet&quot;</em>',
                        'Click <strong>Register as Assets</strong> — the button names the count, e.g. <em>&quot;Register 5 items&quot;</em> — and confirm',
                    ],
                },
                {
                    content: '<p class="mb-4">They appear in the Assets list immediately. If the worksheet covered several equipment types, the banner breaks it down — <em>&quot;3 fire alarm panels + 12 smoke detectors&quot;</em>.</p><div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Changed your mind?</strong> You have <strong>five minutes</strong> to undo a registration, and the clock is enforced by the server — if you come back later the undo will be refused even if the button is still on screen. Undo removes everything created in that run, and can only be used once.</p></div>',
                },
            ]
        },
        {
            id: 'print-register',
            title: '3. Print the Site Asset Register',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Go to <strong>Customers → [Customer] → [Site] → Assets</strong>',
                        'Click <strong>Print Register</strong>',
                        'Pick the equipment type',
                        'The PDF opens in a new tab',
                    ],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4"><p class="text-amber-800"><strong>One register per equipment type, not one per site.</strong> If a site has a panel, smoke detectors, heat detectors and sounders, that\'s <strong>four separate prints</strong> — there\'s no combined fire alarm device register today. Each click of Print Register gives you one type.</p></div>',
                },
                {
                    title: 'What the Register Shows',
                    content: '<p>Site address and contact, &quot;Month Due&quot;, each asset\'s number, type, size and position, and a multi-year service history grid with the engineer\'s initials per visit.</p>',
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Decommissioned equipment does not appear on the register.</strong> See section 7.</p></div>',
                },
            ]
        },
        {
            id: 'add-manually',
            title: '4. Add an Asset by Hand',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Go to <strong>Customers → [Customer] → [Site] → Assets</strong>',
                        'Click <strong>Add Asset</strong>',
                        'Choose the equipment type, fill in the location, save',
                    ],
                },
                {
                    content: '<p class="mb-4"><strong>Required:</strong> Customer, Service Address, Asset Type, Asset Name. Everything else is optional.</p><p class="mb-4">Choosing the type reveals fields specific to that equipment, and <strong>anything you enter here prints on the register</strong>.</p>',
                },
                {
                    title: 'Fire Alarm Panels',
                    content: '<p>Panel Type, System Category, Number of Zones, Number of Loops.</p>',
                },
                {
                    title: 'Detectors, Call Points, Sounders, Beacons',
                    content: '<p class="mb-4"><strong>Zone</strong> (&quot;Zone number as shown on the panel&quot;), <strong>Loop</strong>, and <strong>Address</strong> (&quot;Device address on the loop. Addressable systems only&quot;). Enter the address exactly as the panel shows it, including any decimal point — <code>1.045</code> is valid.</p><div class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="/images/docs/asset-tracking/add-asset-smoke-detector-fields.webp" alt="Add Asset form with Smoke Detector selected, showing the Zone, Loop, and Address fields with their helper text" class="w-full rounded-lg border border-border shadow-lg" /></div>',
                },
                {
                    title: 'Fire Extinguishers',
                    content: '<p class="mb-4">This decides whether your BS 5306 register is complete:</p>',
                    table: {
                        headers: ['Field', 'What it\'s for'],
                        rows: [
                            ['Extinguisher Type', 'Drives the TYPE column on the record sheet'],
                            ['Capacity (kg)', 'For CO2, powder and wet chemical'],
                            ['Capacity (litres)', 'For water and foam'],
                            ['Fire Rating', 'e.g. 13A 89B'],
                            ['<strong>Manufacture Date</strong>', 'The date on the body. <strong>Starts the BS 5306-3 extended-service clock</strong>'],
                            ['<strong>Last Discharge / Extended Service</strong>', 'Prints in the <strong>D/E</strong> column, and restarts the clock from this date'],
                            ['Service Interval (years)', 'Leave blank for the BS 5306-3 default — <strong>5 years, or 10 for CO2</strong>'],
                            ['Next Extended Service Due', 'Leave blank to work it out from the dates above'],
                        ],
                    },
                },
                {
                    content: '<p class="mb-4"><strong>How ES Due is worked out:</strong> an explicit <em>Next Extended Service Due</em> always wins. Otherwise it\'s the <strong>last discharge/extended service date, or the manufacture date if there has been no discharge test</strong>, plus the interval. If neither date is present, the column stays blank — the app won\'t guess.</p><div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>These dates can only be entered here, by an admin, one asset at a time.</strong> The Fire Extinguisher Service worksheet records an extinguisher\'s <strong>type and size</strong>, but not its manufacture date or discharge test. So extinguishers that reached your register from an engineer\'s worksheet will show TYPE and SIZE correctly and leave <strong>D/E and ES Due blank</strong> until someone fills them in here.</p></div>',
                },
            ]
        },
        {
            id: 'service-history',
            title: '5. An Asset\'s Service History',
            subsections: [
                {
                    content: '<p class="mb-4">Open the asset from the Assets list, the site page, or a job\'s Assets tab. <strong>Service History</strong> lists every job that touched it — the action taken (serviced, inspected, repaired, replaced, decommissioned), any deficiencies found, the date, and the engineer.</p><div class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="/images/docs/asset-tracking/asset-detail-service-history.webp" alt="Asset detail page showing identification, location, and service dates, plus a Service History table listing the job, action, date, and status of each visit" class="w-full rounded-lg border border-border shadow-lg" /></div>',
                },
            ]
        },
        {
            id: 'fac-device-list',
            title: '6. Fire Alarm Commissioning: Panels and Devices',
            content: '<p class="mb-4">The commissioning worksheet creates panels <strong>and</strong> their devices in one pass. <strong>Order matters.</strong></p>',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Open the FAC worksheet',
                        'Scroll to <strong>Device list (commissioned at this visit)</strong>',
                        'Row 1 — pick <strong>Fire Alarm Panel</strong>, fill the location, leave <em>Parent panel #</em> blank',
                        'Row 2 onward — pick the device and set <em>Parent panel #</em> to the panel\'s <strong>row number</strong> (<code>1</code>)',
                        'More than one panel? If the second panel is row 8, its devices use <em>Parent panel #</em> = <code>8</code>',
                    ],
                },
                {
                    content: '<p>On Mark Complete (or when an admin registers), the devices link to their panel.</p>',
                },
                {
                    title: 'If Devices Were Skipped',
                    content: '<p>It\'s almost always row order — a device listed above its panel can\'t be linked. The Assets tab names the rows and the reason: <em>&quot;Parent row 4 not yet promoted — parent rows must come before children.&quot;</em> Fix the order and re-run (section 8).</p>',
                },
            ]
        },
        {
            id: 'decommission',
            title: '7. Decommissioning',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Open the asset',
                        'Set <strong>Status</strong> to <strong>Decommissioned</strong>',
                        'Save',
                    ],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The Delete button does the same thing.</strong> Deleting an asset doesn\'t remove it — it marks it decommissioned and keeps the record and its history. There\'s no separate undo; to reverse it, edit the asset and set the status back.</p></div>',
                },
                {
                    title: 'What Changes Once Decommissioned',
                    bullets: [
                        'It <strong>no longer appears on the site register PDF</strong>',
                        'It\'s <strong>dropped from the next visit\'s worksheet</strong>, silently — nothing tells you it was removed',
                        'Its history is kept, and you can still open it directly',
                        'If it was a panel, its detectors keep their own records — they\'re not removed with it',
                    ],
                },
            ]
        },
        {
            id: 're-run',
            title: '8. Re-Run a Worksheet\'s Registration',
            content: '<p class="mb-4">Added more rows after registering some? Open the job → <strong>Assets</strong> tab → the banner shows the new pending count → <strong>Register N pending items</strong>.</p>',
            subsections: [
                {
                    content: '<p>Re-running is always safe. Rows already registered are skipped, never duplicated.</p>',
                },
            ]
        },
        {
            id: 'contract-visits',
            title: '9. Jobs Pick Up the Site Register',
            content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4">Updated — September 2026</p><p class="mb-4">If a site has an asset register, the equipment arrives on the job\'s worksheet already listed — you no longer start from a blank sheet. This applies to <strong>every job created at that site</strong>, not just contract visits, including jobs converted from a quote.</p>',
            subsections: [
                {
                    content: '<p class="mb-4">Each item comes in marked as <strong>existing equipment being serviced</strong>, so completing the sheet updates those assets rather than creating duplicates.</p><p class="mb-4">It is filtered to the equipment types the attached worksheet actually manages, so a fire alarm visit does not arrive carrying every extinguisher on the site. If a job carries two worksheets, each asset is listed on one of them only — never both — so you never confirm the same detector twice.</p><p class="mb-4">It doesn\'t fill anything when the job has no site address, when there\'s no live equipment of the relevant type at that address, when the worksheet in use can\'t hold equipment (see <strong>Which Worksheets Create Assets</strong>), or on plans that don\'t include the asset module. It also can\'t fill a sheet with equipment that was added to the register <em>after</em> the job was created.</p><p>When it comes up short, the engineer is no longer stuck: they can pull the equipment in themselves from the phone — see <strong>section 10</strong>.</p>',
                },
            ]
        },
        {
            id: 'on-site-picking',
            title: '10. On Site: Picking the Equipment in Front of You',
            content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4">New — September 2026</p><p class="mb-4">Until now, if the worksheet didn\'t already list a piece of equipment and its tag wouldn\'t scan, the engineer\'s only option was to add a blank row and type the asset number from memory. That field has no lookup, and a mistyped number is accepted silently — the row looks filled in, but nothing is recorded against that unit. That gap is closed.</p>',
            subsections: [
                {
                    title: 'Add from Site Register',
                    content: '<p class="mb-4">On any worksheet that records equipment, there is now an <strong>Add from site register</strong> button above the equipment list. It shows what is already registered at that site; the engineer taps an item and the row fills itself in.</p>',
                    bullets: [
                        '<strong>Only what that worksheet records.</strong> On a Fire Extinguisher Service you see extinguishers, fire blankets and hose reels — not the site\'s smoke detectors.',
                        '<strong>Nothing already on the sheet.</strong> Items the worksheet is already carrying are left out, so the same unit can\'t be added twice.',
                        '<strong>Search</strong> by location, asset number or serial — useful on a site with a hundred devices.',
                        '<strong>Add all</strong> brings in everything currently listed, up to fifty at a time.',
                        '<strong>It works with no signal.</strong> The register is already downloaded to the phone with the job.',
                    ],
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900">The button is absent on a worksheet that can\'t hold equipment — that is the quickest way to tell. It is also absent on <strong>Fire Alarm Commissioning</strong>, which is deliberate: commissioning is where devices are installed for the first time, so there is no existing register to service.</p></div>',
                },
                {
                    title: 'When the Tag Won\'t Scan',
                    content: '<p class="mb-4">Damaged label, no camera, or bad light: the scan screen now offers <strong>Enter the code manually</strong>. The engineer can type the tag code, the asset number, or the serial number off the rating plate.</p>',
                    bullets: [
                        'Matches are <strong>exact</strong> — no partial or fuzzy matching, because pointing an engineer at the wrong unit is worse than finding nothing.',
                        'If two units share a serial number, it <strong>asks which one</strong> rather than guessing.',
                        'It searches the sites downloaded to the phone first, so it works offline.',
                        'Typing an <strong>asset number</strong> won\'t offer to register it as a tag — asset numbers aren\'t tag codes, and treating one as a tag would create a duplicate record.',
                    ],
                },
                {
                    title: 'Rows Now Say What They Are',
                    content: '<p>Each row on the worksheet is headed by the equipment it refers to — its asset number and location, rather than just a row number — and carries a label saying where it came from: <em>carried over from your last visit</em>, <em>from site register</em>, or <em>scanned</em>. On a site with forty extinguishers this is the difference between a usable list and a numbered one.</p>',
                },
            ]
        },
        {
            id: 'existing-equipment',
            title: 'Getting Existing Equipment In',
            content: '<p class="mb-4">Three routes:</p>',
            subsections: [
                {
                    bullets: [
                        '<strong>By hand</strong> on the site\'s Assets page (section 4)',
                        '<strong>Spreadsheet import</strong> — Settings → Import Data → Assets',
                        '<strong>From a worksheet</strong> an engineer completes (section 2)',
                    ],
                },
                {
                    content: '<div class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="/images/docs/asset-tracking/import-data-select-type.webp" alt="Settings → Import Data screen showing the Select Data Type cards, including Assets, linked to site addresses" class="w-full rounded-lg border border-border shadow-lg" /></div>',
                },
                {
                    content: '<p class="mb-4">You pick the <strong>customer and site in the UI before uploading</strong> — every row in the file imports to that one site, and your file doesn\'t need address or customer-name columns even if it has them. If a row has no <strong>Name</strong>, Opscel derives one from the device type and its panel position (e.g. <em>&quot;Sounder N1 L1 A45&quot;</em>).</p><p class="mb-4">Fire alarm fields import properly too: <strong>Node, Zone Number, Loop Number, Loop Address</strong> (kept as text, since real panels use addresses like <code>1.045</code>), <strong>Panel Type</strong>, and <strong>Alarm Category</strong> — plus the extinguisher service-clock fields (manufacture date, last discharge/extended service, service interval).</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900">Every distinct device-type value in your file must be mapped to a canonical Opscel asset type before the import runs — this is a <strong>blocking</strong> step, so nothing imports as unrecognised junk. Save the mapping as a reusable profile for that customer\'s next import.</p></div><p class="mt-4">Imported assets get real <strong>AST-</strong> numbers and register positions, in the same sequence as assets added by hand. Full walkthrough: <a href="/docs/asset-lifecycle#bulk-import" class="text-secondary hover:underline">Bulk Import</a>.</p>',
                },
            ]
        },
        {
            id: 'permissions',
            title: 'Who Can Do What',
            subsections: [
                {
                    table: {
                        headers: ['Role', 'View', 'Add', 'Edit', 'Decommission', 'Import'],
                        rows: [
                            ['Admin / Contract Manager', '✅', '✅', '✅', '✅', '✅'],
                            ['Site Manager', '✅', '✅', '✅', '❌', '❌'],
                            ['Engineer', '✅', '✅', '❌', '❌', '❌'],
                            ['Accounts / Sales Manager / Viewer', '✅', '❌', '❌', '❌', '❌'],
                        ],
                    },
                },
                {
                    content: '<p><strong>Engineers can add equipment they find on site but cannot edit or delete it.</strong> If an engineer mistypes an asset, an Admin, Contract Manager or Site Manager has to correct it — which is why new equipment waits for review (section 1).</p>',
                },
            ]
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'What is an "asset" in Opscel?',
                    content: 'A physical piece of equipment installed at a customer site that needs servicing on a recurring basis — fire extinguishers, smoke detectors, fire alarm panels, emergency lights, distribution boards, EV chargers, solar inverters, and so on.',
                    bullets: []
                },
                {
                    title: 'What tier do I need?',
                    content: 'Asset Management is on the Business plan (£149/month). Starter and Team plans don\'t include the asset module, the per-site register PDFs, or the worksheet-to-assets bridge.',
                    bullets: []
                },
                {
                    title: 'Do my engineers need to do anything different?',
                    content: 'Almost nothing. The equipment list they were already filling in is the bit that becomes assets. Two things did change: fire alarm, extinguisher and intruder alarm service jobs now open on their specialised worksheet rather than the attendance sheet, and where the site has an asset register the equipment is already listed when they open the sheet — so they confirm rather than re-type.',
                    bullets: []
                },
                {
                    title: 'What worksheets can produce assets?',
                    content: 'Five of the thirteen: Fire Alarm Service, Fire Alarm Commissioning, Fire Extinguisher Service, Intruder Alarm Zone List, and Asset Service (any equipment type). Remedials Scope of Works does <strong>not</strong> — despite what an earlier version of this page said. Nor do Site Attendance, Combined BS 5839 &amp; BAFE SP203, Basic Job Sheet, the CCTV / Intruder / Access Control commissioning checklists, or the Security Risk Assessment. See <strong>Which Worksheets Create Assets</strong> above.',
                    bullets: []
                },
                {
                    title: 'How do existing assets get into Opscel?',
                    content: 'Three ways: (1) bulk CSV import from Settings → Data Management — you pick the customer and site first, then map any unrecognised device types before the import runs (see the <a href="/docs/asset-lifecycle#bulk-import" class="text-secondary hover:underline">full import walkthrough</a>), (2) added by hand on the site\'s Assets page, or (3) auto-created when an engineer fills a supported worksheet. Import doesn\'t carry per-type fields (zone, loop, address, extinguisher dates) — see <strong>Getting Existing Equipment In</strong> above.',
                    bullets: []
                },
                {
                    title: 'Why does the import say "unknown device type"?',
                    content: 'Every distinct device-type value in your file has to be mapped to a canonical Opscel asset type before the import can proceed — this is a blocking step, not a warning you can dismiss. It replaces the old behaviour where an unrecognised type would import silently as junk. Map it once and, if you\'ll be importing for this customer again, save the mapping as a profile — Opscel offers it automatically on their next import.',
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
                    content: 'Admins register assets by default. Engineers fill the worksheets — that\'s the data — but the act of committing items as permanent asset records is admin-only. If you trust your engineers\' input, switch on auto-register (Settings → Asset Tracking) and the routine part happens automatically when they Mark Complete — new equipment still waits for review either way.',
                    bullets: []
                },
                {
                    title: 'What format is the Asset Register PDF?',
                    content: 'Modelled on the paper formats your customers and assessors are used to seeing — Synergy/Balthorne for extinguishers (TYPE · SIZE · POSITION · D/E · ES Due plus the multi-year service grid), publisher-style logbook layout for fire alarm devices. We follow what BS 5306-3, BS 5839-1 and BS 5266-1 mandate be recorded; the visual layout matches the conventions your trade already prints. It\'s one register per equipment type, not one combined register per site.',
                    bullets: []
                },
                {
                    title: 'My engineer\'s worksheet had 8 devices but only 5 became assets. Why?',
                    content: 'The most likely cause is row order on the Fire Alarm Commissioning device list — child devices must list their parent panel first in the row order. The Assets tab will tell you exactly which rows were skipped and why ("Parent row 4 not yet promoted — parent rows must come before children"). Re-order the worksheet rows and re-run. If you\'re using the Combined BS 5839/SP203 or Site Attendance worksheet instead, that\'s the cause — those don\'t register assets at all.',
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
                    content: 'Drawn live from the engineer\'s name on their Opscel account. If an engineer leaves and is removed from your team, their historical visits show "—" instead of initials — but the date and the work performed stay on record.',
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
