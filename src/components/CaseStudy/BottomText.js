import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseStudyCarousel from "./CaseStudyCarousel";
import CaseStudyData from "./CaseStudyData";

const CaseStudy = () => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedHeading, setSelectedHeading] = useState("");
  const [selectedDetail, setSelectedDetail] = useState("");

  const handleSelected = (event) => {
    let index = event.page.index;
    index = index < 0 ? 0 : index;
    console.log(index);
    setSelectedIndex(index);
  };

  return (
    <>
      <section className="section-padding case-study-section pb-0">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>Case Studies & Stories</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
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
              <div className="section-heading text-center" style={{position: "relative", zIndex: 100}}>
                <h2>{selectedHeading}</h2>
                <p>{selectedDetail}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CaseStudy;
