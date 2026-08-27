import { IFeatureDetail } from '@/types';

export const purchaseOrdersDetail: IFeatureDetail = {
    slug: 'purchase-orders',
    title: 'Purchase Orders Built From the Job You\'ve Already Priced',
    subtitle: 'Opscel Purchase Orders',
    heroDescription: 'Raise a purchase order from a job or from a quote\'s materials take-off, and the order codes, quantities and buy costs land on it automatically — no retyping a parts list you\'ve already priced. Send it to your supplier or subcontractor, and if the order changes afterwards, amend it: the supplier gets Revision 2, and the original stays exactly as it was sent, with its own PDF.',
    iconId: 'icon-price-tag',


    sections: [
        {
            eyebrow: 'Amend Without Losing the Original',
            title: 'Change a Sent Order. Keep What They Received.',
            description: 'Most systems lock a purchase order the moment it is emailed, so a change means a phone call and an argument about which version is real. Amend an order here and it becomes the next revision — the supplier is re-emailed, and every earlier PDF is kept exactly as it went out.',
            imageSrc: '/images/features/purchase-orders/purchase-order-revisions.svg',
            imageAlt: 'Purchase order PO-1042 moving from Draft to Sent Rev 1, Rev 2 and Rev 3. Each revision issues its own PDF and every earlier PDF is retained and locked, with Cancelled shown as a terminal state.',
            imageWidth: 1040,
            imageHeight: 480,
            bullets: [
                'The order number never changes \u2014 only the revision does',
                'Each revision keeps its own PDF, exactly as the supplier received it',
                'If they query what was ordered, you can still produce the document they hold'
            ]
        },
        {
            eyebrow: 'Two Kinds of Order',
            title: 'A Subcontract Order Should Not Look Like a Parts List',
            description: 'Materials orders carry codes, quantities and unit prices. Subcontract orders carry the scope and the price \u2014 and none of the quantity columns that mean nothing for a day of labour. Same numbering, same revision trail; only the line-item shape follows the order type.',
            imageSrc: '/images/features/purchase-orders/purchase-order-types.svg',
            imageAlt: 'A materials order shown as a five-column table of code, description, quantity, unit price and line total, beside a subcontract order with no quantity columns \u2014 scope-of-works text and a single order value.',
            imageWidth: 1040,
            imageHeight: 460
        }
    ],
    stats: [
        { value: '2 order types', label: 'Materials for parts, Subcontract for labour and scope' },
        { value: '2 starting points', label: 'Raise a PO from a job or a quote\'s materials take-off' },
        { value: 'Every revision kept', label: 'An amended order becomes Revision 2 — the original PDF is never overwritten' }
    ],

    featureHighlights: [
        {
            iconId: 'icon-job-workflow',
            title: 'Raised Straight From a Job',
            description: 'Raise a purchase order from a job and it already carries the site address and the job link. You\'re ordering parts for a job you\'re already looking at, not starting from a blank form.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Pulled From a Quote\'s Take-off',
            description: 'Raise from a quote\'s materials take-off and the order codes, quantities, units and buy costs land on the order exactly as you priced them. You\'ve already done the pricing once — the PO doesn\'t make you do it again.'
        },
        {
            iconId: 'icon-audit-trail',
            title: 'Amend After You\'ve Sent It',
            description: 'Most systems lock a purchase order the moment it\'s emailed — a change means a phone call and an argument about which version is real. Amend an Opscel order and it becomes Revision 2, the supplier is re-emailed, and the original is kept exactly as it was sent, with its own PDF.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Every Revision on File',
            description: 'If there\'s ever a dispute about what was ordered, open the order and see every revision that went out — each one with the PDF the supplier was holding at the time.'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Two Order Types, One System',
            description: 'Materials orders for parts from a wholesaler, with quantities and units. Subcontract orders for instructing work, with scope and price and none of the quantity columns that make no sense for a day\'s labour. Choose the type and the form — and the PDF — changes to match.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Prints Like a Purchase Order Should',
            description: 'Delivery or site address and required-by date prominent, VAT and totals, payment terms, and "This purchase order number must be quoted on your invoice." A subcontract order prints as a Subcontractor Purchase Order.'
        },
        {
            iconId: 'icon-custom-dropdown',
            title: 'Your Own Numbering',
            description: 'Set your own prefix, including a separate prefix for subcontractor orders if that\'s what your suppliers already recognise. The number that goes out is the one your accounts team already uses.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Buy Prices Stay With the People Who Should See Them',
            description: 'Admin, Contract Manager and Accounts can see what you pay. Site Managers and Engineers have no access to purchase orders at all — deliberately, because a PO carries what you pay a supplier, not what you charge a customer.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Raise the Order',
            description: 'Start from a job — the site address and job link carry over — or from a quote\'s materials take-off, which carries the order codes, quantities, units and buy costs. Or start from scratch and pick Materials or Subcontract.'
        },
        {
            stepNumber: 2,
            title: 'Send It',
            description: 'Send the PO to your supplier or subcontractor. Your numbering prefix, VAT, totals and payment terms are already on it, along with "This purchase order number must be quoted on your invoice."'
        },
        {
            stepNumber: 3,
            title: 'Amend If It Changes',
            description: 'Quantities change, or a subcontractor\'s scope grows? Amend the order and it becomes Revision 2, automatically re-emailed to the supplier. The original revision — and its PDF — stays exactly as sent.'
        },
        {
            stepNumber: 4,
            title: 'Keep the Paper Trail',
            description: 'Every revision is kept against the order. If there\'s ever a question about what was ordered, you can produce the exact document the supplier was holding.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Office Managers',
            benefits: [
                'Raise a PO from a job in seconds — site address and job link already on it',
                'Pull a quote\'s materials take-off straight onto an order — no retyping a parts list you already priced',
                'Amend a sent order without a phone call — it becomes Revision 2 and the supplier is re-emailed automatically',
                'Materials and Subcontract orders print the right layout for the job — quantities for parts, scope and price for labour'
            ]
        },
        {
            persona: 'Contract Managers',
            benefits: [
                'Instruct subcontract work with a proper Subcontractor Purchase Order — scope, price, required-by date',
                'Every revision is kept with its own PDF, so a dispute over what was ordered is a two-click lookup, not a phone call',
                'Separate numbering prefix for subcontractor orders, if that\'s what your subbies already expect',
                'Full order history sits against the job it was raised from'
            ]
        },
        {
            persona: 'Accounts',
            benefits: [
                'Buy prices are visible to Admin, Contract Manager and Accounts — not to Site Managers or field engineers',
                'Every PO carries a number the supplier is told to quote back on their invoice',
                'VAT and totals sit on the order the same way they\'ll sit on the supplier\'s invoice',
                'Revision history means the order you agreed and the order you\'re being invoiced against are never in doubt'
            ]
        }
    ],

    comparison: [
        { feature: 'Raise a PO from a job or a quote\'s take-off', opscel: true, others: 'Some' },
        { feature: 'Amend a sent order without losing the original', opscel: true, others: 'No' },
        { feature: 'Every revision kept with its own PDF', opscel: true, others: 'No' },
        { feature: 'Materials and Subcontract order types', opscel: true, others: 'Some' },
        { feature: 'Separate numbering prefix for subcontractor orders', opscel: true, others: 'No' },
        { feature: 'Buy prices hidden from field roles', opscel: true, others: 'Some' }
    ],

    faq: [
        {
            question: 'Is this the customer\'s PO to us, or our PO to a supplier?',
            answer: 'This is outbound — the purchase order you raise and send to your own supplier or subcontractor. It\'s not for logging a customer\'s PO number against a job.'
        },
        {
            question: 'Does this send purchase orders to Xero or QuickBooks?',
            answer: 'No — purchase orders aren\'t synced to your accounting software. They control what you order and instruct, with a PDF you send and file. Once the supplier invoices you, that invoice goes through your normal accounting integration, not this module.'
        },
        {
            question: 'Can I amend a purchase order after I\'ve sent it?',
            answer: 'Yes. Amend it and it becomes Revision 2 — the supplier is re-emailed automatically, and the original revision is kept exactly as it was sent, with its own PDF. Nothing you originally sent is overwritten.'
        },
        {
            question: 'What\'s the difference between a Materials and a Subcontract order?',
            answer: 'Materials orders are for parts from a wholesaler — order codes, quantities and units. Subcontract orders are for instructing work — scope and price, with none of the quantity columns that don\'t make sense for a day\'s labour. A subcontract order prints as a Subcontractor Purchase Order.'
        },
        {
            question: 'Who can see what I pay on a purchase order?',
            answer: 'Admin, Contract Manager and Accounts can see buy prices. Site Managers and Engineers have no access to purchase orders at all.'
        },
        {
            question: 'Does Opscel track deliveries or goods received against a PO?',
            answer: 'Not currently. Purchase orders cover raising, sending and amending the order itself — there\'s no goods-receipt or delivery-tracking step.'
        },
        {
            question: 'Which plan includes purchase orders?',
            answer: 'Team and Business.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
