import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

function Donation() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-3">
      {/* OPEN MODAL BUTTON */}
      <Button variant="warning" onClick={() => setShow(true)}>
        Donate Now
      </Button>

      {/* DONATION MODAL */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-warning">
            Make a Donation
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-muted mb-4">
            Your generosity helps us create a better future for communities in need.
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
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </Col>

              <Col md={6}>
                <label className="form-label fw-semibold">Phone Number</label>
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
                  placeholder="Enter amount"
                  min="1"
                  required
                />
              </Col>

              <Col md={12}>
                <label className="form-label fw-semibold">
                  Donation Purpose
                </label>
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
                  placeholder="Write a message or dedication"
                ></textarea>
              </Col>
            </Row>
          </form>
        </Modal.Body>

        <Modal.Footer className="justify-content-between">
          <small className="text-muted">
            Secure payment • Tax benefits may apply
          </small>

          <div>
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button variant="warning">
              Proceed to Donate
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Donation;
