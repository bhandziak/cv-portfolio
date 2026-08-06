import type { CVData } from "../types/cvData";

export const cvData: CVData = {
  texts: {
    navigation: {
      welcome: "Home",
      aboutMe: "About Me",
      techStack: "Tech Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    welcome: {
      title: "Hi, I'm Bartek – Frontend Developer",
      description: "Computer Science Student at Cracow University of Technology (3rd year).",
    },
    aboutMe: {
      title: "About Me",
      description: "A short overview of my skills, experience, and development background.",
    },
    techStack: {
      title: "Tech Stack",
      description: "Technologies and tools I work with and specialize in.",
      usedInProjectsLabel: "Used in projects",
      seeLabel: "View",
    },
    projects: {
      title: "Projects",
      usedTechnologiesLabel: "Technologies used",
    },
    experience: {
      title: "Experience",
      showMoreLabel: "Show archived",
      showLessLabel: "Hide archived",
    },
    contact: {
      title: "Contact",
      description: "Have a question or want to work together? Feel free to reach out directly.",
      phoneLabel: "Phone",
      locationLabel: "Location",
      showLabel: "Show"
    },
  },

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

  techItems: [
    {
      id: "react-19",
      name: "React 19",
      highlighted: true,
      description: "Building modular applications using modern hooks and features.",
      projectIds: ["cyberguard"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      highlighted: true,
      description: "Static typing and clean code architecture.",
    },
    {
      id: "tailwind-css",
      name: "Tailwind CSS",
      highlighted: true,
      description: "Rapid, consistent styling with a utility-first approach.",
    },
    {
      id: "next-js",
      name: "Next.js",
      highlighted: false,
      description: "Hybrid rendering strategies (SSR/SSG).",
    },
    {
      id: "csharp-dotnet",
      name: "C# / .NET Core",
      highlighted: true,
      description: "Developing high-performance Web APIs and Minimal APIs.",
    },
    {
      id: "java-spring",
      name: "Java / Spring Boot",
      highlighted: false,
      description: "Enterprise backend architecture and ORM with Hibernate.",
    },
    {
      id: "python-fastapi",
      name: "Python / FastAPI",
      highlighted: false,
      description: "Lightweight microservices and automation scripting.",
    },
    {
      id: "websocket-irc",
      name: "WebSocket / IRC",
      highlighted: true,
      description: "Implementing custom real-time communication protocols.",
      projectIds: ["omega-chat"],
    },
    {
      id: "wireshark-tls",
      name: "Wireshark / TLS 1.3",
      highlighted: false,
      description: "Packet analysis and secure data tunnel inspection.",
    },
    {
      id: "watchguard",
      name: "WatchGuard Firebox",
      highlighted: false,
      description: "Firewall rule management and network administration.",
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
      description: "Version control and containerized deployment workflow.",
    },
  ],

  projects: [
    {
      id: "cyberguard",
      title: "CyberGuard",
      description: "Educational web application simulating phishing attacks and scam scenarios.",
      technologyIds: ["react-19", "typescript", "tailwind-css"],
    },
    {
      id: "omega-chat",
      title: "Omega chat irc",
      description: "Custom WebSocket chat application featuring automatic token refresh logic.",
      technologyIds: ["csharp-dotnet", "websocket-irc", "react-19"],
    },
  ],

  personalInfo: {
    location: "Krakow, Poland",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "bartek@example.com",
      phone: "+48 123 456 789",
    },
  },

  experience: [
    {
      id: "exp-1",
      role: "Full-Stack Developer",
      company: "Tech Solutions Sp. z o.o.",
      period: "2024 - Present",
      description: [
        "Architecting and developing scalable web applications using .NET Core and React with TypeScript.",
        "Implementing secure communication protocols and optimizing REST and WebSocket-based APIs.",
        "Authoring automated API tests with Robot Framework and pytest, cutting regression issues by 30%.",
      ],
      technologies: [".NET Core", "C#", "React", "TypeScript", "Tailwind CSS", "Robot Framework", "WebSockets"],
      projectIds: ["omega-chat", "cyberguard"],
      isVisible: true,
    },
    {
      id: "exp-2",
      role: "Junior Backend Developer",
      company: "CyberSoft Systems",
      period: "2023 - 2024",
      description: [
        "Developed microservices in Java Spring Boot using Hibernate ORM connected to PostgreSQL.",
        "Analyzed network traffic and communication logs using Wireshark to resolve bottlenecks.",
        "Collaborated in an Agile/Scrum software development team deliver secure web solutions.",
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Wireshark", "REST API", "Git"],
      projectIds: [],
      isVisible: false,
    },
    {
      id: "exp-3",
      role: "Software Developer Intern",
      company: "Network Labs",
      period: "2022 - 2023",
      description: [
        "Implemented high-performance network sockets in C.",
        "Automated internal testing workflows and helper utilities using Python scripts.",
        "Assisted in edge router configurations and network firewall policy management.",
      ],
      technologies: ["C", "Python", "FastAPI", "Linux", "Network Sockets", "Bash"],
      projectIds: [],
      isVisible: false,
    },
  ],
};