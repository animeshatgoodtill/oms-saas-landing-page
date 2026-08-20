import { IDocGuide } from '@/types';

export const brandingGuide: IDocGuide = {
    title: 'Branding & PDF Customization',
    description: 'Customize your company\'s visual identity across certificates, quotes, and invoices. Upload logos, set color schemes, and configure PDF templates to match your brand.',
    slug: 'branding',
    lastUpdated: 'May 21, 2026',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>30-Second Version:</strong> Opscel\'s branding tools let you customize how your business appears to customers. Upload your logo, set brand colors, configure PDF templates for certificates, quotes, and invoices, and add accreditation badges. All customer-facing documents automatically use your branding — no manual design work needed. Available to Admins and Super Admins.',
                },
                {
                    title: 'Key Benefits',
                    bullets: [
                        '<strong>Professional appearance:</strong> Consistent branding across all customer touchpoints',
                        '<strong>Compliance ready:</strong> Display accreditation badges on certificates automatically',
                        '<strong>Set once, use everywhere:</strong> Branding applies to PDFs, emails, and customer portal',
                        '<strong>Easy updates:</strong> Change logo or colors in one place, all documents update',
                        '<strong>Preview before publishing:</strong> Test PDF rendering before sending to customers',
                    ],
                },
                {
                    title: 'What You Can Customize',
                    bullets: [
                        'Company logo (header and footer)',
                        'Primary and secondary brand colors',
                        'Certificate PDF layouts and templates',
                        'Quote and invoice cover pages',
                        'Accreditation and compliance badges',
                        'Contact information display',
                        'Footer chrome spacing and layout',
                    ],
                },
            ],
        },
        {
            id: 'logo-upload',
            title: 'Logo Upload & Sizing',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Uploading Your Logo',
                    content: 'Opscel supports PNG, JPEG, and SVG logo formats. SVG is recommended for best quality at all sizes.',
                },
                {
                    title: 'Steps to Upload Logo',
                    steps: [
                        'Navigate to <strong>Settings → Company & Branding → Branding</strong>',
                        'Click <strong>Upload Logo</strong> in the Company Logo section',
                        'Select your logo file (PNG, JPEG, or SVG)',
                        'Wait for upload confirmation (you\'ll see a green checkmark)',
                        'Click <strong>Preview PDF</strong> to see how it looks on certificates',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'After uploading, your logo appears in two places: a preview thumbnail in the branding settings, and the full logo in the PDF preview. If the logo looks pixelated or cut off, you may need to adjust sizing or use a higher resolution file.',
                },
                {
                    title: 'Recommended Logo Specs',
                    table: {
                        headers: ['Specification', 'Recommendation', 'Why'],
                        rows: [
                            ['File format', 'SVG (vector)', 'Scales perfectly at any size'],
                            ['Fallback format', 'PNG at 300 DPI', 'High resolution for print quality'],
                            ['Dimensions', '800×200px minimum', 'Ensures clarity on A4 PDFs'],
                            ['Background', 'Transparent', 'Works on white and colored backgrounds'],
                            ['File size', 'Under 2 MB', 'Faster PDF generation'],
                            ['Color mode', 'RGB', 'Correct for digital and PDF rendering'],
                        ],
                    },
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> If your logo has a lot of white space around it, crop it tightly before uploading. Opscel doesn\'t auto-crop, so extra padding can make the logo appear smaller than intended on PDFs.',
                },
            ],
        },
        {
            id: 'color-scheme',
            title: 'Color Scheme Configuration',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Setting Brand Colors',
                    content: 'Opscel uses two brand colors: <strong>Primary</strong> (main accent color for headers and CTAs) and <strong>Secondary</strong> (supporting color for backgrounds and borders). These colors appear in PDFs, the customer portal, and email templates.',
                },
                {
                    title: 'Steps to Set Colors',
                    steps: [
                        'Go to <strong>Settings → Company & Branding → Branding</strong>',
                        'Scroll to the <strong>Brand Colors</strong> section',
                        'Click the <strong>Primary Color</strong> picker and select your main brand color',
                        'Click the <strong>Secondary Color</strong> picker and choose a complementary color',
                        'Click <strong>Save Changes</strong>',
                        'Preview a certificate PDF to see the color scheme in action',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Primary color appears in certificate headers, quote cover pages, and CTA buttons in the customer portal. Secondary color appears in table borders, section dividers, and footer accents. If colors don\'t appear immediately, try clearing your browser cache or generating a new PDF.',
                },
                {
                    title: 'Color Format Support',
                    bullets: [
                        '<strong>Hex codes:</strong> #FF5733 (most common, recommended)',
                        '<strong>RGB values:</strong> rgb(255, 87, 51)',
                        '<strong>Color names:</strong> Not supported (use hex or RGB)',
                    ],
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Choose high-contrast colors for accessibility. Avoid light yellow or pale gray for primary colors — they can be hard to read on white backgrounds. Test PDFs in print preview mode to ensure colors are legible when printed.',
                },
            ],
        },
        {
            id: 'certificate-templates',
            title: 'Certificate Templates',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Customizing Certificate PDFs',
                    content: 'Certificate templates control the layout, footer, and accreditation display for all issued certificates. Opscel provides standard templates for each certificate type (EICR, EIC, Minor Works, etc.), which you can customize with your branding.',
                },
                {
                    title: 'Steps to Customize Certificate Template',
                    steps: [
                        'Navigate to <strong>Settings → Document Configuration → Certificate Templates</strong>',
                        'Select the certificate type (e.g., EICR, EIC, Fire Alarm Certificate)',
                        'Choose a template layout (Single Column, Two Column, or Compact)',
                        'Toggle <strong>Show Logo in Header</strong> (recommended: ON)',
                        'Toggle <strong>Show Accreditation Badges in Footer</strong> (recommended: ON if applicable)',
                        'Set <strong>Footer Chrome Spacing</strong> to reserve space for footer logos (default: 15mm)',
                        'Click <strong>Preview Template</strong> to generate a sample PDF',
                        'Click <strong>Save Template</strong> to apply changes',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'In the preview PDF: your logo appears in the header, brand colors apply to section headers, and accreditation badges appear in the footer. If footer badges are cut off, increase footer chrome spacing (see Footer Chrome Spacing section below).',
                },
                {
                    title: 'Template Layout Options',
                    table: {
                        headers: ['Layout', 'Best For', 'Notes'],
                        rows: [
                            ['Single Column', 'EICRs, detailed certificates', 'Maximum readability, best for long observation lists'],
                            ['Two Column', 'EICs, short-form certificates', 'Compact layout, fits more data on one page'],
                            ['Compact', 'Minor Works, quick certs', 'Minimal spacing, fastest to print'],
                        ],
                    },
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Set footer chrome spacing to at least 15mm if you have multiple accreditation badges. This prevents footer logos from overlapping with page content. Test with a multi-page EICR to ensure pagination doesn\'t clip the footer.',
                },
            ],
        },
        {
            id: 'quote-templates',
            title: 'Quote Templates',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Customizing Quote PDFs',
                    content: 'Quote templates control the cover page, line item layout, and terms & conditions display for all quotes sent to customers. You can customize the header, add a cover image, and include custom T&Cs.',
                },
                {
                    title: 'Steps to Customize Quote Template',
                    steps: [
                        'Go to <strong>Settings → Document Configuration → Quote Templates</strong>',
                        'Toggle <strong>Include Cover Page</strong> (recommended: ON for professional appearance)',
                        'Upload a <strong>Cover Image</strong> (optional — e.g., team photo, branded banner)',
                        'Edit <strong>Terms & Conditions</strong> text (plain text or HTML)',
                        'Set <strong>Payment Terms</strong> default (e.g., "Net 30", "Due on Receipt")',
                        'Toggle <strong>Show Pricing Breakdown</strong> (materials vs labor)',
                        'Click <strong>Preview Quote</strong> to see a sample PDF',
                        'Click <strong>Save Template</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Preview PDF shows: cover page with your logo and cover image, line items with pricing, subtotal/VAT/total, and terms & conditions on the final page. If T&Cs are cut off, reduce text or split into multiple sections.',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Keep T&Cs concise (under 500 words). Long legal text gets pushed to extra pages, making quotes look bloated. Link to a full T&Cs page on your website instead of embedding everything in the PDF.',
                },
            ],
        },
        {
            id: 'invoice-templates',
            title: 'Invoice Cover Pages',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Customizing Invoice PDFs',
                    content: 'Invoice templates control the header, payment instructions, and footer for all invoices. You can customize the layout, add bank details, and include payment links.',
                },
                {
                    title: 'Steps to Customize Invoice Template',
                    steps: [
                        'Navigate to <strong>Settings → Financial Settings → Invoicing</strong>',
                        'Scroll to <strong>Invoice Template</strong>',
                        'Toggle <strong>Show Logo in Header</strong> (recommended: ON)',
                        'Add <strong>Bank Details</strong> for BACS payments (account number, sort code)',
                        'Add <strong>Payment Instructions</strong> (e.g., "Please reference invoice number in payment")',
                        'Set <strong>Payment Terms</strong> default (Net 7, Net 14, Net 30, etc.)',
                        'Toggle <strong>Include Payment Link</strong> (if using Stripe or GoCardless integration)',
                        'Click <strong>Preview Invoice</strong>',
                        'Click <strong>Save Template</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Preview invoice shows: logo in header, invoice number and date, line items with pricing, payment details section, and payment link (if enabled). If bank details don\'t appear, verify you saved the template after adding them.',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> If you use accounting integration (Xero, QuickBooks), invoice branding is controlled by Opscel but payment terms sync from your accounting software. Update payment terms in both places to avoid discrepancies.',
                },
            ],
        },
        {
            id: 'accreditation-badges',
            title: 'Accreditation Badges',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Adding Compliance Badges',
                    content: 'Accreditation badges (NICEIC, NAPIT, BAFE, Gas Safe, etc.) appear in certificate footers to demonstrate compliance. Upload official badge images in the Branding settings, and Opscel automatically adds them to relevant certificates.',
                },
                {
                    title: 'Steps to Upload Accreditation Badges',
                    steps: [
                        'Go to <strong>Settings → Company & Branding → Accreditation Badges</strong>',
                        'Click <strong>Add Badge</strong>',
                        'Select the accreditation type (NICEIC, NAPIT, BAFE, Gas Safe, etc.)',
                        'Upload the badge image (PNG or SVG, transparent background recommended)',
                        'Enter your <strong>Registration Number</strong> (appears below badge on certificates)',
                        'Toggle <strong>Display on Certificates</strong> (ON by default)',
                        'Click <strong>Save Badge</strong>',
                        'Preview a certificate PDF to verify badge appears in footer',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'After saving, the badge appears in the Accreditation Badges list. When you preview or issue a certificate, the badge appears in the footer alongside your logo and other badges. If the badge is cut off, increase footer chrome spacing (see next section).',
                },
                {
                    title: 'Supported Accreditation Types',
                    bullets: [
                        '<strong>Electrical:</strong> NICEIC, NAPIT, ELECSA, Stroma, NICEIC Approved Contractor',
                        '<strong>Fire Safety:</strong> BAFE, FIA (Fire Industry Association)',
                        '<strong>Gas:</strong> Gas Safe Register',
                        '<strong>Low-Carbon:</strong> MCS (Microgeneration Certification Scheme)',
                        '<strong>Other:</strong> ISO 9001, ISO 14001, Investors in People, etc.',
                    ],
                },
                {
                    title: 'Badge Image Requirements',
                    table: {
                        headers: ['Specification', 'Recommendation'],
                        rows: [
                            ['Format', 'PNG (transparent) or SVG'],
                            ['Dimensions', '200×200px minimum'],
                            ['Background', 'Transparent (white backgrounds show seams)'],
                            ['File size', 'Under 500 KB'],
                            ['Color mode', 'RGB'],
                        ],
                    },
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> If you have multiple accreditations (e.g., NICEIC + BAFE), upload all relevant badges. Opscel automatically filters which badges appear based on the certificate type — electrical certificates show NICEIC, fire certificates show BAFE, etc.',
                },
            ],
        },
        {
            id: 'footer-chrome-spacing',
            title: 'Footer Chrome Spacing',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'What is Footer Chrome?',
                    content: 'Footer chrome is the reserved space at the bottom of each PDF page for logos, accreditation badges, and page numbers. If footer chrome spacing is too small, footer content can overlap with page content or get cut off.',
                },
                {
                    title: 'Technical Requirement',
                    content: 'Opscel requires a <strong>minimum of 15mm footer chrome spacing</strong> to prevent footer logos from being clipped on A4 PDFs. If you have multiple accreditation badges or a tall logo, you may need to increase this to 20mm or 25mm.',
                },
                {
                    title: 'Steps to Adjust Footer Chrome Spacing',
                    steps: [
                        'Navigate to <strong>Settings → Document Configuration → Certificate Templates</strong>',
                        'Select the certificate type you want to adjust',
                        'Scroll to <strong>Footer Chrome Spacing</strong>',
                        'Use the slider or input field to set spacing (default: 15mm)',
                        'Click <strong>Preview Template</strong> to see the effect',
                        'If footer content is still cut off, increase spacing by 5mm increments',
                        'Click <strong>Save Template</strong>',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'In the preview PDF, the footer should have enough space for all badges and logos without overlapping page content. If you still see clipping, increase spacing or reduce the number of badges displayed.',
                },
                {
                    title: 'Recommended Spacing by Badge Count',
                    table: {
                        headers: ['Number of Badges', 'Recommended Spacing', 'Notes'],
                        rows: [
                            ['1-2 badges', '15mm', 'Standard spacing'],
                            ['3-4 badges', '20mm', 'Moderate spacing for multiple badges'],
                            ['5+ badges', '25mm', 'Maximum spacing for dense footers'],
                            ['No badges (logo only)', '12mm', 'Minimum spacing for logo only'],
                        ],
                    },
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> If you have many accreditations, consider displaying only the most relevant ones per certificate type. For example, show NICEIC on electrical certificates but hide it on fire certificates. This reduces footer clutter and allows for tighter spacing.',
                },
            ],
        },
        {
            id: 'preview-testing',
            title: 'Preview & Testing',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin',
                },
                {
                    title: 'Testing Branding Changes',
                    content: 'Before sending branded PDFs to customers, always preview them to ensure logos, colors, and badges render correctly. Opscel provides preview tools for certificates, quotes, and invoices.',
                },
                {
                    title: 'Steps to Preview Branding',
                    steps: [
                        'After making branding changes, navigate to the relevant template settings',
                        'Click <strong>Preview PDF</strong> (available for certificates, quotes, invoices)',
                        'Opscel generates a sample PDF with dummy data',
                        'Download the PDF and open in Adobe Reader or browser',
                        'Check: logo clarity, color accuracy, badge placement, footer spacing',
                        'If issues found, return to settings and adjust',
                        'Repeat preview until satisfied',
                    ],
                },
                {
                    title: 'What to Check in Preview',
                    bullets: [
                        '<strong>Logo:</strong> Clear, not pixelated, correct size, not cut off',
                        '<strong>Colors:</strong> Match your brand guidelines, high contrast, legible',
                        '<strong>Badges:</strong> All expected badges appear, registration numbers visible',
                        '<strong>Footer:</strong> No overlap with content, no clipping, page numbers visible',
                        '<strong>Pagination:</strong> Multi-page PDFs have consistent headers/footers',
                        '<strong>Print quality:</strong> Use browser print preview to check how it looks printed',
                    ],
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Test branding changes with a multi-page EICR certificate (longest document type). If footer and header render correctly on a 10-page EICR, they\'ll work on shorter documents like quotes and invoices.',
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Logo Appears Pixelated or Blurry',
                    content: '<strong>Cause:</strong> Low-resolution image or JPEG compression artifacts.<br><strong>Fix:</strong> Re-upload logo as SVG (vector format) or PNG at 300 DPI minimum. Avoid JPEG for logos — use PNG with transparent background instead.',
                },
                {
                    title: 'Logo is Cut Off or Too Small',
                    content: '<strong>Cause:</strong> Excess white space around logo, or logo dimensions too large/small.<br><strong>Fix:</strong> Crop logo tightly before uploading (remove extra padding). If using SVG, ensure viewBox is set correctly. For PNG, resize to 800×200px range.',
                },
                {
                    title: 'Brand Colors Don\'t Appear on PDFs',
                    content: '<strong>Cause:</strong> PDF generation cache, or colors not saved.<br><strong>Fix:</strong> Verify colors are saved in Settings → Branding. Clear browser cache (Ctrl+Shift+R). Generate a new certificate PDF (old PDFs retain original colors).',
                },
                {
                    title: 'Accreditation Badge is Cut Off in Footer',
                    content: '<strong>Cause:</strong> Footer chrome spacing too small.<br><strong>Fix:</strong> Increase footer chrome spacing to 20mm or 25mm (Settings → Certificate Templates → Footer Chrome Spacing). Preview PDF to verify fix.',
                },
                {
                    title: 'Multiple Badges Overlap Each Other',
                    content: '<strong>Cause:</strong> Too many badges for available footer space.<br><strong>Fix:</strong> Option 1: Increase footer chrome spacing to 25mm. Option 2: Hide less relevant badges (toggle "Display on Certificates" OFF for some badges). Option 3: Reduce badge image sizes to 150×150px.',
                },
                {
                    title: 'Changes Don\'t Appear on Existing PDFs',
                    content: '<strong>Cause:</strong> PDFs are immutable once generated — branding changes only apply to new PDFs.<br><strong>Fix:</strong> Void the old certificate and reissue with new branding. For quotes/invoices, regenerate the document (Edit → Regenerate PDF).',
                },
                {
                    title: 'Preview PDF Shows Wrong Logo',
                    content: '<strong>Cause:</strong> Browser cache showing old logo.<br><strong>Fix:</strong> Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac). If issue persists, clear all browsing data for Opscel domain and sign in again.',
                },
                {
                    title: 'Colors Look Different When Printed',
                    content: '<strong>Cause:</strong> RGB colors (screen) vs CMYK colors (print) render differently.<br><strong>Fix:</strong> Opscel uses RGB for PDFs. To match print colors, test print a sample and adjust RGB values in branding settings. For critical color matching, consult a designer to convert your CMYK brand colors to RGB equivalents.',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Can I use different logos for different document types?',
                    content: 'Not currently. Opscel uses one company logo across all documents (certificates, quotes, invoices). If you need different branding per document type, contact support — this is a Business tier feature request we\'re tracking.',
                },
                {
                    title: 'What image formats are supported for logos?',
                    content: 'PNG, JPEG, and SVG. We recommend SVG (vector format) for best quality at all sizes. If using PNG, upload at 300 DPI minimum with transparent background. Avoid JPEG for logos due to compression artifacts.',
                },
                {
                    title: 'Do branding changes apply to old certificates?',
                    content: 'No. Certificates are immutable once issued — the PDF is frozen with the branding that existed at issue time. Branding changes only apply to newly issued certificates. To update an old certificate\'s branding, you must void it and reissue.',
                },
                {
                    title: 'Can I customize fonts?',
                    content: 'Not currently. Opscel uses a standard font set (Source Sans Pro for body, Manrope for headings) to ensure cross-platform PDF compatibility. Custom fonts require embedding in PDFs, which increases file size. If you need custom fonts, contact support for Business tier options.',
                },
                {
                    title: 'Why does my logo look fine in preview but blurry in the final PDF?',
                    content: 'This usually happens with low-resolution PNG files. The preview may be shown at a smaller size (hiding pixelation), but the final PDF renders at full print resolution. Solution: upload an SVG logo or PNG at 300 DPI minimum.',
                },
                {
                    title: 'How do I remove accreditation badges from specific certificate types?',
                    content: 'Opscel auto-filters badges by certificate type (e.g., NICEIC only shows on electrical certs). To fully remove a badge, go to Settings → Accreditation Badges, find the badge, and toggle "Display on Certificates" OFF. To hide a badge from one certificate type only, you\'ll need to create a custom template (Business tier).',
                },
                {
                    title: 'Can I add a watermark to draft certificates?',
                    content: 'Not currently. Draft certificates are marked with "DRAFT" in the status field but don\'t have a watermark overlay. This is a feature request we\'re considering for a future release.',
                },
                {
                    title: 'What\'s the maximum file size for logo uploads?',
                    content: 'Logo uploads are capped at 2 MB. If your logo file is larger, compress it before uploading. For SVG files, you can often reduce size by removing unnecessary metadata (use an SVG optimizer tool).',
                },
                {
                    title: 'Do color changes affect the customer portal too?',
                    content: 'Yes! Brand colors (primary and secondary) apply to the customer portal, email templates, and PDFs. When you change colors in Settings → Branding, they update everywhere. Customers see your brand colors when they log into the portal or view quotes online.',
                },
                {
                    title: 'How do I set different footer chrome spacing for different certificate types?',
                    content: 'Go to Settings → Document Configuration → Certificate Templates. Each certificate type (EICR, EIC, Minor Works, Fire Alarm, etc.) has its own footer chrome spacing setting. Adjust spacing per template as needed.',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    content: 'If you\'re having trouble with branding or PDF customization, our support team can help. Email <a href="mailto:support@opscel.com" class="text-secondary hover:underline">support@opscel.com</a> with a screenshot of the issue and a link to a sample PDF.',
                },
                {
                    title: 'Related Guides',
                    bullets: [
                        '<a href="/docs/certificates" class="text-secondary hover:underline">Certificates Overview</a> — Learn how certificates use your branding',
                        '<a href="/docs/quotations" class="text-secondary hover:underline">Quotations Overview</a> — Customize quote templates and cover pages',
                        '<a href="/docs/settings-tour" class="text-secondary hover:underline">Settings Tour</a> — Navigate all settings areas',
                        '<a href="/docs/onboarding" class="text-secondary hover:underline">Onboarding for New Businesses</a> — Set up branding as part of initial setup',
                    ],
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Certificates',
            description: 'Certificates use your branding and logo on PDFs',
            href: '/docs/certificates'
        },
        {
            title: 'Quote to Invoice Workflow',
            description: 'Branded quote and invoice PDFs',
            href: '/docs/quote-to-invoice-workflow'
        },
        {
            title: 'Settings Tour',
            description: 'Branding settings location in the admin panel',
            href: '/docs/settings-tour'
        },
        {
            title: 'Onboarding',
            description: 'Setting up branding as part of initial setup',
            href: '/docs/onboarding'
        }
    ]
};
