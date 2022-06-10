import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../Assets/Styles/Navbar.css';
function NavBar() {
  return (
    <div>
<Navbar collapseOnSelect expand="lg"  >
  <Container>
  <Navbar.Brand href="#home">

 


  <span>LOVE</span>  CARE
    <span>CHARITY THEME</span>
 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="me-auto">
    <Link to="/home" className='nav-link'> Home</Link>
    <Link to="/about" className='nav-link'>About</Link>
 
    <Link to="/causesCampaign" className='nav-link'>Causes</Link>
    <Link to="/blog" className='nav-link'>Blog</Link>
    <Link to="/contact" className='nav-link'>Contact</Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



    </div>
  )
}

export default NavBar