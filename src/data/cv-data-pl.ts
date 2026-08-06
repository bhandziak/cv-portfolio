import type { CVData } from "../types/cvData";

export const cvData: CVData = {
  personalInfo: {
    location: "Kraków, Polska",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "bartek@example.com",
      phone: "+48 123 456 789",
    },
  },
  welcome: {
    title: "Witaj jestem Bartek, Frontend Developer",
    description: "Student Politechniki Krakowskiej, 3 rok, kierunek Informatyka.",
  },
  aboutMe: {
    title: "O mnie",
    description: "Krótki opis moich umiejętności i doświadczenia.",
  },
  techStack: {
    title: "Stos technologiczny",
    description: "Technologie, z którymi pracowałem i które znam.",
    techCategories: [
      {
        id: "frontend",
        title: "Frontend",
        technologyIds: ["react-19", "typescript", "tailwind-css", "next-js"],
      },
      {
        id: "backend",
        title: "Backend",
        technologyIds: ["csharp-dotnet", "java-spring", "python-fastapi"],
      },
      {
        id: "networking",
        title: "Network & Security",
        technologyIds: ["websocket-irc", "wireshark-tls", "watchguard"],
      },
      {
        id: "tools",
        title: "Narzędzia & Testy",
        technologyIds: ["robot-framework", "pytest", "git-docker"],
      },
    ],
  },
  techItems: [
    {
      id: "react-19",
      name: "React 19",
      highlighted: true,
      description: "Tworzenie modułowych aplikacji z wykorzystaniem najnowszych funkcji i Hooków.",
      projectIds: ["cyberguard"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      highlighted: true,
      description: "Silne typowanie i czysta architektura kodu.",
    },
    {
      id: "tailwind-css",
      name: "Tailwind CSS",
      highlighted: true,
      description: "Szybkie i spójne stylizowanie z podejściem Utility-First.",
    },
    {
      id: "next-js",
      name: "Next.js",
      highlighted: false,
      description: "Renderowanie hybrydowe (SSR/SSG).",
    },
    {
      id: "csharp-dotnet",
      name: "C# / .NET Core",
      highlighted: true,
      description: "Tworzenie wydajnych Web API oraz Minimal APIs.",
    },
    {
      id: "java-spring",
      name: "Java / Spring Boot",
      highlighted: false,
      description: "Architektura korporacyjna i ORM (Hibernate).",
    },
    {
      id: "python-fastapi",
      name: "Python / FastAPI",
      highlighted: false,
      description: "Szybkie mikroserwisy i skrypty automatyzujące.",
    },
    {
      id: "websocket-irc",
      name: "WebSocket / IRC",
      highlighted: true,
      description: "Implementacja autorskich protokołów komunikacji w czasie rzeczywistym.",
      projectIds: ["omega-chat"],
    },
    {
      id: "wireshark-tls",
      name: "Wireshark / TLS 1.3",
      highlighted: false,
      description: "Analiza pakietów i zabezpieczenia tuneli danych.",
    },
    {
      id: "watchguard",
      name: "WatchGuard Firebox",
      highlighted: false,
      description: "Administracja regułami zapor sieciowych.",
    },
    {
      id: "robot-framework",
      name: "Robot Framework",
      highlighted: true,
      description: "Automatyzacja testów API oparta na słowach kluczowych.",
    },
    {
      id: "pytest",
      name: "pytest",
      highlighted: false,
      description: "Testy jednostkowe i integracyjne w Pythonie.",
    },
    {
      id: "git-docker",
      name: "Git & Docker",
      highlighted: true,
      description: "Kontrola wersji i konteneryzacja aplikacji.",
    },
  ],
  projects: [
    {
      id: "cyberguard",
      title: "CyberGuard",
      description: "Aplikacja edukacyjna do symulacji ataków phishingowych.",
      technologyIds: ["react-19", "typescript", "tailwind-css"],
    },
    {
      id: "omega-chat",
      title: "Omega chat irc",
      description: "Dedykowana aplikacja czatu WebSocket z odświeżaniem tokenów.",
      technologyIds: ["csharp-dotnet", "websocket-irc", "react-19"],
    }
  ],
  projectsText: {
    title: "Projekty",
  },
  experience: [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer',
    company: 'Tech Solutions Sp. z o.o.',
    period: '2024 - Obecnie',
    description: [
      'Projektowanie i rozwój skalowalnych aplikacji internetowych w oparciu o .NET Core i React z TypeScript.',
      'Implementacja bezpiecznych protokołów komunikacji oraz optymalizacja architektur opartych o REST i WebSockets.',
      'Tworzenie testów automatycznych API przy użyciu frameworka Robot Framework i pytest, co zmniejszyło liczbę regresji o 30%.'
    ],
    technologies: ['.NET Core', 'C#', 'React', 'TypeScript', 'Tailwind CSS', 'Robot Framework', 'WebSockets'],
    projectIds: ['proj-omega-irc', 'proj-cyberguard'],
    isVisible: true,
  },
  {
    id: 'exp-2',
    role: 'Junior Backend Developer',
    company: 'CyberSoft Systems',
    period: '2023 - 2024',
    description: [
      'Rozwijanie mikrousług w Java Spring Boot z wykorzystaniem ORM Hibernate do obsługi bazy danych PostgreSQL.',
      'Analiza ruchu sieciowego i logów za pomocą Wireshark w celu identyfikacji wąskich gardeł w komunikacji sieciowej.',
      'Współpraca w zespole programistycznym w metodologii Agile/Scrum nad bezpiecznymi rozwiązaniami webowymi.'
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Wireshark', 'REST API', 'Git'],
    projectIds: ['proj-backend-core'],
    isVisible: false,
  },
  {
    id: 'exp-3',
    role: 'Software Developer Intern',
    company: 'Network Labs',
    period: '2022 - 2023',
    description: [
      'Implementacja wysoce wydajnych modułów sieciowych w języku C z wykorzystaniem gniazd (sockets).',
      'Automatyzacja procesów testowych oraz pisanie skryptów pomocniczych w języku Python.',
      'Uczestnictwo w konfiguracji urządzeń brzegowych i zapór sieciowych (Firewall).'
    ],
    technologies: ['C', 'Python', 'FastAPI', 'Linux', 'Network Sockets', 'Bash'],
    projectIds: [],
    isVisible: false,
  },
]
};