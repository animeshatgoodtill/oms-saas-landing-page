import DocPageLayout from '@/components/DocPageLayout';
import { reportsGuide } from '@/data/docs/reports-guide';

export const metadata = {
    title: `${reportsGuide.title} - OpsCel Documentation`,
    description: reportsGuide.description,
};

export default function ReportsDocPage() {
    return <DocPageLayout guide={reportsGuide} />;
}
