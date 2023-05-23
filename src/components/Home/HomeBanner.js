import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../SocialLinks";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <Container className="banner-center">
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="banner-heading">
              <h1>One Stop Solution</h1>
              <p>
                We understand that every business model is different and every
                client has different requirements but we serve the same to
                everyone and that is <b>trust, honesty, quality, and success.</b>
              </p>
              <div className="link-area">
                <Link to="/contact" className="default-link">
                  Get In Touch +
                </Link>
                <Link to="/" className="play-link">
                  <FontAwesomeIcon icon={faPlay} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <SocialLinks absoluteLinks={true} />
    </section>
  );
};

export default HomeBanner;
