import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const ManualTesting = () => {
  return (
    <>
      <InnerBanner title="Manual Testing" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Manual Testing</h2>
                <p>
                  It is the most widely used testing type for determining the
                  quality of an application. As there are various aspects in
                  testing Manuality of an application, the process of Manual
                  testing performed at Technocrom SQA includes multiple testing
                  types depending upon the nature of the application. The
                  process of Manual testing starts with requirements analysis.
                  We devise the test plan based on the requirements analysis.
                  The test plan can include either or both manual and automated
                  testing according to the nature of the application. For stable
                  applications with a moderate level of complexity and a high
                  level of repetitive test requirements, we devise automated
                  testing scripts. The key during this phase is that the Manual
                  requirements of the product are iterated and understood by all
                  stakeholders.
                </p>
                <p>
                  In the second phase, we identify the test scenarios and then
                  write the test cases. The next phase is the regression testing
                  to ensure the quality of application after each fixing. We
                  document all reports generated during various stages of Manual
                  testing through the ‘defect life cycle’ management process.
                  This data enables a deep insight into the reasons of the bugs
                  and improve the quality of application for future development
                  cycles. Embedded and web application’s Manual testing services
                  are two focus areas of our Manual testing services.
                </p>
                <div className="link-area justify-content-start">
                  <Link to="/contact" className="default-blue">
                    Contact Us <FontAwesomeIcon icon={faPhone} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/manual-testing.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Testing Web Applications</h2>
                <p>
                  For web applications the end user’s facility is one of the key
                  considerations. To ensure the web application’s quality from
                  the users’ perspective, we offer following testing services:
                  functionality of web application, usability, and user
                  interface testing.
                </p>
                <p>
                  Functional testing of web applications depends on the
                  applications’ structure. Generally, we perform the tests into
                  two steps: verification of front-end functionality and the
                  verification of back-end functionality. Front-end tests
                  typically include testing the user interface and functionality
                  of different controls. Back-end tests revolve around the
                  verification of web services, databases, XML entries, etc.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/manual-testing1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Testing Mobile Applications</h2>
                <p>
                  The functionality of an application installed on a mobile or
                  tablet is different from PC applications’ functionality.
                  Usually, mobile apps have fewer features and are more
                  performance-oriented, therefore we test the features of mobile
                  applications against the desired behavior. A major part of
                  mobile applications’ functional testing revolves around
                  testing the applications’ performance on the phones or
                  tablets.
                </p>
                <div className="link-area justify-content-start">
                  <Link to="/contact" className="default-blue">
                    Contact Us <FontAwesomeIcon icon={faPhone} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/manual-testing2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default ManualTesting;
