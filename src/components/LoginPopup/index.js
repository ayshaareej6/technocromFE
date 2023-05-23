import React, { useContext, useRef, useState } from "react";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as WebsiteLogo } from "../../assets/images/logo.svg";
import AxiosInstance from "../../helper/AxiosInstance";
import { MainContext } from "../../context";
import useWindowSize from "../../helper/WindowWidth";

const LoginPopup = ({ visibility, setVisiblity }) => {
  const popupBgClass = visibility ? "loginPopup-bg show-this" : "loginPopup-bg";
  const popupClass = visibility ? "loginPopup show-this" : "loginPopup";

  const windowWidth = useWindowSize();

  const [ShowSignup, setShowSignup] = useState(false);
  const [idPassCorrect, setidPassCorrect] = useState(false);

  const signupName = useRef();
  const signupEmail = useRef();
  const signupPhone = useRef();
  const signupPassword = useRef();

  const loginEmail = useRef();
  const loginPassword = useRef();

  const context = useContext(MainContext);

  const popupHandler = (e) => {
    e.preventDefault();
    setShowSignup(!ShowSignup);
  };

  const signUpFormSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", signupName.current.value);
    formdata.append("email", signupEmail.current.value);
    formdata.append("contact", signupPhone.current.value);
    formdata.append("password", signupPassword.current.value);
    AxiosInstance.post("auth/register", formdata).then(
      (res) => {
        popupHandler(e);
        setVisiblity(false);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const LoginFormSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("email", loginEmail.current.value);
    formdata.append("password", loginPassword.current.value);
    AxiosInstance.post("auth/login", formdata)
      .then(
        (res) => {
          let sessionData = {
            token: res.data.token,
            uname: res.data.name,
            uemail: res.data.email,
            userType: res.data.userType,
            uid: res.data.id,
            ucontact: res.data.contact,
          };
          setVisiblity(false);
          sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
          setidPassCorrect(false);
        },
        (err) => {
          console.log(err);
          setidPassCorrect(true);
        }
      )
      .then(() => {
        context.CheckLogin();
      });
  };

  const LoginForm = () => {
    return (
      <form onSubmit={(e) => LoginFormSubmit(e)}>
        <Row>
          {idPassCorrect ? (
            <Col md={12} className="text-center">
              <p className="invalid">Invalid Id or Password</p>
            </Col>
          ) : null}

          <Col md={12}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="contact-input"
              ref={loginEmail}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12}>
            <input
              type="password"
              placeholder="Enter password"
              className="contact-input"
              ref={loginPassword}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12} className="text-center">
            <button type="submit" className="contact-submit">
              Login <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Col>
          <Col md={12} className="text-center">
            <p>
              Not A User Yet{" "}
              <a href="signup" onClick={(e) => popupHandler(e)}>
                Sign Up Now!
              </a>
            </p>
          </Col>
        </Row>
      </form>
    );
  };

  const SignupForm = () => {
    return (
      <form onSubmit={(e) => signUpFormSubmit(e)}>
        <Row>
          <Col md={12}>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="contact-input"
              ref={signupName}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="contact-input"
              ref={signupEmail}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12}>
            <input
              type="text"
              placeholder="Enter Phone No."
              className="contact-input"
              ref={signupPhone}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12}>
            <input
              type="password"
              placeholder="Enter password"
              className="contact-input"
              ref={signupPassword}
              autoComplete="on"
              required
            />
          </Col>
          <Col md={12} className="text-center">
            <button type="submit" className="contact-submit">
              Sign Up <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Col>
          <Col md={12} className="text-center">
            <p>
              Already A User{" "}
              <a href="login" onClick={(e) => popupHandler(e)}>
                Login Now!
              </a>
            </p>
          </Col>
        </Row>
      </form>
    );
  };

  return (
    <>
      <div className={popupBgClass}></div>
      <div className={popupClass}>
        <span className="popupCross" onClick={() => setVisiblity(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="login-area">
          <div className="login-logo">
            {windowWidth > 768 ? (
              <WebsiteLogo />
            ) : (
              <img src={require("../../assets/images/logo.png")} alt="Logo" />
            )}
          </div>
          <div className="login-feildsArea">
            {ShowSignup ? <SignupForm /> : <LoginForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
