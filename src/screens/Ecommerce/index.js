import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const Ecommerce = () => {
  return (
    <>
      <InnerBanner title="E-Commerce" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>E-Commerce</h2>
                <p>
                  Go for Global Outreach with Secure B2B E-commerce Websites
                  Technocrom creates robust storefront model websites promising
                  the best commercial presence in the web domain. Our on-going
                  website maintenance will help in running your website running
                  smoothly. Some of the features we work in include user account
                  management, inventory integration, product reviews management,
                  payment options management and secure data transactions. Let
                  us know if you would like to discuss ideas and options
                  regarding your online store.
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
          src={require("../../assets/images/expertise/ecom1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Our Contribution to your business</h2>
                <p>
                  Technocrom is your one stop solution for all your e-commerce,
                  marketing, standards compliant, support and maintenance
                  services and development needs!
                </p>

                <Row className="lifeAtTechno-boxes justify-content-center">
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        All in one E-commerce and web marketing services,
                        including SEO and branding
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Customized solutions to entice your target audiences
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Web standards compliant development, ensuring secure,
                        user-centered solutions
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Affordable support and maintenance services for each
                        project
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Expert designers and developers working as a team to
                        bring about an all-round excellent output
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/expertise/ecom2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Engage Technocrom For</h2>

                <Row className="lifeAtTechno-boxes justify-content-center mt-0">
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>E-Commerce web design and development</p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Configuration and customization of e-commerce platforms
                        to suit your business needs
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>Secure transactions with https protocol integration</p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Transaction support for credit/debit cards (Master and
                        Visa), PayPal, COD, and Skrill
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Clean and user-friendly website interface design to
                        encourage user engagement
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        Effective Search Engine Optimization (SEO) to improve
                        your market outreach
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/expertise/ecom3.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default Ecommerce;
