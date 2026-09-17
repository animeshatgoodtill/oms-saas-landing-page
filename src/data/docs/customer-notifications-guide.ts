import { IDocGuide } from '@/types';

export const customerNotificationsGuide: IDocGuide = {
    slug: 'customer-notifications',
    title: 'Customer Notifications',
    description: 'Automatic emails to your customers when a visit is booked, moved or cancelled, the evening before a visit, and when a job is completed, cancelled or put on hold. What is sent, who receives it, how to switch it on, and what the office can see.',
    lastUpdated: '2026-09-17',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> Team and Business<br><strong>Roles:</strong> Super Admin, Admin (Settings → Customer notifications)<br><strong>Default:</strong> Off — nothing is emailed until you switch it on'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">Customer notifications send a short, plain email from your company to the <strong>site contacts</strong> on a job when something they care about happens: the visit is booked, moved or cancelled, a reminder the evening before, and when the job is completed, cancelled or put on hold.</p><p class="mb-4">There is nothing to remember to press. Opscel checks every ten minutes for jobs whose schedule or status has changed and sends one email per change — a booking edited five times in three minutes produces one email with the final details, not five.</p><p>Customers do not need a portal login to receive them. If a contact does have <a href="/docs/customer-portal" class="text-secondary hover:underline">portal access</a>, the email also carries a "View in your customer portal" button that opens the job.</p>'
                },
                {
                    title: 'What Customers Receive',
                    content: '',
                    table: {
                        headers: ['Email', 'When it goes out', 'Switch'],
                        rows: [
                            ['Your visit is booked', 'A visit is booked with a date on a job the customer can see', 'Visit booked, rescheduled or cancelled'],
                            ['Your visit has been rescheduled', 'The date or time of an upcoming visit changes', 'Visit booked, rescheduled or cancelled'],
                            ['Your visit has been cancelled', 'An upcoming visit is removed or cancelled', 'Visit booked, rescheduled or cancelled'],
                            ['Reminder: visiting tomorrow', 'The evening before a booked visit, at the hour you choose (default 4 pm)', 'Reminder the day before a visit'],
                            ['Work completed', 'The job is marked completed', 'Job completed'],
                            ['Job cancelled', 'The job is cancelled', 'Job cancelled'],
                            ['Job on hold', 'The job is put on hold (off by default — holds are often internal)', 'Job put on hold']
                        ]
                    }
                },
                {
                    title: 'What Each Email Contains',
                    content: '',
                    bullets: [
                        'Your company name in the heading and as the sender name, with replies going to your company email',
                        'The job number and title, and the site address',
                        'For visits: the date written out in full, the time (or "Time to be confirmed" when no time has been set), and the engineer\'s first name if one is assigned',
                        'Your phone number and email address for questions',
                        'A "View in your customer portal" button, only for contacts who have portal access',
                        'An unsubscribe link in the footer (see below)'
                    ]
                },
                {
                    title: 'What Is Never Sent',
                    content: '<p>Emails are built from the same customer-safe information the portal shows. They never include prices, costs or margins, internal or engineer notes, GPS locations, work summaries, or anything about invoicing status. Draft jobs are never emailed about, and a job is only ever described by the details the customer would see on their own portal.</p>'
                }
            ]
        },
        {
            id: 'switching-on',
            title: 'Switching It On',
            subsections: [
                {
                    title: 'Settings → Customer Notifications',
                    content: '',
                    steps: [
                        { step: 'Go to Settings and open Customer notifications', description: 'On the Starter plan the page shows a plan badge and the switches are disabled.' },
                        { step: 'Turn on "Email customers automatically"', description: 'This is the master switch. Nothing is sent while it is off.' },
                        { step: 'Choose which events to email about', description: 'Visits (booked, rescheduled, cancelled), the day-before reminder, job completed and job cancelled are on by default; job on hold is off by default.' },
                        { step: 'Pick the reminder hour', description: 'The day-before reminder goes out after this hour, UK time. Default 4 pm.' },
                        { step: 'Save', description: 'From this moment on, bookings you make or change are emailed. Bookings made before you switched on are not — see below.' }
                    ]
                },
                {
                    title: 'Only New Changes Are Emailed',
                    content: '<p class="mb-4">Switching the feature on does not email every customer with an existing booking. Only visits booked or changed <em>after</em> you switch on produce a "booked" email, and only completions and cancellations that happen after that moment produce theirs.</p><p class="mb-4">Two things to know:</p>',
                    bullets: [
                        'The day-before reminder covers every upcoming visit from the first evening the feature is on, including visits booked before you switched it on',
                        'If you edit an older booking after switching on (for example, change its label), the customer receives a "Your visit is booked" email for it, because the booking was touched after the switch'
                    ]
                }
            ]
        },
        {
            id: 'who-receives',
            title: 'Who Receives the Emails',
            subsections: [
                {
                    title: 'Site Contacts on the Job',
                    content: '<p class="mb-4">Emails go to the <strong>site contacts</strong> chosen on the job (the Site Contacts field on the job, set when the job is created or edited) — each one who has an email address and has not unsubscribed. If a contact appears more than once, or two contacts share an address, that address is emailed once.</p><p class="mb-4">A job with <strong>no site contact</strong>, or whose site contacts have no email address, is not emailed at all. The job\'s Overview tab tells you when this happens, so you can add a contact and the next change will be sent.</p><p>Emails are only sent to contacts who belong to the customer the job is currently for. If a job is moved to another customer, the previous customer\'s contacts stop receiving updates about it.</p>'
                },
                {
                    title: 'Unsubscribing',
                    content: '<p class="mb-4">Every email carries an unsubscribe link. Opening it shows a confirmation page; the contact is only unsubscribed after they confirm on that page (this stops corporate email scanners, which open every link, from unsubscribing people by accident). Mail clients that support one-click unsubscribe can do it from their own interface too.</p><p>An unsubscribed contact receives no more customer notifications from you, for any job. They still receive the emails your team sends deliberately — quotes, certificates, portal invites and sign-in links are unaffected.</p>'
                }
            ]
        },
        {
            id: 'office-view',
            title: 'What the Office Can See',
            subsections: [
                {
                    title: 'Customer Notifications on the Job',
                    content: '<p class="mb-4">Each job\'s <strong>Overview</strong> tab has a "Customer notifications" card listing every email about that job: what it was, who it went to, when, and whether it was <span class="text-sm bg-gray-100 px-2 py-0.5 rounded">Sent</span>, <span class="text-sm bg-gray-100 px-2 py-0.5 rounded">Failed</span> or <span class="text-sm bg-gray-100 px-2 py-0.5 rounded">Skipped</span>. A skipped entry says why — usually "No site contact with an email".</p><p>When the feature is off, the card says so and links to the settings page.</p>'
                },
                {
                    title: 'Timing',
                    content: '',
                    bullets: [
                        'Opscel checks for changes every ten minutes, and waits until a job has been left alone for a few minutes before emailing — so an edit in progress is not sent half-finished',
                        'At most one schedule email per job every ten minutes; if the schedule keeps changing, the customer receives the latest details once it settles',
                        'The day-before reminder is not sent if a booking email for the same job went out in the previous eight hours (booking tomorrow\'s visit this afternoon does not produce two emails)',
                        'A visit the engineer has already arrived at, or that has already happened, is never announced as booked or cancelled'
                    ]
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Do my customers need the customer portal to get these emails?',
                    content: '<p>No. Emails go to the job\'s site contacts whether or not they have portal access. Contacts with portal access get an extra button that opens the job in the portal; everyone else gets the same details plus your contact information.</p>'
                },
                {
                    title: 'Will switching this on email every existing booking?',
                    content: '<p>No. Only bookings made or changed after you switch on are emailed. The day-before reminder does cover every upcoming visit from the first evening, though — if you would rather it didn\'t, turn the reminder switch off before enabling the feature.</p>'
                },
                {
                    title: 'Why did a customer not get an email about their visit?',
                    content: '<p>Open the job\'s Overview tab and check the Customer notifications card. The common reasons: the feature is off; the job has no site contact, or the contact has no email address or has unsubscribed; the job is still a draft; the visit has no date; or the visit was recorded by the engineer checking in rather than booked ahead (those are not announced). A "Failed" entry means the email could not be delivered — check the address.</p>'
                },
                {
                    title: 'Can I stop emails for one particular customer?',
                    content: '<p>Remove that customer\'s contacts from the Site Contacts on their jobs, or ask the contact to use the unsubscribe link. A per-customer switch is not available yet.</p>'
                },
                {
                    title: 'Does the customer get told when the engineer is on the way?',
                    content: '<p>Not yet. Engineers often work offline and their check-ins can reach the office minutes or hours later, so an "engineer has arrived" email could not be trusted to be on time. The day-before reminder with a time window is the reliable alternative for now.</p>'
                },
                {
                    title: 'Do these replace the emails my team sends?',
                    content: '<p>No. Quotes, certificates and portal invites are still sent by your team when they choose to. Customer notifications only cover scheduling and job status.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>'
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Customer Portal',
            description: 'Where the "View in your customer portal" button takes your customers',
            href: '/docs/customer-portal'
        },
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Booking and changing the visits these emails describe',
            href: '/docs/jobs'
        },
        {
            title: 'Quote Defaults',
            description: 'Automatic quote follow-up reminders, a separate opt-in',
            href: '/docs/quote-defaults'
        }
    ]
};
