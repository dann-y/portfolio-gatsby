import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'danny chu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Danny Chu Personal Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is Danny.',
  // name: '',
  subtitle: '',
  cta: 'learn more',
  img: 'project.jpg',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I recently graduated from UC Riverside with a B.S. Bioengineering degree in Spring 2020. Since graduating, I have been learning software engineering and have been thoroughly enjoying learning new technologies, CS concepts, frameworks, and UI/UX design patterns.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    video: 'Untitled480.mp4',
    title: 'cryptocurrency tracker',
    info:
      'A website built with React, React Hooks, and React Router which allows users to search for cryptocurrency data fetched from the CoinGecko API. The website was responsively designed using Tailwind CSS. Data of cryptocurrency prices vs. time was visualized using the Chart.js Javascript library.',
    info2: '',
    url: 'https://dann-y.github.io/crypto-viewer-react/', // if no url, will show in progress
    repo: 'https://github.com/dann-y/crypto-viewer-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'full stack e-commerce',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: `portfolio website (you're on it)`,
    info: '',
    info2: '',
    url: 'https://danny-chu.com',
    repo: 'https://github.com/dann-y/portfolio-gatsby', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danielychu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dann-y',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
