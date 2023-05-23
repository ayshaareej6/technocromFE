import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import OurJourneyBar from "./OurJourneyBar";

const OurJourney = () => {
  return (
    <>
      <section
        className="twin-section reversed-twin mt-default"
        id="our-journey"
      >
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Our Journey</h2>
                <p>
                  The CEO of technocrom began the journey alone in 2018 and he
                  build a great team of highly experienced professionals to
                  become one of the most trusted organizations for providing
                  quality assurance and testing survives.
                </p>
                <p>
                  In the beginning, we had only a couple of clients but now we
                  are working with the world’s leading companies. Some of our
                  expertise are:
                </p>

                <div className="link-area justify-content-start">
                  <Link to="/how-we-work" className="default-blue">
                    Explore More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/company/journey.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>
      <section className="section-padding pt-0">
        <Container>
          <Row>
            <Col md={12}>
              <OurJourneyBar />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurJourney;
