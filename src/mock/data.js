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
  subtitle: `I'm an NYC-based web developer and designer. I enjoy problem solving and am a fan of design- most everything from graphic to industrial and fashion design. Check out my work below and feel free to reach out if anything catches your eye.`,
  mobileSubtitle: `I'm an NYC-based web developer working with the MERN stack. I enjoy problem solving and am a fan of design- most everything from graphic to industrial and fashion design.`,
  cta: 'view projects',
  img: 'project.jpg',
  video: 'isometriccube.mp4',
  resume: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hey there! I'm a recent Engineering graduate pursuing web development. I enjoy problem solving and am a fan of design- most everything from graphic to industrial and fashion design. I primarily work with Javascript, React, Node, Express.js, and MongoDB for full-stack web development. Check out my work below and don't hesitate to reach out if anything catches your eye.`,
  paragraphTwo:
    'I recently graduated from UC Riverside with a B.S. Bioengineering degree in Spring 2020. In addition to engineering, I am particularly fond of visual design– most everything from graphic and industrial design to fashion design. Post-graduation, I found that web development involves a nice combination of both visual design thinking and logical problem solving. As a result, I have been pursuing software engineering as a career and have been enjoying learning new technologies, CS concepts, and UI/UX design patterns.',
  paragraphThree: '',
  resume: 'Daniel-Chu-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  //  {
  //    id: nanoid(),
  //    img: '',
  //    video: 'notifire_video.mp4',
  //    title: 'noti-fire, 2021',
  //    technologies: 'React.js, Redux, Express.js, MongoDB, Node.js, Tailwind CSS',
  //    info:
  //      'A full stack web application which notifies users when new listings from online marketplaces such as eBay and Grailed are uploaded. Features include a user dashboard, new listing feed, discord notifications, and search query management.',
  //    info2: '',
  //    url: '',
  //    repo: '', // if no repo, the button will not show up
  //  },
  {
    id: nanoid(),
    img: '',
    video: 'mern_example.mp4',
    title: 'tech center, 2021',
    technologies: 'React.js, Redux, Express.js, MongoDB, Node.js, Bootstrap',
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
    title: 'cryptocurrency tracker, 2021',
    technologies: 'React.js, Redux, Tailwind CSS',
    info:
      'A website built and designed with React, React Hooks, React Router, Redux, and Tailwind CSS which allows users to search for data from 100+ cryptocurrencies fetched from the CoinGecko API. Cryptocurrency price data was visualized using the Chart.js Javascript library.',
    info2: '',
    url: 'https://dann-y.github.io/crypto-viewer-react/', // if no url, will show in progress
    repo: 'https://github.com/dann-y/crypto-viewer-react', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'portfolio.png',
    title: `portfolio website, 2021`,
    technologies: 'Gatsby.js, React.js, Bootstrap, Sass',
    info:
      'A minimal personal portfolio designed with Figma and built using Gatsby.js and React. The website was made responsive using React Bootstrap and styled using Sass.',
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
