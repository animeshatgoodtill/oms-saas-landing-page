import { IFeatureDetail } from '@/types';

export const dataImportDetail: IFeatureDetail = {
    slug: 'data-import',
    title: 'Migrate from Spreadsheets in Minutes, Not Months',
    subtitle: 'Opscel Data Import',
    heroDescription: 'You\'ve got 500 customers in Excel, 1200 assets in Google Sheets, and 3 years of job history in a CSV from your old system. Opscel\'s CSV import handles fuzzy column matching, duplicate detection, and parent reference resolution—so you migrate data in one afternoon, not three weeks.',
    iconId: 'icon-smart-prompt',

    featureHighlights: [
        {
            iconId: 'icon-five-trades',
            title: '6 Entity Types Supported',
            description: 'Import Customers (businesses, with their contacts and addresses handled as part of the same workbook), Addresses (service sites), Products, Assets (equipment), Jobs (historical work), and Service Contracts. Each entity has dedicated import handling with field mapping and validation rules.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Fuzzy Column Matching',
            description: 'Your CSV has "Company Name"? Opscel maps it to "Business Name". "Tel" maps to "Phone Number". "Postcode" maps to "Postal Code". Smart matching detects common variations—no manual column renaming required.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Duplicate Detection',
            description: 'Uploading 500 customers but 50 already exist? System detects duplicates by email or business name, shows conflicts, lets you skip or update. No accidental duplicate customers clogging your database.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Parent Reference Resolution',
            description: 'Importing addresses or historical jobs that belong to a business? System links each row to an existing customer by business name or email — no manual ID mapping spreadsheets. Contacts import as part of the same customer workbook, alongside the business and its addresses. Asset imports don\'t use address matching — you select the site once in the UI before uploading, and every row imports to it.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Validation Preview Before Import',
            description: 'Upload CSV, system validates all rows, shows errors (missing required fields, invalid email format, unmatched parent references). Fix errors in CSV, re-upload. Import succeeds only when all rows valid.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Batch Import with Progress Tracking',
            description: 'Importing 1200 assets? Progress bar shows import status—"Processing row 487 of 1200". Large imports run in background. Get notified when complete. No browser tab freezing for 10 minutes.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Row-Level Import with Error Reporting',
            description: 'Each row imports as its own transaction, so one bad row doesn\'t block the rest of the file. A dedicated error report lists exactly which rows failed and why, so you can fix just those and re-upload rather than starting over.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Template Download Per Entity',
            description: 'Download a CSV template for customers, addresses, products, assets, jobs, or service contracts. Template includes all supported columns, example data, field descriptions. Fill template, upload—guaranteed column match.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Custom Field Mapping',
            description: 'Have custom columns that don\'t auto-match? Manual mapping interface lets you drag "Client Name" to "Business Name", "Mobile" to "Phone Number". For asset imports specifically, the device-type mapping you build is saved as a reusable profile tied to the customer, so it\'s offered again on their next import.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Who Can Import',
            description: 'Data import is a role permission, not a tier gate — Admins, Contract Managers and Super Admins can import customers, addresses, products, jobs and service contracts on any plan. Asset import is the one exception: it specifically requires the Business (or higher) plan, alongside the rest of Asset Management.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Download Template',
            description: 'Go to Data Import, select entity type (e.g., Customers), download CSV template. Template includes required columns (Business Name, Email) and optional columns (Phone, Address, Website).'
        },
        {
            stepNumber: 2,
            title: 'Prepare CSV',
            description: 'Fill template with your data or export from existing system. Opscel auto-detects common column variations (e.g., "Company" → "Business Name"), but template ensures perfect match.'
        },
        {
            stepNumber: 3,
            title: 'Upload & Validate',
            description: 'Upload CSV. System validates rows, detects duplicates (by email or business name), shows errors (missing required fields, invalid formats). Fix errors, re-upload if needed.'
        },
        {
            stepNumber: 4,
            title: 'Review & Import',
            description: 'Preview shows how many rows will create, how many will update, how many are duplicates. Confirm import. Progress bar tracks import. Get notified when complete. Data appears in Opscel immediately.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'Migrate from old system in one afternoon, not three weeks of manual entry',
                'Row-level imports and a per-row error report mean one bad row never blocks the rest of the batch',
                'Batch import handles thousands of records without browser freezing',
                '6 entity types cover complete data migration (customers, addresses, products, assets, jobs, service contracts)',
                'Parent reference resolution links addresses and jobs to existing customers automatically',
                'Import access is role-based, not tier-based — Admins and Contract Managers can import on any plan; asset import specifically needs the Business plan'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Fuzzy column matching detects "Tel" → "Phone" automatically—no manual renaming',
                'Duplicate detection prevents accidental re-imports of existing customers',
                'Validation preview shows errors before import—fix and re-upload easily',
                'Download templates ensure correct column format for guaranteed success',
                'Custom field mapping handles columns that don\'t auto-match; asset imports save their device-type mapping for repeat imports from the same customer',
                'Progress tracking shows import status for large batches'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Historical job data imports mean you see past visits before arriving on-site',
                'Asset imports load equipment serial numbers and service history automatically',
                'Customer contact imports ensure you call the right person on-site',
                'No manual data entry for existing customer sites—start working day one'
            ]
        }
    ],

    stats: [
        {
            value: '6 types',
            label: 'Import Customers, Addresses, Products, Assets, Jobs, and Service Contracts via CSV'
        },
        {
            value: 'Fuzzy',
            label: 'Column matching detects "Company Name" → "Business Name" automatically'
        },
        {
            value: 'Per-row',
            label: 'Each row imports independently, with a clear error report for any that fail'
        }
    ],

    comparison: [
        {
            feature: '6 entity types (customers, addresses, products, assets, jobs, service contracts)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Fuzzy column matching (auto-detects variations)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Duplicate detection by email or business name',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Parent reference resolution (auto-links contacts to businesses)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Validation preview before import',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Batch import with progress tracking',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Row-level imports with a per-row error report',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Downloadable CSV templates per entity',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Custom field mapping (saved presets for asset device types)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'What file formats are supported?',
            answer: 'CSV (comma-separated values) only. Excel files (.xlsx, .xls) must be saved as CSV first. Google Sheets can export as CSV via File → Download → CSV. CSV is universal, lightweight, and prevents formatting issues common with Excel imports.'
        },
        {
            question: 'How does fuzzy column matching work?',
            answer: 'Opscel detects common column name variations using pattern matching and synonyms. Examples: "Company Name"/"Business Name"/"Company", "Tel"/"Phone"/"Mobile"/"Phone Number", "Email"/"Email Address"/"E-mail". System shows matched columns for review before import. If match wrong, use custom field mapping to correct.'
        },
        {
            question: 'What happens if I import duplicates?',
            answer: 'System detects duplicates by email (for contacts) or business name (for customers). Shows conflict summary: "50 of 500 rows are duplicates". Options: Skip duplicates (import only new records), Update duplicates (overwrite existing with new data), or Cancel import to fix CSV. Prevents accidental duplicate customer records.'
        },
        {
            question: 'Can I import contacts without manually linking to businesses?',
            answer: 'Contacts aren\'t imported as a separate file — they\'re a sheet in the same customer workbook as the business and its service addresses, so each contact is already linked to its business by construction. There\'s no separate contacts-only import to manually reconcile against your customer list.'
        },
        {
            question: 'What if my import fails halfway through?',
            answer: 'Each row is imported as its own transaction, so one bad row doesn\'t take down the rest of the batch. If row 487 of 1200 has an error, rows 1-486 and 488-1200 still import; row 487 is listed in a dedicated error report with the reason it failed, so you can fix just that row and re-upload it separately. Use validation preview to catch as many errors as possible before you start.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
