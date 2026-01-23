import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Features",
        url: "/features",
        submenu: [
            {
                text: "Field Service App",
                url: "/features/field-service"
            },
            {
                text: "Digital Certificates",
                url: "/features/certificates"
            },
            {
                text: "Jobs & Scheduling",
                url: "/features/jobs"
            },
            {
                text: "Quotes & Estimates",
                url: "/features/quotations"
            },
            {
                text: "Invoicing",
                url: "/features/invoicing"
            },
            {
                text: "Accounting Integration",
                url: "/features/accounting-integration"
            },
            {
                text: "Customer Portal",
                url: "/features/customer-portal"
            }
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
        text: "Contact",
        url: "/contact"
    }
];