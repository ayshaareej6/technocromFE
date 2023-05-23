import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  return (
    <section className="section-padding grey-section">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-heading text-center">
              <h2>Blogs</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <SingleBlog/>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
