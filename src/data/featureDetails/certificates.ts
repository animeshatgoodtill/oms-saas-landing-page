import { IFeatureDetail } from '@/types';

export const certificatesDetail: IFeatureDetail = {
    slug: 'certificates',
    title: 'The Only System That Knows BS 7671 Table 41.4 by Heart',
    subtitle: 'Opscel Compliance Certificate System',
    heroDescription: 'This isn\'t just digital forms—it\'s the industry\'s first compliance document system that enforces BS 7671, BS 5839, and MCS standards before certificates can be issued. Auto-lookup Zs limits, validate test results, capture GPS-tagged signatures, and maintain immutable audit trails. Your engineers can\'t accidentally issue a non-compliant certificate.',
    iconId: 'icon-compliance-shield',
    screenshotImage: '/images/features/certificates/certificates-hero-mockup.svg',

    sections: [
        {
            eyebrow: 'Immutable Once Issued',
            title: 'Draft, Completed, Issued — Then It Can\'t Be Touched',
            description: 'A certificate moves through a fixed lifecycle: Draft while the engineer records results, Completed once every required field and signature is present, then Issued — which locks it for good and assigns the permanent certificate number. From there, the only paths are Voided (with a written reason kept permanently) or Superseded by a linked replacement. The original record is never edited or deleted.',
            imageSrc: '/images/features/certificates/certificate-status-workflow.svg',
            imageAlt: 'Certificate status workflow diagram: Draft moves to Completed, then to Issued, which is immutable. From Issued, a certificate can be Voided with a stored reason or Superseded by a linked replacement certificate.',
            imageWidth: 1040,
            imageHeight: 480,
            bullets: [
                'Issued certificates are locked — no field, reading or signature can be changed',
                'Voiding requires a written reason, stored permanently against the record',
                'Superseding issues a new certificate and links it back to the one it replaces'
            ]
        }
    ],

    featureHighlights: [
        {
            iconId: 'icon-compliance-shield',
            title: 'BS 7671 Zs Auto-Lookup & Validation',
            description: 'Engineer enters Zs = 1.2Ω for B32 MCB? System auto-looks up BS 7671 Table 41.4 limit (1.44Ω), applies temperature correction (×0.8 = 1.152Ω), shows status: ⚠️ WARNING (compliant but close to limit). Margin: -0.048Ω. No manual table lookups, no calculator needed.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Prevents Non-Compliant Certificates',
            description: 'Can\'t issue EIC with IR <1MΩ. Can\'t issue EICR with C1/C2 observations marked "Satisfactory". Can\'t issue Solar PV with Voc/Isc >10% deviation from expected values. System enforces regulations—engineers can\'t bypass validation.'
        },
        {
            iconId: 'icon-activity-log',
            title: 'Immutable Audit Trail',
            description: 'Every certificate tracks who changed status, when, and why. Voiding requires written reason (stored permanently). Can\'t delete, only void. Superseding creates linked chain. For legal/insurance: complete chain of custody proving what was tested, by whom, and when.'
        },
        {
            iconId: 'icon-signature',
            title: 'GPS-Tagged Digital Signatures with Forensic Evidence',
            description: 'Captures GPS coordinates (proves engineer on-site), IP address, exact timestamp, device info, signature image. BS 7671 EIC requires 3 signatures (Designer, Constructor, Inspector)—system enforces all three before issue. Dispute-proof documentation.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Defect-to-Remediation Tracking',
            description: 'EICR C2 defect recorded → £450 quote generated → Job #1234 created → Minor Works remediation cert issued (linked back to original EICR). Track defects from discovery through completion. Prove to insurers/regulators you followed up.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Customer Acknowledgment Portal',
            description: 'Secure token-based access (no login needed). Customer views certificate, downloads PDF, digitally acknowledges receipt. Timestamp of viewing/acknowledging tracked in database. Can\'t claim "never received cert"—you have proof they viewed it on [date].'
        },
        {
            iconId: 'icon-job-workflow',
            title: 'Job → Certificate Auto-Population',
            description: 'Customer details, site address, equipment serial numbers, contractor credentials—all pre-filled from job record. Engineers start 50% done. No double data entry between job management and certificates.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: '17 Certificate Types, All Standards-Compliant',
            description: 'Electrical: EIC, EICR, Minor Works, PAT Test (BS 7671:2018+A2:2022, IET Code 5th Ed). Fire Safety: Fire Alarm Service, Commissioning, Modification, Installation, Design, Acceptance, Verification (BS 5839-1:2025), Emergency Lighting (BS 5266-1:2025), Extinguisher Service (BS 5306-3:2017), Cable Test Readings (supporting document), EVC Commissioning (BS 5839-9:2021). Low Carbon: Solar PV Commissioning (BS EN 62446-1:2016, MCS). Security: Security System Handover Certificate (PD 6662, BS EN 50131-1, BS EN 62676-4, BS EN 60839-11). Every certificate type matches official model forms.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Complete BAFE SP203-1 Documentation Trail',
            description: 'All five BS 5839-1:2025 modular fire alarm certificates—Design, Installation, Commissioning, Acceptance, Verification—plus Servicing, so a BAFE-certificated fire company runs an entire project\'s paperwork in one system. Your BAFE SP203 registration pre-fills onto every certificate, and Acceptance enforces the accepting client\'s counter-signature before it can be issued.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'Retest Interval Tracking',
            description: 'EICR due in 5 years? Fire alarm service due in 6 months? System tracks inspection intervals per certificate type. Dashboard flags upcoming retests. Never miss compliance deadline or recurring revenue opportunity.'
        },
        {
            iconId: 'icon-signature',
            title: 'Multi-Party Signature Enforcement',
            description: 'BS 7671 certificates require Designer, Constructor, Inspector signatures. System won\'t allow issue without all required parties signing. Each signature captures GPS, timestamp, device. Complete accountability for who certified what.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Job Complete, Certificate Pre-Filled',
            description: 'Mark job complete. Create certificate—customer details, site address, equipment serial numbers, contractor credentials all auto-populate from job record. Engineers start 50% done.'
        },
        {
            stepNumber: 2,
            title: 'Enter Test Results with Auto-Validation',
            description: 'Add circuits with Zs, IR, RCD trip times. System auto-looks up BS 7671 Table 41.4 limits, applies temperature correction, shows pass/fail status with margins. Fire certs validate zone counts and device tests. Solar PV checks Voc/Isc within ±10% of expected values.'
        },
        {
            stepNumber: 3,
            title: 'Log Defects (EICR)',
            description: 'Found C1/C2 observations? Log defects with photos, severity ratings. System automatically marks EICR as "Unsatisfactory" if C1/C2 present. Generate remedial quote directly from defects. Track remediation job to completion.'
        },
        {
            stepNumber: 4,
            title: 'Sign with GPS-Tagged Signatures',
            description: 'Add required signatures (Designer, Constructor, Inspector for BS 7671 certs). Each signature captures GPS coordinates, IP address, timestamp, device info. System validates all required fields complete before allowing issue. Certificate number auto-assigned.'
        },
        {
            stepNumber: 5,
            title: 'Customer Portal Delivery & Acknowledgment',
            description: 'Share secure portal link (no login needed). Customer views certificate, downloads PDF, digitally acknowledges receipt. System tracks viewing/acknowledgment timestamps. Complete proof of delivery for disputes.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'Reduce liability—certificates validated against BS 7671/BS 5839 before issue, engineers can\'t bypass limits',
                'Prove compliance—complete audit trail with GPS-tagged signatures for insurance claims and HSE investigations',
                'Save time—auto-populate certificates from job data, no double entry',
                'Track remediation—defect-to-quote pipeline ensures C1/C2 observations don\'t fall through cracks',
                'Customer acknowledgment proof—can\'t claim "never received cert", you have timestamp evidence',
                'Unified platform—CRM + Jobs + Compliance certs in one system, not three separate tools'
            ]
        },
        {
            persona: 'Compliance Officers',
            benefits: [
                'Enforced standards—engineers can\'t bypass Zs limits or skip required fields, system blocks non-compliant issue',
                'Audit-ready—every certificate has status history showing who created/edited/issued/voided and when',
                'Immutable records—voiding requires written reason, can\'t delete certificates, complete chain of custody',
                'Multi-party signatures—BS 7671 certs enforce Designer/Constructor/Inspector signatures with GPS/timestamp',
                'Customer portal tracking—digital acknowledgment with viewing timestamps for proof of delivery',
                'Retest tracking—EICR/Fire Alarm service intervals flagged automatically, never miss compliance deadline'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'Auto-lookups—no more flipping through BS 7671 Table 41.4, system knows Zs limits by MCB type/rating',
                'Pass/fail guidance—enter Zs = 1.2Ω, system shows limit 1.44Ω, corrected 1.152Ω, status: ⚠️ WARNING with margin',
                'Mobile-first—complete certificates on-site from tablet/phone, no evening paperwork',
                'Draft mode—save partial work, complete later, no lost data if signal drops',
                'GPS signatures—sign on-site, GPS proves you were there, dispute-proof documentation',
                'Defect logging—take photo of faulty RCD, log C2, remedial quote generates automatically'
            ]
        }
    ],

    stats: [
        {
            value: '9 standards',
            label: 'BS 7671, BS 5839-1, BS 5839-9, BS 5266-1, BS 5306-3, IET CoP, BS EN 62446-1, MCS, PD 6662 enforced automatically'
        },
        {
            value: 'GPS+IP+Time',
            label: 'Forensic evidence captured per signature—proves engineer on-site'
        },
        {
            value: 'Immutable',
            label: 'Audit trail—can\'t delete certs, voiding requires written reason, complete chain of custody'
        }
    ],

    comparison: [
        {
            feature: 'BS 7671 Zs auto-lookup (Table 41.4 + temp correction)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Pass/fail validation (prevents non-compliant certs)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Job → Certificate auto-fill (no double entry)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Multi-party signatures (Designer/Constructor/Inspector)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'GPS-tagged signatures (forensic evidence)',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Immutable audit trail (can\'t delete, voiding requires reason)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Defect → Quote → Job → Remediation cert pipeline',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Customer acknowledgment portal (proof of delivery)',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'CRM + Jobs + Certs unified (not 3 separate tools)',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'Does Opscel support BAFE, NICEIC, ECA, and FIA certificate formats?',
            answer: 'Yes. Certificate formats match what your trade body expects — we\'ve mapped the mandatory fields from each standard so you don\'t have to cross-reference the spec. BAFE SP203-1 fire alarm certificates include the required BAFE reference and scheme fields. NICEIC electrical certificates follow the approved contractor format with enrolment number. ECA and FIA members get the same standards-compliant outputs their membership requires. Every certificate type auto-selects the right template based on the work you\'re signing off, so you never issue the wrong format to the wrong body.'
        },
        {
            question: 'How does BS 7671 Zs auto-lookup work?',
            answer: 'When you enter a Zs reading for a circuit, Opscel automatically looks up the maximum permitted value from BS 7671:2018+A2:2022 Table 41.4 based on protective device type (MCB/RCBO/Fuse) and rating (6A, 10A, 16A, etc.). It then applies temperature correction factor (×0.8 for 70°C conductors) and shows pass/fail status with margin. Example: B32 MCB has 1.44Ω limit, corrected to 1.152Ω. Your reading of 1.2Ω shows ⚠️ WARNING (compliant but close). No manual table lookups or calculator needed.'
        },
        {
            question: 'What prevents engineers from issuing non-compliant certificates?',
            answer: 'System enforces regulations before allowing issue. Can\'t issue EIC with IR <1MΩ (BS 7671 minimum). Can\'t issue EICR with C1/C2 observations marked "Satisfactory" (automatic fail). Can\'t issue Solar PV with Voc/Isc >10% deviation from expected. Can\'t skip required signatures (BS 7671 needs Designer, Constructor, Inspector). Engineers can\'t bypass validation—system blocks non-compliant issue.'
        },
        {
            question: 'What forensic evidence is captured with digital signatures?',
            answer: 'Every signature captures: GPS coordinates (proves engineer was on-site), IP address (network evidence), exact timestamp (when signed), device info (which phone/tablet), signature image (visual confirmation). For BS 7671 certificates requiring 3 signatures (Designer, Constructor, Inspector), each party\'s signature captures all this data. In disputes or insurance claims, you have complete proof of who signed what, where they were, and when it happened.'
        },
        {
            question: 'Can customers claim they never received a certificate?',
            answer: 'No. Customer portal tracks digital acknowledgment with timestamps. You send secure link (no login needed), customer views certificate, downloads PDF, and digitally acknowledges receipt. System stores: date/time they viewed certificate, date/time they acknowledged, IP address, device used. You have complete proof of delivery. If customer claims "never received", you show them viewing timestamp and acknowledgment record.'
        },
        {
            question: 'How does defect-to-remediation tracking work for EICRs?',
            answer: 'EICR inspection finds C2 defect (e.g., faulty RCD). Log defect with photo and severity. System automatically marks EICR as "Unsatisfactory" (can\'t mark "Satisfactory" with C1/C2 present). Generate remedial quote directly from defect (£450 quote created). Customer accepts, office creates Job #1234 for remediation. Engineer completes work, issues Minor Works certificate. Minor Works cert links back to original EICR defect. Complete audit trail from discovery through remediation. Proves to insurers/regulators you followed up.'
        },
        {
            question: 'What happens if I need to void a certificate?',
            answer: 'Voiding requires written reason (stored permanently in database). Original certificate retained with clear "VOIDED" status—can\'t delete, only void. If you issue superseding certificate, system creates linked chain showing original → voided → replacement. Complete chain of custody for audits. Status history tracks who voided it, when, why, from which IP/device. Maintains compliance with record-keeping requirements while preventing voided certificate from being used.'
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
