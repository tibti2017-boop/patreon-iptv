export interface SubscriptionPlan {
  id: string;
  name: string;
  durationMonths: number;
  pricePerMonth: number;
  totalPrice: number;
  discountBadge?: string;
  isPopular?: boolean;
  features: string[];
}

export interface VodItem {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string;
  poster: string;
  rating: string;
  year: string;
  quality: string;
  synopsis?: string;
}

export interface TvChannel {
  id: string;
  name: string;
  category: 'sports' | 'cinema' | 'french' | 'news' | 'kids' | 'international' | 'usa';
  logo: string;
  logoImage?: string;
  is4k?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DeviceGuide {
  id: string;
  name: string;
  category: string;
  iconName: string;
  steps: string[];
  downloaderCode?: string;
  recommendedApp: string;
}
