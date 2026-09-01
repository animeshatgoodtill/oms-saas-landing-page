import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: '£49/month',
        priceGBP: 49,
        usersIncluded: 1,
        features: [
            '1 user included (+£29/month per additional)',
            'Unlimited jobs and customers',
            'All 17 certificate types',
            'Mobile field service app',
            'Job sheets and worksheets',
            'Quotations with customer portal accept/decline',
            'Job-to-invoice workflow',
            '100 free AI credits every month',
            '25 GB storage',
            '30-day free trial, card required',
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
            'Good-Better-Best tiered quoting',
            'Deposit collection on quotes',
            'Xero and QuickBooks sync',
            'Service contracts and renewal reminders',
            '100 GB storage',
            '30-day free trial, card required',
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
            'Asset register with QR/NFC tags',
            'Remote monitoring (ARC-handled cases)',
            'RAMS (risk assessments & method statements)',
            'Customer self-service portal',
            '250 GB storage',
            '30-day free trial, card required',
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
