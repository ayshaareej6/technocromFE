import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const AdobeManager = () => {
  return (
    <>
      <InnerBanner title="Gaming Apps" />
      <section className="twin-section mt-default mb-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Gaming Apps</h2>
                <p>
                  AEM can be used to build and manage websites, mobile apps, and
                  other digital experiences. It also offers integrations with
                  other Adobe products such as Adobe Analytics, Adobe Target,
                  and Adobe Campaign.
                </p>
                <p>Technocrom provide you all the AEM relevant services.</p>
                <p>
                  There are several benefits of using Adobe Enterprise Manager
                  (AEM) for managing web content and assets:
                </p>

                <Row className="lifeAtTechno-boxes justify-content-center">
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Centralized management:</strong> AEM provides a
                        centralized platform for managing all of your web
                        content and assets, making it easier to keep track of
                        everything in one place.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Flexibility:</strong> AEM is highly customizable
                        and can be tailored to fit the specific needs of your
                        organization.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Personalization:</strong> AEM allows you to
                        create personalized digital experiences for your
                        customers, increasing engagement and conversion rates.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Scalability:</strong> AEM can handle large
                        amounts of content and traffic, making it suitable for
                        organizations of all sizes.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Integration:</strong> AEM integrates with other
                        Adobe products such as Adobe Analytics, Adobe Target,
                        and Adobe Campaign, providing a seamless experience for
                        users.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Mobile optimization:</strong> AEM allows you to
                        create and manage mobile-optimized content and
                        experiences, ensuring that your customers have a great
                        experience regardless of the device they are using.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Multi-language and localization:</strong> AEM
                        allows you to create, manage and deliver multilingual
                        content easily and efficiently.
                      </p>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="why-techno-detail">
                      <p>
                        <strong>Security:</strong> AEM provides various security
                        features to keep your content and assets safe and
                        secure.
                      </p>
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
          src={require("../../assets/images/expertise/aem1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default AdobeManager;
