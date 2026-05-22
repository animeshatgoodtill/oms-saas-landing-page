import { IDocGuide } from '@/types';

export const customerPortalGuide: IDocGuide = {
    slug: 'customer-portal',
    title: 'Customer Portal - Contractor Guide',
    description: 'How to invite customers to access their quotes, certificates, and invoices online.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <p class="text-sm text-blue-900">
                        <strong>Business Plan Required:</strong> Customer Portal is available exclusively on the Business plan. <a href="/pricing" class="underline hover:no-underline">Upgrade your plan</a> to enable this feature.
                    </p>
                </div>
                <p class="mb-6">
                    The Customer Portal allows your customers to:
                </p>
            `,
            subsections: [
                {
                    title: 'What Customers Can Do',
                    content: '',
                    bullets: [
                        'View and approve/decline quotations',
                        'Download issued certificates (EIC, EICR, Fire Alarm, etc.)',
                        'Track invoices and payment status',
                        'Access documents 24/7 without contacting your office'
                    ]
                },
                {
                    title: 'Benefits for Your Business',
                    content: '',
                    bullets: [
                        'Faster quote approvals',
                        'Reduced admin time answering "where\'s my certificate?" calls',
                        'Professional customer experience',
                        'Automatic activity logging for compliance'
                    ]
                }
            ]
        },
        {
            id: 'invite-customer',
            title: 'How to Invite a Customer',
            subsections: [
                {
                    title: 'Step 1: Enable Portal Access for a Contact',
                    content: '',
                    steps: [
                        { step: 'Navigate to Customers in the main menu', description: '' },
                        { step: 'Click on the customer you want to give portal access', description: '' },
                        { step: 'Go to the Contacts tab', description: '' },
                        { step: 'Find the contact you want to invite (they must have an email address)', description: '' },
                        { step: 'Toggle on Customer Portal Access', description: '' }
                    ]
                },
                {
                    title: 'Step 2: Send the Portal Invite',
                    content: `
                        <p class="mb-4">Once portal access is enabled:</p>
                        <ol class="list-decimal pl-6 mb-6 space-y-2">
                            <li>Click the <strong>Send Invite</strong> button next to the toggle</li>
                            <li>The contact will receive an email with a sign-in link</li>
                            <li>The link is valid for 48 hours</li>
                        </ol>
                        <p class="mb-4">The email includes:</p>
                    `,
                    bullets: [
                        'Your company name and branding',
                        'A secure magic link (no passwords needed)',
                        'Instructions on how to access the portal'
                    ]
                },
                {
                    title: 'Step 3: Confirm Delivery',
                    content: 'After sending:',
                    bullets: [
                        'A success message confirms the invite was sent',
                        'The contact\'s email inbox will have the invite within seconds',
                        'They can click the link to access their portal immediately'
                    ]
                }
            ]
        },
        {
            id: 'managing-access',
            title: 'Managing Portal Access',
            subsections: [
                {
                    title: 'Viewing Access Status',
                    content: 'On any customer\'s contact detail page, you can see:',
                    bullets: [
                        'Whether portal access is enabled',
                        'Number of active sessions',
                        'When they last signed in (via Activity Log)'
                    ]
                },
                {
                    title: 'Revoking Access',
                    content: `
                        <p class="mb-4">To remove someone's portal access:</p>
                        <ol class="list-decimal pl-6 mb-4 space-y-2">
                            <li>Go to the contact's detail page</li>
                            <li>Toggle off <strong>Customer Portal Access</strong></li>
                            <li>All active sessions are immediately revoked</li>
                        </ol>
                        <p class="mb-6">
                            The customer will be logged out and won't be able to sign back in until you re-enable access.
                        </p>
                    `
                },
                {
                    title: 'Resending Invites',
                    content: 'If a customer\'s magic link expired (48 hours) or they lost the email:',
                    steps: [
                        { step: 'Simply click Send Invite again', description: '' },
                        { step: 'A new magic link will be generated', description: '' },
                        { step: 'The old link becomes invalid', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'what-customers-see',
            title: 'What Customers Can See',
            subsections: [
                {
                    title: 'Quotations',
                    content: '',
                    bullets: [
                        'All non-draft quotes linked to their customer record',
                        'Quote details, line items, and totals',
                        'Approve or Decline buttons for pending quotes',
                        'Quote validity dates'
                    ]
                },
                {
                    title: 'Certificates',
                    content: '',
                    bullets: [
                        'All issued certificates for their properties',
                        'Certificate type and number',
                        'Issue and expiry dates',
                        'Download PDF button for compliance records'
                    ]
                },
                {
                    title: 'Invoices',
                    content: '',
                    bullets: [
                        'Outstanding and paid invoices',
                        'Due dates and payment status',
                        'Invoice totals'
                    ]
                }
            ]
        },
        {
            id: 'activity-logging',
            title: 'Activity Logging',
            content: `
                <p class="mb-6">
                    All customer portal activity is logged automatically. Access the activity log from <strong>Settings → Portal Activity</strong> to see all customer interactions.
                </p>
            `,
            table: {
                headers: ['Activity', 'Logged Details'],
                rows: [
                    ['Login', 'IP address, browser, timestamp'],
                    ['View Quote', 'Which quote, when'],
                    ['Approve Quote', 'Who approved, their name, timestamp'],
                    ['Decline Quote', 'Reason provided, timestamp'],
                    ['View Certificate', 'Which certificate, when'],
                    ['Download PDF', 'Certificate ID, timestamp']
                ]
            }
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'Who to Invite',
                    content: '',
                    bullets: [
                        'Property managers who review multiple certificates',
                        'Office managers who approve quotes on behalf of companies',
                        'Primary contacts who handle all communication'
                    ]
                },
                {
                    title: 'Who NOT to Invite',
                    content: '',
                    bullets: [
                        'Contacts without email addresses',
                        'Temporary or one-time contacts',
                        'Contacts who prefer phone/email communication'
                    ]
                },
                {
                    title: 'Tips for Success',
                    content: '',
                    steps: [
                        { step: 'Explain the portal when enabling - let customers know they\'ll receive an email', description: '' },
                        { step: 'Set expectations - tell them they can approve quotes online', description: '' },
                        { step: 'Include in your process - mention portal access when sending quotes', description: '' },
                        { step: 'Check activity - monitor who\'s using the portal vs. who needs a reminder', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Customer says they didn\'t receive the invite',
                    content: '',
                    steps: [
                        { step: 'Ask them to check spam/junk folders', description: '' },
                        { step: 'Verify their email address is correct', description: '' },
                        { step: 'Resend the invite', description: '' },
                        { step: 'Check your email deliverability (Resend dashboard)', description: '' }
                    ]
                },
                {
                    title: 'Customer\'s link says "expired"',
                    content: '',
                    bullets: [
                        'Magic links expire after 48 hours',
                        'Click Send Invite to generate a new link'
                    ]
                },
                {
                    title: 'Customer can\'t see their quotes/certificates',
                    content: '',
                    bullets: [
                        'Verify the documents are linked to their customer record',
                        'Quotes must not be in "draft" status',
                        'Certificates must be "issued" status'
                    ]
                },
                {
                    title: '"Upgrade required" error',
                    content: '',
                    bullets: [
                        'Customer Portal requires the Business plan',
                        'Visit Settings → Billing to upgrade'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQ',
            subsections: [
                {
                    title: 'Do customers need to create a password?',
                    content: 'No. The portal uses magic link authentication - customers click a link in their email to sign in. No passwords to remember or reset.'
                },
                {
                    title: 'How long do sessions last?',
                    content: '30 days. After that, customers need to request a new sign-in link.'
                },
                {
                    title: 'Can multiple contacts access the same customer\'s data?',
                    content: 'Yes. Each contact with portal access enabled can sign in and see data for their associated customer.'
                },
                {
                    title: 'Can customers edit anything?',
                    content: 'No. The portal is read-only except for approving/declining quotes. Customers cannot modify quotes, certificates, or invoices.'
                },
                {
                    title: 'Is the portal secure?',
                    content: 'Yes. All data is served over HTTPS, sessions are secure cookies, and all activity is logged. Each contact can only see data for customers they\'re associated with.'
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Certificates',
            description: 'Certificates delivered through the customer portal',
            href: '/docs/certificates'
        },
        {
            title: 'Invoicing',
            description: 'Customer invoices visible in the portal',
            href: '/docs/invoicing'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'End-to-end workflow view for customers',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Field Service App',
            description: 'Field work that generates customer-visible records',
            href: '/docs/field-service'
        }
    ]
};
