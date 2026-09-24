import { IFeatureDetail } from '@/types';

export const defectsDetail: IFeatureDetail = {
    slug: 'defects',
    title: 'Every Fault Found on Site Becomes Remedial Work You Can Quote',
    subtitle: 'Defects & Remedial Quotes',
    heroDescription: 'Your engineers find faults on every service visit: a detector head missing, a fire door that won\'t close, a cracked call point. Opscel makes each one a defect with a severity, photos and parts, puts it in front of the office on the job and the dashboard, and turns the ones you pick into one remedial quote. It stays on the site\'s defect register until it\'s resolved. And if a defect is logged on the wrong job, it can be deleted safely, with a confirm step and photos you can get back.',
    iconId: 'icon-deficiency-log',
    screenshotImage: '/images/features/defects/defects-hero-mockup.svg',

    sections: [
        {
            eyebrow: 'Phone to Office',
            title: 'Logged on the Phone. Seen in the Office.',
            description: 'The engineer picks a severity, adds photos and, for bigger jobs, the parts it will need. The same defect shows up on the job\'s Defects card in the office, ready to quote.',
            imageSrc: '/images/features/defects/defects-hero-mockup.svg',
            imageAlt: 'The office job page Defects card listing a Critical fire door defect marked Quote required, a Major smoke detector defect already on draft quote QT-2026-0097 with its delete icon greyed out, a Minor call point defect and an Observation, beside a phone showing the engineer\'s Add defect form with Major selected, a photo, and an Add a part button.',
            imageWidth: 1200,
            imageHeight: 800,
            bullets: [
                'Four severities your team already thinks in: Observation, Minor, Major, Critical',
                'Photos from the camera or the gallery, attached to the defect',
                'Office users can add or edit a defect on any job, even a completed one'
            ]
        },
        {
            eyebrow: 'The Loop',
            title: 'Defect, Quote, Remedial Job, Resolved.',
            description: 'A Major or Critical defect, or one marked Quote required, attaches a draft Remedial Scope of Works sheet for the pricing detail. The office bundles the defects into one quote, the accepted quote becomes the remedial job, and once the fault is fixed the engineer or the office marks it resolved, so it stays on the site\'s register as history.',
            imageSrc: '/images/docs/defects/defect-lifecycle.svg',
            imageAlt: 'Flow diagram of a defect: an engineer logs it in the field app or the office adds it from the job Overview; it shows on the job\'s Defects card, the site\'s defect register and the job sheet PDF; a Major, Critical or quote-required defect attaches a draft Remedial Scope of Works sheet; the office quotes it with Create Bundled Quote; the accepted quote becomes a remedial job; the fault is fixed and the defect is marked resolved in the site\'s defect register. A side branch shows a defect raised by mistake being deleted by whoever raised it or the office.',
            imageWidth: 1040,
            imageHeight: 640
        },
        {
            eyebrow: 'Fix Mistakes Safely',
            title: 'Undo a Mistake. Never Rewrite History.',
            description: 'Logged on the wrong job, or twice? The person who raised it, or the office, can delete it after a confirm step. Once a defect is on a quote or resolved, it can\'t be deleted, so the record behind a quote or the site\'s history can\'t quietly disappear.',
            imageSrc: '/images/features/defects/delete-defect-dialog.svg',
            imageAlt: 'The Delete this defect? dialog showing a Minor call point defect, a ticked Also delete its 2 photos option noting photos can be restored from the job\'s Photos for 30 days, a warning that the defect itself can\'t be restored, and Keep it and Delete defect buttons. Side notes say resolved defects are part of the site\'s history, a defect on a quote must be removed from the quote first, only the person who raised it or the office can delete it, and every delete is recorded in the audit log.',
            imageWidth: 1200,
            imageHeight: 800,
            bullets: [
                'Photos deleted with a defect can be restored from the job\'s Photos for 30 days',
                'Engineers can\'t delete a colleague\'s defect',
                'Every delete is recorded in the audit log with a full copy of the defect'
            ]
        }
    ],

    stats: [
        {
            value: '4 severities',
            label: 'Observation, Minor, Major, Critical: from advisory only to immediate action'
        },
        {
            value: '1 quote',
            label: 'Tick the defects to include and create one bundled remedial quote'
        },
        {
            value: '30 days',
            label: 'To restore photos deleted with a defect raised by mistake'
        }
    ],

    featureHighlights: [
        {
            iconId: 'icon-deficiency-log',
            title: 'Log It Where You Find It',
            description: 'Engineers log defects from the Defects screen in the field app, on the job they\'re on. Severity, description, location and photos in one form. No signal in the plant room? Changes wait on the phone and sync when the connection is back.'
        },
        {
            iconId: 'icon-condition-gauge',
            title: 'Severity With a Deadline Attached',
            description: 'Observation (advisory only), Minor (next routine visit), Major (within 28 days), Critical (immediate action). The same wording on the phone and in the office.'
        },
        {
            iconId: 'icon-photo-capture',
            title: 'Photos and Parts',
            description: 'Take a photo or pick one from the gallery. For Major, Critical or quote-required defects, a Parts section lets the engineer add parts from your catalogue.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'One Bundled Remedial Quote',
            description: 'Create Bundled Quote lets you tick which defects to include, with quote-required, Major and Critical ones pre-ticked. Each defect gets a heading line, priced part lines from your catalogue and a labour line.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Remedial Scope of Works Sheet',
            description: 'A Major, Critical or quote-required defect attaches a draft Remedial Scope of Works sheet, so the hours, engineers and parts behind the quote are written down on the job.'
        },
        {
            iconId: 'icon-service-history',
            title: 'The Site Register Remembers',
            description: 'Defects sit on the site\'s defect register (the Deficiency Register on the site page) as well as the job, so the next visit can see what\'s still outstanding, and resolved defects stay as the site\'s history.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'A Dashboard Queue for Quoting',
            description: 'The Jobs Pending Remedial Quotes widget lists the jobs with defects still to quote. Press Quote, confirm, and one quote is created for that job\'s defects.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Delete With Guardrails',
            description: 'A defect raised by mistake can be deleted by the person who raised it or the office. A defect on a quote can\'t be deleted and the app says which quote; a resolved one offers Re-open instead.'
        },
        {
            iconId: 'icon-audit-trail',
            title: 'An Audit Copy of Every Delete',
            description: 'Every deleted defect is recorded in the audit log with a full copy of what it said, so a removal is never silent.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'The Engineer Logs the Defect',
            description: 'On the Defects screen in the field app: severity, description, location and photos. Major, Critical and quote-required defects get a Parts section, and a draft Remedial Scope of Works sheet is attached to the job.'
        },
        {
            stepNumber: 2,
            title: 'The Office Sees It on the Job',
            description: 'The job\'s Defects card shows every open defect with its severity, location, parts, photos and quote status. Office users can add or edit defects here on any job, including a completed one.'
        },
        {
            stepNumber: 3,
            title: 'Bundle the Defects Into One Quote',
            description: 'Press Create Bundled Quote on the job and tick the defects to include, or press Quote on the dashboard\'s Jobs Pending Remedial Quotes widget. Opscel creates one quote with lines for each defect, ready for you to check, price and send.'
        },
        {
            stepNumber: 4,
            title: 'Remedial Job, Then Resolved',
            description: 'The accepted quote becomes the remedial job. Once the fault is fixed, the engineer or the office marks it resolved, and it stays on the site\'s defect register as history.'
        },
        {
            stepNumber: 5,
            title: 'Logged on the Wrong Job? Delete It Safely',
            description: 'Edit the defect and choose Delete defect. You confirm first, you can choose to delete its photos too (they can be restored for 30 days), and the delete is recorded in the audit log. Then add it to the right job.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Fire Safety Contractors',
            benefits: [
                'Missing detector heads, failed door closers and cracked call points found on a service visit become defects the office can quote, not notes on a job sheet',
                'Severity wording (advisory only, next routine visit, within 28 days, immediate action) that makes the urgency clear',
                'The site\'s defect register shows what\'s still outstanding before the next visit'
            ]
        },
        {
            persona: 'Electrical Contractors',
            benefits: [
                'Faults found on a job are logged with photos and parts, so remedial work is priced from what the engineer actually saw',
                'One bundled quote for several defects instead of a quote per fault',
                'The office can add a defect to a completed job when a finding turns up later'
            ]
        },
        {
            persona: 'Office & Operations',
            benefits: [
                'A dashboard widget lists the jobs whose defects still need quoting',
                'Fix a defect logged on the wrong job without deleting anything that\'s already on a quote or resolved',
                'Every delete leaves a full copy in the audit log'
            ]
        }
    ],

    faq: [
        {
            question: 'Can an engineer delete a defect?',
            answer: 'Yes, if they raised it. In the field app, open the defect on the Defects screen, choose Edit, and Delete defect is at the bottom of the form, set apart from Save and Cancel. An engineer can\'t delete a colleague\'s defect: the option isn\'t shown and the server refuses it. Deleting needs a connection, so it can\'t be done offline.'
        },
        {
            question: 'Who else can delete a defect?',
            answer: 'Office users with job delete rights (Super Admin, Admin and Site Manager) can delete any defect that isn\'t on a quote or resolved, from the Defects card on the job\'s Overview tab.'
        },
        {
            question: 'What if a defect was logged on the wrong job?',
            answer: 'Delete it from the wrong job and add it again on the right one. The confirm dialog lets you delete its photos too, and they can be restored from the job\'s Photos for 30 days. There\'s no "move to another job" option, so it\'s delete and re-add. The office can add a defect on any job, even one that\'s already completed.'
        },
        {
            question: 'Does deleting a defect remove it from the quote?',
            answer: 'No. A defect that\'s on a quote can\'t be deleted. The app tells you which quote it\'s on and asks you to remove it from the quote first.'
        },
        {
            question: 'Can I delete a resolved defect?',
            answer: 'No. Resolved defects are part of the site\'s history, so they can\'t be deleted. If one was raised by mistake, re-open it first, then delete it.'
        },
        {
            question: 'Can I undo a delete?',
            answer: 'No. The confirm step is the safeguard, and the dialog says plainly that the defect itself can\'t be restored. Its photos can be restored from the job\'s Photos for 30 days if you deleted them with it, and the audit log keeps a full copy of what the defect said.'
        },
        {
            question: 'What happens to the Remedial Scope of Works sheet?',
            answer: 'If you delete the last defect on a draft Remedial Scope sheet that was created automatically for it, and nobody has typed into it, the now-empty sheet is removed too. It can be restored from Deleted sheets for 30 days. Sheets the office attached on purpose, and sheets that have been filled in, completed or quoted, are never removed this way.'
        },
        {
            question: 'What\'s the difference between "Remove from scope" and "Delete defect"?',
            answer: 'Remove from scope takes a defect off the Remedial Scope sheet\'s list, and the defect stays on the job. Delete defect erases a defect raised by mistake from the job, its job sheets and the site\'s defect register.'
        },
        {
            question: 'Does Opscel create remedial quotes automatically?',
            answer: 'No. Someone in the office chooses to create the quote, from the job\'s Defects card or the dashboard widget, and it\'s created for you to check and send.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
