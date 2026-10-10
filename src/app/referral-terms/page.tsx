import { Metadata } from 'next';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  title: `Referral Programme Terms | ${siteDetails.siteName}`,
  description:
    'The terms of the Opscel Referral Programme: who can refer, when a referral earns a £150 John Lewis eGift card, the caps, and how we handle your information.',
};

// The numbers and wording on this page mirror REFERRAL_OFFER in the app
// (opscel-starter-kit lib/referrals/offer.ts). Change both together, and bump the app's
// termsVersion to the version below whenever this page changes.
const TERMS_VERSION = '2026-10-10';

const ReferralTermsPage: React.FC = () => {
  const name = companyDetails.tradingName;
  const supportEmail = companyDetails.contact.supportEmail;
  const privacyEmail = companyDetails.compliance.dataProtectionOfficerEmail;

  return (
    <LegalPage title="Referral Programme Terms" lastUpdated="10 October 2026">
      <p>
        These terms apply to the {name} Referral Programme. The programme is run by{' '}
        <strong>{companyDetails.registeredName}</strong> ({getFormattedRegisteredAddress()}; company number{' '}
        {companyDetails.companiesHouseNumber}). Our main <a href="https://www.opscel.com/terms">terms of service</a>{' '}
        and <a href="https://www.opscel.com/privacy">privacy policy</a> also apply. Terms version: {TERMS_VERSION}.
      </p>

      <h2>In short</h2>
      <ul>
        <li>Share your invite link or code with another business.</li>
        <li>
          If that business signs up to {name} and its subscription pays at least <strong>£150</strong>, and at least{' '}
          <strong>60 days</strong> have passed since its first payment, you can get{' '}
          <strong>a £150 John Lewis eGift card</strong>.
        </li>
        <li>Every reward is checked and approved by the {name} team before it is sent.</li>
      </ul>

      <h2>Who can refer</h2>
      <p>
        Where the programme is open to your business, anyone with an active {name} account in any role except Viewer
        can refer, including employees and engineers.
        Your invite link and code belong to you within the business you share them from. If you belong to more than
        one business on {name}, you have a separate code in each.
      </p>
      <p>The reward goes to you, the person who shared the link or code, not to your business.</p>

      <h2>How a referral is counted</h2>
      <ul>
        <li>
          The new business must be created by someone who followed your invite link and pressed{' '}
          <strong>Continue</strong>, or who entered your code while setting up their business.
        </li>
        <li>
          Pressing Continue saves the invite on that device for <strong>30 days</strong>. If someone follows more than
          one invite link before signing up, the last one they continue with counts. A code entered while setting up
          takes precedence over a link.
        </li>
        <li>A business can only be referred once. The first referral recorded for it is the one that counts.</li>
        <li>
          When the new business reaches its first set-up screen, the referral is linked to it automatically. The
          business is shown who referred it and can remove the referral there. A removed referral cannot be added
          back.
        </li>
      </ul>

      <h2>Referrals that do not count</h2>
      <ul>
        <li>Referring yourself, or a business you created.</li>
        <li>
          Referring a business whose creator is, or in the last 12 months was, a member of your business on {name},
          or has an open invitation to join it.
        </li>
        <li>
          A business any of whose team members is, or has been, a member of your business on {name}. We check this
          again before a reward is approved.
        </li>
        <li>A business that had already finished setting up on {name} before the referral.</li>
        <li>{name} demonstration and test accounts.</li>
        <li>A referral made with a code that has been withdrawn, or while the programme is paused or closed.</li>
      </ul>

      <h2>When a referral earns a reward</h2>
      <p>A referral qualifies when all of the following are true:</p>
      <ul>
        <li>
          the referred business&apos;s {name} subscription has paid at least <strong>£150</strong> on its own
          invoices, after any refunds and credit notes;
        </li>
        <li>
          at least <strong>60 days</strong> have passed since its first paid invoice; and
        </li>
        <li>the subscription is still active, is not set to cancel, and has no unpaid invoices.</li>
      </ul>
      <p>
        If the referred business has not made a payment within <strong>120 days</strong> of signing up, the referral
        expires. If its subscription is cancelled or set to cancel, is paused, falls overdue, or a payment is
        refunded or disputed before your gift card is sent, we may cancel the referral and any reward for it.
      </p>

      <h2>The reward</h2>
      <ul>
        <li>
          The reward is <strong>a £150 John Lewis eGift card</strong>, sent by email. It is not cash, {name} account
          credit or a discount, and we do not offer any alternative to it.
        </li>
        <li>The gift card is subject to the terms of John Lewis, which issues it.</li>
        <li>
          When a reward is approved, we will ask you in {name} for your name and the email address the gift card
          should go to, and to accept these terms. We buy the gift card and send it after that.
        </li>
        <li>
          A reward may be forfeited if you do not give these details within <strong>90 days</strong> of its approval,
          or if your membership of the business you referred from, or that business&apos;s {name} account, ends
          before the gift card is sent.
        </li>
        <li>Once a gift card has been sent to the email address you gave, we cannot recall or replace it.</li>
      </ul>

      <h2>Limits</h2>
      <p>
        Each person can receive at most <strong>10</strong> rewards, and each referring business at most{' '}
        <strong>50</strong> rewards across all its people, in a calendar year (UK time, counted by the date a reward
        is approved). Cancelled and forfeited rewards do not count. We may choose to approve rewards beyond these
        limits.
      </p>

      <h2>Tax</h2>
      <p>
        <strong>
          This reward may be taxable. You are responsible for any tax due on it and should get independent advice if
          unsure.
        </strong>
      </p>

      <h2>What the referred business gets</h2>
      <p>
        The business you refer gets the same free trial and offers as anyone else who signs up to {name}. It does not
        get an extra reward.
      </p>

      <h2>What you will see</h2>
      <p>
        In {name} you will see the name of each business you referred and where its referral has got to: Joined,
        Qualified, Reward approved, Gift card sent, or Not eligible. You will never see its plan, prices or billing.
      </p>

      <h2>Sharing fairly</h2>
      <ul>
        <li>
          Share your link or code personally, with people you know or deal with. Do not send it in bulk to people who
          have not asked for it, buy advertising with it, or pretend to be {name}.
        </li>
        <li>{name} never contacts the people you share with on your behalf.</li>
        <li>
          We may refuse or cancel a referral or reward, or withdraw a code, if we reasonably believe these terms have
          been broken, for example a business set up to earn a reward, a referral between people in the same business,
          or misleading sharing. We decide whether a referral qualifies, applying these terms fairly.
        </li>
      </ul>

      <h2>Your information</h2>
      <ul>
        <li>
          <strong>On the invite page.</strong> Nothing is saved until you press Continue. Pressing it saves two
          cookies on your device for 30 days: the invite, and a random identifier for the device. We record that the
          invite was used, with the type of device (mobile or desktop) but never your IP address.
          {/* OWNER: add "We delete that record after 180 days." once the reconcile cron's click prune (referral
              plan PR 5) is live. Until then it would be a promise nothing keeps. */}
        </li>
        <li>
          <strong>When a referral is made.</strong> The referring person sees the referred business&apos;s name, as
          described above. The business that signs up sees the name of the business that referred it.
        </li>
        <li>
          <strong>For a reward.</strong> We use the name and email address you give to send the gift card, to keep a
          record of it, and to check for misuse of the programme (for example the same email address on several
          rewards). Only the {name} staff who handle rewards see them; no one in your business does.
        </li>
      </ul>
      <p>
        The two cookies are set only because you choose to press Continue. We use the rest of this information under
        our legitimate interest in running the programme and preventing misuse, and your reward details to carry out
        these terms with you.
      </p>
      <p>
        For questions about your information, or to ask us to delete it, contact{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. Our{' '}
        <a href="https://www.opscel.com/privacy">privacy policy</a> explains your rights.
      </p>

      <h2>Changes and ending the programme</h2>
      <p>
        We may change these terms, or pause or end the programme, at any time. Changes apply to referrals made after
        we publish them. If we pause or end the programme, rewards we have already approved will still be handled under
        these terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about the programme: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </LegalPage>
  );
};

export default ReferralTermsPage;
