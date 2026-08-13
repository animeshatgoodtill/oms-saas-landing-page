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
            title: '5 Entity Types Supported',
            description: 'Import Customers (businesses), Contacts (people), Addresses (service sites), Assets (equipment), Jobs (historical work). Each entity has dedicated import template with field mapping and validation rules.'
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
            description: 'Importing contacts that belong to businesses? System links contacts to existing customers by business name or email — no manual ID mapping spreadsheets. Asset imports don\'t use address matching — you select the site once in the UI before uploading, and every row imports to it.'
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
            iconId: 'icon-service-history',
            title: 'Import History & Rollback',
            description: 'See all previous imports with timestamp, user, entity type, row count. Imported wrong file? Rollback import to delete all records from that batch. Critical for fixing mistakes without manual cleanup.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Template Download Per Entity',
            description: 'Download CSV template for customers, contacts, addresses, assets, or jobs. Template includes all supported columns, example data, field descriptions. Fill template, upload—guaranteed column match.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Custom Field Mapping',
            description: 'Have custom columns that don\'t auto-match? Manual mapping interface lets you drag "Client Name" to "Business Name", "Mobile" to "Phone Number". Mapping saved for future imports from same source.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Team Tier Feature',
            description: 'Customer, contact, address and job import is available from Team tier (£49/month, 5 users) upward. Asset import specifically requires the Business tier (£79/month, 8 users), alongside the rest of Asset Management. Starter tier does not include CSV import at all.'
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
                'Import history with rollback prevents permanent mistakes from bad uploads',
                'Batch import handles thousands of records without browser freezing',
                '5 entity types cover complete data migration (customers, contacts, sites, assets, jobs)',
                'Parent reference resolution links contacts to businesses automatically',
                'Team tier includes import for customers, contacts, addresses, and jobs — asset import specifically needs the Business tier'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Fuzzy column matching detects "Tel" → "Phone" automatically—no manual renaming',
                'Duplicate detection prevents accidental re-imports of existing customers',
                'Validation preview shows errors before import—fix and re-upload easily',
                'Download templates ensure correct column format for guaranteed success',
                'Custom field mapping saves for repeated imports from same source',
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
            value: '5 types',
            label: 'Import Customers, Contacts, Addresses, Assets, Jobs via CSV'
        },
        {
            value: 'Fuzzy',
            label: 'Column matching detects "Company Name" → "Business Name" automatically'
        },
        {
            value: 'Rollback',
            label: 'Undo import batch if wrong file uploaded—delete all imported rows'
        }
    ],

    comparison: [
        {
            feature: '5 entity types (customers, contacts, addresses, assets, jobs)',
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
            feature: 'Import history with rollback capability',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Downloadable CSV templates per entity',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Custom field mapping with saved presets',
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
            answer: 'Yes. Parent reference resolution auto-links contacts to existing businesses by matching business name or email domain. Example: Contact "John Smith" with business name "ABC Ltd" links to existing customer "ABC Ltd" automatically. If business doesn\'t exist, import creates it first, then links contact.'
        },
        {
            question: 'What if my import fails halfway through?',
            answer: 'Imports are transactional—either all rows succeed or none do. If row 487 of 1200 has an error, entire import fails and shows error details. Fix CSV, re-upload. This prevents partial imports that leave your database in inconsistent state. Use validation preview to catch errors before import starts.'
        },
        {
            question: 'Can I undo an import if I uploaded the wrong file?',
            answer: 'Yes. Import history shows all previous imports with timestamp, user, entity type, row count. Click "Rollback" to delete all records created by that import batch. Critical for fixing mistakes without manual cleanup. Rollback works for imports completed within last 30 days.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
