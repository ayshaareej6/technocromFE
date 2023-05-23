import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../../../helper/AxiosInstance";

const AddBlogCategory = () => {
  const title = useRef();
  const desc = useRef();

  const navigate = useNavigate();

  const CaseStudySubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", title.current.value);
    formdata.append("desc", desc.current.value);

    AxiosInstance.post("blog-category/create", formdata).then(
      (res) => {
        navigate("/admin/blog-category");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h3>Add Blog Category</h3>
        </div>
        <div className="dashboard-inputArea">
          <form onSubmit={(e) => CaseStudySubmit(e)}>
            <Row>
              <Col md={12}>
                <h4>Category Title</h4>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="dashboardInput"
                  ref={title}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Category Description</h4>
                <textarea
                  placeholder="Enter Description"
                  className="contact-input mt-0"
                  ref={desc}
                  required
                ></textarea>
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Add Blog Category
                  <FontAwesomeIcon icon={faAdd} />
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlogCategory;
