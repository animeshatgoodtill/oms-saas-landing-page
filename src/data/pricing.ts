import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: '£29/month',
        features: [
            '3 users included (+£10/month per additional)',
            'Unlimited jobs and customers',
            'All 9 certificate types',
            'Mobile field service app',
            'Good-Better-Best quoting',
            'Job-to-invoice workflow',
            '90-day free trial',
        ],
    },
    {
        name: 'Team',
        price: '£49/month',
        features: [
            '5 users included (+£10/month per additional)',
            'Everything in Starter',
            'Multi-engineer scheduling',
            'Role-based permissions',
            'CSV data import',
            'Custom PDF branding',
            'Priority email support',
            '90-day free trial',
        ],
    },
    {
        name: 'Business',
        price: '£79/month',
        features: [
            '8 users included (+£10/month per additional)',
            'Everything in Team',
            'Customer Portal with magic link auth',
            'Asset and equipment tracking',
            'Engineer performance dashboard',
            'Xero integration',
            'Deposit payments via Stripe',
            'Priority phone and email support',
            '90-day free trial',
        ],
    },
]
