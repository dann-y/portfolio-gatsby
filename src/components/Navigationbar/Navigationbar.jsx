import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <Navbar
      style={{
        padding: '4rem 5rem 0',
        position: 'absolute',
        position: 'sticky',
        backgroundColor: 'transparent',
        color: 'white',
        top: 0,
        zIndex: 2,
      }}
      expand="lg"
    >
      <Navbar.Brand style={{ color: 'white' }}>
        {' '}
        <Link to="hero" smooth duration={1100}>
          <div>danny chu</div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{ color: 'white' }} id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={{ margin: '0 2rem', color: 'white' }}>
            {' '}
            <Link to="about" smooth duration={1100}>
              <div>about</div>
            </Link>
          </Nav.Link>
          <Nav.Link style={{ margin: '0 2rem', color: 'white' }} href="#link">
            <Link to="projects" smooth duration={1100}>
              <div>projects</div>
            </Link>
          </Nav.Link>
          <Nav.Link style={{ margin: '0 2rem', color: 'white' }} href="#link">
            <Link to="contact" smooth duration={1100}>
              <div>contact</div>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
