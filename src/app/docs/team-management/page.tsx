import DocPageLayout from '@/components/DocPageLayout';
import { teamManagementGuide } from '@/data/docs/team-management-guide';

export const metadata = {
    title: `${teamManagementGuide.title} - Opscel Documentation`,
    description: teamManagementGuide.description,
};

export default function TeamManagementDocPage() {
    return <DocPageLayout guide={teamManagementGuide} />;
}
