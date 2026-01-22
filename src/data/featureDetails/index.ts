import { IFeatureDetail } from '@/types';
import { dashboardDetail } from './dashboard';
import { fieldServiceDetail } from './field-service';
import { jobsDetail } from './jobs';
import { customersDetail } from './customers';
import { certificatesDetail } from './certificates';
import { quotationsDetail } from './quotations';
import { invoicingDetail } from './invoicing';
import { accountingIntegrationDetail } from './accounting-integration';
import { assetsDetail } from './assets';
import { dataImportDetail } from './data-import';
import { teamDetail } from './team';
import { templatesDetail } from './templates';
import { customerPortalDetail } from './customer-portal';

// Export all feature details (ordered by typical user workflow)
export const featureDetails: IFeatureDetail[] = [
    dashboardDetail,
    fieldServiceDetail,
    jobsDetail,
    customersDetail,
    certificatesDetail,
    quotationsDetail,
    invoicingDetail,
    accountingIntegrationDetail,
    customerPortalDetail,
    assetsDetail,
    dataImportDetail,
    teamDetail,
    templatesDetail,
];

// Helper function to get feature by slug
export const getFeatureBySlug = (slug: string): IFeatureDetail | undefined => {
    return featureDetails.find(feature => feature.slug === slug);
};

// Get all slugs for static generation
export const getAllFeatureSlugs = (): string[] => {
    return featureDetails.map(feature => feature.slug);
};
