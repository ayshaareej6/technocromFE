import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../../../helper/AxiosInstance";
import ViewPopup from "../Common/ViewPopup";

const BlogsList = () => {
  const [BlogsData, setBlogsData] = useState();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");
  const [renderPage, setRenderPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AxiosInstance.get("blog/list").then(
      (res) => {
        setBlogsData(res.data.data);
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
    navigate("/admin/edit-blog/" + editId);
  };

  const deleteHandler = (deleteId) => {
    AxiosInstance.post("blog/delete/" + deleteId).then(
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
              <h2>{viewPopupData?.title}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Category</h4>
              <p>{viewPopupData?.category?.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Tags</h4>
              <p className="tags-area">
                {viewPopupData
                  ? viewPopupData?.tags.split(",").map((item, index) => (
                      <span key={index} className="tags-badge">
                        {item}
                      </span>
                    ))
                  : "NA"}
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Slug</h4>
              <p>{viewPopupData?.slug}</p>
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
          <h3>Blogs List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th width="225">Title</th>
                <th>Description</th>
                <th>Category</th>
                <th width="175">Tags</th>
                <th width="100">Posted On</th>
                <th width="175">Action</th>
              </tr>
            </thead>
            <tbody>
              {BlogsData ? (
                BlogsData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td className="text-left">
                      <span className="small-text-holder">
                        {item ? HTMLReactParser(item.desc) : "NA"}
                      </span>
                    </td>
                    <td>{item.category.name}</td>
                    <td>
                      <div className="tags-area">
                        {item?.tags?.split(",").map((item, index) => (
                          <span key={index} className="tags-badge">
                            {item}
                          </span>
                        ))}
                      </div>
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
                        onClick={() => editHandler(item.slug)}
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
                  <td colSpan={7}>No Blogs Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
