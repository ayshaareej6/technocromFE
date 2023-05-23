import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const DigitalTesting = () => {
  return (
    <>
      <InnerBanner title="Digital Testing" />
      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>
                  End-To-End Services Enablement For Next-Gen Digital
                  Applications
                </h2>
                <h5>Embrace Digital Testing For Your Agile And DevOps</h5>
                <p>
                  Digital technology is changing the world faster than ever, and
                  enterprises are making all efforts to leverage its potential
                  to the fullest. Today’s digital consumers want all the
                  services available to them at the click of a button and
                  enterprises are feeding their ever-growing demands. However,
                  the quality of your applications plays a key role in the end
                  user experience, and even minor glitches can cost you
                  reputation and business loss. Technocrom is a trusted partner
                  for your digital QA needs and ensures your customers get the
                  best experience every time they interact with you in the
                  digital world. With proven experience in mobile & web app
                  testing services and an end-to-end service portfolio,
                  Technocrom can address various challenges like functionality,
                  performance, security, usability, and cross-device
                  compatibility of your applications across the entire digital
                  gamut. We closely work with clients in various methodologies
                  (e.g., Agile, Iterative or DevOps) to offer digital testing
                  services for mobile or website applications and ensure faster
                  time to market for your digital applications/software.
                </p>
                <div className="link-area justify-content-start">
                  <Link to="/services" className="default-blue">
                    Explore More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link to="/contact" className="default-blue">
                    Contact Us <FontAwesomeIcon icon={faPhone} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/digital-testing.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default DigitalTesting;
