import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorSetting from "../EditorSetting";
import AxiosInstance from "../../../../helper/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [file, setFile] = useState("");
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [BlogsData, setBlogsData] = useState();
  const [BlogsCat, setBlogsCat] = useState();

  const title = useRef();
  const description = useRef();
  const category = useRef();
  const tags = useRef();

  const navigate = useNavigate();
  const params = useParams();

  const setInput = (ref, val) => {
    ref.current.value = val;
  };

  useEffect(() => {
    AxiosInstance.get("blog-category/list").then(
      (res) => {
        setCategoryTypes(res.data.data);
      },
      (err) => {
        console.log(err);
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
    AxiosInstance.post("blog/update/" + params.id, formdata).then(
      (res) => {
        navigate("/admin/blog-list");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    AxiosInstance.get("blog/" + params.id).then(
      (res) => {
        setBlogsData(res.data.data);
        setBlogsCat(res.data.data.category_id);
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
          <h3>Update Blog</h3>
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
                  defaultValue={BlogsData?.title}
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
                />
              </Col>
              <Col md={6}>
                <h4>Blog Category</h4>
                <select
                  className="dashboardInput"
                  ref={category}
                  value={BlogsCat}
                  onChange={(event) => setBlogsCat(event.target.value)}
                >
                  <option disabled value="">
                    Selct Blog Category
                  </option>
                  {categoryTypes.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
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
                  defaultValue={BlogsData?.tags}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Description</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={BlogsData?.desc}
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
                  defaultValue={BlogsData?.desc}
                />
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Update Blog <FontAwesomeIcon icon={faAdd} />
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
