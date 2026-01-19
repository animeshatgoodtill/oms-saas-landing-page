import React from 'react';
import Container from '@/components/Container';

export const metadata = {
    title: 'Customer Portal Documentation - OpsCel',
    description: 'Complete guide for contractors and customers using the OpsCel Customer Portal for quote approvals, certificate downloads, and invoice tracking.',
};

export default function CustomerPortalDocsPage() {
    return (
        <Container>
            <div className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Customer Portal Documentation
                        </h1>
                        <p className="text-xl text-gray-600">
                            Complete guide for contractors and customers using the OpsCel Customer Portal
                        </p>
                    </div>

                    {/* Business Tier Notice */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
                        <h3 className="font-bold text-lg mb-2">Business Plan Required</h3>
                        <p className="text-gray-700">
                            Customer Portal is available exclusively on the Business plan (£79/month).
                            <a href="/pricing" className="text-blue-600 hover:underline ml-1">
                                Upgrade your plan
                            </a> to enable this feature.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <nav className="bg-gray-50 rounded-lg p-6 mb-12">
                        <h2 className="font-bold text-xl mb-4">Contents</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-gray-900">For Contractors</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="#overview" className="hover:text-blue-600">Overview</a></li>
                                    <li><a href="#invite-customer" className="hover:text-blue-600">How to Invite a Customer</a></li>
                                    <li><a href="#managing-access" className="hover:text-blue-600">Managing Portal Access</a></li>
                                    <li><a href="#activity-logging" className="hover:text-blue-600">Activity Logging</a></li>
                                    <li><a href="#best-practices" className="hover:text-blue-600">Best Practices</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-gray-900">For Customers</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="#getting-access" className="hover:text-blue-600">Getting Access</a></li>
                                    <li><a href="#signing-in" className="hover:text-blue-600">Signing In</a></li>
                                    <li><a href="#using-portal" className="hover:text-blue-600">Using the Portal</a></li>
                                    <li><a href="#security" className="hover:text-blue-600">Security</a></li>
                                    <li><a href="#troubleshooting" className="hover:text-blue-600">Troubleshooting</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Contractor Guide */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 pb-3 border-b-2">For Contractors</h2>

                        {/* Overview */}
                        <div id="overview" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Overview</h3>
                            <p className="mb-4 text-gray-700">
                                The Customer Portal allows your customers to:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>View and approve/decline quotations</li>
                                <li>Download issued certificates (EIC, EICR, Fire Alarm, etc.)</li>
                                <li>Track invoices and payment status</li>
                                <li>Access documents 24/7 without contacting your office</li>
                            </ul>
                            <p className="mb-4 text-gray-700 font-semibold">Benefits for your business:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Faster quote approvals (30 seconds vs. 3 days)</li>
                                <li>Reduced admin time answering &quot;where&apos;s my certificate?&quot; calls (40% reduction)</li>
                                <li>Professional customer experience</li>
                                <li>Automatic activity logging for compliance</li>
                            </ul>
                        </div>

                        {/* How to Invite */}
                        <div id="invite-customer" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">How to Invite a Customer</h3>

                            <h4 className="text-xl font-semibold mb-3">Step 1: Enable Portal Access for a Contact</h4>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Navigate to <strong>Customers</strong> in the main menu</li>
                                <li>Click on the customer you want to give portal access</li>
                                <li>Go to the <strong>Contacts</strong> tab</li>
                                <li>Find the contact you want to invite (they must have an email address)</li>
                                <li>Toggle on <strong>Customer Portal Access</strong></li>
                            </ol>
                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> The contact must have a valid email address to enable portal access.
                                </p>
                            </div>

                            <h4 className="text-xl font-semibold mb-3">Step 2: Send the Portal Invite</h4>
                            <p className="mb-4 text-gray-700">Once portal access is enabled:</p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Click the <strong>Send Invite</strong> button next to the toggle</li>
                                <li>The contact will receive an email with a sign-in link</li>
                                <li>The link is valid for 15 minutes</li>
                            </ol>
                            <p className="mb-4 text-gray-700">The email includes:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Your company name and branding</li>
                                <li>A secure magic link (no passwords needed)</li>
                                <li>Instructions on how to access the portal</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Step 3: Confirm Delivery</h4>
                            <p className="mb-4 text-gray-700">After sending:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>A success message confirms the invite was sent</li>
                                <li>The contact&apos;s email inbox will have the invite within seconds</li>
                                <li>They can click the link to access their portal immediately</li>
                            </ul>
                        </div>

                        {/* Managing Access */}
                        <div id="managing-access" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Managing Portal Access</h3>

                            <h4 className="text-xl font-semibold mb-3">Viewing Access Status</h4>
                            <p className="mb-4 text-gray-700">On any customer&apos;s contact detail page, you can see:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Whether portal access is enabled</li>
                                <li>Number of active sessions</li>
                                <li>When they last signed in (via Activity Log)</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Revoking Access</h4>
                            <p className="mb-4 text-gray-700">To remove someone&apos;s portal access:</p>
                            <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Go to the contact&apos;s detail page</li>
                                <li>Toggle off <strong>Customer Portal Access</strong></li>
                                <li>All active sessions are immediately revoked</li>
                            </ol>
                            <p className="text-gray-700 mb-6">
                                The customer will be logged out and won&apos;t be able to sign back in until you re-enable access.
                            </p>

                            <h4 className="text-xl font-semibold mb-3">Resending Invites</h4>
                            <p className="mb-4 text-gray-700">If a customer&apos;s magic link expired (15 minutes) or they lost the email:</p>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                <li>Simply click <strong>Send Invite</strong> again</li>
                                <li>A new magic link will be generated</li>
                                <li>The old link becomes invalid</li>
                            </ol>
                        </div>

                        {/* Activity Logging */}
                        <div id="activity-logging" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Activity Logging</h3>
                            <p className="mb-4 text-gray-700">
                                All customer portal activity is logged automatically for compliance and dispute resolution:
                            </p>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Activity</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Logged Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Login</td>
                                            <td className="border border-gray-300 px-4 py-2">IP address, browser, timestamp</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">View Quote</td>
                                            <td className="border border-gray-300 px-4 py-2">Which quote, when</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Approve Quote</td>
                                            <td className="border border-gray-300 px-4 py-2">Who approved, their name, timestamp</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Decline Quote</td>
                                            <td className="border border-gray-300 px-4 py-2">Reason provided, timestamp</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">View Certificate</td>
                                            <td className="border border-gray-300 px-4 py-2">Which certificate, when</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Download PDF</td>
                                            <td className="border border-gray-300 px-4 py-2">Certificate ID, timestamp</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700">
                                Access the activity log from <strong>Settings → Portal Activity</strong> to see all customer interactions.
                            </p>
                        </div>

                        {/* Best Practices */}
                        <div id="best-practices" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Best Practices</h3>

                            <h4 className="text-xl font-semibold mb-3">Who to Invite</h4>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Property managers who review multiple certificates</li>
                                <li>Office managers who approve quotes on behalf of companies</li>
                                <li>Primary contacts who handle all communication</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Who NOT to Invite</h4>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Contacts without email addresses</li>
                                <li>Temporary or one-time contacts</li>
                                <li>Contacts who prefer phone/email communication</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Tips for Success</h4>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                <li><strong>Explain the portal</strong> when enabling - let customers know they&apos;ll receive an email</li>
                                <li><strong>Set expectations</strong> - tell them they can approve quotes online</li>
                                <li><strong>Include in your process</strong> - mention portal access when sending quotes</li>
                                <li><strong>Check activity</strong> - monitor who&apos;s using the portal vs. who needs a reminder</li>
                            </ol>
                        </div>
                    </section>

                    {/* Customer Guide */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 pb-3 border-b-2">For Customers</h2>

                        {/* Getting Access */}
                        <div id="getting-access" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Getting Access</h3>

                            <p className="mb-4 text-gray-700">
                                The Customer Portal is an invite-only service. To get access:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li><strong>Contact your contractor</strong> (the company that does your electrical, fire safety, or maintenance work)</li>
                                <li><strong>Ask them to enable portal access</strong> for you</li>
                                <li><strong>Provide your email address</strong> if they don&apos;t already have it</li>
                                <li><strong>Check your email</strong> for the portal invite</li>
                            </ol>

                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> Portal access must be granted by your contractor. If you haven&apos;t received an invite, please contact them directly.
                                </p>
                            </div>

                            <h4 className="text-xl font-semibold mb-3">What to Tell Your Contractor</h4>
                            <p className="mb-4 text-gray-700">When requesting portal access, let them know:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Your full name</li>
                                <li>Your email address</li>
                                <li>The company name (if you&apos;re a business contact)</li>
                                <li>That you&apos;d like access to the customer portal</li>
                            </ul>
                        </div>

                        {/* Signing In */}
                        <div id="signing-in" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Signing In</h3>

                            <h4 className="text-xl font-semibold mb-3">First-Time Sign In</h4>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>You&apos;ll receive an email with the subject &quot;Sign in to [Contractor Name] Portal&quot;</li>
                                <li>Click the <strong>Sign In</strong> button in the email</li>
                                <li>The link will take you directly to the portal - no password needed</li>
                                <li>You&apos;re now logged in and can access your documents</li>
                            </ol>

                            <h4 className="text-xl font-semibold mb-3">Returning Visits</h4>
                            <p className="mb-4 text-gray-700"><strong>If your session is still active</strong> (within 30 days):</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Go to the portal URL (provided by your contractor)</li>
                                <li>You&apos;ll be automatically signed in</li>
                            </ul>

                            <p className="mb-4 text-gray-700"><strong>If your session has expired:</strong></p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Go to the portal login page</li>
                                <li>Enter your email address</li>
                                <li>Click <strong>Send Sign-In Link</strong></li>
                                <li>Check your email for the new sign-in link</li>
                                <li>Click the link to sign in</li>
                            </ol>

                            <h4 className="text-xl font-semibold mb-3">Magic Links</h4>
                            <p className="mb-4 text-gray-700">We use &quot;magic links&quot; instead of passwords:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Each link is unique to you</li>
                                <li>Links expire after 15 minutes for security</li>
                                <li>You can request a new link anytime</li>
                                <li>No password to remember or reset</li>
                            </ul>
                        </div>

                        {/* Using Portal */}
                        <div id="using-portal" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Using the Portal</h3>

                            <h4 className="text-xl font-semibold mb-3">Dashboard</h4>
                            <p className="mb-4 text-gray-700">When you sign in, you&apos;ll see your dashboard with:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li><strong>Pending Quotes</strong> - Quotes waiting for your approval</li>
                                <li><strong>Active Certificates</strong> - Your current valid certificates</li>
                                <li><strong>Outstanding Invoices</strong> - Invoices awaiting payment</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Approving or Declining a Quote</h4>
                            <p className="mb-4 text-gray-700"><strong>To Approve:</strong></p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Open the quote details</li>
                                <li>Review all line items and the total</li>
                                <li>Click <strong>Approve Quote</strong></li>
                                <li>Enter your full name to confirm</li>
                                <li>Click <strong>Confirm Approval</strong></li>
                            </ol>

                            <p className="mb-4 text-gray-700"><strong>To Decline:</strong></p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Open the quote details</li>
                                <li>Click <strong>Decline Quote</strong></li>
                                <li>Optionally provide a reason</li>
                                <li>Click <strong>Confirm Decline</strong></li>
                            </ol>

                            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> Once approved or declined, this cannot be undone. Contact your contractor if you need to change your response.
                                </p>
                            </div>

                            <h4 className="text-xl font-semibold mb-3">Downloading Certificate PDFs</h4>
                            <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Click <strong>Certificates</strong> in the navigation menu</li>
                                <li>Find the certificate you need</li>
                                <li>Click <strong>Download PDF</strong></li>
                                <li>The certificate will download to your device</li>
                            </ol>
                            <p className="text-gray-700 mb-6">
                                <strong>Tip:</strong> Download certificates promptly for your records. They&apos;re always available in the portal, but having a local copy is good practice.
                            </p>
                        </div>

                        {/* Security */}
                        <div id="security" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Security</h3>
                            <p className="mb-4 text-gray-700">Your portal is protected by:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li><strong>HTTPS encryption</strong> for all data transfer</li>
                                <li><strong>Magic links</strong> instead of passwords (harder to steal)</li>
                                <li><strong>Session expiry</strong> after 30 days of inactivity</li>
                                <li><strong>Activity logging</strong> of all your actions</li>
                                <li><strong>Isolated data</strong> - you only see your own documents</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Tips to Stay Secure</h4>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                <li>Don&apos;t share sign-in links with others</li>
                                <li>Sign out when using shared computers</li>
                                <li>Report any suspicious activity to your contractor</li>
                            </ol>
                        </div>

                        {/* Troubleshooting */}
                        <div id="troubleshooting" className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Troubleshooting</h3>

                            <h4 className="text-xl font-semibold mb-3">Didn&apos;t receive the sign-in email?</h4>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Check your spam/junk folder</li>
                                <li>Make sure you entered the correct email</li>
                                <li>Wait a few minutes and try again</li>
                                <li>Contact your contractor if it still doesn&apos;t arrive</li>
                            </ol>

                            <h4 className="text-xl font-semibold mb-3">Sign-in link says &quot;expired&quot;?</h4>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Links are valid for 15 minutes</li>
                                <li>Go back to the login page and request a new link</li>
                                <li>Use the link promptly next time</li>
                            </ul>

                            <h4 className="text-xl font-semibold mb-3">Can&apos;t find a quote or certificate?</h4>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>It may be linked to a different contact at your company</li>
                                <li>Contact your contractor to verify it&apos;s assigned to you</li>
                                <li>The document may still be in draft (not yet sent)</li>
                            </ul>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Enable Customer Portal?</h3>
                        <p className="mb-6 text-gray-800">
                            Upgrade to Business tier and give your customers 24/7 access to quotes, certificates, and invoices.
                        </p>
                        <a
                            href="https://app.opscel.com/handler/sign-up"
                            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}
