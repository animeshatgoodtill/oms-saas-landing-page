import { IDocGuide } from '@/types';

export const fireSafetyFeaturesGuide: IDocGuide = {
    slug: 'fire-safety-features',
    title: 'Fire Safety Jobsheets & Fault Tracking',
    description: 'Combined BS 5839 & BAFE SP203 inspection jobsheets and carried-forward fault tracking for fire alarm servicing visits.',
    lastUpdated: '2026-08-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        Opscel brings BS 5839-1:2025 servicing records and BAFE SP203 scheme documentation together in a single jobsheet
                        that engineers fill on site. Faults logged at a site carry forward across visits automatically, so engineers
                        see the complete fault history — weeks, months, or years later — without digging through old job records.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Engineers (field), Managers, Admins (office)<br/>
                        <strong>Where it lives:</strong> Settings → Job Sheet Templates (setup), Jobs → Carried-Forward Faults (field)<br/>
                        <strong>Key benefit:</strong> Single on-site record, no duplicate paperwork, complete fault continuity
                    </p>
                </div>
                <p class="mb-4">
                    This guide covers two fire safety features designed for BAFE SP203-registered contractors:
                </p>
            `,
            subsections: [
                {
                    title: 'What This Guide Covers',
                    bullets: [
                        '<strong>Combined BS 5839 & BAFE SP203 Jobsheet:</strong> Single on-site servicing record combining BS 5839-1 compliance and BAFE SP203 scheme documentation',
                        '<strong>Carried-Forward Faults:</strong> Site-level fault tracking across visits with automatic carry-forward from previous jobs',
                        '<strong>Deficiency Register:</strong> Office view of all open and resolved faults per site',
                        '<strong>Office resolve action:</strong> Resolving a fault from the Complete Job screen\'s Originating Deficiency panel',
                        '<strong>Field and office workflows:</strong> How engineers use fault tracking on site and how managers monitor compliance'
                    ]
                }
            ]
        },
        {
            id: 'combined-jobsheet',
            title: 'Combined BS 5839 & BAFE SP203 Jobsheet',
            content: `
                <p class="mb-6">
                    A single on-site record for fire alarm inspection and servicing visits that brings your BS 5839-1 servicing record
                    and your BAFE SP203 scheme documentation together in one document. Instead of completing separate servicing sheets
                    and scheme paperwork, your engineer fills out one jobsheet on site.
                </p>
            `,
            subsections: [
                {
                    title: 'What It Is',
                    content: `
                        <p class="mb-4">
                            Opscel turns the jobsheet into a clean, branded PDF you can hand to the client or keep on file. It references
                            <strong>Clause 43 of BS 5839-1:2025</strong> and is built for BAFE SP203-registered fire alarm and detection contractors.
                        </p>
                        <p class="mb-4">
                            Your customer signs once on site at the end of the visit. That single signature appears on the jobsheet's client
                            declaration automatically — there's no need to ask them to sign the same thing twice across different documents.
                        </p>
                    `
                },
                {
                    title: 'What It Captures',
                    content: 'The jobsheet records comprehensive servicing details in one document:',
                    bullets: [
                        'Type of premises and service carried out',
                        'Maintenance and compliance statement covering BS 5839-1:2025 and BAFE SP203',
                        'Current faults and disablements (panel readout on arrival and on departure)',
                        'Battery condition and false alarm details',
                        'Logbook statement and BAFE declarations block',
                        'Work carried out, chargeable parts, risk assessment',
                        'Engineer and client signatures (single sign-off)',
                        'Any additional terms or observations'
                    ]
                },
                {
                    title: 'Setting It Up',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admins, Managers (Fire Safety vertical)</p>
                        <p class="mb-4">
                            The jobsheet is ready to use out of the box — there's nothing to design or configure. You'll find it under
                            <strong>Settings → Job Sheet Templates</strong>.
                        </p>
                        <p class="mb-4">
                            Your BAFE Registered Organisation details — company name, address, phone, and SP203 registration number — pull
                            through automatically from your company settings, so they appear on every jobsheet without re-typing.
                        </p>
                    `,
                    steps: [
                        {
                            step: 'Go to Settings → Company Profile',
                            description: 'Navigate to company settings'
                        },
                        {
                            step: 'Scroll to Accreditations & Credentials',
                            description: 'Find the credentials section'
                        },
                        {
                            step: 'Enter your BAFE SP203 registration number',
                            description: 'Add your BAFE SP203 registration number in the credentials field'
                        },
                        {
                            step: 'Save changes',
                            description: 'BAFE Registered Organisation declaration will now appear on all jobsheets'
                        }
                    ]
                },
                {
                    title: 'Important: BAFE Registration Number',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p class="text-amber-800">
                                <strong>BAFE declaration behavior:</strong> If your BAFE SP203 registration number is missing from company
                                credentials, Opscel won't print a "BAFE Registered Organisation" declaration with a blank number beside it —
                                it simply leaves the BAFE claim off that document. Add your number and it switches back on automatically.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Adding to a Job',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Engineers, Managers, Admins</p>
                    `,
                    steps: [
                        {
                            step: 'Open a fire alarm servicing job',
                            description: ''
                        },
                        {
                            step: 'Click "Add Job Sheet"',
                            description: ''
                        },
                        {
                            step: 'Select "Combined BS 5839 & BAFE SP203 Inspection & Servicing Jobsheet"',
                            description: 'The jobsheet appears alongside the job\'s other sheets'
                        },
                        {
                            step: 'Engineer completes on site',
                            description: 'All fields are available in the field app for offline completion'
                        }
                    ]
                },
                {
                    title: 'Nothing Gets Entered Twice',
                    content: `
                        <p class="text-gray-700">
                            The jobsheet pulls in wider job details you've already recorded: work carried out, chargeable parts,
                            risk assessment, and engineer/client signatures. Engineers don't re-enter information that already exists
                            elsewhere in the job.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'carried-forward-faults',
            title: 'Carried-Forward Faults',
            content: `
                <p class="mb-6">
                    When your engineer finds a fault on a fire alarm visit, that fault now belongs to the <strong>site</strong>, not just
                    the individual job. The next time anyone attends that site — weeks, months, or a year later — the faults that are still
                    open are waiting for them, carried forward automatically.
                </p>
            `,
            subsections: [
                {
                    title: 'What It Is',
                    content: `
                        <p class="mb-4">
                            A site keeps its complete fault history over time, even as individual jobs come and go. Nothing falls through the
                            cracks between visits, and you never have to dig back through old job records to find out what was left outstanding.
                        </p>
                        <p class="mb-4">You'll see this in two places:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Carried-Forward Faults screen:</strong> Engineers use this in the field to see open faults and mark them resolved</li>
                            <li><strong>Deficiency Register:</strong> Office view showing all open, resolved, and historical faults for a site</li>
                        </ul>
                    `
                },
                {
                    title: 'Why This Matters',
                    content: 'Site-level fault tracking solves common compliance problems:',
                    bullets: [
                        '<strong>Fault continuity:</strong> Engineers see exactly what was left outstanding from the last visit',
                        '<strong>No digging:</strong> Open faults surface automatically — no searching through old job records',
                        '<strong>Audit trail:</strong> Complete fault history per site for compliance reporting',
                        '<strong>Multi-visit clarity:</strong> Service contracts and recurring visits maintain fault context across visits',
                        '<strong>Severity tracking:</strong> Prioritise critical faults first with Observation/Minor/Major/Critical ratings'
                    ]
                }
            ]
        },
        {
            id: 'field-workflow',
            title: 'In the Field: Carried-Forward Faults Screen',
            content: `
                <p class="mb-6">
                    On a job, your engineer opens the <strong>Carried-Forward Faults</strong> tile. The tile shows a count of what's still
                    open at that site, and the screen lists every open fault carried forward from previous visits, alongside anything found today.
                </p>
            `,
            subsections: [
                {
                    title: 'What Engineers Can Do',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Engineers, Field Managers (field app)</p>
                    `,
                    steps: [
                        {
                            step: 'Open job in field app',
                            description: ''
                        },
                        {
                            step: 'Tap "Carried-Forward Faults" tile',
                            description: 'Shows count of open faults at this site'
                        },
                        {
                            step: 'Review open faults from previous visits',
                            description: 'Each fault shows: description, severity, date raised, originating job'
                        },
                        {
                            step: 'Mark a fault resolved',
                            description: 'A note box appears, pre-filled with sensible default and fully editable. What you type saves and prints on jobsheet under Work Carried Out'
                        },
                        {
                            step: 'Or log a new fault found today',
                            description: 'New fault joins the site\'s register for next time'
                        }
                    ]
                },
                {
                    title: 'Offline Support',
                    content: `
                        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                            <p class="text-green-800">
                                <strong>Works offline:</strong> The Carried-Forward Faults screen works completely offline. Engineers can
                                mark faults resolved and log new faults on site without signal. Everything syncs when they're back in range.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'What Prints on the Jobsheet',
                    content: `
                        <p class="text-gray-700 mb-4">
                            When an engineer marks a fault resolved and enters a note (e.g., &ldquo;Replaced faulty detector in Zone 2&rdquo;),
                            that note appears on the jobsheet under <strong>Work Carried Out</strong>. The customer sees what was fixed without
                            seeing your internal fault register.
                        </p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p class="text-amber-900">
                                <strong>Which job's sheet:</strong> the note prints on the jobsheet of whichever job the resolve action was
                                actually performed through — not necessarily the job where the fault was first raised. If the office resolves
                                a fault from a remedial job's Complete Job screen (see &ldquo;Resolving a Fault from the Office&rdquo; below),
                                the note prints on <em>that</em> remedial job's sheet, not the original inspection job's. The originating job's
                                jobsheet won't retroactively show it was fixed elsewhere — that fault simply stops appearing as open. For the
                                full story of a fault's life (raised → resolved → who/when/how), check the site's live Deficiency Register
                                rather than any single jobsheet PDF.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'office-workflow',
            title: 'In the Office: Deficiency Register',
            content: `
                <p class="mb-6">
                    On each site's page you'll find a read-only <strong>Deficiency Register</strong>. It shows Open, Resolved, and all-time
                    counts, with each fault tagged by severity and labelled with the job it was first raised on — so you can see at a glance
                    what's outstanding across a site and where it came from.
                </p>
            `,
            subsections: [
                {
                    title: 'Viewing the Register',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admins, Managers (office view)</p>
                    `,
                    steps: [
                        {
                            step: 'Go to Customers → Sites',
                            description: ''
                        },
                        {
                            step: 'Open a site detail page',
                            description: ''
                        },
                        {
                            step: 'Scroll to "Deficiency Register" section',
                            description: 'Shows Open/Resolved/All-time fault counts'
                        },
                        {
                            step: 'Click a fault to view detail',
                            description: 'See full description, severity, date raised, originating job, resolution notes (if resolved)'
                        }
                    ]
                },
                {
                    title: 'What the Register Shows',
                    content: 'For each fault:',
                    bullets: [
                        '<strong>Description:</strong> What the fault is',
                        '<strong>Severity:</strong> Observation, Minor, Major, or Critical',
                        '<strong>Status:</strong> Open or Resolved',
                        '<strong>Date raised:</strong> When it was first logged',
                        '<strong>Originating job:</strong> Link to the job where it was found',
                        '<strong>Date resolved:</strong> When it was marked resolved (if resolved)',
                        '<strong>Resolution notes:</strong> What was done to fix it (if resolved)'
                    ]
                },
                {
                    title: 'Register Purpose',
                    content: `
                        <p class="mb-4">
                            For everyday viewing, the Deficiency Register is exactly that — a <strong>view</strong>. Faults are primarily
                            logged and resolved in the field, and the register keeps the running picture for the office. The one exception
                            is the Complete Job screen's Originating Deficiency panel, covered next, which gives office staff a real,
                            working Resolve action of their own.
                        </p>
                        <p class="text-gray-700">
                            Use the register itself for compliance reporting, audit trails, and identifying sites with chronic issues that
                            need escalation or remedial quotes.
                        </p>
                    `
                },
                {
                    title: 'Resolving a Fault from the Office: Complete Job Screen',
                    content: `
                        <p class="mb-4">
                            When your office completes a remedial-type job that was converted from a quote, the <strong>Complete Job</strong>
                            screen shows an <strong>Originating Deficiency</strong> panel — the specific fault(s) that quote was raised to fix.
                        </p>
                        <p class="mb-4">
                            Office staff can click <strong>Resolve</strong> right there. It's a fully working action, not just a display —
                            it hits the exact same resolve mechanism as the field app (same underlying fields: who resolved it, when, and
                            which job closed it). The moment it's resolved, it disappears from both the Carried-Forward Faults screen in the
                            field app and the Deficiency Register on the other job's dashboard — they stay in sync.
                        </p>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p class="text-blue-900">
                                <strong>Legitimate shortcut, not a workaround:</strong> If office staff know a fault has actually been fixed
                                (e.g. confirmed by the engineer verbally or in job notes), resolving it from here is a supported action. The
                                intended, audited way is still for the engineer to resolve it in the field with a note — that's what feeds
                                the jobsheet properly — but the office Resolve button is a real fallback, not a hack.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Completing a Job Does Not Require Faults to Be Resolved',
                    content: `
                        <p class="mb-4">
                            Resolving deficiencies is <strong>optional, not enforced</strong>. There's no block or warning stopping you — a
                            job can be marked complete with faults still open. The unresolved count shown on the Complete Job screen is a
                            nudge, not a gate.
                        </p>
                        <p class="text-gray-700">
                            So it's entirely possible — and will happen if nobody follows up — for a job to be completed while its faults
                            remain open. They'll just keep resurfacing on the next visit until someone, engineer or office, resolves them.
                            Don't assume &ldquo;job completed&rdquo; means &ldquo;faults resolved&rdquo; — those are two independent things
                            in this system.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'faults-vs-defects',
            title: 'Carried-Forward Faults vs Defects',
            content: `
                <p class="mb-6">
                    These are two different screens doing two different jobs, so it's worth knowing which is which:
                </p>
            `,
            table: {
                headers: ['Feature', 'Defects', 'Carried-Forward Faults'],
                rows: [
                    ['Scope', 'This visit only', 'Site-level (all visits)'],
                    ['What it shows', 'What you found today', 'Everything still open at this site'],
                    ['When to use', 'Recording new defects on current job', 'Picking up where last visit left off'],
                    ['Links to quotes', 'Yes (defect-to-quotation workflow)', 'No (use Defects for quoting)'],
                    ['Carries forward', 'No (per-job)', 'Yes (per-site, automatic)'],
                    ['Visible to customer', 'Yes (if included in quote)', 'No (internal only)']
                ]
            },
            subsections: [
                {
                    title: 'When to Use Each',
                    content: '',
                    bullets: [
                        '<strong>Use Defects:</strong> When you need to log something found today that requires a quote or immediate remedial action',
                        '<strong>Use Carried-Forward Faults:</strong> When you need to see everything still open at the site from previous visits',
                        '<strong>Both together:</strong> Most engineers use Carried-Forward Faults to pick up where the last visit left off, and Defects to record anything new that needs quoting'
                    ]
                }
            ]
        },
        {
            id: 'severity-levels',
            title: 'Severity Levels',
            content: `
                <p class="mb-6">
                    Each fault is rated by severity so you can prioritise the right work first. These ratings help managers identify critical
                    issues that need immediate attention versus observations that can wait until the next scheduled visit.
                </p>
            `,
            table: {
                headers: ['Severity', 'Definition', 'Response Time'],
                rows: [
                    ['Critical', 'Fault that immediately compromises fire safety (e.g., panel offline, zone disabled)', 'Immediate action required'],
                    ['Major', 'Fault that significantly reduces system effectiveness (e.g., multiple detectors offline)', 'Fix within days or at next visit'],
                    ['Minor', 'Fault with limited impact (e.g., single detector needs replacement)', 'Fix at next scheduled visit'],
                    ['Observation', 'Note for future attention (e.g., battery due for replacement soon)', 'Monitor, no immediate action needed']
                ]
            },
            subsections: [
                {
                    title: 'How Severity Affects Workflow',
                    content: '',
                    bullets: [
                        '<strong>Critical faults:</strong> Surface at top of carried-forward list in field app — engineers see them first',
                        '<strong>Major faults:</strong> Highlighted in Deficiency Register for manager review',
                        '<strong>Minor/Observation:</strong> Tracked for continuity but don&apos;t require urgent escalation',
                        '<strong>Filtering:</strong> Office staff can filter Deficiency Register by severity to focus on critical sites'
                    ]
                }
            ]
        },
        {
            id: 'data-retention',
            title: 'Data Retention & Privacy',
            subsections: [
                {
                    title: 'Your Clients Don\'t See This',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-blue-800">
                                <strong>Internal only:</strong> The fault register is for your team only. It's an internal working record —
                                your clients never see the running list of open faults at their site. What they receive is the finished jobsheet,
                                with the work you carried out clearly set out.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Deleting a Job Never Loses Fault History',
                    content: `
                        <p class="mb-4">
                            Because faults belong to the site rather than the job, removing an old job from Opscel never wipes a site's fault
                            history. The faults stay on the register, still showing which job they were originally raised on, so your long-term
                            record stays intact.
                        </p>
                        <p class="text-gray-700">
                            This is critical for audit trails: even if you archive or delete completed jobs after a certain period, the site's
                            fault history remains accessible for compliance reporting.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'BAFE declaration not appearing on jobsheet',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Jobsheet doesn't show "BAFE Registered Organisation" declaration.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        {
                            step: 'Go to Settings → Company Profile',
                            description: ''
                        },
                        {
                            step: 'Scroll to Accreditations & Credentials',
                            description: ''
                        },
                        {
                            step: 'Check if BAFE SP203 registration number is entered',
                            description: 'If missing, Opscel omits the BAFE declaration (won\'t print blank number)'
                        },
                        {
                            step: 'Enter your BAFE SP203 number and save',
                            description: 'Future jobsheets will include BAFE declaration'
                        }
                    ]
                },
                {
                    title: 'Carried-forward fault not showing in field app',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Engineer can't see faults from previous visit.</p>
                        <p class="mb-4"><strong>Causes:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>First visit to site:</strong> No previous job history yet — fault register is empty until first visit completes</li>
                            <li><strong>All faults resolved:</strong> If all faults were marked resolved on last visit, tile shows "0 open faults"</li>
                            <li><strong>Sync pending:</strong> If previous job hasn't synced yet, faults won't appear (check sync status)</li>
                        </ul>
                    `
                },
                {
                    title: 'Fault not printing on jobsheet',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Resolved fault notes don't appear in Work Carried Out section.</p>
                        <p class="mb-4"><strong>Check:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Resolution note entered:</strong> Did engineer enter resolution notes when marking fault resolved?</li>
                            <li><strong>Fault status:</strong> Only resolved faults print in Work Carried Out (open faults don't print)</li>
                            <li><strong>Sync completed:</strong> Ensure fault resolution synced before generating jobsheet PDF</li>
                        </ul>
                    `
                },
                {
                    title: 'Can\'t find Carried-Forward Faults tile',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Tile not visible in field app.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Vertical check:</strong> Carried-Forward Faults is only visible on Fire Safety vertical jobs</li>
                            <li><strong>Job type:</strong> Ensure job is configured as fire alarm service/inspection type</li>
                            <li><strong>App version:</strong> Update field app to latest version (feature may not be in older builds)</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Do I need to be BAFE registered to use the combined jobsheet?',
                    content: `
                        <p class="text-gray-700">
                            No, but the BAFE declaration will only print if you have a BAFE SP203 registration number entered in company
                            credentials. Without it, you get a BS 5839-1 compliant jobsheet without the BAFE scheme declaration.
                        </p>
                    `
                },
                {
                    title: 'What happens to carried-forward faults if a site changes customer?',
                    content: `
                        <p class="text-gray-700">
                            Faults belong to the <strong>site</strong>, not the customer. If you transfer a site to a different customer record,
                            all fault history moves with the site. The Deficiency Register stays with the site regardless of customer changes.
                        </p>
                    `
                },
                {
                    title: 'Can I see fault history across multiple sites for one customer?',
                    content: `
                        <p class="text-gray-700">
                            Not directly in one view. Fault registers are per-site. To see a customer's overall compliance status, visit each
                            site's detail page. (Feature request: customer-level fault summary is on the roadmap.)
                        </p>
                    `
                },
                {
                    title: 'What\'s the difference between logging a fault and logging a defect?',
                    content: `
                        <p class="text-gray-700">
                            <strong>Carried-Forward Faults:</strong> For tracking ongoing issues at a site across visits (internal record).<br/>
                            <strong>Defects:</strong> For generating remedial quotes from things found on this job (customer-facing).<br/>
                            You can log the same issue in both places if it needs tracking AND quoting.
                        </p>
                    `
                },
                {
                    title: 'What happens if two engineers mark the same fault resolved on different jobs?',
                    content: `
                        <p class="text-gray-700">
                            Opscel's offline sync is built so the same fault being resolved twice doesn't create duplicate or conflicting records —
                            whichever resolution syncs is the one that's kept. If you're relying on cross-engineer coordination for a shared site,
                            it's still worth confirming who's picking up a fault before two people start on it.
                        </p>
                    `
                },
                {
                    title: 'Can office staff resolve a fault without the engineer doing it in the field?',
                    content: `
                        <p class="text-gray-700">
                            Yes. When completing a remedial job that was converted from a quote, the Complete Job screen shows an Originating
                            Deficiency panel with a working Resolve button. It's a legitimate shortcut when office staff know the fault was
                            actually fixed — but the audited, jobsheet-generating path is still the engineer resolving it in the field.
                        </p>
                    `
                },
                {
                    title: 'Do I have to resolve all open faults before I can complete a job?',
                    content: `
                        <p class="text-gray-700">
                            No. Deficiency resolution is not a completion gate — the unresolved count on the Complete Job screen is a nudge,
                            not a block. A job can be completed with faults still open; they'll keep carrying forward to future visits until
                            someone resolves them.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Worksheets & Checklists',
            description: 'Authoring custom worksheets and filling them on site',
            href: '/docs/worksheets'
        },
        {
            title: 'Field Service App',
            description: 'How engineers complete work and capture data on site',
            href: '/docs/field-service'
        },
        {
            title: 'Defects to Quotation',
            description: 'Converting defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Service Contracts',
            description: 'Recurring service automation and fault continuity across visits',
            href: '/docs/service-contracts'
        },
        {
            title: 'Certificates',
            description: 'Fire alarm certificates and compliance documentation',
            href: '/docs/certificates'
        }
    ]
};
