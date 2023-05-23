import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Staffing = () => {
  return (
    <>
      <section className="section-padding pb-0">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>&nbsp;</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/engagement/staffing-bg.jpg")}
          alt=""
          className="staffing-bg"
        />
      </section>
    </>
  );
};

export default Staffing;
