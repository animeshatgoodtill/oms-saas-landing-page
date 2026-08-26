import { IDocGuide } from '@/types';

export const jobProfitabilityGuide: IDocGuide = {
    slug: 'job-profitability',
    title: 'Job Profitability',
    description: 'How the Estimated and Actual figures on a job\'s Financial tab are worked out, why one is sometimes blank, and what your two labour rates control.',
    lastUpdated: '2026-08-26',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin, Manager, Finance'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">Every job\'s <strong>Financial tab</strong> shows two columns: <strong>Estimated</strong> (what the job should be worth and should cost, based on what you agreed and what you planned) and <strong>Actual</strong> (what it really cost — time clocked on site, plus confirmed supplier invoices). They\'re allowed to disagree; the gap between them is the point.</p><p>Nothing here is ever guessed. If a figure can\'t be worked out, it\'s left blank and the reason is written underneath — a £0 you can\'t trust is worse than no number at all. See <a href="#blank" class="text-secondary hover:underline">Why is this figure blank?</a> to look up any wording you\'ve seen on a job.</p>'
                }
            ]
        },
        {
            id: 'value',
            title: 'What a Job Is Worth',
            subsections: [
                {
                    content: '<p class="mb-4">Opscel takes the first answer it can trust and stops there:</p>'
                },
                {
                    table: {
                        headers: ['Priority', 'Source', 'Shown as'],
                        rows: [
                            ['1', 'You\'ve raised an invoice against the job — that\'s the value, because it\'s what you actually billed.', 'Invoiced'],
                            ['2', 'Not invoiced yet, but the job came from a quote — the quote total is what the customer agreed to.', 'Quoted'],
                            ['3', 'No quote and no invoice (a call-out, service visit, or warranty job) — valued from the work booked in: each visit\'s scheduled hours × each assigned engineer\'s <strong>charge rate</strong>.', 'Estimated from schedule'],
                            ['—', 'No document, and nothing on the schedule that can be priced.', 'No value — see below']
                        ]
                    }
                },
                {
                    title: 'Rung 3 covers labour only',
                    content: '<p>A job you never quoted has no parts list anywhere, so there are no materials to price. Parts sit out of <em>both</em> the value and the cost on those jobs, and the margin you see is a labour margin — it isn\'t a claim that no parts were used.</p>'
                }
            ]
        },
        {
            id: 'cost',
            title: 'What a Job Costs',
            subsections: [
                {
                    content: '<p class="mb-4">Cost is worked out in two halves, and each half falls back on its own. A job can take its parts from a quote and its labour from the schedule at the same time — that\'s normal, not a fault.</p>'
                },
                {
                    title: 'Parts',
                    table: {
                        headers: ['Priority', 'Source'],
                        rows: [
                            ['1', 'Every materials and equipment line on the invoice — or the quote, until you invoice — costed at quantity × the product\'s cost price from your catalogue.'],
                            ['—', 'A free-typed line has no product behind it, so it has no cost price to read. It\'s counted and shown as "lines not costed" rather than quietly ignored.']
                        ]
                    }
                },
                {
                    title: 'Labour',
                    table: {
                        headers: ['Priority', 'Source'],
                        rows: [
                            ['1', 'A labour line itemised on the quote or invoice: quantity × the labour product\'s cost price. This <em>replaces</em> the rate-based figure below — it never adds to it.'],
                            ['2', 'No labour line on the document (most quotes bundle labour into a lump sum) — costed from the schedule: hours × each engineer\'s <strong>cost rate</strong>.'],
                            ['—', 'Nobody\'s labour band has a cost rate, so nothing can be costed. You\'ll see "Labour costing not set up".']
                        ]
                    }
                },
                {
                    title: 'A quote with no labour line doesn\'t mean labour was free',
                    content: '<p>It almost always means labour was bundled into the price. That\'s why those jobs fall back to your rates instead of showing £0 — which would make every one of them look far more profitable than it was.</p>'
                }
            ]
        },
        {
            id: 'rates',
            title: 'The Two Rates You Set',
            subsections: [
                {
                    content: '<p class="mb-4">Both live in <strong>Settings → Financial Settings → Labour Bands</strong>, set per band. Assign people to a band from <a href="/docs/team-management" class="text-secondary hover:underline">Team Members</a>.</p>'
                },
                {
                    title: 'Cost rate — what an hour costs you',
                    content: '<p>All in: wage, van, tools, overhead. This is the figure that drives every job\'s labour cost and margin. Without it, jobs show "Labour costing not set up" instead of a cost.</p>'
                },
                {
                    title: 'Charge rate — what you bill an hour at',
                    content: '<p>Used to value work you never quoted — the call-outs and service visits that would otherwise show no figure at all. Nothing invoices off it directly; it\'s an estimating figure only.</p>'
                },
                {
                    title: 'Both rates exclude VAT',
                    content: '<p>This catches people out on the charge rate, because it\'s close to the number you\'d quote a domestic customer — and that\'s usually the VAT-inclusive one. If you bill £114 an hour including VAT, enter <strong>£95</strong>.</p>'
                }
            ]
        },
        {
            id: 'cases',
            title: 'Five Worked Examples',
            subsections: [
                {
                    title: 'A. Fire alarm install, quoted and invoiced',
                    content: '<p class="mb-3">The invoice itemises both materials and labour, and every line links to a catalogue product — as good as it gets.</p>',
                    table: {
                        headers: ['Line', 'Where it comes from', 'Figure'],
                        rows: [
                            ['Value', 'Invoice, ex VAT — "Invoiced"', '£4,200.00'],
                            ['Parts', 'Invoice lines × cost price', '£1,240.00'],
                            ['Labour', 'Invoice labour lines × cost price', '£1,110.00'],
                            ['Margin', '44.0%', '£1,850.00']
                        ]
                    }
                },
                {
                    title: 'B. Quoted job, labour bundled into the price',
                    content: '<p class="mb-3">The quote lists materials but no labour line — the labour is inside the lump sum. Parts come from the quote; labour falls back to the cost rate across the two visits booked (2 visits × 1 engineer × 4h = 8h at £45).</p>',
                    table: {
                        headers: ['Line', 'Where it comes from', 'Figure'],
                        rows: [
                            ['Value', 'Quote, ex VAT — "Quoted"', '£1,850.00'],
                            ['Parts', 'Quote lines × cost price', '£610.00'],
                            ['Labour', '8h scheduled × £45 cost rate', '£360.00'],
                            ['Margin', '47.6%', '£880.00']
                        ]
                    }
                },
                {
                    title: 'C. Service call — never quoted, not yet invoiced',
                    content: '<p class="mb-3">Two hours booked for one engineer. Value comes from the charge rate (£95), cost from the cost rate (£45). There\'s no parts list on a job like this, so parts sit out of both sides. No percentage is shown here — see <a href="#pct" class="text-secondary hover:underline">below</a> for why.</p>',
                    table: {
                        headers: ['Line', 'Where it comes from', 'Figure'],
                        rows: [
                            ['Value', '2h × £95 charge rate — "Estimated from schedule"', '£190.00'],
                            ['Parts', 'Not estimated — no document', '—'],
                            ['Labour', '2h × £45 cost rate', '£90.00'],
                            ['Margin', 'No percentage shown', '£100.00']
                        ]
                    }
                },
                {
                    title: 'D. Same job, but no cost rate set yet',
                    content: '<p class="mb-3">Everything about the job is fine — the gap is in Settings. You\'ll see a banner reading "Labour costing not set up". Value and parts still show, because they\'re real; the margin is withheld because a margin missing its labour half would flatter you.</p>',
                    table: {
                        headers: ['Line', 'Where it comes from', 'Figure'],
                        rows: [
                            ['Value', 'Quote, ex VAT — "Quoted"', '£1,850.00'],
                            ['Parts', 'Quote lines × cost price', '£610.00'],
                            ['Labour', 'No band has a cost rate', '—'],
                            ['Margin', 'Withheld until labour is known', '—']
                        ]
                    }
                },
                {
                    title: 'E. The engineer checked in and straight back out',
                    content: '<p class="mb-3">Check-in to check-out was four minutes — that isn\'t a visit, so it doesn\'t count as clocked time (see <a href="#clock" class="text-secondary hover:underline">Clocked time</a>). The Estimated column is unaffected; it\'s the Actual column that has nothing to work from.</p>',
                    table: {
                        headers: ['Line', 'Where it comes from', 'Figure'],
                        rows: [
                            ['Clock coverage', 'Visits with a usable clocked span', '0 of 1'],
                            ['Actual labour', 'Nothing usable to price', '—'],
                            ['Actual total', 'Withheld — supplier costs still listed', '—']
                        ]
                    }
                }
            ]
        },
        {
            id: 'blank',
            title: 'Why Is This Figure Blank?',
            subsections: [
                {
                    content: '<p class="mb-4">Find the wording you can see on the job below — the left column is exactly what appears on screen.</p>'
                },
                {
                    table: {
                        headers: ['What you see', 'What it means', 'What to do'],
                        rows: [
                            ['Labour costing not set up', 'No labour band has a cost rate, so no job can be costed for labour.', 'Set a cost rate in Settings → Financial Settings → Labour Bands. Every job fills in at once.'],
                            ['No value (not quoted, no charge rate set)', 'Engineers are booked on the job, but there\'s no charge rate to value their time with.', 'Set a charge rate in Settings → Financial Settings → Labour Bands.'],
                            ['No value (not quoted, nothing scheduled to price)', 'Nobody is booked on this job, so there are no hours to value. Your rates are fine.', 'Book a visit and assign an engineer — or raise a quote or invoice.'],
                            ['Labour cost incomplete', 'Some labour could be priced and some couldn\'t — an engineer with no band, a band with no rate, a visit with no duration, or a visit with nobody on it.', 'Check the job\'s visits have a duration and an assigned engineer, and everyone is in a band with a cost rate.'],
                            ['Scheduled value incomplete', 'Part of the schedule couldn\'t be priced at the charge rate.', 'Same checks — durations, assignments, and a charge rate on the band.'],
                            ['Parts cost unknown', 'A materials or equipment line has no catalogue product linked, or the product has no cost price.', 'Link the product on the line, or add a cost price to it in your catalogue.'],
                            ['N lines not costed', 'Free-typed lines with no product behind them — counted so you know they\'re there, but they can\'t be priced.', 'Link products on those lines if you want them in the cost.'],
                            ['No usable check-in/check-out times', 'No visit on the job has a clocked span long enough to count.', 'Ask engineers to check in on arrival and out on leaving. See Clocked time below.'],
                            ['The visits were clocked, but none of the engineers on them has a band cost rate', 'Time was recorded properly — the money can\'t be worked out.', 'Set a cost rate on the bands those engineers are in.']
                        ]
                    }
                }
            ]
        },
        {
            id: 'pct',
            title: 'Why Some Jobs Show a Margin but No Percentage',
            subsections: [
                {
                    content: '<p class="mb-4">On a job valued from its schedule, the value is hours × charge rate and the cost is those same hours × cost rate. The percentage between them is fixed by your two rates — it would be identical on every job like it. That number would describe your rate card, not the job, so it isn\'t shown. The pounds are still useful: they scale with the hours worked. The moment you invoice the job, the value comes from the invoice instead and a real percentage appears.</p><p>For the same reason, the <strong>Avg Margin</strong> figure on the <a href="/docs/reports#profitability" class="text-secondary hover:underline">profitability report</a> is worked out over quoted and invoiced jobs only. Where schedule-estimated jobs are included in the money totals, the report says how much of the total they are.</p>'
                }
            ]
        },
        {
            id: 'clock',
            title: 'Clocked Time, and the Ten-Minute Rule',
            subsections: [
                {
                    content: '<p class="mb-4">Actual labour comes from each visit\'s clocked span — check-in to check-out — × the engineer\'s cost rate. Three things count as "not clocked": a span under ten minutes, a span over 24 hours, and a visit with a missing check-in or check-out.</p><p class="mb-4">The short ones matter most: an engineer who checks in and straight back out produces a few minutes of time that would otherwise read as a real, very cheap visit — and make the job look far more profitable than it was.</p><p>Each job shows <strong>N of M visits clocked</strong> so you can see how much of the attendance was actually recorded, and the profitability report shows the same figure across the date range.</p>'
                },
                {
                    title: 'Coverage is about the clock, not the money',
                    content: '<p>A visit can be perfectly clocked and still cost nothing if that engineer\'s band has no cost rate — so "7 of 7 clocked" can sit next to an incomplete labour figure. And a visit with nobody assigned can never be clocked, so a job carrying one stays below 100%.</p>'
                }
            ]
        },
        {
            id: 'live',
            title: 'What Happens When You Change a Rate',
            subsections: [
                {
                    content: '<p class="mb-4"><strong>What you agreed is locked. What things cost is priced at today\'s rates.</strong></p><p class="mb-4">A quote can\'t change once it becomes a job, and an invoice can\'t change once it\'s sent — so the value side of a job holds still. Costs are different: correct a cost price or an engineer\'s cost rate, and every job\'s margin corrects with it, including jobs you finished months ago. That\'s deliberate — a margin measured against a cost you know is wrong isn\'t worth having, and it\'s how materials have always worked here.</p>'
                },
                {
                    title: 'Two things worth expecting',
                    content: '<p>The first time you set a cost rate, your whole completed history fills in at once — that\'s the figures arriving, not the report rewriting itself. And if you put your rates <em>up</em>, older jobs are repriced at the new rate too, so historic margins will tighten.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Why do Estimated and Actual disagree?',
                    content: '<p>By design. Estimated is what was agreed or planned; Actual is what really happened on site. A job scheduled for eight hours that took twenty-four but was billed for eight is a loss — Estimated and Actual are how you see it.</p>'
                },
                {
                    title: 'Can I set the cost or charge rate on a person instead of a band?',
                    content: '<p>No — both rates are set per labour band in Settings → Financial Settings → Labour Bands, and everyone assigned to that band shares it. Move someone to a different band from Team Members if their rate should differ.</p>'
                },
                {
                    title: 'A job I finished last year just changed margin — is that a bug?',
                    content: '<p>No. Costs are always priced at today\'s rates, not the rates in force when the job ran. If you\'ve just corrected a cost price or a labour band\'s cost rate, every job that used it — past and present — recalculates. See <a href="#live" class="text-secondary hover:underline">What happens when you change a rate</a>.</p>'
                },
                {
                    title: 'Why does the profitability report leave some jobs out of the average margin?',
                    content: '<p>Schedule-estimated jobs (no quote, no invoice) have a margin that\'s mathematically fixed by your two rates rather than by anything specific to the job, so they\'re excluded from the Avg Margin figure to avoid diluting it with a number that doesn\'t vary. See <a href="#pct" class="text-secondary hover:underline">Why some jobs show a margin but no percentage</a>.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<p class="mb-4">If a figure still looks wrong after checking <a href="#blank" class="text-secondary hover:underline">Why is this figure blank?</a>, send us the job number — the wording under the figure tells us exactly which input is missing.</p><div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>'
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Where the Financial tab lives on a job',
            href: '/docs/jobs'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'How quotes, jobs, and invoices connect',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Reports & Analytics',
            description: 'The profitability report and Avg Margin figure',
            href: '/docs/reports'
        },
        {
            title: 'Settings Tour',
            description: 'Where Labour Bands and cost/charge rates live',
            href: '/docs/settings-tour'
        },
        {
            title: 'Team, Roles & Permissions',
            description: 'Assigning people to a labour band',
            href: '/docs/team-management'
        }
    ]
};
