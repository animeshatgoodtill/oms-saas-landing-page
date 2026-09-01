import { FiFileText, FiCalendar, FiRepeat, FiGlobe, FiWifi, FiShield, FiCheckCircle, FiDatabase } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "17 certificate types. One system.",
        description: "Your engineer completes a job, Opscel generates the certificate — formatted to the correct British Standard, every mandatory field validated before it leaves.",
        bullets: [
            {
                title: "Fire Safety Certificates",
                description: "BS 5839-1 Installation, Commissioning, Service, Modification • BS 5839-9 Emergency Voice Communication • BS 5266-1 Emergency Lighting • BS 5306-3 Fire Extinguisher Service • Cable Test Readings (Clause 36)",
                icon: <FiFileText size={26} />
            },
            {
                title: "Electrical Certificates",
                description: "BS 7671 EIC • EICR • Minor Works",
                icon: <FiFileText size={26} />
            },
            {
                title: "Automatic Delivery",
                description: "Every certificate includes digital signature capture, automatic numbering, and PDF delivery straight to your customer's portal. No re-typing from handwritten notes. No missed fields flagged by your trade body.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/ui/01-screen.png"
    },
    {
        title: "One job. As many visits as it takes.",
        description: "A fire alarm commissioning isn't one appointment — it's a job that takes three or four site visits. Opscel works the way you already think: one job number, multiple visits, one complete record.",
        bullets: [
            {
                title: "Drag-and-drop calendar",
                description: "See who's available, assign the right engineer",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Multi-visit scheduling",
                description: "Add visits as the job progresses, not upfront",
                icon: <FiRepeat size={26} />
            },
            {
                title: "Syncs with Google Calendar and Outlook",
                description: "Engineers see their schedule where they already look",
                icon: <FiCalendar size={26} />
            }
        ],
        imageSrc: "/images/ui/02-screen.png"
    },
    {
        title: "Defect to invoice, nothing re-keyed.",
        description: "Your engineer services a fire extinguisher and finds a cracked hose on a CO₂ unit. They log the defect on-site. Back in the office, it's already a draft quote — Good, Better, or Best options ready to send.",
        bullets: [
            {
                title: "Defect logging on-site",
                description: "Engineers capture issues while they're still on the job",
                icon: <FiFileText size={26} />
            },
            {
                title: "Good-Better-Best quoting",
                description: "The customer approves from their portal with one click. It becomes a job. The job gets done. It becomes an invoice.",
                icon: <FiRepeat size={26} />
            },
            {
                title: "One flow, no re-keying",
                description: "Defect → Quote → Approved → Job → Invoice. No chasing.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/ui/03-screen.png"
    },
    {
        title: "A portal your customers will actually use.",
        description: "Your customers log in at portal.opscel.com — no app download, no password to remember. A magic link in their email gets them straight in.",
        bullets: [
            {
                title: "Magic link authentication",
                description: "From there they approve quotes, download certificates, and view invoices across all their sites.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Stop fielding requests",
                description: "You stop fielding 'can you resend that certificate?' emails. They stop waiting for them.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Multi-site management",
                description: "Customers with multiple sites see everything in one place",
                icon: <FiDatabase size={26} />
            }
        ],
        imageSrc: "/images/ui/04-screen.png"
    },
    {
        title: "Built for how contractors actually work.",
        description: "Works offline. Engineers fill out forms on a tablet in a plant room with no signal. The app syncs when they're back online. No lost data, no 'I'll do it when I'm back in the office.'",
        bullets: [
            {
                title: "Your data stays yours",
                description: "Every contractor company is fully isolated. Your customers, jobs, and certificates are never visible to anyone else.",
                icon: <FiShield size={26} />
            },
            {
                title: "BAFE, NICEIC, ECA, FIA ready",
                description: "Certificate formats match what your trade body expects. We've mapped the mandatory fields from each standard so you don't have to cross-reference the spec.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Xero integration & PWA",
                description: "Invoices sync to Xero automatically. No double entry. Works on any device — runs on phones, tablets, laptops. No App Store download. Add it to your home screen and go.",
                icon: <FiWifi size={26} />
            }
        ],
        imageSrc: "/images/ui/05-screen.png"
    },
]