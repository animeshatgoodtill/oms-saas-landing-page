'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { LuClock, LuListX, LuMapPin, LuPackage, LuPencil, LuTrash2, LuUsers } from 'react-icons/lu';

import DocMockupFrame from './DocMockupFrame';
import { CALL_POINT, PhotoTile, SEVERITY_BORDER, SeverityBadge, hdStyle } from './DefectShared';

/**
 * Two look-alike actions, side by side: the Remedial Scope sheet's grey
 * "Remove from scope" (RemedialScopeItemsView.tsx - list icon, never red) and
 * the defect form's red "Delete defect" (defects-body.tsx). Pressing either
 * shows what it does, in words.
 */

const DefectScopeRemoveVsDelete: React.FC = () => {
  const uid = useId();
  const [removed, setRemoved] = useState(false);
  const [deletePressed, setDeletePressed] = useState(false);
  const removedNoteRef = useRef<HTMLParagraphElement>(null);
  const d = CALL_POINT;

  // The button the reader pressed is gone - put focus on what replaced it.
  useEffect(() => {
    if (removed) removedNoteRef.current?.focus({ preventScroll: true });
  }, [removed]);

  return (
    <DocMockupFrame>
      <div className="defect-mockup not-prose my-8 rounded-lg border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Remedial Scope sheet */}
          <section aria-labelledby={`${uid}-scope`} className="flex flex-col gap-3">
            <h4 id={`${uid}-scope`} className="text-[13px] font-bold" style={{ ...hdStyle, color: 'var(--ink2)' }}>
              Remedial Scope sheet · Defects in Scope
            </h4>

            <div className="flex flex-1 flex-col gap-1 rounded-lg border border-[var(--line)] bg-[var(--card)] p-3">
              {removed ? (
                <p ref={removedNoteRef} tabIndex={-1} className="defect-anim-fade rounded-md border border-dashed border-[var(--line)] bg-[var(--surf)] p-3 text-sm" style={{ color: 'var(--ink2)' }}>
                  Off this scope list. The defect is still on the job - its Defects card shows it as{' '}
                  <span className="whitespace-nowrap rounded border border-[var(--line)] px-1 text-[11px]">Removed from remedial scope</span>.
                </p>
              ) : (
                <>
                  <div className={`rounded-lg border border-l-4 border-[var(--line)] bg-[var(--card)] p-3.5 ${SEVERITY_BORDER[d.severity]}`}>
                    <SeverityBadge severity={d.severity} />
                    <p className="mt-2 text-[14px] leading-snug">{d.description}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1 text-[12px]" style={{ color: 'var(--ink2)' }}>
                      <LuMapPin className="h-3 w-3" aria-hidden="true" />
                      {d.location}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <PhotoTile label="Defect photo 1" size="sm" />
                    </div>
                    <div className="mt-2.5 flex flex-col gap-1.5 border-t border-[var(--line)] pt-2 text-[12px]" style={{ color: 'var(--ink2)' }}>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="inline-flex items-center gap-1">
                          <LuClock className="h-3 w-3" aria-hidden="true" />
                          <span className="mono">{d.hours}h</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <LuUsers className="h-3 w-3" aria-hidden="true" />
                          <span className="mono">{d.engineers}</span> engineer
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <LuPackage className="mt-0.5 h-3 w-3 flex-shrink-0" aria-hidden="true" />
                        <span>
                          <span className="sr-only">Parts: </span>
                          {d.parts}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-1">
                    <span className="flex min-h-11 items-center gap-1.5 px-3 text-[12px] font-semibold" style={{ color: 'var(--ink2)' }} aria-hidden="true">
                      <LuPencil className="h-3.5 w-3.5" />
                      Edit
                    </span>
                    <button
                      type="button"
                      onClick={() => setRemoved(true)}
                      aria-label={`Remove from scope: ${d.description}`}
                      aria-describedby={`${uid}-scope-cap`}
                      className="flex min-h-11 items-center gap-1.5 rounded-md px-3 !text-[12px] !font-semibold hover:bg-[var(--chip)] hover:text-[var(--ink)]"
                      style={{ color: 'var(--ink2)' }}
                    >
                      <LuListX className="h-3.5 w-3.5" aria-hidden="true" />
                      Remove from scope
                    </button>
                  </div>
                </>
              )}
            </div>

            <p id={`${uid}-scope-cap`} className="text-sm font-semibold">
              Takes it off this list - the defect stays on the job
            </p>
          </section>

          {/* Edit defect form, foot */}
          <section aria-labelledby={`${uid}-form`} className="flex flex-col gap-3">
            <h4 id={`${uid}-form`} className="text-[13px] font-bold" style={{ ...hdStyle, color: 'var(--ink2)' }}>
              Edit defect · foot of the form
            </h4>

            <div className="flex flex-1 flex-col justify-end gap-3 rounded-lg border border-[var(--line)] bg-[var(--card)] p-3">
              {/* The top of the form, compressed - decoration only. */}
              <div aria-hidden="true" className="flex flex-col gap-3">
                {[
                  ['Description', d.description],
                  ['Recommended action', d.action],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--ink2)' }}>
                      {label}
                    </span>
                    <span className="rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[13px]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="flex min-h-11 flex-1 items-center justify-center rounded-md border border-[var(--line)] text-sm font-semibold">Cancel</span>
                <span className="flex min-h-11 flex-1 items-center justify-center rounded-md border border-[var(--accent)] bg-[var(--accent)] text-sm font-semibold text-[var(--on-accent)]">
                  Save changes
                </span>
              </div>
              <div className="border-t border-[var(--line)] pt-3">
                <button
                  type="button"
                  onClick={() => setDeletePressed(true)}
                  aria-describedby={`${uid}-delete-cap`}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-3 !text-[13px] !font-semibold hover:bg-[var(--bad-bg)]"
                  style={{ color: 'var(--bad-ink)' }}
                >
                  <LuTrash2 className="h-4 w-4" aria-hidden="true" />
                  Delete defect
                </button>
              </div>
              <div role="status">
                {deletePressed && (
                  <p className="defect-anim-fade rounded-md border border-dashed border-[var(--line)] bg-[var(--surf)] p-3 text-sm" style={{ color: 'var(--ink2)' }}>
                    Opens &ldquo;Delete this defect?&rdquo;. Confirm, and it is removed from the job, its job sheets and the site&rsquo;s defect register.
                  </p>
                )}
              </div>
            </div>

            <p id={`${uid}-delete-cap`} className="text-sm font-semibold">
              Erases a defect raised by mistake
            </p>
          </section>
        </div>

        {(removed || deletePressed) && (
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setRemoved(false);
                setDeletePressed(false);
              }}
              className="min-h-9 rounded border border-[var(--line)] bg-[var(--card)] px-3 !text-[13px] !font-semibold"
            >
              Start again
            </button>
          </div>
        )}
      </div>
    </DocMockupFrame>
  );
};

export default DefectScopeRemoveVsDelete;
