import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade duration={1000} delay={800}>
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            {/* <p>{cta || 'Would you like to work with me? Awesome!'}</p> */}
            <p>
              I’m currently looking for a full-time position as a software developer but I’m also
              open to discussing freelance opportunities. <br />
              <br />
              Feel free to contact me using the form below!
            </p>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
      <Container className="form-container">
        <Form
          name="contact v2"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact v2" />

          <Row>
            <Col md={6}>
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
            <Col md={6}>
              <Form.Group className="form-group">
                <Fade duration={1000} delay={1500}>
                  <Form.Label>e-mail</Form.Label>
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
            <Col>
              <Form.Group className="form-group">
                <Fade duration={1000} delay={2000}>
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
              <Fade duration={1000} delay={2500}>
                <Button className="cta-btn contact-btn" type="submit">
                  submit
                </Button>
              </Fade>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
