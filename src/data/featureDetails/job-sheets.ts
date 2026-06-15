import { IFeatureDetail } from '@/types';

export const jobSheetsDetail: IFeatureDetail = {
    slug: 'job-sheets',
    title: 'Professional Job Sheets That Impress Your Customers',
    subtitle: 'Opscel Jobs Module',
    heroDescription: 'Your job sheets represent your business. Generic templates with bland layouts make you look like everyone else. Opscel generates branded, professional certificates that customers actually want to keep—and that make you look like the expert contractor you are.',
    iconId: 'icon-job-workflow',
    sections: [
        {
            title: 'Your Branding, Front and Centre',
            description: 'Every certificate, every job sheet, every document—automatically branded with your company logo, colors, and contact details. No manual work, no design skills needed. Your engineer completes the job, the customer gets a professional document that looks like you spent hours on it.',
            bullets: [
                'Company logo on all certificates and job sheets',
                'Branded headers with your business colors',
                'Contact details and registration numbers automatically included',
                'Consistent professional look across all documentation',
                'Customers remember who did the work'
            ]
        },
        {
            title: 'Real Names, Real Accountability',
            description: 'No more "Engineer #3" or generic signatures. Your engineers\' actual names appear on certificates and job sheets. Customers know exactly who did the work, engineers take ownership, and disputes disappear because there\'s a clear record of who was responsible.',
            bullets: [
                'Engineer\'s full name on every certificate',
                'Digital signature with timestamp',
                'Customer can contact the engineer who knows their site',
                'Builds trust and personal relationships',
                'Eliminates "who did this job?" confusion'
            ]
        },
        {
            title: 'Automatic Time Tracking',
            description: 'Engineers check in when they arrive, check out when they leave. System logs exactly how long each job took, calculates labor costs automatically, and gives you data to quote future jobs accurately. No timesheets, no guessing, no disputes about "how long were you there?"',
            bullets: [
                'GPS check-in and check-out with timestamps',
                'Automatic duration calculation',
                'Labor cost tracking for accurate quoting',
                'Proof of arrival time for customers',
                'Historical data for estimating future jobs',
                'Eliminates timesheet paperwork entirely'
            ]
        },
        {
            title: 'Multi-Visit Jobs, One Clear Record',
            description: 'Some jobs take multiple visits—installation on Tuesday, testing on Thursday, final inspection next week. Opscel logs every visit with photos, notes, and timestamps. Customer gets one comprehensive job sheet showing the complete history, not scattered paperwork from different days.',
            bullets: [
                'Track multiple visits to the same job',
                'Each visit logged with date, time, and engineer',
                'Photos and notes from every visit in one place',
                'Customer sees complete project timeline',
                'Perfect for installations, repairs, and maintenance contracts'
            ]
        },
        {
            title: 'All the Details, Perfectly Organized',
            description: 'Customer details, site address, equipment serviced, deficiencies found, parts used, engineer notes, photos, signatures—everything in one job record. No hunting through emails, no lost paperwork, no "I think we did that last March." It\'s all there, organized, searchable, and ready when you need it.',
            bullets: [
                'Complete customer and site information',
                'Equipment details with serial numbers',
                'Deficiencies logged with photos and severity ratings',
                'Parts and materials used',
                'Engineer notes and observations',
                'Customer signature with timestamp',
                'All photos attached to the job record',
                'Search and filter entire job history'
            ]
        },
        {
            title: 'From Job Complete to Invoice in Minutes',
            description: 'Job finished at 4pm? Certificate generated and emailed to customer by 4:05pm. Invoice goes out immediately. No evening paperwork, no waiting for the engineer to "write it up tomorrow," no delayed payments. Customer gets documentation while you\'re still at their site.',
            bullets: [
                'Instant certificate generation on job completion',
                'Automatic email delivery to customer contacts',
                'PDF download available immediately',
                'Invoice ready to send right after',
                'Get paid faster—days faster',
                'Customer impressed by your professionalism'
            ]
        }
    ],
    ctaText: 'Try Professional Job Sheets Free for 90 Days',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
