import DocPageLayout from '@/components/DocPageLayout';
import { assetTrackingGuide } from '@/data/docs/asset-tracking-guide';

export const metadata = {
    title: `${assetTrackingGuide.title} - OpsCel Documentation`,
    description: assetTrackingGuide.description,
};

export default function AssetTrackingDocPage() {
    return <DocPageLayout guide={assetTrackingGuide} />;
}
