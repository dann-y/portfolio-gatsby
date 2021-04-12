import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'danny chu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Danny Chu is a Full-Stack Web Developer / Software Engineer.', // e.g: Welcome to my website
  image: 'https://www.danny-chu.com/portfolio.png',
  url: 'https://www.danny-chu.com/',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is Danny.',
  // name: '',
  subtitle: '',
  cta: 'learn more',
  img: 'project.jpg',
  video: 'isometriccube.mp4',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I recently graduated from UC Riverside with a B.S. Bioengineering degree in Spring 2020. In addition to engineering, I am particularly fond of visual design– most everything from graphic and industrial design to fashion design. Post-graduation, I found that web development involves a nice combination of both visual design thinking and logical problem solving. As a result, I have been pursuing software engineering as a career and have been enjoying learning new technologies, CS concepts, and UI/UX design patterns.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'Daniel-Chu-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    video: 'mern_example.mp4',
    title: 'full stack e-commerce',
    info:
      'A full stack e-commerce website with full checkout functionality via Paypal, form validation, user registration & authentication, and admin product & user management. Built using React, Redux, and React Bootstrap. Node.js and Express were used to access and update product & user information from a MongoDB database.',
    info2: '',
    url: 'https://techcenterapp.herokuapp.com/',
    repo: 'https://github.com/dann-y/mern-ecomm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    video: 'Crypto_Vid.mp4',
    title: 'cryptocurrency tracker',
    info:
      'A website built and designed with React, React Hooks, React Router, and TailwindCSS which allows users to search for cryptocurrency data fetched from the CoinGecko API. A watch list functionality was implemented using using Redux state management and local storage. Cryptocurrency price data was visualized using the Chart.js Javascript library.',
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
      url: 'https://www.linkedin.com/in/danny-chu/',
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
