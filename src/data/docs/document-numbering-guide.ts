import { IDocGuide } from '@/types';

export const documentNumberingGuide: IDocGuide = {
  slug: 'document-numbering',
  title: 'Document Numbering',
  description: 'Customize invoice, quote, certificate, and job number formats with prefixes, date patterns, and sequential counters for professional document management.',
  lastUpdated: '2024-05-23',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p class="font-semibold text-blue-900 mb-2">30-Second Version</p>
        <p class="text-blue-800">Document Numbering lets you customize the format of invoice, quote, certificate, and job numbers with prefixes, date patterns, and sequential counters. Professional, branded numbering improves audit trails, ensures compliance, and makes documents easy to track and reference.</p>
      </div>

      <p class="mb-4">Document numbering is the system that generates unique reference numbers for your invoices, quotes, certificates, and jobs. Instead of generic sequential numbers, you can create custom formats that include:</p>

      <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>Your company prefix or brand code</li>
        <li>Date components (year, month, day)</li>
        <li>Sequential counters that auto-increment</li>
        <li>Document type identifiers</li>
      </ul>

      <p class="mb-4"><strong>Why it matters:</strong></p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li><strong>Professional branding:</strong> Include your company code in every document number</li>
        <li><strong>Audit trails:</strong> Date-based patterns make it easy to identify when documents were created</li>
        <li><strong>Compliance:</strong> Meet regulatory requirements for unique, sequential numbering</li>
        <li><strong>Per-document control:</strong> Configure different formats for invoices, quotes, certificates, and jobs</li>
      </ul>`,
    },
    {
      id: 'patterns',
      title: 'Number Format Patterns',
      content: `<p class="mb-4">Document number formats follow a pattern of <strong>prefix + counter + suffix</strong>, with optional date components. Here's the syntax:</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left">Element</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Syntax</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Output Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Static prefix</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">INV-</td>
              <td class="border border-gray-200 px-4 py-2">INV-</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Year (4-digit)</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">{YYYY}</td>
              <td class="border border-gray-200 px-4 py-2">2024</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Year (2-digit)</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">{YY}</td>
              <td class="border border-gray-200 px-4 py-2">24</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Month</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">{MM}</td>
              <td class="border border-gray-200 px-4 py-2">05</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Day</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">{DD}</td>
              <td class="border border-gray-200 px-4 py-2">23</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Counter (auto-increment)</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">{counter}</td>
              <td class="border border-gray-200 px-4 py-2">0001, 0002, 0003...</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Separator</td>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">- or /</td>
              <td class="border border-gray-200 px-4 py-2">- or /</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mb-4"><strong>Example formats:</strong></p>

      <div class="bg-gray-50 p-4 rounded-lg mb-4 space-y-2 font-mono text-sm">
        <div><span class="text-gray-600">Pattern:</span> <strong>INV-{YYYY}-{counter}</strong> → <span class="text-green-600">INV-2024-0001</span></div>
        <div><span class="text-gray-600">Pattern:</span> <strong>QUO-{YY}{MM}{DD}-{counter}</strong> → <span class="text-green-600">QUO-240523-001</span></div>
        <div><span class="text-gray-600">Pattern:</span> <strong>CERT-{counter}</strong> → <span class="text-green-600">CERT-001234</span></div>
        <div><span class="text-gray-600">Pattern:</span> <strong>JOB/{YYYY}/{counter}</strong> → <span class="text-green-600">JOB/2024/00456</span></div>
      </div>

      <p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3">
        <strong>Note:</strong> The counter always uses leading zeros and is padded to 4 digits by default (e.g., 0001, 0234, 1456). This ensures consistent length and sortability.
      </p>`,
    },
    {
      id: 'setup',
      title: 'Setting Up Document Numbering',
      content: `<p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
        <strong>Availability:</strong> Super Admin, Admin
      </p>

      <p class="mb-4">Configure document numbering formats for each document type in your Opscel account.</p>`,
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
              description: 'Choose which document type to configure: <strong>Invoice</strong>, <strong>Quote</strong>, <strong>Certificate</strong>, or <strong>Job</strong>.',
            },
            {
              step: 'Enter your pattern',
              description: 'In the <strong>Format Pattern</strong> field, enter your desired format using the syntax from the table above. For example: <code>INV-{YYYY}-{counter}</code>.',
            },
            {
              step: 'Set starting number',
              description: 'In the <strong>Starting Number</strong> field, enter the number where the counter should begin (default is 1). Useful when migrating from another system.',
            },
            {
              step: 'Preview the format',
              description: 'The preview box shows what the next document number will look like. Verify it matches your expectations.',
            },
            {
              step: 'Save changes',
              description: 'Click <strong>Save</strong>. The new format applies to all documents created after this point.',
            },
          ],
        },
        {
          title: 'Important Notes',
          content: '',
          bullets: [
            '<strong>Takes effect immediately:</strong> The new format applies to the next document you create. Existing documents keep their original numbers.',
            '<strong>Per-document-type:</strong> Each document type (Invoice, Quote, Certificate, Job) has its own independent numbering sequence.',
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
          content: '<p>Invoices typically use date-based formats for easy financial period tracking. Common patterns: <code>INV-{YYYY}-{counter}</code> or <code>INV{YYYY}{MM}{counter}</code>. Sequential, unique numbering is often required for tax compliance (e.g., HMRC in the UK).</p>',
        },
        {
          title: 'Quote Numbering',
          content: '<p>Quotes often include the date to indicate when the quote was issued, helping track validity periods. Common patterns: <code>QUO-{YY}{MM}{DD}-{counter}</code> or <code>Q{YYYY}-{counter}</code>.</p>',
        },
        {
          title: 'Certificate Numbering',
          content: `<p>Certificates require unique numbering per standard. Opscel generates certificate numbers that are unique within your business account (per-tenant uniqueness). Common patterns: <code>CERT-{counter}</code> or <code>{YYYY}-EICR-{counter}</code>.</p>

          <p class="text-sm text-blue-700 bg-blue-50 border-l-4 border-blue-400 p-3 mt-2">
            <strong>Per-standard uniqueness:</strong> Certificate numbers are unique within your tenant, not globally. Different businesses can have the same certificate number, which is compliant with industry standards like BS 7671.
          </p>`,
        },
        {
          title: 'Job Numbering',
          content: '<p>Job numbers help track work orders and site visits. Common patterns: <code>JOB-{YYYY}-{counter}</code> or <code>J{YY}{MM}{counter}</code>. Job numbers are often referenced in internal workflows and field engineer apps.</p>',
        },
        {
          title: 'Work Order Numbering',
          content: '<p>Similar to jobs, work orders use sequential numbering. Pattern: <code>WO-{YYYY}-{counter}</code>. Work orders are typically used for multi-visit or ongoing projects.</p>',
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
              description: 'In your old system, identify the highest document number for each type (e.g., last invoice was INV-2024-0456).',
            },
            {
              step: 'Set starting number in Opscel',
              description: 'In Settings → System → Document Numbering, set the <strong>Starting Number</strong> for each document type to one higher than your last number (e.g., 457 to continue from 456).',
            },
            {
              step: 'Update the format pattern',
              description: 'Ensure the format pattern matches your old system (e.g., <code>INV-{YYYY}-{counter}</code>). The year component will auto-populate with the current year.',
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
          content: '<p>You cannot reset the counter to a lower number (e.g., back to 0001). Counters only increment. If you need a new sequence, consider changing the format pattern to include a new prefix or date component, which effectively creates a new numbering series.</p>',
        },
        {
          title: 'Format not displaying correctly',
          content: '<p>Check your pattern syntax carefully. Ensure date placeholders use curly braces: <code>{YYYY}</code>, not <code>YYYY</code>. The counter must be <code>{counter}</code>, not <code>{COUNT}</code> or similar. Review the pattern syntax table in this guide.</p>',
        },
      ],
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      subsections: [
        {
          title: 'Can I change the format after documents are issued?',
          content: '<p>Yes. Changing the format only affects new documents created after the change. Existing documents keep their original numbers, which is important for audit integrity. For example, if you switch from <code>INV-{counter}</code> to <code>INV-{YYYY}-{counter}</code>, old invoices remain as INV-0123, and new ones become INV-2024-0124.</p>',
        },
        {
          title: 'Are document numbers globally unique?',
          content: '<p>No. Document numbers are unique within your Opscel business account (tenant), not globally across all Opscel users. This is standard practice and complies with regulations. For example, two different electrical contractors using Opscel can both have an invoice numbered INV-2024-0001.</p>',
        },
        {
          title: 'Why are there gaps in my invoice numbers?',
          content: '<p>Gaps are normal and occur when drafts are deleted, saves fail, or documents are created concurrently. Tax authorities (like HMRC) accept gaps as long as numbers are unique and sequential. Gaps do not affect compliance.</p>',
        },
        {
          title: 'Can I use letters in the counter?',
          content: '<p>No. The <code>{counter}</code> element is numeric only (e.g., 0001, 0002). However, you can add letter prefixes or suffixes as static text outside the counter: <code>INV-A-{counter}</code> produces INV-A-0001, INV-A-0002.</p>',
        },
        {
          title: 'What happens if I reach 9999?',
          content: '<p>The counter continues incrementing beyond 9999 to 10000, 10001, etc. The padding adjusts automatically, so you won\'t run out of numbers. If you want to restart from 0001, change the format pattern to include a new year or prefix.</p>',
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
          <li>📚 <strong>Help Centre:</strong> <a href="https://help.opscel.com" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">help.opscel.com</a></li>
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
