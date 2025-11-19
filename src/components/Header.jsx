import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark"   style={{backgroundColor: "transparent"}}>
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.png" width="180" height="40" className="d-inline-block align-top" alt="Momentum Catalyst logo"/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto me-3" activeKey="">
              {/* Nav Items */}
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/campaigns">Campaigns</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="warning" href="/donate">
              DONATE NOW
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
