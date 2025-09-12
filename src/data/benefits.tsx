import { FiBarChart2, FiBriefcase, FiCamera, FiMessageCircle, FiTarget, FiTrendingUp, FiUser, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Intelligent Data Capture",
        description: "AI analyzes customer emails, extracts job requirements, and captures data from photos and voice. Engineers describe work conversationally - AI structures the data automatically.",
        bullets: [
            {
                title: "Smart Query Processing",
                description: "Transforms customer emails into structured job requirements, site details, and equipment specifications automatically.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Visual Intelligence",
                description: "Reads equipment data, compliance dates, and condition assessments from photos - eliminating 90% of manual data entry.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Conversational Capture",
                description: "Engineers describe work naturally: 'Replaced faulty RCD, tested circuits' becomes structured compliance documentation.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Automated Documentation",
        description: "Certificates, quotes, and invoices generated automatically with AI validation. No manual review needed - compliance guaranteed every time.",
        bullets: [
            {
                title: "Instant Documentation",
                description: "Certificates, quotes, and invoices generated automatically with AI validation. No manual review needed.",
                icon: <FiZap size={26} />
            },
            {
                title: "Auto-Validation",
                description: "AI ensures all compliance requirements are met before certificates are issued - zero regulatory oversights.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Predictive Prompts",
                description: "AI suggests next actions based on job type, equipment found, and historical patterns.",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Revenue Intelligence",
        description: "Identifies upselling opportunities and maintenance requirements automatically, increasing revenue per job by 30% through AI-powered insights.",
        bullets: [
            {
                title: "Revenue Optimization",
                description: "Identifies upselling opportunities and maintenance requirements automatically, increasing revenue per job by 30%.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Performance Analytics",
                description: "AI learns from every job completed, continuously improving workflow efficiency and business insights.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Continuous Learning",
                description: "System gets smarter with every job completed, adapting to your specific workflows and improving performance over time.",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]