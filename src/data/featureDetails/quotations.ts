import { IFeatureDetail } from '@/types';

export const quotationsDetail: IFeatureDetail = {
    slug: 'quotations',
    title: 'Send Quotes That Actually Get Accepted',
    subtitle: 'OpsCel Quotations Module',
    heroDescription: 'Your competitor sends a PDF quote via email. The customer loses it in their inbox, never replies, and you follow up three times before giving up. OpsCel changes that—interactive quotes that customers can view on any device, compare options side-by-side, and accept with a signature. No PDF attachments, no lost emails, no guessing if they even opened it.',
    iconId: 'icon-price-tag',
    sections: [
        {
            title: 'From Site Visit to Quote in Minutes',
            description: 'Engineer spots a deficiency at 2pm. By 2:15pm, the customer has a quote in their inbox with three pricing options and a link to accept it online. No waiting for the office to "write it up," no separate estimating department, no delay between identifying the opportunity and capturing the sale.',
            bullets: [
                'Create quotes directly from job deficiencies flagged on-site',
                'Pull customer details and service address automatically',
                'Add line items from your product catalog—no retyping',
                'Duplicate existing quotes as revisions in seconds',
                'Preview exactly what the customer will see before sending',
                'Send via email with branded template and portal link'
            ]
        },
        {
            title: 'Good-Better-Best: Let Customers Choose Their Budget',
            description: 'Stop losing jobs because your quote was £200 over their budget. Give them three options—basic fix, recommended solution, and premium upgrade. Customer sees all three side-by-side, picks the one that fits their budget, and accepts it right there. You get the job instead of "we\'ll think about it."',
            bullets: [
                'Create 2-3 pricing tiers in one quote (Good, Better, Best)',
                'Each tier has its own line items and total price',
                'Mark your recommended option to guide customer choice',
                'Copy items between tiers—no duplicating work',
                'Customer views comparison cards with swipe navigation on mobile',
                'See which tier gets accepted most often in analytics',
                'Win more jobs by matching customer budgets, not losing to cheaper competitors'
            ]
        },
        {
            title: 'Customer Portal: No Login, No PDF, No Confusion',
            description: 'Customer clicks the link in the email, sees their quote on any device—phone, tablet, computer. If it\'s Good-Better-Best, they swipe through the options, pick one, and sign with their finger. Takes 90 seconds. No printing PDFs, no scanning signatures, no "I can\'t open this attachment" excuses.',
            bullets: [
                'Public portal works on any device without account creation',
                'Quote displays professionally with your company branding',
                'Swipe between pricing tiers on mobile like shopping online',
                'Digital signature capture works with touchscreen or mouse',
                'Customer enters name and email for audit trail',
                'Accept or decline with optional reason for feedback',
                'You know the instant they view it—no wondering if they got it'
            ]
        },
        {
            title: 'Automatic Follow-Ups So You Never Forget',
            description: 'Sent a quote last Tuesday and forgot to follow up? OpsCel remembers. System sends automatic reminders at 3 days, 7 days, and 14 days if the customer hasn\'t responded. You look professional and persistent without setting calendar reminders or writing "just checking in" emails.',
            bullets: [
                'Configurable reminder schedule (3, 7, 14 days)',
                'Automatic emails sent to customers who haven\'t responded',
                'Stops sending after acceptance or decline',
                'Tracks follow-up count to avoid annoying customers',
                'Quotes auto-expire after validity period (you set the deadline)',
                'See response times in analytics—how long customers take to decide',
                'No more lost opportunities because you forgot to follow up'
            ]
        },
        {
            title: 'Optional Deposits: Get Paid Before You Start',
            description: 'Big job? Require a deposit before booking it in. Customer accepts the quote, pays the deposit via Stripe right in the portal, and you get confirmation instantly. No chasing deposit invoices, no "we\'ll pay when you start," no cash flow problems before the job even begins.',
            bullets: [
                'Set deposit requirement when creating quote (percentage or fixed amount)',
                'Customer pays via Stripe Checkout after accepting quote',
                'Secure payment processing—never handle card details',
                'Deposit confirmation updates quote status automatically',
                'See deposit paid status at a glance in quote list',
                'Option to auto-convert to job after deposit payment',
                'Protect cash flow on large projects before committing resources'
            ]
        },
        {
            title: 'See Which Quotes Actually Close',
            description: 'Sent 47 quotes last month. How many got accepted? What\'s your average quote value? Which customers accept fastest? OpsCel tracks it all. See your acceptance rate, conversion funnel, response times, and top customers. Spot patterns, improve your process, and stop wasting time on quotes that never close.',
            bullets: [
                'Acceptance rate and conversion rate dashboards',
                'Total quote value and average deal size metrics',
                'Conversion funnel: draft → sent → viewed → accepted → converted to job',
                'Response time analytics: how long customers take to view and accept',
                'Source tracking: which marketing channels generate best quotes',
                'Top customers by quote value—know who your big spenders are',
                'Filter by date range, status, and source for deep analysis',
                'Export data for reporting to management or investors'
            ]
        },
        {
            title: 'One Click from Quote to Job',
            description: 'Customer accepts the quote at 4pm. You click "Convert to Job," and it\'s in your schedule with all the details—customer info, service address, estimated cost, and the work description. Engineer gets assigned, materials get ordered, and you\'re working instead of retyping information from the quote into a new job record.',
            bullets: [
                'Convert accepted quotes to jobs in one click',
                'Customer and site address transfer automatically',
                'Quote total becomes job estimated cost',
                'All line items and notes included in job record',
                'Link back to original quote for reference',
                'Option to auto-convert after deposit payment',
                'Quote marked as "converted" to avoid duplicates',
                'Complete audit trail from quote to job to invoice'
            ]
        }
    ],
    ctaText: 'Try Professional Quotations Free for 90 Days',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
