'use client';

import { dealGroupsAcrossVisits } from './deal-groups';
import React, { useMemo, useState } from 'react';

import DocMockupFrame from './DocMockupFrame';

type SplitKey = 'zone' | 'floor' | 'building' | 'even';

const SPLIT_OPTIONS: { key: SplitKey; label: string }[] = [
  { key: 'zone', label: 'Zone (fire alarm)' },
  { key: 'floor', label: 'Floor' },
  { key: 'building', label: 'Building' },
  { key: 'even', label: 'Even split' },
];

const ZONE_COUNTS = [29, 6, 3, 27, 6, 17];
const TOTAL_DEVICES = ZONE_COUNTS.reduce((a, b) => a + b, 0); // 88

interface Group {
  label: string;
  count: number;
}

/**
 * Greedy, contiguous dealing of groups into exactly `n` chunks, as balanced
 * as the group sizes allow. A chunk closes once it reaches total/n devices
 * - unless there are not enough groups left to fill the remaining chunks,
 * in which case it closes early so no later chunk is left empty.
 */

interface VisitRow {
  n: number;
  covers: string;
  count: number;
}

function buildPreview(split: SplitKey, visitsPerYear: number): { rows: VisitRow[]; warn: boolean } {
  if (split === 'floor' || split === 'building') {
    const rows: VisitRow[] = Array.from({ length: visitsPerYear }, (_, i) => ({
      n: i + 1,
      covers: i === 0 ? 'Unassigned' : '—',
      count: i === 0 ? TOTAL_DEVICES : 0,
    }));
    rows[rows.length - 1].covers += ' - catch-up for anything not yet tested';
    return { rows, warn: true };
  }

  const groups: Group[] =
    split === 'zone'
      ? ZONE_COUNTS.map((c, i) => ({ label: `Zone ${i + 1}`, count: c }))
      : Array.from({ length: TOTAL_DEVICES }, (_, i) => ({ label: `Device ${i + 1}`, count: 1 }));

  const chunks = dealGroupsAcrossVisits(groups, visitsPerYear);
  const rows: VisitRow[] = chunks.map((chunk, i) => {
    const count = chunk.reduce((s, g) => s + g.count, 0);
    const covers = split === 'zone' ? chunk.map((g) => g.label).join(', ') || '—' : `Even share ${i + 1}`;
    return { n: i + 1, covers, count };
  });
  if (rows.length > 0) rows[rows.length - 1].covers += ' - catch-up for anything not yet tested';
  return { rows, warn: false };
}

type Mode = 'empty' | 'edit' | 'view';

const segButton = (active: boolean) =>
  `min-h-9 rounded border px-3 text-[13px] font-semibold ${
    active
      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]'
      : 'border-[var(--line)] bg-[var(--card)] text-[var(--ink)]'
  }`;

const VisitPlanCard: React.FC = () => {
  const [mode, setMode] = useState<Mode>('edit');
  const [split, setSplit] = useState<SplitKey>('zone');
  const [visitsInput, setVisitsInput] = useState('4');
  const [removeArmed, setRemoveArmed] = useState(false);

  const visitsNum = Number(visitsInput);
  const isValid = Number.isInteger(visitsNum) && visitsNum >= 2 && visitsNum <= 12;

  const preview = useMemo(
    () => (isValid ? buildPreview(split, visitsNum) : { rows: [], warn: false }),
    [split, visitsNum, isValid]
  );

  const headingClass = 'text-[15px] font-bold';
  const hdStyle: React.CSSProperties = { fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' };

  return (
    <DocMockupFrame>
      <div className="not-prose my-8 mx-auto max-w-2xl overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
        <div className="flex items-center gap-2.5 border-b border-[var(--line)] px-4 py-3">
          <h3 className={headingClass} style={hdStyle}>Visit plan</h3>
        </div>

        {mode === 'empty' && (
          <div className="flex flex-col gap-3 p-4">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink2)' }}>
              Every asset on every visit. A 4-visit plan would suit this cadence.
            </p>
            <button
              type="button"
              onClick={() => {
                setMode('edit');
                setRemoveArmed(false);
              }}
              className="self-start rounded border border-[var(--accent)] bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-[var(--on-accent)]"
            >
              Add a visit plan
            </button>
          </div>
        )}

        {mode === 'edit' && (
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Split by</span>
              <div role="group" aria-label="Split by" className="flex flex-wrap gap-1.5">
                {SPLIT_OPTIONS.map((o) => (
                  <button key={o.key} type="button" aria-pressed={split === o.key} onClick={() => setSplit(o.key)} className={segButton(split === o.key)}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="visits-per-year" className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>
                Visits per year
              </label>
              <input
                id="visits-per-year"
                type="number"
                min={2}
                max={12}
                step={1}
                value={visitsInput}
                onChange={(e) => setVisitsInput(e.target.value)}
                className="h-10 w-24 rounded border border-[var(--line)] bg-[var(--bg)] px-2.5 text-sm"
              />
              {!isValid && (
                <p role="alert" className="text-xs font-semibold" style={{ color: 'var(--bad-ink)' }}>
                  Visits per year must be a whole number between 2 and 12
                </p>
              )}
            </div>

            {isValid && (
              <>
                {preview.warn && (
                  <p className="rounded border border-[var(--warn-ink)] bg-[var(--warn-bg)] p-2.5 text-sm" style={{ color: 'var(--warn-ink)' }}>
                    No floor data on this site&rsquo;s register - every device lands on Visit 1. Try Even split, or set floors on the assets first.
                  </p>
                )}

                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[var(--bg)]">
                      <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Visit</th>
                      <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Covers</th>
                      <th className="border-b border-[var(--line)] px-2 py-2 text-right text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Devices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.rows.map((r) => (
                      <tr key={r.n}>
                        <td className="mono border-b border-[var(--line)] px-2 py-2 font-bold">{r.n}</td>
                        <td className="border-b border-[var(--line)] px-2 py-2">{r.covers}</td>
                        <td className="mono border-b border-[var(--line)] px-2 py-2 text-right">{r.count || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            <p className="text-xs leading-relaxed" style={{ color: 'var(--ink2)' }}>
              88 assets at the site in total. A device an earlier visit missed rolls forward to the next.
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                disabled={!isValid}
                onClick={() => setMode('view')}
                className="rounded border border-[var(--accent)] bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-[var(--on-accent)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {mode === 'view' && (
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4 text-sm">
              <span><strong>Split by</strong> {SPLIT_OPTIONS.find((o) => o.key === split)?.label}</span>
              <span><strong>Visits per year</strong> {visitsNum}</span>
            </div>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--bg)]">
                  <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Visit</th>
                  <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Covers</th>
                  <th className="border-b border-[var(--line)] px-2 py-2 text-right text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Devices</th>
                </tr>
              </thead>
              <tbody>
                {preview.rows.map((r) => (
                  <tr key={r.n}>
                    <td className="mono border-b border-[var(--line)] px-2 py-2 font-bold">{r.n}</td>
                    <td className="border-b border-[var(--line)] px-2 py-2">{r.covers}</td>
                    <td className="mono border-b border-[var(--line)] px-2 py-2 text-right">{r.count || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setMode('edit');
                  setRemoveArmed(false);
                }}
                className="rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2 text-sm font-semibold"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!removeArmed) {
                    setRemoveArmed(true);
                    return;
                  }
                  setMode('empty');
                  setRemoveArmed(false);
                }}
                className="rounded border border-[var(--bad-ink)] bg-[var(--bad-bg)] px-3 py-2 text-sm font-semibold"
                style={{ color: 'var(--bad-ink)' }}
              >
                {removeArmed ? 'Remove plan? Click again' : 'Remove plan'}
              </button>
            </div>
          </div>
        )}
      </div>
    </DocMockupFrame>
  );
};

export default VisitPlanCard;
