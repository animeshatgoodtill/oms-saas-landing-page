import { IDocGuide } from '@/types';

export const calendarIntegrationGuide: IDocGuide = {
    slug: 'calendar-integration',
    title: 'Calendar Integration',
    description: 'Two-way sync between OpsCel and external calendars. Connect Google Calendar, Microsoft 365, or ICS feeds for automatic availability blocking and engineer calendar sync.',
    lastUpdated: '2026-05-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> All users (per-user connection)<br><strong>What:</strong> Two-way calendar sync between OpsCel and Google/Microsoft/ICS<br><strong>Where:</strong> Settings → Calendar Integration<br><strong>Why:</strong> Prevent double-booking, auto-block engineer availability, mobile calendar integration</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Automatic availability blocking:</strong> Busy times in external calendar prevent OpsCel job scheduling',
                        '<strong>Engineer calendar sync:</strong> Scheduled jobs appear in engineer&apos;s personal calendar',
                        '<strong>Prevent double-booking:</strong> Scheduling respects external commitments',
                        '<strong>Mobile calendar integration:</strong> View OpsCel jobs alongside personal appointments',
                        '<strong>Two-way sync:</strong> Changes in OpsCel reflect in calendar, calendar blocks reflect in OpsCel',
                        '<strong>15-minute refresh:</strong> Changes sync every 15 minutes automatically'
                    ]
                },
                {
                    title: 'Supported Platforms',
                    content: '<p>OpsCel integrates with three calendar platforms:</p>',
                    bullets: [
                        '<strong>Google Calendar:</strong> OAuth 2.0, per-user, read/write access',
                        '<strong>Microsoft 365:</strong> OAuth 2.0, per-user, read/write access',
                        '<strong>ICS feeds:</strong> URL-based, read-only, no OAuth required'
                    ]
                }
            ]
        },
        {
            id: 'supported-platforms',
            title: 'Supported Platforms',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> All tiers | <strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'Platform Comparison',
                    content: '',
                    table: {
                        headers: ['Platform', 'Sync Direction', 'Auth Method', 'Best For'],
                        rows: [
                            ['Google Calendar', 'Two-way (read/write)', 'OAuth 2.0', 'Gmail users, Android devices, Google Workspace'],
                            ['Microsoft 365', 'Two-way (read/write)', 'OAuth 2.0', 'Outlook users, Microsoft 365 businesses'],
                            ['ICS Feed', 'One-way (read-only)', 'URL (no auth)', 'Apple Calendar, external calendars, read-only blocking']
                        ]
                    }
                },
                {
                    title: 'Google Calendar',
                    content: '<p><strong>OAuth connection, per-user basis.</strong> When you connect Google Calendar, OpsCel can read your availability and write scheduled jobs to your calendar. Jobs appear as calendar events with customer name and site address.</p><p><strong>Permissions required:</strong> <code>https://www.googleapis.com/auth/calendar</code> (read/write calendar events)</p>'
                },
                {
                    title: 'Microsoft 365',
                    content: '<p><strong>OAuth connection via Microsoft Identity Platform.</strong> Connect your work or personal Microsoft account to sync OpsCel jobs with Outlook Calendar. Supports both Outlook.com and Microsoft 365 business accounts.</p><p><strong>Permissions required:</strong> <code>Calendars.ReadWrite</code> (read/write calendar events)</p>'
                },
                {
                    title: 'ICS Feed',
                    content: '<p><strong>Read-only availability blocking via ICS URL.</strong> If your calendar provider supports ICS export (Apple Calendar, iCloud, most calendar apps), you can provide the ICS URL to OpsCel. Busy times in your calendar will block job scheduling, but OpsCel jobs do NOT appear in your external calendar (one-way sync).</p><p><strong>No authentication required.</strong> Just paste the ICS URL. OpsCel refreshes the feed every 15 minutes.</p>'
                }
            ]
        },
        {
            id: 'google-calendar',
            title: 'Connecting Google Calendar',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'OAuth Flow Explained',
                    content: '<p>When you connect Google Calendar, OpsCel redirects you to Google&apos;s consent screen. You&apos;ll see:</p>',
                    bullets: [
                        '<strong>App name:</strong> "OpsCel" requesting access',
                        '<strong>Permissions:</strong> "See, edit, share, and permanently delete all calendars you can access using Google Calendar"',
                        '<strong>Why this permission:</strong> OpsCel needs read access (check availability) and write access (create job events)',
                        '<strong>Account selection:</strong> Choose which Google account to connect (work or personal)'
                    ]
                },
                {
                    title: 'Permissions Required',
                    content: '<p>OpsCel uses <code>calendar</code> scope to:</p>',
                    bullets: [
                        '<strong>Read calendar events:</strong> OpsCel checks your busy times to prevent double-booking',
                        '<strong>Write job events:</strong> Scheduled OpsCel jobs create calendar events',
                        '<strong>Update job events:</strong> If job time changes, calendar event updates automatically',
                        '<strong>Delete job events:</strong> If job is cancelled, calendar event is removed'
                    ],
                    content_after_bullets: '<p><strong>Privacy note:</strong> OpsCel only reads event start/end times and busy/free status. Event titles, descriptions, and attendees are NOT accessed.</p>'
                },
                {
                    title: 'Calendar Selection',
                    content: '<p>After OAuth consent, you&apos;ll select which calendar to sync:</p>',
                    bullets: [
                        '<strong>Primary calendar:</strong> Your main Google Calendar (recommended)',
                        '<strong>Secondary calendars:</strong> Any calendar you own or have write access to',
                        '<strong>Shared calendars:</strong> If you have edit permissions, you can select shared calendars'
                    ]
                },
                {
                    title: 'Steps to Connect Google Calendar',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Calendar Integration</strong>',
                        'Click <strong>Connect Google Calendar</strong> button',
                        'You&apos;ll be redirected to Google login page (if not already logged in)',
                        'Select Google account to connect (work or personal)',
                        'Review permissions on Google consent screen',
                        'Click <strong>Allow</strong> to grant OpsCel calendar access',
                        'Redirected back to OpsCel settings page',
                        'Select which calendar to sync from dropdown (usually "Primary")',
                        'Click <strong>Save</strong>',
                        'Connection status shows "Connected" with green checkmark'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After successful connection:</p>',
                    bullets: [
                        '<strong>Connection status:</strong> "Google Calendar: Connected" with account email',
                        '<strong>Selected calendar:</strong> Name of calendar being synced (e.g., "john@example.com - Primary")',
                        '<strong>Last sync time:</strong> Timestamp of most recent sync',
                        '<strong>First sync:</strong> Existing OpsCel jobs (scheduled in next 30 days) appear in Google Calendar within 5 minutes',
                        '<strong>Calendar events:</strong> Format is "[OpsCel] Customer Name - Site Address"'
                    ]
                }
            ]
        },
        {
            id: 'microsoft-365',
            title: 'Connecting Microsoft 365',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'OAuth Flow via Microsoft Identity Platform',
                    content: '<p>OpsCel uses Microsoft Identity Platform for authentication. You&apos;ll be redirected to Microsoft&apos;s login page:</p>',
                    bullets: [
                        '<strong>App name:</strong> "OpsCel" requesting permissions',
                        '<strong>Permissions:</strong> "Read and write your calendars"',
                        '<strong>Account type:</strong> Work/school account (Microsoft 365) or Personal account (Outlook.com)',
                        '<strong>Admin consent:</strong> If using work account, your IT admin may need to approve app (one-time per organization)'
                    ]
                },
                {
                    title: 'Permissions Required',
                    content: '<p>OpsCel requests <code>Calendars.ReadWrite</code> permission to:</p>',
                    bullets: [
                        '<strong>Read calendar events:</strong> Check availability for scheduling',
                        '<strong>Write job events:</strong> Create Outlook events for scheduled OpsCel jobs',
                        '<strong>Update events:</strong> Sync time changes automatically',
                        '<strong>Delete events:</strong> Remove events when jobs are cancelled'
                    ]
                },
                {
                    title: 'Calendar Selection',
                    content: '<p>After authentication, choose which calendar to sync:</p>',
                    bullets: [
                        '<strong>Work calendar:</strong> Your primary Outlook calendar (recommended for work accounts)',
                        '<strong>Personal calendar:</strong> If using personal Microsoft account',
                        '<strong>Shared calendars:</strong> If you have edit access to shared calendars'
                    ]
                },
                {
                    title: 'Steps to Connect Microsoft 365',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Calendar Integration</strong>',
                        'Click <strong>Connect Microsoft 365</strong> button',
                        'Redirected to Microsoft login page',
                        'Enter Microsoft email address (work or personal)',
                        'Enter password (or use Windows Hello, Authenticator app)',
                        'Review permissions request on consent screen',
                        'Click <strong>Accept</strong> to grant permissions',
                        'If work account and admin consent required, you&apos;ll see "Your IT admin needs to approve this app" (contact your IT department)',
                        'Redirected back to OpsCel settings page',
                        'Select calendar to sync from dropdown',
                        'Click <strong>Save</strong>',
                        'Connection status shows "Connected" with account email'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After successful connection:</p>',
                    bullets: [
                        '<strong>Connection status:</strong> "Microsoft 365: Connected" with account email',
                        '<strong>Selected calendar:</strong> Calendar name (e.g., "Calendar" for primary)',
                        '<strong>Last sync time:</strong> Timestamp of most recent sync',
                        '<strong>Outlook events:</strong> OpsCel jobs appear as "[OpsCel] Customer Name - Site Address"',
                        '<strong>Busy status:</strong> Events marked as "Busy" to block availability'
                    ]
                },
                {
                    title: 'Admin Consent Note',
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6"><p class="text-sm text-amber-900"><strong>Enterprise Users:</strong> If you see "Admin consent required", your organization requires IT approval before apps can access calendars. Contact your IT department and provide them with the app name "OpsCel" and permission "<code>Calendars.ReadWrite</code>". They can grant tenant-wide consent in Azure AD.</p></div>'
                }
            ]
        },
        {
            id: 'ics-feed',
            title: 'ICS Feed Setup',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'When to Use ICS',
                    content: '<p>ICS feeds are best for:</p>',
                    bullets: [
                        '<strong>Read-only availability blocking:</strong> You want OpsCel to respect your calendar busy times, but don&apos;t need OpsCel jobs to appear in your external calendar',
                        '<strong>No OAuth required:</strong> Your calendar provider doesn&apos;t support OAuth, or you prefer not to grant full access',
                        '<strong>Apple Calendar / iCloud:</strong> ICS is the easiest integration method for Apple users',
                        '<strong>External calendars:</strong> Syncing calendars from other systems that export ICS'
                    ]
                },
                {
                    title: 'Getting ICS URL from Calendar Provider',
                    content: '<p><strong>Apple Calendar / iCloud:</strong></p>',
                    steps: [
                        'Open iCloud Calendar in web browser',
                        'Click calendar name, then click share icon',
                        'Enable "Public Calendar"',
                        'Copy the "webcal://" URL',
                        'Change "webcal://" to "https://" (OpsCel requires HTTPS)',
                        'Paste into OpsCel ICS URL field'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Google Calendar (ICS alternative):</strong></p>',
                    steps: [
                        'Open Google Calendar settings',
                        'Select calendar from list',
                        'Scroll to "Integrate calendar" section',
                        'Copy "Secret address in iCal format" URL',
                        'Paste into OpsCel ICS URL field'
                    ]
                },
                {
                    title: 'Refresh Interval',
                    content: '<p>ICS feeds are polled every <strong>15 minutes</strong>. This means:</p>',
                    bullets: [
                        'Changes in your external calendar take up to 15 minutes to reflect in OpsCel availability',
                        'If you add a busy event now, OpsCel won&apos;t block that time slot until next refresh',
                        'For real-time sync, use OAuth (Google Calendar or Microsoft 365) instead'
                    ]
                },
                {
                    title: 'Steps to Add ICS Feed',
                    content: '',
                    steps: [
                        'Get your ICS URL from calendar provider (see above)',
                        'Navigate to <strong>Settings → Calendar Integration</strong>',
                        'Click <strong>Add ICS Feed</strong> button',
                        'Paste ICS URL into field (must start with "https://" or "webcal://")',
                        'Click <strong>Validate</strong> to test the feed',
                        'If valid, click <strong>Save</strong>',
                        'Connection status shows "ICS Feed: Connected" with URL domain'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After adding ICS feed:</p>',
                    bullets: [
                        '<strong>Connection status:</strong> "ICS Feed: Connected"',
                        '<strong>Last refresh time:</strong> Timestamp of most recent poll',
                        '<strong>Event count:</strong> Number of busy events imported from feed',
                        '<strong>Availability blocking:</strong> Scheduling interface respects busy times from ICS',
                        '<strong>One-way only:</strong> OpsCel jobs do NOT appear in your external calendar (ICS is read-only)'
                    ]
                }
            ]
        },
        {
            id: 'two-way-sync',
            title: 'Two-Way Sync Explained',
            subsections: [
                {
                    title: 'What Syncs from OpsCel → Calendar',
                    content: '<p>When you schedule a job in OpsCel, the following data creates a calendar event:</p>',
                    bullets: [
                        '<strong>Event title:</strong> "[OpsCel] Customer Name - Site Address"',
                        '<strong>Start time:</strong> Visit scheduled start time',
                        '<strong>End time:</strong> Visit scheduled end time (or start time + estimated duration)',
                        '<strong>Location:</strong> Site address (full postal address)',
                        '<strong>Description:</strong> Job number, job type, engineer assigned, job description',
                        '<strong>Status:</strong> Marked as "Busy" to block availability'
                    ]
                },
                {
                    title: 'What Syncs from Calendar → OpsCel',
                    content: '<p>OpsCel reads your calendar to block scheduling during busy times:</p>',
                    bullets: [
                        '<strong>Busy times only:</strong> OpsCel reads when you&apos;re busy, not event details',
                        '<strong>Availability blocking:</strong> Busy times prevent admins from scheduling jobs during those slots',
                        '<strong>No event titles:</strong> OpsCel does NOT read event names, descriptions, or attendees (privacy preserved)',
                        '<strong>Free vs Busy:</strong> Only events marked "Busy" block scheduling. "Free" events don&apos;t block.'
                    ]
                },
                {
                    title: 'Sync Frequency',
                    content: '<p>Calendar sync runs <strong>every 15 minutes</strong> in both directions:</p>',
                    bullets: [
                        '<strong>OpsCel → Calendar:</strong> New/updated jobs sync to calendar within 15 minutes',
                        '<strong>Calendar → OpsCel:</strong> New busy times appear in OpsCel availability within 15 minutes',
                        '<strong>Manual sync:</strong> Click "Sync Now" button in Settings → Calendar Integration to force immediate sync',
                        '<strong>Real-time updates:</strong> Critical changes (job cancellation, time change) sync immediately via webhook (no 15-minute delay)'
                    ]
                },
                {
                    title: 'Event Format',
                    content: '<p>OpsCel jobs appear in your calendar as:</p><code>[OpsCel] Smith Electrical - 123 High Street, London</code><p>This format ensures OpsCel events are easily identifiable in your calendar and don&apos;t conflict with personal appointments.</p>'
                },
                {
                    title: 'Conflict Handling',
                    content: '<p><strong>What happens if admin schedules a job during engineer&apos;s busy time?</strong></p>',
                    bullets: [
                        '<strong>Warning shown:</strong> Scheduling interface shows "Engineer has conflict" warning with conflicting event time',
                        '<strong>Manual override:</strong> Admin can force schedule (job takes precedence)',
                        '<strong>Engineer notification:</strong> Engineer receives notification about scheduling conflict',
                        '<strong>Both events persist:</strong> Both OpsCel job and external calendar event remain (engineer must resolve conflict manually)'
                    ]
                }
            ]
        },
        {
            id: 'availability-blocking',
            title: 'Availability Blocking',
            subsections: [
                {
                    title: 'How It Works',
                    content: '<p>When you connect a calendar, OpsCel reads your busy times and blocks those slots from being scheduled:</p>',
                    bullets: [
                        '<strong>Scheduling interface:</strong> Unavailable time slots appear grayed out with "Busy" indicator',
                        '<strong>Auto-assign:</strong> Auto-assign rules skip engineers with calendar conflicts',
                        '<strong>Drag-and-drop scheduling:</strong> Can&apos;t drag job to blocked time slot',
                        '<strong>Manual override:</strong> Admins with "Force Schedule" permission can override blocks'
                    ]
                },
                {
                    title: 'Scheduling Rules Respect Calendar Availability',
                    content: '<p>OpsCel&apos;s scheduling engine checks calendar availability before assigning:</p>',
                    bullets: [
                        '<strong>Auto-assign:</strong> Only considers engineers with no calendar conflicts',
                        '<strong>Service contracts:</strong> Recurring jobs avoid scheduling during known busy times',
                        '<strong>Team view:</strong> Calendar shows which engineers are available vs busy',
                        '<strong>Workload balancing:</strong> Distribution accounts for calendar availability'
                    ]
                },
                {
                    title: 'Manual Override',
                    content: '<p>Admins can force schedule during blocked times:</p>',
                    steps: [
                        'Attempt to schedule job during busy time',
                        'Warning appears: "Engineer has calendar conflict at this time"',
                        'Click <strong>Force Schedule</strong> button',
                        'Confirm override in modal dialog',
                        'Job schedules despite conflict',
                        'Engineer receives notification about conflict'
                    ]
                },
                {
                    title: 'Examples',
                    content: '<p><strong>Example 1:</strong> John has dentist appointment 2-3pm on Tuesday. Admin tries to schedule job for John at 2:30pm Tuesday. Scheduling interface shows "Busy" indicator and suggests alternative times.</p><p><strong>Example 2:</strong> Sarah blocks out 9-5pm Friday for annual leave in Google Calendar. OpsCel auto-assign skips Sarah for Friday jobs. Admins see "On Leave" indicator next to Sarah&apos;s name.</p>'
                },
                {
                    title: 'Steps to Test Availability Blocking',
                    content: '',
                    steps: [
                        'Connect your calendar (Google, Microsoft, or ICS)',
                        'Add a busy event in your external calendar (e.g., "Dentist" tomorrow 2-3pm)',
                        'Wait 15 minutes for sync (or click "Sync Now" in OpsCel)',
                        'Navigate to OpsCel scheduling interface (Jobs → Schedule Visit)',
                        'Try to schedule yourself for tomorrow 2-3pm',
                        'You should see "Busy" indicator and gray-out time slot',
                        'Alternative times should be suggested'
                    ]
                }
            ]
        },
        {
            id: 'token-refresh',
            title: 'Token Refresh (OAuth)',
            subsections: [
                {
                    title: 'OAuth Tokens Expire',
                    content: '<p>Google and Microsoft OAuth tokens expire after <strong>60 days</strong> (Google) or <strong>90 days</strong> (Microsoft) of inactivity. When a token expires, OpsCel can no longer sync your calendar.</p>'
                },
                {
                    title: 'Automatic Refresh Process',
                    content: '<p>OpsCel automatically refreshes OAuth tokens before expiry:</p>',
                    bullets: [
                        '<strong>Refresh at 50% lifetime:</strong> Google tokens refresh at ~30 days, Microsoft at ~45 days',
                        '<strong>Silent refresh:</strong> No action required from you',
                        '<strong>Refresh token valid for 6 months:</strong> As long as you use OpsCel regularly, tokens stay fresh',
                        '<strong>Background process:</strong> Refresh happens during nightly maintenance (02:00 UTC)'
                    ]
                },
                {
                    title: 'When Refresh Fails',
                    content: '<p>Token refresh can fail if:</p>',
                    bullets: [
                        '<strong>Account password changed:</strong> Google/Microsoft revokes tokens when you change password',
                        '<strong>Permissions revoked:</strong> You manually removed OpsCel from connected apps',
                        '<strong>Organization policy change:</strong> IT admin revoked app access',
                        '<strong>Long inactivity:</strong> Haven&apos;t used OpsCel or synced calendar in 6+ months'
                    ],
                    content_after_bullets: '<p>When refresh fails, you receive:</p>',
                    bullets_after: [
                        '<strong>Email notification:</strong> "OpsCel calendar sync stopped - reconnect required"',
                        '<strong>In-app banner:</strong> Red banner at top of OpsCel: "Calendar connection expired"',
                        '<strong>Settings indicator:</strong> Calendar integration status shows "Disconnected - Reconnect Required"'
                    ]
                },
                {
                    title: 'Steps to Reconnect Expired Calendar',
                    content: '',
                    steps: [
                        'Click "Reconnect" button in email notification or in-app banner',
                        'Or navigate to <strong>Settings → Calendar Integration</strong>',
                        'Click <strong>Reconnect [Platform]</strong> button',
                        'Complete OAuth flow again (same as initial connection)',
                        'Connection status returns to "Connected"',
                        'Sync resumes within 5 minutes'
                    ]
                }
            ]
        },
        {
            id: 'disconnecting',
            title: 'Disconnecting Calendars',
            subsections: [
                {
                    title: 'When to Disconnect',
                    content: '<p>Disconnect calendar integration when:</p>',
                    bullets: [
                        '<strong>Changing calendar provider:</strong> Switching from Google to Microsoft',
                        '<strong>Troubleshooting:</strong> Disconnect and reconnect to fix sync issues',
                        '<strong>Leaving company:</strong> Remove OpsCel access from personal calendar',
                        '<strong>Privacy concern:</strong> Stop syncing availability to OpsCel'
                    ]
                },
                {
                    title: 'What Happens to Existing Events',
                    content: '<p><strong>OpsCel side:</strong> Job data remains unchanged. Jobs stay scheduled. Calendar integration simply stops syncing.</p><p><strong>Calendar side:</strong> Existing OpsCel events remain in your external calendar. They do NOT automatically delete when you disconnect. You can manually delete them if desired.</p>'
                },
                {
                    title: 'Steps to Disconnect Calendar',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Calendar Integration</strong>',
                        'Find connected calendar (Google, Microsoft, or ICS)',
                        'Click <strong>Disconnect</strong> button',
                        'Confirm disconnection in modal dialog',
                        'Connection status changes to "Not Connected"',
                        'Sync stops immediately (no more calendar updates)'
                    ]
                },
                {
                    title: 'Revoke OAuth Access on Provider Side',
                    content: '<p>For complete removal, also revoke OpsCel access from your Google/Microsoft account:</p><p><strong>Google:</strong></p>',
                    steps: [
                        'Visit <a href="https://myaccount.google.com/permissions" target="_blank" class="text-blue-600 hover:text-blue-800">myaccount.google.com/permissions</a>',
                        'Find "OpsCel" in the list',
                        'Click <strong>Remove Access</strong>',
                        'Confirm removal'
                    ]
                },
                {
                    title: '',
                    content: '<p><strong>Microsoft:</strong></p>',
                    steps: [
                        'Visit <a href="https://account.microsoft.com/privacy/app-access" target="_blank" class="text-blue-600 hover:text-blue-800">account.microsoft.com/privacy/app-access</a>',
                        'Find "OpsCel" in the list',
                        'Click <strong>Remove</strong>',
                        'Confirm removal'
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
                        '<strong>Encourage team to connect calendars:</strong> Send reminder to all engineers to connect their calendars for accurate availability',
                        '<strong>Monitor connection health:</strong> Check Settings → Team → Calendar Status to see which users have calendars connected',
                        '<strong>Respect availability blocks:</strong> Don&apos;t force schedule unless urgent. Calendar conflicts usually indicate legitimate conflicts.',
                        '<strong>Use OAuth over ICS:</strong> Two-way sync (OAuth) provides better experience than read-only ICS'
                    ]
                },
                {
                    title: 'For Engineers',
                    content: '',
                    bullets: [
                        '<strong>Keep external calendar updated:</strong> If you mark personal appointments as busy, OpsCel will respect them',
                        '<strong>Mark personal time as busy:</strong> Not "free" or "available". Only "busy" events block OpsCel scheduling.',
                        '<strong>Check both calendars:</strong> Even with sync, check both OpsCel and your personal calendar to avoid confusion',
                        '<strong>Report sync issues quickly:</strong> If jobs aren&apos;t appearing in calendar, tell admin immediately'
                    ]
                },
                {
                    title: 'For Managers',
                    content: '',
                    bullets: [
                        '<strong>Check calendar sync before tight scheduling:</strong> If scheduling jobs back-to-back, verify engineer calendar is up to date',
                        '<strong>Use team calendar view:</strong> OpsCel team view shows all engineers&apos; availability from connected calendars',
                        '<strong>Plan around known busy times:</strong> If engineer has recurring commitments (e.g., school pickup 3pm Fridays), schedule around them'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Calendar Not Syncing',
                    content: '<p><strong>Problem:</strong> Jobs aren&apos;t appearing in calendar, or busy times aren&apos;t blocking OpsCel.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Connection status shows "Connected" in Settings → Calendar Integration',
                        'Last sync time is recent (within 15 minutes)',
                        'OAuth token not expired (check for reconnection prompt)',
                        'Selected the correct calendar (check calendar selection dropdown)'
                    ],
                    content_after_bullets: '<p><strong>Fix:</strong> Click "Sync Now" button to force immediate sync. If still not syncing, disconnect and reconnect calendar.</p>'
                },
                {
                    title: 'Jobs Not Appearing in Calendar',
                    content: '<p><strong>Problem:</strong> OpsCel jobs are scheduled but not showing in Google/Microsoft calendar.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Job is in "Scheduled" status (draft jobs don&apos;t sync)',
                        'Visit has a scheduled date (unscheduled visits don&apos;t sync)',
                        'You&apos;re the assigned engineer (only your assigned jobs appear in your calendar)',
                        'Last sync time is recent',
                        'Looking at correct calendar (check selected calendar in OpsCel settings)'
                    ],
                    content_after_bullets: '<p><strong>Fix:</strong> Force sync by clicking "Sync Now". If job still missing, check calendar selection - you may be syncing to a different calendar than you&apos;re viewing.</p>'
                },
                {
                    title: 'Availability Not Blocking Scheduling',
                    content: '<p><strong>Problem:</strong> Have busy event in calendar but OpsCel still allows scheduling at that time.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'ICS feed refresh delay (up to 15 minutes)',
                        'Event marked as "Busy" (not "Free" or "Available")',
                        'OAuth permissions granted (if using Google/Microsoft)',
                        'Calendar integration enabled (not disconnected)'
                    ],
                    content_after_bullets: '<p><strong>Fix:</strong> Wait 15 minutes for ICS refresh, or click "Sync Now" for OAuth. Ensure event status is "Busy". If using ICS, switch to OAuth for faster sync.</p>'
                },
                {
                    title: 'Duplicate Events in Calendar',
                    content: '<p><strong>Problem:</strong> Same OpsCel job appears twice (or more) in calendar.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Multiple calendar connections active (e.g., both Google and Microsoft)',
                        'Syncing to same calendar from multiple OpsCel accounts (multi-tenant)',
                        'Old events not cleaned up after disconnection'
                    ],
                    content_after_bullets: '<p><strong>Fix:</strong> Disconnect all calendar integrations, manually delete duplicate events, then reconnect one calendar only.</p>'
                },
                {
                    title: 'OAuth Error Messages',
                    content: '<p><strong>Problem:</strong> "Token expired" or "Permission denied" error during connection.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Account password recently changed',
                        'OAuth permissions manually revoked',
                        'Organization policy blocking app (enterprise users)',
                        'Browser blocking popup (OAuth opens in new window)'
                    ],
                    content_after_bullets: '<p><strong>Fix:</strong> Clear browser cache, allow popups from app.opscel.com, try reconnection. If enterprise user, contact IT admin for app approval.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Will OpsCel see all my personal calendar events?',
                    content: '<p>No. OpsCel only reads <strong>busy/free status</strong> and event start/end times. Event titles, descriptions, attendees, and location are NOT accessed. Your personal event details remain private.</p><p>OpsCel needs to know WHEN you&apos;re busy, not WHAT you&apos;re doing.</p>'
                },
                {
                    title: 'Can I choose which jobs appear in my calendar?',
                    content: '<p>No. All scheduled visits where you&apos;re the assigned engineer sync automatically. You cannot selectively sync only certain jobs.</p><p>If you don&apos;t want OpsCel jobs in your calendar, disconnect the integration and use OpsCel field app for job scheduling instead.</p>'
                },
                {
                    title: 'What if I delete an OpsCel event from my calendar?',
                    content: '<p>The job remains in OpsCel unchanged. At the next sync (15 minutes), OpsCel will recreate the calendar event. Deleting the event from your calendar does NOT cancel the job.</p><p>To cancel a job, you must cancel it in OpsCel. The calendar event will then delete automatically at next sync.</p>'
                },
                {
                    title: 'How do I stop syncing?',
                    content: '<p>Navigate to <strong>Settings → Calendar Integration</strong> and click <strong>Disconnect</strong>. Sync stops immediately. Existing OpsCel events remain in your calendar (you can manually delete them).</p><p>To fully revoke access, also remove OpsCel from your Google/Microsoft account permissions (see Disconnecting Calendars section).</p>'
                },
                {
                    title: 'Can I sync multiple calendars?',
                    content: '<p>No. Each OpsCel user can connect <strong>one calendar per platform</strong>. You cannot sync multiple Google calendars or merge multiple calendars into OpsCel.</p><p>If you need to block availability from multiple calendars, combine them into a single calendar on your provider&apos;s side (e.g., create a master calendar that aggregates all your calendars), then sync that master calendar to OpsCel.</p>'
                },
                {
                    title: 'Does calendar sync work offline?',
                    content: '<p>No. Calendar sync requires internet connection. If you&apos;re offline (field app), jobs are cached locally and will sync to calendar when you go online.</p><p>However, you can still complete jobs offline in the field app. They just won&apos;t update your calendar until sync happens.</p>'
                },
                {
                    title: 'What time zone are events created in?',
                    content: '<p>Events are created in <strong>your local time zone</strong> based on your OpsCel account settings. If job is scheduled 9am-12pm UK time, and you&apos;re in UK timezone, calendar event will be 9am-12pm.</p><p>If you travel to a different timezone, calendar events will display in that timezone automatically (calendar apps handle timezone conversion).</p>'
                },
                {
                    title: 'Why does my calendar show "busy" when I&apos;m actually available?',
                    content: '<p>OpsCel marks all job events as "busy" by default to block scheduling. If this isn&apos;t accurate for your workflow (e.g., you can take calls during jobs), there&apos;s no way to change this currently.</p><p>Workaround: Disconnect calendar sync and manage scheduling manually in OpsCel only.</p>'
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
                        '<strong>Related guides:</strong> <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs & Multi-Visit Workflow</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a> | <a href="/docs/settings-tour" class="text-blue-600 hover:text-blue-800">Settings Tour</a>'
                    ]
                }
            ]
        }
    ]
};
