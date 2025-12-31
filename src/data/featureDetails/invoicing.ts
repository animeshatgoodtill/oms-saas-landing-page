import { IFeatureDetail } from '@/types';

export const invoicingDetail: IFeatureDetail = {
    slug: 'invoicing',
    title: 'From Job Complete to Invoice in Minutes, Not Days',
    subtitle: 'OpsCel Invoicing & Xero Integration',
    heroDescription: 'The job\'s done, the customer signed off, the certificate\'s issued. Why are you still waiting days to invoice? OpsCel auto-generates invoices from completed jobs, posts to Xero, and tracks payments—so you get paid faster.',
    iconId: 'icon-price-tag',

    featureHighlights: [
        {
            iconId: 'icon-job-workflow',
            title: 'Job-to-Invoice Workflow',
            description: 'Job completes, certificate generates, invoice creates automatically. Parts used, labour hours, visit duration—all pre-filled. Review, adjust if needed, send. 2 minutes instead of 20.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Xero Accounting Integration',
            description: 'OAuth connection to Xero (account-level setup, not per-company). Invoices post automatically with line items, customer details, tax codes. Payment webhooks sync status back to OpsCel.'
        },
        {
            iconId: 'icon-stripe-payments',
            title: 'Stripe Deposit Payments',
            description: 'Require deposits for large jobs or new customers. Generate payment link, customer pays via Stripe, funds tracked in OpsCel. Payment confirmation triggers job start or equipment order.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Parts & Labour Auto-Calculation',
            description: 'Parts added during job? Logged. Labour hours recorded via GPS check-in/out? Tracked. Invoice line items generate automatically with quantities, descriptions, unit prices. No manual entry.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Invoice Templates with Branding',
            description: 'Upload your logo, set brand colors, customize footer text. Invoice PDFs match your company branding. Professional appearance without design skills.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Payment Status Tracking',
            description: 'See which invoices are paid, pending, overdue. Xero webhooks update payment status in real-time. No logging into two systems to check if Dave finally paid.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Multi-Visit Invoice Consolidation',
            description: 'Job required three visits? Consolidate all visits into one invoice or split by visit. Customer prefers itemized? Generate separate invoices per visit. Flexible billing options.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Tax Code Auto-Assignment',
            description: 'UK VAT (20%), reduced rate (5%), zero-rated—Xero tax codes map automatically based on service type. Compliant invoices without tax code lookups.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Invoice History Per Customer',
            description: 'Customer history tab shows all invoices—paid, pending, overdue. See total invoiced, average job value, payment reliability. Know before quoting if they pay on time.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Credit Note Support',
            description: 'Need to refund a job or adjust invoice? Create credit notes that post to Xero. Maintains accurate accounting records and customer balance.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Complete Job',
            description: 'Engineer checks out, customer signs, certificate generates. System calculates job duration, parts used, labour hours.'
        },
        {
            stepNumber: 2,
            title: 'Review Auto-Generated Invoice',
            description: 'Invoice draft appears with pre-filled line items (parts, labour, visit charges). Office reviews, adjusts quantities or prices if needed.'
        },
        {
            stepNumber: 3,
            title: 'Post to Xero',
            description: 'Click "Post to Xero". Invoice creates in Xero with customer details, line items, tax codes. OpsCel stores Xero invoice ID for tracking.'
        },
        {
            stepNumber: 4,
            title: 'Track Payment',
            description: 'Customer pays invoice in Xero. Xero webhook notifies OpsCel. Invoice status updates to "Paid" automatically. No manual reconciliation.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Managers',
            benefits: [
                'Job completion triggers invoice creation—no manual data entry',
                'Parts and labour hours auto-populate from job records',
                'Xero integration syncs invoices and payment status automatically',
                'See which customers pay on time before scheduling more work',
                'Multi-visit jobs consolidate into one invoice or split as needed',
                'Credit notes post to Xero for refunds or adjustments'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Get paid faster—invoice same day job completes, not next week',
                'Stripe deposits reduce no-show risk for large jobs',
                'Payment tracking shows cash flow without logging into Xero',
                'Invoice history per customer shows payment reliability',
                'Branded invoice templates maintain professional appearance',
                'Xero webhooks eliminate manual payment reconciliation'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Complete job, signature captured, invoice generates—no extra steps',
                'Parts logged during job auto-appear on invoice',
                'GPS check-in/out calculates labour hours accurately',
                'Customer sees professional branded invoice immediately'
            ]
        }
    ],

    stats: [
        {
            value: '2 minutes',
            label: 'Invoice review and send time vs. 20 minutes manual entry'
        },
        {
            value: 'Same day',
            label: 'Invoice sent—job completes, certificate issues, invoice creates'
        },
        {
            value: 'Real-time',
            label: 'Payment status syncs from Xero via webhooks automatically'
        }
    ],

    comparison: [
        {
            feature: 'Job-to-invoice workflow (auto-generation)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Xero accounting integration (OAuth + webhooks)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Stripe deposit payment links',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Parts & labour auto-calculation from job data',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-visit invoice consolidation',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Real-time payment status sync (webhooks)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Invoice history per customer with payment reliability',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Credit note support posting to Xero',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'How does Xero integration work?',
            answer: 'One-time OAuth connection at account level (not per-company). When you post an invoice from OpsCel, it creates in Xero with customer details, line items, and tax codes. Xero webhooks notify OpsCel when payments are received, updating invoice status automatically. No duplicate data entry.'
        },
        {
            question: 'Can I edit invoices before sending?',
            answer: 'Yes. Auto-generated invoices are drafts. You can adjust line item quantities, prices, descriptions, or add/remove items before posting to Xero. Once posted to Xero, edit in Xero directly (OpsCel syncs changes via webhooks).'
        },
        {
            question: 'What if a customer needs a deposit?',
            answer: 'Create a deposit invoice, generate Stripe payment link, send to customer. They pay via Stripe (card or bank transfer). Payment confirmation appears in OpsCel and Xero. Use for large jobs, new customers, or equipment pre-orders.'
        },
        {
            question: 'How are parts and labour calculated?',
            answer: 'Parts logged during job (product catalog + quantities) auto-populate invoice line items. Labour hours calculated from GPS check-in/out times or manually adjusted. Multi-engineer jobs sum all engineer hours. Total job duration logged for billing verification.'
        },
        {
            question: 'Can I invoice multiple visits separately?',
            answer: 'Yes. Multi-visit jobs let you consolidate all visits into one invoice or generate separate invoices per visit. Customer prefers itemized billing? Split by visit. Prefer one total? Consolidate. Flexible per job.'
        },
        {
            question: 'What tax codes are supported?',
            answer: 'OpsCel maps to Xero tax codes—UK VAT (20%), reduced rate (5%), zero-rated, exempt. Set default tax code per service type (e.g., residential solar gets 0%, commercial gets 20%). Tax codes sync to Xero invoices automatically.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
