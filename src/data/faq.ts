import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
    {
        question: 'How does the AI actually work for fire safety contractors?',
        answer: 'Our AI analyzes customer emails to extract job requirements, reads equipment data from photos, and converts engineer voice descriptions into structured compliance documentation. It learns from every job to improve accuracy and suggests next actions based on patterns.',
    },
    {
        question: 'What makes Opscel different from Uptick or ServiceTitan?',
        answer: 'While others digitize manual processes, we eliminate them entirely through AI automation. Instead of engineers filling forms, our AI captures data from photos and voice. Instead of office staff building quotes, AI generates them automatically.',
    },
    {
        question: 'How accurate is the AI data capture?',
        answer: 'Our AI achieves 95%+ accuracy in data extraction from photos and voice descriptions. The system continuously learns from your specific workflows and improves over time. All AI-generated content is validated before certificates are issued.'
    },
    {
        question: 'What about data security and compliance?',
        answer: 'All data is encrypted and stored securely. Our AI ensures 100% compliance with fire safety regulations by validating all requirements before certificates are issued. We maintain complete audit trails for regulatory compliance.',
    },
    {
        question: 'How does the pilot program work?',
        answer: 'The 6-month pilot includes dedicated development team, weekly progress reviews, custom workflow configuration, and preferential pricing for 2 years. Limited to 3 pilot customers with full development partnership and risk-free trial.'
    }
];