import { IFeatureDetail } from '@/types';

export const customersDetail: IFeatureDetail = {
    slug: 'customers',
    title: 'Know Your Customers. Actually Know Them.',
    subtitle: 'Opscel Customer Management',
    heroDescription: 'Your customers aren\'t just names in a spreadsheet. Track businesses, contacts, and service addresses—with complete history of every job, certificate, and quote. No more "which site was that?" or "who do I send this to?" confusion.',
    iconId: 'icon-unlimited-customers',
    screenshotImage: '/images/ui/08-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-unlimited-customers',
            title: 'Unlimited Customers & Sites',
            description: 'One customer, 50 sites? No problem. Each location gets its own service history, equipment list, and contact details. No per-customer fees, no limits.'
        },
        {
            iconId: 'icon-contacts-multi',
            title: 'Multiple Contacts Per Business',
            description: 'Site manager wants service updates. Finance director wants invoices. Owner wants compliance certs. Custom contact roles ensure everyone gets what they need.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Contact-to-Address Preferences',
            description: 'The site manager for Building A shouldn\'t get emails about Building B. Set contact preferences per address. Invoice goes to right person, every time.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Complete Service History',
            description: 'See every job, certificate, quote, and invoice for a customer—across all sites. Answer "when did we last service that panel?" in two clicks.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'AI Assistant for Form Filling',
            description: 'Type or paste customer details in natural language. AI extracts business name, address, contact info, and fills the form. 30 seconds instead of 5 minutes.'
        },
        {
            iconId: 'icon-service-history',
            title: 'UK Address Autocomplete',
            description: 'Type postcode, select address. GetAddress.io integration finds UK addresses instantly. No typos, no incomplete addresses, no "we couldn\'t find you" callbacks.'
        },
        {
            iconId: 'icon-contacts-multi',
            title: 'Role-Based Contact Badges',
            description: 'Job form shows contact roles (Owner, Manager, Accounts, Site Contact). Pick the right person for the job. No sending work orders to the accountant.'
        },
        {
            iconId: 'icon-job-workflow',
            title: '4-Step Create Wizard',
            description: 'Business details → Primary contact → Service address → Review. Clear progress, no missing fields. Create customers in under 3 minutes.'
        },
        {
            iconId: 'icon-smart-customer',
            title: '4-Tab Edit Interface',
            description: 'Business tab, Contacts tab, Addresses tab, History tab. Find what you need fast. No scrolling through endless single-page forms.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Create Customer',
            description: '4-step wizard: Add business name and details, create primary contact with role, add service address (UK autocomplete), review and save.'
        },
        {
            stepNumber: 2,
            title: 'Add Contacts & Sites',
            description: 'Add multiple contacts with custom roles (Owner, Manager, Accounts, Site Contact). Add multiple service addresses. Set contact preferences per site.'
        },
        {
            stepNumber: 3,
            title: 'Create Jobs & Quotes',
            description: 'Select customer, choose service address, pick contacts. System shows site-specific contacts with role badges. Right people get right notifications.'
        },
        {
            stepNumber: 4,
            title: 'Track History',
            description: 'History tab shows every job, quote, invoice, and certificate—filtered by site if needed. Complete audit trail of customer relationship.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Managers',
            benefits: [
                'AI assistant fills forms from pasted text—30 seconds vs. 5 minutes',
                'UK address autocomplete prevents typo errors',
                'Contact roles show who handles what (invoices, service updates, certs)',
                '4-tab interface finds contact/address/history fast',
                'Multi-site support for customers with multiple locations',
                'Service history shows last visit details before scheduling'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'See all customer sites and contacts on mobile before arrival',
                'Contact preferences ensure they notify right person on-site',
                'Service history shows what was done last visit',
                'Multiple contacts per site—call the right person if issues arise'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Unlimited customers and sites—no per-customer fees',
                'Complete service history shows customer lifetime value',
                'Contact-to-address preferences reduce communication errors',
                'Custom contact roles adapt to customer organizational structures',
                'AI form filling speeds data entry for new customer onboarding'
            ]
        }
    ],

    stats: [
        {
            value: '30 sec',
            label: 'AI assistant form filling vs. 5 minutes manual entry'
        },
        {
            value: 'Unlimited',
            label: 'Customers and sites—no per-customer fees, no limits'
        },
        {
            value: '4 tabs',
            label: 'Organized interface: Business, Contacts, Addresses, History'
        }
    ],

    comparison: [
        {
            feature: 'AI assistant for natural language form filling',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Contact-to-address preferences (per-site notifications)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Custom contact roles per business',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'UK address autocomplete (GetAddress.io)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Multi-site support with separate service history',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Role-based contact badges in forms',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Complete service history (jobs, quotes, invoices, certs)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Unlimited customers and sites',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'How does the AI assistant work?',
            answer: 'Type or paste customer details in natural language (e.g., "ABC Ltd, 123 High Street, contact John Smith 07700 900000"). The AI extracts business name, address, contact name, phone, and fills the form fields automatically. Works with pasted emails, text messages, or typed notes. Saves 4-5 minutes per customer.'
        },
        {
            question: 'What are contact-to-address preferences?',
            answer: 'Large customers have multiple sites and multiple contacts. Contact-to-address preferences specify which contacts get notifications for which sites. Example: Site Manager A gets updates for Building A, Site Manager B for Building B, but Finance Director gets all invoices. Prevents wrong-person communication.'
        },
        {
            question: 'Can I create custom contact roles?',
            answer: 'Yes. Opscel includes default roles (Owner, Manager, Accounts, Site Contact), but you can create custom roles specific to your industry (Facilities Manager, Head of Maintenance, etc.). Roles appear as badges in job and quote forms.'
        },
        {
            question: 'How does UK address autocomplete work?',
            answer: 'Powered by GetAddress.io. Type a UK postcode, select the address from dropdown. System fills street, city, county, postcode automatically. Prevents typos and ensures deliverable addresses. Works for residential and commercial addresses.'
        },
        {
            question: 'What if a customer has 20+ sites?',
            answer: 'No problem. Opscel handles unlimited sites per customer. Each site gets its own service history, equipment tracking, and contact preferences. Filter jobs/certificates by site to see location-specific history. No performance issues with large site counts.'
        },
        {
            question: 'Can I import existing customer data?',
            answer: 'Yes. CSV import supports customers, contacts, and addresses. Fuzzy column matching auto-detects headers (e.g., "Company Name" maps to Business Name). Parent reference resolution links contacts to businesses via email. See Data Import module for details.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
