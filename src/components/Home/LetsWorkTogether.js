import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollDownBtn from "../ScrollDownBtn";

const LetsWorkTogether = () => {
  return (
    <>
      <section className="section-padding pt-50">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center mb-0">
                <img src={require("../../assets/images/Home/worktogether.png")} alt="" className="letsWorkImg"/>
                <h2>Lets Work Together</h2>
              </div>
              <ScrollDownBtn/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LetsWorkTogether;
