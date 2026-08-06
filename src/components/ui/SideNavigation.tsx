import { useEffect, useRef, useState } from 'react';

export interface NavSection {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: NavSection[];
}

export const SideNavigation = ({ sections }: SideNavigationProps) => {
  const [activeId, setActiveId] = useState<string>('');

const visibleSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const visibleSections = visibleSectionsRef.current;
    visibleSections.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const firstVisibleSection = sections.find(({ id }) => visibleSections.has(id));
        
        if (firstVisibleSection) {
          setActiveId(firstVisibleSection.id);
        }
      },
      {
        rootMargin: '-15% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Nawigacja sekcji"
      className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-white/10 bg-black/30 p-2 backdrop-blur-md shadow-lg sm:flex"
    >
      {sections.map((section, index) => {
        const isActive = activeId === section.id;
        const sectionNumber = index + 1;

        return (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            aria-label={`Przejdź do sekcji: ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
            className={`group relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isActive
                ? 'bg-blue-600 text-white scale-110 shadow-md shadow-blue-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {sectionNumber}

            <span className="pointer-events-none absolute right-11 rounded-md border border-white/10 bg-gray-900/90 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};