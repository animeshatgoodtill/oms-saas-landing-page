import DocPageLayout from '@/components/DocPageLayout';
import { customerPortalGuide } from '@/data/docs/customer-portal-guide';

export const metadata = {
    title: `${customerPortalGuide.title} - OpsCel Documentation`,
    description: customerPortalGuide.description,
};

export default function CustomerPortalDocPage() {
    return <DocPageLayout guide={customerPortalGuide} />;
}
