import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'James Mitchell',
        role: 'Managing Director at Elite Fire Safety Ltd',
        message: `The AI-powered automation in ${siteDetails.siteName} has eliminated 75% of our engineer paperwork. What used to take 2 hours of admin work now happens automatically - our engineers can focus on what they do best: keeping people safe.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sarah Williams',
        role: 'Operations Manager at SecureTech Electrical',
        message: `SmartField's intelligent data capture is revolutionary. Engineers simply describe what they've done conversationally, and the AI structures it into perfect compliance documentation. We've accelerated our certificate turnaround by 60%.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Robert Chen',
        role: 'Fire Safety Consultant',
        message: `${siteDetails.siteName} isn't just digitizing our processes - it's intelligently automating them. The AI learns from every job and gets smarter over time. It's the future of field operations management.`,
        avatar: '/images/testimonial-3.webp',
    },
];