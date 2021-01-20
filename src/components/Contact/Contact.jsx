import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const [formState, setFormState] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

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
              Feel free to contact me using the form below :)
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
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="enter your name"
            />
            <label htmlFor="email">name</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="enter your email"
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
