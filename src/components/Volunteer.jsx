import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';



function Volunteer() {
  return (
    
    <Container className="my-5">
      <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', maxWidth: '700px', margin: '0 auto' }}>
        <h3 className="text-center text-warning fw-bold mb-4">Volunteer Registration</h3>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Full Name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email Address" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phone Number" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Select required>
                  <option value="">Preferred Role</option>
                  <option value="event">Event Volunteer</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="logistics">Logistics</option>
                  <option value="outreach">Community Outreach</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Tell us why you want to volunteer" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-muted">Availability</Form.Label>
            <div className="d-flex flex-wrap gap-3">
              <Form.Check type="checkbox" label="Weekdays" />
              <Form.Check type="checkbox" label="Weekends" />
              <Form.Check type="checkbox" label="Mornings" />
              <Form.Check type="checkbox" label="Evenings" />
            </div>
          </Form.Group>

          <div className="text-center">
            <Button variant="warning" type="submit" className="px-4">
              Register Now
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  
  )
}

export default Volunteer