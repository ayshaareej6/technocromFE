import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LoginPopup from "../LoginPopup";
import { MainContext } from "../../context";
import MobileMenu from "./MobileMenu";
import useWindowSize from "../../helper/WindowWidth";
import SearchBar from "../SearchBar";

const Navigation = () => {
  const context = useContext(MainContext);
  const [showMenu, setShowMenu] = useState(false);

  const windowWidth = useWindowSize();

  const showLoginPopup = (e) => {
    e.preventDefault();
    context.setLoginPopup(true);
  };

  const showSearchPopup = (e) => {
    e.preventDefault();
    context.setSearchPopup(true);
  };

  const loginOrNot = context.state.LoginedIn
    ? "dropdown-li small-dropdown-li"
    : null;

  return (
    <>
      <header className="header-area">
        <div className="header">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={2} xs={6}>
                <Link to="/" className="logo">
                  {windowWidth > 768 ? (
                    <WebsiteLogo />
                  ) : (
                    <img
                      src={require("../../assets/images/logo.png")}
                      alt="Logo"
                    />
                  )}
                </Link>
              </Col>

              {windowWidth > 768 ? (
                <>
                  <Col md={9} xs={6}>
                    <ul className="main-menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown-li">
                        <Link to="/about-us">
                          Company
                          <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        <div className="dropdown-area">
                          <Row>
                            <Col md={4}>
                              <div className="dropdown-list">
                                <p>About Us</p>
                                <Row>
                                  <Col md={12}>
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
                                </Row>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="dropdown-list">
                                <p>How We Work</p>
                                <Row>
                                  <Col md={12}>
                                    <ul>
                                      <li>
                                        <Link to="./how-we-work#project-based">
                                          Project Based
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./how-we-work#team-augmentation-model">
                                          Team Augmentation Model
                                        </Link>
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="dropdown-list">
                                <p>Contact</p>
                                <Row>
                                  <Col md={12}>
                                    <ul>
                                      <li>
                                        <Link to="/contact">Contact Us</Link>
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </li>
                      <li className="dropdown-li">
                        <Link to="/services">
                          Services
                          <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        <div className="dropdown-area">
                          <Row>
                            <Col md={6}>
                              <div className="dropdown-list">
                                <p>Quality Assurance</p>
                                <Row>
                                  <Col md={6}>
                                    <ul>
                                      <li>
                                        <Link to="./digital-testing">
                                          Digital Testing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./test-automation">
                                          Test Automation
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./security-testing">
                                          Security Testing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./performance-testing">
                                          Performance Testing
                                        </Link>
                                      </li>
                                    </ul>
                                  </Col>
                                  <Col md={6}>
                                    <ul>
                                      <li>
                                        <Link to="./manual-testing">
                                          Manual Testing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./test-advisory">
                                          Test Advisory
                                        </Link>
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                            <Col md={3}>
                              <div className="dropdown-list">
                                <p>Development</p>
                                <ul>
                                  <li>
                                    <Link to="./web-development">
                                      Web Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="./app-development">
                                      Mobile Development
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </li>
                      <li className="dropdown-li">
                        <Link to="/expertise">
                          Expertise
                          <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        <div className="dropdown-area">
                          <Row>
                            <Col md={12}>
                              <div className="dropdown-list">
                                <p>Expertise</p>
                                <Row>
                                  <Col md={4}>
                                    <ul>
                                      <li>
                                        <Link to="./health-care">
                                          Health Care
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./point-of-sale">
                                          Point Of Sale (POS)
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="./business-intelligence">
                                          Business Intelligence
                                        </Link>
                                      </li>
                                    </ul>
                                  </Col>
                                  <Col md={4}>
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
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </li>
                      <li className="dropdown-li small-dropdown-li">
                        <Link to="/resources">
                          Resources
                          <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        <div className="dropdown-area">
                          <div className="dropdown-list">
                            <ul>
                              <li>
                                <Link to="./case-studies">
                                  Case Studies & Stories
                                </Link>
                              </li>
                              <li>
                                <Link to="./blogs">Blogs</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={1}>
                    <ul className="side-filters-menu">
                      <li className={loginOrNot}>
                        {context.state.LoginedIn ? (
                          <>
                            <a href="login" onClick={(e) => e.preventDefault()}>
                              <FontAwesomeIcon icon={faUser} />
                            </a>
                            <div className="dropdown-area">
                              <div className="dropdown-list">
                                <ul>
                                  <li>
                                    <Link to="/admin">
                                      <p>Logged In As:</p>
                                      {context.state.userData.uname}
                                    </Link>
                                  </li>
                                  <hr />
                                  <li>
                                    <Link
                                      to="/"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        context.SignOut();
                                      }}
                                    >
                                      Log Out
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <a href="login" onClick={(e) => showLoginPopup(e)}>
                              Login
                            </a>
                          </>
                        )}
                      </li>
                      <li>
                        <a href="search" onClick={(e) => showSearchPopup(e)}>
                          <FontAwesomeIcon icon={faSearch} />
                        </a>
                      </li>
                      {/* <li className="language-dropdown-li">
                    <img
                      src={require("../../assets/images/language/us.jpg")}
                      alt=""
                    />
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul className="language-dropdown">
                      <li>
                        <img
                          src={require("../../assets/images/language/us.jpg")}
                          alt=""
                        />
                        EN
                      </li>
                    </ul>
                  </li> */}
                    </ul>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={6} className="d-flex justify-content-end">
                    <button
                      className="mob-menu-btn"
                      onClick={() => setShowMenu(true)}
                    >
                      <FontAwesomeIcon icon={faBars} />
                    </button>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      </header>
      {windowWidth > 768 ? null : (
        <MobileMenu visibility={showMenu} setVisibility={setShowMenu} />
      )}
      <LoginPopup
        visibility={context.state.loginPopup}
        setVisiblity={context.setLoginPopup}
      />
      <SearchBar
        visibility={context.state.searchPopup}
        setVisiblity={context.setSearchPopup}
      />
    </>
  );
};

export default Navigation;
