import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { ComponentWrapper } from '../components/layout/ComponentWrapper';

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
        <div className="text-center pt-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-cv-text">
            {cvData.welcome.title}
          </h1>
          <p className="text-cv-subtext text-lg max-w-xl mx-auto">
            {cvData.welcome.description}
          </p>
        </div>
      </ComponentWrapper>
      <ComponentWrapper id="aboutme">
        <></>
      </ComponentWrapper>
      <ComponentWrapper id="technologies">
        <></>
      </ComponentWrapper>
      <ComponentWrapper id="projects">
        <></>
      </ComponentWrapper>
      <ComponentWrapper id="experience">
        <></>
      </ComponentWrapper>
      <ComponentWrapper id="contact">
        <></>
      </ComponentWrapper>
    </div>
  );
}

export default MainPage;