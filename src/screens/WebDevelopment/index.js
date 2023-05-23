import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerBanner from "../../components/InnerBanner";

const WebDevelopment = () => {
  return (
    <>
      <InnerBanner title="Web Development" />

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Dynamic Web Development Services</h2>
                <p>
                  Technocrom works to present your best face to your target
                  market. This includes designing a web presence that will work
                  seamlessly on desktop and mobile devices. Our sites are
                  user-friendly and easy to manage and work flawlessly with
                  online channels like social media and digital marketing. Our
                  choice of color, font, navigation, readability etc. also helps
                  in retaining the user’s attention for a longer duration.
                </p>
                <div className="link-area justify-content-start">
                  <Link to="/contact" className="default-blue">
                    Contact Us <FontAwesomeIcon icon={faPhone} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development.jpg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Web Content and Content Writing</h2>
                <p>
                  The phrase ‘content is king’ signifies the difference between
                  good and effective content writing. In Technocrom, content has
                  become a central pivot in many design activities including web
                  design. Before generating content, we go through a phase
                  called ‘ideation’. Ideation is where we discuss the approach
                  towards writing a piece and what key points to consider in
                  order to make it a winning article. Content writing involves
                  the skill marketer’s call ‘buyer persona’. This is when the
                  content writer understands their audience and with this
                  mindset, he is able translate their thoughts into words. When
                  this happens, we can not only generate winning content but
                  also a winning product. The result is a win-win situation for
                  your client and your brand, bringing in highly engaged and
                  well-informed visitors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development1.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>UI UX Design Process</h2>
                <p>
                  The last decade has been an important one for the design
                  industry. A lot has changed in visual design with designers
                  becoming more aware of the systematic and logical aspect of
                  design. Web interfaces now use a design process called User
                  Interface Design (UI) which is concerned with the surface look
                  and feel of the overall design. Another interesting addition
                  is User Experience Design (UX) which encompasses the complete
                  experience of using any digital product such as a website,
                  mobile app, catalogue etc. Both the UI and the UX go together
                  and give the designer focus and clarity in creating a product
                  which will retain the customer’s attention for a long time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development2.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Testing and QA</h2>
                <p>
                  With an independent quality assurance department, Technocrom
                  web solutions come with a guarantee of the best quality. Our
                  web designs (whether for websites or web applications) are
                  tested for compatibility, usability, accessibility, and
                  technical functionalities for seamless user experience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development3.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section mt-default">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-heading section-padding">
                <h2>Web Development</h2>
                <p>
                  Once the design is final the website will go through a process
                  of web development. During this process web developer will use
                  code languages, different web tools and platforms to convert
                  the web design into a functional website. Depending upon every
                  client’s individual requirement we select development
                  platforms from a variety of open source options such as
                  WordPress, Drupal, Joomla and DotNetNuke.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development4.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>

      <section className="twin-section reversed-twin mt-default mb-default">
        <Container>
          <Row>
            <Col md={6} className="offset-md-6">
              <div className="section-heading section-padding">
                <h2>Support and Maintenance</h2>
                <p>
                  Building long-term relationships are the mantra of our team.
                  We love keeping our relationship with clients alive even after
                  their website’s launch. We are happy to help with website
                  performance tracking, website expansion, issue tracking,
                  regular maintenance, and anything that comes up after website
                  launch.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={require("../../assets/images/services-inner/web-development5.jpeg")}
          alt=""
          className="twin-section-img"
        />
      </section>
    </>
  );
};

export default WebDevelopment;
