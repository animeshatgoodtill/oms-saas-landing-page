import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Features",
        url: "/features",
        submenu: [
            { text: "Dashboard & Insights", url: "/features/dashboard" },
            { text: "Jobs & Scheduling", url: "/features/jobs" },
            { text: "Service Contracts", url: "/features/service-contracts" },
            { text: "Field Service App", url: "/features/field-service" },
            { text: "Digital Certificates", url: "/features/certificates" },
            { text: "Quotes & Estimates", url: "/features/quotations" },
            { text: "Invoicing", url: "/features/invoicing" },
            { text: "Customer Management", url: "/features/customers" },
            { text: "Customer Portal", url: "/features/customer-portal" },
            { text: "Accounting Integration", url: "/features/accounting-integration" },
        ]
    },
    {
        text: "Pricing",
        url: "/#pricing"
    },
    {
        text: "About",
        url: "/about"
    },
    {
        text: "Blog",
        url: "/blog"
    },
    {
        text: "Contact",
        url: "/contact"
    }
];