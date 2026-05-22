import DocPageLayout from '@/components/DocPageLayout';
import { assetLifecycleGuide } from '@/data/docs/asset-lifecycle-guide';

export const metadata = {
    title: `${assetLifecycleGuide.title} - OpsCel Documentation`,
    description: assetLifecycleGuide.description,
};

export default function AssetLifecycleDocPage() {
    return <DocPageLayout guide={assetLifecycleGuide} />;
}
