import DocPageLayout from '@/components/DocPageLayout';
import { calendarIntegrationGuide } from '@/data/docs/calendar-integration-guide';

export const metadata = {
    title: `${calendarIntegrationGuide.title} - OpsCel Documentation`,
    description: calendarIntegrationGuide.description,
};

export default function CalendarIntegrationDocPage() {
    return <DocPageLayout guide={calendarIntegrationGuide} />;
}
