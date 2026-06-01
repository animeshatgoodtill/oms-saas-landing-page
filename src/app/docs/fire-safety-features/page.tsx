import DocPageLayout from '@/components/DocPageLayout';
import { fireSafetyFeaturesGuide } from '@/data/docs/fire-safety-features-guide';

export const metadata = {
    title: `${fireSafetyFeaturesGuide.title} - Opscel Documentation`,
    description: fireSafetyFeaturesGuide.description,
};

export default function FireSafetyFeaturesDocPage() {
    return <DocPageLayout guide={fireSafetyFeaturesGuide} />;
}
