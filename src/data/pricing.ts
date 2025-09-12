import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Pilot Program',
        price: 'Partnership',
        features: [
            'AI-powered intelligent intake processing',
            'Smart field guidance with voice capture',
            'Automatic data extraction from photos',
            'Instant certificate generation',
            'Dedicated development team',
            'Weekly progress reviews',
            'Custom workflow configuration',
            '2-year pricing lock',
        ],
    },
    {
        name: 'Early Adopter',
        price: 'Contact Us',
        features: [
            'All Pilot Program features',
            'Advanced AI capabilities',
            'Predictive maintenance insights',
            'Revenue optimization tools',
            'Priority support & training',
            'Integration with existing systems',
            'Co-marketing opportunities',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Full AI-native platform',
            'Unlimited engineers & jobs',
            'Custom AI model training',
            'White-label options',
            '24/7 dedicated support',
            'On-site consultation',
            'Advanced analytics dashboard',
            'Multi-location management',
        ],
    },
]