import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LifeAtTechnocromCarousel from "./LifeAtTechnocromCarousel";

const LifeAtTechnocrom = () => {
  const handleSelected = (event) => {
    let index = event.page.index;
    index = index < 0 ? 0 : index;
    console.log(index);
  };

  return (
    <>
      <section
        className="section-padding case-study-section life-at-technocrom"
        id="life-at-technocrom"
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="case-study-carousel">
                <LifeAtTechnocromCarousel handleSelected={handleSelected} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center case-study-bottomText">
                <h2>Life At Technocrom</h2>
                <p>
                  To gain success and trust, a culture & few values are
                  mandatory to define and we are one step ahead in defining the
                  norms.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center lifeAtTechno-boxes">
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Care & Respect</h3>
                <p>
                  At technocrom, all the clients get treated with respect. We
                  believe in coexistence with complete harmony and we value
                  diversity of thoughts and individuals.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Excellence</h3>
                <p>
                  We commit to quality outcomes and have a thirst to learn and
                  improve. If something is not sure, we counsel it.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Improvements</h3>
                <p>
                  We strive to continuously improve ourselves; be it our
                  processes, skill set, or customer offerings.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="why-techno-detail">
                <h3>Strategies</h3>
                <p>
                  Our products, services, customer care, and overall strategy is
                  defined by keeping the customers in mind.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LifeAtTechnocrom;
