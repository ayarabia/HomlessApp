import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter,faFacebookF,faGoogle, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Volunteer() {
  return (
    <div className="volunteer">
      <Container className="text-center">
        <p>MEET OUR VOLUNTEER</p>
        <h2>Our Volunteer</h2>
      </Container>
      <div className="team">
    <div className='staff text-center'>
  <div className="image"><img src={require("../Assets/Images/staff1.webp")} alt="" /></div>
  <h3 >Jason Smith</h3>
  <p>Volunteer</p>
  <div className="social">
  <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faGoogle} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  </div>
  <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
    </div>
    <div  className='staff text-center'>
  <div className="image"><img src={require("../Assets/Images/staff2.webp")} alt="" /></div>
  <h3 >Anne Hayes</h3>
  <p>Volunteer</p>
  <div className="social">
  <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faGoogle} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  </div>
  <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
    </div>
    <div className='staff text-center'>
  <div className="image"><img src={require("../Assets/Images/staff3.webp")} alt="" /></div>
  <h3 >Martha Smith</h3>
  <p>Volunteer</p>
   <div className="social">
  <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faGoogle} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  </div>
  <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
    </div>
    <div  className='staff text-center'>
  <div className="image"><img src={require("../Assets/Images/staff4.webp")} alt="" /></div>
  <h3 >Mike Tyson</h3>
  <p>Volunteer</p>
  <div className="social">
  <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faGoogle} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  </div>
  <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
    </div>
  </div>
    </div>
  );
}

export default Volunteer;
