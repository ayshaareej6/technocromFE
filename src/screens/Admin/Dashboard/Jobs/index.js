import React, { useEffect, useState } from "react";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AxiosInstance from "../../../../helper/AxiosInstance";
import ViewPopup from "../Common/ViewPopup";
import { Col, Row } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import { useNavigate } from "react-router-dom";

const DashBoardJobList = () => {
  const [jobsData, setJobsData] = useState();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");
  const [renderPage, setRenderPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AxiosInstance.get("job/list").then(
      (res) => {
        setJobsData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [renderPage]);

  const viewPopupHandler = (data) => {
    setViewPopupData(data);
    setViewPopup(true);
  };

  const editHandler = (editId) => {
    navigate("/admin/edit-job/" + editId);
  };

  const deleteHandler = (deleteId) => {
    AxiosInstance.post("job/delete/" + deleteId).then(
      (res) => {
        setRenderPage(!renderPage);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const ViewPopupView = () => {
    return (
      <>
        <Row>
          <Col md={12}>
            <div className="section-heading dashboard-inputArea">
              <h2>{viewPopupData.title}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Location</h4>
              <p>{viewPopupData.location}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Posted On</h4>
              <p>{viewPopupData.created_at ? viewPopupData.created_at.split('T')[0] : ""}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Last Date</h4>
              <p>{viewPopupData.last_date}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Job Type</h4>
              <p>{viewPopupData.type}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Job Mode</h4>
              <p>{viewPopupData.mode}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Job Shift</h4>
              <p>{viewPopupData.shift}</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="dashboard-inputArea">
              <h4>Description</h4>
              {viewPopupData ? HTMLReactParser(viewPopupData.desc) : "NA"}
            </div>
          </Col>
        </Row>
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
          <h3>Job List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Job Mode</th>
                <th>Job Shift</th>
                <th>Posted On</th>
                <th>Last Date</th>
                <th width="175">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobsData ? (
                jobsData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.location ? item.location : "NA"}</td>
                      <td>{item.type}</td>
                      <td>{item.mode}</td>
                      <td>{item.shift}</td>
                      <td>{item.created_at ? item.created_at.split('T')[0] : ""}</td>
                      <td>{item.last_date}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => viewPopupHandler(item)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => editHandler(item.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandler(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9}>No Jobs Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoardJobList;
