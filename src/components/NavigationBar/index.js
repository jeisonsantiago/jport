// import { react } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

// import './style.css';
import {ContainerStyle} from './style';

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="my-3">
        <ContainerStyle>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="navigationBarSetup">
              <Nav.Link href="#about"><span>_. </span>About</Nav.Link>
              <Nav.Link href="#projects"><span>_. </span>Work</Nav.Link>
              <Nav.Link href="#resume"><span>_. </span>Resume</Nav.Link>
              <Nav.Link href="#contact"><span>_. </span>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </ContainerStyle>
      </Navbar>
    </>
  );
}

export default NavigationBar;