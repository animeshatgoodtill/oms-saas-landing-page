import { IDocGuide } from '@/types';

export const quoteToInvoiceWorkflowGuide: IDocGuide = {
    slug: 'quote-to-invoice-workflow',
    title: 'How Quotes, Jobs and Invoices Work Together',
    description: 'Complete end-to-end workflow guide: understand how quotes, jobs, and invoices connect. Learn the two invoice paths (Fixed-Price vs. T&M), deposit handling, and Good-Better-Best tier selection.',
    lastUpdated: '2026-05-19',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <p class="text-lg text-muted-foreground mb-6">
                    Opscel is built around a single end-to-end workflow: <strong>Quote → Job → Invoice</strong>. Here's exactly how the three fit together.
                </p>
                <p class="mb-6">
                    Understanding this workflow is essential because the system treats quote-originated jobs differently from standalone jobs when creating invoices. A £10k accepted quote becomes a £10k invoice—the system respects the contract price, not just the parts and labour actuals.
                </p>
            `
        },
        {
            id: 'the-quote',
            title: '1. The Quote',
            content: `
                <p class="mb-6">
                    A quote is an agreement you send to a customer before work begins. It sets out exactly what will be done and what it will cost.
                </p>
            `,
            subsections: [
                {
                    title: 'Creating a quote',
                    content: 'Go to Quotations → New Quote. The 3-step wizard walks you through:',
                    bullets: [
                        'Selecting the customer and site address',
                        'Adding a title, description, validity period and your line items (labour, materials, services)',
                        'Reviewing the total before saving as a draft'
                    ]
                },
                {
                    title: 'Good-Better-Best pricing',
                    content: 'If you want to offer the customer a choice of scope, switch the quote to tiered mode. You define up to three option tiers (e.g. Basic Repair / Full Service / Full Service + Warranty). Each tier has its own set of line items and price. The customer picks one on the portal.'
                },
                {
                    title: 'Discounts and markup',
                    content: 'Apply a percentage or fixed discount at quote level. Individual line items can carry a markup percentage — the marked-up price is what the customer sees; your cost price stays internal.'
                },
                {
                    title: 'Sending to the customer',
                    content: 'Click Send Quote. The customer receives an email with a secure link to their own portal page. No account required — the link is unique to their quote.'
                },
                {
                    title: 'On the customer portal',
                    content: 'The customer can:',
                    bullets: [
                        'Read the full quote including all line items',
                        'Select a tier (if Good-Better-Best)',
                        'Accept or decline with a typed signature',
                        'Pay a deposit by card if one is configured'
                    ]
                },
                {
                    title: 'After acceptance',
                    content: 'The moment the customer accepts:',
                    bullets: [
                        'The quote status updates to Accepted',
                        'If a deposit was configured, a deposit invoice is automatically created and sent',
                        'The accepted quote is ready to be converted to a job'
                    ]
                }
            ]
        },
        {
            id: 'the-job',
            title: '2. The Job',
            content: `
                <p class="mb-6">
                    A job is the operational record of the work being done on site. It is created from an accepted quote (or directly, for time-and-materials work).
                </p>
            `,
            subsections: [
                {
                    title: 'Converting an accepted quote to a job',
                    content: 'Open the accepted quote and click Convert to Job. Opscel copies the customer, site address, and job title across. The job is linked back to the original quote — this link is used later when raising the invoice.'
                },
                {
                    title: 'What the engineer sees',
                    content: 'Engineers access jobs through the Field App. They can view the job details and scheduled visit but cannot see any monetary values from the quote. Prices, totals, and deposit amounts are hidden from engineer-level accounts.'
                },
                {
                    title: 'During the job',
                    content: 'The engineer logs:',
                    bullets: [
                        'Parts used — selected from the product catalogue, with quantities',
                        'Time — recorded automatically from check-in / check-out, or entered manually',
                        'Defects — any remedial work identified on site'
                    ]
                },
                {
                    title: 'Completing the job',
                    content: 'When work is done the engineer marks the job as complete and submits a work summary of what was carried out on site. This narrative appears in the PDF work log.'
                }
            ]
        },
        {
            id: 'the-invoice',
            title: '3. The Invoice',
            content: `
                <p class="mb-6">
                    Once a job is marked complete, the office creates the invoice.
                </p>
                <h3 class="text-lg font-semibold mb-3">Opening Create Invoice</h3>
                <p class="mb-6">
                    Go to the job's Financial tab and click Create Invoice. Opscel detects whether the job came from a quote or was a standalone job, and shows the right workflow automatically.
                </p>
            `
        },
        {
            id: 'fixed-price-path',
            title: 'If the job came from a quote (Fixed-Price path)',
            content: `
                <p class="mb-6">
                    This is the most common flow. The dialog pre-fills every line item exactly as the customer agreed — description, quantity, unit price, and VAT — pulled directly from the accepted quote. If the customer chose a tier on the portal, only the items from their chosen tier appear.
                </p>
            `,
            subsections: [
                {
                    title: 'Step 1 — Review and edit line items',
                    content: 'All agreed items are shown in an editable table. You can:',
                    bullets: [
                        'Change a description, quantity or price before invoicing (e.g. a scope change agreed verbally)',
                        'Delete a line you no longer want to include',
                        'Add a custom line item for anything not in the original quote'
                    ]
                },
                {
                    title: 'Engineer extras',
                    content: 'Below the agreed scope you\'ll also see any additional items from the engineer — parts logged during the job. Tick the ones you want to include; untick any that shouldn\'t be charged.'
                },
                {
                    title: 'Step 2 — Review totals',
                    content: `
                        <p class="mb-4">
                            A read-only summary shows subtotal, VAT, and total. If the customer paid a deposit when they accepted the quote, it appears here as a deduction and the Amount Due reflects what still needs to be collected.
                        </p>
                        <p class="mb-4">
                            Click Create Invoice and a draft invoice is created with all the correct line items.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'time-materials-path',
            title: 'If the job has no source quote (Time & Materials path)',
            content: `
                <p class="mb-6">
                    Use the 4-step wizard to build the invoice from actuals:
                </p>
            `,
            subsections: [
                {
                    title: 'Step 1: Labour',
                    content: 'Choose whether to include labour; the rate defaults to your configured hourly rate; the hours come from the engineer\'s check-in/check-out time'
                },
                {
                    title: 'Step 2: Parts',
                    content: 'Include or exclude the parts the engineer logged; any parts with no price set are flagged so you can review before invoicing'
                },
                {
                    title: 'Step 3: Callout fee',
                    content: 'Optionally add a fixed callout or travel charge'
                },
                {
                    title: 'Step 4: Review',
                    content: 'Review subtotal, VAT, total, and amount due before creating the invoice'
                }
            ]
        },
        {
            id: 'invoice-statuses',
            title: 'Invoice Statuses',
            table: {
                headers: ['Status', 'Meaning'],
                rows: [
                    ['Draft', 'Created but not yet sent — fully editable'],
                    ['Posted', 'Sent / pushed to Xero — locked for editing'],
                    ['Paid', 'Payment recorded in full'],
                    ['Partially Paid', 'Some payment received'],
                    ['Voided', 'Cancelled — kept for audit trail']
                ]
            }
        },
        {
            id: 'deposit-invoices',
            title: 'Deposit Invoices',
            content: `
                <p class="mb-6">
                    When a quote has a deposit configured (fixed amount or percentage of the total), a deposit invoice is created automatically the moment the customer accepts. This is separate from the final invoice. When the final invoice is created, the deposit already paid is shown as a deduction so the customer only pays the remaining balance.
                </p>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p class="text-sm text-blue-900">
                        <strong>💡 Example:</strong> Quote for £10,000 with 20% deposit. Customer accepts and pays £2,000 deposit (deposit invoice auto-created). Job completes, you create final invoice. System shows £10,000 total minus £2,000 deposit paid = £8,000 amount due.
                    </p>
                </div>
            `
        },
        {
            id: 'xero-integration',
            title: 'Xero Integration',
            content: `
                <p class="mb-6">
                    Draft invoices can be pushed to Xero with one click from the invoice detail page. Line item categories map automatically to your Xero account codes. Once pushed, the invoice status updates to Posted and is locked against further edits in Opscel (edits should be made in Xero from that point).
                </p>
            `
        },
        {
            id: 'quick-reference',
            title: 'Quick Reference: What Flows Where',
            content: `
                <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 font-mono text-sm">
                    <pre class="whitespace-pre-wrap">
Customer accepts quote
        │
        ├─► Deposit invoice auto-created (if deposit configured)
        │
        └─► Convert to job
                │
                └─► Engineer completes work
                    (logs parts used + time, hidden from engineer: prices)
                         │
                         └─► Office: Create Invoice from job
                             │
                             ├─ Quote path: agreed line items pre-filled
                             │  + engineer extras as optional additions
                             │  + deposit deducted automatically
                             │
                             └─ T&M path: labour + parts + callout
                                built from actuals
                    </pre>
                </div>
            `
        },
        {
            id: 'key-differences',
            title: 'Key Differences: Fixed-Price vs. Time & Materials',
            table: {
                headers: ['Aspect', 'Fixed-Price (from Quote)', 'Time & Materials (Standalone)'],
                rows: [
                    ['Invoice creation', '2-step review dialog', '4-step wizard'],
                    ['Line items source', 'Agreed quote line items', 'Labour + parts logged by engineer'],
                    ['Pricing', 'Contract price respected', 'Built from actuals (hours × rate, part costs)'],
                    ['Deposit handling', 'Auto-deducted if deposit paid', 'N/A — no quote, no deposit'],
                    ['Engineer extras', 'Optional additions (checkboxes)', 'Core invoice content'],
                    ['Good-Better-Best', 'Tier selection flows through', 'N/A — no quote tiers'],
                    ['When to use', 'Customer approved scope + price upfront', 'Emergency calls, hourly work, no pre-agreed price']
                ]
            }
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'For Quote-Originated Jobs',
                    content: '',
                    bullets: [
                        'Review engineer extras carefully — they add to the agreed price, so justify them to the customer if questioned',
                        'If scope changed on-site, edit the agreed line items before invoicing (description or quantity)',
                        'Don\'t delete agreed items without customer approval — they accepted that scope',
                        'If deposit was paid, verify it shows as a deduction before sending final invoice'
                    ]
                },
                {
                    title: 'For Time & Materials Jobs',
                    content: '',
                    bullets: [
                        'Ensure engineer logged all parts used on-site — missing parts = lost revenue',
                        'Check parts have prices set before invoicing — wizard flags items with no price',
                        'Verify labour hours are accurate (check-in/out times can be edited if GPS was wrong)',
                        'Add callout fee if applicable — emergency calls, out-of-hours work, long travel distance'
                    ]
                },
                {
                    title: 'General',
                    content: '',
                    bullets: [
                        'Invoice same day as job completion — customer expects it while work is fresh in their mind',
                        'Use draft status to review with colleagues before sending',
                        'Push to Xero early — synced invoices track payment status automatically',
                        'If invoice needs major changes after posting to Xero, void it and create new one (or edit in Xero)'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Invoice doesn\'t show agreed quote line items',
                    content: '',
                    bullets: [
                        'Check the job is actually linked to an accepted quote (Job Detail → Source Quote field)',
                        'Verify quote status is "Accepted" not "Draft" or "Sent"',
                        'If Good-Better-Best quote, ensure customer selected a tier before accepting',
                        'Try refreshing the Create Invoice dialog'
                    ]
                },
                {
                    title: 'Deposit not showing as deduction',
                    content: '',
                    bullets: [
                        'Check a deposit invoice was actually created (Invoices → filter by customer)',
                        'Verify deposit invoice status is "Paid" not "Draft" or "Sent"',
                        'Ensure deposit invoice is linked to the same quote (Invoice Detail → Source Quote)',
                        'If deposit invoice exists but not deducted, contact support'
                    ]
                },
                {
                    title: 'Engineer parts not appearing in Fixed-Price path',
                    content: '',
                    bullets: [
                        'Engineer must mark job complete first (parts only show after completion)',
                        'Parts must be logged on the correct job (check Job Detail → Parts Used tab)',
                        'Refresh the Create Invoice dialog to pull latest parts',
                        'Parts appear below agreed scope as optional extras — scroll down to see them'
                    ]
                },
                {
                    title: 'Wrong tier items showing in invoice',
                    content: '',
                    bullets: [
                        'Check which tier customer selected (Quote Detail → Customer Selection)',
                        'System pulls only the tier they chose — verify it\'s the right one',
                        'If customer selected wrong tier, ask them to decline and re-accept with correct tier',
                        'Or manually edit invoice line items to match correct tier before sending'
                    ]
                },
                {
                    title: 'T&M wizard showing instead of Fixed-Price dialog',
                    content: '',
                    bullets: [
                        'Job likely not linked to a quote (created as standalone)',
                        'Check Job Detail → Source Quote field — if empty, job is T&M',
                        'Cannot convert T&M job to Fixed-Price retroactively',
                        'To avoid: always Convert to Job from accepted quote, don\'t create job manually'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Certificates',
            description: 'Issuing certificates with completed jobs',
            href: '/docs/certificates'
        },
        {
            title: 'Defects to Quotation',
            description: 'Converting defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Customer Portal',
            description: 'Customers approving quotes and viewing invoices',
            href: '/docs/customer-portal'
        },
        {
            title: 'Field Service App',
            description: 'Engineers completing the jobs that become invoices',
            href: '/docs/field-service'
        },
        {
            title: 'Service Contracts',
            description: 'Upgrade an accepted quote to a recurring service contract',
            href: '/docs/service-contracts'
        }
    ]
};
