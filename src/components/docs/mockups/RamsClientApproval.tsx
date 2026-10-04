'use client';

/**
 * Public client approval page (the link in the RAMS email, no login), inside a
 * browser-style frame. Fully interactive: validation, thank-you state, start
 * again. Demo content only; dates are fixed.
 */

import React, { useEffect, useId, useRef, useState } from 'react';

import DocMockupFrame from './DocMockupFrame';

import './rams-mockups.css';

type Choice = 'approve' | 'comments' | 'reject';

const CHOICES: { id: Choice; title: string; hint: string }[] = [
  { id: 'approve', title: 'Approve', hint: 'Happy for the work to go ahead on this RAMS.' },
  { id: 'comments', title: 'Approve with comments', hint: 'Happy to proceed, with notes for the contractor.' },
  { id: 'reject', title: 'Reject - revise and resubmit', hint: 'Not acceptable as it stands. Tell them what to change.' },
];

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const inputCls = 'w-full rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2 text-[14px]';

const RamsClientApproval: React.FC = () => {
  const uid = useId();
  const [choice, setChoice] = useState<Choice | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState<{ choice?: string; name?: string; text?: string }>({});
  const [done, setDone] = useState(false);
  const doneHeadingRef = useRef<HTMLHeadingElement>(null);
  // The Submit button unmounts on success; move focus to the confirmation so keyboard
  // and screen-reader users are not dropped to the top of the page.
  useEffect(() => {
    if (done) doneHeadingRef.current?.focus();
  }, [done]);

  const reset = () => {
    setChoice(null);
    setName('');
    setEmail('');
    setText('');
    setErrors({});
    setDone(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!choice) next.choice = 'Please choose how you would like to respond.';
    if (!name.trim()) next.name = 'Please enter your name.';
    if (choice === 'comments' && !text.trim()) next.text = 'Please add your comments.';
    if (choice === 'reject' && !text.trim()) next.text = 'Please say what needs to change.';
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  const textLabel = choice === 'reject' ? 'What needs to change' : 'Comments';
  const err = (id: string, msg?: string) =>
    msg ? (
      <p id={id} role="alert" className="m-0 mt-1 text-[12px] font-semibold" style={{ color: 'var(--bad-ink)' }}>{msg}</p>
    ) : null;

  return (
    <DocMockupFrame>
      <div className="rams-mockup not-prose my-8 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--card)]">
        <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--chip)] px-3 py-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="mono ml-2 min-w-0 flex-1 truncate rounded bg-[var(--card)] px-2 py-1 text-[11px]" style={{ color: 'var(--ink2)' }}>
            app.example.com/rams-approval/&hellip;
          </span>
        </div>

        <div className="mx-auto flex max-w-[560px] flex-col gap-4 p-4 sm:p-6">
          {done ? (
            <div className="rams-anim-fade flex flex-col items-start gap-3" role="status">
              <p className="m-0 text-[12px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Sunrise Electrical &amp; Fire Ltd</p>
              {/* Focus lands here: the Submit button that had it no longer exists. */}
              <h3 ref={doneHeadingRef} tabIndex={-1} className="m-0 text-[20px] font-bold outline-none" style={hdStyle}>Thank you - your response has been sent</h3>
              <button
                type="button"
                onClick={reset}
                className="bg-transparent p-0 text-[13px] underline"
                style={{ color: 'var(--link)' }}
              >
                Start again
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-4">
              <header className="flex flex-col gap-1">
                <p className="m-0 text-[12px] font-semibold" style={{ color: 'var(--ink2)', ...hdStyle }}>Sunrise Electrical &amp; Fire Ltd</p>
                <h3 className="m-0 text-[20px] font-bold" style={hdStyle}>Risk assessment &amp; method statement</h3>
                <p className="m-0 text-[13px]"><span className="mono">JOB-000214</span> · Annual fire alarm service</p>
                <p className="m-0 text-[13px]" style={{ color: 'var(--ink2)' }}>Riverside House, 12 Quay Street</p>
                <p className="m-0 text-[13px]" style={{ color: 'var(--ink2)' }}>Revision 3, issued 4 October 2026</p>
                <button
                  type="button"
                  tabIndex={-1}
                  aria-disabled="true"
                  className="rams-inert mt-1 self-start rounded border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[13px] font-semibold"
                >
                  Download PDF
                </button>
              </header>

              <fieldset className="m-0 flex min-w-0 flex-col gap-2 border-0 p-0">
                <legend className="mb-2 p-0 text-[14px] font-semibold">Choose how you would like to respond.</legend>
                <div role="radiogroup" aria-label="Your response" aria-describedby={errors.choice ? `${uid}-choice-err` : undefined} className="flex flex-col gap-2">
                  {CHOICES.map((c) => (
                    <label
                      key={c.id}
                      className="flex cursor-pointer items-start gap-3 rounded border p-3"
                      style={{
                        borderColor: choice === c.id ? 'var(--accent)' : 'var(--line)',
                        background: choice === c.id ? 'var(--due-bg)' : 'var(--card)',
                      }}
                    >
                      <input
                        type="radio"
                        name={`${uid}-choice`}
                        value={c.id}
                        checked={choice === c.id}
                        onChange={() => {
                          setChoice(c.id);
                          setErrors((p) => ({ ...p, choice: undefined, text: undefined }));
                        }}
                        className="mt-1 h-4 w-4 flex-shrink-0"
                        style={{ accentColor: 'var(--accent)' }}
                      />
                      <span className="flex min-w-0 flex-col">
                        <span className="text-[14px] font-semibold">{c.title}</span>
                        <span className="text-[13px]" style={{ color: 'var(--ink2)' }}>{c.hint}</span>
                      </span>
                    </label>
                  ))}
                </div>
                {err(`${uid}-choice-err`, errors.choice)}
              </fieldset>

              {(choice === 'comments' || choice === 'reject') && (
                <div className="rams-anim-fade">
                  <label htmlFor={`${uid}-text`} className="mb-1 block text-[13px] font-semibold">
                    {textLabel} <span style={{ color: 'var(--bad-ink)' }} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={`${uid}-text`}
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.text)}
                    aria-describedby={errors.text ? `${uid}-text-err` : undefined}
                    className={inputCls}
                  />
                  {err(`${uid}-text-err`, errors.text)}
                </div>
              )}

              <div>
                <label htmlFor={`${uid}-name`} className="mb-1 block text-[13px] font-semibold">
                  Name <span style={{ color: 'var(--bad-ink)' }} aria-hidden="true">*</span>
                </label>
                <input
                  id={`${uid}-name`}
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  className={inputCls}
                />
                {err(`${uid}-name-err`, errors.name)}
              </div>

              <div>
                <label htmlFor={`${uid}-email`} className="mb-1 block text-[13px] font-semibold">
                  Email <span className="font-normal" style={{ color: 'var(--ink2)' }}>(optional)</span>
                </label>
                <input
                  id={`${uid}-email`}
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
              </div>

              <button
                type="submit"
                className="min-h-[44px] rounded px-4 py-2 text-[14px] font-semibold sm:self-start"
                style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </DocMockupFrame>
  );
};

export default RamsClientApproval;
