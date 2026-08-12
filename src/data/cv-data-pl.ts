import type { CVData } from "../types/cvData";

export const cvData: CVData = {
  texts: {
    navigation: {
      welcome: "Start",
      aboutMe: "O mnie",
      techStack: "Technologie",
      projects: "Projekty",
      experience: "Doświadczenie",
      contact: "Kontakt",
    },
    welcome: {
      title: "Bartłomiej Handziak",
      description: "Student PK (3. rok, kierunek Informatyka) | Frontend Developer",
    },
    aboutMe: {
      title: "O mnie",
      description: "Jestem studentem 6. semestru informatyki na Politechnice Krakowskiej. Rozwijam się w obszarze tworzenia oprogramowania, szczególnie w zakresie aplikacji webowych z wykorzystaniem React. \
      Tworzę aplikacje, dbając o czytelność kodu, skalowalność rozwiązań oraz dobre doświadczenia użytkownika. Równolegle rozwijam zainteresowania związane z administracją systemami, sieciami komputerowymi oraz bezpieczeństwem IT, zdobywając praktyczne doświadczenie z systemami Windows i Linux, urządzeniami sieciowymi oraz narzędziami automatyzacji i QA. \
      W pracy stawiam na wysoką efektywność wykorzystując narzędzia AI. \
      ",
    },
    techStack: {
      title: "Stos technologiczny",
      description: "Technologie, które znam.",
      usedInProjectsLabel: "Wykorzystano w projektach",
      seeLabel: "Zobacz",
    },
    projects: {
      title: "Projekty",
      usedTechnologiesLabel: "Użyte technologie",
      codeOnGithubLabel: "Kod na GitHubie",
      demoLinkLabel: "Zobacz Demo"
    },
    experience: {
      title: "Doświadczenie",
      showMoreLabel: "Pokaż więcej",
      showLessLabel: "Ukryj"
    },
    contact: {
      title: "Kontakt",
      description: "Masz pytanie lub chcesz nawiązać współpracę? Skontaktuj się ze mną bezpośrednio.",
      phoneLabel: "Telefon",
      locationLabel: "Lokalizacja",
      showLabel: "Pokaż"
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
    title: 'Testy & Narzędzia',
    technologyIds: ['git-docker', 'docker', 'robot-framework']
  },
  {
    id: 'devops_databases',
    title: 'DevOps & Bazy Danych',
    technologyIds: ['terraform-ansible', 'sql-postgres', 'mongodb']
  },
  {
    id: 'gamedev',
    title: 'Game Dev',
    technologyIds: ['unity', 'java-libgdx', 'cpp-sfml']
  },
  {
    id: 'languages',
    title: 'Języki',
    technologyIds: ['pl', 'en']
  }
],

  techItems: [
  {
    id: 'react',
    name: 'React.js',
    description: 'Tworzenie funkcjonalnych komponentów oraz projektowanie aplikacji z wykorzystaniem zasad reużywalności komponentów. Znajomość składni JSX/TSX, warunkowego renderowania, przekazywania danych poprzez props oraz zarządzania stanem z wykorzystaniem Context API i Providerów. Wykorzystanie wbudowanych oraz własnych hooków. Konfiguracja routingu aplikacji z użyciem React Router. Integracja z backendem poprzez Fetch API, Axios, React Query oraz WebSocket i SignalR.',
    highlighted: false,
  },
  {
    id: 'js',
    name: 'JS',
    description: 'Vanilla JS (OOP), manipulacja elementami DOM.',
    highlighted: false,
  },
  {
    id: 'ts',
    name: 'TS',
    description: 'Interfejsy, typy, integracja z komponentami React',
    highlighted: false,
  },
  {
    id: 'html-css',
    name: 'HTML5/CSS3',
    description: 'Budowanie responsywnych struktur, wykorzystanie biblioteki tailwind.',
    highlighted: false,
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Projektowanie interfejsów użytkownika (UI/UX) i prototypowanie.',
    highlighted: false,
  },
  {
    id: 'csharp-dotnet',
    name: 'C# / .NET',
    description: 'Budowanie architektury REST API w ekosystemie ASP.NET Core. Implementacja mechanik gier i optymalizacja wydajność w silniku Unity. Wykorzystanie DI, SOLID i wzorce projektowe, asynchroniczność, mapowanie ORM, tokeny JWT.',
    highlighted: false,
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Budowanie architektury Spring Boot, REST API. Znajomość biblioteki libGDX, Gradle.',
    highlighted: false,
  },
  {
    id: 'cpp-c',
    name: 'C++ / C',
    description: 'Programowanie w środowisku Linux. Programowanie wieloprocesowe z myślą o rywalizacji procesów o zasoby systemowe, synchronizacja procesów, semafory, pamięć współdzielona, FIFO. OOP, SFML, programowanie GUI, biblioteki DLL.',
    highlighted: false,
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Machine Learning, przetwarzanie danych, modele ML, środowisko Google Cloud.',
    highlighted: false,
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'Architektura MVC, obsługa bazy danych PostgreSQL.',
    highlighted: false,
  },
  {
    id: 'cisco',
    name: 'Urządzenia sieciowe CISCO',
    description: 'Konfiguracja routerów CISCO poprzez interfejs konsolowy',
    highlighted: false,
  },
  {
    id: 'watchguard',
    name: 'Firewall WatchGuard',
    description: 'Polityki firewall, proxy, VPN, konfiguracja zabezpieczeń sieciowych.',
    highlighted: false,
  },
  {
    id: 'win-lin-server',
    name: 'Windows Serwer/ Linux Serwer',
    description: 'Administracja usługami serwerowymi, WWW, DHCP, użytkownicy i uprawnienia.',
    highlighted: false,
  },
  {
    id: 'git-docker',
    name: 'Git / Docker',
    description: 'Wersjonowanie kodu, wykorzystanie branch’y w pracy zespołowej, usługi GitHub Pages.',
    highlighted: false,
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Konteneryzacja projektów w Docker. Izolacja usług backendowych, frontendowych, baz danych.',
    highlighted: false,
  },
  {
    id: 'robot-framework',
    name: 'Robot Framework',
    description: 'Automatyzacja testów E2E, tworzenie scenariuszy testowych na podstawie dokumentacji oraz interfejsu REST API.',
    highlighted: false,
  },
  {
    id: 'terraform-ansible',
    name: 'Terraform / Ansible',
    description: 'Infrastructure as Code (IaC), Google Cloud, konfiguracja VM',
    highlighted: false,
  },
  {
    id: 'sql-postgres',
    name: 'MS SQL Server, PostgreSQL',
    description: 'Projektowanie schematów baz danych, modelowanie danych (ERD), funkcje, triggery, transakcje. Stosowanie zasad ACID.',
    highlighted: false,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Kolekcje, dokumenty, filtrowanie, sortowanie danych.',
    highlighted: false,
  },
  {
    id: 'unity',
    name: 'Unity',
    description: 'Tworzenie gier 2D typu space shooter, clicker. Znajomość systemu komponentów, zarządzania scenami, fizyki 2D, UI, animacji oraz cyklu życia obiektów Unity. Proceduralne generowanie map, komunikacja sieciowe z wykorzystaniem biblioteki Mirror, środowisko Android i Windows.',
    highlighted: false,
  },
  {
    id: 'java-libgdx',
    name: 'Java libGDX',
    description: 'Tworzenie gier 2D, obsługa assetów, zarządzanie projektu w wykorzystaniem Gradle.',
    highlighted: false,
  },
  {
    id: 'cpp-sfml',
    name: 'C++ SFML',
    description: 'Obsługa GUI i zdarzeń. Wykorzystanie assetów graficznych i dźwiękowych.',
    highlighted: false,
  },
  {
    id: 'pl',
    name: 'Polski',
    description: 'Ojczysty',
    highlighted: false,
  },
  {
    id: 'en',
    name: 'Angielski',
    description: 'Poziom C1. Swobodna komunikacja w mowie i piśmie, w tym praca z dokumentacją techniczną i terminologią IT.',
    highlighted: false,
  },
  { id: 'signalr', name: 'SignalR', highlighted: false},
  { id: 'axios', name: 'Axios', highlighted: false },
  { id: 'mirror', name: 'Mirror', highlighted: false},
  { id: 'tailwind', name: 'Tailwind CSS', highlighted: false, },
  { id: 'gemini-api', name: 'Integracja z AI / Gemini API', highlighted: false, },
  { id: 'websocket', name: 'WebSocket', highlighted: false, },
  { id: 'ef-core', name: 'Entity Framework Core', highlighted: false, },
  { id: 'github-actions', name: 'GitHub Actions', highlighted: false, },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', highlighted: false, },
  { id: 'wordpress', name: 'WordPress', highlighted: false, },
  { id: 'mysql', name: 'MySQL', highlighted: false, },
  { id: 'rest-api', name: 'REST API', highlighted: false, },
  { id: 'gradle', name: 'Gradle', highlighted: false, }
],

  projects: [
{
    id: 'komunikator-czatowy',
    title: 'Komunikator czatowy',
    description: 'Chat 1 – na – 1. stworzona we współpracy z moim znajomym, w której byłem odpowiedzialny za implementację frontendu. System zawiera funkcje rejestracji użytkowników, logowania z użyciem uwierzytelniania opartego na JWT oraz zarządzania znajomym. Frontend został zbudowany w oparciu o bibliotekę React.js i obsługuje komunikację w czasie rzeczywistym za pomocą SignalR.',
    technologyIds: ['js', 'react', 'signalr', 'axios', 'html-css'],
    thumbnailURL: 'images/comunicator.png',
    animationURL: 'video/kombinat.mp4',
    githubURL: 'https://github.com/RadoslawSmoronski/communicator',
    demoURL: 'https://communicator.rsmoronski.pl'
  },
  {
    id: '2d-space-shooter',
    title: '2D space shooter',
    description: 'Projekt zespołowy 2 - osobowy. Gra 2D typu space shooter, napisana na podstawie silnika Unity na platformę Android. Rozgrywka polega na przechodzeniu kolejnych etapów / fal pokonując stopniowo trudniejszych przeciwników. Wspiera rozgrywkę wieloosobową w trybie kooperacji – system oparty o bibliotekę Mirror. Zaimplementowano system lobby umożliwiający tworzenie i dołączanie do rozgrywek oraz komunikację w sieci lokalnej (LAN). Projekt obejmuje również proceduralne generowanie map.',
    technologyIds: ['csharp-dotnet', 'unity', 'mirror'],
    thumbnailURL: 'images/space_shooter.png',
    animationURL: 'video/space_shooter.mp4',
    githubURL: 'https://github.com/Aneiv/2d-shooter-project'
  },
  {
    id: 'awerly',
    title: 'Awerly',
    description: 'Projekt zespołowy zrealizowany podczas hackathonu z wykorzystaniem React.js oraz ASP.NET Core. Aplikacja stanowi środowisko treningowe do rozpoznawania zagrożeń związanych z cyberprzestępczością, wykorzystujące modele AI poprzez API Gemini. Oferuje: symulację rozmów przypominających komunikację na platformach ogłoszeniowych (np. OLX), w której użytkownik analizuje przebieg konwersacji i ocenia, czy druga strona może być oszustem; ocenianie spamu i zagrożeń wiadomości pocztowych i SMS.',
    technologyIds: ['csharp-dotnet', 'react', 'ts', 'tailwind', 'gemini-api'],
    thumbnailURL: 'images/awerly.png',
    animationURL: 'video/awerly.mp4',
    githubURL: 'https://github.com/cherries-kosciuszkon/kosciuszkon'
  },
  {
    id: 'irc-chat',
    title: 'IRC Chat',
    description: 'Projekt zespołowy aplikacji czatu IRC w czasie rzeczywistym, oparty na bibliotece React oraz asynchronicznej komunikacji z wykorzystaniem niskopoziomowego klienta WebSocket. Implementuje autorski protokół komunikacyjny na transporcie WebSocket oraz tokeny JWT trzymające sesję. Byłem odpowiedzialny za warstwę frontendową oraz projekt protokołu.',
    technologyIds: ['react', 'ts', 'java', 'websocket'],
    thumbnailURL: 'images/chat_irc.png',
    animationURL: 'video/irc_chat.mp4',
    githubURL: 'https://github.com/bhandziak/PUS-projekt-koncowy'
  },
  {
    id: 'system-zarzadzania-warsztatem',
    title: 'System zarządzania warsztatem samochodowym (CRUD)',
    description: 'Aplikacja webowa typu CRUD wykonana w dwuosobowym zespole z wykorzystaniem React.js, ASP.NET Core oraz MS SQL. System obejmuje zarządzanie klientami, pojazdami, zleceniami serwisowymi, częściami oraz raportami, z uwzględnieniem ról użytkowników i autoryzacji.',
    technologyIds: ['react', 'csharp-dotnet', 'sql-postgres', 'ef-core', 'github-actions'],
    thumbnailURL: 'images/car_mechanic.png',
    animationURL: '',
    githubURL: 'https://github.com/bhandziak/Politechnika---.NET/tree/api/development'
  },
  {
    id: 'chmura',
    title: 'Wdrożenie i automatyzacja projektu na GCP',
    description: 'Projekt obejmował zaprojektowanie i wdrożenie zautomatyzowanej infrastruktury chmurowej w środowisku Google Cloud Platform z wykorzystaniem Terraform oraz Ansible do zarządzania zasobami i konfiguracji usług. Wdrożono konteneryzowane środowisko Docker zawierające aplikację WordPress oraz bazę MySQL, na którym uruchomiono blog.',
    technologyIds: ['terraform-ansible', 'docker', 'gcp', 'wordpress', 'mysql'],
    thumbnailURL: 'images/cloud.png',
    animationURL: '',
    githubURL: 'https://github.com/bhandziak/Chmura-Terraform-Blog'
  },
  {
    id: 'epc-simulator-robot-tests',
    title: 'EPC Simulator Robot Tests',
    description: 'Projekt automatyzacji testów z wykorzystaniem Robot Framework oraz Python, obejmujący przygotowanie scenariuszy testowych E2E dla symulatora systemu sieci EPC. Testy zostały zaprojektowane w oparciu o dostępny interfejs REST API oraz dokumentację.',
    technologyIds: ['robot-framework', 'python', 'rest-api'],
    thumbnailURL: 'images/test.png',
    animationURL: '',
    githubURL: 'https://github.com/bhandziak/EPC-Similator-Robot-Tests'
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    description: 'Projekt zespołowy gry 2D wykonanej w technologii Java z wykorzystaniem frameworka libGDX oraz systemu budowania Gradle.',
    technologyIds: ['java-libgdx', 'java', 'gradle'],
    thumbnailURL: 'images/space_invaders.png',
    animationURL: 'video/space_invaders.mp4',
    githubURL: 'https://github.com/bhandziak/Space_Invaders_Jav'
  },
  {
    id: 'symulacja-przychodni',
    title: 'Symulacja przychodni',
    description: 'Aplikacja została napisana w C na systemie Linux. Porusza klasyczny problem w systemach operacyjnych: rywalizacji niezależnych procesów o zasoby. Celem projektu było stworzenie symulacji, która wykorzystuje mechanizmy synchronizacji procesów, wielowątkowość. W implementacji zastosowano m.in. semafory, pamięć dzieloną oraz potoki nazwane (FIFO).',
    technologyIds: ['cpp-c'],
    thumbnailURL: 'images/hospital.png',
    animationURL: '',
    githubURL: 'https://github.com/bhandziak/Przychodnia_SO'
  }
  ],

  personalInfo: {
    location: "Kraków, Polska",
    socials: {
      github: "https://github.com/bhandziak",
      linkedin: "https://www.linkedin.com/in/bart%C5%82omiej-handziak-7b178626a/",
      email: "bartek.handziak@gmail.com",
    },
  },

  experience: [
    {
      id: "kosciuszkon",
      role: "Uczestnik",
      company: "Politechnika Krakowska",
      period: "Maj 2026",
      description: [
        "Praca w zespole 3 osobowym nad projektem i implementacją aplikacji treningowej wykorzystującej AI.",
        "Aplikacja oferuje bezpieczne środowisko szkoleniowe do rozpoznawania oszustw, spamu i szkodliwych wiadomości.",
        "Tematem Hackathonu była “Cyber Security awareness”."
      ],
      technologies: ['C# / .NET', 'React.js', 'TS', 'Tailwind', 'Integracja z AI / Gemini API'],
      isVisible: true,
    },
    {
      id: "husty",
      role: "Praktyki zawodowe",
      company: "HUSTY M. Styczeń J. Hupert",
      period: "Sierpień 2020",
      description: [
        "Montaż systemów wykrywania wycieków i zalania dla firm oraz gospodarstw domowych.",
        "Programowanie i testowanie płytek sterujących.",
        "Lutowanie elementów elektronicznych.",
      ],
      technologies: [],
      isVisible: true,
    },
    {
      id: "bonito",
      role: "Magazynier",
      company: "Bonito",
      period: "Październik 2025 - Obecnie",
      description: [
        "Kompletowanie zamówień, pakowanie, obsługa magazynu"
      ],
      technologies: [],
      isVisible: false,
    },
        {
      id: "juwentus",
      role: "Stróż nocny / ochrona",
      company: "Juwentus",
      period: "Marzec 2024 - Marzec 2025",
      description: [
        "Nocny stróż na terenie hotelu"
      ],
      technologies: [],
      isVisible: false,
    },
        {
      id: "zabka",
      role: "Pracownik sklepu",
      company: "Żabka",
      period: "Maj 2023 - Wrzesień 2023",
      description: [
        "Praca w sklepie"
      ],
      technologies: [],
      isVisible: false,
    },
  ],
};