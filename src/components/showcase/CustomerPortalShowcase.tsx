import React from 'react';
import clsx from 'clsx';
import {
  FiCalendar,
  FiClock,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiMail,
} from 'react-icons/fi';

/**
 * Hand-built UI illustrations of the customer portal — not screenshots.
 * Four "device-like" panels (browser frame / mail client frame) built from
 * pure JSX + Tailwind, using the site's design tokens. Every panel is
 * wrapped with role="img" + aria-label so a screen reader gets one concise
 * description instead of navigating fake, non-interactive UI — the visible
 * text stays real text underneath for SEO and for sighted readers.
 */

const panelClass =
  'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm';

const BrowserChrome: React.FC<{ url: string }> = ({ url }) => (
  <div
    aria-hidden="true"
    className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5"
  >
    <span className="h-2.5 w-2.5 rounded-full bg-border" />
    <span className="h-2.5 w-2.5 rounded-full bg-border" />
    <span className="h-2.5 w-2.5 rounded-full bg-border" />
    <span className="ml-2 flex-1 truncate rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.6875rem] text-muted-foreground">
      {url}
    </span>
  </div>
);

const StatTile: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-lg border border-border bg-muted p-3 text-center">
    <p className="font-mono text-xl font-extrabold text-secondary">{value}</p>
    <p className="mt-1 text-[0.6875rem] leading-tight text-muted-foreground">{label}</p>
  </div>
);

const TierCard: React.FC<{ name: string; price: string; selected?: boolean }> = ({
  name,
  price,
  selected,
}) => (
  <div
    className={clsx(
      'flex items-center justify-between rounded-lg border px-3 py-2.5',
      selected ? 'border-secondary bg-secondary/5' : 'border-border bg-card'
    )}
  >
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={clsx(
          'flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2',
          selected ? 'border-secondary' : 'border-border'
        )}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-secondary" />}
      </span>
      <span className="font-heading text-sm font-bold text-foreground">{name}</span>
    </div>
    <span className="font-mono text-sm font-bold text-foreground">{price}</span>
  </div>
);

const DocRow: React.FC<{ title: string; subtitle: string; action: string }> = ({
  title,
  subtitle,
  action,
}) => (
  <div className="mb-2 flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2.5 last:mb-0">
    <div className="flex min-w-0 items-center gap-2.5">
      <FiFileText aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-secondary" />
      <div className="min-w-0">
        <p className="truncate font-mono text-sm font-bold text-foreground">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
    <span className="flex flex-shrink-0 items-center gap-1 text-xs font-bold text-secondary">
      <FiDownload aria-hidden="true" className="h-3.5 w-3.5" />
      {action}
    </span>
  </div>
);

interface ShowcasePanelProps {
  eyebrow: string;
  caption: string;
  ariaLabel: string;
  staggerClass: string;
  children: React.ReactNode;
}

const ShowcasePanel: React.FC<ShowcasePanelProps> = ({
  eyebrow,
  caption,
  ariaLabel,
  staggerClass,
  children,
}) => (
  <div className={clsx('flex flex-col animate-fade-in-up', staggerClass)}>
    <span className="mb-3 inline-flex w-fit items-center rounded-full bg-secondary/10 px-3 py-1 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-secondary">
      {eyebrow}
    </span>
    <div role="img" aria-label={ariaLabel} className={panelClass}>
      {children}
    </div>
    <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">{caption}</p>
  </div>
);

const CustomerPortalShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* a. Dashboard */}
      <ShowcasePanel
        eyebrow="Dashboard"
        staggerClass="stagger-1"
        ariaLabel="Customer portal dashboard for Riverside Property Management, showing 2 pending quotes, 14 active certificates, 1 outstanding invoice, and an upcoming visits card listing a visit on Tuesday 23 September at 10:00 at 14 High Street, Leeds with engineer Sam, and a second visit on Thursday 2 October at Unit 4 Riverside Park with time and engineer to be confirmed."
        caption="The dashboard a customer lands on: pending quotes, certificates, invoices and what's coming up next."
      >
        <BrowserChrome url="portal.opscel.com/dashboard" />
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs text-muted-foreground">Welcome back</p>
          <p className="font-heading text-lg font-bold text-foreground">
            Riverside Property Management
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <StatTile label="Pending quotes" value="2" />
            <StatTile label="Active certificates" value="14" />
            <StatTile label="Outstanding invoices" value="1" />
          </div>

          <div className="mt-5 flex-1 rounded-lg border border-border p-4">
            <p className="mb-3 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
              <FiCalendar aria-hidden="true" className="h-4 w-4 text-secondary" />
              Upcoming visits
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FiClock aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-mono text-foreground">Tue 23 Sep · 10:00</p>
                  <p className="text-muted-foreground">14 High Street, Leeds · Engineer: Sam</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FiClock aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-mono text-foreground">Thu 2 Oct · Time to be confirmed</p>
                  <p className="text-muted-foreground">
                    Unit 4 Riverside Park · Engineer to be confirmed
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ShowcasePanel>

      {/* b. Quote approval */}
      <ShowcasePanel
        eyebrow="Quote approval"
        staggerClass="stagger-2"
        ariaLabel="Quote QT-2026-0184 for fire alarm remedial works, showing three good-better-best tiers — Essential at 1,240 pounds, Recommended at 1,860 pounds selected, and Complete at 2,410 pounds, all excluding VAT — a 25 percent deposit required on approval, a field to type a full name to approve, and Approve and Decline buttons."
        caption="Good / better / worse tiers, a typed-name approval and the deposit due — all in one screen."
      >
        <BrowserChrome url="portal.opscel.com/quotes/QT-2026-0184" />
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-xs text-muted-foreground">QT-2026-0184</p>
          <p className="font-heading text-base font-bold text-foreground">
            Fire alarm remedial works
          </p>

          <div className="mt-4 space-y-2">
            <TierCard name="Essential" price="£1,240" />
            <TierCard name="Recommended" price="£1,860" selected />
            <TierCard name="Complete" price="£2,410" />
          </div>
          <p className="mt-1 text-right text-[0.6875rem] text-muted-foreground">ex VAT</p>

          <div className="mt-4 rounded-lg border border-warning/30 bg-warning/10 px-3 py-2 text-xs font-bold text-warning">
            25% deposit required on approval
          </div>

          <label className="mt-4 block text-xs font-medium text-muted-foreground">
            Type your full name to approve
            <span className="mt-1 block rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
              Full name…
            </span>
          </label>

          <div className="mt-4 flex flex-1 items-end gap-3">
            <span className="flex-1 rounded-full bg-primary px-4 py-2 text-center font-heading text-sm font-bold text-primary-foreground">
              Approve
            </span>
            <span className="flex-1 rounded-full border border-border px-4 py-2 text-center font-heading text-sm font-bold text-foreground">
              Decline
            </span>
          </div>
        </div>
      </ShowcasePanel>

      {/* c. Documents */}
      <ShowcasePanel
        eyebrow="Documents"
        staggerClass="stagger-3"
        ariaLabel="Documents list with two certificates — EICR-000231 Electrical Installation Condition Report issued 12 August 2026, and FA-000118 Fire Alarm Service issued 3 September 2026, both downloadable — one job sheet for a fire alarm service completed 3 September 2026 as a PDF, and invoice INV-000342 for 1,860 pounds, awaiting payment."
        caption="Certificates, job sheets and invoices, always available — no re-sending an attachment by email."
      >
        <BrowserChrome url="portal.opscel.com/documents" />
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.06em] text-muted-foreground">
            Certificates
          </p>
          <DocRow
            title="EICR-000231"
            subtitle="Electrical Installation Condition Report · Issued 12 Aug 2026"
            action="Download"
          />
          <DocRow
            title="FA-000118"
            subtitle="Fire Alarm Service · Issued 3 Sep 2026"
            action="Download"
          />

          <p className="mb-3 mt-5 font-heading text-xs font-bold uppercase tracking-[0.06em] text-muted-foreground">
            Job sheets
          </p>
          <DocRow title="Fire alarm service" subtitle="Completed 3 Sep 2026" action="PDF" />

          <p className="mb-3 mt-5 font-heading text-xs font-bold uppercase tracking-[0.06em] text-muted-foreground">
            Invoices
          </p>
          <div className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5">
            <div>
              <p className="font-mono text-sm font-bold text-foreground">INV-000342</p>
              <p className="font-mono text-sm text-muted-foreground">£1,860.00</p>
            </div>
            <span className="rounded-full bg-warning/10 px-2.5 py-1 text-[0.6875rem] font-bold text-warning">
              Awaiting payment
            </span>
          </div>
        </div>
      </ShowcasePanel>

      {/* d. Email notification */}
      <ShowcasePanel
        eyebrow="Email notification"
        staggerClass="stagger-4"
        ariaLabel="An email from Salus Fire, reply-to office at salusfire dot co dot uk, subject 'Your visit from Salus Fire is booked for Tuesday 23 September', with details for job JOB-1042 fire alarm annual service at 14 High Street, Leeds LS1 1AA, on Tuesday 23 September 2026 at 10:00 with engineer Sam, a button to view in the customer portal, a contact strip, and an unsubscribe link."
        caption="Sent automatically, in your name, the moment a visit is booked — with a button straight into the portal."
      >
        <div aria-hidden="true" className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
          <FiMail className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-[0.6875rem] text-muted-foreground">Inbox</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="space-y-1 border-b border-border pb-3 text-xs text-muted-foreground">
            <p>
              <span className="font-bold text-foreground">From:</span> Salus Fire
              &lt;noreply@opscel.com&gt;
            </p>
            <p>
              <span className="font-bold text-foreground">Reply-To:</span>{' '}
              office@salusfire.co.uk
            </p>
            <p className="pt-1 font-heading text-sm font-bold text-foreground">
              Your visit from Salus Fire is booked for Tue 23 Sep
            </p>
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-border">
                  <td className="bg-muted px-3 py-2 font-bold text-muted-foreground">Job</td>
                  <td className="px-3 py-2 font-mono text-foreground">
                    JOB-1042 — Fire alarm annual service
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="bg-muted px-3 py-2 font-bold text-muted-foreground">Site</td>
                  <td className="px-3 py-2 text-foreground">14 High Street, Leeds LS1 1AA</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="bg-muted px-3 py-2 font-bold text-muted-foreground">Date</td>
                  <td className="px-3 py-2 font-mono text-foreground">
                    Tuesday 23 September 2026
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="bg-muted px-3 py-2 font-bold text-muted-foreground">Time</td>
                  <td className="px-3 py-2 font-mono text-foreground">10:00</td>
                </tr>
                <tr>
                  <td className="bg-muted px-3 py-2 font-bold text-muted-foreground">Engineer</td>
                  <td className="px-3 py-2 text-foreground">Sam</td>
                </tr>
              </tbody>
            </table>
          </div>

          <span className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 font-heading text-sm font-bold text-primary-foreground">
            View in your customer portal
            <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
          </span>

          <div className="mt-4 flex-1 border-t border-border pt-3 text-xs text-muted-foreground">
            <p>Salus Fire &amp; Electrical Ltd · 12 Industrial Way, Leeds LS9 8AB · 0113 555 0134</p>
            <p className="mt-2 text-[0.6875rem] underline">
              Unsubscribe from these notifications
            </p>
          </div>
        </div>
      </ShowcasePanel>
    </div>
  );
};

export default CustomerPortalShowcase;
