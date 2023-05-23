import React, { useContext, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../helper/AxiosInstance";
import { MainContext } from "../../context";
import SocialLinks from "../SocialLinks";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const ContactSection = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const website = useRef();
  const message = useRef();
  const captchaRef = useRef();
  const [tokenFilled, setTokenFilled] = useState(true);
  const isMobile = window.innerWidth <= 768;
  const isWeb = !isMobile;

  const context = useContext(MainContext);

  const contactFormSubmit = (e) => {
    e.preventDefault();

    const gcaptcha = captchaRef.current.getValue();

    if (gcaptcha === "") {
      setTokenFilled(false);
      return false;
    } else {
      setTokenFilled(true);
    }

    let formdata = new FormData();

    formdata.append("name", name.current.value);
    formdata.append("email", email.current.value);
    formdata.append("contact", phone.current.value);
    formdata.append("website", website.current.value);
    formdata.append("message", message.current.value);
    formdata.append("gcaptcha", gcaptcha);
    AxiosInstance.post("contact-us/create", formdata).then(
      (res) => {
        console.log(res.data);
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        website.current.value = "";
        message.current.value = "";
        captchaRef.current.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <section className="section-padding">
        <Container>
          <Row className="justify-content-between">
            <Col lg={6}>
              <div className="section-heading">
                <h2>Contact Us</h2>
              </div>
              <div className="contact-form-area">
                <form
                  className="contact-form"
                  onSubmit={(e) => contactFormSubmit(e)}
                >
                  <Row>
                    <Col md={6}>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="contact-input"
                        ref={name}
                        defaultValue={context.state.userData.uname}
                        disabled={context.state.userData.uname ? true : false}
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="contact-input"
                        ref={email}
                        defaultValue={context.state.userData.uemail}
                        disabled={context.state.userData.uemail ? true : false}
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        type="text"
                        placeholder="Enter Your Contact No."
                        className="contact-input"
                        ref={phone}
                        defaultValue={context.state.userData.ucontact}
                        disabled={
                          context.state.userData.ucontact ? true : false
                        }
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        type="text"
                        placeholder="Enter Your Website"
                        className="contact-input"
                        ref={website}
                      />
                    </Col>
                    <Col md={12}>
                      <input
                        placeholder={`Enter Your ${
                          isMobile ? 'Mobile Service' : isWeb ? 'Web Service' : 'General'
                        } Inquiry`} 
                          className="contact-input"
                           disabled
                      />
                    </Col>
                    <Col md={12}>
                      <textarea
                        placeholder="Enter Your Message"
                        className="contact-input"
                        ref={message}
                        required
                      ></textarea>
                    </Col>
                    <Col md={12} className="mt-2">
                      <ReCAPTCHA
                        sitekey="6Lf3RGglAAAAAPA_P00nFFjbsZB7Zj9PpgRaxh0W"
                        ref={captchaRef}
                      />
                    </Col>

                    {!tokenFilled && (
                      <Col md={12}>
                        <div className="alert alert-danger mb-0 mt-2" role="alert">
                          Invalid Captcha
                        </div>
                      </Col>
                    )}

                    <Col md={12}>
                      <button type="submit" className="contact-submit">
                        Submit Now <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </Col>
                    <Col md={12}>
                      <p className="contact-submit-aftertext">
                        You can also write us at{" "}
                        <a href="mailto:info@technocrom.com">
                          info@technocrom.com
                        </a>{" "}
                        or leave us a message on chat.
                      </p>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={5}>
              <div className="section-heading mt-mob-default">
                <h2>Hi! Let’s Talk To Our Company</h2>
                <p>
                  Please feel free to write us about your concerns and our team
                  will get back to you on it. We highly appreciate if you attach
                  the scope document and requirement list along with the
                  message. So that we can look into the details and start a
                  healthy discussion ahead.
                </p>
                <p>
                  You will be contacted within one to two business days and in
                  case you didn’t get any reply from us please feel free to post
                  another comment.
                </p>
              </div>
              <div className="contact-form-ul">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email:{" "}
                    <a href="mailto:info@technocrom.com">info@technocrom.com</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    Phone: <a href="tel:+1 510 993 0316">+1 510 993 0316</a>
                  </li>
                </ul>
              </div>
              <SocialLinks contactPage={true} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;
