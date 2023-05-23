import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../helper/AxiosInstance";

const CaseStudyInner = () => {
  let { postdata } = useParams();

  const [caseStudy, setCaseStudy] = useState("");

  useEffect(() => {
    AxiosInstance.get("public/case-study/" + postdata).then(
      (res) => {
        setCaseStudy(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [postdata]);

  return (
    <>
      <section className="section-padding">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading">
                <h2>{caseStudy.title}</h2>
                {caseStudy ? HTMLReactParser(caseStudy.desc) : null}
              </div>
            </Col>
          </Row>
          <Row className="lifeAtTechno-boxes">
            <Col md={4}>
              <div className="why-techno-detail">
                <h3>Challenge</h3>
                {caseStudy ? HTMLReactParser(caseStudy.challenges) : null}
              </div>
            </Col>

            <Col md={4}>
              <div className="why-techno-detail">
                <h3>Solution</h3>
                {caseStudy ? HTMLReactParser(caseStudy.solution) : null}
              </div>
            </Col>

            <Col md={4}>
              <div className="why-techno-detail">
                <h3>Results</h3>
                {caseStudy ? HTMLReactParser(caseStudy.result) : null}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CaseStudyInner;
