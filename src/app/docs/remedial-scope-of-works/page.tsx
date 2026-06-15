import DocPageLayout from '@/components/DocPageLayout';
import { remedialScopeOfWorksGuide } from '@/data/docs/remedial-scope-of-works-guide';

export const metadata = {
    title: `${remedialScopeOfWorksGuide.title} - Opscel Documentation`,
    description: remedialScopeOfWorksGuide.description,
};

export default function RemedialScopeOfWorksDocPage() {
    return <DocPageLayout guide={remedialScopeOfWorksGuide} />;
}
