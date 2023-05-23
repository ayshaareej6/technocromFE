import {
  faArrowLeft,
  faCaretRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { MainContext } from "../../context";
import SocialLinks from "../SocialLinks";

const SubMenu = ({
  SubMenuVisibility,
  setSubMenuVisibility,
  data,
  hideMenu,
}) => {
  const hideSubMenu = () => {
    setSubMenuVisibility(false);
  };

  return (
    <>
      <div
        className={"mobMenu-area " + (SubMenuVisibility ? "show-menu" : null)}
      >
        <div className="mobMenu-cross" onClick={() => hideSubMenu()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="mobSubMenu">{data}</div>
      </div>
    </>
  );
};

const MobileMenu = ({ visibility, setVisibility }) => {
  const [SubMenuVisibility, setSubMenuVisibility] = useState(false);
  const [SubMenuData, setSubMenuData] = useState();

  const context = useContext(MainContext);

  const HideMenu = () => {
    setVisibility(false);
    setSubMenuVisibility(false);
  };

  const showLoginPopup = (e) => {
    e.preventDefault();
    context.setLoginPopup(true);
  };

  const CompanySubMenu = () => {
    return (
      <Row>
        <Col sm={12}>
          <div className="dropdown-list">
            <p>About Us</p>
            <ul>
              <li>
                <Link
                  to="./about-us#company-profile"
                  onClick={() => HideMenu()}
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="./about-us#our-journey" onClick={() => HideMenu()}>
                  Our Journey
                </Link>
              </li>
              <li>
                <Link to="./about-us#mission-vision" onClick={() => HideMenu()}>
                  Mission Vision
                </Link>
              </li>
              <li>
                <Link to="./about-us#why-technocrom" onClick={() => HideMenu()}>
                  Why Technocrom
                </Link>
              </li>
              <li>
                <Link
                  to="./about-us#life-at-technocrom"
                  onClick={() => HideMenu()}
                >
                  Life At Technocrom
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12}>
          <div className="dropdown-list">
            <p>How We Work</p>

            <ul>
              <li>
                <Link
                  to="./how-we-work#project-based"
                  onClick={() => HideMenu()}
                >
                  Project Based
                </Link>
              </li>

              <li>
                <Link
                  to="./how-we-work#team-augmentation-model"
                  onClick={() => HideMenu()}
                >
                  Team Augmentation Model
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12}>
          <div className="dropdown-list">
            <p>Contact</p>
            <ul>
              <li>
                <Link to="/contact" onClick={() => HideMenu()}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    );
  };

  const ServiceSubMenu = () => {
    return (
      <Row>
        <Col sm={12}>
          <div className="dropdown-list">
            <p>Quality Assurance</p>
            <Row>
              <Col sm={12}>
                <ul>
                  <li>
                    <Link to="./digital-testing" onClick={() => HideMenu()}>
                      Digital Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="./test-automation" onClick={() => HideMenu()}>
                      Test Automation
                    </Link>
                  </li>
                  <li>
                    <Link to="./security-testing" onClick={() => HideMenu()}>
                      Security Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="./performance-testing" onClick={() => HideMenu()}>
                      Performance Testing
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={12}>
                <ul>
                  <li>
                    <Link to="./manual-testing" onClick={() => HideMenu()}>
                      Manual Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="./test-advisory" onClick={() => HideMenu()}>
                      Test Advisory
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12}>
          <div className="dropdown-list">
            <p>Development</p>
            <ul>
              <li>
                <Link to="./web-development" onClick={() => HideMenu()}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="./app-development" onClick={() => HideMenu()}>
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    );
  };

  const ResourceSubMenu = () => {
    return (
      <div className="dropdown-list">
        <p>Resources</p>
        <ul>
          <li>
            <Link to="./case-studies" onClick={() => HideMenu()}>
              Case Studies & Stories
            </Link>
          </li>
          <li>
            <Link to="./blogs" onClick={() => HideMenu()}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const ExpertiseSubMenu = () => {
    return (
      <div className="dropdown-list">
        <p>Expertise</p>
        <ul>
          <li>
            <Link to="./health-care" onClick={() => HideMenu()}>
              Health Care
            </Link>
          </li>
          <li>
            <Link to="./point-of-sale" onClick={() => HideMenu()}>
              Point Of Sale (POS)
            </Link>
          </li>
          <li>
            <Link to="./business-intelligence">Business Intelligence</Link>
          </li>
          <li>
            <Link to="./banking" onClick={() => HideMenu()}>
              Banking
            </Link>
          </li>
          <li>
            <Link to="./ecommerce" onClick={() => HideMenu()}>
              Ecommerce
            </Link>
          </li>
          <li>
            <Link to="./gaming-apps" onClick={() => HideMenu()}>
              Gaming Apps
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const showSubMenu = (SubMenuUi) => {
    setSubMenuVisibility(true);
    setSubMenuData(SubMenuUi);
  };

  return (
    <>
      <div
        className={"mobMenu-bg " + (visibility ? "show-this" : null)}
        onClick={() => HideMenu()}
      ></div>
      <div className={"mobMenu-area " + (visibility ? "show-menu" : null)}>
        <div className="mobMenu-cross" onClick={() => HideMenu()}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="mobMenu-logo">
          <Link to="/" onClick={() => HideMenu()}>
            <img src={require("../../assets/images/logo.png")} alt="Logo" />
          </Link>
        </div>
        <div className="mobileMenu">
          <ul>
            <li>
              <Link to="/" onClick={() => HideMenu()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => HideMenu()}>
                Company
              </Link>
              <span onClick={() => showSubMenu(<CompanySubMenu />)}>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </li>
            <li>
              <Link to="/services" onClick={() => HideMenu()}>
                Services
              </Link>
              <span onClick={() => showSubMenu(<ServiceSubMenu />)}>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </li>
            <li>
              <Link to="/expertise" onClick={() => HideMenu()}>
                Expertise
              </Link>
              <span onClick={() => showSubMenu(<ExpertiseSubMenu />)}>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </li>
            <li>
              <Link to="/resources" onClick={() => HideMenu()}>
                Resources
              </Link>
              <span onClick={() => showSubMenu(<ResourceSubMenu />)}>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </li>
            <li>
              <Link to="/careers" onClick={() => HideMenu()}>
                Careers
              </Link>
            </li>
            <li className="mob-loginbtn">
              {context.state.LoginedIn ? (
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    context.SignOut();
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <a href="login" onClick={(e) => showLoginPopup(e)}>
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
        <SocialLinks />
      </div>
      <SubMenu
        SubMenuVisibility={SubMenuVisibility}
        setSubMenuVisibility={setSubMenuVisibility}
        data={SubMenuData}
        hideMenu={HideMenu}
      />
    </>
  );
};

export default MobileMenu;
