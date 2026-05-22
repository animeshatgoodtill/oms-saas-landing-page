import { IDocGuide } from '@/types';

export const serviceContractsGuide: IDocGuide = {
    slug: 'service-contracts',
    title: 'Service Contracts',
    description: 'Recurring service automation for annual fire alarm tests, quarterly inspections, and routine maintenance visits. Automatically schedule jobs and pre-load assets for predictable revenue streams.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        Service contracts automate recurring maintenance work. Set a customer, cadence (weekly, monthly, quarterly, annual),
                        and lead-time window—OpsCel generates jobs automatically before they're due. Assets from the previous visit pre-load,
                        so engineers know exactly which equipment to service.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Admins, Managers<br/>
                        <strong>Where it lives:</strong> Scheduling → Service Contracts<br/>
                        <strong>Availability:</strong> Business+ tier<br/>
                        <strong>Key benefit:</strong> Predictable revenue, zero manual scheduling, asset continuity
                    </p>
                </div>
                <p class="mb-4">Service contracts power:</p>
            `,
            subsections: [
                {
                    title: 'Key Capabilities',
                    content: '',
                    bullets: [
                        'Automatic job generation at configured cadence (weekly, monthly, quarterly, annual)',
                        'Lead-time window configuration (e.g., create job 14 days before due)',
                        'Asset auto-loading from previous visit for continuity',
                        'Customer and site pre-filled from contract',
                        'Engineer assignment rules applied automatically',
                        'Service history tracking per contract',
                        'Pause/resume contracts without deleting them'
                    ]
                },
                {
                    title: 'Common Use Cases',
                    content: '',
                    bullets: [
                        '<strong>Annual fire alarm testing:</strong> Generate job 14 days before anniversary of last service',
                        '<strong>Quarterly PAT testing:</strong> Office sites needing regular portable appliance testing',
                        '<strong>Monthly boiler servicing:</strong> Recurring maintenance for commercial heating systems',
                        '<strong>6-monthly emergency lighting:</strong> Compliance testing for fire safety systems'
                    ]
                }
            ]
        },
        {
            id: 'creating-contracts',
            title: 'Creating Service Contracts',
            content: `
                <p class="mb-6">
                    There are two ways to create service contracts in OpsCel. Choose the method based on whether you have an existing job history.
                </p>
            `,
            subsections: [
                {
                    title: 'Method 1: From Completed Job (Recommended)',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Business+ tier | Admins, Managers</p>
                        <p class="mb-4">The best way to start a contract is from a completed job—customer, site, and assets auto-fill.</p>
                    `,
                    steps: [
                        { step: 'Go to Jobs and open a completed job', description: '' },
                        { step: 'Scroll to the Service Contract section', description: '' },
                        { step: 'Click "Convert to Service Contract"', description: '' },
                        { step: 'Set cadence (weekly, monthly, quarterly, annual)', description: '' },
                        { step: 'Set lead-time window (e.g., 14 days before due)', description: '' },
                        { step: 'Click "Create Contract"', description: 'Contract is now active—first job will generate based on cadence' }
                    ]
                },
                {
                    title: 'Method 2: From Scratch',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Business+ tier | Admins, Managers</p>
                        <p class="mb-4">Create a contract manually when setting up a new recurring service for a customer.</p>
                    `,
                    steps: [
                        { step: 'Go to Scheduling → Service Contracts', description: '' },
                        { step: 'Click "New Contract"', description: '' },
                        { step: 'Select customer and service address', description: '' },
                        { step: 'Enter contract title and description', description: 'e.g., "Annual Fire Alarm Service"' },
                        { step: 'Set start date', description: 'First job due date' },
                        { step: 'Set cadence and lead-time window', description: '' },
                        { step: 'Click "Create"', description: 'Contract is active' }
                    ]
                },
                {
                    title: 'What Gets Auto-Filled (Method 1)',
                    content: 'When converting from a completed job:',
                    bullets: [
                        '<strong>Customer and site:</strong> Pre-filled from job',
                        '<strong>Job type:</strong> Matches original job (e.g., Fire Alarm Service)',
                        '<strong>Assets:</strong> All assets from completed job will pre-load on future jobs',
                        '<strong>Start date:</strong> Defaults to job completion date + cadence interval (e.g., today + 1 year for annual)'
                    ]
                }
            ]
        },
        {
            id: 'cadence',
            title: 'Setting Cadence',
            content: `
                <p class="mb-6">
                    Cadence determines how often jobs are created. Lead-time window determines how far in advance they appear.
                </p>
            `,
            subsections: [
                {
                    title: 'Cadence Options',
                    content: '',
                    table: {
                        headers: ['Cadence', 'Interval', 'Example Use Case'],
                        rows: [
                            ['Weekly', 'Every 7 days', 'Cleaning contracts, regular site visits'],
                            ['Monthly', 'Every 30 days', 'Boiler servicing, routine inspections'],
                            ['Quarterly', 'Every 90 days', 'PAT testing, quarterly compliance checks'],
                            ['Annual', 'Every 365 days', 'Fire alarm service, EICR inspections, gas safety certificates']
                        ]
                    }
                },
                {
                    title: 'Lead-Time Window',
                    content: `
                        <p class="mb-4">
                            The lead-time window is how many days <strong>before the due date</strong> the job should appear in your system.
                            This gives you time to schedule engineers and notify customers.
                        </p>
                        <p class="mb-4"><strong>Example calculation:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Contract start date: <strong>1 January 2026</strong></li>
                            <li>Cadence: <strong>Annual</strong></li>
                            <li>Lead-time window: <strong>14 days</strong></li>
                            <li>Next job due: <strong>1 January 2027</strong></li>
                            <li>Job will appear on: <strong>18 December 2026</strong> (14 days before due)</li>
                        </ul>
                    `
                },
                {
                    title: 'Recommended Lead-Time Settings',
                    content: '',
                    bullets: [
                        '<strong>Weekly/Monthly contracts:</strong> 7 days lead-time (short-notice scheduling)',
                        '<strong>Quarterly contracts:</strong> 14 days lead-time (medium planning window)',
                        '<strong>Annual contracts:</strong> 30 days lead-time (customer notices, engineer availability)'
                    ]
                }
            ]
        },
        {
            id: 'asset-loading',
            title: 'Asset Auto-Loading',
            content: `
                <p class="mb-6">
                    One of the most powerful features of service contracts: assets from the previous job automatically pre-load on the next job.
                    Engineers see exactly which equipment needs servicing without manual data entry.
                </p>
            `,
            subsections: [
                {
                    title: 'How It Works',
                    content: `
                        <p class="mb-4">When a contract generates a new job:</p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li>System finds the <strong>previous completed job</strong> for this contract</li>
                            <li>Checks which assets were serviced in that job</li>
                            <li>Filters to only <strong>active assets</strong> (not decommissioned or replaced)</li>
                            <li>Pre-loads those assets into the new job</li>
                            <li>Engineer opens job and sees full asset list ready to inspect</li>
                        </ol>
                    `
                },
                {
                    title: 'What Pre-Loads',
                    content: 'The following data carries forward for each asset:',
                    bullets: [
                        'Asset type (e.g., Fire Panel, Emergency Light, Circuit)',
                        'Asset identity (serial number, location, manufacturer)',
                        'Last service date',
                        'Next due date (calculated from service cadence)',
                        'Parent-child relationships (e.g., panel → zones → detectors)'
                    ]
                },
                {
                    title: 'What Does NOT Pre-Load',
                    content: 'To maintain compliance, these must be entered fresh each visit:',
                    bullets: [
                        'Test results (IR, Zs, RCD, functional tests)',
                        'Visual inspection outcomes',
                        'Defects found',
                        'Parts replaced',
                        'Battery test results'
                    ]
                },
                {
                    title: 'When Asset Loading Fails',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p class="text-amber-800">
                                <strong>No assets will pre-load if:</strong>
                            </p>
                            <ul class="list-disc pl-6 mt-2 text-amber-800">
                                <li>Previous job has <strong>no assets</strong> recorded</li>
                                <li>All assets from previous job were <strong>decommissioned</strong></li>
                                <li>This is the <strong>first generated job</strong> (no history yet)</li>
                            </ul>
                        </div>
                        <p class="text-gray-700">
                            In these cases, the engineer must add assets manually on the first visit. Future jobs will then pre-load correctly.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'managing-contracts',
            title: 'Managing Contracts',
            subsections: [
                {
                    title: 'Pausing a Contract',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Business+ tier | Admins, Managers</p>
                        <p class="mb-4">Pause a contract temporarily without deleting it. No new jobs will generate until you resume.</p>
                    `,
                    steps: [
                        { step: 'Go to Scheduling → Service Contracts', description: '' },
                        { step: 'Find the contract and click to open', description: '' },
                        { step: 'Click "Pause Contract"', description: '' },
                        { step: 'Confirm pause', description: 'Contract status changes to "Paused"—no new jobs will generate' }
                    ]
                },
                {
                    title: 'Resuming a Paused Contract',
                    content: `
                        <p class="mb-4">When you resume a contract, the next job due date is recalculated from today.</p>
                    `,
                    steps: [
                        { step: 'Open the paused contract', description: '' },
                        { step: 'Click "Resume Contract"', description: '' },
                        { step: 'Confirm resume', description: 'Next job will generate at the next scheduled cron run' }
                    ]
                },
                {
                    title: 'Cancelling a Contract',
                    content: `
                        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <p class="text-red-800">
                                <strong>Warning:</strong> Cancelling a contract is permanent. Existing generated jobs remain, but no new jobs will ever be created from this contract.
                            </p>
                        </div>
                    `,
                    steps: [
                        { step: 'Open the contract', description: '' },
                        { step: 'Click "Cancel Contract"', description: '' },
                        { step: 'Type "CANCEL" to confirm', description: '' },
                        { step: 'Click "Confirm Cancellation"', description: 'Contract status changes to "Cancelled"' }
                    ]
                },
                {
                    title: 'Manually Generating Next Job',
                    content: `
                        <p class="mb-4">Need a job now instead of waiting for the cron? Generate manually.</p>
                    `,
                    steps: [
                        { step: 'Open the contract', description: '' },
                        { step: 'Click "Generate Job Now"', description: '' },
                        { step: 'Confirm generation', description: 'Job is created immediately and appears in the jobs list' }
                    ]
                },
                {
                    title: 'Editing Contract Terms',
                    content: `
                        <p class="mb-4">You can edit cadence, lead-time, customer, and site at any time.</p>
                        <p class="mb-4"><strong>Note:</strong> Changes only affect <strong>future</strong> jobs. Already-generated jobs are not modified.</p>
                    `,
                    steps: [
                        { step: 'Open the contract', description: '' },
                        { step: 'Click "Edit Contract"', description: '' },
                        { step: 'Update cadence, lead-time, or other fields', description: '' },
                        { step: 'Click "Save Changes"', description: 'Next job will use new settings' }
                    ]
                }
            ]
        },
        {
            id: 'cron-timing',
            title: 'Cron Timing Explained',
            content: `
                <p class="mb-6">
                    Service contract job generation runs on a daily cron schedule. Understanding the timing helps avoid confusion about when jobs appear.
                </p>
            `,
            subsections: [
                {
                    title: 'Daily Cron Run',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-blue-800">
                                <strong>Cron schedule:</strong> Every day at <strong>05:00 UTC</strong> (UK-aligned: 05:00 GMT / 06:00 BST)
                            </p>
                        </div>
                        <p class="mb-4">What happens during each run:</p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700">
                            <li>System scans all <strong>active</strong> service contracts</li>
                            <li>Calculates next due date for each contract</li>
                            <li>Checks if today falls within the lead-time window</li>
                            <li>If yes: generates job and links to contract</li>
                            <li>If no: waits until tomorrow</li>
                        </ol>
                    `
                },
                {
                    title: 'Lead-Time Window Calculation',
                    content: `
                        <p class="mb-4"><strong>Example:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li>Today: <strong>10 December 2026</strong></li>
                            <li>Contract due: <strong>1 January 2027</strong></li>
                            <li>Lead-time window: <strong>30 days</strong></li>
                            <li>Window opens: <strong>2 December 2026</strong> (30 days before due)</li>
                            <li>Job was generated on: <strong>2 December 2026 at 05:00 UTC</strong></li>
                        </ul>
                        <p class="text-gray-700">
                            Since today (10 December) is within the window, the job already exists. If you created the contract today,
                            you would see the job immediately because the window is already open.
                        </p>
                    `
                },
                {
                    title: 'Why Jobs May Appear Early',
                    content: 'If you see a job weeks before its due date, this is expected behavior:',
                    bullets: [
                        'The lead-time window is intentionally long (e.g., 30 days for annual contracts)',
                        'This gives you time to schedule engineers around holidays and customer availability',
                        'The job\'s <strong>suggested date</strong> field shows the actual due date',
                        'You can schedule the job for any date—it doesn\'t have to be the suggested date'
                    ]
                },
                {
                    title: 'Retry Logic',
                    content: `
                        <p class="mb-4">If job generation fails (e.g., database timeout, API error), the cron retries:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Retry 1:</strong> 2 hours after failure</li>
                            <li><strong>Retry 2:</strong> 4 hours after failure</li>
                            <li><strong>Retry 3:</strong> 8 hours after failure</li>
                            <li><strong>Next cron:</strong> If all retries fail, tries again at next 05:00 UTC</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'viewing-jobs',
            title: 'Viewing Generated Jobs',
            subsections: [
                {
                    title: 'From Contract Detail Page',
                    content: `
                        <p class="mb-4">The contract detail page shows all jobs generated from this contract.</p>
                    `,
                    steps: [
                        { step: 'Go to Scheduling → Service Contracts', description: '' },
                        { step: 'Click on a contract to open', description: '' },
                        { step: 'Scroll to "Generated Jobs" section', description: 'Shows all jobs with status, dates, engineers' },
                        { step: 'Click any job to open detail page', description: '' }
                    ]
                },
                {
                    title: 'From Job Detail Page',
                    content: `
                        <p class="mb-4">Jobs generated from contracts show a link back to the parent contract.</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Open any job detail page</li>
                            <li>Look for "Service Contract" section</li>
                            <li>If job was generated from contract: contract name and link appear</li>
                            <li>Click link to view contract</li>
                        </ul>
                    `
                },
                {
                    title: 'Occurrence Tracking',
                    content: `
                        <p class="mb-4">Each generated job has an occurrence number (1st, 2nd, 3rd, etc.) to track service history.</p>
                        <p class="mb-4">This helps with compliance: "This is the 12th annual fire alarm test for this customer."</p>
                    `
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Next job didn\'t generate',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Contract is active but no job appeared.</p>
                        <p class="mb-4"><strong>Check:</strong></p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700">
                            <li><strong>Contract status:</strong> Is it active or paused? (Paused contracts don't generate jobs)</li>
                            <li><strong>Lead-time window:</strong> Has the window opened yet? (Check due date minus lead-time)</li>
                            <li><strong>Last generation date:</strong> View contract detail—shows when last job was created</li>
                            <li><strong>Cron logs:</strong> Contact support if the cron failed (rare)</li>
                        </ol>
                    `
                },
                {
                    title: 'Assets didn\'t pre-load',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Generated job has no assets.</p>
                        <p class="mb-4"><strong>Causes:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>First job:</strong> No previous job history yet—engineer must add assets manually on first visit</li>
                            <li><strong>Assets decommissioned:</strong> All assets from previous job were marked inactive</li>
                            <li><strong>Previous job incomplete:</strong> Previous job was cancelled or has no recorded assets</li>
                        </ul>
                        <p class="mt-4 text-gray-700">
                            <strong>Fix:</strong> Complete the current job with assets recorded. Future jobs will pre-load correctly.
                        </p>
                    `
                },
                {
                    title: 'Contract paused accidentally',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> No jobs generating, contract shows "Paused" status.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Open the contract detail page', description: '' },
                        { step: 'Click "Resume Contract"', description: '' },
                        { step: 'Confirm resume', description: 'Next job will generate at next cron run (05:00 UTC)' }
                    ]
                },
                {
                    title: 'Wrong cadence set',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Contract generating jobs too frequently or not often enough.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Open contract', description: '' },
                        { step: 'Click "Edit Contract"', description: '' },
                        { step: 'Change cadence (weekly → monthly, etc.)', description: '' },
                        { step: 'Save changes', description: 'Only affects future jobs—already-generated jobs unchanged' }
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'When will the next job be created?',
                    content: `
                        <p class="text-gray-700">
                            Jobs are created at 05:00 UTC daily when the current date enters the lead-time window. For example, if your contract
                            is due 1 January 2027 with a 30-day lead-time, the job will appear on 2 December 2026 at 05:00 UTC.
                        </p>
                    `
                },
                {
                    title: 'What if I change a contract after the next job is already generated?',
                    content: `
                        <p class="text-gray-700">
                            Changes to cadence, lead-time, or customer only affect <strong>future</strong> jobs. Already-generated jobs remain unchanged.
                            If you need to modify an existing generated job, edit the job directly (not the contract).
                        </p>
                    `
                },
                {
                    title: 'Does the engineer see which assets to service?',
                    content: `
                        <p class="text-gray-700">
                            Yes! When the engineer opens the job in the field app, all pre-loaded assets appear in the Assets section. They can
                            see asset identity, location, last service date, and next due date. They just need to fill in test results and defects.
                        </p>
                    `
                },
                {
                    title: 'Can I generate a job manually instead of waiting for the cron?',
                    content: `
                        <p class="text-gray-700">
                            Yes. Open the contract detail page and click "Generate Job Now." The job is created immediately. This is useful for
                            emergency work or when a customer requests early service.
                        </p>
                    `
                },
                {
                    title: 'What happens if I delete a generated job?',
                    content: `
                        <p class="text-gray-700">
                            Deleting a generated job does not affect the contract. The contract will still generate the <strong>next</strong> job
                            at the scheduled time. The deleted job is removed from occurrence tracking.
                        </p>
                    `
                },
                {
                    title: 'Can I have multiple contracts for the same customer?',
                    content: `
                        <p class="text-gray-700">
                            Yes. You can create separate contracts for different services (e.g., one for fire alarms, one for emergency lighting)
                            or different sites for the same customer. Each contract operates independently.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Managing multi-visit and recurring jobs',
            href: '/docs/jobs'
        },
        {
            title: 'Field Service App',
            description: 'How engineers complete recurring service visits',
            href: '/docs/field-service'
        },
        {
            title: 'Asset Tracking',
            description: 'Asset continuity and auto-loading explained',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Onboarding',
            description: 'Setting up service contracts for new customers',
            href: '/docs/onboarding'
        }
    ]
};
