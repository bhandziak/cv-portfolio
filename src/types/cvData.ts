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
  personalInfo: {
  name: string;
  location: string;
  socials: { github: string; linkedin: string; email: string; phone?: string};
}
}