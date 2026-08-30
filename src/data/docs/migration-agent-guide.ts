import { IDocGuide } from '@/types';

export const migrationAgentGuide: IDocGuide = {
    slug: 'migration-agent',
    title: 'Migration Agent',
    description: 'AI-powered document import from cloud storage. Import legacy PDFs, invoices, quotes, certificates, and photos automatically with intelligent classification and entity matching.',
    lastUpdated: '2026-08-30',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        Migration Agent connects to your cloud storage (Google Drive or OneDrive), scans a folder you choose (including
                        subfolders), uses AI to classify each document, matches classified documents to customers and jobs already in
                        Opscel, then imports the approved ones. It&apos;s a one-time setup task to bring historical records into your new
                        system without re-keying them by hand.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who uses this:</strong> Super Admins, Admins<br/>
                        <strong>Where it lives:</strong> Settings → Migration Agent<br/>
                        <strong>Availability:</strong> No tier restriction | data.migrate permission<br/>
                        <strong>Key benefit:</strong> Avoid manual re-entry of historical documents
                    </p>
                </div>
                <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                    <p class="text-amber-800">
                        <strong>Important:</strong> Migration Agent runs on your AI credit balance — every business gets a monthly free
                        allowance, and more can be purchased. Classifying a document spends credits; importing an approved document spends
                        credits too. Both are described in <strong>Permissions &amp; Credits</strong> below.
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
                        '<strong>Moving from paper/folders to Opscel:</strong> You have years of PDFs and photos in Google Drive or OneDrive',
                        '<strong>Historical records:</strong> Need a compliance audit trail for old jobs',
                        '<strong>Customer onboarding:</strong> Bringing existing customer documents into Opscel'
                    ]
                },
                {
                    title: 'When NOT to Use',
                    content: 'Migration Agent is designed for legacy imports. It\'s not the right tool if:',
                    bullets: [
                        'Documents are already in Opscel (use search instead)',
                        'You need real-time sync (Migration Agent is a one-time import, not an ongoing connection)',
                        'Documents are actively being edited (import brings in a static copy of whatever it finds at scan time)'
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
                        <p class="mb-4"><strong>Availability:</strong> No tier restriction | Super Admin, Admin | data.migrate permission</p>
                        <p class="mb-4">
                            Only users holding the <code>data.migrate</code> permission — Admin and Super Admin — can connect cloud storage,
                            run a scan, classify, match, import, or roll back a migration. It is not available to other roles, including
                            field engineers.
                        </p>
                    `
                },
                {
                    title: 'Credit System Explained',
                    content: `
                        <p class="mb-4">
                            Migration Agent is one of the ways Opscel&apos;s AI credit balance gets used. Discovering files in a connected
                            folder (the scan) doesn&apos;t itself cost credits — credits are spent when a file is <strong>classified</strong>
                            by AI, and spent again, at a different rate, when an approved file is actually <strong>imported</strong>.
                        </p>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-blue-800">
                                <strong>What costs credits:</strong>
                            </p>
                            <ul class="list-disc pl-6 mt-2 text-blue-800">
                                <li>Classifying one file: a small, fixed number of credits per file</li>
                                <li>Importing one file: the cost depends on what the import has to do — attaching a document to a job you already have is cheapest; creating a new job (or a new customer and a new job) to hang the document on costs more, since more records are being created</li>
                                <li>A file that can be classified locally with certainty — for example a video, audio file, or archive that clearly isn&apos;t a document — is recognised as such without an AI call and without a credit charge</li>
                            </ul>
                        </div>
                        <p class="mb-4">
                            Every business receives a monthly free credit allowance regardless of plan, and the same shared credit balance
                            purchased for other AI features (such as deficiency detection) covers Migration Agent too — there is no
                            migration-specific pack.
                        </p>
                    `
                },
                {
                    title: 'Refunds',
                    content: `
                        <p class="text-gray-700">
                            If a classification attempt spends a credit but comes back with no usable result (a transient AI error, for
                            example), that credit is refunded and the file is flagged for you to retry. Rolling back a completed migration
                            (see <strong>Rollback &amp; Cleanup</strong> below) also refunds the import credits that migration used, as part
                            of the same rollback.
                        </p>
                    `
                },
                {
                    title: 'Checking Credit Balance',
                    content: `
                        <p class="mb-4">Before starting a scan:</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Check the credit balance shown on the page', description: '' },
                        { step: 'If balance is too low: contact support@opscel.com to purchase more', description: '' }
                    ]
                },
                {
                    title: 'What Happens If Credits Run Out',
                    content: `
                        <p class="text-gray-700">
                            If your credit balance runs out mid-classification, classification pauses — files not yet classified stay in the
                            staging area, and files already classified keep their result. Purchase more credits and resume from Settings →
                            Migration Agent to continue.
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
                    Migration Agent supports two cloud storage platforms. You connect via OAuth, select a folder, and the agent scans every
                    file in that folder, including subfolders.
                </p>
            `,
            subsections: [
                {
                    title: 'Supported Platforms',
                    content: '',
                    bullets: [
                        '<strong>Google Drive:</strong> personal and Workspace accounts',
                        '<strong>OneDrive:</strong> personal and Microsoft 365 business accounts'
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
                        { step: 'Grant Opscel read-only access', description: 'Opscel can only read files, not modify or delete them' },
                        { step: 'Select the folder to scan', description: 'All subfolders are included automatically' },
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
                        { step: 'Sign in with your Microsoft account', description: 'Personal or Microsoft 365' },
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
                                <strong>Security note:</strong> Opscel requests <strong>read-only</strong> access to your Drive or OneDrive.
                                The agent lists and reads files under the folder you select — it cannot modify, delete, or move anything in
                                your cloud storage.
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
                    Once connected, you initiate a scan. The agent lists every file under the folder you chose (recursively through
                    subfolders) and stages them for classification.
                </p>
            `,
            subsections: [
                {
                    title: 'What Happens During a Scan',
                    content: `
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Discovery:</strong> the agent lists every file in the folder, recursively — this step doesn&apos;t spend credits</li>
                            <li><strong>Staging:</strong> discovered files are recorded against the migration job, ready for classification</li>
                        </ol>
                    `
                },
                {
                    title: 'Supported File Types',
                    content: `
                        <p class="mb-4">Text is extracted from a file before it's classified, so the AI has real content to read rather than just a filename:</p>
                    `,
                    table: {
                        headers: ['File Type', 'How It\'s Read'],
                        rows: [
                            ['PDF', 'Text is parsed directly from the PDF'],
                            ['Word (.docx)', 'Text is extracted from the document'],
                            ['Word (legacy .doc)', 'Not supported — only the modern .docx format can be read; classification falls back to the filename'],
                            ['Excel / CSV (.xlsx, .xls, .csv)', 'An excerpt of each sheet (headers plus sample rows) is extracted, which is what lets a customer-list spreadsheet be recognised as customer data'],
                            ['Google Docs / Sheets', 'Exported and read the same way as their Word/Excel equivalents (Google Drive connections only)'],
                            ['Images (JPG, PNG, etc.)', 'Sent directly to the AI as an image for it to read, rather than run through separate OCR — only for images under a size the classifier can accept; oversized images fall back to filename-only classification'],
                            ['Video, audio, archives (ZIP, etc.)', 'Not documents — recognised as such automatically, without an AI call or a credit charge']
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
                        { step: 'Click "Start Scan"', description: '' },
                        { step: 'Wait for discovery to finish', description: 'Runs in the background; larger folders take longer' }
                    ]
                }
            ]
        },
        {
            id: 'ai-classification',
            title: 'AI Classification Process',
            content: `
                <p class="mb-6">
                    After scanning, the AI classifies each staged file into one of nine document types. This happens automatically — you
                    review and correct classifications in the staging area before anything is imported.
                </p>
            `,
            subsections: [
                {
                    title: 'Document Types Recognised',
                    content: '',
                    bullets: [
                        '<strong>Certificate</strong> — compliance certificates',
                        '<strong>Invoice</strong>',
                        '<strong>Quote</strong>',
                        '<strong>Job sheet</strong> — worksheets, inspection/service records',
                        '<strong>Photo</strong>',
                        '<strong>Report</strong>',
                        '<strong>Correspondence</strong>',
                        '<strong>Customer data</strong> — a spreadsheet of customer/site records rather than a single document',
                        '<strong>Other</strong> — anything that doesn\'t fit the above, plus the fallback for video/audio/archive files'
                    ]
                },
                {
                    title: 'How AI Determines Document Type',
                    content: `
                        <p class="mb-4">Classification is done by Claude, reading the extracted text (or, for images under the size limit, the image itself) alongside the filename and folder path. There is no fixed keyword or rules list you can inspect — the model makes a single judgement call per file and returns:</p>
                        <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li>the document type</li>
                            <li>a confidence score</li>
                            <li>a short summary</li>
                            <li>any entities it could extract from the text (customer name, address, job or certificate references, and so on) to help the matching step that follows</li>
                        </ul>
                    `
                },
                {
                    title: 'Confidence Scores',
                    content: `
                        <p class="text-gray-700">
                            Each classification carries a confidence score from the model. There is no separate published threshold per
                            document type — the score is a signal for how much to trust the AI&apos;s call on that particular file, and every
                            classification is reviewable and correctable in the staging area regardless of its score.
                        </p>
                    `
                },
                {
                    title: 'What If AI Gets It Wrong?',
                    content: `
                        <p class="text-gray-700">
                            All classifications are <strong>reviewable</strong> in the staging area before import. You can manually override
                            the AI&apos;s decision and reassign the document type. No documents are imported until you explicitly approve
                            them.
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
                    After classification, Opscel attempts to match each document to an existing customer, job, or address already in your
                    account. This links legacy documents to the correct record automatically. Matching itself doesn&apos;t consume credits —
                    it&apos;s deterministic string comparison and database lookups, not an AI call.
                </p>
            `,
            subsections: [
                {
                    title: 'How Matching Works',
                    content: `
                        <p class="mb-4">The matcher runs through a fixed sequence of steps, stopping at the first one that finds a confident match:</p>
                        <ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Exact reference:</strong> a job number or similar reference extracted from the document text looks up a job directly</li>
                            <li><strong>Fuzzy customer match:</strong> a customer name extracted from the text is compared against your existing customers using string-similarity (Dice-coefficient) matching, which tolerates minor spelling and formatting differences</li>
                            <li><strong>Fuzzy address match:</strong> an extracted address is looked up against your existing service addresses the same way</li>
                            <li><strong>Folder context:</strong> if a sibling file in the same cloud folder already matched a customer or address, that match is reused</li>
                            <li><strong>No match:</strong> if none of the above finds anything, the document is proposed as a new customer for you to confirm or edit rather than being force-matched</li>
                        </ol>
                    `
                },
                {
                    title: 'Confidence',
                    content: `
                        <p class="text-gray-700">
                            Each match carries a confidence value used to pre-select or flag it for review, but there is no published
                            multi-tier confidence-band system — a fuzzy name or address match uses the similarity score itself; an exact
                            reference or an existing customer address record is treated as a high, fixed confidence. Review every match in
                            staging before importing, regardless of its score.
                        </p>
                    `
                },
                {
                    title: 'Unmatched Documents',
                    content: `
                        <p class="mb-4">
                            If nothing confidently matches, the document is proposed as a new customer record for you to review — it is not
                            silently discarded, and it is not imported until you resolve it one way or the other in the staging area.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'staging-review',
            title: 'Reviewing & Editing Staged Items',
            content: `
                <p class="mb-6">
                    The staging area is where you review AI classification and matching decisions before anything is imported. This is your
                    safety net — nothing is committed to Opscel until you explicitly approve it.
                </p>
            `,
            subsections: [
                {
                    title: 'Accessing the Staging Area',
                    content: `
                        <p class="mb-4">After a scan and classification run complete:</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Open the migration job', description: '' },
                        { step: 'View the staged files with their AI classifications and matches', description: '' }
                    ]
                },
                {
                    title: 'Reviewing AI Classifications',
                    content: `
                        <p class="mb-4">For each document, you can see:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>AI-assigned document type and confidence</li>
                            <li>The proposed match — an existing job, an existing customer/address, or a proposed new customer</li>
                            <li>An action for what the import will do: attach to an existing job, create a new job under a matched customer, or create a new customer and job</li>
                        </ul>
                    `
                },
                {
                    title: 'Correcting Document Types and Matches',
                    content: `
                        <p class="mb-4">If the AI got a file wrong, correct it before import:</p>
                    `,
                    steps: [
                        { step: 'Open the file in the staging area', description: '' },
                        { step: 'Change the document type if needed', description: '' },
                        { step: 'Change the matched customer/job if needed, or resolve a proposed-new-customer row', description: '' },
                        { step: 'Save', description: 'The correction is used when the file is imported' }
                    ]
                }
            ]
        },
        {
            id: 'importing',
            title: 'Importing Documents',
            content: `
                <p class="mb-6">
                    Once you have reviewed and corrected staged files, you approve them and start the import. Opscel processes approved
                    files in the background, in batches, via a queue (QStash) — you don&apos;t need to keep the tab open.
                </p>
            `,
            subsections: [
                {
                    title: 'Batch Import Process',
                    content: `
                        <p class="mb-4">
                            Import runs sequentially, batch by batch: each invocation fetches the next batch of approved, not-yet-imported
                            files, downloads each one from your cloud storage, uploads it to Opscel&apos;s document storage, creates the
                            matching database records, and links the result to its customer/job. Each file is imported with its own error
                            isolation, so one failing file doesn&apos;t stop the rest of the batch.
                        </p>
                    `
                },
                {
                    title: 'Starting the Import',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Review all files in the staging area', description: '' },
                        { step: 'Correct any misclassifications or mismatches', description: '' },
                        { step: 'Click "Start Import"', description: '' },
                        { step: 'Import runs in the background', description: 'Progress is visible on the migration job page' }
                    ]
                },
                {
                    title: 'Per-Job Detail Page Integration',
                    content: `
                        <p class="mb-4">
                            Imported documents appear on the linked job&apos;s detail page under Documents. Engineers and office staff can
                            view them alongside current job documents.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'rollback',
            title: 'Rollback & Cleanup',
            content: `
                <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                    <p class="text-amber-800">
                        <strong>Note:</strong> Rollback is a <strong>soft delete</strong> — rolled-back documents, jobs, and any customers
                        the migration created are marked deleted and restorable, the same way the ordinary Delete action elsewhere in Opscel
                        works. It is only available for a limited window after import completes, and only while nothing has since happened
                        to the imported records (see below).
                    </p>
                </div>
            `,
            subsections: [
                {
                    title: 'What Rollback Does',
                    content: `
                        <p class="mb-4">Rollback:</p>
                        <ul class="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                            <li>Soft-deletes the documents this migration imported</li>
                            <li>Soft-deletes the jobs this migration created (not jobs it merely attached documents to)</li>
                            <li>Soft-deletes any customers this migration created that have picked up no independent activity of their own since (no live job, quotation, or invoice)</li>
                            <li>Refunds the import credits this migration used</li>
                        </ul>
                        <p class="text-gray-700">
                            Rollback <strong>does not</strong> touch your cloud storage — the original files stay exactly where they were.
                        </p>
                    `
                },
                {
                    title: 'The 72-Hour Window',
                    content: `
                        <p class="text-gray-700">
                            Rollback is only available within <strong>72 hours</strong> of the import completing. After that, the option
                            disappears from the migration job.
                        </p>
                    `
                },
                {
                    title: 'When Rollback Is Blocked',
                    content: `
                        <p class="mb-4">
                            Rollback is refused if a migrated job has picked up meaningful downstream activity — a certificate, an invoice, a
                            quotation, or a completed (signed) job sheet. That evidence is treated as too important to remove automatically;
                            the job and its imported document are left in place even if you attempt a rollback.
                        </p>
                    `
                },
                {
                    title: 'Performing a Rollback',
                    content: `
                        <p class="mb-4"><strong>Availability:</strong> Super Admin, Admin | data.migrate permission</p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Open the completed migration job', description: '' },
                        { step: 'Click "Rollback"', description: 'Shown only while the job is within its 72-hour window' },
                        { step: 'Confirm in the dialog', description: 'A plain confirmation — there is no typed confirmation phrase' }
                    ]
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
                        <p class="mb-2"><strong>Answer:</strong> No, within a single migration job.</p>
                        <p class="text-gray-700">
                            Scanning the same folder again inside the same migration job skips files it has already recorded (matched by
                            their cloud file id). Deduplication is per migration job, not a global content-hash check across every
                            migration you&apos;ve ever run.
                        </p>
                    `
                },
                {
                    title: 'AI classified a document wrong',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> An invoice was classified as something else.</p>
                        <p class="text-gray-700">
                            <strong>Fix:</strong> Correct it in the staging area before import — open the file, change its type, save. AI
                            classification is a starting point, not a final decision, and nothing imports until you approve it.
                        </p>
                    `
                },
                {
                    title: 'A document failed to import',
                    content: `
                        <p class="text-gray-700">
                            Import isolates failures per file — one failing file is logged as failed and does not stop the rest of the
                            batch. Check the failed file&apos;s error detail on the migration job page; a retry re-attempts only the files
                            that failed, not the whole batch again.
                        </p>
                    `
                },
                {
                    title: 'OAuth expired / Cannot reconnect cloud storage',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> An authorisation error appears when trying to scan.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Migration Agent', description: '' },
                        { step: 'Disconnect the cloud storage connection', description: '' },
                        { step: 'Connect again and re-authorise', description: '' },
                        { step: 'Retry the scan', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Which cloud storage providers are supported?',
                    content: `
                        <p class="text-gray-700">
                            Google Drive and OneDrive. Other providers, including Dropbox, are not currently supported.
                        </p>
                    `
                },
                {
                    title: 'What happens to credits if a document fails to import?',
                    content: `
                        <p class="text-gray-700">
                            Import credits are only spent on files that are actually processed by the importer. Classification credits are
                            refunded automatically if a classification attempt fails to produce a usable result.
                        </p>
                    `
                },
                {
                    title: 'Can I scan the same folder twice?',
                    content: `
                        <p class="text-gray-700">
                            Yes. Within the same migration job, files already recorded from an earlier scan are skipped rather than
                            duplicated. Classification still only spends credits on files that actually get classified.
                        </p>
                    `
                },
                {
                    title: 'Do I need to keep files in cloud storage after import?',
                    content: `
                        <p class="text-gray-700">
                            No. Opscel stores its own copy of every imported file. You can remove the originals from Google Drive or
                            OneDrive once you&apos;ve confirmed the import looks right — though keeping them costs nothing extra and gives
                            you somewhere to re-scan from if you ever need to.
                        </p>
                    `
                },
                {
                    title: 'Can I import documents without linking them to a customer or job?',
                    content: `
                        <p class="text-gray-700">
                            If nothing confidently matches, the document is proposed as a new customer for you to confirm rather than
                            imported unlinked. You resolve every unmatched document one way or another in the staging area before it goes
                            in.
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
