import { IFeatureDetail } from '@/types';
import { jobSheetsDetail } from './job-sheets';
import { quotationsDetail } from './quotations';

// Export all feature details
export const featureDetails: IFeatureDetail[] = [
    jobSheetsDetail,
    quotationsDetail,
];

// Helper function to get feature by slug
export const getFeatureBySlug = (slug: string): IFeatureDetail | undefined => {
    return featureDetails.find(feature => feature.slug === slug);
};

// Get all slugs for static generation
export const getAllFeatureSlugs = (): string[] => {
    return featureDetails.map(feature => feature.slug);
};
