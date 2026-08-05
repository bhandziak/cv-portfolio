import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { ComponentWrapper } from '../components/layout/ComponentWrapper';

import Welcome from '../components/sections/Welcome';
import AboutMe from '../components/sections/AboutMe';
import TechStackSection from '../components/sections/TechStackSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';


function MainPage() {
const { cvData, isLoading } = useLanguage();

  if (isLoading || !cvData) {
    return (
      <div className="flex h-screen items-center justify-center text-cv-subtext">
        Ładowanie danych...
      </div>
    );
  }

  return (
    <div className="page-background">
      <header className="lang-header">
        <LanguageSwitcher />
      </header>

      <ComponentWrapper id="welcome">
        <Welcome title={cvData.welcome.title} description={cvData.welcome.description} />
      </ComponentWrapper>
      <ComponentWrapper id="aboutme">
        <AboutMe title={cvData.aboutMe.title} description={cvData.aboutMe.description} />
      </ComponentWrapper>
      <ComponentWrapper id="technologies">
        <TechStackSection techStackData={cvData.techStack} techItemsData={cvData.techItems} projectsData={cvData.projects} />
      </ComponentWrapper>
      <ComponentWrapper id="projects">
        <ProjectsSection projectsText={cvData.projectsText} projectsData={cvData.projects} techItemsData={cvData.techItems} />
      </ComponentWrapper>
      <ComponentWrapper id="experience">
        <ExperienceSection title={"Experience"} experiencesData={cvData.experience} />
      </ComponentWrapper>
      <ComponentWrapper id="contact">
        <ContactSection personalInfo={cvData.personalInfo} />
      </ComponentWrapper>
    </div>
  );
}

export default MainPage;