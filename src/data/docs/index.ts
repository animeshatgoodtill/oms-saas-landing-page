import { IDocGuide } from '@/types';

import { onboardingGuide } from './onboarding-guide';
import { settingsTourGuide } from './settings-tour-guide';
import { teamManagementGuide } from './team-management-guide';
import { brandingGuide } from './branding-guide';
import { documentNumberingGuide } from './document-numbering-guide';
import { fieldServiceGuide } from './field-service-guide';
import { jobsGuide } from './jobs-guide';
import { offlineSyncGuide } from './offline-sync-guide';
import { fireSafetyFeaturesGuide } from './fire-safety-features-guide';
import { worksheetsGuide } from './worksheets-guide';
import { certificatesGuide } from './certificates-guide';
import { quotationsGuide } from './quotations-guide';
import { defectsToQuotationGuide } from './defects-to-quotation-guide';
import { remedialScopeOfWorksGuide } from './remedial-scope-of-works-guide';
import { customerPortalGuide } from './customer-portal-guide';
import { serviceContractsGuide } from './service-contracts-guide';
import { plannerGuide } from './planner-guide';
import { calendarIntegrationGuide } from './calendar-integration-guide';
import { assetTrackingGuide } from './asset-tracking-guide';
import { assetLifecycleGuide } from './asset-lifecycle-guide';
import { quoteToInvoiceWorkflowGuide } from './quote-to-invoice-workflow-guide';
import { jobProfitabilityGuide } from './job-profitability-guide';
import { reportsGuide } from './reports-guide';
import { telegramBotGuide } from './telegram-bot-guide';
import { migrationAgentGuide } from './migration-agent-guide';
import { purchaseOrdersGuide } from './purchase-orders-guide';
import { remoteMonitoringGuide } from './remote-monitoring-guide';

// All docs guides that follow the IDocGuide data structure (i.e. rendered via
// DocPageLayout). Invoicing and Accounting Integration are bespoke JSX pages
// and are not included here — they're still discoverable via the shallow
// title/description records in documentationGuides.ts.
export const docGuides: IDocGuide[] = [
    onboardingGuide,
    settingsTourGuide,
    teamManagementGuide,
    brandingGuide,
    documentNumberingGuide,
    fieldServiceGuide,
    jobsGuide,
    offlineSyncGuide,
    fireSafetyFeaturesGuide,
    worksheetsGuide,
    certificatesGuide,
    quotationsGuide,
    defectsToQuotationGuide,
    remedialScopeOfWorksGuide,
    customerPortalGuide,
    serviceContractsGuide,
    remoteMonitoringGuide,
    plannerGuide,
    calendarIntegrationGuide,
    assetTrackingGuide,
    assetLifecycleGuide,
    quoteToInvoiceWorkflowGuide,
    jobProfitabilityGuide,
    reportsGuide,
    telegramBotGuide,
    migrationAgentGuide,
    purchaseOrdersGuide,
];

export const getDocGuideBySlug = (slug: string): IDocGuide | undefined =>
    docGuides.find((guide) => guide.slug === slug);
