export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  resumeUrl: string;
  statusBadge: {
    text: string;
    available: boolean;
  };
  socials: SocialLink[];
  stats: StatItem[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | string;
  level: number; // 1 to 100 percentage
  iconName?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'ai' | 'mobile' | string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  keyFeatures?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  quote: string;
  rating?: number;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications?: CertificationItem[];
  testimonials: TestimonialItem[];
  terminalCommands: TerminalCommand[];
}
