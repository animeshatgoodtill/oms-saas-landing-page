import { IDocGuide } from '@/types';

export const worksheetsGuide: IDocGuide = {
    slug: 'worksheets',
    title: 'Worksheets - Assigning & Filling',
    description: 'Learn how job sheets work in Opscel. Opscel auto-attaches the right built-in worksheet to every job based on its vertical and service type, and engineers fill it on-site. From fire alarm service sheets to asset service logs, capture standardized data with offline support.',
    lastUpdated: '2026-08-30',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Opscel auto-attaches the worksheet | Engineers fill it on-site<br><strong>What:</strong> A registry of built-in worksheet types for standardized data capture during jobs<br><strong>Where:</strong> Admin: job detail page, "Add Worksheet" | Engineers: Field app per-job<br><strong>Why:</strong> Consistent data collection, compliance tracking, asset promotion, offline support</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Built-in, standards-shaped forms:</strong> Every worksheet type ships ready to use — no design step, no blank canvas',
                        '<strong>Auto-attached to every job:</strong> Opscel picks the right worksheet for the job\'s vertical and service type automatically',
                        '<strong>Standardized data capture:</strong> Every engineer fills the same structure for the same kind of work',
                        '<strong>Asset promotion:</strong> Some worksheets can promote rows they capture into the asset register',
                        '<strong>Compliance tracking:</strong> Audit trail of completed sheets per job',
                        '<strong>Offline support:</strong> Fill worksheets without internet, syncs when online',
                        '<strong>Photo & signature capture:</strong> Photos and signatures live inside the relevant worksheet sections'
                    ]
                },
                {
                    title: 'Common Use Cases',
                    content: '',
                    bullets: [
                        'Fire alarm service and commissioning, zone-by-zone',
                        'Fire extinguisher service records',
                        'Remedial scope-of-works sheets',
                        'Asset service worksheets (any equipment type, generic fallback)',
                        'Security commissioning checklists (CCTV, intruder alarm, access control)',
                        'Security risk assessment (the pre-installation PD 6662 survey)',
                        '<strong>Specialized: </strong><a href="/docs/fire-safety-features" class="text-blue-600 hover:text-blue-800">Combined BS 5839 & BAFE SP203 Jobsheet</a> (built-in template for fire alarm servicing)'
                    ]
                }
            ]
        },
        {
            id: 'understanding-types',
            title: 'The Worksheet Type Registry',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> All tiers | <strong>Roles:</strong> All roles with job access (Filling: Engineers and anyone with field access)</p>'
                },
                {
                    title: 'A Fixed, Code-Defined Registry — Not a Form Builder',
                    content: '<p>Opscel does not have a drag-and-drop worksheet builder, a template library page, or a way to author a custom worksheet. Every worksheet type is a schema built into the product — currently <strong>13 built-in types</strong> — and admins choose from that fixed list rather than designing their own.</p><p>This matters for what to expect: you cannot add a new field to an existing sheet, rename a section, or invent a new worksheet type from Settings. If you need a field a built-in sheet doesn\'t capture, the closest fit is the generic <strong>Asset Service Worksheet</strong>, or raising it with support.</p>'
                },
                {
                    title: 'The Built-In Types',
                    content: '<p>Each type belongs to a vertical (or to none, meaning it is offered on every vertical):</p>',
                    table: {
                        headers: ['Worksheet Type', 'Vertical'],
                        rows: [
                            ['Basic Job Sheet', 'Any (universal default)'],
                            ['Site Attendance / Inspection & Servicing Certificate', 'Fire Safety'],
                            ['Fire Alarm Commissioning Worksheet', 'Fire Safety'],
                            ['Fire Alarm Service Worksheet', 'Fire Safety'],
                            ['Fire Extinguisher Service Worksheet', 'Fire Safety'],
                            ['Remedial Scope of Works', 'Fire Safety'],
                            ['Combined BS 5839 & BAFE SP203 Inspection & Servicing Jobsheet', 'Fire Safety'],
                            ['Asset Service Worksheet', 'Any (generic fallback for any equipment type)'],
                            ['Intruder Alarm Zone List & Operational Checks', 'Security'],
                            ['CCTV Commissioning Checklist', 'Security'],
                            ['Intruder Alarm Commissioning Checklist', 'Security'],
                            ['Access Control Commissioning Checklist', 'Security'],
                            ['Security Risk Assessment (Intruder & Hold-up Alarm)', 'Security']
                        ]
                    }
                },
                {
                    title: 'What Each Type Contains',
                    content: '<p>A worksheet type is made up of sections — some are form sections with fixed fields (text, numbers, dates, dropdowns, checkboxes), some are photo sections, and some are signature sections. The mix is defined per type and cannot be edited by admins; it\'s the same for every business using that worksheet type.</p>'
                }
            ]
        },
        {
            id: 'auto-attach',
            title: 'How a Job Gets Its Worksheet',
            subsections: [
                {
                    title: 'One Worksheet, Auto-Attached — Not a Manual Step',
                    content: '<p>You do not normally choose a worksheet when creating a job. Opscel auto-attaches exactly <strong>one</strong> worksheet to every new job, based on:</p>',
                    bullets: [
                        '<strong>The job\'s effective vertical</strong> — the job\'s own vertical if set, otherwise the business\'s vertical (e.g. Fire Safety)',
                        '<strong>The job\'s service type</strong> — if that service type is mapped (via Settings → Job Sheet Templates) to a specific worksheet type, that mapped type is attached',
                        '<strong>Otherwise, the vertical\'s basic default</strong> — Fire Safety jobs default to the Site Attendance sheet; everything else defaults to the Basic Job Sheet'
                    ]
                },
                {
                    content: '<div class="my-8"><img src="/images/docs/worksheets/auto-attach-flow.svg" alt="Flow diagram: a new job\'s vertical and service type are resolved, then one worksheet type is auto-attached from the registry, replacing any default. An admin can optionally add one more worksheet afterward via the Assign Job Sheet modal." class="w-full rounded-lg border border-border shadow-lg" /></div>'
                },
                {
                    title: 'It Replaces, It Doesn\'t Stack',
                    content: '<p>If a mapped worksheet type applies, it <strong>replaces</strong> the vertical\'s basic default — a job gets one auto-attached worksheet, not two. This is deliberate: customer sign-off lives on each worksheet, and having a single sheet per job keeps that sign-off unambiguous.</p>'
                },
                {
                    title: 'Adding an Additional Worksheet Manually',
                    content: '<p>The auto-attached sheet is not the only one a job can ever carry. From the job detail page, an admin (or anyone with job-edit access) can open <strong>Add Worksheet</strong> — this is the Assign Job Sheet modal — and pick any additional type from the registry, filtered to the business\'s enabled verticals. The type that matches the job\'s vertical is marked "Suggested".</p>',
                    steps: [
                        'Open the job detail page',
                        'Find the <strong>Add Worksheet</strong> button (Documents tab or Overview tab)',
                        'Choose a worksheet type from the list — the suggested one is flagged',
                        'The new worksheet appears alongside the auto-attached one',
                        'Each worksheet on the job is filled and completed independently'
                    ]
                }
            ]
        },
        {
            id: 'filling-onsite',
            title: 'Filling Worksheets On-Site (Engineer)',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Engineer, and anyone with field access (Site Manager, Contract Manager, Admin)</p>'
                },
                {
                    title: 'Field App Experience',
                    content: '<p>When you open a job in the field app, its worksheet(s) appear in the <strong>Worksheets</strong> tab. Each worksheet shows:</p>',
                    bullets: [
                        '<strong>Worksheet type name</strong>',
                        '<strong>Progress percentage</strong> (based on filled fields)',
                        '<strong>Status:</strong> Draft → Completed',
                        '<strong>Last saved:</strong> Timestamp of most recent auto-save'
                    ]
                },
                {
                    title: 'Section-by-Section Completion',
                    content: '<p>Worksheets are organized into sections defined by the worksheet type. Complete each section before moving to the next:</p>',
                    bullets: [
                        '<strong>Form sections:</strong> Fill all fields, required fields marked with a red asterisk (*)',
                        '<strong>Photo sections:</strong> Tap "Add Photo" to capture images, add captions',
                        '<strong>Signature sections:</strong> Tap the signature pad to capture signatures'
                    ]
                },
                {
                    title: 'Auto-Save Behavior',
                    content: '<p>Form field data saves automatically as you work — writes merge into the worksheet\'s stored data so a section you haven\'t touched keeps its existing values. <strong>Offline queue:</strong> if offline, changes queue locally and sync when your connection returns. The CloudOff icon indicates offline mode.</p>'
                },
                {
                    title: 'Required vs Optional Field Indicators',
                    content: '<p>Required fields show a <strong>red asterisk (*)</strong> next to the label. Optional fields have no indicator — skip them if not applicable to this job.</p>'
                },
                {
                    title: 'Steps to Complete a Worksheet',
                    content: '',
                    steps: [
                        'Open the job in the field app',
                        'Tap the <strong>Worksheets</strong> tab',
                        'Select the worksheet to fill (usually just one, occasionally two)',
                        'Work through each section, filling fields as you go',
                        'Capture photos and signatures where the worksheet includes those sections',
                        'Tap <strong>Mark Complete</strong> when all required fields are filled',
                        'Confirm completion (the worksheet locks for editing)'
                    ]
                }
            ]
        },
        {
            id: 'viewing-completed',
            title: 'Viewing Completed Worksheets',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All roles with job access (read-only for Viewer)</p>'
                },
                {
                    title: 'Admin Dashboard View',
                    content: '<p>From the job detail page, scroll to the <strong>Worksheets</strong> section. Each worksheet card shows:</p>',
                    bullets: [
                        '<strong>Completed by:</strong> Engineer name and timestamp',
                        '<strong>Status:</strong> "Completed" once all required fields are filled and it is locked',
                        '<strong>View button:</strong> Opens the worksheet in read-only mode to review all fields',
                        '<strong>PDF Export:</strong> Download a formatted PDF of the worksheet data',
                        '<strong>Reopen:</strong> Admins can unlock a completed worksheet for editing if corrections are needed'
                    ]
                },
                {
                    title: 'Edit vs View-Only',
                    content: '<p><strong>Before completion:</strong> Admins and engineers can edit a worksheet (engineers only while it is not yet marked complete).</p><p><strong>After completion:</strong> Worksheets become view-only to preserve the audit trail. Admins can reopen a worksheet to allow edits.</p>'
                }
            ]
        },
        {
            id: 'asset-promotion',
            title: 'Asset Promotion from Worksheets',
            subsections: [
                {
                    title: 'Promotion Is Declared Per Worksheet Type — Not Guessed from Field Names',
                    content: '<p>Some worksheet types can promote the rows they capture into the <strong>Asset Register</strong>. This is not a heuristic that scans for fields called "Serial Number" or "Model" — each worksheet type that supports promotion declares exactly how, as part of its schema:</p>',
                    bullets: [
                        '<strong>Which repeatable section</strong> holds the rows to promote (e.g. a device list or a cylinder list)',
                        '<strong>The asset type</strong> each row becomes — either fixed for the whole worksheet, or picked per row from a column on that row',
                        '<strong>A field map</strong> from the worksheet\'s own column names to the asset\'s properties',
                        '<strong>An action map</strong> — what a row\'s recorded action (serviced, installed, replaced, decommissioned, and so on) does to the asset\'s status'
                    ]
                },
                {
                    title: 'What This Means in Practice',
                    content: '<p>Only worksheet types that declare this mapping can promote assets at all — most cannot. Fire alarm and extinguisher service worksheets, and the generic Asset Service Worksheet, are examples that do. A worksheet with a field that happens to be called "Serial Number" but no declared mapping will not offer promotion.</p>'
                },
                {
                    title: 'How Promotion Happens',
                    content: '<p>On a worksheet type that supports it, admins can promote its rows to the Asset Register from the worksheet\'s view page — reviewing the asset details the mapping produced before confirming. This is a per-worksheet action, tier-gated (Business) and permission-gated (<code>assets.edit</code>), regardless of what the schema declares.</p>',
                    steps: [
                        'Engineer fills the worksheet on-site, including the section that supports promotion',
                        'Engineer marks the worksheet complete',
                        'From the completed worksheet, an admin with <code>assets.edit</code> reviews and confirms promotion',
                        'Assets appear in the Asset Register, linked back to the job and site'
                    ]
                }
            ]
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'For Admins',
                    content: '',
                    bullets: [
                        '<strong>Let auto-attach do the work:</strong> map service types to the right worksheet type once, in Settings → Job Sheet Templates, and every future job of that type gets the correct sheet without anyone choosing it.',
                        '<strong>Add a second worksheet sparingly:</strong> most jobs need only the auto-attached sheet. Add another only when the job genuinely needs a second, distinct record.',
                        '<strong>Know which types promote assets:</strong> not every worksheet type does — check the worksheet\'s view page for a promotion action before assuming it will build your asset register.'
                    ]
                },
                {
                    title: 'For Engineers',
                    content: '',
                    bullets: [
                        '<strong>Complete on-site:</strong> fill worksheets while at the job site. It\'s harder to remember details later.',
                        '<strong>Capture photos as you work:</strong> don\'t wait until the end. Take photos of each section as you complete it.',
                        '<strong>Use offline mode:</strong> worksheets work offline. Don\'t avoid filling them because of poor signal.',
                        '<strong>Review before marking complete:</strong> once marked complete, you can\'t edit without an admin reopening it.'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Wrong Worksheet Type Attached to a Job',
                    content: '<p><strong>Problem:</strong> A job got the Basic Job Sheet instead of the vertical-specific worksheet you expected.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'The job\'s service type is mapped to a worksheet type in Settings → Job Sheet Templates',
                        'The job\'s vertical (or the business\'s default vertical, if the job doesn\'t set one) is what you expect',
                        '<strong>Fix:</strong> Map the service type to the correct worksheet type, then manually add the correct worksheet to this job via "Add Worksheet" — the auto-attach only runs at job creation.'
                    ]
                },
                {
                    title: 'Worksheet Not Showing in Field App',
                    content: '<p><strong>Problem:</strong> Engineer says a worksheet isn\'t visible on their job.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'The worksheet is attached to the correct job (check job detail page)',
                        'The engineer is assigned to that job',
                        'The field app is synced (pull down to refresh)',
                        '<strong>Fix:</strong> If it\'s attached but not visible, ask the engineer to log out and back in to force a full sync.'
                    ]
                },
                {
                    title: 'Can\'t Edit a Completed Worksheet',
                    content: '<p><strong>Problem:</strong> Need to change data in a worksheet marked complete.</p><p><strong>Fix:</strong></p>',
                    bullets: [
                        'An admin must click "Reopen" on the worksheet card. This unlocks it for editing. The engineer can then make changes and re-mark it complete.'
                    ]
                },
                {
                    title: 'No Option to Promote to Asset',
                    content: '<p><strong>Problem:</strong> A completed worksheet has no "Promote to Asset" action.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'This worksheet type declares asset promotion at all — most built-in types don\'t',
                        'You have <code>assets.edit</code> permission and the business is on a tier that includes Assets',
                        '<strong>Fix:</strong> If the worksheet type genuinely should support promotion, that\'s a product change, not a settings toggle — raise it with support.'
                    ]
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Can I create a custom worksheet template?',
                    content: '<p>No. Opscel\'s worksheets are a fixed set of 13 built-in types — there is no template builder or authoring tool. If none of the built-in types fit, the generic <strong>Asset Service Worksheet</strong> is the most flexible option, since it works for any equipment type on any vertical.</p>'
                },
                {
                    title: 'How does Opscel choose which worksheet a job gets?',
                    content: '<p>Automatically, at job creation — from the job\'s effective vertical and, if mapped, its service type. See <a href="#auto-attach" class="text-secondary hover:underline">How a Job Gets Its Worksheet</a>.</p>'
                },
                {
                    title: 'Can a job have more than one worksheet?',
                    content: '<p>Yes. A job always gets one auto-attached worksheet, and an admin can manually add one more from the job detail page. Each is filled and completed independently.</p>'
                },
                {
                    title: 'Do worksheets work offline?',
                    content: '<p>Yes. Worksheets are fully offline-capable. Engineers can fill them without an internet connection; data saves locally and syncs to the server when connection returns.</p>'
                },
                {
                    title: 'Which worksheets can promote data to the Asset Register?',
                    content: '<p>Only the ones whose schema declares an asset-promotion mapping — fire alarm and extinguisher service worksheets and the generic Asset Service Worksheet are examples. See <a href="#asset-promotion" class="text-secondary hover:underline">Asset Promotion from Worksheets</a>.</p>'
                },
                {
                    title: 'Can I export worksheet data to Excel?',
                    content: '<p>Not directly from worksheets, but job data (including worksheet responses) can be exported via the Reports module: <strong>Reports → Jobs Report</strong>, filtered by date range or job type, then "Export to CSV".</p>'
                },
                {
                    title: 'Can I use worksheets with service contracts?',
                    content: '<p>Yes. Each recurring job a service contract generates goes through the same auto-attach logic, so the same worksheet type is attached every visit — engineers see a consistent checklist for that contract\'s recurring work.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    title: '',
                    content: '<p>If you\'re stuck or have questions not covered here:</p>',
                    bullets: [
                        '<strong>Email support:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800">support@opscel.com</a>',
                        '<strong>Related guides:</strong> <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs & Multi-Visit Workflow</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a> | <a href="/docs/asset-tracking" class="text-blue-600 hover:text-blue-800">Asset Tracking</a> | <a href="/docs/settings-tour" class="text-blue-600 hover:text-blue-800">Settings Tour</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Filling worksheets on-site in the field app',
            href: '/docs/field-service'
        },
        {
            title: 'Jobs',
            description: 'Worksheets are auto-attached to jobs',
            href: '/docs/jobs'
        },
        {
            title: 'Asset Tracking',
            description: 'Worksheets that promote asset records',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Fire Safety Jobsheets',
            description: 'BS 5839 & BAFE SP203 combined inspection forms',
            href: '/docs/fire-safety-features'
        },
        {
            title: 'Certificates',
            description: 'Completing worksheets before issuing certificates',
            href: '/docs/certificates'
        }
    ]
};
