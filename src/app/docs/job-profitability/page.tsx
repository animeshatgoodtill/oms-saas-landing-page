import DocPageLayout from '@/components/DocPageLayout';
import { jobProfitabilityGuide } from '@/data/docs/job-profitability-guide';

export const metadata = {
    title: `${jobProfitabilityGuide.title} - Opscel Documentation`,
    description: jobProfitabilityGuide.description,
};

export default function JobProfitabilityDocPage() {
    return <DocPageLayout guide={jobProfitabilityGuide} />;
}
