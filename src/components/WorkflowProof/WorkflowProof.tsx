'use client';

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import Container from '@/components/Container';
import { DeskScreens, PhoneScreens } from './Screens';
import { workflows } from './workflows';
import './workflow-proof.css';

// Timing (ms): a beat before step 1, four steps, then a hold on the finished state.
const LEAD = 700;
const STEP = 1900;
const HOLD = 2000;
const TOTAL = LEAD + STEP * 4 + HOLD;
const TICK = 100;

// Design size of the stage (desk + phone), and of the phone alone below 768px.
const STAGE_W = 880;
const STAGE_H = 580;
const PHONE_W = 244;
const PHONE_H = 506;

// measure before paint on the client (no 880px flash); plain effect on the server
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const stepClassFor = (step: number) =>
    Array.from({ length: step }, (_, i) => `wf-s${i + 1}`).join(' ');

const SIGN_UP_URL = 'https://app.opscel.com/handler/sign-up';
const DEMO_URL = 'https://calendar.app.google/Tp8Hwzbf6tVMGDkW6';

/**
 * "See a job go from quote to paid" — the homepage proof section.
 *
 * ≥1024px it is ONE laptop screen tall: the section is the viewport minus the
 * fixed 88px header (clamped 440–880px; three tighter tiers for short windows, with
 * DISJOINT height ranges so Tailwind's rule order can't decide the winner), the rail on the left holds the
 * workflows + their steps + the CTA, and the stage scales to whichever of the
 * column's width or height runs out first. So the animation, the live step and
 * both buttons are all visible at once, without scrolling.
 */
const WorkflowProof: React.FC = () => {
    const [active, setActive] = useState(0);
    const [step, setStep] = useState(4); // the finished state is the resting (no-JS / reduced-motion) frame
    const [progress, setProgress] = useState(100);

    const colRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const elapsed = useRef(0);
    const hovering = useRef(false);
    const inView = useRef(false);
    const started = useRef(false);
    const reduced = useRef(false);

    const show = useCallback((i: number) => {
        started.current = true;
        elapsed.current = 0;
        setActive(i);
        setStep(reduced.current ? 4 : 0);
        setProgress(reduced.current ? 100 : 0);
    }, []);

    // Fit the fixed-size stage into its column.
    useIsoLayoutEffect(() => {
        const col = colRef.current;
        const wrap = wrapRef.current;
        const stage = stageRef.current;
        if (!col || !wrap || !stage) return;
        const fit = () => {
            const phoneOnly = window.matchMedia('(max-width: 767px)').matches;
            const railLayout = window.matchMedia('(min-width: 1024px)').matches;
            const w = phoneOnly ? PHONE_W : STAGE_W;
            const h = phoneOnly ? PHONE_H : STAGE_H;
            let s = col.clientWidth / w;
            if (railLayout) s = Math.min(s, col.clientHeight / h); // height-bound only in the one-screen layout
            if (phoneOnly) s = Math.min(s, 280 / PHONE_W);
            s = Math.min(s, 1.15);
            wrap.style.width = `${w * s}px`;
            wrap.style.height = `${h * s}px`;
            stage.style.setProperty('--wf-s', String(s));
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(col);
        return () => ro.disconnect();
    }, []);

    // Play only while the stage is on screen; start from the top the first time it's seen.
    // A workflow click (show) also starts playback, so it never waits on the observer.
    useEffect(() => {
        reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced.current) return;
        const el = wrapRef.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => {
            inView.current = entry.isIntersecting;
            if (entry.isIntersecting && !started.current) show(0);
        }, { threshold: 0.2 });
        io.observe(el);

        const timer = window.setInterval(() => {
            if (!started.current || !inView.current || hovering.current || document.hidden) return;
            elapsed.current += TICK;
            const t = elapsed.current;
            if (t >= TOTAL) {
                setActive(a => (a + 1) % workflows.length);
                elapsed.current = 0;
                setStep(0);
                setProgress(0);
                return;
            }
            setStep(t < LEAD ? 0 : Math.min(4, 1 + Math.floor((t - LEAD) / STEP)));
            setProgress((t / TOTAL) * 100);
        }, TICK);

        return () => {
            io.disconnect();
            window.clearInterval(timer);
        };
    }, [show]);

    const stepClass = stepClassFor(step);

    const onPick = (i: number) => {
        show(i);
        sendGAEvent('event', 'workflow_tab', { workflow: workflows[i].id });
    };

    return (
        <section
            id="how-it-works"
            aria-labelledby="wf-heading"
            className="wf py-14 md:py-16 lg:py-10 lg:h-[calc(100svh-88px)] lg:min-h-[440px] lg:max-h-[880px] [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:py-6 [@media(min-width:1024px)_and_(max-height:620px)]:py-4"
        >
            <Container className="h-full">
                <div className="h-full flex flex-col gap-8 lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">

                    {/* ===== rail ===== */}
                    <div className="flex flex-col gap-5 min-h-0 lg:order-1 order-1 [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:gap-3 [@media(min-width:1024px)_and_(max-height:620px)]:gap-2">
                        <div className="flex flex-col gap-2">
                            <h2 id="wf-heading" className="text-3xl md:text-4xl lg:text-[2.35rem] font-extrabold leading-[1.12] tracking-tight text-balance text-white [@media(min-width:1024px)_and_(min-height:721px)_and_(max-height:760px)]:text-[1.9rem] [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:text-[1.65rem] [@media(min-width:1024px)_and_(max-height:620px)]:text-[1.45rem]">
                                See a job go from quote to paid.
                            </h2>
                            <p className="text-base text-[color:var(--wf-txt2)] [@media(min-width:1024px)_and_(max-height:760px)]:hidden">
                                The office and your engineers work on the same job, so nothing gets typed twice.
                            </p>
                        </div>

                        {/* the four workflows; the playing one shows its steps */}
                        <div className="hidden lg:flex flex-col gap-1.5" role="group" aria-label="Choose a workflow to play">
                            {workflows.map((w, i) => {
                                const on = i === active;
                                return (
                                    <button
                                        key={w.id}
                                        type="button"
                                        aria-pressed={on}
                                        aria-label={w.title}
                                        onClick={() => onPick(i)}
                                        className={`text-left rounded-[14px] border px-4 py-3 [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:py-2 [@media(min-width:1024px)_and_(max-height:620px)]:py-1.5 transition-colors duration-mechanical ease-mechanical focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${on ? 'border-secondary bg-[rgba(48,79,255,0.16)]' : 'border-[color:var(--wf-line)] bg-white/[0.02] hover:border-white/30'}`}
                                    >
                                        <span className="flex items-baseline justify-between gap-3">
                                            <span className="font-heading font-bold text-[1.05rem] text-white">{w.title}</span>
                                            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[color:var(--wf-txt2)] whitespace-nowrap">{w.route}</span>
                                        </span>
                                        {on && (
                                            <>
                                                <span className="mt-2.5 flex flex-col gap-1.5 [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:mt-1.5 [@media(min-width:1024px)_and_(min-height:621px)_and_(max-height:720px)]:gap-1 [@media(min-width:1024px)_and_(max-height:620px)]:mt-1 [@media(min-width:1024px)_and_(max-height:620px)]:gap-0.5">
                                                    {w.steps.map((s, k) => {
                                                        const n = k + 1;
                                                        const state = n < step ? 'done' : n === step ? 'now' : 'next';
                                                        return (
                                                            <span key={s.short} className="flex items-start gap-2.5 text-[0.9rem] leading-snug [@media(min-width:1024px)_and_(max-height:620px)]:text-[0.82rem]">
                                                                <span
                                                                    aria-hidden="true"
                                                                    className={`mt-[0.4rem] h-2 w-2 shrink-0 rounded-full ${state === 'done' ? 'bg-[#4ade80]' : state === 'now' ? 'bg-primary shadow-[0_0_0_4px_rgba(254,216,53,0.22)]' : 'bg-white/25'}`}
                                                                />
                                                                <span className={state === 'now' ? 'text-white font-semibold' : state === 'done' ? 'text-[#c9cee8]' : 'text-[#7d85ad]'}>{s.short}</span>
                                                            </span>
                                                        );
                                                    })}
                                                </span>
                                                <span className="mt-3 block h-[3px] rounded bg-white/10 overflow-hidden">
                                                    <span className="block h-full bg-primary" style={{ width: `${progress}%`, transition: `width ${TICK}ms linear` }} />
                                                </span>
                                            </>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="hidden lg:flex mt-auto flex-col gap-2">
                            <CtaButtons />
                        </div>
                    </div>

                    {/* ===== stage ===== */}
                    <div ref={colRef} className="order-2 relative min-h-0 flex items-center justify-center lg:h-full">
                        <div
                            ref={wrapRef}
                            className="wf-stage-wrap"
                            // mouse only: touch browsers fire an emulated enter on tap and no leave
                            onPointerEnter={e => { if (e.pointerType === 'mouse') hovering.current = true; }}
                            onPointerLeave={e => { if (e.pointerType === 'mouse') hovering.current = false; }}
                            aria-hidden="true"
                        >
                            <div ref={stageRef} className="wf-stage">
                                <DeskScreens active={active} step={step} stepClass={stepClass} />
                                <PhoneScreens active={active} step={step} stepClass={stepClass} />
                            </div>
                        </div>
                    </div>

                    {/* ===== below 1024px: compact workflow picker + live step, then the CTA ===== */}
                    <div className="order-3 flex flex-col gap-5 lg:hidden">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" role="group" aria-label="Choose a workflow to play">
                            {workflows.map((w, i) => (
                                <button
                                    key={w.id}
                                    type="button"
                                    aria-pressed={i === active}
                                    onClick={() => onPick(i)}
                                    className={`text-left rounded-xl border px-3 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${i === active ? 'border-secondary bg-[rgba(48,79,255,0.16)]' : 'border-[color:var(--wf-line)] bg-white/[0.02]'}`}
                                >
                                    <span className="block font-heading font-bold text-sm text-white">{w.title}</span>
                                    <span className="mt-2 block h-[3px] rounded bg-white/10 overflow-hidden">
                                        <span className="block h-full bg-primary" style={{ width: `${i === active ? progress : 0}%`, transition: `width ${TICK}ms linear` }} />
                                    </span>
                                </button>
                            ))}
                        </div>
                        <p className="min-h-[3em] text-center text-base text-white" aria-hidden="true">
                            {step > 0 && workflows[active].steps[step - 1].caption}
                        </p>
                        <div className="flex flex-col items-center gap-2">
                            <CtaButtons />
                        </div>
                    </div>
                </div>

                {/* the animation is decorative for screen readers; this is the same story as text */}
                <div className="sr-only">
                    {workflows.map(w => (
                        <div key={w.id}>
                            <h3>{w.title}</h3>
                            <ol>{w.steps.map(s => <li key={s.caption}>{s.caption}</li>)}</ol>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

const CtaButtons: React.FC = () => (
    <>
        <div className="flex flex-wrap gap-2.5">
            <a
                href={SIGN_UP_URL}
                onClick={() => sendGAEvent('event', 'workflow_cta', { cta: 'trial' })}
                className="bg-primary text-black hover:bg-primary-accent px-6 py-3 [@media(min-width:1024px)_and_(max-height:620px)]:py-2 rounded-full font-medium transition-colors inline-flex items-center gap-2"
            >
                Start free trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent('event', 'workflow_cta', { cta: 'demo' })}
                className="border border-white/30 hover:border-white/60 text-white px-6 py-3 [@media(min-width:1024px)_and_(max-height:620px)]:py-2 rounded-full font-medium transition-colors"
            >
                Book a demo
            </a>
        </div>
        <p className="text-sm text-[color:var(--wf-txt2)] [@media(min-width:1024px)_and_(max-height:620px)]:hidden">30-day free trial · 50% off your first 3 months · Example data</p>
    </>
);

export default WorkflowProof;
