import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export const metadata = {
    title: 'Bundled Remedial Quotes - OpsCel Documentation',
    description: 'Learn how to create one quote for all defects on a job using OpsCel\'s bundled remedial quotes feature.',
};

export default function DefectsToQuotationDocsPage() {
    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Bundled Remedial Quotes
                        </h1>
                        <p className="text-xl text-gray-600">
                            Create one quote for all defects on a job, in seconds
                        </p>
                    </div>

                    {/* Two Paths Notice */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                        <h3 className="font-bold text-lg mb-2">💡 Two Ways to Create Remedial Quotes</h3>
                        <p className="text-gray-700 mb-3">
                            This guide shows the <strong>Dashboard Widget Path</strong>—the fastest way to create quotes directly from defects. There&apos;s also a <strong>Worksheet Path</strong> where engineers fill out a detailed Remedial Scope of Works on-site before the quote is generated.
                        </p>
                        <div className="bg-white/50 rounded p-4 text-sm">
                            <p className="mb-2"><strong>Use this path (Dashboard Widget) when:</strong></p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                                <li>You need a quick quote based on defect descriptions</li>
                                <li>Engineer doesn&apos;t need to confirm scope on-site</li>
                                <li>Remedial work is straightforward</li>
                            </ul>
                            <p className="mb-2"><strong>Use the Worksheet Path when:</strong></p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                                <li>You want engineer to document detailed scope on-site</li>
                                <li>Customer wants to review and sign off on scope before quote</li>
                                <li>Complex remedial work requiring estimates and hours</li>
                            </ul>
                            <Link href="/docs/remedial-scope-of-works" className="text-blue-600 hover:underline font-medium">
                                → Learn about the Worksheet Path (Remedial Scope of Works Guide)
                            </Link>
                        </div>
                    </div>

                    {/* Feature Announcement */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-purple-500 p-6 mb-12 rounded-r-lg">
                        <h3 className="font-bold text-lg mb-2">Stop Creating Quotes One Defect at a Time</h3>
                        <p className="text-gray-700">
                            When your engineers find multiple issues during a fire alarm service or electrical inspection, you shouldn&apos;t have to create separate quotes for each defect. OpsCel now bundles all defects per job into one professional quote.
                        </p>
                    </div>

                    {/* Before vs After */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">The Problem We Solved</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-red-900">❌ Before: The Old Way</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Engineer logs 5 defects on a job, each flagged for quoting</li>
                                    <li>• Office staff sees 5 separate items in their dashboard</li>
                                    <li>• Creates 5 individual quotes</li>
                                    <li>• Customer receives 5 emails</li>
                                    <li>• Everyone&apos;s confused</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-3 text-green-900">✅ Now: The Smart Way</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Engineer logs 5 defects on a job</li>
                                    <li>• Office staff sees one job card showing &quot;5 defects pending quote&quot;</li>
                                    <li>• Click &quot;Create Quote&quot; once</li>
                                    <li>• One professional quote generated with all defects listed</li>
                                    <li>• Customer gets one clear proposal for all remedial work</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">How to Create Bundled Quotes</h2>

                        {/* Step 1 */}
                        <div className="mb-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Engineer Logs Defects (Field App)</h3>
                                </div>
                            </div>
                            <div className="ml-14">
                                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                    <li>During a job, the engineer opens the Defects section</li>
                                    <li>For each issue found, they:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Enter the defect description</li>
                                            <li>Select severity (Critical, Major, Minor, Observation)</li>
                                            <li>Enter location and recommended action</li>
                                            <li>Check &quot;Quote required for remedial work&quot;</li>
                                        </ul>
                                    </li>
                                    <li>Save the defects</li>
                                </ol>
                                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                    <p className="font-semibold mb-2">What Happens Automatically:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                        <li>All defects flagged for quoting will appear in the office dashboard &quot;Defects Pending Quotes&quot; widget</li>
                                        <li>If severity is Major or Critical, a Remedial Scope of Works worksheet is also auto-created (even if &quot;Quote required&quot; isn&apos;t checked)</li>
                                        <li>The job is grouped by defects—you&apos;ll see one job card, not individual defect cards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">View Pending Quotes (Dashboard)</h3>
                                </div>
                            </div>
                            <div className="ml-14">
                                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                    <li>Log into the OpsCel dashboard</li>
                                    <li>On the main dashboard, locate the &quot;Jobs Pending Remedial Quotes&quot; widget</li>
                                    <li>You&apos;ll see a list of jobs (not individual defects) that need quotes</li>
                                    <li>Each job card shows:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Job number and customer name</li>
                                            <li>Total defect count</li>
                                            <li>Severity breakdown (e.g., &quot;2 Critical, 1 Major&quot;)</li>
                                            <li>How long ago the oldest defect was logged</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Preview Defects (Optional)</h3>
                                </div>
                            </div>
                            <div className="ml-14">
                                <p className="mb-4 text-gray-700">Before creating a quote, you can preview all defects on a job:</p>
                                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                    <li>Click the eye icon or &quot;View&quot; button on the job card</li>
                                    <li>The card expands to show all defects with:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Severity badge (C = Critical, M = Major, m = Minor, O = Observation)</li>
                                            <li>Description</li>
                                            <li>Location (if provided)</li>
                                        </ul>
                                    </li>
                                    <li>Review to ensure all defects should be included in the quote</li>
                                </ol>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Create the Bundled Quote</h3>
                                </div>
                            </div>
                            <div className="ml-14">
                                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                    <li>Click the &quot;Quote&quot; button on the job card</li>
                                    <li>A confirmation dialog appears showing:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Job number and customer</li>
                                            <li>Service address</li>
                                            <li>Severity summary</li>
                                            <li>List of defects that will be included</li>
                                        </ul>
                                    </li>
                                    <li>Review the information</li>
                                    <li>Click &quot;Create Bundled Quote&quot;</li>
                                </ol>
                                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                    <p className="font-semibold mb-2">The system will:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                        <li>Create a single draft quote with pre-filled line items (descriptions only, £0 prices)</li>
                                        <li>Set the title to &quot;Remedial Work - [Job Number]&quot;</li>
                                        <li>Link all defects to this quote via quote_id</li>
                                        <li><strong>Auto-clear the job from the &quot;Defects Pending Quotes&quot; widget</strong></li>
                                        <li>Set the quote source as &quot;Defect&quot; for tracking</li>
                                    </ul>
                                </div>
                                <div className="bg-amber-50 border-l-2 border-amber-500 p-3 mt-4">
                                    <p className="text-sm text-amber-900">
                                        <strong>⚠️ Important:</strong> The quote does NOT auto-create when defects are logged. The admin must manually click &quot;Create Bundled Quote&quot; to create it. This is intentional—engineers don&apos;t know pricing, and the office needs to review scope before committing to a number.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="mb-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Edit and Send the Quote</h3>
                                </div>
                            </div>
                            <div className="ml-14">
                                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                    <li>After creation, you&apos;ll see a success message with the quote number</li>
                                    <li>Navigate to Quotations to find your new draft</li>
                                    <li>Open the quote to:
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Add pricing to the pre-filled line items (they start at £0)</li>
                                            <li>Edit descriptions or add additional line items if needed</li>
                                            <li>Adjust the title or overall description if needed</li>
                                            <li>Add internal notes</li>
                                            <li>Set validity period</li>
                                        </ul>
                                    </li>
                                    <li>When ready, click &quot;Send to Customer&quot;</li>
                                </ol>
                                <p className="text-gray-600 italic">The customer will receive a professional quote with all remedial work itemized.</p>
                            </div>
                        </div>
                    </section>

                    {/* Example Quote */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">What the Customer Sees</h2>
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Remedial Work - JOB-000015</h3>
                            <p className="text-gray-600 mb-6">Defects requiring remedial work:</p>

                            <div className="space-y-6">
                                <div className="border-l-4 border-red-500 pl-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">CRITICAL</span>
                                        <span className="text-gray-600">Location: Zone 3</span>
                                    </div>
                                    <p className="text-gray-700 mb-1"><strong>Issue:</strong> Smoke detector missing from coverage area</p>
                                    <p className="text-gray-700"><strong>Recommended:</strong> Install new optical detector</p>
                                </div>

                                <div className="border-l-4 border-orange-500 pl-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">MAJOR</span>
                                        <span className="text-gray-600">Location: Panel Room</span>
                                    </div>
                                    <p className="text-gray-700 mb-1"><strong>Issue:</strong> Battery showing low voltage</p>
                                    <p className="text-gray-700"><strong>Recommended:</strong> Replace standby battery</p>
                                </div>

                                <div className="border-l-4 border-orange-500 pl-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">MAJOR</span>
                                        <span className="text-gray-600">Location: First Floor Corridor</span>
                                    </div>
                                    <p className="text-gray-700 mb-1"><strong>Issue:</strong> Call point damaged</p>
                                    <p className="text-gray-700"><strong>Recommended:</strong> Replace manual call point</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mt-6 text-sm italic">Original Job: JOB-000015 - Fire Alarm Annual Service</p>
                        </div>
                        <p className="text-center text-gray-600 mt-4 italic">Professional. Clear. Easy to approve.</p>
                    </section>

                    {/* Tips & Best Practices */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Tips & Best Practices</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3">For Engineers</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Be specific in defect descriptions — these appear in the quote</li>
                                    <li>Always include location information when possible</li>
                                    <li>Use &quot;Recommended Action&quot; to suggest remedial work — this helps office staff price the quote</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">For Office Staff</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Process jobs with Critical defects first (they appear at the top)</li>
                                    <li>Use the preview to verify all defects before creating the quote</li>
                                    <li>Add detailed line items — the defect list is just a starting point</li>
                                    <li>Consider grouping related work into single line items for cleaner quotes</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">For Admins</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Bundled quotes use source_type: &apos;defect&apos; in the database</li>
                                    <li>The source_job_id links back to the original job</li>
                                    <li>All deficiencies get their quote_id updated atomically</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2">Q: A defect isn&apos;t appearing in the pending quotes widget</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                    <li>Check that &quot;Quote required for remedial work&quot; is checked on the defect</li>
                                    <li>Verify the defect hasn&apos;t already been linked to a quote</li>
                                    <li>Ensure the defect isn&apos;t marked as resolved</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">Q: I accidentally created a quote and want to undo it</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                    <li>Delete the draft quote from the Quotations page</li>
                                    <li>The defects will need to be manually unlinked (contact support if needed)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-2">Q: Can I still create a quote for just one defect?</h3>
                                <p className="text-gray-700">The bundled approach is recommended, but single-defect quotes are still supported via the job detail page</p>
                            </div>
                        </div>
                    </section>

                    {/* Summary Table */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Quick Summary</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Step</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">1</td>
                                        <td className="border border-gray-300 px-4 py-2">Engineer logs defects with &quot;Quote Required&quot; checked</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">2</td>
                                        <td className="border border-gray-300 px-4 py-2">Office staff views &quot;Jobs Pending Remedial Quotes&quot; widget</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">3</td>
                                        <td className="border border-gray-300 px-4 py-2">Click &quot;View&quot; to preview defects on a job</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">4</td>
                                        <td className="border border-gray-300 px-4 py-2">Click &quot;Quote&quot; to create a bundled quote</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">5</td>
                                        <td className="border border-gray-300 px-4 py-2">Add line items, pricing, and send to customer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Streamline Your Remedial Quotes?</h3>
                        <p className="mb-6 text-gray-800">
                            This feature is available now for all OpsCel users. Start your free 90-day trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://app.opscel.com/handler/sign-up"
                                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/features/quotations"
                                className="inline-block border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
                            >
                                Learn About Quotations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
