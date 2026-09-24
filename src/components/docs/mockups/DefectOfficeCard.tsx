'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { LuAlertTriangle, LuFilePlus, LuMapPin, LuPackage, LuPencil, LuPlus, LuTrash2 } from 'react-icons/lu';

import DocMockupFrame from './DocMockupFrame';
import {
  CALL_POINT,
  CATEGORY_OPTIONS,
  DeleteDialogMock,
  JOB_NUMBER,
  PhotoTile,
  QUOTE_BLOCK_REASON,
  SITE,
  SOUNDER,
  SeverityBadge,
  SeverityTiles,
  ToastRegion,
  deletedMessage,
  hdStyle,
  useInert,
  type DemoDefect,
  type Severity,
} from './DefectShared';

/**
 * The office job page's Overview -> "Defects" card (OverviewTab.tsx DefectsCard,
 * app 5.51.0), on a desktop frame. The unquoted row has Edit + a working bin;
 * the quoted row's bin is greyed and explains itself on hover or focus.
 * "Add defect" opens a compact version of the shared defect form.
 */

const MAX_THUMBNAILS = 4;

const INITIAL_ROWS: DemoDefect[] = [CALL_POINT, SOUNDER];

const smallBtn =
  'inline-flex min-h-11 items-center gap-1 rounded-md border px-2.5 !text-xs !font-semibold sm:min-h-8';

const DefectOfficeCard: React.FC = () => {
  const uid = useId();
  const idFor = (name: string) => `${uid}-${name}`;

  const [rows, setRows] = useState<DemoDefect[]>(INITIAL_ROWS);
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DemoDefect | null>(null);
  const [deletePhotos, setDeletePhotos] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const returnFocusId = useRef<string | null>(null);
  const pendingFocus = useRef<string | null>(null);
  const addedCount = useRef(0);
  const behindRef = useRef<HTMLDivElement>(null);

  useInert(behindRef, deleteTarget !== null);

  // Toasts leave on their own, as the app's do.
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const id = pendingFocus.current;
    if (!id) return;
    pendingFocus.current = null;
    document.getElementById(id)?.focus({ preventScroll: true });
  });

  const focusAfterRender = (id: string) => {
    pendingFocus.current = id;
  };

  const unresolved = rows.length;
  // As in the app: bundling offers only unquoted defects, so with none left the
  // two quote buttons go too.
  const selectable = rows.filter((r) => !r.quoteNumber);
  const changed = rows !== INITIAL_ROWS || adding || editingId !== null;

  const openDelete = (row: DemoDefect, triggerId: string) => {
    returnFocusId.current = triggerId;
    setDeletePhotos(true);
    setDeleteTarget(row);
  };

  const closeDelete = () => {
    setDeleteTarget(null);
    if (returnFocusId.current) focusAfterRender(returnFocusId.current);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    const retired = deletePhotos ? deleteTarget.photoCount : 0;
    setRows((prev) => prev.filter((r) => r.id !== deleteTarget.id));
    setEditingId(null);
    setDeleteTarget(null);
    setToast(deletedMessage(retired));
    focusAfterRender(idFor('add'));
  };

  const saveRow = (id: string | null, values: FormValues) => {
    const cat = CATEGORY_OPTIONS.find((c) => c.value === values.category);
    if (id === null) {
      addedCount.current += 1;
      const newRow: DemoDefect = {
        id: `new-${addedCount.current}`,
        severity: values.severity,
        category: values.category,
        categoryLabel: cat?.label ?? '',
        description: values.description,
        location: values.location,
        action: '',
        parts: '',
        hours: '',
        engineers: '',
        photoCount: 0,
        quoteRequired: false,
      };
      setRows((prev) => [...prev, newRow]);
      setAdding(false);
      focusAfterRender(idFor('add'));
    } else {
      setRows((prev) =>
        prev.map((r) =>
          r.id === id
            ? { ...r, severity: values.severity, category: values.category, categoryLabel: cat?.label ?? '', description: values.description, location: values.location }
            : r
        )
      );
      setEditingId(null);
      focusAfterRender(idFor(`edit-${id}`));
    }
  };

  const reset = () => {
    setRows(INITIAL_ROWS);
    setAdding(false);
    setEditingId(null);
    setToast(null);
  };

  return (
    <DocMockupFrame>
      <div className="defect-mockup not-prose my-8">
        <section
          aria-label="Office job page, Overview tab, Defects card"
          className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surf)]"
        >
          <div ref={behindRef}>
            {/* Window chrome - decoration only. */}
            <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[var(--bg)] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
              <span className="mono ml-2 truncate rounded bg-[var(--chip)] px-2 py-0.5 text-[11px]" style={{ color: 'var(--ink2)' }}>
                app.opscel.com / jobs / {JOB_NUMBER}
              </span>
            </div>

            <div className="flex flex-col gap-4 p-3 sm:p-5">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="mono text-xs font-bold" style={{ color: 'var(--ink2)' }}>
                    {JOB_NUMBER}
                  </p>
                  <p className="text-xl font-semibold leading-tight" style={hdStyle}>
                    Fire Alarm Service
                  </p>
                  <p className="text-sm" style={{ color: 'var(--ink2)' }}>
                    {SITE}
                  </p>
                </div>
                <span className="rounded border border-[var(--due-ink)] bg-[var(--due-bg)] px-2 py-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--due-ink)' }}>
                  In progress
                </span>
              </div>

              <div aria-hidden="true" className="flex gap-4 overflow-hidden border-b border-[var(--line)] text-sm">
                <span className="-mb-px border-b-2 border-[var(--accent)] pb-2 font-semibold">Overview</span>
                <span className="pb-2" style={{ color: 'var(--ink2)' }}>Schedule</span>
                <span className="pb-2" style={{ color: 'var(--ink2)' }}>Documents</span>
                <span className="hidden pb-2 sm:inline" style={{ color: 'var(--ink2)' }}>Photos</span>
              </div>

              {/* The Defects card */}
              <div className="rounded-lg border border-[var(--line)] bg-[var(--card)]">
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-3 pt-4">
                  <h4 className="flex items-center gap-2 text-base font-semibold">
                    <LuAlertTriangle className="h-4 w-4" style={{ color: 'var(--warn-ink)' }} aria-hidden="true" />
                    Defects
                    {unresolved > 0 && (
                      <span className="ml-1 rounded border border-[var(--warn-ink)] bg-[var(--warn-bg)] px-1.5 py-0.5 text-xs font-semibold" style={{ color: 'var(--warn-ink)' }}>
                        {unresolved} unresolved
                      </span>
                    )}
                  </h4>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {!adding && (
                      <button
                        id={idFor('add')}
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setAdding(true);
                        }}
                        className={`${smallBtn} border-[var(--line)] bg-[var(--card)]`}
                      >
                        <LuPlus className="h-3 w-3" aria-hidden="true" />
                        Add defect
                      </button>
                    )}
                    {selectable.length > 0 && (
                      <>
                        <button type="button" className={`${smallBtn} border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]`}>
                          <LuFilePlus className="h-3 w-3" aria-hidden="true" />
                          Create Bundled Quote
                        </button>
                        <button type="button" className={`${smallBtn} border-[var(--line)] bg-[var(--card)]`}>
                          New Quote
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 px-4 pb-4">
                  {adding && (
                    <OfficeDefectForm
                      mode="create"
                      onCancel={() => {
                        setAdding(false);
                        focusAfterRender(idFor('add'));
                      }}
                      onSave={(v) => saveRow(null, v)}
                    />
                  )}

                  {!adding && rows.length === 0 && (
                    <p className="py-1 text-sm" style={{ color: 'var(--ink2)' }}>
                      No defects recorded on this job.
                    </p>
                  )}

                  {rows.map((d) => {
                    const blockedReason = d.quoteNumber ? QUOTE_BLOCK_REASON : null;
                    if (editingId === d.id) {
                      return (
                        <OfficeDefectForm
                          key={d.id}
                          mode="edit"
                          initial={d}
                          blockedReason={blockedReason}
                          deleteId={idFor(`form-delete-${d.id}`)}
                          onCancel={() => {
                            setEditingId(null);
                            focusAfterRender(idFor(`edit-${d.id}`));
                          }}
                          onSave={(v) => saveRow(d.id, v)}
                          onDelete={() => openDelete(d, idFor(`form-delete-${d.id}`))}
                        />
                      );
                    }
                    return (
                      <OfficeRow
                        key={d.id}
                        defect={d}
                        editId={idFor(`edit-${d.id}`)}
                        binId={idFor(`bin-${d.id}`)}
                        blockedReason={blockedReason}
                        onEdit={() => {
                          setAdding(false);
                          setEditingId(d.id);
                        }}
                        onDelete={() => openDelete(d, idFor(`bin-${d.id}`))}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {deleteTarget && (
            <DeleteDialogMock
              defect={deleteTarget}
              deletePhotos={deletePhotos}
              onDeletePhotosChange={setDeletePhotos}
              variant="desktop"
              autoFocus
              onKeep={closeDelete}
              onDelete={confirmDelete}
            />
          )}

          <ToastRegion message={toast} className="pointer-events-none absolute bottom-3 right-3 z-10 max-w-[calc(100%-1.5rem)]" />
        </section>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed" style={{ color: 'var(--ink2)', fontFamily: 'var(--mockup-font-body)' }}>
          The bin deletes a defect raised by mistake. On a quoted defect it is greyed out - hover or focus it to see why. Add defect works on any job, even a completed one.
        </p>
        {changed && (
          <div className="mt-2 flex justify-center">
            <button type="button" onClick={reset} className="min-h-9 rounded border border-[var(--line)] bg-[var(--card)] px-3 !text-[13px] !font-semibold">
              Start again
            </button>
          </div>
        )}
      </div>
    </DocMockupFrame>
  );
};

export default DefectOfficeCard;

/* ---------------------------------------------------------------------- */
/* Row                                                                      */
/* ---------------------------------------------------------------------- */

const iconBtn = 'inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md sm:h-8 sm:w-8';

const OfficeRow: React.FC<{
  defect: DemoDefect;
  editId: string;
  binId: string;
  blockedReason: string | null;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ defect: d, editId, binId, blockedReason, onEdit, onDelete }) => {
  const shown = Math.min(d.photoCount, MAX_THUMBNAILS);
  const hidden = d.photoCount - shown;

  return (
    <div className="flex items-start gap-2 rounded-md border border-[var(--line)] bg-[var(--bg)] p-3 sm:gap-3">
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <SeverityBadge severity={d.severity} />
          {d.category && (
            <span className="text-[11px]" style={{ color: 'var(--ink2)' }}>
              {d.category.replace(/_/g, ' ')}
            </span>
          )}
          {d.quoteRequired && !d.quoteNumber && (
            <span className="rounded border border-[var(--accent)] bg-[var(--due-bg)] px-1.5 py-0.5 text-[10px] font-semibold" style={{ color: 'var(--accent)' }}>
              Quote required
            </span>
          )}
          {d.quoteNumber && (
            <span className="inline-flex items-center gap-1">
              <span className="mono rounded border border-[var(--ok-ink)] bg-[var(--ok-bg)] px-1.5 py-0.5 text-[10px] font-semibold" style={{ color: 'var(--ok-ink)' }}>
                {d.quoteNumber}
              </span>
              {d.quoteStatus && (
                <span className="rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px] capitalize">{d.quoteStatus}</span>
              )}
            </span>
          )}
        </div>
        <p className="text-sm">{d.description}</p>
        {d.location && (
          <p className="flex items-center gap-1 text-xs" style={{ color: 'var(--ink2)' }}>
            <LuMapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            {d.location}
          </p>
        )}
        {d.action && (
          <p className="text-xs italic" style={{ color: 'var(--ink2)' }}>
            Action: {d.action}
          </p>
        )}
        {d.parts && (
          <p className="flex items-start gap-1 text-xs" style={{ color: 'var(--ink2)' }}>
            <LuPackage className="mt-0.5 h-3 w-3 flex-shrink-0" aria-hidden="true" />
            <span>
              <span className="sr-only">Parts: </span>
              {d.parts}
            </span>
          </p>
        )}
        {shown > 0 && (
          <ul className="flex flex-wrap items-center gap-1.5 pt-1" aria-label="Defect photos">
            {Array.from({ length: shown }, (_, i) => (
              <li key={i}>
                <PhotoTile label={`Defect photo ${i + 1}`} />
              </li>
            ))}
            {hidden > 0 && (
              <li className="mono flex h-12 w-12 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--chip)] text-xs font-medium" style={{ color: 'var(--ink2)' }}>
                <span aria-hidden="true">+{hidden}</span>
                <span className="sr-only">
                  {hidden} more photo{hidden !== 1 ? 's' : ''}
                </span>
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Stacked on a phone so the text keeps its width; side by side from sm up. */}
      <div className="flex flex-shrink-0 flex-col gap-1 sm:flex-row sm:gap-2">
        <button
          id={editId}
          type="button"
          onClick={onEdit}
          aria-label={`Edit defect: ${d.description}`}
          title="Edit defect"
          className={`${iconBtn} hover:bg-[var(--chip)]`}
          style={{ color: 'var(--ink2)' }}
        >
          <LuPencil className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        {blockedReason ? (
          <BlockedBin id={binId} description={d.description} reason={blockedReason} />
        ) : (
          <button
            id={binId}
            type="button"
            onClick={onDelete}
            aria-label={`Delete defect: ${d.description}`}
            title="Delete defect"
            className={`${iconBtn} text-[var(--ink2)] hover:bg-[var(--bad-bg)] hover:text-[var(--bad-ink)]`}
          >
            <LuTrash2 className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Muted, never red: it does nothing but explain. aria-disabled (not disabled)
 * keeps it focusable so keyboard readers reach the reason; the reason is also
 * always in the accessibility tree via aria-describedby.
 */
const BlockedBin: React.FC<{ id: string; description: string; reason: string }> = ({ id, description, reason }) => {
  const [open, setOpen] = useState(false);
  const descId = `${id}-reason`;

  return (
    <span className="relative flex-shrink-0" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        id={id}
        type="button"
        aria-disabled="true"
        aria-label={`Delete defect: ${description} - unavailable`}
        aria-describedby={descId}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
        className={`${iconBtn} cursor-not-allowed opacity-40`}
        style={{ color: 'var(--ink2)' }}
      >
        <LuTrash2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span id={descId} className="sr-only">
          {reason}
        </span>
      </button>
      {open && (
        <span
          aria-hidden="true"
          className="defect-anim-fade absolute right-0 top-full z-10 mt-1.5 w-56 rounded-md bg-[var(--ink)] px-3 py-2 text-xs leading-snug text-[var(--bg)] shadow-lg"
        >
          {reason}
        </span>
      )}
    </span>
  );
};

/* ---------------------------------------------------------------------- */
/* Compact defect form (the shared DefectForm, office mode, simplified)     */
/* ---------------------------------------------------------------------- */

interface FormValues {
  severity: Severity;
  category: string;
  location: string;
  description: string;
}

const inputClass =
  'block w-full min-h-10 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 text-sm text-[var(--ink)]';

const OfficeDefectForm: React.FC<{
  mode: 'create' | 'edit';
  initial?: DemoDefect;
  blockedReason?: string | null;
  deleteId?: string;
  onCancel: () => void;
  onSave: (v: FormValues) => void;
  onDelete?: () => void;
}> = ({ mode, initial, blockedReason, deleteId, onCancel, onSave, onDelete }) => {
  const uid = useId();
  const headingRef = useRef<HTMLParagraphElement>(null);
  const [severity, setSeverity] = useState<Severity>(initial?.severity ?? 'observation');
  const [category, setCategory] = useState(initial?.category ?? '');
  const [location, setLocation] = useState(initial?.location ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [tried, setTried] = useState(false);
  const showError = tried && !description.trim();

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="defect-anim-fade flex flex-col gap-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
      <div>
        <p ref={headingRef} tabIndex={-1} className="text-[14px] font-bold">
          {mode === 'edit' ? 'Edit defect' : 'New defect'}
        </p>
        <p className="mt-0.5 text-[12px]" style={{ color: 'var(--ink2)' }}>
          Required fields marked with <span style={{ color: 'var(--bad-ink)' }}>*</span>
        </p>
      </div>

      <SeverityTiles value={severity} onChange={setSeverity} layout="wide" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${uid}-cat`} className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>
            Category
          </label>
          <select id={`${uid}-cat`} value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
            <option value="">Select category...</option>
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${uid}-loc`} className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>
            Location
          </label>
          <input
            id={`${uid}-loc`}
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Ground floor corridor"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-desc`} className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>
          Description <span style={{ color: 'var(--bad-ink)' }}>*</span>
        </label>
        <textarea
          id={`${uid}-desc`}
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the defect in detail..."
          aria-invalid={showError || undefined}
          aria-describedby={showError ? `${uid}-desc-err` : undefined}
          className={`${inputClass} py-2 ${showError ? 'border-[var(--bad-ink)]' : ''}`}
        />
        {showError && (
          <p id={`${uid}-desc-err`} className="text-[11px]" style={{ color: 'var(--bad-ink)' }}>
            Description is required
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button type="button" onClick={onCancel} className="min-h-10 flex-1 rounded-md border border-[var(--line)] bg-[var(--card)] !text-sm !font-semibold sm:flex-none sm:px-5">
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            if (!description.trim()) {
              setTried(true);
              return;
            }
            onSave({ severity, category, location: location.trim(), description: description.trim() });
          }}
          className="min-h-10 flex-1 rounded-md border border-[var(--accent)] bg-[var(--accent)] !text-sm !font-semibold text-[var(--on-accent)] sm:flex-none sm:px-5"
        >
          {mode === 'edit' ? 'Save changes' : 'Add defect'}
        </button>
      </div>

      {mode === 'edit' && !blockedReason && onDelete && (
        <div className="border-t border-[var(--line)] pt-3">
          <button
            id={deleteId}
            type="button"
            onClick={onDelete}
            className="flex min-h-10 w-full items-center justify-center gap-2 rounded-md px-3 !text-[13px] !font-semibold hover:bg-[var(--bad-bg)]"
            style={{ color: 'var(--bad-ink)' }}
          >
            <LuTrash2 className="h-4 w-4" aria-hidden="true" />
            Delete defect
          </button>
        </div>
      )}
      {mode === 'edit' && blockedReason && (
        <p className="border-t border-[var(--line)] pt-3 text-center text-[12px]" style={{ color: 'var(--ink2)' }}>
          {blockedReason}
        </p>
      )}
    </div>
  );
};
