'use client';

/**
 * Office job page "Risk Assessment" card (RAMS module). Interactive: switch the
 * client approval state and toggle "Edit the RAMS". Buttons inside the card are
 * deliberately inert. Demo content only; dates are fixed.
 */

import React, { useId, useState } from 'react';

import DocMockupFrame from './DocMockupFrame';

import './rams-mockups.css';

type Approval = 'none' | 'pending' | 'approved' | 'rejected';

const APPROVAL_OPTIONS: { id: Approval; label: string }[] = [
  { id: 'none', label: 'Not requested yet' },
  { id: 'pending', label: 'Awaiting' },
  { id: 'approved', label: 'Approved' },
  { id: 'rejected', label: 'Rejected' },
];

type Tone = 'ok' | 'warn' | 'bad' | 'due' | 'muted';

const TONE: Record<Tone, { bg: string; ink: string }> = {
  ok: { bg: 'var(--ok-bg)', ink: 'var(--ok-ink)' },
  warn: { bg: 'var(--warn-bg)', ink: 'var(--warn-ink)' },
  bad: { bg: 'var(--bad-bg)', ink: 'var(--bad-ink)' },
  due: { bg: 'var(--due-bg)', ink: 'var(--due-ink)' },
  muted: { bg: 'var(--chip)', ink: 'var(--ink2)' },
};

const Pill: React.FC<{ tone: Tone; children: React.ReactNode }> = ({ tone, children }) => (
  <span
    className="inline-block max-w-full rounded px-2 py-1 text-[12px] font-semibold leading-snug"
    style={{ background: TONE[tone].bg, color: TONE[tone].ink }}
  >
    {children}
  </span>
);

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const approvalPill = (a: Approval): { tone: Tone; text: string } => {
  switch (a) {
    case 'pending':
      return { tone: 'due', text: 'Awaiting client approval (Rev 3, sent 04 Oct 2026)' };
    case 'approved':
      return { tone: 'ok', text: 'Approved by Dana Hughes on 06 Oct 2026 (Rev 3)' };
    case 'rejected':
      return {
        tone: 'bad',
        text: 'Rejected (Rev 3): The scaffold tower needs a second tie-in point - revise the RAMS and send it again',
      };
    default:
      return { tone: 'muted', text: 'Approval not requested (Rev 3): Emergency call-out' };
  }
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex flex-col gap-1.5 border-t border-[var(--line)] px-3 py-3">
    <h4 className="text-[12px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>{title}</h4>
    {children}
  </div>
);

const InertButton: React.FC<{ children: React.ReactNode; primary?: boolean }> = ({ children, primary }) => (
  <button
    type="button"
    tabIndex={-1}
    aria-disabled="true"
    className="rams-inert rounded border px-2.5 py-1 text-[12px] font-semibold"
    style={{
      background: primary ? 'var(--accent)' : 'var(--card)',
      color: primary ? 'var(--on-accent)' : 'var(--ink)',
      borderColor: primary ? 'var(--accent)' : 'var(--line)',
    }}
  >
    {children}
  </button>
);

const REVISIONS = [
  { rev: 3, date: '04 Oct 2026', how: 'Emailed' },
  { rev: 2, date: '01 Oct 2026', how: 'Emailed' },
  { rev: 1, date: '28 Sep 2026', how: 'Issued' },
];

const RamsJobCard: React.FC = () => {
  const [approval, setApproval] = useState<Approval>('pending');
  const [edited, setEdited] = useState(false);
  const groupId = useId();
  const pill = approvalPill(approval);

  const readers: { name: string; text: string; tone: Tone }[] = [
    {
      name: 'Alice Carter',
      text: edited ? 'read an earlier version (04 Oct 2026)' : '09:12 04 Oct',
      tone: edited ? 'warn' : 'ok',
    },
    { name: 'Ben Doyle', text: 'not yet', tone: 'muted' },
    { name: 'Chris Evans', text: 'read an earlier version (02 Oct 2026)', tone: 'warn' },
  ];

  return (
    <DocMockupFrame>
      <div className="rams-mockup not-prose my-8 flex flex-col gap-4 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div role="group" aria-labelledby={`${groupId}-lbl`} className="flex flex-col gap-1.5">
            <span id={`${groupId}-lbl`} className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>
              Client approval
            </span>
            <div className="flex flex-wrap gap-1.5">
              {APPROVAL_OPTIONS.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  aria-pressed={approval === o.id}
                  onClick={() => setApproval(o.id)}
                  className="rounded border px-2.5 py-1.5 text-[12px] font-semibold"
                  style={{
                    background: approval === o.id ? 'var(--accent)' : 'var(--card)',
                    color: approval === o.id ? 'var(--on-accent)' : 'var(--ink)',
                    borderColor: approval === o.id ? 'var(--accent)' : 'var(--line)',
                  }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-pressed={edited}
            onClick={() => setEdited((v) => !v)}
            className="self-start rounded border px-2.5 py-1.5 text-[12px] font-semibold sm:self-auto"
            style={{
              background: edited ? 'var(--warn-bg)' : 'var(--card)',
              color: edited ? 'var(--warn-ink)' : 'var(--ink)',
              borderColor: edited ? 'var(--warn-ink)' : 'var(--line)',
            }}
          >
            Edit the RAMS
          </button>
        </div>

        <section aria-label="Job page Risk Assessment card" className="overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
          <div className="flex flex-wrap items-center gap-2 px-3 py-2.5">
            <h3 className="text-[15px] font-bold" style={hdStyle}>Risk Assessment</h3>
            <Pill tone="warn">Medium</Pill>
            <div className="flex w-full flex-wrap gap-1.5 sm:ml-auto sm:w-auto">
              <InertButton>Edit</InertButton>
              <InertButton primary>Issue RAMS</InertButton>
              <InertButton>Email RAMS</InertButton>
            </div>
          </div>

          <Section title="Hazards">
            <p className="text-[13px]">Work at height (stair void); live fire alarm panel; occupied care home.</p>
          </Section>
          <Section title="PPE">
            <p className="text-[13px]">Safety footwear, gloves, hi-vis.</p>
          </Section>
          <Section title="Additional">
            <p className="text-[13px]">Sign in at reception. Isolate zones only with the Responsible Person.</p>
          </Section>
          <Section title="Method Statement">
            <p className="text-[13px]">Notify the site contact, test each zone in order, record results on the worksheet, restore the system and hand back.</p>
          </Section>

          <Section title="Read & understood">
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {readers.map((r) => (
                <li key={r.name} className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ background: TONE[r.tone].ink }}
                  />
                  <span className="font-semibold">{r.name}</span>
                  <span aria-hidden="true">·</span>
                  <span style={{ color: TONE[r.tone].ink }}>{r.text}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Client approval">
            {/* The live region stays mounted (a freshly inserted one is often not
                announced); only its content changes. */}
            <div aria-live="polite">
              <div key={approval} className="rams-anim-fade">
                <Pill tone={pill.tone}>{pill.text}</Pill>
              </div>
            </div>
          </Section>

          <Section title="RAMS revisions">
            {edited && (
              <div className="rams-anim-fade rounded px-2 py-1.5 text-[12px] font-semibold" style={{ background: 'var(--warn-bg)', color: 'var(--warn-ink)' }} role="status">
                Edited since revision 3
              </div>
            )}
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {REVISIONS.map((r) => (
                <li key={r.rev} className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
                  <span>
                    <span className="mono font-semibold">Rev {r.rev}</span> · {r.date} · {r.how}
                  </span>
                  <InertButton>Download</InertButton>
                </li>
              ))}
            </ul>
          </Section>
        </section>
      </div>
    </DocMockupFrame>
  );
};

export default RamsJobCard;
