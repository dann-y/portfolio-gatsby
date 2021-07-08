import React, { useState, useEffect, useContext } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import CustomCursor from './CustomCursor/CustomCursor';
import Navigationbar from './Navigationbar/Navigationbar';

import { PortfolioProvider } from '../context/context';
import { MouseContext } from '../context/mouse-context';

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
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

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
      {/* <Navigationbar /> */}
      <CustomCursor />
      <Header
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />
      <Hero
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />
      {/* <About /> */}
      <Projects
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />
      {/* <Technologies /> */}
      <Contact
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />
      <Footer
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />
    </PortfolioProvider>
  );
}

export default App;
