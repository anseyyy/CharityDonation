import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/images/logo.png"
              width="180"
              height="40"
              alt="Momentum Catalyst logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto me-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/campaigns">Campaigns</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            <Button variant="warning" onClick={() => setShowDonate(true)}>
              DONATE NOW
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* DONATION MODAL */}
      <Modal
        show={showDonate}
        onHide={() => setShowDonate(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-warning">
            Make a Donation
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-muted mb-4">
            Your generosity helps us empower communities and change lives.
          </p>

          <form>
            <Row className="g-3">
              <Col md={6}>
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </Col>

              <Col md={6}>
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </Col>

              <Col md={6}>
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </Col>

              <Col md={6}>
                <label className="form-label fw-semibold">
                  Donation Amount (₹)
                </label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  placeholder="Enter amount"
                  required
                />
              </Col>

              <Col md={12}>
                <label className="form-label fw-semibold">Cause</label>
                <select className="form-select" required>
                  <option value="">Select a cause</option>
                  <option>Education for Children</option>
                  <option>Healthcare Support</option>
                  <option>Food & Essentials</option>
                  <option>Emergency Relief</option>
                  <option>General Fund</option>
                </select>
              </Col>

              <Col md={12}>
                <label className="form-label fw-semibold">
                  Message (Optional)
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Leave a message"
                />
              </Col>
            </Row>
          </form>
        </Modal.Body>

        <Modal.Footer className="justify-content-between">
          <small className="text-muted">
            Secure payment • 100% transparency
          </small>

          <div>
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => setShowDonate(false)}
            >
              Cancel
            </Button>
            <Button variant="warning">
              Donate Now
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
