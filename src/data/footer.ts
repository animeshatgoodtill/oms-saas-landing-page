import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    featureLinks: IMenuItem[];
    resourcesLinks: IMenuItem[];
    companyLinks: IMenuItem[];
    legalLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "The first AI-native operations management platform for fire safety & electrical contractors.",
    quickLinks: [
        {
            text: "Features",
            url: "/features"
        },
        {
            text: "Pricing",
            url: "/#pricing"
        },
        {
            text: "Testimonials",
            url: "/#testimonials"
        },
        {
            text: "FAQs",
            url: "/#faq"
        }
    ],
    featureLinks: [
        {
            text: "Digital Certificates",
            url: "/features/certificates"
        },
        {
            text: "Field Service App",
            url: "/features/field-service"
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
    ],
    resourcesLinks: [
        {
            text: "Documentation",
            url: "/docs"
        },
        {
            text: "Certificate Guide",
            url: "/docs/certificates"
        },
        {
            text: "Customer Portal Guide",
            url: "/docs/customer-portal"
        },
        {
            text: "Defects to Quotes Guide",
            url: "/docs/defects-to-quotation"
        },
        {
            text: "Invoicing Guide",
            url: "/docs/invoicing"
        },
        {
            text: "Accounting Guide",
            url: "/docs/accounting-integration"
        }
    ],
    companyLinks: [
        {
            text: "About Us",
            url: "/about"
        },
        {
            text: "Contact",
            url: "/contact"
        },
        {
            text: "Support",
            url: "/support"
        }
    ],
    legalLinks: [
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms of Service",
            url: "/terms"
        },
        {
            text: "Cookie Policy",
            url: "/cookies"
        }
    ],
    email: 'hello@opscel.com',
    telephone: '',
    socials: {
        // twitter: 'https://twitter.com/opscel',
        // facebook: 'https://facebook.com/opscel',
        linkedin: 'https://www.linkedin.com/company/opscel',
        // instagram: 'https://www.instagram.com/opscel',
    }
}