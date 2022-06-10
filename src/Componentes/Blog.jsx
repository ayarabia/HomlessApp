import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCalendarAlt,
  faComment,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
function Blog() {
  return (
    <div className="blog">
      <div className="title text-center">
        <p>OUR BLOG</p>
        <h1>Recent From Blog</h1>
      </div>
      <Container>
        <div className="peapleSay">
          <div className="box">
            <div className="image">
              <img src={require("../Assets/Images/cause-1.webp")} alt="" />
            </div>
            <div className="info text-center">
              <div className="comments">
             
                  <span>
                    <FontAwesomeIcon icon={faUser} /> ADMIN
                  </span>
            
             
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> FEB. 22, 2021
                  </span>
             
          
                  <span className="message">
                    <FontAwesomeIcon icon={faComment} /> COMMENTS
                  </span>
        
              </div>

              <h4>Give Hope to the People Need Most</h4>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <a className="btn" href="#">
                Read More <FontAwesomeIcon icon={faLongArrowAltRight} />
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={require("../Assets/Images/cause-2.webp")} alt="" />
            </div>
            <div className="info text-center">
              <div className="comments">
             
                  <span>
                    <FontAwesomeIcon icon={faUser} /> ADMIN
                  </span>
           
              
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> FEB. 22, 2021
                  </span>
               
            
                  <span className="message">
                    <FontAwesomeIcon icon={faComment} /> COMMENTS
                  </span>
             
              </div>

              <h4>Give Hope to the People Need Most</h4>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <a className="btn" href="#">
                Read More <FontAwesomeIcon icon={faLongArrowAltRight} />
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={require("../Assets/Images/cause-4.webp")} alt="" />
            </div>
            <div className="info text-center">
              <div className="comments">
              
                  <span >
                    <FontAwesomeIcon icon={faUser} /> ADMIN
                  </span>
             
             
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} /> FEB. 22, 2021
                  </span>
              
              
                  <span className="message">
                    <FontAwesomeIcon icon={faComment} /> COMMENTS
                  </span>
               
              </div>

              <h4>Give Hope to the People Need Most</h4>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <a className="btn" href="#">
                Read More <FontAwesomeIcon icon={faLongArrowAltRight} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
