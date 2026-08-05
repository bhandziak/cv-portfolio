import type { CVData } from "../types/cvData";

export const cvData: CVData = {
  personalInfo: {
    location: "Kraków, Poland",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "bartek@example.com",
    },
  },
  welcome: {
    title: "Hi, I'm Bartek, Frontend Developer",
    description: "3rd-year Computer Science student at Cracow University of Technology.",
  },
  aboutMe: {
    title: "About Me",
    description: "A short overview of my skills and experience.",
  },
  techStack: {
    title: "Tech Stack",
    description: "Technologies I have worked with and know.",
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
        title: "Tools & Testing",
        technologyIds: ["robot-framework", "pytest", "git-docker"],
      },
    ],
  },
  techItems: [
    {
      id: "react-19",
      name: "React 19",
      highlighted: true,
      description: "Building modular applications using the latest features and Hooks.",
      projectIds: ["cyberguard"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      highlighted: true,
      description: "Strong typing and clean code architecture.",
    },
    {
      id: "tailwind-css",
      name: "Tailwind CSS",
      highlighted: true,
      description: "Fast and consistent styling with a Utility-First approach.",
    },
    {
      id: "next-js",
      name: "Next.js",
      highlighted: false,
      description: "Hybrid rendering (SSR/SSG).",
    },
    {
      id: "csharp-dotnet",
      name: "C# / .NET Core",
      highlighted: true,
      description: "Building high-performance Web APIs and Minimal APIs.",
    },
    {
      id: "java-spring",
      name: "Java / Spring Boot",
      highlighted: false,
      description: "Enterprise architecture and ORM (Hibernate).",
    },
    {
      id: "python-fastapi",
      name: "Python / FastAPI",
      highlighted: false,
      description: "Fast microservices and automation scripts.",
    },
    {
      id: "websocket-irc",
      name: "WebSocket / IRC",
      highlighted: true,
      description: "Implementation of custom real-time communication protocols.",
      projectIds: ["omega-chat"],
    },
    {
      id: "wireshark-tls",
      name: "Wireshark / TLS 1.3",
      highlighted: false,
      description: "Packet analysis and data tunnel security.",
    },
    {
      id: "watchguard",
      name: "WatchGuard Firebox",
      highlighted: false,
      description: "Network firewall rule administration.",
    },
    {
      id: "robot-framework",
      name: "Robot Framework",
      highlighted: true,
      description: "Keyword-driven API test automation.",
    },
    {
      id: "pytest",
      name: "pytest",
      highlighted: false,
      description: "Unit and integration testing in Python.",
    },
    {
      id: "git-docker",
      name: "Git & Docker",
      highlighted: true,
      description: "Version control and application containerization.",
    },
  ],
  projects: [
    {
      id: "cyberguard",
      title: "CyberGuard",
      description: "Aplikacja edukacyjna do symulacji ataków phishingowych.",
      technologyIds: ["react-19", "typescript", "tailwind-css"],
      githubURL: "github.com/bartek/cyberguard",
      demoURL: "cyberguard.example.com",
    },
    {
      id: "omega-chat",
      title: "Omega chat irc",
      description: "Dedykowana aplikacja czatu WebSocket z odświeżaniem tokenów.",
      technologyIds: ["csharp-dotnet", "websocket-irc", "react-19"],
    },
  ],
  projectsText: {
    title: "Projects",
  },
  experience: []
};