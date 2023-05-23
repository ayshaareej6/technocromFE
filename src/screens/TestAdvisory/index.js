import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const TestAdvisory = () => {
  return (
    <>
      <InnerBanner title="Test Advisory" />
      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Test Advisory</h2>
                <p>
                  The right QA strategy can help you improve the overall product
                  quality and reduce release cycle time enabling faster
                  time-to-market and controlling the rising QA costs.
                  Technocrom’s Test advisory Services provide you with the
                  specialist advice to achieve these objectives and help you
                  move to the next maturity level in QA. We deliver custom
                  solutions that address your current business needs and align
                  with your future aspirations. Using the TMMI Based Assessment,
                  Technocrom will assess your current test organization and map
                  it to the TMMI model. Technocrom will help clients test
                  organization for TMMI certification by identifying gaps and
                  areas of improvement. Based on that, the roadmap will be
                  defined for prioritized items to be implemented.
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
          src={require("../../assets/images/services-inner/test-advisory.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default mb-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Process for Test Advisory</h2>
                <p>
                  We define the goals for the Test Advisory exercise upfront and
                  then perform a holistic assessment across various dimensions
                  of your QA enterprise, i.e. Processes, People and Tools &
                  Technology.
                </p>
                <p>
                  We leverage our extensive QA experience and in-house QA
                  accelerators, along with industry best practices and baselines
                  to come up with the best possible solutions. We assess testing
                  processes, enterprises & tools against best practices,
                  identify gaps in their ability to support business growth,
                  identify improvement areas and come up with recommendations
                  for the enterprise-wide testing processes. We help you develop
                  a roadmap of initiatives that will help align QA strategy with
                  the enterprise goals.
                </p>
                <p>
                  Enhance Your Organization’s Testing Competence by employing
                  our services
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/test-advisory1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default TestAdvisory;
