import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: 'End User License Agreement (EULA) | Opscel',
  description: 'End User License Agreement for Opscel job management software. Read our terms for subscription, data ownership, and acceptable use.',
};

const EULAPage: React.FC = () => {
  return (
    <LegalPage
      title="End User License Agreement"
      lastUpdated="5 September 2026"
    >
      {/* Critical Legal Notice */}
      <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
        <p className="text-red-900 font-bold mb-2 uppercase text-sm tracking-wide">⚠️ Important — Read Carefully Before Use</p>
        <p className="text-red-900 mb-3">
          This End User License Agreement (&quot;EULA&quot; or &quot;Agreement&quot;) is a legally binding contract between you and Opscel Limited. <strong>By accessing, registering for, downloading, installing, or using the Service in any way, you irrevocably agree to be bound by every provision of this Agreement, including without limitation the limitations of liability, warranty disclaimers, indemnification obligations, and dispute resolution provisions set out below.</strong>
        </p>
        <p className="text-red-900 mb-3">
          <strong>YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND.</strong>
        </p>
        <p className="text-red-900 font-semibold">
          If you do not agree to any part of this Agreement, you must immediately cease all access to and use of the Service.
        </p>
      </div>

      {/* Plain-English Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h2 className="text-xl font-heading font-bold text-blue-900 mb-3">Plain-English Summary</h2>
        <p className="text-blue-800 mb-3">
          This summary is provided for convenience only and does not form part of the legal agreement:
        </p>
        <ul className="list-disc list-inside space-y-2 text-blue-800 ml-4">
          <li><strong>You own your data</strong> — we never sell or share it with other customers</li>
          <li><strong>You verify everything</strong> — Opscel is a tool; you remain professionally responsible for all certificates, compliance work, and decisions</li>
          <li><strong>Pay monthly</strong> — 30-day free trial, card required at signup, cancel anytime</li>
          <li><strong>UK-hosted</strong> — your data stays in UK data centres, governed by English law</li>
          <li><strong>AI is assistive only</strong> — never rely on AI suggestions without independent professional verification</li>
          <li><strong>Opscel&apos;s liability is strictly limited</strong> — see Section 14 for full details</li>
        </ul>
        <p className="text-blue-800 mt-3 text-sm italic">
          The full legal terms below are binding and govern your use of the Service.
        </p>
      </div>

      {/* 1. Parties and Definitions */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Parties and Definitions</h2>

        <div className="space-y-3 text-foreground-accent">
          <p>
            <strong>1.1 Parties.</strong> This Agreement is entered into between:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>Opscel Limited</strong>, a company incorporated in England and Wales under company number {companyDetails.companiesHouseNumber}, whose registered office is in England (&quot;<strong>Opscel</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, or &quot;<strong>our</strong>&quot;); and</li>
            <li>The person, business, partnership, company, or other legal entity accepting this Agreement (&quot;<strong>Customer</strong>&quot;, &quot;<strong>you</strong>&quot;, or &quot;<strong>your</strong>&quot;).</li>
          </ul>

          <p className="mt-4"><strong>1.2 Definitions.</strong> In this Agreement, the following terms have the following meanings:</p>

          <div className="space-y-3 mt-3">
            <p><strong>&quot;Affiliate&quot;</strong> means any entity that directly or indirectly controls, is controlled by, or is under common control with a party.</p>

            <p><strong>&quot;Authorised User&quot;</strong> means any individual authorised by the Customer to access the Service, including employees, contractors, engineers, and administrative staff.</p>

            <p><strong>&quot;Confidential Information&quot;</strong> means any non-public information disclosed by one party to the other, including technical, business, financial, or operational information.</p>

            <p><strong>&quot;Customer Data&quot;</strong> means all data, content, files, photographs, documents, certificates, records, and other information submitted to, generated by, or processed through the Service by Customer or its Authorised Users.</p>

            <p><strong>&quot;Documentation&quot;</strong> means the user guides, help articles, technical documentation, and other materials made available by Opscel at <a href="https://www.opscel.com/docs" className="text-secondary hover:underline">www.opscel.com/docs</a> and <a href="https://www.opscel.com/help" className="text-secondary hover:underline">www.opscel.com/help</a>.</p>

            <p><strong>&quot;Force Majeure Event&quot;</strong> has the meaning given in Section 17.7.</p>

            <p><strong>&quot;Service&quot;</strong> means the Opscel software-as-a-service platform, including the web application, progressive web application (PWA), mobile-accessible interfaces, application programming interfaces (APIs), Documentation, and any updates, modifications, or new versions made available by Opscel.</p>

            <p><strong>&quot;Subscription&quot;</strong> means a paid or trial subscription to access and use the Service.</p>

            <p><strong>&quot;Subscription Fees&quot;</strong> means the recurring fees payable by Customer for use of the Service.</p>

            <p><strong>&quot;Third-Party Services&quot;</strong> means any third-party software, platforms, integrations, or services accessed through or used in connection with the Service, including without limitation Xero, QuickBooks, Telegram, Google Calendar, Microsoft 365, and any payment processors.</p>
          </div>

          <p className="mt-4">
            <strong>1.3 Interpretation.</strong> References to statutes include any subordinate legislation and any amendments or re-enactments. Headings are for convenience only and do not affect interpretation. Words in the singular include the plural and vice versa.
          </p>
        </div>
      </section>

      {/* 2. Grant of License */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Grant of License</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> We grant you a limited right to use Opscel for your business while you pay your subscription. The license is revocable, non-transferable, and subject to all the terms in this agreement.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>2.1 License Grant.</strong> Subject to Customer&apos;s strict compliance with the terms and conditions of this Agreement, including without limitation the payment of all applicable Subscription Fees when due, Opscel hereby grants Customer a limited, revocable, non-exclusive, non-transferable, non-sublicensable license, during the term of the Subscription only, to access and use the Service solely for Customer&apos;s internal business operations.
          </p>

          <p>
            <strong>2.2 License Restrictions.</strong> Customer shall not, and shall not permit any Authorised User or third party to:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>copy, modify, adapt, translate, or create derivative works of the Service;</li>
            <li>reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, or trade secrets of the Service, except to the extent expressly permitted by applicable law that cannot be excluded by contract;</li>
            <li>rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make the Service available to any third party;</li>
            <li>use the Service to provide services to third parties, including without limitation outsourcing, service bureau, hosted, time-sharing, or service-provider arrangements;</li>
            <li>use the Service to develop, train, or improve any competing product, service, or artificial intelligence model;</li>
            <li>remove, obscure, or alter any proprietary notices, labels, trademarks, or copyright notices appearing on or in the Service;</li>
            <li>circumvent or attempt to circumvent any authentication, security, access control, or usage limitation mechanisms;</li>
            <li>use any robot, spider, scraper, bot, or other automated means to access the Service except through Opscel&apos;s documented APIs and within published rate limits;</li>
            <li>perform or publish any benchmark or performance test of the Service without Opscel&apos;s prior written consent;</li>
            <li>use the Service in any manner that violates any applicable law, regulation, code of practice, or industry standard.</li>
          </ul>

          <p>
            <strong>2.3 Reservation of Rights.</strong> All rights not expressly granted to Customer under this Agreement are reserved by Opscel. Customer acknowledges that the license granted herein does not constitute a sale or transfer of any intellectual property rights.
          </p>

          <p>
            <strong>2.4 Authorised Users.</strong> Customer is fully responsible for all acts and omissions of its Authorised Users and for ensuring that all Authorised Users comply with this Agreement. Customer shall maintain the confidentiality of all login credentials and shall be solely responsible for any unauthorised access resulting from Customer&apos;s failure to do so.
          </p>
        </div>
      </section>

      {/* 3. Subscription, Fees, and Payment */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Subscription, Fees, and Payment</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> 30-day free trial requires a payment method, but you&apos;re not charged until the trial ends. Monthly billing afterwards. All fees are non-refundable except as required by law.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>3.1 Free Trial.</strong> New customers may receive a 30-day free trial period as determined by Opscel in its sole discretion. A valid payment method is required to commence the trial, though Customer is not charged during the trial itself. Unless cancelled by Customer prior to the end of the trial, the Subscription will automatically convert to a paid Subscription and Customer authorises Opscel to charge the applicable Subscription Fees.
          </p>

          <p>
            <strong>3.2 Subscription Fees.</strong> Customer shall pay all Subscription Fees in accordance with the pricing in effect at the time of Subscription, as published at <a href="https://www.opscel.com/#pricing" className="text-secondary hover:underline">www.opscel.com/#pricing</a>. All fees are quoted in Pounds Sterling (GBP) and are exclusive of VAT and any other applicable taxes, levies, or duties, which shall be added to invoices at the prevailing rate.
          </p>

          <p>
            <strong>3.3 Payment Authorisation.</strong> Customer authorises Opscel and its payment processors to charge the payment method on file for all Subscription Fees and any applicable taxes on each billing cycle without further notice or consent. Customer is responsible for maintaining a valid payment method.
          </p>

          <p>
            <strong>3.4 Non-Refundable.</strong> <strong>ALL SUBSCRIPTION FEES ARE NON-REFUNDABLE</strong>, except where refund is required by mandatory statutory consumer protection law that cannot be excluded by contract. No partial refunds, pro-rata refunds, or credits will be provided for partial billing periods, unused features, downgrades, or early cancellation.
          </p>

          <p>
            <strong>3.5 Failed Payment.</strong> If a payment fails, Opscel may suspend access to the Service without notice and may, after 15 days of non-payment, terminate the Subscription and delete Customer Data in accordance with Section 13. Customer remains liable for all outstanding fees and may be charged interest at the rate of 4% per annum above the Bank of England base rate, calculated daily, pursuant to the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>

          <p>
            <strong>3.6 Price Changes.</strong> Opscel may modify Subscription Fees at any time upon at least 30 days&apos; written notice (which may be by email or in-Service notification). Continued use of the Service after the effective date of a price change constitutes acceptance of the new pricing.
          </p>

          <p>
            <strong>3.7 Disputed Charges.</strong> Customer must notify Opscel in writing of any disputed charges within 30 days of the invoice date. Failure to do so constitutes acceptance of the charges. No chargebacks shall be initiated without first attempting in good faith to resolve the dispute with Opscel.
          </p>
        </div>
      </section>

      {/* 4. Customer Responsibilities and Acceptable Use */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Customer Responsibilities and Acceptable Use</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> You are professionally and legally responsible for all your work. Opscel is a tool that helps you — it does NOT replace your professional judgment, qualifications, or compliance obligations.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>4.1 Customer Sole Responsibility.</strong> Customer expressly acknowledges and agrees that:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Customer is solely responsible for the accuracy, completeness, legality, and compliance of all Customer Data, including but not limited to certificates, test results, observations, defect classifications, and compliance documentation;</li>
            <li>Customer is solely responsible for ensuring that all work performed and documented through the Service complies with applicable laws, regulations, British Standards (including BS 7671, BS 5839, BS 5266, BS 5306, BS EN 62446-1), industry codes of practice, and the requirements of any certification or accreditation bodies (including NICEIC, ECA, BAFE, FIA);</li>
            <li>Customer&apos;s Authorised Users must hold all necessary qualifications, competencies, registrations, certifications, and insurance required to perform the work being documented;</li>
            <li>Opscel does not provide professional advice, engineering services, legal advice, or compliance certification, and the Service shall not be construed as offering any such professional services;</li>
            <li>Customer must independently verify all data, calculations, suggestions, classifications, and outputs generated by the Service before relying on them for any professional, legal, regulatory, or safety-critical purpose;</li>
            <li>Customer is solely responsible for maintaining adequate professional indemnity insurance, public liability insurance, and any other insurance required for its business operations.</li>
          </ul>

          <p>
            <strong>4.2 Prohibited Conduct.</strong> Customer shall not, and shall not permit any Authorised User or third party to use the Service to:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>violate any applicable law, regulation, court order, or third-party right;</li>
            <li>infringe any patent, trademark, copyright, trade secret, moral right, or other intellectual property right;</li>
            <li>upload, transmit, or distribute any content that is unlawful, defamatory, obscene, harassing, threatening, abusive, harmful, or otherwise objectionable;</li>
            <li>upload, transmit, or distribute any virus, worm, malware, ransomware, spyware, or other malicious code;</li>
            <li>impersonate any person or entity or falsely represent affiliation with any person or entity;</li>
            <li>collect, harvest, or store personal data of others without their consent;</li>
            <li>engage in any activity that interferes with or disrupts the Service or the servers and networks connected to the Service;</li>
            <li>attempt to gain unauthorised access to the Service, other accounts, computer systems, or networks connected to the Service;</li>
            <li>use the Service to send unsolicited communications, spam, or other unauthorised marketing;</li>
            <li>generate excessive load on the Service through automated means;</li>
            <li>use the Service for any activity that is illegal, fraudulent, deceptive, or harmful to Opscel, its users, or third parties.</li>
          </ul>

          <p>
            <strong>4.3 Compliance Verification.</strong> Opscel reserves the right (but has no obligation) to monitor use of the Service for compliance with this Agreement. Opscel may suspend or terminate access for any actual or suspected violation without prior notice and without liability to Customer.
          </p>

          <p>
            <strong>4.4 Customer Backups.</strong> Notwithstanding any backup services provided by Opscel, Customer is solely responsible for maintaining its own independent backup copies of all Customer Data critical to its business operations. <strong>Opscel shall not be liable for any loss of Customer Data howsoever caused.</strong>
          </p>
        </div>
      </section>

      {/* 5. Customer Data and Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Customer Data and Privacy</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> You own your data. We host it securely in the UK. You give us permission to process it to provide the Service.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>5.1 Ownership.</strong> As between the parties, Customer retains all right, title, and interest in and to Customer Data. Opscel claims no ownership rights in Customer Data.
          </p>

          <p>
            <strong>5.2 License to Opscel.</strong> Customer hereby grants Opscel a worldwide, non-exclusive, royalty-free license to host, store, transmit, copy, process, display, modify (for technical reasons only, such as format conversion), and otherwise use Customer Data solely as necessary to provide the Service, comply with legal obligations, prevent fraud or abuse, and enforce this Agreement.
          </p>

          <p>
            <strong>5.3 Data Location.</strong> Customer Data is stored in data centres located in the United Kingdom. Customer acknowledges that Customer Data may be transmitted outside the UK to the extent necessary to provide the Service (for example, where Customer accesses the Service from outside the UK or integrates Third-Party Services hosted elsewhere).
          </p>

          <p>
            <strong>5.4 Data Isolation.</strong> The Service employs logical data isolation (including row-level security) to separate Customer Data from other customers&apos; data. <strong>Opscel does not warrant that data isolation is impervious to all possible attacks, vulnerabilities, or breaches.</strong>
          </p>

          <p>
            <strong>5.5 Data Processing.</strong> The processing of personal data within Customer Data is governed by Opscel&apos;s <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>, the UK General Data Protection Regulation, the Data Protection Act 2018, and any applicable Data Processing Addendum executed between the parties.
          </p>

          <p>
            <strong>5.6 Aggregated and Anonymised Data.</strong> Opscel may collect, use, and disclose aggregated, anonymised, or de-identified data derived from Customer&apos;s use of the Service for any business purpose, including service improvement, analytics, benchmarking, and marketing, provided that such data does not identify Customer or any individual.
          </p>

          <p>
            <strong>5.7 Customer Warranties.</strong> Customer represents and warrants that:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Customer has all necessary rights, licenses, consents, and permissions to provide Customer Data to Opscel and to authorise the processing contemplated by this Agreement;</li>
            <li>Customer Data does not infringe, misappropriate, or violate any third-party rights;</li>
            <li>Customer has obtained all necessary consents from data subjects whose personal data is included in Customer Data;</li>
            <li>Customer has provided all required privacy notices to data subjects;</li>
            <li>Customer&apos;s use of the Service complies with all applicable data protection laws.</li>
          </ul>
        </div>
      </section>

      {/* 6. Artificial Intelligence Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Artificial Intelligence Features</h2>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg mb-4">
          <p className="text-amber-900 font-bold mb-2">⚠️ CRITICAL DISCLAIMER REGARDING AI OUTPUTS</p>
          <p className="text-amber-800">
            <strong>AI features within the Service are assistive tools only. They are NOT a substitute for professional judgment, qualified engineering assessment, or independent verification. Customer must independently verify all AI-generated outputs before relying on them for any compliance, safety, professional, or regulatory purpose. Opscel disclaims all liability for any decisions made or actions taken in reliance on AI outputs.</strong>
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>6.1 AI Features.</strong> The Service includes features that use artificial intelligence, machine learning, large language models, and similar technologies (collectively, &quot;<strong>AI Features</strong>&quot;), including without limitation Setup Copilot (workspace setup assistance), Insights (natural-language answers to business questions about Customer&apos;s account), auto-fill, document classification, defect identification suggestions, scheduling optimisation, predictive analytics, and compliance validation suggestions.
          </p>

          <p>
            <strong>6.2 AS-IS Provision.</strong> AI Features are provided on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis. Opscel makes no representations or warranties of any kind regarding the accuracy, reliability, completeness, timeliness, or fitness for purpose of any AI-generated content.
          </p>

          <p>
            <strong>6.3 Hallucinations and Errors.</strong> Customer acknowledges and accepts that AI Features may produce inaccurate, incomplete, misleading, biased, or fabricated outputs (commonly known as &quot;hallucinations&quot;). Customer is solely responsible for reviewing, validating, and verifying all AI-generated outputs before any reliance, distribution, or action.
          </p>

          <p>
            <strong>6.4 Professional Verification Required.</strong> AI outputs relating to electrical or fire safety compliance (including but not limited to Zs values, RCD requirements, certificate validation, defect codes, observation classifications) must be independently verified by a qualified professional against the relevant British Standards. <strong>Failure to independently verify AI outputs is at Customer&apos;s sole risk.</strong>
          </p>

          <p>
            <strong>6.5 No Liability for AI Outputs.</strong> Without limiting Section 14, Opscel shall have no liability whatsoever for any loss, damage, claim, fine, penalty, regulatory action, professional sanction, certificate invalidation, safety incident, injury, or any other consequence arising from or related to Customer&apos;s use of, reliance on, or distribution of AI-generated outputs.
          </p>

          <p>
            <strong>6.6 No Model Training.</strong> Opscel does not use Customer Data to train AI models — not for Customer&apos;s own tenant, not for other customers, and not for general model improvement. Data sent to power an AI Feature is used only to produce the requested output. Conversations with Insights are retained for 30 days and with Setup Copilot for 90 days, after which they are deleted; every Insights query is recorded in Customer&apos;s audit log against the user who made it.
          </p>

          <p>
            <strong>6.7 Third-Party AI.</strong> AI Features are powered by Anthropic, PBC, acting as Opscel&apos;s sub-processor, and Customer Data sent to power them is never combined with or made visible to another Opscel customer. AI Features do not modify Customer&apos;s account directly — they may propose a change, which a member of Customer&apos;s team must then choose to apply. Full detail on what is sent, to whom, and for how long is set out in section 5.3 of Opscel&apos;s <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>. Anthropic and any other third-party AI provider is subject to its own terms of service, and Opscel is not liable for the acts, omissions, or outputs of third-party AI providers.
          </p>
        </div>
      </section>

      {/* 7. Third-Party Services */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Third-Party Services and Integrations</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> Opscel integrates with services like Xero, Telegram, and calendars. These are independent third-party services. Opscel has no control over them and is not responsible if they fail.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>7.1 Third-Party Services.</strong> The Service may integrate with or facilitate access to Third-Party Services, including without limitation Xero, QuickBooks, Telegram, Google Calendar, Microsoft 365, ICS calendar feeds, and payment processors. Such Third-Party Services are provided by independent third parties and not by Opscel.
          </p>

          <p>
            <strong>7.2 Third-Party Terms.</strong> Customer&apos;s use of Third-Party Services is governed by the terms of service, privacy policies, and other terms imposed by those third-party providers. Customer is solely responsible for reviewing and complying with such terms.
          </p>

          <p>
            <strong>7.3 No Endorsement.</strong> Opscel&apos;s integration with Third-Party Services does not constitute endorsement, approval, or warranty of those services or their providers.
          </p>

          <p>
            <strong>7.4 No Liability for Third-Party Services.</strong> <strong>OPSCEL SHALL HAVE NO LIABILITY WHATSOEVER FOR:</strong>
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>the availability, functionality, accuracy, security, or performance of any Third-Party Service;</li>
            <li>any modification, suspension, discontinuation, or termination of any Third-Party Service;</li>
            <li>any data loss, corruption, breach, or unauthorised disclosure occurring within or caused by any Third-Party Service;</li>
            <li>any acts, omissions, breaches, or failures of any Third-Party Service provider;</li>
            <li>any fees, charges, or costs imposed by Third-Party Service providers;</li>
            <li>any incompatibility or conflict between Third-Party Services and the Service;</li>
            <li>any loss or damage arising from Customer&apos;s use of or inability to use any Third-Party Service.</li>
          </ul>

          <p>
            <strong>7.5 Integration Changes.</strong> Opscel may add, modify, suspend, or discontinue any integration with any Third-Party Service at any time, with or without notice, and without liability to Customer.
          </p>

          <p>
            <strong>7.6 Data Sharing with Third Parties.</strong> By enabling an integration, Customer authorises Opscel to share relevant Customer Data with the applicable Third-Party Service. Customer Data shared with Third-Party Services is subject to those providers&apos; privacy policies and terms.
          </p>
        </div>
      </section>

      {/* 8. Mobile Progressive Web App */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Mobile Application and Offline Functionality</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> The field app works offline and syncs when reconnected. You&apos;re responsible for device security, network charges, and any data lost if your device is damaged before syncing.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>8.1 PWA Service.</strong> The Service includes a Progressive Web Application (&quot;<strong>PWA</strong>&quot;) accessible through compatible web browsers on mobile and desktop devices, providing offline functionality for field engineers.
          </p>

          <p>
            <strong>8.2 Offline Mode.</strong> The PWA caches data locally on the user&apos;s device to enable offline use. Changes made offline are queued and transmitted to the Service when network connectivity is restored.
          </p>

          <p>
            <strong>8.3 No Warranty for Offline Sync.</strong> <strong>Opscel does not warrant that offline data will sync successfully or without delay, corruption, or loss.</strong> Customer accepts all risk arising from offline use, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>data loss due to device damage, loss, theft, factory reset, browser cache clearing, or storage exhaustion;</li>
            <li>sync failures due to network interruption, server unavailability, or browser limitations;</li>
            <li>data conflicts arising from concurrent edits on multiple devices;</li>
            <li>delays in sync that may affect timeliness of compliance records.</li>
          </ul>

          <p>
            <strong>8.4 Device Security.</strong> Customer is solely responsible for the security of all devices used to access the Service, including without limitation: enabling device passwords, biometric authentication, remote wipe functionality, and disk encryption. Customer must notify Opscel immediately upon discovering any actual or suspected unauthorised access or device loss.
          </p>

          <p>
            <strong>8.5 Network Costs.</strong> Customer is solely responsible for all network access costs, including mobile data charges, Wi-Fi fees, and roaming charges incurred while using the Service.
          </p>

          <p>
            <strong>8.6 Device Compatibility.</strong> Opscel does not warrant that the PWA will function on all devices, operating systems, or browsers. Customer is responsible for ensuring its devices meet the minimum technical requirements specified in the Documentation.
          </p>
        </div>
      </section>

      {/* 9. Beta and Experimental Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Beta and Experimental Features</h2>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg mb-4">
          <p className="text-amber-900 font-bold mb-2">⚠️ BETA FEATURES ARE PROVIDED &quot;AS-IS&quot; WITHOUT ANY WARRANTY</p>
          <p className="text-amber-800">
            <strong>Customer uses beta features entirely at its own risk. Opscel makes no representations regarding their reliability, performance, security, or suitability for any purpose.</strong>
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>9.1 Beta Features.</strong> Opscel may from time to time make available features labelled as &quot;Beta&quot;, &quot;Preview&quot;, &quot;Experimental&quot;, &quot;Alpha&quot;, &quot;Early Access&quot;, or similar (collectively, &quot;<strong>Beta Features</strong>&quot;).
          </p>

          <p>
            <strong>9.2 No Warranty.</strong> BETA FEATURES ARE PROVIDED &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; WITHOUT ANY WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. Opscel expressly disclaims all warranties with respect to Beta Features, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, reliability, and non-infringement.
          </p>

          <p>
            <strong>9.3 No Liability.</strong> WITHOUT LIMITING SECTION 14, OPSCEL SHALL HAVE NO LIABILITY WHATSOEVER FOR ANY LOSS, DAMAGE, OR HARM ARISING FROM OR RELATED TO BETA FEATURES, INCLUDING WITHOUT LIMITATION DATA LOSS, COMPLIANCE FAILURES, OR BUSINESS DISRUPTION.
          </p>

          <p>
            <strong>9.4 Discontinuation.</strong> Opscel may modify, restrict, suspend, or permanently discontinue Beta Features at any time, with or without notice, and without liability to Customer. Beta Features may never reach general availability.
          </p>

          <p>
            <strong>9.5 Feedback License.</strong> If Customer provides feedback, suggestions, ideas, or comments regarding Beta Features (&quot;<strong>Feedback</strong>&quot;), Customer hereby grants Opscel a perpetual, irrevocable, worldwide, royalty-free, fully paid-up, sublicensable license to use, reproduce, modify, distribute, and commercialise such Feedback for any purpose, without any obligation of attribution or compensation.
          </p>
        </div>
      </section>

      {/* 10. Service Availability */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. Service Availability and Support</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> We aim for high uptime but do not guarantee it. Service may be unavailable for maintenance or other reasons. Check status.opscel.com for real-time status.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>10.1 No Uptime Guarantee.</strong> <strong>Opscel does not warrant or guarantee any specific level of uptime, availability, response time, or service quality.</strong> The Service may be unavailable from time to time due to scheduled maintenance, emergency maintenance, system upgrades, network issues, third-party failures, force majeure events, or other causes.
          </p>

          <p>
            <strong>10.2 Maintenance.</strong> Opscel reserves the right to perform scheduled and emergency maintenance at any time. Where reasonably practicable, Opscel will provide advance notice of scheduled maintenance via email or in-Service notification. No prior notice is required for emergency maintenance.
          </p>

          <p>
            <strong>10.3 Service Modifications.</strong> Opscel reserves the right at any time to modify, enhance, replace, or discontinue any feature, functionality, or component of the Service, with or without notice. Opscel shall have no liability for any such modifications.
          </p>

          <p>
            <strong>10.4 Support.</strong> Opscel provides commercially reasonable email-based support at <a href="mailto:support@opscel.com" className="text-secondary hover:underline">support@opscel.com</a> during business hours. Support response times are not guaranteed and may vary by Subscription tier.
          </p>

          <p>
            <strong>10.5 No Service Credits.</strong> Unless expressly stated in a separate written Service Level Agreement signed by both parties, Customer shall not be entitled to any service credits, refunds, or other compensation for any unavailability or interruption of the Service.
          </p>
        </div>
      </section>

      {/* 11. Intellectual Property */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">11. Intellectual Property Rights</h2>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>11.1 Opscel Property.</strong> The Service, and all software, code, designs, interfaces, graphics, text, audio, video, templates, structures, methods, algorithms, models, trade secrets, know-how, patents, copyrights, trademarks, service marks, trade names, and all other intellectual property and proprietary rights related thereto (collectively, &quot;<strong>Opscel IP</strong>&quot;), are and shall remain the exclusive property of Opscel and its licensors. All rights not expressly granted to Customer are reserved.
          </p>

          <p>
            <strong>11.2 Trademarks.</strong> &quot;Opscel&quot;, the Opscel logo, and all other names, logos, designs, slogans, and trade dress used in connection with the Service are trademarks or registered trademarks of Opscel Limited. Customer may not use any Opscel trademarks without prior written consent.
          </p>

          <p>
            <strong>11.3 No Implied Licenses.</strong> No license or right is granted by implication, estoppel, or otherwise, except as expressly set out in this Agreement.
          </p>

          <p>
            <strong>11.4 Improvements.</strong> Any improvements, modifications, enhancements, or derivative works of the Service developed by or for Opscel, whether based on Customer Feedback or otherwise, shall be the exclusive property of Opscel.
          </p>
        </div>
      </section>

      {/* 12. Confidentiality */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">12. Confidentiality</h2>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>12.1 Obligations.</strong> Each party (the &quot;Recipient&quot;) shall: (a) hold the Confidential Information of the other party (the &quot;Discloser&quot;) in strict confidence; (b) use such Confidential Information only for the purposes of this Agreement; and (c) not disclose such Confidential Information to any third party without the Discloser&apos;s prior written consent, except as required by law or to its employees, contractors, and advisors on a need-to-know basis under equivalent confidentiality obligations.
          </p>

          <p>
            <strong>12.2 Exceptions.</strong> Confidential Information does not include information that: (a) is or becomes publicly known through no fault of the Recipient; (b) was lawfully known to the Recipient prior to disclosure; (c) is independently developed by the Recipient without reference to the Confidential Information; or (d) is received from a third party without breach of any obligation of confidentiality.
          </p>

          <p>
            <strong>12.3 Required Disclosure.</strong> If the Recipient is required by law, court order, or regulatory authority to disclose Confidential Information, the Recipient shall, where lawfully permitted, give the Discloser prompt written notice to allow the Discloser to seek a protective order.
          </p>
        </div>
      </section>

      {/* 13. Term, Termination, and Suspension */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">13. Term, Termination, and Suspension</h2>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground italic">
            <strong>In plain English:</strong> You can cancel anytime. We can terminate for breaches. After termination, your data is kept for 30 days then permanently deleted.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>13.1 Term.</strong> This Agreement commences upon Customer&apos;s acceptance and continues until terminated in accordance with this Section 13. Subscriptions automatically renew on a monthly basis unless cancelled.
          </p>

          <p>
            <strong>13.2 Cancellation by Customer.</strong> Customer may cancel its Subscription at any time through Account settings or by contacting <a href="mailto:support@opscel.com" className="text-secondary hover:underline">support@opscel.com</a>. Cancellation takes effect at the end of the then-current billing period. No refund or pro-rata credit shall be issued for cancellation.
          </p>

          <p>
            <strong>13.3 Suspension and Termination by Opscel.</strong> Opscel may, at its sole discretion and without liability to Customer, suspend or terminate Customer&apos;s access to all or part of the Service immediately and without notice if:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Customer breaches any provision of this Agreement;</li>
            <li>Customer fails to pay any Subscription Fees when due;</li>
            <li>Opscel reasonably suspects Customer of fraud, unlawful conduct, or violation of the Acceptable Use provisions;</li>
            <li>Customer&apos;s use poses a security, legal, or reputational risk to Opscel, other customers, or third parties;</li>
            <li>Required by law, regulation, or court order;</li>
            <li>For any other reason upon 30 days&apos; written notice.</li>
          </ul>

          <p>
            <strong>13.4 Effect of Termination.</strong> Upon termination or expiration of this Agreement:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>all licenses and rights granted to Customer immediately terminate;</li>
            <li>Customer shall immediately cease all use of the Service;</li>
            <li>Customer Data shall be retained in production systems for 30 days, during which time Customer may export Customer Data (subject to Opscel&apos;s reasonable cooperation);</li>
            <li>after 30 days, Customer Data may be permanently deleted from production systems; backup copies may persist for up to 90 additional days before deletion;</li>
            <li>Customer remains liable for all fees accrued prior to termination;</li>
            <li>Sections 1, 2.2, 2.3, 3.4, 3.5, 4.1, 4.4, 5, 6, 7.4, 9.3, 11, 12, 14, 15, 16, and 17 survive termination.</li>
          </ul>

          <p>
            <strong>13.5 No Liability for Termination.</strong> Opscel shall have no liability to Customer or any third party for any termination, suspension, or limitation of access to the Service in accordance with this Agreement.
          </p>
        </div>
      </section>

      {/* 14. Warranties and Disclaimers */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">14. Warranties and Disclaimers</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
          <p className="text-red-900 font-bold mb-2">⚠️ COMPREHENSIVE WARRANTY DISCLAIMER</p>
          <p className="text-red-900 uppercase text-sm font-semibold">
            THE SERVICE IS PROVIDED &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>14.1 Disclaimer of Warranties.</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OPSCEL AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SUPPLIERS:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>PROVIDE THE SERVICE STRICTLY ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS;</li>
            <li>EXPRESSLY DISCLAIM ALL WARRANTIES, CONDITIONS, REPRESENTATIONS, OR TERMS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, RELIABILITY, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.</li>
          </ul>

          <p>
            <strong>14.2 No Specific Warranties.</strong> Without limiting Section 14.1, Opscel makes no warranty, representation, or guarantee that:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>the Service will meet Customer&apos;s requirements or expectations;</li>
            <li>the Service will be uninterrupted, timely, secure, error-free, or free of viruses or other harmful code;</li>
            <li>any defects in the Service will be corrected;</li>
            <li>any data, content, output, or result obtained through the Service will be accurate, complete, reliable, or timely;</li>
            <li>AI-generated outputs will be accurate, reliable, complete, or fit for purpose;</li>
            <li>certificates, documents, or compliance records generated through the Service will be accepted by any regulatory authority, certification body, customer, or third party;</li>
            <li>the Service or any data therein is suitable for use in any safety-critical, life-critical, or high-risk application.</li>
          </ul>

          <p>
            <strong>14.3 Customer&apos;s Sole Risk.</strong> Customer expressly agrees that use of the Service is at Customer&apos;s sole risk. Customer is solely responsible for any decisions, actions, or omissions made in reliance on the Service.
          </p>

          <p>
            <strong>14.4 No Professional Services.</strong> Opscel is a software service provider only. Opscel does not provide legal advice, engineering consultancy, compliance certification, professional indemnification, or any regulated professional services.
          </p>

          <p>
            <strong>14.5 Statutory Rights.</strong> Nothing in this Agreement shall exclude or limit any warranties, representations, conditions, or terms implied by law that cannot be excluded or limited by contract. Where any such non-excludable terms apply, Opscel&apos;s liability shall be limited to the maximum extent permitted by law.
          </p>
        </div>
      </section>

      {/* 15. Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">15. Limitation of Liability</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
          <p className="text-red-900 font-bold mb-2 uppercase">⚠️ LIMITATION OF LIABILITY — READ CAREFULLY</p>
          <p className="text-red-900 text-sm">
            <strong>Opscel&apos;s total aggregate liability is strictly capped. Many categories of loss are entirely excluded. Customer should obtain independent legal advice if this clause is unclear.</strong>
          </p>
        </div>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>15.1 Exclusion of Indirect and Consequential Loss.</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OPSCEL, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, OR SUPPLIERS BE LIABLE TO CUSTOMER OR ANY THIRD PARTY FOR:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>any indirect, special, incidental, punitive, exemplary, or consequential loss or damage;</li>
            <li>any loss of profits, revenue, savings, business opportunity, anticipated savings, contracts, or business;</li>
            <li>any loss of goodwill, reputation, or anticipated benefit;</li>
            <li>any loss, corruption, destruction, or unauthorised disclosure of data or information (including without limitation Customer Data);</li>
            <li>any loss arising from business interruption, downtime, or system failure;</li>
            <li>any loss arising from reliance on AI Features, AI-generated outputs, or automated suggestions;</li>
            <li>any loss arising from errors, inaccuracies, or omissions in certificates, compliance records, or documentation generated through the Service;</li>
            <li>any loss arising from regulatory action, certification revocation, professional sanction, or third-party claims;</li>
            <li>any loss arising from safety incidents, injuries, property damage, or harm of any kind;</li>
            <li>any loss arising from Third-Party Services or integrations;</li>
            <li>any loss arising from Force Majeure Events;</li>
            <li>any loss arising from Beta Features or experimental functionality;</li>
            <li>any loss arising from Customer&apos;s failure to maintain backups, secure devices, or comply with this Agreement,
            </li>
          </ul>
          <p>
            in each case whether arising under contract, tort (including negligence), statute, restitution, or otherwise, and whether or not Opscel was advised of, knew of, or should have known of the possibility of such loss or damage.
          </p>

          <p>
            <strong>15.2 Aggregate Liability Cap.</strong> SUBJECT TO SECTION 15.4, OPSCEL&apos;S TOTAL CUMULATIVE LIABILITY TO CUSTOMER UNDER OR IN CONNECTION WITH THIS AGREEMENT, WHETHER ARISING IN CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF STATUTORY DUTY, MISREPRESENTATION, OR OTHERWISE, SHALL NOT EXCEED THE LESSER OF:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li><strong>(a)</strong> THE TOTAL SUBSCRIPTION FEES ACTUALLY PAID BY CUSTOMER TO OPSCEL IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR</li>
            <li><strong>(b)</strong> ONE HUNDRED POUNDS STERLING (£100).</li>
          </ul>

          <p>
            <strong>15.3 Customer Acknowledgement.</strong> Customer acknowledges and agrees that the limitations of liability and disclaimers of warranty set out in Sections 14 and 15 are fundamental elements of the basis of the bargain between the parties; that the Subscription Fees would be substantially higher without such limitations; and that Customer has had the opportunity to obtain independent legal advice. The allocations of risk in this Agreement shall apply notwithstanding the failure of essential purpose of any limited remedy.
          </p>

          <p>
            <strong>15.4 Non-Excludable Liability.</strong> Nothing in this Agreement shall exclude or limit liability for:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>death or personal injury caused by negligence;</li>
            <li>fraud or fraudulent misrepresentation;</li>
            <li>any other liability that cannot be excluded or limited by applicable law.</li>
          </ul>

          <p>
            <strong>15.5 Time Bar.</strong> Any claim arising out of or in connection with this Agreement must be brought within twelve (12) months after the cause of action accrues. Claims not brought within this period are permanently barred.
          </p>

          <p>
            <strong>15.6 Multiple Claims.</strong> The limitation of liability in Section 15.2 applies in aggregate to all claims, whether arising from one event or a series of related events.
          </p>
        </div>
      </section>

      {/* 16. Indemnification */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">16. Indemnification by Customer</h2>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>16.1 Indemnity.</strong> Customer shall defend, indemnify, and hold harmless Opscel and its Affiliates, officers, directors, employees, agents, contractors, licensors, and suppliers (collectively, the &quot;<strong>Indemnified Parties</strong>&quot;) from and against any and all claims, demands, suits, proceedings, judgments, settlements, losses, liabilities, damages, fines, penalties, costs, and expenses (including reasonable legal fees and disbursements) (&quot;<strong>Losses</strong>&quot;) arising out of or in connection with:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Customer&apos;s or any Authorised User&apos;s use of or access to the Service;</li>
            <li>Customer Data, including any claim that Customer Data infringes, misappropriates, or violates any third-party right (including intellectual property, privacy, or publicity rights);</li>
            <li>any breach by Customer of this Agreement, including without limitation the warranties in Section 5.7 and the Acceptable Use provisions in Section 4;</li>
            <li>any violation of applicable law, regulation, British Standard, industry code, or accreditation requirement by Customer or any Authorised User;</li>
            <li>any decision, action, omission, certificate, or compliance record generated, issued, or relied upon by Customer or any third party in connection with the Service;</li>
            <li>any dispute between Customer and any of its customers, employees, contractors, suppliers, regulators, or other third parties;</li>
            <li>any unauthorised access to Customer&apos;s Account resulting from Customer&apos;s failure to maintain credential security;</li>
            <li>any negligence, wilful misconduct, or fraud by Customer or any Authorised User.</li>
          </ul>

          <p>
            <strong>16.2 Procedure.</strong> Opscel shall: (a) promptly notify Customer of any claim subject to indemnification; (b) grant Customer sole control over the defence and settlement of the claim, provided that no settlement may impose any liability or obligation on Opscel without Opscel&apos;s prior written consent; and (c) provide Customer with reasonable cooperation in the defence at Customer&apos;s expense. Opscel reserves the right, at Customer&apos;s expense, to assume the exclusive defence and control of any matter otherwise subject to indemnification by Customer.
          </p>

          <p>
            <strong>16.3 No Limitation.</strong> Customer&apos;s indemnification obligations under this Section 16 are not subject to the limitations of liability in Section 15.
          </p>
        </div>
      </section>

      {/* 17. General Provisions */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">17. General Provisions</h2>

        <div className="space-y-4 text-foreground-accent">
          <p>
            <strong>17.1 Entire Agreement.</strong> This Agreement, together with the <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>, <Link href="/terms" className="text-secondary hover:underline">Terms of Service</Link>, and any other documents expressly incorporated by reference, constitutes the entire agreement between the parties regarding the Service and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings (whether written or oral). In the event of any conflict, this EULA shall prevail with respect to software licensing matters.
          </p>

          <p>
            <strong>17.2 Amendments.</strong> Opscel may amend this Agreement at any time by posting an updated version at <a href="https://www.opscel.com/eula" className="text-secondary hover:underline">www.opscel.com/eula</a>. Material amendments shall be notified by email or in-Service notification at least 30 days prior to taking effect. Continued use of the Service after the effective date constitutes acceptance of the amended Agreement. If Customer does not agree to an amendment, Customer&apos;s sole remedy is to cancel its Subscription before the amendment takes effect.
          </p>

          <p>
            <strong>17.3 No Variation by Customer.</strong> No variation, addition, or modification to this Agreement proposed by Customer (including in any purchase order, invoice, or other Customer document) shall be binding on Opscel unless expressly accepted in writing signed by an authorised representative of Opscel.
          </p>

          <p>
            <strong>17.4 Severability.</strong> If any provision of this Agreement is held to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if modification is not possible, severed from this Agreement. The remaining provisions shall continue in full force and effect.
          </p>

          <p>
            <strong>17.5 Waiver.</strong> No failure or delay by either party in exercising any right under this Agreement shall constitute a waiver of that right. No waiver shall be effective unless in writing signed by the waiving party.
          </p>

          <p>
            <strong>17.6 Assignment.</strong> Customer may not assign, transfer, novate, sublicense, or otherwise dispose of its rights or obligations under this Agreement without Opscel&apos;s prior written consent. Opscel may assign, transfer, or novate this Agreement (or any part of it) to any Affiliate or to any acquirer of all or substantially all of Opscel&apos;s business or assets without Customer&apos;s consent.
          </p>

          <p>
            <strong>17.7 Force Majeure.</strong> Neither party shall be liable for any failure or delay in performance to the extent caused by any event beyond its reasonable control, including without limitation acts of God, natural disasters, fires, floods, earthquakes, pandemics, epidemics, wars, terrorism, civil unrest, governmental action, embargoes, strikes, labour disputes, internet or telecommunications failures, denial-of-service attacks, cyber-attacks, third-party service failures, or shortages of utilities, components, or supplies (&quot;<strong>Force Majeure Event</strong>&quot;).
          </p>

          <p>
            <strong>17.8 Notices.</strong> Notices to Opscel shall be sent by email to <a href="mailto:privacy@opscel.com" className="text-secondary hover:underline">privacy@opscel.com</a>. Notices to Customer shall be sent to the email address on file for the Account. Notices are deemed received upon transmission unless the sender receives a delivery failure notification.
          </p>

          <p>
            <strong>17.9 Independent Contractors.</strong> The parties are independent contractors. Nothing in this Agreement creates any partnership, joint venture, agency, fiduciary, or employment relationship between the parties.
          </p>

          <p>
            <strong>17.10 No Third-Party Beneficiaries.</strong> A person who is not a party to this Agreement has no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of this Agreement, except that Opscel&apos;s Affiliates, officers, directors, employees, agents, and licensors may enforce Sections 14, 15, and 16 in their own right.
          </p>

          <p>
            <strong>17.11 Export Controls.</strong> Customer shall comply with all applicable export control, sanctions, and trade laws, including UK export controls and HM Treasury sanctions. Customer represents that it is not located in, and is not a resident or national of, any country subject to UK or international sanctions or embargoes.
          </p>

          <p>
            <strong>17.12 Governing Law.</strong> This Agreement and any dispute or claim arising out of or in connection with it (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles.
          </p>

          <p>
            <strong>17.13 Jurisdiction.</strong> Each party irrevocably submits to the exclusive jurisdiction of the courts of England and Wales for the resolution of any dispute or claim arising out of or in connection with this Agreement.
          </p>

          <p>
            <strong>17.14 Language.</strong> This Agreement is drafted in the English language. In the event of any translation, the English version shall prevail.
          </p>
        </div>
      </section>

      {/* 18. Contact Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">18. Contact Information</h2>

        <div className="space-y-3 text-foreground-accent">
          <p>If you have questions about this Agreement, please contact us:</p>

          <div className="bg-muted p-6 rounded-lg">
            <p className="font-semibold mb-2">Opscel Limited</p>
            <p>Company Number: {companyDetails.companiesHouseNumber}</p>
            <p>Registered in England and Wales</p>
            <p className="mt-4">
              <strong>General enquiries:</strong> <a href="mailto:hello@opscel.com" className="text-secondary hover:underline">hello@opscel.com</a>
            </p>
            <p>
              <strong>Support:</strong> <a href="mailto:support@opscel.com" className="text-secondary hover:underline">support@opscel.com</a>
            </p>
            <p>
              <strong>Legal and data protection:</strong> <a href="mailto:privacy@opscel.com" className="text-secondary hover:underline">privacy@opscel.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Acknowledgement */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <p className="text-blue-900 font-semibold mb-2">By accessing or using the Service, Customer acknowledges that:</p>
        <ul className="list-disc list-inside space-y-2 text-blue-800 ml-4">
          <li>Customer has read, understood, and agrees to be bound by every provision of this Agreement;</li>
          <li>Customer has had the opportunity to seek independent legal advice prior to acceptance;</li>
          <li>Customer has authority to enter into this Agreement on behalf of any organisation it represents;</li>
          <li>This Agreement is a legally binding contract enforceable in accordance with its terms;</li>
          <li>Customer specifically acknowledges and accepts the limitations of liability in Section 15 and the warranty disclaimers in Section 14.</li>
        </ul>
        <p className="text-blue-800 mt-4 text-sm">
          <strong>Last updated:</strong> 24 May 2026
        </p>
      </div>
    </LegalPage>
  );
};

export default EULAPage;
