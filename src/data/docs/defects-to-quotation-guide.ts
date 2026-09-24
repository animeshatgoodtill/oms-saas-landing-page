import { IDocGuide } from '@/types';

const IMG = '/images/docs/defects';

/** A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than shrinking its text. */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><img src="${src}" alt="${alt}" class="w-full min-w-[720px] rounded-lg border border-border bg-white" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

export const defectsToQuotationGuide: IDocGuide = {
    slug: 'defects-to-quotation',
    title: 'Creating and Linking Quotes to Jobs with Defects',
    description: 'Turn defects into customer-ready remedial quotes with automatic job linking. Learn the three ways to create a quote from a job\'s defects, how to add or edit defects from the office, and how to delete one raised by mistake.',
    lastUpdated: '2026-09-24',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-1"><strong>Logging and editing defects:</strong> Super Admin, Admin, Contract Manager, Site Manager, Engineer (in the field app)</p><p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-1"><strong>Creating remedial quotes:</strong> Super Admin, Admin, Accounts, Contract Manager, Sales Manager</p><p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-1"><strong>Deleting a defect raised by mistake:</strong> the person who raised it, or Super Admin, Admin and Site Manager</p><p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Choosing the template used for remedial quotes:</strong> Admin only (Settings → Sales → Quote Defaults)</p>'
                },
                {
                    title: 'The 30-Second Version',
                    content: '<p class="mb-4">When an engineer logs defects on a job (or the office adds them from the job page), Opscel gives you three ways to turn them into a customer-ready remedial quote, and every one of them keeps a permanent, visible link between the quote and the job it came from. When the customer accepts, the quote becomes a remedial job, and once the fault is fixed the engineer or the office marks the defect resolved on the site\'s register.</p>'
                        + diagram(`${IMG}/defect-lifecycle.svg`, 'The journey of a defect: an engineer logs it on the job in the field app, or the office adds it from the job\'s Overview with Add defect on any job status; it shows up on the job\'s Defects card, the site\'s defect register and the job sheet PDF; a Major or Critical or Quote required defect gets a draft Remedial Scope of Works sheet; the office creates a bundled quote, the accepted quote becomes a remedial job, the fault is fixed there and the defect is marked resolved in the register. A separate side branch for a defect raised by mistake: whoever raised it, or the office, deletes it, and it is gone from the job, its job sheets and the register; photos, if included, go to Recently deleted for 30 days, and an empty scope sheet created for it is removed too.', 'One road to a fix, and a side door for a defect raised by mistake.')
                },
                {
                    title: 'What This Guide Covers',
                    bullets: [
                        'Adding and editing defects from the office job page',
                        'Three ways to create a remedial quote from a job\'s defects',
                        'How quote-to-job linking works automatically',
                        'Viewing the link from both the quote and the job',
                        'Deleting a defect that was raised by mistake',
                        'Who can do what, and when each button appears'
                    ]
                },
                {
                    title: 'Two Paths for Remedial Quotes',
                    content: '<p class="mb-4">This guide covers creating quotes <strong>directly from defects</strong>, from the job page or the dashboard widget. There\'s also a <strong>Worksheet Path</strong> where engineers fill out a detailed Remedial Scope of Works on-site before the quote is generated.</p><p class="mb-4">See <a href="/docs/remedial-scope-of-works" class="text-blue-600 hover:underline">Remedial Scope of Works Guide</a> for the worksheet-based workflow.</p>'
                },
                {
                    title: 'Defects and Carried-Forward Faults Are the Same Record',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900"><strong>One defect, seen from two places.</strong> A defect is logged against the job where it was found. <strong>Carried-Forward Faults</strong> in the field app is the <em>site-level view</em> of those same defect rows: every open defect at the site, including ones found on earlier visits, so the next engineer can see them and tick off what they put right.</p><p class="text-blue-900 mt-2">There is no second record to keep in step, so log each issue <strong>once</strong>. If the same fault has been logged twice, delete the duplicate (see <a href="#delete-a-defect" class="text-blue-700 hover:underline font-semibold">Defect raised by mistake? Delete it</a>). See <a href="/docs/fire-safety-features#carried-forward-faults" class="text-blue-700 hover:underline font-semibold">Fire Safety Jobsheets &amp; Fault Tracking</a> for more on Carried-Forward Faults.</p></div>'
                }
            ]
        },
        {
            id: 'how-it-works',
            title: 'How the Flow Works',
            subsections: [
                {
                    title: 'Step 1 — A Defect Is Logged on the Job',
                    content: '<p class="mb-4">When an engineer identifies an issue on site, they log it in the <strong>Defects</strong> section of the field app. The office can also add one from the job\'s Overview tab (see <a href="#office-defects" class="text-blue-600 hover:underline">Add or edit defects from the office</a>).</p><p class="mb-4">For any defect that needs remedial work, they tick <strong>"Quote required for remedial work"</strong>. Major and Critical defects are treated as needing a quote automatically.</p>'
                },
                {
                    title: 'Step 2 — A Remedials Scope Worksheet Is Attached',
                    content: '<p class="mb-4">For a Major or Critical defect, or one marked Quote required, Opscel automatically attaches a draft <strong>Remedials Scope of Works</strong> worksheet to the job.</p><p class="mb-4">The engineer fills in what work needs doing, estimated time and resources, then marks it complete.</p><p class="text-sm text-gray-600"><em>Note: This step is optional when you quote straight from the defects. You can create quotes from the job page or the dashboard without waiting for the worksheet.</em></p>'
                },
                {
                    title: 'Step 3 — Office Creates the Quote',
                    content: '<p class="mb-4">There are three ways to create the remedial quote, all of which link it directly to the job:</p>',
                    bullets: [
                        '<strong>Option A:</strong> Create Bundled Quote from the job page (recommended)',
                        '<strong>Option B:</strong> Create a custom quote from the job page',
                        '<strong>Option C:</strong> Quote from the dashboard widget'
                    ]
                }
            ]
        },
        {
            id: 'quote-settings',
            title: 'What Settings the Quote Arrives With',
            subsections: [
                {
                    content: '<p class="mb-4">A quote raised from defects starts with your business\'s quote settings already applied — you don\'t have to set them each time.</p><p class="mb-4">By default it uses your <strong>Quote Defaults</strong> (Settings → Sales → Quote Defaults): validity period, price breakdown, and deposit amount.</p><p class="mb-4">If you want remedial quotes to carry your terms and conditions, or to look different from a normal quote, pick a template under <strong>Defect &amp; Remedial Quotes</strong> on that same page. The quote will then start with that template\'s terms, wording and settings.</p><p class="mb-2">Three things worth knowing:</p>',
                    bullets: [
                        '<strong>Call-out rates are hidden by default</strong> on defect quotes, even if you show them on other quotes. A remedial quote isn\'t a call-out, so the tariff table would only confuse the customer. If you do want it, choose a template that has call-out rates switched on, or turn it on for the individual quote.',
                        '<strong>A deposit is never switched on automatically.</strong> Your default deposit amount is filled in ready, but you decide per quote whether to ask for one — accepting a deposit quote raises an invoice straight away, so that stays a deliberate choice.',
                        '<strong>Overheads &amp; prelims are not added automatically.</strong> The overheads percentage from Quote Defaults applies to quotes you create yourself, not to quotes raised from defects. Add it on the individual quote if you want it — see <a href="/docs/quotations#line-items-pricing" class="text-blue-600 hover:underline">Overheads &amp; Prelims</a>.'
                    ]
                },
                {
                    content: '<p class="mt-2">Every one of these can still be changed on the quote itself before you send it. See <a href="/docs/quote-defaults" class="text-blue-600 hover:underline">Quote Defaults</a> for the full settings reference.</p>'
                }
            ]
        },
        {
            id: 'office-defects',
            title: 'Add or Edit Defects from the Office',
            content: '<p class="mb-4">Defects don\'t have to come from the field app. Every job\'s <strong>Overview</strong> tab has a <strong>Defects</strong> card, and anyone who can edit jobs can add or correct defects there.</p>',
            subsections: [
                {
                    mockup: 'office-defects-card'
                },
                {
                    title: 'Adding a Defect',
                    steps: [
                        'Open the job and stay on the <strong>Overview</strong> tab',
                        'On the <strong>Defects</strong> card, click <strong>Add defect</strong>',
                        'Fill in the same form the engineer uses in the field app: severity, description, location, recommended action, "Quote required for remedial work", parts and photos',
                        'Save it. The defect appears on the card, on the site\'s defect register and on the job sheet'
                    ]
                },
                {
                    content: '<p class="mb-4"><strong>Add defect works on any job status, including a completed job.</strong> That matters when a defect was logged on the wrong job: you can re-add it on the right one even after that job has been signed off. If the new defect is Major, Critical or marked Quote required, the message reads <em>"Defect added - it is also on the Remedial Scope sheet for quoting"</em>.</p><p class="mb-4">If a save fails, you see an error and what you typed stays in the form, so nothing is silently lost.</p>'
                },
                {
                    title: 'What Each Row on the Card Shows',
                    content: '<p class="mb-4">The card lists every open defect on the job; resolved ones are counted underneath.</p>',
                    bullets: [
                        '<strong>Severity</strong> (Observation, Minor, Major or Critical), category, location and the recommended action',
                        '<strong>Parts</strong> the engineer attached, with their part numbers',
                        '<strong>Quote required</strong> when the defect still needs a quote',
                        '<strong>Removed from remedial scope</strong> when the office has taken it off the Remedial Scope sheet (the defect stays on the job)',
                        '<strong>The quote number</strong> and its status once the defect is on a quote (see <a href="#viewing-links" class="text-blue-600 hover:underline">Viewing the link</a>)',
                        '<strong>Up to 4 photo thumbnails</strong>, with a +N tile when there are more; each opens full size'
                    ]
                },
                {
                    title: 'Editing a Defect',
                    content: '<p class="mb-4">Click <strong>Edit</strong> (the pencil icon) on a row to edit it in place. It\'s the same form as the field app, photos included. The form also carries <strong>Delete defect</strong>, for a defect that should never have been raised (see <a href="#delete-a-defect" class="text-blue-600 hover:underline">Delete it</a>).</p><p class="text-sm text-gray-600"><em>When a job has no defects yet, users who can edit jobs still see the card, reading "No defects recorded on this job.", so Add defect is always within reach. Users who can\'t edit jobs don\'t see an empty card.</em></p>'
                }
            ]
        },
        {
            id: 'option-a',
            title: 'Option A — Create Bundled Quote from Job Page',
            content: '<p class="mb-4 text-green-700 font-semibold">✓ Recommended method</p><p class="mb-4">This is the fastest option, and it lets you choose exactly which defects go on the quote. The quote is automatically linked to the job.</p>',
            subsections: [
                {
                    title: 'Steps to Create Bundled Quote',
                    steps: [
                        'Open the job in the admin dashboard',
                        'Scroll to the <strong>Defects</strong> card on the Overview tab',
                        'Click <strong>Create Bundled Quote</strong>. A <strong>Create bundled quote</strong> dialog lists every open defect on the job that isn\'t already on a quote',
                        'Defects marked Quote required, and Major or Critical defects, are ticked for you. Observation and Minor defects, and any removed from the remedial scope, are listed unticked. Tick or untick until the list is what you want to quote',
                        'Click <strong>Create quote with N defects</strong>',
                        'Opscel creates one draft quote containing the defects you ticked, and takes you straight to it to review, price and send'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Draft quote created</strong> with customer pre-filled from the job, titled "Remedial Work - " followed by the job number',
                        '<strong>A heading line for each defect you ticked</strong>, followed by priced part lines and a labour line',
                        '<strong>Linked Job</strong> field shows the originating job number',
                        '<strong>Quote is editable</strong> — adjust pricing, add notes, customise before sending',
                        'Back on the job, each quoted defect now shows the <strong>quote number</strong>, and the defects you left unticked stay open to quote later'
                    ]
                },
                {
                    title: 'How Defects Become Line Items',
                    content: '<p class="mb-4">Each defect appears as a £0 heading line showing its severity, location and recommended action. Underneath it come a priced line for each part the engineer recorded, priced from your product catalogue, and a labour line worked out from the hours and number of engineers they recorded, at your default labour rate. The heading line itself carries no price — it\'s there to give the customer context for the lines underneath.</p><p>Where the engineer didn\'t record parts or hours, you\'ll get the heading line on its own and price the work yourself.</p>'
                },
                {
                    title: 'When to Use This Method',
                    bullets: [
                        'One or more defects on the same job need quoting together',
                        'You want to quote some defects now and leave others for later',
                        'You want one professional quote document instead of separate quotes',
                        'Fastest path from defect to customer quote'
                    ]
                }
            ]
        },
        {
            id: 'option-b',
            title: 'Option B — Create Custom Quote from Job Page',
            content: '<p class="mb-4">If you need more control over the quote structure:</p>',
            subsections: [
                {
                    title: 'Steps to Create Custom Quote',
                    steps: [
                        'Open the job in the admin dashboard',
                        'Scroll to the <strong>Defects</strong> card on the Overview tab',
                        'Click <strong>New Quote</strong> (it sits next to Create Bundled Quote and appears under the same conditions)',
                        'The quote creation wizard opens, pre-filled with the customer and job details',
                        'Add your line items, set pricing, and create the quote'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Quote wizard</strong> opens with customer details pre-populated',
                        '<strong>Empty line items</strong> — you add and price each item manually',
                        '<strong>Linked Job</strong> field automatically set to the originating job',
                        '<strong>Full flexibility</strong> — add non-defect items, bundle pricing, custom terms'
                    ]
                },
                {
                    title: 'When to Use This Method',
                    bullets: [
                        'Defects are part of a larger quote with other work',
                        'You need to bundle defects with upgrades or additional services',
                        'Custom pricing structure doesn\'t map 1:1 with defects'
                    ]
                }
            ]
        },
        {
            id: 'option-c',
            title: 'Option C — Quote from the Dashboard Widget',
            content: '<p class="mb-4">A cross-job view of every job with defects waiting for a remedial quote:</p>',
            subsections: [
                {
                    title: 'Steps to Create from Dashboard',
                    steps: [
                        'Go to the <strong>Dashboard</strong>',
                        'Find the <strong>Jobs Pending Remedial Quotes</strong> widget',
                        'Find the relevant job and click <strong>Quote</strong>',
                        'A <strong>Create Bundled Quote</strong> dialog confirms which defects will be included. Confirm it',
                        'A message reads <em>"Quote QT-… created for N defects"</em>. You stay on the dashboard'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>One row per job</strong> with defects waiting for a quote, across your business',
                        '<strong>Each row shows the job\'s defect count</strong> with a badge per severity; expand the row to see the defects themselves',
                        '<strong>Only defects in the remedial scope are listed</strong>: those marked Quote required, or Major or Critical, and not removed from the remedial scope. All of them go on the one quote',
                        '<strong>Quote auto-linked</strong> to the originating job; open it from Quotations or from the job\'s Defects card'
                    ]
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>The widget quotes all of a job\'s in-scope defects together.</strong> To leave one out, or to include an Observation or Minor defect that isn\'t marked Quote required, use <a href="#option-a" class="font-semibold underline">Option A</a> on the job page, where you tick exactly the defects you want.</p></div>'
                },
                {
                    title: 'When to Use This Method',
                    bullets: [
                        'You work from the dashboard and want a cross-job view',
                        'Clearing a backlog of remedial quotes across several jobs',
                        'Office manager triaging unquoted work at the start of the day'
                    ]
                }
            ]
        },
        {
            id: 'delete-a-defect',
            title: 'Defect Raised by Mistake? Delete It',
            content: '<p class="mb-4">Delete is for a defect that should never have been raised: logged on the wrong job, or logged twice. It removes the defect from the job, its job sheets and the site\'s defect register. It is not a way to close a defect that has been fixed. For that, resolve it.</p>',
            subsections: [
                {
                    title: 'Who Can Delete a Defect',
                    bullets: [
                        '<strong>The person who raised it</strong>',
                        '<strong>Super Admin, Admin and Site Manager</strong>, who can delete any defect',
                        'Anyone else, including an engineer looking at a colleague\'s defect, doesn\'t get the option at all'
                    ]
                },
                {
                    title: 'Where to Find It',
                    bullets: [
                        '<strong>Office job page:</strong> Overview → Defects card → the bin icon on the row, or Edit → <strong>Delete defect</strong>',
                        '<strong>Office Complete Job Card:</strong> Defects step → Edit → <strong>Delete defect</strong>',
                        '<strong>Office Remedial Scope sheet:</strong> Edit item → <strong>Delete defect</strong>, on a draft sheet, for items not yet quoted (Super Admin, Admin and Site Manager)',
                        '<strong>Field app:</strong> Defects screen → Edit → <strong>Delete defect</strong> at the bottom of the form. See the <a href="/docs/field-service#capturing-work-sub-6" class="text-blue-600 hover:underline">Field Service guide</a>'
                    ]
                },
                {
                    title: 'The Confirmation Dialog',
                    content: '<p class="mb-4">Nothing is deleted until you confirm. The dialog is titled <strong>"Delete this defect?"</strong> and reads: <em>"For a defect raised by mistake, such as on the wrong job. It will be removed from this job, its job sheets and the site\'s defect register."</em> Below that it shows the defect\'s severity, description and location, so you can check it\'s the right one.</p>',
                    bullets: [
                        '<strong>Photos:</strong> if the defect has photos, <strong>"Also delete its N photos"</strong> is ticked by default, with the note <em>"Photos can be restored from the job\'s Photos for 30 days."</em> Deleted photos go to the job\'s Photos → <strong>Recently deleted</strong>. A photo that\'s also attached to another defect is kept',
                        '<strong>The defect itself:</strong> the dialog says <em>"The defect itself can\'t be restored."</em> There is no undo, so this dialog is the safeguard',
                        '<strong>Buttons:</strong> <strong>Keep it</strong> backs out; the red <strong>Delete defect</strong> goes ahead'
                    ]
                },
                {
                    content: '<p class="mb-4">Afterwards a message confirms it: <em>"Defect deleted"</em>, or <em>"Defect deleted, with its photo"</em> when photos went too. Every delete is recorded in the audit log with a full copy of the defect.</p><p class="mb-4"><strong>Its empty Remedial Scope sheet can go too.</strong> If the defect you delete was the last one in the remedial scope on that job, and the draft Remedial Scope sheet was created automatically for it and nobody has typed into it or quoted it, the now-empty sheet is removed as well. The message says so, and the sheet can be restored from <strong>Deleted sheets</strong> for 30 days. Sheets your office attached on purpose are never removed this way.</p>'
                },
                {
                    title: 'When Delete Is Refused',
                    content: '<p class="mb-4">Some defects are already part of a quote, a job or the site\'s history, so Opscel won\'t delete them and tells you why.</p>'
                        + diagram(`${IMG}/can-i-delete.svg`, 'A decision flow for deleting a defect: if it is Resolved, re-open it first; if it is on a quote, remove it from the quote first; if a remedial job has been raised for it, it can\'t be deleted; if it came from an alarm-monitoring case, it can\'t be deleted here; if it is on a completed Remedial Scope sheet, revert the sheet to draft first; if you didn\'t raise it and aren\'t office with delete rights, only the person who raised it or the office can; if you\'re offline, it needs a connection; otherwise delete it, confirming and optionally including its photos.', 'Work down the checks: the first one that stops you says what to do next.')
                },
                {
                    table: {
                        headers: ['The defect…', 'What you see', 'What to do'],
                        rows: [
                            ['Has been resolved', 'No Delete. Where resolved defects are listed, such as the field app\'s Defects screen, they offer <strong>Re-open</strong> instead', 'Resolved defects are part of the site\'s history. Re-open it first if it was raised by mistake'],
                            ['Is on a quote', 'A greyed-out bin; hover it for the reason, e.g. "This defect is on QT-2026-0097. Remove it from the quote first." In the field app, a muted line where Delete defect would be', 'Remove it from the quote, then delete it'],
                            ['Has had a remedial job raised for it', 'A greyed-out bin with the reason in its tooltip (a muted line in the field app)', 'It can\'t be deleted'],
                            ['Was raised from an alarm-monitoring case', 'Delete is offered; a red message in the dialog explains the refusal', 'It can\'t be deleted from the job'],
                            ['Is recorded on a completed Remedial Scope sheet', 'A red message in the dialog: "Revert that sheet to draft first, then delete the defect."', 'Revert the sheet to draft, then delete'],
                            ['Was raised by someone else, and you aren\'t Super Admin, Admin or Site Manager', 'No delete option at all', 'Ask the person who raised it, or the office'],
                            ['Is being deleted from a phone with no signal', '"You\'re offline. Deleting a defect needs a connection, so try again once you\'re back online." The button is disabled', 'Try again once you\'re online'],
                            ['Has a change on the phone still waiting to sync', '"This defect has a change still waiting to sync. Delete it once it has synced." The button is disabled', 'Let the phone sync, then delete']
                        ]
                    }
                },
                {
                    title: 'Logged on the Wrong Job?',
                    content: '<p class="mb-4">There\'s no "move to another job". Delete the defect from the wrong job, then open the right job and use <strong>Overview → Defects → Add defect</strong> to raise it there. That works even if the right job is already completed.</p>'
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800"><strong>On the Remedial Scope sheet, "Remove from scope" is not delete.</strong> It only takes the defect off the scope list; the defect stays on the job, marked "Removed from remedial scope". To erase a defect raised by mistake, Edit it and choose <strong>Delete defect</strong>.</p></div>'
                }
            ]
        },
        {
            id: 'viewing-links',
            title: 'Viewing the Link Between Quote and Job',
            subsections: [
                {
                    title: 'From the Job Page',
                    content: '<p class="mb-4">To see which quotes were created from this job\'s defects:</p>',
                    steps: [
                        'Open the job',
                        'Go to <strong>Overview</strong> tab → <strong>Defects</strong> card',
                        'Any defect that has been quoted shows a green badge with the <strong>quote number</strong>',
                        'Click the badge to open the quote directly'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Quote number badge</strong> on each quoted defect (it reads "View Quote" only if the quote has no number)',
                        '<strong>Quote status badge</strong> beside it (for example Draft, Sent, Accepted, Declined)',
                        '<strong>Clickable link</strong> takes you directly to the quote detail page'
                    ]
                },
                {
                    title: 'From the Quote Page',
                    content: '<p class="mb-4">To see which job this quote came from:</p>',
                    steps: [
                        'Open the quote',
                        'Look in the <strong>Quote Details</strong> panel on the right',
                        'Find the <strong>Linked Job</strong> row',
                        'Click the job number to navigate back to the originating job'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Linked Job</strong> field shows job reference number',
                        '<strong>Job status</strong> displayed (Scheduled, In Progress, Completed)',
                        '<strong>Clickable link</strong> navigates to the job detail page',
                        '<strong>Customer name</strong> matches between job and quote'
                    ]
                },
                {
                    title: 'Audit Trail Benefits',
                    content: '<p class="mb-4">The permanent link between quotes and jobs provides:</p>',
                    bullets: [
                        '<strong>Traceability:</strong> Always know which visit generated which quote',
                        '<strong>Compliance:</strong> Audit trail for warranty claims and follow-up work',
                        '<strong>Customer history:</strong> See all quotes tied to specific jobs when reviewing account',
                        '<strong>Engineer accountability:</strong> Connect remedial work back to original inspection'
                    ]
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'What roles can create remedial quotes?',
                    content: '<p>Super Admin, Admin, Sales Manager, Accounts, and Contract Manager roles can create quotes. Site Managers and Engineers do not have access to quote creation — the buttons are hidden automatically.</p><p class="mt-3">Choosing which template shapes those quotes is narrower: only Admin can set the <strong>Defect &amp; Remedial Quotes</strong> template (Settings → Sales → Quote Defaults). Sales Manager, Accounts and Contract Manager can raise the quotes but not change what template they start from.</p>'
                },
                {
                    title: 'Can I link a quote to a job after it\'s been created?',
                    content: '<p>Not retroactively via the UI — the link is set at creation time. Use the "New Quote" button on the job page so the link is established automatically.</p><p class="mt-3"><strong>Workaround:</strong> If you created a quote manually and need to link it, delete the unlinked quote and recreate it from the job page or dashboard using one of the three methods above.</p>'
                },
                {
                    title: 'What happens if there are multiple defects on a job?',
                    content: '<p>"Create Bundled Quote" lists all of the job\'s open, unquoted defects and puts the ones you tick into a single quote. This keeps the customer\'s document clean and avoids multiple separate quotes for the same visit.</p><p class="mt-3">Each defect produces a heading line (severity, location, recommended action) with no price of its own, followed by:</p>',
                    bullets: [
                        'A priced line for each part the engineer recorded, and',
                        'A labour line from the hours and engineers they recorded, at your default labour rate',
                        'If no parts or hours were recorded, just the heading line appears — you price the work yourself'
                    ]
                },
                {
                    title: 'The "Create Bundled Quote" button isn\'t showing — why?',
                    content: '<p>The button (and New Quote beside it) appears whenever the job has at least one defect that is <strong>not resolved</strong> and <strong>not already on a quote</strong>, whatever its severity. Check:</p>',
                    bullets: [
                        'Your role can create quotes. The button is hidden for Site Managers, Engineers and Viewers',
                        'The job still has an open defect that isn\'t on a quote. Quoted defects show their quote number on the card; resolved ones are counted separately',
                        'If every defect is already quoted or resolved, there\'s nothing left to bundle, so the button won\'t be visible'
                    ]
                },
                {
                    title: 'Can I still use the dashboard widget?',
                    content: '<p>Yes. The <strong>Jobs Pending Remedial Quotes</strong> widget on the dashboard gives you a cross-job overview of everything outstanding, and its <strong>Quote</strong> button creates the bundled quote without leaving the dashboard.</p><p class="mt-3">It lists defects in the remedial scope (Quote required, Major or Critical), grouped by job, which makes it useful for office managers who triage remedial work at the start of each day.</p>'
                },
                {
                    title: 'What if I need to quote only some defects from a job?',
                    content: '<p>Use <strong>Option A</strong>. The Create Bundled Quote dialog lets you untick the defects you don\'t want on this quote before you click <strong>Create quote with N defects</strong>.</p><p class="mt-3">The defects you leave out stay open on the job, not yet quoted, and can be quoted separately later.</p>'
                },
                {
                    title: 'I logged defects on the wrong job',
                    content: '<p>There\'s no "move" option. Delete each one from the wrong job (the Defects card\'s bin icon, or Edit → Delete defect), then open the right job and use <strong>Overview → Defects → Add defect</strong> to raise it there. Add defect works on any job status, so it doesn\'t matter if the right job is already completed.</p><p class="mt-3">If you ticked "Also delete its photos", they can be restored from the original job\'s Photos → Recently deleted for 30 days. The defect itself can\'t be restored, so check it\'s the right one in the confirm dialog. A defect already on a quote has to come off the quote first. See <a href="#delete-a-defect" class="text-blue-600 hover:underline">Defect raised by mistake? Delete it</a>.</p>'
                },
                {
                    title: 'Why is the bin greyed out on one defect?',
                    content: '<p>Opscel already knows that defect can\'t be deleted, so it tells you why before you try. Hover over (or focus) the greyed bin to see the reason. It\'s one of two things:</p>',
                    bullets: [
                        '<strong>It\'s on a quote</strong>, e.g. "This defect is on QT-2026-0097. Remove it from the quote first."',
                        '<strong>A remedial job has been raised for it</strong>, so it can\'t be deleted'
                    ]
                },
                {
                    content: '<p>Other refusals (a defect raised from an alarm-monitoring case, or one recorded on a completed Remedial Scope sheet) show as a red message inside the delete dialog instead. If there\'s no bin at all, the defect was raised by someone else and your role can only delete your own.</p>'
                },
                {
                    title: 'Does the quote-to-job link work for quotes converted to jobs?',
                    content: '<p>Yes, but it creates a <strong>new job</strong>. When a customer accepts a quote and you convert it to a job, Opscel creates a <em>new</em> remedial job for the work to be done.</p><p class="mt-3">This new job is separate from (but related to) the original inspection job where the defects were logged. Both jobs will reference the quote, creating a full audit trail:</p>',
                    bullets: [
                        '<strong>Original job</strong> → generated the quote (linked via "Linked Job" field)',
                        '<strong>New remedial job</strong> → executes the quoted work (created from quote acceptance)',
                        '<strong>Quote</strong> → connects both jobs together'
                    ]
                },
                {
                    title: 'When the remedial job is completed, does it close out the fault it was raised to fix?',
                    content: '<p>Not automatically, but there\'s a one-click way to do it. When the office completes a remedial job that came from a converted quote, the Complete Job screen shows an <strong>Originating defect</strong> panel listing the fault(s) that quote was raised for, with a working <strong>Resolve</strong> button.</p><p class="mt-3">Resolving from there hits the same mechanism as resolving in the field — the defect moves to Resolved on the site\'s Deficiency Register and drops off the field app\'s Carried-Forward Faults screen straight away. It\'s optional, though: completing the job does <strong>not</strong> require the originating fault to be resolved, and the resolution note prints on <em>this</em> remedial job\'s sheet, not the original inspection job\'s. See <a href="/docs/fire-safety-features#office-workflow" class="text-blue-600 hover:underline">Fire Safety Jobsheets & Fault Tracking</a> for the full detail.</p>'
                },
                {
                    title: 'Can I see all quotes linked to a job in one place?',
                    content: '<p>The job page doesn\'t have a separate Quotes tab. On the <strong>Overview</strong> tab, the Defects card shows the quote number and status on each quoted defect, and clicking it opens the quote. From the other direction, every quote raised from the job shows it in its <strong>Linked Job</strong> row.</p>'
                },
                {
                    title: 'Can I add the same items to every remedial quote — batteries, for example?',
                    content: '<p>Yes. Put them on a quote template, then choose that template under Settings → Sales → Quote Defaults → Defect &amp; Remedial Quotes.</p><p class="mt-3">Any line items on that template are added to every quote raised from defects, underneath the defect lines. The quote reads as "here\'s what we found", then "here\'s what we always fit".</p><p class="mt-3">They\'re ordinary line items — you can change the price or delete them on any individual quote. If you stop wanting them altogether, remove them from the template or pick a different template.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>'
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'How engineers log, edit and delete defects on-site',
            href: '/docs/field-service'
        },
        {
            title: 'Fire Safety Fault Tracking',
            description: 'Carried-Forward Faults: the site-level view of defects',
            href: '/docs/fire-safety-features'
        },
        {
            title: 'Certificates',
            description: 'Issuing certificates after remedial work',
            href: '/docs/certificates'
        },
        {
            title: 'Remedial Scope of Works',
            description: 'Bundling defects into a formal remedial quote',
            href: '/docs/remedial-scope-of-works'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'End-to-end from quote to invoice',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Quote Defaults',
            description: 'Settings that shape defect and remedial quotes',
            href: '/docs/quote-defaults'
        }
    ]
};
