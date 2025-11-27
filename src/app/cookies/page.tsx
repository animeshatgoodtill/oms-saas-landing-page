import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteDetails.siteName}`,
  description: `Cookie Policy for ${siteDetails.siteName}. Learn about how we use cookies and similar technologies.`,
};

const CookiesPage: React.FC = () => {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated={companyDetails.compliance.lastPolicyUpdate}
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device (computer, tablet, or mobile phone)
        when you visit a website. They are widely used to make websites work more efficiently and to
        provide information to website owners.
      </p>
      <p>
        This Cookie Policy explains how {companyDetails.registeredName} (trading as &quot;{companyDetails.tradingName}&quot;)
        uses cookies and similar technologies on our website and services.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>

      <h3>2.1 Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They enable core functionality
        such as security, network management, and accessibility. You cannot opt out of these cookies as
        the website cannot function without them.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Cookie Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">session_id</td>
            <td className="border border-gray-200 px-4 py-2">Maintains your session state</td>
            <td className="border border-gray-200 px-4 py-2">Session</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">csrf_token</td>
            <td className="border border-gray-200 px-4 py-2">Security token to prevent cross-site attacks</td>
            <td className="border border-gray-200 px-4 py-2">Session</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">cookie_consent</td>
            <td className="border border-gray-200 px-4 py-2">Stores your cookie preferences</td>
            <td className="border border-gray-200 px-4 py-2">1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Performance/Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting and
        reporting information anonymously. This helps us improve our website and services.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Cookie Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">_ga</td>
            <td className="border border-gray-200 px-4 py-2">Google Analytics - distinguishes users</td>
            <td className="border border-gray-200 px-4 py-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">_ga_*</td>
            <td className="border border-gray-200 px-4 py-2">Google Analytics - maintains session state</td>
            <td className="border border-gray-200 px-4 py-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">_gid</td>
            <td className="border border-gray-200 px-4 py-2">Google Analytics - distinguishes users</td>
            <td className="border border-gray-200 px-4 py-2">24 hours</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalisation. They may be set by us or by
        third-party providers whose services we use.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Cookie Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">user_preferences</td>
            <td className="border border-gray-200 px-4 py-2">Stores your display preferences</td>
            <td className="border border-gray-200 px-4 py-2">1 year</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">language</td>
            <td className="border border-gray-200 px-4 py-2">Remembers your language preference</td>
            <td className="border border-gray-200 px-4 py-2">1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>2.4 Marketing Cookies</h3>
      <p>
        These cookies may be set through our site by our advertising partners. They may be used by those
        companies to build a profile of your interests and show you relevant adverts on other sites.
      </p>
      <p>
        <strong>Note:</strong> We currently do not use marketing cookies. If this changes, we will update
        this policy and request your consent before setting any marketing cookies.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third-party services that appear on our pages. We do not control these
        cookies. The third parties that set cookies on our website include:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> For website analytics. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a></li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <h3>4.1 Cookie Consent</h3>
      <p>
        When you first visit our website, you will be presented with a cookie banner that allows you to
        accept or reject non-essential cookies. You can change your preferences at any time by clicking
        the &quot;Cookie Settings&quot; link in our website footer.
      </p>

      <h3>4.2 Browser Settings</h3>
      <p>
        Most web browsers allow you to manage cookies through their settings. You can usually find these
        settings in the &quot;Options&quot;, &quot;Preferences&quot;, or &quot;Settings&quot; menu of your browser.
      </p>
      <p>Here are links to cookie management instructions for common browsers:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Please note that disabling cookies may affect the functionality of our website and services.
      </p>

      <h3>4.3 Opt-Out Tools</h3>
      <p>
        You can opt out of Google Analytics by installing the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>.
      </p>

      <h2>5. Similar Technologies</h2>
      <p>In addition to cookies, we may use similar technologies including:</p>
      <ul>
        <li><strong>Local Storage:</strong> Used to store data locally in your browser for better performance.</li>
        <li><strong>Session Storage:</strong> Similar to local storage but cleared when you close your browser.</li>
        <li><strong>Pixels/Web Beacons:</strong> Small images used to track page views and email opens.</li>
      </ul>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
        or our data practices. We encourage you to periodically review this page for the latest information
        on our use of cookies.
      </p>

      <h2>7. More Information</h2>
      <p>
        For more information about how we process your personal data, please read our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        If you have any questions about our use of cookies, please contact us:
      </p>
      <p>
        {companyDetails.registeredName}<br />
        Email: <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>
      </p>

      <h2>8. About the ICO</h2>
      <p>
        The Information Commissioner&apos;s Office (ICO) is the UK&apos;s independent authority set up to uphold
        information rights. For more information about cookies and your rights, visit{' '}
        <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>.
      </p>
    </LegalPage>
  );
};

export default CookiesPage;
