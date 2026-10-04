'use client';

/**
 * Field app "Risk Assessment" page, Part 07 "Sign-off" card. Pick a state, tap
 * the button: it confirms (or queues, when Offline is picked) and a toast shows
 * briefly. Demo content only; dates are fixed.
 */

import React, { useEffect, useRef, useState } from 'react';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';

import './rams-mockups.css';

type Scenario = 'notyet' | 'offline' | 'changed' | 'syncing';
type Outcome = 'idle' | 'confirmed' | 'queued';

const SCENARIOS: { id: Scenario; label: string }[] = [
  { id: 'notyet', label: 'Not yet' },
  { id: 'offline', label: 'Offline' },
  { id: 'changed', label: 'RAMS changed' },
  { id: 'syncing', label: 'Your edit syncing' },
];

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const RamsFieldSignoff: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('notyet');
  const [outcome, setOutcome] = useState<Outcome>('idle');
  const [toast, setToast] = useState<string | null>(null);
  const confirmedRef = useRef<HTMLDivElement>(null);
  // The button unmounts once confirmed; move focus to the confirmation row.
  useEffect(() => {
    if (outcome !== 'idle') confirmedRef.current?.focus();
  }, [outcome]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const pick = (s: Scenario) => {
    setScenario(s);
    setOutcome('idle');
    setToast(null);
  };

  const confirm = () => {
    const queued = scenario === 'offline';
    setOutcome(queued ? 'queued' : 'confirmed');
    setToast(queued ? 'Saved locally - will sync when connected' : 'Confirmed');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2500);
  };

  const syncing = scenario === 'syncing';
  const changed = scenario === 'changed';

  return (
    <DocMockupFrame>
      <div className="rams-mockup not-prose my-8 flex flex-col gap-4 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <div role="group" aria-label="Choose a situation" className="flex flex-wrap justify-center gap-1.5">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={scenario === s.id}
              onClick={() => pick(s.id)}
              className="rounded border px-2.5 py-1.5 text-[12px] font-semibold"
              style={{
                background: scenario === s.id ? 'var(--accent)' : 'var(--card)',
                color: scenario === s.id ? 'var(--on-accent)' : 'var(--ink)',
                borderColor: scenario === s.id ? 'var(--accent)' : 'var(--line)',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <PhoneFrame ariaLabel="Field app Risk Assessment page with the Sign-off card">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-bold" style={hdStyle}>Risk Assessment</h3>
                <span className="rounded px-2 py-1 text-[12px] font-semibold" style={{ background: 'var(--warn-bg)', color: 'var(--warn-ink)' }}>Medium</span>
              </div>
              <div className="rounded border border-[var(--line)] bg-[var(--card)] p-3 text-[13px]" style={{ color: 'var(--ink2)' }}>
                Work at height (stair void); live fire alarm panel; occupied care home. PPE: safety footwear, gloves, hi-vis.
              </div>

              <section aria-label="Sign-off" className="flex flex-col gap-2 rounded border border-[var(--line)] bg-[var(--card)] p-3">
                <div className="flex items-baseline gap-2">
                  <span className="mono text-[12px] font-bold" style={{ color: 'var(--accent)' }}>07</span>
                  <h4 className="text-[15px] font-bold" style={hdStyle}>Sign-off</h4>
                </div>
                <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>Confirm you have read this before starting work</p>

                {outcome === 'idle' && changed && (
                  <p className="m-0 rounded px-2 py-1.5 text-[13px]" style={{ background: 'var(--warn-bg)', color: 'var(--warn-ink)' }}>
                    The RAMS has changed since you confirmed it 02 Oct 2026, 16:40. Read it again, then confirm.
                  </p>
                )}
                {outcome === 'idle' && syncing && (
                  <p className="m-0 text-[13px]" style={{ color: 'var(--ink2)' }}>
                    Your changes are on their way to the office. You can confirm once they have synced.
                  </p>
                )}

                {outcome === 'idle' ? (
                  <button
                    type="button"
                    disabled={syncing}
                    onClick={confirm}
                    className="min-h-[44px] rounded px-3 py-2 text-[14px] font-semibold"
                    style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
                  >
                    I have read and understood this RAMS
                  </button>
                ) : (
                  <div
                    ref={confirmedRef}
                    tabIndex={-1}
                    className="rams-anim-fade flex items-center gap-2 rounded px-3 py-2 text-[13px] font-semibold outline-none"
                    style={{ background: 'var(--ok-bg)', color: 'var(--ok-ink)' }}
                  >
                    <span aria-hidden="true">&#10003;</span>
                    <span>
                      {outcome === 'queued'
                        ? 'You confirmed this 04 Oct 2026, 09:12 - will sync when connected'
                        : 'You confirmed this 04 Oct 2026, 09:12'}
                    </span>
                  </div>
                )}

                <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>Also confirmed: Ben Doyle 04 Oct 2026, 08:50</p>
              </section>
            </div>
          </PhoneFrame>

          <div role="status" aria-live="polite" className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center px-6">
            {toast && (
              <span className="rams-anim-fade rounded px-3 py-2 text-[13px] font-semibold" style={{ background: 'var(--ink)', color: 'var(--on-accent)' }}>
                {toast}
              </span>
            )}
          </div>
        </div>
      </div>
    </DocMockupFrame>
  );
};

export default RamsFieldSignoff;
