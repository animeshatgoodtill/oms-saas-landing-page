import { IDocGuide } from '@/types';

export const defectsToQuotationGuide: IDocGuide = {
    slug: 'defects-to-quotation',
    title: 'Creating and Linking Quotes to Jobs with Defects',
    description: 'Turn defects into customer-ready remedial quotes with automatic job linking. Learn the three methods for creating bundled quotes from job defects.',
    lastUpdated: '2026-08-26',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-1"><strong>Creating remedial quotes:</strong> Admin, Accounts, Contract Manager</p><p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Choosing the template used for them:</strong> Admin only (Settings → Sales → Quote Defaults)</p>'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">When an engineer reports defects on a job, Opscel gives you two ways to turn those defects into a customer-ready remedial quote — and both methods now keep a permanent, visible link between the quote and the job it came from.</p>'
                },
                {
                    title: 'What This Guide Covers',
                    bullets: [
                        'Three methods for creating remedial quotes from job defects',
                        'How quote-to-job linking works automatically',
                        'Viewing the link from both quote and job pages',
                        'Role-based access and button visibility'
                    ]
                },
                {
                    title: 'Two Paths for Remedial Quotes',
                    content: '<p class="mb-4">This guide covers the <strong>Dashboard Widget Path</strong> — the fastest way to create quotes directly from defects. There\'s also a <strong>Worksheet Path</strong> where engineers fill out a detailed Remedial Scope of Works on-site before the quote is generated.</p><p class="mb-4">See <a href="/docs/remedial-scope-of-works" class="text-blue-600 hover:underline">Remedial Scope of Works Guide</a> for the worksheet-based workflow.</p>'
                },
                {
                    title: 'Defects vs Carried-Forward Faults',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900"><strong>Important distinction:</strong> <strong>Defects</strong> (this guide) are for generating customer-facing quotes from issues found on this job. <strong>Carried-Forward Faults</strong> are for tracking ongoing issues across visits at a site (internal record only).</p><p class="text-blue-900 mt-2">You can log the same issue in both places if it needs tracking AND quoting. See <a href="/docs/fire-safety-features" class="text-blue-700 hover:underline font-semibold">Fire Safety Jobsheets & Fault Tracking</a> for details on carried-forward faults.</p></div>'
                }
            ]
        },
        {
            id: 'how-it-works',
            title: 'How the Flow Works',
            subsections: [
                {
                    title: 'Step 1 — Engineer Logs Defects on the Job',
                    content: '<p class="mb-4">When an engineer identifies an issue on site, they log it in the <strong>Defects</strong> section of the field app.</p><p class="mb-4">For any defect that needs remedial work, they tick <strong>"Quote required for remedial work"</strong>, or the app flags it automatically if the severity is Major or Critical.</p>'
                },
                {
                    title: 'Step 2 — A Remedials Scope Worksheet is Attached',
                    content: '<p class="mb-4">Opscel automatically attaches a <strong>Remedials Scope of Works</strong> worksheet to the job.</p><p class="mb-4">The engineer fills in what work needs doing, estimated time and resources, then marks it complete.</p><p class="text-sm text-gray-600"><em>Note: This step is optional for the Dashboard Widget Path. You can create quotes directly from defects without waiting for the worksheet.</em></p>'
                },
                {
                    title: 'Step 3 — Office Creates the Quote',
                    content: '<p class="mb-4">There are now three ways to create the remedial quote, all of which link it directly to the job:</p>',
                    bullets: [
                        '<strong>Option A:</strong> Create Bundled Quote from the job page (recommended)',
                        '<strong>Option B:</strong> Create a custom quote from the job page',
                        '<strong>Option C:</strong> Create Bundled Quote from the dashboard widget'
                    ]
                }
            ]
        },
        {
            id: 'quote-settings',
            title: 'What Settings the Quote Arrives With',
            subsections: [
                {
                    content: '<p class="mb-4">A quote raised from defects starts with your business\'s quote settings already applied — you don\'t have to set them each time.</p><p class="mb-4">By default it uses your <strong>Quote Defaults</strong> (Settings → Sales → Quote Defaults): validity period, price breakdown, and deposit amount.</p><p class="mb-4">If you want remedial quotes to carry your terms and conditions, or to look different from a normal quote, pick a template under <strong>Defect &amp; Remedial Quotes</strong> on that same page. The quote will then start with that template\'s terms, wording and settings.</p><p class="mb-2">Two things worth knowing:</p>',
                    bullets: [
                        '<strong>Call-out rates are hidden by default</strong> on defect quotes, even if you show them on other quotes. A remedial quote isn\'t a call-out, so the tariff table would only confuse the customer. If you do want it, choose a template that has call-out rates switched on, or turn it on for the individual quote.',
                        '<strong>A deposit is never switched on automatically.</strong> Your default deposit amount is filled in ready, but you decide per quote whether to ask for one — accepting a deposit quote raises an invoice straight away, so that stays a deliberate choice.'
                    ]
                },
                {
                    content: '<p class="mt-2">Every one of these can still be changed on the quote itself before you send it. See <a href="/docs/quote-defaults" class="text-blue-600 hover:underline">Quote Defaults</a> for the full settings reference.</p>'
                }
            ]
        },
        {
            id: 'option-a',
            title: 'Option A — Create Bundled Quote from Job Page',
            content: '<p class="mb-4 text-green-700 font-semibold">✓ Recommended method</p><p class="mb-4">This is the fastest option. The quote is automatically linked to the job.</p>',
            subsections: [
                {
                    title: 'Steps to Create Bundled Quote',
                    steps: [
                        'Open the job in the admin dashboard',
                        'Scroll to the <strong>Defects</strong> card on the Overview tab',
                        'Click <strong>Create Bundled Quote</strong>',
                        'Opscel creates one draft quote containing all the unquoted defects as line items',
                        'You are taken straight to the new quote to review, price, and send'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Draft quote created</strong> with customer pre-filled from the job',
                        '<strong>A heading line for each unquoted defect</strong>, followed by priced parts and labour lines',
                        '<strong>Linked Job</strong> field shows the originating job number',
                        '<strong>Quote is editable</strong> — adjust pricing, add notes, customize before sending'
                    ]
                },
                {
                    title: 'How Defects Become Line Items',
                    content: '<p class="mb-4">Each defect appears as a heading line showing its severity, location and recommended action, followed by a priced line for any parts the engineer recorded and a labour line if they logged hours. The heading line itself carries no price — it\'s there to give the customer context for the lines underneath.</p><p>Where the engineer didn\'t record parts or hours, you\'ll get the heading line on its own and price the work yourself.</p>'
                },
                {
                    title: 'When to Use This Method',
                    bullets: [
                        'Multiple defects on the same job need quoting together',
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
                        'Click <strong>New Quote</strong>',
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
            title: 'Option C — Create Bundled Quote from Dashboard Widget',
            content: '<p class="mb-4">Cross-job overview of all defects pending quotes:</p>',
            subsections: [
                {
                    title: 'Steps to Create from Dashboard',
                    steps: [
                        'Go to the <strong>Dashboard</strong>',
                        'Find the <strong>Deficiencies Pending Quotes</strong> widget',
                        'Find the relevant job and click <strong>Create Quote</strong>',
                        'The bundled quote is created and linked to the job'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Widget shows all jobs</strong> with unquoted defects across your business',
                        '<strong>Job count badge</strong> on each defect shows how many jobs have this issue',
                        '<strong>One-click quote creation</strong> from the widget',
                        '<strong>Quote auto-linked</strong> to the originating job'
                    ]
                },
                {
                    title: 'When to Use This Method',
                    bullets: [
                        'You work from the dashboard and want a cross-job view',
                        'Batch processing multiple defects at once',
                        'Office manager triaging unquoted work at the start of the day'
                    ]
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
                        'Any defect that has been quoted shows a <strong>View Quote</strong> badge',
                        'Click the badge to open the quote directly'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>View Quote badge</strong> appears on quoted defects (color-coded by quote status)',
                        '<strong>Quote reference number</strong> displayed',
                        '<strong>Quote status</strong> shown (Draft, Sent, Accepted, Rejected)',
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
                    content: '<p>Admin, Accounts, and Contract Manager roles can create quotes. Site Managers and Engineers do not have access to quote creation — the buttons are hidden automatically.</p><p class="mt-3">Choosing which template shapes those quotes is narrower: only Admin can set the <strong>Defect &amp; Remedial Quotes</strong> template (Settings → Sales → Quote Defaults). Accounts and Contract Manager can raise the quotes but not change what template they start from.</p>'
                },
                {
                    title: 'Can I link a quote to a job after it\'s been created?',
                    content: '<p>Not retroactively via the UI — the link is set at creation time. Use the "New Quote" button on the job page so the link is established automatically.</p><p class="mt-3"><strong>Workaround:</strong> If you created a quote manually and need to link it, delete the unlinked quote and recreate it from the job page using one of the three methods above.</p>'
                },
                {
                    title: 'What happens if there are multiple defects on a job?',
                    content: '<p>"Create Bundled Quote" combines all unquoted defects into a single quote. This keeps the customer\'s document clean and avoids multiple separate quotes for the same visit.</p><p class="mt-3">Each defect produces a heading line (severity, location, recommended action) with no price of its own, followed by:</p>',
                    bullets: [
                        'A priced line for each part the engineer recorded, and',
                        'A labour line if they logged hours',
                        'If no parts or hours were recorded, just the heading line appears — you price the work yourself'
                    ]
                },
                {
                    title: 'The "Create Bundled Quote" button isn\'t showing — why?',
                    content: '<p>The button only appears when there are unresolved defects that still need a quote. Specifically:</p>',
                    bullets: [
                        'Defect was flagged as "Quote required for remedial work", OR',
                        'Defect severity is Major or Critical, AND',
                        'Defect has NOT been quoted yet (no existing quote link)',
                        'If all defects are already quoted or resolved, the button won\'t be visible. Check the defect list — quoted defects show a "View Quote" badge.'
                    ]
                },
                {
                    title: 'Can I still use the dashboard widget?',
                    content: '<p>Yes. The <strong>Deficiencies Pending Quotes</strong> widget on the dashboard still works exactly as before and is useful for a cross-job overview of everything outstanding.</p><p class="mt-3">It shows all jobs with unquoted defects across your entire business, making it perfect for office managers who triage remedial work at the start of each day.</p>'
                },
                {
                    title: 'What if I need to quote only some defects from a job?',
                    content: '<p>Use <strong>Option B: Create Custom Quote</strong> from the job page. The wizard opens with customer details pre-filled, and you manually add only the defect line items you want to include in this quote.</p><p class="mt-3">The other defects remain on the job as "pending quote" and can be quoted separately later.</p>'
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
                    content: '<p>Not automatically, but there\'s a one-click way to do it. When the office completes a remedial job that came from a converted quote, the Complete Job screen shows an <strong>Originating Deficiency</strong> panel listing the fault(s) that quote was raised for, with a working <strong>Resolve</strong> button.</p><p class="mt-3">Resolving from there hits the same mechanism as resolving in the field — it disappears from the site\'s Deficiency Register and from the field app\'s Carried-Forward Faults screen immediately. It\'s optional, though: completing the job does <strong>not</strong> require the originating fault to be resolved, and the resolution note prints on <em>this</em> remedial job\'s sheet, not the original inspection job\'s. See <a href="/docs/fire-safety-features#office-workflow" class="text-blue-600 hover:underline">Fire Safety Jobsheets & Fault Tracking</a> for the full detail.</p>'
                },
                {
                    title: 'Can I see all quotes linked to a job in one place?',
                    content: '<p>Yes. On the job detail page, go to the <strong>Quotes</strong> tab (if available in your Opscel version), or scroll through the Defects card on the Overview tab — each quoted defect shows its linked quote.</p><p class="mt-3">For jobs with many defects and multiple quotes, the Quotes tab provides a cleaner view of all quote activity related to the job.</p>'
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
            description: 'How engineers log defects on-site',
            href: '/docs/field-service'
        },
        {
            title: 'Fire Safety Fault Tracking',
            description: 'Carried-forward faults vs defects explained',
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
