import { IFeatureDetail } from '@/types';

export const certificatesDetail: IFeatureDetail = {
    slug: 'certificates',
    title: 'Compliant Certificates in Minutes, Not Hours',
    subtitle: 'OpsCel Certificates Module',
    heroDescription: 'Generate professional BS 7671, BS 5839, and MCS-compliant certificates directly from completed jobs. No more paperwork delays, no more compliance headaches.',
    iconId: 'icon-certificate',

    featureHighlights: [
        {
            iconId: 'icon-job-workflow',
            title: 'Auto-Population from Jobs',
            description: 'Certificate forms pre-fill with customer details, site address, and contractor credentials. Your engineers start 50% done.'
        },
        {
            iconId: 'icon-signature',
            title: 'Mobile-First Design',
            description: 'Complete certificates on-site from any tablet or phone. No more scribbled notes to type up later.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Built-In Validation',
            description: 'Can\'t issue a certificate with missing test results or unsigned declarations. The system catches errors before they become compliance issues.'
        },
        {
            iconId: 'icon-certificate',
            title: 'Professional PDFs',
            description: 'One-click PDF generation matching official BS 7671 and industry model forms. Ready to email or print.'
        },
        {
            iconId: 'icon-auto-backup',
            title: 'Automatic Document Filing',
            description: 'Issued certificates auto-file to the job record and site compliance folder. No manual uploading required.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Customer Portal',
            description: 'Clients receive a secure link to view and download their certificates. Track when they\'ve acknowledged receipt.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Retest Tracking',
            description: 'EICR due in 5 years? Fire alarm service due in 6 months? OpsCel tracks inspection intervals so you know when retests are due.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect-to-Quote Pipeline',
            description: 'Found C1/C2 observations during an EICR? Generate a remedial quotation directly from the inspection findings.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Complete Your Job',
            description: 'Mark the job as complete in OpsCel. All customer, site, and job details are captured automatically.'
        },
        {
            stepNumber: 2,
            title: 'Create Certificate',
            description: 'Select the certificate type. Form fields pre-populate from the job—contractor details, installation address, supply characteristics.'
        },
        {
            stepNumber: 3,
            title: 'Add Test Results',
            description: 'Enter your test results directly into the form. For electrical certificates, add circuits with Zs, IR, RCD trip times. For fire safety, record devices tested and any defects found.'
        },
        {
            stepNumber: 4,
            title: 'Sign & Issue',
            description: 'Add digital signatures. The system validates all required fields are complete before allowing issue. Certificate number assigned automatically.'
        },
        {
            stepNumber: 5,
            title: 'Customer Delivery',
            description: 'Share the secure portal link with your client. They can view the certificate, download the PDF, and acknowledge receipt—all tracked in OpsCel.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Electrical Contractors',
            benefits: [
                'No more Word templates for EIC, EICR, and Minor Works certificates',
                'Test results validate automatically before issue',
                'BS 7671:2018+A2:2022 compliant model forms',
                'Complete certificates on-site from tablet or phone',
                'Never miss a mandatory field or signature'
            ]
        },
        {
            persona: 'Fire Safety Companies',
            benefits: [
                'BS 5839-1 and BS 5266-1 compliant service certificates',
                'Cut admin time from 45 minutes to 10 minutes per site',
                '6-monthly service reminders tracked automatically',
                'Device test results captured digitally',
                'Emergency lighting duration tests logged and validated'
            ]
        },
        {
            persona: 'Solar Installers',
            benefits: [
                'MCS MIS 3002 and BS EN 62446-1 compliant commissioning certificates',
                'String test results and equipment serial numbers tracked',
                'DNO G98/G99 notification status integrated',
                'Performance estimates calculated automatically',
                'All MCS-required data in one place'
            ]
        }
    ],

    stats: [
        {
            value: '50%',
            label: 'Form fields pre-populated from job data'
        },
        {
            value: 'Minutes',
            label: 'To issue a compliant certificate, not hours'
        },
        {
            value: '100%',
            label: 'Compliant with BS 7671, BS 5839, and MCS standards'
        }
    ],

    sections: [
        {
            title: 'Certificate Types We Support',
            description: 'OpsCel covers every certificate type you need for electrical, fire safety, and renewable energy work across the UK.',
            bullets: [
                'Electrical Installation Certificate (EIC) - New installations, rewires, consumer unit replacements',
                'Electrical Installation Condition Report (EICR) - Periodic inspections, landlord safety checks',
                'Minor Works Certificate - Additional sockets, light fittings, small alterations',
                'PAT Test Certificate - Portable appliance testing',
                'Fire Alarm Service Certificate (BS 5839-1:2017) - Routine maintenance, 6-monthly service',
                'Fire Alarm Commissioning Certificate (BS 5839-1:2017) - New system installations',
                'Emergency Lighting Test Certificate (BS 5266-1:2016) - Monthly/annual duration tests',
                'Extinguisher Service Certificate (BS 5306-3:2017) - Annual extinguisher inspections',
                'Solar PV Commissioning Certificate (BS EN 62446-1:2016) - New solar installations, MCS compliance'
            ]
        },
        {
            title: 'Compliance You Can Trust',
            description: 'OpsCel certificates match official British Standards model forms exactly. Every mandatory field, every required signature, every test result—where it should be.',
            bullets: [
                'BS 7671:2018+A2:2022 - Electrical certificates match IET model forms exactly',
                'BS 5839-1:2017 & BS 5266-1:2016 - Fire safety certificates follow British Standards requirements',
                'MCS MIS 3002 & BS EN 62446-1 - Solar PV certificates capture all MCS-required data',
                'Complete audit trail - Know who created, edited, issued, or voided any certificate and when',
                'Digital signatures with timestamps for legal compliance',
                'Certificate numbering system prevents duplicates'
            ]
        },
        {
            title: 'Built for the Field',
            description: 'Your engineers work on-site, not at a desk. OpsCel certificates are designed for tablets and phones, with fast data entry and offline capability.',
            bullets: [
                'Mobile-friendly interface with large touch targets',
                'Dropdowns for common values - select instead of type',
                'Copy previous circuit data to speed up multi-circuit certificates',
                'Auto-calculate expected test result ranges',
                'Access from any device with a web browser',
                'Complete certificates on-site or back at the office',
                'No app installation required'
            ]
        }
    ],

    comparison: [
        {
            feature: 'Auto-populate from job data',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Mobile-first design for field use',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Built-in validation before issue',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Customer portal access',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Retest interval tracking',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Defect-to-quote integration',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Unlimited certificates included',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'Do certificates meet regulatory requirements?',
            answer: 'Yes. Our electrical certificates match BS 7671:2018+A2:2022 model forms. Fire safety certificates comply with BS 5839-1 and BS 5266-1. Solar PV certificates meet BS EN 62446-1 and MCS requirements. Every mandatory field is validated before you can issue.'
        },
        {
            question: 'Can I use my company branding?',
            answer: 'Yes. Your company logo, name, and registration details appear on every certificate. Configure your branding once in settings and it applies to all certificate types automatically.'
        },
        {
            question: 'What about certificates for existing jobs?',
            answer: 'You can create certificates for any job in the system, whether it was completed today or last month. The certificate will pull data from the job record and you add the test results and signatures.'
        },
        {
            question: 'Can customers access certificates without creating an account?',
            answer: 'Yes. Customers receive a secure link—no login required. They can view and download certificates immediately. You can track when they\'ve accessed the certificate in the system.'
        },
        {
            question: 'What happens if I need to void a certificate?',
            answer: 'Issued certificates can be voided with a reason. The original is retained for audit purposes with a clear "VOIDED" status. This maintains compliance with record-keeping requirements while preventing the voided certificate from being used.'
        },
        {
            question: 'Do you support Part P notifications?',
            answer: 'Part P notifications are separate from certificates. We recommend using your registered competent person scheme\'s portal for Part P submissions. OpsCel generates the certificates that accompany your Part P work.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
