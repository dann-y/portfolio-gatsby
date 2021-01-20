import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // const handleChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'contact', ...formState }),
  //   })
  //     .then(() => alert('Success!'))
  //     .catch((error) => alert(error));

  //   e.preventDefault();
  // };

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
          // onSubmit={handleSubmit}
          onSubmit="submit"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact v2" />

          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>name</Form.Label>
                <Form.Control
                  required
                  className="input-field"
                  id="name"
                  type="text"
                  name="name"
                  // onChange={handleChange}
                  // value={formState.name}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>e-mail</Form.Label>
                <Form.Control
                  required
                  className="input-field"
                  id="email"
                  type="email"
                  name="email"
                  // onChange={handleChange}
                  // value={formState.email}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>message</Form.Label>
                <Form.Control
                  required
                  className="input-field"
                  as="textarea"
                  id="message"
                  name="message"
                  // onChange={handleChange}
                  // value={formState.message}
                  rows="5"
                />
              </Form.Group>
              <Button type="submit">submit</Button>
            </Col>
          </Row>
        </Form>
        {/* <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="enter your name"
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="enter your email"
              />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <input
                id="message"
                type="message"
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="enter your message"
              />
            </div>

            <button className="cta-btn " type="submit">
              submit
            </button>
          </form> */}
      </Container>
    </section>
  );
};

export default Contact;
