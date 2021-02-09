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
    img: 'ssense.png',
    title: 'full stack e-commerce',
    info:
      'A full stack e-commerce website with full checkout functionality via Paypal, user authentication, product reviews/ratings, admin product and user management. Built using React, React Hooks, Redux, and React Bootstrap. Node.js and Express are used to serve and fetch product and user information from MongoDB database. UI is inspired by SSENSE.com (image is a placeholder via SSENSE).',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    video: 'Untitled480.mp4',
    title: 'cryptocurrency tracker',
    info:
      'A website built with React, React Hooks, and React Router which allows users to search for cryptocurrency data fetched from the CoinGecko API. The website was responsively designed using Tailwind CSS. A watch list functionality was implemented using using Redux state management and local storage. Data of cryptocurrency prices vs. time was visualized using the Chart.js Javascript library.',
    info2: '',
    url: 'https://dann-y.github.io/crypto-viewer-react/', // if no url, will show in progress
    repo: 'https://github.com/dann-y/crypto-viewer-react', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'portfolio.png',
    title: `portfolio website (you're on it!)`,
    info:
      'A simple and minimal personal portfolio designed with Figma and built using Gatsby.js, React, React Hooks, and GraphQL. The website was made responsive using React Bootstrap and styled using Sass.',
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
