import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div className="sticky">
      <header>
        <div className="header-inner">
          <div className="logo">danny chu</div>
          <nav>
            <ul>
              <li>
                <Link to="about" smooth duration={1100}>
                  <p>about</p>
                </Link>
              </li>
              <li>
                <Link to="projects" smooth duration={1100}>
                  <p>projects</p>
                </Link>
              </li>
              <li>
                <Link to="contact" smooth duration={1500}>
                  <p>contact</p>
                </Link>
              </li>
              <li>
                <u>
                  <a target="_blank" rel="noopener noreferrer" href="./Daniel-Chu-Resume.pdf">
                    resume
                  </a>
                </u>
              </li>
              {/* <li className="btn">
                <a href="/">order</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
