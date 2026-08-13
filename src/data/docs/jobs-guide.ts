import { IDocGuide } from '@/types';

export const jobsGuide: IDocGuide = {
    slug: 'jobs',
    title: 'Jobs & Multi-Visit Workflow',
    description: 'Complete guide to creating, scheduling, and managing jobs in Opscel. Learn about job statuses, multi-visit jobs, engineer assignment, and completion workflows.',
    lastUpdated: '2026-08-13',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        Jobs are the core work units in Opscel. They represent scheduled work at a customer site—from routine servicing to
                        emergency callouts. Jobs can have single or multiple visits, track time and materials, generate certificates and invoices,
                        and integrate with your calendar.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Admins, Managers, Engineers<br/>
                        <strong>Where it lives:</strong> Admin app: Jobs menu | Field app: Today&apos;s Jobs<br/>
                        <strong>Key benefit:</strong> Complete work lifecycle tracking from scheduling to invoicing
                    </p>
                </div>
                <p class="mb-4">Jobs in Opscel support:</p>
            `,
            subsections: [
                {
                    title: 'Key Capabilities',
                    content: '',
                    bullets: [
                        'Single or multi-visit scheduling',
                        'Engineer assignment with calendar sync',
                        'Automatic creation from quotes and service contracts',
                        'Time tracking (scheduled vs. actual duration)',
                        'Parts, defects, and worksheet capture',
                        'Certificate and invoice generation',
                        'Customer portal visibility',
                        'Status workflow (Draft → Scheduled → In Progress → Completed)'
                    ]
                }
            ]
        },
        {
            id: 'creating-jobs',
            title: 'Creating Jobs',
            content: `
                <p class="mb-6">
                    There are three ways to create jobs in Opscel. Choose the method that fits your workflow.
                </p>
            `,
            subsections: [
                {
                    title: 'Method 1: From Scratch (Manual)',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admins, Managers</p>
                        <p class="mb-4">Create a job manually when you need full control over every detail.</p>
                    `,
                    steps: [
                        { step: 'Go to Jobs in the main menu', description: '' },
                        { step: 'Click "New Job"', description: '' },
                        { step: 'Select the customer', description: 'Or create a new customer inline' },
                        { step: 'Choose the service address', description: 'Select from customer sites or add new' },
                        { step: 'Enter job title and description', description: 'Be specific for engineer clarity' },
                        { step: 'Set job type', description: 'Service, Installation, Inspection, Emergency, etc.' },
                        { step: 'Set priority', description: 'Normal, High, Urgent' },
                        { step: 'Click "Save as Draft" or "Save & Schedule"', description: '' }
                    ]
                },
                {
                    title: 'Method 2: From Accepted Quote',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Automatic when customer accepts quote</p>
                        <p class="mb-4">When a customer accepts a quote, Opscel creates a job automatically with pre-filled details.</p>
                    `,
                    bullets: [
                        'Customer and site come from the quote',
                        'Job description matches quote scope',
                        'Job value set to quote total',
                        'If deposit required: deposit invoice created automatically',
                        'Job starts in "Draft" status—you schedule it when ready'
                    ]
                },
                {
                    title: 'Method 3: From Service Contract (Automatic)',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Business+ tier, automatic cron generation</p>
                        <p class="mb-4">Service contracts automatically create jobs based on cadence (weekly, monthly, quarterly, annual).</p>
                    `,
                    bullets: [
                        'Jobs appear X days before due date (lead-time window)',
                        'Customer, site, and job type pre-filled from contract',
                        'Assets auto-load from previous job (if active)',
                        'Jobs start in "Scheduled" status with suggested date',
                        'Cron runs daily at 05:00 UTC (UK-aligned)'
                    ]
                },
                {
                    title: 'What Gets Auto-Filled',
                    content: `
                        <p class="mb-4">When creating from a quote or service contract, Opscel pre-fills:</p>
                    `,
                    bullets: [
                        'Customer name and contact details',
                        'Service address (site)',
                        'Job description and scope',
                        'Job type and category',
                        'Expected duration (from quote or contract)',
                        'Assets to service (from contract or previous job)',
                        'Default assigned engineer (from customer preferences)'
                    ]
                },
                {
                    title: 'PO Number (Optional)',
                    content: `
                        <p class="mb-4">
                            Every job has an optional <strong>PO Number</strong> field on the creation wizard and the edit form — a customer-supplied purchase order reference, not an Opscel-generated sequence. Once set, it surfaces in several places:
                        </p>
                    `,
                    bullets: [
                        'The admin job overview page',
                        'A PO badge on the job in the field app (read-only there — editing happens in admin)',
                        'Job-sheet PDFs',
                        'Job search — find a job by its customer\'s PO number'
                    ]
                },
                {
                    title: 'Where PO Numbers Come From and Go To',
                    content: `
                        <p class="mb-4">A job's PO number can arrive from, or feed into, several other places in Opscel:</p>
                    `,
                    bullets: [
                        '<strong>Service contracts</strong> — a job generated from a contract inherits that contract\'s rolling PO, or a per-visit PO if one was set for that specific occurrence. See <a href="/docs/service-contracts" class="text-secondary hover:underline">Service Contracts</a>.',
                        '<strong>Quote conversion</strong> — converting an accepted quote to a job is the first point a PO can be entered for that piece of work, via an optional field in the Convert to Job dialog. See <a href="/docs/quotations" class="text-secondary hover:underline">Quotations</a>.',
                        '<strong>Invoicing</strong> — when you invoice a completed job, its PO number becomes the invoice\'s customer reference automatically, and rides through to Xero or QuickBooks. See <a href="/docs/invoicing" class="text-secondary hover:underline">Invoicing</a>.'
                    ]
                }
            ]
        },
        {
            id: 'job-statuses',
            title: 'Job Statuses Explained',
            content: `
                <p class="mb-6">
                    Jobs progress through a defined workflow. Understanding statuses helps you track progress and identify bottlenecks.
                </p>
            `,
            table: {
                headers: ['Status', 'Meaning', 'Editable?', 'What Triggers It'],
                rows: [
                    ['Draft', 'Not yet scheduled, planning stage', 'Yes', 'Manual creation, quote acceptance'],
                    ['Scheduled', 'Assigned date/time and engineer', 'Yes', 'Admin schedules the job'],
                    ['In Progress', 'Engineer checked in, work underway', 'Limited', 'Engineer check-in (automatic)'],
                    ['Completed', 'Work done, ready for cert/invoice', 'No (admin override)', 'Engineer marks complete'],
                    ['Cancelled', 'Job cancelled, will not be done', 'No', 'Admin cancels job'],
                    ['On Hold', 'Paused, waiting on customer/parts', 'Yes', 'Admin puts on hold']
                ]
            },
            subsections: [
                {
                    title: 'Status Transitions',
                    content: `
                        <p class="mb-4">Jobs typically flow:</p>
                        <ol class="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                            <li><strong>Draft</strong> → Admin schedules → <strong>Scheduled</strong></li>
                            <li><strong>Scheduled</strong> → Engineer checks in → <strong>In Progress</strong></li>
                            <li><strong>In Progress</strong> → Engineer marks complete → <strong>Completed</strong></li>
                        </ol>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                            <p class="text-sm text-amber-900">
                                <strong>Important:</strong> Check-in promotes status from Scheduled → In Progress automatically.
                                Check-out does NOT promote to Completed—engineers must explicitly mark the job complete.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'scheduling',
            title: 'Scheduling Visits',
            content: `
                <p class="mb-6">
                    Jobs can have one visit (most common) or multiple visits for complex work.
                </p>
            `,
            subsections: [
                {
                    title: 'Single Visit Jobs',
                    content: `
                        <p class="mb-4">Most jobs are single-visit: one engineer, one date, done.</p>
                    `,
                    steps: [
                        { step: 'Open the job detail page', description: '' },
                        { step: 'Click "Schedule Visit"', description: '' },
                        { step: 'Select date and time', description: '' },
                        { step: 'Assign engineer(s)', description: 'Single or multiple engineers for same visit' },
                        { step: 'Set estimated duration', description: 'Used for calendar blocking' },
                        { step: 'Click "Schedule"', description: 'Job status changes to "Scheduled"' }
                    ]
                },
                {
                    title: 'Multi-Visit Jobs',
                    content: `
                        <p class="mb-4">Use multi-visit when work spans multiple days or requires return visits.</p>
                        <p class="mb-4"><strong>Examples:</strong> Installation over 3 days, annual service with follow-up fault repair, multi-stage project work.</p>
                    `,
                    steps: [
                        { step: 'Open the job detail page', description: '' },
                        { step: 'Click "Schedule Visit"', description: '' },
                        { step: 'Schedule the first visit', description: '' },
                        { step: 'Click "Add Another Visit"', description: '' },
                        { step: 'Schedule subsequent visits', description: 'Different dates, same or different engineers' },
                        { step: 'Each visit tracks independently', description: 'Check-in/out, photos, work summary per visit' }
                    ]
                },
                {
                    title: 'Lead Time Configuration',
                    content: `
                        <p class="mb-4">
                            For service contracts, configure how far in advance jobs appear.
                        </p>
                    `,
                    bullets: [
                        'Go to Settings → Job Config → Lead Time Window',
                        'Set days before due date (e.g., 14 days)',
                        'Jobs appear in "Scheduled" list when within window',
                        'Engineers see them in field app under "This Week" or "Today"'
                    ]
                }
            ]
        },
        {
            id: 'assigning-engineers',
            title: 'Assigning Engineers',
            content: `
                <p class="mb-6">
                    Assign engineers to visits manually or let auto-assign rules handle it.
                </p>
            `,
            subsections: [
                {
                    title: 'Manual Assignment',
                    content: '',
                    steps: [
                        { step: 'When scheduling a visit, select engineer(s) from dropdown', description: '' },
                        { step: 'You can assign multiple engineers to the same visit', description: 'E.g., apprentice + qualified engineer' },
                        { step: 'Engineers see the job in their field app immediately', description: '' },
                        { step: 'If calendar connected, job appears as calendar event', description: '' }
                    ]
                },
                {
                    title: 'Auto-Assign Rules',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Settings → Job Config</p>
                        <p class="mb-4">Set rules to automatically assign engineers based on:</p>
                    `,
                    bullets: [
                        'Job type (e.g., all EICR jobs → specific engineer)',
                        'Customer (e.g., VIP customers → senior engineer)',
                        'Postcode area (e.g., SW London → Engineer A)',
                        'Round-robin rotation (distribute evenly)'
                    ]
                },
                {
                    title: 'Calendar Integration',
                    content: `
                        <p class="mb-4">
                            When engineers connect Google or Microsoft calendars, jobs appear as calendar events with:
                        </p>
                    `,
                    bullets: [
                        'Job title and customer name',
                        'Site address (with map link)',
                        'Scheduled start and end time',
                        'Two-way sync: change time in calendar, job updates in Opscel'
                    ]
                },
                {
                    title: 'Team Availability',
                    content: `
                        <p class="mb-4">
                            See who is available when scheduling:
                        </p>
                    `,
                    bullets: [
                        'Engineer list shows existing jobs for selected date',
                        'Availability indicators: Available, Busy, Fully Booked',
                        'Hover to see what jobs they already have',
                        'You can still assign if overbooked (shows warning)'
                    ]
                }
            ]
        },
        {
            id: 'multi-visit',
            title: 'Multi-Visit Jobs',
            content: `
                <p class="mb-6">
                    Multi-visit jobs have special behavior worth understanding.
                </p>
            `,
            subsections: [
                {
                    title: 'When to Use Multi-Visit',
                    content: '',
                    bullets: [
                        'Installation spanning multiple days',
                        'Initial inspection + follow-up repair',
                        'Annual service + remedial work',
                        'Commissioning phase 1, 2, 3',
                        'Multi-stage project work'
                    ]
                },
                {
                    title: 'Per-Visit Work Summaries',
                    content: `
                        <p class="mb-4">
                            Each visit has its own work summary, photos, defects, and parts. These aggregate into the final job record.
                        </p>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-sm text-blue-900">
                                <strong>Important:</strong> Per-visit work summaries are the source of truth for PDFs. Each visit summary appears
                                in certificates and invoices, showing the full history of work done.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Visit-Scoped Data',
                    content: `
                        <p class="mb-4">The following are tracked per-visit:</p>
                    `,
                    bullets: [
                        'Check-in and check-out GPS (start/end time per visit)',
                        'Photos (tagged to specific visit)',
                        'Defects logged during that visit',
                        'Parts used on that visit',
                        'Work summary for that day',
                        'Engineer signatures (if multiple visits, one per visit)'
                    ]
                },
                {
                    title: 'Multiple Engineers, Same Job',
                    content: `
                        <p class="mb-4">
                            If multiple engineers work the same visit:
                        </p>
                    `,
                    bullets: [
                        'Each checks in/out independently',
                        'Photos and defects are shared (visible to all engineers on job)',
                        'Work summary is shared (all engineers contribute)',
                        'Actual duration = time from first check-in to last check-out'
                    ]
                },
                {
                    title: 'Completion Behavior',
                    content: `
                        <p class="mb-4">
                            Multi-visit jobs complete when:
                        </p>
                        <ol class="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                            <li>All scheduled visits are checked in (at least once)</li>
                            <li>All work summaries are filled (per visit)</li>
                            <li>Engineer marks job complete from the last visit</li>
                        </ol>
                        <p class="text-gray-700">
                            Completing a multi-visit job from the admin view requires all visits to have work summaries.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'completing-jobs',
            title: 'Completing Jobs',
            content: `
                <p class="mb-6">
                    Jobs can be completed from the field app (engineer) or admin app (manager).
                </p>
            `,
            subsections: [
                {
                    title: 'Engineer Completion (Field App)',
                    content: `
                        <p class="mb-4">Engineers complete jobs after work is done and summary is written.</p>
                    `,
                    steps: [
                        { step: 'Ensure all work is documented', description: 'Photos, defects, parts, worksheets' },
                        { step: 'Write work summary (minimum 10 characters)', description: '' },
                        { step: 'Get customer sign-off (if required)', description: '' },
                        { step: 'Check out (records departure GPS)', description: '' },
                        { step: 'Tap "Complete Job"', description: '' },
                        { step: 'Review gate checks all requirements', description: 'Check-in ✓, risk ✓, summary ✓' },
                        { step: 'Confirm completion', description: 'Status changes to "Completed"' }
                    ]
                },
                {
                    title: 'Admin Completion (Admin App)',
                    content: `
                        <p class="mb-4">Managers can complete jobs from the admin interface.</p>
                    `,
                    steps: [
                        { step: 'Open the job detail page', description: '' },
                        { step: 'Verify all visits have work summaries', description: '' },
                        { step: 'Click "Mark Complete"', description: '' },
                        { step: 'Add completion notes if needed', description: '' },
                        { step: 'Confirm', description: 'Status changes to "Completed"' }
                    ]
                },
                {
                    title: 'Completion Checklist',
                    content: `
                        <p class="mb-4">Before completing, verify:</p>
                    `,
                    bullets: [
                        'Work summary filled (detailed, professional)',
                        'All defects logged (if found)',
                        'Parts recorded (for invoicing)',
                        'Photos uploaded (visible in admin)',
                        'Worksheets submitted (not just saved as draft)',
                        'Customer signature captured (if required)',
                        'Risk assessment complete (if required)'
                    ]
                },
                {
                    title: 'What Can/Cannot Be Edited After Completion',
                    content: `
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h4 class="font-bold text-red-900 mb-2">✗ Cannot Edit (Field App)</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Work summary</li>
                                    <li>• Photos/defects/parts</li>
                                    <li>• Check-in/out times</li>
                                    <li>• Signatures</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 class="font-bold text-green-900 mb-2">✓ Can Edit (Admin Override)</h4>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li>• Job description</li>
                                    <li>• Scheduled date/time</li>
                                    <li>• Assigned engineer</li>
                                    <li>• Job status (reopen)</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mt-4 text-gray-700 text-sm">
                            Field engineers cannot edit completed jobs. Contact your admin if changes are needed.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'post-completion',
            title: 'Post-Completion Actions',
            content: `
                <p class="mb-6">
                    After a job is completed, several actions become available.
                </p>
            `,
            subsections: [
                {
                    title: 'Generate Certificate',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Depends on job type and vertical</p>
                    `,
                    steps: [
                        { step: 'Open completed job', description: '' },
                        { step: 'Go to Certificates section', description: '' },
                        { step: 'Click "Assign Certificate"', description: '' },
                        { step: 'Select certificate type', description: 'EIC, EICR, Fire Alarm Service, etc.' },
                        { step: 'Certificate pre-fills with job data', description: 'Customer, site, engineer, work done' },
                        { step: 'Complete certificate sections and issue', description: '' }
                    ]
                },
                {
                    title: 'Create Invoice',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> All completed jobs</p>
                    `,
                    steps: [
                        { step: 'Open completed job', description: '' },
                        { step: 'Go to Invoices section', description: '' },
                        { step: 'Click "Create Invoice"', description: '' },
                        { step: 'Invoice pre-fills with parts, labour, callout fee', description: '' },
                        { step: 'Review pricing and line items', description: '' },
                        { step: 'Save as draft or send to customer', description: '' }
                    ]
                },
                {
                    title: 'Convert to Follow-Up Job',
                    content: `
                        <p class="mb-4">If work was incomplete or defects need remedial action:</p>
                    `,
                    steps: [
                        { step: 'Open completed job', description: '' },
                        { step: 'Click "Create Follow-Up Job"', description: '' },
                        { step: 'New job created with same customer/site', description: '' },
                        { step: 'Original job linked as "parent job"', description: '' },
                        { step: 'Defects from parent job visible in new job', description: '' }
                    ]
                },
                {
                    title: 'Service Contract Auto-Generation',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Business+ tier, when job completes</p>
                        <p class="mb-4">
                            If a completed job has a service contract attached, the next job generates automatically based on cadence.
                        </p>
                    `,
                    bullets: [
                        'Next job appears in "Scheduled" list when within lead-time window',
                        'Assets from completed job pre-load to next job (if still active)',
                        'Engineer assignment copies from contract settings',
                        'You can manually generate next job early if needed'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Job Stuck in Scheduled (Engineer Checked In)',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Engineer checked in but job still shows "Scheduled".</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check-in should promote to "In Progress" automatically',
                        'Verify check-in synced (check field app Sync Inspector)',
                        'Check if engineer checked into a visit, not the parent job',
                        'For multi-visit: status changes when first visit checks in',
                        'If truly stuck, admin can manually change status'
                    ]
                },
                {
                    title: 'How to Add Return Visit',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Job complete but customer needs return visit.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Open the completed job',
                        'Click "Create Follow-Up Job" (links to original)',
                        'Or reopen the job (admin override) and add new visit',
                        'New visit schedules independently'
                    ]
                },
                {
                    title: 'Actual Duration Showing 0',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Job completed but actual_duration is 0.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Actual duration calculates only on completion (not during "In Progress")',
                        'Formula: time from first check-in to last check-out',
                        'If 0, check that check-in and check-out both synced',
                        'For multi-visit: duration spans first check-in to last check-out across all visits',
                        'If missing, admin can manually set actual duration'
                    ]
                },
                {
                    title: 'Re-Scheduling Issues',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Re-scheduling a job causes errors or unexpected duration.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Re-scheduling >22 days used to overflow actual_duration—now fixed',
                        'Actual duration only calculated on completion (gated)',
                        'If job already completed, re-scheduling only affects future visits',
                        'Check job status before re-scheduling (Draft/Scheduled OK, In Progress/Completed needs care)'
                    ]
                },
                {
                    title: 'Calendar Not Syncing',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Jobs not appearing in engineer&apos;s calendar.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Engineer must connect calendar in Field App → Settings → Calendar',
                        'Check OAuth token not expired (reconnect if needed)',
                        'Two-way sync delay can be 1-5 minutes',
                        'Calendar integration settings: Settings → Calendar Integration',
                        'If persistent, check cron logs (admin only)'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Can I edit a completed job?',
                    content: `
                        <p class="text-gray-700">
                            Field engineers cannot. Admins and managers have an override to edit completed jobs (job description, scheduling,
                            assigned engineer). However, work summaries, photos, and captured data remain locked to preserve audit trail integrity.
                        </p>
                    `
                },
                {
                    title: 'What is the difference between a visit and a job?',
                    content: `
                        <p class="text-gray-700">
                            A <strong>job</strong> is the overall work order. A <strong>visit</strong> is a scheduled date/time for an engineer to go on-site.
                            Single-visit jobs have one visit. Multi-visit jobs have multiple visits (e.g., Day 1: inspection, Day 2: repair).
                            Each visit can have different engineers, times, and work summaries.
                        </p>
                    `
                },
                {
                    title: 'How do service contracts create jobs automatically?',
                    content: `
                        <p class="text-gray-700">
                            A cron job runs daily at 05:00 UTC (UK-aligned). It checks all active service contracts and creates jobs for any contracts
                            within the lead-time window (e.g., 14 days before due date). Jobs start in "Scheduled" status with a suggested date.
                            Engineers see them in the field app under "This Week" or "Today."
                        </p>
                    `
                },
                {
                    title: 'Can I assign multiple engineers to one job?',
                    content: `
                        <p class="text-gray-700">
                            Yes. When scheduling a visit, select multiple engineers. They all see the job in their field app. Each checks in/out
                            independently. Photos, defects, and parts are shared. Work summary is collaborative—any engineer can edit it until the
                            job is completed.
                        </p>
                    `
                },
                {
                    title: 'What if I schedule a job but the engineer is already booked?',
                    content: `
                        <p class="text-gray-700">
                            Opscel shows availability warnings but does not block scheduling. You can still assign the job—useful for urgent work or
                            when engineers can juggle multiple jobs. The engineer sees all jobs in their list and decides the order to tackle them.
                        </p>
                    `
                },
                {
                    title: 'How do I reopen a completed job?',
                    content: `
                        <p class="text-gray-700">
                            Only admins and managers can reopen completed jobs. Go to the job detail page, click the status dropdown, and select
                            "In Progress" or "Scheduled." This is useful if a certificate was rejected or customer requests changes. Engineers cannot
                            reopen jobs from the field app.
                        </p>
                    `
                },
                {
                    title: 'Why do some jobs have a "parent job" link?',
                    content: `
                        <p class="text-gray-700">
                            Follow-up jobs (created from "Create Follow-Up Job" button) link to the original job as the parent. This creates a
                            traceable history: original inspection → remedial work → final verification. The parent job&apos;s defects and history are
                            visible in the child job for context.
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
            title: 'Planning Your Week with the Planner',
            description: 'Booking and moving visits on the week board',
            href: '/docs/planner'
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
