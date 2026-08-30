import { IFeatureDetail } from '@/types';

export const templatesDetail: IFeatureDetail = {
    slug: 'templates',
    title: 'Your Brand, Your Way. Every Time.',
    subtitle: 'Opscel Templates & Branding',
    heroDescription: 'Generic certificates with "Your Company Here" placeholders look unprofessional. Opscel lets you upload your logo, set brand colors, and customize a footer—so every certificate, quote, and invoice looks like it came from your business, not a template factory.',
    iconId: 'icon-compliance-shield',

    featureHighlights: [
        {
            iconId: 'icon-compliance-shield',
            title: 'One Branding Setup, Every Document',
            description: 'Set your logo, brand colors and footer text once in Company & Branding settings. Certificates (EIC, EICR, Minor Works, PAT, Fire Alarm, etc.), quotes and invoices all pick up the same branding automatically.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Logo & Brand Color Upload',
            description: 'Upload company logo (PNG or JPG — SVG isn\'t accepted for PDF generation). Set primary and secondary brand colors (hex code or color picker). Logo is positioned in the document header, brand color highlights key sections.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Footer Text Customization',
            description: 'Set a custom footer (terms & conditions, payment instructions, warranty disclaimers) that appears across your PDFs, alongside your accreditation badges. There is currently no separate header-text field — the header carries your logo, not custom copy.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Certificate Compliance Templates',
            description: 'Opscel provides BS 7671-compliant templates for EIC, EICR, Minor Works. BS 5839-compliant templates for Fire Alarm Service/Commissioning. MCS-compliant templates for Solar PV. You brand them, we ensure compliance.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Quote Template Variations',
            description: 'Good-Better-Best quotes show three options side-by-side. Single-option quotes show one price. Both use your one company branding setup.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Invoice Template Customization',
            description: 'Invoice PDFs include your logo, brand color, payment terms, bank details, and tax registration number. Footer shows payment instructions (bank transfer, payment link). Professional invoices without manual formatting.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Template Preview Before Saving',
            description: 'Upload logo, set colors, edit footer text—preview PDF instantly. See exactly how certificates, quotes, and invoices will look. Iterate until perfect. No surprises when the customer receives the document.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Team Tier Feature',
            description: 'Branding customization is available on Team tier (£99/month, 3 users) and Business tier (£149/month, 5 users). Starter tier uses Opscel default styling with your company name only.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Upload Logo & Set Colors',
            description: 'Go to Company & Branding settings, upload your company logo (PNG/JPG), set primary and secondary brand colors (hex code or color picker). Logo is positioned in the PDF header, brand color highlights sections.'
        },
        {
            stepNumber: 2,
            title: 'Customize Footer Text',
            description: 'Edit your custom footer text (payment terms, warranty disclaimers, contact info). This one setting applies across certificates, quotes and invoices.'
        },
        {
            stepNumber: 3,
            title: 'Preview & Save',
            description: 'Click "Preview" to see a sample certificate, quote, or invoice with your branding. Adjust colors and footer text until perfect, then save.'
        },
        {
            stepNumber: 4,
            title: 'Generate Documents',
            description: 'Create a certificate, quote, or invoice. The PDF generates with your logo, colors, and footer automatically. Send to the customer immediately.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'Professional branded documents strengthen customer trust and brand recognition',
                'Compliance templates (BS 7671, BS 5839, MCS) ensure regulatory adherence',
                'Custom invoice footer with payment terms reduces customer confusion and late payments',
                'Template preview ensures branding is perfect before the customer sees the document',
                'Team tier includes branding—no enterprise tier jump required'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Set logo and colors once, applies to all certificates, quotes, and invoices automatically',
                'Footer customization reduces manual editing of documents',
                'One branding setup means consistency across the whole team, with no per-job template to pick',
                'Template preview before saving prevents branding mistakes',
                'Quote template variations (Good-Better-Best vs. single-option) per sales strategy'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Certificates you generate on-site look professional with company branding',
                'No manual logo insertion or formatting—branding is applied automatically',
                'Customer signatures appear on branded certificates immediately',
                'Professional appearance reflects well on your work quality'
            ]
        }
    ],

    stats: [
        {
            value: 'Custom',
            label: 'Logo, brand colors, and footer text—one branded setup for every PDF'
        },
        {
            value: 'One setup',
            label: 'A single global branding configuration applies to every document type'
        },
        {
            value: 'Preview',
            label: 'See exact PDF appearance before saving your branding'
        }
    ],

    comparison: [
        {
            feature: 'Custom PDF branding (certificates, quotes, invoices)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Logo upload (PNG, JPG)',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Brand color customization (hex/picker)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Footer text customization',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Compliance templates (BS 7671, BS 5839, MCS)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Quote template variations (Good-Better-Best vs. single)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Template preview before saving',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'What file formats are supported for logos?',
            answer: 'PNG and JPG. SVG is not accepted — PDF generation requires a raster format. PNG and JPG should be high resolution (at least 300 DPI) for crisp printing. Maximum file size 2MB. Transparent background recommended for PNG to avoid a white box around the logo.'
        },
        {
            question: 'Can I use different templates for different customers?',
            answer: 'Not currently. Opscel uses one global branding configuration (logo, colors, footer) across all certificates, quotes, and invoices for your business. If you run multiple trading names or need per-job branding, contact support to discuss your requirements.'
        },
        {
            question: 'Are Opscel templates compliant with regulations?',
            answer: 'Yes. Opscel provides BS 7671-compliant templates for Electrical Installation Certificates (EIC, EICR, Minor Works). BS 5839-compliant templates for Fire Alarm Service and Commissioning Certificates. MCS-compliant templates for Solar PV. You customize branding (logo, colors, footer), but compliance-critical fields remain locked to maintain regulatory adherence.'
        },
        {
            question: 'Can I edit my branding after saving?',
            answer: 'Yes. Edit your branding anytime—upload a new logo, change brand colors, edit footer text. Changes apply to new documents immediately. Previously generated PDFs (already sent to customers) remain unchanged. No need to recreate existing certificates.'
        },
        {
            question: 'What if I need a completely custom template layout?',
            answer: 'Opscel\'s templates are designed to cover most contractor needs while maintaining compliance. If you need a fully custom layout (e.g., unique table structure, additional sections), contact support to discuss your requirements.'
        },
        {
            question: 'Does branding work on the field engineer app?',
            answer: 'Yes. Engineers generate certificates on-site via the field PWA. The system uses your branding automatically. The PDF generates with your logo, colors, and footer. The customer receives a professional branded certificate immediately after signature — no separate mobile setup required.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
