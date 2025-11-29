import { FiSmartphone, FiCheckCircle, FiUsers, FiBriefcase, FiPackage, FiTool, FiShield, FiZap } from "react-icons/fi";

export interface IFeatureCategory {
    title: string;
    description: string;
    icon: JSX.Element;
    features: IFeatureDetail[];
}

export interface IFeatureDetail {
    title: string;
    description: string;
}

export const featureCategories: IFeatureCategory[] = [
    {
        title: "Mobile Field Service",
        description: "Your engineers work on-site, not at a desk. Give them tools that work the way they do.",
        icon: <FiSmartphone size={32} />,
        features: [
            {
                title: "Take Photos, Not Notes",
                description: "Snap a picture of the equipment—serial numbers, test dates, condition—all captured automatically. No typing, no clipboards, no mistakes."
            },
            {
                title: "Speak Your Job Notes",
                description: "Say what you did, the system writes it down. 'Replaced faulty RCD, tested all circuits' becomes structured documentation ready for certificates."
            },
            {
                title: "GPS Check-In & Out",
                description: "Engineers check in when they arrive, check out when they leave. You know where everyone is, jobs get timestamped, disputes disappear."
            },
            {
                title: "Digital Signatures On-Site",
                description: "Customer signs on the phone, job's done. No paper, no 'can you sign this when I see you next week,' no lost forms."
            },
            {
                title: "Works via Telegram (Optional)",
                description: "No app to install if your engineers use Telegram. They get job notifications, check in, upload photos, log deficiencies—all from a chat app they already have."
            }
        ]
    },
    {
        title: "Instant Documentation",
        description: "Stop waiting days for certificates. Generate compliant documentation the moment the job's done.",
        icon: <FiCheckCircle size={32} />,
        features: [
            {
                title: "Same-Day Certificates",
                description: "Job complete at 4pm? Customer has their certificate by 4:05pm. Invoice goes out immediately, payment comes faster."
            },
            {
                title: "Built-In Compliance",
                description: "BS7671 for electrical, BS5839 for fire safety, BS5266 for emergency lighting—compliance requirements are automatic. No missed fields, no regulatory problems."
            },
            {
                title: "Job Management That Makes Sense",
                description: "Create jobs, assign engineers, track progress, mark complete. Everything in one place, nothing falls through the cracks."
            },
            {
                title: "Smart Job Prompts",
                description: "System asks your engineer: 'Did you notice any equipment needing attention?' Opportunities get logged while they're still on-site, not forgotten in the van."
            },
            {
                title: "Deficiency Logging",
                description: "Found something that needs fixing? Take a photo, note the severity, recommend the fix. Customer gets a clear summary, you get the follow-on work."
            }
        ]
    },
    {
        title: "Team Management",
        description: "As your team grows, you need control without chaos. Set permissions, track who does what, keep everyone accountable.",
        icon: <FiUsers size={32} />,
        features: [
            {
                title: "Role-Based Access",
                description: "Admins see everything, engineers see their jobs, accounts see invoices. Seven permission levels mean everyone gets exactly what they need—nothing more, nothing less."
            },
            {
                title: "Easy Team Invitations",
                description: "Add a new engineer in 30 seconds. Email invite, they accept, they're in. Remove someone just as fast when they leave."
            },
            {
                title: "Job Assignments",
                description: "Assign jobs to specific engineers or teams. They see their schedule, you see who's working on what, customers see when to expect you."
            },
            {
                title: "Activity Tracking",
                description: "Full audit trail of who did what and when. Useful for training, essential for disputes, required for compliance."
            }
        ]
    },
    {
        title: "Customer Management",
        description: "Your customers aren't just names in a spreadsheet. Track sites, contacts, history—everything you need to deliver great service.",
        icon: <FiBriefcase size={32} />,
        features: [
            {
                title: "Unlimited Customers & Sites",
                description: "One customer, 50 sites? No problem. Each location gets its own service history, equipment list, contact details."
            },
            {
                title: "Multiple Contacts Per Customer",
                description: "The site manager wants service updates, the finance director wants invoices, the owner wants compliance certs. Send each person what they need."
            },
            {
                title: "Complete Service History",
                description: "See every job you've done for a customer, every certificate issued, every deficiency found. Answer 'when did we last service that panel?' in two clicks."
            },
            {
                title: "Smart Customer Data",
                description: "Import from your old system or add as you go. The more jobs you complete, the smarter the system gets about each customer."
            }
        ]
    },
    {
        title: "Asset & Equipment Tracking",
        description: "For businesses that service equipment—fire panels, distribution boards, emergency lighting—track what you maintain, when it was last serviced, what needs attention.",
        icon: <FiPackage size={32} />,
        features: [
            {
                title: "Track Customer Equipment (Business Tier)",
                description: "Every fire panel, every distribution board, every piece of kit you're responsible for—tracked, tagged, with complete service history."
            },
            {
                title: "Service History Per Asset",
                description: "When did we last service this fire panel? What work was done? What deficiencies were found? It's all there."
            },
            {
                title: "Maintenance Scheduling",
                description: "Annual testing due in 30 days? System reminds you. Never miss a compliance date, never lose a maintenance contract."
            },
            {
                title: "Condition Tracking",
                description: "Record condition before and after each service. Spot deteriorating equipment early, recommend replacements before failures happen."
            }
        ]
    },
    {
        title: "Built for Your Industry",
        description: "Generic job management doesn't work for trade contractors. OpsCel speaks your language—electrical, fire safety, plumbing, HVAC, maintenance.",
        icon: <FiTool size={32} />,
        features: [
            {
                title: "Five Trade Industries",
                description: "Electrical, fire safety, plumbing, HVAC, general maintenance. Pick your industry, get the right forms, fields, and compliance requirements."
            },
            {
                title: "Industry-Specific Fields",
                description: "Electrical jobs track circuits and voltage. Fire safety tracks detectors and zones. Each industry gets exactly the fields it needs—no generic forms, no workarounds."
            },
            {
                title: "Custom Dropdowns",
                description: "Your business uses specific equipment brands or circuit types? Customize every dropdown to match your workflows. No forced options, no 'other' fields."
            },
            {
                title: "Low Carbon Technology (Electrical)",
                description: "Solar PV, battery storage, EV chargers—if you install renewable tech, track MCS certs, DNO applications, OZEV grants, all in one place."
            }
        ]
    },
    {
        title: "Simple, Transparent Pricing",
        description: "No surprise fees, no per-job charges, no 'contact sales.' Three tiers, clear pricing, upgrade or downgrade anytime.",
        icon: <FiZap size={32} />,
        features: [
            {
                title: "90-Day Free Trial",
                description: "Full access to everything for 90 days. If it doesn't work for you, cancel—no questions, no hard feelings."
            },
            {
                title: "Pay for Active Users Only",
                description: "If someone's not using the system, they don't count. Only active users get billed. Add and remove people as your team changes."
            },
            {
                title: "£10 Per Additional User",
                description: "Every plan includes users (3, 5, or 8). Need more? £10/month per person, any tier. Simple math, no surprises."
            },
            {
                title: "Upgrade Anytime",
                description: "Start on Starter, move to Business when you're ready. Your data stays, billing adjusts, nothing breaks."
            }
        ]
    },
    {
        title: "Security & Reliability",
        description: "This is your business data—customer details, job records, financial information. We take that seriously.",
        icon: <FiShield size={32} />,
        features: [
            {
                title: "Bank-Level Encryption",
                description: "All data encrypted in transit and at rest. Your information is safer with us than in a filing cabinet or spreadsheet."
            },
            {
                title: "UK-Based Servers",
                description: "Your data stays in the UK, on UK servers, under UK law. No foreign jurisdictions, no GDPR headaches."
            },
            {
                title: "Complete Audit Trails",
                description: "Every action logged—who did what, when, from where. Essential for compliance, invaluable for disputes."
            },
            {
                title: "Automatic Backups",
                description: "Your data backed up continuously. If something goes wrong (it won't), we can restore to any point in time."
            },
            {
                title: "Multi-Tenant Isolation",
                description: "Your data is completely separate from other customers. You'll never see their information, they'll never see yours. Guaranteed."
            }
        ]
    }
];

export const featuresPageDetails = {
    title: "Everything You Need to Run Your Business",
    description: "From field service to invoicing, customer management to compliance—OpsCel handles it all. No bolted-on features, no 'partner integrations,' just one system that works."
};
