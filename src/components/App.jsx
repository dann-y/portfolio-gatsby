import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navigationbar from './Navigationbar/Navigationbar';

import { PortfolioProvider } from '../context/context';

import {
  navData,
  heroData,
  aboutData,
  technologiesData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [nav, setNav] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [technologies, setTechnologies] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNav({ ...navData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setTechnologies({ ...technologiesData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ nav, hero, about, technologies, projects, contact, footer }}>
      <Navigationbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
