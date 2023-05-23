import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MissionVision = () => {
  return (
    <>
      <section
        className="section-padding mission-vision-section"
        id="mission-vision"
      >
        <Container className="position-relative">
          <div className="mission-vision-bg"></div>
          <Row className="mv-first">
            <Col md={4}>
              <div className="section-heading">
                <h2>Our Vision</h2>
                <p>
                  Our vision and goal is to embed robust quality assurance
                  practices deeply into the development lifecycle to enable you
                  to reduce cost, time, and effort on testing, year-on-year.
                </p>
                <p>
                  We enable you to optimize your test practices and effectively
                  respond to dynamic market conditions and growing demands. We
                  support you in harnessing industry best practices and
                  accelerators to help you gain agility and competitiveness.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mv-second">
            <Col md={4}>
              <div className="section-heading">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to create sustainable value for our customers,
                  by challenging the status quo and bringing innovative ideas
                  and technologies to address their QA, Testing and Development
                  needs. We are technology agnostic so we can stay focused on
                  solving the client’s specific needs. Our customer’s delight,
                  powers our success and exceeding customer expectations is our
                  belief.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MissionVision;
