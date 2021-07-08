import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = ({ onMouseEnter, onMouseLeave }) => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade duration={1000} delay={500}>
          <div className="contact-wrapper">
            <p>
              I’m currently looking for a <b>full-time </b> position as a software engineer. You can
              view my resume{' '}
              <a
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                href="Daniel-Chu-Resume.pdf"
                target="_blank"
              >
                here
              </a>
              . <br />
              <br />
              Feel free to contact me if you're interested in working together, or just say hi!
            </p>
          </div>
        </Fade>
      </Container>
      <Container className="form-container text-center">
        <Form
          name="contact v2"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact v2" />

          <Row md={8} className="justify-content-md-center">
            <Col md={4}>
              <Form.Group className="form-group">
                <Fade duration={1000} delay={1000}>
                  <Form.Label>name</Form.Label>
                  <Form.Control
                    required
                    className="input-field"
                    id="name"
                    type="text"
                    name="name"
                  />
                </Fade>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="form-group">
                <Fade duration={1000} delay={1000}>
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    required
                    className="input-field"
                    id="email"
                    type="email"
                    name="email"
                  />
                </Fade>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Form.Group className="form-group ">
                <Fade duration={1000} delay={1000}>
                  <Form.Label>message</Form.Label>
                  <Form.Control
                    required
                    className="input-field"
                    as="textarea"
                    id="message"
                    name="message"
                    rows="5"
                  />
                </Fade>
              </Form.Group>
              <Fade duration={1000} delay={1000}>
                <button
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="cta-btn contact-btn"
                  type="submit"
                >
                  submit
                </button>
              </Fade>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
