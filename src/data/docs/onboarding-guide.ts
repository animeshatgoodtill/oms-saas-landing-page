import { IDocGuide } from '@/types';

export const onboardingGuide: IDocGuide = {
    slug: 'onboarding',
    title: 'Onboarding for New Businesses',
    description: 'First-time setup checklist for new Opscel accounts. Complete these steps in order to go from sign-up to first job scheduled in under 60 minutes.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        This is your day-one checklist. It walks you through the essential setup steps in the right order so you can start
                        using Opscel immediately without getting lost in settings. Think of it as the fastest path from "empty account" to "first job booked."
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Business owners, office managers setting up a new account<br/>
                        <strong>Time to complete:</strong> 45-60 minutes<br/>
                        <strong>Key benefit:</strong> Avoid setup mistakes that require later cleanup
                    </p>
                </div>
                <p class="mb-6">
                    You will configure: company profile, industry verticals, document numbering, your first team member, and a test job.
                    Advanced features (branding, integrations, templates) can wait until later.
                </p>
            `
        },
        {
            id: 'checklist',
            title: 'Setup Checklist',
            subsections: [
                {
                    title: 'Have the following ready',
                    content: '',
                    bullets: [
                        'Company legal name and Companies House registration number',
                        'VAT number (if VAT registered)',
                        'Business address, contact email, and phone number',
                        'Industry verticals you operate in (electrical / fire safety / low-carbon)',
                        'Accreditation numbers (NICEIC, NAPIT, BAFE, FIA if applicable)',
                        'One engineer\'s name and email for testing'
                    ]
                },
                {
                    title: 'Complete these 7 steps in order',
                    content: '',
                    bullets: [
                        '<strong>Step 1:</strong> Complete company profile (Settings → Company Profile)',
                        '<strong>Step 2:</strong> Enable active verticals (Settings → Active Verticals)',
                        '<strong>Step 3:</strong> Add accreditation numbers (Settings → Electrical/Fire Options)',
                        '<strong>Step 4:</strong> Configure document numbering ⚠️ Cannot change later (Settings → Document Numbering)',
                        '<strong>Step 5:</strong> Invite your first team member (Settings → Team Members)',
                        '<strong>Step 6:</strong> Create a test customer (Customers → Add Customer)',
                        '<strong>Step 7:</strong> Create and schedule a test job (Jobs → Create Job)'
                    ]
                }
            ]
        },
        {
            id: 'setup-copilot',
            title: 'Setup Copilot (AI-Assisted Setup)',
            content: `
                <p class="mb-4">
                    Opscel also offers a newer, AI-assisted way to work through onboarding: the <strong>Setup Copilot</strong>, a chat
                    interface (gated to Admin/Super Admin) that can read a spreadsheet, PDF, scanned document, or your company
                    website and propose setup changes from it — filling in your company profile, matching accreditation bodies,
                    importing a workbook of customers or products, or drafting terms.
                </p>
                <p class="mb-4">
                    It never writes to your account directly. Every proposal is a suggestion you review and approve — applying one
                    runs through the exact same permission-gated setup screens you'd use by hand, so nothing happens that you
                    couldn't have done yourself.
                </p>
                <p class="text-gray-700">
                    It's a newer capability, scoped specifically to onboarding conversations rather than general account changes,
                    reachable from the nav and from a dashboard setup card. Ask support if you'd like a hand trying it during
                    setup.
                </p>
            `
        },
        {
            id: 'tips',
            title: 'Tips for Success',
            subsections: [
                {
                    title: 'For Business Owners',
                    content: '',
                    bullets: [
                        'Complete steps 1-4 yourself—these are one-time decisions about company identity and numbering',
                        'Delegate steps 5-7 to your office manager for daily operations training',
                        'Schedule a 30-minute team walkthrough after setup to demo the field app',
                        'Plan a 2-week parallel run with your old system to identify workflow gaps'
                    ]
                },
                {
                    title: 'For Office Managers',
                    content: '',
                    bullets: [
                        'Create 5-10 test jobs in the first week to practice scheduling',
                        'Keep a cheat sheet with document prefixes and common job types',
                        'Explore the <a href="/docs/settings-tour" class="text-blue-600">Settings Tour</a> to learn optional features',
                        'Review completed jobs every Friday to ensure certificates are issued'
                    ]
                },
                {
                    title: 'Common Mistakes to Avoid',
                    content: '',
                    bullets: [
                        'Skipping document numbering setup—creates confusion when documents are already issued',
                        'Inviting all engineers before testing—results in mass confusion',
                        'Enabling all verticals "just in case"—clutters menus with unused certificate types',
                        'Not testing field app before go-live—engineers cannot log in on-site',
                        'Forgetting to import existing customers—forces manual data re-entry'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Can I skip steps and come back later?',
                    content: `
                        <p class="text-gray-700">
                            Steps 1-4 should be completed in order before creating jobs. Steps 5-7 can be done later, but you cannot schedule
                            jobs until you have at least one customer and one engineer. Branding and integrations can be added anytime.
                        </p>
                    `
                },
                {
                    title: 'What if I make a mistake in company profile?',
                    content: `
                        <p class="text-gray-700">
                            Company profile can be edited anytime. Changes apply to new documents immediately. Existing PDFs (already-issued
                            invoices/certificates) do not update retroactively for audit compliance.
                        </p>
                    `
                },
                {
                    title: 'How do I reset document numbering?',
                    content: `
                        <p class="text-gray-700">
                            Contact support@opscel.com before issuing your first document if you need changes. Once the first invoice/quote/certificate
                            is issued, numbering is permanently locked for compliance.
                        </p>
                    `
                },
                {
                    title: 'Do I need to invite my whole team right away?',
                    content: `
                        <p class="text-gray-700">
                            No. Start with 1-2 people to test the workflow. Add more once you are confident. You can invite unlimited users on all tiers.
                        </p>
                    `
                },
                {
                    title: 'Can I use Opscel without the field app?',
                    content: `
                        <p class="text-gray-700">
                            Yes. Office staff can manage everything from the admin panel. However, you lose offline capture, photo geo-tagging,
                            and real-time engineer updates.
                        </p>
                    `
                },
                {
                    title: 'What happens after my trial ends?',
                    content: `
                        <p class="text-gray-700">
                            Your 30-day free trial includes full access on the plan you signed up for. A card is required at signup, but
                            you’re not charged until day 30—at that point billing starts automatically at your plan’s price (Starter £49/mo,
                            Team £99/mo, Business £149/mo, all + VAT), plus 50% off that base price for your first 3 months. Downgrade,
                            upgrade, or cancel any time from Settings → Billing. All data remains accessible—no lock-in.
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
