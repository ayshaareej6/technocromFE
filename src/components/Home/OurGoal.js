import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import useWindowSize from "../../helper/WindowWidth";

const OurGoal = () => {
  const windowWidth = useWindowSize();
  return (
    <>
      <section className="section-padding ourGoal-section">
        {windowWidth > 768 ? (
          <div className="reveal-img-holder">
            <div className="custom-panel firstPanel">
              <img
                src={require("../../assets/images/reveal-img.png")}
                alt=""
                className="reveal-img"
              />
              <div className="firstPanel-textarea">
                <div className="section-heading text-center">
                  <h2>Lets Work Together</h2>
                  <p>Please get to know us</p>
                </div>
                <div className="scrollDownBtn"></div>
              </div>
            </div>
            <div className="custom-panel secondPanel">
              <img
                src={require("../../assets/images/Home/our-goal.jpg")}
                alt=""
                className="reveal-bg"
              />
              <div className="secondPanel-textarea">
                <Container>
                  <Row className="justify-content-center">
                    <Col md={9}>
                      <div className="ourGoalArea">
                        <p>
                          Our mission is to create sustainable value for our
                          customers, by challenging the status quo and bringing
                          innovative ideas and technologies to address their QA,
                          Testing and Development needs. We are technology
                          agnostic so we can stay focused on solving the
                          client’s specific needs. Our customer’s delight,
                          powers our success and exceeding customer expectations
                          is our belief.
                        </p>
                        {/* <div className="ourGoalDetail">
                          <h4>Martha Nielsen</h4>
                          <p>CEO & Founder</p>
                          <ul className="ourGoal-Links">
                            <li>
                              <a href="#twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                              </a>
                            </li>
                            <li>
                              <a href="#linkedin">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="section-padding second-mob-section about-bg-area">
              <Container>
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
              </Container>
            </div>
            <div className="section-padding first-mob-sec">
              <img src={require("../../assets/images/logo-shape.png")} alt="" />
              <div className="section-heading text-center mb-0">
                <h2>Lets Work Together</h2>
              </div>
              <div className="scrollDownBtn"></div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default OurGoal;
