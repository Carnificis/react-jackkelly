import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';




function NavTabs(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#name">
          Jack Kelly
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={props.handlePageChange("Home")}>
            Home
          </Nav.Link>
        <Nav.Link href="#about" onClick={props.handlePageChange("About")}>
          About
        </Nav.Link>
        <Nav.Link href="portfolio" onClick={props.handlePageChange("Portfolio")}>
          Portfolio
        </Nav.Link>
        <Nav.Link href="#contact" onClick={props.handlePageChange("Contact")}>
          Contact
        </Nav.Link>
        <Nav.Link href="#resume" onClick={props.handlePageChange("Resume")}>
          Resume
        </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );


    
  
}

export default NavTabs;