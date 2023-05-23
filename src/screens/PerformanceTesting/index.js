import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const PerformanceTesting = () => {
  return (
    <>
      <InnerBanner title="Performance Testing" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>In Today’s Technology-Driven World</h2>
                <p>
                  In this era of a technology-driven world, where more and more
                  complex technology services are offered, the real
                  differentiators are the robustness and reliability of an
                  application. We help you enrich your products by thoroughly
                  testing the application’s performance. We offer services
                  comprising load and stress testing for reliable web and
                  embedded applications.
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
          src={require("../../assets/images/services-inner/performance-testing.jpg")}
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
                <h3>Standardization of applications</h3>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Realistic evaluation of applications’ performance</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="twin-section reversed-twin">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Performance Testing for Web Applications</h2>
                <p>
                  Under performance testing of web applications, we perform load
                  tests, stress tests and soak tests. Load testing services make
                  sure that your web, server, and desktop applications pass the
                  test of unforeseeable load before hitting the market. Further,
                  soak tests are performed by keeping the application under load
                  for long duration. Stress tests are also a part of performance
                  testing, which focus on testing the application’s behavior
                  when it reaches its breaking point.
                </p>
                <p>
                  We excel in a variety of development tools to help you respond
                  quickly to user requirements with great quality. Our testing
                  services meet the challenges inherent in such applications,
                  including a huge amount of data and analyzing power needed to
                  interpret the data.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/performance-testing1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Performance Testing for Embedded Applications</h2>
                <p>
                  Performance testing of embedded applications has several
                  aspects including: identifying maximum CPU usage, maximum
                  memory usage for standard compliance, etc. We offer
                  performance testing for embedded applications to test the
                  application’s behavior on limits. Our services include stress
                  testing to identify where the application breaks and see if it
                  responds gracefully after crossing the threshold. Among other
                  variations used are soak tests performed by keeping the
                  application under load for longer periods.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/performance-testing2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default PerformanceTesting;
