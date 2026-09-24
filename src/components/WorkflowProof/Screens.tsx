// Mock office (desk) and field-app (phone) screens for WorkflowProof.
// Example data only — fictional customers, engineers and figures.
// Class names are the global `wf-` classes in workflow-proof.css.
import React from 'react';

type Props = { active: number; step: number; stepClass: string };

const view = (base: string, i: number, active: number, stepClass: string) =>
    i === active ? `${base} wf-on ${stepClass}` : base;

const Check: React.FC<{ size?: number; stroke?: string; width?: number }> = ({ size = 12, stroke = '#fff', width = 2.6 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth={width} aria-hidden="true">
        <path d="M3 8.5l3 3 7-7" />
    </svg>
);

const CallPointPhoto: React.FC<{ width: number | string; height: number }> = ({ width, height }) => (
    <svg width={width} height={height} viewBox="0 0 90 60" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ borderRadius: 8, flex: 'none' }}>
        <rect width="90" height="60" fill="#d9d4cb" />
        <rect x="31" y="10" width="28" height="34" rx="2" fill="#d8262c" />
        <rect x="36" y="15" width="18" height="19" fill="#f4f4f2" />
        <polyline points="37,16 44,24 41,27 51,33" fill="none" stroke="#555" strokeWidth="1.1" />
    </svg>
);

// scene index each sidebar entry highlights (-1 = never)
const NAV: [string, number[]][] = [
    ['Dashboard', []],
    ['Schedule', []],
    ['Quotes', [0]],
    ['Jobs', [2, 3]],
    ['Assets', [1]],
    ['Invoices', []],
    ['Customers', []],
];

const DEVICES: [string, string, string, 't2' | 't3'][] = [
    ['Smoke detector', 'Lounge', 'Z1·L1/004', 't2'],
    ['Heat detector', 'Kitchen', 'Z1·L1/007', 't2'],
    ['Call point', 'Corridor 2F', 'Z2·L1/012', 't2'],
    ['Sounder', 'Corridor 2F', 'Z2·L1/015', 't3'],
    ['Visual alarm', 'Bathroom 3', 'Z3·L1/021', 't3'],
    ['Control panel', 'Reception', 'Panel', 't3'],
];

export const DeskScreens: React.FC<Props> = ({ active, stepClass }) => (
    <div className="wf-desk">
        <div className="wf-chrome"><i /><i /><i /><span className="wf-url">app.opscel.com</span></div>
        <div className="wf-dbody">
            <nav className="wf-side">
                <div className="wf-logo">Opscel</div>
                {NAV.map(([label, scenes]) => (
                    <div key={label} className={scenes.includes(active) ? 'wf-nav wf-on' : 'wf-nav'}>{label}</div>
                ))}
            </nav>
            <div className="wf-dmain">
                {/* 0 — quote accepted → job → schedule */}
                <section className={view('wf-dview', 0, active, stepClass)}>
                    <header className="wf-dh">
                        <div><p className="wf-crumb">Quotes / Q-2417</p><h3>Harbour View Care Home</h3></div>
                        <div className="wf-slot">
                            <span className="wf-pill wf-amber wf-off1">Sent · awaiting customer</span>
                            <span className="wf-pill wf-ok wf-at1">✓ Accepted</span>
                        </div>
                    </header>
                    <div className="wf-card">
                        <table className="wf-lines">
                            <tbody>
                                <tr><td>Annual BS 5839-1 service: 38 devices</td><td className="wf-num">£620.00</td></tr>
                                <tr><td>Optical smoke detector (replacement) × 2</td><td className="wf-num">£190.00</td></tr>
                                <tr><td>Labour: detector replacement</td><td className="wf-num">£260.00</td></tr>
                                <tr className="wf-tot"><td>Total inc. VAT</td><td className="wf-num">£1,284.00</td></tr>
                            </tbody>
                        </table>
                        <div className="wf-qfoot">
                            <span className="wf-toast wf-at1">Accepted online by M. Okafor · 10:42</span>
                            <span className="wf-btn wf-press2"><span className="wf-b1">Convert to job</span><span className="wf-b2">✓ Job J-3088 created</span></span>
                        </div>
                    </div>
                    <div className="wf-card wf-sched">
                        <div className="wf-sch-row" style={{ height: 18 }}>
                            <span className="wf-sch-name" style={{ color: 'var(--wf-pmut)', fontWeight: 500 }}>Thu 24 Sep</span>
                            <div className="wf-ticks">
                                <span style={{ left: '3%' }}>09</span><span style={{ left: '25%' }}>11</span><span style={{ left: '50%' }}>13</span><span style={{ left: '75%' }}>15</span><span style={{ left: '96%' }}>17</span>
                            </div>
                        </div>
                        <div className="wf-sch-row">
                            <span className="wf-sch-name"><span className="wf-av">PS</span>Priya S.</span>
                            <div className="wf-lane">
                                <span className="wf-blk" style={{ left: 0, width: '24%' }}>St Aldhelm’s</span>
                                <span className="wf-blk wf-new" style={{ left: '56.25%', width: '31.25%' }}>J-3088 · Harbour View</span>
                            </div>
                        </div>
                        <div className="wf-sch-row">
                            <span className="wf-sch-name"><span className="wf-av wf-t">TR</span>Tom R.</span>
                            <div className="wf-lane"><span className="wf-blk" style={{ left: '12.5%', width: '37.5%' }}>Kestrel Court · EICR</span></div>
                        </div>
                    </div>
                </section>

                {/* 1 — asset register */}
                <section className={view('wf-dview', 1, active, stepClass)}>
                    <header className="wf-dh">
                        <div><p className="wf-crumb">Assets / Harbour View Care Home</p><h3>Asset register</h3></div>
                        <span className="wf-pill wf-ok wf-live wf-at1">Priya on site · 13:34</span>
                    </header>
                    <div className="wf-banner wf-at3">
                        <span><b>38 devices</b> recorded on J-3088</span>
                        <span className="wf-btn wf-done4"><span className="wf-b1">Update register</span><span className="wf-b2">✓ Register updated</span></span>
                    </div>
                    <div className="wf-card" style={{ overflow: 'hidden' }}>
                        <table className="wf-reg">
                            <thead><tr><th>Device</th><th>Location</th><th>Zone · Addr</th><th>Status</th></tr></thead>
                            <tbody>
                                {DEVICES.map(([name, loc, addr], i) => (
                                    <tr key={addr} style={{ ['--d' as string]: `${i * 120}ms` }}>
                                        <td>{name}</td><td>{loc}</td><td className="wf-mono">{addr}</td>
                                        <td>
                                            <span className="wf-slot">
                                                <span className="wf-pill wf-amber wf-off4">Due 24 Sep</span>
                                                <span className="wf-pill wf-ok wf-at4">✓ Serviced today</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="wf-regfoot wf-at4" style={{ ['--d' as string]: '800ms' }}>Next service due Mar 2027</p>
                </section>

                {/* 2 — defect → remedial quote */}
                <section className={view('wf-dview', 2, active, stepClass)}>
                    <header className="wf-dh">
                        <div><p className="wf-crumb">Jobs / J-3088</p><h3>Harbour View Care Home</h3></div>
                        <span className="wf-pill wf-blue">On site</span>
                    </header>
                    <div className="wf-card wf-def wf-at2">
                        <CallPointPhoto width={72} height={56} />
                        <div style={{ flex: 1 }}>
                            <p className="wf-def-meta">Major · From site · Priya S. · 13:58</p>
                            <h4>Call point Z2·L1/012: glass cracked</h4>
                            <p>Still operates on test. Needs a new element.</p>
                        </div>
                    </div>
                    <div className="wf-card wf-rq wf-at3" style={{ marginTop: 10 }}>
                        <div className="wf-rq-head">
                            <span>Q-2418 · Remedial works</span>
                            <span className="wf-slot">
                                <span className="wf-pill wf-amber wf-off4">Draft</span>
                                <span className="wf-pill wf-ok wf-at4">Sent to customer</span>
                            </span>
                        </div>
                        <table className="wf-lines">
                            <tbody>
                                <tr><td colSpan={2} style={{ fontWeight: 600 }}>Major · Call point Z2·L1/012, Corridor 2F: replace element</td></tr>
                                <tr><td>Resettable call point × 1</td><td className="wf-num">£68.00</td></tr>
                                <tr><td>Labour: 1 hr</td><td className="wf-num">£72.00</td></tr>
                                <tr className="wf-tot"><td>Total inc. VAT</td><td className="wf-num">£168.00</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="wf-btns wf-at3">
                        <span className="wf-btn wf-done4"><span className="wf-b1">Send to customer</span><span className="wf-b2">✓ Sent</span></span>
                        <span className="wf-btn wf-alt">Edit</span>
                    </div>
                </section>

                {/* 3 — complete → certificate → invoice → Xero */}
                <section className={view('wf-dview', 3, active, stepClass)}>
                    <header className="wf-dh">
                        <div><p className="wf-crumb">Jobs / J-3088</p><h3>Harbour View Care Home</h3></div>
                        <div className="wf-slot">
                            <span className="wf-pill wf-blue wf-off2">On site</span>
                            <span className="wf-pill wf-ok wf-at2">✓ Completed 14:41</span>
                        </div>
                    </header>
                    <ol className="wf-tl">
                        <li className="wf-card wf-at2" style={{ ['--d' as string]: '250ms' }}>
                            <span className="wf-ic wf-g"><Check size={16} stroke="currentColor" width={2} /></span>
                            <div className="wf-tx"><h5>BS 5839-1 certificate</h5><p><span className="wf-mono">FAS-3088-01</span> · built from Priya’s readings</p></div>
                            <span className="wf-slot">
                                <span className="wf-btn wf-off3">Issue &amp; email</span>
                                <span className="wf-pill wf-ok wf-at3">Issued</span>
                            </span>
                            <div className="wf-doc" aria-hidden="true"><i /><i /><i /><i style={{ width: '70%' }} /><i /><i style={{ width: '55%' }} /></div>
                        </li>
                        <li className="wf-card wf-at3">
                            <span className="wf-ic">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="2" width="10" height="12" rx="1.5" /><path d="M6 6h4M6 9h4" /></svg>
                            </span>
                            <div className="wf-tx"><h5>Invoice sent</h5><p><span className="wf-mono">INV-1193</span> · lines taken from quote Q-2417</p></div>
                            <span className="wf-num" style={{ fontSize: 14, fontWeight: 600 }}>£1,284.00</span>
                        </li>
                        <li className="wf-card wf-at4">
                            <span className="wf-ic wf-g">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M13 5a5 5 0 0 0-9-1M3 11a5 5 0 0 0 9 1" /><path d="M4 1v3h3M12 15v-3H9" /></svg>
                            </span>
                            <div className="wf-tx"><h5>Posted to <span className="wf-xero">Xero</span></h5><p>Payment status syncs back from Xero</p></div>
                            <span className="wf-pill wf-ok wf-at4" style={{ ['--d' as string]: '1200ms' }}>Paid · via Xero</span>
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    </div>
);

// the phone's clock moves through the afternoon with the story
const PHONE_CLOCK = ['10:44', '13:52', '13:58', '14:41'];

export const PhoneScreens: React.FC<Props> = ({ active, step, stepClass }) => (
    <div className="wf-phone">
        <div className="wf-screen">
            <div className="wf-notch" />
            <div className="wf-sbar"><span>{PHONE_CLOCK[active]}</span><span>{active === 1 && step === 2 ? 'No service' : '●●● 5G'}</span></div>

            {/* 0 — today's route */}
            <section className={view('wf-pview', 0, active, stepClass)}>
                <div className="wf-ph">
                    <div><b>Today’s route</b><small>Thu 24 Sep · 3 jobs</small></div>
                    <span className="wf-conn wf-on2">✓ Synced</span>
                </div>
                <div className="wf-pb">
                    <div className="wf-jc wf-done">
                        <div className="wf-t">09:00 <span className="wf-tag wf-g">Done</span></div>
                        <div className="wf-n">St Aldhelm’s Primary</div>
                        <div className="wf-sub">Emergency lighting · annual test</div>
                    </div>
                    <div className="wf-ins wf-i4"><div>
                        <div className="wf-jc wf-hot">
                            <div className="wf-t">13:30 · J-3088 <span className="wf-tag wf-new">New</span></div>
                            <div className="wf-n">Harbour View Care Home</div>
                            <div className="wf-sub">Fire alarm service · 38 devices listed</div>
                            <div className="wf-sub">14 Quay Road, Poole</div>
                        </div>
                    </div></div>
                    <div className="wf-jc">
                        <div className="wf-t">16:30</div>
                        <div className="wf-n">Marlow House</div>
                        <div className="wf-sub">Extinguisher service · 9 units</div>
                    </div>
                </div>
            </section>

            {/* 1 — device checklist, offline */}
            <section className={view('wf-pview', 1, active, stepClass)}>
                <div className="wf-ph">
                    <div><b>Devices</b><small>J-3088 · Harbour View</small></div>
                    <span className="wf-slot">
                        <span className="wf-conn wf-off wf-at2 wf-off3">No signal · saved</span>
                        <span className="wf-conn wf-on2 wf-at3">✓ Synced</span>
                    </span>
                </div>
                <div className="wf-pb">
                    <div className="wf-fbar wf-at1"><span>✓ Checked in 13:34</span></div>
                    <div className="wf-devs">
                        {DEVICES.map(([name, loc, addr, tick], i) => (
                            <div key={addr} className={`wf-dev wf-${tick}`} style={{ ['--d' as string]: `${(i % 3) * 300}ms` }}>
                                <span className="wf-box"><Check /></span>
                                <span>{name}<span className="wf-a">{addr} · {loc}</span></span>
                            </div>
                        ))}
                    </div>
                    <div className="wf-prog"><i /></div>
                    <div className="wf-count wf-slot" style={{ justifyItems: 'center' }}>
                        <span className="wf-off2">0 of 38 tested</span>
                        <span className="wf-at2 wf-off3">22 of 38 tested</span>
                        <span className="wf-at3">38 of 38 tested</span>
                    </div>
                </div>
            </section>

            {/* 2 — log a defect */}
            <section className={view('wf-pview', 2, active, stepClass)}>
                <div className="wf-ph"><div><b>Log defect</b><small>J-3088 · Harbour View</small></div></div>
                <div className="wf-pb">
                    <div className="wf-field"><label>Device</label>Call point · <span className="wf-mono">Z2·L1/012</span></div>
                    <CallPointPhoto width="100%" height={62} />
                    <div className="wf-field"><label>Note</label><span className="wf-at1">Glass cracked. Still operates on test. Needs a new element.</span></div>
                    <div className="wf-field wf-at1"><label>Parts &amp; time</label>Call point × 1 · 1 hr</div>
                    {/* The app's four severities. Side padding keeps "Observation" off its border; the row height is unchanged. */}
                    <div className="wf-chips">
                        {(['Observation', 'Minor', 'Major', 'Critical'] as const).map((s) => (
                            <span key={s} className={s === 'Major' ? 'wf-pick' : undefined} style={{ padding: '7px 3px' }}>{s}</span>
                        ))}
                    </div>
                    <span className="wf-big wf-p2"><span className="wf-b1">Add defect</span><span className="wf-b2">✓ Added to the job</span></span>
                </div>
            </section>

            {/* 3 — customer sign-off */}
            <section className={view('wf-pview', 3, active, stepClass)}>
                <div className="wf-ph"><div><b>Sign-off</b><small>J-3088 · Harbour View</small></div></div>
                <div className="wf-pb">
                    <div className="wf-sum"><div><b>38</b>tested</div><div><b>2</b>replaced</div><div><b>1</b>defect</div></div>
                    <div className="wf-field"><label>Customer</label>M. Okafor · Home manager</div>
                    <div className="wf-sig">
                        <svg viewBox="0 0 200 92" width="100%" height="92" aria-hidden="true">
                            <path d="M18 58c10-30 20-34 22-18s-6 26 2 14 14-30 20-18-4 22 6 12 12-16 18-8 2 14 10 6 10-10 16-4 4 8 12 2 16-12 24-6" fill="none" stroke="#10202e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="wf-big wf-p2"><span className="wf-b1">Complete job</span><span className="wf-b2">✓ Job complete</span></span>
                    <div className="wf-jc wf-at3" style={{ marginTop: 'auto' }}>
                        <div className="wf-t">Next · 16:30</div>
                        <div className="wf-n">Marlow House</div>
                        <div className="wf-sub">Extinguisher service</div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);
