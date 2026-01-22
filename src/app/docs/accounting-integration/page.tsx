import React from 'react';
import Container from '@/components/Container';

export const metadata = {
    title: 'Accounting Integration Guide - OpsCel Documentation',
    description: 'Learn how to connect OpsCel to Xero or QuickBooks for automated invoice posting and payment tracking.',
};

export default function AccountingIntegrationDocsPage() {
    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            How to Connect Your Accounting Software
                        </h1>
                        <p className="text-xl text-gray-600">
                            Complete guide to connecting OpsCel to Xero or QuickBooks Online
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <nav className="bg-gray-50 rounded-lg p-6 mb-12">
                        <h2 className="font-bold text-xl mb-4">Contents</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="#before-start" className="hover:text-blue-600">Before You Start</a></li>
                                    <li><a href="#connect-xero" className="hover:text-blue-600">Connecting to Xero</a></li>
                                    <li><a href="#connect-quickbooks" className="hover:text-blue-600">Connecting to QuickBooks</a></li>
                                    <li><a href="#account-mappings" className="hover:text-blue-600">Setting Up Account Mappings</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="#first-invoice" className="hover:text-blue-600">Posting Your First Invoice</a></li>
                                    <li><a href="#payment-sync" className="hover:text-blue-600">How Payment Sync Works</a></li>
                                    <li><a href="#managing" className="hover:text-blue-600">Managing Your Connection</a></li>
                                    <li><a href="#troubleshooting" className="hover:text-blue-600">Troubleshooting</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Before You Start */}
                    <section id="before-start" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Before You Start</h2>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                            <h3 className="font-bold text-lg mb-3">Requirements</h3>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li>OpsCel account on <strong>Team plan</strong> or above</li>
                                <li>Admin access to your Xero or QuickBooks account</li>
                                <li>At least one invoice ready to post (for testing)</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-xl mb-4">Choose One Integration</h3>
                            <p className="text-gray-700">
                                You can connect either Xero <strong>or</strong> QuickBooks—not both at the same time. Choose the accounting software you currently use.
                            </p>
                        </div>

                        <h3 className="font-bold text-xl mb-4">What Gets Synced</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">From OpsCel → Accounting</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">From Accounting → OpsCel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Invoices</li>
                                                <li>Customers (auto-created)</li>
                                                <li>Line items with tax</li>
                                            </ul>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Payment status</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Connecting to Xero */}
                    <section id="connect-xero" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Connecting to Xero</h2>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 1: Open Accounting Settings</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click <strong>Settings</strong> in the sidebar</li>
                                    <li>Click <strong>Accounting Integration</strong></li>
                                    <li>You&apos;ll see the option to connect Xero or QuickBooks</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 2: Start the Connection</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click <strong>Connect to Xero</strong></li>
                                    <li>You&apos;ll be redirected to Xero&apos;s login page</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 3: Authorise OpsCel</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Log in to your Xero account (if not already logged in)</li>
                                    <li>Select the Xero organisation you want to connect</li>
                                    <li>Review the permissions OpsCel is requesting:
                                        <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                                            <li><strong>Accounting transactions</strong>: To create invoices</li>
                                            <li><strong>Contacts</strong>: To create/link customers</li>
                                            <li><strong>Settings</strong>: To read your chart of accounts</li>
                                        </ul>
                                    </li>
                                    <li>Click <strong>Allow access</strong></li>
                                </ol>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 4: Confirm Connection</h3>
                                <p className="text-gray-700 mb-3">You&apos;ll be redirected back to OpsCel. You should see:</p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>✓ Connected to Xero</li>
                                    <li>Your Xero organisation name displayed</li>
                                    <li>Option to disconnect</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                                <h3 className="font-bold mb-2">Step 5: Set Up Account Mappings</h3>
                                <p className="text-gray-700">
                                    Before posting invoices, map your product categories to Xero accounts. See <a href="#account-mappings" className="text-blue-600 hover:underline">Setting Up Account Mappings</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Connecting to QuickBooks */}
                    <section id="connect-quickbooks" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Connecting to QuickBooks</h2>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 1: Open Accounting Settings</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click <strong>Settings</strong> in the sidebar</li>
                                    <li>Click <strong>Accounting Integration</strong></li>
                                    <li>You&apos;ll see the option to connect Xero or QuickBooks</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 2: Start the Connection</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click <strong>Connect to QuickBooks</strong></li>
                                    <li>You&apos;ll be redirected to Intuit&apos;s login page</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 3: Authorise OpsCel</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Log in to your QuickBooks account (if not already logged in)</li>
                                    <li>Select the QuickBooks company you want to connect</li>
                                    <li>Review the permissions OpsCel is requesting:
                                        <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                                            <li><strong>Accounting</strong>: To create invoices and access contacts</li>
                                        </ul>
                                    </li>
                                    <li>Click <strong>Connect</strong></li>
                                </ol>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 4: Confirm Connection</h3>
                                <p className="text-gray-700 mb-3">You&apos;ll be redirected back to OpsCel. You should see:</p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>✓ Connected to QuickBooks</li>
                                    <li>Your company name displayed</li>
                                    <li>Option to disconnect</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                                <h3 className="font-bold mb-2">Step 5: Set Up Account Mappings</h3>
                                <p className="text-gray-700">
                                    Before posting invoices, map your product categories to QuickBooks accounts. See <a href="#account-mappings" className="text-blue-600 hover:underline">Setting Up Account Mappings</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Setting Up Account Mappings */}
                    <section id="account-mappings" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Setting Up Account Mappings</h2>
                        <p className="text-gray-700 mb-6">
                            Account mappings tell OpsCel which revenue account to use for each product category. This ensures income is recorded correctly in your accounting software.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Without Mappings</h3>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                    <li>All invoice line items go to a default income account</li>
                                    <li>Your accounts won&apos;t show breakdown by service type</li>
                                    <li>Year-end reporting is harder</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-green-900">✓ With Mappings</h3>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                    <li>Labour income goes to &quot;Labour Income&quot; account</li>
                                    <li>Materials income goes to &quot;Materials Sales&quot; account</li>
                                    <li>Your accountant gets clean, categorised data</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 1: Open Account Mappings</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Go to <strong>Settings → Accounting Integration</strong></li>
                                    <li>Scroll down to <strong>Account Mappings</strong></li>
                                    <li>You&apos;ll see your product categories listed</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 2: Map Each Category</h3>
                                <p className="text-gray-700 mb-3">For each category (Labour, Materials, Equipment, Other):</p>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click the dropdown next to the category</li>
                                    <li>Select the appropriate revenue account from your accounting software</li>
                                    <li>Repeat for all categories</li>
                                </ol>

                                <div className="mt-6 overflow-x-auto">
                                    <p className="font-semibold mb-3">Example Mappings:</p>
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2 text-left">OpsCel Category</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Xero/QuickBooks Account</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Labour</td>
                                                <td className="border border-gray-300 px-4 py-2">Sales - Labour</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Materials</td>
                                                <td className="border border-gray-300 px-4 py-2">Sales - Materials</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Equipment</td>
                                                <td className="border border-gray-300 px-4 py-2">Sales - Equipment Hire</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Other</td>
                                                <td className="border border-gray-300 px-4 py-2">Sales - Other</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 3: Save Your Mappings</h3>
                                <p className="text-gray-700">Click <strong>Save Mappings</strong> when done.</p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                                <h3 className="font-bold mb-3">Creating Accounts in Your Accounting Software</h3>
                                <p className="text-gray-700 mb-3">If you don&apos;t have the right accounts set up:</p>

                                <div className="mb-4">
                                    <p className="font-semibold mb-2">In Xero:</p>
                                    <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                        <li>Go to Accounting → Chart of Accounts</li>
                                        <li>Click Add Account</li>
                                        <li>Choose &quot;Revenue&quot; as the account type</li>
                                        <li>Name it (e.g., &quot;Sales - Labour&quot;)</li>
                                        <li>Save and return to OpsCel</li>
                                    </ol>
                                </div>

                                <div>
                                    <p className="font-semibold mb-2">In QuickBooks:</p>
                                    <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                        <li>Go to Settings → Chart of Accounts</li>
                                        <li>Click New</li>
                                        <li>Choose &quot;Income&quot; as the account type</li>
                                        <li>Name it (e.g., &quot;Labour Income&quot;)</li>
                                        <li>Save and return to OpsCel</li>
                                    </ol>
                                </div>

                                <p className="text-gray-700 mt-3 text-sm">
                                    Then refresh the account list in OpsCel and complete your mapping.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Posting Your First Invoice */}
                    <section id="first-invoice" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Posting Your First Invoice</h2>
                        <p className="text-gray-700 mb-6">
                            Once connected and mapped, you&apos;re ready to post invoices.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 1: Create an Invoice</h3>
                                <p className="text-gray-700">
                                    Create an invoice as normal (from a job or manually). Make sure it&apos;s in <strong>Posted</strong> status.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 2: Open the Invoice</h3>
                                <p className="text-gray-700">Go to the invoice detail page.</p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 3: Post to Accounting</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Click <strong>Post to Xero</strong> or <strong>Post to QuickBooks</strong></li>
                                    <li>A confirmation dialog appears</li>
                                    <li>Click <strong>Post Invoice</strong></li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Step 4: Verify in Your Accounting Software</h3>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Open Xero or QuickBooks</li>
                                    <li>Go to Invoices</li>
                                    <li>Find the invoice by number</li>
                                    <li>Verify details are correct</li>
                                </ol>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">What If the Customer Doesn&apos;t Exist?</h3>
                                <p className="text-gray-700 mb-3">
                                    OpsCel automatically creates the customer in your accounting software using:
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>Customer name</li>
                                    <li>Email address</li>
                                    <li>Business address (if available)</li>
                                </ul>
                                <p className="text-gray-700 mt-3">
                                    The customer is linked, so future invoices post to the same record.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How Payment Sync Works */}
                    <section id="payment-sync" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How Payment Sync Works</h2>
                        <p className="text-gray-700 mb-6">
                            When customers pay invoices, the status syncs back to OpsCel.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">For Xero</h3>
                                <p className="text-gray-700 mb-3">
                                    Xero sends webhook notifications when invoice status changes. OpsCel receives these and updates:
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>Invoice status (Paid, Partially Paid)</li>
                                    <li>Payment date</li>
                                    <li>Amount paid</li>
                                </ul>
                                <p className="text-sm text-gray-600 mt-4 bg-gray-50 rounded p-3">
                                    <strong>Timing:</strong> Usually within 1-2 minutes of payment being recorded in Xero.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">For QuickBooks</h3>
                                <p className="text-gray-700 mb-3">
                                    QuickBooks webhooks notify OpsCel of changes. Additionally, OpsCel checks for updates hourly as a backup.
                                </p>
                                <p className="text-sm text-gray-600 mt-4 bg-gray-50 rounded p-3">
                                    <strong>Timing:</strong> Usually within 5 minutes, guaranteed within 1 hour.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                            <h3 className="font-bold mb-3">What You&apos;ll See</h3>
                            <p className="text-gray-700 mb-2">On the invoice in OpsCel:</p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li>Status changes from &quot;Posted&quot; to &quot;Paid&quot;</li>
                                <li>Payment date is recorded</li>
                                <li>Accounting sync status shows &quot;Synced&quot;</li>
                            </ul>
                        </div>
                    </section>

                    {/* Managing Your Connection */}
                    <section id="managing" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Managing Your Connection</h2>

                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Viewing Connection Status</h3>
                                <p className="text-gray-700 mb-3">
                                    Go to <strong>Settings → Accounting Integration</strong> to see:
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                    <li>Which service is connected</li>
                                    <li>Organisation/company name</li>
                                    <li>Last sync time</li>
                                    <li>Any errors or warnings</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Disconnecting</h3>
                                <p className="text-gray-700 mb-3">If you need to disconnect:</p>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Go to <strong>Settings → Accounting Integration</strong></li>
                                    <li>Click <strong>Disconnect</strong></li>
                                    <li>Confirm the action</li>
                                </ol>

                                <div className="mt-4 bg-yellow-50 rounded p-4">
                                    <p className="font-semibold mb-2">What happens:</p>
                                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                                        <li>No more invoices can be posted</li>
                                        <li>Existing posted invoices remain in your accounting software</li>
                                        <li>Payment sync stops</li>
                                        <li>You can reconnect anytime</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-xl mb-4">Reconnecting</h3>
                                <p className="text-gray-700 mb-3">
                                    If your connection expires or you need to reconnect:
                                </p>
                                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                    <li>Go to <strong>Settings → Accounting Integration</strong></li>
                                    <li>Click <strong>Reconnect to Xero/QuickBooks</strong></li>
                                    <li>Follow the authorisation steps</li>
                                </ol>

                                <div className="mt-4 bg-blue-50 rounded p-4">
                                    <p className="font-semibold mb-2">Connections may expire if:</p>
                                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                                        <li>You changed your Xero/QuickBooks password</li>
                                        <li>You revoked access in your accounting software</li>
                                        <li>The refresh token expired (rare, usually 60+ days)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section id="troubleshooting" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>

                        <div className="space-y-4">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">&quot;Connection expired&quot; Error</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> Your accounting software session timed out or was revoked.</p>
                                <p className="text-gray-700 mb-2"><strong>Fix:</strong></p>
                                <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                    <li>Go to Settings → Accounting Integration</li>
                                    <li>Click Disconnect</li>
                                    <li>Click Connect again</li>
                                    <li>Re-authorise access</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">&quot;Customer sync failed&quot; Error</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> The customer couldn&apos;t be created in your accounting software.</p>
                                <p className="text-gray-700 mb-2"><strong>Common reasons:</strong></p>
                                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4 mb-2">
                                    <li>Customer email is invalid or missing</li>
                                    <li>Customer name is blank</li>
                                    <li>Duplicate customer exists</li>
                                </ul>
                                <p className="text-gray-700"><strong>Fix:</strong></p>
                                <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                    <li>Check the customer has a valid email in OpsCel</li>
                                    <li>Ensure name is filled in</li>
                                    <li>Try posting again</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">&quot;Account mapping missing&quot; Error</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> A line item category doesn&apos;t have an account mapped.</p>
                                <p className="text-gray-700"><strong>Fix:</strong></p>
                                <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                    <li>Go to Settings → Accounting Integration → Account Mappings</li>
                                    <li>Map the missing category to an account</li>
                                    <li>Try posting again</li>
                                </ol>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">&quot;Invoice already exists&quot; Error</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> An invoice with the same number exists in your accounting software.</p>
                                <p className="text-gray-700"><strong>Fix:</strong></p>
                                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                                    <li>This is a safety feature to prevent duplicates</li>
                                    <li>Check if the invoice was already posted</li>
                                    <li>If it was deleted in accounting software, it may need to be recreated there manually</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">&quot;Rate limit exceeded&quot; Error</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> Too many requests sent to the accounting API.</p>
                                <p className="text-gray-700"><strong>Fix:</strong></p>
                                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                                    <li>Wait 5-10 minutes</li>
                                    <li>Try again</li>
                                    <li>If persistent, contact support</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">Invoice Posted But Wrong Account</h3>
                                <p className="text-gray-700 mb-2"><strong>Cause:</strong> Account mappings were incorrect when posted.</p>
                                <p className="text-gray-700"><strong>Fix:</strong></p>
                                <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside ml-4">
                                    <li>In your accounting software, edit the invoice</li>
                                    <li>Change the account for affected line items</li>
                                    <li>Update your mappings in OpsCel to prevent future issues</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">1. Set up mappings before posting</h3>
                                <p className="text-gray-700 text-sm">Map all your categories to accounts before posting your first invoice. This ensures clean data from the start.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">2. Test with one invoice first</h3>
                                <p className="text-gray-700 text-sm">Post a single invoice and verify it appears correctly in your accounting software before posting in bulk.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">3. Keep customer data consistent</h3>
                                <p className="text-gray-700 text-sm">Use consistent customer names and emails. This helps the automatic customer matching work correctly.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">4. Review sync status regularly</h3>
                                <p className="text-gray-700 text-sm">Check the Accounting Integration page weekly to catch any sync errors early.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold mb-2">5. Don&apos;t edit posted invoices in accounting software</h3>
                                <p className="text-gray-700 text-sm">Make changes in OpsCel and void/recreate if needed. This keeps records consistent.</p>
                            </div>
                        </div>
                    </section>

                    {/* Need Help */}
                    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                        <p className="text-gray-700 mb-6">
                            If you&apos;re having trouble connecting or posting invoices, our support team can walk you through the setup.
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
