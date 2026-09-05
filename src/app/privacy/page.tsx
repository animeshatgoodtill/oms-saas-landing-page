import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteDetails.siteName}`,
  description: `Privacy Policy for ${siteDetails.siteName}. Learn how we collect, use, and protect your personal data.`,
};

const PrivacyPage: React.FC = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="5 September 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        {companyDetails.registeredName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;{companyDetails.tradingName}&quot;)
        is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our website and services.
      </p>
      <p>
        We are registered with the Information Commissioner&apos;s Office (ICO) under registration number{' '}
        <strong>{companyDetails.compliance.icoRegistrationNumber}</strong>.
      </p>
      <p>
        <strong>Data Controller:</strong><br />
        {companyDetails.registeredName}<br />
        {getFormattedRegisteredAddress()}<br />
        Company Registration Number: {companyDetails.companiesHouseNumber}
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information in the following ways:</p>

      <h3>2.1 Information You Provide</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, company name, and job title when you register for an account.</li>
        <li><strong>Payment Information:</strong> Billing address and payment card details (processed securely by our payment provider).</li>
        <li><strong>Job Data:</strong> Information about jobs, customers, sites, equipment, and certificates you create within the platform.</li>
        <li><strong>Communications:</strong> Any correspondence you send to us, including support requests and feedback.</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage Data:</strong> How you interact with our services, features used, and time spent.</li>
        <li><strong>Device Information:</strong> Device type, operating system, browser type, and IP address.</li>
        <li><strong>Location Data:</strong> Approximate location based on IP address; precise location only with your explicit consent for field services features.</li>
        <li><strong>Cookies:</strong> See our <Link href="/cookies">Cookie Policy</Link> for details.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li><strong>Service Delivery:</strong> To provide, maintain, and improve our operations management platform.</li>
        <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support.</li>
        <li><strong>Communication:</strong> To send service updates, security alerts, and support messages.</li>
        <li><strong>Marketing:</strong> To send promotional communications (with your consent) which you can opt out of at any time.</li>
        <li><strong>Analytics:</strong> To understand how our services are used and to improve user experience.</li>
        <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</li>
        <li><strong>AI Features:</strong> To power Setup Copilot (workspace setup) and Insights (answering business questions about your account). See section 5.3 below for what this involves and who processes it.</li>
      </ul>

      <h2>4. Legal Basis for Processing (UK GDPR)</h2>
      <p>We process your personal data under the following legal bases:</p>
      <ul>
        <li><strong>Contract:</strong> Processing necessary to perform our contract with you (providing our services).</li>
        <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests, such as improving our services and preventing fraud.</li>
        <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing communications).</li>
        <li><strong>Legal Obligation:</strong> Processing necessary to comply with UK law.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>We may share your personal data with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Third-party companies that help us deliver our services (hosting, payment processing, analytics). All providers are contractually bound to protect your data.</li>
        <li><strong>Your Organisation:</strong> If you use {companyDetails.tradingName} as part of an organisation, administrators may access your account data.</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
      </ul>
      <p>
        <strong>We do not sell your personal data to third parties.</strong>
      </p>

      <h3>5.1 Google API Services</h3>
      <p>
        {companyDetails.tradingName} integrates with Google Calendar at the user&apos;s request, using OAuth authentication.
        We request the following scopes:
      </p>
      <ul>
        <li><strong>calendar.events:</strong> To create, update, and delete calendar events corresponding to your scheduled jobs and visits within {companyDetails.tradingName}.</li>
        <li><strong>userinfo.email:</strong> To identify the Google account being connected to your {companyDetails.tradingName} profile.</li>
        <li><strong>calendar.freebusy:</strong> To read your free/busy availability (not event details) so {companyDetails.tradingName} can detect scheduling conflicts and avoid double-booking engineers.</li>
      </ul>
      <p>
        We use this access only to sync your {companyDetails.tradingName} jobs to your Google Calendar. We do not read, store, or use your calendar data for any other purpose beyond this synchronization feature.
      </p>
      <p>
        <strong>{companyDetails.tradingName}&apos;s use and transfer of information received from Google APIs adheres to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Google API Services User Data Policy
        </a>, including the Limited Use requirements.</strong>
      </p>
      <p>
        You can revoke {companyDetails.tradingName}&apos;s access to your Google Calendar at any time via your{' '}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Google Account settings
        </a>{' '}
        or by disconnecting the integration within {companyDetails.tradingName} (Settings → Calendar Integration).
      </p>

      <h3>5.2 Intuit QuickBooks Online</h3>
      <p>
        {companyDetails.tradingName} integrates with QuickBooks Online at the user&apos;s request, using OAuth 2.0 authentication.
        We request a single scope, <strong>com.intuit.quickbooks.accounting</strong>, to create and update invoices and customer
        records in your connected QuickBooks company and to read back the payment status of those invoices.
      </p>
      <p>
        The integration is one-way: {companyDetails.tradingName} pushes invoice and customer data to QuickBooks and reads payment
        status; we do not import or store a copy of your wider QuickBooks financial data.
      </p>
      <p>
        We store your OAuth access and refresh tokens (encrypted at rest), your QuickBooks company identifier (realmId), and
        reference IDs linking {companyDetails.tradingName} records to their QuickBooks counterparts. We do not access QuickBooks
        Payments and handle no card data.
      </p>
      <p>
        You can revoke {companyDetails.tradingName}&apos;s access at any time by disconnecting within {companyDetails.tradingName}{' '}
        (Settings → Accounting Integration) or from your{' '}
        <a href="https://accounts.intuit.com/app/account-manager/security" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Intuit account&apos;s connected-apps settings
        </a>.
      </p>

      <h3>5.3 Anthropic, PBC (AI Features)</h3>
      <p>
        Some {companyDetails.tradingName} features use artificial intelligence to help you set up your workspace
        and answer questions about your own data. When you use them, the relevant information is sent to our
        AI provider, Anthropic, PBC, which processes it and returns a result. Two features do this today:
      </p>
      <ul>
        <li>
          <strong>Setup Copilot</strong> reads files you upload and, if you give us the address, the text of your
          public website, so that it can work out how to map your customer, site and contact records — this can
          include anything contained in those files, such as names, addresses, email addresses and telephone
          numbers.
        </li>
        <li>
          <strong>Insights</strong> answers business questions using figures already held in your account: totals
          and summaries such as revenue, margin, outstanding invoices, open quotes and upcoming work, together
          with the customer or site names those figures relate to. Free-text fields — job notes, descriptions and
          quotation terms — are never sent to Insights.
        </li>
      </ul>
      <p>
        Your information is sent only in order to produce your answer. It is not used to train AI models, it is
        never combined with or made visible to another {companyDetails.tradingName} customer, and the AI cannot
        change anything in your account by itself: it can only propose a change, which someone on your team then
        chooses to apply.
      </p>
      <p>
        Anthropic retains the information it receives for a limited period under its standard API terms, to
        provide and monitor the service. Within {companyDetails.tradingName}, Insights conversations are deleted
        after 30 days and Setup Copilot conversations after 90 days, and every Insights question is recorded in
        your audit log against the user who asked it.
      </p>

      <h3>5.4 Sub-Processors</h3>
      <p>
        The table below lists the sub-processors we use to provide {companyDetails.tradingName}, what they
        process, and the safeguard in place for any transfer of data outside the UK.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className="border border-gray-200 px-4 py-2 text-left">Sub-processor</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Data processed</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Transfer safeguard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Anthropic, PBC</td>
              <td className="border border-gray-200 px-4 py-2">AI processing for the Setup Copilot and Insights features</td>
              <td className="border border-gray-200 px-4 py-2">Customer, site and contact records you upload; aggregate financial and scheduling figures from your account, with the related customer and site names</td>
              <td className="border border-gray-200 px-4 py-2">United States</td>
              <td className="border border-gray-200 px-4 py-2">Standard Contractual Clauses and the UK International Data Transfer Addendum, under Anthropic&apos;s Data Processing Agreement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>6. Data Storage and Security</h2>
      <p>
        Your data is stored on secure servers located in the <strong>{companyDetails.compliance.dataHostingLocation}</strong>.
        We implement appropriate technical and organisational measures to protect your personal data, including:
      </p>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest, including application-layer encryption of third-party integration credentials</li>
        <li>Logical isolation of each customer&apos;s data within our multi-tenant platform</li>
        <li>Role-based access controls and authentication</li>
        <li>Continuous monitoring and error tracking across our systems</li>
        <li>Automated backups and disaster recovery procedures</li>
        <li>Least-privilege access for all third-party integrations</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>We retain your personal data for as long as necessary to:</p>
      <ul>
        <li>Provide our services to you</li>
        <li>Comply with legal obligations (e.g., tax records for 7 years)</li>
        <li>Resolve disputes and enforce our agreements</li>
      </ul>
      <p>
        When you close your account, we will delete or anonymise your personal data within 90 days,
        unless retention is required for legal purposes.
      </p>

      <h2>8. Your Rights</h2>
      <p>Under UK GDPR, you have the following rights:</p>
      <ul>
        <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
        <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
        <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing purposes.</li>
        <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to decisions based solely on automated processing.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{' '}
        <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>.
        We will respond within one month.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Your data is primarily processed within the United Kingdom. Where we transfer data outside the UK,
        we ensure appropriate safeguards are in place, such as:
      </p>
      <ul>
        <li>Transfers to countries with adequate data protection laws</li>
        <li>Standard Contractual Clauses approved by the ICO</li>
        <li>Binding Corporate Rules where applicable</li>
      </ul>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for individuals under 18 years of age. We do not knowingly
        collect personal data from children. If you believe we have collected data from a child,
        please contact us immediately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant changes
        by email or through our platform. The &quot;Last updated&quot; date at the top of this page indicates
        when this policy was last revised.
      </p>

      <h2>12. Complaints</h2>
      <p>
        If you have concerns about how we handle your personal data, please contact us first at{' '}
        <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>.
      </p>
      <p>
        You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
      </p>
      <ul>
        <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
        <li>Helpline: 0303 123 1113</li>
      </ul>

      <h2>13. Contact Us</h2>
      <p>
        For any questions about this Privacy Policy or our data practices, please contact:
      </p>
      <p>
        <strong>Data Protection Officer</strong><br />
        {companyDetails.registeredName}<br />
        {getFormattedRegisteredAddress()}<br />
        Email: <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>
      </p>
    </LegalPage>
  );
};

export default PrivacyPage;
