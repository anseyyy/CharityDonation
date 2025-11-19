import React from 'react'

function AboutUs() {
  return (


    <div className="my-5">
      <Container>
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
              dolor sunt. Dolorem, fuga sunt! Nostrum ullam minima quae qui dolore
              ad assumenda cupiditate labore earum voluptates. In tempora, nesciunt
              quibusdam voluptatum maxime perferendis dolore natus possimus
              doloremque error voluptates quod fugiat.
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
      </Container>
    </div>




  )
}

export default AboutUs