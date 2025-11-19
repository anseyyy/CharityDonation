import React from 'react';

function ContactUs() {
  return (
    <div className='text-center mt-5'>
        <h1 className='text-warning  fw-bold'>Contact Us</h1>
        <div className="d-flex justify-content-center text-center my-5">
          <div style={{ width: "100%", maxWidth: "600px" }} className="p-4 text-center">
            <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)', padding: '1.5rem', borderRadius: '10px', }}  >
              <form className="form">
                <input type="text" className="form-control rounded mb-3" placeholder="Enter Name"  required />
                <input  type="email" className="form-control rounded mb-3" placeholder="Enter Email"  required />
                <input type="text" className="form-control rounded mb-3" placeholder="Enter Phone No" required /> 
                <button type="submit" className="btn btn-warning w-100">  ContactUs </button>
              </form>
            </div>
          </div>
        </div>
    </div>
   
  );
}

export default ContactUs