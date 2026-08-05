export type TechCategoryType = 'frontend' | 'backend' | 'networking' |
     'tools' | 'database' | 'other';


// Structures for technologies
export interface TechItem {
  id: string;
  name: string;
  highlighted?: boolean;
  description?: string;
  projectIds?: string[];
}

// Categories of technologies
export interface TechCategory {
  id: TechCategoryType;
  title: string;
  technologyIds: string[];
}

export interface TechStackData {
  title: string;
  description: string;
  techCategories: TechCategory[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  iconURL?: string;
  animationURL?: string;
  githubURL?: string;
  demoURL?: string;
}

// Experience items
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

