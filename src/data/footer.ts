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
    icoRegistrationNumber: string;
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
            text: "Service Contracts",
            url: "/features/service-contracts"
        },
        {
            text: "Remote Monitoring",
            url: "/features/remote-monitoring"
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
            text: "Blog",
            url: "/blog"
        },
        {
            text: "Documentation",
            url: "/docs"
        },
        {
            text: "Certificates",
            url: "/docs/certificates"
        },
        {
            text: "Asset Tracking",
            url: "/docs/asset-tracking"
        },
        {
            text: "Customer Portal",
            url: "/docs/customer-portal"
        },
        {
            text: "Defects to Quotes",
            url: "/docs/defects-to-quotation"
        },
        {
            text: "Service Contracts",
            url: "/docs/service-contracts"
        },
        {
            text: "Invoicing",
            url: "/docs/invoicing"
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
            text: "EULA",
            url: "/eula"
        },
        {
            text: "Cookie Policy",
            url: "/cookies"
        }
    ],
    email: 'hello@opscel.com',
    telephone: '',
    socials: {
        facebook: 'https://www.facebook.com/profile.php?id=61575396313261',
        reddit: 'https://www.reddit.com/r/Opscel/',
        linkedin: 'https://www.linkedin.com/company/opscel',
        youtube: 'https://www.youtube.com/channel/UCG6rw49ob1qY--Vwr3TUMmg',
    },
    icoRegistrationNumber: 'ZC105961'
}