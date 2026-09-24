import { IDocGuide } from '@/types';

const DEF = '/images/docs/defects';

/** A flow diagram: keeps a readable minimum width and scrolls sideways on a phone rather than shrinking its text. */
const diagram = (src: string, alt: string, caption?: string) =>
    `<figure class="my-8"><div class="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><img src="${src}" alt="${alt}" class="w-full min-w-[720px] rounded-lg border border-border bg-white" loading="lazy" /></div>${caption ? `<figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption>` : ''}</figure>`;

const amber = (html: string) =>
    `<div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-4"><p class="text-amber-800">${html}</p></div>`;

const blue = (html: string) =>
    `<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4"><p class="text-blue-900">${html}</p></div>`;

export const remedialScopeOfWorksGuide: IDocGuide = {
    slug: 'remedial-scope-of-works',
    title: 'Remedial Scope of Works - Complete Guide',
    description: 'How a defect found on site becomes a priced remedial quote: the engineer logs it, an internal office-only Remedial Scope of Works sheet attaches itself and stays in step with the job\'s defects, and the office turns it into one bundled quote.',
    lastUpdated: '2026-09-24',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: `
                <p class="mb-4">
                    Engineers find things that need fixing on almost every visit. When an engineer logs a defect that is <strong>Major</strong> or <strong>Critical</strong>, or ticks <strong>"Quote required for remedial work"</strong>, a draft <strong>Remedial Scope of Works</strong> sheet attaches itself to the job. Its <strong>Defects in Scope</strong> list is a live view of the job's defects, so it keeps up on its own as defects are logged, edited or removed. The engineer adds a short "Details of works required" summary and marks the sheet complete; the office then turns it into one bundled quote, with parts and labour already priced from each defect.
                </p>
                <p class="mb-4">
                    The sheet is an <strong>internal, office-only document</strong>. The customer never sees or signs it - they see and accept the priced quote it produces.
                </p>
            `
                + diagram(
                    `${DEF}/defect-lifecycle.svg`,
                    'The journey of a defect: an engineer logs it on the job in the field app, or the office adds it from the job\'s Overview with Add defect on any job status; it shows up on the job\'s Defects card, the site\'s defect register and the job sheet PDF; a Major or Critical or Quote required defect gets a draft Remedial Scope of Works sheet; the office creates a bundled quote, the accepted quote becomes a remedial job, the fault is fixed there and the defect is marked resolved in the register. A separate side branch for a defect raised by mistake: whoever raised it, or the office, deletes it, and it is gone from the job, its job sheets and the register; photos, if included, go to Recently deleted for 30 days, and an empty scope sheet created for it is removed too.',
                    'One road to a fix, and a side door for a defect raised by mistake.'
                )
                + blue('This guide covers the <strong>worksheet path</strong>. There is also a quicker <strong>dashboard path</strong> that skips the worksheet and quotes straight from a job\'s defects - see the <a href="/docs/defects-to-quotation" class="underline hover:no-underline">Defects to Quotation guide</a>, or the <a href="#two-paths" class="underline hover:no-underline">Two Paths</a> section below for when to use each.'),
            subsections: [
                {
                    title: 'What customers tell us',
                    content: '',
                    bullets: [
                        '5-10 minutes saved per quote at the office desk (no line-item retyping)',
                        'Zero defects lost between site visit and quote',
                        'Audit trail intact - every defect tied to its quote, every quote tied to its source visit'
                    ]
                },
                {
                    title: 'Key Features',
                    content: '',
                    bullets: [
                        '<strong>Attaches itself</strong> - the first Major, Critical or "Quote required" defect on a job attaches a draft sheet. No manual setup.',
                        '<strong>Always in step with the defects</strong> - the draft sheet\'s Defects in Scope list is live. There is no refresh button to remember.',
                        '<strong>Edit in one place</strong> - Add defect and Edit on the sheet write straight to the job\'s defects, so the two never disagree.',
                        '<strong>Internal, office-only</strong> - no customer signature; parts and a time estimate are captured per defect, not once for the whole sheet.',
                        '<strong>One-click quote</strong> - the office generates a bundled quote with a heading line, catalogue-priced part lines and a labour line for each defect.'
                    ]
                }
            ]
        },
        {
            id: 'two-paths',
            title: 'Two Paths for Creating Remedial Quotes',
            content: `
                <p class="mb-6">
                    Opscel offers two ways to turn defects into customer quotes. Both are current, and both build the quote the same way - the difference is whether an engineer writes a scope summary first.
                </p>
            `,
            table: {
                headers: ['Aspect', 'Path A: Dashboard Widget', 'Path B: Worksheet (This Guide)'],
                rows: [
                    ['Where', 'Dashboard → "Jobs Pending Remedial Quotes" → <strong>Quote</strong> on a job', 'Job page → Documents tab → the completed Remedial Scope of Works row'],
                    ['What it quotes', 'The job\'s open, unquoted, in-scope defects', 'The job\'s open, unquoted, in-scope defects, read at the moment you click'],
                    ['Engineer involvement', 'None beyond logging the defects', 'Engineer writes "Details of works required" and marks the sheet complete'],
                    ['Speed', 'Faster - one click from the dashboard', 'Slower - the sheet has to be completed first'],
                    ['Quote lines', 'Per defect: a £0 heading line, priced part lines, a labour line', 'The same'],
                    ['Quote title', '"Remedial Work - &lt;job number&gt;"', 'The first line of "Details of works required" (up to 80 characters), or "Remedial Work - &lt;job number&gt;" if it is blank'],
                    ['Best for', 'Straightforward remedial work where the defects speak for themselves', 'Jobs where the office wants the engineer\'s written scope before pricing'],
                    ['Documentation', '<a href="/docs/defects-to-quotation" class="text-blue-600 hover:underline">Defects to Quotation Guide</a>', 'This guide']
                ]
            },
            subsections: [
                {
                    title: 'What Happens Automatically vs. Manually',
                    content: '<p class="mb-4">Knowing which parts the system does for you avoids most of the confusion:</p>',
                    table: {
                        headers: ['Action', 'Automatic', 'Manual'],
                        rows: [
                            ['Remedial Scope sheet attached', '✅ when a Major, Critical or "Quote required" defect is logged and the job has no draft scope sheet', ''],
                            ['Defects in Scope list kept up to date', '✅ live, while the sheet is a draft', ''],
                            ['"Details of works required" summary', '', '✅ engineer (or office) writes it'],
                            ['Sheet marked complete', '', '✅ engineer or office'],
                            ['Bundled quote created', '', '✅ office clicks the quote button'],
                            ['Part and labour prices on the quote', '✅ from your product catalogue and default labour rate', '✅ office reviews and adjusts before sending'],
                            ['Job leaves the "Jobs Pending Remedial Quotes" widget', '✅ once its in-scope defects are quoted', '']
                        ]
                    }
                },
                {
                    title: 'Quotes Are Never Created Automatically',
                    content: amber('<strong>The sheet attaches itself, but the quote does not.</strong> That is deliberate: engineers don\'t set prices, and the office needs to review the scope before committing to a number. Someone with quote permission has to click the button - the lines are pre-filled when they do.')
                },
                {
                    title: 'What Triggers the Sheet',
                    content: 'A draft Remedial Scope of Works sheet attaches when a defect is saved that is:',
                    bullets: [
                        'Severity <strong>Major</strong> or <strong>Critical</strong>, whether or not "Quote required" is ticked, or',
                        'Any severity with <strong>"Quote required for remedial work"</strong> ticked',
                        'If the job already has a <strong>draft</strong> scope sheet, the defect simply appears on that one - no second draft is created',
                        'If the job\'s scope sheet is already <strong>completed</strong>, the next qualifying defect gets a <strong>fresh draft</strong> sheet (see <a href="#multiple-worksheets" class="text-blue-600 hover:underline">Multiple Worksheets</a>)'
                    ]
                }
            ]
        },
        {
            id: 'the-problem',
            title: 'The Problem',
            content: `
                <p class="mb-4">
                    A typical fire alarm service visit turns up 3-8 things the customer needs to quote for. Today most contractors handle this with paper forms, photos in WhatsApp, and a Monday-morning game of "did anyone email the office about that Tate Modern job?"
                </p>
                <p class="mb-6">
                    The cost is real: defects fall between visits, quotes go out late (or never), and engineers spend 20 minutes after every job re-typing what they already wrote on a clipboard.
                </p>
            `
        },
        {
            id: 'how-it-works',
            title: 'How It Works: The 4-Step Flow',
            content: `
                <p class="mb-6">
                    Four steps bridge the field and the office. Only the last one needs someone with quote permission.
                </p>
            `,
            subsections: [
                {
                    title: 'Step 1: Log the Defects',
                    content: 'During a visit (a fire alarm service, an EICR and so on) the engineer finds issues that need remedial work.',
                    bullets: [
                        'Open the job in the field app and go to <strong>Defects</strong>',
                        'Log each defect with its severity - <strong>Observation</strong> (advisory only), <strong>Minor</strong> (next routine visit), <strong>Major</strong> (within 28 days) or <strong>Critical</strong> (immediate action) - plus location, description and photos',
                        'Tick "Quote required for remedial work" where a quote is needed. Major and Critical defects bring the sheet in without it.',
                        'For a Major, Critical or quote-required defect, add the <strong>parts</strong> it will need and a <strong>time estimate</strong> (hours, number of engineers, normal or out-of-hours). The office prices these; the customer never sees them.',
                        'The office can add defects too, from the job\'s Overview → Defects card → <strong>Add defect</strong>, on any job status - including a completed job'
                    ]
                },
                {
                    title: 'Step 2: The Sheet Attaches Itself',
                    content: 'As soon as the first qualifying defect is saved, a "Remedial Scope of Works" sheet appears in the job\'s sheets as a <strong>draft</strong>.',
                    bullets: [
                        'In the field app the engineer sees "Defect added - complete the Remedial Scope sheet so the office can quote"; tapping it opens the sheet',
                        'Its Defects in Scope list already shows the defect, and every later in-scope defect on the job joins it on its own',
                        'The job also appears on the dashboard\'s <strong>"Jobs Pending Remedial Quotes"</strong> widget'
                    ]
                },
                {
                    title: 'Step 3: Scope It (Internal, Office-Only)',
                    content: 'The engineer opens the sheet, checks the defects in scope and completes it. The customer never sees or signs this sheet.',
                    bullets: [
                        'Check each defect card; use <strong>Edit</strong> to correct one, or <strong>Remove from scope</strong> to drop one that doesn\'t belong in this quote',
                        'Write the <strong>"Details of works required"</strong> summary - the office uses it to build the quote, and its first line becomes the quote title',
                        'Add anything else the office should know under "Any other information to consider"',
                        'Mark the sheet complete'
                    ]
                },
                {
                    title: 'Step 4: The Office Generates the Bundled Quote',
                    content: 'Once the sheet is complete, someone with quote permission creates the quote from it.',
                    bullets: [
                        'Job page → <strong>Documents</strong> tab → hover over the completed Remedial Scope of Works row',
                        'Click the small receipt icon, <strong>"Generate bundled quote from this scope"</strong>',
                        'A draft quote is created covering the job\'s open, unquoted, in-scope defects',
                        'Review the prices, adjust, and send it to the customer',
                        'The sheet row now shows a link icon, <strong>"View linked quote"</strong>, in place of the receipt icon'
                    ]
                }
            ]
        },
        {
            id: 'engineer-workflow',
            title: 'For Engineers: Using the Field Worksheet',
            content: 'The field app gives engineers everything they need to scope remedial work on site.',
            subsections: [
                {
                    title: 'Accessing the Worksheet',
                    content: 'When you log a Major or Critical defect, or tick "Quote required", the sheet is attached for you:',
                    steps: [
                        { step: 'Tap the "Defect added" message to jump straight to the sheet, or', description: '' },
                        { step: 'Open the job in the field app and go to its job sheets', description: '' },
                        { step: 'Look for "Remedial Scope of Works" in draft', description: '' },
                        { step: 'Tap to open', description: '' }
                    ]
                },
                {
                    title: 'The Defects in Scope Section',
                    content: '<p class="mb-4">Every in-scope defect on the job appears here as a <strong>card</strong>, most serious first. Each card shows:</p>',
                    bullets: [
                        'The severity (Critical, Major, Minor or Observation), and a <strong>Quoted</strong> pill once the defect is on a quote',
                        'A summary - the description, plus the recommended action if there is one',
                        'The location',
                        'Up to four photo thumbnails',
                        'The time estimate (hours, engineers, normal or out-of-hours) and the parts, when the defect has them',
                        '<strong>Edit</strong> opens the full defect form. Your change is saved to the defect itself, so the job\'s Defects list and this sheet always agree.',
                        '<strong>Remove from scope</strong> takes the defect off this list only - it stays on the job (see <a href="#scope-in-step" class="text-blue-600 hover:underline">Keeping the Scope in Step</a>)',
                        '<strong>Add defect</strong>, below the cards, logs a new defect on the job straight from the sheet'
                    ]
                },
                {
                    title: 'Adding Parts to a Defect',
                    content: '<p>For a Major, Critical or quote-required defect, the defect form has a <strong>Parts</strong> section. The catalogue stays closed until you tap <strong>"Add a part"</strong>, so the form doesn\'t jump about while it loads. Only parts are listed - labour and service items are not offered as defect parts, because labour comes from the time estimate. Adding and editing defects works offline and syncs when you reconnect.</p>'
                },
                {
                    title: 'Completing the Worksheet',
                    content: 'There is no customer sign-off on this sheet. Before it can be marked complete it needs:',
                    bullets: [
                        '<strong>Details of works required</strong> - a free-text summary of the remedial work for the office to quote',
                        'At least one defect in scope',
                        'Optional: <strong>Any other information to consider</strong> - access constraints, parts to verify and so on',
                        'Then tap <strong>Mark Complete</strong>. A completed sheet\'s list is fixed as it stood, and it no longer offers Add defect, Edit or Remove from scope.'
                    ]
                },
                {
                    title: 'Best Practices for Engineers',
                    content: '',
                    bullets: [
                        'Be specific in the defect description - it becomes the heading line on the customer\'s quote',
                        'Always fill in the location (e.g. "Panel B / Zone 4") so the office can find the item',
                        'Set severity accurately - it decides whether the sheet is triggered, and it heads each defect\'s line on the quote',
                        'Add a time estimate to each defect - without one, the quote has no labour line for it',
                        'Found something after you marked the sheet complete? Log it as normal. It gets a fresh draft sheet, and if the office hasn\'t generated the quote yet it is included anyway (see <a href="#troubleshooting" class="text-blue-600 hover:underline">Troubleshooting</a>)'
                    ]
                }
            ]
        },
        {
            id: 'office-workflow',
            title: 'For Office: Generating Bundled Quotes',
            content: 'Office staff turn a completed Remedial Scope sheet into a priced quote with one click.',
            subsections: [
                {
                    title: 'Finding Completed Worksheets',
                    content: 'Completed Remedial Scope of Works sheets are listed on the job page:',
                    steps: [
                        { step: 'Open the job', description: '' },
                        { step: 'Go to the Documents tab', description: '' },
                        { step: 'Find the "Remedial Scope of Works" row marked completed', description: '' },
                        { step: 'Hover over the row - a small receipt icon, "Generate bundled quote from this scope", appears beside it', description: 'It only shows for users who can create quotes.' }
                    ]
                },
                {
                    title: 'Generating the Quote',
                    content: 'Clicking the receipt icon creates one draft quote. At that moment it reads the job\'s <strong>live</strong> defects - every open, unquoted, in-scope defect - so a defect logged after the sheet was completed is included too.',
                    steps: [
                        { step: 'A new draft quote is created, numbered QT-YYYY-NNNN', description: '' },
                        { step: 'Title: the first line of "Details of works required" (up to 80 characters), or "Remedial Work - <job number>" if that is blank', description: 'The summary and "Any other information to consider" are also copied into the quote\'s internal notes.' },
                        { step: 'For each defect: a £0 heading line with its severity and description', description: 'For example "[MAJOR] – Smoke detector clogged", with the location and recommended action underneath.' },
                        { step: 'Then a line for each of its parts, priced from your product catalogue', description: 'A part typed in by hand, or one no longer in the catalogue, comes in at £0 for you to price.' },
                        { step: 'Then a labour line: hours × engineers at your default labour rate', description: 'Only when the defect has a time estimate.' },
                        { step: 'Open the quote from Quotations, or with "View linked quote" on the sheet row, to review it', description: '' }
                    ]
                },
                {
                    title: 'Worksheet Status After Quoting',
                    content: '',
                    bullets: [
                        'The receipt icon on the sheet row is replaced by a link icon, <strong>"View linked quote"</strong>, that opens the quote',
                        'Each quoted defect shows a <strong>Quoted</strong> pill on any draft scope sheet and a quote badge on the job\'s Defects card',
                        'A sheet can be quoted once - a second attempt is refused'
                    ]
                },
                {
                    title: 'Editing and Sending the Quote',
                    content: 'The generated quote is a starting point. Before sending:',
                    bullets: [
                        'Check the part prices and the labour line; price anything that came in at £0',
                        'Add, remove or regroup lines as you see fit',
                        'Set payment terms, validity and notes',
                        'Preview the customer-facing PDF',
                        'Send it to the customer by email or portal link'
                    ]
                },
                {
                    title: 'Best Practices for Office Staff',
                    content: '',
                    bullets: [
                        'Read the "Details of works required" before generating - it sets the quote title',
                        'Glance at the defect cards while the sheet is still a draft: anything that shouldn\'t be quoted this time can be taken off with Remove from scope',
                        'Allow for access requirements and contingency the estimate may not cover',
                        'Use consistent pricing for similar defect types'
                    ]
                }
            ]
        },
        {
            id: 'scope-in-step',
            title: 'Keeping the Scope in Step with Defects',
            content: '<p class="mb-4">A draft Remedial Scope sheet doesn\'t hold its own copy of the defects - its Defects in Scope list is a <strong>live view of the job\'s defects</strong>. Anything logged, edited or resolved on the job shows up on the sheet, in the office and on the phone. There is no refresh button, and nothing to keep in sync by hand.</p>',
            subsections: [
                {
                    title: 'Add defect and Edit Write Straight to the Defect',
                    bullets: [
                        '<strong>Add defect</strong> on the sheet creates a real defect on the job - it appears on the job\'s Defects card and the site\'s defect register as well as on the sheet',
                        '<strong>Edit</strong> opens the same defect form the field app uses, photos, parts and time estimate included, and saves to the defect itself',
                        'Both are available while the sheet is a <strong>draft</strong>, in the office and in the field app; in the field they also work offline',
                        'A defect that is <strong>resolved</strong> drops off the list; one already on a quote stays, with a <strong>Quoted</strong> pill'
                    ]
                },
                {
                    title: 'Remove from Scope vs Delete Defect',
                    content: '<p class="mb-4">These two look as if they might do the same thing. They don\'t.</p>'
                        + diagram(
                            `${DEF}/remove-vs-delete.svg`,
                            'Two options for a defect on a Remedial Scope sheet: Remove from scope, a grey button on each defect\'s scope row, keeps the defect on the job\'s Defects card, tagged Removed from remedial scope, and on the site\'s defect register, and only takes it off the scope list; Delete defect, a red button reached by editing the defect, erases it from the job, its job sheets and the site\'s defect register, while the audit log keeps a full copy. Use Remove when the defect is real but doesn\'t belong in this scope; use Delete when it was raised by mistake.',
                            'Remove from scope keeps the defect; Delete defect erases a mistake.'
                        )
                },
                {
                    mockup: 'scope-remove-vs-delete'
                },
                {
                    table: {
                        headers: ['', 'Remove from scope', 'Delete defect'],
                        rows: [
                            ['Where', 'Grey button with a list icon under each defect card', 'Red button at the foot of the defect form (Edit → Delete defect)'],
                            ['What happens to the defect', 'Stays on the job\'s Defects card, tagged <strong>"Removed from remedial scope"</strong>, and on the site\'s defect register', 'Erased from the job, its job sheets and the site\'s defect register. The audit log keeps a full copy.'],
                            ['On the quote', 'Left out of the bundled quote', 'Gone - there is nothing left to quote'],
                            ['Use it when', 'The defect is real, but doesn\'t belong in this quote', 'It was raised by mistake - the wrong job, or a duplicate'],
                            ['Can it be undone?', 'The defect is still on the job', 'No. The defect itself can\'t be restored. Its photos, if you ticked to delete them too, can be restored from the job\'s Photos → Recently deleted for 30 days.']
                        ]
                    }
                },
                {
                    title: 'Where Delete Defect Is Offered',
                    bullets: [
                        '<strong>Office scope editor</strong> - Edit on a defect card, then Delete defect. Only on a draft sheet, only for a defect that isn\'t on a quote, and only for Super Admin, Admin and Site Manager.',
                        '<strong>Office job page</strong> - Overview → Defects card, with the bin icon on the row or Edit → Delete defect. Here the person who raised the defect can delete it too.',
                        '<strong>Field app</strong> - the Remedial Scope sheet\'s Edit has <strong>no</strong> Delete. Open the defect on the job\'s <strong>Defects</strong> screen and choose Delete defect there. Engineers can delete defects they raised themselves; deleting needs a connection.'
                    ]
                },
                {
                    title: 'When the Last Defect Goes, So Does the Empty Sheet',
                    content: '<p class="mb-4">If you delete a defect that was in scope, no in-scope defect is left on the job, and the draft scope sheet was the one <strong>attached automatically</strong> for these defects, that now-empty sheet is removed too - so it isn\'t left on the job waiting to be completed. The message after deleting says "its empty Remedial Scope sheet was removed too (it can be restored from Deleted sheets)". Restore it from the job\'s Documents tab → <strong>Deleted sheets</strong> within 30 days.</p>'
                        + amber('<strong>A scope sheet is never removed this way if</strong> the office attached it on purpose (from a job template or by assigning it by hand), anyone has typed into it, it has been completed, or it has been quoted. Removing a defect from scope never removes a sheet - only deleting one can.')
                }
            ]
        },
        {
            id: 'lifecycle',
            title: 'Worksheet and Quote Lifecycle',
            content: 'Understanding the status flow helps coordinate the field and the office.',
            table: {
                headers: ['Status', 'What It Means', 'Who Can Change It', 'Next Action'],
                rows: [
                    ['Draft (sheet)', 'Attached when the first in-scope defect was logged. The Defects in Scope list is live.', 'Anyone with job-edit rights: engineers and office', 'Write the scope summary and mark complete'],
                    ['Completed (sheet)', 'Scoping is finished; the list on the sheet is fixed as it stood', 'Revert it to draft to make changes', 'Generate the bundled quote'],
                    ['Quoted (sheet)', 'A completed sheet linked to its quote ("View linked quote")', 'Can\'t be quoted again', 'Send the quote'],
                    ['Draft (quote)', 'Generated, not yet sent', 'Office', 'Check prices and send to the customer'],
                    ['Sent (quote)', 'The customer has it', 'Office (revisions allowed)', 'Wait for the customer\'s answer'],
                    ['Accepted (quote)', 'The customer approved it', '-', 'Schedule the remedial work; mark each defect resolved once it is fixed']
                ]
            }
        },
        {
            id: 'multiple-worksheets',
            title: 'Multiple Worksheets and Quotes',
            content: 'A job can end up with more than one Remedial Scope of Works sheet over its life.',
            subsections: [
                {
                    title: 'How a Second Sheet Appears',
                    content: '',
                    bullets: [
                        'While a <strong>draft</strong> scope sheet exists on the job, every new in-scope defect joins it - you never get two drafts side by side',
                        'Once that sheet is <strong>completed</strong>, the next Major, Critical or "Quote required" defect attaches a <strong>fresh draft</strong> sheet for the next round of quoting',
                        'Typical case: the first visit is scoped and quoted, and a return visit finds more'
                    ]
                },
                {
                    title: 'Important Notes',
                    content: '',
                    bullets: [
                        'Each sheet can be quoted once',
                        'A quote generated from a sheet includes every open, unquoted, in-scope defect on the job at that moment - including any showing on a newer draft sheet. Those defects then show as Quoted on the draft.',
                        'A defect that is already on a quote is never added to a second bundled quote'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Worksheet Not Appearing',
                    content: '',
                    bullets: [
                        'Check the defect is Major or Critical, or has "Quote required for remedial work" ticked - Observation and Minor defects without the tick don\'t trigger a sheet',
                        'If the job already has a draft scope sheet, the defect has joined that one rather than creating another',
                        'If the job\'s scope sheet vanished after a defect was deleted, it was the empty auto-attached sheet - restore it from Documents → Deleted sheets within 30 days',
                        'Job status doesn\'t matter: a qualifying defect attaches a sheet on any job, and the office can add defects to a completed job'
                    ]
                },
                {
                    title: 'Generate Quote Button Not Showing',
                    content: '',
                    bullets: [
                        'The sheet must be <strong>completed</strong>, not draft',
                        'The sheet must not already be linked to a quote - if it is, you\'ll see the "View linked quote" link icon instead',
                        'Hover over the row - the receipt icon is small and only appears on hover',
                        'Check your role: it needs quote-creation access (Super Admin, Admin, Accounts, Contract Manager or Sales Manager). Site Manager and Engineer can complete the sheet but can\'t generate the quote from it.'
                    ]
                },
                {
                    title: '"No defects pending quotes on this job"',
                    content: '<p>Every in-scope defect on the job is already quoted, resolved or removed from scope, so there is nothing left for a new quote to include.</p>'
                },
                {
                    title: 'A Defect Is Missing from the Scope',
                    content: '',
                    bullets: [
                        'It may have been taken off with <strong>Remove from scope</strong> - on the job\'s Defects card it is tagged "Removed from remedial scope"',
                        'It is Observation or Minor without "Quote required" ticked',
                        'It has been resolved',
                        'It was logged on a different job',
                        'The sheet is completed - a completed sheet\'s list is fixed. The defect still gets a fresh draft sheet, and is still included if the quote hasn\'t been generated yet.'
                    ]
                },
                {
                    title: 'The Quote Has Defects the Completed Sheet Doesn\'t List',
                    content: '',
                    bullets: [
                        'Expected: the quote reads the job\'s live in-scope defects when you click, not the list fixed on the completed sheet',
                        'So a defect logged after the sheet was completed is included, as long as it is open and not already quoted',
                        'Don\'t want it on this quote? Remove its lines from the quote, or take it off the draft sheet with Remove from scope before generating'
                    ]
                },
                {
                    title: 'Can\'t Delete a Defect',
                    content: '<p class="mb-4">Delete is for a defect raised by mistake, and it is only allowed while nothing else depends on the defect. The app says why when it refuses:</p>',
                    bullets: [
                        '<strong>No Delete option at all</strong> - you didn\'t raise it and your role can\'t delete other people\'s defects. Only the person who raised it, or a Super Admin, Admin or Site Manager, can.',
                        '<strong>It\'s resolved</strong> - resolved defects are part of the site\'s history and show Re-open instead. Re-open it first if it was raised by mistake.',
                        '<strong>It\'s on a quote</strong> - "This defect is on QT-.... Remove it from the quote first."',
                        '<strong>A remedial job has been raised for it</strong> - it can\'t be deleted',
                        '<strong>It was raised from an alarm-monitoring case</strong> - it can\'t be deleted here',
                        '<strong>It\'s recorded on a completed Remedial Scope sheet</strong> - "Revert that sheet to draft first, then delete the defect."',
                        '<strong>You\'re offline</strong> - deleting needs a connection; try again once you\'re back online',
                        '<strong>On the phone, a change to it is still waiting to sync</strong> - delete it once it has synced',
                        '<strong>You\'re on the Remedial Scope sheet in the field app</strong> - there is no Delete there; use the job\'s Defects screen'
                    ]
                },
                {
                    content: amber('<strong>Logged it on the wrong job?</strong> There is no "move defect". Delete it from the wrong job and add it again on the right one - the office can add it from that job\'s Overview → Defects card → Add defect, even if the job is completed.')
                }
            ]
        },
        {
            id: 'permissions',
            title: 'Permissions and Roles',
            content: '<p class="mb-4">This sheet\'s actions ride two permissions: <code>jobs.edit</code> for logging defects and working the sheet, and <code>quotes.create</code>/<code>quotes.view</code> for the bundled quote it produces. That split is why some roles can complete the sheet but not raise the quote from it, and vice versa. Deleting a defect has its own rule: the person who raised it, or anyone holding <code>jobs.delete</code>.</p>',
            table: {
                headers: ['Action', 'Super Admin', 'Admin', 'Accounts', 'Contract Manager', 'Sales Manager', 'Site Manager', 'Engineer', 'Viewer'],
                rows: [
                    ['Log defects / create &amp; edit the sheet', '✅', '✅', '❌', '✅', '❌', '✅', '✅', '❌'],
                    ['Mark the sheet complete', '✅', '✅', '❌', '✅', '❌', '✅', '✅', '❌'],
                    ['Delete a defect', '✅ any', '✅ any', '❌', 'Own only', '❌', '✅ any', 'Own only', '❌'],
                    ['Generate bundled quote', '✅', '✅', '✅', '✅', '✅', '❌', '❌', '❌'],
                    ['View sheets', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '❌'],
                    ['View the resulting quote', '✅', '✅', '✅', '✅', '✅', '❌', '❌', '✅']
                ]
            },
            subsections: [
                {
                    title: 'Role Notes',
                    content: '',
                    bullets: [
                        '<strong>Deleting a defect</strong>: Super Admin, Admin and Site Manager can delete any defect; Contract Manager and Engineer only defects they raised. In the office scope editor, Delete defect is shown only to Super Admin, Admin and Site Manager - a Contract Manager deletes their own from the job\'s Overview → Defects card.',
                        'Accounts can raise and view the bundled quote but can\'t touch the sheet itself (no job-edit access) - the sheet has to be completed by an Admin, Contract Manager, Site Manager or Engineer first',
                        'Sales Manager owns quoting end to end but has no job-edit access, so it can generate and send the bundled quote but can\'t log defects or complete the sheet',
                        'Site Manager and Engineer can run the whole field side (log defects, complete the sheet) but hold no quoting permission - they can\'t generate the quote or view it once raised',
                        'Viewer can\'t see the sheet, but can view the quote once one exists',
                        'These are the same role permissions used everywhere else in Opscel - check your Team settings to see what a given user\'s role can do'
                    ]
                }
            ]
        },
        {
            id: 'related-features',
            title: 'Related Features',
            subsections: [
                {
                    title: 'Dashboard Widget Path (Alternative)',
                    content: 'If you don\'t need the engineer\'s written scope, quote straight from the dashboard:',
                    bullets: [
                        'The dashboard\'s <strong>"Jobs Pending Remedial Quotes"</strong> widget lists jobs with in-scope defects waiting for a quote',
                        'Click <strong>Quote</strong> on a job, confirm, and a bundled quote is created for its in-scope defects - no sheet needed',
                        'The quote is built the same way: heading, part and labour lines per defect',
                        '<a href="/docs/defects-to-quotation" class="text-blue-600 hover:underline">Learn more: Defects to Quotation Guide</a>'
                    ]
                },
                {
                    title: 'Electrical Defects (EICR Work)',
                    content: 'Defect severities are Observation, Minor, Major and Critical. They are not the EICR observation codes (C1/C2/C3/FI), which live on the certificate itself, and there is no automatic conversion from those codes to quote lines. Issues found during EICR work that need a quote are logged as ordinary job defects and go through the same flow described here.',
                    bullets: [
                        'Learn more: <a href="/docs/defects-to-quotation" class="text-blue-600 hover:underline">Defects to Quotation Guide</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Defects to Quotation',
            description: 'Converting individual defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Certificates',
            description: 'Issuing certificates after remedial work',
            href: '/docs/certificates'
        },
        {
            title: 'Field Service App',
            description: 'Engineers completing remedial site visits',
            href: '/docs/field-service'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'Converting scope of works into invoices',
            href: '/docs/quote-to-invoice-workflow'
        }
    ]
};
