// Homepage "Everything else the business needs" — the feature sets the
// WorkflowProof animation above it does NOT show. Every line must stay true to
// the product and to pricing.ts (plan labels). Styling lives in
// components/FeatureSets.tsx: Tailwind does not scan src/data/.

export type FeatureSetIcon = 'contracts' | 'assets' | 'monitoring' | 'certificates' | 'portal' | 'import';
export type ChipTone = 'plain' | 'muted' | 'mono' | 'ok' | 'action' | 'tag';

export interface IFeatureSet {
    icon: FeatureSetIcon;
    plan: 'Every plan' | 'Team plan' | 'Business plan';
    title: string;
    body: string;
    href: string;
    chip: { text: string; tone: ChipTone }[];
}

export const featureSets: IFeatureSet[] = [
    {
        icon: 'contracts',
        plan: 'Team plan',
        title: 'Recurring visits that plan themselves.',
        body: 'Six-monthly, annual or your own cycle. Visits come round on time and renewals are flagged before they lapse.',
        href: '/features/service-contracts',
        chip: [{ text: 'Every 6 months · next visit Mar 2027', tone: 'plain' }],
    },
    {
        icon: 'assets',
        plan: 'Business plan',
        title: 'An asset register that builds itself.',
        body: 'Engineers list devices on the worksheet they’re already filling. Tag them with QR or NFC and scan on the next visit.',
        href: '/features/assets',
        chip: [{ text: '38 devices', tone: 'plain' }, { text: '✓ Serviced today', tone: 'ok' }],
    },
    {
        icon: 'monitoring',
        plan: 'Business plan',
        title: 'Alarm cases without sending a van.',
        body: 'Log cases from the monitoring centre and work them remotely. Escalate to a job only when someone has to go.',
        href: '/features/remote-monitoring',
        chip: [{ text: 'Fault signal · Kestrel Court', tone: 'plain' }, { text: 'Resolved remotely', tone: 'ok' }],
    },
    {
        icon: 'certificates',
        plan: 'Every plan',
        title: '18 certificate types, locked once issued.',
        body: 'BS 5839, BS 7671, BS 5266, EN 62446, PD 6662 and more. Every required field is checked before it can be issued.',
        href: '/features/certificates',
        chip: [{ text: 'FAS-3088-01', tone: 'mono' }, { text: '✓ Issued', tone: 'ok' }],
    },
    {
        icon: 'portal',
        plan: 'Every plan',
        title: 'Quotes approved without a phone call.',
        body: 'Customers approve from a link in their email. On Business, they also get a portal for every site’s certificates and invoices.',
        href: '/features/customer-portal',
        chip: [{ text: 'Q-2418 · £168.00', tone: 'plain' }, { text: 'Approve quote', tone: 'action' }],
    },
    {
        icon: 'import',
        plan: 'Every plan',
        title: 'Bring your data with you.',
        body: 'Import customers, sites, assets, jobs and contracts from Xero, QuickBooks or a spreadsheet.',
        href: '/features/data-import',
        chip: [{ text: 'Customers', tone: 'tag' }, { text: 'Sites', tone: 'tag' }, { text: 'Assets', tone: 'tag' }, { text: 'Contracts', tone: 'tag' }],
    },
];
