import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import NewsLetter from "../NewsLetter";
import { ReactComponent as WebsiteLogo } from "../../assets/images/logo-white.svg";
import useWindowSize from "../../helper/WindowWidth";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  const windowWidth = useWindowSize();

  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <footer className="footer">
        {/* <Container>
          <Row>
            <Col md={12}>
              <NewsLetter />
            </Col>
          </Row>
        </Container> */}
        <div className="footer-top">
          <Container>
            <Row>
              <Col md={12}>
                <div className="footer-top-links">
                  {/* <h5>Services</h5> */}
                  <Row>
                    <Col md={2} className="colforFive">
                      <p>Services</p>
                      <ul>
                        <li>
                          <Link to="./digital-testing">Digital Testing</Link>
                        </li>
                        <li>
                          <Link to="./security-testing">Security Testing</Link>
                        </li>
                        <li>
                          <Link to="./performance-testing">
                            Performance Testing
                          </Link>
                        </li>
                        <li>
                          <Link to="./manual-testing">Manual Testing</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col md={2} className="colforFive">
                      <p className="hideOn-tab">&nbsp;</p>
                      <ul>
                        <li>
                          <Link to="./test-automation">Test Automation</Link>
                        </li>
                        <li>
                          <Link to="./test-advisory">Test Advisory</Link>
                        </li>
                        <li>
                          <Link to="./web-development">Web Development</Link>
                        </li>
                        <li>
                          <Link to="./app-development">Mobile Development</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col md={2} className="colforFive">
                      <p>Expertise</p>
                      <ul>
                        <li>
                          <Link to="./health-care">Health Care</Link>
                        </li>
                        <li>
                          <Link to="./point-of-sale">Point Of Sale (POS)</Link>
                        </li>
                        <li>
                          <Link to="./business-intelligence">Business Intelligence</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col md={2} className="colforFive">
                      <p className="hideOn-tab">&nbsp;</p>
                      <ul>
                        <li>
                          <Link to="./banking">Banking</Link>
                        </li>
                        <li>
                          <Link to="./ecommerce">Ecommerce</Link>
                        </li>
                        <li>
                          <Link to="./gaming-apps">
                            Gaming Apps
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <Col md={4} className="colforFive">
                      <p>Work Model & Facts</p>
                      <ul>
                        <li>
                          <Link to="./how-we-work#project-based">
                            Project Based
                          </Link>
                        </li>
                        <li>
                          <Link to="./how-we-work#managed">
                            Team Augmentation Model
                          </Link>
                        </li>
                        <li>
                          <Link to="./resources#case-study">
                            Case Studies & Stories
                          </Link>
                        </li>
                        <li>
                          <Link to="./resources#blogs">Blogs</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col md={12}>
                <div className="footer-top-links">
                  <Row>
                    <Col md={6} className="colforFive">
                      <h5>About Us</h5>
                      <Row>
                        <Col className="colforFive" md={4}>
                          <ul>
                            <li>
                              <Link to="./about-us#company-profile">
                                Company Profile
                              </Link>
                            </li>
                            <li>
                              <Link to="./about-us#our-journey">
                                Our Journey
                              </Link>
                            </li>
                            <li>
                              <Link to="./about-us#mission-vision">
                                Mission Vision
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col className="colforFive" md={4}>
                          <ul>
                            <li>
                              <Link to="./about-us#why-technocrom">
                                Why Technocrom
                              </Link>
                            </li>
                            <li>
                              <Link to="./about-us#life-at-technocrom">
                                Life At Technocrom
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col className="colforFive" md={4}></Col>
                      </Row>
                    </Col>
                    <Col md={6} className="colforFive">
                      <Row>
                        <Col className="colforFive" md={4}>
                          <h5>How We Work</h5>
                          <ul>
                            <li>
                              <Link to="./how-we-work#project-based">
                                Project Based
                              </Link>
                            </li>
                            <li>
                              <Link to="./how-we-work#managed">
                                Team Augmentation Model
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col className="colforFive" md={4}>
                          <h5>Resources</h5>
                          <ul>
                            <li>
                              <Link to="./resources#case-study">
                                Case Studies & Stories
                              </Link>
                            </li>
                            <li>
                              <Link to="./resources#blogs">Blogs</Link>
                            </li>
                          </ul>
                        </Col>
                        <Col className="colforFive" md={4}>
                          <h5>Contact</h5>
                          <ul>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="./careers">Careers</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row className="align-items-end">
              <Col md={3} xxl={4}>
                <Link to="./">
                  {windowWidth > 768 ? (
                    <WebsiteLogo />
                  ) : (
                    <img
                      src={require("../../assets/images/logo-white.png")}
                      alt="Logo"
                    />
                  )}
                </Link>
                <p>© {year} Technocrom Solutions Corp. All rights reserved</p>
              </Col>
              <Col md={7} xxl={6} className="text-center">
                <ul className="main-menu">
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <a href="/sitemap.xml">Site Map</a>
                  </li>
                  <li>
                    <Link to="./careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <SocialLinks />
              </Col>
              
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
