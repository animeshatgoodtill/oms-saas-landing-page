import { IDocGuide } from '@/types';

const IMG = '/images/docs/asset-lifecycle';
const TRK = '/images/docs/asset-tracking';

const figure = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="${src}" alt="${alt}" class="w-full rounded-lg border border-border shadow-lg" loading="lazy" />${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** A phone screenshot: a tall portrait image, so it keeps phone width instead of stretching across the page. */
const phoneFigure = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8 mx-auto" style="max-width: 300px"><img src="${src}" alt="${alt}" class="w-full rounded-2xl border border-border shadow-lg" loading="lazy" />${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than shrinking its text. */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><img src="${src}" alt="${alt}" class="w-full min-w-[720px] rounded-lg border border-border bg-white" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

export const assetLifecycleGuide: IDocGuide = {
    title: 'Asset Register Deep Dive',
    description: 'How the register works underneath: asset statuses, what updates automatically and what waits for review, how a visit plan splits a large site across the year, how coverage is worked out, the pre-loading rules, QR tags, and bulk import including panel exports.',
    slug: 'asset-lifecycle',
    lastUpdated: '2026-09-26',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: '<p class="mb-4"><strong>The 30-second version:</strong> the Asset Register tracks your customers\' equipment - fire extinguishers, alarm panels and devices, emergency lighting, fire doors, electrical boards, EV chargers and more - across its whole life. Engineers keep it up to date by filling in their service worksheet or scanning a QR tag: routine updates apply automatically, and anything consequential (new equipment, condemned or missing items) waits for office review. Registered assets pre-load into worksheets on every job at the site, and on a large site a <strong>visit plan</strong> shares them out across the year.</p>'
                + diagram(`${IMG}/asset-journey.svg`, 'The journey of a piece of equipment: the site register is fed by imports, hand entry and completed worksheets; a service contract decides which worksheet a visit gets; when a job is raised the worksheet is pre-filled from the register; the engineer confirms rows, adds from the register or scans a tag, and signs off; history flows back to the register and consequential changes wait for office review.', 'The register feeds the sheet; the sheet feeds the register. Nothing is typed twice.'),
            subsections: [
                {
                    title: 'Availability',
                    content: '<p>The whole asset module is included on the <strong>Business</strong> plan - the register, pre-loading, the visit plan, coverage, QR/NFC tags, the per-site register PDF and bulk import. Starter and Team plans don\'t include any of it.</p>',
                },
                {
                    title: 'Why Track Assets in Opscel',
                    bullets: [
                        'Register updates come from the work itself - no separate data entry after the job',
                        'Office review of every consequential change, so the register stays trustworthy',
                        'QR tags identify equipment instantly on site, even offline',
                        'Service continuity: assets pre-load into worksheets on every return visit, and a visit plan keeps big sites manageable',
                        'Coverage is visible: which assets are on a contract, and which are not',
                        'Compliance via certificate and job links, plus a per-site Asset Register PDF',
                    ],
                },
                {
                    content: '<p>For the step-by-step office tasks and what the engineer sees on the phone, start with the <a href="/docs/asset-tracking" class="text-secondary hover:underline">Asset Tracking support guide</a>. This page is the model underneath it.</p>',
                },
            ],
        },
        {
            id: 'asset-lifecycle',
            title: 'Asset Status',
            content: '<p class="mb-4">Every asset carries a status. Nothing is ever really deleted - status is what changes.</p>'
                + diagram(`${IMG}/status-flow.svg`, 'An asset moves from Draft (registered from the field, awaiting review) to Active, then to Maintenance and back, to Missing (stays on the register, highlighted) or to Decommissioned (kept for history; off field lists and pre-loading; the Delete button does the same thing).', 'Nothing is ever really deleted - status is what changes.'),
            subsections: [
                {
                    table: {
                        headers: ['Status', 'Meaning'],
                        rows: [
                            ['Draft', 'Registered from the field (usually via tag scan) and awaiting office review. Becomes Active when the office commits it. Still pre-loads into worksheets and counts for coverage while in Draft.'],
                            ['Active', 'In service. Appears on the register and the register PDF.'],
                            ['Maintenance', 'Temporarily out of service. Still pre-loads into worksheets and counts for coverage - Opscel keeps asking for it to be serviced.'],
                            ['Missing', 'The engineer couldn\'t locate it on site (worksheet action <strong>Missing / Not Found</strong>). Missing assets stay visible on the register (highlighted), and still pre-load into worksheets and count for coverage, so they\'re never quietly forgotten. It prints as <strong>NF</strong> on the register and <strong>Not found</strong> in the asset\'s service history - and, because nobody actually serviced it, it never counts as a service or advances the asset\'s last-service date.'],
                            ['Decommissioned', 'End of life. Kept for history and compliance, but excluded from field lists, worksheet pre-loading and coverage. The Delete button does exactly this. <strong>Reinstate</strong> (on the asset page) reverses it cleanly - it replaces the Decommission action once an asset is already decommissioned, and clears the decommissioned date.'],
                        ],
                    },
                },
                {
                    content: '<p>Pre-loading and coverage count every status except Decommissioned - Draft, Active, Maintenance and Missing all count.</p>',
                },
                {
                    content: '<p class="mt-4">Assets are protected from accidental loss: deleting or merging a service address will not silently destroy its register.</p>',
                },
            ],
        },
        {
            id: 'auto-promotion',
            title: 'How the Register Stays Up to Date',
            content: '<p class="mb-4">When an engineer completes a service worksheet, its equipment rows update the register. Which rows apply on their own and which wait for a person depends on what the row <em>changes</em>:</p>'
                + diagram(`${TRK}/auto-vs-review.svg`, 'A completed worksheet\'s rows split two ways: Service and Service existing rows apply automatically to the register\'s history and condition; Replace, Condemn, Missing and New equipment rows go to the review banner on the customer\'s Assets tab and only reach the register when the office commits them. With the auto-register toggle off, everything waits.', 'Routine rows apply themselves; anything that changes what exists waits for a human. On the device test list, a device recorded as not tested writes no service either, and stays due.'),
            subsections: [
                {
                    bullets: [
                        '<strong>Routine rows apply automatically</strong> (with auto-register on) - servicing a known, active asset updates its history and condition with no office action. On a pre-loaded sheet that is nearly every row.',
                        '<strong>Consequential rows wait for office review</strong> - anything that would create a new asset, mark one Condemned or Missing, replace it, or touch an asset still in Draft is held in the review banner on the customer\'s Assets tab. Nothing significant happens to your register without a human look.',
                    ],
                },
                {
                    content: '<p class="mb-4">The office can review, edit and commit staged rows at any time; committing a row that services a Draft asset also activates it. Re-running is idempotent - rows already registered are skipped.</p><p class="mb-4">Five of the thirteen worksheets carry equipment (and therefore both pre-load from the register and write back to it):</p>',
                    bullets: [
                        '<strong>Extinguisher Service Worksheet</strong> - extinguishers, fire blankets, hose reels',
                        '<strong>Fire Alarm Service Worksheet</strong> - panels, detectors, call points, sounders, beacons, interface units',
                        '<strong>Fire Alarm Commissioning Worksheet</strong> - panels and their devices, on first install',
                        '<strong>Intruder Alarm Zone List</strong> - intruder panels, detectors, contacts, PA buttons and keypads',
                        '<strong>Asset Service Worksheet</strong> - everything else (see below)',
                    ],
                },
                {
                    content: '<p>Each equipment row records an action, and the action list is <strong>specific to the worksheet</strong> - the extinguisher worksheet offers <strong>Basic Service</strong>, <strong>Test Discharge</strong>, <strong>Refilled</strong>, <strong>Exchange</strong>, <strong>Condemn &amp; Dispose</strong>, <strong>New / Hire</strong>, <strong>Service Existing</strong> and <strong>Missing / Not Found</strong>; other worksheets carry their own list built the same way. A pre-loaded row arrives as <em>Service Existing</em> (or its equivalent); the engineer\'s own entry on the row - what was done, a quantity, a result - marks it done. On the <strong>extinguisher worksheet</strong>, and anywhere devices are shown as cards, that confirmation is tapping <strong>✓ Serviced as listed</strong>. On the <strong>Fire Alarm Service and Asset Service worksheets</strong>, their devices show as a <strong>device test list</strong> instead of cards by default - the same confirmation is a single tap on the row (see below).</p>',
                },
                {
                    title: 'The Device Test List (Fire Alarm Service & Asset Service)',
                    content: '<p class="mb-4">Rather than a card per device, these two worksheets list their equipment as one compact line each - identity, kind and location - grouped by zone and sorted in panel order by default.</p>' + phoneFigure(`${TRK}/field-device-test-list.webp`, 'The Fire Alarm Service device test list on an Android phone: 25 of 150 tested with 1 fault and 124 to do; zone 1 devices ticked Tested, zone 2 showing 1/25 done with a Mark 24 tested button, one sounder marked Fault and the rest waiting to be tapped', 'The real screen on a phone: tap a row to mark it tested, the arrow opens its card, and a zone can be marked in one go.'),
                    bullets: [
                        '<strong>Tap a row to mark it tested; tap again to undo.</strong> The arrow on the right always opens the full card, for a fault, a note, or the <strong>Missing</strong> action - a tap on the row itself never sets those.',
                        'A zone header shows <strong>N/M done</strong> and a <strong>Mark N tested</strong> button for what is left in it - tap it twice to confirm.',
                        '<strong>Search</strong> by asset number, location or loop address; <strong>filter</strong> by To do, Tested, Faults or Not tested; <strong>sort</strong> by panel order, location A-Z, or to-do first.',
                        '<strong>Select several devices</strong> to mark them tested, faulty or not tested together - every bulk change can be undone for 5 seconds.',
                        '<strong>Scan a tag</strong> to jump straight to its row, even offline; a device not on this visit\'s list can still be added in one tap.',
                        'Prefer the card list? <strong>Show as cards</strong> switches back, and the phone remembers the choice for next time.',
                    ],
                },
            ],
        },
        {
            id: 'asset-service-worksheet',
            title: 'The Asset Service Worksheet',
            content: '<p class="mb-4">One worksheet for <strong>any equipment type on the register</strong> - emergency lights, exit signs, fire doors, smoke vents, dampers, sprinkler equipment, distribution boards, EV chargers and more.</p>',
            subsections: [
                {
                    bullets: [
                        'The equipment type picker is grouped by trade and narrows to the job\'s trade',
                        'Test options adapt per row to the equipment type selected',
                        'Works fully offline, including scan-to-fill',
                        'Attach it to a job manually via <strong>"Add to job sheets"</strong>, or map one of your service types to it in <strong>Settings → Job Sheet Templates</strong> so it attaches automatically',
                        'The dedicated Extinguisher and Fire Alarm worksheets always take precedence for their own equipment types - the Asset Service Worksheet covers everything they don\'t, and a job that carries both pre-loads each asset on one sheet only',
                    ],
                },
            ],
        },
        {
            id: 'asset-preloading',
            title: 'Pre-Loading: How Equipment Reaches a Worksheet Row',
            content: '<p class="mb-4">When a job is created at a site that has a register - a contract visit, a job raised by hand, or a job converted from a quote - the attached worksheets pre-load with the site\'s registered assets. Extinguishers go to the Extinguisher worksheet, alarm devices to the Fire Alarm worksheet, everything else to the Asset Service Worksheet when it is attached. Each asset appears exactly once, on the most specific worksheet available. Only details actually on record pre-fill - blank fields stay honestly blank.</p>'
                + diagram(`${TRK}/three-ways-onto-a-row.svg`, 'Three sources - pre-loaded from the register when the job is raised, picked from the site register on site, or a scanned QR tag - all converge on one worksheet row; the tags they produce read FROM SITE REGISTER, FROM SITE REGISTER and SCANNED, with a greyed FROM LAST VISIT tag reserved for carry-forward when a site has no register.', 'One row shape, three doors in - the tag on the row says which.'),
            subsections: [
                {
                    title: 'The Rules',
                    bullets: [
                        '<strong>Type-filtered per sheet.</strong> A worksheet pre-loads only the equipment types it handles; the generic Asset Service Worksheet gets whatever the dedicated sheets on the same job did not claim.',
                        '<strong>No duplicates across sheets.</strong> An asset a sibling worksheet already lists is skipped.',
                        '<strong>Decommissioned assets are left off</strong>, silently.',
                        '<strong>Provenance is stamped on the row.</strong> Pre-loaded rows read <em>from site register</em>; rows the engineer adds from the on-site picker read the same; scanned rows read <em>scanned</em>. <em>From last visit</em> is reserved for the carry-forward of last visit\'s work, which only happens when a site has no register.',
                        '<strong>Register built after the job?</strong> An asset import onto the site refills that site\'s empty draft sheets automatically, and the office can press <strong>Load site register</strong> on the job at any time. Both are safe to repeat - a sheet that already has rows is left alone.',
                    ],
                },
                {
                    mockup: 'engineer-journey-devices',
                },
            ],
        },
        {
            id: 'visit-plan',
            title: 'The Visit Plan: Splitting a Large Site Across the Year',
            content: '<p class="mb-4">A quarterly or monthly contract does not test every device on every visit. BS 5839-1 asks for 100% of a fire alarm system within twelve months, split across the year\'s visits, and contractors walk it by zone, floor or building. Without a plan, every job at an 88-device site pre-loads all 88 devices, four times a year. With one, each visit gets its share.</p>'
                + diagram(`${IMG}/visit-plan-split.svg`, 'Eighty-eight devices at a site in six zones of 29, 6, 3, 27, 6 and 17 are dealt into four quarterly visits: visit 1 takes zone 1 (29 devices), visit 2 zones 2 and 3 (9), visit 3 zone 4 (27), visit 4 zones 5 and 6 (23) plus a catch-up of anything still untested; a device missed on visit 1 rolls forward to visit 2. Splits can be by zone, floor, building or even.', 'Each contract year the devices are split across the visits; the last visit picks up anything not yet tested.'),
            subsections: [
                {
                    title: 'Setting One',
                    content: '<p class="mb-4">On the contract, the <strong>Visit plan</strong> card: choose a split - <strong>Zone</strong> (fire alarm), <strong>Floor</strong>, <strong>Building</strong> or <strong>Even</strong> - and the number of visits per year (2 to 12; the card suggests one that suits the cadence). The preview shows exactly what each visit would get before you save. A zone split on a register with no zone data puts everything on visit 1 - the card warns you and suggests Even instead.</p>'
                        + figure(`${TRK}/office-visit-plan-card.webp`, 'The Visit plan card on a service contract in the office: split by Even split, 4 visits per year, and a preview listing Visit 1 to Visit 4 with the device count on each and the last visit marked as catch-up for anything not yet tested', 'The card previews the split; the last row is always the catch-up.'),
                },
                {
                    title: 'How the Year Is Counted',
                    bullets: [
                        'The cycle is the <strong>contract year</strong>, counted from the contract\'s start date - not the calendar year, and not "every N visits".',
                        'A visit\'s number is how many live visits the cycle already has before it, so pausing, a cadence change or a converted contract never shifts the count.',
                        'Groups (zones, floors, buildings) are dealt into <strong>exactly N contiguous, count-balanced chunks</strong>; a zone is never split across two visits.',
                        'This visit loads its chunk in full, <strong>plus whatever an earlier completed visit\'s chunk did not test</strong>. A visit still open on an engineer\'s phone is left alone.',
                        'The last visit of the year, or a visit whose next occurrence falls in the next year, loads <strong>everything still untested</strong> - the catch-up.',
                    ],
                },
                {
                    title: 'What the Engineer Sees',
                    content: '<p class="mb-4">The job screen and the worksheet both carry one line: <em>"Visit 2 of 4 · Zones 2-3 · 9 devices this visit"</em>, with a second line underneath - <em>"88 at this site in total - the rest are on other visits this year."</em> The <strong>Add from site register</strong> picker tags every other device <em>other visit</em> and asks for a second tap before adding them all (capped at 50 per tap); a single device being serviced early is still one tap. On the catch-up visit the note and tags do not show, because everything untested is already on the sheet.</p>',
                },
                {
                    mockup: 'engineer-journey',
                },
                {
                    title: 'On the Contract Timeline',
                    content: '<p class="mb-4">Every generated and projected occurrence is labelled <strong>Visit k of N</strong> within its contract year.</p>'
                        + figure(`${TRK}/office-visit-timeline.webp`, 'The upcoming visits timeline on a service contract, each row numbered and labelled Visit 1 of 4, Visit 2 of 4 and so on', 'The timeline, with each visit\'s place in the year.'),
                },
                {
                    title: 'When Not to Plan',
                    bullets: [
                        'A register too small to split - fewer than two devices per visit - is better served by every device on every visit; the card stops suggesting a plan below that.',
                        'An annual contract has one visit a year, so there is nothing to split; a plan is refused.',
                        'A planned contract deliberately <strong>skips the carry-forward of last visit\'s work</strong> - the plan is the explicit alternative to "what they did last time".',
                    ],
                },
            ],
        },
        {
            id: 'coverage',
            title: 'Coverage: Which Assets Are on a Contract',
            content: '<p class="mb-4">There is no table linking assets to contracts, and nothing to tick. Coverage is <strong>derived</strong>: an asset is covered when an active service contract at its site has a service type whose worksheet handles the asset\'s type. Change the contract\'s service type, retire a worksheet mapping, or decommission an asset, and the answer changes with it.</p>'
                + diagram(`${TRK}/coverage-derived.svg`, 'A site register with two extinguishers, a panel and an emergency light; two active contracts at the site - an extinguisher service whose worksheet claims extinguishers and blankets, and a fire alarm service whose worksheet claims panels, detectors and sounders; the extinguishers and panel come out Covered with the contract named, the emergency light comes out Not on a contract and feeds a dashboard item reading 1 asset on no service contract with a New contract button beside it.', 'An asset is covered when an active contract at its site has a worksheet that handles its type.'),
            subsections: [
                {
                    bullets: [
                        'The <strong>customer\'s Coverage tab</strong> lists every asset by site and contract; each uncovered row has a <strong>New contract</strong> link that opens the wizard with customer and site already chosen - and the service type too, when exactly one of your service types\' worksheets covers the asset\'s type; otherwise you pick it on the wizard.',
                        'The <strong>contract\'s Assets covered card</strong> shows how many of the site\'s assets that contract will pre-load.',
                        'The <strong>dashboard\'s Needs attention</strong> list shows "N assets on no service contract" per customer, and always keeps a slot for it however many overdue jobs there are.',
                        'A service type whose worksheet holds no equipment rows still counts its assets as covered by the generic Asset Service Worksheet, because that is what the visit will actually attach.',
                    ],
                },
                {
                    content: figure(`${TRK}/office-coverage-tab.webp`, 'The customer Coverage tab in the office, showing every registered asset is on a service contract with a per-site breakdown', 'A customer\'s Coverage tab.'),
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
                    content: '<p>Open the scanner from the job page so the job and site context travel with the scan. Scanning a bound tag shows the asset\'s details and its last three service events; one tap adds it to the right worksheet with its details pre-filled, tagged <em>scanned</em>. If the asset is already on the sheet (pre-loaded, say), the scan finds that row instead of adding a second.</p>',
                },
                {
                    title: 'Registering New Equipment',
                    content: '<p>Scan an unbound tag, capture the type, manufacturer/model and serial - you can scan the rating-plate barcode straight into the serial field. New assets land as <strong>Draft</strong> for office review. If an untagged asset of the same type already exists at the site, you can <strong>link the tag to it</strong> instead of creating a duplicate.</p>',
                },
                {
                    title: 'Scan Failed?',
                    content: '<p>A damaged label or no camera: type the code instead. A typed tag, asset number or serial resolves against the same cached register - exact matches only, and a serial shared by several assets asks you to pick rather than guessing.</p>',
                },
                {
                    title: 'Safety Rails and Offline',
                    content: '<p>The app warns you if a scanned asset is registered at a different site than the job, and tells you which asset a tag belongs to if it is already bound. Scanning resolves against the cached site register, and new tag binds queue and sync automatically when you are back in signal.</p>',
                },
            ],
        },
        {
            id: 'hierarchy',
            title: 'Parent-Child Hierarchy',
            subsections: [
                {
                    content: '<p class="mb-4">Fire alarm systems are hierarchical: panel → detectors, call points, sounders. The <strong>Fire Alarm Service Worksheet</strong> records devices against their parent panel, and the register shows the relationship. <strong>"Parent panel #" is optional.</strong> A device that came from the site register already belongs to its panel and leaves the field blank. For a device the engineer adds on site, a given row number is checked, but a <strong>blank</strong> one is parented to the site\'s own panel automatically when the site has <strong>exactly one</strong> - with no single panel to default to (none, or more than one), the device registers unparented for the office to fix. Devices imported from a panel export onto a site that already has exactly one panel are parented to it automatically too.</p><p>The <strong>Asset Service Worksheet</strong> creates standalone (top-level) assets - for panel-and-device hierarchies, use the Fire Alarm worksheet.</p>',
                },
                {
                    title: 'Fire Alarm Addressing',
                    content: '<p>Panels record their panel type, system category (L1-L5, M, P1, P2) and zone/loop counts. Detectors, call points, sounders and beacons record their zone, loop and device address, so the register reads the way the panel does - and a zone split visit plan groups by that zone. These come through automatically from a Fire Alarm Commissioning worksheet or a panel-export import, and can be entered or corrected by hand on the asset.</p>',
                },
            ],
        },
        {
            id: 'asset-history',
            title: 'Asset History and the Register PDF',
            subsections: [
                {
                    content: '<p class="mb-4">Every serviced row writes a history event on the asset: the action taken, condition, the job\'s completion date, the engineer whose worksheet recorded it, and a link to the job. On the Fire Alarm Service and Asset Service device test list, that event also records the <strong>test result</strong> - pass or fail. A device recorded as <strong>not tested</strong> writes no history event at all, so it is never mistaken for a service and stays due. The field scan panel shows the last three events on site; the full history lives on the asset\'s page in the office.</p><p>A per-site <strong>Asset Register PDF</strong> is available from the site\'s Assets tab - <strong>one document per register family</strong> (extinguishers and blankets together; a panel and its devices together), with type-appropriate columns and a service grid of <strong>one column per completed job</strong>, initials from whoever completed the worksheet, and a mark for what was done - a device tested and <strong>failed</strong> prints as <strong>Fault</strong> rather than an ordinary service tick. The newest columns are kept and the cut is reported.</p>',
                },
            ],
        },
        {
            id: 'bulk-import',
            title: 'Bulk Import',
            content: '<p class="mb-4">Import an existing register from a CSV or spreadsheet. The flow is site-scoped: you tell Opscel which site the file belongs to before you upload anything, rather than the file carrying that information itself.</p><div class="my-8"><img src="/images/docs/asset-lifecycle/bulk-import-flow.svg" alt="The bulk asset import wizard as six steps: pick the customer, pick the service address, upload the file, complete column mapping, complete device-type mapping (a blocking step), then review a re-import warning if the site already has matching assets before confirming." class="w-full rounded-lg border border-border shadow-lg" loading="lazy" /></div>',
            subsections: [
                {
                    title: 'The Import Flow',
                    steps: [
                        'Pick the <strong>customer</strong>, then the <strong>service address</strong> - before uploading. Every row in the file imports to that one site; postcode, street or customer-name columns are ignored if present.',
                        'If your file has no <strong>Name</strong> column, Opscel derives one from the device-type text as your file spells it plus its position - e.g. <strong>&quot;Multi L1 A1&quot;</strong> (plus &quot;N&lt;node&gt;&quot; too, when your file has a Node column) - and suffixes <strong>&quot;#2&quot;</strong> on a collision.',
                        'The <strong>Device types</strong> step maps every distinct device-type value in your file to a canonical Opscel asset type. This is <strong>blocking</strong> - an unmapped type stops the import at preview rather than importing as junk. Save your mapping as a <strong>reusable profile</strong> tied to the customer.',
                        'If the site already holds assets of the types you are importing, a <strong>re-import warning</strong> lists them and requires an explicit acknowledgement before you can confirm.',
                        'Review the preview and confirm. Imported assets get real <strong>AST-</strong> numbers and register positions in the same sequence as assets added by hand or from a worksheet.',
                        '<strong>Afterwards, empty worksheets on that site refill themselves</strong> - a contract job raised before the register existed gets its equipment without anyone re-assigning the sheet.',
                    ],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Bulk asset import needs the plan that includes Asset Management</strong> (the Business plan). On lower tiers you will see an upgrade prompt instead of the import screen.</p></div>',
                },
                {
                    title: 'Type and Status Normalisation',
                    bullets: [
                        '<strong>Type spellings are recognised generously</strong> - "Fire Extinguisher", "fire extinguisher" and legacy names all normalise to the standard type, and the import summary notes what was normalised. A genuinely custom type is not simply kept as-is: the blocking <strong>Device types</strong> step (above) still needs it mapped to one of Opscel\'s canonical types before the import can run.',
                        '<strong>Status aliases</strong> - "not found", "lost" and "stolen" all import as Missing.',
                    ],
                },
                {
                    title: 'Duplicate Detection',
                    content: '<p>An incoming row is checked against the site\'s existing assets <strong>in order</strong>: an exact serial-number match wins first, then an exact asset-number match. Only once neither matches does Opscel fall back to the name, and there the rule depends on where the name came from - for <strong>auto-derived names</strong> (no Name column), name matching is <strong>exact-only</strong>, deliberate, so two adjacent devices at similar addresses never get merged into one. For files that <strong>do</strong> carry a Name column, a close name match counts too, so re-importing the same file will not double your register.</p>',
                },
            ],
        },
        {
            id: 'fire-alarm-panel-export',
            title: 'Importing a Fire Alarm Panel Export',
            content: '<p class="mb-4">Panel exports are the case this flow was built for: they typically have <strong>no Name column and no address columns</strong> - just device kinds and their panel positions. Upload the extract <strong>exactly as the panel software produced it</strong>.</p>',
            subsections: [
                {
                    title: 'What Happens Automatically',
                    bullets: [
                        'The panel\'s columns (Kind, Zone Number, Loop Number, Address, Location) map to the register\'s fields without you touching the mapping step.',
                        'Device kinds resolve through a built-in fire-alarm vocabulary - Optical and Multi to detectors, MCP to a call point, Sounder and Beacon to themselves, <strong>Switch to an interface unit</strong> (never an electrical light switch), Relay to a relay module. Anything it cannot place stops at the preview for you to map.',
                        '<strong>Zone Number, Loop Number and Loop Address</strong> are stored on each device - Loop Address as <strong>text on purpose</strong>, because real panels use dotted addresses like <code>1.045</code>. <strong>Node</strong> is read too, but only to help build the derived name below - it is not itself stored on the asset.',
                        'Names are derived from type and position and match exact-only on a re-import - e.g. <em>&quot;Multi N1 L1 A1&quot;</em> when the file has a Node column, or <em>&quot;Multi L1 A1&quot;</em> without one.',
                        'If the site already holds exactly one fire alarm panel, the imported devices are <strong>parented to it</strong>.',
                    ],
                },
                {
                    title: 'Combined Devices (e.g. 48.1 / 48.2)',
                    content: '<p>A sounder/beacon combined device at one physical address is usually <strong>listed twice</strong> in a panel export - once per function - because each is programmed separately on the panel. The register keeps <strong>one row per listing</strong>, matching how the panel lists them.</p><p>If your panel instead prints it as <strong>one combined row</strong> (Kind reading something like "Sounder/Beacon"), it imports as a <strong>sounder only</strong> - the registry has no combined type, so the beacon function on that row is not recorded. List it as two rows on the panel side if you need both captured.</p>',
                },
                {
                    title: 'Second Imports',
                    content: '<p class="mb-4">Re-importing an updated export from the same panel goes through the same <strong>re-import acknowledgement</strong> as any other bulk import - you will see which existing assets of the incoming types are already on the site before you confirm.</p><p>If your devices were named by an import from before <strong>24 September 2026</strong>, their derived names read the device-type\'s internal key (e.g. <em>&quot;detector_multi L1 A1&quot;</em>) rather than the file\'s own word. Re-importing the same file today recognises those as the <strong>same device</strong> under its old name and <strong>renames</strong> it to the current form (e.g. <em>&quot;Multi L1 A1&quot;</em>) instead of creating a duplicate - nothing to do on your side beyond re-running the import.</p>',
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'The Contract Job\'s Worksheet Arrived Empty',
                    content: '<p>The register did not exist when the job was raised (jobs are raised ahead of the visit). Import the register or add the assets - empty draft sheets refill themselves - or press <strong>Load site register</strong> on the job\'s worksheets panel.</p>',
                },
                {
                    title: 'Every Device Landed on Visit 1',
                    content: '<p>The split needs its data: a zone split needs zones on the assets, a floor split needs floors. The Visit plan card warns when the register has none and suggests <strong>Even split</strong>. A panel-export import brings zones in automatically.</p>',
                },
                {
                    title: 'Rows Say "From Last Visit" on a First Visit',
                    content: '<p>Jobs raised before 22 September 2026 stamped register rows and carry-forward rows the same way; from then on register rows read <em>from site register</em>. Nothing is wrong with the data - the wording on older sheets is simply the old one.</p>',
                },
                {
                    title: 'An Asset the Engineer Recorded Isn\'t on the Register',
                    content: '<p>Check the review banner on the customer\'s Assets tab - rows that create new assets or change lifecycle status wait there for office commit.</p>',
                },
                {
                    title: 'A Scanned Tag Says It\'s Already Bound',
                    content: '<p>The tag belongs to another asset; the app shows which one. Use a fresh tag, or unbind from the office if the original was tagged in error.</p>',
                },
                {
                    title: 'The Asset Service Worksheet Isn\'t Attaching Automatically',
                    content: '<p>Automatic attachment is opt-in: map the relevant service type to it in <strong>Settings → Job Sheet Templates</strong>. Until then, add it to individual jobs via "Add to job sheets".</p>',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                { title: 'Does scanning work offline?', content: '<p>Yes. Tag resolution runs against the cached site register, and new binds queue until you are back in signal.</p>' },
                { title: 'Does the Asset Service Worksheet replace the Extinguisher or Fire Alarm worksheets?', content: '<p>No. Dedicated worksheets always take precedence for their own equipment; the Asset Service Worksheet covers every other type and acts as a fallback.</p>' },
                { title: 'Can engineers decommission equipment from the field?', content: '<p>They can select the worksheet\'s condemn option (<strong>Condemn &amp; Dispose</strong> on the extinguisher sheet, <strong>Condemn / Decommission</strong> on the others) or <strong>Missing / Not Found</strong> - the register change is then held for office review before it applies. Once a job\'s Action Performed is registered as one of those (or Replaced), it\'s locked - it can\'t be edited back to a routine action from that job\'s Edit Service Details dialog. Reverse a decommission with Reinstate, or correct a wrong Missing / Not Found by setting Status back to Active - both from the asset\'s own page.</p>' },
                { title: 'Does a visit plan change what the engineer can do on site?', content: '<p>No. Every device at the site is still one tap away from the sheet - via the picker or a scan. The plan changes what arrives pre-loaded and how the picker labels the rest.</p>' },
                { title: 'What if an engineer skips a device on their visit?', content: '<p>An untested device no longer blocks completing the sheet. Marking it complete records those devices as <strong>not tested</strong> rather than serviced - no service date moves, and nothing is written to history for them - so they stay due. They roll forward to the next visit\'s sheet once this visit is completed, and the last visit of the year loads everything still untested.</p>' },
                { title: 'Who can manage the register and the visit plan?', content: '<p>Asset management follows your team\'s normal permissions and is available on plans that include Asset Management. Visit plans are edited by whoever can edit the contract.</p>' },
                { title: 'What happens to an asset\'s history if the asset is decommissioned?', content: '<p>It is retained - decommissioned assets stay on record for compliance; they are just excluded from active field lists, pre-loading and coverage. The asset page\'s <strong>Status history</strong> card records every status change with who made it and when, so a later Reinstate doesn\'t erase the trail.</p>' },
                { title: 'Does a "Missing / Not Found" unit count as serviced?', content: '<p>No. It\'s recorded as <strong>Not found</strong> (register mark <strong>NF</strong>) rather than a routine action, and it never counts toward the asset\'s last-service date - a unit nobody could find shouldn\'t look freshly serviced to the next engineer or on the compliance record.</p>' },
                { title: 'Do I have to remap device types every time I import for the same customer?', content: '<p>No. Save your Device types mapping as a profile the first time, and Opscel offers it again on that customer\'s next import - and the built-in fire-alarm vocabulary already covers the common panel kinds.</p>' },
                { title: 'Which plan includes bulk asset import?', content: '<p>The plan that includes Asset Management - the Business plan. Starter and Team can still import customers, contacts, addresses and jobs via CSV, just not assets.</p>' },
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
        { title: 'Asset Tracking', description: 'The support guide: office steps and what the engineer sees', href: '/docs/asset-tracking' },
        { title: 'Service Contracts', description: 'Recurring visits, generation and the visit plan', href: '/docs/service-contracts' },
        { title: 'Field Service App', description: 'Capturing and updating assets on site', href: '/docs/field-service' },
        { title: 'Certificates', description: 'Certificates linked to asset lifecycle records', href: '/docs/certificates' },
    ],
};
