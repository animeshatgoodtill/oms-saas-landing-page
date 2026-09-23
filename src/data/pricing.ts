import { IPricing } from "@/types";

// Plan contents mirror what the product ENFORCES (lib/auth/tier-feature-matrix.ts
// and the gates that actually check it), verified 2026-09-23. Only the gated
// modules are plan-specific: Team adds Good-Better-Best, accounting sync, service
// contracts, purchase orders and customer notification emails; Business adds
// assets, remote monitoring, RAMS and the self-service portal. Everything else is
// on every plan. The trial terms render once per card (PricingColumn), not here.
export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: '£49/month',
        priceGBP: 49,
        usersIncluded: 1,
        features: [
            '1 user included (+£29/month per additional)',
            'Unlimited jobs, customers and sites',
            'Scheduling, with Google and Outlook calendar sync',
            'Field app for engineers that works offline',
            'All 18 certificate types, with your branding',
            'Quotes your customers approve from their email',
            'Invoicing, and reports including job profitability',
            'Job sheets, checklists and customer sign-off',
            '100 free AI credits every month',
            '25 GB storage',
        ],
    },
    {
        name: 'Team',
        price: '£99/month',
        priceGBP: 99,
        usersIncluded: 3,
        features: [
            '3 users included (+£29/month per additional)',
            'Everything in Starter',
            'Good-Better-Best quotes and deposits',
            'Xero and QuickBooks sync',
            'Service contracts: recurring visits, fees and renewal reminders',
            'Purchase orders to suppliers',
            'Automatic customer emails for visits and job status',
            '100 GB storage',
        ],
    },
    {
        name: 'Business',
        price: '£149/month',
        priceGBP: 149,
        usersIncluded: 5,
        features: [
            '5 users included (+£29/month per additional)',
            'Everything in Team',
            'Asset register with QR/NFC tags, and asset import',
            'Remote monitoring (alarm-receiving-centre cases)',
            'RAMS (risk assessments & method statements)',
            'Customer self-service portal',
            '250 GB storage',
        ],
    },
]

// Launch promo: 50% off the base price for the first 3 months, on every
// tier, applied automatically at signup — no code, no action from the
// customer. Does not discount the £29/mo extra-user price. Currently
// unlimited-duration (no end date configured), so this is framed as the
// standing new-customer price rather than a "limited time" offer.
export const launchPromo = {
    headline: '50% off your first 3 months',
    detail: 'Applied automatically to every plan at signup — no code needed. Doesn\'t discount extra users.',
}
