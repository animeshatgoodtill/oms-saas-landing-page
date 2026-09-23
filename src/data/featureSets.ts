// Homepage "Everything else the business needs" — the feature sets the
// WorkflowProof animation above it does NOT show. Every line must stay true to
// the product and to pricing.ts (plan labels). Styling lives in
// components/FeatureSets.tsx: Tailwind does not scan src/data/.

export type FeatureSetIcon = 'contracts' | 'assets' | 'monitoring' | 'certificates' | 'portal' | 'import';

export interface IFeatureSet {
    icon: FeatureSetIcon;
    plan: 'Every plan' | 'Team plan' | 'Business plan';
    title: string;
    body: string;
    href: string;
}

export const featureSets: IFeatureSet[] = [
    {
        icon: 'contracts',
        plan: 'Team plan',
        title: 'Recurring visits that plan themselves.',
        body: 'Six-monthly, annual or your own cycle. Visits come round on time and renewals are flagged before they lapse.',
        href: '/features/service-contracts',
    },
    {
        icon: 'assets',
        plan: 'Business plan',
        title: 'An asset register that builds itself.',
        body: 'Engineers list devices on the worksheet they’re already filling. Tag them with QR or NFC and scan on the next visit.',
        href: '/features/assets',
    },
    {
        icon: 'monitoring',
        plan: 'Business plan',
        title: 'Alarm cases without sending a van.',
        body: 'Log cases from the monitoring centre and work them remotely. Escalate to a job only when someone has to go.',
        href: '/features/remote-monitoring',
    },
    {
        icon: 'certificates',
        plan: 'Every plan',
        title: '18 certificate types, locked once issued.',
        body: 'BS 5839, BS 7671, BS 5266, EN 62446, PD 6662 and more. Every required field is checked before it can be issued.',
        href: '/features/certificates',
    },
    {
        icon: 'portal',
        plan: 'Every plan',
        title: 'Quotes approved without a phone call.',
        body: 'Customers approve from a link in their email. On Business, they also get a portal for every site’s certificates and invoices.',
        href: '/features/customer-portal',
    },
    {
        icon: 'import',
        plan: 'Every plan',
        title: 'Bring your data with you.',
        body: 'Import customers, sites, products and jobs from a spreadsheet on any plan. Contracts come with Team, assets with Business.',
        href: '/features/data-import',
    },
];
