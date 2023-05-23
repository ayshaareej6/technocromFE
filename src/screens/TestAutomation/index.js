import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const TestAutomation = () => {
  return (
    <>
      <InnerBanner title="Test Automation" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Test Automation</h2>
                <p>
                  Testing is an exhaustive process especially for projects which
                  have frequent changes in the code. Regression tests for such
                  products done manually may become tedious and less cost
                  effective. Allocating testing resources wisely can make huge
                  progress in bringing efficacy to the testing process. The key
                  is to assign valuable human resources for assessing the
                  process while devising specialized automated testing processes
                  for test phases requiring frequent reruns. The time and effort
                  spent in automating test processes pay off in the long run by
                  saving effort, time, and cost by manifolds.
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
          src={require("../../assets/images/services-inner/test-automation.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-heading text-center mb-0">
                <h2>Benefits</h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center lifeAtTechno-boxes text-center">
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Highly customizable solutions</h3>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Maintainable and scalable test environment</h3>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Automation with focus on quality and cost</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Requirements and Application Review</h2>
                <p>
                  During this phase we carry out a thorough requirements and
                  application review. By understanding the application and the
                  requirements of the project, we outline the key requirements
                  of automating the application testing. Moreover, we also
                  conduct a detailed analysis of the project’s scope and
                  expected effort in each phase of the project.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/test-automation1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Test Cases Preparation</h2>
                <p>
                  In the second phase, we prepare test cases for the application
                  as per the requirements specification document. Purpose of
                  preparing test cases is to ensure complete test coverage of
                  all requirements mentioned in the requirements specification
                  document.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/test-automation2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Test Scripts Development</h2>
                <p>
                  Once test cases are prepared and the test <b>automation</b>{" "}
                  team knows what has to be automated, we setup the test
                  environment and start scripting the manual test cases. We
                  prepare an <b>automation</b> framework according to the
                  analysis from the first phase.
                </p>
                <p>
                  The <b>automation</b> frameworks can be data driven, keyword
                  driven or hybrid. The key is to select a framework that
                  ensures maintainable and scalable script development.
                </p>
                <p>
                  Another important consideration in selecting a framework is
                  its reporting mechanism. Typically, a framework provides
                  complete test results details for debugging issues and a
                  summary of the test results for non-technical viewers. After
                  the framework is in place, <b>automation</b> of the manual
                  test cases begins. We document any deviations from the manual
                  test cases for future reference and for helping in preparing
                  testing scope for test cycles
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/test-automation3.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Scripts Execution and Results Analysis</h2>
                <p>
                  After completing the development of all test scripts and
                  ensuring their proper execution, we execute test runs to test
                  the application. Then we analyze the test reports generated
                  from the <b>automation</b> framework. During the analyses, we
                  report the identified issues as bugs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/test-automation4.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default TestAutomation;
