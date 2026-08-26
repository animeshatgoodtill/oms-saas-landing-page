import { IDocGuide } from '@/types';

export const settingsTourGuide: IDocGuide = {
    slug: 'settings-tour',
    title: 'Settings Tour',
    description: 'Quick orientation to every settings page in Opscel. Learn what each setting controls and where to find advanced configuration options.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        This is your guided tour of the Opscel settings sidebar. Think of it as a map—one paragraph per setting, no deep dives,
                        just "what is this and where does it link to." Use this when you are looking at the settings menu and asking "what am I looking at?"
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> New admins, team managers<br/>
                        <strong>Where it lives:</strong> Settings menu (gear icon in sidebar)<br/>
                        <strong>Key benefit:</strong> Find what you need without clicking through every page
                    </p>
                </div>
                <p class="mb-6">
                    Settings are grouped by functional area. We will walk through each group in order as they appear in the sidebar.
                </p>
            `
        },
        {
            id: 'company-branding',
            title: 'Company & Branding',
            content: `
                <p class="mb-6">
                    Your business identity—what shows on all customer-facing documents.
                </p>
            `,
            subsections: [
                {
                    title: 'Company Profile',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Business name, registered address, contact phone/email, VAT number, Companies House number.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Appears on quotes, invoices, and certificates. Required for legal compliance.</p>
                        <p class="text-gray-700">
                            <a href="/docs/onboarding" class="text-blue-600 hover:underline">→ See Onboarding Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Branding',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Company logo (used on PDFs), primary/secondary brand colors, invoice cover pages, quote headers.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Makes your documents professional and recognizable to customers.</p>
                        <p class="text-gray-700">
                            <em>Deep dive guide coming soon.</em>
                        </p>
                    `
                }
            ]
        },
        {
            id: 'vertical-config',
            title: 'Vertical Configuration',
            content: `
                <p class="mb-6">
                    Industry-specific settings for electrical, fire safety, and low-carbon work.
                </p>
            `,
            subsections: [
                {
                    title: 'Active Verticals',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Which industry verticals your business operates in (Electrical / Fire Safety / Low-Carbon).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Determines which certificate types, job categories, and templates are available.</p>
                        <p class="text-gray-700">
                            <a href="/docs/onboarding" class="text-blue-600 hover:underline">→ See Onboarding Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Electrical Options',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> BS 7671 compliance settings, BAFE registration number, approved test scopes, NICEIC/NAPIT membership.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Ensures your EIC/EICR certificates meet regulatory standards and display correct accreditation badges.</p>
                        <p class="text-gray-700">
                            <a href="/docs/certificates" class="text-blue-600 hover:underline">→ See Certificates Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Fire Safety Options',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> BS 5839 compliance, fire alarm system categories, accreditations (BAFE, FIA), certificate types enabled.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Configures fire alarm service certificates, commissioning forms, and emergency lighting tests.</p>
                        <p class="text-gray-700">
                            <a href="/docs/certificates" class="text-blue-600 hover:underline">→ See Certificates Guide</a>
                        </p>
                    `
                }
            ]
        },
        {
            id: 'document-config',
            title: 'Document Configuration',
            content: `
                <p class="mb-6">
                    How documents are numbered, formatted, and generated.
                </p>
            `,
            subsections: [
                {
                    title: 'Document Numbering',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Prefixes and starting numbers for invoices (INV-), quotes (QUO-), certificates (CERT-), jobs (JOB-).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Keeps your document references organized and sequential. Cannot be changed once documents are issued.</p>
                        <p class="text-gray-700">
                            <em>Deep dive guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Certificate Templates',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> PDF layout per certificate type, accreditation badge placement, default retest intervals, footer chrome spacing.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Ensures certificates match official BS standards and display your logos/badges correctly.</p>
                        <p class="text-gray-700">
                            <a href="/docs/certificates" class="text-blue-600 hover:underline">→ See Certificates Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Quote Templates',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Reusable quote starting points — line items, terms & conditions, wording, and their own validity/deposit/call-out settings.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Professional quotes close more deals. Configure once, reuse forever. One of these templates can also be picked to supply the settings for defect and remedial quotes.</p>
                        <p class="mb-4"><strong>Availability:</strong> All plans</p>
                        <p class="text-gray-700">
                            <a href="/docs/quotations#quote-templates" class="text-blue-600 hover:underline">→ See Quotations Guide</a> · <a href="/docs/quote-defaults" class="text-blue-600 hover:underline">→ See Quote Defaults Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Quote Defaults',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Default deposit percentage, quote validity period, price breakdown style, and whether call-out rates show — applied when a quote isn't using a template that sets its own. Also chooses the template used for defect and remedial quotes.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> This is the fallback every new quote starts from, and the one place that decides what settings a defect quote inherits.</p>
                        <p class="mb-4"><strong>Availability:</strong> All plans (Admin only)</p>
                        <p class="text-gray-700">
                            <a href="/docs/quote-defaults" class="text-blue-600 hover:underline">→ See Quote Defaults Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Checklist Templates',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Custom worksheets for field engineers (job sheets, inspection checklists, commissioning forms).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Create your own forms tailored to your workflow. Engineers fill them in the field app.</p>
                        <p class="text-gray-700">
                            <em>Worksheet authoring guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Email Templates',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Email content for automated events (quote sent, invoice due, certificate ready, job assigned).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Customize customer communications to match your brand voice.</p>
                    `
                }
            ]
        },
        {
            id: 'job-scheduling',
            title: 'Job & Scheduling Settings',
            content: `
                <p class="mb-6">
                    How jobs are created, assigned, and scheduled.
                </p>
            `,
            subsections: [
                {
                    title: 'Job Config',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Auto-assign rules, scheduling defaults, SLA tracking, notification triggers, lead-time windows for service contracts.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Automates engineer assignment and ensures jobs appear at the right time.</p>
                        <p class="text-gray-700">
                            <a href="/docs/jobs" class="text-blue-600 hover:underline">→ See Jobs Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Shift Tracking',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Engineer clock-in/out, shift calendar, overtime rules, auto-close settings.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Tracks field engineer hours for payroll and utilization reporting.</p>
                        <p class="text-gray-700">
                            <em>Shift tracking guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Calendar Integration',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Google Calendar, Microsoft 365, and ICS feed connections. Two-way sync, availability blocking, token refresh.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Engineers see their jobs in their personal calendar. Office staff see availability when scheduling.</p>
                        <p class="text-gray-700">
                            <em>Calendar integration guide coming soon.</em>
                        </p>
                    `
                }
            ]
        },
        {
            id: 'financial',
            title: 'Financial Settings',
            content: `
                <p class="mb-6">
                    Invoicing, payments, and accounting.
                </p>
            `,
            subsections: [
                {
                    title: 'Invoicing',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Default payment terms (net 30, net 60), VAT rates, PO number requirements, recurring invoice settings, deposit handling.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Sets financial defaults for all invoices. Ensures compliance with VAT rules.</p>
                        <p class="text-gray-700">
                            <a href="/docs/invoicing" class="text-blue-600 hover:underline">→ See Invoicing Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Billing',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Your Opscel subscription plan (Starter / Team / Business), upgrade/downgrade options, billing history, payment method.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Manage your subscription and view invoices for your Opscel account.</p>
                        <p class="text-gray-700">
                            <em>Billing & tier limits guide coming soon.</em>
                        </p>
                    `
                }
            ]
        },
        {
            id: 'integrations',
            title: 'Integration Settings',
            content: `
                <p class="mb-6">
                    Connect Opscel to external services.
                </p>
            `,
            subsections: [
                {
                    title: 'Xero Mappings',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Xero OAuth connection, account code mapping (which Opscel categories go to which Xero accounts), sync status.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Posts invoices to Xero automatically. Syncs payments back to Opscel.</p>
                        <p class="mb-4"><strong>Availability:</strong> Business tier</p>
                        <p class="text-gray-700">
                            <a href="/docs/accounting-integration" class="text-blue-600 hover:underline">→ See Accounting Integration Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Accounting Mappings (QuickBooks)',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> QuickBooks Online OAuth, account mapping, sync status, CDC (change data capture) settings.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Posts invoices to QuickBooks. Syncs payments and customer changes.</p>
                        <p class="mb-4"><strong>Availability:</strong> Business tier</p>
                        <p class="text-gray-700">
                            <a href="/docs/accounting-integration" class="text-blue-600 hover:underline">→ See Accounting Integration Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Telegram',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Telegram bot notifications for team (job assigned, job completed, invoice sent, certificate ready, service due reminders).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Get instant mobile notifications without email clutter.</p>
                        <p class="text-gray-700">
                            <em>Telegram bot guide coming soon.</em>
                        </p>
                    `
                }
            ]
        },
        {
            id: 'team',
            title: 'Team Management',
            content: `
                <p class="mb-6">
                    Who has access and what they can do.
                </p>
            `,
            subsections: [
                {
                    title: 'Team Members',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> User invites, role assignment (7 fixed roles: Super Admin, Admin, Manager, Engineer, Viewer, Finance, Field Manager).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Controls who can create jobs, issue certificates, send invoices, etc.</p>
                        <p class="text-gray-700">
                            <em>Team, roles & permissions guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Permissions Overview',
                    content: `
                        <p class="mb-2"><strong>What it shows:</strong> Matrix of what each role can do (read-only reference).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Understand permission differences before assigning roles.</p>
                    `
                }
            ]
        },
        {
            id: 'data',
            title: 'Data Management',
            content: `
                <p class="mb-6">
                    Import, export, and organize your data.
                </p>
            `,
            subsections: [
                {
                    title: 'CSV Import/Export',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Bulk import customers, jobs, invoices, assets from CSV files. Export data for reporting/backup.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Migrate from spreadsheets or legacy systems. Export for external analysis.</p>
                        <p class="text-gray-700">
                            <em>Data import/export guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Product Options',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Product categories (Labour, Materials, Equipment, Other), units (hours, items, meters), markup percentages.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Defines how parts and services are priced and invoiced.</p>
                        <p class="mb-4"><strong>Availability:</strong> Business tier</p>
                    `
                },
                {
                    title: 'Asset Tracking',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Auto-promotion rules (which worksheets create asset records), parent-child hierarchy settings, service cadence defaults.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Automatically build your asset register from field worksheets.</p>
                        <p class="mb-4"><strong>Availability:</strong> Business tier</p>
                        <p class="text-gray-700">
                            <a href="/docs/asset-tracking" class="text-blue-600 hover:underline">→ See Asset Tracking Guide</a>
                        </p>
                    `
                },
                {
                    title: 'Data Purge',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Bulk delete old jobs, quotes, or invoices (with safeguards).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Clean up test data or remove abandoned records. Use with caution—cannot be undone.</p>
                    `
                },
                {
                    title: 'Document Folders',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> How job documents are organized in the document library (folder structure, auto-filing rules).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Keeps uploaded photos, PDFs, and worksheets organized by job/customer/site.</p>
                    `
                }
            ]
        },
        {
            id: 'advanced',
            title: 'Advanced Settings',
            content: `
                <p class="mb-6">
                    Power features for specific use cases.
                </p>
            `,
            subsections: [
                {
                    title: 'Migration Agent',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> AI-powered document import from Google Drive, OneDrive, Dropbox. Scan cloud storage, classify documents, match to jobs/customers.</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Bring in historical PDFs (invoices, quotes, certs, photos) when migrating to Opscel.</p>
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin only. Credit-backed (charged per document scanned).</p>
                        <p class="text-gray-700">
                            <em>Migration agent guide coming soon.</em>
                        </p>
                    `
                },
                {
                    title: 'Contact Preferences',
                    content: `
                        <p class="mb-2"><strong>What it controls:</strong> Default communication preferences for new customers (email vs SMS, notification frequency).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Respects customer communication choices and GDPR compliance.</p>
                    `
                },
                {
                    title: 'Credentials (Read-Only)',
                    content: `
                        <p class="mb-2"><strong>What it shows:</strong> API credentials for integrations (view only, no editing).</p>
                        <p class="mb-4"><strong>Why it matters:</strong> Troubleshooting integration issues with support. Shows which tokens are active.</p>
                    `
                }
            ]
        },
        {
            id: 'tips',
            title: 'Tips for Settings Management',
            subsections: [
                {
                    title: 'For New Admins',
                    content: '',
                    bullets: [
                        'Start with Company Profile and Branding—these affect every customer-facing document',
                        'Configure Document Numbering early (cannot change once documents are issued)',
                        'Set up one vertical at a time—avoid enabling everything if you do not use it',
                        'Test templates with dummy data before going live',
                        'Bookmark settings pages you visit frequently'
                    ]
                },
                {
                    title: 'For Managers',
                    content: '',
                    bullets: [
                        'Review Job Config auto-assign rules monthly as team changes',
                        'Check Xero/QuickBooks sync status weekly to catch errors early',
                        'Update Certificate Templates when standards change (e.g., BS 7671 amendments)',
                        'Audit team permissions quarterly—remove access for departed staff',
                        'Export data monthly for backup (CSV Export)'
                    ]
                },
                {
                    title: 'Common Mistakes to Avoid',
                    content: '',
                    bullets: [
                        'Changing document numbering after issuing invoices (breaks sequence)',
                        'Disabling a vertical mid-year (orphans existing certificates)',
                        'Skipping account mapping before posting invoices (goes to wrong accounts)',
                        'Forgetting to test email templates (customers see default text)',
                        'Not setting lead-time for service contracts (jobs appear too late)'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Can I hide settings I do not use?',
                    content: `
                        <p class="text-gray-700">
                            Not currently. All settings appear in the sidebar. However, settings for disabled verticals or inactive integrations
                            show a "Not Active" badge. You can safely ignore those sections.
                        </p>
                    `
                },
                {
                    title: 'Who can access settings?',
                    content: `
                        <p class="text-gray-700">
                            Super Admins and Admins see all settings. Managers see most settings except Billing and Migration Agent.
                            Engineers, Viewers, Finance, and Field Managers see only personal settings (theme, calendar, shift history).
                        </p>
                    `
                },
                {
                    title: 'Can I undo changes to settings?',
                    content: `
                        <p class="text-gray-700">
                            Most settings can be changed anytime. Exceptions: Document Numbering (locked after first use), Vertical changes
                            (affects existing certificates), and Team invites (cannot un-invite once accepted—must remove user instead).
                        </p>
                    `
                },
                {
                    title: 'Why are some settings greyed out?',
                    content: `
                        <p class="text-gray-700">
                            Greyed-out settings are locked to your current plan tier. For example, Quotations and Products require Business tier.
                            Upgrade your plan in Settings → Billing to unlock them.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: "Engineer's guide to completing jobs in the field",
            href: '/docs/field-service'
        },
        {
            title: 'Certificates',
            description: 'Creating and issuing certificates from completed jobs',
            href: '/docs/certificates'
        },
        {
            title: 'Invoicing',
            description: 'Converting completed jobs into customer invoices',
            href: '/docs/invoicing'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'End-to-end workflow from quote to job to invoice',
            href: '/docs/quote-to-invoice-workflow'
        }
    ]
};
