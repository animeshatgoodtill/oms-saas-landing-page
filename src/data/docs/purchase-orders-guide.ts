import { IDocGuide } from '@/types';

export const purchaseOrdersGuide: IDocGuide = {
    slug: 'purchase-orders',
    title: 'Purchase Orders',
    description: 'Learn how to raise, send and amend purchase orders to your own suppliers and subcontractors — pre-filled from a job or a quote, sent as PDF, and revision-tracked once sent.',
    lastUpdated: '2026-08-27',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Admins, Contract Managers, Accounts (raise and send) | Sales Managers, Viewers (read-only)<br><strong>What:</strong> Orders you raise to your own suppliers and subcontractors for materials or subcontract work<br><strong>Where:</strong> Suppliers and Purchase Orders sections, or raised directly from a job or a quote<br><strong>Why:</strong> Pre-filled ordering, a proper PDF, and a kept record of exactly what was sent if a supplier disputes it</p></div>'
                },
                {
                    title: 'Not to Be Confused With: Customer PO Numbers',
                    content: '<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6"><p class="text-sm text-yellow-900"><strong>Purchase Orders</strong> (this guide) are orders <strong>you raise</strong>, sent out to your own suppliers or subcontractors.</p><p class="text-sm text-yellow-900 mt-2">That is a different thing from the <strong>Customer PO</strong> field you may already use on a job or service contract — the reference number <strong>your customer</strong> gives <strong>you</strong>, so their invoice matches their own purchasing system. See <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs</a> and <a href="/docs/document-numbering" class="text-blue-600 hover:text-blue-800">Document Numbering</a> for that. The two are unrelated and live in different places — raising a Purchase Order does not touch a job\'s Customer PO field, and vice versa.</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Pre-filled from what you already have:</strong> raise a PO from a job or a quote\'s materials take-off, and the order lines fill themselves in',
                        '<strong>Proper PDF:</strong> supplier details, delivery address, required-by date, line items and totals, sent by email',
                        '<strong>Amend after sending without losing the original:</strong> a revised order keeps the exact document the supplier first received',
                        '<strong>Materials and Subcontract orders:</strong> two order types, each formatted for what it is'
                    ]
                },
                {
                    title: 'Common Use Cases',
                    content: '',
                    bullets: [
                        'Ordering parts for a job from your usual wholesaler, with the site address already on the order',
                        'Instructing a subcontractor to carry out part of a job, referencing the site and the work',
                        'Ordering the exact materials list priced up in a quote, without re-typing quantities and codes',
                        'Chasing a supplier who says they never received the order, without creating a duplicate',
                        'Correcting a quantity or date on an order that has already gone out, while keeping proof of what was originally sent'
                    ]
                }
            ]
        },
        {
            id: 'suppliers',
            title: 'Suppliers',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> Team &amp; Business | <strong>Roles:</strong> Admin, Contract Manager, Accounts (create/edit) | Sales Manager, Viewer (read-only) | Site Manager, Engineer: no access</p>'
                },
                {
                    title: 'The Supplier Record',
                    content: '<p>Before you can raise a purchase order you need a supplier or subcontractor on file. A supplier record holds:</p>',
                    bullets: [
                        '<strong>Name</strong> and <strong>type</strong> — Supplier, Subcontractor, or both',
                        '<strong>Email address</strong> — this is what the order PDF is sent to',
                        '<strong>Address</strong>, <strong>VAT number</strong> and <strong>company number</strong> — shown on the PDF',
                        '<strong>Payment terms</strong> — shown on the PDF',
                        '<strong>CIS status</strong> (optional) — reference information only; nothing on the purchase order calculates a CIS deduction from it'
                    ]
                },
                {
                    title: 'Why the Email Address Matters',
                    content: '<p>A purchase order is sent by email with the PDF attached. If a supplier record has no email address, you cannot send an order to it — see <a href="#troubleshooting">Troubleshooting</a> below for what to do.</p>'
                }
            ]
        },
        {
            id: 'raising-an-order',
            title: 'Raising a Purchase Order',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> Admin, Contract Manager, Accounts</p>'
                },
                {
                    title: 'Two Order Types',
                    content: '<p>Every purchase order is one of two types:</p>',
                    bullets: [
                        '<strong>Materials:</strong> ordering parts or products from a supplier',
                        '<strong>Subcontract:</strong> instructing a subcontractor to carry out work'
                    ]
                },
                {
                    title: 'Three Ways to Start an Order',
                    content: '<p>An order is normally raised from something you already have, so it comes pre-filled rather than typed from scratch:</p>',
                    bullets: [
                        '<strong>From a job:</strong> the order carries the job\'s site address and a link back to the job',
                        '<strong>From a quote\'s materials take-off:</strong> the order picks up the order codes, quantities, units and buy costs already priced into the quote, so you are not re-entering them',
                        '<strong>Blank:</strong> a plain order form with nothing pre-filled — available, but the other two routes are the quicker and less error-prone way in and are offered first'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>Once raised, a purchase order sits in Draft status. A draft can be freely edited — add or remove lines, change quantities, change the supplier — before you send it. Nothing goes to the supplier until you send it.</p>'
                }
            ]
        },
        {
            id: 'sending-and-numbering',
            title: 'Sending and Numbering',
            subsections: [
                {
                    title: 'Sending by Email',
                    content: '<p>Sending a purchase order emails the supplier with a PDF of the order attached. Once sent, the order is no longer a free-edit draft — see <a href="#amending">Amending a Sent Order</a> for how to change it after this point.</p>'
                },
                {
                    title: 'Order Numbers',
                    content: '<p>Purchase orders are numbered automatically, starting from <strong>PO-0001</strong> by default. The prefix, the separator, and how many digits the counter pads to are all configurable. Subcontract orders can be given their own prefix, so materials and subcontract orders are told apart at a glance — for example <strong>SPO0000085</strong> for a subcontract order.</p>'
                },
                {
                    title: 'The PDF',
                    content: '<p>The purchase order PDF includes:</p>',
                    bullets: [
                        'Your company details',
                        'The purchase order number',
                        'The supplier',
                        '<strong>The delivery/site address and the required-by date, shown prominently</strong>',
                        'Line items',
                        'VAT and totals',
                        'Payment terms',
                        'The standard line: <em>"This purchase order number must be quoted on your invoice."</em>'
                    ]
                },
                {
                    title: 'Materials vs Subcontract Formatting',
                    content: '<p>A Materials order lists lines with quantity, unit and unit price columns, the way you\'d expect for parts.</p><p>A <strong>Subcontract</strong> order is titled <strong>"Subcontractor Purchase Order"</strong> on the PDF and instead shows a description and a line total per item, with no quantity columns — it is instructing work, not counting units.</p>'
                }
            ]
        },
        {
            id: 'amending',
            title: 'Amending a Sent Order',
            subsections: [
                {
                    title: 'Why This Matters',
                    content: '<p>Once an order has gone to a supplier, plans change — a quantity needs adjusting, a required-by date slips, a line needs adding. Purchase Orders lets you amend a sent order rather than cancelling and starting again.</p>'
                },
                {
                    title: 'How It Works',
                    content: '<p>Amending a sent order creates <strong>Revision 2</strong> of that same purchase order (the number does not change, only the revision). The supplier is re-emailed with the updated PDF.</p><p><strong>The original revision is kept, exactly as it was sent</strong> — its own PDF, untouched. If there is ever a disagreement with the supplier about what was originally ordered, you can still produce the document they actually received, not a version that has since been edited.</p><div class="my-8"><img src="/images/features/purchase-orders/purchase-order-revisions.svg" alt="Purchase order PO-1042 moving from Draft to Sent Rev 1, Rev 2 and Rev 3. Each revision issues its own PDF and every earlier PDF is retained and locked, with Cancelled shown as a terminal state." class="w-full rounded-lg border border-border shadow-lg" /></div>'
                },
                {
                    title: 'Re-Sending vs Amending',
                    content: '<p>These are two different actions — pick the one that matches what actually happened:</p>',
                    bullets: [
                        '<strong>Re-send:</strong> for chasing a lost or missed email. Nothing on the order changes — it goes out again as the <strong>same revision</strong>, no new version is created.',
                        '<strong>Amend:</strong> for when the order itself needs to change. This is what creates Revision 2 and keeps the original.'
                    ]
                },
                {
                    title: 'Cancelling an Order',
                    content: '<p>A purchase order can be cancelled. <strong>Cancelled is final</strong> — a cancelled order cannot be revived or re-sent. Raise a new order if the work or materials are still needed.</p>'
                }
            ]
        },
        {
            id: 'permissions-and-tier',
            title: 'Permissions & Availability',
            subsections: [
                {
                    title: 'Tier',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Tier:</strong> Team &amp; Business</p>'
                },
                {
                    title: 'Who Can Do What',
                    content: '<p>A purchase order carries buy prices, so access follows the same financial-data boundary as the rest of Opscel:</p>',
                    bullets: [
                        '<strong>Admin, Contract Manager:</strong> full access — raise, send, amend, cancel and delete',
                        '<strong>Accounts:</strong> raise, send and amend, but <strong>cannot delete</strong> an order',
                        '<strong>Sales Manager, Viewer:</strong> read-only — can see purchase orders but not create or change them',
                        '<strong>Site Manager, Engineer:</strong> <strong>no access at all</strong> — this is deliberate. Purchase orders show buy prices, and those two field-facing roles are kept clear of financial data by design'
                    ]
                }
            ]
        },
        {
            id: 'not-yet',
            title: 'What This Does Not Do Yet',
            subsections: [
                {
                    title: '',
                    content: '<p>Phase one of Purchase Orders covers raising, sending, amending and cancelling an order. It deliberately does not yet cover:</p>',
                    bullets: [
                        '<strong>Goods receipt</strong> — there is no way to record that a delivery has arrived against an order',
                        '<strong>Marking a PO as invoiced</strong> — matching a supplier invoice back to the order is not tracked',
                        '<strong>Stock or inventory</strong> — Opscel does not hold stock levels',
                        '<strong>Xero or QuickBooks sync</strong> — purchase orders do not post to your accounting software',
                        '<strong>CIS deduction calculations</strong> — the CIS status on a supplier is reference information only',
                        '<strong>VAT domestic reverse charge</strong> on the purchase order',
                        '<strong>Retention</strong>',
                        '<strong>Approval chains</strong> — anyone with permission to raise an order can send it; there is no separate sign-off step'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Can&apos;t Send — Supplier Has No Email Address',
                    content: '<p><strong>Problem:</strong> the Send action is unavailable, or sending fails, for a supplier with no email on file.</p><p><strong>Fix:</strong> open the supplier record and add an email address, then send the order again. A purchase order can only be sent by email, so a supplier without one cannot receive an order until this is fixed.</p>'
                },
                {
                    title: 'Can&apos;t Edit an Order Freely',
                    content: '<p><strong>Problem:</strong> a purchase order that has already been sent won&apos;t let you just change a line and save, the way a draft does.</p><p><strong>Why:</strong> only a <strong>draft</strong> order is freely editable. Once an order has been sent, changing it means amending it — see <a href="#amending">Amending a Sent Order</a> — which creates a new revision and re-sends the supplier, rather than silently rewriting what they were already sent.</p>'
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
                        '<strong>Related guides:</strong> <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs</a> | <a href="/docs/quotations" class="text-blue-600 hover:text-blue-800">Quotations</a> | <a href="/docs/document-numbering" class="text-blue-600 hover:text-blue-800">Document Numbering</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs',
            description: 'The Customer PO field on a job — not the same as a Purchase Order',
            href: '/docs/jobs'
        },
        {
            title: 'Quotations',
            description: 'The materials take-off a purchase order can be raised from',
            href: '/docs/quotations'
        },
        {
            title: 'Document Numbering',
            description: 'How PO-0001-style numbering and prefixes work across Opscel',
            href: '/docs/document-numbering'
        }
    ]
};
