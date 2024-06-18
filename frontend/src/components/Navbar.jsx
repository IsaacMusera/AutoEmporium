import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AutoEmporium</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <form>
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search  for cars"
              />
            </form>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#contacts">
              <button>About</button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#contacts">
              <button>Contact</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
