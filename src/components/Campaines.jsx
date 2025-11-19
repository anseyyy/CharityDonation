import React from 'react'
import "../App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Campaines() {
  return (
    <div>

      <div className="d-flex justify-content-center align-items-center text-center text-white" style={{ backgroundImage: "url('/images/group3.jpeg')", backgroundSize: "cover", backgroundPosition: "center", height: "200px", }}>
        <h1>ALL CAMPAIGNS</h1>
      </div>


      <Container className="my-5">
        <Row className="g-4 justify-content-center">

          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm h-100 icon-box1">
              <Card.Img variant="top" src="/images/group.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Financial For Poor Families</Card.Title>

                <Row className="text-center mb-3">
                  <Col>
                    <p className="mb-0 text-muted">RAISED</p>
                    <p className="fw-bold text-success">$7,000</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">REMAINING</p>
                    <p className="fw-bold text-danger">$10,000</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">EXPIRE DATE</p>
                    <p className="fw-bold">20 Jan, 2026</p>
                  </Col>
                </Row>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <small className="text-muted">Progress</small>
                    <small className="text-muted">70%</small>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={'/donate'} className='btn btn-warning' variant="warning">Donate Now</Link>
                  <Button variant="outline-warning">Program Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm h-100 icon-box1">
              <Card.Img variant="top" src="/images/group2.jpeg" />
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Send Child To School For Education</Card.Title>

                <Row className="text-center mb-3">
                  <Col>
                    <p className="mb-0 text-muted">RAISED</p>
                    <p className="fw-bold text-success">$8,500</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">REMAINING</p>
                    <p className="fw-bold text-danger">$10,000</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">EXPIRE DATE</p>
                    <p className="fw-bold">20 Jan, 2026</p>
                  </Col>
                </Row>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <small className="text-muted">Progress</small>
                    <small className="text-muted">85%</small>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={'/donate'} className='btn btn-warning' variant="warning">Donate Now</Link>
                  <Button variant="outline-warning">Program Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm h-100 icon-box1">
              <Card.Img variant="top" src="/images/group3.jpeg" />
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Aid that heals beyond hospital walls</Card.Title>

                <Row className="text-center mb-3">
                  <Col>
                    <p className="mb-0 text-muted">RAISED</p>
                    <p className="fw-bold text-success">$7,000</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">REMAINING</p>
                    <p className="fw-bold text-danger">$10,000</p>
                  </Col>
                  <Col>
                    <p className="mb-0 text-muted">EXPIRE DATE</p>
                    <p className="fw-bold">20 Jan, 2026</p>
                  </Col>
                </Row>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <small className="text-muted">Progress</small>
                    <small className="text-muted">60%</small>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={'/donate'} className='btn btn-warning' variant="warning">Donate Now</Link>
                  <Button variant="outline-warning">Program Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>




  )
}

export default Campaines