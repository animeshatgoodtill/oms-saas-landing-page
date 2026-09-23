import { IDocGuide } from '@/types';

const IMG = '/images/docs/asset-tracking';
const LIFE = '/images/docs/asset-lifecycle';

const figure = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="${src}" alt="${alt}" class="w-full rounded-lg border border-border shadow-lg" loading="lazy" />${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than shrinking its text. */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><img src="${src}" alt="${alt}" class="w-full min-w-[720px] rounded-lg border border-border bg-white" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** Two phone screenshots side by side on wide screens, stacked on a phone. */
const phonePair = (a: { src: string; alt: string; caption: string }, b: { src: string; alt: string; caption: string }) =>
    `<div class="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">${[a, b]
        .map((p) => `<figure class="flex flex-col items-center"><img src="${p.src}" alt="${p.alt}" class="w-full max-w-[360px] rounded-2xl border border-border shadow-lg" loading="lazy" /><figcaption class="mt-3 text-sm text-muted-foreground text-center max-w-xs">${p.caption}</figcaption></figure>`)
        .join('')}</div>`;

export const assetTrackingGuide: IDocGuide = {
    slug: 'asset-tracking',
    title: 'Asset Tracking — Support Guide',
    description: 'How site equipment gets into Opscel, how it reaches your engineer\'s worksheet on every visit, what the engineer sees on the phone, and how the register stays up to date without anyone typing it twice.',
    lastUpdated: '2026-09-23',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: '<p class="mb-4">Your customers\' equipment lives on a <strong>site asset register</strong>. When a job is raised at that site, the right worksheet is attached and <strong>arrives on the engineer\'s phone already listing the equipment</strong> - they confirm and record, rather than re-type. When they mark the sheet complete, the register\'s service history updates itself; anything that changes <em>what exists</em> (new kit, condemned, missing) waits for the office to approve.</p>'
                + diagram(`${LIFE}/asset-journey.svg`, 'The journey of a piece of equipment: the site register is fed by imports, hand entry and completed worksheets; a service contract decides which worksheet a visit gets; when a job is raised the worksheet is pre-filled from the register; the engineer confirms rows, adds from the register or scans a tag, and signs off; history flows back to the register and consequential changes wait for office review.', 'The register feeds the sheet; the sheet feeds the register.'),
            subsections: [
                {
                    title: 'Availability',
                    content: '<p>Asset tracking is included on the <strong>Business</strong> plan. Starter and Team plans don\'t include the asset module, the per-site register PDFs, worksheet pre-loading or the worksheet-to-assets bridge.</p>',
                },
            ],
        },
        {
            id: 'engineer-journey',
            title: '1. What the Engineer Sees',
            content: '<p class="mb-4">This is the part most offices want to see first, because it is what changed for the people on site. The screens below are from the Opscel field app on a phone, on a quarterly extinguisher contract at a 20-device site with a <strong>visit plan</strong> of four visits a year.</p>'
                + phonePair(
                    { src: `${IMG}/field-job-list.webp`, alt: 'The field app job list on a phone, showing upcoming jobs with the site name, time and worksheet count on each card', caption: '<strong>1.</strong> The job appears on the engineer\'s list like any other.' },
                    { src: `${IMG}/field-job-hub-visit-pill.webp`, alt: 'The field app job screen with a visit plan line reading Visit 2 of 4, 5 devices this visit, 20 at this site in total - the rest are on other visits this year', caption: '<strong>2.</strong> On a planned contract the job screen says which visit this is and how many devices are on it - before the worksheet is opened.' },
                )
                + phonePair(
                    { src: `${IMG}/field-worksheet-preloaded-rows.webp`, alt: 'The extinguisher items section of the worksheet on a phone: a banner says 5 items pre-loaded from the site register, each row is tagged FROM SITE REGISTER, and the header reads 0 of 5 done', caption: '<strong>3.</strong> The worksheet opens with the equipment already listed - type, size, location and asset number filled from the register. Each row says where it came from.' },
                    { src: `${IMG}/field-worksheet-row-done.webp`, alt: 'The same worksheet section after the first row has been confirmed: the row carries a check mark and the header reads 1 of 5 done', caption: '<strong>4.</strong> Tap a row, record what was done, and it ticks off. The header counts done rows, not just filled ones.' },
                )
                + phonePair(
                    { src: `${IMG}/field-add-from-register.webp`, alt: 'The Add from site register panel on a phone: a note says this visit covers 5 of 20 devices at the site and the rest are on other visits this year; each listed device is tagged OTHER VISIT; an Add all 15 button sits at the bottom', caption: '<strong>5.</strong> Equipment not on this visit is still one tap away - tagged "other visit" so nobody adds the whole site by accident. Scanning a QR tag does the same for a single unit.' },
                    { src: `${IMG}/field-sign-off.webp`, alt: 'The worksheet sign-off section on a phone with the customer signature area', caption: '<strong>6.</strong> The customer signs the sheet as usual. Marking it complete is what updates the register.' },
                ),
            subsections: [
                {
                    title: 'Three Ways Equipment Lands on a Row',
                    content: '<p class="mb-4">Whether a row was pre-loaded, picked from the register on site, or scanned, it is the same row - the tag on it tells the engineer (and you) which door it came in by.</p>'
                        + diagram(`${IMG}/three-ways-onto-a-row.svg`, 'Three sources - pre-loaded from the register when the job is raised, picked from the site register on site, or a scanned QR tag - all converge on one worksheet row; the tags they produce read FROM SITE REGISTER, FROM SITE REGISTER and SCANNED, with a greyed FROM LAST VISIT tag reserved for carry-forward when a site has no register.', 'One row shape, three doors in - the tag says which.'),
                },
                {
                    title: 'Works Offline',
                    content: '<p>The pre-loaded rows, the "add from site register" list and tag scanning all run against the site register cached on the phone. Edits queue and sync when signal returns.</p>',
                },
            ],
        },
        {
            id: 'which-worksheets',
            title: '2. Which Worksheets Carry Equipment',
            content: '<p class="mb-4"><strong>Five of the thirteen.</strong> These are the worksheets that both <em>pre-load</em> from the register and <em>write back</em> to it. On any other worksheet nothing happens and <strong>no message is shown</strong> - the single most common source of confusion.</p>',
            subsections: [
                {
                    table: {
                        headers: ['Worksheet', 'Pre-loads and registers assets?'],
                        rows: [
                            ['Fire Extinguisher Service', '✅ extinguishers, fire blankets, hose reels'],
                            ['Fire Alarm Service', '✅ panels, detectors, call points, sounders, beacons, interface units'],
                            ['Fire Alarm Commissioning', '✅ panels and their devices, on first install'],
                            ['Intruder Alarm Zone List', '✅ intruder panels, detectors, contacts, PA buttons, keypads'],
                            ['Asset Service', '✅ any equipment type the dedicated sheets don\'t cover'],
                            ['<strong>Combined BS 5839 &amp; BAFE SP203</strong>', '❌'],
                            ['<strong>Remedials Scope of Works</strong>', '❌ - a scope document, not an equipment list'],
                            ['Site Attendance / Inspection &amp; Servicing', '❌'],
                            ['Basic Job Sheet', '❌'],
                            ['CCTV / Intruder / Access Control Commissioning', '❌'],
                            ['Security Risk Assessment', '❌'],
                        ],
                    },
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Fire alarm servicing jobs attach the Fire Alarm Service worksheet by default</strong>, which carries devices. If you have deliberately pointed a service type at the Combined BS 5839 &amp; BAFE SP203 sheet instead, devices will not pre-load and will not reach the register no matter how completely the engineer fills it in. Keep the Fire Alarm Service worksheet on those jobs as a second sheet.</p></div>',
                },
                {
                    content: '<p class="mb-4">The list the app itself trusts is under <strong>Settings → Asset Tracking → Currently Supported Worksheets</strong>.</p>' + figure(`${IMG}/auto-register-toggle.webp`, 'Settings → Asset Tracking screen, showing the Auto-register on worksheet completion toggle and the Currently Supported Worksheets box listing the five worksheets that register assets', 'Settings → Asset Tracking. The supported list is generated from the app, so it is the one to trust if this page ever disagrees.'),
                },
            ],
        },
        {
            id: 'existing-equipment',
            title: '3. Getting Existing Equipment In',
            content: '<p class="mb-4">Three routes, all landing on the same register:</p>',
            subsections: [
                {
                    bullets: [
                        '<strong>Import a file</strong> - Settings → Data Management → Import → Assets. Pick the customer and the site <em>before</em> uploading; every row imports to that one site.',
                        '<strong>By hand</strong> on the site\'s Assets page (section 10).',
                        '<strong>From a worksheet</strong> an engineer completes on a first visit (section 5).',
                    ],
                },
                {
                    title: 'Importing a Fire Alarm Panel Export',
                    content: '<p class="mb-4">A panel extract (Apollo, Hochiki, Advanced and the like) uploads <strong>as it comes out of the panel software</strong> - no reformatting. The columns a panel prints (Kind, Zone Number, Loop Number, Address, Location) map automatically, and the device kinds resolve through a built-in fire-alarm vocabulary: Optical and Multi become detectors, MCP a call point, Sounder and Beacon themselves, <strong>Switch an interface unit</strong> (never an electrical light switch), Relay a relay module.</p><p class="mb-4">A panel export has no name column, so each device gets a derived name from its type and panel position - <em>detector_multi L1 A1</em>. That is deliberate: derived names match <strong>exactly</strong> on a re-import, so two adjacent loop devices are never merged into one. Zone, loop and address are stored on the asset, so the register reads the way the panel does.</p><p>Every distinct device-type value in the file must resolve before the import runs; anything unrecognised stops at the preview rather than importing as junk. Save the mapping as a profile for that customer\'s next panel.</p>'
                        + figure(`${IMG}/import-data-select-type.webp`, 'Settings → Import Data screen showing the Select Data Type cards, including Assets, linked to site addresses', 'Settings → Data Management → Import. Assets are imported per site.'),
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>After an import, empty worksheets on that site refill themselves.</strong> If a contract job was raised before the register existed (its worksheet arrived empty), the import fills it in - no need to re-assign the sheet. For the full walkthrough, including the re-import warning and reusable type profiles, see <a href="/docs/asset-lifecycle#bulk-import" class="text-secondary hover:underline">Bulk Import</a>.</p></div>',
                },
            ],
        },
        {
            id: 'auto-register',
            title: '4. Auto-Register, and What Still Waits for You',
            content: '<p class="mb-4"><strong>Settings → Asset Tracking → &quot;Auto-register on worksheet completion&quot;</strong>. It is <strong>off by default</strong>.</p>'
                + diagram(`${IMG}/auto-vs-review.svg`, 'A completed worksheet\'s rows split two ways: Service and Service existing rows apply automatically to the register\'s history and condition; Replace, Condemn, Missing and New equipment rows go to the review banner on the customer\'s Assets tab and only reach the register when the office commits them. With the auto-register toggle off, everything waits.', 'Routine rows apply themselves; anything that changes what exists waits for a human.'),
            subsections: [
                {
                    title: 'What Auto-Register Commits on Its Own',
                    content: '<p>Routine work: an engineer servicing equipment that is <em>already</em> on the register updates its history and condition the moment the worksheet is marked complete. On a pre-loaded sheet that is nearly every row.</p>',
                },
                {
                    title: 'What Waits for Review, Even with It On',
                    bullets: [
                        '<strong>New equipment</strong> the engineer added',
                        'Anything set to <strong>Replace</strong>, <strong>Condemn</strong> or <strong>Missing</strong>',
                        'Anything referencing an asset still awaiting review',
                    ],
                },
                {
                    content: '<p class="mb-4">Engineers can <strong>add</strong> equipment they find on site but <strong>cannot edit or delete it afterwards</strong>, so the review step is where a mistyped asset gets caught before it becomes a permanent record.</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>On a first visit to a site with no register, everything is new equipment - so everything waits for review, even with auto-register on.</strong> That is expected, and it is the most common &quot;auto-register isn\'t working&quot; report.</p></div>',
                },
            ],
        },
        {
            id: 'manual-register',
            title: '5. Register Assets from a Worksheet',
            content: '<p class="mb-4">Use this to review items before they become permanent records.</p>',
            subsections: [
                {
                    steps: [
                        'Open the job → <strong>Assets</strong> tab',
                        'The banner shows what the engineer recorded - <em>&quot;5 fire extinguisher items extracted from worksheet&quot;</em> - broken down by type when the sheet covered several',
                        'Review or edit the rows, then click <strong>Register as Assets</strong> and confirm',
                    ],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Changed your mind?</strong> You have <strong>five minutes</strong> to undo a registration, enforced by the server. Undo removes everything created in that run and can be used once. Re-running a worksheet is always safe: rows already registered are skipped, never duplicated.</p></div>',
                },
            ],
        },
        {
            id: 'contract-visits',
            title: '6. Jobs Pick Up the Site Register',
            content: '<p class="mb-4">If a site has a register, <strong>every job raised at that site</strong> - a contract visit, a job raised by hand, a job converted from a quote - gets its worksheet pre-filled. Each row arrives as <em>existing equipment being serviced</em>, so completing the sheet updates those assets rather than creating duplicates.</p>',
            subsections: [
                {
                    title: 'What Pre-Loads, and What Doesn\'t',
                    bullets: [
                        '<strong>Only the types the worksheet handles.</strong> A fire alarm visit does not arrive carrying every extinguisher on the site.',
                        '<strong>Each asset on one sheet only.</strong> If a job carries two worksheets, an asset is listed on the most specific one - never both.',
                        '<strong>Decommissioned equipment is left off</strong>, and the sheet says nothing about it.',
                        '<strong>Nothing pre-loads</strong> when the job has no site address, when there is no live equipment of the relevant types at the site, or when the worksheet can\'t hold equipment (section 2).',
                    ],
                },
                {
                    title: 'The Register Was Built After the Job',
                    content: '<p class="mb-4">A job raised before the register existed arrives with an empty worksheet. Two things fix that: an <strong>asset import</strong> onto the site refills the site\'s empty draft sheets automatically, and on the job\'s worksheets panel the office can press <strong>Load site register</strong> at any time.</p>'
                        + figure(`${IMG}/office-load-site-register.webp`, 'The job\'s worksheets panel in the office, showing the attached Fire Extinguisher Service Worksheet and the Load site register button with its explanation line', '"Load site register" fills this worksheet from the site\'s asset register - for a job raised before the register existed, or a sheet still empty after an import.'),
                },
            ],
        },
        {
            id: 'visit-plan',
            title: '7. Service Contracts and the Visit Plan',
            content: '<p class="mb-4">A service contract\'s <strong>service type decides which worksheet each visit gets</strong>, and the register fills it. On a small site that is the whole story. On a large one - a fire alarm system with 88 devices on a quarterly contract - you do not want every device on every visit.</p><p class="mb-4">A <strong>visit plan</strong> on the contract splits the register across the year\'s visits <strong>by zone, floor, building or evenly</strong>. Each visit\'s job pre-loads only its share; the engineer sees "Visit 2 of 4 - 30 devices this visit"; anything an earlier visit missed rolls forward; and the last visit of the year picks up whatever is still untested. BS 5839-1 asks for every device within twelve months - the plan is how you get there without an 88-row sheet four times a year.</p>'
                + figure(`${IMG}/office-visit-plan-card.webp`, 'The Visit plan card on a service contract in the office: split by Even split, 4 visits per year, and a preview listing Visit 1 to Visit 4 with the device count on each and the last visit marked as catch-up for anything not yet tested', 'The contract\'s Visit plan card previews the split before you save it.'),
            subsections: [
                {
                    content: '<p class="mb-4">The contract\'s timeline labels every occurrence <strong>Visit k of N</strong>, so the office can see at a glance which share a generated job carries.</p>'
                        + figure(`${IMG}/office-visit-timeline.webp`, 'The upcoming visits timeline on a service contract, each row numbered and labelled Visit 1 of 4, Visit 2 of 4 and so on', 'The timeline names each visit\'s place in the year.'),
                },
                {
                    content: '<p>The full model - how the year is counted, what "catch-up" means, and when <em>not</em> to plan - is in the <a href="/docs/asset-lifecycle#visit-plan" class="text-secondary hover:underline">Asset Register Deep Dive</a>.</p>',
                },
            ],
        },
        {
            id: 'coverage',
            title: '8. Which Assets Are Not on a Contract',
            content: '<p class="mb-4">Coverage is <strong>worked out, never stored</strong>: an asset is covered when an active contract at its site has a service type whose worksheet handles that asset\'s type. There is nothing to attach or tick.</p>'
                + diagram(`${IMG}/coverage-derived.svg`, 'A site register with two extinguishers, a panel and an emergency light; two active contracts at the site - an extinguisher service whose worksheet claims extinguishers and blankets, and a fire alarm service whose worksheet claims panels, detectors and sounders; the extinguishers and panel come out Covered with the contract named, the emergency light comes out Not on a contract and feeds a dashboard item reading 1 asset on no service contract with a New contract button beside it.', 'An asset is covered when an active contract at its site has a worksheet that handles its type.'),
            subsections: [
                {
                    content: '<p class="mb-4">The customer\'s <strong>Coverage</strong> tab lists every asset by site and contract, and each uncovered row has a <strong>New contract</strong> link that opens the contract wizard with the customer, site and service type already chosen. The dashboard\'s <em>Needs attention</em> list shows <em>"N assets on no service contract"</em> per customer, and always keeps a slot for it however many overdue jobs there are.</p>'
                        + figure(`${IMG}/office-coverage-tab.webp`, 'The customer Coverage tab in the office, showing every registered asset is on a service contract with a per-site breakdown', 'A customer\'s Coverage tab, once every asset is on a contract.'),
                },
            ],
        },
        {
            id: 'print-register',
            title: '9. Print the Site Asset Register',
            subsections: [
                {
                    steps: [
                        'Go to <strong>Customers → [Customer] → [Site] → Assets</strong>',
                        'Click <strong>Print Register</strong> and pick the register you want',
                        'The PDF opens in a new tab',
                    ],
                },
                {
                    content: '<p class="mb-4">There is <strong>one document per register family</strong>, not one per equipment type: extinguishers and fire blankets print on one Fire Extinguisher Register; panels, detectors, call points, sounders and beacons on one fire alarm device register; and so on. The chooser lists only the families the site actually holds, with the types in each.</p><p class="mb-4">A register is a <strong>record</strong>, never hand-annotated: the site\'s address and contact, each asset\'s number, type, size and position, and a service-history grid with <strong>one column per completed job</strong> (date and job number - two jobs can complete on one day) carrying the engineer\'s initials and a mark for what was done (<em>Svc</em>, <em>Inst</em>, <em>Rep</em>, <em>Repl</em>, <em>Cond</em>). The newest columns are kept and the cut is reported as "N earlier completed jobs not shown".</p>'
                        + figure(`${IMG}/office-site-assets.webp`, 'The site Assets tab in the office listing the register rows with asset number, type, location and status, and the Print Register button', 'The site\'s register, with Print Register in the toolbar.'),
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Decommissioned equipment prints only when a shown job retired it.</strong> Otherwise it stays off the register - see section 12.</p></div>',
                },
            ],
        },
        {
            id: 'add-manually',
            title: '10. Add an Asset by Hand',
            subsections: [
                {
                    steps: [
                        'Go to <strong>Customers → [Customer] → [Site] → Assets</strong>',
                        'Click <strong>Add Asset</strong>',
                        'Choose the equipment type, fill in the location, save',
                    ],
                },
                {
                    content: '<p class="mb-4"><strong>Required:</strong> Customer, Service Address, Asset Type, Asset Name. Everything else is optional. Choosing the type reveals fields specific to that equipment, and <strong>anything you enter here prints on the register</strong>.</p>',
                },
                {
                    title: 'Fire Alarm Panels and Devices',
                    content: '<p class="mb-4">Panels record panel type, system category and zone/loop counts. Detectors, call points, sounders and beacons record <strong>Zone</strong>, <strong>Loop</strong> and <strong>Address</strong> exactly as the panel shows them - <code>1.045</code> is valid. Zone is also what a zone-split visit plan groups by.</p>' + figure(`${IMG}/add-asset-smoke-detector-fields.webp`, 'Add Asset form with Smoke Detector selected, showing the Zone, Loop, and Address fields with their helper text', 'The zone, loop and address fields on a detector.'),
                },
                {
                    title: 'Fire Extinguishers',
                    content: '<p class="mb-4">These fields decide whether your BS 5306 register is complete:</p>',
                    table: {
                        headers: ['Field', 'What it\'s for'],
                        rows: [
                            ['Extinguisher Type', 'Drives the TYPE column on the record sheet'],
                            ['Capacity (kg / litres)', 'kg for CO2, powder and wet chemical; litres for water and foam'],
                            ['Fire Rating', 'e.g. 13A 89B'],
                            ['<strong>Manufacture Date</strong>', 'The date on the body. <strong>Starts the BS 5306-3 extended-service clock</strong>'],
                            ['<strong>Last Discharge / Extended Service</strong>', 'Prints in the <strong>D/E</strong> column and restarts the clock'],
                            ['Service Interval (years)', 'Blank = the BS 5306-3 default: <strong>5 years, or 10 for CO2</strong>'],
                            ['Next Extended Service Due', 'Blank = worked out from the dates above; the app never guesses'],
                        ],
                    },
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The service worksheet records type and size, not manufacture or discharge dates.</strong> Extinguishers that reached the register from a worksheet show TYPE and SIZE and leave D/E and ES Due blank until an admin fills them in here (or they come in on an import, which does carry them).</p></div>',
                },
            ],
        },
        {
            id: 'service-history',
            title: '11. An Asset\'s Service History',
            subsections: [
                {
                    content: '<p class="mb-4">Open the asset from the Assets list, the site page or a job\'s Assets tab. <strong>Service History</strong> lists every job that touched it - the action, any deficiencies, the job\'s completion date and the engineer whose worksheet recorded it. The field scan panel shows the last three events on site.</p>' + figure(`${IMG}/asset-detail-service-history.webp`, 'Asset detail page showing identification, location, and service dates, plus a Service History table listing the job, action, date, and status of each visit', 'An asset\'s history, one row per job.'),
                },
                {
                    title: 'Fire Alarm Commissioning: Panels and Devices',
                    content: '<p class="mb-4">The commissioning worksheet creates panels <strong>and</strong> their devices in one pass, and <strong>row order matters</strong>: the panel row first, then its devices with <em>Parent panel #</em> set to the panel\'s row number. A device listed above its panel is skipped, and the Assets tab names the row and the reason. Fix the order and re-run.</p>',
                },
            ],
        },
        {
            id: 'decommission',
            title: '12. Decommissioning',
            subsections: [
                {
                    steps: ['Open the asset', 'Set <strong>Status</strong> to <strong>Decommissioned</strong>', 'Save'],
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The Delete button does the same thing.</strong> Nothing is removed - the asset is marked decommissioned and keeps its record and history. To reverse it, edit the asset and set the status back.</p></div>',
                },
                {
                    title: 'What Changes Once Decommissioned',
                    bullets: [
                        'It is <strong>left off the next job\'s worksheet</strong>, and off the coverage count',
                        'It stays off the printed register unless a shown job is the one that retired it',
                        'Its history is kept, and you can still open it directly',
                        'If it was a panel, its detectors keep their own records',
                    ],
                },
            ],
        },
        {
            id: 'permissions',
            title: 'Who Can Do What',
            subsections: [
                {
                    table: {
                        headers: ['Role', 'View', 'Add', 'Edit', 'Decommission', 'Import', 'Visit plan'],
                        rows: [
                            ['Admin / Contract Manager', '✅', '✅', '✅', '✅', '✅', '✅'],
                            ['Site Manager', '✅', '✅', '✅', '❌', '❌', '❌'],
                            ['Engineer', '✅', '✅', '❌', '❌', '❌', '❌'],
                            ['Accounts / Sales Manager / Viewer', '✅', '❌', '❌', '❌', '❌', '❌'],
                        ],
                    },
                },
                {
                    content: '<p><strong>Engineers can add equipment they find on site but cannot edit or delete it.</strong> That is why new equipment waits for review (section 4).</p>',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'The worksheet says "from last visit" on a site\'s first-ever visit. Why?',
                    content: 'Rows pre-loaded from the register are tagged <strong>from site register</strong>. "From last visit" is the carry-forward of what the engineer did last time, used when a site has no register - and it is also what jobs raised before September 2026 show, because those rows were stamped before the two were told apart. New jobs read correctly.',
                },
                {
                    title: 'My engineer added all 15 remaining devices to a visit that should have had 5.',
                    content: 'On a planned visit the "Add from site register" list tags every other device <strong>other visit</strong>, explains that the rest are on other visits this year, and <strong>"Add all" needs a second tap</strong>. Adding one device you are servicing today is still one tap - that is deliberate.',
                },
                {
                    title: 'The visit plan put every device on visit 1.',
                    content: 'A zone (or floor, or building) split needs that data on the assets. If the register has none, the card warns you and suggests <strong>Even split</strong>; or set the zones on the assets first - a panel-export import brings them in automatically.',
                },
                {
                    title: 'Do my engineers need to do anything different?',
                    content: 'Almost nothing. The equipment list they were already filling in is the register. What changed: fire alarm, extinguisher and intruder alarm service jobs open on their specialised worksheet, and where the site has a register the equipment is already listed - they confirm and record, then sign off as usual.',
                },
                {
                    title: 'What happens if my engineer enters the same item twice?',
                    content: 'The worksheet → assets bridge is idempotent. Running the same worksheet twice does not create duplicates; already-registered rows are skipped.',
                },
                {
                    title: 'My fire alarm panel got deleted - what happened to the detectors?',
                    content: 'They stay, with their full history, as standalone records. Re-parent them by editing each detector and picking a panel, or leave them standalone.',
                },
                {
                    title: 'Can engineers register assets, or only admins?',
                    content: 'Engineers fill the worksheets - that is the data. Committing rows as permanent records is admin-only, unless you switch on auto-register, in which case routine rows commit themselves and new equipment still waits for review.',
                },
                {
                    title: 'What format is the Asset Register PDF?',
                    content: 'Modelled on the paper formats your customers and assessors already know - the extinguisher record sheet with TYPE · SIZE · POSITION · D/E · ES Due and the per-job service grid; logbook-style for fire alarm devices. One document per register family (extinguishers and blankets together; panel and devices together).',
                },
                {
                    title: 'My engineer\'s worksheet had 8 devices but only 5 became assets.',
                    content: 'Almost always row order on a Fire Alarm Commissioning device list - a device must list its panel first. The Assets tab names the skipped rows and why. If the job used the Combined BS 5839/SP203 or Site Attendance sheet instead, that is the cause - those do not carry equipment at all.',
                },
                {
                    title: 'Will my data ever leak between customers or businesses?',
                    content: 'No. Every query in the asset module is scoped to your business. If an engineer types another business\'s asset number into a worksheet by mistake, it is recorded as an unresolved reference and nothing else happens.',
                },
                {
                    title: 'What about the engineer\'s initials on the register?',
                    content: 'They come from whoever completed the worksheet, live from their Opscel account. If an engineer leaves your team, their historical visits show "-" for initials; the date and the work stay on record.',
                },
                {
                    title: 'How do I report a problem?',
                    content: 'Email support with the job number and the worksheet name. We can see the worksheet\'s underlying data and any skipped rows immediately.',
                },
            ],
        },
    ],
    relatedGuides: [
        { title: 'Asset Register Deep Dive', description: 'Statuses, the visit plan model, coverage, pre-loading rules and bulk import in depth', href: '/docs/asset-lifecycle' },
        { title: 'Service Contracts', description: 'Recurring visits, generation and the visit plan', href: '/docs/service-contracts' },
        { title: 'Field Service App', description: 'The engineer\'s app, offline', href: '/docs/field-service' },
        { title: 'Certificates', description: 'Certificates linked to asset records', href: '/docs/certificates' },
    ],
};
