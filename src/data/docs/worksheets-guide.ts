import { IDocGuide } from '@/types';

export const worksheetsGuide: IDocGuide = {
    slug: 'worksheets',
    title: 'Worksheets - Authoring & Filling',
    description: 'Learn how to create custom checklists and forms in OpsCel. Admins author templates, engineers fill them on-site. From fire alarm test sheets to maintenance logs, capture standardized data with offline support.',
    lastUpdated: '2026-05-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Admins (author templates) | Engineers (fill on-site)<br><strong>What:</strong> Custom checklists and forms for standardized data capture during jobs<br><strong>Where:</strong> Admin: Settings → Worksheet Templates | Engineers: Field app per-job<br><strong>Why:</strong> Consistent data collection, compliance tracking, asset promotion, offline support</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Custom checklists:</strong> Design forms that match your exact business process',
                        '<strong>Standardized data capture:</strong> Every engineer follows the same checklist format',
                        '<strong>Asset promotion:</strong> Worksheet data automatically promotes to asset register',
                        '<strong>Compliance tracking:</strong> Audit trail of completed forms per job',
                        '<strong>Offline support:</strong> Fill worksheets without internet, syncs when online',
                        '<strong>Photo integration:</strong> Capture photos within worksheet sections',
                        '<strong>Auto-save:</strong> Never lose data with automatic save every 30 seconds'
                    ]
                },
                {
                    title: 'Common Use Cases',
                    content: '',
                    bullets: [
                        'Fire alarm test sheets with zone-by-zone checks',
                        'PAT test forms with appliance serial numbers',
                        'EICR observation checklists',
                        'Maintenance logs for recurring service contracts',
                        'Installation commissioning forms',
                        'Risk assessment checklists',
                        '<strong>Specialized: </strong><a href="/docs/fire-safety-features" class="text-blue-600 hover:text-blue-800">Combined BS 5839 & BAFE SP203 Jobsheet</a> (pre-built template for fire alarm servicing)'
                    ]
                }
            ]
        },
        {
            id: 'understanding-types',
            title: 'Understanding Worksheet Types',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> All tiers | <strong>Roles:</strong> All roles (Authoring: Admins only | Filling: Engineers, Managers)</p>'
                },
                {
                    title: 'Pre-Built vs Custom Templates',
                    content: '<p>OpsCel provides <strong>pre-built worksheet templates</strong> for common tasks (fire alarm tests, PAT testing, EICR observations). These templates are ready to use immediately and follow industry-standard formats.</p><p><strong>Custom templates</strong> let you design forms that match your exact business process. Admins can create unlimited custom templates with any combination of form fields, photo sections, and signature capture.</p>'
                },
                {
                    title: 'Browsing the Template Library',
                    content: '<p>Access the template library from <strong>Settings → Worksheet Templates</strong>. The library shows:</p>',
                    bullets: [
                        '<strong>Pre-built templates:</strong> Locked templates provided by OpsCel (cannot edit, can duplicate)',
                        '<strong>Custom templates:</strong> Your business-specific templates (full edit access)',
                        '<strong>Usage count:</strong> How many jobs currently use each template',
                        '<strong>Last modified:</strong> When template was last updated'
                    ]
                },
                {
                    title: 'Steps to Browse Templates',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Worksheet Templates</strong>',
                        'View the template library grid',
                        'Filter by category (Electrical, Fire Safety, Maintenance, Custom)',
                        'Click any template card to preview its structure',
                        'Use "Duplicate" button to copy pre-built templates as starting point for customization'
                    ]
                }
            ]
        },
        {
            id: 'authoring-custom',
            title: 'Authoring Custom Worksheets (Admin)',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Admins only</p>'
                },
                {
                    title: 'Template Editor Interface',
                    content: '<p>The worksheet editor uses a <strong>drag-and-drop builder</strong> to create forms. Build your worksheet by adding sections, then add fields within each section.</p><p><strong>Section types:</strong></p>',
                    bullets: [
                        '<strong>Form section:</strong> Contains input fields (text, numbers, dates, dropdowns, etc.)',
                        '<strong>Photo section:</strong> Dedicated area for photo capture with captions',
                        '<strong>Signature section:</strong> Engineer signature, customer signature, or both'
                    ]
                },
                {
                    title: 'Field Types',
                    content: '<p>Each form section can contain multiple fields. Available field types:</p>',
                    table: {
                        headers: ['Field Type', 'Use Case', 'Validation Options'],
                        rows: [
                            ['Text', 'Names, descriptions, model numbers', 'Required, min/max length, pattern (regex)'],
                            ['Number', 'Measurements, counts, readings', 'Required, min/max value, decimal places'],
                            ['Date', 'Install dates, service due dates', 'Required, min/max date range'],
                            ['Dropdown', 'Status (Pass/Fail), categories', 'Required, custom option list'],
                            ['Checkbox', 'Yes/No questions, compliance checks', 'Required'],
                            ['Radio', 'Single-choice questions', 'Required, custom option list'],
                            ['Textarea', 'Long descriptions, observations', 'Required, character limit'],
                            ['File upload', 'PDF attachments, scanned documents', 'Required, file type restrictions']
                        ]
                    }
                },
                {
                    title: 'Validation Rules',
                    content: '<p>Set validation rules to ensure data quality:</p>',
                    bullets: [
                        '<strong>Required fields:</strong> Worksheet cannot be marked complete until filled',
                        '<strong>Min/max values:</strong> Numeric fields must fall within range',
                        '<strong>Pattern matching:</strong> Text fields must match format (e.g., serial number pattern)',
                        '<strong>Conditional logic:</strong> Show field only if another field equals X (e.g., show "Defect description" only if status = "Fail")'
                    ]
                },
                {
                    title: 'Steps to Create Custom Template',
                    content: '',
                    steps: [
                        'Navigate to <strong>Settings → Worksheet Templates</strong>',
                        'Click <strong>New Template</strong> button',
                        'Enter template name (e.g., "Fire Alarm Zone Test Sheet") and description',
                        'Select category (Electrical, Fire Safety, Maintenance, or Custom)',
                        'Add your first section: click <strong>Add Section</strong> and choose type (Form, Photo, or Signature)',
                        'If Form section: add fields by clicking <strong>Add Field</strong> within the section',
                        'Configure each field: set label, type, validation rules, and conditional logic (if needed)',
                        'Repeat steps 5-7 to add more sections and fields',
                        'Use drag handles to reorder sections and fields',
                        'Click <strong>Preview</strong> to see engineer view',
                        'Click <strong>Save Template</strong>'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After saving:</p>',
                    bullets: [
                        '<strong>Template card</strong> appears in library with "Custom" badge',
                        '<strong>Preview button</strong> lets you test the form layout',
                        '<strong>Usage count</strong> shows 0 jobs (until assigned)',
                        '<strong>Edit/Duplicate/Delete</strong> options available'
                    ]
                },
                {
                    title: 'Common Mistakes',
                    content: '',
                    bullets: [
                        '<strong>Too many required fields:</strong> Engineers struggle to complete on-site if every field is mandatory. Use required sparingly for critical data only.',
                        '<strong>No sections:</strong> Organize fields into logical sections (e.g., "Panel Details", "Zone Tests", "Final Checks") for better usability.',
                        '<strong>Dropdown with too many options:</strong> Keep dropdown lists under 10 options. Use text field with validation for larger sets.',
                        '<strong>Conditional logic too complex:</strong> Simple conditions work best. Avoid nested conditions more than 2 levels deep.'
                    ]
                }
            ]
        },
        {
            id: 'assigning-worksheets',
            title: 'Assigning Worksheets to Jobs',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Admins, Managers</p>'
                },
                {
                    title: 'Two Methods',
                    content: '<p><strong>Method 1: During Job Creation</strong></p><p>When creating a new job from the job wizard, the final step asks "Add worksheets?". Select one or more templates from the dropdown. Engineers will see these worksheets in the field app when they open the job.</p><p><strong>Method 2: Add to Existing Job</strong></p><p>From the job detail page, scroll to the "Worksheets" section and click "Add Worksheet". Select template and click "Assign". The worksheet appears immediately in the field app for the assigned engineer.</p>'
                },
                {
                    title: 'Template Selection Interface',
                    content: '<p>When assigning worksheets, you&apos;ll see:</p>',
                    bullets: [
                        '<strong>Template name</strong> and description',
                        '<strong>Category badge</strong> (Electrical, Fire Safety, etc.)',
                        '<strong>Field count:</strong> How many fields the engineer needs to fill',
                        '<strong>Estimated completion time:</strong> Based on field count and section complexity'
                    ]
                },
                {
                    title: 'Multiple Worksheets Per Job',
                    content: '<p>You can assign multiple worksheets to a single job. This is common for multi-step processes:</p>',
                    bullets: [
                        '<strong>Fire alarm service:</strong> "Panel Inspection Checklist" + "Zone Test Sheet" + "Final Commissioning Form"',
                        '<strong>EICR:</strong> "Distribution Board Schedule" + "Observation Log" + "Test Results"',
                        '<strong>Installation:</strong> "Pre-Install Risk Assessment" + "Installation Checklist" + "Customer Handover"',
                        'Engineers complete worksheets in the order they appear in the field app. Each worksheet is saved independently.'
                    ]
                },
                {
                    title: 'Steps to Assign Worksheet',
                    content: '',
                    steps: [
                        'Open the job detail page (Admin → Jobs → [Select Job])',
                        'Scroll to <strong>Worksheets</strong> section',
                        'Click <strong>Add Worksheet</strong> button',
                        'Select template from dropdown list',
                        'Click <strong>Assign</strong>',
                        'Worksheet appears in the list with "Not Started" status'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After assignment:</p>',
                    bullets: [
                        '<strong>Worksheet card</strong> in job detail page with template name and status',
                        '<strong>Field app:</strong> Engineer sees worksheet in job detail view',
                        '<strong>Progress indicator:</strong> Shows 0% complete initially',
                        '<strong>Remove option:</strong> Admin can unassign worksheet if not yet started'
                    ]
                }
            ]
        },
        {
            id: 'filling-onsite',
            title: 'Filling Worksheets On-Site (Engineer)',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Engineers, Managers with field access</p>'
                },
                {
                    title: 'Field App Experience',
                    content: '<p>When you open a job in the field app, assigned worksheets appear in the <strong>Worksheets</strong> tab. Each worksheet shows:</p>',
                    bullets: [
                        '<strong>Template name</strong> and description',
                        '<strong>Progress percentage</strong> (based on filled fields)',
                        '<strong>Status badge:</strong> Not Started → In Progress → Complete',
                        '<strong>Last saved:</strong> Timestamp of most recent auto-save'
                    ]
                },
                {
                    title: 'Section-by-Section Completion',
                    content: '<p>Worksheets are organized into sections. Complete each section before moving to the next:</p>',
                    bullets: [
                        '<strong>Form sections:</strong> Fill all fields, required fields marked with red asterisk (*)',
                        '<strong>Photo sections:</strong> Tap "Add Photo" to capture images, add captions',
                        '<strong>Signature sections:</strong> Tap signature pad to capture signatures'
                    ]
                },
                {
                    title: 'Auto-Save Behavior',
                    content: '<p><strong>Auto-save every 30 seconds:</strong> Form field data saves automatically while you work. The auto-save chip at the top shows "Saved" or "Saving...".</p><p><strong>Important:</strong> Signatures and photos do NOT auto-save. You must manually tap "Save" after capturing signatures or photos.</p><p><strong>Offline queue:</strong> If offline, changes queue locally and sync when internet connection returns. The CloudOff icon indicates offline mode.</p>'
                },
                {
                    title: 'Required vs Optional Field Indicators',
                    content: '<p>Required fields show a <strong>red asterisk (*)</strong> next to the label. You cannot mark the worksheet complete until all required fields are filled.</p><p>Optional fields have no indicator. Skip optional fields if not applicable to this job.</p>'
                },
                {
                    title: 'Photo Capture Within Worksheet',
                    content: '<p>Photo sections let you capture multiple photos with captions:</p>',
                    steps: [
                        'Tap <strong>Add Photo</strong> within the photo section',
                        'Use device camera to capture image, or select from gallery',
                        'Add caption describing the photo (optional but recommended)',
                        'Tap <strong>Save</strong> (photos do NOT auto-save)',
                        'Repeat for multiple photos in same section'
                    ]
                },
                {
                    title: 'Signature Capture',
                    content: '<p>Signature sections show a signature pad:</p>',
                    steps: [
                        'Tap the signature pad area',
                        'Use finger or stylus to sign',
                        'Tap <strong>Clear</strong> if mistake, or <strong>Save</strong> to confirm',
                        'Signature saved as image and cannot be edited after save',
                        'If wrong person signed, tap "Clear Signature" and recapture'
                    ]
                },
                {
                    title: 'Progress Tracking',
                    content: '<p>The progress percentage at the top of the worksheet updates as you fill fields:</p>',
                    bullets: [
                        '<strong>0%:</strong> No fields filled (Not Started)',
                        '<strong>1-99%:</strong> Some fields filled (In Progress)',
                        '<strong>100%:</strong> All required fields filled, worksheet can be marked complete',
                        'Tap <strong>Mark Complete</strong> button when all required fields are filled. This locks the worksheet for editing (admins can reopen if needed).'
                    ]
                },
                {
                    title: 'Steps to Complete Worksheet',
                    content: '',
                    steps: [
                        'Open job in field app',
                        'Tap <strong>Worksheets</strong> tab',
                        'Select worksheet to fill',
                        'Work through each section, filling fields as you go',
                        'Capture photos and signatures (remember to tap Save for these)',
                        'Watch progress percentage increase',
                        'When 100% and all required fields filled, tap <strong>Mark Complete</strong>',
                        'Confirm completion (worksheet locks for editing)'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After marking complete:</p>',
                    bullets: [
                        '<strong>Status badge</strong> changes to "Complete" with green checkmark',
                        '<strong>Timestamp</strong> recorded for completion',
                        '<strong>Fields become read-only</strong> (unless admin reopens)',
                        '<strong>Data syncs</strong> to server (if online) or queues (if offline)',
                        '<strong>PDF export</strong> available from admin dashboard'
                    ]
                }
            ]
        },
        {
            id: 'viewing-completed',
            title: 'Viewing Completed Worksheets',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All roles (read-only for Read-Only role)</p>'
                },
                {
                    title: 'Admin Dashboard View',
                    content: '<p>From the job detail page, scroll to the <strong>Worksheets</strong> section. Each worksheet card shows:</p>',
                    bullets: [
                        '<strong>Completed by:</strong> Engineer name and timestamp',
                        '<strong>Progress:</strong> 100% with "Complete" badge',
                        '<strong>View button:</strong> Opens worksheet in read-only mode to review all fields',
                        '<strong>PDF Export:</strong> Download formatted PDF of worksheet data',
                        '<strong>Reopen:</strong> Admin can unlock worksheet for editing if corrections needed'
                    ]
                },
                {
                    title: 'Per-Job Worksheet List',
                    content: '<p>All worksheets assigned to a job appear in the Worksheets section, showing completion status:</p>',
                    bullets: [
                        '<strong>Not Started:</strong> Gray badge, 0% progress',
                        '<strong>In Progress:</strong> Blue badge, 1-99% progress, last saved timestamp',
                        '<strong>Complete:</strong> Green badge, 100% progress, completed by and timestamp'
                    ]
                },
                {
                    title: 'PDF Export',
                    content: '<p>Export completed worksheets as PDF for customer delivery or compliance records:</p>',
                    steps: [
                        'Open job detail page',
                        'Scroll to Worksheets section',
                        'Click <strong>PDF</strong> button on completed worksheet card',
                        'PDF generates with company branding, worksheet data, photos, and signatures',
                        'Download or attach to customer email'
                    ]
                },
                {
                    title: 'Edit vs View-Only',
                    content: '<p><strong>Before job completion:</strong> Admins and engineers can edit worksheets (engineers only if not marked complete).</p><p><strong>After job completion:</strong> Worksheets become view-only to preserve audit trail. Admins can reopen the job to allow edits, but this creates an activity log entry.</p>'
                }
            ]
        },
        {
            id: 'asset-promotion',
            title: 'Asset Promotion from Worksheets',
            subsections: [
                {
                    title: 'How Worksheet Data Promotes to Asset Register',
                    content: '<p>Worksheets can automatically promote data to the <strong>Asset Register</strong> when certain fields are filled. This is useful for capturing asset details during installation or service visits.</p><p><strong>Promotion triggers:</strong> When a worksheet contains fields named "Serial Number", "Model", "Manufacturer", "Install Date", or "Location", and the worksheet is marked complete, OpsCel offers to create an asset record.</p>'
                },
                {
                    title: 'Asset Fields',
                    content: '<p>Fields that map to asset properties:</p>',
                    table: {
                        headers: ['Worksheet Field Name', 'Asset Property', 'Required for Promotion'],
                        rows: [
                            ['Serial Number', 'Asset serial number', 'Yes'],
                            ['Model', 'Model name', 'No'],
                            ['Manufacturer', 'Manufacturer name', 'No'],
                            ['Install Date', 'Install date', 'No'],
                            ['Location', 'Site location', 'No'],
                            ['Asset Type', 'Asset category', 'No']
                        ]
                    }
                },
                {
                    title: 'Auto-Promotion Rules',
                    content: '<p>Asset promotion happens automatically when:</p>',
                    bullets: [
                        '<strong>Worksheet marked complete</strong> with at least "Serial Number" field filled',
                        '<strong>Job has a customer and site</strong> (asset must belong to a site)',
                        '<strong>Serial number is unique</strong> (no existing asset with same serial number at that site)',
                        '<strong>Admin has enabled auto-promotion</strong> in Settings → Asset Tracking',
                        'If auto-promotion is disabled, admins can manually promote from the worksheet view page.'
                    ]
                },
                {
                    title: 'Manual Promotion',
                    content: '<p>If auto-promotion is disabled or failed (e.g., duplicate serial number), admins can manually promote:</p>',
                    steps: [
                        'Open completed worksheet from job detail page',
                        'Click <strong>Promote to Asset</strong> button (appears if eligible fields present)',
                        'Review asset details pre-filled from worksheet',
                        'Edit any fields if needed',
                        'Click <strong>Create Asset</strong>',
                        'Asset appears in Asset Register linked to this job and site'
                    ]
                },
                {
                    title: 'Steps to Promote Assets from Worksheet',
                    content: '<p><strong>Automatic method:</strong></p>',
                    steps: [
                        'Engineer fills worksheet on-site, including Serial Number field',
                        'Engineer marks worksheet complete',
                        'OpsCel detects asset-eligible fields and auto-creates asset record',
                        'Asset appears in Asset Register with "Source: Worksheet" tag',
                        'Asset linked to job and site automatically'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After asset promotion:</p>',
                    bullets: [
                        '<strong>Asset Register:</strong> New asset record with serial number, model, manufacturer',
                        '<strong>Asset detail page:</strong> Links back to source worksheet and job',
                        '<strong>Job detail page:</strong> Shows promoted assets in Assets section',
                        '<strong>Worksheet:</strong> "Promoted to Asset" badge with link to asset record'
                    ]
                }
            ]
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'For Admins',
                    content: '',
                    bullets: [
                        '<strong>Keep templates simple:</strong> Aim for 10-15 fields per worksheet. Complex forms frustrate engineers on-site.',
                        '<strong>Test before deploying:</strong> Fill out the worksheet yourself in preview mode before assigning to jobs.',
                        '<strong>Use required fields sparingly:</strong> Only mark truly essential fields as required. Engineers can&apos;t mark worksheet complete until all required fields are filled.',
                        '<strong>Organize into logical sections:</strong> Group related fields (e.g., "Panel Details", "Zone 1", "Zone 2", "Final Checks").',
                        '<strong>Include photo sections:</strong> Photos provide valuable context and compliance evidence.',
                        '<strong>Enable asset auto-promotion:</strong> If you capture serial numbers, enable auto-promotion to build asset register automatically.'
                    ]
                },
                {
                    title: 'For Engineers',
                    content: '',
                    bullets: [
                        '<strong>Complete on-site:</strong> Fill worksheets while at the job site. It&apos;s harder to remember details later.',
                        '<strong>Capture photos as you work:</strong> Don&apos;t wait until the end. Take photos of each section as you complete it.',
                        '<strong>Don&apos;t skip required fields:</strong> You&apos;ll be blocked from marking complete until all required fields are filled.',
                        '<strong>Use offline mode:</strong> Worksheets work offline. Don&apos;t avoid filling them because of poor signal.',
                        '<strong>Review before marking complete:</strong> Once marked complete, you can&apos;t edit without admin reopening.',
                        '<strong>Save signatures immediately:</strong> Signatures don&apos;t auto-save. Tap Save right after capturing.'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Template Won&apos;t Save',
                    content: '<p><strong>Problem:</strong> "Save Template" button disabled or shows validation errors.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Template name is filled in (required)',
                        'At least one section exists',
                        'Each section has at least one field (empty sections not allowed)',
                        'No duplicate field names within same section',
                        'Conditional logic references valid fields (if using conditions)',
                        '<strong>Fix:</strong> Review validation errors at top of page. Fix each error, then retry Save.'
                    ]
                },
                {
                    title: 'Worksheet Not Showing in Field App',
                    content: '<p><strong>Problem:</strong> Engineer says worksheet isn&apos;t visible in their job list.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Worksheet is assigned to the correct job (check job detail page)',
                        'Engineer is assigned to that job',
                        'Engineer has field app access (role permissions)',
                        'Field app is synced (pull down to refresh job list)',
                        '<strong>Fix:</strong> If worksheet is assigned but not visible, ask engineer to log out and log back in to force full sync.'
                    ]
                },
                {
                    title: 'Auto-Save Failed',
                    content: '<p><strong>Problem:</strong> Auto-save chip shows "Failed to save" in red.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Internet connection (if offline, changes queue until online)',
                        'Sync queue status (Settings → Sync Inspector)',
                        'Field validation errors (invalid data prevents save)',
                        '<strong>Fix:</strong> If offline, wait for connection to return. If online but failing, check for validation errors in red text under fields. Fix errors and save will retry automatically.'
                    ]
                },
                {
                    title: 'Can&apos;t Edit Completed Worksheet',
                    content: '<p><strong>Problem:</strong> Need to change data in a worksheet marked complete.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Worksheet status is "Complete" (completed worksheets are locked)',
                        'Job status (completed jobs lock all worksheets)',
                        '<strong>Fix:</strong> Admin must click "Reopen Worksheet" button on the worksheet card. This unlocks it for editing. Engineer can then make changes and re-mark complete. Activity log records the reopen event.'
                    ]
                },
                {
                    title: 'Asset Didn&apos;t Promote',
                    content: '<p><strong>Problem:</strong> Worksheet has serial number but no asset was created.</p><p><strong>Check:</strong></p>',
                    bullets: [
                        'Field name is exactly "Serial Number" (case-insensitive but must match)',
                        'Serial number field is filled (not left blank)',
                        'Job has customer and site assigned',
                        'Auto-promotion enabled (Settings → Asset Tracking → Auto-promote from worksheets)',
                        'No existing asset with same serial number at that site (duplicates blocked)',
                        '<strong>Fix:</strong> If auto-promotion failed, admin can manually promote from worksheet view page. Click "Promote to Asset" button and confirm details.'
                    ]
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Can I edit a template after it&apos;s in use?',
                    content: '<p>Yes, you can edit templates anytime. However, changes only affect <strong>new instances</strong> of the worksheet. Existing worksheets (already assigned to jobs) retain the old structure.</p><p>If you need to update existing worksheets, you must unassign the old worksheet and assign the updated template. This creates a new worksheet instance with the new structure.</p>'
                },
                {
                    title: 'What happens to worksheet data if job is deleted?',
                    content: '<p>Worksheet data is <strong>archived, not deleted</strong>. If you delete a job, the worksheets are moved to the archive along with the job. You can restore the job (and worksheets) within 30 days. After 30 days, archived data is permanently deleted.</p>'
                },
                {
                    title: 'How many worksheets can I add to one job?',
                    content: '<p>There&apos;s no hard limit, but we recommend <strong>3-5 worksheets maximum</strong> per job. Too many worksheets can overwhelm engineers on-site. If you need to capture a lot of data, consider using fewer worksheets with more sections instead of many small worksheets.</p>'
                },
                {
                    title: 'Do worksheets work offline?',
                    content: '<p>Yes! Worksheets are fully offline-capable. Engineers can fill worksheets without internet connection. Data auto-saves to local storage every 30 seconds, then syncs to the server when connection returns.</p><p><strong>Important:</strong> Photos and signatures must be manually saved (they don&apos;t auto-save), but they also queue offline and sync when online.</p>'
                },
                {
                    title: 'Can I copy a template?',
                    content: '<p>Yes. Click the "Duplicate" button on any template card in the library. This creates a copy with "[Copy]" appended to the name. You can then edit the copy without affecting the original.</p><p>This is especially useful for duplicating pre-built templates and customizing them for your business.</p>'
                },
                {
                    title: 'Can I export worksheet data to Excel?',
                    content: '<p>Not directly from worksheets, but you can export job data (which includes worksheet responses) via the Reports module. Navigate to <strong>Reports → Jobs Report</strong>, filter by date range or job type, then click "Export to CSV". The CSV includes a column for each worksheet field.</p>'
                },
                {
                    title: 'Why can&apos;t I mark the worksheet complete?',
                    content: '<p>The "Mark Complete" button is disabled until <strong>all required fields</strong> are filled. Check for fields with a red asterisk (*) next to the label. Scroll through all sections to find any unfilled required fields.</p><p>If all required fields are filled but button is still disabled, check for validation errors (red text under fields). Fix errors and the button will enable.</p>'
                },
                {
                    title: 'Can I use worksheets for service contracts?',
                    content: '<p>Yes! This is a powerful combination. When you create a service contract from a completed job, assigned worksheets are <strong>automatically assigned</strong> to each recurring job generated by the contract.</p><p>For example: Fire alarm service contract with "Fire Alarm Test Sheet" worksheet → Every recurring job gets the worksheet pre-assigned. Engineers see the same checklist every visit.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    title: '',
                    content: '<p>If you&apos;re stuck or have questions not covered here:</p>',
                    bullets: [
                        '<strong>Email support:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800">support@opscel.com</a>',
                        '<strong>Related guides:</strong> <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs & Multi-Visit Workflow</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a> | <a href="/docs/asset-tracking" class="text-blue-600 hover:text-blue-800">Asset Tracking</a> | <a href="/docs/settings-tour" class="text-blue-600 hover:text-blue-800">Settings Tour</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Field Service App',
            description: 'Filling worksheets on-site in the field app',
            href: '/docs/field-service'
        },
        {
            title: 'Jobs',
            description: 'Worksheets are attached to job visits',
            href: '/docs/jobs'
        },
        {
            title: 'Asset Tracking',
            description: 'Worksheets that promote asset records',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Fire Safety Jobsheets',
            description: 'BS 5839 & BAFE SP203 combined inspection forms',
            href: '/docs/fire-safety-features'
        },
        {
            title: 'Certificates',
            description: 'Completing worksheets before issuing certificates',
            href: '/docs/certificates'
        }
    ]
};
