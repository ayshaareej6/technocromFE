import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCaseStudy from "./SingleCaseStudy";

const CaseStudyPageSection = () => {
  return (
    <section className="section-padding grey-section">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-heading text-center">
              <h2>Case Studies & Stories</h2>
              <p>
                We welcome you to go through our case studies where we performed
                a comprehensive investigation on a subject and provided a
                detailed account of the background and overall analysis of any
                particular incidents that has occurred.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <SingleCaseStudy />
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudyPageSection;
