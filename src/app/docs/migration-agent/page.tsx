import DocPageLayout from '@/components/DocPageLayout';
import { migrationAgentGuide } from '@/data/docs/migration-agent-guide';

export const metadata = {
    title: `${migrationAgentGuide.title} - OpsCel Documentation`,
    description: migrationAgentGuide.description,
};

export default function MigrationAgentDocPage() {
    return <DocPageLayout guide={migrationAgentGuide} />;
}
