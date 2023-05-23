import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SimpleAbout = () => {
  return (
    <>
      <section className="section-padding about-section">
        <div className="section-padding second-mob-section about-bg-area">
          <Container>
            <Row>
              <Col xxl={5} lg={6}>
                <div className="section-heading">
                  <h2>Let's Get Familiar</h2>
                  <p>
                    Technocrom was founded in 2018, and we are serving multiple
                    clients from all around the globe. We are based in Illinois,
                    Chicago. We have been working with fortune 500 companies and
                    serving them for years. We have the best team of
                    professionals who provides services to our clients. All of
                    them are experienced and have great expertise in their
                    domain. Technocrom is an independent service provider,
                    providing R&D (including development & QA) and Professional
                    Services. We believe in caring for our employees and workers
                    so they can love their work and perform their best. While
                    working with us, we offer remote jobs and hourly basis jobs
                    to provide work-life balance.
                  </p>
                  <div className="link-area justify-content-start">
                    <Link to="/about-us" className="default-blue">
                      Search And Apply
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default SimpleAbout;
