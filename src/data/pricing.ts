import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: '£29/month',
        features: [
            '3 users included',
            'Unlimited jobs & customers',
            'Mobile app for engineers',
            'Photo & voice job capture',
            'Digital signatures',
            'Certificate generation',
            '90-day free trial',
            '+£10/month per additional user',
        ],
    },
    {
        name: 'Team',
        price: '£49/month',
        features: [
            '5 users included',
            'Everything in Starter, plus:',
            'GPS job tracking',
            'Team scheduling & dispatch',
            'Advanced permissions',
            'Priority email support',
            '90-day free trial',
            '+£10/month per additional user',
        ],
    },
    {
        name: 'Business',
        price: '£79/month',
        features: [
            '8 users included',
            'Everything in Team, plus:',
            'Asset & equipment tracking',
            'Advanced reporting',
            'Custom compliance forms',
            'Priority phone & email support',
            '90-day free trial',
            '+£10/month per additional user',
        ],
    },
]