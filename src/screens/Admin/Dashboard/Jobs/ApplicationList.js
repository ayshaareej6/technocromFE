import React, { useEffect, useRef, useState } from "react";
import {
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AxiosInstance from "../../../../helper/AxiosInstance";
import ViewPopup from "../Common/ViewPopup";
import { Button, Col, Row } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";

const ApplicationList = () => {
  const [jobsApplicationData, setJobsApplicationData] = useState();
  const [renderPage, setRenderPage] = useState(false);

  const jobStatus = useRef();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");

  const viewPopupHandler = (data) => {
    setViewPopupData(data);
    setViewPopup(true);
  };

  useEffect(() => {
    AxiosInstance.get("job-application/list").then(
      (res) => {
        setJobsApplicationData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [renderPage]);

  const jobStatusPost = (e, jobId) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("job_status", jobStatus.current.value);

    AxiosInstance.post(`job-application/${jobId}/status`, formdata).then(
      (res) => {
        setRenderPage(!renderPage);
        setViewPopup(false);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const ViewPopupView = () => {
    return (
      <>
        {viewPopupData ? (
          <>
            <Row>
              <Col md={12}>
                <div className="section-heading dashboard-inputArea">
                  <h2>Applicant Details</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="dashboard-inputArea">
                  <h4>Name</h4>
                  <p>{viewPopupData.applicant.name}</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="dashboard-inputArea">
                  <h4>Email</h4>
                  <p>
                    <a href={"mailto:" + viewPopupData.applicant.email}>
                      {viewPopupData.applicant.email}
                    </a>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="dashboard-inputArea">
                  <h4>Phone</h4>
                  <p>
                    <a href={"tel:" + viewPopupData.applicant.contact}>
                      {viewPopupData.applicant.contact}
                    </a>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="dashboard-inputArea">
                  <h4>Resume/CV</h4>
                  <button
                    className="btn btn-primary"
                    onClick={() => window.open(viewPopupData.cv)}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </Col>
            </Row>
            <form onSubmit={(e) => jobStatusPost(e, viewPopupData.id)}>
              <Row>
                <Col md={6} lg={4}>
                  <div className="dashboard-inputArea">
                    <h4>Job Status</h4>
                    <select
                      className="dashboardInput"
                      ref={jobStatus}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Selct Job Mode
                      </option>
                      <option value="pending">Pending</option>
                      <option value="onhold">Onhold</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </Col>
                <Col md={6} lg={4}>
                  <div className="dashboard-inputArea">
                    <h4>&nbsp;</h4>
                    <Button type="submit" className="popup-button">
                      Update
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
            <Row>
              <Col md={12}>
                <div className="section-heading dashboard-inputArea">
                  <h2>Applied For</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="dashboard-inputArea">
                  <h4>Job Title</h4>
                  <p>{viewPopupData.job?.title}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Location</h4>
                  <p>{viewPopupData.job?.location}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Posted On</h4>
                  <p>
                    {viewPopupData.job?.created_at
                      ? viewPopupData.job?.created_at.split("T")[0]
                      : null}
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Last Date</h4>
                  <p>{viewPopupData.job?.last_date}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Job Type</h4>
                  <p>{viewPopupData.job?.type}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Job Mode</h4>
                  <p>{viewPopupData.job?.mode}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="dashboard-inputArea">
                  <h4>Job Shift</h4>
                  <p>{viewPopupData.job?.shift}</p>
                </div>
              </Col>
              <Col md={12}>
                <div className="dashboard-inputArea">
                  <h4>Description</h4>
                  {viewPopupData.job
                    ? HTMLReactParser(viewPopupData.job?.desc)
                    : "NA"}
                </div>
              </Col>
            </Row>
          </>
        ) : null}
      </>
    );
  };

  return (
    <>
      <ViewPopup
        visibility={viewPopup}
        setVisiblity={setViewPopup}
        feilds={<ViewPopupView />}
      />
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h3>Job Application List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th>Applicant Name</th>
                <th>Job Title</th>
                <th>Applied On</th>
                <th>Resume</th>
                <th>Email</th>
                <th>Contact</th>
                <th width="125">Status</th>
                <th width="125">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplicationData ? (
                jobsApplicationData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.applicant.name}</td>
                    <td>{item.job?.title}</td>
                    <td>
                      {item.created_at ? item.created_at.split("T")[0] : null}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => window.open(item.cv)}
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </td>
                    <td>
                      <a href={"mailto:" + item.applicant.email}>
                        {item.applicant.email}
                      </a>
                    </td>
                    <td>
                      <a href={"tel:" + item.applicant.contact}>
                        {item.applicant.contact}
                      </a>
                    </td>
                    <td>
                      <span className={item.job_status + "-badge table-badge"}>
                        {item.job_status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => viewPopupHandler(item)}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9}>No Jobs Application Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ApplicationList;
