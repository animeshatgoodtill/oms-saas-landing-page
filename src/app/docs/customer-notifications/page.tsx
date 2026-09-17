import DocPageLayout from '@/components/DocPageLayout';
import { customerNotificationsGuide } from '@/data/docs/customer-notifications-guide';

export const metadata = {
    title: `${customerNotificationsGuide.title} - Opscel Documentation`,
    description: customerNotificationsGuide.description,
};

export default function CustomerNotificationsDocPage() {
    return <DocPageLayout guide={customerNotificationsGuide} />;
}
