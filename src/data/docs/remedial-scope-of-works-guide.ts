import { IDocGuide } from '@/types';

export const remedialScopeOfWorksGuide: IDocGuide = {
    slug: 'remedial-scope-of-works',
    title: 'Remedial Scope of Works - Complete Guide',
    description: 'Turn site defects into customer quotes in one tap. Engineer logs defects, worksheet auto-attaches, office generates bundled quotes.',
    lastUpdated: '2026-05-19',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <p class="text-lg text-muted-foreground mb-6">
                    Fire safety engineers find issues every visit. Capturing them, costing them, and getting back to the customer with a quote shouldn't take three apps and four emails.
                </p>
                <p class="mb-6">
                    OpsCel does it in one flow. The engineer logs a defect → a "Remedial Scope of Works" worksheet auto-appears on the job → they fill in what needs doing and how long it'll take → the customer signs on the device. Back at the office, one click turns the whole scope into a quote with every defect pre-filled as a line item.
                </p>
                <p class="mb-6">
                    <strong>No paper forms. No retyping. No defects falling between visits.</strong>
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p class="text-sm text-blue-900">
                        <strong>💡 Note:</strong> This guide focuses on the <strong>Worksheet Path</strong> for creating remedial quotes. There's also a faster <strong>Dashboard Widget Path</strong> that skips the worksheet and creates quotes directly from defects. <a href="/docs/defects-to-quotation" class="underline hover:no-underline">See Defects to Quotation guide</a> for the dashboard workflow, or read the <a href="#two-paths" class="underline hover:no-underline">Two Paths section</a> below to understand when to use each.
                    </p>
                </div>
            `,
            subsections: [
                {
                    title: 'What customers tell us',
                    content: '',
                    bullets: [
                        '5–10 minutes saved per quote at the office desk (no line-item retyping)',
                        'Zero defects lost between site visit and quote',
                        'Audit trail intact — every defect tied to its quote, every quote tied to its source visit'
                    ]
                },
                {
                    title: 'Key Features',
                    content: '',
                    bullets: [
                        'Auto-attached worksheets — No manual setup required when defects are logged',
                        'Live defect sync — Engineers can refresh the worksheet to pull in newly logged defects',
                        'Customer signature — Engineer signs off the scope on-site for customer approval',
                        'One-click quotes — Office staff generate bundled quotes for all remedial work instantly',
                        'Professional output — Quote includes all defects with severity, location, and recommended actions'
                    ]
                }
            ]
        },
        {
            id: 'two-paths',
            title: 'Two Paths for Creating Remedial Quotes',
            content: `
                <p class="mb-6">
                    OpsCel offers two ways to turn defects into customer quotes. Both are current, valid workflows—the right choice depends on your situation.
                </p>
            `,
            table: {
                headers: ['Aspect', 'Path A: Dashboard Widget', 'Path B: Worksheet (This Guide)'],
                rows: [
                    ['Where', 'Admin dashboard → "Defects Pending Quotes" card', 'Job detail → Documents tab → Remedial Scope worksheet'],
                    ['Trigger', '"Create Bundled Quote" button — reads from pending defects', '"Generate bundled quote" on the completed worksheet — reads from worksheet items'],
                    ['Engineer involvement', 'None required — defects logged, office handles rest', 'Engineer fills scope summary, estimates, gets customer signature on-site'],
                    ['Speed', 'Faster — one click from dashboard', 'Slower — engineer completes worksheet first'],
                    ['Detail level', 'Defect descriptions only', 'Full scope of works with estimates, hours, customer sign-off'],
                    ['Best for', 'Quick quotes, straightforward remedial work', 'Complex jobs, customer wants detailed scope confirmed on-site'],
                    ['Documentation', '<a href="/docs/defects-to-quotation" class="text-blue-600 hover:underline">Defects to Quotation Guide</a>', 'This guide']
                ]
            },
            subsections: [
                {
                    title: 'What Happens Automatically vs. Manually',
                    content: `
                        <p class="mb-4">Understanding what the system does automatically helps avoid confusion:</p>
                    `
                },
                {
                    title: '',
                    content: '',
                    table: {
                        headers: ['Action', 'Auto', 'Manual'],
                        rows: [
                            ['Remedial Scope worksheet created', '✅ (on defect POST with "Quote required" OR severity = major/critical)', ''],
                            ['Worksheet seeded with defect items', '✅ (on new sheet)', ''],
                            ['Draft quotation created', '', '✅ Admin clicks in widget or job sheets'],
                            ['Quote line items populated', '✅ (pre-filled on creation)', '✅ Admin adds pricing (£)'],
                            ['Defects cleared from pending-quotes widget', '✅ (on quote creation)', '']
                        ]
                    }
                },
                {
                    title: 'Important: Quotes Are Not Auto-Created',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
                            <p class="text-amber-900">
                                <strong>⚠️ Key Point:</strong> The worksheet auto-creates, but the quote does NOT. This is intentional—engineers don't know pricing, and the office needs to review scope before committing to a number. The admin must click a button to create the quote, but the descriptions and line items are already pre-filled.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Worksheet Auto-Creation Triggers',
                    content: 'A Remedial Scope of Works worksheet is automatically created when:',
                    bullets: [
                        'Engineer checks "Quote required for remedial work" on a defect',
                        'Defect severity is set to Major or Critical (even if "Quote required" is NOT checked)',
                        'First qualifying defect is saved—subsequent defects on the same job attach to the existing worksheet'
                    ]
                }
            ]
        },
        {
            id: 'the-problem',
            title: 'The Problem',
            content: `
                <p class="mb-4">
                    A typical fire alarm service visit turns up 3–8 things the customer needs to quote for. Today most contractors handle this with paper forms, photos in WhatsApp, and a Monday-morning game of "did anyone email the office about that Tate Modern job?"
                </p>
                <p class="mb-6">
                    The cost is real: defects fall between visits, quotes go out late (or never), and engineers spend 20 minutes after every job re-typing what they already wrote on a clipboard.
                </p>
            `
        },
        {
            id: 'how-it-works',
            title: 'How It Works: The 4-Step Flow',
            content: `
                <p class="mb-8">
                    The remedial scope of works process follows a simple four-step workflow that bridges field operations and office administration.
                </p>
                <div class="my-12 -mx-8 md:-mx-16 lg:-mx-24">
                    <img
                        src="/images/docs/remedial-scope-of-works/flow-diagram.png"
                        alt="4-step remedial workflow: engineer logs defect on site, worksheet auto-attaches, engineer fills and signs off, office generates bundled quote"
                        class="w-full rounded-lg border border-border shadow-lg"
                    />
                </div>
            `,
            subsections: [
                {
                    title: 'Step 1: Engineer Logs Defects On-Site',
                    content: 'During a service visit (e.g., fire alarm inspection, EICR), the engineer finds issues requiring remedial work.',
                    bullets: [
                        'Open the job in the field PWA',
                        'Navigate to the Defects section',
                        'Log each defect with severity (Critical, Major, Minor, Observation), location, and description',
                        'Check "Quote required for remedial work" (or leave unchecked—Major/Critical defects auto-trigger worksheet creation)',
                        'Save each defect'
                    ]
                },
                {
                    title: 'Step 2: Worksheet Auto-Attaches',
                    content: 'As soon as the first qualifying defect is logged (either "Quote required" checked OR severity = Major/Critical), a "Remedial Scope of Works" worksheet automatically appears in the job sheets list.',
                    bullets: [
                        'Status: DRAFT (amber badge)',
                        'Contains "Items seeded from defect" notice',
                        'Engineer can access it immediately from the job detail page',
                        'Job also appears in the admin dashboard "Defects Pending Quotes" widget'
                    ]
                },
                {
                    title: 'Step 3: Engineer Fills and Signs Off',
                    content: 'The engineer opens the worksheet, reviews the scope, and completes it on-site.',
                    bullets: [
                        'Review auto-imported defects in the "Defects in Scope" section',
                        'Tap "Refresh from defects" to pull any newly logged defects (edits preserved)',
                        'Fill in scope summary, engineers/days/hours estimate',
                        'Capture customer signature if required',
                        'Mark worksheet as COMPLETE'
                    ]
                },
                {
                    title: 'Step 4: Office Generates Bundled Quote',
                    content: 'Once the worksheet is marked complete, office staff manually creates the quote. The quote does NOT auto-create—this is intentional so office can review scope and add pricing.',
                    bullets: [
                        'Navigate to the job detail page → Documents tab',
                        'Hover over the completed Remedial Scope of Works row',
                        'Click the green "Generate Bundled Quote" button',
                        'One quote is created with N line items pre-filled from each defect (descriptions only, £0 prices)',
                        'Add pricing to each line item, adjust as needed, and send to customer',
                        'Worksheet row now shows "Quoted" pill with link to the quote',
                        'Job disappears from "Defects Pending Quotes" dashboard widget'
                    ]
                }
            ]
        },
        {
            id: 'engineer-workflow',
            title: 'For Engineers: Using the Field Worksheet',
            content: 'The field PWA provides engineers with a streamlined interface for managing remedial work scope during site visits.',
            subsections: [
                {
                    title: 'Accessing the Worksheet',
                    content: 'When you log a defect with "Quote required" checked, the worksheet auto-generates:',
                    steps: [
                        { step: 'Open the job in the field PWA', description: '' },
                        { step: 'Navigate to Job Sheets tab', description: '' },
                        { step: 'Look for "Remedial Scope of Works" with DRAFT status', description: '' },
                        { step: 'Tap to open', description: '' }
                    ]
                },
                {
                    title: 'Defects in Scope Section',
                    content: 'This section shows all defects that will be included in the remedial quote.',
                    bullets: [
                        'Severity badges: Red (MAJOR), Amber (MINOR), Grey (OBSERVATION)',
                        'Each defect shows: description, location, recommended action',
                        'Blue "Refresh from defects" banner appears when new defects are logged',
                        'Tap "Refresh" to sync — your manual edits to existing rows are preserved'
                    ]
                },
                {
                    title: 'Completing the Worksheet',
                    content: 'Fill in the required fields before marking complete:',
                    bullets: [
                        'Scope summary — Brief overview of the remedial work required',
                        'Engineers / days / hours — Estimated resource requirements',
                        'Customer signature — Optional but recommended for customer approval',
                        'Tap "Mark Complete" when finished'
                    ]
                },
                {
                    title: 'Best Practices for Engineers',
                    content: '',
                    bullets: [
                        'Be specific in defect descriptions — these appear in the customer quote',
                        'Always include location information (e.g., "Zone 3", "First Floor Corridor")',
                        'Use "Recommended Action" to suggest clear remedial steps',
                        'If you find additional defects after marking complete, log them and the office can manually add to the quote'
                    ]
                }
            ]
        },
        {
            id: 'office-workflow',
            title: 'For Office: Generating Bundled Quotes',
            content: 'Office staff turn completed remedial worksheets into professional quotes with a single click.',
            subsections: [
                {
                    title: 'Finding Completed Worksheets',
                    content: 'Completed Remedial Scope of Works worksheets appear in the job detail view:',
                    steps: [
                        { step: 'Navigate to the job detail page', description: '' },
                        { step: 'Scroll to Job Sheets section', description: '' },
                        { step: 'Look for "Remedial Scope of Works" row with green COMPLETED badge', description: '' },
                        { step: 'Hover over the row to reveal the "Generate Bundled Quote" button', description: '' }
                    ]
                },
                {
                    title: 'Generating the Quote',
                    content: 'Creating the bundled quote is a one-click operation:',
                    steps: [
                        { step: 'Click the green "Generate Bundled Quote" button', description: '' },
                        { step: 'A new quote is created with format "QT-YYYY-NNNN"', description: '' },
                        { step: 'Quote title: "Remedial Works"', description: '' },
                        { step: 'Line items: One per defect with description, location, and recommended action', description: '' },
                        { step: 'Navigate to Quotations to view and edit the draft quote', description: '' }
                    ]
                },
                {
                    title: 'Worksheet Status After Quoting',
                    content: 'Once a quote is generated, the worksheet row updates to show the linked quote.',
                    bullets: [
                        'Blue "Quoted" pill appears next to COMPLETED badge',
                        'Generate Quote button is replaced with a "View Quote" link',
                        'Clicking the link jumps directly to the quote detail page',
                        'If the quote is deleted, the Generate Quote button reappears'
                    ]
                },
                {
                    title: 'Editing and Sending the Quote',
                    content: 'After generation, customize the quote before sending to the customer:',
                    bullets: [
                        'Add pricing to each line item',
                        'Group related defects into single line items if preferred',
                        'Add or remove line items as needed',
                        'Include payment terms, validity period, and notes',
                        'Preview the customer-facing PDF',
                        'Send to customer via email or customer portal link'
                    ]
                },
                {
                    title: 'Best Practices for Office Staff',
                    content: '',
                    bullets: [
                        'Review the worksheet details before generating the quote',
                        'Check that all defects are reasonable and clearly described',
                        'Add detailed pricing — the defect list is just a starting point',
                        'Consider labor, materials, access requirements, and contingency',
                        'Use consistent pricing for similar defect types'
                    ]
                }
            ]
        },
        {
            id: 'refresh-feature',
            title: 'Refresh from Defects',
            content: 'The "Refresh from defects" feature keeps the worksheet in sync with newly logged defects without overwriting engineer edits.',
            subsections: [
                {
                    title: 'How It Works',
                    content: 'When new defects are logged after the worksheet is created, a blue banner appears at the top of the Defects in Scope section with a "Refresh" button.',
                    bullets: [
                        'Pulls any newly logged defects requiring a quote',
                        'Adds them to the bottom of the items list',
                        'Preserves manual edits to existing rows',
                        'New defects are marked with a blue "NEW" badge',
                        'Only available online (not offline mode)'
                    ]
                },
                {
                    title: 'When to Use',
                    content: 'Refresh is useful when:',
                    bullets: [
                        'Engineer discovers additional defects during the visit',
                        'Multiple engineers working on the same job log defects separately',
                        'Defects are logged after initial worksheet review',
                        'Return visit identifies new issues related to the original scope'
                    ]
                },
                {
                    title: 'Important Notes',
                    content: '',
                    bullets: [
                        'Refresh is optional — you can manually add rows instead',
                        'Once worksheet is marked COMPLETE, refresh is disabled',
                        'If a quote has been generated, new defects must be added to the quote manually'
                    ]
                }
            ]
        },
        {
            id: 'lifecycle',
            title: 'Worksheet and Quote Lifecycle',
            content: 'Understanding the status flow helps coordinate between field and office teams.',
            table: {
                headers: ['Status', 'What It Means', 'Who Can Edit', 'Next Action'],
                rows: [
                    ['DRAFT (worksheet)', 'Auto-generated when first defect logged', 'Engineer', 'Fill in scope details and mark complete'],
                    ['COMPLETED (worksheet)', 'Engineer has signed off on scope', 'Office (can reopen if needed)', 'Generate bundled quote'],
                    ['Quoted (worksheet)', 'Linked to a quote', 'N/A', 'Send quote to customer'],
                    ['Draft (quote)', 'Generated but not sent', 'Office', 'Add pricing and send to customer'],
                    ['Sent (quote)', 'Customer has received quote', 'Office (revisions allowed)', 'Wait for customer approval'],
                    ['Accepted (quote)', 'Customer approved', 'N/A', 'Schedule remedial work']
                ]
            }
        },
        {
            id: 'multiple-worksheets',
            title: 'Multiple Worksheets and Quotes',
            content: 'A single job can have multiple Remedial Scope of Works worksheets if needed.',
            subsections: [
                {
                    title: 'When Multiple Worksheets Make Sense',
                    content: '',
                    bullets: [
                        'First visit identifies urgent issues → quote immediately',
                        'Return visit finds additional issues → create second worksheet and quote',
                        'Different remedial work types (electrical vs fire) → separate worksheets',
                        'Phased work requiring separate approval stages'
                    ]
                },
                {
                    title: 'Creating Additional Worksheets',
                    content: 'To create a second worksheet:',
                    steps: [
                        { step: 'Mark the first worksheet as COMPLETE', description: '' },
                        { step: 'Generate the bundled quote for it', description: '' },
                        { step: 'Log new defects with "Quote required" checked', description: '' },
                        { step: 'A second "Remedial Scope of Works" worksheet auto-generates', description: '' },
                        { step: 'Repeat the process', description: '' }
                    ]
                },
                {
                    title: 'Important Notes',
                    content: '',
                    bullets: [
                        'Each worksheet can only be quoted once',
                        'Once quoted, new defects will NOT auto-attach to the existing worksheet',
                        'Office staff must manually add new defects to the existing quote or create a second quote'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Worksheet Not Appearing',
                    content: '',
                    bullets: [
                        'Check that defect has "Quote required for remedial work" checked',
                        'Verify the defect is not already linked to an existing worksheet or quote',
                        'Ensure the job is active (not cancelled or archived)',
                        'Refresh the job sheets list'
                    ]
                },
                {
                    title: 'Generate Quote Button Not Showing',
                    content: '',
                    bullets: [
                        'Worksheet must be marked COMPLETED (not DRAFT)',
                        'Worksheet must not already be linked to a quote',
                        'Check user permissions (requires Manager or Admin role)',
                        'Hover over the worksheet row — button appears on hover'
                    ]
                },
                {
                    title: 'Refresh Button Not Appearing',
                    content: '',
                    bullets: [
                        'No new defects have been logged since worksheet was created',
                        'All new defects are already in the worksheet',
                        'Worksheet is already marked COMPLETE (refresh disabled)',
                        'You are offline (refresh requires network connection)'
                    ]
                },
                {
                    title: 'Missing Defects in Scope',
                    content: '',
                    bullets: [
                        'Tap "Refresh from defects" to sync new defects',
                        'Check that defect has "Quote required" flag enabled',
                        'Verify defect was logged on the same job',
                        'If defect was logged after worksheet was marked complete, manually add to quote'
                    ]
                },
                {
                    title: 'Quote Generated with Wrong Defects',
                    content: '',
                    bullets: [
                        'The quote pulls defects from the worksheet at the moment of generation',
                        'If defects were logged after marking complete, they won\'t be included',
                        'Solution: Edit the quote manually to add missing line items, or reopen worksheet and regenerate'
                    ]
                }
            ]
        },
        {
            id: 'permissions',
            title: 'Permissions and Roles',
            table: {
                headers: ['Action', 'Admin', 'Manager', 'Engineer', 'Viewer'],
                rows: [
                    ['Log defects', '✅', '✅', '✅', '❌'],
                    ['Create worksheet (auto)', '✅', '✅', '✅', '❌'],
                    ['Edit draft worksheet', '✅', '✅', '✅', '❌'],
                    ['Mark worksheet complete', '✅', '✅', '✅', '❌'],
                    ['Reopen completed worksheet', '✅', '✅', '⚠️', '❌'],
                    ['Generate bundled quote', '✅', '✅', '❌', '❌'],
                    ['View worksheets', '✅', '✅', '✅', '✅'],
                    ['View quotes', '✅', '✅', '✅', '✅']
                ]
            },
            subsections: [
                {
                    title: 'Role Notes',
                    content: '',
                    bullets: [
                        '⚠️ Engineers can reopen worksheets only if they created them',
                        'Generating quotes requires Manager or Admin role to prevent accidental quote creation',
                        'Viewers have read-only access to all worksheets and quotes',
                        'Defect logging permissions are separate — configure in Settings > Permissions'
                    ]
                }
            ]
        },
        {
            id: 'related-features',
            title: 'Related Features',
            subsections: [
                {
                    title: 'Dashboard Widget Path (Alternative)',
                    content: 'If you prefer a faster workflow without worksheets, use the dashboard widget approach:',
                    bullets: [
                        'Dashboard shows "Jobs Pending Remedial Quotes" widget',
                        'Click a job card to create a bundled quote directly (no worksheet needed)',
                        'Less engineer involvement, no on-site scope sign-off',
                        'Best for straightforward remedial work where scope is clear from defect descriptions',
                        '<a href="/docs/defects-to-quotation" class="text-blue-600 hover:underline">Learn more: Defects to Quotation Guide</a>'
                    ]
                },
                {
                    title: 'Deficiency Logs (Fire Safety)',
                    content: 'Fire alarm service certificates include a Deficiency Log section for recording issues found during testing. These deficiencies can also trigger remedial quotes but follow a different workflow.',
                    bullets: [
                        'Logged within the Fire Alarm Service Certificate',
                        'Can be flagged for quote generation',
                        'Appear in Defects dashboard like other defects'
                    ]
                },
                {
                    title: 'EICR Observations (Electrical)',
                    content: 'EICR certificates include observations (C1, C2, C3 codes). These can be turned into remedial quotes using a similar bundled approach.',
                    bullets: [
                        'Learn more: /docs/certificates (EICR Defect-to-Quote Pipeline section)'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Defects to Quotation',
            description: 'Converting individual defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Certificates',
            description: 'Issuing certificates after remedial work',
            href: '/docs/certificates'
        },
        {
            title: 'Field Service App',
            description: 'Engineers completing remedial site visits',
            href: '/docs/field-service'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'Converting scope of works into invoices',
            href: '/docs/quote-to-invoice-workflow'
        }
    ]
};
