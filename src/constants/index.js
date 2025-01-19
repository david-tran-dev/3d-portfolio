export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Intermarché - E-Commerce Platform',
    desc: 'Intermarché, with 1,800 stores across France, provides flexible shopping options: in-store, drive-through, or home delivery! Leveraging cutting-edge technology, Intermarché integrates advanced e-commerce platforms, real-time inventory management, and personalized customer experiences. Their tech-driven approach ensures seamless online and offline interactions, enhancing convenience and efficiency for shoppers.',
    subdesc:
      'Built as a unique e-commerce app with Next.js 14, Tailwind CSS, TypeScript, and Figma, Intermarché is designed for optimal performance and scalability.',
    href: 'https://www.intermarche.com/',
    texture: '/textures/project/intermarche_project.mp4',
    textureMobile: '/textures/project/intermarche_project_mobile.mp4',
    logo: '/assets/intermarche-logo.webp',
    logoStyle: {
      backgroundColor: '#FFF',
      border: '0px solid #FFF',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma_logo.png',
      },
    ],
  },
  {
    title: 'Ovol - Explore Paragliding Sites',
    desc: 'Ovol is a project that aims to catalog mountain hiking trails where the descent is done by paragliding. This is our first project as part of a training program, developed using React for the frontend and Node.js for the backend. The goal is to combine outdoor adventure with modern technology, offering users a unique and exciting way to explore mountain trails.',
    subdesc:
      'This site allows users to explore and list paragliding spots, providing detailed information on takeoff locations. You can create, modify, and update routes, while accessing real-time weather and wind conditions. All of this is displayed on an interactive map, helping you determine whether the wind conditions are favorable for paragliding. The platform ensures you have all the necessary details for a safe and enjoyable experience.',
    href: 'https://ovol-front.vercel.app/',
    texture: '/textures/project/ovol_project.mp4',
    textureMobile: '/textures/project/ovol_project_mobile.mp4',
    logo: '/assets/ovol_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Crypto tracker - Cryptocurrency Site',
    desc: 'A personal project built to learn and explore Vue.js, Vite, and Tailwind CSS. This application displays a list of cryptocurrencies and provides detailed pages with charts for each.',
    subdesc:
      'The site also features a dark/light theme for an enhanced user experience.',
    href: 'https://crypto-tracker-david-dev.vercel.app/',
    texture: '/textures/project/crypto-tracker.mp4',
    textureMobile: '/textures/project/crypto-tracker.mp4',
    logo: '/assets/ovol_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue-logo.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.4 : isMobile ? 0.6 : 0.8,
    deskPosition: isSmall ? [0, -7, 0] : isMobile ? [0, -9, 0] : [0, -12, 0],
    cubePosition: isSmall
      ? [3, 0.5, 0]
      : isMobile
        ? [8, -10, -10]
        : isTablet
          ? [10, -2, 0]
          : [13, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 3.3, 0]
      : isMobile
        ? [6, 5, 0]
        : isTablet
          ? [8, 5.5, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 4, -5]
      : isMobile
        ? [-13, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-20, -10, -10]
      : isMobile
        ? [-20, -20, -10]
        : isTablet
          ? [-20, 10, 0]
          : [-18, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Intermarché',
    pos: 'Web Developer',
    duration: '2021 - Present',
    title:
      'Contributed to the front-end development of the Intermarché website, working in an agile environment, performing code testing, improving web performance, and suggesting enhancements for features and usability in collaboration with business teams.',
    icon: '/assets/intermarche-logo.webp',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Intermarché',
    pos: 'Helpdesk Technician',
    duration: '2010 - 2021',
    title:
      'Analyzed and resolved system and business application incidents, provided remote support, tracked incidents and contributed to corrective actions, and reported bugs to the higher-level support team.',
    icon: '/assets/intermarche-logo.webp',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Eurilogic',
    pos: 'Helpdesk Technician',
    duration: '2005 - 2009',
    title:
      'Diagnosed and resolved network, office applications, system, and Lotus Notes email issues, along with Active Directory account administration.',
    icon: '/assets/logo-eurilogic.png',
    animation: 'salute',
  },
];
