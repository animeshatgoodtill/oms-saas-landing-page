import DocPageLayout from '@/components/DocPageLayout';
import { defectsToQuotationGuide } from '@/data/docs/defects-to-quotation-guide';

export const metadata = {
    title: `${defectsToQuotationGuide.title} - Opscel Documentation`,
    description: defectsToQuotationGuide.description,
};

export default function DefectsToQuotationDocPage() {
    return <DocPageLayout guide={defectsToQuotationGuide} />;
}
