import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
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
            url: "/#features"
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
    telephone: '+44 (0)20 1234 5678',
    socials: {
        // twitter: 'https://twitter.com/opscel',
        // facebook: 'https://facebook.com/opscel',
        linkedin: 'https://www.linkedin.com/company/opscel',
        // instagram: 'https://www.instagram.com/opscel',
    }
}