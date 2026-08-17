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
      title: "Bartłomiej Handziak",
      description: "Computer Science Student (3rd year at CUT) | Frontend Developer",
    },
    aboutMe: {
      title: "About Me",
      description: "I am a 6th-semester Computer Science student at Cracow University of Technology. I am developing my skills in software engineering, with a primary focus on building web applications using React. I code applications emphasizing clean code readability, architectural scalability, and user experience. Concurrently, I expand my expertise in system administration, networking, and IT security, gaining practical experience with Windows and Linux systems, network devices, as well as QA and automation tools. In my daily workflow, I leverage AI tools to maintain high efficiency.",
    },
    techStack: {
      title: "Tech Stack",
      description: "Technologies I know",
      usedInProjectsLabel: "Used in projects",
      seeLabel: "View",
    },
    projects: {
      title: "Projects",
      usedTechnologiesLabel: "Technologies used",
      codeOnGithubLabel: "Code on GitHub",
      demoLinkLabel: "See Live Demo"
    },
    experience: {
      title: "Experience",
      showMoreLabel: "Show more",
      showLessLabel: "Show less"
    },
    contact: {
      title: "Contact",
      description: "Have a question or looking to collaborate? Feel free to contact me directly.",
      phoneLabel: "Phone",
      locationLabel: "Location",
      showLabel: "Show",
    },
  },

  techCategories: [
    {
      id: 'frontend',
      title: 'Frontend',
      technologyIds: ['react', 'js', 'ts', 'html-css', 'figma']
    },
    {
      id: 'backend',
      title: 'Backend & Core',
      technologyIds: ['csharp-dotnet', 'java', 'cpp-c', 'python', 'php']
    },
    {
      id: 'network_security',
      title: 'Network & Security',
      technologyIds: ['cisco', 'watchguard', 'win-lin-server']
    },
    {
      id: 'testing_tools',
      title: 'Testing & Tools',
      technologyIds: ['git-docker', 'docker', 'robot-framework']
    },
    {
      id: 'devops_databases',
      title: 'DevOps & Databases',
      technologyIds: ['terraform-ansible', 'sql-postgres', 'mongodb']
    },
    {
      id: 'gamedev',
      title: 'Game Dev',
      technologyIds: ['unity', 'java-libgdx', 'cpp-sfml']
    },
    {
      id: 'languages',
      title: 'Languages',
      technologyIds: ['pl', 'en']
    }
  ],

  techItems: [
    {
      id: 'react',
      name: 'React.js',
      description: 'Building functional components and architecture following component reusability patterns. Proficiency in JSX/TSX syntax, conditional rendering, prop drilling prevention, and state management using Context API and Providers. Custom and built-in hooks usage. Routing setup via React Router. Backend integration using Fetch API, Axios, React Query, WebSocket, and SignalR.',
      highlighted: false,
    },
    {
      id: 'js',
      name: 'JS',
      description: 'Vanilla JS (OOP), DOM manipulation.',
      highlighted: false,
    },
    {
      id: 'ts',
      name: 'TS',
      description: 'Interfaces, type system, typing React components.',
      highlighted: false,
    },
    {
      id: 'html-css',
      name: 'HTML5/CSS3',
      description: 'Building responsive structures, use of tailwind library.',
      highlighted: false,
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'User Interface (UI/UX) design and prototyping.',
      highlighted: false,
    },
    {
      id: 'csharp-dotnet',
      name: 'C# / .NET',
      description: 'Building REST API architecture within the ASP.NET Core ecosystem. Implementing game mechanics and performance optimization in Unity. Applying DI, SOLID principles, design patterns, async programming, ORM mapping, and JWT tokens.',
      highlighted: false,
    },
    {
      id: 'java',
      name: 'Java',
      description: 'Building Spring Boot REST API architectures. Experience with libGDX library and Gradle.',
      highlighted: false,
    },
    {
      id: 'cpp-c',
      name: 'C++ / C',
      description: 'Linux programming environment. Multiprocess programming focusing on resource race conditions, process synchronization, semaphores, shared memory, named pipes (FIFO). OOP, SFML, GUI programming, DLL libraries.',
      highlighted: false,
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Machine Learning, data processing, ML models, Google Cloud environment.',
      highlighted: false,
    },
    {
      id: 'php',
      name: 'PHP',
      description: 'MVC architecture, PostgreSQL integration.',
      highlighted: false,
    },
    {
      id: 'cisco',
      name: 'CISCO Network Devices',
      description: 'Configuring CISCO routers via CLI.',
      highlighted: false,
    },
    {
      id: 'watchguard',
      name: 'WatchGuard Firewall',
      description: 'Firewall policies, proxy, VPN, network security configuration.',
      highlighted: false,
    },
    {
      id: 'win-lin-server',
      name: 'Windows Server / Linux Server',
      description: 'Server service administration, Web servers, DHCP, user accounts and access permissions.',
      highlighted: false,
    },
    {
      id: 'git-docker',
      name: 'Git',
      description: 'Code versioning, branching strategies for team collaboration, GitHub Pages deployments.',
      highlighted: false,
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Containerizing projects with Docker. Service isolation for backend, frontend, and databases.',
      highlighted: false,
    },
    {
      id: 'robot-framework',
      name: 'Robot Framework',
      description: 'E2E test automation, drafting test scenarios based on documentation and REST API specifications.',
      highlighted: false,
    },
    {
      id: 'terraform-ansible',
      name: 'Terraform / Ansible',
      description: 'Infrastructure as Code (IaC), Google Cloud Platform, VM provisioning and management.',
      highlighted: false,
    },
    {
      id: 'sql-postgres',
      name: 'MS SQL Server, PostgreSQL',
      description: 'Database schema design, ERD modeling, stored procedures, triggers, transactions. ACID principles compliance.',
      highlighted: false,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Collections, documents, data filtering, and aggregation.',
      highlighted: false,
    },
    {
      id: 'unity',
      name: 'Unity',
      description: 'Developing 2D games (space shooters, clickers). Understanding component systems, scene management, 2D physics, UI, animations, and lifecycle execution order. Procedural map generation, multiplayer networking with Mirror, target platforms: Android and Windows.',
      highlighted: false,
    },
    {
      id: 'java-libgdx',
      name: 'Java libGDX',
      description: '2D game development, asset management, project automation using Gradle.',
      highlighted: false,
    },
    {
      id: 'cpp-sfml',
      name: 'C++ SFML',
      description: 'GUI implementation and event handling. Handling graphic and audio assets.',
      highlighted: false,
    },
    {
      id: 'pl',
      name: 'Polish',
      description: 'Native',
      highlighted: false,
    },
    {
      id: 'en',
      name: 'English',
      description: 'C1 level. Fluent spoken and written communication, including technical documentation and IT terminology.',
      highlighted: false,
    },
    { id: 'signalr', name: 'SignalR', highlighted: false },
    { id: 'axios', name: 'Axios', highlighted: false },
    { id: 'mirror', name: 'Mirror', highlighted: false },
    { id: 'tailwind', name: 'Tailwind CSS', highlighted: false },
    { id: 'gemini-api', name: 'AI Integration / Gemini API', highlighted: false },
    { id: 'websocket', name: 'WebSocket', highlighted: false },
    { id: 'ef-core', name: 'Entity Framework Core', highlighted: false },
    { id: 'github-actions', name: 'GitHub Actions', highlighted: false },
    { id: 'gcp', name: 'Google Cloud Platform (GCP)', highlighted: false },
    { id: 'wordpress', name: 'WordPress', highlighted: false },
    { id: 'mysql', name: 'MySQL', highlighted: false },
    { id: 'rest-api', name: 'REST API', highlighted: false },
    { id: 'gradle', name: 'Gradle', highlighted: false }
  ],

  projects: [
    {
      id: 'komunikator-czatowy',
      title: 'Chat Messenger',
      description: '1-on-1 chat platform built in collaboration with a partner, where I was responsible for frontend implementation. Features include user registration, JWT-based authentication, and friend list management. Built with React.js using SignalR for real-time communication.',
      technologyIds: ['js', 'react', 'signalr', 'axios', 'html-css'],
      thumbnailURL: 'images/comunicator.png',
      animationURL: 'video/kombinat.mp4',
      githubURL: 'https://github.com/RadoslawSmoronski/communicator',
      demoURL: 'https://communicator.rsmoronski.pl'
    },
    {
      id: '2d-space-shooter',
      title: '2D Space Shooter',
      description: '2 people project. 2D space shooter game developed in Unity for Android. Gameplay revolves around clearing enemy waves with increasing difficulty. Supports cooperative multiplayer via the Mirror library. Features a lobby system for creating and joining rooms over LAN, alongside procedural map generation.',
      technologyIds: ['csharp-dotnet', 'unity', 'mirror'],
      thumbnailURL: 'images/space_shooter.png',
      animationURL: 'video/space_shooter.mp4',
      githubURL: 'https://github.com/Aneiv/2d-shooter-project'
    },
    {
      id: 'awerly',
      title: 'Awerly',
      description: 'Team project developed during a hackathon using React.js and ASP.NET Core. An educational platform for cyber threat awareness, integrating AI models via the Gemini API. Features include simulated marketplace conversations (e.g., OLX style) where users analyze exchanges to spot potential scammers, as well as email and SMS spam/threat evaluation.',
      technologyIds: ['csharp-dotnet', 'react', 'ts', 'tailwind', 'gemini-api'],
      thumbnailURL: 'images/awerly.png',
      animationURL: 'video/awerly.mp4',
      githubURL: 'https://github.com/cherries-kosciuszkon/kosciuszkon'
    },
    {
      id: 'irc-chat',
      title: 'IRC Chat',
      description: 'Team project implementing a real-time IRC chat application using React and asynchronous communication via a custom low-level WebSocket client. Utilizes a custom communication protocol over WebSocket transport and JWT session management. Responsible for the frontend layer and protocol design.',
      technologyIds: ['react', 'ts', 'java', 'websocket'],
      thumbnailURL: 'images/chat_irc.png',
      animationURL: 'video/irc_chat.mp4',
      githubURL: 'https://github.com/bhandziak/PUS-projekt-koncowy'
    },
    {
      id: 'system-zarzadzania-warsztatem',
      title: 'Auto Repair Shop Management System (CRUD)',
      description: 'CRUD web application created in a two-person team using React.js, ASP.NET Core, and MS SQL. System handles management of clients, vehicles, repair orders, parts inventory, and analytical reports with role-based access control (RBAC).',
      technologyIds: ['react', 'csharp-dotnet', 'sql-postgres', 'ef-core', 'github-actions'],
      thumbnailURL: 'images/car_mechanic.png',
      animationURL: '',
      githubURL: 'https://github.com/bhandziak/Politechnika---.NET/tree/api/development'
    },
    {
      id: 'chmura',
      title: 'Implementation and automation of the project on GCP',
      description: 'Automated cloud infrastructure design and deployment on Google Cloud Platform using Terraform and Ansible for resource provisioning and configuration management. Deployed a containerized Docker environment hosting a WordPress instance and MySQL database.',
      technologyIds: ['terraform-ansible', 'docker', 'gcp', 'wordpress', 'mysql'],
      thumbnailURL: 'images/cloud.png',
      animationURL: '',
      githubURL: 'https://github.com/bhandziak/Chmura-Terraform-Blog'
    },
    {
      id: 'epc-simulator-robot-tests',
      title: 'EPC Simulator Robot Tests',
      description: 'Test automation project using Robot Framework and Python for E2E test scenario creation targeting an EPC network system simulator. Scenarios were drafted against REST API endpoints and technical documentation.',
      technologyIds: ['robot-framework', 'python', 'rest-api'],
      thumbnailURL: 'images/test.png',
      animationURL: '',
      githubURL: 'https://github.com/bhandziak/EPC-Similator-Robot-Tests'
    },
    {
      id: 'space-invaders',
      title: 'Space Invaders',
      description: 'Team project 2D arcade game written in Java using libGDX framework and Gradle build tool.',
      technologyIds: ['java-libgdx', 'java', 'gradle'],
      thumbnailURL: 'images/space_invaders.png',
      animationURL: 'video/space_invaders.mp4',
      githubURL: 'https://github.com/bhandziak/Space_Invaders_Java'
    },
    {
      id: 'symulacja-przychodni',
      title: 'Medical Clinic Simulation',
      description: 'Linux C application addressing classic OS synchronization challenges: process contention over shared resources. Built a simulation leveraging process synchronization mechanisms and multithreading using semaphores, shared memory, and named pipes (FIFO).',
      technologyIds: ['cpp-c'],
      thumbnailURL: 'images/hospital.png',
      animationURL: '',
      githubURL: 'https://github.com/bhandziak/Przychodnia_SO'
    }
  ],

  personalInfo: {
    location: "Kraków, Poland",
    socials: {
      github: "https://github.com/bhandziak",
      linkedin: "https://www.linkedin.com/in/bart%C5%82omiej-handziak-7b178626a/",
      email: "bartek.handziak@gmail.com",
    },
  },

  experience: [
    {
      id: "kosciuszkon",
      role: "Participant",
      company: "Cracow University of Technology",
      period: "May 2026",
      description: [
        "Collaborated in a 3-person team to design and implement an AI-powered educational application.",
        "Created a safe training environment for recognizing scam attempts, spam, and malicious communications.",
        "Hackathon theme: 'Cyber Security Awareness'."
      ],
      technologies: ['C# / .NET', 'React.js', 'TS', 'Tailwind', 'AI Integration / Gemini API'],
      isVisible: true,
    },
    {
      id: "husty",
      role: "Engineering Intern",
      company: "HUSTY M. Styczeń J. Hupert",
      period: "August 2020",
      description: [
        "Installed leak and flood detection systems for commercial and residential clients.",
        "Programmed and tested control unit circuit boards.",
        "Soldered electronic components."
      ],
      technologies: [],
      isVisible: true,
    },
    {
      id: "bonito",
      role: "Warehouse Worker",
      company: "Bonito",
      period: "October 2025 - Present",
      description: [
        "Order fulfillment, packaging, and warehouse management operations."
      ],
      technologies: [],
      isVisible: false,
    },
    {
      id: "juwentus",
      role: "Night Watchman / Security Guard",
      company: "Juwentus",
      period: "March 2024 - March 2025",
      description: [
        "Night security guard duties on hotel premises."
      ],
      technologies: [],
      isVisible: false,
    },
    {
      id: "zabka",
      role: "Store Associate",
      company: "Żabka",
      period: "May 2023 - September 2023",
      description: [
        "Retail store customer service and inventory management."
      ],
      technologies: [],
      isVisible: false,
    },
  ],
};