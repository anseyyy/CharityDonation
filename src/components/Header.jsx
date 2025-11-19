import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark" style={{ backgroundColor: "transparent" }}>
        <Container>
          <Navbar.Brand as={Link} to={'/'}><img src="/images/logo.png" width="180" height="40" className="d-inline-block align-top" alt="Momentum Catalyst logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto me-3" activeKey="">

              <Nav.Item>
                <Nav.Link as={Link} to={'/'}>Home </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={'/campaigns'}>Campaigns </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link}  to={'/about'}>About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <Link to={'/donate'} className="btn btn-warning" variant="warning" > DONATE NOW</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
