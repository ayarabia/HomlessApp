import React from 'react'
import {Container,Button,Col,Row} from 'react-bootstrap';
import '../Assets/Styles/Home.css'
import NavBar from '../Layouts/NavBar';
function Header() {
  return (



    <div className='header'>

      <div className='overlay'>

</div>
<Container>
<Row>
<Col className='Info col-lg-6'>
  <p>
Raising Hope</p>
<h1>To the Homeless & Hopeless People</h1>
<Button className='btn'>
Join Us
</Button>
</Col>

</Row>
</Container>




    </div>
  )
}

export default Header