export interface IMenuItem {
    text: string;
    url: string;
    submenu?: IMenuItem[];
}

export interface IBenefit {
    title?: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title?: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title?: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

export interface IFeatureDetailSection {
    title?: string;
    description: string;
    imageSrc?: string;
    bullets?: string[];
}

export interface IFeatureHighlight {
    iconId: string;
    title?: string;
    description: string;
}

export interface IHowItWorksStep {
    stepNumber: number;
    title?: string;
    description: string;
}

export interface IPersonaBenefit {
    persona: string;
    benefits: string[];
}

export interface IStatBlock {
    value: string;
    label: string;
}

export interface IComparisonRow {
    feature: string;
    opscel: boolean;
    others: 'Yes' | 'No' | 'Some';
}

export interface IFeatureDetail {
    slug: string;
    title: string;
    subtitle: string;
    heroDescription: string;
    iconId: string;
    screenshotImage?: string;
    sections?: IFeatureDetailSection[];
    ctaText: string;
    ctaUrl: string;
    // Enhanced sections (optional)
    featureHighlights?: IFeatureHighlight[];
    howItWorksSteps?: IHowItWorksStep[];
    personaBenefits?: IPersonaBenefit[];
    stats?: IStatBlock[];
    comparison?: IComparisonRow[];
    faq?: IFAQ[];
    testimonial?: {
        quote: string;
        author: string;
        company: string;
    };
}

// Documentation types
export interface IDocSection {
    id: string;
    title?: string;
    content?: string;
    subsections?: IDocSubsection[];
    table?: IDocTable;
}

export interface IDocSubsection {
    title?: string;
    content?: string;
    bullets?: string[];
    table?: IDocTable;
    steps?: string[] | IDocStep[];
}

export interface IDocTable {
    headers: string[];
    rows: string[][];
}

export interface IDocStep {
    step: string;
    description: string;
}

export interface IDocGuide {
    slug: string;
    title?: string;
    description: string;
    lastUpdated: string;
    sections: IDocSection[];
}

// Blog types
export interface IBlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    lastUpdated?: string;
    author: string;
    tags: string[];
    heroImage?: string;
    draft?: boolean;
    readingTime: number;
}

export interface IAuthor {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    linkedin?: string;
}