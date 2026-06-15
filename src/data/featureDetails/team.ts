import { IFeatureDetail } from '@/types';

export const teamDetail: IFeatureDetail = {
    slug: 'team',
    title: 'Give Your Team Access Without Giving Up Control',
    subtitle: 'Opscel Team Management',
    heroDescription: 'Your engineer doesn\'t need to see profit margins. Your office manager doesn\'t need to change subscription billing. Opscel\'s 7-role permission system ensures everyone sees what they need—and nothing they shouldn\'t.',
    iconId: 'icon-user-roles',

    featureHighlights: [
        {
            iconId: 'icon-user-roles',
            title: '7 Role-Based Permission Levels',
            description: 'Owner, Admin, Manager, Engineer, Office Staff, Read-Only, Accountant. Each role has specific permissions—Engineers see jobs and certificates, Accountants see invoices and Xero, Managers see scheduling and team capacity.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Granular Permission Control',
            description: 'Control who can create jobs, approve quotes, issue certificates, post invoices to Xero, manage team members, change billing. 40+ permission flags ensure proper access control without over-complicating setup.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Invite Team Members by Email',
            description: 'Enter email, select role, send invite. Team member gets email with sign-up link, sets password, logs in. No manual account creation, no password sharing. Invitation expires after 7 days for security.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Team Activity Audit Log',
            description: 'See who created which job, who approved that quote, who posted the invoice to Xero. Complete audit trail of team actions with timestamps and user attribution. Critical for compliance and dispute resolution.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Multi-Engineer Job Assignment',
            description: 'Two-person EICR? Assign both engineers to the job, designate primary contact. Both see job on their dashboard, can check in/out, upload photos. Job duration sums both engineers\' hours for accurate billing.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Team Capacity Dashboard',
            description: 'See each team member\'s workload with color-coded utilization bars. Green = healthy capacity, Amber = busy, Red = overloaded. Assign emergency calls to engineers with availability, not those already slammed.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Engineer-Specific Dashboards',
            description: 'Engineers log in, see their jobs for today, this week, upcoming. Dashboard shows their assigned jobs, certificates awaiting approval, defects they logged. No clutter from other engineers\' work.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Flexible User Limits',
            description: '3 users on Starter, 5 on Team, 8 on Business—then £10/month per additional user. Scale team size without tier jumps. Add temporary staff for busy season, remove when quiet. No long-term commitment per user.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Two-Factor Authentication',
            description: 'Protect accounts with 2FA (TOTP via authenticator apps). Require 2FA for Admin and Owner roles to prevent unauthorized billing or Xero changes. Optional for other roles based on security policy.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Session Management',
            description: 'See active sessions per user (web, mobile, Telegram bot). Revoke sessions remotely if device lost or user leaves company. Prevent unauthorized access from stolen phones or laptops.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Team Tier Feature (5 Users)',
            description: 'Advanced role permissions (7 roles) available on Team tier (£49/month, 5 users) and Business tier (£79/month, 8 users). Starter tier (£29/month, 3 users) has basic roles: Owner, Engineer, Office Staff.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Invite Team Member',
            description: 'Go to Team settings, enter email, select role (e.g., Engineer), send invite. Team member gets email with sign-up link.'
        },
        {
            stepNumber: 2,
            title: 'Set Password & Log In',
            description: 'Team member clicks link, sets password, optionally enables 2FA. Logs in and sees role-specific dashboard (Engineers see their jobs, Managers see team capacity).'
        },
        {
            stepNumber: 3,
            title: 'Assign Jobs',
            description: 'Office creates job, assigns to engineer. Engineer gets notification (Telegram or email), sees job on dashboard, checks in/out via GPS, completes work.'
        },
        {
            stepNumber: 4,
            title: 'Monitor Activity',
            description: 'Audit log shows who did what—job created by Sarah, certificate approved by Dave, invoice posted to Xero by Owner. Complete accountability for team actions.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                '7-role permission system prevents unauthorized changes to billing or Xero',
                'Team activity audit log shows who created jobs, approved quotes, posted invoices',
                'Flexible user limits—add temporary staff for busy season without tier jumps',
                '2FA for Admin/Owner roles protects sensitive financial and customer data',
                'Session management revokes access from lost devices or departed employees',
                'Team capacity dashboard shows workload distribution across engineers'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Email invites onboard team members in under 5 minutes—no manual setup',
                'Role-based dashboards show engineers only their jobs—reduces confusion',
                'Multi-engineer assignment for two-person jobs with shared check-in/out',
                'Capacity dashboard reveals who can take emergency calls without overload',
                'Granular permissions control who can approve quotes or issue certificates'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Engineer-specific dashboard shows only your assigned jobs—no clutter',
                'Get job notifications via Telegram or email when office assigns work',
                'See team members assigned to same job for two-person EICRs',
                'No access to irrelevant data (profit margins, billing, other engineers\' jobs)'
            ]
        }
    ],

    stats: [
        {
            value: '7 roles',
            label: 'Owner, Admin, Manager, Engineer, Office Staff, Read-Only, Accountant'
        },
        {
            value: '£10/month',
            label: 'Per additional user beyond tier limit—no tier jump required'
        },
        {
            value: '40+',
            label: 'Permission flags for granular access control per role'
        }
    ],

    comparison: [
        {
            feature: '7 role-based permission levels',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Granular permission control (40+ flags)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Email invitation with auto-expiry (7 days)',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Team activity audit log with timestamps',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Multi-engineer job assignment',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Team capacity dashboard (color-coded utilization)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Engineer-specific dashboards (filtered by user)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Two-factor authentication (TOTP)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Session management (revoke remote sessions)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'What are the 7 role types?',
            answer: 'Owner (full access), Admin (full except billing), Manager (scheduling + team + reports), Engineer (jobs + certificates assigned to them), Office Staff (customers + jobs + quotes), Read-Only (view-only access), Accountant (invoices + Xero + financial reports). Each role has specific permission sets optimized for job function.'
        },
        {
            question: 'Can I customize role permissions?',
            answer: 'Not per-user, but you can choose from 7 predefined roles with proven permission sets. Custom role creation adds complexity and security risk. Opscel\'s roles cover 95% of contractor team structures. If you need a unique setup, contact support to discuss.'
        },
        {
            question: 'How does multi-engineer assignment work?',
            answer: 'When creating a job, select multiple engineers and designate a primary contact. All assigned engineers see the job on their dashboard, can check in/out with GPS, upload photos, and log defects. Job duration sums all engineers\' hours. Customer sees all engineer names on certificate.'
        },
        {
            question: 'What happens when a user leaves the company?',
            answer: 'Deactivate their account immediately—they lose access to dashboard, Telegram bot, and mobile app. Revoke all active sessions remotely. Their historical activity (jobs created, certificates issued) remains in audit log for compliance. Deactivation frees up a user slot for replacement hire.'
        },
        {
            question: 'Can I require 2FA for all team members?',
            answer: 'You can require 2FA for Admin and Owner roles (recommended for security). Other roles can enable 2FA optionally. Mandatory 2FA for all roles depends on your security policy—contact support to enable account-wide enforcement if needed.'
        },
        {
            question: 'What if I exceed my user limit?',
            answer: 'Starter includes 3 users, Team includes 5, Business includes 8. Need more? Add users at £10/month each—no tier jump required. Example: Team tier (£49) + 2 extra users = £69/month total. Scale smoothly without jumping to next tier.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
