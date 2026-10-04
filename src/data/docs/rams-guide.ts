import { IDocGuide } from '@/types';

const IMG = '/images/docs/rams';

/**
 * A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than
 * shrinking its text. Inline styles, not Tailwind: tailwind.config does not scan src/data, so
 * arbitrary classes like min-w-[720px] here never compile.
 */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div style="overflow-x:auto"><img src="${src}" alt="${alt}" class="w-full rounded-lg border border-border bg-white" style="min-width:720px" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

export const ramsGuide: IDocGuide = {
    slug: 'rams',
    title: 'RAMS — Support Guide',
    description: 'Risk assessments and method statements in Opscel: templates, the RAMS on every job, numbered revisions that never change, each engineer\'s read-and-understood, a reviewed RAMS for every site, and client approval by link or portal.',
    lastUpdated: '2026-10-04',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: '<p class="mb-4">Every job carries its own <strong>RAMS</strong> - the risk assessment and method statement for that piece of work. It starts from the best thing Opscel already knows: the <strong>approved RAMS for that site</strong>, or your template for the type of work. When you send it or the job is completed, Opscel freezes a <strong>numbered revision</strong> with its own PDF, so the copy your customer received never changes afterwards. Each engineer confirms they have <strong>read and understood</strong> that version on their phone, and where a client wants to sign it off first, they can <strong>approve it from a link in the email</strong> - no login.</p>'
                + diagram(`${IMG}/rams-lifecycle.svg`, 'The life of a RAMS: the site RAMS (approved, with a review-by date) gives a new job its starting point; the office adjusts it for this job; Issue RAMS freezes revision 1; Email RAMS sends revision 2 with an optional client approval link; each engineer confirms they have read and understood it; completing the job freezes an At completion copy.', 'From the site\'s reviewed RAMS to the copy frozen at completion.'),
            subsections: [
                {
                    title: 'Availability',
                    content: '<p>The RAMS module is included on the <strong>Business</strong> plan and is switched on per business in <strong>Settings → RAMS</strong>. The basic risk assessment on a job (hazards, persons at risk, PPE, risk level and control measures) is on every plan whether the module is on or off - the module adds method statements, the RAMS document, revisions, engineer sign-off, site RAMS and client approval.</p>',
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#turning-it-on" class="text-primary hover:underline">Turning RAMS on and setting up templates</a>',
                        '<a href="#where-it-comes-from" class="text-primary hover:underline">Where a new job\'s RAMS comes from</a>',
                        '<a href="#revisions-and-sending" class="text-primary hover:underline">Issuing, emailing and the numbered revisions</a>',
                        '<a href="#engineer-sign-off" class="text-primary hover:underline">Each engineer\'s read and understood</a>',
                        '<a href="#site-rams" class="text-primary hover:underline">A RAMS for every site, reviewed every year</a>',
                        '<a href="#client-approval" class="text-primary hover:underline">Client approval</a>',
                    ],
                },
            ],
        },
        {
            id: 'turning-it-on',
            title: 'Turning RAMS On and Setting Up Templates',
            content: '<p class="mb-4">Go to <strong>Settings → RAMS</strong> and switch on <strong>Enable RAMS</strong>. That adds a Method Statement to jobs, the read-and-understood sign-off in the field app, and the <strong>Issue RAMS</strong> and <strong>Email RAMS</strong> buttons on the job.</p>',
            subsections: [
                {
                    title: 'Service type templates',
                    content: '<p class="mb-4">On the same page, give each service type a starting RAMS: the usual <strong>hazards</strong>, your <strong>control measures</strong> and a <strong>method statement</strong>. A new job of that type starts from it, so the office only adjusts what is different about this site.</p>',
                    bullets: [
                        'Write the method statement once, as formatted text - lists, bold, italic and underline all carry through to the PDF.',
                        'Use <code>{{site_name}}</code>, <code>{{site_address}}</code> and <code>{{customer_name}}</code> in your control measures or method statement. Opscel fills them in on each job, so a template can read "Attend {{site_name}} at {{site_address}}" and still be right on every job.',
                        'A template only fills an <strong>empty</strong> risk assessment. Anything someone has already typed on a job is never overwritten.',
                    ],
                },
            ],
        },
        {
            id: 'where-it-comes-from',
            title: 'Where a New Job\'s RAMS Comes From',
            content: '<p class="mb-4">When a job is created - from the Create Job wizard, a converted quote, a service contract visit or a call-out - Opscel fills its RAMS from the most specific source it has. The first match wins:</p>'
                + diagram(`${IMG}/rams-seed-order.svg`, 'Where a new job\'s RAMS comes from, first match wins: anything typed on the job; the approved site RAMS for this service type; the approved site RAMS for all work at this site; the service contract\'s saved RAMS; the service type template; otherwise blank. Only approved site RAMS versions are used, never drafts.', 'Only approved versions of a site RAMS are used. Drafts never are.'),
            subsections: [
                {
                    title: 'In practice',
                    bullets: [
                        '<strong>The Create Job wizard tells you</strong> when the site has an approved RAMS: "This site has an approved RAMS (v2, approved 04 Oct 2026). Leave the risk assessment below blank and the job will start from it." Type into the risk assessment and your version is used instead.',
                        '<strong>Service contract visits</strong> pick up the site\'s approved RAMS too, ahead of the RAMS saved on the contract when it was set up. So when you review a site next year and approve a new version, every visit generated after that uses it - without editing the contract.',
                        '<strong>Approving a new site RAMS never changes existing jobs.</strong> Jobs already created keep the RAMS they started with.',
                        'Merge fields are filled in whichever source wins.',
                    ],
                },
            ],
        },
        {
            id: 'revisions-and-sending',
            title: 'Issuing, Emailing and the Numbered Revisions',
            content: '<p class="mb-4">A job\'s RAMS can be edited until it goes out. The moment it does, Opscel freezes a <strong>revision</strong>: a numbered copy with its own stored PDF, stamped "Revision 3 · Issued 4 October 2026". Later edits never touch it - so you can always show exactly what the customer received, or what applied on the day.</p>',
            subsections: [
                {
                    title: 'The job\'s Risk Assessment card',
                    content: '<p class="mb-4">Everything about the RAMS is on the job\'s <strong>Risk Assessment</strong> card: the content, who has read it, where client approval stands, and every revision with a download. Try the controls on the mockup:</p>',
                    mockup: 'rams-job-card',
                },
                {
                    title: 'When a revision is made',
                    table: {
                        headers: ['What you do', 'Revision label', 'Notes'],
                        rows: [
                            ['<strong>Issue RAMS</strong>', 'Issued', 'Freezes the current RAMS and files the PDF in the job\'s Documents (Health & Safety). Pressing it again with nothing changed reuses the same revision.'],
                            ['<strong>Email RAMS</strong>', 'Emailed', 'Freezes (or reuses) a revision and attaches exactly that PDF. The send is logged in the job\'s Customer notifications as "RAMS emailed".'],
                            ['The job is <strong>completed</strong>', 'At completion', 'An automatic copy as it stood when the work finished - including who had confirmed it. Made when the RAMS module is on, or when the job already has a revision.'],
                        ],
                    },
                },
                {
                    title: 'Good to know',
                    bullets: [
                        '<strong>"Edited since revision 3"</strong> on the card means the RAMS has changed since the last copy went out - send it again if the customer should have the new version. Re-assigning an engineer or moving the visit counts too, because the PDF prints both. Engineers confirming it, or its approval, never count as an edit.',
                        '<strong>Email RAMS</strong> pre-fills the job\'s site contacts. Add or remove recipients, and add a message. Everyone goes on one email so they can reply to all.',
                        'In the <strong>customer portal</strong>, the job page offers the latest revision as a download.',
                        'Your logo and colours are not part of a revision\'s content: changing your branding never creates a new revision.',
                    ],
                },
            ],
        },
        {
            id: 'engineer-sign-off',
            title: 'Each Engineer\'s Read and Understood',
            content: '<p class="mb-4">In the field app, the job\'s <strong>Risk Assessment</strong> page ends with a <strong>Sign-off</strong> card: "Confirm you have read this before starting work". Every engineer on the job confirms for themselves - two engineers no longer share (or overwrite) one tick - and each confirmation is tied to the <strong>version</strong> of the RAMS they read.</p>',
            subsections: [
                {
                    title: 'What the engineer sees',
                    content: '<p class="mb-4">Pick a situation and tap the button:</p>',
                    mockup: 'rams-field-signoff',
                },
                {
                    title: 'How it behaves',
                    bullets: [
                        '<strong>Once confirmed, it stays confirmed.</strong> It is a record, not a setting - there is no untick.',
                        '<strong>No signal?</strong> The confirmation is kept on the phone ("Saved locally - will sync when connected") and sent when the phone is back online, with the time they actually tapped.',
                        '<strong>If the office changes the RAMS</strong> after an engineer confirmed it - a hazard, the control measures, the method statement, the site - they are asked to read it again and confirm. Adding another engineer to the job, or moving the visit, does <em>not</em> ask everyone to confirm again.',
                        '<strong>If the engineer edits the risk assessment themselves</strong>, the button waits until their change has reached the office ("Your changes are on their way to the office. You can confirm once they have synced."), so they always confirm the version the office holds.',
                        'Colleagues who have confirmed are listed underneath: "Also confirmed: Ben Doyle 04 Oct 2026, 08:50".',
                    ],
                },
                {
                    title: 'In the office and on the PDF',
                    content: '<p>The job\'s Risk Assessment card lists every assigned engineer under <strong>Read &amp; understood</strong>: confirmed (with the time), <em>not yet</em>, or <em>read an earlier version</em>. The next revision you issue or email prints them under <strong>Read and understood by</strong>, so the copy the customer holds shows who confirmed it.</p>',
                },
            ],
        },
        {
            id: 'site-rams',
            title: 'A RAMS for Every Site, Reviewed Every Year',
            content: '<p class="mb-4">Trade schemes such as CHAS and SafeContractor expect a <strong>site-specific</strong> RAMS, approved by someone competent and reviewed at least every 12 months. Every site in Opscel has a <strong>RAMS</strong> tab for exactly that (with the RAMS module on).</p>',
            subsections: [
                {
                    title: 'Adding a site RAMS',
                    steps: [
                        'Open the site and go to the <strong>RAMS</strong> tab. Click <strong>Add site RAMS</strong>.',
                        'Choose what it <strong>covers</strong>: one service type (for example Fire Alarm Service), or <strong>All work at this site</strong>.',
                        'Choose where to <strong>start from</strong>: the service type\'s RAMS template, or <strong>Start blank</strong>.',
                        'Edit it - hazards, persons at risk, PPE, risk level, control measures and method statement - and save. It is a <strong>Draft</strong> until it is approved.',
                        'Click <strong>Approve</strong>: pick the <strong>review-by date</strong> (12 months ahead by default) and save. It is now <strong>Approved v1</strong> - and new jobs at the site start from it.',
                    ],
                },
                {
                    title: 'Next year: review it',
                    content: '<p class="mb-4">Edit the site RAMS - the card shows <strong>Changes not approved</strong> while your edits are waiting - then <strong>Approve</strong> again. That makes <strong>version 2</strong>, and from version 2 a <strong>change note</strong> is required. If nothing changed, approve it anyway with a note like "Reviewed, no changes": that records the annual review.</p>',
                    bullets: [
                        'Every approved version is kept. <strong>Version history</strong> shows who approved each one, when, the review-by date and the change note, and opens a read-only copy.',
                        'The status on each card: <strong>Draft</strong>, <strong>Approved vN</strong>, <strong>Review due</strong> (within 30 days of the review-by date) or <strong>Review overdue</strong>. The tab\'s badge counts the ones due or overdue.',
                        'Thirty days before a review-by date, Opscel emails your company address a list of the site RAMS due for review - once per version.',
                        '<strong>Archive</strong> takes a site RAMS out of use; its versions are kept.',
                    ],
                },
                {
                    title: 'Who can do what',
                    content: '<p>Admins, Contract Managers and Site Managers can add, edit, approve and archive site RAMS. Anyone who can see jobs can read them. The person who edits a site RAMS can also approve it - the version records who approved it.</p>',
                },
                {
                    title: 'Things that protect a site RAMS',
                    bullets: [
                        'A site that has a site RAMS (even an archived one) can\'t be deleted - it is a safety record.',
                        'A service type used by a site RAMS is <strong>deactivated</strong> rather than deleted, so a fire alarm RAMS can never quietly turn into a RAMS for all work at the site.',
                        'If two people edit the same site RAMS at once, the second save is refused with "changed by someone else" - reload and try again - rather than overwriting.',
                    ],
                },
            ],
        },
        {
            id: 'client-approval',
            title: 'Client Approval',
            content: '<p class="mb-4">Some clients - NHS estates, universities, facilities managers, principal contractors - want to approve a contractor\'s RAMS before work starts. That is a contract requirement, not the law, and it differs from client to client and site to site, so Opscel lets you set it where it applies and ask for it when you send the RAMS.</p>',
            subsections: [
                {
                    title: 'Set who requires it',
                    bullets: [
                        '<strong>On the customer:</strong> a <strong>RAMS approval</strong> card - switch on <strong>This client requires RAMS approval</strong> and set the <strong>Lead time (working days)</strong> they want it before a visit. Leave the lead time blank for the business default (5 working days).',
                        '<strong>On a site:</strong> <strong>RAMS approval at this site</strong> - <em>Inherit</em> (follow the customer), <em>Required</em> or <em>Not required</em>. For the strict hospital site under an otherwise relaxed client, or the other way round.',
                        'Admins, Contract Managers and Site Managers can change these settings.',
                    ],
                },
                {
                    title: 'Ask for it when you send',
                    content: '<p class="mb-4">In <strong>Email RAMS</strong>, <strong>Request client approval</strong> is ticked for you when the customer or site requires it. The email then carries a <strong>Review and respond</strong> button and, when the job has a visit booked, "please respond by" a date that allows for the lead time.</p>',
                    bullets: [
                        'If the next visit is closer than the client\'s lead time, the dialog warns you: "The next visit is on 09 Oct 2026, 3 working days away - the client asks for 5."',
                        '<strong>Not asking this time?</strong> Untick it and say why - for example "Emergency call-out". The reason is kept on the job: <em>Approval not requested (Rev 3): Emergency call-out</em>.',
                        '<strong>Already approved?</strong> Resending the same revision is just a resend - nothing to ask again.',
                        '<strong>Rejected?</strong> Change the RAMS so a new revision is issued, then send it with approval requested again.',
                        'Every email gets its own link. Sending to someone you forgot never stops the first person\'s link working.',
                    ],
                },
                {
                    title: 'What the client sees',
                    content: '<p class="mb-4">The link opens a page with no login: the job, the site, the revision and its PDF, and three choices - the same as the "A / B / C" codes principal contractors use. Try it:</p>',
                    mockup: 'rams-client-approval',
                },
                {
                    title: 'After they answer',
                    bullets: [
                        'The person who sent the RAMS gets an email with the answer and any comments (or your company address, if Opscel can\'t find theirs).',
                        'The job\'s Risk Assessment card shows it: <em>Approved by Dana Hughes on 06 Oct 2026 (Rev 3)</em>, the comments, or <em>Rejected (Rev 3) … - revise the RAMS and send it again</em>.',
                        'Each request can be answered once. If a colleague already answered, the page says so. If you have since sent a newer revision, the old link says "A newer version of this RAMS has been sent - please use the link in the latest email".',
                        '<strong>Customer portal:</strong> customers can also answer on the job page in the portal, once the job is scheduled.',
                    ],
                },
                {
                    title: 'It is a reminder, never a block',
                    content: '<p>Nothing in Opscel stops you scheduling a job, or an engineer checking in, because a RAMS is not approved. The client controls access to their site; Opscel makes sure you know where you stand and that the request and the answer are on record.</p>',
                },
            ],
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Does the law require a method statement or client approval?',
                    content: '<p>No. The law (the Management of Health and Safety at Work Regulations and, for most maintenance of electrical and fire systems, CDM 2015) requires you to assess the risks, record the significant findings and give your workers the information they need. A written method statement, an engineer\'s signature and client approval are how the industry shows that was done - trade schemes, principal contractors and clients ask for them.</p>',
                },
                {
                    title: 'I edited a job\'s RAMS after sending it. What did the customer get?',
                    content: '<p>Exactly the revision you sent - it is stored with its own PDF and never changes. The card shows "Edited since revision N" until you send the new version.</p>',
                },
                {
                    title: 'An engineer confirmed, then we added a hazard. Is their confirmation still valid?',
                    content: '<p>They confirmed the earlier version. The office card shows them as "read an earlier version", and their phone asks them to read it again and confirm.</p>',
                },
                {
                    title: 'We approved a new version of a site RAMS. Do this week\'s jobs change?',
                    content: '<p>No. Jobs already created keep the RAMS they started with. New jobs, including service contract visits generated from now on, start from the new version.</p>',
                },
                {
                    title: 'Can a client approve without an account?',
                    content: '<p>Yes - the link in the email is all they need. Customers who use the portal can also answer from the job page once the job is scheduled.</p>',
                },
                {
                    title: 'Does the lead time count bank holidays?',
                    content: '<p>It counts Monday to Friday and doesn\'t know about bank holidays, so allow for them around Christmas and Easter.</p>',
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Jobs',
            description: 'Creating jobs and the job page',
            href: '/docs/jobs',
        },
        {
            title: 'Field Service App',
            description: 'What engineers see on site, online or offline',
            href: '/docs/field-service',
        },
        {
            title: 'Customer Portal',
            description: 'What your customers see and download',
            href: '/docs/customer-portal',
        },
        {
            title: 'Service Contracts',
            description: 'Recurring visits that pick up the site RAMS',
            href: '/docs/service-contracts',
        },
    ],
};
