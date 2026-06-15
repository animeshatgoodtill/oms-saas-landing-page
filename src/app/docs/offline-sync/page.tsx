import DocPageLayout from '@/components/DocPageLayout';
import { offlineSyncGuide } from '@/data/docs/offline-sync-guide';

export const metadata = {
    title: `${offlineSyncGuide.title} - Opscel Documentation`,
    description: offlineSyncGuide.description,
};

export default function OfflineSyncDocPage() {
    return <DocPageLayout guide={offlineSyncGuide} />;
}
