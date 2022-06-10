import React from 'react'
import {Container}from 'react-bootstrap';
import '../Assets/Styles/Slider.css';
import Blog from '../Componentes/Blog'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
function OurBlog() {
  return (
    <>
    <div className='slider '> 
    <div className="overlay"></div>
<Container>
<p>
  HOME <FontAwesomeIcon icon={faChevronRight} />  BLOG <FontAwesomeIcon icon={faChevronRight} />
</p>
<h1>Our Blog</h1>
</Container>

    </div>
<Blog></Blog>

    </>
  )
}

export default OurBlog