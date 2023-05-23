import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../../../helper/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorSetting from "../EditorSetting";

const EditJob = () => {
  const title = useRef();
  const location = useRef();
  const type = useRef();
  const mode = useRef();
  const shift = useRef();
  const lastDate = useRef();
  const desc = useRef();

  const setInput = (ref, val) => {
    ref.current.value = val;
  };

  const [jobData, setJobData] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const SubmitHandler = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("title", title.current.value);
    formdata.append("location", location.current.value);
    formdata.append("desc", desc.current.value);
    formdata.append("type", type.current.value);
    formdata.append("shift", shift.current.value);
    formdata.append("mode", mode.current.value);
    formdata.append("last_date", lastDate.current.value);
    AxiosInstance.post("job/update/" + params.id, formdata).then(
      (res) => {
        navigate("/admin/job-list");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    AxiosInstance.get("job/" + params.id).then(
      (res) => {
        setJobData(res.data.data);
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
          <h3>Update Job</h3>
        </div>
        <div className="dashboard-inputArea">
          <form onSubmit={(e) => SubmitHandler(e)}>
            <Row>
              <Col md={12}>
                <h4>Job Title</h4>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  className="dashboardInput"
                  ref={title}
                  defaultValue={jobData.title}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Job Location</h4>
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="dashboardInput"
                  ref={location}
                  defaultValue={jobData.location}
                  required
                />
              </Col>
              <Col md={3}>
                <h4>Job Type</h4>
                <select
                  className="dashboardInput"
                  ref={type}
                  defaultValue={jobData.type}
                >
                  <option disabled value="">
                    Selct Job Type
                  </option>
                  <option value="part-time">Part-time</option>
                  <option value="full-time">Full-time</option>
                  <option value="contract">Contract</option>
                </select>
              </Col>
              <Col md={3}>
                <h4>Job Mode</h4>
                <select
                  className="dashboardInput"
                  ref={mode}
                  defaultValue={jobData.mode}
                >
                  <option disabled value="">
                    Selct Job Mode
                  </option>
                  <option value="remote">Remote</option>
                  <option value="in-house">Inhouse</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </Col>
              <Col md={3}>
                <h4>Job Shift</h4>
                <select
                  className="dashboardInput"
                  ref={shift}
                  defaultValue={jobData.shift}
                >
                  <option disabled value="">
                    Selct Job Shift
                  </option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                </select>
              </Col>
              <Col md={3}>
                <h4>Last Date</h4>
                <input
                  type="date"
                  placeholder="Enter Location"
                  className="dashboardInput"
                  ref={lastDate}
                  defaultValue={jobData.last_date}
                  required
                />
              </Col>
              <Col md={12}>
                <h4>Description</h4>
                <CKEditor
                  editor={ClassicEditor}
                  data={jobData.desc}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      EditorSetting(writer, editor);
                    });
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setInput(desc, data);
                  }}
                />
                <input
                  type="text"
                  ref={desc}
                  defaultValue={jobData.desc}
                  required
                  className="hidden-input"
                />
              </Col>

              <Col md={12} className="text-right">
                <button type="submit" className="contact-submit filled-btn">
                  Update Job <FontAwesomeIcon icon={faAdd} />
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditJob;
