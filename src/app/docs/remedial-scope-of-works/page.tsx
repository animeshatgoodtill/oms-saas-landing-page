import DocPageLayout from '@/components/DocPageLayout';
import { remedialScopeOfWorksGuide } from '@/data/docs/remedial-scope-of-works-guide';

export const metadata = {
    title: `${remedialScopeOfWorksGuide.title} - OpsCel Documentation`,
    description: remedialScopeOfWorksGuide.description,
};

export default function RemedialScopeOfWorksDocPage() {
    return <DocPageLayout guide={remedialScopeOfWorksGuide} />;
}
