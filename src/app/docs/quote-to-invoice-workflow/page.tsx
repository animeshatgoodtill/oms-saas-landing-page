import DocPageLayout from '@/components/DocPageLayout';
import { quoteToInvoiceWorkflowGuide } from '@/data/docs/quote-to-invoice-workflow-guide';

export const metadata = {
    title: `${quoteToInvoiceWorkflowGuide.title} - OpsCel Documentation`,
    description: quoteToInvoiceWorkflowGuide.description,
};

export default function QuoteToInvoiceWorkflowDocPage() {
    return <DocPageLayout guide={quoteToInvoiceWorkflowGuide} />;
}
