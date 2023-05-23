import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CaseStudyCarousel from "./CaseStudyCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CaseStudyText = () => {
  return (
    <>
      <h2>Health Insurance Industry</h2>
      <p>
        HealthInsurance is a financial bridge created between the payer,
        provider, and patient. The producers are providers (clinical business)
        and payers (private government), and the consumers are patients. The
        patient puts in a clinical request; the provider provides the clinical
        facility and the payer is billed for the transaction. The portals are
        used by providers to log services used by patients and payers to view
        and process transactions.
      </p>
    </>
  );
};

const CaseStudy = () => {
  const handleSelected = (event) => {
    let index = event.page.index;
    index = index < 0 ? 0 : index;
    console.log(index);
  };

  return (
    <>
      <section className="section-padding case-study-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>Case Studies & Stories</h2>
                <p>
                  We welcome you to go through our case studies where we
                  performed a comprehensive investigation on a subject and
                  provided a detailed account of the background and overall
                  analysis of any particular incidents that has occurred.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="case-study-carousel">
                <CaseStudyCarousel handleSelected={handleSelected} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center case-study-bottomText">
                <CaseStudyText />
                <div className="link-area">
                  <Link to="/case-studies" className="default-blue">
                    See All Stories <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CaseStudy;
