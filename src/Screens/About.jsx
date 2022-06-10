import React from 'react'
import '../Assets/Styles/Slider.css';
import {Container}from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Statistics from '../Componentes/Statistics';
import Volunteer from '../Componentes/Volunteer';
import Care from '../Componentes/Care';
function About() {
  return (
    <>
    <div className='slider '> 
    <div className="overlay"></div>
<Container>
<p>
  HOME <FontAwesomeIcon icon={faChevronRight} /> ABOUT US <FontAwesomeIcon icon={faChevronRight} />
</p>
<h1>About Us</h1>
</Container>

    </div>
    <Care></Care>
<Statistics></Statistics>
<Volunteer></Volunteer>

    </>
  )
}

export default About