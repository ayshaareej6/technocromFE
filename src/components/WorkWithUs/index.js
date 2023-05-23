import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleWork from "./SingleWork";

const WorkWithUs = () => {
  return (
    <>
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-heading text-center">
                <h2>Work With Technocrom</h2>
                <p>
                  <i><b>“If you take care of your employees, they will take care of
                  your company”</b></i>
                </p>
                <p>
                  We believe in taking care of our employees and workers so they
                  can love their work and perform their best. While working with
                  us, we offer remote jobs and hourly basis jobs to provide
                  work-life balance. We strongly believe that everyone should
                  remain physically and mentally healthy and in this regard, we
                  provide so many facilities to our permanent employees that
                  include,
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <SingleWork />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WorkWithUs;
