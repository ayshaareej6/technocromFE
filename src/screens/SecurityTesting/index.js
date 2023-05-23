import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const SecurityTesting = () => {
  return (
    <>
      <InnerBanner title="Security Testing" />
      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Mitigating Global Cybersecurity Risks</h2>
                <p>
                  The statistics show that cybercrimes cost the global economy
                  over a trillion dollar annually which is roughly one percent
                  of the global GDP. In 2021, it was reported that the
                  cybercrime have risen by 600% globally and criminals
                  compromised the systems and unique users of approximately 67%
                  companies based in the United States.
                  <br />
                  The Global Risks 2015 report, published by the World Economic
                  Forum (WEF), warns “90 percent of companies worldwide
                  recognize they are insufficiently prepared to protect
                  themselves against cyber-attacks.”
                </p>
                <p>
                  The rapid technological developments that enable promising
                  efficiencies for businesses come with a price of unprecedented
                  security threats. Due to the increase in high-profile
                  cyber-attacks in recent times, securing corporate assets
                  (data, networks, systems, and servers) is now a serious
                  concern for many businesses.
                  <br />
                  The smart way to secure a product is to make product security
                  a key factor in both the design and development phases. SQA
                  team’s security testing services ensure secure data transfer
                  between connected systems by verifying end-to-end network
                  security of applications as per different security standards.
                  <br />
                  Our team of security professionals will perform a thorough
                  threat analysis of your network environment, identify gaps and
                  vulnerabilities, and thereby provide a comprehensive security
                  profile of your products. We provide the following major
                  services that would benefit you:
                </p>

                <Row className="lifeAtTechno-boxes justify-content-center">
                  <Col md={6}>
                    <div className="why-techno-detail">
                      <p>Vulnerability assessment</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="why-techno-detail">
                      <p>Penetration testing</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="why-techno-detail">
                      <p>Threat analysis</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="why-techno-detail">
                      <p>Web applications’ security testing</p>
                    </div>
                  </Col>
                </Row>

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
          src={require("../../assets/images/services-inner/security-testing.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default SecurityTesting;
