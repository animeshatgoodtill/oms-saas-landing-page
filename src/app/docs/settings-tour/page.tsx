import DocPageLayout from '@/components/DocPageLayout';
import { settingsTourGuide } from '@/data/docs/settings-tour-guide';

export const metadata = {
    title: `${settingsTourGuide.title} - OpsCel Documentation`,
    description: settingsTourGuide.description,
};

export default function SettingsTourDocPage() {
    return <DocPageLayout guide={settingsTourGuide} />;
}
