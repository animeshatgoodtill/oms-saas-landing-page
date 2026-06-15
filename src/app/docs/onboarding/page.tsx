import DocPageLayout from '@/components/DocPageLayout';
import { onboardingGuide } from '@/data/docs/onboarding-guide';

export const metadata = {
    title: `${onboardingGuide.title} - Opscel Documentation`,
    description: onboardingGuide.description,
};

export default function OnboardingDocPage() {
    return <DocPageLayout guide={onboardingGuide} />;
}
