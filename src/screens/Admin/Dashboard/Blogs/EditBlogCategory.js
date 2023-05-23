import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../../../../helper/AxiosInstance";

const EditBlogCategory = () => {
  const [BlogsCatData, setBlogsCatData] = useState();

  const title = useRef();
  const desc = useRef();

  const navigate = useNavigate();

  const params = useParams();

  const CaseStudySubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", title.current.value);
    formdata.append("desc", desc.current.value);

    AxiosInstance.post("blog-category/update/" + params.id, formdata).then(
      (res) => {
        navigate("/admin/blog-category");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    AxiosInstance.get("blog-category/" + params.id).then(
      (res) => {
        setBlogsCatData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [params.id]);

  return (
    <>
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h3>Update Blog Category</h3>
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
                  defaultValue={BlogsCatData?.name}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Category Description</h4>
                <textarea
                  placeholder="Enter Description"
                  className="contact-input mt-0"
                  ref={desc}
                  defaultValue={BlogsCatData?.desc}
                  required
                ></textarea>
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Update Blog Category
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

export default EditBlogCategory;
