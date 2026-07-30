export interface GoogleReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  text: string;
  ownerResponse?: {
    dateAgo: string;
    text: string;
  };
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle?: string;
  price: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: 'website' | 'e-commerce' | 'automation' | 'local-business';
  image: string;
  description: string;
  url?: string;
  domain?: string;
  fullUrl?: string;
  deliveryTime?: string;
  clientIndustry?: string;
  verifiedBadge?: boolean;
  tags: string[];
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  thumbnail: string;
  quote: string;
  youtubeId?: string;
}

export interface LeadInquiry {
  id: string;
  name: string;
  phone: string;
  message: string;
  serviceSelected?: string;
  submittedAt: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug?: { current?: string };
  publishedAt?: string;
  mainImage?: any;
  excerpt?: string;
}
