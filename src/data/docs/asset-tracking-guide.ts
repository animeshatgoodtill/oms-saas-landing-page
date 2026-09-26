import { IDocGuide } from '@/types';

const IMG = '/images/docs/asset-tracking';
const LIFE = '/images/docs/asset-lifecycle';

const figure = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8 -mx-8 md:-mx-16 lg:-mx-24"><img src="${src}" alt="${alt}" class="w-full rounded-lg border border-border shadow-lg" loading="lazy" />${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** A phone screenshot: a tall portrait image, so it keeps phone width instead of stretching across the page. */
const phoneFigure = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8 mx-auto" style="max-width: 300px"><img src="${src}" alt="${alt}" class="w-full rounded-2xl border border-border shadow-lg" loading="lazy" />${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

/** A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than shrinking its text. */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><img src="${src}" alt="${alt}" class="w-full min-w-[720px] rounded-lg border border-border bg-white" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

export const assetTrackingGuide: IDocGuide = {
    slug: 'asset-tracking',
    title: 'Asset Tracking — Support Guide',
    description: 'How site equipment gets into Opscel, how it reaches your engineer\'s worksheet on every visit, what the engineer sees on the phone, and how the register stays up to date without anyone typing it twice.',
    lastUpdated: '2026-09-26',
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
            content: '<p class="mb-4">This is the part most offices want to see first, because it is what changed for the people on site. The mockup below is interactive - it follows the Opscel field app on a phone, on a quarterly fire alarm contract at an 88-device site with a <strong>visit plan</strong> of four visits a year, using the <strong>device test list</strong> the Fire Alarm Service and Asset Service worksheets show their equipment on.</p>',
            subsections: [
                {
                    mockup: 'engineer-journey',
                },
                {
                    content: phoneFigure(`${IMG}/field-device-test-list.webp`, 'The Fire Alarm Service device test list on an Android phone: 25 of 150 tested with 1 fault and 124 to do; zone 1 devices ticked Tested, zone 2 showing 1/25 done with a Mark 24 tested button, one sounder marked Fault and the rest waiting to be tapped', 'The real screen on a phone: tap a row to mark it tested, the arrow opens its card, and a zone can be marked in one go.'),
                },
                {
                    title: 'Three Ways Equipment Lands on a Row',
                    content: '<p class="mb-4">Whether a row was pre-loaded, picked from the register on site, or scanned, it is the same row - the tag on it tells the engineer (and you) which door it came in by. QR and barcode tags scan on any device; NFC tag binding is a Chrome-on-Android enhancement on top of that, not a requirement.</p>'
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
                    content: '<p class="mb-4">A panel extract (Apollo, Hochiki, Advanced and the like) uploads <strong>as it comes out of the panel software</strong> - no reformatting. The columns a panel prints (Kind, Zone Number, Loop Number, Address, Location) map automatically, and the device kinds resolve through a built-in fire-alarm vocabulary: Optical and Multi become detectors, MCP a call point, Sounder and Beacon themselves, <strong>Switch an interface unit</strong> (never an electrical light switch), Relay a relay module.</p><p class="mb-4">A panel export has no name column, so each device gets a derived name from its type and panel position - e.g. <em>Multi L1 A1</em> (plus N&lt;node&gt; too, when your file has a Node column), built from the device-type text as your file spells it. That is deliberate: derived names match <strong>exactly</strong> on a re-import, so two adjacent loop devices are never merged into one. Zone, loop and address are stored on the asset, so the register reads the way the panel does.</p><p>Every distinct device-type value in the file must resolve before the import runs; anything unrecognised stops at the preview rather than importing as junk. Save the mapping as a profile for that customer\'s next panel.</p>'
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
                + diagram(`${IMG}/auto-vs-review.svg`, 'A completed worksheet\'s rows split two ways: Service and Service existing rows apply automatically to the register\'s history and condition; Replace, Condemn, Missing and New equipment rows go to the review banner on the customer\'s Assets tab and only reach the register when the office commits them. With the auto-register toggle off, everything waits.', 'Routine rows apply themselves; anything that changes what exists waits for a human. On the device test list, a device recorded as not tested writes no service either, and stays due.'),
            subsections: [
                {
                    title: 'What Auto-Register Commits on Its Own',
                    content: '<p>Routine work: an engineer servicing equipment that is <em>already</em> on the register updates its history and condition the moment the worksheet is marked complete. On a pre-loaded sheet that is nearly every row.</p>',
                },
                {
                    title: 'What Waits for Review, Even with It On',
                    bullets: [
                        '<strong>New equipment</strong> the engineer added',
                        'Anything set to <strong>Replace</strong> or <strong>Exchange</strong>, <strong>Condemn</strong> (Condemn &amp; Dispose on the extinguisher sheet, Condemn / Decommission on the others), or <strong>Missing / Not Found</strong>',
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
                        'A banner names what the engineer recorded on that worksheet - broken down by type when the sheet covered several - and how many rows are still pending',
                        'Click the banner\'s <strong>Register N items</strong> button to open <strong>Review and register</strong>: a per-row table lets you edit each location, fix a parent or existing-asset reference, or skip a row before anything is committed',
                        'The footer totals the run before you confirm it - e.g. <em>&quot;1 new, 5 linking to existing assets, 1 to decommission, 1 to mark missing&quot;</em> - then click <strong>Register</strong> and confirm',
                    ],
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>A pre-loaded row the engineer neither confirmed nor changed</strong> - its action is still the pre-loaded default and nothing else on the row was entered - is badged &quot;Not confirmed on site — check before registering&quot; and defaults to <strong>Skip</strong> in the review table; check it before switching it on. Sheets completed before this behaviour shipped carry no confirm stamp at all, so the same badge and default apply to any row left untouched.</p></div>',
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>A device recorded as not tested</strong> on the Fire Alarm Service or Asset Service device test list is flagged the same way in this table - <strong>&quot;Not tested - registers, no service&quot;</strong> when the row would still create a new asset, or <strong>&quot;Not tested - no service recorded&quot;</strong> when it only links one already on the register. Either way, registering it does not move the asset\'s last-service date: it stays due for the next visit.</p></div>',
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>Changed your mind?</strong> You have <strong>five minutes</strong> to undo a registration, enforced by the server. Undo decommissions only the assets that run <strong>created</strong> - it will not restore anything the run condemned or marked missing, and it will not unlink an existing asset the run linked to. Re-running a worksheet is always safe: rows already registered are skipped, never duplicated.</p></div>',
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
                    content: '<p class="mb-4">A job raised before the register existed arrives with an empty worksheet. Two things fix that: an <strong>asset import</strong> onto the site refills the site\'s empty draft sheets automatically, and on the job\'s worksheets panel the office can press <strong>Load site register</strong> at any time (needs the <strong>Edit Jobs</strong> permission). It loads the <strong>whole</strong> site register, not just a planned visit\'s share - use it to catch a sheet up, not to re-apply a visit plan split.</p>'
                        + figure(`${IMG}/office-load-site-register.webp`, 'The job\'s worksheets panel in the office, showing the attached Fire Extinguisher Service Worksheet and the Load site register button with its explanation line', '"Load site register" fills this worksheet from the site\'s asset register - for a job raised before the register existed, or a sheet still empty after an import.'),
                },
            ],
        },
        {
            id: 'visit-plan',
            title: '7. Service Contracts and the Visit Plan',
            content: '<p class="mb-4">A service contract\'s <strong>service type decides which worksheet each visit gets</strong>, and the register fills it. On a small site that is the whole story. On a large one - a fire alarm system with 88 devices on a quarterly contract - you do not want every device on every visit.</p><p class="mb-4">A <strong>visit plan</strong> on the contract splits the register across the year\'s visits <strong>by zone, floor, building or evenly</strong>. Each visit\'s job pre-loads only its share; the engineer sees "Visit 2 of 4 · Zones 2-3 · 9 devices this visit"; anything an earlier visit missed rolls forward; and the last visit of the year picks up whatever is still untested. BS 5839-1 asks for every device within twelve months - the plan is how you get there without an 88-row sheet four times a year.</p>',
            subsections: [
                {
                    mockup: 'visit-plan-card',
                },
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
                    mockup: 'coverage-panel',
                },
                {
                    content: '<p class="mb-4">The customer\'s <strong>Coverage</strong> tab lists every asset by site and contract, and each uncovered row has a <strong>New contract</strong> link that opens the contract wizard with the customer and site already chosen - and the service type too, when exactly one of your service types\' worksheets covers the asset\'s type; otherwise you pick it there. The dashboard\'s <em>Needs attention</em> list shows <em>"N assets on no service contract"</em> per customer, and always keeps a slot for it however many overdue jobs there are.</p>'
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
                    content: '<p class="mb-4">There is <strong>one document per register family</strong>, not one per equipment type: extinguishers and fire blankets print on one Fire Extinguisher Register; a fire alarm panel prints on its own Fire Alarm Asset Register, <strong>separate</strong> from its detectors, call points, sounders and beacons, which print on the Fire Alarm Device Register; and so on. The chooser lists only the families the site actually holds, with the types in each.</p><p class="mb-4">A register is a <strong>record</strong>, never hand-annotated: the site\'s address and contact, each asset\'s number, type, size and position, and a service-history grid with <strong>one column per completed job</strong> (date and job number - two jobs can complete on one day) carrying the engineer\'s initials and a mark for what was done (<em>Svc</em>, <em>Inst</em>, <em>Rep</em>, <em>Repl</em>, <em>Cond</em>, <em>NF</em> - Not found, <em>Att</em> - Attended, a visit that recorded the unit without a service, <em>Fault</em> - tested and failed on the device test list). The newest columns are kept and the cut is reported as "N earlier completed jobs not shown".</p>'
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
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The extinguisher worksheet has its own row fields for the clock, not just TYPE and SIZE.</strong> Ask engineers to fill in <strong>Manufacture date</strong> (the date on the body - it starts the BS 5306-3 clock), tick <strong>Extended service done this visit</strong> only when they actually carried out the discharge/refill, and set <strong>Extended service due</strong> if a maintenance label already names a year. Registering the sheet writes these straight to the asset, so D/E and ES Due print on the register from then on. A row with none of these filled in still leaves D/E and ES Due blank until an admin fills them in here (or an import carries them).</p></div>',
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
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The Delete button does the same thing.</strong> Nothing is removed - the asset is marked decommissioned and keeps its record and history.</p></div>',
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
                {
                    title: 'Reinstating a Decommissioned Asset',
                    content: '<p class="mb-4">Open the asset and choose <strong>Reinstate</strong> (it replaces the Decommission action once an asset is already decommissioned) - it clears the decommissioned date and sets the asset back to Active. A <strong>Status history</strong> card on the asset page records who changed the status and when, so a Decommission-then-Reinstate leaves a visible trail rather than looking like it never happened.</p>',
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>A job\'s Action Performed can\'t be hand-edited into or out of Decommissioned, Replaced, or Missing / Not Found.</strong> Once it\'s one of those three, the field is locked (read-only) in that job\'s <strong>Edit Service Details</strong> dialog - editing it there could otherwise misstate the register for work that was never done. Decommission or Reinstate from the <strong>asset\'s own page</strong>; correct a wrong Missing / Not Found the same way - open the asset and set its Status back to Active - not by editing an old job\'s Action Performed.</p></div>',
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
                            ['Site Manager', '✅', '✅', '✅', '❌', '❌', '✅'],
                            ['Accounts / Sales Manager', '✅', '❌', '❌', '❌', '❌', '✅'],
                            ['Engineer', '✅', '✅', '❌', '❌', '❌', '❌'],
                            ['Viewer', '✅', '❌', '❌', '❌', '❌', '❌'],
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
                    content: 'Rows pre-loaded from the register are tagged <strong>from site register</strong>. "From last visit" is the carry-forward of what the engineer did last time, used when a site has no register - and it is also what jobs raised before 22 September 2026 show, because those rows were stamped before the two were told apart. New jobs read correctly.',
                },
                {
                    title: 'My engineer added all 15 remaining devices to a visit that should have had 5.',
                    content: 'On a planned visit the "Add from site register" list tags every other device <strong>other visit</strong>, explains that the rest are on other visits this year, and <strong>"Add all" needs a second tap</strong>. Adding one device you are servicing today is still one tap - that is deliberate. "Add all" is also capped at 50 devices per tap, so a very large remaining list needs more than one confirmation.',
                },
                {
                    title: 'The visit plan put every device on visit 1.',
                    content: 'A zone (or floor, or building) split needs that data on the assets. If the register has none, the card warns you and suggests <strong>Even split</strong>; or set the zones on the assets first - a panel-export import brings them in automatically.',
                },
                {
                    title: 'A device disappeared from an open visit\'s worksheet after another visit of the same contract completed.',
                    content: 'That\'s the visit reconcile working as intended, not equipment going missing. When a contract visit completes, any other still-open visit of the <strong>same cycle</strong> that lists a unit the completed visit already serviced has that row removed - the row would otherwise show work that is no longer due. The worksheet\'s visit line then reads, for example, <em>&quot;2 items removed - already serviced on JOB-000578&quot;</em>, naming how many and which job. It only ever removes an untouched, pre-loaded row: anything the engineer edited or confirmed, and any worksheet that isn\'t still a draft, is left alone. If an old offline save brings a removed row back, it\'s flagged <em>&quot;Already serviced this cycle on JOB-…&quot;</em> so you can remove it again.',
                },
                {
                    title: 'A pre-loaded row shows "Already serviced this cycle" in amber.',
                    content: 'The unit is due on this visit but the register shows it was already serviced earlier in the same contract cycle - normally because it was serviced on another visit, or added twice. Remove the row if it genuinely isn\'t due today; the hint excludes work done on the job you\'re currently on, so it never warns about your own visit.',
                },
                {
                    title: 'Do my engineers need to do anything different?',
                    content: 'Almost nothing. The equipment list they were already filling in is the register. What changed: fire alarm, extinguisher and intruder alarm service jobs open on their specialised worksheet, and where the site has a register the equipment is already listed - they confirm and record, then sign off as usual. On the Fire Alarm Service and Asset Service worksheets, that list now shows as a compact, one-tap device test list rather than a card per device - the same information, grouped by zone and quicker to work through. <strong>Show as cards</strong> switches back to the old card-per-device view if they prefer it.',
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
                    content: 'Engineers fill the worksheets - that is the data. Committing rows as permanent records needs <strong>Asset Edit</strong> (Super Admin, Admin, Contract Manager or Site Manager) - it is not admin-only. Switch on auto-register and routine rows commit themselves too, while new equipment still waits for review.',
                },
                {
                    title: 'What format is the Asset Register PDF?',
                    content: 'Modelled on the paper formats your customers and assessors already know - the extinguisher record sheet with TYPE · SIZE · POSITION · D/E · ES Due and the per-job service grid; logbook-style for fire alarm devices. One document per register family (extinguishers and blankets together; a fire alarm panel on its own register, separate from its devices).',
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
                    content: 'They come from whoever was recorded as doing the work on that visit. If an engineer leaves your team, their historical visits still show their name and initials - deactivating a user does not blank their past work. A cell prints blank only when nobody was recorded against that visit.',
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
