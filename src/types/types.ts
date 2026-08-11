export type TechCategoryType = 
  | 'frontend' 
  | 'backend' 
  | 'network_security' 
  | 'testing_tools' 
  | 'devops_databases' 
  | 'gamedev' 
  | 'languages';


// Structures for technologies
export interface TechItem {
  id: string;
  name: string;
  highlighted?: boolean;
  description?: string;
}

// Categories of technologies
export interface TechCategory {
  id: TechCategoryType;
  title: string;
  technologyIds: string[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  technologyIds: string[];
  thumbnailURL?: string;
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
  isVisible?: boolean;
}

