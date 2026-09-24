'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { LuCamera, LuImagePlus, LuPencil, LuPlus, LuTrash2, LuWifiOff, LuX } from 'react-icons/lu';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';
import {
  CALL_POINT,
  CATEGORY_OPTIONS,
  DeleteDialogMock,
  FieldDefectCard,
  JOB_NUMBER,
  PhotoTile,
  QUOTE_BLOCK_REASON,
  SITE,
  SOUNDER,
  SeverityTiles,
  ToastRegion,
  deletedMessage,
  hdStyle,
  useInert,
  type DemoDefect,
  type Severity,
} from './DefectShared';

/**
 * The field app's delete-a-defect journey (app 5.51.0): Defects screen ->
 * Edit on the engineer's own defect -> "Delete defect" at the foot of the form
 * -> "Delete this defect?" -> toast + shorter list. Two side states: the
 * dialog while offline, and a quoted defect's form (the reason replaces the
 * button).
 */

type Step = 'list' | 'edit' | 'confirm' | 'deleted' | 'offline' | 'quoted';

const STEPS: { key: Step; label: string; variant?: boolean }[] = [
  { key: 'list', label: '1 Defects' },
  { key: 'edit', label: '2 Edit' },
  { key: 'confirm', label: '3 Confirm' },
  { key: 'deleted', label: '4 Deleted' },
  { key: 'offline', label: 'Offline', variant: true },
  { key: 'quoted', label: 'On a quote', variant: true },
];

const CAPTIONS: Record<Step, string> = {
  list: 'The Defects screen on the engineer’s phone. Delete lives inside Edit, and only on a defect you raised yourself.',
  edit: '“Delete defect” sits at the foot of the form, full-width and set apart below Save - never next to Cancel, where a gloved thumb would find it.',
  confirm: 'One check before it goes. Its photo is ticked to go too, and can be restored from the job’s Photos for 30 days. The defect itself can’t.',
  deleted: 'It is gone from the job, its job sheets and the site’s defect register. There is no undo - the check before it is the safeguard.',
  offline: 'Deleting needs a connection. Offline, the dialog says so and the button stays disabled until the phone is back online.',
  quoted: 'A defect on a quote can’t be deleted. The form says why, where the button would be.',
};

const ARIA: Record<Step, string> = {
  list: 'Field app Defects screen with two defects',
  edit: 'Edit defect form with Delete defect at the bottom',
  confirm: 'Delete this defect confirmation dialog',
  deleted: 'Defects screen after the delete, with a confirmation toast',
  offline: 'Delete this defect dialog while the phone is offline',
  quoted: 'Edit form of a quoted defect, showing why it cannot be deleted',
};

const tabClass = (active: boolean, variant?: boolean) =>
  `min-h-9 rounded border px-3 !text-[13px] !font-semibold ${
    active
      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]'
      : `${variant ? 'border-dashed' : ''} border-[var(--line)] bg-[var(--card)] text-[var(--ink)]`
  }`;

interface DefectDeleteJourneyProps {
  initialStep?: Step;
}

const DefectDeleteJourney: React.FC<DefectDeleteJourneyProps> = ({ initialStep = 'list' }) => {
  const uid = useId();
  const [step, setStep] = useState<Step>(initialStep);
  const [deletePhotos, setDeletePhotos] = useState(true);
  const [photosRetired, setPhotosRetired] = useState(CALL_POINT.photoCount);
  /** True only when the reader moved INSIDE the phone - then focus follows them. */
  const [focusInside, setFocusInside] = useState(false);
  /** Element id to focus after the next render (in-phone navigation only). */
  const pendingFocus = useRef<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const behindDialogRef = useRef<HTMLDivElement>(null);
  const scrollToFormTop = useRef(false);

  const idFor = (name: string) => `${uid}-${name}`;
  const dialogOpen = step === 'confirm' || step === 'offline';
  useInert(behindDialogRef, dialogOpen);

  const goTo = (s: Step, opts?: { inside?: boolean; focusId?: string }) => {
    if (s === 'confirm' || s === 'offline') setDeletePhotos(true); // fresh state per open, as the app does
    setFocusInside(Boolean(opts?.inside));
    pendingFocus.current = opts?.focusId ?? null;
    // Opening a form from its Edit button shows the form's top (focus goes to
    // its heading); every other way in shows its foot, where Delete lives.
    scrollToFormTop.current = opts?.focusId === idFor('form-heading');
    setStep(s);
  };

  // Scroll the phone so the part each step is about is on screen: the foot of
  // the form (where Delete lives) for the edit-form steps, the top otherwise.
  // Set on the phone's own scroller, never scrollIntoView - that would also
  // scroll the reader's page.
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const form = body.querySelector<HTMLElement>('[data-form]');
    const foot = body.querySelector<HTMLElement>('[data-form-foot]');
    if (form && scrollToFormTop.current) {
      body.scrollTop = Math.max(0, form.offsetTop - 12);
    } else if (foot) {
      body.scrollTop = Math.max(0, foot.offsetTop + foot.offsetHeight - body.clientHeight + 16);
    } else {
      body.scrollTop = 0;
    }
  }, [step]);

  useEffect(() => {
    const id = pendingFocus.current;
    pendingFocus.current = null;
    if (id) document.getElementById(id)?.focus({ preventScroll: true });
  }, [step]);

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % STEPS.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + STEPS.length) % STEPS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = STEPS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    goTo(STEPS[next].key);
    tabRefs.current[next]?.focus();
  };

  const editForm = (defect: DemoDefect, canDelete: boolean) => (
    <FieldDefectForm
      key={defect.id}
      defect={defect}
      headingId={idFor('form-heading')}
      deleteId={idFor('delete-btn')}
      canDelete={canDelete}
      onClose={() => goTo('list', { inside: true, focusId: idFor(`edit-${defect.id}`) })}
      onDelete={() => goTo('confirm', { inside: true })}
    />
  );

  const cardWithEdit = (defect: DemoDefect, target: Step) => (
    <div key={defect.id} className="flex flex-col gap-1">
      <FieldDefectCard defect={defect} />
      <div className="flex items-center justify-end">
        <button
          id={idFor(`edit-${defect.id}`)}
          type="button"
          onClick={() => goTo(target, { inside: true, focusId: idFor('form-heading') })}
          aria-label={`Edit defect: ${defect.description}`}
          className="flex min-h-11 items-center gap-1.5 rounded px-3 !text-[12px] !font-semibold"
        >
          <LuPencil className="h-3.5 w-3.5" aria-hidden="true" />
          Edit
        </button>
      </div>
    </div>
  );

  const addDefectButton = (
    <button
      type="button"
      className="mt-1 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--accent)] bg-[var(--due-bg)] px-4 !text-[14px] !font-semibold"
      style={{ color: 'var(--accent)' }}
    >
      <LuPlus className="h-4 w-4" aria-hidden="true" />
      Add defect
    </button>
  );

  let body: React.ReactNode;
  if (step === 'list') {
    body = (
      <>
        {cardWithEdit(CALL_POINT, 'edit')}
        {cardWithEdit(SOUNDER, 'quoted')}
        {addDefectButton}
      </>
    );
  } else if (step === 'edit' || step === 'confirm' || step === 'offline') {
    body = (
      <>
        {editForm(CALL_POINT, true)}
        {cardWithEdit(SOUNDER, 'quoted')}
      </>
    );
  } else if (step === 'quoted') {
    body = (
      <>
        {cardWithEdit(CALL_POINT, 'edit')}
        {editForm(SOUNDER, false)}
      </>
    );
  } else {
    body = (
      <>
        {cardWithEdit(SOUNDER, 'quoted')}
        {addDefectButton}
      </>
    );
  }

  return (
    <DocMockupFrame>
      <div className="defect-mockup not-prose my-8">
        <div role="tablist" aria-label="Deleting a defect, step by step" className="mb-4 flex flex-wrap justify-center gap-2">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={idFor(`tab-${s.key}`)}
              type="button"
              role="tab"
              aria-selected={step === s.key}
              aria-controls={idFor('panel')}
              tabIndex={step === s.key ? 0 : -1}
              onClick={() => goTo(s.key)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={tabClass(step === s.key, s.variant)}
              style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.04em' }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={idFor('panel')} aria-labelledby={idFor(`tab-${step}`)}>
          <PhoneFrame ariaLabel={ARIA[step]}>
            <div className="relative flex min-h-0 flex-1 flex-col">
              <div ref={behindDialogRef} className="flex min-h-0 flex-1 flex-col">
                <FieldHeader offline={step === 'offline'} />
                <div ref={bodyRef} className="relative flex flex-grow flex-col gap-3 overflow-y-auto p-3">
                  <h4 className="text-[15px] font-bold" style={hdStyle}>
                    Defects
                  </h4>
                  {body}
                </div>
              </div>

              {dialogOpen && (
                <DeleteDialogMock
                  defect={CALL_POINT}
                  offline={step === 'offline'}
                  deletePhotos={deletePhotos}
                  onDeletePhotosChange={setDeletePhotos}
                  variant="phone"
                  autoFocus={focusInside}
                  onKeep={() => goTo('edit', { inside: true, focusId: idFor('delete-btn') })}
                  onDelete={() => {
                    setPhotosRetired(deletePhotos ? CALL_POINT.photoCount : 0);
                    goTo('deleted', { inside: true, focusId: idFor(`edit-${SOUNDER.id}`) });
                  }}
                />
              )}

              <ToastRegion
                message={step === 'deleted' ? deletedMessage(photosRetired) : null}
                className="pointer-events-none absolute inset-x-3 bottom-3 z-10"
              />
            </div>
          </PhoneFrame>

          <p
            className="mx-auto mt-4 max-w-[390px] text-center text-sm leading-relaxed"
            style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-body)' }}
          >
            {CAPTIONS[step]}
          </p>
          {step === 'deleted' && (
            <div className="mt-2 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setPhotosRetired(CALL_POINT.photoCount);
                  goTo('list');
                }}
                className="min-h-9 rounded border border-[var(--line)] bg-[var(--card)] px-3 !text-[13px] !font-semibold"
              >
                Start again
              </button>
            </div>
          )}
        </div>
      </div>
    </DocMockupFrame>
  );
};

export default DefectDeleteJourney;

/* ---------------------------------------------------------------------- */
/* Screens                                                                  */
/* ---------------------------------------------------------------------- */

const FieldHeader: React.FC<{ offline: boolean }> = ({ offline }) => (
  <header className="flex items-center gap-2.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
    <button
      type="button"
      aria-label="Back"
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-[var(--line)] text-[var(--ink)]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square" aria-hidden="true">
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </button>
    <div className="min-w-0 flex-grow">
      <div className="truncate text-[17px] font-semibold leading-[19px]" style={hdStyle}>
        Fire Alarm Service
      </div>
      <div className="truncate text-xs leading-[15px]" style={{ color: 'var(--ink2)' }}>
        {SITE} · <span className="mono">{JOB_NUMBER}</span>
      </div>
    </div>
    {offline && (
      <div className="flex h-7 flex-shrink-0 items-center gap-1.5 rounded border border-[var(--warn-ink)] bg-[var(--warn-bg)] px-2.5 text-[var(--warn-ink)]">
        <LuWifiOff className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="mono text-[11px] font-bold">Offline</span>
      </div>
    )}
  </header>
);

const fieldLabel = 'text-[11px] font-semibold';
const fieldInput =
  'block w-full min-h-11 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 text-[14px] text-[var(--ink)]';

/** The field DefectForm in edit mode (defects-body.tsx), simplified. */
const FieldDefectForm: React.FC<{
  defect: DemoDefect;
  headingId: string;
  deleteId: string;
  canDelete: boolean;
  onClose: () => void;
  onDelete: () => void;
}> = ({ defect, headingId, deleteId, canDelete, onClose, onDelete }) => {
  const uid = useId();
  const [severity, setSeverity] = useState<Severity>(defect.severity);
  const [quoteRequired, setQuoteRequired] = useState(defect.quoteRequired);
  const showParts = severity === 'major' || severity === 'critical' || quoteRequired;

  return (
    <div data-form className="flex flex-col gap-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p id={headingId} tabIndex={-1} className="text-[14px] font-bold">
            Edit defect
          </p>
          <p className="mt-0.5 text-[12px]" style={{ color: 'var(--ink2)' }}>
            Required fields marked with <span style={{ color: 'var(--bad-ink)' }}>*</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="flex h-11 w-11 items-center justify-center rounded"
          style={{ color: 'var(--ink2)' }}
        >
          <LuX className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <SeverityTiles value={severity} onChange={setSeverity} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-cat`} className={fieldLabel} style={{ color: 'var(--ink2)' }}>
          Category
        </label>
        <select id={`${uid}-cat`} defaultValue={defect.category} className={fieldInput}>
          {CATEGORY_OPTIONS.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-loc`} className={fieldLabel} style={{ color: 'var(--ink2)' }}>
          Location
        </label>
        <input id={`${uid}-loc`} type="text" defaultValue={defect.location} className={fieldInput} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-desc`} className={fieldLabel} style={{ color: 'var(--ink2)' }}>
          Description <span style={{ color: 'var(--bad-ink)' }}>*</span>
        </label>
        <textarea id={`${uid}-desc`} rows={2} defaultValue={defect.description} className={`${fieldInput} py-2`} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-rem`} className={fieldLabel} style={{ color: 'var(--ink2)' }}>
          Recommended action
        </label>
        <textarea id={`${uid}-rem`} rows={2} defaultValue={defect.action} className={`${fieldInput} py-2`} />
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 rounded-md bg-[var(--chip)] px-3 py-2.5">
        <input
          type="checkbox"
          checked={quoteRequired}
          onChange={(e) => setQuoteRequired(e.target.checked)}
          className="h-4 w-4 accent-[var(--accent)]"
        />
        <span className="text-[13px]">Quote required for remedial work</span>
      </label>

      {showParts && (
        <div className="flex flex-col gap-2 rounded-lg border border-[var(--line)] bg-[var(--surf)] p-3.5">
          <div>
            <p className="text-[12px] font-bold">Remedial resourcing &amp; parts</p>
            <p className="mt-0.5 text-[11px] leading-snug" style={{ color: 'var(--ink2)' }}>
              Office-only - the office uses this to price the quote. Not shown to the customer.
            </p>
          </div>
          <p className="text-[12px]">
            <span className="mono">{defect.hours}h</span> · <span className="mono">{defect.engineers}</span> engineer
          </p>
          <p className="text-[12px]" style={{ color: 'var(--ink2)' }}>
            <span className="sr-only">Parts: </span>
            {defect.parts}
          </p>
          <button
            type="button"
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--card)] !text-[13px] !font-semibold"
          >
            <LuPlus className="h-3.5 w-3.5" aria-hidden="true" />
            Add a part
          </button>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className={fieldLabel} style={{ color: 'var(--ink2)' }}>
          Photos
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--line)] !text-sm !font-semibold">
            <LuCamera className="h-4 w-4" aria-hidden="true" />
            Take photo
          </button>
          <button type="button" className="flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--line)] !text-sm !font-semibold">
            <LuImagePlus className="h-4 w-4" aria-hidden="true" />
            Gallery
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: Math.min(defect.photoCount, 4) }, (_, i) => (
            <PhotoTile key={i} label={`Defect photo ${i + 1}`} size="md" />
          ))}
          {defect.photoCount > 4 && (
            <span className="mono flex h-12 w-12 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--chip)] text-xs" style={{ color: 'var(--ink2)' }}>
              <span aria-hidden="true">+{defect.photoCount - 4}</span>
              <span className="sr-only">{defect.photoCount - 4} more photos</span>
            </span>
          )}
        </div>
      </div>

      <div data-form-foot className="flex flex-col gap-3">
        <div className="flex items-center gap-2 pt-1">
          <button type="button" onClick={onClose} className="min-h-11 flex-1 rounded-md border border-[var(--line)] bg-[var(--card)] !text-sm !font-semibold">
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 flex-1 rounded-md border border-[var(--accent)] bg-[var(--accent)] !text-sm !font-semibold text-[var(--on-accent)]"
          >
            Save changes
          </button>
        </div>

        {canDelete ? (
          <div className="border-t border-[var(--line)] pt-3">
            <button
              id={deleteId}
              type="button"
              onClick={onDelete}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-3 !text-[13px] !font-semibold hover:bg-[var(--bad-bg)]"
              style={{ color: 'var(--bad-ink)' }}
            >
              <LuTrash2 className="h-4 w-4" aria-hidden="true" />
              Delete defect
            </button>
          </div>
        ) : (
          <p className="border-t border-[var(--line)] pt-3 text-center text-[12px]" style={{ color: 'var(--ink2)' }}>
            {QUOTE_BLOCK_REASON}
          </p>
        )}
      </div>
    </div>
  );
};
