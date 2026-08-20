import { IDocGuide } from '@/types';

export const quotationsGuide: IDocGuide = {
    title: 'Quotations Overview',
    description: 'Create professional quotes, manage customer acceptance, and convert quotes to jobs. Track quote performance with analytics and streamline your sales workflow.',
    slug: 'quotations',
    lastUpdated: '2026-08-13',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>30-Second Version:</strong> Opscel\'s quotation system lets you create professional quotes from scratch, from completed jobs, or from EICR defects. Send quotes via email or customer portal, and track acceptance/rejection. Accepted quotes convert to a job in one click, with every detail carried over — no re-typing. Business tier adds quote analytics for conversion tracking. Available to Admins, Contract Managers, and Accounts. (Site Manager and Engineer roles don\'t have quote access.)',
                },
                {
                    title: 'Key Benefits',
                    bullets: [
                        '<strong>Professional presentation:</strong> Branded PDF quotes with cover pages, line items, and T&Cs',
                        '<strong>Customer self-service:</strong> Customers can accept/reject quotes via portal - no back-and-forth emails',
                        '<strong>One-click job creation:</strong> Convert an accepted quote to a job with all data carried forward - no re-typing',
                        '<strong>Defect-to-quote workflow:</strong> Generate remedial quotes directly from EICR observations',
                        '<strong>Quote analytics (Business tier):</strong> Track conversion rates, win/loss ratios, and average quote values',
                        '<strong>Deposit handling:</strong> Require deposits on acceptance, integrated with Stripe (Team &amp; Business plans)',
                    ],
                },
                {
                    title: 'Quote Lifecycle',
                    content: 'Quotes move through stages: <strong>Draft</strong> (being prepared) → <strong>Sent</strong> (awaiting customer decision) → <strong>Accepted</strong> (customer approved) or <strong>Rejected</strong> (customer declined) → <strong>Converted to Job</strong> (if accepted) or <strong>Expired</strong> (validity period passed).',
                },
            ],
        },
        {
            id: 'creating-quotes',
            title: 'Creating Quotes',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager, Accounts',
                },
                {
                    title: 'Three Ways to Create Quotes',
                    content: 'Opscel offers three methods for quote creation, depending on your workflow.',
                },
                {
                    title: 'Method 1: From Scratch',
                    content: 'Create a blank quote and manually add line items. Best for custom jobs or when you don\'t have prior job data.',
                },
                {
                    title: 'Steps to Create Quote from Scratch',
                    steps: [
                        'Navigate to <strong>Sales → Quotes</strong>',
                        'Click <strong>+ New Quote</strong>',
                        'Select or create a <strong>Customer</strong>',
                        'Choose a <strong>Site Address</strong> (or add new address)',
                        'Enter <strong>Quote Title</strong> (e.g., "Electrical Installation - Kitchen Rewire")',
                        'Set <strong>Validity Period</strong> (default: 30 days)',
                        'Add <strong>Line Items</strong> (see Line Items section below)',
                        'Review totals (subtotal, VAT, grand total)',
                        'Click <strong>Save as Draft</strong> or <strong>Send to Customer</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Quote appears in your Quotes list with <strong>Draft</strong> status. Quote number is auto-assigned (e.g., QUO-00123). Customer receives email notification if you chose "Send to Customer".',
                },
                {
                    title: 'Method 2: From Completed Job',
                    content: 'Generate a quote based on actual work performed. Useful for offering similar services to the same or different customers.',
                },
                {
                    title: 'Steps to Create Quote from Job',
                    steps: [
                        'Navigate to <strong>Jobs → All Jobs</strong>',
                        'Open a completed job',
                        'Click <strong>Actions → Create Quote from Job</strong>',
                        'Opscel pre-fills line items based on job parts and labour',
                        'Adjust pricing if needed (markup, discounts)',
                        'Change customer if quoting for a different client',
                        'Review and click <strong>Save as Draft</strong> or <strong>Send</strong>',
                    ],
                },
                {
                    title: 'Method 3: From EICR Defects (Remedial Quotes)',
                    content: 'Automatically generate quotes from EICR observations. Each defect (C1, C2, C3, FI) becomes a line item with suggested pricing.',
                },
                {
                    title: 'Steps to Create Remedial Quote',
                    steps: [
                        'Complete an EICR certificate with observations',
                        'On the certificate detail page, click <strong>Generate Remedial Quote</strong>',
                        'Opscel creates a draft quote with one line item per observation',
                        'Each line item shows: defect code, description, location, suggested remedy',
                        'Adjust pricing for each remedy',
                        'Add labour costs (auto-estimated based on defect severity)',
                        'Review totals and click <strong>Send to Customer</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Quote is linked to the parent EICR certificate. Customer sees defects grouped by severity (C1 urgent, C2 potentially dangerous, etc.) in the quote PDF. Once accepted, convert the remedial work to a job in one click — the defect details carry over, so there\'s nothing to re-enter.',
                },
                {
                    title: 'For Office Staff',
                    content: '<em>Tip:</em> When creating remedial quotes, use the "Bundle Defects" option to group similar defects (e.g., all socket replacements) into one line item. This makes quotes cleaner and easier for customers to understand. See the <a href="/docs/remedial-scope-of-works" class="text-secondary hover:underline">Bundled Remedial Quotes guide</a> for details.',
                },
            ],
        },
        {
            id: 'quote-templates',
            title: 'Quote Templates',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Customizing Quote Templates',
                    content: 'Quote templates control the PDF layout, cover page, and terms & conditions. Customize once in Settings, and all future quotes use your template.',
                },
                {
                    title: 'Steps to Customize Template',
                    steps: [
                        'Go to <strong>Settings → Document Configuration → Quote Templates</strong>',
                        'Toggle <strong>Include Cover Page</strong> (recommended: ON)',
                        'Upload <strong>Cover Image</strong> (optional - e.g., team photo, branded banner)',
                        'Edit <strong>Terms & Conditions</strong> (plain text or HTML)',
                        'Set default <strong>Payment Terms</strong> (e.g., "Net 30", "50% deposit required")',
                        'Toggle <strong>Show Pricing Breakdown</strong> (materials vs labour)',
                        'Set <strong>Validity Period</strong> default (7, 14, 30, 60, 90 days)',
                        'Click <strong>Preview Quote</strong> to see sample PDF',
                        'Click <strong>Save Template</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Preview PDF shows: cover page with logo and cover image, line items with pricing, subtotal/VAT/total, and T&Cs on final page. Quotes created after this update will use the new template.',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Keep T&Cs concise (under 500 words). Long legal text pushes quotes to extra pages. Instead, link to a full T&Cs page on your website: "Full terms available at www.yourcompany.com/terms".',
                },
            ],
        },
        {
            id: 'line-items-pricing',
            title: 'Line Items & Pricing',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager, Accounts',
                },
                {
                    title: 'Adding Line Items',
                    content: 'Line items are the building blocks of quotes. Each line represents a product, service, or labour charge.',
                },
                {
                    title: 'Steps to Add Line Items',
                    steps: [
                        'In the quote editor, click <strong>+ Add Line Item</strong>',
                        'Enter <strong>Description</strong> (e.g., "Consumer Unit Replacement - 10-way Hager board")',
                        'Select <strong>Type</strong>: Material, Labour, or Service',
                        'Enter <strong>Quantity</strong> and <strong>Unit</strong> (e.g., 2 units, 5 hours)',
                        'Enter <strong>Unit Price</strong> (ex-VAT)',
                        'Opscel auto-calculates <strong>Line Total</strong> (Quantity × Unit Price)',
                        'Apply <strong>Markup</strong> if needed (percentage or fixed amount)',
                        'Apply <strong>Discount</strong> if needed (percentage or fixed amount)',
                        'Repeat for all line items',
                        'Review <strong>Subtotal</strong>, <strong>VAT</strong>, and <strong>Grand Total</strong> at bottom',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Line items appear in a table. Subtotal updates automatically as you add items. VAT is calculated based on your company VAT settings (default: 20% UK VAT). Grand total = Subtotal + VAT.',
                },
                {
                    title: 'Materials vs Labour vs Service',
                    table: {
                        headers: ['Type', 'Use For', 'Example'],
                        rows: [
                            ['Material', 'Physical products, parts, supplies', 'Consumer unit, cable, sockets, switches'],
                            ['Labour', 'Time-based work, installation, testing', 'Electrician time (5 hours @ £45/hr)'],
                            ['Service', 'Fixed-price services, call-outs', 'Emergency call-out fee, annual service contract'],
                        ],
                    },
                },
                {
                    title: 'Markup and Discount Logic',
                    bullets: [
                        '<strong>Markup:</strong> Applied to cost price to get sell price. E.g., £50 cost + 30% markup = £65 sell price.',
                        '<strong>Discount:</strong> Applied to sell price. E.g., £65 sell price - 10% discount = £58.50 final price.',
                        '<strong>Combined:</strong> Markup first, then discount. E.g., £50 + 30% markup = £65, then -10% = £58.50.',
                    ],
                },
                {
                    title: 'VAT Handling',
                    content: 'All prices are entered <strong>ex-VAT</strong>. Opscel automatically adds VAT at the rate configured in Settings (default: 20% UK standard rate). You can override VAT rate per line item for reduced rate or zero-rated items.',
                },
                {
                    title: 'For Office Staff',
                    content: '<em>Tip:</em> Use the "Duplicate Line Item" button to quickly add similar items (e.g., multiple sockets at same price). This saves time on large quotes with repetitive line items.',
                },
            ],
        },
        {
            id: 'tiered-pricing',
            title: 'Good-Better-Best Pricing',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager, Accounts',
                },
                {
                    title: 'Building a Tiered Quote',
                    content: 'Instead of a single take-it-or-leave-it price, present the customer with 2-3 options side-by-side — for example Essential, Standard, and Premium. The customer picks the tier that fits their budget directly from the approval portal.',
                },
                {
                    title: 'Steps to Add Pricing Tiers',
                    steps: [
                        'Open a quote (draft or in progress)',
                        'Click <strong>Add Pricing Tiers</strong>',
                        'Name each tier — for example <strong>Good</strong>, <strong>Better</strong>, <strong>Best</strong>, or your own naming',
                        'Add line items to each tier separately — a tier\'s price is the sum of its own line items',
                        'Mark one tier as <strong>Recommended</strong> so it\'s highlighted for the customer',
                        'Add at least 2 tiers, up to 3',
                        'Click <strong>Save as Draft</strong> or <strong>Send to Customer</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'The quote PDF and customer portal show all tiers side-by-side with their own line items and totals, with the recommended tier visually highlighted. When the customer accepts, they select one tier — that tier\'s total becomes the quote\'s accepted value.',
                },
            ],
        },
        {
            id: 'sending-quotes',
            title: 'Sending Quotes',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager, Accounts',
                },
                {
                    title: 'How to Send Quotes to Customers',
                    content: 'Once a quote is ready, send it via email with a customer portal link for easy acceptance/rejection.',
                },
                {
                    title: 'Steps to Send Quote',
                    steps: [
                        'Open the quote in <strong>Draft</strong> status',
                        'Click <strong>Preview PDF</strong> to review (optional)',
                        'Click <strong>Send to Customer</strong>',
                        'Confirm customer email address (auto-filled from customer record)',
                        'Optionally edit email subject and message',
                        'Click <strong>Send Now</strong>',
                        'Quote status changes to <strong>Sent</strong>',
                        'Customer receives email with PDF attachment and portal link',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Quote status changes to <strong>Sent</strong>. A green checkmark appears next to "Sent to customer on [date]". Customer sees the quote in their customer portal and can accept/reject online.',
                },
                {
                    title: 'Email Content',
                    content: 'The customer receives an email with: quote PDF attachment, link to accept/reject in portal, validity period reminder, your contact details for questions.',
                },
                {
                    title: 'For Office Staff',
                    content: '<em>Tip:</em> Always preview the PDF before sending. Check for pricing errors, typos, and ensure logo/branding looks correct. Once sent, quotes cannot be edited - you\'ll need to void and resend if changes are needed.',
                },
            ],
        },
        {
            id: 'customer-acceptance',
            title: 'Customer Acceptance/Rejection',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans (customer portal access)<br><strong>Roles:</strong> Customer (via portal)',
                },
                {
                    title: 'Customer Portal Workflow',
                    content: 'Customers can accept or reject quotes via the customer portal - no email replies needed. This streamlines the sales process and creates a clear audit trail.',
                },
                {
                    title: 'What Happens When Customer Accepts',
                    steps: [
                        'Customer clicks portal link in email',
                        'Reviews quote details and line items',
                        'Clicks <strong>Accept Quote</strong>',
                        'If deposit required: redirected to Stripe payment page (Team &amp; Business plans)',
                        'After acceptance (and payment if required): quote status changes to <strong>Accepted</strong>',
                        'Opscel sends confirmation email to customer and office team',
                        'Quote becomes available for conversion to job',
                    ],
                },
                {
                    title: 'What Happens When Customer Rejects',
                    steps: [
                        'Customer clicks <strong>Reject Quote</strong>',
                        'Optionally provides rejection reason (free text)',
                        'Quote status changes to <strong>Rejected</strong>',
                        'Office team receives notification with rejection reason',
                        'Quote can be cloned and resent with adjustments',
                    ],
                },
                {
                    title: 'Acceptance Notification',
                    content: 'When a quote is accepted, Opscel sends notifications to: office email (hello@yourcompany.com), assigned manager, customer (confirmation email). Rejected quotes notify the office team only.',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Set up Slack or Telegram notifications (Settings → Integrations) to get instant alerts when quotes are accepted. This lets you schedule jobs immediately without checking email.',
                },
            ],
        },
        {
            id: 'converting-to-job',
            title: 'Converting Quote to Job',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager',
                },
                {
                    title: 'Converting Is a One-Click, Manual Step',
                    content: 'Accepting a quote doesn\'t create a job by itself — converting is a deliberate step a staff member takes afterward, by opening the accepted quote and clicking <strong>Convert to Job</strong>. This gives you a chance to review before scheduling. It\'s not extra data entry, though: every detail from the quote carries over automatically, so there\'s nothing to re-type.',
                },
                {
                    title: 'Steps to Convert Quote to Job',
                    steps: [
                        'Navigate to <strong>Sales → Quotes</strong>',
                        'Filter by <strong>Accepted</strong> status',
                        'Open the accepted quote',
                        'Click <strong>Convert to Job</strong>',
                        'The dialog opens with <strong>Job type</strong>, <strong>Service type</strong>, and <strong>Contract manager</strong> fields, plus an optional <strong>PO number</strong> input (e.g. <em>PO-4821</em>) — enter the customer\'s purchase order here if they\'ve supplied one',
                        'Opscel creates a draft job with: customer, site address, job description (from quote title), expected revenue (quote total), line items (in job notes), and the PO number if you entered one',
                        'Schedule the job (assign engineer, set date)',
                        'Click <strong>Save Job</strong>',
                        'Quote status changes to <strong>Converted to Job</strong>',
                        'Job detail page shows link back to parent quote',
                    ],
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900">Quotes themselves don\'t have a PO number field — <strong>conversion is the first point at which one can be recorded</strong> for this piece of work. If the customer gives you a PO before the quote is accepted, hold onto it and enter it at this step.</p></div>',
                },
                {
                    title: 'What You Should See',
                    content: 'New job appears in Jobs list with status <strong>Draft</strong>. Job is linked to the quote (visible in "Related Documents"). Quote shows "Converted to Job #12345" badge. Line items from quote are copied to job notes for engineer reference.',
                },
                {
                    title: 'Data Carry-Forward',
                    bullets: [
                        '<strong>Customer & site address:</strong> Copied from quote',
                        '<strong>Job description:</strong> Uses quote title',
                        '<strong>Expected revenue:</strong> Set to quote grand total',
                        '<strong>Line items:</strong> Copied to job notes (not job parts - engineer adds parts during work)',
                        '<strong>Special instructions:</strong> Quote notes copied to job instructions',
                        '<strong>PO number:</strong> Only what you type in the conversion dialog — not carried from anywhere, since quotes don\'t have this field',
                    ],
                },
                {
                    title: 'For Contract Managers',
                    content: '<em>Tip:</em> There\'s little reason to delay converting once a quote is accepted — the job pulls in every quote detail (customer, site, line items) automatically, so converting promptly doesn\'t cost you any extra data entry.',
                },
            ],
        },
        {
            id: 'deposits-payments',
            title: 'Deposits & Payments',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> Team &amp; Business (Stripe integration required)<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Requiring Deposits on Quote Acceptance',
                    content: 'Opscel integrates with Stripe to collect deposits when customers accept quotes. This secures commitment and reduces no-shows.',
                },
                {
                    title: 'Steps to Enable Deposit Payments',
                    steps: [
                        'Connect Stripe account (Settings → Integrations → Stripe)',
                        'Go to <strong>Settings → Sales → Quote Defaults</strong>',
                        'Toggle <strong>Require Deposit on Acceptance</strong> ON',
                        'Set <strong>Deposit Amount</strong>: Fixed amount (£X) or Percentage (X%)',
                        'Set <strong>Deposit Description</strong> (appears on Stripe payment page)',
                        'Click <strong>Save Settings</strong>',
                        'Future quotes will require deposit on acceptance',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'When customer accepts quote, they\'re redirected to Stripe payment page. After successful payment, quote status changes to <strong>Accepted & Paid</strong>. Payment confirmation appears in quote detail page. Deposit amount is recorded against the job (reduces final invoice amount).',
                },
                {
                    title: 'Deposit Handling on Invoice',
                    content: 'When you invoice the completed job, Opscel automatically subtracts the deposit from the total. E.g., £1,000 job - £200 deposit = £800 invoice balance due.',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Set deposit percentage based on job value. Small jobs (under £500): 25-50% deposit. Large jobs (over £2,000): 10-25% deposit. This balances cash flow with customer willingness to pay upfront.',
                },
            ],
        },
        {
            id: 'quote-analytics',
            title: 'Quote Analytics (Business Tier)',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> Business<br><strong>Roles:</strong> Super Admin, Admin, Contract Manager',
                },
                {
                    title: 'Tracking Quote Performance',
                    content: 'Quote analytics help you understand sales performance, identify bottlenecks, and optimize pricing. Available in the Reports section.',
                },
                {
                    title: 'Steps to View Quote Analytics',
                    steps: [
                        'Navigate to <strong>Reports → Quotations Report</strong>',
                        'Select date range (this month, this quarter, custom)',
                        'View key metrics: Total quotes sent, Acceptance rate (%), Rejection rate (%), Average quote value, Total revenue from accepted quotes',
                        'Filter by: Engineer, Customer, Quote status, Date range',
                        'Click <strong>Export to CSV</strong> for detailed analysis',
                    ],
                },
                {
                    title: 'Key Metrics Explained',
                    table: {
                        headers: ['Metric', 'What It Measures', 'Good Target'],
                        rows: [
                            ['Acceptance Rate', 'Percentage of sent quotes that are accepted', '40-60% (varies by industry)'],
                            ['Average Quote Value', 'Mean value of all quotes', 'Track trends - should increase over time'],
                            ['Conversion Time', 'Days from sent to accepted', 'Under 7 days (faster is better)'],
                            ['Win/Loss Ratio', 'Accepted quotes vs rejected quotes', 'Above 1.0 (more wins than losses)'],
                        ],
                    },
                },
                {
                    title: 'For Managers',
                    content: '<em>Tip:</em> If acceptance rate is below 30%, your quotes may be overpriced or unclear. Review rejected quote reasons (customer feedback) and adjust pricing or presentation. Consider offering tiered quotes (good/better/best options) to increase acceptance.',
                },
            ],
        },
        {
            id: 'bundled-remedial',
            title: 'Bundled Remedial Quotes',
            subsections: [
                {
                    title: 'When to Use Bundled Quotes',
                    content: 'For EICR remedial work with many similar defects (e.g., 10 socket replacements, 5 bonding upgrades), bundle defects into grouped line items for cleaner quotes.',
                },
                {
                    content: 'See the <a href="/docs/remedial-scope-of-works" class="text-secondary hover:underline"><strong>Bundled Remedial Quotes guide</strong></a> for detailed instructions on grouping defects, pricing bundled work, and presenting remedial quotes to customers.',
                },
            ],
        },
        {
            id: 'quote-status-workflow',
            title: 'Quote Status Workflow',
            subsections: [
                {
                    title: 'Quote Lifecycle Statuses',
                    content: 'Quotes move through the following statuses:',
                },
                {
                    table: {
                        headers: ['Status', 'Meaning', 'Next Action'],
                        rows: [
                            ['Draft', 'Quote is being prepared, not yet sent', 'Review and send to customer'],
                            ['Sent', 'Quote sent to customer, awaiting decision', 'Wait for customer response or follow up'],
                            ['Accepted', 'Customer accepted quote', 'Convert to job and schedule work'],
                            ['Rejected', 'Customer declined quote', 'Review rejection reason, adjust, and resend if appropriate'],
                            ['Expired', 'Validity period passed without decision', 'Contact customer or mark as lost'],
                            ['Converted to Job', 'Quote accepted and job created', 'Complete the job and invoice'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Quote Won\'t Send - Email Fails',
                    content: '<strong>Cause:</strong> Invalid customer email address or email service issue.<br><strong>Fix:</strong> Verify customer email is correct (no typos). Check spam/junk folder. If issue persists, download PDF and send manually via your email client.',
                },
                {
                    title: 'Customer Can\'t Accept Quote - Portal Link Broken',
                    content: '<strong>Cause:</strong> Quote expired, or customer portal access disabled.<br><strong>Fix:</strong> Check quote validity period (Settings → Quote Templates). If expired, extend validity and resend. Verify customer portal is enabled (Settings → Customer Portal → Enable Portal).',
                },
                {
                    title: 'Pricing Totals Don\'t Match Expected',
                    content: '<strong>Cause:</strong> VAT calculation issue, or discount/markup applied incorrectly.<br><strong>Fix:</strong> Verify VAT rate (default: 20%). Check each line item for correct unit price and quantity. Review markup/discount percentages. Use calculator to manually verify subtotal + VAT = grand total.',
                },
                {
                    title: 'Quote PDF Shows Wrong Logo or Branding',
                    content: '<strong>Cause:</strong> Branding cache, or quote generated before branding update.<br><strong>Fix:</strong> PDFs are immutable once sent. To update branding on an existing quote: Clone the quote, regenerate PDF (picks up new branding), and resend. See <a href="/docs/branding" class="text-secondary hover:underline">Branding guide</a>.',
                },
                {
                    title: 'Cannot Convert Quote to Job - Button Disabled',
                    content: '<strong>Cause:</strong> Quote not in Accepted status, or insufficient permissions.<br><strong>Fix:</strong> Verify quote status is <strong>Accepted</strong>. Check your role has "jobs.create" permission (Admins and Managers only). If customer hasn\'t accepted yet, you cannot convert.',
                },
                {
                    title: 'Deposit Payment Failed on Acceptance',
                    content: '<strong>Cause:</strong> Stripe integration issue, or customer payment method declined.<br><strong>Fix:</strong> Verify Stripe is connected (Settings → Integrations → Stripe). Check Stripe dashboard for payment failure reason. Customer may need to use different payment method. Quote remains in <strong>Sent</strong> status until payment succeeds.',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Can I edit a quote after sending it?',
                    content: 'No. Once sent, quotes are locked to prevent confusion (customer may have already reviewed it). To make changes: Clone the quote, edit the clone, void the original, and send the new version. The customer sees the updated quote with a new quote number.',
                },
                {
                    title: 'What happens if a quote expires before the customer responds?',
                    content: 'Quote status changes to <strong>Expired</strong>. Customer portal link still works, but shows an "expired" notice. You can extend the validity period (Edit Quote → Extend Validity) and notify the customer. Expired quotes can still be converted to jobs if customer verbally accepts.',
                },
                {
                    title: 'How does quote numbering work?',
                    content: 'Quote numbers auto-increment per tenant (your business). Format: <strong>QUO-00001</strong>, <strong>QUO-00002</strong>, etc. You can customize the prefix (Settings → Document Numbering → Quote Prefix). Quote numbers are unique per tenant, not globally.',
                },
                {
                    title: 'Can customers negotiate pricing via the portal?',
                    content: 'Not currently. Customers can only accept or reject. If they want to negotiate, they must contact you (email/phone). You then create a revised quote and resend. This is a feature request we\'re tracking for future releases.',
                },
                {
                    title: 'Do remedial quotes show the parent EICR certificate to the customer?',
                    content: 'Yes. When you generate a remedial quote from an EICR, the customer can view the parent certificate in their portal. This provides context for why the work is needed. If you don\'t want customers to see the full EICR, manually create a quote and reference the defects in line item descriptions instead.',
                },
                {
                    title: 'Can I send one quote to multiple customers?',
                    content: 'Not directly. Quotes are tied to one customer. To quote multiple customers for the same work: Create the first quote, then clone it for each additional customer (Clone Quote → Change Customer → Send).',
                },
                {
                    title: 'How do discounts affect profitability reporting?',
                    content: 'Discounts reduce the quote total, which flows through to job revenue and invoicing. Opscel tracks: <strong>Original quote value</strong> (pre-discount) and <strong>Final quote value</strong> (post-discount). Profitability reports use final value minus job costs. Large discounts reduce margin - track discount % in analytics to avoid over-discounting.',
                },
                {
                    title: 'What\'s the difference between voiding and rejecting a quote?',
                    content: '<strong>Rejecting:</strong> Customer declines the quote (customer action). <strong>Voiding:</strong> You cancel the quote internally (admin action) - e.g., customer went with another contractor, or you sent wrong version. Voided quotes don\'t appear in customer portal.',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    content: 'If you\'re having trouble with quotations or need help with pricing strategies, our support team can assist. Email <a href="mailto:support@opscel.com" class="text-secondary hover:underline">support@opscel.com</a> with details.',
                },
                {
                    title: 'Related Guides',
                    bullets: [
                        '<a href="/docs/invoicing" class="text-secondary hover:underline">Invoicing</a> — Convert jobs to invoices and manage payments',
                        '<a href="/docs/customer-portal" class="text-secondary hover:underline">Customer Portal</a> — How customers view and accept quotes',
                        '<a href="/docs/remedial-scope-of-works" class="text-secondary hover:underline">Bundled Remedial Quotes</a> — Group EICR defects for cleaner quotes',
                        '<a href="/docs/branding" class="text-secondary hover:underline">Branding & PDF Customization</a> — Customize quote templates and branding',
                        '<a href="/docs/settings-tour" class="text-secondary hover:underline">Settings Tour</a> — Configure quote defaults and templates',
                    ],
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Quote to Invoice Workflow',
            description: 'End-to-end from quote approval to invoice',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Defects to Quotation',
            description: 'Converting site defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Customer Portal',
            description: 'Customers approve quotes in the portal',
            href: '/docs/customer-portal'
        },
        {
            title: 'Invoicing',
            description: 'Invoicing after quote acceptance',
            href: '/docs/invoicing'
        }
    ]
};
