import React from 'react'
import {Container}from 'react-bootstrap';
import '../Assets/Styles/Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Causes from '../Componentes/Causes';
function CausesCampaign() {
  return (
    <>

    <div className='slider '> 
    <div className="overlay"></div>
<Container>
<p>
  HOME <FontAwesomeIcon icon={faChevronRight} /> CAUSES <FontAwesomeIcon icon={faChevronRight} />
</p>
<h1>Causes Campaign</h1>
</Container>

    </div>
<Causes></Causes>


    </>
  )
}

export default CausesCampaign