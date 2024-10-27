import { SanityAsset } from '@sanity/image-url/lib/types/types';

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  author?: Author;
  mainImage?: {
    asset: SanityAsset;
    alt?: string;
  };
  categories?: Category[];
  content: any[]; // This could be further typed if needed
}

export interface Author {
  _id: string;
  name: string;
  image?: {
    asset: SanityAsset;
  };
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface GatedAsset {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  teaserContent?: any[]; // This could be further typed if needed
  assetFile?: {
    asset: {
      url: string;
    };
  };
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription: string;
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits?: string[];
  videoSrc?: string;
  thumbnailSrc?: {
    asset: SanityAsset;
  };
  hoverDescription?: string;
}

export interface Solution {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  benefits: string[];
  contentHeader: string;
  content: string[];
  icon: string;
  statValue: number;
  statLabel: string;
  traditional: string;
  aiPowered: string;
}

export interface NewSolution {
  _id: string;
  title: string;
  slug: { current: string };
  heroTitle: string;
  heroSubtitle: string;
  problemTitle: string;
  problemDescription: string;
  problemVideo?: {
    asset: {
      url: string;
    };
  };
  stepsTitle: string;
  steps: {
    title: string;
    description: string;
  }[];
  featuresTitle: string;
  features: {
    feature: string;
  }[];
  technologiesUsedTitle: string;
  technologiesUsed: TechnologyUsed[];
  ctaTitle: string;
  ctaButton: string;
  kpi: string;
  icon: string;
  summary: string; // New field added here
}

export interface TechnologyUsed {
  name: string;
  icon: {
    asset: SanityAsset;
  };
}

export interface NewService {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  solutions: NewSolution[];
  heroTitle: string;
  heroSubtitle: string;
  introductionTitle: string;
  introductionDescription: string;
  introductionVideo?: {
    asset: {
      url: string;
    };
  };
  steps: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    feature: string;
  }[];
  technologiesUsed: TechnologyUsed[];
  whyChooseUs: string;
  ctaTitle: string;
  ctaButton: string;
  stepsTitle: string;
  stepsDescription: string;
}
