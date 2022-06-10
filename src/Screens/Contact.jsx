import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Assets/Styles/Slider.css";
import "../Assets/Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Maps from "../Componentes/Maps";
function Contact() {
  return (
    <>
      <div className="slider ">
        <div className="overlay"></div>
        <Container>
          <p>
            HOME <FontAwesomeIcon icon={faChevronRight} /> CONTACT{" "}
            <FontAwesomeIcon icon={faChevronRight} />
          </p>
          <h1>Contact Us</h1>
        </Container>
      </div>

      {/* <div class="mapouter"><div class="gmap_canvas">
  <iframe width="100%" height="406" id="gmap_canvas" src="https://maps.google.com/maps?q=%20New%20Hav&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

</div></div> */}

      <div className="map">
        <Container>
          <Maps></Maps>
          <div className="contact">
            <h3>Contact us</h3>
            <p>We're open for any suggestion or just to have a chat</p>
            <Row>
              <Col sm={12} md="4" >
                <h6>ADDRESS:</h6>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </Col>
              <Col sm={12} md="4" className='mb-4'>
                {" "}
                <h6>EMAIL:</h6>
                <a href="#">info@yoursite.com</a>
              </Col>
              <Col sm={12} md="4" className='mb-4'>
                <h6>PHONE:</h6>
                <a href="#"> + 1235 2355 98</a>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md="4">
                <Form.Control type="text" placeholder="Name" />
              </Col>

              <Col sm={12} md="4">
                <Form.Control type="email" placeholder="Email" />
              </Col>
              <Col sm={12} md="4">
                <Form.Control type="text" placeholder="Subject" />
              </Col>
            </Row>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Create a massage here"
            />
            <Button type="submit" className="btn">
              Send Massage
            </Button>
           <div className='followUs'>
           <p>Follow us here</p>
            <a href="#">FACEBOOK </a>
            <a href="#"> TWITTER</a>
            <a href="#"> INSTAGRAM</a>
            <a href="#"> DRIBBBLE</a>
           </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
