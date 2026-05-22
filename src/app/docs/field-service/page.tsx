import DocPageLayout from '@/components/DocPageLayout';
import { fieldServiceGuide } from '@/data/docs/field-service-guide';

export const metadata = {
    title: `${fieldServiceGuide.title} - OpsCel Documentation`,
    description: fieldServiceGuide.description,
};

export default function FieldServiceDocPage() {
    return <DocPageLayout guide={fieldServiceGuide} />;
}
