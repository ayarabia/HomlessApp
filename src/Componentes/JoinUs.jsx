import React from 'react'
import { Container,Row,Col ,Form,Button} from 'react-bootstrap'

function JoinUs() {
  return (
    <div className='JoinUs'>
<Container >
    <Row>
        <Col lg={7}   className='headingSection' xs={{ order: 'last' }} md={{ order: 'first' }}>
<p className='text-center'>WELCOME TO LOVECARE CHARITY</p>
<h1 className='text-center'>We Help Thousands of Children to Get Their Education</h1>

<p className='description mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p className='description mb-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<Row >
    <Col className='icon mb-4'>
 
<div>
<img  src={require('../Assets/Images//donation.png')} alt="imm" roundedCircle />

</div>
<h5>Start Donating</h5>
    </Col>
  
    <Col className='icon mb-4'>
 
 <div>
 <img  src={require('../Assets/Images/charity.png')} alt="imm" roundedCircle />
 
 </div>
 <h5>Join Our Community</h5>
     </Col>
     <Col className='icon mb-4'>
 
 <div>
 <img  src={require('../Assets/Images/team.png')} alt="imm" roundedCircle />
 
 </div>
 <h5>Be A Volunteer</h5>
     </Col>
     
</Row>
        </Col>
        <Col lg={5}  className='appointment' xs={{ order: 'first' }} md={{ order: 'last' }}>



<div className='donate'>
<div className="nan">
  <img src={require('../Assets/Images/heart.png')} alt="" />
<div>
<h1>NaN</h1>
<p>FUNDS RAISED BY 1200 PEOPLE</p>
</div>
</div>


<Form>
<p>DONATE NOW</p>
  <h3 className="mb-3">Giving is the greatest act of grace</h3>
  <Form.Group className="mb-3" >
    <Form.Label>Your Full Name</Form.Label>
    <Form.Control type="text" placeholder="Your Full Name" />
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  
  </Form.Group>
  <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">Select Causes</Form.Label>
      <Form.Select id="disabledSelect">
        <option>Food</option>
        <option>Money</option>
      </Form.Select>
    </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Amount to Give</Form.Label>
    <Form.Control type="text" placeholder="Amount to Give" />
  </Form.Group>

    <Form.Check   inline type="radio" label="Paypal" name='card' className="mb-4"/>

    <Form.Check inline type="radio" label="Credit Card" name='card' className="mb-4"/>


    <Form.Check inline type="radio" label="Payoneer" name='card' className="mb-4" />

  <Button type="submit" className="mt-1">
 Donnate Now
  </Button>
</Form>

</div>


 </Col>
    </Row>
</Container>




    </div>
  )
}

export default JoinUs