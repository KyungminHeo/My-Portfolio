export interface SkillItem {
  name: string;
  level: number; // 1-100
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string; // Used for icon mapping key
  colorClass: string; // Tailwind class for background/text
}

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  company?: string;
  period: string;
  role?: string;
  isPersonal?: boolean;
  summary: string;
  techStack: string[];
  keyAchievements: string[];
  description?: string;
  links?: { label: string; url: string }[];
  // Extended fields for deep dive
  architecture?: string[];
  challenges?: Challenge[];
  insights?: string[];
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  tags?: string[];
  isEarlyCareer?: boolean;
}

export interface Education {
  school: string;
  period: string;
  degree: string;
}