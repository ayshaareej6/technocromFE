import React, { useContext, useState } from "react";
import {
  faArrowRight,
  faFileCircleXmark,
  faFilePdf,
  faFileWord,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { MainContext } from "../../context";
import HTMLReactParser from "html-react-parser";
import AxiosInstance from "../../helper/AxiosInstance";

const PostJobApp = ({ visibility, setVisiblity, data }) => {
  const context = useContext(MainContext);

  const [file, setFile] = useState("");
  const [fileExt, setFileExt] = useState("");

  const popupBgClass = visibility
    ? "simplePopup-bg show-this"
    : "simplePopup-bg";
  const popupClass = visibility
    ? "simplePopup jobApply-popup show-this"
    : "simplePopup jobApply-popup";

  const submitHandler = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("job_id", data.id);
    formdata.append("user_id", context.state.userData.uid);
    formdata.append("cv", file);

    AxiosInstance.defaults.headers.ContentType = "multipart/form-data";
    AxiosInstance.post("job/apply", formdata).then(
      (res) => {
        setVisiblity(false);
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className={popupBgClass}></div>
      <div className={popupClass}>
        <span className="popupCross" onClick={() => setVisiblity(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        {data ? (
          <div className="login-area">
            <form onSubmit={(e) => submitHandler(e)}>
              <Row>
                <Col md={12}>
                  <div className="section-heading dashboard-inputArea">
                    <h2>{data.title}</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Location</h4>
                    <p>{data.location}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Posted On</h4>
                    <p>{data.created_at ? data.created_at.split('T')[0] : null}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Last Date</h4>
                    <p>{data.last_date}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Job Type</h4>
                    <p>{data.type}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Job Mode</h4>
                    <p>{data.mode}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="dashboard-inputArea">
                    <h4>Job Shift</h4>
                    <p>{data.shift}</p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="dashboard-inputArea">
                    <h4>Description</h4>
                    {data ? HTMLReactParser(data.desc) : "NA"}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="section-heading dashboard-inputArea">
                    <h2>Apply Now</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="dashboard-inputArea">
                    <h4>Name</h4>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="dashboardInput"
                      defaultValue={context.state.userData.uname}
                      disabled
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="dashboard-inputArea">
                    <h4>Email</h4>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="dashboardInput"
                      defaultValue={context.state.userData.uemail}
                      disabled
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="dashboard-inputArea">
                    <h4>Phone</h4>
                    <input
                      type="text"
                      placeholder="Enter Contact No."
                      className="dashboardInput"
                      defaultValue={context.state.userData.ucontact}
                      disabled={context.state.userData.ucontact ? true : false}
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="dashboard-inputArea">
                    <h4>Resume/CV</h4>
                    <label htmlFor="resumeArea" className="dragndropArea">
                      {file ? (
                        <>
                          {fileExt === "pdf" ? (
                            <FontAwesomeIcon icon={faFilePdf} />
                          ) : null}
                          {fileExt === "docx" || fileExt === "doc" ? (
                            <FontAwesomeIcon icon={faFileWord} />
                          ) : null}
                          {fileExt !== "docx" &&
                          fileExt !== "doc" &&
                          fileExt !== "pdf" ? (
                            <>
                              <FontAwesomeIcon icon={faFileCircleXmark} />
                              <p className="invalid">{fileExt} no supported</p>
                            </>
                          ) : null}

                          <p>{file.name}</p>
                        </>
                      ) : (
                        <>
                          <p>Drag your Resume Or CV here to start uploading</p>
                          <span>
                            <span>OR</span>
                          </span>
                          <div className="contact-submit filled-btn">
                            Browse files
                          </div>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="resumeArea"
                      accept="application/pdf, application/msword, .doc, .docx"
                      onChange={(event) => {
                        setFile(event.target.files[0]);
                        setFileExt(event.target.files[0].name.split(".").pop());
                      }}
                      className="dragndropinput"
                      required
                    />
                  </div>
                </Col>
                <Col md={12} className="text-right">
                  <div className="dashboard-inputArea">
                    <button type="submit" className="contact-submit filled-btn">
                      Apply For Job <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PostJobApp;
