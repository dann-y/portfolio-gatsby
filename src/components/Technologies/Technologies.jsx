import React, { useContext, useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Technologies = () => {
  // const { hero } = useContext(PortfolioContext);
  // const { caption, name, subtitle, cta } = technologies;

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
    <section id="technologies">
      <div className="technologies-wrapper">
        <Container>
          <Row className="about-wrapper">
            <Col lg={4} md={12} sm={12} xs={12}>
              <Fade up={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <Title title="technologies i've worked with" />
              </Fade>
            </Col>
            <Col lg={2} md={3} sm={6} xs={6}>
              <Fade up={isDesktop} duration={1000} delay={1200}>
                {' '}
                <h3 className="list-label">front end</h3>
                <p>
                  html <br />
                  css <br />
                  javascript(ES6+)
                  <br />
                  react.js{' '}
                </p>
              </Fade>
            </Col>
            <Col lg={2} md={3} sm={6} xs={6}>
              <Fade up={isDesktop} duration={1000} delay={1300}>
                {' '}
                <h3 className="list-label">back end</h3>
                <p>
                  node.js <br />
                  express <br />
                  mongodb{' '}
                </p>
              </Fade>
            </Col>
            <Col lg={2} md={3} sm={6} xs={6}>
              <Fade up={isDesktop} duration={1000} delay={1400}>
                {' '}
                <h3 className="list-label">design</h3>
                <p>
                  figma <br />
                  sketch <br />
                  adobe suite{' '}
                </p>
              </Fade>
            </Col>
            <Col lg={2} md={3} sm={6} xs={6}>
              <Fade up={isDesktop} duration={1000} delay={1500}>
                {' '}
                <h3 className="list-label">others</h3>
                <p>
                  git/github <br />
                  bootstrap <br />
                  tailwindcss{' '}
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Technologies;
