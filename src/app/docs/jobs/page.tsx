import DocPageLayout from '@/components/DocPageLayout';
import { jobsGuide } from '@/data/docs/jobs-guide';

export const metadata = {
    title: `${jobsGuide.title} - Opscel Documentation`,
    description: jobsGuide.description,
};

export default function JobsDocPage() {
    return <DocPageLayout guide={jobsGuide} />;
}
