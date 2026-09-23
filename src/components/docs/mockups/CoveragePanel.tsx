'use client';

import React, { useState } from 'react';

import DocMockupFrame from './DocMockupFrame';

interface UncoveredRow {
  id: string;
  no: string;
  type: string;
  site: string;
  /** Shown in "Now covered" once the row's New contract link is followed. */
  nowCoveredBy: string;
}

const INITIAL_ROWS: UncoveredRow[] = [
  { id: 'FA-0089', no: 'FA-0089', type: 'Aspirating detector', site: 'Ashvale House', nowCoveredBy: 'now on CTR-00043 Fire Alarm Service' },
  { id: 'EX-0017', no: 'EX-0017', type: 'Fire blanket', site: 'Ashvale House', nowCoveredBy: 'now on CTR-00044 Extinguisher Service' },
  { id: 'EX-0018', no: 'EX-0018', type: 'Fire blanket', site: 'Ashvale House', nowCoveredBy: 'now on CTR-00044 Extinguisher Service' },
  { id: 'HR-0003', no: 'HR-0003', type: 'Hose reel', site: '[Site name]', nowCoveredBy: 'now on a new contract' },
  { id: 'FA-0104', no: 'FA-0104', type: 'Manual call point', site: '[Site name]', nowCoveredBy: 'now on a new contract' },
];

const SITES = [
  { name: 'Ashvale House', total: '88 + 16 + [n]', contracts: 'CTR-00043 · CTR-00044 · CTR-00045', okPct: 96, badLabel: '3 not covered', bad: true },
  { name: '[Site name]', total: '[n] assets', contracts: 'No contract yet', okPct: 0, badLabel: '2 not covered', bad: true },
  { name: '[Site name]', total: '[n] assets', contracts: '1 contract', okPct: 100, badLabel: 'All covered', bad: false },
  { name: '[Site name]', total: '[n] assets', contracts: '1 contract', okPct: 100, badLabel: 'All covered', bad: false },
];

const hdStyle: React.CSSProperties = { fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' };

const CoveragePanel: React.FC = () => {
  const [rows, setRows] = useState<UncoveredRow[]>(INITIAL_ROWS);
  const [covered, setCovered] = useState<UncoveredRow[]>([]);

  const moveToNowCovered = (row: UncoveredRow) => {
    setRows((prev) => prev.filter((r) => r.id !== row.id));
    setCovered((prev) => [...prev, row]);
  };

  const tiles = [
    { label: 'Assets', value: '214', sub: 'across all sites' },
    { label: 'Covered', value: String(209 + covered.length), sub: 'on a service contract', tone: 'ok' as const },
    { label: 'Not covered', value: String(5 - covered.length), sub: 'never raised for service', tone: 'bad' as const },
    { label: 'Sites', value: '4', sub: '3 with an active contract' },
  ];

  return (
    <DocMockupFrame>
      <div className="not-prose my-8 flex flex-col gap-4 rounded border border-[var(--line)] bg-[var(--stage)] p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.label} className="flex flex-col gap-1 rounded border border-[var(--line)] bg-[var(--card)] p-3">
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>{t.label}</span>
              <span
                className="mono text-2xl font-bold leading-tight"
                style={{ color: t.tone === 'ok' ? 'var(--ok-ink)' : t.tone === 'bad' ? 'var(--bad-ink)' : 'var(--ink)' }}
              >
                {t.value}
              </span>
              <span className="text-[11px]" style={{ color: 'var(--ink2)' }}>{t.sub}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
          <section className="overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
            <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2.5">
              <h3 className="text-[15px] font-bold" style={hdStyle}>Assets not covered by any contract</h3>
              <span className="mono rounded bg-[var(--bad-bg)] px-1.5 py-0.5 text-xs font-bold" style={{ color: 'var(--bad-ink)' }}>{rows.length}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--bg)]">
                    <th className="border-b border-[var(--line)] px-3 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Asset no.</th>
                    <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Type</th>
                    <th className="border-b border-[var(--line)] px-2 py-2 text-left text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Site</th>
                    <th className="border-b border-[var(--line)] px-3 py-2 text-right text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id}>
                      <td className="mono border-b border-[var(--line)] px-3 py-2 font-bold">{r.no}</td>
                      <td className="border-b border-[var(--line)] px-2 py-2">{r.type}</td>
                      <td className="border-b border-[var(--line)] px-2 py-2">{r.site}</td>
                      <td className="border-b border-[var(--line)] px-3 py-2 text-right">
                        <button
                          type="button"
                          onClick={() => moveToNowCovered(r)}
                          className="mono min-h-8 rounded border border-[var(--accent)] bg-[var(--accent)] px-2 text-xs font-semibold text-[var(--on-accent)]"
                        >
                          New contract
                        </button>
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-3 py-4 text-center text-sm" style={{ color: 'var(--ink2)' }}>
                        Every asset is on a contract.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {covered.length > 0 && (
              <div className="border-t border-[var(--line)] bg-[var(--bg)] px-3 py-2.5">
                <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Now covered</span>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {covered.map((r) => (
                    <li key={r.id} className="mono text-xs" style={{ color: 'var(--ok-ink)' }}>{r.no} – {r.nowCoveredBy}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-xs" style={{ color: 'var(--ink2)' }}>
              An asset is covered when a contract at its site services its asset type. Nothing here is ever raised for service until it is on one.
            </div>
          </section>

          <aside className="overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
            <div className="border-b border-[var(--line)] px-3 py-2.5">
              <h3 className="text-[15px] font-bold" style={hdStyle}>Coverage by site</h3>
            </div>
            <div className="flex flex-col gap-4 p-3">
              {SITES.map((s) => (
                <div key={s.name} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="mono text-xs" style={{ color: 'var(--ink2)' }}>{s.total}</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded bg-[var(--chip)]">
                    <span style={{ width: `${s.okPct}%`, background: 'var(--ok-ink)' }} />
                    <span style={{ width: `${100 - s.okPct}%`, background: 'var(--bad-ink)' }} />
                  </div>
                  <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--ink2)' }}>
                    <span>{s.contracts}</span>
                    <span className="flex-grow" />
                    <span
                      className={`rounded border px-1.5 py-0.5 font-bold ${
                        s.bad ? 'border-[var(--bad-ink)] bg-[var(--bad-bg)]' : 'border-[var(--ok-ink)] bg-[var(--ok-bg)]'
                      }`}
                      style={{ color: s.bad ? 'var(--bad-ink)' : 'var(--ok-ink)' }}
                    >
                      {s.badLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </DocMockupFrame>
  );
};

export default CoveragePanel;
