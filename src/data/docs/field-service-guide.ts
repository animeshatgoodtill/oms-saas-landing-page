import { IDocGuide } from '@/types';

export const fieldServiceGuide: IDocGuide = {
    slug: 'field-service',
    title: 'Field Service App — Engineer\'s Day',
    description: 'Complete guide to using the Opscel field service PWA for engineers. Learn how to manage jobs, capture work, and sync data offline.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        The Opscel Field Service App is an <strong>offline-first Progressive Web App (PWA)</strong> designed for field engineers.
                        It lets you manage your daily jobs, capture photos and signatures, fill worksheets, log defects and parts, and complete
                        work summaries—all while offline. Data syncs automatically when you're back online.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who it's for:</strong> Field engineers, service technicians, and field managers<br/>
                        <strong>Where it lives:</strong> Install as a PWA from your browser (Chrome, Safari, Android)<br/>
                        <strong>Key benefit:</strong> Work anywhere without connectivity, sync seamlessly when online
                    </p>
                </div>
                <p class="mb-4">The field app is your mobile command center for:</p>
            `,
            subsections: [
                {
                    title: 'Key Capabilities',
                    content: '',
                    bullets: [
                        'Viewing today\'s jobs and weekly schedule',
                        'GPS-tracked check-in and departure',
                        'Photo capture with 5 categories and captions',
                        'Engineer and customer signature collection',
                        'Multi-section worksheets and checklists',
                        'Defect logging with severity levels',
                        'Parts recording with pricing',
                        'Work summary and job completion',
                        'Complete offline functionality with automatic sync'
                    ]
                }
            ]
        },
        {
            id: 'installing-pwa',
            title: 'Installing the PWA',
            subsections: [
                {
                    title: 'What is a PWA?',
                    content: `
                        <p class="mb-4">
                            A Progressive Web App (PWA) is a web application that installs on your device like a native app.
                            It runs in its own window, works offline, and appears on your home screen with an icon.
                        </p>
                        <p class="mb-6">
                            <strong>Benefits:</strong> No app store required, automatic updates, smaller download size, works across all devices.
                        </p>
                    `
                },
                {
                    title: 'Installing on Chrome (Desktop)',
                    content: '',
                    steps: [
                        { step: 'Navigate to the Opscel field app URL in Chrome', description: 'You\'ll receive this URL from your admin or sign-in email' },
                        { step: 'Click the install icon in the address bar (small computer with arrow)', description: 'Or go to Settings → Install Opscel' },
                        { step: 'Click "Install" in the confirmation dialog', description: '' },
                        { step: 'The app opens in its own window', description: 'A shortcut is added to your desktop and Start menu' }
                    ]
                },
                {
                    title: 'Installing on Chrome (Android)',
                    content: '',
                    steps: [
                        { step: 'Open the Opscel field app URL in Chrome', description: '' },
                        { step: 'Tap the three-dot menu (top right)', description: '' },
                        { step: 'Select "Add to Home screen" or "Install app"', description: '' },
                        { step: 'Confirm by tapping "Add" or "Install"', description: '' },
                        { step: 'The Opscel icon appears on your home screen', description: 'Tap it to launch the app' }
                    ]
                },
                {
                    title: 'Installing on Safari (iOS)',
                    content: '',
                    steps: [
                        { step: 'Open the Opscel field app URL in Safari', description: 'Must use Safari, not Chrome on iOS' },
                        { step: 'Tap the Share button (square with arrow)', description: '' },
                        { step: 'Scroll down and tap "Add to Home Screen"', description: '' },
                        { step: 'Edit the name if desired, then tap "Add"', description: '' },
                        { step: 'The Opscel icon appears on your home screen', description: '' }
                    ]
                },
                {
                    title: 'First Launch',
                    content: `
                        <p class="mb-4">After installation, you'll need to sign in with your Opscel credentials. This <strong>requires an internet connection</strong> for the first login.</p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                            <p class="text-sm text-amber-900">
                                <strong>Important:</strong> The app needs one online sign-in before offline mode works. After that, you can work completely offline.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'todays-jobs',
            title: 'Today\'s Jobs List',
            content: `
                <p class="mb-6">
                    The home screen shows all jobs assigned to you for today, with quick access to your weekly schedule.
                </p>
            `,
            subsections: [
                {
                    title: 'Navigating the Jobs List',
                    content: '',
                    steps: [
                        { step: 'Open the field app', description: 'You\'ll land on the "Today\'s Jobs" screen by default' },
                        { step: 'View your assigned jobs for today', description: 'Shows job number, customer name, site address, and scheduled time' },
                        { step: 'Tap a job card to open the job detail page', description: 'This is your hub for all job-related actions' },
                        { step: 'Use the bottom navigation to switch views', description: 'Schedule (weekly calendar), Customers, Certificates, Settings' }
                    ]
                },
                {
                    title: 'Job Card Information',
                    content: 'Each job card displays:',
                    bullets: [
                        'Job number and title',
                        'Customer name',
                        'Site address with navigation button',
                        'Scheduled date and time',
                        'Job status badge (Scheduled, In Progress, Completed)',
                        'Progress orb showing completion percentage'
                    ]
                },
                {
                    title: 'Filters and Sorting',
                    content: 'Use the filter controls at the top to:',
                    bullets: [
                        'View all jobs, today only, or this week',
                        'Filter by status (Scheduled, In Progress, Completed)',
                        'Sort by scheduled time, customer name, or job number'
                    ]
                },
                {
                    title: 'Overdue Jobs',
                    content: `
                        <p class="mb-4">
                            Jobs scheduled in the past that haven't been completed are marked as overdue with a red indicator.
                            These appear at the top of the list for priority attention.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'pre-visit',
            title: 'Pre-Visit Preparation',
            content: `
                <p class="mb-6">
                    Before heading to a job site, review the job details to prepare for the visit.
                </p>
            `,
            subsections: [
                {
                    title: 'Opening a Job',
                    content: '',
                    steps: [
                        { step: 'Tap a job card from the Today\'s Jobs list', description: '' },
                        { step: 'The job detail hub opens', description: 'Shows a Progress Orb and quick action buttons' },
                        { step: 'Review the Overview section', description: 'Customer details, site address, job description, scheduled time' },
                        { step: 'Check if a risk assessment is required', description: 'Red indicator if not completed' },
                        { step: 'Tap the address to open navigation', description: 'Opens your device\'s map app' }
                    ]
                },
                {
                    title: 'Risk Assessment',
                    content: `
                        <p class="mb-4">
                            If your company requires risk assessments, you must complete one before checking in. The Progress Orb will show a warning until it's done.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Risk Assessment" from the job hub', description: '' },
                        { step: 'Answer all required questions', description: 'Identify hazards, control measures, PPE requirements' },
                        { step: 'Add photos of site hazards if needed', description: '' },
                        { step: 'Tap "Save" to complete the assessment', description: '' }
                    ]
                },
                {
                    title: 'Reviewing Visit History',
                    content: `
                        <p class="mb-4">
                            For multi-visit jobs or return visits, you can view previous visit summaries to understand what was done before.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Visits" from the job hub', description: '' },
                        { step: 'View list of previous visits', description: 'Shows check-in/departure times, engineer name, work summary' },
                        { step: 'Tap a visit to see details', description: 'Photos, defects, parts, and notes from that visit' }
                    ]
                }
            ]
        },
        {
            id: 'on-site-checkin',
            title: 'On-Site: Check-In & Signatures',
            content: `
                <p class="mb-6">
                    When you arrive at the job site, check in to log your arrival time and location.
                </p>
            `,
            subsections: [
                {
                    title: 'Checking In',
                    content: '',
                    steps: [
                        { step: 'Open the job on your device', description: '' },
                        { step: 'Tap the "Check In" button', description: 'Usually at the top of the job hub' },
                        { step: 'Allow location access if prompted', description: 'Your GPS coordinates are recorded' },
                        { step: 'The job status automatically changes to "In Progress"', description: 'Your check-in time is logged' }
                    ]
                },
                {
                    title: 'What Happens Automatically',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-sm text-blue-900 mb-2">
                                <strong>Automatic Status Change:</strong> Check-in promotes the job from "Scheduled" to "In Progress" immediately.
                                This lets the office know you've arrived on site.
                            </p>
                            <p class="text-sm text-blue-900">
                                <strong>Note:</strong> Checking out does NOT automatically complete the job—you must manually mark it complete after filling in the work summary.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Engineer Signature',
                    content: `
                        <p class="mb-4">
                            Some companies require an engineer signature to confirm you've checked in and reviewed the job scope.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the job hub or check-in flow', description: '' },
                        { step: 'Select "Engineer Signature"', description: '' },
                        { step: 'Draw your signature on the signature pad', description: 'Use your finger or stylus' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                },
                {
                    title: 'Customer Signature',
                    content: `
                        <p class="mb-4">
                            You can collect a customer signature at check-in (e.g., permission to enter) or later during the visit.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the job hub', description: '' },
                        { step: 'Select "Customer Signature"', description: '' },
                        { step: 'Hand the device to the customer', description: '' },
                        { step: 'They draw their signature and enter their name', description: '' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'capturing-photos',
            title: 'Capturing Photos',
            content: `
                <p class="mb-6">
                    Photos are organized into 5 categories to keep job documentation structured. All photos work offline and sync when you're back online.
                </p>
            `,
            subsections: [
                {
                    title: 'Photo Categories',
                    content: '',
                    bullets: [
                        'Before: Site condition before work starts',
                        'During: Work in progress, installation steps',
                        'After: Completed work, final condition',
                        'Defects: Issues found during inspection',
                        'Other: Misc photos (equipment, access, permits)'
                    ]
                },
                {
                    title: 'Taking Photos',
                    content: '',
                    steps: [
                        { step: 'Tap "Photos" from the job hub', description: '' },
                        { step: 'Select a category (Before, During, After, Defects, Other)', description: '' },
                        { step: 'Tap the camera button', description: '' },
                        { step: 'Take the photo using your device camera', description: '' },
                        { step: 'Add a caption to describe what is shown', description: 'Captions help identify photos later' },
                        { step: 'Tap "Save"', description: 'Photo queues for upload (or uploads immediately if online)' }
                    ]
                },
                {
                    title: 'Offline Photo Queue',
                    content: `
                        <p class="mb-4">
                            Photos taken offline are stored locally and queued for upload. You'll see a "queued" indicator until they sync.
                        </p>
                        <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                            <p class="text-sm text-green-900">
                                <strong>Storage:</strong> Photos are compressed and stored in your browser's cache. Most devices can hold 50-100 photos offline before needing to sync.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Deleting Photos',
                    content: '',
                    steps: [
                        { step: 'Tap "Photos" from the job hub', description: '' },
                        { step: 'Find the photo to delete', description: '' },
                        { step: 'Tap the delete icon (trash can)', description: '' },
                        { step: 'Confirm deletion', description: 'Cannot be undone' }
                    ]
                }
            ]
        },
        {
            id: 'capturing-work',
            title: 'Capturing Work: Worksheets, Defects & Parts',
            content: `
                <p class="mb-6">
                    Document the work you perform using worksheets, defect logs, and parts records.
                </p>
            `,
            subsections: [
                {
                    title: 'Filling Worksheets',
                    content: `
                        <p class="mb-4">
                            Worksheets are custom forms created by your admin for specific job types (e.g., Fire Alarm Service, Extinguisher Inspection, Remedial Scope).
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Job Sheets" or "Checklists" from the job hub', description: '' },
                        { step: 'Select the worksheet type to fill', description: '' },
                        { step: 'Complete each section in order', description: 'Required fields are marked with asterisks' },
                        { step: 'Add photos or notes where prompted', description: '' },
                        { step: 'The form auto-saves as you go', description: 'You\'ll see "Saved" indicators' },
                        { step: 'Tap "Submit" when complete', description: 'Or save as draft to finish later' }
                    ]
                },
                {
                    title: 'Multi-Section Forms',
                    content: `
                        <p class="mb-4">
                            Some worksheets have multiple sections (e.g., System Details, Visual Inspection, Functional Tests).
                            Complete each section before moving to the next.
                        </p>
                    `
                },
                {
                    title: 'Logging Defects',
                    content: `
                        <p class="mb-4">
                            Defects are issues found during the job that need attention. They can be linked to remedial quotes later.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Defects" from the job hub', description: '' },
                        { step: 'Tap "Add Defect"', description: '' },
                        { step: 'Select severity level', description: 'Critical, High, Medium, Low' },
                        { step: 'Enter defect description', description: 'Be specific: location, what\'s wrong, why it matters' },
                        { step: 'Add photos of the defect', description: 'Photos are linked to this defect record' },
                        { step: 'Add remedial action notes if known', description: 'What needs to be done to fix it' },
                        { step: 'Tap "Save"', description: '' }
                    ]
                },
                {
                    title: 'Recording Parts Used',
                    content: `
                        <p class="mb-4">
                            Record parts and materials used on the job. These feed into invoicing automatically.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Parts" from the job hub', description: '' },
                        { step: 'Tap "Add Part"', description: '' },
                        { step: 'Search for the part by SKU or name', description: 'Or select from your product catalog' },
                        { step: 'Enter quantity used', description: '' },
                        { step: 'Price auto-fills from catalog', description: 'You can override if needed' },
                        { step: 'Review the ex-VAT total', description: '' },
                        { step: 'Tap "Save"', description: 'Part is added to the job' }
                    ]
                },
                {
                    title: 'Parts Pricing',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p class="text-sm text-blue-900">
                                Parts prices come from your product catalog. If a part isn't in the catalog, you can add a custom part with manual pricing.
                                All prices are ex-VAT; VAT is calculated on the invoice.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'completing-job',
            title: 'Completing a Job',
            content: `
                <p class="mb-6">
                    When the work is done, complete the job by filling in the work summary and checking out.
                </p>
            `,
            subsections: [
                {
                    title: 'Review Gate',
                    content: `
                        <p class="mb-4">
                            Before you can complete a job, the system checks that you've met minimum requirements. This is called the "review gate."
                        </p>
                        <p class="mb-4"><strong>Review Gate Requirements:</strong></p>
                    `,
                    bullets: [
                        'Check-in completed ✓',
                        'Risk assessment completed ✓ (if required)',
                        'Work summary entered (at least 10 characters)'
                    ]
                },
                {
                    title: 'Writing the Work Summary',
                    content: `
                        <p class="mb-4">
                            The work summary is the most important field. It appears on certificates, invoices, and customer communications.
                        </p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p class="text-sm text-amber-900">
                                <strong>Important:</strong> The per-visit work summary is the source of truth for PDFs. Write a clear, professional description of what you did today.
                            </p>
                        </div>
                    `,
                    steps: [
                        { step: 'Tap "Complete Job" or "Work Summary" from the job hub', description: '' },
                        { step: 'Enter a detailed work summary', description: 'What you did, what you found, what needs follow-up' },
                        { step: 'Minimum 10 characters required', description: 'Be thorough—this goes to the customer' },
                        { step: 'Review the summary for typos and clarity', description: '' }
                    ]
                },
                {
                    title: 'Customer Sign-Off',
                    content: `
                        <p class="mb-4">
                            If not already collected, get the customer to sign off on the completed work.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the completion screen', description: '' },
                        { step: 'Hand the device to the customer', description: '' },
                        { step: 'They sign and enter their name', description: '' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                },
                {
                    title: 'Checking Out (GPS Departure)',
                    content: '',
                    steps: [
                        { step: 'Ensure all work is documented', description: 'Photos, defects, parts, work summary' },
                        { step: 'Tap "Check Out" or "Complete Job"', description: '' },
                        { step: 'Allow location access', description: 'Your departure GPS coordinates are recorded' },
                        { step: 'Confirm job completion', description: '' },
                        { step: 'The job status changes to "Completed"', description: '' }
                    ]
                },
                {
                    title: 'What Does NOT Happen',
                    content: `
                        <div class="bg-red-50 border-l-4 border-red-500 p-4">
                            <p class="text-sm text-red-900 mb-2">
                                <strong>Important:</strong> Checking out does NOT automatically complete the job. You must explicitly mark it complete after entering the work summary.
                            </p>
                            <p class="text-sm text-red-900">
                                This is intentional—it gives you time to review everything before finalizing.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'offline-sync',
            title: 'Offline Mode & Sync',
            content: `
                <p class="mb-6">
                    The field app is designed to work completely offline. Everything you do is saved locally and syncs when you reconnect.
                </p>
            `,
            subsections: [
                {
                    title: 'What Works Offline',
                    content: 'All core functionality works without connectivity:',
                    bullets: [
                        'Viewing job list and job details',
                        'Checking in and checking out (GPS queued)',
                        'Taking photos (compressed and stored locally)',
                        'Filling worksheets and checklists',
                        'Logging defects',
                        'Recording parts',
                        'Capturing signatures',
                        'Writing work summaries',
                        'Marking jobs complete'
                    ]
                },
                {
                    title: 'What Queues for Sync',
                    content: `
                        <p class="mb-4">
                            When offline, all writes (creates, updates, deletes) are queued in your browser's storage. When you reconnect, they sync automatically.
                        </p>
                        <p class="mb-4"><strong>Synced items:</strong></p>
                    `,
                    bullets: [
                        'Check-in/check-out events with GPS',
                        'Photos and captions',
                        'Worksheet data (per-section)',
                        'Defects and notes',
                        'Parts records',
                        'Signatures',
                        'Work summaries',
                        'Job completion status'
                    ]
                },
                {
                    title: 'Sync Indicators',
                    content: 'The app shows several indicators to help you understand sync status:',
                    bullets: [
                        '<strong>CloudOff icon:</strong> You\'re currently offline',
                        '<strong>SyncChip:</strong> Shows number of queued items waiting to sync',
                        '<strong>AutoSaveChip:</strong> Appears when form data is auto-saving',
                        '<strong>CacheAgeBadge:</strong> Shows how old your cached data is'
                    ]
                },
                {
                    title: 'Sync Inspector',
                    content: `
                        <p class="mb-4">
                            The Sync Inspector lets you see exactly what is in the queue and force a retry if needed.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings (bottom navigation)', description: '' },
                        { step: 'Tap "Sync Inspector"', description: '' },
                        { step: 'View queued items by type', description: 'Photos, forms, check-ins, etc.' },
                        { step: 'Tap "Force Sync Now" to retry', description: 'Useful if sync seems stuck' },
                        { step: 'View sync errors if any', description: 'Shows which items failed and why' }
                    ]
                },
                {
                    title: 'Cache Management',
                    content: `
                        <p class="mb-4">
                            Your device caches job data for offline access. You can manage cache size and clear old data.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Cache Stats', description: '' },
                        { step: 'View cache size and item counts', description: '' },
                        { step: 'Tap "Clear Cache" if needed', description: 'Removes all offline data (synced items are safe)' },
                        { step: 'Re-open jobs you need offline', description: 'They\'ll be cached again' }
                    ]
                },
                {
                    title: 'First-Time Offline Use',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p class="text-sm text-amber-900">
                                <strong>Remember:</strong> The PWA needs one online sign-in before offline mode works. After that initial login,
                                you can work completely offline for weeks if needed—just sync periodically to upload your data.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'field-settings',
            title: 'Field Settings',
            content: `
                <p class="mb-6">
                    Customize your field app experience and manage integrations.
                </p>
            `,
            subsections: [
                {
                    title: 'Theme Preferences',
                    content: '',
                    steps: [
                        { step: 'Go to Settings (bottom navigation)', description: '' },
                        { step: 'Tap "Theme"', description: '' },
                        { step: 'Choose Light, Dark, or System', description: 'System follows your device settings' }
                    ]
                },
                {
                    title: 'Calendar Connection',
                    content: `
                        <p class="mb-4">
                            Connect your Google or Microsoft calendar to sync job schedules with your personal calendar.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Calendar', description: '' },
                        { step: 'Tap "Connect Calendar"', description: '' },
                        { step: 'Choose Google or Microsoft', description: '' },
                        { step: 'Authorize access', description: '' },
                        { step: 'Jobs appear as calendar events', description: 'Two-way sync keeps everything in sync' }
                    ]
                },
                {
                    title: 'Shift History',
                    content: `
                        <p class="mb-4">
                            View your past shifts, including clock-in/out times and total hours.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Shift History', description: '' },
                        { step: 'View list of past shifts', description: '' },
                        { step: 'Tap a shift to see details', description: 'Jobs worked, hours logged' }
                    ]
                },
                {
                    title: 'PWA Install Prompts',
                    content: `
                        <p class="mb-4">
                            If you dismissed the PWA install prompt, you can trigger it again from settings.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → PWA Install', description: '' },
                        { step: 'Tap "Install App"', description: '' },
                        { step: 'Follow browser prompts to install', description: '' }
                    ]
                },
                {
                    title: 'Business Switcher',
                    content: `
                        <p class="mb-4">
                            If you work for multiple companies, switch between businesses without signing out.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings', description: '' },
                        { step: 'Tap the business name at the top', description: '' },
                        { step: 'Select the business to switch to', description: '' },
                        { step: 'The app reloads with that business\'s data', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Job Won\'t Let Me Complete',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> The "Complete Job" button is disabled or shows errors.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Ensure you\'ve checked in (green checkmark)',
                        'Complete risk assessment if required',
                        'Enter a work summary (at least 10 characters)',
                        'Check for validation errors in forms',
                        'Review gate requirements must be met'
                    ]
                },
                {
                    title: 'Photos Disappeared',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Photos I took aren't showing up.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check the Sync Inspector—they may be queued',
                        'Ensure you\'re online so they can upload',
                        'Look in the correct category (Before, During, After, etc.)',
                        'Force sync from Settings → Sync Inspector',
                        'Check browser storage quota (Settings → Cache Stats)'
                    ]
                },
                {
                    title: 'Offline Sync Stuck',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Items in sync queue won't upload.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Verify you have internet connectivity',
                        'Check if you\'re on a slow/unstable connection',
                        'Force retry from Sync Inspector',
                        'Check sync error logs for specific failures',
                        'If persistent, contact support (may be server issue)'
                    ]
                },
                {
                    title: 'Wrong Job Checked In',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> I accidentally checked into the wrong job.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check out of the wrong job immediately',
                        'Contact your office admin—they can reassign or delete the check-in',
                        'Check in to the correct job',
                        'There\'s no self-service undo for check-ins (by design, for GPS audit trail)'
                    ]
                },
                {
                    title: 'PWA Not Installing',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Can't install the PWA on my device.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Ensure you\'re using a supported browser (Chrome, Edge, Safari)',
                        'On iOS, you MUST use Safari (not Chrome)',
                        'Check that you\'re on the field app URL, not the admin site',
                        'Clear browser cache and try again',
                        'On Android, ensure Chrome is up to date'
                    ]
                },
                {
                    title: 'Form Data Lost',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> I was filling a worksheet and my data disappeared.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check if you accidentally navigated away—use the back button',
                        'The form auto-saves every 30 seconds—look for "Saved" indicator',
                        'If offline, data may be in the queue waiting to sync',
                        'Check Sync Inspector for pending form submissions',
                        'If truly lost, contact support (may be recoverable from logs)'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'I went offline mid-visit, did I lose anything?',
                    content: `
                        <p class="text-gray-700">
                            No, you didn't lose anything. Everything you do queues locally and syncs when you're back online.
                            The app is designed for this exact scenario—work normally, then sync later.
                        </p>
                    `
                },
                {
                    title: 'Why won\'t the job let me complete?',
                    content: `
                        <p class="text-gray-700">
                            The review gate is blocking completion. Check that you've: (1) checked in, (2) completed risk assessment if required,
                            and (3) entered a work summary of at least 10 characters. You'll see specific errors if something's missing.
                        </p>
                    `
                },
                {
                    title: 'Where do my photos go?',
                    content: `
                        <p class="text-gray-700">
                            Photos are uploaded to the job's document folder and appear in the office admin view. If the job is linked to a certificate,
                            photos may also appear in the certificate PDF. Customers can view photos via the customer portal if enabled.
                        </p>
                    `
                },
                {
                    title: 'How do I switch between businesses?',
                    content: `
                        <p class="text-gray-700">
                            Go to Settings and tap the business name at the top of the screen. Select the business you want to switch to.
                            The app reloads with that business's jobs and data. You don't need to sign out.
                        </p>
                    `
                },
                {
                    title: 'Does checking out complete the job?',
                    content: `
                        <p class="text-gray-700">
                            No. Checking out records your departure GPS but does NOT complete the job. You must explicitly tap "Complete Job"
                            after entering the work summary. This is intentional—it gives you time to review before finalizing.
                        </p>
                    `
                },
                {
                    title: 'What\'s the difference between check-in and check-out?',
                    content: `
                        <p class="text-gray-700">
                            Check-in promotes the job status from "Scheduled" to "In Progress" and logs your arrival GPS.
                            Check-out records your departure GPS and logs your departure time, but does NOT change the job status.
                            To mark the job complete, use the "Complete Job" button after entering your work summary.
                        </p>
                    `
                },
                {
                    title: 'Can I edit a job after completing it?',
                    content: `
                        <p class="text-gray-700">
                            No, completed jobs are locked from editing in the field app. If you need to make changes, contact your office admin—they
                            have an admin override to edit completed jobs. This prevents accidental changes to finalized records.
                        </p>
                    `
                },
                {
                    title: 'How long does sync take?',
                    content: `
                        <p class="text-gray-700">
                            Small items (check-ins, form data, text) sync in seconds. Photos take longer depending on size and your connection speed—usually
                            5-30 seconds per photo. If you have 20 photos queued, expect 2-10 minutes. The app shows progress in the Sync Inspector.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Managing multi-visit jobs and scheduling from the office',
            href: '/docs/jobs'
        },
        {
            title: 'Planning Your Week with the Planner',
            description: 'How office bookings on the Planner reach the field app',
            href: '/docs/planner'
        },
        {
            title: 'Certificates',
            description: 'Creating and issuing compliance certificates',
            href: '/docs/certificates'
        },
        {
            title: 'Defects to Quotation',
            description: 'Converting field defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Asset Tracking',
            description: 'Capturing and managing site assets from the field',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Service Contracts',
            description: 'Site access notes and site log that reach engineers via contracts',
            href: '/docs/service-contracts'
        }
    ]
};
