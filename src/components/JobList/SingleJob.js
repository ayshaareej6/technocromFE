import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AxiosInstance from "../../helper/AxiosInstance";

const SingleJob = ({ applyPopupHandeler }) => {
  const [JobListData, setJobListData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("public/job/list").then(
      (res) => {
        setJobListData(res.data.data ? res.data.data : []);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      {JobListData.length
        ? JobListData.map((item) => (
            <Col lg={4} key={item.id}>
              <div className="single-job-area">
                <div className="single-job-top">
                  <div className="single-job-detail">
                    <h4>{item.title}</h4>
                    <p>{item.location}</p>
                  </div>
                  <div className="single-job-when">Just open</div>
                </div>
                <div className="single-job-link">
                  <Link to="/" onClick={(e) => applyPopupHandeler(e, item)}>
                    Easy Apply
                  </Link>
                </div>
              </div>
            </Col>
          ))
        : null}
    </>
  );
};

export default SingleJob;
