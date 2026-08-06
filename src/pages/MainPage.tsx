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

    const { texts, techCategories, techItems, projects, experience, personalInfo } = cvData;

    return [
      {
        id: 'welcome',
        label: texts.navigation.welcome,
        component: (
          <Welcome
            title={texts.welcome.title}
            description={texts.welcome.description}
          />
        ),
      },
      {
        id: 'aboutme',
        label: texts.navigation.aboutMe,
        component: (
          <AboutMe
            title={texts.aboutMe.title}
            description={texts.aboutMe.description}
          />
        ),
      },
      {
        id: 'technologies',
        label: texts.navigation.techStack,
        component: (
          <TechStackSection
            title={texts.techStack.title}
            description={texts.techStack.description}
            usedInProjectsLabel={texts.techStack.usedInProjectsLabel}
            seeLabel={texts.techStack.seeLabel}
            techCategories={techCategories}
            techItemsData={techItems}
            projectsData={projects}
          />
        ),
      },
      {
        id: 'projects',
        label: texts.navigation.projects,
        component: (
          <ProjectsSection
            projectsText={texts.projects}
            projectsData={projects}
            techItemsData={techItems}
          />
        ),
      },
      {
        id: 'experience',
        label: texts.navigation.experience,
        component: (
          <ExperienceSection
            title={texts.experience.title}
            showMoreLabel={texts.experience.showMoreLabel}
            showLessLabel={texts.experience.showLessLabel}
            experiencesData={experience}
          />
        ),
      },
      {
        id: 'contact',
        label: texts.navigation.contact,
        component: (
          <ContactSection
            contactText={texts.contact}
            personalInfo={personalInfo}
          />
        ),
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