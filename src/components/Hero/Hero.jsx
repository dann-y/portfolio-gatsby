import React, { useContext, useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
          <Col md={6} sm={12}>
            <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi, my name is Danny.'}{' '}
                {/* <span className="text-color-main">{name || 'Your Name'}</span> */}
                {/* <br />
            {subtitle || "I'm the Unknown Developer."} */}
              </h1>
              <p className="hero-subtitle">
                I’m an LA-based full-stack web developer primarily focused on the front-end.
              </p>
            </Fade>
            <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="hero-cta">
                <Link to="about" smooth duration={1100}>
                  <div className="cta-btn ">
                    <p className="cta-btn-text">{cta || 'learn more'}</p>
                  </div>
                </Link>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <img src={'../../images/profile.jpg'} alt="isometric cube" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
