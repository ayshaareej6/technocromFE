import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const AppDevelopment = () => {
  return (
    <>
      <InnerBanner title="App Development" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Mobile Applications</h2>
                <p>
                  Technocrom mobile applications provide a wide coverage for
                  enterprise, consumer-centric, and industrial mobility needs.
                  Our full-spectrum services include native (built on iOS,
                  Android, Windows, WinCE), hybrid, and web mobile apps
                  development. Our customized services balance the security,
                  functionality, and user experience requirements according to
                  each client’s expectations.
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
          src={require("../../assets/images/services-inner/mobile-app.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Access Control Solutions</h2>
                <p>
                  Technocrom’s mobile ID apps for access control bring dual
                  benefits to the enterprise bottom line: increased security
                  minimizes losses and ease of access for authorized personnel
                  increase the productive time of employees. The mobile ID app
                  can also be integrated with personnel’s performance reports or
                  other time management software for an integrated
                  accountability solution.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/mobile-app1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Productivity Solutions</h2>
                <p>
                  You may rely on Technocrom for customizing a holistic
                  productivity suite of apps for tracking and enhancing your
                  team’s performance. Technocrom’s mobile productivity solutions
                  such as requirements management, document management, and
                  application life cycle management bring unprecedented ease to
                  business management. These productivity apps streamline data
                  generation, integration, and analysis. The authentic data
                  reveals new expansion and improvement opportunities that are
                  critical in making informed strategic decisions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/mobile-app2.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Integrated IoT Applications for Productivity</h2>
                <p>
                  The mobile interface of connected IoT applications is critical
                  for providing global access to IoT apps. Technocrom offers
                  modular services that you may avail to either engage us in
                  building an IoT app from scratch or to develop a mobile
                  interface for an existing IoT app.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/mobile-app3.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Customer-Centric Mobile Apps</h2>
                <p>
                  Technocrom’s customer-centric mobile apps grasp the audience’s
                  attention with genuine concepts, engaging aesthetics, and
                  seamless cross-platform experience. Our mobile apps
                  development teams take advantage of having experts of VR, 3D
                  designers, and unity game developers to increase the
                  audience’s engagement.
                </p>
                <p>
                  Our portfolio of customer-centric mobile apps serves diverse
                  audiences. Following are some of the themes and categories of
                  our mobile apps:
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/mobile-app4.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default AppDevelopment;
