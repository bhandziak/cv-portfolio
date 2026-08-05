import type { TechItem, TechStackData, Project, ExperienceItem } from "./types";

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
  experience: ExperienceItem[];
}

export interface ProjectsText {
  title: string;
}

export interface PersonalInfo {
    location: string;
    socials: SocialLinks;
}

export interface SocialLinks {
   github: string; linkedin: string; email: string; phone?: string
};
