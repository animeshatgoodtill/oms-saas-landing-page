import { IDocGuide } from '@/types';

export const documentNumberingGuide: IDocGuide = {
  slug: 'document-numbering',
  title: 'Document Numbering',
  description: 'Set the prefix and starting counter for job, quote, and invoice numbers for professional, trackable document management.',
  lastUpdated: '2026-08-30',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p class="font-semibold text-blue-900 mb-2">30-Second Version</p>
        <p class="text-blue-800">Document Numbering lets you set a prefix and a starting counter for job, quote, and invoice numbers. Each document type has its own fixed format and its own independent counter — there's no free-form pattern to design, just the prefix and where the count starts.</p>
      </div>

      <p class="mb-4">Document numbering generates unique reference numbers for your jobs, quotes, and invoices (certificate numbering is separate and isn't configured here). For each document type you can set:</p>

      <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>Your own prefix (free text, automatically uppercased)</li>
        <li>The starting number the counter should count up from</li>
      </ul>

      <p class="mb-4"><strong>Why it matters:</strong></p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li><strong>Professional branding:</strong> Include your company code as the prefix on every document number</li>
        <li><strong>Audit trails:</strong> A sequential, gap-tracked counter makes documents easy to reference and reconcile</li>
        <li><strong>Compliance:</strong> Unique, sequential numbering per tenant meets standard record-keeping requirements</li>
        <li><strong>Per-document control:</strong> Job, quote and invoice numbering are configured and counted independently</li>
      </ul>`,
    },
    {
      id: 'patterns',
      title: 'Number Formats',
      content: `<p class="mb-4">There's no format-pattern field to fill in — job, quote and invoice numbers each follow one fixed shape. What you configure is the <strong>prefix</strong> and the <strong>starting number</strong>; the rest of the format (whether the year appears, and how many digits the counter pads to) is fixed per document type.</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left">Document type</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Fixed format</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Default example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Job</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">PREFIX-NNNNNN</td>
              <td class="border border-gray-200 px-4 py-2">JOB-000001</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Quote</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">PREFIX-YYYY-NNNN</td>
              <td class="border border-gray-200 px-4 py-2">QT-2026-0001</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Invoice</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">PREFIX-YYYY-NNNN</td>
              <td class="border border-gray-200 px-4 py-2">INV-2026-0003</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mb-4"><strong>What you can and can't change:</strong></p>

      <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>You can change the <strong>prefix</strong> (letters and numbers, automatically uppercased) for each of the three document types independently</li>
        <li>You can set the <strong>starting number</strong> the counter begins from (e.g. when migrating from another system)</li>
        <li>You cannot reposition, add, or remove the year — job numbers never carry one; quote and invoice numbers always do</li>
        <li>You cannot add day- or month-level granularity to any of the three</li>
      </ul>

      <p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3">
        <strong>Note:</strong> Quote numbers automatically reset their counter to 1 at the start of each calendar year. Job and invoice counters never reset — they only move forward.
      </p>`,
    },
    {
      id: 'setup',
      title: 'Setting Up Document Numbering',
      content: `<p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
        <strong>Availability:</strong> Super Admin, Admin
      </p>

      <p class="mb-4">Configure the prefix and starting counter for each document type in your Opscel account.</p>`,
      subsections: [
        {
          title: 'Configuration Steps',
          content: '',
          steps: [
            {
              step: 'Navigate to Document Numbering settings',
              description: 'Go to <strong>Settings → System → Document Numbering</strong>.',
            },
            {
              step: 'Select document type',
              description: 'Choose which document type to configure: <strong>Job</strong>, <strong>Quote</strong>, or <strong>Invoice</strong>. (Certificate numbering is a separate, non-configurable mechanism and isn\'t managed on this page.)',
            },
            {
              step: 'Enter your prefix',
              description: 'In the <strong>Number Prefix</strong> field, enter the letters/numbers you want at the front of the number — for example <code>JOB</code>, <code>QT</code>, or <code>INV</code>. It\'s automatically uppercased. The rest of the format (year for quotes/invoices, digit padding) is fixed and not editable.',
            },
            {
              step: 'Set starting number',
              description: 'Click <strong>Set Starting Number</strong> and enter the number where the counter should begin (default is 1). Useful when migrating from another system.',
            },
            {
              step: 'Preview the format',
              description: 'The preview box shows what the next document number will look like. Verify it matches your expectations.',
            },
            {
              step: 'Save changes',
              description: 'Click <strong>Save</strong>. The new prefix applies to all documents created after this point.',
            },
          ],
        },
        {
          title: 'Important Notes',
          content: '',
          bullets: [
            '<strong>Takes effect immediately:</strong> The new prefix applies to the next document you create. Existing documents keep their original numbers.',
            '<strong>Per-document-type:</strong> Job, Quote and Invoice each have their own independent numbering sequence.',
          ],
        },
      ],
    },
    {
      id: 'document-types',
      title: 'Document Types',
      subsections: [
        {
          title: 'Invoice Numbering',
          content: '<p>Invoices always include the year for easy financial period tracking, in the fixed format <code>PREFIX-YYYY-NNNN</code> — for example <code>INV-2026-0003</code>. You can change the prefix; the year\'s position and the counter\'s digit padding aren\'t configurable. The counter never resets — sequential, unique numbering is required for tax compliance (e.g., HMRC in the UK), and a number already issued can never be reused.</p>',
        },
        {
          title: 'Quote Numbering',
          content: '<p>Quotes always include the year, in the fixed format <code>PREFIX-YYYY-NNNN</code> — for example <code>QT-2026-0001</code>. Unlike invoices, the quote counter automatically resets to 1 at the start of each calendar year.</p>',
        },
        {
          title: 'Certificate Numbering',
          content: `<p>Certificates require unique numbering per standard. Opscel generates certificate numbers that are unique within your business account (per-tenant uniqueness), following the pattern <code>{PREFIX}-{JOBNUMBER}-{SUFFIX}</code> — for example <code>EICR-000123-A</code>. The prefix is configurable per certificate type; the job number and suffix are assigned automatically. This numbering is a separate mechanism from the Job/Quote/Invoice numbering on this page and isn't configured here.</p>

          <p class="text-sm text-blue-700 bg-blue-50 border-l-4 border-blue-400 p-3 mt-2">
            <strong>Per-standard uniqueness:</strong> Certificate numbers are unique within your tenant, not globally. Different businesses can have the same certificate number, which is compliant with industry standards like BS 7671.
          </p>`,
        },
        {
          title: 'Job Numbering',
          content: '<p>Job numbers help track scheduled work and site visits, in the fixed format <code>PREFIX-NNNNNN</code> — for example <code>JOB-000001</code>. Unlike quotes and invoices, job numbers never carry a year. Job numbers are often referenced in internal workflows and field engineer apps.</p>',
        },
        {
          title: 'PO Numbers Aren\'t Part of This System',
          content: '<p>A job\'s <strong>PO number</strong> (purchase order) is a reference your <em>customer</em> supplies — not a sequence Opscel generates, and not configurable here. It has no format pattern or counter of its own; you type it in as free text on the job, and it carries through to invoices and accounting the same way regardless of how you\'ve set up numbering elsewhere. See <a href="/docs/jobs" class="text-blue-600 hover:underline">Jobs</a> for where it\'s set.</p>',
        },
      ],
    },
    {
      id: 'uniqueness',
      title: 'Uniqueness & Gaps',
      content: `<p class="mb-4">Opscel guarantees that every document number within your business account is unique. However, you may notice gaps in your numbering sequence—this is normal and expected.</p>

      <p class="mb-4"><strong>Why gaps occur:</strong></p>
      <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
        <li><strong>Draft deletions:</strong> If you create a draft invoice and delete it, that number is retired and never reused (to maintain audit integrity).</li>
        <li><strong>Failed saves:</strong> If a document save fails mid-process, the number may be reserved but not used.</li>
        <li><strong>Concurrent creation:</strong> Multiple users creating documents simultaneously may cause non-consecutive numbering.</li>
      </ul>

      <p class="text-sm text-blue-700 bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
        <strong>Important:</strong> You cannot edit document numbers after they are issued. This ensures compliance with financial and regulatory audit requirements. Numbers are immutable to preserve audit trails.
      </p>

      <p class="mb-4"><strong>Per-tenant uniqueness:</strong></p>
      <p>Document numbers are unique within your Opscel business account (tenant). If you manage multiple businesses, each has its own independent numbering sequence. Certificate numbers, for example, are not globally unique across all Opscel users—only within your tenant, which complies with industry standards.</p>`,
    },
    {
      id: 'migration',
      title: 'Migrating Existing Numbers',
      content: `<p class="mb-4">If you're migrating to Opscel from another system and want to continue your existing numbering sequence, you can set a high starting number to avoid conflicts.</p>`,
      subsections: [
        {
          title: 'Migration Steps',
          content: '',
          steps: [
            {
              step: 'Find your last document number',
              description: 'In your old system, identify the highest document number for each type (e.g., last invoice was INV-2026-0456).',
            },
            {
              step: 'Set starting number in Opscel',
              description: 'In Settings → System → Document Numbering, set the <strong>Starting Number</strong> for each document type to one higher than your last number (e.g., 457 to continue from 456).',
            },
            {
              step: 'Set the prefix',
              description: 'Set the prefix to match your old system where possible (e.g., <code>INV</code>). The year (for quotes and invoices) will auto-populate with the current year — it isn\'t something you enter yourself.',
            },
            {
              step: 'Test with a draft',
              description: 'Create a draft invoice/quote to verify the number matches your expectations. Delete the draft if needed (it won\'t be reused).',
            },
          ],
        },
        {
          title: 'Migration Tips',
          content: '',
          bullets: [
            '<strong>Recommended:</strong> Leave a small gap (e.g., start at 500 instead of 457) to ensure no overlap if you have any unreported documents in your old system.',
            '<strong>Historical data:</strong> If you import old invoices, they retain their original numbers. The starting number only affects new documents created in Opscel.',
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      subsections: [
        {
          title: 'Number already exists error',
          content: '<p>This should not happen due to Opscel\'s uniqueness guarantee. If you encounter this, contact support immediately—it indicates a system issue that needs investigation.</p>',
        },
        {
          title: 'Want to reset the counter',
          content: '<p>You cannot reset the counter to a lower number (e.g., back to 0001). Job and invoice counters only increment; quote counters reset automatically each calendar year but can\'t be reset on demand. If you need a new sequence, consider changing the prefix, which reads clearly as a new numbering series even though the underlying counter carries on.</p>',
        },
        {
          title: 'Starting number rejected',
          content: '<p>The starting number must be at least the minimum allowed (shown on the settings page) — this exists to prevent a new starting point from colliding with a number already issued. Check the "Minimum allowed" value shown next to the current counter and choose a number at or above it.</p>',
        },
      ],
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      subsections: [
        {
          title: 'Can I change the prefix after documents are issued?',
          content: '<p>Yes. Changing the prefix only affects new documents created after the change. Existing documents keep their original numbers, which is important for audit integrity. For example, if you switch your quote prefix from <code>QUO</code> to <code>QT</code>, old quotes remain as QUO-2026-0123, and new ones become QT-2026-0124.</p>',
        },
        {
          title: 'Are document numbers globally unique?',
          content: '<p>No. Document numbers are unique within your Opscel business account (tenant), not globally across all Opscel users. This is standard practice and complies with regulations. For example, two different electrical contractors using Opscel can both have an invoice numbered INV-2026-0001.</p>',
        },
        {
          title: 'Why are there gaps in my invoice numbers?',
          content: '<p>Gaps are normal and occur when drafts are deleted, saves fail, or documents are created concurrently. Tax authorities (like HMRC) accept gaps as long as numbers are unique and sequential. Gaps do not affect compliance.</p>',
        },
        {
          title: 'Can I customize the format beyond the prefix?',
          content: '<p>No. There\'s no format-pattern field — the position of the year and the counter\'s digit padding are fixed per document type (jobs never carry a year; quotes and invoices always do). The only things you control are the prefix and the starting number.</p>',
        },
        {
          title: 'What happens if the counter reaches a very high number?',
          content: '<p>The counter keeps incrementing and the padding widens automatically, so you won\'t run out of numbers. Quote counters reset to 1 at the start of each new year regardless of how high they reached; job and invoice counters just keep climbing.</p>',
        },
        {
          title: 'Can different engineers have different numbering?',
          content: '<p>No. Document numbering is configured at the account level and applies to all users. This ensures consistency and prevents duplicate numbers across your team.</p>',
        },
      ],
    },
    {
      id: 'need-help',
      title: 'Need More Help?',
      content: `<div class="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <p class="mb-3">If you need assistance configuring document numbering or have questions about your specific use case:</p>
        <ul class="space-y-2">
          <li>📧 <strong>Email:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800 underline">support@opscel.com</a></li>
          <li>📚 <strong>Help Centre:</strong> <a href="/help" class="text-blue-600 hover:text-blue-800 underline">Visit the Help Centre</a></li>
        </ul>
      </div>`,
    },
  ],
  relatedGuides: [
    {
      title: 'Settings Tour',
      description: 'Navigate Opscel settings and system configuration',
      href: '/docs/settings-tour',
    },
    {
      title: 'Invoicing',
      description: 'Create and manage invoices',
      href: '/docs/invoicing',
    },
    {
      title: 'Certificates',
      description: 'Issue compliance certificates',
      href: '/docs/certificates',
    },
    {
      title: 'Quotations',
      description: 'Create and send professional quotes',
      href: '/docs/quotations',
    },
  ],
};
