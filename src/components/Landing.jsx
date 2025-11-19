import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ContactUs from "./ContactUs";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>




      <div className="d-flex justify-content-center align-items-center text-center bg-dark text-white" style={{ backgroundImage: "url('/images/charity.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", maxHeight: "650px", padding: "2rem", }}>


        <Row className="w-100 m-0">
          <Col xs={12} lg={7} className="text-start p-4">


            <div>

              <h5 className="mb-3">DONATE TO CONTRIBUTE</h5>
              <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                Let's Build The Better World{" "}
                <span className="text-warning">Together</span>
              </h1>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                fugiat, labore accusantium animi sit ea optio quia possimus, ut
                blanditiis esse, accusamus temporibus sint! Adipisci id illo nesciunt
                est magni. Porro tempore quos placeat temporibus, veritatis velit
                quod odit aliquid tempora fugit natus beatae obcaecati nulla. Iste id
                laudantium provident nostrum perspiciatis veniam voluptates ab,
                corporis obcaecati dolorum quidem facilis!
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <Link to="/donate" className="btn btn-warning text-white rounded"> Donate Fund </Link>

                <Link to="/readmore" className="btn text-white rounded" style={{ backgroundColor: "transparent", border: "2px solid #fff", }}> Read More </Link>

              </div>

            </div>


          </Col>
          <Col xs={0} lg={5}></Col>
        </Row>


      </div>

      <div className="mt-3">
        <Row className="text-center py-4">
          <Col lg={3} className="mb-4">
            <div className="d-flex flex-column align-items-center icon-box">
              <i className="fa-solid fa-hand-holding-dollar fa-2x mb-2"></i>
              <p className="fw-bold">HOPE FUNDS</p>
            </div>
          </Col>

          <Col lg={3} className="mb-4">
            <div className="d-flex flex-column align-items-center icon-box">
              <i className="fa-solid fa-hands-holding-child fa-2x  mb-2"></i>
              <p className="fw-bold">HOPE CHILDREN</p>
            </div>
          </Col>

          <Col lg={3} className="mb-4">
            <div className="d-flex flex-column align-items-center icon-box">
              <i className="fa-solid fa-earth-asia fa-2x  mb-2"></i>
              <p className="fw-bold text-center">GLOBAL DONATION</p>
            </div>
          </Col>

          <Col lg={3} className="mb-4">
            <div className="d-flex flex-column align-items-center icon-box">
              <i className="fa-solid fa-hospital fa-2x  mb-2"></i>
              <p className="fw-bold">HEALTH</p>
            </div>
          </Col>
        </Row>
      </div>



      <div className="text-center">
        <h5 className="text-warning">GET INVOLVED</h5>
        <h1 className="fw-bold">Let's Make A Difference Today</h1>

        <div className="p-3 p-md-5">
          <Container className="py-5">
            <Row className="justify-content-center g-4">

              <Col xs={12} sm={6} lg={4}>

                <Card className="text-center border-0 icon-box p-3 h-100">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Become A Volunteer</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                      <Link to="/volunteer" className="btn btn-warning">
                        Join Us Now
                      </Link>
                    </Card.Body>
                  </div>
                </Card>

              </Col>




              <Col xs={12} sm={6} lg={4}>

                <Card className="text-center border-0 icon-box p-3 h-100">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Donate To Support</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                      <Link to="/donate" className="btn btn-warning">
                        Donate Now
                      </Link>
                    </Card.Body>
                  </div>
                </Card>

              </Col>



              <Col xs={12} sm={6} lg={4}>

                <Card className="text-center border-0 icon-box p-3 h-100">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Become A Partner</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                      <Link to="/partner" className="btn btn-warning">
                        Learn More
                      </Link>
                    </Card.Body>
                  </div>
                </Card>

              </Col>


            </Row>

          </Container>
        </div>
      </div>




      <div className="my-5 container">
        <Row className="align-items-center">

          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <img src="/images/cildren.jpg" alt="Children" className="img-fluid rounded" />
          </Col>


          <Col xs={12} lg={6}>
            <h5 className="text-warning fw-bold">ABOUT US</h5>
            <h1>Our Work Promise To Uphold The Trust Placed</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est
              corrupti atque eligendi fugiat, excepturi, molestias possimus dolorum
              hic architecto cupiditate. Dicta, nobis. Numquam non nulla iste ab
              dolor sunt. Dolorem, fuga sunt! Nostrum ullam minima quae qui dolore ad
              assumenda cupiditate labore earum voluptates. In tempora, nesciunt
              quibusdam voluptatum maxime perferendis dolore natus possimus doloremque
              error voluptates quod fugiat.
            </p>

            <Row className="mt-4">

              <Col xs={12} md={7}>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-warning fw-bold me-2"></i>
                    Empower communities
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-warning fw-bold me-2"></i>
                    Provide essential resources
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-warning fw-bold me-2"></i>
                    Support global health
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-warning fw-bold me-2"></i>
                    Promote sustainable development through donations
                  </li>
                </ul>
              </Col>



              <Col xs={12} md={5}>
                <div className="bg-warning rounded text-center text-light p-4 mt-3 mt-md-0">
                  <h1>28</h1>
                  <h5>YEARS</h5>
                  <p>OF EXPERIENCE</p>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
      </div>



      <div className="my-5 container">

        <Row className="align-items-center mb-4">
          <Col xs={12} lg={8}>
            <h1 className="fw-bold">
              Donate To Charity Campaign <br /> Around The World!
            </h1>
          </Col>
          <Col xs={12} lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Link to="/campaigns" className="btn btn-warning rounded">View All Campaigns</Link>
          </Col>
        </Row>




        <Row className="g-4 justify-content-center text-center">

          <Col xs={12} md={6} lg={5}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="/images/group.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold mb-3">
                  Financial For Poor Families
                </Card.Title>

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
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>

                <Link to="/donate" className="btn btn-warning">Donate Now</Link>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={6} lg={5}>

            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="/images/group2.jpeg" />
              <Card.Body>
                <Card.Title className="fw-bold mb-3">
                  Send Child To School For Education
                </Card.Title>

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
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>

                <Link to="/donate" className="btn btn-warning">Donate Now</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>


      <div className="container text-center text-dark bg-white my-5 py-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={10} lg={8}>
            <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
              We've Funded 12,503 Charity Projects For 25M <br className="d-none d-md-block" />
              people Around The World
            </h1>
            <Link to="/volunteer" className="btn btn-warning">Get Involve</Link>
          </Col>
        </Row>
      </div>






      <div className="text-center text-white bg-dark" style={{ backgroundImage: "url('/images/group.jpg')", backgroundSize: "cover", backgroundPosition: "center",minHeight:"50vh", maxHeight: "700px", padding: "2rem", }}>

        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100 justify-content-center align-items-center">

            <Col xs={12} lg={6} className="mb-4 mb-lg-0 text-start">
              <p className="text-warning fw-bold">CALL TO ACTION</p>
              <h1 className="fw-bold">
                Fundraising For The People And Causes You Care About
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel non
                nemo provident vitae, totam molestiae error nobis voluptate
                voluptates, dolorem porro esse temporibus laboriosam aliquid deleniti
                hic. Quae, in?
              </p>
            </Col>



            <Col xs={12} lg={6}>
              <div className="p-4" style={{ backgroundColor: "rgba(255, 193, 7, 0.2)", borderRadius: "10px", }}>
                <form className="form">
                  <input type="text" className="form-control rounded mb-3" placeholder="Enter Name" required />
                  <input type="email" className="form-control rounded mb-3" placeholder="Enter Email" required />
                  <input type="email" className="form-control rounded mb-3" placeholder="Enter Phone No" required />
                  <button type="submit" className="btn btn-warning w-100"> Contact Us </button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
















    </div>
  );
}

export default Landing;
