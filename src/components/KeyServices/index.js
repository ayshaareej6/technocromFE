import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import KeyServiceData from "./keyServiceData";
import SingleKeyService from "./SingleKeyService";

const KeyServices = ({ container = "fluid" }) => {
  const KeyServiceArea = () => {
    return (
      <div className="keyServiceArea">
        <ul className="keyServiceUl">
          {KeyServiceData.map((item) => {
            return (
              <li key={item.key}>
                <SingleKeyService items={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-heading text-center">
              <h2>Our Key Services</h2>
              {container === "default" ? (
                <>
                  <p className="full-width">
                    We, at Technocrom SQA, live and breathe quality. With our
                    commitment to quality of operations and projects, we steer
                    ahead with a clear vision: to transform the concept of
                    quality from a bottleneck to the bottom line for companies.
                    Technocrom’s SQA team comprises of certified resources with
                    expertise in cutting-edge technologies, working as an
                    independent body. The team uses the latest technologies in
                    innovative ways to produce optimum output. With exposure to
                    diverse industry environments and technologies, we add a
                    personal touch in each project that is beyond the academic
                    approach of quality assurance.
                  </p>
                  <p className="full-width">
                    Also, for staying relevant and in-demand for a market is a
                    strategic challenge that our New Product Development
                    services solve for our clients. This is primarily because of
                    our new product development process. Steps involved from
                    ideation to product marketing, and we have a streamlined
                    process to make each step easier and safer for businesses
                    venturing into New Product Development (NPD). We guide our
                    clients through all the twists and turns typical in the
                    industrial NPD journey whether, they are technical,
                    bureaucratic or social.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    We provide all type of quality assurance services. We can do
                    testing for all type of mobile applications and web
                    applications. You can rely on us for the test advisory
                    services and security testing. We can also develop a web and
                    mobile applications for you.
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      {container === "default" ? (
        <Container className="inner-key-services">
          <KeyServiceArea />
        </Container>
      ) : (
        <KeyServiceArea />
      )}
    </section>
  );
};

export default KeyServices;
