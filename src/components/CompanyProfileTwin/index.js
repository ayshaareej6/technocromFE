import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyProfileTwin = () => {
  return (
    <>
      <section className="twin-section mt-default" id="company-profile">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Company Profile</h2>
                <p>
                  Technocrom was founded in 2018 and we are serving multiple
                  clients from all around the globe. We are based in Illinois.
                  We are working with fortune 500 companies and serving them for
                  years.
                </p>
                <div className="link-area justify-content-start">
                  <Link to="/how-we-work" className="default-blue">
                    Explore More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link to="/contact" className="default-blue">
                    Contact Us <FontAwesomeIcon icon={faPhone} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/company/company-profile.jpg")}
          alt=""
          className="twin-section-img comapny-profile-img"
        />
      </section>
    </>
  );
};

export default CompanyProfileTwin;
