import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate } from 'react-router-dom';


function Footer() {


  return (
    <div className='bg-dark p-1' >
            
            <footer className="text-white py-4 ">

                <div className="container text-center">
                    <h5 className="mb-2">Momentum Catalyst</h5>
                    <p className="mb-2">
                        Momentum Catalyst connects kind-hearted donors with urgent causes, making giving simple and impactful. Every contribution creates a ripple of hope and change..
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-2">
                        <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
                        <a href="#" className="text-white text-decoration-none">Terms of Service</a>
                        <a href="#" className="text-white text-decoration-none">Contact</a>
                    </div>
                    <small>&copy; {new Date().getFullYear()} Momentum Catalyst. All rights reserved.</small>
                </div>
            </footer>
        </div>
  )
}

export default Footer