import { IDocGuide } from '@/types';

export const teamManagementGuide: IDocGuide = {
    slug: 'team-management',
    title: 'Team, Roles & Permissions',
    description: 'Manage users, assign roles, and control access in Opscel. Learn about the 8 fixed roles, how to invite team members, permission matrix, and multi-tenant access.',
    lastUpdated: '2026-05-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Super Admin, Admin (manage team)<br><strong>What:</strong> User management, role assignment, access control<br><strong>Where:</strong> Settings → Team Management<br><strong>Why:</strong> Security, role-based workflows, multi-user collaboration</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Access control:</strong> Restrict features and data by role',
                        '<strong>Security:</strong> Principle of least privilege - users get only what they need',
                        '<strong>Role-based workflows:</strong> Engineers see field app, admins see settings',
                        '<strong>Multi-user collaboration:</strong> Team members work together with appropriate access',
                        '<strong>Audit trail:</strong> Track who did what with user attribution',
                        '<strong>Multi-tenant support:</strong> Same user, different roles across businesses'
                    ]
                },
                {
                    title: '8 Fixed Roles',
                    content: '<p>Opscel has <strong>8 fixed roles</strong> that cannot be customized. Each role has a predefined set of permissions. You cannot create custom roles or modify role permissions.</p><p>Roles are designed to match common job functions in fire safety and electrical contracting businesses.</p>'
                }
            ]
        },
        {
            id: 'roles-explained',
            title: '8 Fixed Roles Explained',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Super Admin, Admin can assign roles (via Settings → Team Management)</p>'
                },
                {
                    title: 'Role Descriptions',
                    content: '',
                    table: {
                        headers: ['Role', 'Description', 'Primary Use Case'],
                        rows: [
                            ['<strong>Super Admin</strong>', 'Full system access, including billing, integrations, all settings, and all data.', 'Business owner, technical director'],
                            ['<strong>Admin</strong>', 'Full operational access to customers, jobs, quotes, invoices, certificates and team management. Cannot manage billing.', 'Office manager, operations manager'],
                            ['<strong>Accounts</strong>', 'Full invoicing and payments access, plus quotes and reports. Read-only view of customers and team; no certificates or job editing.', 'Bookkeeper, external accountant'],
                            ['<strong>Contract Manager</strong>', 'Full customer, quote, purchase-order and service-contract access; can create and issue certificates. Read-only on invoices, no team management.', 'Contracts lead, account manager'],
                            ['<strong>Sales Manager</strong>', 'Full quoting and account management. Can view whether an invoice was paid, but can never create, edit or post one.', 'Sales lead, business development'],
                            ['<strong>Site Manager</strong>', 'Full job scheduling, assignment and certificate sign-off for field operations. No financial access of any kind.', 'Field supervisor, site lead'],
                            ['<strong>Engineer</strong>', 'Field app access to assigned jobs only. Can create/edit certificates on those jobs and raise an emergency callout, but has no admin dashboard or financial access.', 'Field engineer, technician'],
                            ['<strong>Viewer</strong>', 'Read-only access to customers, quotes, invoices, certificates, service contracts and reports. Cannot create, edit, or delete anything.', 'Stakeholder, auditor, client-facing view']
                        ]
                    }
                },
                {
                    title: 'What Each Role CAN Do',
                    content: '<p><strong>Super Admin:</strong></p>',
                    bullets: [
                        'Everything every other role can do, PLUS:',
                        'Manage subscription and billing',
                        'Connect accounting integrations (Xero, QuickBooks)',
                        'Manage team (invite, remove, change roles)',
                        'Configure vertical settings (electrical, fire safety)',
                        'The only role that can remove a team member'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Admin:</strong></p>',
                    bullets: [
                        'Create and edit customers, jobs, quotes, invoices, purchase orders',
                        'Schedule visits and assign engineers',
                        'Issue certificates',
                        'Create and manage service contracts',
                        'Access all reports and analytics',
                        'Invite and edit team members (cannot remove one — Super Admin only)',
                        'CANNOT: Manage billing or accounting-integration connections'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Accounts:</strong></p>',
                    bullets: [
                        'Full invoicing and payments access',
                        'Create, edit and send quotes; convert a won quote to a job',
                        'View and edit service contracts',
                        'Access and export reports',
                        'View (not edit) customers and the team directory',
                        'CANNOT: Edit jobs, create/edit customers, issue certificates, manage team'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Contract Manager:</strong></p>',
                    bullets: [
                        'Full customer, contact, quote and purchase-order access',
                        'Create, edit and issue certificates',
                        'Create and edit jobs; full service-contract management',
                        'View and create invoices (cannot edit or post them)',
                        'View reports; operate Remote Monitoring cases',
                        'CANNOT: Manage team, billing, or accounting-integration settings'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Sales Manager:</strong></p>',
                    bullets: [
                        'Create and edit customers; full quoting and quote-sending',
                        'Create jobs (e.g. converting a won quote) but cannot edit, reassign or delete one',
                        'Create and edit service contracts',
                        'View invoices and purchase orders — read-only, by design',
                        'Access and export reports; operate Remote Monitoring cases',
                        'CANNOT: Create/edit/post invoices, issue or void certificates, edit the price book, manage team'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Site Manager:</strong></p>',
                    bullets: [
                        'Full job scheduling, assignment and status control',
                        'Full service-contract management',
                        'Create, edit and issue certificates',
                        'Register and edit assets found on site',
                        'Operate Remote Monitoring cases',
                        'CANNOT: View or touch any financial data — no quotes, invoices, or reports'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Engineer:</strong></p>',
                    bullets: [
                        'View and edit assigned jobs only',
                        'Complete jobs in the field app',
                        'Create and edit certificates on assigned jobs (cannot issue them)',
                        'Raise an emergency-callout job from the field',
                        'Upload photos, worksheets, defects, parts; capture signatures; work offline with sync',
                        'CANNOT: Access the admin dashboard, see other engineers\' jobs, issue certificates, or see any pricing/financial data'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Viewer:</strong></p>',
                    bullets: [
                        'View customers, contacts, quotes, purchase orders, products, documents, certificates and service contracts',
                        'View and export reports',
                        'CANNOT: Create, edit, or delete anything — and has no access to jobs'
                    ]
                }
            ]
        },
        {
            id: 'inviting-members',
            title: 'Inviting Team Members',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Super Admin, Admin</p>'
                },
                {
                    title: 'Email-Based Invite Process',
                    content: '<p>Opscel uses email invitations to add team members. The new user receives an email with a secure link to create their account and set their password.</p>'
                },
                {
                    title: 'Email Notification Content',
                    content: '<p>The invite email includes:</p>',
                    bullets: [
                        'Business name (e.g., "You&apos;ve been invited to join Smith Electrical on Opscel")',
                        'Inviter name (e.g., "John Smith has invited you")',
                        'Assigned role (e.g., "You&apos;ll be joining as an Engineer")',
                        'Secure activation link (expires in 7 days)',
                        'Link to help centre for getting started'
                    ]
                },
                {
                    title: 'First-Time Login Flow',
                    content: '<p>When the invitee clicks the activation link:</p>',
                    bullets: [
                        'Directed to account creation page',
                        'Enters name, creates password (authentication is handled by Stack Auth)',
                        'Accepts terms of service',
                        'Redirected to Opscel with role already assigned',
                        'Sees onboarding guide based on role (engineers see field app intro, admins see settings tour)'
                    ]
                },
                {
                    title: 'Steps to Invite Team Member',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Team Management</strong>',
                        'Click <strong>Invite Team Member</strong> button',
                        'Enter email address (must be unique, not already in this business)',
                        'Select role from dropdown (Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Site Manager, Engineer, Viewer)',
                        'Optionally add a personal message',
                        'Click <strong>Send Invite</strong>',
                        'Invite appears in "Pending Invites" list with expiry date (7 days)'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After sending invite:</p>',
                    bullets: [
                        '<strong>Success message:</strong> "Invite sent to user@example.com"',
                        '<strong>Pending invite card:</strong> Shows email, role, sent date, expires date',
                        '<strong>Resend button:</strong> If user doesn&apos;t receive email, resend invite',
                        '<strong>Revoke button:</strong> Cancel invite before user accepts',
                        '<strong>User count:</strong> Updates when user accepts (counts toward tier limit)'
                    ]
                }
            ]
        },
        {
            id: 'assigning-roles',
            title: 'Assigning Roles',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Super Admin, Admin</p>'
                },
                {
                    title: 'When to Assign',
                    content: '<p>Roles can be assigned in two ways:</p>',
                    bullets: [
                        '<strong>During invite:</strong> Select role when sending invite (recommended)',
                        '<strong>After user accepts:</strong> Change role from user list after account creation'
                    ]
                },
                {
                    title: 'Changing Roles',
                    content: '<p>Roles can be changed anytime by Super Admin or Admin:</p>',
                    bullets: [
                        'No limit on role changes',
                        'Role changes take effect <strong>immediately</strong>',
                        'User must log out and log back in to see new permissions',
                        'Activity log records role changes with timestamp and who made the change'
                    ]
                },
                {
                    title: 'Steps to Assign or Change Role',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Team Management</strong>',
                        'Find user in the team list',
                        'Click <strong>Edit</strong> button (pencil icon) on user card',
                        'Select new role from dropdown',
                        'Click <strong>Save</strong>',
                        'Confirm role change in modal dialog',
                        'User receives email notification of role change'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After role assignment:</p>',
                    bullets: [
                        '<strong>Role badge</strong> on user card updates (e.g., "Engineer" badge changes to "Admin")',
                        '<strong>Last modified timestamp</strong> shows when role was changed',
                        '<strong>Activity log entry:</strong> "[Your Name] changed [User Name] role from Engineer to Admin"',
                        '<strong>Email notification:</strong> User receives confirmation email'
                    ]
                },
                {
                    title: 'Important Notes',
                    content: '',
                    bullets: [
                        '<strong>Cannot change your own role:</strong> You cannot demote or promote yourself',
                        '<strong>Cannot remove last Super Admin:</strong> Must always have at least one Super Admin',
                        '<strong>Re-login required:</strong> Permission changes don&apos;t apply until user logs out and back in',
                        '<strong>Tier limits apply:</strong> Total users cannot exceed tier limit (see Billing section)'
                    ]
                },
                {
                    title: 'Role vs Labour Band',
                    content: '<p class="mb-2">These are two different assignments and easy to mix up. <strong>Role</strong> (above) controls what a user can see and do in Opscel. <strong>Labour band</strong> — assigned from the same user card — controls the cost rate and charge rate used to price their time on a job. A user\'s role can change without touching their band, and vice versa.</p><p class="text-gray-700"><a href="/docs/job-profitability#rates" class="text-blue-600 hover:underline">→ See Job Profitability Guide</a> for what the two labour band rates drive.</p>'
                }
            ]
        },
        {
            id: 'permission-matrix',
            title: 'Permission Matrix',
            subsections: [
                {
                    title: 'Comprehensive Permissions Table',
                    content: '<p>This matrix shows exactly what each role can do:</p>',
                    table: {
                        headers: ['Permission', 'Super Admin', 'Admin', 'Accounts', 'Contract Mgr', 'Sales Mgr', 'Site Mgr', 'Engineer', 'Viewer'],
                        rows: [
                            ['Create/edit customers', '✓', '✓', 'View only', '✓', '✓', 'View only', 'View only', 'View only'],
                            ['Create/edit jobs', '✓', '✓', 'Create only', '✓', 'Create only', '✓', 'Assigned only', '✗'],
                            ['Schedule visits & assign engineers', '✓', '✓', '✗', '✓', '✗', '✓', '✗', '✗'],
                            ['Create & send quotes', '✓', '✓', '✓', '✓', '✓', '✗', '✗', 'View only'],
                            ['Create/edit invoices', '✓', '✓', '✓', 'Create only', 'View only', '✗', '✗', 'View only'],
                            ['Create/edit certificates', '✓', '✓', '✗', '✓', 'View only', '✓', '✓ (no issue)', 'View only'],
                            ['Issue certificates', '✓', '✓', '✗', '✓', '✗', '✓', '✗', '✗'],
                            ['Service contracts', '✓', '✓', 'View/edit', '✓', 'Create/edit', '✓', '✗', 'View only'],
                            ['View & export reports', '✓', '✓', '✓', 'View only', '✓', '✗', '✗', 'View only'],
                            ['Invite/edit team members', '✓', '✓', '✗', '✗', '✗', '✗', '✗', '✗'],
                            ['Remove a team member', '✓', '✗', '✗', '✗', '✗', '✗', '✗', '✗'],
                            ['Access settings/configuration', '✓', '✓', '✗', '✗', '✗', '✗', '✗', '✗'],
                            ['Connect accounting integrations', '✓', '✗', '✗', '✗', '✗', '✗', '✗', '✗'],
                            ['Manage billing', '✓', '✗', '✗', '✗', '✗', '✗', '✗', '✗']
                        ]
                    }
                },
                {
                    title: '',
                    content: '<div class="my-8"><img src="/images/docs/team-management/role-permission-matrix.svg" alt="Opscel 8-role permission matrix — one-line capability summary for Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Site Manager, Engineer and Viewer" class="w-full rounded-lg border border-border shadow-lg" /></div>'
                }
            ]
        },
        {
            id: 'field-vs-admin',
            title: 'Field Access vs Admin Access',
            subsections: [
                {
                    title: 'Two Access Modes',
                    content: '<p>Opscel has two distinct interfaces:</p>',
                    bullets: [
                        '<strong>Admin dashboard (web):</strong> Desktop-optimized for scheduling, invoicing, settings. Accessed at <code>app.opscel.com</code>',
                        '<strong>Field app (mobile PWA):</strong> Mobile-optimized for on-site work. Offline-first, touch-friendly. Accessed at <code>/field</code>.'
                    ]
                },
                {
                    title: 'Field Roles',
                    content: '<p>Roles with field app access:</p>',
                    bullets: [
                        '<strong>Engineer:</strong> Field-only access, sees assigned jobs only — this is the role\'s primary interface'
                    ]
                },
                {
                    title: 'Admin Roles',
                    content: '<p>The remaining seven roles work from the admin dashboard, scoped to their permissions:</p>',
                    bullets: [
                        '<strong>Super Admin, Admin:</strong> Full dashboard access',
                        '<strong>Accounts, Contract Manager, Sales Manager:</strong> Dashboard access scoped to their financial/sales/contract permissions',
                        '<strong>Site Manager:</strong> Dashboard access for scheduling, jobs and certificates — no financial data',
                        '<strong>Viewer:</strong> Dashboard only, read-only across the modules it can see'
                    ]
                }
            ]
        },
        {
            id: 'business-switcher',
            title: 'Business Switcher (Multi-Tenant)',
            subsections: [
                {
                    title: 'For Users in Multiple Tenants',
                    content: '<p>Some users belong to multiple Opscel businesses (e.g., contractor who works for multiple companies). These users see a <strong>Business Switcher</strong> in the top-right corner of the interface.</p>'
                },
                {
                    title: 'How to Switch Between Businesses',
                    content: '',
                    steps: [
                        'Click your profile icon in the top-right corner',
                        'Click <strong>Switch Business</strong>',
                        'Select business from dropdown list',
                        'Interface reloads with selected business context'
                    ]
                },
                {
                    title: 'Role Can Differ Per Tenant',
                    content: '<p>The same user can have different roles in different businesses:</p>',
                    bullets: [
                        '<strong>Example:</strong> John is an Engineer at Smith Electrical, but an Admin at Jones Fire Safety',
                        'Permissions change when switching business',
                        'Business switcher shows current role badge for each business',
                        'Activity logs are per-business (switching doesn&apos;t mix data)'
                    ]
                },
                {
                    title: 'Session Persistence Per Tenant',
                    content: '<p>When you switch businesses, your session persists for the previous business. You can switch back without re-logging in. Sessions expire after 30 days of inactivity per business.</p>'
                }
            ]
        },
        {
            id: 'removing-users',
            title: 'Removing Users',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Super Admin only — Admin can invite and edit team members but cannot remove one</p>'
                },
                {
                    title: 'When to Remove',
                    content: '<p>Remove users when:</p>',
                    bullets: [
                        '<strong>Leaving company:</strong> Employee no longer works for your business',
                        '<strong>Contractor engagement ends:</strong> Temporary worker finished project',
                        '<strong>Security concern:</strong> Revoke access immediately',
                        '<strong>Reduce user count:</strong> Downgrade tier by removing inactive users'
                    ]
                },
                {
                    title: 'What Happens to User&apos;s Data',
                    content: '<p><strong>Important:</strong> Removing a user does NOT delete their work. All jobs, certificates, photos, and activity logs remain in the system, attributed to the removed user.</p>',
                    bullets: [
                        '<strong>Jobs completed by user:</strong> Remain attributed to that user with "Former User" badge',
                        '<strong>Certificates issued by user:</strong> Remain valid, user name stays on certificate',
                        '<strong>Activity logs:</strong> Preserved for audit trail',
                        '<strong>Photos and signatures:</strong> Remain in job documents',
                        '<strong>User marked inactive:</strong> User profile shows "Inactive" status but historical data preserved'
                    ]
                },
                {
                    title: 'Revoke Access Immediately vs Scheduled Removal',
                    content: '<p><strong>Revoke immediately:</strong> User loses access within 5 minutes (next token refresh). Use for security concerns.</p><p><strong>Scheduled removal:</strong> Set a future date for access to end (e.g., contractor&apos;s last day). User receives email notification 24 hours before removal.</p>'
                },
                {
                    title: 'Steps to Remove User',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Team Management</strong>',
                        'Find user in the team list',
                        'Click <strong>Remove</strong> button (trash icon) on user card',
                        'Confirm removal in modal dialog',
                        'Choose removal method: Immediate or Scheduled',
                        'If scheduled, select end date',
                        'Click <strong>Confirm Removal</strong>',
                        'User receives email notification (immediate or 24h before scheduled date)'
                    ]
                },
                {
                    title: 'Restrictions',
                    content: '',
                    bullets: [
                        '<strong>Cannot remove yourself:</strong> You cannot remove your own account',
                        '<strong>Cannot remove last Super Admin:</strong> Must always have at least one Super Admin',
                        '<strong>Cannot undo:</strong> Removal is permanent. User must be re-invited to regain access.'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After removal:</p>',
                    bullets: [
                        '<strong>User disappears from active team list</strong>',
                        '<strong>User count decrements</strong> (frees up license slot)',
                        '<strong>User marked inactive</strong> in system (visible in activity logs as "Former User")',
                        '<strong>Historical data preserved</strong> with attribution to inactive user'
                    ]
                }
            ]
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'For Super Admins',
                    content: '',
                    bullets: [
                        '<strong>Keep Super Admin count low:</strong> 2-3 maximum. Too many Super Admins creates security risk.',
                        '<strong>Regular access audits:</strong> Review team list quarterly. Remove inactive users.',
                        '<strong>Use Admin role for operations:</strong> Don&apos;t give Super Admin to people who just need operational access.',
                        '<strong>Document role decisions:</strong> Keep a record of why each person has their role (e.g., "John: Super Admin because he manages billing").'
                    ]
                },
                {
                    title: 'For Admins',
                    content: '',
                    bullets: [
                        '<strong>Assign minimum necessary permissions:</strong> Don&apos;t give Admin when Contract Manager, Sales Manager or Site Manager covers the job.',
                        '<strong>Review roles quarterly:</strong> People&apos;s responsibilities change. Update roles to match current job function.',
                        '<strong>Use Viewer for stakeholders:</strong> Clients, auditors, or board members who need visibility but not editing.',
                        '<strong>Train new users:</strong> Schedule onboarding session for new team members based on their role.',
                        '<strong>Monitor pending invites:</strong> Chase up invites that haven&apos;t been accepted after 3-4 days.'
                    ]
                },
                {
                    title: 'Security Recommendations',
                    content: '',
                    bullets: [
                        '<strong>Accounts role for external bookkeepers:</strong> Don&apos;t give Admin access to external accountants. Use the Accounts role for financial data only.',
                        '<strong>Remove users on their last day:</strong> Use scheduled removal to automatically revoke access when someone leaves.',
                        '<strong>Unique email per user:</strong> Don&apos;t share logins. Each person should have their own account for audit trail.',
                        '<strong>Review activity logs:</strong> Check Settings → Activity Logs monthly for unusual access patterns.'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'User Can&apos;t Access Feature',
                    content: '<p><strong>Problem:</strong> User says "I can&apos;t see the Certificates menu" or similar.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'User role permissions (check matrix above)',
                        'Tier limits (feature available on user&apos;s current tier?)',
                        'User has logged out and back in since role change',
                        'License count (user counted toward tier limit?)',
                        '<strong>Fix:</strong> If role is correct but feature missing, check tier limits. Some features (e.g., Quotations analytics) require Business tier. If user recently changed roles, ask them to log out and log back in.'
                    ]
                },
                {
                    title: 'Invite Email Not Received',
                    content: '<p><strong>Problem:</strong> User says "I never got the invite email".</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Spam folder (Opscel emails sometimes flagged)',
                        'Email address spelling (check for typos in invite)',
                        'Pending invites list (verify invite was actually sent)',
                        'Invite expiry (invites expire after 7 days)',
                        '<strong>Fix:</strong> Click "Resend Invite" button from pending invites list. If still not received, try a different email address (e.g., personal instead of work email).'
                    ]
                },
                {
                    title: 'User Sees Wrong Business',
                    content: '<p><strong>Problem:</strong> User says "I&apos;m seeing the wrong company&apos;s data".</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'User belongs to multiple businesses (multi-tenant)',
                        'Business switcher showing current business name',
                        '<strong>Fix:</strong> Ask user to click profile icon → Switch Business → Select correct business from dropdown. If business doesn&apos;t appear in list, they may not have been invited to that business yet.'
                    ]
                },
                {
                    title: 'Can&apos;t Remove User',
                    content: '<p><strong>Problem:</strong> Remove button disabled or shows error.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Trying to remove yourself (not allowed)',
                        'Trying to remove last Super Admin (not allowed)',
                        'User has active jobs (warning shown, but removal still allowed)',
                        '<strong>Fix:</strong> If you&apos;re the only Super Admin, promote someone else to Super Admin first, then you can remove yourself. If removing yourself, ask another Super Admin to do it.'
                    ]
                },
                {
                    title: 'Role Change Not Taking Effect',
                    content: '<p><strong>Problem:</strong> Changed user role but they still have old permissions.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'User has logged out and back in (required for permission refresh)',
                        'Role badge on user card updated correctly',
                        'Activity log shows role change event',
                        '<strong>Fix:</strong> Ask user to log out completely, close browser, then log back in. Permissions refresh on login, not continuously.'
                    ]
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Can I create custom roles?',
                    content: '<p>No. Opscel has 8 fixed roles that cannot be customized. You cannot create new roles or modify the permissions of existing roles. This ensures consistency and simplifies security management.</p><p>The 8 roles are designed to cover all common use cases in fire safety and electrical contracting. If you need custom permissions, contact support to discuss your requirements.</p>'
                },
                {
                    title: 'How many users can I add?',
                    content: '<p>User limits depend on your tier:</p>',
                    bullets: [
                        '<strong>Starter:</strong> 1 user included',
                        '<strong>Team:</strong> 3 users included',
                        '<strong>Business:</strong> 5 users included',
                        '<strong>Additional users:</strong> £29/month per additional user (all tiers)',
                        'You can add unlimited additional users by paying the per-user fee. User count is tracked in Settings → Billing.'
                    ]
                },
                {
                    title: 'Can one person have multiple roles?',
                    content: '<p>No. Each user has exactly <strong>one role per business</strong>. However, if a user belongs to multiple businesses (multi-tenant), they can have different roles in each business.</p><p><strong>Example:</strong> John is an Engineer at Smith Electrical but an Admin at Jones Fire Safety. When he switches businesses, his role and permissions change automatically.</p>'
                },
                {
                    title: 'What happens if I remove a user who completed jobs?',
                    content: '<p>Their work stays attributed to them. All jobs, certificates, photos, and activity logs remain in the system. The user is marked "Inactive" and their name appears with a "Former User" badge in historical records.</p><p><strong>Important:</strong> Removing a user does NOT delete or reassign their work. This preserves audit trail and compliance records.</p>'
                },
                {
                    title: 'Can I restrict access to specific customers or jobs?',
                    content: '<p>No. Permissions in Opscel are <strong>role-based</strong>, not data-based. This means:</p>',
                    bullets: [
                        '<strong>Admin, Contract Manager and Site Manager</strong> can see all customers and jobs',
                        '<strong>Engineers</strong> can see only their assigned jobs',
                        '<strong>Accounts, Sales Manager and Viewer</strong> can see all data within their scope (financial data, sales/quoting data, or read-only across their permitted modules)',
                        'If you need to restrict access to specific customers (e.g., separate divisions), consider using separate Opscel businesses (multi-tenant) instead.'
                    ]
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    title: '',
                    content: '<p>If you&apos;re stuck or have questions not covered here:</p>',
                    bullets: [
                        '<strong>Email support:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800">support@opscel.com</a>',
                        '<strong>Related guides:</strong> <a href="/docs/settings-tour" class="text-blue-600 hover:text-blue-800">Settings Tour</a> | <a href="/docs/onboarding" class="text-blue-600 hover:text-blue-800">Onboarding for New Businesses</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Team members access jobs via the field app',
            href: '/docs/field-service'
        },
        {
            title: 'Jobs',
            description: 'Assigning team members to jobs and visits',
            href: '/docs/jobs'
        },
        {
            title: 'Settings Tour',
            description: 'Team management settings location',
            href: '/docs/settings-tour'
        },
        {
            title: 'Onboarding',
            description: 'Inviting your team during initial account setup',
            href: '/docs/onboarding'
        },
        {
            title: 'Job Profitability',
            description: 'What a team member\'s labour band cost/charge rate drives',
            href: '/docs/job-profitability'
        }
    ]
};
