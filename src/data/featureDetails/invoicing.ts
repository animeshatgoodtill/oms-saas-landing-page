import { IFeatureDetail } from '@/types';

export const invoicingDetail: IFeatureDetail = {
    slug: 'invoicing',
    title: 'From Job Complete to Invoice Sent in Seconds',
    subtitle: 'Stop chasing paperwork. Get paid faster.',
    heroDescription: 'Opscel creates invoices from completed jobs using two intelligent paths: Fixed-Price jobs respect the agreed quote price with automatic deposit deduction; Time & Materials jobs build from actuals (labour + parts). One-click creation for both, with all details pre-filled.',
    iconId: 'icon-price-tag',
    screenshotImage: '/images/ui/07-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-job-workflow',
            title: 'Smart Two-Path Invoicing',
            description: 'Quote-originated job? Invoice pre-filled with agreed line items from the accepted quote—respects the contract price, not actuals. Standalone job? Invoice built from engineer\'s logged parts and time. System detects job source automatically and shows the right workflow.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Quote Prices Respected in Invoices',
            description: 'When a job came from a £10k accepted quote, the invoice bills £10k—not the £950 in parts + labour the engineer used. System respects the contract price. Closes the fundamental billing gap where agreed quotes were ignored and only actuals were invoiced.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Good-Better-Best Tier Selection Flows Through',
            description: 'Customer chose the Premium tier on your 3-option quote? Invoice includes only the Premium tier line items—the ones they actually agreed to pay for. Tier selection from portal flows to invoice automatically.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Automatic Deposit Handling',
            description: 'When a customer accepts a quote with a deposit, Opscel automatically creates the deposit invoice. When you invoice the final job, the deposit is already accounted for. The complete paper trail from quote to final payment—handled automatically.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Smart Tax Calculation',
            description: 'Set tax rates at the product level, category level, or business level. Opscel applies the right rate automatically. Mixed VAT rates on the same invoice? No problem. Zero-rated goods, reduced rates, standard VAT—all handled correctly.'
        },
        {
            iconId: 'icon-xero',
            title: 'Direct to Your Accounting Software',
            description: 'Post invoices directly to Xero or QuickBooks with one click. Customer records sync automatically. Payment status updates flow back to Opscel. No double entry. No reconciliation headaches. No missed payments.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Professional PDF Generation',
            description: 'Invoice pre-filled with all job details. Parts auto-populated from engineer\'s list. Labour calculated automatically (hours × your rate). Professional invoices with your branding sent to customers in one click.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Complete Status Tracking',
            description: 'Draft, Posted, Paid, Partial—see invoice status at a glance. Know exactly what\'s outstanding. Overdue alerts ensure you never miss a late payment. Real-time sync with Xero/QuickBooks keeps everything current.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Complete the Job',
            description: 'Your engineer marks the job complete in the field app, logging time and parts used. All details captured automatically.'
        },
        {
            stepNumber: 2,
            title: 'Create Invoice (Two Paths)',
            description: 'Fixed-Price: 2-step review—agreed scope pre-filled (editable), engineer extras (checkable), totals + deposit deduction. T&M: 4-step wizard—labour (Y/N), parts (checkable), callout fee (optional), review totals. System shows the right workflow automatically.'
        },
        {
            stepNumber: 3,
            title: 'Get Paid',
            description: 'Customer receives professional invoice. Payment syncs to your accounting software automatically. Status updates in real-time.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Staff',
            benefits: [
                'Invoice pre-filled with all job details—customer info, site address, parts, labour',
                'Engineer\'s parts list becomes line items automatically',
                'Labour calculated from hours × your rate—done instantly',
                'Send professional PDF invoice to customer in one click',
                'Status tracking shows Draft, Posted, Paid, Partial at a glance',
                'No double entry with Xero/QuickBooks integration'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                '90% faster invoice creation vs manual entry',
                'Deposit invoices auto-create when quotes accepted—get paid upfront',
                'Know exactly what\'s outstanding with payment tracking',
                'Real-time sync with accounting software—no reconciliation headaches',
                'Overdue alerts ensure you never miss a late payment',
                'Same day invoicing instead of end-of-week catch-up'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Complete job and log time/parts in field app',
                'Parts selections auto-populate invoice with correct prices',
                'No paperwork to chase—everything flows digitally',
                'Customer receives professional branded invoice immediately'
            ]
        }
    ],

    stats: [
        {
            value: '90% faster',
            label: 'Invoice creation vs manual entry'
        },
        {
            value: 'Zero',
            label: 'Double-entry with accounting integration'
        },
        {
            value: 'Same day',
            label: 'Invoicing instead of end-of-week'
        }
    ],

    comparison: [
        {
            feature: 'One-click invoice creation from completed jobs',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Automatic deposit handling (quote deposits → final invoice)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Smart tax calculation (product/category/business level)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Xero and QuickBooks integration',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Parts auto-populated from field app',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Labour auto-calculated from engineer time logs',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Professional PDF generation with branding',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Real-time payment status sync',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Overdue payment alerts',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'Can I customise my invoice template?',
            answer: 'Yes. Add your logo, company details, payment terms, and bank details. Your invoices look professional and match your brand.'
        },
        {
            question: 'What if I need to change something before sending?',
            answer: 'Invoices start as drafts. Edit anything you need—line items, prices, notes—before sending.'
        },
        {
            question: 'How does the deposit handling work?',
            answer: 'When a quote with a deposit is accepted, Opscel creates the deposit invoice automatically. The final invoice shows the deposit as already paid. Complete paper trail from quote to final payment—handled automatically.'
        },
        {
            question: 'Which accounting software do you integrate with?',
            answer: 'Xero and QuickBooks Online. Invoices post directly, customers sync automatically, and payment status updates flow back to Opscel. No double entry, no reconciliation headaches.'
        },
        {
            question: 'Can I invoice for jobs that didn\'t come from a quote?',
            answer: 'Absolutely. Create invoices from any completed job, or create manual invoices for ad-hoc work. The system is flexible for all billing scenarios.'
        },
        {
            question: 'How are tax rates applied?',
            answer: 'Set tax rates at the product level, category level, or business level. Opscel applies the right rate automatically. Mixed VAT rates on the same invoice? No problem. Zero-rated goods, reduced rates, standard VAT—all handled correctly.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
