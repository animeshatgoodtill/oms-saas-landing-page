import { FiBriefcase, FiCamera, FiMessageCircle, FiTarget, FiTrendingUp, FiUser, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Your Engineers Stay in the Van",
        description: "Engineers hate paperwork. They spend hours each evening typing up jobs instead of being home with family. With OpsCel, they take photos, speak into their phone, and they're done. The system handles the rest.",
        bullets: [
            {
                title: "Photos Replace Forms",
                description: "Take a picture of the equipment, the system reads the data. No more copying serial numbers, test dates, or equipment details by hand.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Speak, Don't Type",
                description: "Say what you did: 'Replaced faulty RCD, tested all circuits, customer happy.' Job notes written, structured, and ready for the certificate.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "75% Less Admin Time",
                description: "What used to take an hour of evening paperwork now takes 15 minutes on-site. More jobs per day, engineers home earlier.",
                icon: <FiZap size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Certificates While You Sleep",
        description: "Your office staff shouldn't spend days chasing engineers for details, building certificates, and checking compliance boxes. The moment your engineer marks a job complete, the certificate is ready.",
        bullets: [
            {
                title: "Instant Documentation",
                description: "Job complete at 4pm? Certificate in the customer's inbox by 4:05pm. No waiting, no chasing, no delays.",
                icon: <FiZap size={26} />
            },
            {
                title: "Compliance Built-In",
                description: "BS7671 for electrical, BS5839 for fire safety—compliance requirements are automatic. No missed boxes, no regulatory headaches.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Invoice Faster, Get Paid Faster",
                description: "Certificate delivered same-day means invoices go out immediately. Shorten your cash flow cycle by days, sometimes weeks.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Never Miss Another Upsell",
        description: "Your engineers spot issues on every job—outdated boards, missing RCDs, equipment due for replacement. But they forget to mention it, and the opportunity is gone. OpsCel prompts them on-site so you capture the work.",
        bullets: [
            {
                title: "Smart Prompts On-Site",
                description: "System asks: 'Did you notice any equipment that needs attention?' Engineers log it instantly while they're still there.",
                icon: <FiTarget size={26} />
            },
            {
                title: "40% More Revenue Captured",
                description: "Follow-on work, remedial jobs, maintenance contracts—all the opportunities you're currently leaving on the table, now tracked and quoted automatically.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Customer Notifications",
                description: "Customer gets a summary: 'During today's service, we noticed your fire panel is 12 years old and due for replacement.' Quote attached. Easy upsell.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]