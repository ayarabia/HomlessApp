import React from 'react'
import {Container} from 'react-bootstrap';
import '../Assets/Styles/Home.css'
import CountUp from 'react-countup';
function Statistics() {
  return (
    <div className='statistics'>
<div className="overlay"></div>
<Container className='text-center'>
<p>GREAT REVIEWS FOR OUR SERVICES</p>
<h1>Technical Statistics</h1>

  <div className='servicesGrid'>
    <div className='services '>
   <img src={require('../Assets/Images/heart (1).png')} alt="" />
   <h2>
     $<CountUp end={60} />M
  
   </h2>
   <p>FUND RAISED</p>
    </div>
    <div className='services'>
    <img src={require('../Assets/Images/team.png')} alt="" />
   <h2><CountUp end={9} />,<CountUp end={200} /></h2>
   <p>COMPLETED PROJECTS</p>
    </div>
    <div  className='services'>
    <img src={require('../Assets/Images/donation.png')} alt="" />
   <h2>
   <CountUp end={5} />,<CountUp end={800} />
</h2>
   <p>DONATION</p>
    </div>
    <div  className='services'>
    <img src={require('../Assets/Images/charity.png')} alt="" />
   <h2><CountUp end={2} />,<CountUp end={750} />
</h2>
   <p>VOLUNTEER</p>
    </div>
  </div>

</Container>



    </div>
  )
}

export default Statistics