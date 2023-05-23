import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WhyTechnocrom = () => {
  return (
    <>
      <section className="twin-section reversed-twin mt-default" id="why-technocrom">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Why Technocrom</h2>
                <p>
                  You can rely on technoCrom because we deliver what we commit
                </p>
                <div className="why-techno-detail">
                  <h3>We listen</h3>
                  <p>
                    We believe in discussions! We listen and advise our clients
                    about their projects.
                  </p>
                </div>
                <div className="why-techno-detail">
                  <h3>Experience</h3>
                  <p>
                    As a company, we have been doing business since 2018 and
                    provide web and application development services. We are
                    also providing quality assurance services to our clients and
                    we are taking care of their websites and mobile applications
                    as well.
                  </p>
                </div>
                <div className="why-techno-detail">
                  <h3>Professionalism</h3>
                  <p>
                    We have the best team of professionals who provides services
                    to our clients. All of them are experienced and have great
                    expertise in their domain.
                  </p>
                </div>
                <div className="why-techno-detail">
                  <h3>Passionate</h3>
                  <p>
                    We love nothing more than working on great projects with
                    great clients. We always go the extra mile to provide
                    services to our clients just to make things right for them
                  </p>
                </div>
                <div className="link-area justify-content-start">
                  <Link to="/how-we-work" className="default-blue">
                    Explore More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/company/why.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default WhyTechnocrom;
