import { IDocGuide } from '@/types';

export const remoteMonitoringGuide: IDocGuide = {
    slug: 'remote-monitoring',
    title: 'Remote Monitoring - ARC Cases, Keyholders & False Alarms',
    description: 'Learn how Opscel tracks ongoing monitored-system work handled without dispatching an engineer — ARC-handled cases, keyholders, false alarm counters, escalation to a job, and how it bills as a recurring fee.',
    lastUpdated: '2026-08-27',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Office and management roles triage and work cases; engineers see a read-only card on the job<br><strong>What:</strong> Ongoing monitored-system work — an ARC call, a recurring signal, a phoned fault — tracked as a case, never as a job<br><strong>Where:</strong> Monitoring section in the main app (Business tier)<br><strong>Why:</strong> Keep monitoring activity off the planner while still logging keyholders, false alarms, and escalation history against the site</p></div>'
                },
                {
                    title: 'A Monitoring Case Is / Is Not',
                    content: '<div class="grid md:grid-cols-2 gap-4 mb-4"><div class="bg-green-50 border border-green-200 rounded-lg p-4"><p class="text-green-900 font-semibold mb-2">A monitoring case IS:</p><ul class="list-disc ml-4 text-sm text-green-800 space-y-2"><li>Ongoing work handled without dispatching an engineer</li><li>An ARC call about a recurring signal or panel fault</li><li>A customer-phoned fault that gets triaged, chased, or resolved remotely</li><li>Numbered on its own sequence — <strong>MC-NNNNN</strong></li><li>Logged with an append-only timeline of contacts and outcomes</li><li>Something that can be escalated into a real job while it stays open</li></ul></div><div class="bg-gray-50 border border-gray-200 rounded-lg p-4"><p class="text-gray-900 font-semibold mb-2">A monitoring case is NOT:</p><ul class="list-disc ml-4 text-sm text-gray-700 space-y-2"><li>A job — it has no visit, no scheduled time, no engineer assignment</li><li>On the planner, ever</li><li>Something that consumes engineer capacity</li><li>A certificate or worksheet</li><li>The same thing as a monitoring <em>arrangement</em> (the per-site record of the ARC, account number, and response instruction)</li></ul></div></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Keeps monitoring off the planner:</strong> Office work stays office work — no phantom visits or capacity clutter',
                        '<strong>One place for ARC detail:</strong> Account number, signalling path, and standing response instruction live with the site, not in someone\'s notebook',
                        '<strong>NPCC-aware keyholder tracking:</strong> Warns when a site doesn\'t have enough cover within the expected response time',
                        '<strong>False alarm counters with real thresholds:</strong> Warn and withdrawal levels match NPCC policy, with a 90-day reinstatement clock',
                        '<strong>Escalation without losing history:</strong> Turning a case into a job links the two — the case stays open, nothing is overwritten',
                        '<strong>Bills as a recurring fee:</strong> Monitoring charges ride the service contract alongside visit pricing, reported separately'
                    ]
                },
                {
                    title: 'Common Use Cases',
                    content: '',
                    bullets: [
                        'ARC phones about a recurring intruder signal on a site under contract',
                        'A fire panel reports an intermittent fault the customer wants tracked, not immediately visited',
                        'A customer calls in an emergency-light self-test failure that needs chasing before it becomes a job',
                        'Recording a false alarm against NPCC counters after an ARC call',
                        'Escalating a case that turns out to need a site visit into a proper job, without losing the case history',
                        'Reviewing keyholder cover for a site ahead of an ARC audit'
                    ]
                }
            ]
        },
        {
            id: 'what-is-a-case',
            title: 'What Is a Monitoring Case?',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> Business | <strong>Roles:</strong> Every role except Engineer and your finance/accounts role can work monitoring cases</p>'
                },
                {
                    title: 'Case Numbering',
                    content: '<p>Every case gets its own reference on a dedicated sequence — <strong>MC-00001</strong>, <strong>MC-00002</strong>, and so on — separate from job numbers, quote numbers, and invoice numbers. A case number never reuses a job number, and a case never appears on the job list.</p>'
                },
                {
                    title: 'Contact & Outcome Vocabulary',
                    content: '<p>Every contact logged on a case records who it was with and what happened. The vocabulary is fixed so reporting stays consistent:</p>',
                    table: {
                        headers: ['Contact type', 'Typical source', 'Example outcome'],
                        rows: [
                            ['ARC', 'The alarm receiving centre that called or was called', 'Confirmed signal, requested reset, advised on test'],
                            ['Police', 'Police force notified of a confirmed alarm', 'URN logged, attended, no attendance'],
                            ['Fire brigade', 'Fire service notified of a confirmed signal', 'Attended, stood down, false alarm confirmed'],
                            ['Keyholder', 'A named keyholder contacted to attend or advise', 'Attended within X minutes, unreachable, declined'],
                            ['Site', 'Site contact reached directly', 'Confirmed false alarm, requested engineer, no answer'],
                            ['Customer', 'The account holder, not necessarily on-site', 'Authorised next step, requested update, escalated']
                        ]
                    }
                },
                {
                    title: 'Opening a Case',
                    content: '',
                    steps: [
                        'Go to <strong>Monitoring</strong> and select <strong>New Case</strong>',
                        'Pick the customer and site — the site\'s monitoring arrangement(s) load automatically',
                        'Choose the monitored system the case relates to, if more than one is set up',
                        'Describe what was reported and by whom',
                        'Save — the case is numbered immediately and appears in the open case list'
                    ]
                },
                {
                    title: 'The Timeline',
                    content: '<p>Every case carries an <strong>append-only timeline</strong>. Entries are never edited or deleted once saved — if something needs correcting, add a new entry rather than changing the old one. This keeps the case defensible if it\'s ever reviewed by an ARC, an insurer, or NPCC. Each entry records the contact type from the table above and its outcome, so the full sequence of a case reads back cleanly from open to close.</p>'
                }
            ]
        },
        {
            id: 'monitoring-arrangement',
            title: 'Monitoring Arrangements',
            content: '<p class="mb-4">A monitoring arrangement is the per-site, per-monitored-system record that everything else in this guide hangs off. Set one up for each system on a site that an ARC monitors.</p>',
            subsections: [
                {
                    title: 'Fields on an Arrangement',
                    table: {
                        headers: ['Field', "What it's for", 'Where it surfaces'],
                        rows: [
                            ['Monitored system', 'Which system this arrangement covers (intruder, fire, CCTV, hold-up)', 'Case creation, field app card'],
                            ['ARC name', 'The alarm receiving centre monitoring the system', 'Case timeline, field app card, new fire alarm certs'],
                            ['Our account number with the ARC', 'The identifier the ARC uses for this site', 'Field app card (large mono type), new fire alarm certs'],
                            ['Signalling path', 'How signals reach the ARC (dual-path, digital communicator, etc.)', 'Arrangement detail view'],
                            ['Police URN', 'Unique reference number issued for police response', 'Case timeline when police are contacted'],
                            ['Response level', 'The current NPCC response level for this system', 'False alarm counter, arrangement detail view'],
                            ['Standing response instruction', 'What the ARC does by default when a signal comes in', 'Case creation, arrangement detail view'],
                            ['ARC engineers\'/on-test phone line', 'Direct line engineers call before testing', 'Field app card tap-to-call button'],
                            ['Service contract it bills under', 'Which contract the recurring monitoring fee rides on', 'Billing, Service Contract Value report']
                        ]
                    }
                },
                {
                    title: 'One Arrangement Per Monitored System',
                    content: '<p>A site with both an intruder system and a fire alarm monitored by the same or different ARCs needs <strong>two arrangements</strong> — each with its own account number, signalling path, and false alarm counter. Don\'t try to combine them; the response level and false alarm history for intruder and fire systems are tracked independently.</p>'
                }
            ]
        },
        {
            id: 'keyholders',
            title: 'Keyholders',
            subsections: [
                {
                    title: 'Recording Keyholders',
                    content: '<p>Each site keeps an <strong>ordered list</strong> of keyholders. For every keyholder you record:</p>',
                    bullets: [
                        'Name and contact details',
                        'Order — who the ARC or your office tries first, second, and so on',
                        '<strong>Attends within</strong> — how many minutes this keyholder typically takes to reach the site',
                        'Whether they hold <strong>keys</strong>, <strong>alarm codes</strong>, or both'
                    ]
                },
                {
                    title: 'NPCC Expectation',
                    content: '<div class="border-l-4 border-amber-500 bg-amber-50 p-4 mb-4"><p class="text-amber-900"><strong>NPCC expects at least two keyholders able to attend within 20 minutes.</strong> Opscel warns you when a site\'s keyholder list doesn\'t meet this — either too few keyholders overall, or too few within the 20-minute window. Review the warning before an ARC audit or a police response review.</p></div>'
                }
            ]
        },
        {
            id: 'false-alarms',
            title: 'False Alarms',
            subsections: [
                {
                    title: 'Thresholds by Alarm Kind',
                    content: '<p>Opscel keeps a rolling false alarm counter per monitoring arrangement, matched to NPCC policy:</p>',
                    table: {
                        headers: ['Alarm kind', 'Warn at', 'Withdraw at'],
                        rows: [
                            ['Intruder', '2', '3'],
                            ['CCTV', '2', '3'],
                            ['Hold-up (personal attack)', '1', '2']
                        ]
                    }
                },
                {
                    title: 'Response Levels',
                    table: {
                        headers: ['Response level', 'Meaning'],
                        rows: [
                            ['level_1', 'Full police response — no restriction in place'],
                            ['level_3_withdrawn', 'Police response withdrawn following excess false alarms'],
                            ['none', 'No police response configured for this arrangement']
                        ]
                    }
                },
                {
                    title: 'The 90-Day Clock',
                    content: '<div class="border-l-4 border-amber-500 bg-amber-50 p-4 mb-4"><p class="text-amber-900">Reinstatement eligibility is a simple calculation: a fixed <strong>reinstatement clock start date</strong> plus <strong>90 days</strong>. That start date is set once, by your office, when the clock begins (typically when the police response is withdrawn) — Opscel does not automatically push it forward if another false alarm happens inside the 90-day window. If your ARC or police contact requires the clock to restart after a further false alarm, update the start date yourself; Opscel will not do it for you.</p></div>'
                }
            ]
        },
        {
            id: 'escalation',
            title: 'Escalation to a Job',
            subsections: [
                {
                    title: 'A Link, Not a Status',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"><p class="text-sm text-blue-900"><strong>Escalation is a link, not a status.</strong> Escalating a case creates a real job — with a visit, an engineer, and a place on the planner — but the case itself stays <strong>open</strong>, linked to that job. Nothing about the case is overwritten or closed automatically. You close the case yourself once the underlying issue is resolved, whether that resolution came from the job or from further remote work.</p></div>'
                },
                {
                    title: 'Case Lifecycle',
                    content: '<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto"><p class="font-mono text-sm whitespace-nowrap">Open → Triaged → (Escalated to job, case stays open) → Resolved → Closed</p></div><div class="my-8"><img src="/images/features/remote-monitoring/case-lifecycle.svg" alt="Monitoring case lifecycle: Case Opened, an optional Escalated step that creates a linked job while the case stays open, an append-only timeline of contacts, and a manual Case Closed step, with a side note on the separate false-alarm counter and 90-day reinstatement clock." class="w-full rounded-lg border border-border shadow-lg" /></div>'
                },
                {
                    title: 'When to Escalate',
                    content: '<p>Escalate a case when remote triage confirms the issue needs a physical visit — a genuine fault the ARC can\'t clear over the phone, a device that needs replacing, or a keyholder who reports something an engineer should look at. The case timeline keeps every contact made before escalation, so the engineer arriving on the job can see the full history that led to it.</p>'
                }
            ]
        },
        {
            id: 'billing',
            title: 'Billing',
            subsections: [
                {
                    title: 'Per-Visit Price vs. Recurring Fee',
                    content: '<p>A monitoring charge is a <strong>recurring fee</strong> on a service contract — a separate line from the contract\'s per-visit pricing:</p>',
                    table: {
                        headers: ['', 'Per-visit price', 'Recurring fee'],
                        rows: [
                            ['Generates a job?', 'Yes — each visit is a job', 'No — never generates a job'],
                            ['Cadence', 'Follows the contract\'s visit schedule', 'Its own cadence, independent of visits'],
                            ['Carries a PO?', 'Per-visit PO reference, if used', "Can carry the customer's PO number"],
                            ['Where it reports', 'Visit book value', 'Service Contract Value report, as "Recurring Fees"']
                        ]
                    }
                },
                {
                    title: 'Reporting',
                    content: '<p>The Service Contract Value report shows visit book value and recurring fees as <strong>separate, additive figures</strong> — never merged into one number. This keeps monitoring income visible on its own line even on a contract that also has scheduled visits.</p>'
                }
            ]
        },
        {
            id: 'field-app',
            title: 'What Engineers See',
            subsections: [
                {
                    title: 'No Extra Permission Needed',
                    content: '<p>Engineers need <strong>no monitoring permission</strong> of their own. The monitoring card is a property of the job they\'re already assigned to — if the job is at a monitored site, the card appears.</p>'
                },
                {
                    title: 'The Monitoring Card',
                    content: '<p>At the top of a monitored site\'s job, engineers see a card like this:</p><div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4"><p class="text-sm text-gray-700 mb-1">Monitored system</p><p class="font-semibold mb-3">Intruder Alarm — Zones 1&ndash;4</p><p class="text-sm text-gray-700 mb-1">ARC</p><p class="font-semibold mb-3">SecureWatch Monitoring</p><p class="text-sm text-gray-700 mb-1">Account number</p><p class="font-mono text-2xl mb-4">AC-4471-B</p><p class="text-sm text-gray-700 mb-4"><strong>Put the system on test before testing any device.</strong></p><p class="inline-block bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded">Call ARC on-test line</p></div><p>This works offline — the card renders from data already synced to the device, and the tap-to-call button appears whenever an on-test number is recorded on the arrangement.</p>'
                },
                {
                    title: 'Check-In Acknowledgement',
                    content: '<div class="border-l-4 border-amber-500 bg-amber-50 p-4 mb-4"><p class="text-amber-900">At check-in, engineers see a <strong>non-blocking acknowledgement</strong> of the monitoring card — not a required confirmation. Opscel deliberately never asks an engineer to confirm they called the ARC. A false record of a call that never happened would count against the contractor in a dispute, so the acknowledgement stays informational and never becomes an attestation.</p></div>'
                }
            ]
        },
        {
            id: 'certificates',
            title: 'Certificates',
            subsections: [
                {
                    title: 'Prefill, Not Assumption',
                    content: '<p>A new Fire Alarm Service or Commissioning certificate prefills the <strong>ARC name</strong> and <strong>account number</strong> from the site\'s monitoring arrangement, saving the engineer re-typing it. It deliberately does <strong>not</strong> prefill "monitored by ARC" as a fact — that answer stays the engineer\'s own signed statement on the certificate, based on what they actually verified on-site.</p>'
                }
            ]
        },
        {
            id: 'permissions',
            title: 'Roles & Permissions',
            subsections: [
                {
                    title: 'Who Can Work Cases',
                    content: '<p>Every role except <strong>Engineer</strong> and your finance/accounts role can work monitoring cases. Engineers only ever see the read-only monitoring card on a job they\'re assigned to — they never open the Monitoring section itself.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Is a monitoring case the same as a job?',
                    content: '<p>No. A case has no visit, no scheduled time, and never appears on the planner. If the issue turns out to need an engineer on-site, you escalate it — which creates a separate job linked back to the case.</p>'
                },
                {
                    title: 'Can a case exist without a monitoring arrangement?',
                    content: '<p>No. A case is always opened against a specific monitoring arrangement — the per-site, per-system record that holds the ARC, account number, and response details. Set up the arrangement first.</p>'
                },
                {
                    title: 'What happens to false alarm counts after 90 days?',
                    content: '<p>Reinstatement eligibility is simply the clock\'s start date plus 90 days — Opscel stores that start date as a plain field and does not automatically extend it if another false alarm happens inside the window. If your ARC or police contact requires the clock to restart after a further incident, that\'s a manual, office-managed update to the start date, not something Opscel tracks or applies for you.</p>'
                },
                {
                    title: 'Does escalating a case close it?',
                    content: '<p>No. Escalation creates a job and links it to the case, but the case stays open. You close it yourself once the underlying issue is actually resolved.</p>'
                },
                {
                    title: 'How does monitoring show up on an invoice?',
                    content: '<p>As a recurring fee on the service contract it\'s billed under — separate from any per-visit charges on that same contract, and reported separately on the Service Contract Value report.</p>'
                },
                {
                    title: 'Do engineers need a monitoring permission?',
                    content: '<p>No. The monitoring card is a property of the job itself. If an engineer is assigned to a job at a monitored site, the card appears automatically — nothing to grant separately.</p>'
                },
                {
                    title: 'Why doesn\'t the field app ask engineers to confirm they called the ARC?',
                    content: '<p>Because a false record of a call that never happened would count against the contractor in a dispute. The check-in prompt is a non-blocking acknowledgement, not an attestation — Opscel never manufactures a record of a call that may not have occurred.</p>'
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
                        '<strong>Related guides:</strong> <a href="/docs/service-contracts" class="text-blue-600 hover:text-blue-800">Service Contracts</a> | <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs & Multi-Visit Workflow</a> | <a href="/docs/certificates" class="text-blue-600 hover:text-blue-800">Certificates</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Service Contracts',
            description: 'Where monitoring bills as a recurring fee alongside visit pricing',
            href: '/docs/service-contracts'
        },
        {
            title: 'Jobs',
            description: 'What escalating a monitoring case actually creates',
            href: '/docs/jobs'
        },
        {
            title: 'Certificates',
            description: 'How fire alarm certificates prefill ARC detail from an arrangement',
            href: '/docs/certificates'
        },
        {
            title: 'Field Service App',
            description: 'The monitoring card engineers see on a monitored site\'s job',
            href: '/docs/field-service'
        },
        {
            title: 'Team, Roles & Permissions',
            description: 'Which roles can work monitoring cases',
            href: '/docs/team-management'
        }
    ]
};
