'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import Container from '@/components/Container';
import { DeskScreens, PhoneScreens } from './Screens';
import { FlowDirection, workflows } from './workflows';
import './workflow-proof.css';

// Timing (ms): a beat before step 1, four steps, then a hold on the finished state.
const LEAD = 700;
const STEP = 1900;
const HOLD = 2000;
const TOTAL = LEAD + STEP * 4 + HOLD;
const TICK = 100;

const ROUTE_LABEL: Record<FlowDirection, string> = {
    office: 'In the office',
    field: 'On site',
    toField: 'Office → Field',
    toOffice: 'Field → Office',
};

const DOT_CLASS: Record<FlowDirection, string> = {
    office: '',
    field: 'wf-at-field',
    toField: 'wf-to-field',
    toOffice: 'wf-to-office',
};

const stepClassFor = (step: number) =>
    Array.from({ length: step }, (_, i) => `wf-s${i + 1}`).join(' ');

const SIGN_UP_URL = 'https://app.opscel.com/handler/sign-up';
const DEMO_URL = 'https://calendar.app.google/Tp8Hwzbf6tVMGDkW6';

const WorkflowProof: React.FC = () => {
    const [active, setActive] = useState(0);
    const [step, setStep] = useState(4); // the finished state is the resting (no-JS / reduced-motion) frame
    const [progress, setProgress] = useState(0);

    const sectionRef = useRef<HTMLElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const elapsed = useRef(0);
    const hovering = useRef(false);
    const inView = useRef(false);
    const reduced = useRef(false);

    const show = useCallback((i: number) => {
        elapsed.current = 0;
        setActive(i);
        setStep(reduced.current ? 4 : 0);
        setProgress(reduced.current ? 100 : 0);
    }, []);

    // Scale the fixed-size stage to its container (desk + phone ≥768px, phone only below).
    useEffect(() => {
        const wrap = wrapRef.current;
        const stage = stageRef.current;
        if (!wrap || !stage) return;
        const fit = () => {
            const phoneOnly = window.matchMedia('(max-width: 767px)').matches;
            stage.style.setProperty('--wf-s', String(wrap.clientWidth / (phoneOnly ? 244 : 880)));
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(wrap);
        return () => ro.disconnect();
    }, []);

    // Play only while on screen; start from the top the first time it's seen.
    useEffect(() => {
        reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced.current) return;
        const el = sectionRef.current;
        if (!el) return;
        let started = false;
        const io = new IntersectionObserver(([entry]) => {
            inView.current = entry.isIntersecting;
            if (entry.isIntersecting && !started) {
                started = true;
                show(0);
            }
        }, { threshold: 0.35 });
        io.observe(el);

        const timer = window.setInterval(() => {
            if (!started || !inView.current || hovering.current || document.hidden) return;
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

    const workflow = workflows[active];
    const current = step > 0 ? workflow.steps[step - 1] : null;
    const direction: FlowDirection = current ? current.direction : 'office';
    const stepClass = stepClassFor(step);

    const onTab = (i: number) => {
        show(i);
        sendGAEvent('event', 'workflow_tab', { workflow: workflows[i].id });
    };

    return (
        <section ref={sectionRef} id="how-it-works" className="wf py-16 md:py-24" aria-labelledby="wf-heading">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
                    <h2 id="wf-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">
                        See a job go from quote to paid.
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-[color:var(--wf-txt2)] text-balance">
                        The office and your engineers work on the same job, so nothing gets typed twice.
                    </p>
                </div>

                <div
                    ref={wrapRef}
                    className="wf-stage-wrap"
                    onMouseEnter={() => { hovering.current = true; }}
                    onMouseLeave={() => { hovering.current = false; }}
                    aria-hidden="true"
                >
                    <div ref={stageRef} className="wf-stage">
                        <DeskScreens active={active} stepClass={stepClass} />
                        <PhoneScreens active={active} stepClass={stepClass} />
                    </div>
                </div>

                <div className="wf-flow" aria-hidden="true">
                    <span className={`wf-end ${direction === 'office' || direction === 'toOffice' ? 'wf-lit' : ''}`}>Office</span>
                    <div className="wf-track">
                        <i key={`${active}-${step}`} className={`wf-dot ${DOT_CLASS[direction]}`} />
                    </div>
                    <span className={`wf-end ${direction === 'field' || direction === 'toField' ? 'wf-lit' : ''}`}>Engineer’s phone</span>
                </div>
                <p className="mt-3 min-h-[3em] sm:min-h-[1.6em] text-center text-base md:text-lg text-white" aria-live="polite">
                    {current && (
                        <>
                            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-primary">{ROUTE_LABEL[current.direction]}</span>
                            {current.caption}
                        </>
                    )}
                </p>

                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-[980px] mx-auto" role="tablist" aria-label="Workflows">
                    {workflows.map((w, i) => (
                        <button
                            key={w.id}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => onTab(i)}
                            className={`flex flex-col justify-start text-left rounded-xl border p-3 md:p-4 transition-colors duration-mechanical ease-mechanical focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${i === active ? 'border-secondary bg-[rgba(48,79,255,0.18)]' : 'border-[color:var(--wf-line)] bg-white/[0.03] hover:border-white/30'}`}
                        >
                            <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-[color:var(--wf-txt2)]">{w.route}</span>
                            <span className="block mt-1 font-heading font-bold text-base md:text-lg text-white">{w.title}</span>
                            <span className="hidden md:block mt-1 text-sm leading-snug text-[color:var(--wf-txt2)]">{w.summary}</span>
                            <span className="block mt-3 h-[3px] rounded bg-white/10 overflow-hidden">
                                <span
                                    className="block h-full bg-primary"
                                    style={{ width: `${i < active ? 100 : i === active ? progress : 0}%`, transition: `width ${TICK}ms linear` }}
                                />
                            </span>
                        </button>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href={SIGN_UP_URL}
                        onClick={() => sendGAEvent('event', 'workflow_cta', { cta: 'trial' })}
                        className="bg-primary text-black hover:bg-primary-accent px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                    >
                        Start free trial
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                    <a
                        href={DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sendGAEvent('event', 'workflow_cta', { cta: 'demo' })}
                        className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-medium transition-colors"
                    >
                        Book a demo
                    </a>
                </div>
                <p className="mt-3 text-center text-sm text-[color:var(--wf-txt2)]">30-day free trial · 50% off your first 3 months</p>
                <p className="mt-6 text-center text-xs text-white/40">Example data</p>
            </Container>
        </section>
    );
};

export default WorkflowProof;
