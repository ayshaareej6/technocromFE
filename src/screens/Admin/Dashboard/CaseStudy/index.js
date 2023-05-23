import React, { useEffect, useState } from "react";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AxiosInstance from "../../../../helper/AxiosInstance";
import HTMLReactParser from "html-react-parser";
import ViewPopup from "../Common/ViewPopup";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CaseStudyList = () => {
  const [CaseStudyData, setCaseStudyData] = useState();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");
  const [renderPage, setRenderPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AxiosInstance.get("case-study/list").then(
      (res) => {
        setCaseStudyData(res.data.data);
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
    navigate("/admin/edit-case-study/" + editId);
  };

  const deleteHandler = (deleteId) => {
    AxiosInstance.post("case-study/delete/" + deleteId).then(
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
            <div className="section-heading">
              <h2>{viewPopupData.title}</h2>
              {viewPopupData ? HTMLReactParser(viewPopupData.desc) : null}
            </div>
          </Col>
        </Row>
        <Row className="lifeAtTechno-boxes">
          <Col md={4}>
            <div className="why-techno-detail">
              <h3>Challenge</h3>
              {viewPopupData ? HTMLReactParser(viewPopupData.challenges) : null}
            </div>
          </Col>

          <Col md={4}>
            <div className="why-techno-detail">
              <h3>Solution</h3>
              {viewPopupData ? HTMLReactParser(viewPopupData.solution) : null}
            </div>
          </Col>

          <Col md={4}>
            <div className="why-techno-detail">
              <h3>Results</h3>
              {viewPopupData ? HTMLReactParser(viewPopupData.result) : null}
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
          <h3>Case Study List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th width="225">Title</th>
                <th>Description</th>
                <th width="100">Posted On</th>
                <th width="175">Action</th>
              </tr>
            </thead>
            <tbody>
              {CaseStudyData ? (
                CaseStudyData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td className="text-left">
                      <span className="small-text-holder">
                        {HTMLReactParser(item.desc)}
                      </span>
                    </td>
                    <td>{item.created_at.split("T")[0]}</td>
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
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No Case Study Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CaseStudyList;
