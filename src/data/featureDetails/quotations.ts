import { IFeatureDetail } from '@/types';

export const quotationsDetail: IFeatureDetail = {
    slug: 'quotations',
    title: 'Win More Work with Smarter Quoting',
    subtitle: 'OpsCel Quotations Module',
    heroDescription: 'Create professional quotes in minutes. Let customers approve and pay from their phone. Convert to jobs automatically.',
    iconId: 'icon-price-tag',

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
            title: 'Auto Job Creation',
            description: 'Accepted quote? Job\'s already created with all the details. Zero re-typing.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect-to-Quote Pipeline',
            description: 'Engineer flags an issue on site, office gets a draft quote ready to send. Nothing falls through the cracks.'
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
            description: 'Customer approves with a digital signature, pays their deposit, and the job is created automatically. You\'re ready to schedule.'
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
            value: '2-3x',
            label: 'Average ticket increase with tiered pricing'
        },
        {
            value: 'Zero',
            label: 'Manual data entry from quote to job'
        },
        {
            value: 'Instant',
            label: 'Notifications when customers view your quote'
        }
    ],

    comparison: [
        {
            feature: 'Good-Better-Best pricing',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Defect-to-quote pipeline',
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
            answer: 'You create up to 3 pricing tiers (e.g., Essential, Standard, Premium) with different inclusions. Customers see them side-by-side and choose the option that fits their needs. Contractors using tiered pricing typically see 2-3x higher average ticket values.'
        },
        {
            question: 'How does the defect-to-quote feature work?',
            answer: 'When an engineer finds an issue during a job, they tick "Quote required" on the defect. A draft quote appears on the office dashboard, pre-filled with customer details and defect information. Office staff review, add pricing, and send.'
        },
        {
            question: 'Will I know when customers view my quote?',
            answer: 'Yes. You get an instant notification when a customer opens your quote. You can also see how many times they\'ve viewed it and set automatic follow-up reminders.'
        },
        {
            question: 'Which pricing plan includes Quotations?',
            answer: 'Quotations is available on Business and Pro plans. Start with a 90-day free trial to test all features with your team.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
