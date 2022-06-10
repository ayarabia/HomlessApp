import React from "react";
import { Container } from "react-bootstrap";
import "../Assets/Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faCalendarAlt,faMap,faPhoneAlt,faPaperPlane,faHeart} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div>
    <div className="footer">
      <Container>
        <div className="box mb-3">
          <a href="#" className="brand">
            <span>LOVE</span>CARE<span>CHARITY THEME</span>
          </a>
          <p className="description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="social">
  <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  <a className="icon" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>

  <a className="icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
  </div>
        </div>
        <div className="box mb-3">
<h4 className="mb-5">Recent Posts</h4>
<div className="recentPosts">
  <div className="image"></div>
  <div className="info">
<div className="comments">
<div>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> FEB. 22, 2021
                  </span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> ADMIN
                  </span>
                </div>
</div>
<h3>
Ecological System Responsible for Green Energy
</h3>
            
               
              </div>

</div>
<div className="recentPosts">
  <div className="image2"></div>
  <div className="info">
<div className="comments">
<div>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> FEB. 22, 2021
                  </span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> ADMIN
                  </span>
                </div>
</div>
<h3>
Ecological System Responsible for Green Energy
</h3>
            
               
              </div>

</div>

        </div>
        <div className="box mb-3">
<h4 className="mb-5">Have a Questions?</h4>
<ul >
  <li>
    <a href="#">
    <span ><FontAwesomeIcon icon={faMap} /></span> 
    <span className="text">	203 Fake St. Mountain View, San Francisco, California, USA</span>
    </a>
  </li>
  <li>
    <a href="#">
    <span >
    <FontAwesomeIcon icon={faPhoneAlt}  />
      </span><span className="text">
      +2 392 3929 210

      </span>
    </a>
  </li>
  <li>
    <a href="#">
<span ><FontAwesomeIcon icon={faPaperPlane} /></span><span className="text">
info@yourdomain.com
</span>

    </a>
  </li>
</ul>

        </div>
      </Container>
    
    </div>
      <div className="copyRight">
      <p>Copyright ©2022 All rights reserved | This template is made with  <FontAwesomeIcon icon={faHeart} /> by Colorlib</p>
   
    </div>
      </div>
  );
}

export default Footer;
