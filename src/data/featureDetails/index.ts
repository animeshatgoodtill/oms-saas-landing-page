import { IFeatureDetail } from '@/types';
import { jobSheetsDetail } from './job-sheets';

// Export all feature details
export const featureDetails: IFeatureDetail[] = [
    jobSheetsDetail,
    // Add more feature details here as they're created
];

// Helper function to get feature by slug
export const getFeatureBySlug = (slug: string): IFeatureDetail | undefined => {
    return featureDetails.find(feature => feature.slug === slug);
};

// Get all slugs for static generation
export const getAllFeatureSlugs = (): string[] => {
    return featureDetails.map(feature => feature.slug);
};
