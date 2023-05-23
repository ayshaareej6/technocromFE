import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../../../helper/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorSetting from "../EditorSetting";

const EditCaseStudy = () => {

  const [file, setFile] = useState("");

  const title = useRef();
  const description = useRef();
  const challenge = useRef();
  const solution = useRef();
  const results = useRef();

  const navigate = useNavigate();
  const params = useParams();

  const [caseStudyData, setCaseStudyData] = useState({});

  const setInput = (ref, val) => {
    ref.current.value = val;
  };

  const CaseStudySubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("title", title.current.value);
    formdata.append("desc", description.current.value);
    formdata.append("challenges", challenge.current.value);
    formdata.append("solution", solution.current.value);
    formdata.append("result", results.current.value);
    formdata.append("image", file);

    AxiosInstance.defaults.headers.ContentType = "multipart/form-data";
    AxiosInstance.post("case-study/update/" + params.id, formdata).then(
      (res) => {
        navigate("/admin/case-study-list");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    AxiosInstance.get("case-study/" + params.id).then(
      (res) => {
        setCaseStudyData(res.data.data);
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
          <h3>Update Case Study</h3>
        </div>
        <div className="dashboard-inputArea">
          <form onSubmit={(e) => CaseStudySubmit(e)}>
            <Row>
              <Col md={6}>
                <h4>Title</h4>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="dashboardInput"
                  ref={title}
                  defaultValue={caseStudyData.title}
                  required
                />
              </Col>
              <Col md={6}>
                <h4>Image</h4>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                />
              </Col>
              <Col md={12}>
                <h4>Description</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={caseStudyData.desc}
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
                  defaultValue={caseStudyData.desc}
                />
              </Col>

              <Col md={4}>
                <h4>Challenge</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={caseStudyData.challenges}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      EditorSetting(writer, editor);
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput(challenge, data);
                  }}
                />
                <input
                  type="text"
                  ref={challenge}
                  required
                  className="hidden-input"
                  defaultValue={caseStudyData.challenges}
                />
              </Col>

              <Col md={4}>
                <h4>Solution</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={caseStudyData.solution}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      EditorSetting(writer, editor);
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput(solution, data);
                  }}
                />
                <input
                  type="text"
                  ref={solution}
                  required
                  className="hidden-input"
                  defaultValue={caseStudyData.solution}
                />
              </Col>

              <Col md={4}>
                <h4>Results</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={caseStudyData.result}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      EditorSetting(writer, editor);
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput(results, data);
                  }}
                />
                <input
                  type="text"
                  ref={results}
                  required
                  className="hidden-input"
                  defaultValue={caseStudyData.result}
                />
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Update Case Study <FontAwesomeIcon icon={faAdd} />
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCaseStudy;
