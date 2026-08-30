import { IDocGuide } from '@/types';

export const offlineSyncGuide: IDocGuide = {
    title: 'Offline & Sync Deep Dive',
    description: 'Technical guide to Opscel\'s offline-first architecture, sync queue mechanisms, conflict resolution, and troubleshooting sync issues in the field PWA.',
    slug: 'offline-sync',
    lastUpdated: 'May 21, 2026',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>30-Second Version:</strong> Opscel\'s field PWA is offline-first — engineers can capture photos, fill forms, sign off jobs, and log defects without internet. All writes queue locally in IndexedDB and sync automatically when the browser detects you\'re back online. Concurrent edits to the same queued item merge into one write rather than one overwriting the other. This guide covers technical architecture, sync indicators, cache management, and troubleshooting for engineers and admins dealing with sync issues.',
                },
                {
                    title: 'Who Needs This Guide',
                    bullets: [
                        '<strong>Field Engineers:</strong> Understand what works offline and how to troubleshoot sync problems on-site',
                        '<strong>Office Managers:</strong> Diagnose sync issues reported by engineers, monitor sync health',
                        '<strong>Admins:</strong> Configure offline settings, manage cache quotas, understand sync architecture',
                    ],
                },
                {
                    title: 'Key Offline Benefits',
                    bullets: [
                        'No data loss: all work queues locally and syncs when online',
                        'Consistent UX: app works identically online and offline',
                        'Automatic retry: a failed sync retries immediately, up to 3 attempts total, no backoff delay',
                        'Merge, not overwrite: two edits queued for the same item are folded into one write, not resolved by discarding either side',
                        'Visual feedback: sync indicators show queue status',
                    ],
                },
            ],
        },
        {
            id: 'what-works-offline',
            title: 'What Works Offline',
            subsections: [
                {
                    title: 'Fully Offline-Capable Features',
                    content: 'These features work with zero connectivity. Data is saved locally and synced when online.',
                },
                {
                    bullets: [
                        '<strong>Job viewing:</strong> Open jobs, view customer info, site addresses, job notes (if previously loaded)',
                        '<strong>Photos:</strong> Capture photos with device camera, add captions, assign to categories (before/during/after/defect/completion)',
                        '<strong>Worksheets:</strong> Fill job sheets, complete checklists, input test results — all fields save locally',
                        '<strong>Signatures:</strong> Capture engineer signature, customer signature, approval signatures',
                        '<strong>Defects:</strong> Log defects with severity (C1/C2/C3/FI), add descriptions, attach photos',
                        '<strong>Parts logging:</strong> Record parts used (SKU, quantity, price), ex-VAT totals',
                        '<strong>Job status updates:</strong> Check in, mark in progress, check out (status changes queue)',
                        '<strong>Work summaries:</strong> Write job completion summaries, add internal notes',
                    ],
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> Before going to remote sites (rural areas, basements, underground car parks), open the job while online. This pre-loads job data into cache. You can then work fully offline without any limitations.',
                },
            ],
        },
        {
            id: 'what-queues-vs-fails',
            title: 'What Queues vs What Fails',
            subsections: [
                {
                    title: 'Understanding the Difference',
                    content: 'Not all actions can queue offline. Some require live server communication and will fail gracefully with error messages.',
                },
                {
                    title: 'Operations That Queue (Work Offline)',
                    bullets: [
                        '<strong>All writes:</strong> Photo uploads, form saves, signature captures, defect creation, parts logging',
                        '<strong>Job status changes:</strong> Check-in, check-out, mark complete',
                        '<strong>Work summaries:</strong> Completion notes, internal comments',
                    ],
                },
                {
                    title: 'Operations That Fail (Require Online)',
                    bullets: [
                        '<strong>Fetching fresh job list:</strong> Viewing "Today\'s Jobs" requires server fetch (uses cached data if offline)',
                        '<strong>Creating new jobs:</strong> Cannot create jobs from field app (admin function, requires server)',
                        '<strong>Real-time notifications:</strong> Telegram/Slack notifications don\'t send until online',
                        '<strong>Syncing up to office:</strong> Office staff won\'t see your updates until you sync',
                        '<strong>Viewing other engineers\' updates:</strong> No real-time collaboration offline',
                    ],
                },
                {
                    title: 'Graceful Degradation',
                    content: 'When offline, the PWA shows a <strong>CloudOff</strong> icon (top-right corner). Operations that require connectivity display an "Offline - will sync when online" message instead of failing silently. You can continue working — data queues and syncs automatically when back online.',
                },
            ],
        },
        {
            id: 'sync-inspector',
            title: 'Sync Inspector',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Location:</strong> Field App → Settings → Sync Inspector<br><strong>Roles:</strong> All field users',
                },
                {
                    title: 'What the Sync Inspector Shows',
                    content: 'The Sync Inspector is a diagnostic tool showing your local sync queue: pending operations, sync status, and manual retry controls.',
                },
                {
                    title: 'Steps to Access Sync Inspector',
                    steps: [
                        'Open field PWA',
                        'Tap <strong>Menu</strong> (hamburger icon)',
                        'Tap <strong>Settings</strong>',
                        'Scroll to <strong>Sync Inspector</strong>',
                        'View queued operations list',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Table showing: operation type (photo_upload, form_save, job_status_change), timestamp (when queued), status (pending/syncing/failed), retry count (0-3), file size (for photos). If queue is empty, you see "No pending operations — all synced!"',
                },
                {
                    title: 'Queue Actions',
                    bullets: [
                        '<strong>Retry All:</strong> Forces an immediate sync attempt for all pending operations',
                        '<strong>Clear Queue:</strong> Deletes all pending operations (WARNING: irreversible data loss — only use if instructed by support)',
                        '<strong>View Logs:</strong> Shows sync attempt history with timestamps and error messages',
                    ],
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> Check Sync Inspector before leaving a job site. If queue shows pending uploads, wait for sync to complete or note it for follow-up when back online. Don\'t clear queue unless photos/data are already visible in the office system.',
                },
            ],
        },
        {
            id: 'conflict-resolution',
            title: 'Conflict Resolution',
            subsections: [
                {
                    content: '<div class="my-8"><img src="/images/docs/offline-sync/sync-queue-flow.svg" alt="Flow diagram: an offline action is added to the local sync queue, a second edit to the same record merges into it as a superset, then an online or visibilitychange event drains the queue to the server, retrying a failed item up to 3 times with no backoff." class="w-full rounded-lg border border-border shadow-lg" /></div>',
                },
                {
                    title: 'How This Comes Up',
                    content: 'It comes up when the same job is edited more than once while still queued locally — the same engineer editing a job sheet across two field pages before either sync fires, or briefly on two devices. Opscel does not pick a winner and discard the loser: it <strong>merges</strong> the queued edits into a single write.',
                },
                {
                    title: 'Merge, Not Last-Write-Wins',
                    content: 'Different field pages send different <em>partial</em> payloads for the same job — a risk-assessment page sends just the risk assessment fields, a parts page sends just parts used, a completion page sends the status. When a second edit queues before the first has synced, Opscel folds the queued items together (oldest to newest, the newest edit\'s fields taking precedence field-by-field) into one write, rather than treating the later item as a full replacement of the job\'s state. That is what keeps an earlier queued edit from being silently dropped just because a later one queued behind it.',
                },
                {
                    title: 'What This Means in Practice',
                    bullets: [
                        '<strong>Different fields, same job:</strong> if one queued edit sets the risk assessment and a later one (queued before the first synced) sets parts used, both land — neither is a "full state" that erases the other',
                        '<strong>Same field, edited twice offline:</strong> the later queued edit\'s value wins for that specific field, but it never erases a different field set by the earlier edit',
                        '<strong>Photos, defects, parts:</strong> these are always additive records, not merged field values — every photo and every defect logged offline is kept',
                    ],
                },
                {
                    title: 'For Managers',
                    content: '<em>Tip:</em> On multi-engineer jobs it\'s still good practice to assign sections (Engineer A completes first floor, Engineer B the second) so each engineer\'s edits land in different fields where possible. But the underlying mechanism protects you even when that doesn\'t happen — a second engineer\'s edit merges in rather than silently overwriting the first.',
                },
            ],
        },
        {
            id: 'cache-management',
            title: 'Cache Management',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Location:</strong> Field App → Settings → Storage<br><strong>Roles:</strong> All field users',
                },
                {
                    title: 'How Caching Works',
                    content: 'Opscel uses a <strong>service worker</strong> to cache job pages, API responses, and app assets locally. Rather than a total megabyte budget, each cache has a fixed <strong>entry-count cap</strong>: once a cache is full, the oldest entries are trimmed to make room for new ones (FIFO — entries are never evicted by age, only by being the oldest once the cap is hit). The separate IndexedDB store that holds queued photos and worksheet data has <strong>no size cap and no time-to-live</strong> — stale data is treated as better than no data offline — and only evicts (oldest 25% of entries) if the browser actually raises a storage-quota error.',
                },
                {
                    title: 'What Gets Cached',
                    bullets: [
                        '<strong>Job data & API responses:</strong> Customer info, site addresses, job notes, worksheets (text only, no photos) — capped at a fixed number of entries per cache, oldest trimmed first',
                        '<strong>App assets:</strong> HTML, CSS, JavaScript bundles (PWA shell), also capped by entry count',
                        '<strong>Photos & worksheet data (queued):</strong> Stored in IndexedDB, not the service worker cache — never evicted until synced, unless the browser reports the device is genuinely out of storage',
                        '<strong>Recent job list:</strong> Last-fetched "Today\'s Jobs" list (refreshes on next online fetch)',
                    ],
                },
                {
                    title: 'Steps to Clear Cache',
                    steps: [
                        'Open field PWA',
                        'Go to <strong>Settings → Storage</strong>',
                        'View cache stats',
                        'Tap <strong>Clear Cache</strong>',
                        'Confirm warning: "This will delete cached jobs. Pending uploads will NOT be deleted."',
                        'Cache clears, app shell remains',
                        'Next job fetch re-populates cache',
                    ],
                },
                {
                    title: 'When to Clear Cache',
                    bullets: [
                        '<strong>Storage quota exceeded:</strong> Device shows "Storage full" error',
                        '<strong>Stale data:</strong> Cached jobs show outdated info (office updated job but cache not refreshed)',
                        '<strong>App misbehavior:</strong> Blank screens, infinite loading (cache corruption)',
                    ],
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> Clearing cache does NOT delete pending uploads (photos, forms). Your queued work is safe in IndexedDB. Only cached read-only data (job details) is cleared. You\'ll need to be online to re-fetch job data after clearing cache.',
                },
            ],
        },
        {
            id: 'network-detection',
            title: 'Network Detection',
            subsections: [
                {
                    title: 'How Opscel Detects Offline Status',
                    content: 'The PWA uses <strong>navigator.onLine</strong> API + server ping to detect connectivity. When offline detected, UI switches to offline mode with CloudOff icon.',
                },
                {
                    title: 'Sync Triggers',
                    bullets: [
                        '<strong>On reconnect:</strong> When the browser fires the <code>online</code> event, the PWA auto-syncs the queue immediately',
                        '<strong>Manual sync:</strong> Tap "Sync Now" button (Settings → Sync Inspector)',
                        '<strong>On app resume / tab visible:</strong> A <code>visibilitychange</code> event (switching back to the PWA, unlocking the screen) also triggers an auto-sync attempt — there is no fixed-interval background timer',
                    ],
                },
                {
                    title: 'CloudOff Icon',
                    content: 'Orange cloud icon with slash appears in top-right when offline. Icon disappears when online. Tap icon to see connection status and last sync time.',
                },
                {
                    title: 'Manual Sync Button',
                    content: 'Available in Settings → Sync Inspector. Forces immediate sync attempt even if auto-sync disabled. Useful for poor connectivity (app thinks it\'s online but requests fail).',
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> If CloudOff icon persists despite being connected to WiFi, check: (1) WiFi requires login (captive portal), (2) Firewall blocking Opscel domain, (3) Airplane mode still on. Try manual sync button to diagnose.',
                },
            ],
        },
        {
            id: 'sync-indicators',
            title: 'Sync Indicators',
            subsections: [
                {
                    title: 'Visual Indicators Explained',
                    content: 'Opscel uses icons and chips to communicate sync status throughout the UI.',
                },
                {
                    table: {
                        headers: ['Indicator', 'Meaning', 'Where It Appears', 'What to Do'],
                        rows: [
                            [
                                '<strong>CloudOff</strong> (orange cloud with slash)',
                                'Device is offline',
                                'Top-right corner of app',
                                'Continue working — data queues locally'
                            ],
                            [
                                '<strong>SyncChip</strong> (spinning blue circle)',
                                'Sync in progress',
                                'Bottom-right, appears during upload',
                                'Wait for completion — don\'t close app'
                            ],
                            [
                                '<strong>AutoSaveChip</strong> (green checkmark)',
                                'Data saved locally',
                                'Form fields, after each edit',
                                'No action needed — data is safe'
                            ],
                            [
                                '<strong>ErrorChip</strong> (red X)',
                                'Sync failed, will retry',
                                'Sync Inspector, failed operations',
                                'Check error message, retry manually if needed'
                            ],
                            [
                                '<strong>QueueCount</strong> (badge with number)',
                                'Pending operations in queue',
                                'Settings menu icon',
                                'Tap to open Sync Inspector'
                            ],
                        ],
                    },
                },
                {
                    title: 'For Engineers',
                    content: '<em>Tip:</em> If SyncChip spins for more than 5 minutes, something is wrong. Open Sync Inspector to see error message. Common causes: server down, auth token expired, file too large.',
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Sync Stuck - SyncChip Spins Forever',
                    content: '<strong>Cause:</strong> Server timeout, photo file too large, or network dropping packets.<br><strong>Fix:</strong> Open Sync Inspector → Retry All. If still fails, check error log for specific operation. Large photos (>10 MB): compress before uploading. If error says "401 Unauthorized", sign out and sign back in (token expired).',
                },
                {
                    title: 'Photos Disappeared from Gallery',
                    content: '<strong>Cause:</strong> Photos pending upload, not yet synced to server.<br><strong>Fix:</strong> Open Sync Inspector → check for photo_upload operations in queue. If present, photos are safe locally. Connect to WiFi and sync. If queue is empty and photos still missing, they may have failed upload — check Sync Logs for error.',
                },
                {
                    title: 'Conflicting Data - Office Sees Different Summary Than I Wrote',
                    content: '<strong>Cause:</strong> Another engineer (or you on another device) queued a separate edit to the same job before both synced. Queued edits to the same job merge field-by-field rather than one replacing the other outright — but if you both wrote to the <em>same</em> field (e.g. the same work summary text), the later queued edit\'s value wins for that field.<br><strong>Fix:</strong> Check the job activity log (office system) to see the sync order. Agree on workflow with the team: designate one engineer to write the final summary, or use separate internal notes instead of both editing the shared work summary field.',
                },
                {
                    title: 'Storage Quota Exceeded Error',
                    content: '<strong>Cause:</strong> The device\'s actual storage is running low (Opscel checks the browser\'s real storage estimate, not a fixed app-imposed limit) — you\'ll also be blocked from queuing a new photo once 50 photos are already pending upload, regardless of storage.<br><strong>Fix:</strong> Sync all pending uploads to free up IndexedDB space. Clear cache (Settings → Storage → Clear Cache). If still full, device storage is genuinely low — delete apps/photos from device.',
                },
                {
                    title: 'CloudOff Icon Stuck Despite Being Online',
                    content: '<strong>Cause:</strong> Captive portal (WiFi login required), firewall blocking Opscel, or DNS issue.<br><strong>Fix:</strong> Open browser and visit opscel.com — if redirect to login page, complete WiFi login. Try switching from WiFi to mobile data. If mobile data works, WiFi is blocking Opscel domain.',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Will I lose data if I work offline for a whole day?',
                    content: 'No. Opscel queues everything locally (photos, forms, signatures) with no time limit — queued data is never evicted just for being old, only if the device\'s real storage genuinely runs out. You can work offline for days. Data syncs when you next connect.',
                },
                {
                    title: 'How long can I work offline before hitting storage limits?',
                    content: 'Photos are capped at 50 pending uploads in the queue at once — beyond that you\'ll need to sync before queuing more. Otherwise the limit is your device\'s actual free storage, which Opscel checks before accepting each new photo. If you\'re a heavy photo user, sync periodically (e.g., lunch break, end of day) to free up storage.',
                },
                {
                    title: 'What if two engineers edit the same job offline?',
                    content: 'Queued edits to the same job merge rather than one overwriting the other outright — different fields from different edits are folded into a single write. If two edits genuinely touch the exact same field, the later one wins for that field only. Coordination (assigning sections or tasks) still helps avoid that overlap.',
                },
                {
                    title: 'How many times will Opscel retry a failed sync?',
                    content: 'Automatic retry: up to 3 attempts. After 3 failures, the operation stays in the queue with an ErrorChip and you retry manually (Sync Inspector → Retry All) or investigate the error. Coming back online or bringing the tab back into view also triggers a fresh sync attempt.',
                },
                {
                    title: 'Is there a storage limit I can increase?',
                    content: 'There\'s no fixed app-imposed megabyte limit to raise. Cached read-only data (job pages, API responses) is capped by entry count and trims its oldest entries automatically; queued photos and forms in IndexedDB are limited only by your device\'s actual free storage (plus the 50-photo queue cap). If you regularly hit limits, sync more frequently (end of each job) instead of batching uploads.',
                },
                {
                    title: 'Do I need to keep the PWA open while syncing?',
                    content: 'No. Opscel uses Background Sync API (where supported) — sync continues even if you switch apps or lock screen. On iOS (where Background Sync is limited), keep app open during sync for best results.',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    content: 'If you\'re experiencing persistent sync issues or need technical assistance, our support team can diagnose queue errors and server logs. Email <a href="mailto:support@opscel.com" class="text-secondary hover:underline">support@opscel.com</a> with: device type, OS version, screenshot of Sync Inspector, and error messages.',
                },
                {
                    title: 'Related Guides',
                    bullets: [
                        '<a href="/docs/field-service" class="text-secondary hover:underline">Field Service App — Engineer\'s Day</a> — Learn day-to-day field app usage',
                        '<a href="/docs/jobs" class="text-secondary hover:underline">Jobs & Multi-Visit Workflow</a> — Understand job statuses and workflows',
                        '<a href="/docs/worksheets" class="text-secondary hover:underline">Worksheet Authoring & Filling</a> — How worksheets save offline',
                    ],
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Full engineer workflow that uses offline sync',
            href: '/docs/field-service'
        },
        {
            title: 'Jobs',
            description: 'Job data synced between field and office',
            href: '/docs/jobs'
        },
        {
            title: 'Worksheets',
            description: 'Worksheets saved offline and synced on reconnect',
            href: '/docs/worksheets'
        },
        {
            title: 'Asset Tracking',
            description: 'Assets captured offline in the field',
            href: '/docs/asset-tracking'
        }
    ]
};
