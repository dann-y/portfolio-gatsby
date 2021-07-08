import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

export default function Header({ onMouseEnter, onMouseLeave }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <Fade up={isDesktop} bottom={isMobile} duration={750} delay={500} distance="10px">
      <div className="sticky">
        <header>
          <div className="header-inner">
            <div className="logo">danny chu</div>
            <nav>
              <ul>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="hero" smooth duration={1100}>
                    <p>about</p>
                  </Link>
                </li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="projects" smooth duration={1100}>
                    <p>projects</p>
                  </Link>
                </li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="contact" smooth duration={1500}>
                    <p>contact</p>
                  </Link>
                </li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <a target="_blank" href="Daniel-Chu-Resume.pdf">
                    <p>resume</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </Fade>
  );
}
