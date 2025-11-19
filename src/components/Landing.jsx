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


      <div className="d-flex justify-content-center align-items-center text-center vh-100 bg-dark text-white "
        style={{
          backgroundImage: "url('/images/charity.jpg')",
          maxHeight: "650px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col lg={7} className="text-start m-5">
            <div style={{ width: "100%" }}>
              <h5 className="">DONATE TO CONTRIBUTE</h5>
              <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
                Let's Build The Better World{" "}
                <span className="text-warning">Together</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam fugiat, labore accusantium animi sit ea optio quia
                possimus, ut blanditiis esse, accusamus temporibus sint!
                Adipisci id illo nesciunt est magni. Porro tempore quos placeat
                temporibus, veritatis velit quod odit aliquid tempora fugit
                natus beatae obcaecati nulla. Iste id laudantium provident
                nostrum perspiciatis veniam voluptates ab, corporis obcaecati
                dolorum quidem facilis!
              </p>

              <div className="d-flex ">
                <Link to={'/donate'} className="btn btn-warning rounded text-white">
                  {" "}
                  Donate Fund
                </Link>
                <Link to={'/readmore'}
                  className="btn btn-warning ms-5 text-white rounded"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #ffffffff",
                  }}
                >
                  {" "}
                  Read More
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <col-lg-5></col-lg-5>
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

      <div className=" text-center">
        <h5 className="text-warning ">GET INVOLVED</h5>
        <h1 className="fw-bold">Let's Make A Difference Today</h1>

        <div className="p-5">


          <Container className="py-5 d-flex justify-content-center">
            <Row>
              <Col lg={12} className="d-flex  align-items-center gap-4">
                
                <Card style={{ width: "18rem" }} className="text-center border-0 icon-box p-3">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Become A Volunteer</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                      <Link to={'/volunteer'} className="btn btn-warning" variant="warning">Join Us Now</Link>
                    </Card.Body>
                  </div>
                </Card>

                
                <Card style={{ width: "18rem" }} className="text-center border-0 icon-box p-3">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Donate To Support</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                       <Link to={'/donate'} className="btn btn-warning"  variant="warning">Donate Now</Link>
                    </Card.Body>
                  </div>
                </Card>

                
                <Card style={{ width: "18rem" }} className="text-center border-0 icon-box p-3">
                  <div className="inner-border p-3 h-100">
                    <div className="icon-wrapper mt-3">
                      <i className="fa-solid fa-people-group fa-3x text-warning"></i>
                    </div>
                    <Card.Body>
                      <Card.Title className="mt-2">Become A Partner</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur earum, asperiores, soluta quod velit.
                      </Card.Text>
                      <Link className="btn btn-warning" to={'/partner'} variant="warning">Learn More</Link>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div className="d-flex container  justify-content-center m-5">
        <div className=" ms-5" style={{ maxWidth: "50%" }}>
          <div> <img src="/images/cildren.jpg" alt="" /></div>

        </div>
        <div className="ms-3" style={{ maxWidth: "50%" }}>
          <h5 className="text-warning fw-bold">ABOUT US</h5>
          <h1>Our Work Promise To Uphold The Trust Placed</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est corrupti atque eligendi fugiat, excepturi, molestias possimus dolorum hic architecto cupiditate. Dicta, nobis. Numquam non nulla iste ab dolor sunt.
            Dolorem, fuga sunt! Nostrum ullam minima quae qui dolore ad assumenda cupiditate labore earum voluptates. In tempora, nesciunt quibusdam voluptatum maxime perferendis dolore natus possimus doloremque error voluptates quod fugiat.
          </p>

          <div className="m-2 d-flex">
            <div style={{ maxWidth: "60%" }}>
              <table className="table mt-3">
                <tbody>
                  <tr>
                    <td><i class="fa-solid fa-check text-warning fw-bold"></i> Empower communities </td>
                  </tr>
                  <tr>
                    <td><i class="fa-solid fa-check text-warning fw-bold"></i> Provide essential resources </td>
                  </tr>
                  <tr>
                    <td><i class="fa-solid fa-check text-warning fw-bold"></i> Support global health</td>
                  </tr>
                  <tr>
                    <td><i class="fa-solid fa-check text-warning fw-bold"></i> Promote sustainable development through donations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ maxWidth: "40%" }} className="bg-warning rounded">
              <div className="text-center text-light m-5">
                <h1>28</h1> <h5>YEARS</h5> <p>OF EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>


      </div>


      <div className="container ">

        <div className="d-flex justify-content-between" >
          <div style={{ maxWidth: "50%" }} className="fw-bold"><h1>Donate To Charity Campaign <br />Around The World!</h1></div>
          <div style={{ maxWidth: "40%" }}> <Link to={'/campaigns'} className="btn btn-warning rounded mt-5"> View All Campaigns </Link></div>
        </div>

        <div className="m-5 d-flex justify-content-center align-items-center text-center">


          <div className="m-5 icon-box1">
            <Card style={{ width: '25rem' }} className="shadow-sm  ">
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
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to={'/donate'} className="btn btn-warning"  variant="warning">Donate Now</Link>
                  
                </div>
              </Card.Body>
            </Card>
          </div>





          <div className="m-5 icon-box1">
            <Card style={{ width: '25rem' }} className="shadow-sm ">
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
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                   <Link to={'/donate'} className="btn btn-warning"  variant="warning">Donate Now</Link>
                 
                </div>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>


      <div className=" justify-content-center align-items-center text-center mt-2 bg-white text-dark m-5">

        <h1 className="fw-bold mt-5" style={{ fontSize: "50px" }}>We've Funded 12,503 Charity Projects For 25M <br /> people Around The World</h1>
         <Link to={'/volunteer'} className="btn btn-warning"  variant="warning">Get Involve</Link>

      </div>



      <div className="d-flex justify-content-center align-items-center text-center vh-100 bg-dark text-white "
        style={{
          backgroundImage: "url('/images/group.jpg')",
          maxHeight: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        <div className="m-5 d-flex justify-content-between">
          <div style={{ maxWidth: "50%" }}>
            <p className="text-warning fw-bold"> CALL TO ACTION</p>
            <h1 className="fw-bold"> Fundraising For The People And Causes You Care About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel non nemo provident vitae, totam molestiae error nobis voluptate voluptates, dolorem porro esse temporibus laboriosam aliquid deleniti hic. Quae, in?</p>
          </div>
          <div style={{ width: "100%", maxWidth: "600px" }} className="p-4 text-center">
            <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)', padding: '1.5rem', borderRadius: '10px', }}  >
              <form className="form">
                <input type="text" className="form-control rounded mb-3" placeholder="Enter Name" required />
                <input type="email" className="form-control rounded mb-3" placeholder="Enter Email" required />
                <input type="text" className="form-control rounded mb-3" placeholder="Enter Phone No" required />
                <button type="submit" className="btn btn-warning w-100"> ContactUs </button>
              </form>
            </div>
          </div>
        </div>



      </div>
















    </div>
  );
}

export default Landing;
