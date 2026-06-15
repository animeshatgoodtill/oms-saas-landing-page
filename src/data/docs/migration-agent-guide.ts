import { IDocGuide } from '@/types';

export const migrationAgentGuide: IDocGuide = {
    slug: 'migration-agent',
    title: 'Migration Agent',
    description: 'AI-powered document import from cloud storage. Import legacy PDFs, invoices, quotes, certificates, and photos automatically with intelligent classification and entity matching.',
    lastUpdated: '2026-05-20',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        Migration Agent connects to your cloud storage (Google Drive, OneDrive, Dropbox), scans your legacy documents,
                        uses AI to classify them (invoice, quote, certificate, photo), matches them to customers and jobs, then imports
                        them into Opscel. It&apos;s a one-time setup task to bring historical records into your new system.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Super Admins, Admins<br/>
                        <strong>Where it lives:</strong> Settings → Migration Agent<br/>
                        <strong>Availability:</strong> All tiers | data.migrate permission<br/>
                        <strong>Key benefit:</strong> Avoid manual re-entry of thousands of historical documents
                    </p>
                </div>
                <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                    <p class="text-amber-800">
                        <strong>Important:</strong> Migration Agent is <strong>credit-based</strong>. Credits are consumed during the
                        <strong>scan phase</strong> (not import). Each document scanned costs 1 credit. Check your credit balance before starting.
                    </p>
                </div>
            `
        },
        {
            id: 'when-to-use',
            title: 'When to Use Migration Agent',
            subsections: [
                {
                    title: 'Ideal Use Cases',
                    content: '',
                    bullets: [
                        '<strong>Moving from paper/folders to Opscel:</strong> You have years of PDFs in Google Drive or Dropbox',
                        '<strong>Consolidating storage:</strong> Documents scattered across multiple cloud accounts',
                        '<strong>Historical records:</strong> Need compliance audit trail for old jobs',
                        '<strong>Customer onboarding:</strong> Bringing existing customer documents into Opscel'
                    ]
                },
                {
                    title: 'When NOT to Use',
                    content: 'Migration Agent is designed for legacy imports. Do not use if:',
                    bullets: [
                        'Documents are already in Opscel (use search instead)',
                        'You need real-time sync (Migration Agent is one-time import)',
                        'Documents are actively being edited (import creates static copies)',
                        'You have fewer than 50 documents (manual upload may be faster)'
                    ]
                }
            ]
        },
        {
            id: 'permissions-credits',
            title: 'Permissions & Credits',
            subsections: [
                {
                    title: 'Who Can Use Migration Agent',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> All tiers | Super Admin, Admin | data.migrate permission</p>
                        <p class="mb-4">
                            Only users with the <code>data.migrate</code> permission can access Migration Agent. This is restricted to prevent
                            accidental imports by field engineers.
                        </p>
                    `
                },
                {
                    title: 'Credit System Explained',
                    content: `
                        <p class="mb-4">
                            Migration Agent uses a credit-based model. Credits are consumed <strong>during the scan phase</strong> when the AI
                            analyzes each document. The import phase does not consume additional credits.
                        </p>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-blue-800">
                                <strong>Credit consumption:</strong>
                            </p>
                            <ul class="list-disc pl-6 mt-2 text-blue-800">
                                <li>1 credit per document scanned</li>
                                <li>Credits consumed even if you don&apos;t import</li>
                                <li>No refunds for incorrectly classified documents</li>
                                <li>Scanning the same folder twice consumes credits again</li>
                            </ul>
                        </div>
                    `,
                    table: {
                        headers: ['Folder Size', 'Estimated Credits', 'Scan Duration'],
                        rows: [
                            ['100 documents', '100 credits', '1-2 minutes'],
                            ['500 documents', '500 credits', '5-8 minutes'],
                            ['1,000 documents', '1,000 credits', '10-15 minutes'],
                            ['5,000 documents', '5,000 credits', '45-60 minutes']
                        ]
                    }
                },
                {
                    title: 'Checking Credit Balance',
                    content: `
                        <p class="mb-4">Before starting a scan:</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Look for "Credit Balance" at top of page', description: '' },
                        { step: 'If balance is too low: contact support@opscel.com to purchase more', description: '' }
                    ]
                },
                {
                    title: 'What Happens If Credits Run Out',
                    content: `
                        <p class="text-gray-700">
                            If your credit balance reaches zero during a scan, the scan stops immediately. Documents scanned up to that point
                            remain in the staging area. You cannot complete the import until you purchase more credits and resume the scan.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'connecting-storage',
            title: 'Connecting Cloud Storage',
            content: `
                <p class="mb-6">
                    Migration Agent supports three cloud storage platforms. You connect via OAuth, select a folder, and the agent scans all
                    PDFs and images in that folder (including subfolders).
                </p>
            `,
            subsections: [
                {
                    title: 'Supported Platforms',
                    content: '',
                    bullets: [
                        '<strong>Google Drive:</strong> Personal and Workspace accounts',
                        '<strong>OneDrive:</strong> Personal and Business accounts (Office 365)',
                        '<strong>Dropbox:</strong> Personal and Business accounts'
                    ]
                },
                {
                    title: 'Connecting Google Drive',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "Connect Google Drive"', description: '' },
                        { step: 'Sign in with your Google account', description: 'Must have access to the folder you want to scan' },
                        { step: 'Grant Opscel read-only access', description: 'Opscel can only read files, not modify or delete' },
                        { step: 'Select the folder to scan', description: 'All subfolders will be included' },
                        { step: 'Click "Confirm Connection"', description: 'You are now connected' }
                    ]
                },
                {
                    title: 'Connecting OneDrive',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "Connect OneDrive"', description: '' },
                        { step: 'Sign in with your Microsoft account', description: 'Personal or Office 365' },
                        { step: 'Grant Opscel read-only access', description: '' },
                        { step: 'Select the folder to scan', description: '' },
                        { step: 'Click "Confirm Connection"', description: '' }
                    ]
                },
                {
                    title: 'Connecting Dropbox',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "Connect Dropbox"', description: '' },
                        { step: 'Sign in with your Dropbox account', description: '' },
                        { step: 'Grant Opscel read-only access', description: '' },
                        { step: 'Select the folder to scan', description: '' },
                        { step: 'Click "Confirm Connection"', description: '' }
                    ]
                },
                {
                    title: 'Access Scope',
                    content: `
                        <div class="bg-green-50 border-l-4 border-green-500 p-4">
                            <p class="text-green-800">
                                <strong>Security note:</strong> Opscel requests <strong>read-only</strong> access to your selected folder.
                                The agent cannot modify, delete, or move files. OAuth tokens are encrypted and stored securely.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'running-scan',
            title: 'Running a Scan',
            content: `
                <p class="mb-6">
                    Once connected, you initiate a scan. The agent discovers all documents in the folder, extracts text, and prepares them
                    for AI classification.
                </p>
            `,
            subsections: [
                {
                    title: 'What Happens During a Scan',
                    content: `
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Discovery:</strong> Agent lists all files in the folder (recursively)</li>
                            <li><strong>Filtering:</strong> Only PDFs and images (JPG, PNG) are processed</li>
                            <li><strong>Deduplication:</strong> Files with identical content (by hash) are skipped</li>
                            <li><strong>Text extraction:</strong> OCR for images, text parsing for PDFs</li>
                            <li><strong>Credit consumption:</strong> 1 credit per document processed</li>
                            <li><strong>Staging:</strong> Documents queued for AI classification</li>
                        </ol>
                    `
                },
                {
                    title: 'Supported File Types',
                    content: '',
                    table: {
                        headers: ['File Type', 'Supported', 'Notes'],
                        rows: [
                            ['PDF', 'Yes', 'Text-based and scanned (OCR applied)'],
                            ['JPG/JPEG', 'Yes', 'OCR for text extraction'],
                            ['PNG', 'Yes', 'OCR for text extraction'],
                            ['Word/Excel', 'No', 'Convert to PDF first'],
                            ['ZIP archives', 'No', 'Extract files before scanning']
                        ]
                    }
                },
                {
                    title: 'Starting a Scan',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Verify your cloud storage is connected', description: '' },
                        { step: 'Check credit balance is sufficient', description: '' },
                        { step: 'Click "Start Scan"', description: '' },
                        { step: 'Confirm scan start', description: 'Progress bar appears—scan runs in background' }
                    ]
                },
                {
                    title: 'Progress Indicators',
                    content: '',
                    bullets: [
                        '<strong>Files discovered:</strong> Total count of PDFs and images found',
                        '<strong>Files processed:</strong> Documents that passed deduplication',
                        '<strong>Credits consumed:</strong> Real-time credit usage',
                        '<strong>Estimated time remaining:</strong> Based on current processing speed'
                    ]
                }
            ]
        },
        {
            id: 'ai-classification',
            title: 'AI Classification Process',
            content: `
                <p class="mb-6">
                    After scanning, the AI classifies each document into one of six types. This happens automatically—you review and correct
                    classifications in the staging area.
                </p>
            `,
            subsections: [
                {
                    title: 'Document Types Recognized',
                    content: '',
                    table: {
                        headers: ['Type', 'What It Detects', 'Confidence Threshold'],
                        rows: [
                            ['Invoice', 'Invoice number, amounts, payment terms', '≥80%'],
                            ['Quote', 'Quote number, validity dates, line items', '≥75%'],
                            ['Certificate', 'Certificate number, test results, compliance standards', '≥85%'],
                            ['Photo', 'Image without text, site photos, equipment photos', '≥90%'],
                            ['Worksheet', 'Form fields, checklists, inspection results', '≥70%'],
                            ['Other', 'Correspondence, notes, unclassified', 'N/A (fallback)']
                        ]
                    }
                },
                {
                    title: 'How AI Determines Document Type',
                    content: `
                        <p class="mb-4">The AI uses several signals:</p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Text patterns:</strong> Keywords like "Invoice", "Quote", "Certificate No."</li>
                            <li><strong>Structural layout:</strong> Table positions, header/footer patterns</li>
                            <li><strong>Numeric patterns:</strong> Invoice totals, VAT rates, test result ranges</li>
                            <li><strong>Compliance standards:</strong> BS 7671, BS 5839 references</li>
                            <li><strong>Filename hints:</strong> "INV-001.pdf", "EICR-12345.pdf"</li>
                        </ul>
                    `
                },
                {
                    title: 'Confidence Scores',
                    content: `
                        <p class="mb-4">Each classification has a confidence score (0-100%):</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li><strong>90-100%:</strong> High confidence—likely correct</li>
                            <li><strong>75-89%:</strong> Medium confidence—review recommended</li>
                            <li><strong>Below 75%:</strong> Low confidence—manual review required</li>
                        </ul>
                        <p class="text-gray-700">
                            Low-confidence documents are flagged in the staging area for manual classification.
                        </p>
                    `
                },
                {
                    title: 'Accuracy Rates',
                    content: `
                        <p class="mb-4">Based on testing with 10,000+ contractor documents:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Invoices:</strong> 94% accuracy</li>
                            <li><strong>Quotes:</strong> 91% accuracy</li>
                            <li><strong>Certificates:</strong> 89% accuracy</li>
                            <li><strong>Photos:</strong> 97% accuracy</li>
                            <li><strong>Worksheets:</strong> 82% accuracy</li>
                        </ul>
                    `
                },
                {
                    title: 'What If AI Gets It Wrong?',
                    content: `
                        <p class="text-gray-700">
                            All classifications are <strong>reviewable</strong> in the staging area before import. You can manually override the
                            AI&apos;s decision, reassign the document type, and exclude documents from import. No documents are imported until you
                            explicitly approve.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'entity-matching',
            title: 'Entity Matching',
            content: `
                <p class="mb-6">
                    After classification, the AI attempts to match documents to existing customers, jobs, and assets in your Opscel account.
                    This links legacy documents to the correct records automatically.
                </p>
            `,
            subsections: [
                {
                    title: 'How Matching Works',
                    content: `
                        <p class="mb-4">The AI uses fuzzy matching algorithms:</p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Extract entities:</strong> Customer names, addresses, job numbers from document text</li>
                            <li><strong>Search Opscel database:</strong> Find similar customer names, addresses, job numbers</li>
                            <li><strong>Calculate similarity:</strong> Levenshtein distance for text, geocoding for addresses</li>
                            <li><strong>Assign confidence:</strong> Match score 0-100%</li>
                            <li><strong>Suggest best match:</strong> Highest confidence match is pre-selected</li>
                        </ol>
                    `
                },
                {
                    title: 'Matching Algorithms',
                    content: '',
                    bullets: [
                        '<strong>Customer name matching:</strong> Handles abbreviations (ABC Ltd vs ABC Limited), typos, case differences',
                        '<strong>Address matching:</strong> Normalizes postcodes, street names, uses geocoding for verification',
                        '<strong>Job number matching:</strong> Exact or partial match on job numbers found in document text',
                        '<strong>Date-based hints:</strong> If document dated June 2023, prioritize jobs from that timeframe'
                    ]
                },
                {
                    title: 'Confidence Thresholds',
                    content: '',
                    table: {
                        headers: ['Confidence', 'Meaning', 'Action'],
                        rows: [
                            ['90-100%', 'Very likely correct', 'Auto-matched—review optional'],
                            ['75-89%', 'Probably correct', 'Review recommended'],
                            ['50-74%', 'Uncertain', 'Manual review required'],
                            ['Below 50%', 'No good match', 'Marked as orphan']
                        ]
                    }
                },
                {
                    title: 'Unmatched Documents (Orphans)',
                    content: `
                        <p class="mb-4">
                            If the AI cannot find a confident match, the document is marked as an <strong>orphan</strong>. Orphans are still
                            imported, but not linked to any customer or job.
                        </p>
                        <p class="mb-4"><strong>What to do with orphans:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Review in staging area</li>
                            <li>Manually assign to a customer/job</li>
                            <li>Or exclude from import if document is not needed</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'staging-review',
            title: 'Reviewing & Editing Staged Items',
            content: `
                <p class="mb-6">
                    The staging area is where you review all AI decisions before importing. This is your safety net—nothing is committed to
                    Opscel until you explicitly approve.
                </p>
            `,
            subsections: [
                {
                    title: 'Accessing the Staging Area',
                    content: `
                        <p class="mb-4">After scan completes:</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "View Staging Area"', description: '' },
                        { step: 'See all scanned documents with AI classifications', description: '' }
                    ]
                },
                {
                    title: 'Reviewing AI Classifications',
                    content: `
                        <p class="mb-4">For each document, you can see:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Thumbnail preview</li>
                            <li>AI-assigned document type</li>
                            <li>Confidence score</li>
                            <li>Matched customer/job (if any)</li>
                            <li>Match confidence</li>
                        </ul>
                    `
                },
                {
                    title: 'Correcting Document Types',
                    content: `
                        <p class="mb-4">If AI classified a document incorrectly:</p>
                    `,
                    steps: [
                        { step: 'Click on the document in staging area', description: '' },
                        { step: 'Click "Change Type"', description: '' },
                        { step: 'Select correct type from dropdown', description: 'Invoice, Quote, Certificate, Photo, Worksheet, Other' },
                        { step: 'Click "Save"', description: 'Document type updated' }
                    ]
                },
                {
                    title: 'Reassigning Entities',
                    content: `
                        <p class="mb-4">To change the matched customer or job:</p>
                    `,
                    steps: [
                        { step: 'Click on the document', description: '' },
                        { step: 'Click "Change Customer" or "Change Job"', description: '' },
                        { step: 'Search for correct customer/job', description: '' },
                        { step: 'Select from dropdown', description: '' },
                        { step: 'Click "Save"', description: '' }
                    ]
                },
                {
                    title: 'Excluding Documents from Import',
                    content: `
                        <p class="mb-4">If a document should not be imported:</p>
                    `,
                    steps: [
                        { step: 'Select the document (checkbox)', description: '' },
                        { step: 'Click "Exclude from Import"', description: '' },
                        { step: 'Document is greyed out—will not be imported', description: '' }
                    ]
                },
                {
                    title: 'Bulk Editing',
                    content: `
                        <p class="mb-4">To edit multiple documents at once:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Select multiple documents (checkboxes)</li>
                            <li>Click "Bulk Actions"</li>
                            <li>Choose: Change Type, Reassign Customer, Exclude from Import</li>
                            <li>Changes apply to all selected documents</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'importing',
            title: 'Importing Documents',
            content: `
                <p class="mb-6">
                    Once you have reviewed and corrected classifications, you initiate the import. Opscel processes documents in the background
                    using a queue system.
                </p>
            `,
            subsections: [
                {
                    title: 'Batch Import Process',
                    content: `
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Queue creation:</strong> All staged documents are added to QStash queue</li>
                            <li><strong>Background processing:</strong> Queue workers process documents one-by-one</li>
                            <li><strong>Database records:</strong> Document metadata is inserted into Opscel database</li>
                            <li><strong>Blob storage:</strong> PDF/image files are uploaded to secure blob storage</li>
                            <li><strong>Entity linking:</strong> Documents are linked to matched customers/jobs/assets</li>
                            <li><strong>Success/failure logging:</strong> Each document result is logged</li>
                        </ol>
                    `
                },
                {
                    title: 'QStash Queue Management',
                    content: `
                        <p class="mb-4">
                            Opscel uses QStash for reliable background processing. This ensures imports do not block your account and can
                            recover from failures automatically.
                        </p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Non-blocking:</strong> You can continue using Opscel while import runs</li>
                            <li><strong>Resilient:</strong> If a document fails, queue retries automatically</li>
                            <li><strong>Parallel processing:</strong> Multiple documents processed simultaneously</li>
                        </ul>
                    `
                },
                {
                    title: 'Starting the Import',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Review all documents in staging area', description: '' },
                        { step: 'Correct any misclassifications', description: '' },
                        { step: 'Exclude any unwanted documents', description: '' },
                        { step: 'Click "Start Import"', description: '' },
                        { step: 'Confirm import start', description: 'Progress tracker appears' }
                    ]
                },
                {
                    title: 'Import Duration Estimates',
                    content: '',
                    table: {
                        headers: ['Document Count', 'Estimated Duration', 'Notes'],
                        rows: [
                            ['100 documents', '5-10 minutes', 'Depends on file sizes'],
                            ['500 documents', '20-30 minutes', 'May complete faster with parallel workers'],
                            ['1,000 documents', '45-60 minutes', 'Queue processes in background'],
                            ['5,000 documents', '3-4 hours', 'Monitor progress periodically']
                        ]
                    }
                },
                {
                    title: 'Retry Logic for Failures',
                    content: `
                        <p class="mb-4">If a document fails to import (e.g., blob storage timeout), QStash retries automatically:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Retry 1:</strong> 2 minutes after failure</li>
                            <li><strong>Retry 2:</strong> 5 minutes after failure</li>
                            <li><strong>Retry 3:</strong> 15 minutes after failure</li>
                            <li><strong>Permanent failure:</strong> After 3 retries, document is marked as failed—check error log</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'monitoring',
            title: 'Monitoring Import Status',
            subsections: [
                {
                    title: 'Progress Tracking',
                    content: `
                        <p class="mb-4">During import, you can monitor real-time progress:</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "View Import Progress"', description: '' },
                        { step: 'See: Total documents, Imported, Failed, In Progress', description: '' }
                    ]
                },
                {
                    title: 'Success/Failure Counts',
                    content: `
                        <p class="mb-4">The dashboard shows:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Successfully imported:</strong> Documents now in Opscel</li>
                            <li><strong>Failed:</strong> Documents that could not be imported (see error log)</li>
                            <li><strong>Pending:</strong> Documents still in queue</li>
                            <li><strong>Skipped:</strong> Documents you excluded from staging</li>
                        </ul>
                    `
                },
                {
                    title: 'Error Logs',
                    content: `
                        <p class="mb-4">If documents fail:</p>
                    `,
                    steps: [
                        { step: 'Click "View Error Log" on progress page', description: '' },
                        { step: 'See list of failed documents with error messages', description: '' },
                        { step: 'Common errors: "File too large", "Corrupt PDF", "Blob upload timeout"', description: '' },
                        { step: 'Fix issues and retry import for failed documents only', description: '' }
                    ]
                },
                {
                    title: 'Per-Job Detail Page Integration',
                    content: `
                        <p class="mb-4">
                            Imported documents appear on the linked job&apos;s detail page under "Documents" section. Engineers and office staff
                            can view them alongside current job documents.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'partial-imports',
            title: 'Re-Running & Partial Imports',
            subsections: [
                {
                    title: 'Re-Scanning the Same Folder',
                    content: `
                        <p class="mb-4">
                            You can scan the same folder multiple times. The agent uses <strong>file hash deduplication</strong> to skip
                            documents that were already imported.
                        </p>
                        <p class="mb-4"><strong>Note:</strong> Credits are consumed again for all documents scanned, even if duplicates are skipped.</p>
                    `
                },
                {
                    title: 'Importing a Subset of Documents',
                    content: `
                        <p class="mb-4">To import only some documents from staging:</p>
                    `,
                    steps: [
                        { step: 'In staging area, exclude unwanted documents', description: 'Select and click "Exclude from Import"' },
                        { step: 'Click "Start Import"', description: '' },
                        { step: 'Only non-excluded documents are imported', description: '' }
                    ]
                },
                {
                    title: 'Resuming Failed Imports',
                    content: `
                        <p class="mb-4">If an import was interrupted (e.g., network outage, server restart):</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "View Import Progress"', description: '' },
                        { step: 'Click "Resume Import"', description: '' },
                        { step: 'Only pending/failed documents are retried', description: 'Successfully imported documents are not reprocessed' }
                    ]
                }
            ]
        },
        {
            id: 'rollback',
            title: 'Rollback & Cleanup',
            content: `
                <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <p class="text-red-800">
                        <strong>Warning:</strong> Rollback is <strong>destructive</strong> and <strong>cannot be undone</strong>. It permanently
                        deletes all imported documents and database records from Opscel. Use with extreme caution.
                    </p>
                </div>
            `,
            subsections: [
                {
                    title: 'What Rollback Does',
                    content: `
                        <p class="mb-4">Rollback removes:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>All document records from Opscel database</li>
                            <li>All PDF/image files from blob storage</li>
                            <li>All entity links (customer, job, asset associations)</li>
                        </ul>
                        <p class="text-gray-700">
                            Rollback <strong>does not</strong> affect your cloud storage—original files remain untouched.
                        </p>
                    `
                },
                {
                    title: 'When to Use Rollback',
                    content: '',
                    bullets: [
                        '<strong>Test import gone wrong:</strong> Imported test documents instead of real ones',
                        '<strong>Wrong folder scanned:</strong> Imported personal files instead of business documents',
                        '<strong>Duplicate import:</strong> Accidentally imported the same folder twice'
                    ]
                },
                {
                    title: 'Performing a Rollback',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin only</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "Rollback Import"', description: '' },
                        { step: 'Type "ROLLBACK" to confirm', description: '' },
                        { step: 'Click "Confirm Rollback"', description: '' },
                        { step: 'All imported documents are deleted', description: 'This takes 1-5 minutes for large imports' }
                    ]
                },
                {
                    title: 'Cannot Undo Rollback',
                    content: `
                        <p class="text-gray-700">
                            Once rollback completes, the only way to restore documents is to re-scan and re-import from cloud storage. This will
                            consume credits again.
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
                    title: 'Will it duplicate documents if I scan twice?',
                    content: `
                        <p class="mb-2"><strong>Answer:</strong> No. The agent uses file hash deduplication.</p>
                        <p class="text-gray-700">
                            If you scan the same folder twice, documents with identical content (by SHA-256 hash) are automatically skipped during
                            the second scan. However, credits are still consumed for all scanned files.
                        </p>
                    `
                },
                {
                    title: 'Scan is taking too long',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Scan has been running for over an hour.</p>
                        <p class="mb-4"><strong>Causes:</strong></p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li><strong>Large folder:</strong> 5,000+ documents can take 45-60 minutes</li>
                            <li><strong>Large files:</strong> Scanned PDFs with high-resolution images take longer to OCR</li>
                            <li><strong>Cloud storage throttling:</strong> Google Drive/OneDrive may rate-limit requests</li>
                        </ul>
                        <p class="text-gray-700">
                            <strong>Fix:</strong> Wait for scan to complete, or reduce scope by selecting a smaller subfolder.
                        </p>
                    `
                },
                {
                    title: 'AI classified a document wrong',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Invoice was classified as "Other".</p>
                        <p class="text-gray-700">
                            <strong>Fix:</strong> Edit in staging area before import. Click the document → Change Type → Select "Invoice" → Save.
                            AI classification is a starting point, not a final decision.
                        </p>
                    `
                },
                {
                    title: 'Document failed to import',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Error log shows "File too large" or "Corrupt PDF".</p>
                        <p class="mb-4"><strong>Fixes:</strong></p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>File too large:</strong> Max 25MB per file. Compress PDF or split into multiple files.</li>
                            <li><strong>Corrupt PDF:</strong> Open in Adobe Acrobat, run "Preflight" repair, re-save, re-scan.</li>
                            <li><strong>Blob upload timeout:</strong> Temporary network issue—retry import for that document.</li>
                        </ul>
                    `
                },
                {
                    title: 'Credits consumed but no import happened',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Credits deducted but documents not in Opscel.</p>
                        <p class="text-gray-700">
                            <strong>Reason:</strong> Credits are consumed during the <strong>scan phase</strong>, not import phase. If you reviewed
                            staging and chose not to import, credits are still consumed. No refunds.
                        </p>
                    `
                },
                {
                    title: 'OAuth expired / Cannot reconnect cloud storage',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> "OAuth token invalid" error when trying to scan.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Click "Disconnect" for the cloud storage', description: '' },
                        { step: 'Click "Connect" again and re-authorize', description: '' },
                        { step: 'Retry scan', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'How long does a scan take?',
                    content: `
                        <p class="text-gray-700">
                            Approximately <strong>1-5 minutes per 100 documents</strong>, depending on file sizes and cloud storage speed. A folder
                            with 1,000 documents typically scans in 10-15 minutes.
                        </p>
                    `
                },
                {
                    title: 'Can the AI get it wrong?',
                    content: `
                        <p class="text-gray-700">
                            Yes. AI classification is 82-97% accurate depending on document type (see Accuracy Rates section). Always review the
                            staging area before importing. You can manually correct any misclassifications.
                        </p>
                    `
                },
                {
                    title: 'What happens to credits if a document fails to import?',
                    content: `
                        <p class="text-gray-700">
                            Credits are <strong>not refunded</strong>. Credits are consumed during the scan phase (AI analysis), not the import phase.
                            If a document fails to import due to corruption or size limits, the credit is still deducted.
                        </p>
                    `
                },
                {
                    title: 'Can I scan the same folder twice?',
                    content: `
                        <p class="text-gray-700">
                            Yes. The agent uses file hash deduplication to skip documents already imported. However, credits are consumed again for
                            all scanned files (even duplicates). Use this feature to import newly added files to the same folder.
                        </p>
                    `
                },
                {
                    title: 'Do I need to keep files in cloud storage after import?',
                    content: `
                        <p class="text-gray-700">
                            No. Opscel stores complete copies of all imported PDFs and images in blob storage. You can delete the original files from
                            Google Drive/OneDrive/Dropbox after confirming the import was successful.
                        </p>
                    `
                },
                {
                    title: 'Can I import documents without linking to customers/jobs?',
                    content: `
                        <p class="text-gray-700">
                            Yes. Documents with no confident match are imported as "orphans"—they exist in Opscel but are not linked to any entity.
                            You can manually link them later from the Documents library.
                        </p>
                    `
                },
                {
                    title: 'What happens if I run out of credits mid-scan?',
                    content: `
                        <p class="text-gray-700">
                            The scan stops immediately. Documents scanned up to that point remain in the staging area. You must purchase more credits
                            and resume the scan to process the remaining files.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Onboarding',
            description: 'Setting up your account before importing data',
            href: '/docs/onboarding'
        },
        {
            title: 'Settings Tour',
            description: 'Find Migration Agent in the Settings menu',
            href: '/docs/settings-tour'
        },
        {
            title: 'Jobs',
            description: 'Imported documents link to jobs automatically',
            href: '/docs/jobs'
        },
        {
            title: 'Certificates',
            description: 'Import historical certificates for compliance records',
            href: '/docs/certificates'
        }
    ]
};
