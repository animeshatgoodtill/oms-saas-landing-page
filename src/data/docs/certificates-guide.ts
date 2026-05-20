import { IDocGuide } from '@/types';

export const certificatesGuide: IDocGuide = {
    slug: 'certificates',
    title: 'Certificates Module - Complete User Guide',
    description: 'Learn how to create, manage, and issue industry-standard compliance certificates in OpsCel.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: 'The Certificates module allows you to create, manage, and issue industry-standard compliance certificates directly within OpsCel. Certificates are linked to jobs, customers, and service addresses, creating a complete audit trail of work performed.',
            subsections: [
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        'Pre-populated forms — Customer, site, and contractor details auto-fill from job data',
                        'Built-in validation — Cannot issue certificates with missing required fields',
                        'Professional PDFs — Match official BS 7671 and industry model forms',
                        'Customer portal — Clients access certificates via secure link',
                        'Automatic filing — Certificates file to job and site compliance folders',
                        'Retest tracking — Track inspection intervals and due dates'
                    ]
                }
            ],
            table: {
                headers: ['Vertical', 'Certificates'],
                rows: [
                    ['Electrical', 'EIC, EICR, Minor Works, PAT Test'],
                    ['Fire Safety', 'Fire Alarm Service, Fire Alarm Commissioning, Emergency Lighting, Extinguisher Service'],
                    ['Low Carbon', 'Solar PV Commissioning']
                ]
            }
        },
        {
            id: 'certificate-types',
            title: 'Certificate Types',
            subsections: [
                {
                    title: 'Electrical Installation Certificate (EIC)',
                    content: 'Standard: BS 7671:2018+A2:2022',
                    bullets: [
                        'Use for: New electrical installations, additions requiring new circuits, consumer unit replacements, full or partial rewires',
                        'Key sections: Contractor details, installation details, supply characteristics, installation particulars, circuit schedule, declaration',
                        'Signatures required: Designer, Installer, Inspector (can be same person)'
                    ]
                },
                {
                    title: 'Electrical Installation Condition Report (EICR)',
                    content: 'Standard: BS 7671:2018+A2:2022',
                    bullets: [
                        'Use for: Periodic inspection and testing, change of occupancy inspections, landlord safety checks (required every 5 years)',
                        'Key sections: Client details, installation details, condition summary with overall assessment, extent and limitations, observations with classification codes',
                        'Overall assessment: Automatically determined - Any C1 or C2 observation = UNSATISFACTORY',
                        'Signatures required: Inspector'
                    ]
                },
                {
                    title: 'Minor Works Certificate',
                    content: 'Standard: BS 7671:2018+A2:2022',
                    bullets: [
                        'Use for: Adding a socket to existing circuit, adding a light fitting, installing a fused spur',
                        'Not for: New circuits, work in special locations (bathrooms, outdoors), consumer unit changes',
                        'Key sections: Description of work, circuit details, essential test results',
                        'Signatures required: Installer/Tester'
                    ]
                },
                {
                    title: 'Fire Alarm Service Certificate',
                    content: 'Standard: BS 5839-1:2017',
                    bullets: [
                        'Use for: Routine 6-monthly service visits, annual inspections, post-repair verification',
                        'Key sections: System details (category, panel, zones, devices), visual inspection results, functional test results, defects found',
                        'Signatures required: Servicing Engineer'
                    ]
                },
                {
                    title: 'Solar PV Commissioning Certificate',
                    content: 'Standard: BS EN 62446-1:2016+A1:2018, MCS MIS 3002',
                    bullets: [
                        'Use for: New solar PV installations, MCS compliance documentation',
                        'Key sections: System specification, equipment details, string test results (Voc, Isc, IR), DNO notification status, performance estimate',
                        'Note: Supports MCS compliance but does not replace the MCS certificate issued through MCS Installation Database',
                        'Signatures required: MCS Certified Installer'
                    ]
                }
            ]
        },
        {
            id: 'creating-certificates',
            title: 'Creating Certificates',
            subsections: [
                {
                    title: 'Method 1: From the Certificates List',
                    content: '',
                    steps: [
                        { step: 'Navigate to Certificates in the main menu', description: '' },
                        { step: 'Click "New Certificate"', description: '' },
                        { step: 'Select the certificate type', description: '' },
                        { step: 'Choose the linked job (optional but recommended)', description: '' },
                        { step: 'Click "Create"', description: '' }
                    ]
                },
                {
                    title: 'Method 2: From a Job',
                    content: '',
                    steps: [
                        { step: 'Open the job detail page', description: '' },
                        { step: 'Scroll to the Certificates section', description: '' },
                        { step: 'Click "Assign Certificate"', description: '' },
                        { step: 'Select the certificate type', description: '' },
                        { step: 'The certificate is created and linked automatically', description: '' }
                    ]
                },
                {
                    title: 'Auto-Population',
                    content: 'When creating a certificate from a job, fields pre-populate automatically:',
                    bullets: [
                        'Company: Contractor name, address, phone, email, registration details',
                        'Customer: Client name, contact name, phone, email',
                        'Site: Installation address, postcode',
                        'Job: Job number, description, completion date, assigned engineers'
                    ]
                },
                {
                    title: 'Panel Identity Carry-Forward (Fire Alarm Service)',
                    content: `
                        <p class="mb-4">
                            When creating a new Fire Alarm Service certificate for a site, the system automatically looks up the last issued service certificate for that same address and pre-fills all panel identity information.
                        </p>
                        <p class="mb-4"><strong>What carries forward automatically:</strong></p>
                    `,
                    bullets: [
                        'Panel details: Manufacturer, model, serial number, and location for every panel',
                        'System configuration: Zone/detector/sounder counts',
                        'Detector types and coverage',
                        'ARC (Alarm Receiving Centre) monitoring details'
                    ]
                },
                {
                    title: 'What Does NOT Carry Forward',
                    content: 'To maintain compliance, the following must be entered fresh for each service visit:',
                    bullets: [
                        'Test results and outcomes',
                        'Service date and time',
                        'Fault log entries',
                        'Battery test results',
                        'Visual inspection findings',
                        'Functional test outcomes'
                    ]
                },
                {
                    title: 'How It Works',
                    content: `
                        <p class="mb-4">
                            Next time you create a Fire Alarm Service certificate for a site that already has one, all the "who is this system" information will be waiting for you—you just fill in "what did we test today."
                        </p>
                        <p class="mb-6">
                            This feature saves significant data entry time on routine service visits while ensuring compliance requirements for fresh test data are maintained.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'circuits',
            title: 'Working with Circuits (Electrical)',
            content: 'EIC and EICR certificates include a circuit schedule for recording test results.',
            subsections: [
                {
                    title: 'Adding Circuits',
                    content: '',
                    steps: [
                        { step: 'Navigate to the Circuit Schedule section', description: '' },
                        { step: 'Click "Add Circuit"', description: '' },
                        { step: 'Enter circuit number, designation, protective device, cable details', description: '' },
                        { step: 'Add test results (IR, Zs, RCD, polarity)', description: '' },
                        { step: 'Click "Save"', description: '' }
                    ]
                }
            ],
            table: {
                headers: ['Test', 'Field', 'Pass Criteria'],
                rows: [
                    ['Insulation Resistance', 'IR (MΩ)', '≥1.0 MΩ'],
                    ['Earth Fault Loop', 'Zs (Ω)', 'Within table limits for protective device'],
                    ['RCD Trip Time', 'Trip time (ms)', '≤40ms at I∆n'],
                    ['Polarity', 'Correct?', 'Must be correct'],
                    ['Continuity', 'R1+R2 (Ω)', 'Record value']
                ]
            }
        },
        {
            id: 'observations',
            title: 'Working with Observations (EICR)',
            content: 'EICR certificates include an observations section for recording defects and recommendations.',
            table: {
                headers: ['Code', 'Meaning', 'Action Required', 'Affects Overall Result'],
                rows: [
                    ['C1', 'Danger present', 'Immediate action required', 'Makes UNSATISFACTORY'],
                    ['C2', 'Potentially dangerous', 'Urgent action required', 'Makes UNSATISFACTORY'],
                    ['C3', 'Improvement recommended', 'Recommend improvement', 'No'],
                    ['FI', 'Further investigation', 'Cannot fully assess', 'No']
                ]
            },
            subsections: [
                {
                    title: 'Overall Assessment',
                    content: 'The overall assessment is determined automatically:',
                    bullets: [
                        'UNSATISFACTORY — Any C1 or C2 observation exists',
                        'SATISFACTORY — All observations are C3 or FI only',
                        'You cannot override this logic—it ensures compliance with BS 7671 requirements'
                    ]
                }
            ]
        },
        {
            id: 'string-tests',
            title: 'String Tests (Solar PV)',
            content: 'Solar PV Commissioning certificates include DC-side string test results.',
            table: {
                headers: ['Test', 'Pass Criteria'],
                rows: [
                    ['Voc', 'Within ±5% of expected (warning), ±10% (fail)'],
                    ['Isc', 'Within ±5% of expected (warning), ±10% (fail)'],
                    ['IR', '≥1 MΩ per 40V of string Voc'],
                    ['Polarity', 'Must be correct'],
                    ['Earth continuity', '<1 Ω']
                ]
            },
            subsections: [
                {
                    title: 'Auto-Generate String Tests',
                    content: 'If you\'ve entered the system configuration (number of arrays, strings per array), click "Auto-Generate" to create placeholder rows for all strings. Then fill in the measured values.'
                }
            ]
        },
        {
            id: 'signatures',
            title: 'Signatures',
            table: {
                headers: ['Certificate', 'Required Signatures'],
                rows: [
                    ['EIC', 'Designer, Installer, Inspector (can be same person)'],
                    ['EICR', 'Inspector'],
                    ['Minor Works', 'Installer/Tester'],
                    ['PAT Test', 'Tester'],
                    ['Fire Alarm', 'Servicing Engineer'],
                    ['Emergency Lighting', 'Testing Engineer'],
                    ['Solar PV', 'MCS Certified Installer']
                ]
            },
            subsections: [
                {
                    title: 'Adding a Signature',
                    content: '',
                    steps: [
                        { step: 'Navigate to the Signatures section', description: '' },
                        { step: 'Select the signatory role', description: '' },
                        { step: 'Enter signatory name and registration number', description: '' },
                        { step: 'Draw signature on the signature pad', description: '' },
                        { step: 'Click "Save Signature"', description: '' }
                    ]
                },
                {
                    title: 'Important Notes',
                    content: '',
                    bullets: [
                        'Signatures are required before a certificate can be issued',
                        'Once issued, signatures cannot be changed',
                        'The system records the exact date and time of each signature'
                    ]
                }
            ]
        },
        {
            id: 'status-workflow',
            title: 'Certificate Status Workflow',
            content: 'Certificates progress through a defined workflow: DRAFT → COMPLETED → ISSUED → VOIDED/SUPERSEDED',
            table: {
                headers: ['Status', 'Description', 'Editable?', 'Certificate Number'],
                rows: [
                    ['Draft', 'Work in progress', 'Yes', 'Not assigned'],
                    ['Completed', 'Ready for review/issue', 'Yes', 'Not assigned'],
                    ['Issued', 'Officially issued', 'No', 'Assigned'],
                    ['Voided', 'Cancelled/invalidated', 'No', 'Retained'],
                    ['Superseded', 'Replaced by newer certificate', 'No', 'Retained']
                ]
            }
        },
        {
            id: 'issuing',
            title: 'Issuing Certificates',
            subsections: [
                {
                    title: 'Pre-Issue Validation',
                    content: 'Before a certificate can be issued, the system validates:',
                    bullets: [
                        'All required fields populated — No empty mandatory fields',
                        'All required signatures present — Based on certificate type',
                        'Type-specific rules pass — EIC: At least one circuit with test results, EICR: Overall assessment matches observations, Solar PV: String tests pass'
                    ]
                },
                {
                    title: 'How to Issue',
                    content: '',
                    steps: [
                        { step: 'Complete all form sections', description: '' },
                        { step: 'Add required signatures', description: '' },
                        { step: 'Click "Issue Certificate"', description: '' },
                        { step: 'Review any validation warnings', description: '' },
                        { step: 'Confirm issue', description: '' }
                    ]
                },
                {
                    title: 'What Happens on Issue',
                    content: '',
                    bullets: [
                        'Certificate number assigned (e.g., EIC-000042)',
                        'Status changes to "Issued"',
                        'PDF generated and auto-filed to job and site documents',
                        'Customer delivery token created',
                        'Certificate becomes read-only'
                    ]
                }
            ]
        },
        {
            id: 'customer-portal',
            title: 'Customer Delivery Portal',
            content: 'Customers can access their certificates via a secure portal link without creating an account.',
            subsections: [
                {
                    title: 'How It Works',
                    content: '',
                    steps: [
                        { step: 'Certificate is issued', description: '' },
                        { step: 'System generates unique 64-character access token', description: '' },
                        { step: 'You send the portal link to the customer', description: '' },
                        { step: 'Customer clicks link and views certificate', description: '' },
                        { step: 'Customer can download PDF and acknowledge receipt', description: '' }
                    ]
                },
                {
                    title: 'Sending Portal Links',
                    content: '',
                    steps: [
                        { step: 'Open the issued certificate', description: '' },
                        { step: 'Click "Customer Portal"', description: '' },
                        { step: 'Copy the link', description: '' },
                        { step: 'Send via email, SMS, or messaging app', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'voiding',
            title: 'Voiding & Superseding',
            subsections: [
                {
                    title: 'Voiding a Certificate',
                    content: 'Use void when a certificate was issued in error or is no longer valid.',
                    steps: [
                        { step: 'Open the issued certificate', description: '' },
                        { step: 'Click "Void Certificate"', description: '' },
                        { step: 'Enter the reason (required)', description: '' },
                        { step: 'Confirm', description: '' }
                    ]
                },
                {
                    title: 'Superseding a Certificate',
                    content: 'Use supersede when issuing a corrected or updated certificate that replaces an existing one.',
                    steps: [
                        { step: 'Create a new certificate for the same job/site', description: '' },
                        { step: 'On issue, select "This supersedes certificate {number}"', description: '' },
                        { step: 'Original certificate status changes to "SUPERSEDED"', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'retest-tracking',
            title: 'Retest Tracking',
            table: {
                headers: ['Certificate Type', 'Default Interval'],
                rows: [
                    ['EICR (Domestic rental)', '5 years'],
                    ['EICR (Domestic owner)', '10 years'],
                    ['EICR (Commercial)', '5 years'],
                    ['Fire Alarm Service', '6 months'],
                    ['Emergency Lighting (Full duration)', '12 months'],
                    ['Emergency Lighting (Functional)', '1 month']
                ]
            },
            subsections: [
                {
                    title: 'Setting Next Inspection Date',
                    content: 'The next inspection date is set automatically based on certificate type, inspection interval specified in the form, and issue date. You can override the calculated date if needed.'
                }
            ]
        },
        {
            id: 'defect-to-quote',
            title: 'EICR Defect-to-Quote Pipeline',
            content: 'Turn EICR observations into remedial work quotations.',
            subsections: [
                {
                    title: 'Creating a Remedial Quote',
                    content: '',
                    steps: [
                        { step: 'Open the EICR certificate (draft or issued)', description: '' },
                        { step: 'In Observations section, click "Create Remedial Quote"', description: '' },
                        { step: 'Check the observations to include', description: '' },
                        { step: 'Click "Generate Quote"', description: '' },
                        { step: 'Edit quote details (pricing, terms)', description: '' },
                        { step: 'Send to customer', description: '' }
                    ]
                },
                {
                    title: 'Quote Line Items',
                    content: 'Each observation becomes a quote line item with description, location, and remedial action notes. You can edit, add, or remove line items in the quote editor.'
                }
            ]
        },
        {
            id: 'permissions',
            title: 'Permissions & Roles',
            table: {
                headers: ['Action', 'Admin', 'Manager', 'Engineer', 'Viewer'],
                rows: [
                    ['Create draft', '✅', '✅', '✅', '❌'],
                    ['Edit draft', '✅', '✅', '✅', '❌'],
                    ['Mark complete', '✅', '✅', '✅', '❌'],
                    ['Issue certificate', '✅', '✅', '⚠️', '❌'],
                    ['Void certificate', '✅', '✅', '❌', '❌'],
                    ['Delete draft', '✅', '✅', '✅', '❌'],
                    ['View certificates', '✅', '✅', '✅', '✅'],
                    ['Download PDF', '✅', '✅', '✅', '✅']
                ]
            },
            subsections: [
                {
                    title: 'Signature Requirements',
                    content: 'Only qualified personnel should sign certificates:',
                    bullets: [
                        'Electrical certificates: Qualified electrician with scheme registration',
                        'Fire safety: Competent fire safety engineer',
                        'Solar PV: MCS certified installer',
                        'The system does not verify qualifications—ensure your team members have appropriate credentials'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Certificate Won\'t Issue',
                    content: '',
                    bullets: [
                        '"Required fields missing" — Check all sections for fields marked with red asterisks, ensure test result tables have data',
                        '"Signatures required" — Add all required signatures for the certificate type, ensure signatures are saved (not just drawn)',
                        '"Validation failed" — Review specific validation messages, check overall assessment matches observations (EICR), ensure string tests pass (Solar PV)'
                    ]
                },
                {
                    title: 'Auto-Population Not Working',
                    content: '',
                    bullets: [
                        'Ensure certificate is linked to a job',
                        'Check job has customer and site assigned',
                        'Verify company profile is complete'
                    ]
                },
                {
                    title: 'Customer Portal Issues',
                    content: '',
                    bullets: [
                        'Check link hasn\'t been truncated in email',
                        'Verify certificate is still issued (not voided)',
                        'Generate new portal link if needed'
                    ]
                }
            ]
        }
    ]
};
