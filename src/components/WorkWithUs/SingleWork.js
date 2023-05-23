import React from "react";
import { Col } from "react-bootstrap";
import WorkData from "./WorkData";

const SingleWork = () => {
  return (
    <>
      {WorkData.map((item) => (
        <Col lg={4} key={item.key}>
          <div className="single-work-area">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default SingleWork;
