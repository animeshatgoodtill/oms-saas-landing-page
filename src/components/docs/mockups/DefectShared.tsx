'use client';

/**
 * Shared data + pieces for the three defect mockups (DefectDeleteJourney,
 * DefectOfficeCard, DefectScopeRemoveVsDelete).
 *
 * Copy is lifted verbatim from the app (app 5.51.0):
 *   - components/defects/DeleteDefectDialog.tsx - the confirm dialog + toast wording
 *   - components/field/defects/defects-body.tsx - severity tiles, the edit form
 *   - components/field/defect-card.tsx - the field list card
 *   - jobs/[jobId]/_components/OverviewTab.tsx - the office Defects card
 *   - components/job-sheets/RemedialScopeItemsView.tsx - "Remove from scope"
 * Demo content only (Sunrise Care Home), never a real customer.
 */

import React, { useEffect, useId, useRef } from 'react';
import { LuAlertCircle, LuCamera, LuCheck, LuCircleDot, LuImage, LuInfo, LuMapPin } from 'react-icons/lu';
import type { IconType } from 'react-icons';

import './defect-mockups.css';

/* ---------------------------------------------------------------------- */
/* Demo data                                                                */
/* ---------------------------------------------------------------------- */

export type Severity = 'observation' | 'minor' | 'major' | 'critical';

export interface DemoDefect {
  id: string;
  severity: Severity;
  /** The raw category value - the office card prints it with underscores as spaces. */
  category: string;
  /** The field form's select label for that value. */
  categoryLabel: string;
  description: string;
  location: string;
  action: string;
  /** Already formatted the way lib/parts/format.ts formatPartsSummary does it. */
  parts: string;
  hours: string;
  engineers: string;
  photoCount: number;
  quoteRequired: boolean;
  quoteNumber?: string;
  quoteStatus?: string;
}

export const SITE = 'Sunrise Care Home';
export const JOB_NUMBER = 'JOB-000214';
export const QUOTE_NUMBER = 'QT-2026-0097';

export const CALL_POINT: DemoDefect = {
  id: 'def-call-point',
  severity: 'major',
  category: 'call_point',
  categoryLabel: 'Call Point',
  description: 'Call point cover cracked - Level 2 stair',
  location: 'Level 2 stair, by door L2.04',
  action: 'Replace the call point cover',
  parts: 'Call point cover, red #CPC-R01',
  hours: '0.5',
  engineers: '1',
  photoCount: 1,
  quoteRequired: true,
};

export const SOUNDER: DemoDefect = {
  id: 'def-sounder',
  severity: 'minor',
  category: 'sounder',
  categoryLabel: 'Sounder/Bell',
  description: 'Sounder not audible in plant room',
  location: 'Basement plant room',
  action: 'Fit an additional sounder by the boiler',
  parts: 'Wall sounder, red #WS-R32, Deep back box #BB-32',
  hours: '2',
  engineers: '1',
  photoCount: 6,
  quoteRequired: true,
  quoteNumber: QUOTE_NUMBER,
  quoteStatus: 'draft',
};

export const CATEGORY_OPTIONS: { value: string; label: string }[] = [
  { value: 'detector', label: 'Smoke/Heat Detector' },
  { value: 'call_point', label: 'Call Point' },
  { value: 'sounder', label: 'Sounder/Bell' },
  { value: 'panel', label: 'Control Panel' },
  { value: 'wiring', label: 'Wiring/Cabling' },
  { value: 'battery', label: 'Battery/Power' },
  { value: 'signage', label: 'Signage' },
  { value: 'emergency_light', label: 'Emergency Lighting' },
  { value: 'extinguisher', label: 'Fire Extinguisher' },
  { value: 'door', label: 'Fire Door' },
  { value: 'documentation', label: 'Documentation' },
  { value: 'other', label: 'Other' },
];

/** Verbatim from lib/deficiencies/delete-eligibility (via the fact sheet). */
export const QUOTE_BLOCK_REASON = `This defect is on ${QUOTE_NUMBER}. Remove it from the quote first.`;

/** Verbatim from DeleteDefectDialog. */
export const OFFLINE_REASON =
  "You're offline. Deleting a defect needs a connection, so try again once you're back online.";

/** Mirrors defectDeletedMessage() in DeleteDefectDialog. */
export function deletedMessage(photosRetired: number): string {
  if (photosRetired <= 0) return 'Defect deleted';
  return `Defect deleted, with ${photosRetired === 1 ? 'its photo' : `${photosRetired} photos`}`;
}

/* ---------------------------------------------------------------------- */
/* Styles                                                                   */
/* ---------------------------------------------------------------------- */

export const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

export const SEVERITY_LABEL: Record<Severity, string> = {
  observation: 'Observation',
  minor: 'Minor',
  major: 'Major',
  critical: 'Critical',
};

/** Badge / pill tone per severity (the app's muted / warning / error / error). */
export const SEVERITY_TONE: Record<Severity, string> = {
  observation: 'border-[var(--line)] bg-[var(--chip)] text-[var(--ink2)]',
  minor: 'border-[var(--warn-ink)] bg-[var(--warn-bg)] text-[var(--warn-ink)]',
  major: 'border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[var(--bad-ink)]',
  critical: 'border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[var(--bad-ink)]',
};

/** The field card's left-border accent. */
export const SEVERITY_BORDER: Record<Severity, string> = {
  observation: 'border-l-[var(--ink2)]',
  minor: 'border-l-[var(--warn-ink)]',
  major: 'border-l-[var(--bad-ink)]',
  critical: 'border-l-[var(--bad-ink)]',
};

export const SeverityBadge: React.FC<{ severity: Severity }> = ({ severity }) => (
  <span
    className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${SEVERITY_TONE[severity]}`}
  >
    {SEVERITY_LABEL[severity]}
  </span>
);

/* ---------------------------------------------------------------------- */
/* Small pieces                                                             */
/* ---------------------------------------------------------------------- */

/** A neutral hatched tile standing in for a defect photo - no external image. */
export const PhotoTile: React.FC<{ label: string; size?: 'sm' | 'md' }> = ({ label, size = 'md' }) => (
  <span
    role="img"
    aria-label={label}
    className={`defect-photo-tile flex flex-shrink-0 items-center justify-center rounded-md border border-[var(--line)] text-[var(--ink2)] ${
      size === 'sm' ? 'h-10 w-10' : 'h-12 w-12'
    }`}
  >
    <LuImage className="h-4 w-4" aria-hidden="true" />
  </span>
);

/** The field list card (components/field/defect-card.tsx), simplified. */
export const FieldDefectCard: React.FC<{ defect: DemoDefect }> = ({ defect }) => (
  <div
    className={`rounded-lg border border-l-4 border-[var(--line)] bg-[var(--card)] p-3.5 ${SEVERITY_BORDER[defect.severity]}`}
  >
    <div className="flex flex-wrap items-center gap-1.5">
      <SeverityBadge severity={defect.severity} />
      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink2)' }}>
        {defect.categoryLabel}
      </span>
    </div>
    <p className="mt-2 text-[14px] leading-snug">{defect.description}</p>
    <p className="mt-1.5 inline-flex items-center gap-1 text-[12px]" style={{ color: 'var(--ink2)' }}>
      <LuMapPin className="h-3 w-3" aria-hidden="true" />
      {defect.location}
    </p>
    {(defect.quoteNumber || defect.photoCount > 0) && (
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        {defect.quoteNumber && (
          <span className="text-[12px] font-semibold" style={{ color: 'var(--accent)' }}>
            {`Quote ${defect.quoteNumber} raised`}
          </span>
        )}
        {defect.photoCount > 0 && (
          <span className="mono inline-flex items-center gap-1 text-[12px]" style={{ color: 'var(--ink2)' }}>
            <LuCamera className="h-3 w-3" aria-hidden="true" />
            {defect.photoCount} photo{defect.photoCount > 1 ? 's' : ''}
          </span>
        )}
      </div>
    )}
  </div>
);

/* ---------------------------------------------------------------------- */
/* Severity tiles - a real radio group (arrow keys move the choice)         */
/* ---------------------------------------------------------------------- */

const SEVERITY_TILES: { value: Severity; help: string; Icon: IconType; active: string }[] = [
  { value: 'observation', help: 'Advisory only', Icon: LuInfo, active: 'border-[var(--ink2)] bg-[var(--chip)] text-[var(--ink)]' },
  { value: 'minor', help: 'Next routine visit', Icon: LuCircleDot, active: 'border-[var(--warn-ink)] bg-[var(--warn-bg)] text-[var(--warn-ink)]' },
  { value: 'major', help: 'Within 28 days', Icon: LuAlertCircle, active: 'border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[var(--bad-ink)]' },
  { value: 'critical', help: 'Immediate action', Icon: LuAlertCircle, active: 'border-[var(--bad-ink)] bg-[var(--bad-bg)] text-[var(--bad-ink)]' },
];

export const SeverityTiles: React.FC<{
  value: Severity;
  onChange: (s: Severity) => void;
  /** 'wide' lays the four tiles in one row from the sm breakpoint (office form). */
  layout?: 'phone' | 'wide';
}> = ({ value, onChange, layout = 'phone' }) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, delta: number) => {
    const next = (from + delta + SEVERITY_TILES.length) % SEVERITY_TILES.length;
    onChange(SEVERITY_TILES[next].value);
    refs.current[next]?.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>
        Severity <span style={{ color: 'var(--bad-ink)' }}>*</span>
      </p>
      <div
        role="radiogroup"
        aria-label="Severity"
        aria-required="true"
        className={`grid grid-cols-2 gap-2 ${layout === 'wide' ? 'sm:grid-cols-4' : ''}`}
      >
        {SEVERITY_TILES.map((t, i) => {
          const checked = value === t.value;
          return (
            <button
              key={t.value}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-label={`${SEVERITY_LABEL[t.value]} - ${t.help}`}
              tabIndex={checked ? 0 : -1}
              onClick={() => onChange(t.value)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  move(i, 1);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  move(i, -1);
                }
              }}
              className={`flex min-h-[52px] items-center gap-2.5 rounded-md border-2 px-3 py-2 text-left transition-colors duration-mechanical ease-mechanical motion-reduce:transition-none ${
                checked ? t.active : 'border-[var(--line)] bg-[var(--bg)] text-[var(--ink)]'
              }`}
            >
              <t.Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="block">
                <span className="block text-[13px] font-bold leading-tight">{SEVERITY_LABEL[t.value]}</span>
                <span className="mt-0.5 block text-[10px] leading-tight opacity-80">{t.help}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/* inert helper - keeps Tab out of what sits behind an open dialog          */
/* ---------------------------------------------------------------------- */

export function useInert(ref: React.RefObject<HTMLElement>, active: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (active) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
    return () => el.removeAttribute('inert');
  }, [ref, active]);
}

/* ---------------------------------------------------------------------- */
/* "Delete this defect?" - DeleteDefectDialog, verbatim copy                */
/* ---------------------------------------------------------------------- */

export const DeleteDialogMock: React.FC<{
  defect: DemoDefect;
  offline?: boolean;
  deletePhotos: boolean;
  onDeletePhotosChange: (v: boolean) => void;
  onKeep: () => void;
  onDelete: () => void;
  /** 'phone' stacks the buttons (the app's small-screen footer); 'desktop' puts them in a row. */
  variant: 'phone' | 'desktop';
  /** Move focus into the dialog when it opens (only when the reader opened it from inside the mockup). */
  autoFocus?: boolean;
}> = ({ defect, offline = false, deletePhotos, onDeletePhotosChange, onKeep, onDelete, variant, autoFocus = false }) => {
  const uid = useId();
  const keepRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autoFocus) keepRef.current?.focus({ preventScroll: true });
  }, [autoFocus]);

  const photoLabel = defect.photoCount === 1 ? 'photo' : `${defect.photoCount} photos`;

  return (
    <div className="defect-anim-fade absolute inset-0 z-20 flex items-center justify-center p-4" style={{ background: 'var(--scrim)' }}>
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        aria-describedby={`${uid}-desc`}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.stopPropagation();
            onKeep();
          }
        }}
        className={`defect-anim-rise flex w-full flex-col gap-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-5 shadow-xl ${
          variant === 'phone' ? 'max-w-[340px]' : 'max-w-[440px]'
        }`}
      >
        <div className="flex flex-col gap-2">
          <h4 id={`${uid}-title`} className="text-[17px] font-semibold leading-tight">
            Delete this defect?
          </h4>
          <p id={`${uid}-desc`} className="text-sm leading-relaxed" style={{ color: 'var(--ink2)' }}>
            For a defect raised by mistake, such as on the wrong job. It will be removed from this job, its job
            sheets and the site&apos;s defect register.
          </p>
        </div>

        <div className="rounded-md border border-[var(--line)] bg-[var(--surf)] p-3 text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--ink2)' }}>
            {SEVERITY_LABEL[defect.severity]}
          </p>
          <p className="mt-1">{defect.description}</p>
          <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: 'var(--ink2)' }}>
            <LuMapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            {defect.location}
          </p>
        </div>

        {defect.photoCount > 0 && (
          <div className="flex items-start gap-3">
            <input
              id={`${uid}-photos`}
              type="checkbox"
              checked={deletePhotos}
              onChange={(e) => onDeletePhotosChange(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[var(--accent)]"
            />
            <label htmlFor={`${uid}-photos`} className="text-sm leading-snug">
              Also delete its {photoLabel}
              <span className="block text-xs" style={{ color: 'var(--ink2)' }}>
                Photos can be restored from the job&apos;s Photos for 30 days.
              </span>
            </label>
          </div>
        )}

        <p className="text-sm font-medium">The defect itself can&apos;t be restored.</p>

        {offline && (
          <p
            role="alert"
            className="rounded-md border border-[var(--bad-ink)] bg-[var(--bad-bg)] px-3 py-2 text-sm"
            style={{ color: 'var(--bad-ink)' }}
          >
            {OFFLINE_REASON}
          </p>
        )}

        <div className={`flex flex-col-reverse gap-2 ${variant === 'desktop' ? 'sm:flex-row sm:justify-end' : ''}`}>
          <button
            ref={keepRef}
            type="button"
            onClick={onKeep}
            className="min-h-11 rounded-md border border-[var(--line)] bg-[var(--card)] px-4 !text-sm !font-semibold sm:min-h-10"
          >
            Keep it
          </button>
          <button
            type="button"
            onClick={onDelete}
            disabled={offline}
            className="min-h-11 rounded-md border border-[var(--bad-ink)] bg-[var(--bad-ink)] px-4 !text-sm !font-semibold text-[var(--on-accent)] disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-10"
          >
            Delete defect
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/* Toast                                                                    */
/* ---------------------------------------------------------------------- */

/** Always-mounted live region, so a toast that appears is announced. */
export const ToastRegion: React.FC<{ message: string | null; className?: string }> = ({ message, className }) => (
  <div role="status" aria-live="polite" className={className}>
    {message && (
      <div className="defect-anim-rise flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-2.5 text-sm font-semibold shadow-lg">
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ok-bg)]" style={{ color: 'var(--ok-ink)' }}>
          <LuCheck className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        {message}
      </div>
    )}
  </div>
);
