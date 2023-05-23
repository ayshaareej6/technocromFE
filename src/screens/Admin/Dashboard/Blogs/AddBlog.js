import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorSetting from "../EditorSetting";
import AxiosInstance from "../../../../helper/AxiosInstance";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [file, setFile] = useState("");
  const [categoryTypes, setCategoryTypes] = useState([]);

  const title = useRef();
  const description = useRef();
  const category = useRef();
  const tags = useRef();

  const navigate = useNavigate();

  const setInput = (ref, val) => {
    ref.current.value = val;
  };

  useEffect(() => {
    AxiosInstance.get("blog-category/list").then(
      (res) => {
        setCategoryTypes(res.data.data);
      },
      (err) => {
        console.log(err)
      }
    );
  }, []);

  const BlogSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("title", title.current.value);
    formdata.append("desc", description.current.value);
    formdata.append("category_id", category.current.value);
    formdata.append("tags", tags.current.value);
    formdata.append("image", file);

    AxiosInstance.defaults.headers.ContentType = "multipart/form-data";
    AxiosInstance.post("blog/create", formdata).then(
      (res) => {
        navigate("/admin/blog-list");
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
          <h3>Add Blog</h3>
        </div>
        <div className="dashboard-inputArea">
          <form onSubmit={(e) => BlogSubmit(e)}>
            <Row>
              <Col md={6}>
                <h4>Title</h4>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="dashboardInput"
                  ref={title}
                  required
                />
              </Col>
              <Col md={6}>
                <h4>Image</h4>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  required
                />
              </Col>
              <Col md={6}>
                <h4>Blog Category</h4>
                <select
                  className="dashboardInput"
                  ref={category}
                  defaultValue=""
                >
                  <option disabled value="">
                    Selct Blog Category
                  </option>
                  {categoryTypes.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.name}</option>
                  ))}
                  
                </select>
              </Col>
              <Col md={6}>
                <h4>Tags</h4>
                <input
                  type="text"
                  placeholder="Seperate tags by (,)"
                  className="dashboardInput"
                  ref={tags}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Description</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      EditorSetting(writer, editor);
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput(description, data);
                  }}
                />
                <input
                  type="text"
                  ref={description}
                  required
                  className="hidden-input"
                />
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Add Blog <FontAwesomeIcon icon={faAdd} />
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
