import { IDocGuide } from '@/types';

export const quoteDefaultsGuide: IDocGuide = {
    slug: 'quote-defaults',
    title: 'Quote Defaults',
    description: 'What Settings → Sales → Quote Defaults controls: default deposit, validity period, price breakdown, call-out rates, and the template used for defect and remedial quotes.',
    lastUpdated: '2026-08-26',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Super Admin, Admin'
                },
                {
                    title: '30-Second Version',
                    content: '<p class="mb-4"><strong>Settings → Sales → Quote Defaults</strong> controls what a brand-new quote starts with when no template is used: the default deposit, validity period, price breakdown style, and whether call-out rates are shown. It also controls which quote template supplies those settings for quotes raised from defects.</p><p>Nothing here locks anything in — every one of these can still be changed on an individual quote before you send it. Quote Defaults just decides where a new quote starts.</p>'
                },
                {
                    title: 'Quote Defaults vs Quote Templates',
                    content: '<p class="mb-4">These are two different pages that both shape a new quote, which is easy to mix up:</p><p class="mb-4"><strong>Quote Templates</strong> (Settings → Sales → Quote Templates) are reusable starting points — line items, terms and conditions, wording, and their own validity/deposit/call-out settings — that you pick explicitly when creating a quote, or that get applied automatically for defect quotes (see below).</p><p><strong>Quote Defaults</strong> (this page) is what a quote falls back to when <em>no</em> template applies. See the <a href="/docs/quotations#quote-templates" class="text-secondary hover:underline">Quote Templates section</a> of the Quotations guide for the template side of this.</p>'
                }
            ]
        },
        {
            id: 'settings',
            title: 'The Settings on This Page',
            subsections: [
                {
                    title: 'Default Deposit',
                    content: '<p class="mb-4">Set as a percentage. This figure is filled in ready on every new quote — it does not, by itself, require a deposit. To actually ask for one, open the individual quote, switch on <strong>Require a deposit</strong>, and check the amount before sending.</p><p>That stays a deliberate, per-quote decision because accepting a deposit-required quote raises an invoice straight away.</p>'
                },
                {
                    title: 'Quote Validity',
                    content: '<p>The default validity period applied to a new quote when it isn\'t using a template that sets its own. You can still change the validity on any individual quote, and extend it after the fact if it expires before the customer responds.</p>'
                },
                {
                    title: 'Call-Out Rates on Quotes',
                    content: '<p class="mb-4">Controls whether the call-out rate tariff table is printed on a quote by default.</p><p><strong>Defect and remedial quotes ignore this and default to hidden</strong>, even if you\'ve switched it on here — a remedial quote isn\'t a call-out, so the tariff table would only confuse the customer. Turn it on for an individual remedial quote, or choose a template that has it switched on, if you do want it shown.</p>'
                },
                {
                    title: 'Default Price Breakdown',
                    content: '<p class="mb-4">Controls how much pricing detail a new quote shows the customer by default. The three options are a common point of confusion because two of the labels sound alike:</p>',
                    bullets: [
                        '<strong>Detailed</strong> — every line item shown with its own price',
                        '<strong>Itemised (no prices)</strong> — the list of work is shown, but prices are hidden; only the total is visible',
                        '<strong>Summary (no breakdown)</strong> — just the description and the total, no line items at all'
                    ]
                },
                {
                    title: 'Defect & Remedial Quotes',
                    content: '<p class="mb-4">A dropdown where you pick the quote template that supplies terms, validity, price breakdown, deposit amount, and call-out visibility for quotes raised from defects (see <a href="/docs/defects-to-quotation#quote-settings" class="text-secondary hover:underline">What Settings the Quote Arrives With</a>). That template\'s line items are copied onto every defect quote too, underneath the defect lines — this is how you get standing items, like replacement batteries, added automatically.</p><p class="mb-4">The template you choose here is badged <span class="text-sm bg-gray-100 px-2 py-0.5 rounded font-mono">Remedial</span> on the Quote Templates list, so editing or deleting it later isn\'t a silent surprise.</p><p><strong>Only Admin can change this setting</strong> (it sits behind the same permission as the rest of this page). Accounts and Contract Manager can still raise defect quotes — they just can\'t change which template shapes them.</p><p class="mt-3">If you don\'t choose a template here, defect quotes fall back to your other Quote Defaults settings on this page.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Does changing a default here affect quotes I\'ve already sent?',
                    content: '<p>No. Changes to Quote Defaults only apply to quotes created after you save. Existing quotes — draft, sent, or accepted — keep whatever settings they were created with.</p>'
                },
                {
                    title: 'If I set a Default Deposit, will customers automatically be asked to pay one?',
                    content: '<p>No. The default only pre-fills the deposit amount on new quotes. Nothing is charged, and no deposit is requested, until someone opens that specific quote and switches on <strong>Require a deposit</strong>.</p>'
                },
                {
                    title: 'Why don\'t defect quotes show call-out rates even though I\'ve turned that on here?',
                    content: '<p>Defect and remedial quotes always default to hiding call-out rates, regardless of this page\'s setting — a remedial quote isn\'t a call-out, so the tariff table isn\'t relevant. Choose a template with call-out rates on under <strong>Defect &amp; Remedial Quotes</strong>, or switch it on for that individual quote, if you want it shown.</p>'
                },
                {
                    title: 'Which price breakdown option should I use?',
                    content: '<p><strong>Detailed</strong> works well when the customer is used to seeing itemised pricing, or when you want to justify the total. <strong>Itemised (no prices)</strong> shows the scope of work without letting the customer pick apart individual line prices. <strong>Summary (no breakdown)</strong> suits fixed-price jobs where you\'d rather not show your working at all. All three can still be overridden per quote.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            content: '<p class="mb-4">Can\'t find what you\'re looking for? Our support team is here to help.</p>',
            subsections: [
                {
                    content: '<div class="flex flex-wrap gap-4"><a href="mailto:support@opscel.com" class="inline-block bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full font-medium transition-all">Contact Support</a><a href="/help" class="inline-block bg-white text-secondary border-2 border-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-medium transition-all">Visit Help Centre</a></div>'
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Quotations',
            description: 'Creating, sending, and tracking quotes',
            href: '/docs/quotations'
        },
        {
            title: 'Defects to Quotation',
            description: 'Turning site defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Settings Tour',
            description: 'Orientation to every settings page in Opscel',
            href: '/docs/settings-tour'
        }
    ]
};
