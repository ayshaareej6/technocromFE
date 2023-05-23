import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LocationArea = () => {
  return (
    <>
      <section className="section-padding pb-0">
        <Container>
          <Row>
            <Col lg={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.523506721984!2d36.8198315495795!3d-1.2869367755721195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11747e756f41%3A0x146973898c119b47!2sKenyatta%20International%20Convention%20Centre!5e0!3m2!1sen!2s!4v1668439162406!5m2!1sen!2s"
                frameBorder="0"
                className="locationIframe"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="OurLocation"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LocationArea;
