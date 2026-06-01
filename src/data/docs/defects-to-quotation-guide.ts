import { IDocGuide } from '@/types';

export const defectsToQuotationGuide: IDocGuide = {
    slug: 'defects-to-quotation',
    title: 'Creating and Linking Quotes to Jobs with Defects',
    description: 'Turn defects into customer-ready remedial quotes with automatic job linking. Learn the three methods for creating bundled quotes from job defects.',
    lastUpdated: '2026-05-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Admin, Accounts, Contract Manager</p>'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">When an engineer reports defects on a job, OpsCel gives you two ways to turn those defects into a customer-ready remedial quote — and both methods now keep a permanent, visible link between the quote and the job it came from.</p>'
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
                    content: '<p class="mb-4">OpsCel automatically attaches a <strong>Remedials Scope of Works</strong> worksheet to the job.</p><p class="mb-4">The engineer fills in what work needs doing, estimated time and resources, then marks it complete.</p><p class="text-sm text-gray-600"><em>Note: This step is optional for the Dashboard Widget Path. You can create quotes directly from defects without waiting for the worksheet.</em></p>'
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
                        'OpsCel creates one draft quote containing all the unquoted defects as line items',
                        'You are taken straight to the new quote to review, price, and send'
                    ]
                },
                {
                    title: 'What You Should See',
                    bullets: [
                        '<strong>Draft quote created</strong> with customer pre-filled from the job',
                        '<strong>Line items</strong> for each unquoted defect (severity, location, description)',
                        '<strong>Linked Job</strong> field shows the originating job number',
                        '<strong>Quote is editable</strong> — adjust pricing, add notes, customize before sending'
                    ]
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
                    content: '<p>Admin, Accounts, and Contract Manager roles can create quotes. Site Managers and Engineers do not have access to quote creation — the buttons are hidden automatically.</p>'
                },
                {
                    title: 'Can I link a quote to a job after it\'s been created?',
                    content: '<p>Not retroactively via the UI — the link is set at creation time. Use the "New Quote" button on the job page so the link is established automatically.</p><p class="mt-3"><strong>Workaround:</strong> If you created a quote manually and need to link it, delete the unlinked quote and recreate it from the job page using one of the three methods above.</p>'
                },
                {
                    title: 'What happens if there are multiple defects on a job?',
                    content: '<p>"Create Bundled Quote" combines all unquoted defects into a single quote, one line item per defect. This keeps the customer\'s document clean and avoids multiple separate quotes for the same visit.</p><p class="mt-3">Each defect becomes a line item with:</p>',
                    bullets: [
                        'Defect description as line item name',
                        'Severity level (e.g., "Major", "Critical")',
                        'Location on site',
                        'Recommended action'
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
                    content: '<p>Yes, but it creates a <strong>new job</strong>. When a customer accepts a quote and you convert it to a job, OpsCel creates a <em>new</em> remedial job for the work to be done.</p><p class="mt-3">This new job is separate from (but related to) the original inspection job where the defects were logged. Both jobs will reference the quote, creating a full audit trail:</p>',
                    bullets: [
                        '<strong>Original job</strong> → generated the quote (linked via "Linked Job" field)',
                        '<strong>New remedial job</strong> → executes the quoted work (created from quote acceptance)',
                        '<strong>Quote</strong> → connects both jobs together'
                    ]
                },
                {
                    title: 'Can I see all quotes linked to a job in one place?',
                    content: '<p>Yes. On the job detail page, go to the <strong>Quotes</strong> tab (if available in your OpsCel version), or scroll through the Defects card on the Overview tab — each quoted defect shows its linked quote.</p><p class="mt-3">For jobs with many defects and multiple quotes, the Quotes tab provides a cleaner view of all quote activity related to the job.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="https://help.opscel.com" target="_blank" rel="noopener noreferrer" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>'
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
        }
    ]
};
