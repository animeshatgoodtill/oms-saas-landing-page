import DocPageLayout from '@/components/DocPageLayout';
import { certificatesGuide } from '@/data/docs/certificates-guide';

export const metadata = {
    title: `${certificatesGuide.title} - OpsCel Documentation`,
    description: certificatesGuide.description,
};

export default function CertificatesDocPage() {
    return <DocPageLayout guide={certificatesGuide} />;
}
