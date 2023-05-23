import React, { useContext, useRef, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as WebsiteLogo } from "../../../assets/images/logo.svg";
import { MainContext } from "../../../context";
import AxiosInstance from "../../../helper/AxiosInstance";
import useWindowSize from "../../../helper/WindowWidth";

const AdminLogin = () => {
  const [idPassCorrect, setidPassCorrect] = useState(false);

  const context = useContext(MainContext);

  const windowWidth = useWindowSize();

  const loginEmail = useRef();
  const loginPassword = useRef();

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

  return (
    <>
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={4} md={6}>
              <div className="login-area">
                <div className="login-logo">
                  {windowWidth > 768 ? (
                    <WebsiteLogo />
                  ) : (
                    <img
                      src={require("../../../assets/images/logo.png")}
                      alt="Logo"
                    />
                  )}
                </div>
                <div className="login-feildsArea">
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
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminLogin;
