import DocPageLayout from '@/components/DocPageLayout';
import { plannerGuide } from '@/data/docs/planner-guide';

export const metadata = {
    title: `${plannerGuide.title} - Opscel Documentation`,
    description: plannerGuide.description,
};

export default function PlannerDocPage() {
    return <DocPageLayout guide={plannerGuide} />;
}
