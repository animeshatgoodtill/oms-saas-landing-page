import DocPageLayout from '@/components/DocPageLayout';
import { certificatesGuide } from '@/data/docs/certificates-guide';

export const metadata = {
    title: `${certificatesGuide.title} - Opscel Documentation`,
    description: certificatesGuide.description,
};

export default function CertificatesDocPage() {
    return <DocPageLayout guide={certificatesGuide} />;
}
