import { IFeatureDetail } from '@/types';

export const accountingIntegrationDetail: IFeatureDetail = {
    slug: 'accounting-integration',
    title: 'Your Books, Always Up to Date',
    subtitle: 'Connect Opscel to Xero or QuickBooks',
    heroDescription: 'Watch invoices flow straight to your accounting software. No exports, no imports, no double entry. One-click posting, automatic customer sync, real-time payment updates.',
    iconId: 'icon-xero',
    screenshotImage: '/images/ui/06-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-price-tag',
            title: 'Post Invoices in One Click',
            description: 'Create an invoice in Opscel, click "Post to Xero" or "Post to QuickBooks", and it\'s done. The invoice appears in your accounting software with all the details intact. Line items, tax rates, customer details—everything transfers perfectly.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Customers Sync Automatically',
            description: 'When you post an invoice, Opscel checks if the customer exists in your accounting software. If not, it creates them automatically. If they do, it links to the existing record. No duplicate customers. No mismatched records. No cleanup needed.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Payments Update in Real-Time',
            description: 'When a customer pays an invoice in Xero or QuickBooks, the status updates in Opscel automatically. Your dashboard shows what\'s paid, what\'s outstanding, and what\'s overdue. No more logging into two systems to check payment status.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Revenue Categories Mapped',
            description: 'Map your product categories to the correct revenue accounts in your accounting software. Labour goes to labour income, materials to materials income, automatically. Your accountant will thank you at year-end.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Connect Your Account',
            description: 'Click "Connect to Xero" or "Connect to QuickBooks" in Settings. Authorise Opscel to access your accounting software. Takes 30 seconds.'
        },
        {
            stepNumber: 2,
            title: 'Map Your Accounts',
            description: 'Tell Opscel which revenue accounts to use for different product categories. Labour, materials, equipment—each can go to the right place.'
        },
        {
            stepNumber: 3,
            title: 'Post Invoices',
            description: 'Create invoices as normal. When ready, click "Post to Accounting". The invoice appears in Xero or QuickBooks instantly.'
        },
        {
            stepNumber: 4,
            title: 'Track Payments',
            description: 'When customers pay, the status updates automatically. Your Opscel dashboard always shows the current state.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Staff',
            benefits: [
                'One-click invoice posting to Xero or QuickBooks',
                'No more exporting/importing CSV files',
                'Customer records sync automatically—no duplicate entries',
                'Payment status visible in Opscel—no need to check accounting software',
                'Revenue correctly categorised for clean year-end reporting',
                'Clear error messages if something needs fixing before posting'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Real-time visibility into cash flow without logging into multiple systems',
                'Accounting data always accurate—no manual reconciliation',
                'Bank-level security with OAuth 2.0 authentication',
                'Disconnect anytime—you control access',
                'Support for both Xero and QuickBooks Online',
                'Minimal permissions—only what\'s needed for invoices and contacts'
            ]
        },
        {
            persona: 'Accountants',
            benefits: [
                'Income properly categorised by revenue account',
                'Complete audit trail—Opscel invoice ID linked to accounting invoice',
                'No duplicate invoices—system prevents accidental double-posting',
                'Deposit handling flows through correctly to final invoices',
                'Tax codes applied correctly based on product categories',
                'Clean data for year-end reporting and tax filing'
            ]
        }
    ],

    stats: [
        {
            value: '30 seconds',
            label: 'To connect Xero or QuickBooks'
        },
        {
            value: 'Zero',
            label: 'Manual exports or imports needed'
        },
        {
            value: 'Real-time',
            label: 'Payment status updates via webhooks'
        }
    ],

    comparison: [
        {
            feature: 'One-click invoice posting to Xero',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'One-click invoice posting to QuickBooks Online',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Automatic customer synchronisation',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Real-time payment status updates (webhooks)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Revenue account mapping by category',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Deposit invoice handling',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-company support',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Bank-level OAuth 2.0 security',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Duplicate invoice prevention',
            opscel: true,
            others: 'Some'
        }
    ],

    faq: [
        {
            question: 'Do I need to connect both Xero and QuickBooks?',
            answer: 'No. Connect whichever one you use. Most businesses use one or the other.'
        },
        {
            question: 'What if I change accounting software later?',
            answer: 'Disconnect from one, connect to the other. Your Opscel data stays intact. Only the integration changes.'
        },
        {
            question: 'Will this create duplicate invoices?',
            answer: 'No. Opscel tracks which invoices have been posted. You can\'t accidentally post the same invoice twice. This is a safety feature to protect your accounting data.'
        },
        {
            question: 'What happens if an invoice fails to post?',
            answer: 'You\'ll see a clear error message explaining why. Fix the issue (usually a missing customer field) and try again. Common issues are invalid email addresses or missing customer names.'
        },
        {
            question: 'Can I edit an invoice after posting?',
            answer: 'In Opscel, you can void and recreate. In your accounting software, standard rules apply. We recommend getting invoices right before posting to avoid complications.'
        },
        {
            question: 'How quickly do payments sync?',
            answer: 'Xero: Within minutes via webhooks. QuickBooks: Checked hourly, with webhook support for faster updates. Your dashboard always shows current payment status.'
        },
        {
            question: 'Is my accounting data secure?',
            answer: 'Yes. We use OAuth 2.0 (bank-level security), encrypted connections, and minimal permissions. Opscel never stores your accounting software passwords. You can disconnect anytime.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
