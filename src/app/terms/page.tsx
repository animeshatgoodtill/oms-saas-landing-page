import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Terms of Service | ${siteDetails.siteName}`,
  description: `Terms of Service for ${siteDetails.siteName}. Read our terms and conditions for using our services.`,
};

const TermsPage: React.FC = () => {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated={companyDetails.compliance.lastPolicyUpdate}
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services provided by{' '}
        {companyDetails.registeredName} (trading as &quot;{companyDetails.tradingName}&quot;), a company registered
        in England and Wales under company number {companyDetails.companiesHouseNumber}, with its registered
        office at {getFormattedRegisteredAddress()}.
      </p>
      <p>
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree
        to these Terms, you must not use our services.
      </p>
      <p>
        <strong>Related Agreement:</strong> These Terms should be read in conjunction with our{' '}
        <Link href="/eula" className="text-secondary hover:underline">End User License Agreement (EULA)</Link>,
        which sets out the specific software licensing terms, AI features, third-party integrations,
        and limitation of liability provisions that apply to your use of the OpsCel platform. In the
        event of any conflict between these Terms and the EULA, the EULA shall prevail with respect to
        software licensing matters.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&quot;Services&quot;</strong> means the {companyDetails.tradingName} operations management platform, including our website, web application, mobile applications, and any related services.</li>
        <li><strong>&quot;User&quot;</strong>, &quot;you&quot;, &quot;your&quot; means the individual or organisation accessing our Services.</li>
        <li><strong>&quot;Account&quot;</strong> means your registered account with {companyDetails.tradingName}.</li>
        <li><strong>&quot;Content&quot;</strong> means any data, text, images, documents, or other materials uploaded to or created within the Services.</li>
        <li><strong>&quot;Subscription&quot;</strong> means your paid access to our Services.</li>
      </ul>

      <h2>3. Account Registration</h2>
      <h3>3.1 Eligibility</h3>
      <p>
        To use our Services, you must be at least 18 years old and have the legal authority to enter into
        these Terms. If you are registering on behalf of an organisation, you represent that you have the
        authority to bind that organisation to these Terms.
      </p>

      <h3>3.2 Account Security</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Notifying us immediately of any unauthorised access</li>
        <li>Ensuring your account information is accurate and up-to-date</li>
      </ul>

      <h2>4. Use of Services</h2>
      <h3>4.1 Permitted Use</h3>
      <p>
        You may use our Services for legitimate business purposes in accordance with these Terms.
        This includes managing jobs, creating documentation, scheduling engineers, and generating
        compliance certificates.
      </p>

      <h3>4.2 Prohibited Use</h3>
      <p>You must not:</p>
      <ul>
        <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
        <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts</li>
        <li>Transmit any viruses, malware, or harmful code</li>
        <li>Interfere with or disrupt the integrity or performance of the Services</li>
        <li>Reverse engineer, decompile, or attempt to extract the source code of the Services</li>
        <li>Use automated systems (bots, scrapers) without our written permission</li>
        <li>Resell or redistribute the Services without authorisation</li>
        <li>Use the Services to store or transmit illegal content</li>
      </ul>

      <h2>5. Subscriptions and Payment</h2>
      <h3>5.1 Subscription Plans</h3>
      <p>
        Our Services are provided on a subscription basis. Details of available plans, features, and
        pricing are available on our website. We reserve the right to modify our pricing with reasonable
        notice.
      </p>

      <h3>5.2 Payment Terms</h3>
      <ul>
        <li>Subscriptions are billed in advance on a monthly or annual basis</li>
        <li>All fees are quoted in British Pounds (GBP) and are exclusive of VAT unless stated otherwise</li>
        <li>Payment is due upon invoice</li>
        <li>We accept payment by credit/debit card and direct debit</li>
      </ul>

      <h3>5.3 Refunds</h3>
      <p>
        Subscription fees are generally non-refundable. However, if you cancel within 14 days of your
        initial subscription (cooling-off period under the Consumer Contracts Regulations 2013), you may
        be entitled to a refund. Please contact us to discuss your circumstances.
      </p>

      <h2>6. Your Content</h2>
      <h3>6.1 Ownership</h3>
      <p>
        You retain ownership of all Content you upload to or create within the Services. We do not claim
        any ownership rights over your Content.
      </p>

      <h3>6.2 Licence to Us</h3>
      <p>
        By using our Services, you grant us a limited licence to host, store, backup, and display your
        Content solely for the purpose of providing the Services to you. This licence terminates when
        you delete your Content or close your account.
      </p>

      <h3>6.3 Your Responsibilities</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>The accuracy and legality of your Content</li>
        <li>Ensuring you have the right to upload and use your Content</li>
        <li>Maintaining backups of your critical data</li>
        <li>Complying with industry regulations regarding documentation and certificates</li>
      </ul>

      <h2>7. AI Features</h2>
      <p>
        Our Services include AI-powered features for document analysis, data extraction, and intelligent
        suggestions. You acknowledge that:
      </p>
      <ul>
        <li>AI-generated outputs should be reviewed for accuracy before use</li>
        <li>AI features are provided as tools to assist, not replace, professional judgement</li>
        <li>You remain responsible for the accuracy of all certificates and compliance documentation</li>
        <li>We continuously improve our AI, but do not guarantee 100% accuracy</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        The Services, including all software, designs, text, graphics, and other materials, are owned by
        or licensed to {companyDetails.registeredName} and are protected by copyright, trademark, and other
        intellectual property laws. You may not copy, modify, or distribute any part of our Services
        without our written consent.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        Our Services may integrate with third-party services (e.g., payment processors, accounting software).
        Your use of such services is subject to their respective terms and conditions. We are not responsible
        for the availability or performance of third-party services.
      </p>

      <h2>10. Availability and Support</h2>
      <h3>10.1 Service Availability</h3>
      <p>
        We strive to maintain high availability of our Services. However, we do not guarantee uninterrupted
        access. The Services may be temporarily unavailable due to maintenance, updates, or circumstances
        beyond our control.
      </p>

      <h3>10.2 Support</h3>
      <p>
        We provide customer support during our business hours ({companyDetails.contact.supportHours}).
        Support is available via email at{' '}
        <a href={`mailto:${companyDetails.contact.supportEmail}`}>{companyDetails.contact.supportEmail}</a>.
      </p>

      <h2>11. Limitation of Liability</h2>
      <h3>11.1 Exclusions</h3>
      <p>To the maximum extent permitted by law, we shall not be liable for:</p>
      <ul>
        <li>Any indirect, incidental, special, consequential, or punitive damages</li>
        <li>Loss of profits, revenue, data, or business opportunities</li>
        <li>Any damages arising from your use of or inability to use the Services</li>
        <li>Any third-party claims</li>
      </ul>

      <h3>11.2 Cap on Liability</h3>
      <p>
        Our total liability to you for any claims arising from these Terms or your use of the Services
        shall not exceed the total fees paid by you to us in the twelve (12) months preceding the claim.
      </p>

      <h3>11.3 Consumer Rights</h3>
      <p>
        Nothing in these Terms affects your statutory rights as a consumer under UK law, including the
        Consumer Rights Act 2015.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {companyDetails.registeredName}, its officers, directors,
        employees, and agents from any claims, damages, losses, or expenses arising from your:
      </p>
      <ul>
        <li>Use of the Services</li>
        <li>Violation of these Terms</li>
        <li>Violation of any third-party rights</li>
        <li>Content you upload or create</li>
      </ul>

      <h2>13. Termination</h2>
      <h3>13.1 Termination by You</h3>
      <p>
        You may terminate your account at any time by contacting us. Upon termination, you will lose access
        to the Services, and we will delete your data in accordance with our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h3>13.2 Termination by Us</h3>
      <p>
        We may suspend or terminate your access to the Services if you violate these Terms or for any other
        reason with reasonable notice. In cases of serious breach, we may terminate immediately without notice.
      </p>

      <h3>13.3 Effect of Termination</h3>
      <p>
        Upon termination, your right to use the Services will cease immediately. Sections of these Terms that
        by their nature should survive termination will remain in effect.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of significant changes via email or
        through the Services. Your continued use of the Services after such changes constitutes acceptance
        of the updated Terms.
      </p>

      <h2>15. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms
        or your use of the Services shall be subject to the exclusive jurisdiction of the courts of England
        and Wales.
      </p>

      <h2>16. General Provisions</h2>
      <ul>
        <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Services.</li>
        <li><strong>Severability:</strong> If any provision of these Terms is found invalid, the remaining provisions will continue in effect.</li>
        <li><strong>Waiver:</strong> Our failure to enforce any provision does not constitute a waiver of that provision.</li>
        <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our consent. We may assign our rights at any time.</li>
      </ul>

      <h2>17. Contact Us</h2>
      <p>
        For any questions about these Terms, please contact us:
      </p>
      <p>
        {companyDetails.registeredName}<br />
        {getFormattedRegisteredAddress()}<br />
        Email: <a href={`mailto:${companyDetails.contact.generalEmail}`}>{companyDetails.contact.generalEmail}</a><br />
        {companyDetails.contact.phone && <>Phone: {companyDetails.contact.phone}</>}
      </p>
    </LegalPage>
  );
};

export default TermsPage;
