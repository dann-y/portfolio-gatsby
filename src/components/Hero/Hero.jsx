import React, { useContext, useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ProjectVideo from '../Video/ProjectVideo';

//new code

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, mobileSubtitle, cta, img, video, resume } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="hero-text-div">
              <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <h1 className="hero-title">
                  {title || 'Hi, my name is Danny.'}{' '}
                  {/* <span className="text-color-main">{name || 'Your Name'}</span> */}
                  {/* <br />
                  {subtitle || "I'm the Unknown Developer."} */}
                </h1>
              </Fade>
              <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
                <p className="hero-subtitle">{subtitle}</p>
              </Fade>
              <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="hero-cta">
                  <Link to="projects" smooth duration={1100}>
                    <div
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      className="cta-btn "
                    >
                      <p className="cta-btn-text">{cta || 'learn more'}</p>
                    </div>
                    {resume && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={resume}
                      >
                        <p className="cta-btn-text">resume</p>
                      </a>
                    )}
                  </Link>
                </div>
              </Fade>
            </div>
          </Col>
          <Col lg={6} md={6} xs={4}>
            <Fade duration={3000} delay={1500} distance="30px">
              <div className="video-div">
                {video && <ProjectVideo className="hero-video" alt={title} filename={video} />}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
