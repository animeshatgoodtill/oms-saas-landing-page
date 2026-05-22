import { IDocGuide } from '@/types';

export const certificatesGuide: IDocGuide = {
    slug: 'certificates',
    title: 'Certificates Module - Complete User Guide',
    description: 'Learn how to create, manage, and issue industry-standard compliance certificates in OpsCel. From EIC to EICR to Fire Alarm Service, generate professional PDFs with built-in validation.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        The Certificates module generates compliance certificates (EIC, EICR, Minor Works, Fire Alarm Service, Solar PV, etc.)
                        directly from completed jobs. Auto-population saves data entry, built-in validation ensures compliance, and professional
                        PDFs match official BS 7671 and industry model forms. Certificates are issued with unique numbers, filed automatically,
                        and delivered to customers via secure portal.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Engineers (draft/complete), Admins & Managers (issue)<br/>
                        <strong>Where it lives:</strong> Certificates menu | From Job detail page<br/>
                        <strong>Availability:</strong> All tiers | All roles (permissions vary)<br/>
                        <strong>Key benefit:</strong> Compliance-ready certificates in minutes, not hours
                    </p>
                </div>
                <p class="mb-4">The Certificates module allows you to create, manage, and issue industry-standard compliance certificates directly within OpsCel. Certificates are linked to jobs, customers, and service addresses, creating a complete audit trail of work performed.</p>
            `,
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
                        'Retest tracking — Track inspection intervals and due dates',
                        'Panel identity carry-forward — Fire Alarm Service pre-fills panel details from previous visits',
                        'Certificate numbering — Unique per-tenant numbering with configurable prefixes'
                    ]
                }
            ],
            table: {
                headers: ['Vertical', 'Certificates', 'Availability'],
                rows: [
                    ['Electrical', 'EIC, EICR, Minor Works, PAT Test', 'All tiers | Electrical vertical enabled'],
                    ['Fire Safety', 'Fire Alarm Service, Fire Alarm Commissioning, Emergency Lighting, Extinguisher Service', 'All tiers | Fire Safety vertical enabled'],
                    ['Low Carbon', 'Solar PV Commissioning', 'All tiers | Low Carbon vertical enabled']
                ]
            }
        },
        {
            id: 'certificate-lifecycle',
            title: 'Certificate Lifecycle',
            content: `
                <p class="mb-6">
                    Certificates progress through a defined status workflow. Understanding the lifecycle helps you know when editing is allowed and when certificates become permanent records.
                </p>
            `,
            subsections: [
                {
                    title: 'Status Flow',
                    content: `
                        <p class="mb-4"><strong>Draft → Completed → Issued → (Voided/Superseded)</strong></p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Draft:</strong> Work in progress — editable, no certificate number assigned</li>
                            <li><strong>Completed:</strong> Engineer marks complete — ready for office review, still editable</li>
                            <li><strong>Issued:</strong> Admin/Manager issues certificate — PDF generated, certificate number assigned, becomes read-only</li>
                            <li><strong>Voided:</strong> Certificate cancelled — retains certificate number, cannot be un-voided</li>
                            <li><strong>Superseded:</strong> Certificate replaced by newer version — original retained for audit trail</li>
                        </ol>
                    `,
                    table: {
                        headers: ['Status', 'Editable?', 'Certificate Number', 'Who Can Change Status'],
                        rows: [
                            ['Draft', 'Yes', 'Not assigned', 'Admin, Manager, Engineer'],
                            ['Completed', 'Yes', 'Not assigned', 'Admin, Manager, Engineer'],
                            ['Issued', 'No', 'Assigned', 'Cannot revert (void/supersede only)'],
                            ['Voided', 'No', 'Retained', 'Admin, Manager only'],
                            ['Superseded', 'No', 'Retained', 'Automatic when superseding']
                        ]
                    }
                },
                {
                    title: 'Visual Status Indicators',
                    content: '',
                    bullets: [
                        '<strong>Grey badge:</strong> Draft',
                        '<strong>Blue badge:</strong> Completed',
                        '<strong>Green badge:</strong> Issued',
                        '<strong>Red badge:</strong> Voided',
                        '<strong>Amber badge:</strong> Superseded'
                    ]
                }
            ]
        },
        {
            id: 'certificate-types',
            title: 'Certificate Types',
            subsections: [
                {
                    title: 'Electrical Installation Certificate (EIC)',
                    content: `
                        <p class="mb-2"><strong>Standard:</strong> BS 7671:2018+A2:2022</p>
                        <p class="mb-4"><strong>When to use:</strong> New electrical installations, additions requiring new circuits, consumer unit replacements, full or partial rewires</p>
                        <p class="mb-4"><strong>Completion time:</strong> 20-40 minutes (depends on circuit count)</p>
                    `,
                    bullets: [
                        '<strong>Key sections:</strong> Contractor details, installation details, supply characteristics, installation particulars, circuit schedule with test results, declaration',
                        '<strong>Signatures required:</strong> Designer, Installer, Inspector (can be same person)',
                        '<strong>Common mistakes:</strong> Missing earth electrode details, incomplete circuit test results, skipping RCD test'
                    ]
                },
                {
                    title: 'Electrical Installation Condition Report (EICR)',
                    content: `
                        <p class="mb-2"><strong>Standard:</strong> BS 7671:2018+A2:2022</p>
                        <p class="mb-4"><strong>When to use:</strong> Periodic inspection and testing, change of occupancy inspections, landlord safety checks (required every 5 years)</p>
                        <p class="mb-4"><strong>Completion time:</strong> 30-60 minutes (depends on observation count)</p>
                    `,
                    bullets: [
                        '<strong>Key sections:</strong> Client details, installation details, condition summary with overall assessment, extent and limitations, observations with classification codes (C1, C2, C3, FI), circuit test results',
                        '<strong>Overall assessment:</strong> Automatically determined — Any C1 or C2 observation = UNSATISFACTORY',
                        '<strong>Signatures required:</strong> Inspector',
                        '<strong>Common mistakes:</strong> Not documenting extent of inspection, vague observation descriptions, missing remedial action recommendations'
                    ]
                },
                {
                    title: 'Minor Works Certificate',
                    content: `
                        <p class="mb-2"><strong>Standard:</strong> BS 7671:2018+A2:2022</p>
                        <p class="mb-4"><strong>When to use:</strong> Adding a socket to existing circuit, adding a light fitting, installing a fused spur</p>
                        <p class="mb-4"><strong>Completion time:</strong> 10-15 minutes</p>
                    `,
                    bullets: [
                        '<strong>Not for:</strong> New circuits, work in special locations (bathrooms, outdoors), consumer unit changes',
                        '<strong>Key sections:</strong> Description of work, circuit details, essential test results',
                        '<strong>Signatures required:</strong> Installer/Tester',
                        '<strong>Common mistakes:</strong> Using for work requiring full EIC, skipping earth continuity test'
                    ]
                },
                {
                    title: 'Fire Alarm Service Certificate',
                    content: `
                        <p class="mb-2"><strong>Standard:</strong> BS 5839-1:2017</p>
                        <p class="mb-4"><strong>When to use:</strong> Routine 6-monthly service visits, annual inspections, post-repair verification</p>
                        <p class="mb-4"><strong>Completion time:</strong> 15-30 minutes</p>
                    `,
                    bullets: [
                        '<strong>Key sections:</strong> System details (category, panel, zones, devices), visual inspection results, functional test results, defects found',
                        '<strong>Signatures required:</strong> Servicing Engineer',
                        '<strong>Common mistakes:</strong> Not recording battery test results, missing zone test outcomes, incomplete defect descriptions',
                        '<strong>Panel carry-forward:</strong> Panel identity auto-fills from previous service certificate for same site'
                    ]
                },
                {
                    title: 'Solar PV Commissioning Certificate',
                    content: `
                        <p class="mb-2"><strong>Standard:</strong> BS EN 62446-1:2016+A1:2018, MCS MIS 3002</p>
                        <p class="mb-4"><strong>When to use:</strong> New solar PV installations, MCS compliance documentation</p>
                        <p class="mb-4"><strong>Completion time:</strong> 25-40 minutes</p>
                    `,
                    bullets: [
                        '<strong>Key sections:</strong> System specification, equipment details, string test results (Voc, Isc, IR), DNO notification status, performance estimate',
                        '<strong>Note:</strong> Supports MCS compliance but does not replace the MCS certificate issued through MCS Installation Database',
                        '<strong>Signatures required:</strong> MCS Certified Installer',
                        '<strong>Common mistakes:</strong> String test results outside ±10% tolerance, missing IR test, DNO notification not documented'
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
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> All tiers | Admin, Manager, Engineer</p>
                        <p class="mb-4">Create a certificate manually when you need to start from scratch.</p>
                    `,
                    steps: [
                        { step: 'Navigate to Certificates in the main menu', description: '' },
                        { step: 'Click "New Certificate"', description: '' },
                        { step: 'Select the certificate type', description: 'EIC, EICR, Minor Works, Fire Alarm Service, etc.' },
                        { step: 'Choose the linked job (optional but recommended)', description: 'Enables auto-population' },
                        { step: 'Click "Create"', description: 'Certificate opens in draft status' }
                    ]
                },
                {
                    title: 'Method 2: From a Job (Recommended)',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> All tiers | Admin, Manager, Engineer</p>
                        <p class="mb-4">Creating from a job provides maximum auto-population.</p>
                    `,
                    steps: [
                        { step: 'Open the job detail page', description: '' },
                        { step: 'Scroll to the Certificates section', description: '' },
                        { step: 'Click "Assign Certificate"', description: '' },
                        { step: 'Select the certificate type', description: '' },
                        { step: 'The certificate is created and linked automatically', description: 'Customer, site, job details pre-filled' }
                    ]
                },
                {
                    title: 'What You Should See',
                    content: `
                        <div class="bg-green-50 border-l-4 border-green-500 p-4">
                            <p class="text-green-800">
                                <strong>✓ Success state:</strong> Certificate opens in draft mode with contractor details, customer name, site address,
                                and job number already filled. Status badge shows "Draft" in grey. You can begin filling sections immediately.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Auto-Population',
                    content: 'When creating a certificate from a job, fields pre-populate automatically:',
                    bullets: [
                        '<strong>Company:</strong> Contractor name, address, phone, email, Companies House registration, VAT number',
                        '<strong>Customer:</strong> Client name, contact name, phone, email',
                        '<strong>Site:</strong> Installation address, postcode',
                        '<strong>Job:</strong> Job number, description, completion date, assigned engineers'
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
            id: 'section-completion',
            title: 'Section-by-Section Completion',
            content: `
                <p class="mb-6">
                    Certificates are divided into sections. Complete sections in order from top to bottom—some sections depend on data from earlier sections.
                </p>
            `,
            subsections: [
                {
                    title: 'General Pattern for Filling Sections',
                    content: `
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Open the section:</strong> Click section heading to expand</li>
                            <li><strong>Fill required fields:</strong> Fields marked with red asterisk (*) are mandatory</li>
                            <li><strong>Fill optional fields:</strong> Add detail as needed for compliance and customer clarity</li>
                            <li><strong>Save progress:</strong> Auto-save triggers every 30 seconds, or click "Save Section"</li>
                            <li><strong>Move to next section:</strong> Green checkmark appears when section is complete</li>
                        </ol>
                    `
                },
                {
                    title: 'Field Validation Rules',
                    content: '',
                    table: {
                        headers: ['Field Type', 'Validation', 'Example'],
                        rows: [
                            ['Postcode', 'UK format required', 'SW1A 1AA'],
                            ['Email', 'Valid email format', 'user@example.com'],
                            ['Phone', 'UK format preferred', '01234 567890 or 07123 456789'],
                            ['Date', 'DD/MM/YYYY or date picker', '20/05/2026'],
                            ['Numeric', 'Positive numbers, decimal allowed', '1.5 or 230'],
                            ['Test results', 'Within expected range (warnings appear)', 'IR: ≥1.0 MΩ']
                        ]
                    }
                },
                {
                    title: 'Required vs Optional Fields',
                    content: `
                        <p class="mb-4"><strong>Required fields:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Marked with red asterisk (*)</li>
                            <li>Certificate cannot be issued until all required fields are completed</li>
                            <li>Validation errors show field name and section location</li>
                        </ul>
                        <p class="mb-4"><strong>Optional fields:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>No asterisk, but may be good practice to complete</li>
                            <li>Example: "Extent and Limitations" in EICR is optional but recommended for clarity</li>
                        </ul>
                    `
                },
                {
                    title: 'Auto-Save Behavior',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p class="text-blue-800">
                                <strong>Auto-save triggers:</strong>
                            </p>
                            <ul class="list-disc pl-6 mt-2 text-blue-800">
                                <li>Every 30 seconds while editing</li>
                                <li>When you navigate to a different section</li>
                                <li>When you add/remove circuit or observation rows</li>
                                <li>When you change certificate status</li>
                            </ul>
                        </div>
                        <p class="mt-4 text-gray-700">
                            You can also manually save by clicking "Save Section" or "Save Certificate" at any time.
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
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager, Engineer</p>
                    `,
                    steps: [
                        { step: 'Navigate to the Circuit Schedule section', description: '' },
                        { step: 'Click "Add Circuit"', description: '' },
                        { step: 'Enter circuit number and designation', description: 'e.g., Circuit 1: Kitchen ring main' },
                        { step: 'Enter protective device details', description: 'Type (MCB/RCBO), rating (e.g., 32A), BS reference' },
                        { step: 'Enter cable details', description: 'Type (e.g., 6242Y), CSA (e.g., 2.5mm²), reference method' },
                        { step: 'Add test results', description: 'IR, Zs, RCD, polarity, continuity' },
                        { step: 'Click "Save"', description: 'Circuit row appears in table' }
                    ]
                },
                {
                    title: 'What You Should See',
                    content: `
                        <p class="text-gray-700">
                            Circuit table populates with one row per circuit. Test results auto-validate against pass criteria. If a result fails
                            (e.g., IR &lt; 1.0 MΩ), the cell highlights in amber with a warning icon. You must investigate before issuing.
                        </p>
                    `
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
            subsections: [
                {
                    title: 'Adding an Observation',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager, Engineer</p>
                    `,
                    steps: [
                        { step: 'Navigate to Observations section', description: '' },
                        { step: 'Click "Add Observation"', description: '' },
                        { step: 'Select classification code', description: 'C1, C2, C3, or FI' },
                        { step: 'Enter observation description', description: 'Be specific: location, nature of defect' },
                        { step: 'Enter remedial action recommendation', description: 'What needs to be done to fix' },
                        { step: 'Select BS 7671 regulation reference', description: 'e.g., Regulation 411.3.1.1' },
                        { step: 'Click "Save"', description: 'Observation appears in table' }
                    ]
                },
                {
                    title: 'Common Observation Examples',
                    content: '',
                    bullets: [
                        '<strong>C1 example:</strong> Exposed live parts at consumer unit — Immediate danger',
                        '<strong>C2 example:</strong> Socket outlet in bathroom within 3m of bath — Potentially dangerous',
                        '<strong>C3 example:</strong> Missing circuit labels at distribution board — Improvement recommended',
                        '<strong>FI example:</strong> Cannot access loft space to inspect cables — Further investigation required'
                    ]
                }
            ],
            table: {
                headers: ['Code', 'Meaning', 'Action Required', 'Affects Overall Result'],
                rows: [
                    ['C1', 'Danger present', 'Immediate action required', 'Makes UNSATISFACTORY'],
                    ['C2', 'Potentially dangerous', 'Urgent action required', 'Makes UNSATISFACTORY'],
                    ['C3', 'Improvement recommended', 'Recommend improvement', 'No'],
                    ['FI', 'Further investigation', 'Cannot fully assess', 'No']
                ]
            }
        },
        {
            id: 'string-tests',
            title: 'String Tests (Solar PV)',
            content: 'Solar PV Commissioning certificates include DC-side string test results.',
            subsections: [
                {
                    title: 'Adding String Test Results',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager, Engineer</p>
                    `,
                    steps: [
                        { step: 'Navigate to String Tests section', description: '' },
                        { step: 'If system configuration is entered: click "Auto-Generate Rows"', description: 'Creates one row per string' },
                        { step: 'Enter measured Voc (open circuit voltage)', description: '' },
                        { step: 'Enter measured Isc (short circuit current)', description: '' },
                        { step: 'Enter IR (insulation resistance)', description: '' },
                        { step: 'Confirm polarity and earth continuity', description: '' },
                        { step: 'Click "Save"', description: 'Auto-validation highlights strings outside tolerance' }
                    ]
                },
                {
                    title: 'Auto-Generate String Tests',
                    content: 'If you\'ve entered the system configuration (number of arrays, strings per array), click "Auto-Generate" to create placeholder rows for all strings. Then fill in the measured values.'
                }
            ],
            table: {
                headers: ['Test', 'Pass Criteria'],
                rows: [
                    ['Voc', 'Within ±5% of expected (warning), ±10% (fail)'],
                    ['Isc', 'Within ±5% of expected (warning), ±10% (fail)'],
                    ['IR', '≥1 MΩ per 40V of string Voc'],
                    ['Polarity', 'Must be correct'],
                    ['Earth continuity', '<1 Ω']
                ]
            }
        },
        {
            id: 'signatures',
            title: 'Signatures',
            content: `
                <p class="mb-6">
                    Certificates require signatures from qualified personnel before they can be issued. The number and type of signatures depend on the certificate type.
                </p>
            `,
            subsections: [
                {
                    title: 'Required Signatures by Certificate Type',
                    content: '',
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
                    }
                },
                {
                    title: 'Adding a Signature',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager, Engineer</p>
                    `,
                    steps: [
                        { step: 'Navigate to the Signatures section', description: '' },
                        { step: 'Select the signatory role', description: 'Designer, Installer, Inspector, etc.' },
                        { step: 'Enter signatory name and registration number', description: 'e.g., NICEIC 12345, NAPIT 67890' },
                        { step: 'Draw signature on the signature pad', description: 'Use mouse, stylus, or finger (touch device)' },
                        { step: 'Click "Save Signature"', description: 'Signature appears below field' }
                    ]
                },
                {
                    title: 'Signature Pad Behavior',
                    content: '',
                    bullets: [
                        '<strong>Touch devices:</strong> Use finger or stylus to draw signature',
                        '<strong>Mouse:</strong> Click and hold to draw signature',
                        '<strong>Clear button:</strong> Click "Clear" to redraw if unhappy with signature',
                        '<strong>Permanent after issue:</strong> Signatures cannot be changed once certificate is issued'
                    ]
                },
                {
                    title: 'Troubleshooting Signatures',
                    content: `
                        <p class="mb-4"><strong>Problem: Signature won&apos;t save</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Ensure signature pad has strokes (not blank)</li>
                            <li>Fill in signatory name and registration number first</li>
                            <li>Click "Save Signature" button (auto-save does not save signatures)</li>
                        </ul>
                        <p class="mb-4"><strong>Problem: Wrong person signed</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>If certificate is still in draft/completed: delete signature and re-add</li>
                            <li>If certificate is issued: must void and reissue with correct signature</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'issuing',
            title: 'Issuing Certificates',
            content: `
                <p class="mb-6">
                    Issuing a certificate makes it official—a certificate number is assigned, PDF is generated, and the certificate becomes read-only.
                </p>
            `,
            subsections: [
                {
                    title: 'Pre-Issue Validation',
                    content: `
                        <p class="mb-4">Before a certificate can be issued, the system validates:</p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>All required fields populated:</strong> No empty mandatory fields (red asterisks)</li>
                            <li><strong>All required signatures present:</strong> Based on certificate type (see Signatures table)</li>
                            <li><strong>Type-specific rules pass:</strong>
                                <ul class="list-disc pl-6 mt-1">
                                    <li>EIC: At least one circuit with test results</li>
                                    <li>EICR: Overall assessment matches observations (C1/C2 = UNSATISFACTORY)</li>
                                    <li>Solar PV: String tests within ±10% tolerance</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                {
                    title: 'How to Issue',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> All tiers | Admin, Manager | Engineer (limited—see permissions)</p>
                    `,
                    steps: [
                        { step: 'Complete all form sections', description: 'Green checkmarks appear on completed sections' },
                        { step: 'Add required signatures', description: '' },
                        { step: 'Click "Issue Certificate"', description: 'Top-right corner of certificate page' },
                        { step: 'Review any validation warnings', description: 'Fix errors before continuing' },
                        { step: 'Confirm issue', description: 'Type "ISSUE" if prompted (destructive action)' }
                    ]
                },
                {
                    title: 'What You Should See',
                    content: `
                        <div class="bg-green-50 border-l-4 border-green-500 p-4">
                            <p class="text-green-800">
                                <strong>✓ Success state:</strong> Certificate status changes to "Issued" (green badge). Certificate number appears
                                (e.g., EIC-000042). PDF downloads automatically. "Download PDF" and "Customer Portal" buttons appear. All fields
                                become read-only.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Certificate Number Format',
                    content: `
                        <p class="mb-4">Certificate numbers follow this pattern: <code>[PREFIX]-[COUNTER]</code></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li><strong>PREFIX:</strong> Configurable in Settings → Document Numbering (e.g., EIC, EICR, CERT)</li>
                            <li><strong>COUNTER:</strong> Auto-increments per certificate type (e.g., 000001, 000002, etc.)</li>
                            <li><strong>Per-tenant unique:</strong> Certificate numbers are unique within your account, not globally</li>
                            <li><strong>Cannot be changed:</strong> Once assigned, certificate number is permanent (even if voided)</li>
                        </ul>
                    `
                },
                {
                    title: 'Retest Date Calculation',
                    content: `
                        <p class="mb-4">When issuing, the system calculates the next inspection due date based on:</p>
                        <ol class="list-decimal pl-6 space-y-1 text-gray-700">
                            <li>Certificate type default interval (see Retest Reminders section)</li>
                            <li>Inspection interval specified in the form (if overridden)</li>
                            <li>Issue date (today)</li>
                        </ol>
                        <p class="mt-4 text-gray-700">
                            Example: EICR issued today (20 May 2026) with 5-year interval → Next due date: 20 May 2031
                        </p>
                    `
                }
            ]
        },
        {
            id: 'customer-portal',
            title: 'Customer Delivery',
            content: `
                <p class="mb-6">
                    Customers access certificates via a secure portal link—no login required. They can view, download, and acknowledge receipt.
                </p>
            `,
            subsections: [
                {
                    title: 'Portal Link Generation',
                    content: `
                        <p class="mb-4">When a certificate is issued, the system generates a unique 64-character access token.</p>
                        <p class="mb-4">Portal URL format: <code>https://app.opscel.com/portal/cert/[TOKEN]</code></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Token is cryptographically random and unguessable</li>
                            <li>Token does not expire (permanent access)</li>
                            <li>Customer can bookmark the link for future access</li>
                        </ul>
                    `
                },
                {
                    title: 'Email Delivery',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager</p>
                    `,
                    steps: [
                        { step: 'Open the issued certificate', description: '' },
                        { step: 'Click "Send to Customer"', description: '' },
                        { step: 'Verify customer email address', description: '' },
                        { step: 'Customize email message (optional)', description: '' },
                        { step: 'Click "Send"', description: 'Email sent with portal link' }
                    ]
                },
                {
                    title: 'PDF Download',
                    content: `
                        <p class="mb-4">Customers can download the PDF directly from the portal. The PDF is regenerated on-demand with latest data.</p>
                    `
                },
                {
                    title: 'Customer Acknowledgment Tracking',
                    content: `
                        <p class="mb-4">
                            The portal tracks when customers view and download certificates. You can see this activity in the certificate detail page under "Delivery History."
                        </p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>First viewed:</strong> Timestamp when customer first opened portal link</li>
                            <li><strong>Downloaded:</strong> Count of PDF downloads</li>
                            <li><strong>Acknowledged:</strong> Customer clicked "I acknowledge receipt" button</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'retest-reminders',
            title: 'Retest Reminders',
            content: `
                <p class="mb-6">
                    OpsCel automatically sends email reminders 14 days before certificates are due for re-inspection. This helps you maintain compliance and generates repeat business.
                </p>
            `,
            subsections: [
                {
                    title: 'How Retest Dates Are Calculated',
                    content: `
                        <p class="mb-4">Next inspection due date = Issue date + Inspection interval</p>
                        <p class="mb-4"><strong>Example:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Certificate type: EICR (Domestic rental)</li>
                            <li>Issue date: 20 May 2026</li>
                            <li>Default interval: 5 years</li>
                            <li>Next due date: 20 May 2031</li>
                            <li>Reminder sent: 6 May 2031 (14 days before due)</li>
                        </ul>
                    `
                },
                {
                    title: 'Default Retest Intervals',
                    content: '',
                    table: {
                        headers: ['Certificate Type', 'Default Interval', 'Can Override?'],
                        rows: [
                            ['EICR (Domestic rental)', '5 years', 'Yes'],
                            ['EICR (Domestic owner)', '10 years', 'Yes'],
                            ['EICR (Commercial)', '5 years', 'Yes'],
                            ['Fire Alarm Service', '6 months', 'Yes'],
                            ['Emergency Lighting (Full duration)', '12 months', 'Yes'],
                            ['Emergency Lighting (Functional)', '1 month', 'Yes'],
                            ['PAT Test (Class I)', '12 months', 'Yes'],
                            ['Solar PV Inspection', '12 months', 'Yes']
                        ]
                    }
                },
                {
                    title: 'Cron Timing',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-blue-800">
                                <strong>Cron schedule:</strong> Every day at <strong>05:00 UTC</strong> (UK-aligned: 05:00 GMT / 06:00 BST)
                            </p>
                        </div>
                        <p class="mb-4">What happens during each run:</p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700">
                            <li>System scans all <strong>issued</strong> certificates (not draft/completed)</li>
                            <li>Calculates days until next due date</li>
                            <li>If exactly 14 days before due: sends reminder email</li>
                            <li>Email sent to: customer contact email + internal admin notification</li>
                        </ol>
                    `
                },
                {
                    title: 'Email Content and Recipients',
                    content: `
                        <p class="mb-4"><strong>Customer email includes:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Certificate type and number</li>
                            <li>Site address</li>
                            <li>Next due date</li>
                            <li>Link to book re-inspection (if online booking enabled)</li>
                            <li>Your company contact details</li>
                        </ul>
                        <p class="mb-4"><strong>Internal notification sent to:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Account owner (Super Admin)</li>
                            <li>Users with "Receive retest reminders" notification enabled (Settings → Notifications)</li>
                        </ul>
                    `
                },
                {
                    title: 'How to Override Retest Dates',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager</p>
                    `,
                    steps: [
                        { step: 'Open the issued certificate', description: '' },
                        { step: 'Click "Edit Retest Date"', description: 'Only available for issued certificates' },
                        { step: 'Enter new next due date', description: '' },
                        { step: 'Click "Save"', description: 'Retest reminder will use new date' }
                    ]
                }
            ]
        },
        {
            id: 'voiding',
            title: 'Voiding & Superseding',
            subsections: [
                {
                    title: 'When to Void vs Supersede',
                    content: `
                        <p class="mb-4"><strong>Void:</strong> Certificate issued in error, customer requested cancellation, or work was not actually completed</p>
                        <p class="mb-4"><strong>Supersede:</strong> Issuing a corrected or updated certificate that replaces an existing one (e.g., found error after issue, customer requested changes)</p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p class="text-amber-800">
                                <strong>Audit trail:</strong> Both void and supersede preserve the original certificate for compliance. The certificate number is retained and cannot be reused.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Voiding a Certificate',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager only</p>
                    `,
                    steps: [
                        { step: 'Open the issued certificate', description: '' },
                        { step: 'Click "Void Certificate"', description: '' },
                        { step: 'Enter the reason (required)', description: 'Reason is logged for audit trail' },
                        { step: 'Type "VOID" to confirm', description: 'Destructive action confirmation' },
                        { step: 'Click "Confirm Void"', description: 'Certificate status changes to "Voided" (red badge)' }
                    ]
                },
                {
                    title: 'Superseding a Certificate',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager</p>
                    `,
                    steps: [
                        { step: 'Create a new certificate for the same job/site', description: 'Follow normal creation process' },
                        { step: 'Fill in corrections or updates', description: '' },
                        { step: 'Click "Issue Certificate"', description: '' },
                        { step: 'On issue screen: select "This supersedes certificate {number}"', description: 'Dropdown shows all issued certificates for this job/site' },
                        { step: 'Confirm issue', description: 'Original certificate status changes to "SUPERSEDED", new certificate issued' }
                    ]
                },
                {
                    title: 'Certificate Number Retention',
                    content: `
                        <p class="text-gray-700">
                            Voided and superseded certificates retain their certificate numbers. The numbers cannot be reused. This ensures audit compliance—you can always trace the certificate history.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'custom-templates',
            title: 'Custom Templates & Accreditation Badges',
            content: `
                <p class="mb-6">
                    Customize certificate PDFs with your branding and accreditation badges.
                </p>
            `,
            subsections: [
                {
                    title: 'Accessing Template Settings',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Super Admin</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Branding', description: '' },
                        { step: 'Click "Certificate Templates"', description: '' },
                        { step: 'See list of certificate types', description: '' },
                        { step: 'Click a certificate type to edit its template', description: '' }
                    ]
                },
                {
                    title: 'PDF Layout Customization',
                    content: '',
                    bullets: [
                        '<strong>Logo placement:</strong> Upload logo (recommended: 300x100px PNG, transparent background)',
                        '<strong>Header color:</strong> Hex color for header background',
                        '<strong>Footer text:</strong> Add company tagline or certification details',
                        '<strong>Font size:</strong> Adjust for readability (12pt standard, 10pt for dense forms)'
                    ]
                },
                {
                    title: 'Accreditation Badge Requirements',
                    content: `
                        <p class="mb-4">Accreditation badges appear in the PDF footer to demonstrate compliance with industry schemes.</p>
                        <p class="mb-4"><strong>Supported badges:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>NICEIC (electrical)</li>
                            <li>NAPIT (electrical)</li>
                            <li>BAFE (fire safety)</li>
                            <li>FIA (fire safety)</li>
                            <li>MCS (renewable energy)</li>
                        </ul>
                        <p class="mb-4"><strong>Badge upload requirements:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Format: PNG with transparent background</li>
                            <li>Size: 150x50px (height will be capped at 50px)</li>
                            <li>Location: Settings → Company Profile → Accreditation Badges</li>
                        </ul>
                    `
                },
                {
                    title: 'Footer Chrome Spacing',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p class="text-amber-800">
                                <strong>Important:</strong> Certificate PDF pages must reserve space for footer chrome (page numbers, accreditation badges).
                                If content fills the page to the bottom margin, badges may be cut off or overlap content.
                            </p>
                        </div>
                        <p class="mt-4 text-gray-700">
                            <strong>Fix:</strong> In template settings, set "Footer margin" to at least 15mm to ensure sufficient space.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'For Engineers',
                    content: '',
                    bullets: [
                        '<strong>Complete sections on-site:</strong> Fill test results and observations while fresh in memory',
                        '<strong>Capture signatures before leaving:</strong> Difficult to get signatures after engineer has left site',
                        '<strong>Use auto-save:</strong> Changes save every 30 seconds—no need to click Save constantly',
                        '<strong>Take photos:</strong> Link photos to certificate from job detail page for visual evidence',
                        '<strong>Mark complete when done:</strong> Lets office know certificate is ready for review'
                    ]
                },
                {
                    title: 'For Office Staff',
                    content: '',
                    bullets: [
                        '<strong>Review within 24 hours:</strong> Check completed certificates for missing data or validation errors',
                        '<strong>Check observations before issue:</strong> Ensure descriptions are clear and remedial actions are specific',
                        '<strong>Verify customer email:</strong> Double-check email address before sending portal link',
                        '<strong>Download PDF for records:</strong> Save copy to local backup before issuing',
                        '<strong>Monitor delivery history:</strong> Follow up if customer hasn&apos;t viewed certificate within 7 days'
                    ]
                },
                {
                    title: 'For Admins',
                    content: '',
                    bullets: [
                        '<strong>Configure templates once:</strong> Set up branding and accreditation badges during onboarding',
                        '<strong>Review retest calendars monthly:</strong> Ensure reminders are sending and customers are booking re-inspections',
                        '<strong>Audit certificate numbering:</strong> Verify no gaps or duplicates in certificate number sequence',
                        '<strong>Train engineers on validation:</strong> Ensure team understands pass/fail criteria for test results',
                        '<strong>Set notification preferences:</strong> Enable internal retest reminder emails for relevant team members'
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
            id: 'defect-to-quote',
            title: 'EICR Defect-to-Quote Pipeline',
            content: 'Turn EICR observations into remedial work quotations.',
            subsections: [
                {
                    title: 'Creating a Remedial Quote',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Admin, Manager</p>
                    `,
                    steps: [
                        { step: 'Open the EICR certificate (draft or issued)', description: '' },
                        { step: 'In Observations section, click "Create Remedial Quote"', description: '' },
                        { step: 'Check the observations to include', description: 'C1 and C2 auto-selected' },
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
                        'Electrical certificates: Qualified electrician with scheme registration (NICEIC, NAPIT, etc.)',
                        'Fire safety: Competent fire safety engineer with relevant accreditation',
                        'Solar PV: MCS certified installer',
                        'The system does not verify qualifications—ensure your team members have appropriate credentials before signing'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Certificate Won\'t Issue — New Validation Rules',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> "Issue Certificate" button is disabled or shows validation errors.</p>
                        <p class="mb-4"><strong>Checks:</strong></p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700">
                            <li><strong>"Required fields missing":</strong> Check all sections for fields marked with red asterisks (*). Ensure test result tables have at least one row of data.</li>
                            <li><strong>"Signatures required":</strong> Add all required signatures for the certificate type. Ensure signatures are saved (click "Save Signature" after drawing)—auto-save does not save signatures.</li>
                            <li><strong>"Validation failed":</strong> Review specific validation messages:
                                <ul class="list-disc pl-6 mt-1">
                                    <li>EICR: Overall assessment must match observations (C1/C2 = UNSATISFACTORY)</li>
                                    <li>Solar PV: String test results must be within ±10% tolerance</li>
                                    <li>EIC: At least one circuit with test results must exist</li>
                                </ul>
                            </li>
                        </ol>
                    `
                },
                {
                    title: 'PDF Shows Wrong Logo — Branding Cache',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Issued certificate PDF shows old logo or no logo.</p>
                        <p class="mb-4"><strong>Cause:</strong> Branding settings are cached for performance. Cache may not have updated yet.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Branding', description: '' },
                        { step: 'Click "Clear Cache"', description: '' },
                        { step: 'Reissue certificate or regenerate PDF', description: '' }
                    ]
                },
                {
                    title: 'Signature Disappeared — Save Requirement',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Drew signature but it's not appearing in certificate.</p>
                        <p class="mb-4"><strong>Cause:</strong> Signatures must be explicitly saved—auto-save does not apply to signatures.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Redraw signature on signature pad', description: '' },
                        { step: 'Click "Save Signature" button', description: 'Do not navigate away before clicking' },
                        { step: 'Verify signature appears below the field', description: '' }
                    ]
                },
                {
                    title: 'Retest Email Didn\'t Send — Check Cron Logs',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Certificate is 14 days from due date but no reminder email sent.</p>
                        <p class="mb-4"><strong>Checks:</strong></p>
                        <ol class="list-decimal pl-6 space-y-1 text-gray-700">
                            <li>Verify certificate is <strong>issued</strong> (not draft/completed)</li>
                            <li>Verify next due date is correct (Settings → Edit Retest Date)</li>
                            <li>Check cron run succeeded (Settings → Cron Logs, filter by date)</li>
                            <li>Verify customer email is valid (Customer detail page)</li>
                            <li>If cron shows failure: contact support@opscel.com with certificate number</li>
                        </ol>
                    `
                },
                {
                    title: 'Certificate Number Duplicate — Per-Tenant Unique',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Seeing same certificate number from another contractor.</p>
                        <p class="mb-4"><strong>Reason:</strong> Certificate numbers are unique <strong>per-tenant</strong>, not globally. Another OpsCel account can have the same certificate number as yours.</p>
                        <p class="text-gray-700">
                            This is by design—certificate numbers only need to be unique within your business. Combine certificate number with your company name for global uniqueness.
                        </p>
                    `
                },
                {
                    title: 'Auto-Population Not Working',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Created certificate from job but fields are empty.</p>
                        <p class="mb-4"><strong>Checks:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Ensure certificate is linked to a job (check "Linked Job" field)</li>
                            <li>Check job has customer and site assigned (Job detail page)</li>
                            <li>Verify company profile is complete (Settings → Company Profile)</li>
                            <li>If creating from Certificates list: select job during creation</li>
                        </ul>
                    `
                },
                {
                    title: 'Customer Portal Issues',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Customer cannot access portal link.</p>
                        <p class="mb-4"><strong>Checks:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Check link hasn't been truncated in email (common with long URLs)</li>
                            <li>Verify certificate is still issued (not voided)</li>
                            <li>Generate new portal link if needed (certificate detail page → "Customer Portal" → "Generate New Link")</li>
                            <li>Test link in incognito/private browsing mode to rule out browser cache</li>
                        </ul>
                    `
                },
                {
                    title: 'Footer Logo Cut Off — Page Padding Issue',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Accreditation badge or page number cut off at bottom of PDF.</p>
                        <p class="mb-4"><strong>Cause:</strong> Page content fills to bottom margin, not reserving space for footer chrome.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Branding → Certificate Templates', description: '' },
                        { step: 'Select the affected certificate type', description: '' },
                        { step: 'Set "Footer margin" to at least 15mm', description: '' },
                        { step: 'Save and regenerate PDF', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Can I edit a certificate after issuing?',
                    content: `
                        <p class="text-gray-700">
                            No. Once issued, certificates become read-only for compliance. If you need to correct an error, you must void the original and issue a new certificate. Use supersede if you want to link the new certificate to the old one for audit trail.
                        </p>
                    `
                },
                {
                    title: 'Why does the PDF show the wrong logo?',
                    content: `
                        <p class="text-gray-700">
                            Branding settings are cached for performance. If you recently changed your logo, clear the branding cache (Settings → Branding → Clear Cache) and regenerate the PDF.
                        </p>
                    `
                },
                {
                    title: 'When do retest emails go out?',
                    content: `
                        <p class="text-gray-700">
                            Retest reminder emails are sent <strong>14 days before the next due date</strong>. The cron runs daily at 05:00 UTC (05:00 GMT / 06:00 BST). Only issued certificates trigger reminders—drafts and completed certificates are not included.
                        </p>
                    `
                },
                {
                    title: 'How do I supersede a certificate without losing the original?',
                    content: `
                        <p class="text-gray-700">
                            Use the supersede workflow: create a new certificate, issue it, and on the issue screen select "This supersedes certificate {number}." The original certificate status changes to "SUPERSEDED" (amber badge) and remains viewable. Both certificates retain their certificate numbers for audit compliance.
                        </p>
                    `
                },
                {
                    title: 'Are certificate numbers unique globally?',
                    content: `
                        <p class="text-gray-700">
                            No. Certificate numbers are unique <strong>per-tenant</strong> (per OpsCel account), not globally. Another contractor using OpsCel can have the same certificate number (e.g., EIC-000042). This is by design—combine certificate number with your company name for global uniqueness.
                        </p>
                    `
                },
                {
                    title: 'Why is the footer logo cut off?',
                    content: `
                        <p class="text-gray-700">
                            PDF pages must reserve space for footer chrome (page numbers, accreditation badges). If content fills the page to the bottom margin, badges may be cut off. Fix: Set "Footer margin" to at least 15mm in Settings → Branding → Certificate Templates.
                        </p>
                    `
                },
                {
                    title: 'Can I change the certificate number format?',
                    content: `
                        <p class="text-gray-700">
                            Yes. Configure prefixes in Settings → Document Numbering. You can set different prefixes for each certificate type (e.g., EIC-, EICR-, CERT-). The counter auto-increments and cannot be manually changed. Changes apply to new certificates only—existing certificate numbers are not affected.
                        </p>
                    `
                },
                {
                    title: 'What happens if I delete a certificate?',
                    content: `
                        <p class="text-gray-700">
                            Issued certificates cannot be deleted—you must void them. Draft and completed certificates can be deleted. Deleting removes the certificate permanently and cannot be undone. The certificate number (if assigned) is not reused.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Completing jobs that generate certificates',
            href: '/docs/field-service'
        },
        {
            title: 'Defects to Quotation',
            description: 'Logging defects that require remedial certificates',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'Converting certified work into invoices',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Asset Tracking',
            description: 'Assets linked to certificates for audit trails',
            href: '/docs/asset-tracking'
        }
    ]
};
