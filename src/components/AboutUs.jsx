import React from 'react'

function AboutUs() {
  return (
    <div>
        <div className="d-flex container  justify-content-center m-5">
        <div className="" style={{ maxWidth: "50%" }}>
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


    </div>
  )
}

export default AboutUs