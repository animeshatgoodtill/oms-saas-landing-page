import DocPageLayout from '@/components/DocPageLayout';
import { brandingGuide } from '@/data/docs/branding-guide';

export const metadata = {
    title: `${brandingGuide.title} - OpsCel Documentation`,
    description: brandingGuide.description,
};

export default function BrandingDocPage() {
    return <DocPageLayout guide={brandingGuide} />;
}
