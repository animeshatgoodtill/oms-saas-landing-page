import { IDocGuide } from '@/types';

export const plannerGuide: IDocGuide = {
    slug: 'planner',
    title: 'Planning Your Week with the Planner',
    description: 'See every engineer\'s week on one board, and book work by dragging it into place. Learn how to read the board, book from the backlog, move visits, and what the Planner refuses to do.',
    lastUpdated: '2026-08-07',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Super Admin, Admin, Contract Manager, Site Manager</p><p class="mb-4">Engineers do not see the Planner — they are taken to the field app instead.</p>',
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">The Planner is a week board. Engineers are the rows, days are the columns, and everything with no visit booked sits in a rail underneath. Drag a card from the rail onto a day to book it; drag a card between days to move it. Each drop asks you for a start time and a duration before anything is saved.</p><p>Find it under <strong>Operations → Planner</strong>, directly below Jobs.</p>',
                },
                {
                    title: 'What This Guide Covers',
                    bullets: [
                        'Reading the board — lanes, cards, and what the markers mean',
                        'Booking work from the backlog',
                        'Moving a visit that\'s already booked',
                        'What the Planner refuses to do, and why',
                        'Showing only part of the team',
                    ],
                },
                {
                    title: 'The Planner vs the Jobs Calendar',
                    content: '<p class="mb-4">They answer different questions. The <strong>Jobs calendar</strong> is date × job — good for "what\'s happening on Thursday?". The <strong>Planner</strong> is engineer × day — good for "is Dave\'s week full, and who can take this?".</p><div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900"><strong>Important:</strong> the Planner can\'t create a job. Every card on it is a job that already exists. If the board looks empty, raise the job in <strong>Jobs</strong> first and it will appear in the backlog.</p></div>',
                },
            ],
        },
        {
            id: 'reading-the-board',
            title: 'Reading the Board',
            subsections: [
                {
                    title: 'Lanes',
                    content: '<p>One row per person who can be sent to site — engineers, site managers, contract managers and admins. Anyone who\'s left the company but still has work booked keeps their row, marked so you can see it.</p>',
                },
                {
                    title: 'The Unassigned Lane',
                    content: '<p>Visits that exist but have nobody on them. You can drag work <em>out</em> of this lane, but not into it — see <a href="#planner-wont-do" class="text-secondary hover:underline">What the Planner Won\'t Do</a>.</p>',
                },
                {
                    title: 'The Backlog Rail',
                    content: '<p>Every open job with no visit booked, longest waiting first. Each card shows how long the job is expected to take and how many days it\'s been waiting.</p>',
                },
                {
                    title: 'Card Markers',
                    table: {
                        headers: ['What you see', 'What it means'],
                        rows: [
                            ['<strong>08:30–10:30</strong>', 'A firm start and finish'],
                            ['<strong>08:30–~10:30</strong>', 'The <strong>finish is a guess</strong> — nothing set a duration, so we\'ve used the 2-hour default. Hover the <strong>~</strong> for the reason. Book or edit it once and the tilde goes.'],
                            ['Amber <strong>No time</strong>', 'No start time set. Visits like this are skipped by clash checks and land on the engineer\'s calendar at 9am by default.'],
                            ['<strong>V2/3</strong>', 'Visit 2 of 3 on that job'],
                            ['A people icon with a number', 'A team visit — more than one engineer attends'],
                        ],
                    },
                },
                {
                    title: 'Top-Right Counters',
                    content: '<p><strong>Estimates · 7</strong> and <strong>No time · 3</strong> tell you how many cards on this week need a real duration or a real start time.</p>',
                },
            ],
        },
        {
            id: 'booking-from-backlog',
            title: 'Booking Work from the Backlog',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        'Find the job in the backlog rail underneath the board.',
                        'Drag it onto the day and engineer you want.',
                        'The confirm box opens. Set the <strong>Start</strong> time and <strong>How long</strong> (30-minute steps, from 30 minutes to 10 hours).',
                        'Read the calendar line — see below.',
                        'Click <strong>Book it</strong>.',
                    ],
                },
                {
                    content: '<p>If the job had nobody assigned to it, booking it also assigns it to the engineer you dropped it on, so the job page and the field app agree with the board.</p>',
                },
                {
                    title: 'The Calendar Check',
                    content: '<p class="mb-4">If the engineer has connected their Google or Microsoft calendar, we check it at the moment you book and say one of four things:</p>',
                    bullets: [
                        '<em>Calendar clear 09:00–11:00.</em>',
                        '<em>Clashes with their calendar — busy 09:00–12:00.</em>',
                        '<em>No calendar linked — showing OpsCel bookings only.</em>',
                        '<em>Couldn\'t reach their calendar. Check for clashes yourself.</em>',
                    ],
                },
                {
                    content: '<p><strong>We warn, we never block.</strong> Double-booking someone on purpose is a normal thing to do, so the decision stays yours.</p>',
                },
            ],
        },
        {
            id: 'moving-a-visit',
            title: 'Moving a Visit',
            subsections: [
                {
                    content: '<p class="mb-4">Drag the card to another day, or to another engineer\'s row. The same confirm box opens so you can adjust the time, then <strong>Book it</strong>.</p><p class="mb-4">To take a day off a job, open the card\'s <strong>⋮</strong> menu and choose <strong>Remove this day</strong>. If it\'s the job\'s only booked day, the job goes back into the backlog rail — that\'s expected, and it\'s visible rather than lost.</p>',
                },
                {
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4"><p class="text-amber-800">A visit that\'s already been attended, or that has a certificate issued against it, can\'t be removed. The Planner will tell you and point you at the job page to cancel it instead.</p></div>',
                },
            ],
        },
        {
            id: 'planner-wont-do',
            title: 'What the Planner Won\'t Do',
            content: '<p class="mb-4">Rows are greyed out <em>before</em> you try, so you can see a refusal coming.</p>',
            subsections: [
                {
                    title: 'You Can\'t Move a Team Visit to a Different Engineer',
                    content: '<p>Dropping a three-person visit onto one person could mean replace the crew, swap someone out, or add them — and we won\'t guess. Move it to another <em>day</em> and it moves for everyone; to change who\'s on it, use the job\'s <strong>Schedule</strong> tab.</p>',
                },
                {
                    title: 'You Can\'t Drop Anything into Unassigned',
                    content: '<p>In OpsCel, a visit with no engineers means <em>the whole job team attends</em> — so a card dropped there would reappear in everybody\'s row. To take work off the plan, edit or cancel the visit from the job page.</p>',
                },
                {
                    title: 'Completed and Cancelled Visits Don\'t Move',
                    content: '<p>They still show, so an afternoon somebody deliberately cleared doesn\'t look free.</p>',
                },
                {
                    title: 'There\'s No Undo',
                    content: '<p>Two people can plan at once, so an undo could quietly wipe a colleague\'s newer change. Drag it back instead — and if a save fails, the message tells you what the board is now showing.</p>',
                },
            ],
        },
        {
            id: 'showing-part-of-team',
            title: 'Showing Only Part of the Team',
            subsections: [
                {
                    content: '<p class="mb-4">Use the <strong>Team</strong> button, top right. It starts with everyone showing and always tells you how narrow it is — <strong>Team · 4 of 9</strong>.</p><p class="mb-4">The Unassigned lane always shows, and the backlog rail ignores the filter.</p>',
                },
                {
                    content: '<p><strong>If you hide someone who\'s on a team visit</strong>, the card stays put — it\'s still in a visible colleague\'s row — and it\'s marked so you know. Moving it still moves the hidden person\'s day, and the confirm box names them before you commit.</p>',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Why is a job in the backlog when it already has a date on it?',
                    content: '<p>The backlog asks "is a visit booked?", not "does the job have a date?". A few older jobs carry a date with no visit behind them — the card says so, and booking it properly is the fix.</p>',
                },
                {
                    title: 'What does the ~ before a finish time mean?',
                    content: '<p>Nothing set how long that visit takes, so we\'ve estimated it. Hover it for where the number came from. Booking or editing the visit makes it firm.</p>',
                },
                {
                    title: 'Does the engineer find out straight away?',
                    content: '<p>The visit appears in their field app immediately. If they\'ve connected a calendar, the entry appears there shortly afterwards.</p>',
                },
                {
                    title: 'Why can\'t I see someone who definitely works here?',
                    content: '<p>The board shows people who can be sent to site. Viewers, Accounts and Sales Manager users don\'t get a lane. Check the Team button isn\'t filtered, then check their role under <strong>Team</strong>.</p>',
                },
                {
                    title: 'Can I use it on my phone?',
                    content: '<p>The board is built for a desktop screen. On a phone it scrolls sideways and is best treated as read-only.</p>',
                },
                {
                    title: 'Why do my times look wrong?',
                    content: '<p>They shouldn\'t — times on the Planner are UK times, matching what\'s stored against the visit. If a time looks out by an hour or two anywhere in OpsCel, tell us.</p>',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>',
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Scheduling a job and adding visits',
            href: '/docs/jobs#scheduling',
        },
        {
            title: 'Assigning Engineers',
            description: 'Assigning engineers to a job',
            href: '/docs/jobs#assigning-engineers',
        },
        {
            title: 'Calendar Integration',
            description: 'Connecting your Google or Microsoft calendar',
            href: '/docs/calendar-integration',
        },
        {
            title: 'Field Service App',
            description: 'What your engineers see when a visit is booked',
            href: '/docs/field-service',
        },
    ],
};
