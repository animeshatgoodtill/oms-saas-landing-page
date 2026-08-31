import { IFeatureDetail } from '@/types';

export const quotationsDetail: IFeatureDetail = {
    slug: 'quotations',
    title: 'Win More Work with Smarter Quoting',
    subtitle: 'Opscel Quotations Module',
    heroDescription: 'Create professional quotes in minutes. Let customers approve and pay from their phone. Convert accepted quotes to jobs in one click.',
    iconId: 'icon-price-tag',
    screenshotImage: '/images/features/quotations/quotations-hero-mockup.svg',

    featureHighlights: [
        {
            iconId: 'icon-certificate',
            title: 'Quote in Minutes',
            description: 'Product catalog and templates eliminate repetitive typing. Build quotes fast, send faster.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Good-Better-Best Pricing',
            description: 'Present tiered options side-by-side. Customers choose, you close bigger jobs.'
        },
        {
            iconId: 'icon-signature',
            title: 'Mobile Approval Portal',
            description: 'Customers view, compare, sign, and pay deposits—all from their phone. No account needed.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'One-Click Job Creation',
            description: 'Accepted quote? Convert it to a job in one click with every detail carried over. Zero re-typing.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Bundled Remedial Quotes',
            description: 'Engineer logs 5 defects? Create one professional quote, not five separate ones. All issues grouped by job with severity badges (Critical/Major/Minor). Customer gets one clear proposal, you get 5x faster quoting.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Quote Analytics',
            description: 'Track win rates, response times, and conversion funnels. Know what\'s working.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Create',
            description: 'Build quotes from your product catalog or templates. Add Good-Better-Best options to increase average ticket value.'
        },
        {
            stepNumber: 2,
            title: 'Send',
            description: 'One click sends a branded quote to your customer. They view it instantly on any device.'
        },
        {
            stepNumber: 3,
            title: 'Convert',
            description: 'Customer approves with a digital signature and pays their deposit. Convert the accepted quote to a job in one click — every detail carries over, so there\'s nothing to re-type.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Staff',
            benefits: [
                'Faster quoting — Catalog and templates cut admin time',
                'Better visibility — See when quotes are viewed, expiring, or need follow-up',
                'Less data entry — Quotes convert to jobs with one click'
            ]
        },
        {
            persona: 'Engineers',
            benefits: [
                'Flag issues for quoting — Check a box, office handles the rest',
                'No paperwork — Digital signatures replace paper forms'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Higher close rates — Tiered pricing increases conversions',
                'Improved cash flow — Collect deposits before work starts',
                'Data-driven decisions — Analytics show what\'s working'
            ]
        }
    ],

    stats: [
        {
            value: '2-3 tiers',
            label: 'Good, Better, Best pricing side-by-side on every quote'
        },
        {
            value: 'Zero',
            label: 'Manual data entry from quote to job'
        },
        {
            value: 'No account',
            label: 'Needed for customers to view, sign, and pay from their phone'
        }
    ],

    comparison: [
        {
            feature: 'Good-Better-Best pricing',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Bundled remedial quotes (multiple defects → 1 quote)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Quote analytics dashboard',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Auto follow-up reminders',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Mobile approval portal',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Deposit payments',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'Can customers approve quotes on their phone?',
            answer: 'Yes. The approval portal works on any device. Customers can view options, sign digitally, and pay deposits without creating an account.'
        },
        {
            question: 'How do deposits work?',
            answer: 'You set a deposit percentage when creating the quote. When the customer accepts, they\'re prompted to pay by card via Stripe. Funds arrive in your account within 2 business days.'
        },
        {
            question: 'What is Good-Better-Best pricing?',
            answer: 'You add 2-3 pricing tiers (e.g., Essential, Standard, Premium) to a quote, each with its own line items. Customers see them side-by-side in the approval portal and pick the option that fits their budget — often trading up once they can see what each tier actually includes.'
        },
        {
            question: 'How do bundled remedial quotes work?',
            answer: 'Engineer logs multiple defects on a job and flags them for quoting. Office dashboard shows one job card (not separate defects) with count and severity badges (e.g., "5 defects: 2 Critical, 3 Major"). Click "Create Quote" once to generate one bundled quote with all defects itemized professionally. Customer receives one clear proposal instead of five confusing emails. 5x faster than creating individual quotes per defect. See the Defects to Quotation guide for full walkthrough.'
        },
        {
            question: 'Will I know when customers view my quote?',
            answer: 'Yes. Every quote tracks views, so you can see exactly when a customer has opened it and how many times. You can also set automatic follow-up reminders if they haven\'t responded.'
        },
        {
            question: 'Which pricing plan includes Quotations?',
            answer: 'Quotations—the wizard, PDF generation, sending, templates, and customer portal accept/decline—is included on every plan, from Starter upward. Good-Better-Best tiered pricing and deposit collection on quotes are Team tier and above. Start with a 30-day free trial (card required, first charge on day 30) to test everything with your team.'
        },
        {
            question: 'Can I turn an accepted quote into a recurring service contract?',
            answer: 'Yes. Once a customer accepts a quote, open it, go to ⋮ → "Upgrade to service contract". The customer, site, and title carry over; you confirm the true recurring per-visit price (stripping any one-off install costs from the quote total). See /features/service-contracts for the full recurring contracts feature.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
