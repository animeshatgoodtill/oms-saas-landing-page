'use client';

import React, { useMemo, useRef, useState } from 'react';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';
import { dealGroupsAcrossVisits, type DealGroup } from './deal-groups';

type DeviceStatus = 'due' | 'done' | 'fault' | 'missing' | 'skipped';

interface Device {
  num: number;
  zone: number;
  id: string;
  kind: string;
  loc: string;
  status: DeviceStatus;
  note: string;
  /** Set once a device outside this visit's zones is added from the register picker. */
  addedToVisit: boolean;
}

const ZONE_SIZES = [29, 6, 3, 27, 6, 17];
const LOCS = ['ACCOUNTS CV', "CORRIDOR CV BY STEVE'S RM", 'CONTRACTS MANAGERS CV', 'PLANT BUYING H&S CV', 'QA CV', 'TOILETS'];

// Visit 2 of 4's zones, dealt out the same way a real visit plan deals them
// (chunkGroupsAcrossVisits in lib/service-contracts/visit-plan.ts, ported
// here as dealGroupsAcrossVisits) - so this demo can't drift from what the
// product actually assigns to visit 2. For these six zones over four
// visits that's zones 2 and 3 (9 devices), not a fixed pair.
const ZONE_GROUPS: DealGroup[] = ZONE_SIZES.map((count, i) => ({ label: String(i + 1), count }));
const VISIT_ZONES = dealGroupsAcrossVisits(ZONE_GROUPS, 4)[1].map((g) => Number(g.label));

function buildKinds(): string[] {
  const spec: [string, number][] = [
    ['Optical smoke', 33],
    ['Sounder', 25],
    ['Multi-sensor', 10],
    ['Beacon', 8],
    ['Input switch', 8],
    ['Manual call point', 7],
    ['Relay', 4],
    ['Heat', 3],
  ];
  const queue = spec.map(([kind, left]) => ({ kind, left }));
  const kinds: string[] = [];
  for (let k = 0; k < 88; k++) {
    queue.sort((a, b) => b.left - a.left);
    kinds.push(queue[0].kind);
    queue[0].left -= 1;
  }
  return kinds;
}

function buildDevices(): Device[] {
  const kinds = buildKinds();
  // Visit 2 demo state: 2 done, 1 fault, within the zones this visit
  // actually covers (zones 2-3, device numbers 30-38 - see VISIT_ZONES above).
  const done = new Set([30, 36]);
  const fault = new Set([34]);
  const out: Device[] = [];
  let n = 0;
  for (let z = 0; z < 6; z++) {
    for (let i = 0; i < ZONE_SIZES[z]; i++) {
      n += 1;
      const status: DeviceStatus = done.has(n) ? 'done' : fault.has(n) ? 'fault' : 'due';
      out.push({
        num: n,
        zone: z + 1,
        id: 'L1 A' + String(n).padStart(3, '0'),
        kind: kinds[n - 1],
        loc: LOCS[(n - 1) % LOCS.length],
        status,
        note: '',
        addedToVisit: false,
      });
    }
  }
  return out;
}

const STATUS_CHIP: Record<DeviceStatus, string> = {
  due: 'border-[var(--due-ink)] bg-[var(--due-bg)] text-[var(--due-ink)]',
  done: 'border-[var(--ok-ink)] bg-[var(--ok-bg)] text-[var(--ok-ink)]',
  fault: 'border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[var(--bad-ink)]',
  missing: 'border-[var(--warn-ink)] bg-[var(--warn-bg)] text-[var(--warn-ink)]',
  skipped: 'border-[var(--line)] bg-[var(--chip)] text-[var(--ink2)]',
};

const STATUS_LABEL: Record<DeviceStatus, string> = {
  due: 'Due',
  done: 'Done ✓',
  fault: 'Fault',
  missing: 'Missing',
  skipped: 'Skipped',
};

type Step = 'job' | 'devices' | 'register' | 'signoff';

const STEPS: { key: Step; label: string }[] = [
  { key: 'job', label: '1 Job' },
  { key: 'devices', label: '2 Devices this visit' },
  { key: 'register', label: '3 Add from register' },
  { key: 'signoff', label: '4 Sign-off' },
];

const CAPTIONS: Record<Step, string> = {
  job: 'On a planned contract the job screen says which visit this is and how many devices are on it - before the worksheet is opened.',
  devices: 'The worksheet opens with this visit’s share already listed - the engineer records, rather than re-types. Anything missed rolls forward to the next visit.',
  register: 'Equipment not on this visit is still one tap away, tagged so nobody adds the whole site by accident.',
  signoff: 'The customer signs the sheet as usual. Marking it complete is what updates the register.',
};

const chipButton = (active: boolean) =>
  `flex min-h-9 items-center gap-1.5 rounded border px-2.5 text-[13px] font-semibold ${
    active
      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]'
      : 'border-[var(--line)] bg-[var(--card)] text-[var(--ink)]'
  }`;

interface EngineerJourneyProps {
  initialStep?: Step;
}

const EngineerJourney: React.FC<EngineerJourneyProps> = ({ initialStep = 'job' }) => {
  const [step, setStep] = useState<Step>(initialStep);
  const [devices, setDevices] = useState<Device[]>(() => buildDevices());
  const [filter, setFilter] = useState<'due' | 'done' | 'issue' | 'all'>('due');
  const [openId, setOpenId] = useState<string | null>(null);
  const [scanOpen, setScanOpen] = useState(false);
  const noteRef = useRef<HTMLInputElement>(null);

  const visitDevices = useMemo(
    () => devices.filter((d) => VISIT_ZONES.includes(d.zone) || d.addedToVisit),
    [devices]
  );

  const counts = useMemo(
    () => ({
      due: visitDevices.filter((d) => d.status === 'due').length,
      done: visitDevices.filter((d) => d.status === 'done').length,
      fault: visitDevices.filter((d) => d.status === 'fault').length,
      checkedNotDue: visitDevices.filter((d) => d.status !== 'due').length,
    }),
    [visitDevices]
  );

  const pillCounts = useMemo(
    () => ({
      due: counts.due,
      done: counts.checkedNotDue,
      issue: visitDevices.filter((d) => d.status === 'fault').length,
      all: devices.length,
    }),
    [counts, visitDevices, devices]
  );

  const setStatus = (id: string, status: DeviceStatus) => {
    setDevices((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  };

  const addFromRegister = (id: string) => {
    setDevices((prev) => prev.map((d) => (d.id === id ? { ...d, addedToVisit: true } : d)));
  };

  const [addAllArmed, setAddAllArmed] = useState(false);
  const addAllOthers = () => {
    if (!addAllArmed) {
      setAddAllArmed(true);
      return;
    }
    setDevices((prev) =>
      prev.map((d) => (VISIT_ZONES.includes(d.zone) ? d : { ...d, addedToVisit: true }))
    );
    setAddAllArmed(false);
  };

  const otherVisitDevices = devices.filter((d) => !VISIT_ZONES.includes(d.zone));
  const otherVisitRemaining = otherVisitDevices.filter((d) => !d.addedToVisit);

  const keep = (d: Device) => {
    if (filter === 'due') return d.status === 'due';
    if (filter === 'done') return d.status !== 'due';
    if (filter === 'issue') return d.status === 'fault';
    return true;
  };

  const zoneGroups = VISIT_ZONES.map((z) => {
    const all = devices.filter((d) => d.zone === z);
    const doneCount = all.filter((d) => d.status !== 'due').length;
    return { zone: z, all, doneCount, rows: all.filter(keep) };
  });

  const addedRows = devices.filter((d) => d.addedToVisit && !VISIT_ZONES.includes(d.zone)).filter(keep);

  const collapsedZones = [1, 2, 3, 4, 5, 6]
    .filter((z) => !VISIT_ZONES.includes(z))
    .map((z) => ({
      zone: z,
      all: devices.filter((d) => d.zone === z),
    }));

  const scanTarget = devices.find((d) => d.id === 'L1 A033');

  const goTo = (s: Step) => setStep(s);

  return (
    <DocMockupFrame>
      <div className="not-prose my-8">
        <div
          role="tablist"
          aria-label="Engineer journey steps"
          className="mb-4 flex flex-wrap justify-center gap-2"
        >
          {STEPS.map((s) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={step === s.key}
              onClick={() => goTo(s.key)}
              className={`min-h-9 rounded border px-3 text-[13px] font-semibold ${
                step === s.key
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]'
                  : 'border-[var(--line)] bg-[var(--card)] text-[var(--ink)]'
              }`}
              style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.04em' }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {step === 'job' && (
          <PhoneFrame ariaLabel="Job hub screen showing assets on this visit">
            <JobScreen
              due={counts.due}
              done={counts.done}
              fault={counts.fault}
              total={visitDevices.length}
              doneEarlier={58}
              onContinue={() => goTo('devices')}
              onSignoff={() => goTo('signoff')}
            />
          </PhoneFrame>
        )}

        {step === 'devices' && (
          <PhoneFrame ariaLabel="Devices this visit screen with zone groups and device rows">
            <DevicesScreen
              filter={filter}
              setFilter={setFilter}
              pillCounts={pillCounts}
              zoneGroups={zoneGroups}
              addedRows={addedRows}
              collapsedZones={collapsedZones}
              openId={openId}
              setOpenId={setOpenId}
              setStatus={setStatus}
              noteRef={noteRef}
              scanOpen={scanOpen}
              setScanOpen={setScanOpen}
              scanTarget={scanTarget}
              onMarkScanTested={() => scanTarget && setStatus(scanTarget.id, 'done')}
              onGoRegister={() => goTo('register')}
            />
          </PhoneFrame>
        )}

        {step === 'register' && (
          <PhoneFrame ariaLabel="Add from site register picker">
            <RegisterScreen
              visitCount={visitDevices.length}
              siteTotal={devices.length}
              otherVisitDevices={otherVisitDevices}
              otherVisitRemaining={otherVisitRemaining}
              onAdd={addFromRegister}
              addAllArmed={addAllArmed}
              onAddAll={addAllOthers}
              onClose={() => {
                setAddAllArmed(false);
                goTo('devices');
              }}
            />
          </PhoneFrame>
        )}

        {step === 'signoff' && (
          <PhoneFrame ariaLabel="Sign-off screen with signature pad">
            <SignoffScreen />
          </PhoneFrame>
        )}

        <p className="mx-auto mt-4 max-w-[390px] text-center text-sm leading-relaxed" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-body)' }}>
          {CAPTIONS[step]}
        </p>
      </div>
    </DocMockupFrame>
  );
};

export default EngineerJourney;

/* ---------------------------------------------------------------------- */
/* Screens                                                                  */
/* ---------------------------------------------------------------------- */

const Header: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <header className="flex items-center gap-2.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
    <button
      type="button"
      aria-label="Back"
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-[var(--line)] text-[var(--ink)]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </button>
    <div className="min-w-0 flex-grow">
      <div className="truncate text-[17px] font-semibold leading-[19px]" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </div>
      <div className="truncate text-xs leading-[15px]" style={{ color: 'var(--ink2)' }}>
        {subtitle}
      </div>
    </div>
    <div className="flex h-7 flex-shrink-0 items-center gap-1.5 rounded border border-[var(--warn-ink)] bg-[var(--warn-bg)] px-2.5 text-[var(--warn-ink)]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square">
        <path d="M3 3l18 18" />
        <path d="M5 12a14 14 0 0 1 4-2.6" />
        <path d="M19.5 12a14 14 0 0 0-6.2-3.3" />
        <path d="M8.5 15.5a8 8 0 0 1 7 .3" />
        <path d="M12 19.5h.01" />
      </svg>
      <span className="mono text-[11px] font-bold">Offline · 3 queued</span>
    </div>
  </header>
);

const JobScreen: React.FC<{
  due: number;
  done: number;
  fault: number;
  total: number;
  doneEarlier: number;
  onContinue: () => void;
  onSignoff: () => void;
}> = ({ due, done, fault, total, doneEarlier, onContinue, onSignoff }) => {
  const okPct = total > 0 ? (done / total) * 100 : 0;
  const badPct = total > 0 ? (fault / total) * 100 : 0;

  return (
    <>
      <Header title="Fire Alarm Service" subtitle="Ashvale House" />
      <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--chip)] px-3 py-2">
        <span className="mono text-[11px] font-bold">CTR-00043</span>
        <span className="mono text-[11px]" style={{ color: 'var(--ink2)' }}>Visit 2 of 4 · Quarterly</span>
        <span className="flex-grow" />
        <span className="mono text-[11px]" style={{ color: 'var(--ink2)' }}>21 Jun 26</span>
        <span className="mono rounded border border-[var(--line)] bg-[var(--bg)] px-1.5 py-0.5 text-[11px] font-bold">AS</span>
      </div>

      <div className="flex flex-grow flex-col gap-3 overflow-y-auto p-3">
        <section className="overflow-hidden rounded border border-[var(--accent)] bg-[var(--card)]">
          <div className="flex items-center gap-2 bg-[var(--accent)] px-3 py-2.5 text-[var(--on-accent)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
              <path d="M4 7l8-4 8 4v10l-8 4-8-4z" />
              <path d="M4 7l8 4 8-4" />
              <path d="M12 11v10" />
            </svg>
            <span className="text-[15px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Assets on this visit
            </span>
          </div>

          <div className="grid grid-cols-3 gap-px bg-[var(--line)]">
            <div className="flex flex-col gap-0.5 bg-[var(--card)] px-2.5 py-3">
              <span className="mono text-[28px] font-bold leading-[30px]" style={{ color: 'var(--due-ink)' }}>{due}</span>
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Due</span>
            </div>
            <div className="flex flex-col gap-0.5 bg-[var(--card)] px-2.5 py-3">
              <span className="mono text-[28px] font-bold leading-[30px]" style={{ color: 'var(--ok-ink)' }}>{done}</span>
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Done</span>
            </div>
            <div className="flex flex-col gap-0.5 bg-[var(--card)] px-2.5 py-3">
              <span className="mono text-[28px] font-bold leading-[30px]" style={{ color: 'var(--bad-ink)' }}>{fault}</span>
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fault</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>This visit</span>
              {VISIT_ZONES.map((z) => (
                <span key={z} className="mono rounded border border-[var(--due-ink)] bg-[var(--due-bg)] px-2 py-1 text-xs font-bold" style={{ color: 'var(--due-ink)' }}>Zone {z}</span>
              ))}
              <span className="text-[11px]" style={{ color: 'var(--ink2)' }}>{doneEarlier} done earlier this cycle</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded bg-[var(--chip)]">
              <span style={{ width: `${okPct}%`, background: 'var(--ok-ink)' }} />
              <span style={{ width: `${badPct}%`, background: 'var(--bad-ink)' }} />
            </div>
            <button
              type="button"
              onClick={onContinue}
              className="flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--ink)] text-base font-semibold text-[var(--bg)]"
            >
              Continue
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square">
                <path d="M5 12h13" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </section>

        {[
          { title: 'Worksheets', meta: 'Fire alarm service sheet · 2 of 5 sections', status: 'In progress', tone: 'warn' as const },
          { title: 'Photos', meta: '4 photos · 1 waiting to upload', status: 'Queued', tone: 'warn' as const },
          { title: 'Sign-off', meta: 'Customer signature and engineer declaration', status: 'Not signed', tone: 'idle' as const, onClick: onSignoff },
        ].map((s) => (
          <button
            key={s.title}
            type="button"
            onClick={s.onClick}
            className="flex min-h-16 items-center gap-3 rounded border border-[var(--line)] bg-[var(--card)] p-3 text-left"
          >
            <span className="min-w-0 flex-grow">
              <span className="block text-[15px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.title}</span>
              <span className="block text-xs" style={{ color: 'var(--ink2)' }}>{s.meta}</span>
            </span>
            <span
              className={`flex-shrink-0 rounded border px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
                s.tone === 'warn'
                  ? 'border-[var(--warn-ink)] bg-[var(--warn-bg)] text-[var(--warn-ink)]'
                  : 'border-[var(--line)] bg-[var(--chip)] text-[var(--ink2)]'
              }`}
            >
              {s.status}
            </span>
          </button>
        ))}

        <p className="text-[11px] leading-4" style={{ color: 'var(--ink2)' }}>
          Everything on this job is saved on the device first. Queued work syncs when signal returns.
        </p>
      </div>
    </>
  );
};

const DevicesScreen: React.FC<{
  filter: 'due' | 'done' | 'issue' | 'all';
  setFilter: (f: 'due' | 'done' | 'issue' | 'all') => void;
  pillCounts: { due: number; done: number; issue: number; all: number };
  zoneGroups: { zone: number; all: Device[]; doneCount: number; rows: Device[] }[];
  addedRows: Device[];
  collapsedZones: { zone: number; all: Device[] }[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  setStatus: (id: string, status: DeviceStatus) => void;
  noteRef: React.RefObject<HTMLInputElement>;
  scanOpen: boolean;
  setScanOpen: (v: boolean) => void;
  scanTarget: Device | undefined;
  onMarkScanTested: () => void;
  onGoRegister: () => void;
}> = ({
  filter,
  setFilter,
  pillCounts,
  zoneGroups,
  addedRows,
  collapsedZones,
  openId,
  setOpenId,
  setStatus,
  scanOpen,
  setScanOpen,
  scanTarget,
  onMarkScanTested,
  onGoRegister,
}) => {
  const pills: { key: 'due' | 'done' | 'issue' | 'all'; label: string; count: number }[] = [
    { key: 'due', label: 'Due', count: pillCounts.due },
    { key: 'done', label: 'Done', count: pillCounts.done },
    { key: 'issue', label: 'Issue', count: pillCounts.issue },
    { key: 'all', label: 'All', count: pillCounts.all },
  ];

  const row = (d: Device) => {
    const open = openId === d.id;
    return (
      <div key={d.id} className="border-b border-[var(--line)]">
        <button
          type="button"
          onClick={() => setOpenId(open ? null : d.id)}
          aria-expanded={open}
          className="flex min-h-14 w-full items-center gap-2.5 px-3 py-2 text-left"
        >
          <span className="min-w-0 flex-grow">
            <span className="flex items-baseline gap-2">
              <span className="mono text-[13px] font-bold">{d.id}</span>
              <span className="text-[13px]">{d.kind}</span>
            </span>
            <span className="block truncate text-[11px]" style={{ color: 'var(--ink2)' }}>
              {d.loc}
              {d.addedToVisit && !VISIT_ZONES.includes(d.zone) && (
                <span className="ml-1.5 rounded bg-[var(--chip)] px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide" style={{ color: 'var(--ink2)' }}>
                  from site register
                </span>
              )}
            </span>
          </span>
          <span className={`min-w-[62px] flex-shrink-0 rounded border px-2 py-1.5 text-center text-[11px] font-bold uppercase tracking-wide ${STATUS_CHIP[d.status]}`}>
            {STATUS_LABEL[d.status]}
          </span>
        </button>
        {open && (
          <div className="flex flex-col gap-2.5 border-t border-dashed border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStatus(d.id, 'done')}
                className="flex min-h-[46px] flex-grow items-center justify-center gap-2 rounded border border-[var(--accent)] bg-[var(--accent)] text-[15px] font-semibold text-[var(--on-accent)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="square">
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                Tested OK
              </button>
              <button
                type="button"
                onClick={() => setStatus(d.id, 'fault')}
                className="flex min-h-[46px] w-28 items-center justify-center gap-1.5 rounded border border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[15px] font-semibold text-[var(--bad-ink)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="square">
                  <path d="M12 4l9 16H3l9-16z" />
                  <path d="M12 10v5" />
                  <path d="M12 17.5h.01" />
                </svg>
                Fault
              </button>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStatus(d.id, 'missing')}
                className="min-h-11 flex-grow rounded border border-[var(--line)] text-sm"
              >
                Not found
              </button>
              <button
                type="button"
                onClick={() => setStatus(d.id, 'skipped')}
                className="min-h-11 flex-grow rounded border border-[var(--line)] text-sm"
                style={{ color: 'var(--ink2)' }}
              >
                Skip this visit
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor={`note-${d.id}`} className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Note
              </label>
              <input
                id={`note-${d.id}`}
                type="text"
                placeholder="e.g. head dusty, cleaned"
                className="min-h-11 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 text-sm text-[var(--ink)]"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Header title="Fire Alarm Service" subtitle="Ashvale House" />
      <div className="flex flex-col gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-[15px] font-semibold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Devices — this visit</span>
          <span className="mono text-[11px]" style={{ color: 'var(--ink2)' }}>Visit 2 of 4 · Zones {Math.min(...VISIT_ZONES)}–{Math.max(...VISIT_ZONES)}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
        <div className="flex flex-grow flex-wrap gap-1.5">
          {pills.map((p) => (
            <button key={p.key} type="button" aria-pressed={filter === p.key} onClick={() => setFilter(p.key)} className={chipButton(filter === p.key)}>
              <span>{p.label}</span>
              <span className="mono font-bold">{p.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-grow flex-col gap-3 overflow-y-auto px-3 py-2.5">
        {addedRows.length > 0 && (
          <section className="overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
            <div className="flex min-h-11 items-center gap-2 border-b border-[var(--line)] bg-[var(--chip)] px-3 py-2">
              <span className="text-[15px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Added from register</span>
              <span className="mono flex-grow text-[11px]" style={{ color: 'var(--ink2)' }}>{addedRows.length} device{addedRows.length === 1 ? '' : 's'}</span>
            </div>
            {addedRows.map(row)}
          </section>
        )}

        {zoneGroups.map((g) => (
          <section key={g.zone} className="overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
            <div className="flex min-h-11 items-center gap-2 border-b border-[var(--line)] bg-[var(--chip)] px-3 py-2">
              <span className="text-[15px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Zone {g.zone}</span>
              <span className="mono flex-grow text-[11px]" style={{ color: 'var(--ink2)' }}>{g.all.length} devices · {g.doneCount} done</span>
            </div>
            {g.rows.map(row)}
          </section>
        ))}

        <div className="flex flex-col gap-1.5">
          {collapsedZones.map((c) => (
            <div key={c.zone} className="flex min-h-11 items-center gap-2 rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2" style={{ color: 'var(--ink2)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--ink)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Zone {c.zone}</span>
              <span className="mono flex-grow text-[11px]">{c.all.length} devices</span>
              <span className="rounded bg-[var(--chip)] px-1.5 py-0.5 text-[11px]">Not due this visit</span>
            </div>
          ))}
        </div>
      </div>

      {scanOpen && scanTarget && (
        <div className="mx-3 mb-2 flex flex-col gap-2 rounded border border-[var(--line)] bg-[var(--card)] p-3">
          <p className="text-sm">
            Scanned <span className="mono font-bold">{scanTarget.id}</span> · {scanTarget.kind} · {scanTarget.loc}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                onMarkScanTested();
                setScanOpen(false);
              }}
              className="min-h-11 flex-grow rounded bg-[var(--accent)] text-sm font-semibold text-[var(--on-accent)]"
            >
              Mark tested
            </button>
            <button type="button" onClick={() => setScanOpen(false)} className="min-h-11 rounded border border-[var(--line)] px-3 text-sm">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 border-t border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
        <button
          type="button"
          onClick={() => setScanOpen(true)}
          className="flex min-h-[52px] items-center justify-center gap-2.5 rounded bg-[var(--ink)] text-base font-semibold text-[var(--bg)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <path d="M14 14h3v3h-3z" />
            <path d="M20 14v3" />
            <path d="M17 20h4" />
          </svg>
          Scan tag
        </button>
        <button type="button" onClick={onGoRegister} className="min-h-6 text-center text-sm font-semibold" style={{ color: 'var(--link)' }}>
          Add from site register
        </button>
      </div>
    </>
  );
};

const RegisterScreen: React.FC<{
  visitCount: number;
  siteTotal: number;
  otherVisitDevices: Device[];
  otherVisitRemaining: Device[];
  onAdd: (id: string) => void;
  addAllArmed: boolean;
  onAddAll: () => void;
  onClose: () => void;
}> = ({ visitCount, siteTotal, otherVisitDevices, otherVisitRemaining, onAdd, addAllArmed, onAddAll, onClose }) => {
  const [query, setQuery] = useState('');
  const filtered = otherVisitDevices.filter((d) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return d.id.toLowerCase().includes(q) || d.kind.toLowerCase().includes(q) || d.loc.toLowerCase().includes(q);
  });

  return (
    <>
      <Header title="Equipment on this site" subtitle="Ashvale House" />
      <div className="flex flex-grow flex-col gap-3 overflow-y-auto p-3">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink2)' }}>
          This visit covers {visitCount} of {siteTotal} devices at the site. The rest are on other visits this year - add one only if you are servicing it today.
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="reg-search" className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Search
          </label>
          <input
            id="reg-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Asset ID, kind or location"
            className="min-h-11 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 text-sm"
          />
        </div>

        <div className="flex flex-col divide-y divide-[var(--line)] rounded border border-[var(--line)] bg-[var(--card)]">
          {filtered.map((d) => (
            <div key={d.id} className="flex items-center gap-2.5 px-3 py-2.5">
              <span className="min-w-0 flex-grow">
                <span className="flex items-center gap-1.5">
                  <span className="mono text-[13px] font-bold">{d.id}</span>
                  <span className="text-[13px]">{d.kind}</span>
                  {!d.addedToVisit && (
                    <span className="rounded bg-[var(--chip)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--ink2)' }}>
                      Other visit
                    </span>
                  )}
                </span>
                <span className="block truncate text-[11px]" style={{ color: 'var(--ink2)' }}>{d.loc}</span>
              </span>
              {d.addedToVisit ? (
                <span className="flex-shrink-0 rounded border border-[var(--ok-ink)] bg-[var(--ok-bg)] px-2 py-1.5 text-[11px] font-bold" style={{ color: 'var(--ok-ink)' }}>Added</span>
              ) : (
                <button
                  type="button"
                  onClick={() => onAdd(d.id)}
                  className="min-h-9 flex-shrink-0 rounded border border-[var(--accent)] bg-[var(--card)] px-2.5 text-[13px] font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  + Add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
        <button
          type="button"
          onClick={onAddAll}
          disabled={otherVisitRemaining.length === 0}
          className="flex min-h-12 items-center justify-center rounded border border-[var(--accent)] bg-[var(--accent)] text-[15px] font-semibold text-[var(--on-accent)] disabled:opacity-50"
        >
          {addAllArmed ? `Tap again to add all ${otherVisitRemaining.length}` : `Add all ${otherVisitRemaining.length}`}
        </button>
        <button type="button" onClick={onClose} className="min-h-11 rounded border border-[var(--line)] text-sm font-semibold">
          Close
        </button>
      </div>
    </>
  );
};

const SignoffScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [name, setName] = useState('');
  const [declared, setDeclared] = useState(false);
  const [toast, setToast] = useState(false);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    const ctx = canvasRef.current?.getContext('2d');
    const { x, y } = getPos(e);
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };
  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext('2d');
    const { x, y } = getPos(e);
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#141619';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  };
  const end = () => {
    drawing.current = false;
  };
  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <Header title="Fire Alarm Service" subtitle="Ashvale House" />
      <div className="flex flex-grow flex-col gap-3 overflow-y-auto p-3">
        <p className="text-sm leading-relaxed">
          This certifies that the fire alarm system at this site has been serviced in accordance with BS 5839-1. Devices marked Fault or Missing above have been reported to the responsible person.
        </p>

        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Customer signature</span>
          <canvas
            ref={canvasRef}
            width={342}
            height={140}
            aria-label="Signature pad - draw your signature here"
            role="img"
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerLeave={end}
            className="touch-none rounded border border-[var(--line)] bg-[var(--card)]"
          />
          <button type="button" onClick={clear} className="mt-1 self-start rounded border border-[var(--line)] px-3 py-1.5 text-sm">
            Clear
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="signoff-name" className="text-[11px] font-semibold" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Name
          </label>
          <input
            id="signoff-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Print name"
            className="min-h-11 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 text-sm"
          />
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={declared}
            onChange={(e) => setDeclared(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0"
          />
          I confirm the work above was carried out as recorded.
        </label>

        <button
          type="button"
          onClick={() => {
            setToast(true);
            setTimeout(() => setToast(false), 3000);
          }}
          className="flex min-h-12 items-center justify-center rounded bg-[var(--ink)] text-base font-semibold text-[var(--bg)]"
        >
          Mark complete
        </button>

        {toast && (
          <div role="status" className="rounded border border-[var(--ok-ink)] bg-[var(--ok-bg)] px-3 py-2 text-sm font-semibold" style={{ color: 'var(--ok-ink)' }}>
            Saved on the device - syncs when signal returns
          </div>
        )}
      </div>
    </>
  );
};
