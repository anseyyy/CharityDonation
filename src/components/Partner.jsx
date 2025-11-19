import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";


function Partner() {
    const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh',background: 'linear-gradient(to right, #fffbe6, #fff3cd)', display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
    
      <Container className="text-center">
        
        
        <h1 className="fw-bold text-warning">Something Meaningful Is Coming Soon</h1>
        <p className="text-muted fs-5">
          We’re working hard to bring you a new experience that empowers giving and community impact.
        </p>
        <Link  to={'/'} variant="warning" className="mt-3 px-4 btn btn-warning">
          Back to Home
        </Link>
      </Container>
    </div>

  )
}

export default Partner