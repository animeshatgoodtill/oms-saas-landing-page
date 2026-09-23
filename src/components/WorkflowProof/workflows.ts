// The four workflows the homepage animation cycles through.
//
// Every caption must stay TRUE to the product (fact-checked against the app
// repo, 2026-09-23). In particular: quote → job, register update, quote from
// defects, certificate issue, invoice and "Post to Xero" are each ONE CLICK in
// the office — not automatic. No push notifications to the phone. Defect quotes
// are not Good-Better-Best. Payment status DOES sync back from Xero on its own.

export type FlowDirection = 'office' | 'field' | 'toField' | 'toOffice';

export interface IWorkflowStep {
    direction: FlowDirection;
    /** full sentence, read by screen readers */
    caption: string;
    /** one line in the side rail (keep it under ~40 characters) */
    short: string;
}

export interface IWorkflow {
    id: string;
    route: string;
    title: string;
    summary: string;
    steps: [IWorkflowStep, IWorkflowStep, IWorkflowStep, IWorkflowStep];
}

export const workflows: IWorkflow[] = [
    {
        id: 'quote-to-job',
        route: 'Office → Field',
        title: 'Quote to job',
        summary: 'Accepted online, booked in, on the engineer’s phone.',
        steps: [
            { direction: 'office', caption: 'The customer accepts the quote online', short: 'Customer accepts the quote online' },
            { direction: 'office', caption: 'One click turns it into a job', short: 'One click turns it into a job' },
            { direction: 'office', caption: 'Booked into Priya’s Thursday', short: 'Booked into Priya’s Thursday' },
            { direction: 'toField', caption: 'On her phone, with every device on site already listed', short: 'On her phone, every device listed' },
        ],
    },
    {
        id: 'site-visit',
        route: 'Field → Office',
        title: 'Site visit',
        summary: 'Every device listed. Works with no signal.',
        steps: [
            { direction: 'toOffice', caption: 'Priya checks in, and the office can see she’s on site', short: 'Priya checks in; the office sees it' },
            { direction: 'field', caption: 'Devices tested and ticked off, signal or not', short: 'Devices ticked off, signal or not' },
            { direction: 'toOffice', caption: 'Results sync as soon as she’s back in signal', short: 'Results sync back in signal' },
            { direction: 'office', caption: 'One click updates the asset register', short: 'One click updates the register' },
        ],
    },
    {
        id: 'defect-to-quote',
        route: 'Field → Office',
        title: 'Defect to quote',
        summary: 'Found on site, quoted the same day.',
        steps: [
            { direction: 'field', caption: 'A cracked call point, photographed and logged', short: 'Cracked call point, photographed' },
            { direction: 'toOffice', caption: 'It’s on the job in the office before she leaves site', short: 'On the job before she leaves site' },
            { direction: 'office', caption: 'One click turns it into a quote, with her parts and hours on it', short: 'One click turns it into a quote' },
            { direction: 'office', caption: 'Sent to the customer to approve online', short: 'Sent to the customer to approve' },
        ],
    },
    {
        id: 'sign-off-to-paid',
        route: 'Field → Office → Xero',
        title: 'Sign-off to paid',
        summary: 'Signed, certified, invoiced, in Xero.',
        steps: [
            { direction: 'field', caption: 'The customer signs on Priya’s phone', short: 'Customer signs on the phone' },
            { direction: 'toOffice', caption: 'Job complete. The BS 5839-1 certificate is ready to issue', short: 'Certificate ready to issue' },
            { direction: 'office', caption: 'Certificate issued, invoice sent from the quote’s own lines', short: 'Certificate issued, invoice sent' },
            { direction: 'office', caption: 'Posted to Xero. The payment syncs back when they pay', short: 'Posted to Xero; payment syncs back' },
        ],
    },
];
