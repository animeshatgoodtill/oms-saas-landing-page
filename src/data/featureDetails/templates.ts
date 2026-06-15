import { IFeatureDetail } from '@/types';

export const templatesDetail: IFeatureDetail = {
    slug: 'templates',
    title: 'Your Brand, Your Way. Every Time.',
    subtitle: 'Opscel Templates & Branding',
    heroDescription: 'Generic certificates with "Your Company Here" placeholders look unprofessional. Opscel lets you upload your logo, set brand colors, customize headers and footers—so every certificate, quote, and invoice looks like it came from your business, not a template factory.',
    iconId: 'icon-compliance-shield',

    featureHighlights: [
        {
            iconId: 'icon-compliance-shield',
            title: 'Custom PDF Templates',
            description: 'Customize certificates (EIC, EICR, Minor Works, PAT, Fire Alarm, etc.), quotes (Good-Better-Best), and invoices. Upload logo, set brand colors, edit header/footer text, adjust font sizes. PDF generation uses your template automatically.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Logo & Brand Color Upload',
            description: 'Upload company logo (PNG, JPG, SVG). Set primary brand color (hex code or color picker). Logo appears in header, brand color highlights key sections. Professional appearance without design skills.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Header & Footer Customization',
            description: 'Edit header text (company name, tagline, registration numbers). Edit footer text (terms & conditions, payment instructions, warranty disclaimers). Apply per document type or globally.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Certificate Compliance Templates',
            description: 'Opscel provides BS 7671-compliant templates for EIC, EICR, Minor Works. BS 5839-compliant templates for Fire Alarm Service/Commissioning. MCS-compliant templates for Solar PV. You brand them, we ensure compliance.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Quote Template Variations',
            description: 'Good-Better-Best quotes show three options side-by-side. Single-option quotes show one price. Upload different logos per quote type (e.g., "Budget Electrical" for Good, "Premium Electrical" for Best).'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Invoice Template Customization',
            description: 'Invoice templates include logo, brand color, payment terms, bank details, tax registration number. Footer shows payment instructions (bank transfer, Stripe link). Professional invoices without manual formatting.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Template Preview Before Saving',
            description: 'Upload logo, set colors, edit text—preview PDF instantly. See exactly how certificates, quotes, and invoices will look. Iterate until perfect. No surprises when customer receives document.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Multi-Template Support',
            description: 'Create different templates per service type (Electrical vs. Fire Safety), per customer tier (Residential vs. Commercial), or per brand (if you run multiple trading names). Switch template per job.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Font & Typography Control',
            description: 'Choose from 12 professional fonts (Helvetica, Arial, Times, Georgia, etc.). Adjust font sizes for headers, body text, table data. Ensure readability while matching brand style guide.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Default Template Per Document Type',
            description: 'Set default certificate template, default quote template, default invoice template. New documents use default automatically. Override per document if needed (e.g., commercial quote uses alternate template).'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Team Tier Feature',
            description: 'Custom PDF templates and branding available on Team tier (£49/month, 5 users) and Business tier (£79/month, 8 users). Starter tier uses Opscel default templates with your company name only.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Upload Logo & Set Colors',
            description: 'Go to Templates settings, upload company logo (PNG/JPG/SVG), set primary brand color (hex code or color picker). Logo appears in PDF header, brand color highlights sections.'
        },
        {
            stepNumber: 2,
            title: 'Customize Header & Footer',
            description: 'Edit header text (company name, tagline, registration numbers). Edit footer text (payment terms, warranty disclaimers, contact info). Apply globally or per document type.'
        },
        {
            stepNumber: 3,
            title: 'Preview & Save',
            description: 'Click "Preview" to see sample certificate, quote, or invoice with your branding. Adjust font sizes, colors, text until perfect. Save template as default or alternate.'
        },
        {
            stepNumber: 4,
            title: 'Generate Documents',
            description: 'Create certificate, quote, or invoice. System uses default template automatically (or select alternate). PDF generates with your logo, colors, header/footer. Send to customer immediately.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'Professional branded documents strengthen customer trust and brand recognition',
                'Multi-template support if you run multiple trading names or service tiers',
                'Compliance templates (BS 7671, BS 5839, MCS) ensure regulatory adherence',
                'Custom invoices with payment terms reduce customer confusion and late payments',
                'Template preview ensures branding perfect before customer sees document',
                'Team tier includes templates—no enterprise tier jump required'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Upload logo once, applies to all certificates, quotes, and invoices automatically',
                'Header/footer customization reduces manual editing of documents',
                'Default template per document type ensures consistency across team',
                'Template preview before saving prevents branding mistakes',
                'Font and color control matches company brand style guide',
                'Quote template variations (Good-Better-Best vs. single-option) per sales strategy'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Certificates you generate on-site look professional with company branding',
                'No manual logo insertion or formatting—template handles automatically',
                'Customer signatures appear on branded certificates immediately',
                'Professional appearance reflects well on your work quality'
            ]
        }
    ],

    stats: [
        {
            value: 'Custom',
            label: 'Logo, colors, header, footer, fonts—fully branded PDFs'
        },
        {
            value: '12 fonts',
            label: 'Professional font choices (Helvetica, Arial, Times, Georgia, etc.)'
        },
        {
            value: 'Preview',
            label: 'See exact PDF appearance before saving template'
        }
    ],

    comparison: [
        {
            feature: 'Custom PDF templates (certificates, quotes, invoices)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Logo upload (PNG, JPG, SVG)',
            opscel: true,
            others: 'Yes'
        },
        {
            feature: 'Brand color customization (hex/picker)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Header & footer text customization',
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
        },
        {
            feature: 'Multi-template support (per service type or brand)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Font & typography control (12 professional fonts)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'What file formats are supported for logos?',
            answer: 'PNG, JPG, and SVG. PNG and JPG should be high resolution (at least 300 DPI) for crisp printing. SVG (vector) is preferred for scalability—looks sharp at any size. Maximum file size 2MB. Transparent background recommended for PNG to avoid white box around logo.'
        },
        {
            question: 'Can I use different templates for different customers?',
            answer: 'Yes. Create multiple templates (e.g., "Residential Electrical", "Commercial Fire Safety"). When creating a certificate, quote, or invoice, select which template to use. Default template applies automatically, but you can override per document. Useful if you run multiple trading names or service tiers.'
        },
        {
            question: 'Are Opscel templates compliant with regulations?',
            answer: 'Yes. Opscel provides BS 7671-compliant templates for Electrical Installation Certificates (EIC, EICR, Minor Works). BS 5839-compliant templates for Fire Alarm Service and Commissioning Certificates. MCS-compliant templates for Solar PV. You customize branding (logo, colors, header/footer), but compliance-critical fields remain locked to maintain regulatory adherence.'
        },
        {
            question: 'Can I edit templates after saving?',
            answer: 'Yes. Edit template anytime—upload new logo, change brand color, edit header/footer text, adjust fonts. Changes apply to new documents immediately. Previously generated PDFs (already sent to customers) remain unchanged. No need to recreate existing certificates.'
        },
        {
            question: 'What if I need a completely custom template layout?',
            answer: 'Opscel templates are designed to cover 95% of contractor needs while maintaining compliance. If you need a fully custom layout (e.g., unique table structure, additional sections), contact support to discuss. Custom development may be available for Business tier customers with specific requirements.'
        },
        {
            question: 'Do templates work on mobile field service (Telegram/PWA)?',
            answer: 'Yes. Engineers generate certificates on-site via Telegram or PWA. System uses your default template automatically. PDF generates with your logo, colors, branding. Customer receives professional branded certificate immediately after signature. No separate mobile template setup required.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
