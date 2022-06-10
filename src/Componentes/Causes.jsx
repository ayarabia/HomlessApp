import React from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faSearch} from "@fortawesome/free-solid-svg-icons";
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

function Causes() {
  return (
    <div className="causes">
      <p className="text-center">OUR CAUSES</p>
      <h1 className="text-center mb-5">Our Causes & Help Us</h1>
      <Container>
        <OwlCarousel items={3} className="owl-theme" {...options} loop>
          <Card>
            <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-2.webp")}
    
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div>
          <p className="label">70% <span></span></p>
        <ProgressBar now={70} />
       
              </div>
              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
          <Card>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-4.webp")}
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className="label">70% <span></span></p>
              <ProgressBar now={70} />

              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
          <Card>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-3.jpg")}
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className="label">70% <span></span></p>
              <ProgressBar now={70} />

              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
          <Card>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-1.webp")}
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className="label">70% <span></span></p>
              <ProgressBar now={70} />

              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
          <Card>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-3.jpg")}
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className="label">70% <span></span></p>
              <ProgressBar now={70} />

              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
          <Card>
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
            <Card.Img
              variant="top"
              src={require("../Assets/Images/cause-1.webp")}
            />
            <Card.Body>
              <Button className="btn">Education</Button>
              <Card.Title>Give Food to Homeless Children</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className="label">70% <span></span></p>
              <ProgressBar now={70} />

              <div className="raside-goal">
                <p>
                  {" "}
                  <small className="text-muted"> Raised: </small>{" "}
                  <strong>$9,800</strong>
                </p>
                <p>
                  <small className="text-muted">Goal: </small>{" "}
                  <strong>15,000</strong>
                </p>
              </div>
            </Card.Footer>
          </Card>
        </OwlCarousel>
      </Container>
    </div>
  );
}

export default Causes;
