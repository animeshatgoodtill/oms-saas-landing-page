'use client';

import React, { useMemo, useRef, useState } from 'react';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';
import { dealGroupsAcrossVisits, type DealGroup } from './deal-groups';

/**
 * Device outcome vocabulary matches the shipped device test list
 * (lib/job-sheets/device-list/model.ts `DeviceStatus`, app 5.55.0):
 *  - todo        nothing recorded yet.
 *  - tested      a tap on the row (or the card's Tested button) - pass.
 *  - fault       card only - a result the row tap never sets or clears.
 *  - not_tested  recorded but not serviced - stays due, rolls forward.
 *  - missing     the card's Missing action - card only, like fault.
 */
type DeviceStatus = 'todo' | 'tested' | 'fault' | 'not_tested' | 'missing';

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
const VISIT_INDEX = 1; // "Visit 2 of 4" - 0-indexed
const ALL_VISIT_CHUNKS = dealGroupsAcrossVisits(ZONE_GROUPS, 4);
const VISIT_ZONES = ALL_VISIT_CHUNKS[VISIT_INDEX].map((g) => Number(g.label));
// Devices done on an earlier visit THIS cycle - the chunks before this one,
// fully completed. Derived rather than hardcoded so it can't drift from
// VISIT_ZONES either (visit 1 = zone 1 = 29 devices).
const DONE_EARLIER_THIS_CYCLE = ALL_VISIT_CHUNKS.slice(0, VISIT_INDEX).reduce(
  (sum, chunk) => sum + chunk.reduce((s, g) => s + g.count, 0),
  0
);

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
  // Visit 2 demo state: 2 tested, 1 fault, within the zones this visit
  // actually covers (zones 2-3, device numbers 30-38 - see VISIT_ZONES above).
  const tested = new Set([30, 36]);
  const fault = new Set([34]);
  const out: Device[] = [];
  let n = 0;
  for (let z = 0; z < 6; z++) {
    for (let i = 0; i < ZONE_SIZES[z]; i++) {
      n += 1;
      const status: DeviceStatus = tested.has(n) ? 'tested' : fault.has(n) ? 'fault' : 'todo';
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

/** Ink + background pair per status - the ring on a row, the active Result/Missing button, and the trailing word. */
const STATUS_STYLE: Record<DeviceStatus, { ink: string; bg: string }> = {
  todo: { ink: 'var(--ink2)', bg: 'var(--card)' },
  tested: { ink: 'var(--ok-ink)', bg: 'var(--ok-bg)' },
  fault: { ink: 'var(--bad-ink)', bg: 'var(--bad-bg)' },
  not_tested: { ink: 'var(--ink2)', bg: 'var(--chip)' },
  missing: { ink: 'var(--warn-ink)', bg: 'var(--warn-bg)' },
};

const STATUS_LABEL: Record<DeviceStatus, string> = {
  todo: 'To do',
  tested: 'Tested',
  fault: 'Fault',
  not_tested: 'Not tested',
  missing: 'Missing',
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
  devices: 'The worksheet opens with this visit’s share already listed as a tap-to-test list, grouped by zone - the engineer records, rather than re-types. Anything left untested rolls forward to the next visit.',
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

  const visitDevices = useMemo(
    () => devices.filter((d) => VISIT_ZONES.includes(d.zone) || d.addedToVisit),
    [devices]
  );

  // The Job screen's own three-up count (Due / Done / Fault) - independent of
  // whatever filter, search or selection is live on the Devices screen.
  const jobCounts = useMemo(
    () => ({
      due: visitDevices.filter((d) => d.status === 'todo').length,
      done: visitDevices.filter((d) => d.status !== 'todo').length,
      fault: visitDevices.filter((d) => d.status === 'fault').length,
    }),
    [visitDevices]
  );

  const setStatus = (id: string, status: DeviceStatus) => {
    setDevices((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  };

  /** One atomic update for a bulk action (group "Mark N tested", multi-select) - so an Undo can restore exactly the rows it touched. */
  const setManyStatuses = (updates: { id: string; status: DeviceStatus }[]) => {
    if (updates.length === 0) return;
    const patch = new Map(updates.map((u) => [u.id, u.status]));
    setDevices((prev) => prev.map((d) => (patch.has(d.id) ? { ...d, status: patch.get(d.id)! } : d)));
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
              due={jobCounts.due}
              done={jobCounts.done}
              fault={jobCounts.fault}
              total={visitDevices.length}
              doneEarlier={DONE_EARLIER_THIS_CYCLE}
              onContinue={() => goTo('devices')}
              onSignoff={() => goTo('signoff')}
            />
          </PhoneFrame>
        )}

        {step === 'devices' && (
          <PhoneFrame ariaLabel="Devices this visit: a searchable, filterable, one-tap test list grouped by zone">
            <DevicesScreen
              devices={devices}
              setStatus={setStatus}
              setManyStatuses={setManyStatuses}
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

/* ---------------------------------------------------------------------- */
/* Devices this visit - the device test list                              */
/* ---------------------------------------------------------------------- */

const SCAN_TARGET_ID = 'L1 A033';
/** Mirrors the app's BULK_ARM_THRESHOLD (lib/job-sheets/device-list): a
 * zone's own "Mark N tested" always needs a second tap; only a large
 * multi-select does. */
const BULK_ARM_THRESHOLD = 20;

type StatusFilter = 'all' | 'todo' | 'tested' | 'fault' | 'not_tested';
type SortMode = 'panel' | 'location' | 'todo_first';

const SORT_OPTIONS: { id: SortMode; label: string; hint: string }[] = [
  { id: 'panel', label: 'Panel order', hint: 'Zone first - matches the panel' },
  { id: 'location', label: 'Location A-Z', hint: 'For walking the building room by room' },
  { id: 'todo_first', label: 'To do first', hint: 'Not yet tested at the top' },
];

interface BulkResult {
  updates: { id: string; status: DeviceStatus }[];
  prev: { id: string; status: DeviceStatus }[];
  skipped: number;
}

/** Mirrors lib/job-sheets/device-list/model.ts `applyBulk`: a recorded
 * Fault or Missing is never quietly overwritten by anything other than an
 * explicit "Mark as fault". */
function planBulk(devices: Device[], ids: ReadonlySet<string>, outcome: 'tested' | 'fault' | 'not_tested'): BulkResult {
  const updates: BulkResult['updates'] = [];
  const prev: BulkResult['prev'] = [];
  let skipped = 0;
  for (const d of devices) {
    if (!ids.has(d.id)) continue;
    if (d.status === 'missing' || (d.status === 'fault' && outcome !== 'fault')) {
      skipped++;
      continue;
    }
    if (d.status === outcome) continue;
    prev.push({ id: d.id, status: d.status });
    updates.push({ id: d.id, status: outcome });
  }
  return { updates, prev, skipped };
}

const DevicesScreen: React.FC<{
  devices: Device[];
  setStatus: (id: string, status: DeviceStatus) => void;
  setManyStatuses: (updates: { id: string; status: DeviceStatus }[]) => void;
  onGoRegister: () => void;
}> = ({ devices, setStatus, setManyStatuses, onGoRegister }) => {
  const [filter, setFilter] = useState<StatusFilter>('all');
  const [query, setQuery] = useState('');
  const [sortIdx, setSortIdx] = useState(0);
  const sort = SORT_OPTIONS[sortIdx];

  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const [armedGroup, setArmedGroup] = useState<number | null>(null);
  const [armedBulk, setArmedBulk] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [armedMore, setArmedMore] = useState<'fault' | 'not_tested' | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [scanOpen, setScanOpen] = useState(false);
  const [zoneOpen, setZoneOpen] = useState<Record<number, boolean>>({});
  const [undo, setUndo] = useState<{ message: string; onUndo: () => void } | null>(null);
  const undoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showUndo = (message: string, onUndo: () => void) => {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setUndo({ message, onUndo });
    undoTimer.current = setTimeout(() => setUndo(null), 5000);
  };

  const visitDevices = useMemo(
    () => devices.filter((d) => VISIT_ZONES.includes(d.zone) || d.addedToVisit),
    [devices]
  );

  const counts = useMemo(
    () => ({
      total: visitDevices.length,
      todo: visitDevices.filter((d) => d.status === 'todo').length,
      tested: visitDevices.filter((d) => d.status === 'tested').length,
      fault: visitDevices.filter((d) => d.status === 'fault').length,
      notTested: visitDevices.filter((d) => d.status === 'not_tested').length,
    }),
    [visitDevices]
  );

  const chips: { id: StatusFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: counts.total },
    { id: 'todo', label: 'To do', count: counts.todo },
    { id: 'tested', label: 'Tested', count: counts.tested },
    { id: 'fault', label: 'Faults', count: counts.fault },
    ...(counts.notTested > 0 ? [{ id: 'not_tested' as const, label: 'Not tested', count: counts.notTested }] : []),
  ];

  const matches = (d: Device) => {
    if (filter !== 'all' && d.status !== filter) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return d.id.toLowerCase().includes(q) || d.kind.toLowerCase().includes(q) || d.loc.toLowerCase().includes(q);
  };

  const filtering = filter !== 'all' || query.trim() !== '';

  const zoneGroups = VISIT_ZONES.map((zone) => {
    const all = visitDevices.filter((d) => d.zone === zone);
    const doneCount = all.filter((d) => d.status !== 'todo').length;
    return { zone, all, doneCount, rows: all.filter(matches) };
  });

  const addedRows = visitDevices.filter((d) => d.addedToVisit && !VISIT_ZONES.includes(d.zone)).filter(matches);

  const visibleIds = useMemo(
    () => [...addedRows, ...zoneGroups.flatMap((g) => g.rows)].map((d) => d.id),
    [addedRows, zoneGroups]
  );

  const collapsedZones = [1, 2, 3, 4, 5, 6]
    .filter((z) => !VISIT_ZONES.includes(z))
    .map((zone) => ({ zone, all: devices.filter((d) => d.zone === zone) }));

  const onRowTap = (d: Device) => {
    if (d.status === 'fault' || d.status === 'missing') {
      setOpenId(d.id);
      return;
    }
    if (d.status === 'tested') {
      setStatus(d.id, 'todo');
      showUndo(`${d.id} back to to do`, () => setStatus(d.id, 'tested'));
    } else {
      setStatus(d.id, 'tested');
    }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const exitSelect = () => {
    setSelecting(false);
    setSelected(new Set());
    setArmedBulk(false);
    setArmedMore(null);
    setMoreOpen(false);
  };

  const markZoneTested = (zone: number, todoIds: string[]) => {
    if (armedGroup !== zone) {
      setArmedGroup(zone);
      return;
    }
    setArmedGroup(null);
    const { updates, prev } = planBulk(devices, new Set(todoIds), 'tested');
    if (updates.length === 0) return;
    setManyStatuses(updates);
    showUndo(`${updates.length} marked tested`, () => setManyStatuses(prev));
  };

  const bulkMarkTested = () => {
    if (selected.size >= BULK_ARM_THRESHOLD && !armedBulk) {
      setArmedBulk(true);
      return;
    }
    setArmedBulk(false);
    const { updates, prev, skipped } = planBulk(devices, selected, 'tested');
    if (updates.length > 0) {
      setManyStatuses(updates);
      showUndo(`${updates.length} marked tested${skipped > 0 ? ` - ${skipped} skipped, already recorded` : ''}`, () => setManyStatuses(prev));
    }
    exitSelect();
  };

  const bulkFromMore = (outcome: 'fault' | 'not_tested') => {
    if (selected.size >= BULK_ARM_THRESHOLD && armedMore !== outcome) {
      setArmedMore(outcome);
      return;
    }
    setArmedMore(null);
    const { updates, prev, skipped } = planBulk(devices, selected, outcome);
    if (updates.length > 0) {
      setManyStatuses(updates);
      showUndo(
        `${updates.length} marked ${outcome === 'fault' ? 'fault' : 'not tested'}${skipped > 0 ? ` - ${skipped} skipped, already recorded` : ''}`,
        () => setManyStatuses(prev)
      );
    }
    exitSelect();
  };

  const scanTarget = devices.find((d) => d.id === SCAN_TARGET_ID) ?? null;

  return (
    <>
      <Header title="Fire Alarm Service" subtitle="Ashvale House" />

      <div className="flex flex-col gap-1.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-[15px] font-semibold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Devices this visit</span>
          <span className="mono text-[11px]" style={{ color: 'var(--ink2)' }}>Visit 2 of 4 · Zones {Math.min(...VISIT_ZONES)}–{Math.max(...VISIT_ZONES)}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="mono text-[20px] font-bold leading-none">
            {counts.tested}<span className="text-[13px]" style={{ color: 'var(--ink2)' }}>/{counts.total}</span>
          </span>
          <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>tested</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
        <label className="flex min-h-10 flex-grow items-center gap-1.5 rounded border border-[var(--line)] bg-[var(--card)] px-2.5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square" style={{ color: 'var(--ink2)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Asset no., location or address"
            aria-label="Search devices"
            className="min-h-9 w-full border-0 bg-transparent text-[13px] text-[var(--ink)] outline-none"
          />
        </label>
        <button
          type="button"
          aria-label="Scan a device tag"
          onClick={() => setScanOpen((v) => !v)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-[var(--line)] bg-[var(--card)]"
        >
          <ScanIcon size={17} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
        {chips.map((c) => (
          <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)} className={chipButton(filter === c.id)}>
            <span>{c.label}</span>
            <span className="mono font-bold">{c.count}</span>
          </button>
        ))}
        <span className="flex-grow" />
        <button
          type="button"
          onClick={() => setSortIdx((i) => (i + 1) % SORT_OPTIONS.length)}
          title={sort.hint}
          aria-label={`Sort: ${sort.label}. ${sort.hint}. Tap to change.`}
          className="flex min-h-9 flex-shrink-0 items-center gap-1 rounded border border-[var(--line)] bg-[var(--card)] px-2 text-[11px] font-semibold"
          style={{ color: 'var(--ink2)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
          {sort.label}
        </button>
      </div>

      {selecting && (
        <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-3 py-2" style={{ background: 'var(--stage)' }}>
          <label className="flex min-h-9 items-center gap-2 text-[13px] font-semibold">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={visibleIds.length > 0 && visibleIds.every((id) => selected.has(id))}
              onChange={(e) => setSelected(e.target.checked ? new Set(visibleIds) : new Set())}
            />
            Select all shown <span className="mono" style={{ color: 'var(--ink2)' }}>({visibleIds.length})</span>
          </label>
          <button type="button" onClick={exitSelect} className="min-h-9 px-1 text-[12px] font-semibold">
            Cancel
          </button>
        </div>
      )}

      <div className="flex flex-grow flex-col gap-3 overflow-y-auto px-3 py-2.5">
        {addedRows.length > 0 && (
          <section className="flex-shrink-0 overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
            <div className="flex min-h-10 items-center gap-2 border-b border-[var(--line)] bg-[var(--chip)] px-2.5 py-2">
              <span className="text-[13px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Added from register</span>
              <span className="mono flex-grow text-[11px]" style={{ color: 'var(--ink2)' }}>{addedRows.length} device{addedRows.length === 1 ? '' : 's'}</span>
            </div>
            {addedRows.map((d) => (
              <DeviceRowView
                key={d.id}
                device={d}
                selecting={selecting}
                selected={selected.has(d.id)}
                open={openId === d.id}
                onRowTap={() => onRowTap(d)}
                onToggleSelect={() => toggleSelect(d.id)}
                onToggleOpen={() => setOpenId((cur) => (cur === d.id ? null : d.id))}
                onSet={(status) => setStatus(d.id, status)}
              />
            ))}
          </section>
        )}

        {zoneGroups.map((g) => {
          const complete = g.doneCount === g.all.length;
          const isOpen = filtering || (zoneOpen[g.zone] ?? !complete);
          const armed = armedGroup === g.zone;
          const todoIds = g.all.filter((d) => d.status === 'todo').map((d) => d.id);
          return (
            <section key={g.zone} className="flex-shrink-0 overflow-hidden rounded border border-[var(--line)] bg-[var(--card)]">
              <div className="flex min-h-11 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--chip)] px-2 py-1.5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setZoneOpen((p) => ({ ...p, [g.zone]: !isOpen }))}
                  className="flex min-h-9 flex-grow items-center gap-1.5 px-1 text-left"
                >
                  <ChevronIcon open={isOpen} />
                  <span className="text-[14px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Zone {g.zone}</span>
                  <span className="mono ml-auto text-[13px] font-bold" style={{ color: complete ? 'var(--ok-ink)' : 'var(--ink)' }}>
                    {g.doneCount}/{g.all.length} done
                  </span>
                </button>
                {!selecting && todoIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => markZoneTested(g.zone, todoIds)}
                    className="min-h-9 flex-shrink-0 rounded border px-2.5 text-[12px] font-semibold"
                    style={
                      armed
                        ? { borderColor: 'var(--warn-ink)', background: 'var(--warn-bg)', color: 'var(--warn-ink)' }
                        : { borderColor: 'var(--accent)', color: 'var(--accent)' }
                    }
                  >
                    {armed ? `Tap again · ${todoIds.length}` : `Mark ${todoIds.length} tested`}
                  </button>
                )}
                {complete && (
                  <span className="flex flex-shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold" style={{ background: 'var(--ok-bg)', color: 'var(--ok-ink)' }}>
                    <CheckIcon size={11} /> Done
                  </span>
                )}
              </div>
              {isOpen &&
                g.rows.map((d) => (
                  <DeviceRowView
                    key={d.id}
                    device={d}
                    selecting={selecting}
                    selected={selected.has(d.id)}
                    open={openId === d.id}
                    onRowTap={() => onRowTap(d)}
                    onToggleSelect={() => toggleSelect(d.id)}
                    onToggleOpen={() => setOpenId((cur) => (cur === d.id ? null : d.id))}
                    onSet={(status) => setStatus(d.id, status)}
                  />
                ))}
              {isOpen && g.rows.length === 0 && (
                <p className="px-3 py-3 text-[12px]" style={{ color: 'var(--ink2)' }}>No devices match the current filter.</p>
              )}
            </section>
          );
        })}

        <div className="flex flex-shrink-0 flex-col gap-1.5">
          {collapsedZones.map((c) => (
            <div key={c.zone} className="flex min-h-11 items-center gap-2 rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2" style={{ color: 'var(--ink2)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--ink)', fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Zone {c.zone}</span>
              <span className="mono flex-grow text-[11px]">{c.all.length} devices</span>
              <span className="rounded bg-[var(--chip)] px-1.5 py-0.5 text-[11px]">Not due this visit</span>
            </div>
          ))}
        </div>
      </div>

      {scanOpen && (
        <div className="mx-3 mb-2 flex flex-col gap-2 rounded border border-[var(--line)] bg-[var(--card)] p-3">
          {scanTarget ? (
            <>
              <p className="text-[11px] font-semibold" style={{ color: 'var(--ok-ink)' }}>Found on this sheet</p>
              <p className="text-sm">
                <span className="mono font-bold">{scanTarget.id}</span> · {scanTarget.kind} · {scanTarget.loc}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setStatus(scanTarget.id, 'tested');
                    setScanOpen(false);
                  }}
                  className="min-h-11 flex-grow rounded text-sm font-semibold"
                  style={{ background: 'var(--ok-ink)', color: '#fff' }}
                >
                  Tested · scan next
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpenId(scanTarget.id);
                    setScanOpen(false);
                  }}
                  className="min-h-11 rounded border border-[var(--line)] px-3 text-sm font-semibold"
                >
                  Open card
                </button>
              </div>
            </>
          ) : (
            <p className="text-sm" style={{ color: 'var(--ink2)' }}>Point the camera at a device tag - works offline, matched against the site register on this phone.</p>
          )}
          <button type="button" onClick={() => setScanOpen(false)} className="min-h-9 self-start text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
            Close
          </button>
        </div>
      )}

      {undo && (
        <div role="status" className="mx-3 mb-2 flex items-center justify-between gap-3 rounded px-3 py-2 text-[13px] font-semibold" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
          <span>{undo.message}</span>
          <button
            type="button"
            onClick={() => {
              undo.onUndo();
              setUndo(null);
            }}
            className="min-h-9 px-1 font-bold"
            style={{ color: 'var(--gold)' }}
          >
            Undo
          </button>
        </div>
      )}

      {!selecting ? (
        <div className="flex flex-col gap-2 border-t border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setScanOpen((v) => !v)}
              className="flex min-h-[52px] flex-grow items-center justify-center gap-2.5 rounded bg-[var(--ink)] text-base font-semibold text-[var(--bg)]"
            >
              <ScanIcon size={20} />
              Scan tag
            </button>
            <button
              type="button"
              onClick={() => setSelecting(true)}
              className="flex min-h-[52px] flex-shrink-0 items-center gap-1.5 rounded border border-[var(--line)] px-3 text-[14px] font-semibold"
            >
              <SelectIcon size={17} />
              Select
            </button>
          </div>
          <button type="button" onClick={onGoRegister} className="min-h-6 text-center text-sm font-semibold" style={{ color: 'var(--link)' }}>
            Add from site register
          </button>
        </div>
      ) : moreOpen ? (
        <div className="flex flex-col gap-2 border-t border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
          <p className="text-[11px]" style={{ color: 'var(--ink2)' }}>{selected.size} selected - a fault or Missing already recorded is never overwritten.</p>
          <button
            type="button"
            onClick={() => bulkFromMore('fault')}
            className="min-h-11 rounded border text-[14px] font-semibold"
            style={{ borderColor: 'var(--bad-ink)', background: 'var(--bad-bg)', color: 'var(--bad-ink)' }}
          >
            {armedMore === 'fault' ? `Tap again · ${selected.size} as fault` : 'Mark as fault'}
          </button>
          <button type="button" onClick={() => bulkFromMore('not_tested')} className="min-h-11 rounded border border-[var(--line)] text-[14px] font-semibold">
            {armedMore === 'not_tested' ? `Tap again · ${selected.size} as not tested` : 'Record as not tested'}
          </button>
          <button
            type="button"
            onClick={() => {
              setMoreOpen(false);
              setArmedMore(null);
            }}
            className="min-h-9 text-[13px] font-semibold"
            style={{ color: 'var(--ink2)' }}
          >
            Back
          </button>
        </div>
      ) : (
        <div className="flex gap-2 border-t border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
          <button
            type="button"
            disabled={selected.size === 0}
            onClick={() => setMoreOpen(true)}
            className="min-h-12 flex-shrink-0 rounded border border-[var(--line)] px-4 text-[14px] font-semibold disabled:opacity-50"
          >
            More…
          </button>
          <button
            type="button"
            disabled={selected.size === 0}
            onClick={bulkMarkTested}
            data-testid="bulk-mark-tested"
            className="min-h-12 flex-grow rounded border text-[15px] font-bold disabled:opacity-50"
            style={
              armedBulk
                ? { borderColor: 'var(--warn-ink)', background: 'var(--warn-bg)', color: 'var(--warn-ink)' }
                : { borderColor: 'var(--ok-ink)', background: 'var(--ok-bg)', color: 'var(--ok-ink)' }
            }
          >
            {armedBulk ? `Tap again · ${selected.size}` : `Mark ${selected.size} tested`}
          </button>
        </div>
      )}
    </>
  );
};

const RowText: React.FC<{ device: Device }> = ({ device }) => (
  <span className="flex min-w-0 flex-grow flex-col">
    <span className="flex items-baseline gap-2">
      <span className="mono text-[13px] font-bold">{device.id}</span>
      <span className="truncate text-[12px]" style={{ color: 'var(--ink2)' }}>{device.kind}</span>
    </span>
    <span className="truncate text-[11px]" style={{ color: 'var(--ink2)' }}>
      {device.loc}
      {device.addedToVisit && !VISIT_ZONES.includes(device.zone) && (
        <span className="ml-1.5 rounded bg-[var(--chip)] px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide">from site register</span>
      )}
    </span>
  </span>
);

/** One compact line per device - tap the row to mark tested / undo; the
 * chevron always opens the card, whose Result / Missing / note are the
 * only way to a fault or a missing outcome (never a plain tap). */
const DeviceRowView: React.FC<{
  device: Device;
  selecting: boolean;
  selected: boolean;
  open: boolean;
  onRowTap: () => void;
  onToggleSelect: () => void;
  onToggleOpen: () => void;
  onSet: (status: DeviceStatus) => void;
}> = ({ device, selecting, selected, open, onRowTap, onToggleSelect, onToggleOpen, onSet }) => {
  const toggleable = device.status === 'todo' || device.status === 'tested' || device.status === 'not_tested';
  const style = STATUS_STYLE[device.status];

  return (
    <div className="border-t border-[var(--line)] first:border-t-0">
      <div className="flex items-stretch">
        {selecting ? (
          <label className="flex min-h-14 min-w-0 flex-grow items-center gap-2.5 px-3 py-2">
            <input
              type="checkbox"
              className="h-5 w-5 flex-shrink-0"
              checked={selected}
              onChange={onToggleSelect}
              aria-label={`Select ${device.id}`}
            />
            <RowText device={device} />
            {device.status !== 'todo' && (
              <span className="flex-shrink-0 text-[11px] font-bold" style={{ color: style.ink }}>{STATUS_LABEL[device.status]}</span>
            )}
          </label>
        ) : (
          <button
            type="button"
            onClick={onRowTap}
            aria-pressed={toggleable ? device.status === 'tested' : undefined}
            aria-label={
              toggleable
                ? `${device.status === 'tested' ? 'Tested. Tap to undo.' : 'Mark tested.'} ${device.id}, ${device.kind}, ${device.loc}`
                : `${STATUS_LABEL[device.status]}. Open the card to change. ${device.id}, ${device.kind}, ${device.loc}`
            }
            className="flex min-h-14 min-w-0 flex-grow items-center gap-2.5 px-3 py-2 text-left active:bg-[var(--chip)]"
          >
            <span
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2"
              style={{
                borderColor: device.status === 'todo' ? 'var(--ink2)' : style.ink,
                background: device.status === 'tested' || device.status === 'fault' ? style.ink : style.bg,
                borderStyle: device.status === 'not_tested' ? 'dashed' : 'solid',
              }}
              aria-hidden="true"
            >
              {device.status === 'tested' && <CheckIcon size={13} color="#fff" />}
              {device.status === 'fault' && <FaultIcon size={13} color="#fff" />}
            </span>
            <RowText device={device} />
            {device.status !== 'todo' && (
              <span className="flex-shrink-0 text-[11px] font-bold" style={{ color: style.ink }}>{STATUS_LABEL[device.status]}</span>
            )}
          </button>
        )}
        {!selecting && (
          <button
            type="button"
            aria-label={`Open the card: ${device.id}`}
            aria-expanded={open}
            onClick={onToggleOpen}
            className="flex w-10 flex-shrink-0 items-center justify-center border-l border-[var(--line)]"
            style={{ color: 'var(--ink2)' }}
          >
            <ChevronIcon open={open} />
          </button>
        )}
      </div>
      {open && !selecting && <DeviceCard device={device} onSet={onSet} />}
    </div>
  );
};

const RESULT_OPTIONS: { id: DeviceStatus; label: string }[] = [
  { id: 'tested', label: 'Tested' },
  { id: 'fault', label: 'Fault' },
  { id: 'not_tested', label: 'Not tested' },
];

/** The card - one tap away from every row via the chevron. Result mirrors
 * the app's three-way toggle; Missing and the note are the card-only
 * outcomes a plain tap never sets. */
const DeviceCard: React.FC<{ device: Device; onSet: (status: DeviceStatus) => void }> = ({ device, onSet }) => (
  <div className="flex flex-col gap-2.5 border-t border-dashed border-[var(--line)] bg-[var(--bg)] px-3 pb-3.5 pt-2.5">
    <fieldset>
      <legend className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--ink2)' }}>Result</legend>
      <div className="grid grid-cols-3 gap-1.5">
        {RESULT_OPTIONS.map((opt) => {
          const active = device.status === opt.id;
          const style = STATUS_STYLE[opt.id];
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={active}
              onClick={() => onSet(active ? 'todo' : opt.id)}
              className="min-h-11 rounded border text-[13px] font-semibold"
              style={active ? { borderColor: style.ink, background: style.bg, color: style.ink } : { borderColor: 'var(--line)', background: 'var(--card)', color: 'var(--ink)' }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
    <button
      type="button"
      aria-pressed={device.status === 'missing'}
      onClick={() => onSet(device.status === 'missing' ? 'todo' : 'missing')}
      className="min-h-10 rounded border text-[13px] font-semibold"
      style={
        device.status === 'missing'
          ? { borderColor: 'var(--warn-ink)', background: 'var(--warn-bg)', color: 'var(--warn-ink)' }
          : { borderColor: 'var(--line)', background: 'var(--card)', color: 'var(--ink2)' }
      }
    >
      Missing
    </button>
    <div className="flex flex-col gap-1">
      <label htmlFor={`note-${device.id}`} className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--ink2)' }}>
        Note
      </label>
      <input
        id={`note-${device.id}`}
        type="text"
        placeholder="e.g. head dusty, cleaned"
        className="min-h-10 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 text-[13px] text-[var(--ink)]"
      />
    </div>
  </div>
);

/* ---------------------------------------------------------------------- */
/* Small icons shared by the devices screen                                */
/* ---------------------------------------------------------------------- */

const ScanIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M14 14h3v3h-3z" />
    <path d="M20 14v3" />
    <path d="M17 20h4" />
  </svg>
);

const SelectIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 12.5l3 3 6-6" />
  </svg>
);

const CheckIcon: React.FC<{ size: number; color?: string }> = ({ size, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.8} strokeLinecap="square">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const FaultIcon: React.FC<{ size: number; color?: string }> = ({ size, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="square">
    <path d="M12 4l9 16H3l9-16z" />
    <path d="M12 10v5" />
    <path d="M12 17.5h.01" />
  </svg>
);

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="square"
    style={{ transform: open ? 'rotate(90deg)' : undefined, transition: 'transform 120ms', flexShrink: 0 }}
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/* ---------------------------------------------------------------------- */
/* Add from site register                                                  */
/* ---------------------------------------------------------------------- */

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
