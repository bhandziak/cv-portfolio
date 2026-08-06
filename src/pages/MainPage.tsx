import { useMemo } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { ComponentWrapper } from '../components/layout/ComponentWrapper';
import { SideNavigation, type NavSection } from '../components/ui/SideNavigation';

import Welcome from '../components/sections/Welcome';
import AboutMe from '../components/sections/AboutMe';
import TechStackSection from '../components/sections/TechStackSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';

interface SectionConfig extends NavSection {
  component: React.ReactNode;
}

function MainPage() {
  const { cvData, isLoading } = useLanguage();

  const sections = useMemo<SectionConfig[]>(() => {
    if (!cvData) return [];

    return [
      {
        id: 'welcome',
        label: 'Start',
        component: (
          <Welcome
            title={cvData.welcome.title}
            description={cvData.welcome.description}
          />
        ),
      },
      {
        id: 'aboutme',
        label: 'O mnie',
        component: (
          <AboutMe
            title={cvData.aboutMe.title}
            description={cvData.aboutMe.description}
          />
        ),
      },
      {
        id: 'technologies',
        label: 'Technologie',
        component: (
          <TechStackSection
            techStackData={cvData.techStack}
            techItemsData={cvData.techItems}
            projectsData={cvData.projects}
          />
        ),
      },
      {
        id: 'projects',
        label: 'Projekty',
        component: (
          <ProjectsSection
            projectsText={cvData.projectsText}
            projectsData={cvData.projects}
            techItemsData={cvData.techItems}
          />
        ),
      },
      {
        id: 'experience',
        label: 'Doświadczenie',
        component: (
          <ExperienceSection
            title="Experience"
            experiencesData={cvData.experience}
          />
        ),
      },
      {
        id: 'contact',
        label: 'Kontakt',
        component: <ContactSection personalInfo={cvData.personalInfo} />,
      },
    ];
  }, [cvData]);

  if (isLoading || !cvData) {
    return (
      <div className="flex h-screen items-center justify-center text-cv-subtext">
        Ładowanie danych...
      </div>
    );
  }

  return (
    <div className="page-background">
      <SideNavigation sections={sections} />

      <header className="lang-header">
        <LanguageSwitcher />
      </header>

      {sections.map(({ id, component }) => (
        <ComponentWrapper key={id} id={id}>
          {component}
        </ComponentWrapper>
      ))}
    </div>
  );
}

export default MainPage;