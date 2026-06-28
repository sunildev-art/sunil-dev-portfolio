export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  category: 'mobile' | 'web' | 'blockchain';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
