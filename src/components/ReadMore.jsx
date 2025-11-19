import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

function ReadMore() {
    const navigate = useNavigate();
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="/images/group5.jpeg"
            alt="Impact Story"
            className="img-fluid rounded shadow"
          />
        </Col>

        
        <Col md={6}>
          <h5 className="text-warning fw-bold">READ MORE</h5>
          <h2 className="fw-bold mb-3">Every Donation Tells a Story</h2>
          <p className="text-muted">
            Behind every contribution is a life changed. From providing school supplies to children in underserved communities, to delivering emergency aid during crises — your support creates real, lasting impact.
          </p>
          <p className="text-muted">
            Our volunteers work tirelessly to ensure that every rupee is used with transparency and purpose. We believe in building trust, one act of kindness at a time.
          </p>
          <p className="text-muted">
            Want to see how your donation is making a difference? Explore our stories, meet the people you've helped, and be part of a growing movement of hope.
          </p>

          <Link  to={'/'} variant="warning" className="mt-3 btn btn-warning">
            Back to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ReadMore;