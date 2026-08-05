import type { CVData } from "../types/cvData";

export const cvData: CVData = {
  personalInfo: {
    name: "Bartek",
    location: "Kraków, Polska",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "bartek@example.com",
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
    },
  ],
  projectsText: {
    title: "Projekty",
  },
};