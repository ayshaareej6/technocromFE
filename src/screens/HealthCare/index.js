import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const HealthCare = () => {
  return (
    <>
      <InnerBanner title="Health Care" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Health Care Apps and Hospital Information Systems</h2>
                <p>
                  Our team has vast experience in building management systems
                  for the administration of hospitals, clinics, or clinical
                  laboratories. The features of our designed systems include and
                  are not limited to, patient demographics and diagnostic
                  (intelligent) systems, ward and room allocation management,
                  and administration. We have also designed system requirements
                  for a hospital management information system, including
                  finance, cash counters, billing, account payables, personnel
                  management systems, and systems for fund/charity.
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
          src={require("../../assets/images/expertise/healthcare1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Our Contribution</h2>
                <p>
                  Technocrom has developed sophisticated internet/intranet
                  applications for leading insurance, healthcare, and financial
                  services customers. We can build custom applications from
                  scratch using standard tools and languages or tailor the
                  already developed applications to fit more closely to
                  individual customers’ requirements and operations.
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
          src={require("../../assets/images/expertise/healthcare2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Web Dimensions</h2>
                <p>
                  We developed Web Dimensions for the US healthcare industry for
                  the First Report of Injury of workers. It supported different
                  requirements for all 51 US states. The user can report injury
                  and view or print reports using a web browser. We developed
                  the system using Java, XML/XSL, and Servlets technologies.
                  This product is very flexible from a configuration aspect. We
                  used an XML-based markup language to store the configuration
                  of the database, connectivity, input forms, form validation
                  rules, etc. We are developing several tools for this system so
                  that it can be tailored to the specific needs of healthcare
                  providers and/or government agencies.
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
          src={require("../../assets/images/expertise/healthcare3.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default HealthCare;
