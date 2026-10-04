import DocPageLayout from '@/components/DocPageLayout';
import { ramsGuide } from '@/data/docs/rams-guide';

export const metadata = {
    title: `${ramsGuide.title} - Opscel Documentation`,
    description: ramsGuide.description,
};

export default function RamsDocPage() {
    return <DocPageLayout guide={ramsGuide} />;
}
