export interface Solution {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string; // Key corresponding to lucide-react icon
  badge?: string;
  targetMarket: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TimelineStep {
  number: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface WhyReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ErpBenefitComparison {
  id: string;
  aspect: string;
  before: {
    status: string;
    description: string;
  };
  after: {
    status: string;
    description: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  text: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}
