import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowSize from "../../helper/WindowWidth";

const AboutScroller = () => {
  const cutOutImageRef = useRef(null);
  const imageBgRef = useRef(null);
  const firstPanelRef = useRef(null);

  const windowWidth = useWindowSize();

  return (
    <>
      <section className="section-padding about-section">
        {windowWidth > 768 ? (
          <div className="reveal-img-holder">
            <div className="custom-panel firstPanel" ref={firstPanelRef}>
              <img
                src={require("../../assets/images/reveal-img.png")}
                alt=""
                ref={cutOutImageRef}
                className="reveal-img"
              />
              <div className="firstPanel-textarea">
                <div className="section-heading text-center">
                  <h2>About Us</h2>
                  <p>Please get to know us</p>
                </div>
                <div className="scrollDownBtn"></div>
              </div>
            </div>
            <div className="custom-panel secondPanel">
              <img
                src={require("../../assets/images/About/bg.jpg")}
                alt=""
                ref={imageBgRef}
                className="reveal-bg"
              />
              <div className="secondPanel-textarea">
                <Container>
                  <Row>
                    <Col xxl={5} lg={6}>
                      <div className="section-heading">
                        <h2>Let's Get Familiar</h2>
                        <p>
                          Technocrom was founded in 2018, and we are serving
                          multiple clients from all around the globe. We are
                          based in Illinois, Chicago. We have been working with
                          fortune 500 companies and serving them for years. We
                          have the best team of professionals who provides
                          services to our clients. All of them are experienced
                          and have great expertise in their domain. Technocrom
                          is an independent service provider, providing R&D
                          (including development & QA) and Professional
                          Services. We believe in caring for our employees and
                          workers so they can love their work and perform their
                          best. While working with us, we offer remote jobs and
                          hourly basis jobs to provide work-life balance.
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
            </div>
          </div>
        ) : (
          <>
            <div className="section-padding pt-0 first-mob-sec">
              <img src={require("../../assets/images/logo-shape.png")} alt="" />
              <div className="section-heading text-center mb-0">
                <h2>About Us</h2>
                <p>Please get to know us</p>
              </div>
              <div className="scrollDownBtn"></div>
            </div>

            <div className="section-padding second-mob-section about-bg-area">
              <Container>
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
              </Container>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default AboutScroller;
