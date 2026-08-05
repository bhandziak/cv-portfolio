import type { TechItem, TechStackData, Project } from "./types";

export interface CVData {
  welcome: {
    title: string;
    description: string;
  };
  aboutMe: {
    title: string;
    description: string;
  };
  techStack:  TechStackData;
  techItems: TechItem[];
  projects: Project[];
  projectsText: ProjectsText;
  personalInfo: PersonalInfo;
}

export interface ProjectsText {
  title: string;
}

export interface PersonalInfo {
    name: string;
    location: string;
    socials: SocialLinks;
}

export interface SocialLinks {
   github: string; linkedin: string; email: string; phone?: string
  };
