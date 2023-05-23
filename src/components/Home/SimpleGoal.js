import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SimpleGoal = () => {
  return (
    <>
      <section className="section-padding ourGoal-section">
        <div className="section-padding second-mob-section about-bg-area ourGoal-bg-area">
          <Container>
            <Row className="justify-content-center">
              <Col md={9}>
                <div className="ourGoalArea">
                  <p>
                    Our mission is to create sustainable value for our
                    customers, by challenging the status quo and bringing
                    innovative ideas and technologies to address their QA,
                    Testing and Development needs. We are technology agnostic so
                    we can stay focused on solving the client’s specific needs.
                    Our customer’s delight, powers our success and exceeding
                    customer expectations is our belief.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-padding first-mob-sec text-center">
          <img src={require("../../assets/images/logo-shape.png")} alt="" />
          <div className="section-heading text-center mb-0">
            <h2>Lets Work Together</h2>
          </div>
          <div className="scrollDownBtn"></div>
        </div>
      </section>
    </>
  );
};

export default SimpleGoal;
