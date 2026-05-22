import DocPageLayout from '@/components/DocPageLayout';
import { quotationsGuide } from '@/data/docs/quotations-guide';

export const metadata = {
    title: `${quotationsGuide.title} - OpsCel Documentation`,
    description: quotationsGuide.description,
};

export default function QuotationsDocPage() {
    return <DocPageLayout guide={quotationsGuide} />;
}
