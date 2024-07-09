import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import ProjectVideo from '../Video/ProjectVideo';

const Projects = ({ onMouseEnter, onMouseLeave }) => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, technologies, info, info2, url, repo, img, id, video } = project;

            return (
              <Row key={id}>
                <Col lg={6} sm={12}>
                  <Fade
                    up={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            {img && <ProjectImg alt={title} filename={img} />}
                            {video && <ProjectVideo alt={title} filename={video} />}
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>

                      {technologies && <h3 className="mb-4">{technologies}</h3>}
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <h4 className="mb-4">
                          <strong>{info2 || ''}</strong>
                        </h4>
                      </div>
                      {url && (
                        <a
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--demo"
                          href={url || '#!'}
                        >
                          <p className="cta-btn-text">live version</p>
                        </a>
                      )}

                      {/* {!url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--demo"
                        >
                          <p className="cta-btn-text">coming soon</p>
                        </a>
                      )} */}

                      {repo && (
                        <a
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--repo"
                          href={repo}
                        >
                          <p className="cta-btn-text">github repo</p>
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
