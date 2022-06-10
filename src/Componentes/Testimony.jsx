import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
const options = {
    margin: 20,
    responsiveClass: true,
    // nav: true,
    autoplay: true,
  
   smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
function Testimony() {
  return (
    <div className='testimony'>
        <div className="overlay"></div>
<Container className='text-center'>
    <p>TESTIMONIAL</p>
    <h1>What People Says</h1>
</Container>
<Container>
        <OwlCarousel items={3} className="owl-theme" {...options} loop>
<div className="person">
    <div className='icon'>
    <FontAwesomeIcon icon={faQuoteLeft}  />
    </div>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<div className="info">
    <img src={require("../Assets/Images/person_1.webp")} alt="" />
    <div>
        <h4>
Roger Scott</h4>
<p>Marketing Manager</p>
    </div>
</div>

</div>
<div className="person">
    <div className='icon'>
    <FontAwesomeIcon icon={faQuoteLeft}  />
    </div>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<div className="info">
    <img src={require("../Assets/Images/person_2.webp")} alt="" />
    <div>
        <h4>
Roger Scott</h4>
<p>Marketing Manager</p>
    </div>
</div>

</div>
<div className="person">
    <div className='icon'>
    <FontAwesomeIcon icon={faQuoteLeft}  />
    </div>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<div className="info">
    <img src={require("../Assets/Images/person_3.webp")} alt="" />
    <div>
        <h4>
Roger Scott</h4>
<p>Marketing Manager</p>
    </div>
</div>

</div>
<div className="person">
    <div className='icon'>
    <FontAwesomeIcon icon={faQuoteLeft}  />
    </div>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<div className="info">
    <img src={require("../Assets/Images/person_4.webp")} alt="" />
    <div>
        <h4>
Roger Scott</h4>
<p>Marketing Manager</p>
    </div>
</div>

</div>
        </OwlCarousel>
        </Container>

    </div>
  )
}

export default Testimony
