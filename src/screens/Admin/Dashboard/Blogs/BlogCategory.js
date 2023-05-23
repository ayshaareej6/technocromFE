import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../../../helper/AxiosInstance";
import ViewPopup from "../Common/ViewPopup";

const BlogCategory = () => {
  const [BlogsCatData, setBlogsCatData] = useState();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");
  const [renderPage, setRenderPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AxiosInstance.get("blog-category/list").then(
      (res) => {
        setBlogsCatData(res.data.data);
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
    navigate("/admin/edit-blog-category/" + editId);
  };

  const deleteHandler = (deleteId) => {
    AxiosInstance.post("blog-category/delete/" + deleteId).then(
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
          <Col md={6}>
            <div className="dashboard-inputArea">
              <h4>Category Title</h4>
              <p>{viewPopupData.name}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="dashboard-inputArea">
              <h4>Created At</h4>
              <p>
                {viewPopupData ? viewPopupData.created_at.split("T")[0] : null}
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="dashboard-inputArea">
              <h4>Category Description</h4>
              <p>{viewPopupData.desc}</p>
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
          <h3>Blogs List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th width="225">Name</th>
                <th>Description</th>
                <th width="100">Added On</th>
                <th width="175">Action</th>
              </tr>
            </thead>
            <tbody>
              {BlogsCatData ? (
                BlogsCatData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td className="text-left">
                      <span className="small-text-holder">
                        <p>{item.desc}</p>
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
                  <td colSpan={5}>No Blogs Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BlogCategory;
