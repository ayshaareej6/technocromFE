import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const InnerBanner = ({ title, bannerClass = "" }) => {
  let bannerClasses = "inner-banner " + bannerClass;
  return (
    <>
      <section className={bannerClasses}>
        {bannerClass === "" ? (
          <Container className="banner-center">
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="inner-banner-heading">
                  <h1>{title}</h1>
                </div>
              </Col>
            </Row>
          </Container>
        ) : null}
      </section>
    </>
  );
};

export default InnerBanner;
