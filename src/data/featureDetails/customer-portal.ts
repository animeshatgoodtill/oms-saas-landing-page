import { IFeatureDetail } from '@/types';

export const customerPortalDetail: IFeatureDetail = {
    slug: 'customer-portal',
    title: 'Let Customers Approve Quotes and Download Certificates—Anytime',
    subtitle: 'Opscel Customer Portal',
    heroDescription: 'Stop chasing customers for quote approvals. Stop emailing the same certificate three times. Give your customers a secure portal to view quotes, approve with one click, and download certificates 24/7. Faster approvals, fewer admin calls, professional experience.',
    iconId: 'icon-smart-customer',
    screenshotImage: '/images/ui/04-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-smart-customer',
            title: 'One-Click Quote Approvals',
            description: 'Customer receives quote via portal, reviews line items, clicks "Approve", enters name, done. No printing, signing, scanning. Quote approval takes 30 seconds instead of 3 days chasing via email/phone. Status updates in Opscel instantly.'
        },
        {
            iconId: 'icon-signature',
            title: 'Magic Link Authentication (No Passwords)',
            description: 'Customers click link in email, signed in automatically. No password to create, remember, or reset. Links expire after 15 minutes for security. Sessions last 30 days. Request new link anytime—takes 10 seconds.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Certificate Self-Service Download',
            description: 'Customer needs EICR for insurance? They log into portal, find certificate, download PDF. 2am or 2pm—doesn&apos;t matter. No waiting for office hours, no "can you resend that cert?" emails. Reduces admin calls by 40%.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Activity Logging for Compliance',
            description: 'Every portal action logged: who viewed which quote, when approved, IP address, browser, timestamp. Customer claims "never saw that quote"? Activity log shows they viewed it Tuesday at 3pm. Dispute-proof audit trail.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Granular Access Control Per Contact',
            description: 'Enable portal access per contact, not per customer. Property manager gets access, maintenance guy doesn&apos;t. Toggle on/off anytime. Revoke access instantly—all sessions end immediately. Complete control over who sees what.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Instant Invite Delivery',
            description: 'Toggle portal access on, click "Send Invite", customer receives email in seconds. Link valid for 15 minutes. Resend anytime if expired or lost. No manual email writing, no copy-pasting links. One button, done.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Quote Status Visibility',
            description: 'Customers see all quotes: pending, approved, declined, expired. Filter by status, search by description, sort by date. Total transparency—builds trust, reduces "what happened to my quote?" calls.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Complete Certificate History',
            description: 'All certificates for all customer sites in one place. EICs, EICRs, Fire Alarms, PAT tests, Solar PV commissioning certs. Organized by type, date, address. Customer switches property managers? New contact sees complete service history instantly.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Invoice Tracking',
            description: 'Customers see outstanding invoices, due dates, payment status. Paid/Overdue/Outstanding badges. Total transparency on what they owe. Reduces "did you receive payment?" calls—they check portal instead.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Rate-Limited Security',
            description: 'Auth endpoints rate-limited to 5-10 requests/minute. Prevents brute force attacks, credential stuffing. All data served over HTTPS. Session cookies secure and HTTP-only. Customers only see data for their associated business—complete data isolation.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Business Tier Exclusive',
            description: 'Customer Portal available on Business tier only (£79/month, 8 users). Includes unlimited portal invites, activity logging, quote approvals, certificate downloads. Starter and Team tiers do not include portal access.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Enable Portal Access for Contact',
            description: 'Go to customer record, Contacts tab, find contact with email address. Toggle "Customer Portal Access" on. System validates email exists before allowing.'
        },
        {
            stepNumber: 2,
            title: 'Send Portal Invite',
            description: 'Click "Send Invite" button. Contact receives branded email with magic link valid for 15 minutes. Link includes your company name, instructions, secure token. Delivered via Resend in seconds.'
        },
        {
            stepNumber: 3,
            title: 'Customer Signs In',
            description: 'Customer clicks link in email, signed in automatically (no password needed). Sees dashboard with pending quotes, active certificates, outstanding invoices. Session lasts 30 days before requiring new magic link.'
        },
        {
            stepNumber: 4,
            title: 'Customer Approves Quote or Downloads Cert',
            description: 'Customer reviews quote, clicks "Approve", enters full name to confirm. Status updates in Opscel instantly. Or downloads certificate PDF for insurance/compliance. All actions logged with timestamp, IP, browser.'
        },
        {
            stepNumber: 5,
            title: 'Monitor Activity Log',
            description: 'Settings → Portal Activity shows all customer interactions: logins, quote views, approvals, declines, certificate downloads. Filter by contact, date, action type. Export for compliance audits.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'Faster quote approvals—customers approve online in 30 seconds, not 3 days via email chase',
                'Reduce admin calls by 40%—customers download certificates themselves at 2am if needed',
                'Professional customer experience—positions you as modern, tech-forward contractor',
                'Activity logging for disputes—prove customer viewed quote on Tuesday at 3pm',
                'Instant revocation—toggle portal access off, all sessions end immediately',
                'Business tier feature—differentiates your service from competitors still using email attachments'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'One-button invite delivery—toggle access, click send, customer receives email in seconds',
                'No password resets—magic links mean zero "forgot password" support calls',
                'Certificate self-service—customers download PDFs themselves, stop resending via email',
                'Quote status transparency—customers see pending/approved/declined, fewer "what happened?" calls',
                'Granular access control—enable per contact, not per customer (property manager yes, maintenance guy no)',
                'Activity log shows who viewed what when—complete visibility into customer engagement'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Customers approve quotes faster—means jobs start sooner, less downtime between work',
                'Certificate questions go to portal—customers find certs themselves, stop calling you on-site',
                'Transparent service history—new contact at customer site sees all past work instantly',
                'Professional reputation—customers impressed by modern portal vs. email attachments'
            ]
        }
    ],

    stats: [
        {
            value: '30 seconds',
            label: 'Quote approval time vs. 3 days via email chase'
        },
        {
            value: '40% fewer',
            label: 'Admin calls—customers self-serve cert downloads and quote status'
        },
        {
            value: '15 min/30 days',
            label: 'Magic link expiry / session duration—secure and convenient'
        }
    ],

    comparison: [
        {
            feature: 'One-click quote approvals (no print/sign/scan)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Magic link authentication (no passwords to manage)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Certificate self-service download 24/7',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Activity logging (who viewed what when, IP, browser)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Granular access control per contact (toggle on/off)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Instant invite delivery (one-button send)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Quote status visibility (pending/approved/declined)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Complete certificate history per customer',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Rate-limited security (5-10 req/min on auth)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'How does magic link authentication work?',
            answer: 'Customer receives email with unique sign-in link valid for 15 minutes. Clicking link signs them in automatically—no password to create or remember. Session lasts 30 days. After 30 days (or if link expired), they request new link by entering email on login page. Takes 10 seconds. Zero password reset support calls. Links are single-use tokens with cryptographic security.'
        },
        {
            question: 'What happens when a customer approves a quote?',
            answer: 'Customer clicks "Approve", enters full name to confirm (acts as digital signature). Status updates in Opscel instantly—quote marked "Customer Approved" with timestamp, contact name, IP address, browser. Office gets notification. Activity log records approval with forensic details. Customer cannot undo approval (contact you if mistake). You can convert to job immediately.'
        },
        {
            question: 'Can customers edit quotes or certificates?',
            answer: 'No. Portal is read-only except for approve/decline actions on quotes. Customers cannot modify quote line items, pricing, certificate data, or invoice amounts. They can only view and download. All editing happens in Opscel by your team. This prevents accidental or malicious changes while allowing self-service access.'
        },
        {
            question: 'How do I control who has portal access?',
            answer: 'Enable per contact, not per customer. Go to customer record → Contacts tab → toggle "Customer Portal Access" on for specific contacts (requires email address). Property manager gets access, maintenance guy doesn&apos;t. Revoke anytime by toggling off—all active sessions end immediately. Contact cannot sign back in until you re-enable. Granular control prevents unauthorized access.'
        },
        {
            question: 'What does the activity log track?',
            answer: 'Every portal action: Login (IP address, browser, timestamp), View Quote (which quote, when), Approve/Decline Quote (who, reason if declined), View Certificate (which cert, when), Download PDF (cert ID, timestamp), View Invoice (which invoice, when). Access via Settings → Portal Activity. Filter by contact, date range, action type. Export CSV for compliance audits. Proves customer engagement in disputes.'
        },
        {
            question: 'Is Customer Portal available on all pricing tiers?',
            answer: 'No. Customer Portal is Business tier exclusive (£79/month, 8 users included). Includes unlimited portal invites, activity logging, quote approvals, certificate downloads, invoice tracking. Starter (£29) and Team (£49) tiers do not include portal access—customers receive quotes/certs via email attachments. Upgrade to Business via Settings → Billing to enable portal.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
