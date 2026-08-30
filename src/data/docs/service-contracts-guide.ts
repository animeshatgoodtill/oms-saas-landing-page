import { IDocGuide } from '@/types';

export const serviceContractsGuide: IDocGuide = {
    slug: 'service-contracts',
    title: 'Service Contracts & Multi-Site Agreements',
    description: 'Set up recurring service contracts and group multi-site customers into agreements. Learn the three ways to create a contract, how fixed-anchor scheduling works, and how to bulk-create across sites.',
    lastUpdated: '2026-08-13',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Admin, Contract Manager, Site Manager (per your permission setup). Service contracts are an admin-side feature — field engineers do not see these screens.</p>'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4">A service contract turns a one-off job into recurring service on a fixed cadence. You define a service, how often it repeats, and a per-visit price; Opscel automatically creates the next draft job ahead of each due date so a planned visit never slips. For customers with many sites, a multi-site agreement groups all those contracts under one envelope so you can roll a template across every site and see the whole portfolio\'s annual value at a glance.</p>'
                },
                {
                    title: 'What This Guide Covers',
                    bullets: [
                        'The three ways to create a recurring contract',
                        'How automatic job generation and fixed-anchor scheduling work',
                        'Editing the schedule safely, and the full contract lifecycle',
                        'Grouping a customer\'s sites into a multi-site agreement',
                        'How per-visit pricing and annual value work',
                        'The site access notes and site log that reach engineers in the field'
                    ]
                },
                {
                    title: 'Contracts vs. Agreements',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900"><strong>Important distinction:</strong> A <strong>service contract</strong> is one recurring service for a customer, usually at one site, for one service type. An <strong>agreement</strong> is a grouping envelope over several contracts for the same customer — it holds the relationship (renewal date, billing contact, terms) but never the cadence or price, which always live on each individual contract.</p></div>'
                },
                {
                    title: 'One Site Needing Two Services',
                    content: '<p class="mb-4">A site that needs two disciplines — say quarterly fire alarm servicing <strong>and</strong> annual emergency lighting — is <strong>two contracts</strong>, not one contract with two schedules. Both can sit under the same agreement. This keeps each compliance interval, certificate, and price independent and correct.</p>'
                }
            ]
        },
        {
            id: 'how-it-works',
            title: 'How Recurring Contracts Work',
            content: '<p class="mb-4">A contract repeats on a <strong>cadence</strong> (frequency) and is anchored to a <strong>next due date</strong>. Each time a visit generates, the next due date advances by the frequency — so the schedule stays on its original rhythm regardless of when you actually generate.</p>',
            subsections: [
                {
                    title: 'Key Terms',
                    bullets: [
                        '<strong>Occurrence / visit</strong> — a job auto-generated from a contract. When you convert an existing job, that job is the first visit (visit #0).',
                        '<strong>Cadence / frequency</strong> — how often the service repeats: weekly, or every 1, 3, 4, 6, 12, 24, 36, 48, or 60 months.',
                        '<strong>Lead time</strong> — how many days before a due date the draft job is auto-created (0–365, default 14).',
                        '<strong>Next due date</strong> — the anchor for the next visit; advances by the frequency each time a visit generates.',
                        '<strong>Statuses</strong> — <strong>Active</strong> (generating), <strong>Paused</strong> (generation halted), <strong>Ended</strong> (read-only, re-openable), <strong>Cancelled</strong> (read-only, terminal).'
                    ]
                },
                {
                    title: 'Fixed-Anchor Scheduling',
                    content: '<p class="mb-4">Generating a visit early does <strong>not</strong> shift the rest of the schedule. If the next visit is due 16 September and you generate it early, the visit after it stays on 16 December. This is the correct model for statutory work — the compliance interval is preserved no matter when the job is actually raised.</p>'
                }
            ]
        },
        {
            id: 'creating-contracts',
            title: 'Creating a Contract — Three Ways',
            subsections: [
                {
                    title: 'Option A — From Scratch',
                    content: '<p class="mb-4">Go to <strong>Service Contracts → New contract</strong>, then choose:</p>',
                    steps: [
                        'Select <strong>Customer</strong>',
                        'Select <strong>Site</strong> (optional)',
                        'Select <strong>Service type</strong> (optional)',
                        'Set <strong>Frequency</strong> (cadence)',
                        'Set <strong>Lead time</strong> — days before each due date to create the draft job',
                        'Set <strong>Start date</strong> — the first due date',
                        'Set <strong>Per-visit price</strong> (optional)',
                        'Set a <strong>PO number</strong> (optional) — the customer\'s purchase order, applied to every generated visit',
                        'Click <strong>Create contract</strong>. The first visit generates according to the start date and lead time.'
                    ]
                },
                {
                    title: 'Option B — From an Existing Job',
                    content: '<p class="mb-4">Open the job → <strong>⋮ menu → Convert to contract</strong> → set frequency, lead time, and price → <strong>Create contract</strong>. The job you converted becomes the first visit, and future visits recur from there. Any engineer already on that job carries over.</p><p>If the source job has a <strong>PO number</strong>, the contract inherits it by default — typing a different value in the wizard overrides it, and clearing the field leaves the contract with no rolling PO.</p>'
                },
                {
                    title: 'Option C — From an Accepted Quote',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900">Open an <strong>accepted</strong> quote → <strong>⋮ → Upgrade to service contract</strong>. The customer, site, and title carry over. You then <strong>confirm the recurring per-visit price</strong> — Opscel does not reuse the quote total, because a quote usually bundles one-off install or mobilisation costs that shouldn\'t repeat. Remove those, confirm the recurring figure, and select <strong>Create contract</strong>. The original quote is left untouched.</p><p class="text-blue-900 mt-2">The upgrade path is only available on <strong>accepted</strong> quotes — converting a draft or unaccepted quote would stand up a billing commitment the customer hasn\'t agreed to.</p></div><p class="mb-4">Quotes themselves don\'t carry a PO number, but the wizard here lets you set one for the new contract if the customer has supplied one.</p><p class="mb-4">See <a href="/features/quotations" class="text-blue-600 hover:underline">Quotes & Estimates</a> for the full quoting workflow.</p>'
                }
            ]
        },
        {
            id: 'running-the-schedule',
            title: 'Running the Schedule',
            subsections: [
                {
                    title: 'Automatic Job Generation',
                    content: '<p class="mb-4">For an active contract, Opscel creates the next draft job automatically, a lead-time number of days before the due date (default 14). The visit appears on your board ready to be scheduled and assigned.</p>'
                },
                {
                    title: 'Generate Now',
                    content: '<p class="mb-4">Need a visit sooner — for example, the customer is ready early? Open the contract and select <strong>Generate Now</strong>, then confirm. The confirmation states exactly what happens: this generates the next visit now and the following visits do <strong>not</strong> move.</p>'
                },
                {
                    title: 'Upcoming-Visits Timeline',
                    content: '<p class="mb-4">The contract shows an upcoming-visits timeline marked <strong>Generated</strong> vs <strong>Projected</strong>. Projected dates are estimates derived from the cadence, not confirmed bookings. The timeline stops at a fixed-term contract\'s end date, and shows nothing projected for paused or ended contracts.</p>'
                },
                {
                    title: 'Per-Visit PO Overrides',
                    content: '<p class="mb-4">Each projected visit on the Occurrences timeline has its own <strong>PO chip</strong>. Click it to open a popover where you can add, edit, or remove a PO number for that visit specifically.</p>',
                    bullets: [
                        'A <strong>per-visit PO overrides the rolling PO</strong> for that date only — every other visit keeps using the contract\'s rolling PO',
                        'When a visit has no override, its chip shows the rolling PO <strong>greyed out</strong> to indicate it\'s inherited, not set directly',
                        '<strong>Generated visits</strong> (i.e. real jobs, not projections) show the job\'s actual PO <strong>read-only</strong> on the timeline — edit it on the job itself if it needs to change',
                        '<strong>Consumed POs are locked.</strong> Once a projected visit\'s PO has been used to generate a job, trying to change it returns a &quot;consumed&quot; error — that PO is now tied to the job it created',
                        'If a schedule change (e.g. editing the start date) leaves a per-visit PO without a matching projected date, Opscel raises an <strong>&quot;unmatched&quot; warning banner</strong> with options to reassign it to a new date or remove it — a PO is never silently dropped',
                        'For a contract created from an existing job (Option B above), you can\'t set a per-visit PO on or before that source job\'s visit date — set it on the job directly instead',
                        'Setting or editing a per-visit PO requires the <strong>service-contracts edit</strong> permission'
                    ]
                },
                {
                    title: 'Editing the Start Date Safely',
                    content: '<p class="mb-4">To move the cadence anchor: <strong>contract → Details → Schedule → Edit → change start date → Review start-date change</strong>. You\'ll see a live preview of how future due dates move; check it, then <strong>Confirm new start date</strong>. Already-generated visits are locked and never moved or duplicated. If the cadence matches a statutory interval (e.g. BS 5839 6- or 12-monthly), you\'ll get an extra compliance warning before you confirm.</p>'
                }
            ]
        },
        {
            id: 'lifecycle',
            title: 'Managing the Lifecycle',
            content: '<p class="mb-4">From the contract page or the list row\'s <strong>⋮</strong> menu you can:</p>',
            subsections: [
                {
                    title: 'Available Actions',
                    bullets: [
                        '<strong>Replace the service type</strong> on the contract',
                        '<strong>Pause / Resume</strong> — halt and restart automatic generation',
                        '<strong>End / Reopen</strong> — close a contract (read-only) and reopen it later if needed',
                        '<strong>Cancel</strong> — terminal, read-only',
                        '<strong>View the activity log</strong> — a per-contract record of every change',
                        '<strong>Export the contract list</strong> to CSV from the Service Contracts list'
                    ]
                },
                {
                    title: 'The Rolling PO Number',
                    content: '<p class="mb-4">The contract\'s service/job-defaults card has an editable <strong>PO number</strong> field, with the helper text <em>&quot;Customer purchase order — applied to every generated visit&quot;</em>. Every job the contract generates carries this PO automatically. Edit it at any time from the contract detail page — the new value applies to visits generated from that point on.</p><p>Individual visits on the Occurrences timeline can override this rolling PO with their own — see <strong>Running the Schedule</strong> below.</p>'
                }
            ]
        },
        {
            id: 'agreements',
            title: 'Grouping Sites into an Agreement',
            subsections: [
                {
                    title: 'When Agreements Appear',
                    content: '<p class="mb-4">The agreement feature surfaces on the <strong>customer detail page</strong> once a customer has <strong>three or more service addresses</strong> (or already has an agreement). Customers with one or two sites never see it — keeping the interface simple for small contractors.</p>'
                },
                {
                    title: 'Create an Agreement',
                    content: '<p class="mb-4">On the customer page, go to <strong>Agreements → New agreement</strong> and fill in the title, renewal/review date, billing contact, terms, and notes. The agreement is an envelope for the relationship — it does not hold cadence or price.</p>'
                },
                {
                    title: 'Bulk-Create Contracts Across Sites',
                    content: '<p class="mb-4">Open the agreement → <strong>Add sites</strong>, then:</p>',
                    steps: [
                        'Set the <strong>template</strong> once — cadence, service type, per-visit price, and optionally a <strong>PO number</strong>.',
                        '<strong>Add existing sites</strong> and/or <strong>add new sites inline</strong> (a new address is created as you go — no need to pre-build it).',
                        'Apply <strong>per-site overrides</strong> where a site differs — e.g. a higher price or a tighter cadence for a larger building.',
                        'Select <strong>Create N contracts</strong> and review the results summary.'
                    ]
                },
                {
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4"><p class="text-blue-900">The template\'s <strong>PO number applies to every contract created in the batch</strong> — there\'s no per-site PO override at bulk-create time. Adjust an individual contract\'s PO afterwards from its own detail page if one site needs a different reference.</p></div>'
                },
                {
                    title: 'Duplicate-Detection',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900">If a site already has an active contract for that service type, Opscel <strong>skips that site and reports it</strong> in the summary rather than creating a duplicate — the rest of the batch still goes through.</p></div>'
                },
                {
                    title: 'Template Stamp — No Retroactive Updates',
                    content: '<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4"><p class="text-amber-800">The template is a one-time stamp. Editing the agreement or template later does <strong>not</strong> retro-update contracts already created — each contract is independent once created.</p></div>'
                },
                {
                    title: 'Portfolio Rollup',
                    content: '<p class="mb-4">The agreement\'s rollup view lists every site\'s cadence, next due date, per-visit price, annual value, and status in one table, plus the agreement\'s <strong>total annual value</strong> (active contracts only).</p>'
                }
            ]
        },
        {
            id: 'pricing',
            title: 'Pricing & Annual Value',
            content: '<p class="mb-4">A contract can carry an optional <strong>per-visit recurring price</strong>. Opscel uses it to calculate <strong>annual book value</strong> = per-visit price × visits per year, summed across active contracts and rolled up per agreement. This powers the contract-value report and the agreement portfolio total.</p>',
            subsections: [
                {
                    title: 'What Pricing Does and Doesn\'t Do',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-blue-900">The per-visit price drives annual-value and portfolio figures. It is <strong>not</strong> automatically written onto each generated job\'s invoice, and billing is <strong>per contract</strong> — each contract invoices on its own; there is no single combined agreement invoice. Set the price for value reporting and forecasting; raise invoices per job as usual.</p><p class="text-blue-900 mt-2">See <a href="/docs/invoicing" class="text-blue-700 hover:underline font-semibold">Invoicing Guide</a> for the job-to-invoice workflow.</p></div>'
                }
            ]
        },
        {
            id: 'site-access',
            title: 'Site Access Notes & the Site Log',
            content: '<p class="mb-4">Two field-facing pieces travel to the engineer\'s job automatically — engineers see these even though they don\'t manage contracts:</p>',
            subsections: [
                {
                    title: 'Site Access Notes',
                    content: '<p class="mb-4"><strong>Office-authored</strong> access information (parking, key-safe codes, access hours) set once on the address. It shows on the engineer\'s job in the field app, including offline, and every future visit to that site reflects it. Edit it once; you never have to repeat it per job.</p>'
                },
                {
                    title: 'Site Log',
                    content: '<p class="mb-4">A persistent, per-site running log engineers leave for whoever attends next, or for the office. It works offline, queuing and syncing on reconnect. Notes can be marked <strong>Engineers only</strong> or <strong>Office only</strong>.</p><p class="mb-4">See <a href="/docs/field-service" class="text-blue-600 hover:underline">Field Service App — Engineer\'s Day</a> for how engineers interact with both in the field.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Does generating a visit early move the rest of my schedule?',
                    content: '<p>No — scheduling is fixed-anchor, so only the visit you pull forward moves. Every later visit stays on its original due date.</p>'
                },
                {
                    title: 'What happens to past visits if I set a start date in the past?',
                    content: '<p>Past visits aren\'t back-generated. The next visit generates on the next computed due date; log any historical visits manually.</p>'
                },
                {
                    title: 'Can two contracts cover the same site and service?',
                    content: '<p>No. Opscel flags the conflict and offers to end the existing contract first, so you don\'t double-schedule a site.</p>'
                },
                {
                    title: 'Who can manage service contracts?',
                    content: '<p>Admin-type roles only (Admin, Contract Manager, Site Manager per your setup). Field engineers don\'t see contract screens.</p>'
                },
                {
                    title: 'Why don\'t I see "Agreements" on a customer?',
                    content: '<p>Agreements appear once a customer has three or more sites (or already has an agreement). Below that threshold they stay hidden to keep things simple.</p>'
                },
                {
                    title: 'If I edit an agreement after creating its contracts, do the contracts change?',
                    content: '<p>No — each contract is independent once created. Edit individual contracts directly when you need to.</p>'
                },
                {
                    title: 'Can the customer read the engineer site log?',
                    content: '<p>Not currently. The site log supports <strong>Engineers only</strong> and <strong>Office only</strong> notes; there is no customer-visible tier yet.</p>'
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
            title: 'Jobs & Scheduling',
            description: 'How jobs are created, assigned, and completed',
            href: '/features/jobs'
        },
        {
            title: 'Field Service App',
            description: 'How engineers see access notes and leave site logs',
            href: '/docs/field-service'
        },
        {
            title: 'Quotes & Estimates',
            description: 'Creating and accepting quotes before upgrading them',
            href: '/features/quotations'
        },
        {
            title: 'Certificates',
            description: 'Issuing compliance certificates from completed visits',
            href: '/docs/certificates'
        },
        {
            title: 'Invoicing',
            description: 'Raising invoices from completed jobs',
            href: '/docs/invoicing'
        }
    ]
};
