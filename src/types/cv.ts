export type TechCategoryType = 'frontend' | 'backend' | 'networking' |
     'tools' | 'database' | 'other';


// Structures for technologies
export interface TechItem {
  name: string;
  highlighted?: boolean;
  description?: string;
  projects?: Project[];
}

// Categories of technologies
export interface TechCategory {
  id: TechCategoryType;
  title: string;
  skills: TechItem[];
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

// Footer links and personal information
export interface CVData {
  welcome: {
    title: string;
    description: string;
  };
  aboutMe: {
    title: string;
    description: string;
  };
  personalInfo: {
    name: string;
    location: string;
    socials: { github: string; linkedin: string; email: string; phone?: string};
  }
}