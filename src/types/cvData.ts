import type { TechStackData } from "./types";

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
  techStack:  TechStackData
}