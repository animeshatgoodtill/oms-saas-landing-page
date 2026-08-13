import React from 'react';
import Container from '@/components/Container';

export const metadata = {
    title: 'Invoicing Guide - Opscel Documentation',
    description: 'Complete guide to creating, managing, and sending invoices in Opscel. Learn how to use job-to-invoice workflow, deposits, and accounting integration.',
};

export default function InvoicingDocsPage() {
    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            How to Use Invoicing in Opscel
                        </h1>
                        <p className="text-xl text-gray-600">
                            Complete guide to creating, managing, and sending invoices in Opscel
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <nav className="bg-gray-50 rounded-lg p-6 mb-12">
                        <h2 className="font-bold text-xl mb-4">Contents</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#creating-from-job" className="hover:text-blue-600">Creating an Invoice from a Job</a></li>
                            <li><a href="#invoice-types" className="hover:text-blue-600">Understanding Invoice Types</a></li>
                            <li><a href="#editing" className="hover:text-blue-600">Editing an Invoice</a></li>
                            <li><a href="#sending" className="hover:text-blue-600">Sending an Invoice</a></li>
                            <li><a href="#tracking" className="hover:text-blue-600">Tracking Payment Status</a></li>
                            <li><a href="#deposits" className="hover:text-blue-600">Working with Deposits</a></li>
                            <li><a href="#settings" className="hover:text-blue-600">Configuring Invoice Settings</a></li>
                            <li><a href="#accounting" className="hover:text-blue-600">Posting to Accounting Software</a></li>
                        </ul>
                    </nav>

                    {/* Creating an Invoice from a Job */}
                    <section id="creating-from-job" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Creating an Invoice from a Job</h2>
                        <p className="text-gray-700 mb-6">
                            The easiest way to create an invoice is directly from a completed job. Opscel pre-fills all the details for you.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Steps</h3>
                            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                                <li>Go to <strong>Jobs</strong> in the main menu</li>
                                <li>Find the completed job you want to invoice</li>
                                <li>Click on the job to open it</li>
                                <li>Scroll to the <strong>Invoices</strong> section</li>
                                <li>Click <strong>Create Invoice</strong></li>
                            </ol>
                        </div>

                        <h3 className="font-bold text-xl mb-4">What Gets Pre-Filled</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Customer details</td>
                                        <td className="border border-gray-300 px-4 py-2">From the job</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Service address</td>
                                        <td className="border border-gray-300 px-4 py-2">From the job</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Parts used</td>
                                        <td className="border border-gray-300 px-4 py-2">Logged by engineer in field app</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Labour</td>
                                        <td className="border border-gray-300 px-4 py-2">Calculated from actual duration × your labour rate</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Callout fee</td>
                                        <td className="border border-gray-300 px-4 py-2">If configured in your settings</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Customer reference / PO number</td>
                                        <td className="border border-gray-300 px-4 py-2">From the job&apos;s <strong>PO Number</strong> field, automatic — see <a href="/docs/jobs" className="text-blue-600 hover:underline">Jobs</a> for where it&apos;s set</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tax rates</td>
                                        <td className="border border-gray-300 px-4 py-2">From product/category settings</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                            <h4 className="font-bold mb-2">Review Before Saving</h4>
                            <p className="text-gray-700 mb-3">
                                The invoice opens in draft mode. Review the line items:
                            </p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li><strong>Parts</strong>: Check quantities and prices match what was used</li>
                                <li><strong>Labour</strong>: Verify hours are correct</li>
                                <li><strong>Callout fee</strong>: Remove if not applicable for this job</li>
                                <li><strong>Customer reference / PO number</strong>: Already filled in from the job — no need to type it</li>
                                <li><strong>Notes</strong>: A separate free-text field for anything else — payment instructions, internal comments, etc.</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Click <strong>Save as Draft</strong> when ready.
                            </p>
                        </div>
                    </section>

                    {/* Understanding Invoice Types */}
                    <section id="invoice-types" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Understanding Invoice Types</h2>
                        <p className="text-gray-700 mb-6">
                            Opscel uses three invoice types to handle different scenarios:
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-3">Full Invoice</h3>
                                <p className="text-gray-700">
                                    A regular invoice for work completed. No deposit involved.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-3">Deposit Invoice</h3>
                                <p className="text-gray-700">
                                    Created automatically when a customer accepts a quote that requires a deposit. This is a partial payment before work begins.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-3">Final Invoice</h3>
                                <p className="text-gray-700 mb-4">
                                    The closing invoice for a job that had a deposit. Shows the full amount with the deposit deducted.
                                </p>
                                <div className="bg-gray-50 rounded p-4 text-sm">
                                    <p className="font-bold mb-2">Example:</p>
                                    <ul className="space-y-1 text-gray-700">
                                        <li>Quote total: £1,000</li>
                                        <li>Deposit (20%): £200 → Deposit Invoice</li>
                                        <li>Remaining: £800 → Final Invoice</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Editing an Invoice */}
                    <section id="editing" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Editing an Invoice</h2>
                        <p className="text-gray-700 mb-6">
                            You can edit invoices while they&apos;re in <strong>Draft</strong> status.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-green-900">✓ What You Can Edit</h3>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                    <li>Line items (add, remove, change)</li>
                                    <li>Quantities and prices</li>
                                    <li>Tax rates per line item</li>
                                    <li>Invoice notes</li>
                                    <li>Due date</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-red-900">✗ What You Cannot Edit</h3>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                    <li>Customer (create a new invoice instead)</li>
                                    <li>Invoice number (assigned automatically)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Steps</h3>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                <li>Go to the invoice detail page</li>
                                <li>Click <strong>Edit</strong></li>
                                <li>Make your changes</li>
                                <li>Click <strong>Save</strong></li>
                            </ol>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                            <h4 className="font-bold mb-2">After Sending</h4>
                            <p className="text-gray-700 mb-2">
                                Once an invoice is sent, you cannot edit it. If you need to make changes:
                            </p>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside ml-4">
                                <li><strong>Void</strong> the sent invoice</li>
                                <li>Create a new invoice with the correct details</li>
                            </ol>
                        </div>
                    </section>

                    {/* Sending an Invoice */}
                    <section id="sending" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Sending an Invoice</h2>
                        <p className="text-gray-700 mb-6">
                            When your invoice is ready, send it to your customer.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Steps</h3>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                <li>Open the invoice</li>
                                <li>Review all details are correct</li>
                                <li>Click <strong>Send Invoice</strong></li>
                                <li>Confirm the customer email address</li>
                                <li>Click <strong>Send</strong></li>
                            </ol>
                        </div>

                        <h3 className="font-bold text-xl mb-4">What the Customer Receives</h3>
                        <ul className="space-y-2 text-gray-700 mb-6 list-disc list-inside ml-4">
                            <li>Professional PDF invoice attached</li>
                            <li>Your company branding and details</li>
                            <li>Payment instructions</li>
                            <li>Due date clearly shown</li>
                        </ul>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                            <h4 className="font-bold mb-2">Invoice Status Changes</h4>
                            <p className="text-gray-700">After sending:</p>
                            <ul className="space-y-2 text-gray-700 mt-2 list-disc list-inside ml-4">
                                <li>Status changes from <strong>Draft</strong> to <strong>Posted</strong></li>
                                <li>Posted date is recorded</li>
                                <li>Invoice can no longer be edited</li>
                            </ul>
                        </div>
                    </section>

                    {/* Tracking Payment Status */}
                    <section id="tracking" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Tracking Payment Status</h2>
                        <p className="text-gray-700 mb-6">
                            Keep track of what&apos;s been paid and what&apos;s outstanding.
                        </p>

                        <h3 className="font-bold text-xl mb-4">Invoice Statuses</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Draft</td>
                                        <td className="border border-gray-300 px-4 py-2">Not yet posted, can still be edited</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Posted</td>
                                        <td className="border border-gray-300 px-4 py-2">Sent to customer, awaiting payment</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Partial</td>
                                        <td className="border border-gray-300 px-4 py-2">Partially paid, balance remaining</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Paid</td>
                                        <td className="border border-gray-300 px-4 py-2">Payment received in full</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Voided</td>
                                        <td className="border border-gray-300 px-4 py-2">Cancelled, no longer valid</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Viewing Outstanding Invoices</h3>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                <li>Go to <strong>Invoices</strong> in the main menu</li>
                                <li>Use the status filter to show <strong>Posted</strong> or <strong>Partial</strong></li>
                                <li>Sort by due date to prioritise follow-ups</li>
                            </ol>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-4">Marking as Paid</h3>
                            <p className="text-gray-700 mb-3">
                                If you receive payment outside of your accounting software:
                            </p>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside mb-4">
                                <li>Open the invoice</li>
                                <li>Click <strong>Mark as Paid</strong></li>
                                <li>Enter payment date</li>
                                <li>Click <strong>Confirm</strong></li>
                            </ol>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded p-3">
                                <strong>Note:</strong> If you use Xero or QuickBooks integration, payments sync automatically. No need to mark manually.
                            </p>
                        </div>
                    </section>

                    {/* Working with Deposits */}
                    <section id="deposits" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Working with Deposits</h2>
                        <p className="text-gray-700 mb-6">
                            Deposits help secure bookings and improve cash flow.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">How Deposits Work</h3>
                            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                                <li><strong>Quote stage</strong>: Set deposit required (fixed amount or percentage)</li>
                                <li><strong>Quote accepted</strong>: Deposit invoice created automatically</li>
                                <li><strong>Customer pays</strong>: Deposit marked as paid</li>
                                <li><strong>Job completed</strong>: Final invoice created with deposit deducted</li>
                            </ol>
                        </div>

                        <h3 className="font-bold text-xl mb-4">Viewing Deposit Status</h3>
                        <p className="text-gray-700 mb-4">
                            On any job that came from a quote with a deposit:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-6 list-disc list-inside ml-4">
                            <li>The job detail page shows deposit status</li>
                            <li>Link to the deposit invoice</li>
                            <li>Whether it&apos;s been paid</li>
                        </ul>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-4">Final Invoice with Deposit</h3>
                            <p className="text-gray-700 mb-4">
                                When creating an invoice for a job with a paid deposit:
                            </p>
                            <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                <li>Opscel shows the full job value</li>
                                <li>Adds a negative line item for the deposit paid</li>
                                <li>Invoice total shows remaining balance</li>
                            </ol>
                            <div className="bg-white rounded p-4 text-sm font-mono">
                                <p>Labour (8 hours @ £45)           £360.00</p>
                                <p>Parts                            £150.00</p>
                                <p>Callout fee                       £50.00</p>
                                <p className="my-2">                          ──────────────</p>
                                <p>Subtotal                         £560.00</p>
                                <p>VAT (20%)                        £112.00</p>
                                <p className="my-2">                          ──────────────</p>
                                <p>Total                            £672.00</p>
                                <p>Less deposit paid               -£134.40</p>
                                <p className="my-2">                          ══════════════</p>
                                <p className="font-bold">Amount Due                       £537.60</p>
                            </div>
                        </div>
                    </section>

                    {/* Configuring Invoice Settings */}
                    <section id="settings" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Configuring Invoice Settings</h2>
                        <p className="text-gray-700 mb-6">
                            Set up your defaults in Settings to save time on every invoice.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Invoice Numbering</h3>
                                <p className="text-gray-700 mb-3">Go to <strong>Settings → Document Numbering</strong></p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li><strong>Prefix</strong>: Default is &quot;INV&quot; (e.g., INV-000001)</li>
                                    <li><strong>Starting number</strong>: Set where the sequence begins</li>
                                    <li><strong>Format</strong>: Sequential or customer-based</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Default Rates</h3>
                                <p className="text-gray-700 mb-3">Go to <strong>Settings → Invoice Configuration</strong></p>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2 text-left">Setting</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Default labour rate</td>
                                                <td className="border border-gray-300 px-4 py-2">£/hour for labour line items</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Default callout fee</td>
                                                <td className="border border-gray-300 px-4 py-2">Fixed fee added to invoices</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Default tax rate</td>
                                                <td className="border border-gray-300 px-4 py-2">UK VAT rate (usually 20%)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Payment terms</td>
                                                <td className="border border-gray-300 px-4 py-2">Days until due (e.g., 30 days)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Tax Rates by Category</h3>
                                <p className="text-gray-700 mb-3">Go to <strong>Settings → Product Options</strong></p>
                                <p className="text-gray-700 mb-3">Set different tax rates for different product categories:</p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>Labour: 20% (standard rate)</li>
                                    <li>Materials: 20% (standard rate)</li>
                                    <li>Equipment: 20% (standard rate)</li>
                                    <li>Other: Configure as needed</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Your Company Details</h3>
                                <p className="text-gray-700 mb-3">Go to <strong>Settings → Branding</strong></p>
                                <p className="text-gray-700 mb-2">These appear on your invoices:</p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>Company name and logo</li>
                                    <li>Address and contact details</li>
                                    <li>VAT registration number</li>
                                    <li>Bank details for payment</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Posting to Accounting Software */}
                    <section id="accounting" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Posting to Accounting Software</h2>
                        <p className="text-gray-700 mb-6">
                            If you&apos;ve connected Xero or QuickBooks, post invoices directly.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Steps</h3>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                <li>Open the invoice (must be <strong>Posted</strong> status)</li>
                                <li>Click <strong>Post to Xero</strong> or <strong>Post to QuickBooks</strong></li>
                                <li>Confirm the action</li>
                                <li>Invoice appears in your accounting software</li>
                            </ol>
                        </div>

                        <h3 className="font-bold text-xl mb-4">What Gets Synced</h3>
                        <ul className="space-y-2 text-gray-700 mb-6 list-disc list-inside ml-4">
                            <li>Invoice number and date</li>
                            <li>Customer (created if new)</li>
                            <li>All line items with correct accounts</li>
                            <li>Tax amounts</li>
                            <li>Due date</li>
                            <li>Customer reference / PO number, when the job has one — reaches Xero&apos;s Reference field or QuickBooks&apos; Customer Memo. See <a href="/docs/accounting-integration#po-numbers" className="text-blue-600 hover:underline">How Purchase Order Numbers Reach Xero/QuickBooks</a> for the exact format</li>
                        </ul>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                            <h3 className="font-bold mb-2">Viewing Sync Status</h3>
                            <p className="text-gray-700">Each invoice shows:</p>
                            <ul className="space-y-2 text-gray-700 mt-2 list-disc list-inside ml-4">
                                <li>Whether it&apos;s been posted</li>
                                <li>Link to view in accounting software</li>
                                <li>Any sync errors</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-4">Troubleshooting</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <p className="font-semibold mb-1">&quot;Customer not found&quot;</p>
                                    <p className="text-sm">The customer will be created automatically. If it fails, check the customer has a valid email address.</p>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">&quot;Account mapping missing&quot;</p>
                                    <p className="text-sm">Go to Settings → Accounting Mappings and map your product categories to revenue accounts.</p>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">&quot;Connection expired&quot;</p>
                                    <p className="text-sm">Re-authorise the connection in Settings → Accounting Integration.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tips */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Tips for Faster Invoicing</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">1. Configure defaults once</h3>
                                <p className="text-gray-700 text-sm">Set your labour rate, callout fee, and tax rates in Settings. Every invoice will use these automatically.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">2. Use the product catalogue</h3>
                                <p className="text-gray-700 text-sm">Add your common parts to Products. When engineers select them in the field app, prices and tax rates come through correctly.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">3. Invoice daily, not weekly</h3>
                                <p className="text-gray-700 text-sm">Create invoices as soon as jobs are complete. Details are fresh, nothing gets missed.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">4. Use the job-to-invoice flow</h3>
                                <p className="text-gray-700 text-sm">Always create from the job when possible. Manual invoices mean manual data entry.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">5. Connect your accounting software</h3>
                                <p className="text-gray-700 text-sm">Post invoices in one click instead of re-entering everything.</p>
                            </div>
                        </div>
                    </section>

                    {/* Need Help */}
                    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                        <p className="text-gray-700 mb-6">
                            Our support team can help with setting up invoice templates, configuring accounting integration, and training your team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:support@opscel.com"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Email Support
                            </a>
                            <a
                                href="https://app.opscel.com/handler/sign-up"
                                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}
