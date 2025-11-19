import React from 'react'
import "../App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Campaines() {
  return (
   <div>
        <div className="d-flex justify-content-center align-items-center text-center vh-100 bg-dark text-white "
            style={{
              backgroundImage: "url('/images/group3.jpeg')",
              maxHeight: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
                <h1>ALL CAMPAIGNS</h1>
            </div>
            <div className="container ">


        <div className="m-5 d-flex justify-content-center align-items-center text-center">

            
          

            <div className="m-5 icon-box">
              <Card style={{ width: '20rem' }} className="shadow-sm  ">
                <Card.Img variant="top" src="/images/group.jpg" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">Financial For Poor Families</Card.Title>

                  <div className="d-flex justify-content-between text-center mb-3">
                    <div>
                      <p className="mb-0 text-muted">RAISED</p>
                      <p className="fw-bold text-success">$7,000</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">REMAINING</p>
                      <p className="fw-bold text-danger">$10,000</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">EXPIRE DATE</p>
                      <p className="fw-bold">20 Jan, 2026</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Progress</small>
                      <small className="text-muted">70%</small>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-warning" role="progressbar"  style={{ width: '70%' }}  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning">Donate Now</Button>
                    <Button variant="outline-warning">Program Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>

          


          
            <div className="m-5 icon-box">
              <Card style={{ width: '20rem' }} className="shadow-sm ">
                <Card.Img variant="top" src="/images/group2.jpeg" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">Send Child To School For Education</Card.Title>

                  <div className="d-flex justify-content-between text-center mb-3">
                    <div>
                      <p className="mb-0 text-muted">RAISED</p>
                      <p className="fw-bold text-success">$8500</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">REMAINING</p>
                      <p className="fw-bold text-danger">$10,000</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">EXPIRE DATE</p>
                      <p className="fw-bold">20 Jan, 2026</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Progress</small>
                      <small className="text-muted">85%</small>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-warning" role="progressbar"  style={{ width: '85%' }}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning">Donate Now</Button>
                    <Button variant="outline-warning">Program Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="m-5 icon-box">
              <Card style={{ width: '20rem' }} className="shadow-sm  ">
                <Card.Img variant="top" src="/images/group3.jpeg" />
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">Aid that heals beyond hospital walls</Card.Title>

                  <div className="d-flex justify-content-between text-center mb-3">
                    <div>
                      <p className="mb-0 text-muted">RAISED</p>
                      <p className="fw-bold text-success">$7,000</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">REMAINING</p>
                      <p className="fw-bold text-danger">$10,000</p>
                    </div>
                    <div>
                      <p className="mb-0 text-muted">EXPIRE DATE</p>
                      <p className="fw-bold">20 Jan, 2026</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Progress</small>
                      <small className="text-muted">70%</small>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-warning" role="progressbar"  style={{ width: '70%' }}  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning">Donate Now</Button>
                    <Button variant="outline-warning">Program Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          
        </div>

      </div>
   </div>

        
  )
}

export default Campaines