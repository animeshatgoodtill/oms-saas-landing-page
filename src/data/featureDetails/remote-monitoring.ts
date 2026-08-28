import { IFeatureDetail } from '@/types';

export const remoteMonitoringDetail: IFeatureDetail = {
    slug: 'remote-monitoring',
    title: 'The Work That Never Needs a Van',
    subtitle: 'Opscel Remote Monitoring',
    heroDescription: 'Not every ARC call needs an engineer on site. Remote Monitoring gives your office and monitoring staff a dedicated case type — separate from jobs, off the planner, with its own number — for the recurring signals, panel faults and phoned-in issues you handle without dispatching a van. Escalate to a real job the moment one is actually needed, without losing the case history.',
    iconId: 'icon-condition-gauge',

    stats: [
        { value: 'MC-NNNNN', label: 'Every case gets its own number - never a job number, and never on the planner' },
        { value: '2 in 20', label: 'The NPCC keyholder expectation Opscel warns you against: two keyholders able to attend within 20 minutes' },
        { value: '0 jobs', label: 'A recurring monitoring fee bills on its own cadence and generates no job at all' }
    ],

    featureHighlights: [
        {
            iconId: 'icon-condition-gauge',
            title: 'Cases, Not Jobs',
            description: 'A monitoring case is ongoing work handled without dispatching an engineer — a recurring signal, a panel fault, an emergency-light self-test failure, a customer-phoned issue. It carries no visits, no scheduling, no capacity, and it never appears on the planner.'
        },
        {
            iconId: 'icon-audit-trail',
            title: 'The Monitoring Arrangement',
            description: 'Hold the ARC, your account number, the signalling path, the police URN, the response level, the ARC\'s standing response instruction, and the ARC\'s on-test phone line against every monitored site or system — in one place, ready to reference.'
        },
        {
            iconId: 'icon-contacts-multi',
            title: 'Ordered Keyholders',
            description: 'List keyholders per site in the order the ARC should call them, with attends-within minutes and whether each one holds keys or codes. See who\'s actually reachable before an alarm activation, not after.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'False-Alarm Thresholds, Tracked',
            description: 'A rolling counter checks every site against NPCC thresholds — intruder and CCTV warn at 2, withdraw at 3; hold-up warns at 1, withdraws at 2 — so a slipping site shows up before the ARC downgrades it.'
        },
        {
            iconId: 'icon-condition-gauge',
            title: 'Response Level + Reinstatement Clock',
            description: 'Track each site\'s response level — level_1, level_3_withdrawn, or none — alongside the 90-day clock that counts down to reinstatement, so you know exactly when a withdrawn response can be requested back.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Escalate Without Losing the Case',
            description: 'When a case genuinely needs an engineer, escalation creates a real job with a link back to the case. The case itself stays open beside it — nothing is overwritten, and the full history survives the handoff.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Append-Only Timeline',
            description: 'Every entry on a case timeline stays — nothing is edited away or overwritten. A complete, ordered record of what happened and when, for as long as the case is open.'
        },
        {
            iconId: 'icon-audit-trail',
            title: 'Structured Contact Outcomes',
            description: 'Log every contact by who it was — brigade, police, keyholder, site, customer, or ARC — with the outcome recorded against it. No more digging through free-text notes to work out who was actually called.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Bills as a Recurring Fee',
            description: 'Monitoring bills as a recurring fee on a service contract, on its own cadence, carrying the customer\'s PO. It generates no job, and shows in the Service Contract Value report as Recurring Fees alongside visit book value.'
        },
        {
            iconId: 'icon-gps-checkin',
            title: 'Engineers Arrive Knowing',
            description: 'Before an engineer touches a device, the job shows the ARC and account number, plus a reminder to put the system on test. It\'s an acknowledgement, never an attestation — Opscel never asks an engineer to confirm they called the ARC.'
        },
        {
            iconId: 'icon-telegram-bot',
            title: 'Works Offline, Tap-to-Call',
            description: 'The ARC details and on-test reminder are there in the field app even without signal. Where the on-test number is recorded, engineers get a tap-to-call shortcut straight from the job.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Certificates Prefill the ARC',
            description: 'Certificates prefill the ARC name and account number automatically. They never prefill an engineer\'s signed "monitored by ARC" answer — that stays a deliberate, signed step, not an autofill.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Set Up the Arrangement',
            description: 'Record the ARC, account number, signalling path, police URN, response level, standing response instruction and on-test line for the site or system — and list its keyholders in calling order with attends-within times.'
        },
        {
            stepNumber: 2,
            title: 'Open a Case',
            description: 'An ARC call, a panel fault, or a phoned-in issue becomes a monitoring case with its own MC-NNNNN number — no visit, no scheduling, off the planner from the start.'
        },
        {
            stepNumber: 3,
            title: 'Work It on the Timeline',
            description: 'Log every contact — brigade, police, keyholder, site, customer, ARC — with its outcome, on an append-only timeline. False alarms count against NPCC thresholds automatically.'
        },
        {
            stepNumber: 4,
            title: 'Escalate Only When It\'s Real Work',
            description: 'If the case needs an engineer, escalate it — a real job is created and linked, and the case stays open beside it. Otherwise it closes without ever touching the diary or the invoice as a job.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office & Monitoring Staff',
            benefits: [
                'Log an ARC call as a case in seconds — no need to force it into a job just to have somewhere to put it',
                'See every keyholder in calling order with attends-within minutes, so you know who\'s reachable before you dial',
                'False-alarm counts against NPCC thresholds are tracked for you, site by site',
                'The append-only timeline means nothing you or a colleague logged ever quietly disappears',
                'Escalate to a job in one step when it\'s genuinely needed, without re-typing anything already on the case'
            ]
        },
        {
            persona: 'Contract Managers',
            benefits: [
                'The monitoring arrangement keeps the ARC, account number, URN and response level together against every site',
                'A withdrawn response level shows its 90-day reinstatement clock, so you know exactly when to chase it back',
                'Monitoring bills as a recurring fee on the service contract, carrying the customer\'s PO, with no job to reconcile',
                'The Service Contract Value report shows Recurring Fees next to visit book value, so monitoring revenue isn\'t hidden'
            ]
        },
        {
            persona: 'Business Owners',
            benefits: [
                'Monitoring cases stop clogging the job list and the planner with work that was never a visit',
                'Structured, append-only contact logs give you a defensible record if a false-alarm dispute or an ARC query comes up',
                'Recurring monitoring fees are visible revenue, reported separately from job and visit value',
                'Escalation preserves the full case history on the job it creates, so nothing is lost when work does need a van'
            ]
        }
    ],

    comparison: [
        { feature: 'Dedicated case type, separate from jobs and the planner', opscel: true, others: 'No' },
        { feature: 'Own case numbering (MC-NNNNN), never a job number', opscel: true, others: 'No' },
        { feature: 'Ordered keyholders with attends-within minutes', opscel: true, others: 'Some' },
        { feature: 'NPCC false-alarm threshold tracking', opscel: true, others: 'No' },
        { feature: 'Response level + 90-day reinstatement clock', opscel: true, others: 'No' },
        { feature: 'Escalate to a job without losing the case', opscel: true, others: 'No' },
        { feature: 'Structured contact logging by contact type and outcome', opscel: true, others: 'Some' },
        { feature: 'Monitoring bills as a recurring fee with no job generated', opscel: true, others: 'No' }
    ],

    faq: [
        {
            question: 'What counts as a monitoring case?',
            answer: 'Ongoing work handled without dispatching an engineer — an ARC call about a recurring signal, a panel fault, an emergency-light self-test failure, or a customer-phoned issue. It gets its own MC-NNNNN number, has no visits or scheduling, and never appears on the planner.'
        },
        {
            question: 'How is a case different from a job?',
            answer: 'A job books an engineer for a visit and sits on the planner. A case does neither — it tracks contacts and outcomes on a timeline until it\'s resolved or escalated. If a case does need an engineer, escalating it creates a real job and links back to the case, which stays open alongside it.'
        },
        {
            question: 'How does Opscel track false alarms?',
            answer: 'A rolling counter checks each site against NPCC thresholds: intruder and CCTV alarms warn at 2 false alarms and withdraw response at 3; hold-up alarms warn at 1 and withdraw at 2. A withdrawn response level carries a 90-day clock counting down to when reinstatement can be requested.'
        },
        {
            question: 'Do engineers need any special permission to see monitoring information?',
            answer: 'No. Engineers need no monitoring permission at all. The ARC name, account number and an on-test reminder simply appear on the job itself before they touch a device, and tap-to-call is available where the on-test number is recorded.'
        },
        {
            question: 'Does an engineer have to confirm they called the ARC?',
            answer: 'No. The reminder on the job is an acknowledgement, not an attestation — Opscel never asks an engineer to confirm they called the ARC before starting work.'
        },
        {
            question: 'Which plan includes Remote Monitoring?',
            answer: 'Remote Monitoring is included on the Business plan. It covers ARC-handled monitoring cases, keyholder management, false-alarm tracking and recurring monitoring fees billed through service contracts.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
