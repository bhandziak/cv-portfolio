import type { TechItem, Project, ExperienceItem, TechCategory} from "./types";

export interface CVData {
  texts: {
    navigation: {
      welcome: string;
      aboutMe: string;
      techStack: string;
      projects: string;
      experience: string;
      contact: string;
    };
    welcome: {
      title: string;
      description: string;
    };
    aboutMe: {
      title: string;
      description: string;
    };
    techStack: {
      title: string;
      description: string;
      usedInProjectsLabel: string;
      seeLabel: string;
    };
    projects: {
      title: string;
      usedTechnologiesLabel: string;
      codeOnGithubLabel: string;
      demoLinkLabel: string
    };
    experience: {
      title: string;
      showMoreLabel: string;
      showLessLabel: string;
    };
    contact: {
      title: string;
      description: string;
      phoneLabel: string;
      locationLabel: string;
      showLabel:string;
    }
  };

  techCategories:  TechCategory[];
  techItems: TechItem[];

  projects: Project[];

  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
}


export interface PersonalInfo {
    location: string;
    socials: SocialLinks;
}

export interface SocialLinks {
   github: string; linkedin: string; email: string; phone?: string
};
