import { IFeatureDetail } from '@/types';

export const teamDetail: IFeatureDetail = {
    slug: 'team',
    title: 'Give Your Team Access Without Giving Up Control',
    subtitle: 'Opscel Team Management',
    heroDescription: 'Your engineer doesn\'t need to see profit margins. Your office manager doesn\'t need to change subscription billing. Opscel\'s 8-role permission system ensures everyone sees what they need—and nothing they shouldn\'t.',
    iconId: 'icon-user-roles',

    featureHighlights: [
        {
            iconId: 'icon-user-roles',
            title: '8 Role-Based Permission Levels',
            description: 'Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Site Manager, Engineer, Viewer. Each role has a purpose-built permission set—Engineers see jobs and certificates, Accounts sees invoices and reports, Sales Manager can quote but only ever views invoices.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Granular Permission Control',
            description: 'Control who can create jobs, approve quotes, issue certificates, post invoices, manage team members, change billing. Dozens of permission flags ensure proper access control without over-complicating setup.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Invite Team Members by Email',
            description: 'Enter email, select role, send invite. Team member gets email with sign-up link, sets password, logs in. No manual account creation, no password sharing.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Team Activity Audit Log',
            description: 'See who created which job, who approved that quote, who posted the invoice. Complete audit trail of team actions with timestamps and user attribution. Critical for compliance and dispute resolution.'
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
            description: '1 user on Starter, 3 on Team, 5 on Business—then £29/month per additional user, flat on every tier. Scale team size without tier jumps. Add temporary staff for busy season, remove when quiet. No long-term commitment per user.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Role-Scoped Financial Boundaries',
            description: 'Sales Manager can quote and win work but can never raise or edit an invoice—it only sees whether the money arrived. Site Manager and Engineer carry no financial permissions at all. The role, not a setting you have to remember, keeps that boundary.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Team Tier Feature (3 Users)',
            description: 'The full 8-role permission system is available on Team tier (£99/month, 3 users) and Business tier (£149/month, 5 users). Starter tier (£49/month, 1 user) still gets the same roles to choose from as your business grows into them.'
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
            description: 'Team member clicks link, sets password, and logs in to see a role-specific dashboard (Engineers see their jobs, Site Manager sees scheduling and team capacity).'
        },
        {
            stepNumber: 3,
            title: 'Assign Jobs',
            description: 'Office creates job, assigns to engineer. Engineer gets notification, sees job on dashboard, checks in/out via GPS, completes work.'
        },
        {
            stepNumber: 4,
            title: 'Monitor Activity',
            description: 'Audit log shows who did what—job created by Sarah, certificate approved by Dave, invoice posted by Accounts. Complete accountability for team actions.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                '8-role permission system prevents unauthorized changes to billing or accounting',
                'Team activity audit log shows who created jobs, approved quotes, posted invoices',
                'Flexible user limits—add temporary staff for busy season without tier jumps',
                'Sales Manager can sell freely but can never raise or edit an invoice',
                'Site Manager and Engineer carry no financial permissions at all',
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
                'Get job notifications when the office assigns work',
                'See team members assigned to same job for two-person EICRs',
                'No access to irrelevant data (profit margins, billing, other engineers\' jobs)'
            ]
        }
    ],

    stats: [
        {
            value: '8 roles',
            label: 'Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Site Manager, Engineer, Viewer'
        },
        {
            value: '£29/month',
            label: 'Per additional user beyond tier limit—no tier jump required'
        },
        {
            value: 'Dozens',
            label: 'Of granular permission flags for fine-grained access control per role'
        }
    ],

    comparison: [
        {
            feature: '8 role-based permission levels',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Granular permission control (fine-grained flags)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Email invitation onboarding',
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
            feature: 'Role-enforced financial boundaries (e.g. sales can quote, never invoice)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'What are the 8 role types?',
            answer: 'Super Admin (full system access), Admin (everything except critical billing/business settings), Accounts (invoices, payments and financial reports), Contract Manager (customers, quotes, service contracts and certificates), Sales Manager (full quoting, read-only view of invoices), Site Manager (job scheduling and field ops, no financial access), Engineer (assigned jobs and certificates, field-only), Viewer (read-only across customers, quotes and reports). Each role has a permission set matched to that job function.'
        },
        {
            question: 'Can I customize role permissions?',
            answer: 'Not per-user, but you can choose from 8 predefined roles with proven permission sets covering most contractor team structures. If you need a unique setup, contact support to discuss.'
        },
        {
            question: 'How does multi-engineer assignment work?',
            answer: 'When creating a job, select multiple engineers and designate a primary contact. All assigned engineers see the job on their dashboard, can check in/out with GPS, upload photos, and log defects. Job duration sums all engineers\' hours. Customer sees all engineer names on certificate.'
        },
        {
            question: 'What happens when a user leaves the company?',
            answer: 'Deactivate their account immediately—they lose access to the dashboard and mobile/field app. Their historical activity (jobs created, certificates issued) remains in the audit log for compliance. Deactivation frees up a user slot for a replacement hire.'
        },
        {
            question: 'Can a Sales Manager see invoices?',
            answer: 'Yes, but read-only—Sales Manager can view whether an invoice was paid, but cannot create, edit or post one. That boundary is enforced by the role, not left to a setting someone could get wrong.'
        },
        {
            question: 'What if I exceed my user limit?',
            answer: 'Starter includes 1 user, Team includes 3, Business includes 5. Need more? Add users at £29/month each—no tier jump required. Example: Team tier (£99) + 2 extra users = £157/month total. Scale smoothly without jumping to next tier.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
