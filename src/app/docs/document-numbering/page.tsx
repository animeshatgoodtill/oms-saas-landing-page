import DocPageLayout from '@/components/DocPageLayout';
import { documentNumberingGuide } from '@/data/docs/document-numbering-guide';

export const metadata = {
    title: `${documentNumberingGuide.title} - Opscel Documentation`,
    description: documentNumberingGuide.description,
};

export default function DocumentNumberingDocPage() {
    return <DocPageLayout guide={documentNumberingGuide} />;
}
